/**
 * Created by Administrator on 2016/12/14.
 */
$(function () {
   // 搜索条焦点事件
    (function () {
        var Ioinput = $('#input1');
        var str = '';

        Ioinput.on('focus', function(){
          str =Ioinput.val();
            Ioinput.val('');
        });
        Ioinput.on('blur',function () {
            if (Ioinput.val() == str || Ioinput.val() == ''){
                Ioinput.val(str);
            }
        })

        
    })();
    // 搜索条焦点事件


    //导航
    (function () {
        var navbar = $('.navlen').find('a');

        navbar.each(function () {

            navbar.eq(0).attr('class','active');
             navbar.on('mouseenter',function () {

                 navbar.attr('class','');
                 $(this).attr('class','active');
             });
                navbar.on('mouseleave',function () {

                    $(this).attr('class','');
                })
            })

    })();
    //导航

    //轮播图
    (function () {
        var oDiv = $('#fade');
        var oUlLi = oDiv.find('ul li');
        var oOlLi = oDiv.find('ol li');
        
        var iNow = 0;
        var timer = null;

        oDiv.mouseenter(function () {//鼠标进去的时候清除定时器
            clearInterval(timer);
        });
        oDiv.mouseleave(function () {//鼠标出去的时候继续调用播放
            auotplay();
        });

        oOlLi.click(function () {
            iNow = $(this).index();
            fuFade();
        });

        function auotplay() {
            clearInterval(timer);
            timer = setInterval(function () {
                iNow++;
                iNow %= oOlLi.length;
                fuFade();
            },2500);
        }
        auotplay();

        fuFade();
        function fuFade() {
            oUlLi.each(function (i) {
                if (i != iNow){//如果i不等于第0个的话
                    oUlLi.eq(i).fadeOut().css('zIndex',1);
                    oOlLi.eq(i).removeClass('active');
                }else {
                    oUlLi.eq(i).fadeIn().css('zIndex',2);
                    oOlLi.eq(i).addClass('active');
                }
            })
        }
    })();
    //轮播图

    //小的焦点图播放
    (function () {
        var aDiv = $('#fadetwo');
        var aULi = aDiv.find('ul li');
        var aOLi = aDiv.find('ol li');

        var timert = null;
        var aNw = 0;

        movepaly();
        function movepaly() {
            clearInterval(timert);
            timert = setInterval(function () {
                aNw++;
                aNw %= aOLi.length;
                fadetow();
            },3200);
        }

        fadetow();
        function fadetow() {
            aULi.each(function (i) {
                if (i != aNw){
                    aULi.eq(i).fadeOut().css('zIndex',1);
                    aOLi.eq(i).removeClass('active');
                }else {
                    aULi.eq(i).fadeIn().css('zIndex',3);
                    aOLi.eq(i).addClass('active');
                }
            })
        }
        aDiv.mouseenter(function () {
            clearInterval(timert);
        });
        aDiv.mouseleave(function () {
           movepaly();
        });

        aOLi.click(function () {
            aNw = $(this).index();
            fadetow();
        })

    })();
    //小的焦点图播放

//鼠标进出遮罩
    (function () {
        var bDiv = $('.displayarea');
        var Li = bDiv.find('ul li');
        var bImg = bDiv.find('img');

        var aA = $('<a class="mm" href=""></a>');

        Li.mouseenter(function () {
            $(this).prepend(aA);
        });

        Li.mouseleave(function () {
            $(this).find('.mm').remove();
        });

    })();
//鼠标进出遮罩   

//选项卡2
    (function () {
        var tItul = $('.tabe1').children();
        var oDiv = $('.store');
        oDiv.hide().eq(0).show();

        tItul.on('click',function () {

            tItul.attr('class','');
            $(this).addClass('active');

           var index = $(this).index();
            oDiv.hide().eq(index).show();
        });
    })();
//选项卡2


//选项卡1
    (function () {
        var oDivTit = $('.cardtitlelist').children();
        var oDivCon = $('.supercar');
        var Oa = $('.cardtitlelist li');
        oDivCon.hide().eq(0).show();
        oDivTit.on('mouseover',function () {
            Oa.attr('class','');
            $(this).addClass('active');

            var index = $(this).index();
            oDivCon.hide().eq(index).show();
        });
       oDivTit.on('mouseleave',function () {
           Oa.attr('class','');
       })
    })();
//选项卡1







});