import ExpoModulesCore
import WebKit

class ExpoDeviceInfoView: ExpoView, WKNavigationDelegate {
      let webView = WKWebView()
      let onLoadingStarted = EventDispatcher()
      let onLoadingFinished = EventDispatcher()

      required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        webView.navigationDelegate = self
        addSubview(webView)
      }

      override func layoutSubviews() {
        webView.frame = bounds
      }
    
    func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        if let url = webView.url {
            onLoadingStarted([
            "url": url.absoluteString
          ])
        }
    }

      func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        if let url = webView.url {
          onLoadingFinished([
            "url": url.absoluteString
          ])
        }
      }
}
