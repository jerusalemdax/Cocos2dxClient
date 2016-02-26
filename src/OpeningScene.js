//开场动画场景
var OpeningScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        cc.director.runScene(new UpdateScene());
    }
});
