import Vibrate, { type ImpactStyle } from './NativeVibrate';

export async function vibrate(impact: ImpactStyle) {
  return Vibrate.vibrate(impact)
}
