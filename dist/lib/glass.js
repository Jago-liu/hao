; function fangdajing(opt) {
    /*
        1.鼠标移入main；mark和bigpic显示；
        2.鼠标移出main；mark和bigpic就隐藏；
        3.鼠标滑动的时候，遮罩mark跟着光标走；注意临界值；保持光标在遮罩的中央，但是不能过界；
        4.难点：遮罩mark在运动的时候，大图bigpic里面的图片要跟着运动，用比例系数约束；大图运动是朝着左上角运动，所以left和top值都是负数；运动计算公式：var left = (大图盒子宽度 - 里面图片宽) * 比例系数；
        比例系数：var scal = 遮罩的left / 遮罩最大运动距离；
        5.点击小图可以切换大图；
        6.点击左右按钮可以让小图显示出来；
    */

    //找节点
    
    var wrap = document.querySelector(opt.ele);
    var biger = wrap.querySelector(opt.eleBiger);
    var imgs = wrap.querySelector(opt.eleImgs);
    var main = wrap.querySelector(opt.eleMain);
    var smaller = wrap.querySelector(opt.eleSmaller);
    /* console.log([opt.arr[0]]) */

    //把图片渲染到页面
    var str1 = `<img src="${[opt.arr[0]]}" alt="">`;
    biger.innerHTML = str1;//渲染出右边大图

    var str2 = `<img src="${[opt.arr[0]]}" alt="">
    <div class="mask" id="mask"></div>`;
    main.innerHTML = str2;//渲染出原图

    // var str3 = opt.arr.map(function (item) {
    //     return `<li><img src="${item}" alt=""></li>`
    // }).join('');
    // smaller.innerHTML = str3;
    // smaller.firstChild.className = 'active';

    



    //鼠标事件
    var mask = wrap.querySelector(opt.eleMask);
    main.onmouseover = function () {
        mask.style.display = 'block';
        biger.style.display = 'block';
    };
    main.onmouseout = function () {
        mask.style.display = 'none';
        biger.style.display = 'none';
    }
    main.onmousemove = function (ev) {



        var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth ;//算出移动X距离
        var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;//算出移动Y距离
        if (left <= 0) {
            left = 0;
        } else if (left >= (main.offsetWidth - mask.offsetWidth)) {
            left = main.offsetWidth - mask.offsetWidth;
        }
        if (top <= 0) {
            top = 0;
        } else if (top >= (main.offsetHeight - mask.offsetHeight)) {
            top = main.offsetHeight - mask.offsetHeight;
        }

        //遮罩的运动
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';


        //放大图的移动
        var bigermove = biger.firstChild;

        //运动比例
        var scalX = left / (main.offsetWidth - mask.offsetWidth);
        var scalY = top / (main.offsetHeight - mask.offsetHeight);
        // console.log(scalX)
        //运动
        bigermove.style.left = scalX * (biger.offsetWidth - bigermove.offsetWidth) + 'px';
        bigermove.style.top = scalY * (biger.offsetHeight - bigermove.offsetHeight) + 'px';
        /* console.log(bigermove.style.left) */
    }


    // 小图切大图
    // 设置小图之间的间距
    var alis = document.querySelectorAll(opt.eleLi);
    /* alis.style.margin = "left:" + 10 + 'px'; */
    
    for (var i = 0; i < alis.length; i++) {
        alis[i].index = i;
        // css(alis[i],'margin-left',[opt.smallpicPadding] + 'px');
        // css(alis[0],'margin-left',0);

        alis[i].onmouseover = function () {
            /* console.log(1) */
            for(var j = 0; j < alis.length;j++){
                alis[j].className = '';
            }
            this.className = 'active';
            var bigpic = document.querySelector(opt.eleBigpic);//原
            var smallpic = document.querySelectorAll(opt.eleSmallpic);//小图
            var bigerpic =document.querySelector(opt.eleBigerpic);//放大图
            /* console.log(smallpic[this.index]); */
            let arr = opt.arr;
            bigpic.src = arr[this.index];
            bigerpic.src = arr[this.index];
        }
    }

    //前后按钮
    
    //     var prev = document.querySelector(opt.elePrev);
    //     var next = document.querySelector(opt.eleNext);
    //     var smallpicWidth = alis[0].offsetWidth*1;
    //     console.log(smallpicWidth)
    //     var iw = smallpicWidth + [opt.smallpicPadding]*1;
    //     console.log(iw)
    //     next.onclick = function(){
    //         var left = smaller.offsetLeft;
    //         if(left <= -iw){
    //             left = -iw;
    //             smaller.style.left = left + 'px';
    //         }else{
    //             left = left - iw;
    //             smaller.style.left = left + 'px';
    //         }
            
            
    //     }
        
    //     prev.onclick  =function(){
    //         var left = smaller.offsetLeft;
    //         if(left >= 0){
    //             left = 0;
    //             smaller.style.left = left + 'px';
    //         }else{
    //             left =  left + iw;
    //             smaller.style.left = left + 'px';
    //         }
            

            
    //     }
        
    
    






    }