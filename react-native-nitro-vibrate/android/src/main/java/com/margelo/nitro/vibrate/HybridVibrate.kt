package com.margelo.nitro.vibrate

import androidx.annotation.Keep
import com.facebook.proguard.annotations.DoNotStrip

@Keep
@DoNotStrip
class HybridVibrate: HybridVibrateSpec() {
    override fun vibrate(a: Double, b: Double): Double {
        return a + b
    }
}
