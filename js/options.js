document.addEventListener('DOMContentLoaded', function() {
	var defaultConfig = {choice: 'yes'}; // 默认配置
	// 读取数据，第一个参数是指定要读取的key以及设置默认值
	chrome.storage.sync.get(defaultConfig, function(items) {
		document.getElementById('choice').value = items.choice;
	});
});

document.getElementById('save').addEventListener('click', function() {
	var color = document.getElementById('choice').value;
	chrome.storage.sync.set({choice: color}, function() {
		// 注意新版的options页面alert不生效！
		// alert('保存成功！');
		document.getElementById('status').textContent = '保存成功！';
		setTimeout(() => {document.getElementById('status').textContent = '';}, 800);
	});
});