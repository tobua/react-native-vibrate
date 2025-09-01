import Foundation
import UIKit
import NitroModules

class HybridVibrate : HybridVibrateSpec {
  public func vibrate(impact: ImpactStyle) throws -> String {
    // Create the appropriate feedback generator based on impact style
    let generator: UIImpactFeedbackGenerator
    
    switch impact {
    case .light:
      generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.light)
    case .medium:
      generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.medium)
    case .heavy:
      generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.heavy)
    case .soft:
      generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.soft)
    case .rigid:
      generator = UIImpactFeedbackGenerator(style: UIImpactFeedbackGenerator.FeedbackStyle.rigid)
    }
    
    // Prepare and trigger the vibration
    generator.prepare()
    generator.impactOccurred()
    
    return "Vibration triggered with \(impact) impact"
  }
}
