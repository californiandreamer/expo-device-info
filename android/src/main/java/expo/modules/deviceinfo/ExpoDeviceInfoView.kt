package expo.modules.deviceinfo

import android.content.Context
import android.graphics.Bitmap
import android.webkit.WebView
import android.webkit.WebViewClient
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.viewevent.EventDispatcher
import expo.modules.kotlin.views.ExpoView

class ExpoDeviceInfoView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
    private val onLoadingStarted by EventDispatcher()
    private val onLoadingFinished by EventDispatcher()

    internal val webView = WebView(context).also {
        it.layoutParams = LayoutParams(
            LayoutParams.MATCH_PARENT,
            LayoutParams.MATCH_PARENT
        )

        it.webViewClient = object : WebViewClient() {
            override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
                onLoadingStarted(mapOf("url" to url))
            }

            override fun onPageFinished(view: WebView, url: String) {
                onLoadingFinished(mapOf("url" to url))
            }
        }

        addView(it)
    }
}
