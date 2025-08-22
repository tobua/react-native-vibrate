import Foundation
import UIKit
import React

@objc(Vibrate)
class Vibrate: NSObject {
  @objc
  public func vibrate(_ impact: NSString, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    // Create the appropriate feedback generator based on impact style
    let generator: UIImpactFeedbackGenerator
    
    switch impact as String {
      case "light":
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.light)
      case "medium":
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.medium)
      case "heavy":
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.heavy)
      case "soft":
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.soft)
      case "rigid":
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.rigid)
      default:
        generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.medium)
    }

    generator.prepare()
    generator.impactOccurred()
    resolve("Vibration triggered with \(impact) impact")
  }
}
