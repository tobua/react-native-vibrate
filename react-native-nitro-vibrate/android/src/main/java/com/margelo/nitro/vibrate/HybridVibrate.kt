package com.margelo.nitro.vibrate

import androidx.annotation.Keep
import com.facebook.proguard.annotations.DoNotStrip
import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import com.margelo.nitro.NitroModules

@Keep
@DoNotStrip
class HybridVibrate: HybridVibrateSpec() {
    override fun vibrate(impact: ImpactStyle): String {
        val context = NitroModules.applicationContext
            ?: return "ReactApplicationContext is null!"

        val vibrator: Vibrator? = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val manager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
            manager?.defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
        }

        if (vibrator == null) {
            return "Vibrator service unavailable"
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val effect = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val predefined = when (impact) {
                    ImpactStyle.LIGHT, ImpactStyle.SOFT -> VibrationEffect.EFFECT_TICK
                    ImpactStyle.MEDIUM, ImpactStyle.RIGID -> VibrationEffect.EFFECT_CLICK
                    ImpactStyle.HEAVY -> VibrationEffect.EFFECT_HEAVY_CLICK
                }
                VibrationEffect.createPredefined(predefined)
            } else {
                val amplitude = when (impact) {
                    ImpactStyle.LIGHT, ImpactStyle.SOFT -> 40
                    ImpactStyle.MEDIUM, ImpactStyle.RIGID -> 100
                    ImpactStyle.HEAVY -> 180
                }
                VibrationEffect.createOneShot(20, amplitude)
            }
            vibrator.vibrate(effect)
        } else {
            @Suppress("DEPRECATION")
            val durationMs = when (impact) {
                ImpactStyle.LIGHT, ImpactStyle.SOFT -> 10L
                ImpactStyle.MEDIUM, ImpactStyle.RIGID -> 20L
                ImpactStyle.HEAVY -> 30L
            }
            @Suppress("DEPRECATION")
            vibrator.vibrate(durationMs)
        }

        return "Vibration triggered with ${impact.name.lowercase()} impact"
    }
}
