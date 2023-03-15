# expo-device-info

Dummy expo module with the exapmle app. Main idea is to get device model and OS version from native side. After it's done search device in the Google Images inside of natively created web-view. 

### iOS example
https://user-images.githubusercontent.com/67259677/225305997-7ad1bad3-065b-492d-aa8b-15a3f99c8ef6.MP4

### Android example
https://user-images.githubusercontent.com/67259677/225305000-1465a53e-8568-441e-a476-ea8310d071aa.mp4

### Example app features
* Just after initialization app gets device model name from the `ExpoDeviceInfoModule` and renders it in in the header
<img src='https://user-images.githubusercontent.com/67259677/225309323-f25c2d78-eb48-4ae4-bd75-bcc53cac8fe2.jpeg' width='300' />

* By pressing on the device name you can see the alert with OS version information
<img src='https://user-images.githubusercontent.com/67259677/225309605-6e2dc974-7656-471f-a993-f048c0eda27a.jpeg' width='300' />

* App contains natively made web-view given in the [Creating a native view](https://docs.expo.dev/modules/native-view-tutorial/) Expo Documentation tutorial. This web-view shows Google Images with your device model searched.
<img src='https://user-images.githubusercontent.com/67259677/225314734-6c3c06e0-594f-4d1b-beca-97763af096ef.jpeg' width='300' />

* There is "Home" button that will direct you to the home page - Google Images with your device model searched
<img src='https://user-images.githubusercontent.com/67259677/225310736-8b4f2988-48a6-4fee-b34a-c7f9f493d4f9.jpeg' width='300' />

* While loading the web-view has half-opacity
<img src='https://user-images.githubusercontent.com/67259677/225312522-f4450c15-d6df-49e0-bf26-8d9e10f5c34e.jpeg' width='300' />

### Module features
* `getOSVersion()` - return the actual OS version your device runs on
* `getModel()` - return your device model name
* `ExpoWebView` - the WebView component that receives the next props:
  - `url` - URL that should be opened
  - `onLoadingStarted()` - loading start event callback
  - `onLoadingFinished()` - loading finish event callback
  
### Example app running
1. Clone the repo `git clone https://github.com/californiandreamer/expo-device-info`
2. Run `expo install`
3. Run `npm run build`
4. Go to example app folder `cd example`
5. Run `npx expo run:ios` - then the example project should be opened in the XCode
6. Run `npx expo run:android` - then the example project should be opened in the Android Studio
7. Run the app from the XCode and Android Studio

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-device-info
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.
