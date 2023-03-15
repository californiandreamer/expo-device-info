package expo.modules.deviceinfo

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ExpoDeviceInfoModule : Module() {
  override fun definition() = ModuleDefinition {

    Name("ExpoDeviceInfo")

    Constants(
      "PI" to Math.PI
    )

    Events("onChange")

    Function("getOperatingSystemVersion") {
      return@Function android.os.Build.VERSION.RELEASE
    }

    Function("getModel") {
      return@Function android.os.Build.MODEL
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(ExpoDeviceInfoView::class) {
      Events(arrayOf("onLoadingFinished", "onLoadingStarted"))

      Prop("url") { view: ExpoDeviceInfoView, url: URL? ->
        view.webView.loadUrl(url.toString())
      }
    }
  }
}
