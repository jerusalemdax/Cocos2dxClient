//开场动画场景
var UpdateScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new UpdateLayer();
        this.addChild(layer);
    }
});

var UpdateLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        this.addChild(helloLabel, 5);

        return true;
    }
});