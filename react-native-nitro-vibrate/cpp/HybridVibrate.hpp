#pragma once

#include "HybridVibrateSpec.hpp"

namespace margelo::nitro::vibrate {

using namespace facebook;

class HybridVibrate : public virtual HybridVibrateSpec {
public:
  HybridVibrate() : HybridObject(TAG) {}

public:
  double getBaseValue() override {
    return 10;
  }
  double getAnotherValue() override {
    return 20;
  }
};

};
