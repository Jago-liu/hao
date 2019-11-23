/*
    库：类库,方便以后的调用；
    * 功能：生成任意范围内随机数
    * 参数说明：min：范围里面的小的数；max：范围里面大的数
    * 例如：
        var num = ranNum(10,50);
        就会得到一个10-50之间的随机整数
*/

function ranNum(min, max) {
    //Math.random() 0-0.99 当随机数等于0的时候，整体最小的时候
    //最大的时候，Math.random() 最大就是1(实际没到1)
    return parseInt(Math.random() * (max - min + 1)) + min;
}

//随机颜色  ： #123456  rgb(255,255,255)
function ranColor(type) {
    if (type == 16) {
        //返回一个随机颜色：十六进制
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        var str = '#';//拼接颜色
        for (var i = 0; i < 6; i++) {
            var num = parseInt(Math.random() * arr.length);//0-length-1整数
            str += arr[num];
        }
        return str;
    } else if (type == 'rgb') {
        //返回rgb颜色
        var num1 = parseInt(Math.random() * 256);//0-255整数
        var num2 = parseInt(Math.random() * 256);//0-255整数
        var num3 = parseInt(Math.random() * 256);//0-255整数
        var str = `rgb(${num1},${num2},${num3})`;
        return str;
    }
}

//限时购

function backcount() {

    var startTime = Date.parse('2019-10-16 18:03');
    var endTime = Date.now();
    var times = startTime - endTime;
    console.log(times);//67421856,得出距离明天12点剩下的毫秒数


    var days = parseInt(times / 86400000);//天数
    var hours = parseInt(times % 86400000 / 3600000);//小时
    var mins = parseInt(times % 86400000 % 3600000 / 60000);//分钟
    var secs = parseInt(times % 86400000 % 3600000 % 60000 / 1000);//秒

    if (secs < 0) {
        text.innerHTML = '';//去掉计时文字
        buy.src = 'img/btn_buy.jpg';
        lady.src = 'img/g5.jpg'
    } else {
        text.innerHTML = '距离开始还有：<br>' + hours + '小时' + mins + '分钟' + secs + '秒';
    }
};


//输入数字不足10时，前面加0，用于时钟
function toDb(n) {//不足10的数字前面加0
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
};

//走动的时钟（数字由图片代替，需附上图片
function gettime() {
    var time = new Date();
    var years = time.getFullYear();//获得年份
    console.log(years);
    var months = time.getMonth();//获得月份
    console.log(months);
    var days = time.getDate();//获得天
    console.log(days);
    var hours = time.getHours();//获得小时
    console.log(hours);
    var mins = time.getMinutes();//获得分钟
    console.log(mins);
    var secs = time.getSeconds();//获得秒
    console.log(secs);

    //获得当前时间字符串
    var str = '' + toDb(years) + toDb(months) + toDb(days) + toDb(hours) + toDb(mins) + toDb(secs);
    console.log(str);


    //图片字符串
    var imgstr = '';
    var num = 0;
    for (var i in str) {
        num++;
        imgstr += `<img src="img/${str[i]}.png" alt="">`;
        if (num % 4 == 0 && num <= 4) {
            imgstr += '-';
        }
        if (num % 2 == 0 && num > 4 && num <= 8) {
            imgstr += '-';
        }
        if (num % 2 == 0 && num > 8) {
            imgstr += ':';
        }

    }

    box.innerHTML = imgstr.slice(0, -1);
    return imgstr;
}

//字符串转成对象
function strToObj(str) {//key0=0&key1=1&key2=2
    var arr = str.split('&');//["key0=0", "key1=1", "key2=2"]
    var obj = {};
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}

//对象转成字符串
function objToStr(obj) { //{name:malin,adr:guangxi}
    var str = '';//key0=0&key1=1&key2=2
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1);
}


//随机颜色  ： #123456  rgb(255,255,255)
function ranColor(type) {
    if (type == 16) {
        //返回一个随机颜色：十六进制
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        var str = '#';//拼接颜色
        for (var i = 0; i < 6; i++) {
            var num = parseInt(Math.random() * arr.length);//0-length-1整数
            str += arr[num];
        }
        return str;
    } else if (type == 'rgb') {
        //返回rgb颜色
        var num1 = parseInt(Math.random() * 256);//0-255整数
        var num2 = parseInt(Math.random() * 256);//0-255整数
        var num3 = parseInt(Math.random() * 256);//0-255整数
        var str = `rgb(${num1},${num2},${num3})`;
        return str;
    }
}




