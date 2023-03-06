```js
 uni-app实现h5跳转app指定url或者app跳转app指定页面
    以抖音为实例：
	openDouyin(url) {
                console.log(url);
                if (url.indexOf('v.douyin') == -1) {
                    uni.showToast({
                        title: "非抖音链接",
                        icon: "none"
                    })
                    return;
                }
                // #ifdef APP-PLUS
                // 判断平台
                if (plus.os.name == 'Android') {
                    plus.runtime.openURL(encodeURI(url),
                        function(res) {
                            console.log(res)
                        },
                        'com.ss.android.ugc.aweme'
                    )
                } else if (plus.os.name == 'iOS') {
                    plus.runtime.openURL(encodeURI(url),
                        function(res) {
                            console.log(res)
                        }
                    )
                }
                // #endif
                // #ifdef H5
                window.location.href = url;
                // #endif
            },
```
