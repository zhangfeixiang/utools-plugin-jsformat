define(function () {
	return load_edit = function () {
		require(["orion/editor/edit"], function (edit) {
			window.zfx = (edit({ className: "editor" })||[])[0];
		});
	}
});