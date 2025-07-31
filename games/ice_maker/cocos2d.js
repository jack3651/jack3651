/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

// boot code needed for cocos2d-html5
// Not needed by cocos2d + JS bindings

var MW = MW || {};
var makeType = 'IceMaker'; //1.Cola为可乐 2.Coffer为咖啡 3.IceMaker 雪糕 4.Smoothies刨冰 5.Fruit果汁 6.Cream 冰激凌 7.''全部
(function() {
    var d = document;
    var c = {
        COCOS2D_DEBUG: 2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        showFPS: false,
        loadExtension: true,
        frameRate: 60,
        renderMode: 1, //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        tag: 'gameCanvas', //the dom element to run cocos2d on
        //        engineDir:'/libs/cocos2d-html5-v2.2.2/cocos2d/',
        //        SingleEngineFile:'/libs/cocos2d-html5-v2.2.2/lib/Cocos2d-html5-v2.2.2.min.js',
        SingleEngineFile: 'game.js',
        appFiles: [
            //            'src/Resource.js',
            //            'src/common/DefineConst.js',
            //            'src/common/SHUtilities.js',
            //            'src/common/CommonConst.js',
            //            'src/common/CommonUtils.js',
            //            'src/common/Cocos2d_Extension.js',
            //            'src/common/JS_Extension.js',
            //            'src/marketing_config.js',
            //            'src/marketing/analytics/analytics_const.js',
            //            'src/common/sprite/SHBackHomeMenu.js',
            //            'src/common/touch/DGTouchableSprite.js',
            //            'src/common/touch/MicroWaveSwitchSprite.js',
            //            'src/common/touch/DGRotateSprite.js',
            //            'src/common/accelerate/DGShakeAccelerateSprite.js',
            //            'src/common/accelerate/DGPourOutAccelerateSprite.js',
            //            'src/common/imagelabel/DGMessageSprite.js',
            //            'src/common/imagelabel/DGImageLabelSprite.js',
            //            'src/common/sprite/SHMenu.js',
            //            'src/baselayer/SHBgLayer.js',
            //            'src/baselayer/SHPopLayer.js',
            //            'src/baselayer/SHScrollView.js',
            //            'src/marketing/ads/adsense_controller.js',
            //            'src/marketing/ads/ad_main_controller.js',
            //            'src/marketing/ads/inmobi_controller.js',
            //            'src/common/scene/LoadingScene.js',
            //            'src/constutils/GameConst.js',
            //            'src/constutils/AudioUtils.js',
            //
            //
            //            'src/core/service/DataEntity.js',
            //            'src/core/service/BeverageContainerSprite.js',
            //
            //            'src/constutils/ScaleLayer.js',
            //
            //            'src/scene/GameStartScene.js',
            //
            //
            //            /***Cola */
            //
            //            'src/core/layer/Cola/ColaStartLayer.js',
            //            'src/core/layer/Cola/CA_BeverageSelectScene.js',
            //            'src/core/layer/Cola/CA_GlassSelectScene.js',
            //            'src/core/layer/Cola/CA_MixIceCubeScene.js',
            //            'src/core/layer/Cola/CA_OrnamentColaScene.js',
            //            'src/core/layer/Cola/CA_SelectSuctionTubesScene.js',
            //            /***end Cola****************/
            //
            //            /**Coffee*/
            //            'src/core/layer/Coffee/CofferStartLayer.js',
            //            'src/core/layer/Coffee/CF_SelectCoffeeType.js',
            //            'src/core/layer/Coffee/CF_GrindingCoffeeBeans.js',
            //            'src/core/layer/Coffee/CF_AddMaterial.js',
            //            'src/core/layer/Coffee/CF_FillingCoffeeCupScene.js',
            //            'src/core/layer/Coffee/CF_OrnamentCoffeeScene.js',
            //            /***end Coffee***/
            //
            //
            //            /***IceMaker***/
            //
            //            'src/core/layer/IceMaker/IceMakerStartLayer.js',
            //            'src/core/layer/IceMaker/IM_SelectModleScene.js',
            //            'src/core/layer/IceMaker/IM_IceMakerScene.js',
            //            'src/core/layer/IceMaker/IM_SelectIceStickScene.js',
            //            'src/core/layer/IceMaker/IM_MachineWorkScene.js',
            //            'src/core/layer/IceMaker/IM_OrnamentIceScene.js',
            //            'src/core/layer/IceMaker/IM_DisplayScene.js',
            //            /*****IceMaker end****/
            //
            //            /*********Smoothies************/
            //
            //            'src/core/layer/Smoothies/SmoothiesStartLayer.js',
            //            'src/core/layer/Smoothies/SM_AddIceCreamScene.js',
            //            'src/core/layer/Smoothies/SM_FillingSmoothiesScene.js',
            //            'src/core/layer/Smoothies/SM_OrnamentSmoothiesScene.js',
            //            'src/core/layer/Smoothies/SM_SelectCupScene.js',
            //            'src/core/layer/Smoothies/SM_SelectMaterial.js',
            //            'src/core/layer/Smoothies/SM_SelectSuctionTubesScene.js',
            //            'src/core/layer/Smoothies/SM_SqueezeJuiceScene.js',
            //            /************Smoothies end**********/
            //
            //
            //            /***********Fruit*************/
            //
            //            'src/core/layer/Fruit/FruitStartLayer.js',
            //            'src/core/layer/Fruit/FT_FruitSelectScene.js',
            //            'src/core/layer/Fruit/FT_GlassSelectScene.js',
            //            'src/core/layer/Fruit/FT_MixIceCubeScene.js',
            //            'src/core/layer/Fruit/FT_OrnamentFruitJuiceScene.js',
            //            'src/core/layer/Fruit/FT_SelectSuctionTubesScene.js',
            //            'src/core/layer/Fruit/FT_SqueezeJuiceScene.js',
            //
            //            /**************Fruit  end*************/
            //
            //            /**************Cream**************/
            //            'src/core/layer/Cream/CreamStartLayer.js',
            //            'src/core/layer/Cream/CM_DisplayScene.js',
            //            'src/core/layer/Cream/CM_FillingCreamScene.js',
            //            'src/core/layer/Cream/CM_OrnamentCreamScene.js',
            //
            //
            //
            //
            //            'src/scene/UnionDisplayScene.js'




        ]
    };

    if (!d.createElement('canvas').getContext) {
        var s = d.createElement('div');
        s.innerHTML = '<h2>Your browser does not support HTML5 canvas!</h2>' +
            '<p>Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.Click the logo to download.</p>' +
            '<a href="http://www.google.com/chrome" target="_blank"><img src="http://www.google.com/intl/zh-CN/chrome/assets/common/images/chrome_logo_2x.png" border="0"/></a>';
        var p = d.getElementById(c.tag).parentNode;
        p.insertBefore(s);
        return;
    }


    window.addEventListener('DOMContentLoaded', function() {
        //first load engine file if specified
        var s = d.createElement('script');
        /*********Delete this section if you have packed all files into one*******/
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        } else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'jsloader.js';
        } else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/

        //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        d.body.appendChild(s);
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        //else if single file specified, load singlefile
    });
})();