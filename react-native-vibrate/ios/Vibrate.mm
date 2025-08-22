#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Vibrate, NSObject)
RCT_EXTERN_METHOD(vibrate:(NSString *)impact
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
@end


