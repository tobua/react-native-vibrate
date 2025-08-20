// This file is required for nitro to work.
#pragma once
#include "HybridVibrateSpec.hpp"

namespace margelo::nitro::vibrate {

using namespace facebook;

class HybridVibrate : public virtual HybridVibrateSpec {
public:
  HybridVibrate() : HybridObject(TAG) {}

public:
  std::string vibrate(ImpactStyle impact) override {
    // C++ implementation for vibration
    // This will be called when the method is invoked from JavaScript
    // The actual vibration logic is handled in the platform-specific implementations (Android/iOS)
    switch (impact) {
      case ImpactStyle::LIGHT:
        return "C++ Vibration triggered with light impact";
      case ImpactStyle::MEDIUM:
        return "C++ Vibration triggered with medium impact";
      case ImpactStyle::HEAVY:
        return "C++ Vibration triggered with heavy impact";
      case ImpactStyle::SOFT:
        return "C++ Vibration triggered with soft impact";
      case ImpactStyle::RIGID:
        return "C++ Vibration triggered with rigid impact";
      default:
        return "C++ Vibration triggered with unknown impact";
    }
  }
};

};
