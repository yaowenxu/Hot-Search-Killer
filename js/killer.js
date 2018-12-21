/*
    作者：yaowenxu
    时间：2018年12月21日16:59:41
    主页：https://github.com/yaowenxu
    功能：插件注入JavaScript 脚本
*/
// 日志模块
// 注意，必须设置了run_at=document_start 此段代码才会生效
stat = false; // 判断是否重新进行加载
document.addEventListener('DOMContentLoaded', function()
{
    // 注入自定义JS
	injectCustomJs();
    console.log("欢迎您使用——百度搜索热点过滤器");
    console.log("如果您感觉效果不错，请您前往：https://github.com/yaowenxu 给个star 吧");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var time = date.toLocaleTimeString()
    console.log("当前时间："+ year +"-" + month +"-" + day +" " +time);

    // 读取本地存储
    var status = null;
    chrome.storage.sync.get(["choice"], function(items) {
        console.log("当前配置状态:"+items.choice);
        status = items.choice;
        stat = false;
        if (status != "no"){
            removeAD();
            stat = true;
        }
    });

    $("#con-ar").bind('DOMSubtreeModified', function(e) {
        // 无内容
    });
});

// 当节点dom 中内容发生变化的时候，重新进行删除！！！不然百度热搜还是会出现！
document.addEventListener('DOMSubtreeModified', function()
{
    if(stat){
        var dom = $(".FYB_RD");
        dom.hide();  // 继续进行删除
    }
});

// 主模块，执行DOM 过滤操作
function removeAD(){
    var dom = $(".FYB_RD");
    console.log("获取到排行榜内容:");
    console.log(dom);
    dom.hide();
    //dom.remove();
}

// 向页面注入JS
function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
        //this.parentNode.removeChild(this);
        console.log(chrome.extension.getURL(jsPath));
	};
	document.head.appendChild(temp);
}


