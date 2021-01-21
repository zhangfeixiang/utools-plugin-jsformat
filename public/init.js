var g = {
	init: function () {
		/*配置文件*/
		requirejs.config({
			baseUrl: '/',
			waitSeconds: 0
		});
		g.load();
	},
	copy: function () {
		document.getElementById('copy').addEventListener('click', function () {
			var contentView = window.zfx;
			var text = contentView.getText()
			if (text) {
				utools.copyText(text)
			}
		})
	},
	format: function () {
		document.getElementById('format').addEventListener('click', function () {
			var contentView = window.zfx;
			var text = contentView.getText()
			if (text) {
				contentView.setInput('', null, window.utils.beatify(text))
			}
		})
	},
	clear: function () {
		document.getElementById('clear').addEventListener('click', function () {
			var contentView = window.zfx;
			contentView.setInput('', null, '')
		})
	},
	jsedit: function () {
		require(["jsedit.js", "editor.js"], function (indexdata) {
			indexdata();
		});
	},
	initEvents: function () {
		g.copy();
		g.format();
		g.clear();
	},

	//初始化加载
	load: function () {
		g.jsedit();
		g.initEvents();
	}
};
g.init();