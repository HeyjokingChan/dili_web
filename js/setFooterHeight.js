/**
 * Created by dili on 2017/2/19.
 */
/**
 * Created by admin on 2017/1/17.
 */
function setHeight() {
    var docEl = document.documentElement, dpr = window.devicePixelRatio || 1;
    var var_dpr;
    var isIPhone = window.navigator.appVersion.match(/iPhone/gi);
    var proportion_foot = 142 / 124.2;
    var index_ftwrap = document.getElementById("index_ftwrap");
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    // if (2 < dpr < 3) {
    //     var_dpr = 2;
    // } else if (1 <= dpr < 2){
    //     var_dpr=1
    // }else {
    //     var_dpr=dpr
    // }
    var_dpr=parseInt(dpr)
    if (clientWidth >= 540) {
        var fonsize = 54;
        var fs_foot = Math.round(proportion_foot * fonsize);
        index_ftwrap.style.height = fs_foot + 'px'
    } else if (isIPhone) {
        var fonsize = clientWidth * var_dpr / 10;
        var fs_foot = Math.round(proportion_foot * fonsize);
        index_ftwrap.style.height = fs_foot + 'px'
    } else {
        var fonsize = clientWidth / 10
        var fs_foot = Math.round(proportion_foot * fonsize);
        index_ftwrap.style.height = fs_foot + 'px'
    }
}
setHeight();