//需求：给我秒数=>xx天xx时xx分xx秒：放到自己的库里面
function changTime(num) {
    var date = parseInt(num / 3600 / 24);//天
    var hours = parseInt((num - date * 3600 * 24) / 3600);//时
    var minute = parseInt(num % 3600 / 60);//分
    var second = (num % 60 % 60).toFixed(0);//秒
    return {//通过对象可以一次性返回多个值，这样可以把数据的拼接方式放到外部进行，更为灵活
        day: date,
        hours: hours,
        mins: minute,
        secs: second
    };
}
//需求：给秒数==>xx年月日 时分秒
function setTime(secs) {
    let time = new Date(secs * 1000);
    var date = time.toLocaleDateString();
    var hours = time.toLocaleTimeString();
    return '' + date + hours;
}


//通过id获取元素
function getid(id) {
    return document.getElementById(id);
}



////封装解决--第一个孩子----的兼容问题
function firstChild(ele) {
    if (ele.firstElementChild) {
        ///高级浏览器
        return ele.firstElementChild;
    } else {
        return ele.firstChild;
    }
}



//封装：解决兼容问题,获取样式
function getstyle(ele, attr) {
    if (getComputedStyle(ele, false)) {
        //标准浏览器
        return getComputedStyle(ele, false)[attr];
    } else {
        //ie678
        return ele.currentStyle[attr];
    }
}

// var bg = getstyle(box, 'backgroundColor');
// console.log(bg);



//封装一个方法：css() jq的方法：2个参数获取样式，3个参数设置样式

function css() {
    if (arguments.length == 2) {
        //获取样式
        var attr = arguments[1];
        if (getComputedStyle(arguments[0], false)) {
            //标准浏览器

            return getComputedStyle(arguments[0], false)[attr];
        } else {
            //ie678
            arguments[0].currentStyle[attr];
        }
    } else if (arguments.length == 3) {
        //设置样式 box.style.border = '1px solid #ccc';
        var attr = arguments[1];
        var val = arguments[2];
        arguments[0].style[attr] = val;
    }
}

// var iw = css(box, 'width');//获取box的width
// var bg = css(box, 'backgroundColor');//获取box的width
// console.log(iw);
// console.log(bg);
// css(box, 'display', 'none');//设置样式







///封装垂直方向滚动条
function scrollBarY(box, bar, fn) {
    var box = document.getElementById(box);
    var bar = document.getElementById(bar);
    //找节点


    //需求：1、按下鼠标事件 2、鼠标移动事件 3、鼠标抬起事件
    //1、鼠标在按住bar拖动
    bar.onmousedown = function (ev) {
        //获取鼠标位置
        var disY = ev.offsetY;//光标到bar顶部的距离

        //2、鼠标拖着bar移动,但鼠标不限于在bar的范围(在按住鼠标下拖动---)
        document.onmousemove = function (ev) {
            var top = ev.pageY - disY - box.offsetTop;//得出bar到box顶部的距离；
            if (top <= 0) {
                top = 0;
            } else if (top >= box.offsetHeight - bar.offsetHeight) {
                top = box.offsetHeight - bar.offsetHeight;
            }

            //移动距离比例
            var scal = top / (box.offsetHeight - bar.offsetHeight);
            fn(scal);
            bar.style.top = top + 'px';
            console.log(top)



        }
        //3、鼠标抬起，滚动条停止
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }


}





