// ==UserScript==
// @name         百度搜索热点过滤器
// @namespace    http://www.ifrom.top
// @version      0.1
// @description  使用 Tamper Monkey 创建一个百度热点过滤器
// @homepage     https://github.com/yaowenxu/Hot-Search-Killer
// @author       Yaoxu
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @match        https://www.baidu.com/*
// @match        http://www.baidu.com/*
// @match        https://baidu.com/*
// @match        http://baidu.com/*
// @resource icon http://tampermonkey.net/favicon.ico
// @run-at document-start
// @grant        GM_log
// @grant        GM_listValues
// ==/UserScript==

// Tampermonkey 模块
(function() {
    'use strict';
    GM_log("百度热点过滤神器");
    GM_log("创作时间:2018年12月22日15:37:47");
})();

/*
    作者：yaowenxu
    时间：2018年12月22日15:37:52
    主页：https://github.com/yaowenxu
    功能：清除百度搜索热点模块
*/
document.addEventListener('DOMContentLoaded', function()
{
    console.log("Modules Loaded!");
    console.log("如果您感觉效果不错，请您前往：https://github.com/yaowenxu 给个star 吧");
    removeAD();
    $("#con-ar").bind('DOMSubtreeModified', function(e) {
        // 无内容
    });
});

// 当节点dom 中内容发生变化的时候，重新进行删除，防止百度热搜异步加载！
document.addEventListener('DOMSubtreeModified', function()
{
    var dom = $(".FYB_RD");
    dom.hide();  // 继续进行删除
});

// 主模块，执行DOM 过滤操作
function removeAD(){
    var dom = $(".FYB_RD");
    console.log(dom);
    dom.hide();
}
