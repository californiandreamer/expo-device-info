import ExpoModulesCore

public class ExpoDeviceInfoModule: Module {
  public func definition() -> ModuleDefinition {
      
    Name("ExpoDeviceInfo")

    Constants([
      "PI": Double.pi
    ])

    Events("onChange")

    Function("getOperatingSystemVersion") { () -> String in
        let systemVersion = UIDevice.current.systemVersion
        return systemVersion
    }
      
    Function("getModel") { () -> String in
        let deviceModel = UIDevice.DeviceMap.modelName
        return deviceModel
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }
      
    View(ExpoDeviceInfoView.self) {
        Events(["onLoadingFinished", "onLoadingStarted"])
        
        Prop("url") { (view, url: URL) in
                if view.webView.url != url {
                  let urlRequest = URLRequest(url: url)
                  view.webView.load(urlRequest)
                }
              }
    }
  }
}
