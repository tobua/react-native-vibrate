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
class HybridVibrate: HybridMyVibrateSpec() {
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
                // On newer Android versions, EFFECT_TICK can be imperceptible on many devices.
                // Use a custom one-shot for LIGHT/SOFT to ensure a perceptible haptic tap.
                when (impact) {
                    ImpactStyle.LIGHT, ImpactStyle.SOFT -> VibrationEffect.createOneShot(25, 110)
                    ImpactStyle.MEDIUM, ImpactStyle.RIGID -> VibrationEffect.createPredefined(VibrationEffect.EFFECT_CLICK)
                    ImpactStyle.HEAVY -> VibrationEffect.createPredefined(VibrationEffect.EFFECT_HEAVY_CLICK)
                }
            } else {
                // For O..P, increase amplitude/duration slightly to improve perception across devices.
                val (durationMs, amplitude) = when (impact) {
                    ImpactStyle.LIGHT, ImpactStyle.SOFT -> 25L to 80
                    ImpactStyle.MEDIUM, ImpactStyle.RIGID -> 35L to 140
                    ImpactStyle.HEAVY -> 45L to 200
                }
                VibrationEffect.createOneShot(durationMs, amplitude)
            }
            vibrator.vibrate(effect)
        } else {
            @Suppress("DEPRECATION")
            val durationMs = when (impact) {
                ImpactStyle.LIGHT, ImpactStyle.SOFT -> 20L
                ImpactStyle.MEDIUM, ImpactStyle.RIGID -> 30L
                ImpactStyle.HEAVY -> 40L
            }
            @Suppress("DEPRECATION")
            vibrator.vibrate(durationMs)
        }

        return "Vibration triggered with ${impact.name.lowercase()} impact"
    }
}
