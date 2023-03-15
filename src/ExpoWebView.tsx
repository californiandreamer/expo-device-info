import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ViewProps } from "react-native";

export type OnLoadEvent = {
  url: string;
};

export type Props = {
  url?: string;
  onLoadingStarted?: (event: { nativeEvent: OnLoadEvent }) => void;
  onLoadingFinished?: (event: { nativeEvent: OnLoadEvent }) => void;
} & ViewProps;

const NativeView: React.ComponentType<Props> =
  requireNativeViewManager("ExpoDeviceInfo");

export default function ExpoWebView(props: Props) {
  return <NativeView {...props} />;
}
