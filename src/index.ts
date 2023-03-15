import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

import {
  ChangeEventPayload,
  ExpoDeviceInfoViewProps,
} from "./ExpoDeviceInfo.types";
import ExpoDeviceInfoModule from "./ExpoDeviceInfoModule";
import ExpoDeviceInfoView from "./ExpoDeviceInfoView";

// Get the native constant value.
export const PI = ExpoDeviceInfoModule.PI;

export { default as WebView, Props as WebViewProps } from "./ExpoWebView";

export function getOSVersion(): string {
  return ExpoDeviceInfoModule.getOperatingSystemVersion();
}

export function getModel(): string {
  return ExpoDeviceInfoModule.getModel();
}

export async function setValueAsync(value: string) {
  return await ExpoDeviceInfoModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ExpoDeviceInfoModule ?? NativeModulesProxy.ExpoDeviceInfo,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ExpoDeviceInfoView, ExpoDeviceInfoViewProps, ChangeEventPayload };