//封装滚动方向判断
function scrollPosi(ele, type, fnup, fndown) {
    if (type == 'bind') {
        //绑定滚动事件
        //ele:作用的节点  fnup：向上滚执行的回调  fndown：向下滚执行的回调
        ele.onmousewheel = fn;//针对ie和谷歌
        if (ele.addEventListener) {//火狐
            ele.addEventListener('DOMMouseScroll', fn, false);
        }

        function fn(ev) {
            var ev = ev || window.event;
            var b = true; //判断向上或向下 ： true:向上滚，false:向下滚

            if (ev.wheelDelta) {//ie 谷歌
                b = ev.wheelDelta > 0 ? true : false;//大于0就是向上滚
            } else {//火狐
                b = ev.detail < 0 ? true : false;//小于0是向上滚
            }

            if (b) {//向上滚了：
                // this.style.height = this.offsetHeight - 10 + 'px';
                fnup();
            } else {//向下滚了：
                // this.style.height = this.offsetHeight + 10 + 'px';
                fndown();
            }

            if (ev.preventDefault) {
                ev.preventDefault();
            }
            return false;
        }

        if (document.attachEvent) {
            document.attachEvent('oncontextmenu', function () {
                return false;
            });
        }
        else {
            document.addEventListener('contextmenu', function (ev) {
                ev.preventDefault();
                //return false;
            });
        }
    }
    if (type == 'unbind') {
        //解除绑定
        ele.onmousewheel = null;
        if (ele.addEventListener) {//火狐
            ele.removeEventListener('DOMMouseScroll', fn, false);
        }
    }
}

//(将move移动比例计算放外部)
/* 
scrollBarY('#box','#bar',function(scal){
    //move跟随移动
        var move = document.getElementById('move');
        move.style.top = scal * 500 + 'px';
})
*/










///封装水平方向滚动条
function scrollBarX(box, bar, fn) {
    var box = document.getElementById(box);
    var bar = document.getElementById(bar);
    //找节点


    //需求：1、按下鼠标事件 2、鼠标移动事件 3、鼠标抬起事件
    //1、鼠标在按住bar拖动
    bar.onmousedown = function (ev) {
        //获取鼠标位置
        var disX = ev.offsetX;//光标到bar顶部的距离

        //2、鼠标拖着bar移动,但鼠标不限于在bar的范围(在按住鼠标下拖动---)
        document.onmousemove = function (ev) {
            var left = ev.pageX - disX - box.offsetleft;//得出bar到box顶部的距离；
            if (left <= 0) {
                left = 0;
            } else if (left >= box.box.offsetleft - bar.offsetleft) {
                left = box.box.offsetleft - bar.offsetleft;
            }

            //移动距离比例
            var scal = left / (box.box.offsetleft - bar.offsetleft);
            fn(scal);
            bar.style.left = left + 'px';
            console.log(left)



        }
        //3、鼠标抬起，滚动条停止
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }


}
//(将move移动比例计算放外部)
/* 
scrollBarY('#box','#bar',function(scal){
    //move跟随移动
        var move = document.getElementById('move');
        move.style.top = scal * 500 + 'px';
})
*/






