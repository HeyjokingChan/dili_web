//响应式设置rem的root元素fontsize
(function (doc, win) {
    var docEl = doc.documentElement, dpr = window.devicePixelRatio || 1;
    var isIPhone = window.navigator.appVersion.match(/iPhone/gi);
    var meta = document.querySelector("meta[name=viewport]");
    var clientWidth = docEl.clientWidth;
    var var_dpr;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            if (!clientWidth) return;
            // 设置设备data-dpr
            // if (2 < dpr < 3) {
            //     var_dpr = 2;
            // } else if (1 <= dpr < 2){
            //     var_dpr=1
            // }else {
            //     var_dpr=dpr
            // };
            var_dpr=parseInt(dpr)
            docEl.setAttribute('data-dpr', var_dpr);
            if (clientWidth >= 540) {
                docEl.style.fontSize = '54px';
                meta.setAttribute('content', 'user-scalable=no,initial-scale = 1.0, maximum-scale = 1.0, minimum-scale = 1.0')
            } else if (isIPhone) {
                docEl.style.fontSize = clientWidth * var_dpr / 10 + 'px';
                switch (var_dpr) {
                    case 1:
                        meta.setAttribute('content', 'user-scalable=no,initial-scale=1.0, maximum-scale = 1.0, minimum-scale = 1.0')
                        break;
                    case 2:
                        meta.setAttribute('content', 'user-scalable=no,initial-scale = 0.5, maximum-scale = 0.5, minimum-scale = 0.5')
                        break;
                    case 3:
                        meta.setAttribute('content', 'user-scalable=no,initial-scale = 0.3333333333333333, maximum-scale = 0.3333333333333333, minimum-scale = 0.3333333333333333')
                }
            } else {
                docEl.style.fontSize = clientWidth / 10 + 'px';
                meta.setAttribute('content', 'user-scalable=no,initial-scale = 1.0, maximum-scale = 1.0, minimum-scale = 1.0')
            }
            var_dpr=dpr;
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

