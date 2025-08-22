require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "Vibrate"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = "https://github.com/tobua/react-native-vibrate"
  s.license      = package["license"]
  s.authors      = package["author"]
  s.platform     = :ios, "12.0"
  s.swift_version = "5.0"
  s.source       = { :git => "https://github.com/tobua/react-native-vibrate.git", :tag => s.version.to_s }
  s.source_files = [
    # Implementation (Swift)
    "ios/**/*.{swift}",
    # Autolinking/Registration (Objective-C++)
    "ios/**/*.{m,mm}",
  ]
  s.dependency 'React-Core'
end