//正则大全
var checkReg = {
    email: function (str) {
        var reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel:function(str){
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    username:function(str){
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg .test(str);
    }
}

//使用方法：var res = checkReg.email(XXX)



///正则验证
function checkInput(opt) {
    // console.log(opt);
    opt.ele.isok = false;
    opt.ele.onblur = function () {
        //验证手机
        var val = opt.ele.value.trim();
        // var reg = eval(opt.reg);//eval()把字符串转成js
        var reg = opt.reg;
        // console.log(reg);
        if (val) {
            //非空判断->正则验证->ajax正确性验证
            // console.log(val);
            var res = reg.test(val);
            if (res) {
                //验证通过
                opt.inf.innerHTML = opt.mes[1];
                opt.inf.style.color = '#58bc58';
                opt.ele.isok = true;
                //ajax正确性验证
            } else {
                //验证不通过
                opt.inf.innerHTML = opt.mes[2];
                opt.inf.style.color = 'red';
                opt.ele.isok = false;
            }
        } else {
            opt.inf.innerHTML = opt.mes[0];
            opt.inf.style.color = 'red';
            opt.ele.isok = false;
        }
    }
}


/*
	运动框架封装：startMove()过渡    jq animate() 因为后期有animate可以用，所以不做要求
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fn) {
    clearInterval(obj.timer);//防止定时器的叠加
    obj.timer = setInterval(() => {
        let isok = false;
        for (let key in json) {
            //1.获取初始值
            let cur = 0;
            if (key == 'opacity') {
                //要改变透明度
                cur = css(obj, key) * 100;//获取透明度扩大100倍方便后期计算
            } else {
                //要的是以px为单位
                cur = parseInt(css(obj, key));
            }
            //2.准备缓冲运动的 步长==距离/比例系数==终点-起点/比例系数
            let speed = (json[key] - cur) / 6;
            //防止晃动
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[key]) {
                //只要有一个属性未到达终点，动画就还不算完成，不能开始下个运动
                isok = false;
            } else {
                isok = true;
            }
            //3.开始运动
            let val = cur + speed;
            if (key == 'opacity') {
                css(obj, key, val / 100);//btn.style.opacity=20/100
            } else {
                //以px为单位
                css(obj, key, val + 'px');
            }

            //4.判断属性是否都已经到达临界点，全部到达了就是运动完成了，如果有下一个运动，继续开始
            if (isok) {
                //真：已经完成
                if (fn) {//fn可选参数
                    fn();
                }
            }
        }
    }, 30);
}



function ajax(opt) {
    //默认参数
    let defaultOpt = {
        asyn: true,//默认是异步
        data: '',//默认没有数据传输
        failure: null
    }

    //替补方案
    Object.assign(defaultOpt, opt);//用默认参数

    //创建对象
    let xhr = new XMLHttpRequest();

    //open()设置参数
    if (defaultOpt.type.toLowerCase() == 'get') {
        //get方式发送请求
        if (defaultOpt.data) {
            //判断是否有数据，有就拼接在url后面
            let str = objToStr(defaultOpt.data);
            defaultOpt.url += '?' + str;
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else if (defaultOpt.type.toLowerCase() == 'post') {
        //post方式发送请求
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let str = '';
        if (defaultOpt.data) {
            str = objToStr(defaultOpt.data);
        }
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//设置请求头
        xhr.send(str);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {//完成
            if (xhr.status == 200 || xhr.status == 304) {
                //成功了
                defaultOpt.success(xhr.responseText);//把数据返回
            } else {
                if (defaultOpt.failure) {
                    defaultOpt.failure(xhr.status);//失败的回调：接收http状态码
                }
            }
        }
    }
}






/////获取cookie
//设置/修改
function setCookie(key, val, iday) {
    //key 键名，val 键值， iday 多少天后失效
    let time = new Date();
    let today = time.getDate();//日
    time.setDate(today + iday);
    document.cookie = key + '=' + val + ';expires=' + time + ';path=/';
}

//获取
function getCookie(key) {
    let str = document.cookie;
    // console.log(str);//name=小虎; age=18; adr=广东广州
    let arr = str.split('; ');
    /* console.log(arr); */
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//删除cookie
function removeCookie(key) {
    setCookie(key, '', -1);
}



//放大镜
// function fangdajing(opt) {
//     /*
//         1.鼠标移入main；mark和bigpic显示；
//         2.鼠标移出main；mark和bigpic就隐藏；
//         3.鼠标滑动的时候，遮罩mark跟着光标走；注意临界值；保持光标在遮罩的中央，但是不能过界；
//         4.难点：遮罩mark在运动的时候，大图bigpic里面的图片要跟着运动，用比例系数约束；大图运动是朝着左上角运动，所以left和top值都是负数；运动计算公式：var left = (大图盒子宽度 - 里面图片宽) * 比例系数；
//         比例系数：var scal = 遮罩的left / 遮罩最大运动距离；
//         5.点击小图可以切换大图；
//         6.点击左右按钮可以让小图显示出来；
//     */

//     //找节点
    
//     var wrap = document.querySelector(opt.ele);
//     var biger = wrap.querySelector(opt.eleBiger);
//     var imgs = wrap.querySelector(opt.eleImgs);
//     var main = wrap.querySelector(opt.eleMain);
//     var smaller = wrap.querySelector(opt.eleSmaller);
//     /* console.log([opt.arr[0]]) */

//     //把图片渲染到页面
//     var str1 = `<img src="${[opt.arr[0]]}" alt="">`;
//     biger.innerHTML = str1;//渲染出右边大图

//     var str2 = `<img src="${[opt.arr[0]]}" alt="">
//     <div class="mask" id="mask"></div>`;
//     main.innerHTML = str2;//渲染出原图

//     var str3 = opt.arr.map(function (item) {
//         return `<li><img src="${item}" alt=""></li>`
//     }).join('');
//     smaller.innerHTML = str3;
//     smaller.firstChild.className = 'active';

    



//     //鼠标事件
//     var mask = wrap.querySelector(opt.eleMask);
//     main.onmouseover = function () {
//         mask.style.display = 'block';
//         biger.style.display = 'block';
//     };
//     main.onmouseout = function () {
//         mask.style.display = 'none';
//         biger.style.display = 'none';
//     }
//     main.onmousemove = function (ev) {



//         var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;//算出移动X距离
//         var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;//算出移动Y距离
//         if (left <= 0) {
//             left = 0;
//         } else if (left >= (main.offsetWidth - mask.offsetWidth)) {
//             left = main.offsetWidth - mask.offsetWidth;
//         }
//         if (top <= 0) {
//             top = 0;
//         } else if (top >= (main.offsetHeight - mask.offsetHeight)) {
//             top = main.offsetHeight - mask.offsetHeight;
//         }

//         //遮罩的运动
//         mask.style.left = left + 'px';
//         mask.style.top = top + 'px';


//         //放大图的移动
//         var bigermove = biger.firstChild;

//         //运动比例
//         var scalX = left / (main.offsetWidth - mask.offsetWidth);
//         var scalY = top / (main.offsetHeight - mask.offsetHeight);

//         //运动
//         bigermove.style.left = scalX * (biger.offsetWidth - bigermove.offsetWidth) + 'px';
//         bigermove.style.top = scalY * (biger.offsetHeight - bigermove.offsetHeight) + 'px';

//     }


//     //小图切大图
//     //设置小图之间的间距
//     var alis = imgs.querySelectorAll(opt.eleLi);
//     /* alis.style.margin = "left:" + 10 + 'px'; */
    
//     for (var i = 0; i < alis.length; i++) {
//         alis[i].index = i;
//         css(alis[i],'margin-left',[opt.smallpicPadding] + 'px');
//         css(alis[0],'margin-left',0);

//         alis[i].onclick = function () {
//             for(var j = 0; j < alis.length;j++){
//                 alis[j].className = '';
//             }
//             this.className = 'active';
//             var bigpic = document.querySelector(opt.eleBigpic);
//             var smallpic = document.querySelectorAll(opt.eleSmallpic);
//             var bigerpic =document.querySelector(opt.eleBigerpic);
//             /* console.log(smallpic[this.index]); */
//             bigpic.src = smallpic[this.index].src;
//             bigerpic.src = smallpic[this.index].src;
//         }
//     }

//     //前后按钮
    
//         var prev = document.querySelector(opt.elePrev);
//         var next = document.querySelector(opt.eleNext);
//         var smallpicWidth = alis[0].offsetWidth*1;
//         console.log(smallpicWidth)
//         var iw = smallpicWidth + [opt.smallpicPadding]*1;
//         console.log(iw)
//         next.onclick = function(){
//             var left = smaller.offsetLeft;
//             if(left <= -iw){
//                 left = -iw;
//                 smaller.style.left = left + 'px';
//             }else{
//                 left = left - iw;
//                 smaller.style.left = left + 'px';
//             }
            
            
//         }
        
//         prev.onclick  =function(){
//             var left = smaller.offsetLeft;
//             if(left >= 0){
//                 left = 0;
//                 smaller.style.left = left + 'px';
//             }else{
//                 left =  left + iw;
//                 smaller.style.left = left + 'px';
//             }
//         }
//     }
//放大镜调用
// fangdajing({
//     arr:["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg", "images/banner4.jpg", "images/banner5.jpg", "images/banner1.jpg", "images/banner2.jpg", "images/banner1.jpg", "images/banner2.jpg"],////图片集合
//     ele:'#wrap',///整个盒子
//     eleBiger:'.biger',//放大图片节点
//     eleImgs:'.imgs',//图片盒子
//     eleMain:'.main',//原图盒子
//     eleSmaller:'.smaller',//小图盒子
//     eleMask:'.mask',//放大镜子的盒子
//     eleLi:'.smaller li',///小图Li
//     elePrev:'#wrap .prev',//上一张按钮节点
//     eleNext:'#wrap .next',///下一张按钮节点
//     eleBigpic:'#wrap .imgs img',////放大图节点
//     eleSmallpic:'#wrap .smaller img',///原图节点
//     eleBigerpic:'#wrap .biger img',///小图节点
//     smallpicPadding:10////小图之间的间隔距离
// });