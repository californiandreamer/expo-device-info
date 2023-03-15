import * as ExpoDeviceInfo from "expo-device-info";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./App.style";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const showAlert = () => {
    const alertText = `Your device runs on the ${ExpoDeviceInfo.getOSVersion()} OS version`;

    Alert.alert(alertText);
  };

  const getHomeUrl = (): string => {
    const deviceModel = ExpoDeviceInfo.getModel();
    const query = deviceModel.replace(" ", "+");
    const url = `https://www.google.com/search?q=${query}&source=lnms&tbm=isch&sa=X`;

    return url;
  };

  const homeUrl = getHomeUrl();

  const onHomePress = () => {
    setCurrentUrl(homeUrl);
  };

  const [currentUrl, setCurrentUrl] = useState(homeUrl);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => showAlert()}
        >
          <Text style={styles.headerText}>{ExpoDeviceInfo.getModel()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => onHomePress()}
        >
          <Text style={styles.headerText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.webViewContainer}>
        <ExpoDeviceInfo.WebView
          style={[styles.webView, { opacity: isLoading ? 0.5 : 1 }]}
          url={currentUrl}
          onLoadingStarted={({ nativeEvent }) => {
            setIsLoading(true);
            setCurrentUrl(nativeEvent.url);
          }}
          onLoadingFinished={({ nativeEvent }) => {
            setIsLoading(false);
            setCurrentUrl(nativeEvent.url);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
