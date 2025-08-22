package com.tobua.vibrate

import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import com.facebook.react.bridge.*

class VibrateModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "Vibrate"

    @ReactMethod
    fun vibrate(impact: String, promise: Promise) {
        try {
            val (durationMs, amplitude) = when (impact) {
                "light", "soft" -> 25L to 80
                "medium", "rigid" -> 35L to 140
                "heavy" -> 45L to 200
                else -> 30L to 120
            }

            val vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val manager = reactContext.getSystemService(ReactApplicationContext.VIBRATOR_MANAGER_SERVICE) as VibratorManager
                manager.defaultVibrator
            } else {
                @Suppress("DEPRECATION")
                reactContext.getSystemService(ReactApplicationContext.VIBRATOR_SERVICE) as Vibrator
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val effect = VibrationEffect.createOneShot(durationMs, amplitude)
                vibrator.vibrate(effect)
            } else {
                @Suppress("DEPRECATION")
                vibrator.vibrate(durationMs)
            }

            promise.resolve("Vibration triggered with $impact impact")
        } catch (e: Exception) {
            promise.reject("ERR_VIBRATE", e)
        }
    }
}
