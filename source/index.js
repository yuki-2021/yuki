/*
 *  index入口文件
 */

// yuki stylesheet
import './css/style.scss'
// animate css
import 'animate.css'
// csshake
import 'csshake'
//nprogress 
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// Botui  https://github.com/botui/botui/issues/123
import BotUI from 'botui/build/botui.js'
import 'botui/build/botui-theme-default.css'
import 'botui/build/botui.min.css'
// EasyTyper
import EasyTyper from 'easy-typer-js'
// Valine
import Valine from 'valine'
// sharejs
import 'social-share.js/dist/js/social-share.min.js'
import 'social-share.js/dist/css/share.min.css'
import tocbot from 'tocbot'
import 'tocbot/dist/tocbot.css'
import CanvasNest from 'canvas-nest.js'



$(document).ready(() => {
    NProgress.configure({ease:'ease',speed:600});
    NProgress.start();
    let element =   document.body;
    console.log("-------------");
    initCanvasNest();
    console.log(element);
    initBotUi();
    initEasyTyper();
    initValine();
    tocbot.init({
        tocSelector: '.post-tocbot',
        contentSelector: '.post-md',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        hasInnerContainers: true,
        collapseDepth: 6
    });
    initProj();
    NProgress.done();
})

let initBotUi = async () => {
    if($('.botui-app-container').length == 0) {
       return ; 
    }
    let botui = new BotUI('botui-app')
    await botui.message.bot({
        delay: 800,
        human: false,
        content: '资深祖安玩家？'
    })
    await botui.action.button({ 
        delay: 200,
        autoHide: true,
        addMessage: true,
        action: [
        {
            text: '好像事情不简单😄',
            value: 'simple'
        },
        {
            text: '听你你继续BB',
            value: 'simple'
        }
        ]
    })
    await botui.message.add({
        delay: 400,
        content: '常年混迹于祖安白银分段'
    })
    await botui.message.add({
        delay: 400,
        content: '和祖安白银分段的高手不分高下'
    })
    await botui.action.button({ 
        delay: 200,
        autoHide: true,
        addMessage: true,
        action: [
        {
            text: '就这😅？',
            value: 'simple'
        },
        {
            text: '斯国一牛逼🤙',
            value: 'simple'
        }
        ]
    })
    await botui.message.add({
        delay: 400,
        content: '看过很多武侠小说'
    })
    await botui.message.add({
        delay: 400,
        content: '各类武林秘籍了如指掌'
    })
    await botui.action.button({ 
        delay: 200,
        autoHide: true,
        addMessage: true,
        action: [
        {
            text: '脑残🙃？',
            value: 'simple'
        },
        {
            text: '沙雕🙃？',
            value: 'simple'
        }
        ]
    })
    await botui.message.add({
        delay: 400,
        content: '好吧，我是yuki，一个菜鸟程序员'
    })
    await botui.message.add({
        delay: 400,
        content: '这个博客主要用来记录学习笔记和整理学习资料'
    })
    await botui.message.add({
        delay: 400,
        content: '欢迎你经常来哦😆~~'
    })
    let { value: res } = await botui.action.button({ 
        delay: 200,
        autoHide: true,
        addMessage: true,
        action: [
        {
            text: '好的😊',
            value: 'yes'
        },
        {
            text: '不想来，你能把我怎么办😜',
            value: 'no'
        }
        ]
    })
    if(res == 'yes') {
        await botui.message.bot({
        delay: 200,
        content: '爱你~~么么哒😘'
        })
    }else {
        await botui.message.bot({
        delay: 200,
        content: 'yuki表示很伤心😭'
        })
        await botui.message.bot({
        delay: 200,
        content: 'yuki退出了聊天.....'
        })
    }
    await botui.message.bot({
        delay: 500,
        content: '哈哈.....'
    })
    await botui.message.bot({
        delay: 500,
        content: '上面是开玩笑了.....'
    })
    await botui.message.bot({
        delay: 500,
        content: '一起努力吧👨‍🚒'
    })
};

let initEasyTyper = () => {
    const easyTyperTarget = '#word-chinese'
    const easyTyperConfig = {
        output: '',
        isEnd: false,
        speed: 80,
        singleBack: false,
        sleep: 0,
        type: 'normal',
        backSpeed: 40,
        'sentencePause': false
    }
    new EasyTyper(
        easyTyperConfig, 
        `You can't fly if you never try.<br>不做尝试就永远无法飞翔.
        `, 
        () => {}, 
        (output, instance) => {
            $(easyTyperTarget).html(`${output}`);
        }
    )
}

let initValine = () => {
    new Valine({
        el: '#vcomments',
        appId: 'gq9CqTb9mGcxMmMli9tAvcdA-gzGzoHsz',
        appKey: 'li683tPxvdlGxzfgbqFr8u6m',
        avatar: 'wavatar',
        placeholder: '快来给我留言吧~~~~',
        notify: true,
        verify: false,
        highlight: true,
        recordIP: true,
        meta: ['nick','mail','link']
      })
}

let initCanvasNest = () => {
    let config = {
    color: '0,0,0',
    count: 99,
    opacity: 0.5
  };
  const cn = new CanvasNest(document.body, config);
}

let initProj = () => {
    // aslide toggo
    $('#header-toggle').click(function () {
        $("#mask").show()
        $("#header-mobile").show()
    });
    $("#mask").click(function () {
    $("#header-mobile").hide()
    $(this).hide()
    })

    // post category toggo
    $('#vcomments').hover(() => {
    $('#vcomments').addClass("hv");
    }, () => {
    $('#vcomments').removeClass("hv");
    })

    $('.post-togo-btn').click(() => {
    $('#post-aside').toggle();
    $('#post-aside-togo').toggle();
    })
}
   
  
   



