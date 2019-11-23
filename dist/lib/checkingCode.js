function checkingCode(opt){
        var tex = document.querySelector(opt.eleInput);
        var yanzhengma = document.querySelector(opt.eleCode);
        var btn = document.querySelector(opt.eleBtn);

        function show(){
         var arr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var ran = '';
        for( var i = 0; i < [opt.codeNum] ; i++){
            var num = parseInt(Math.random() * arr.length);//length数量
            ran += arr[num];
        }
        return ran;
         
        
        }
        var res = show();
        console.log(res); 
        yanzhengma.value = res; 

        //点击出现随机数
        yanzhengma.onclick = function(){
            var res = show();
            yanzhengma.value = res; 
        } ;


        //验证验证码
//         btn.onclick = function(){
//             var num = tex.value;
//             var num2 = yanzhengma.value;
//             if(num){
//                 if(num.toLowerCase() == num2.toLowerCase()){
//                     alert('通过验证！');
//                 }else{
//                     alert('验证错误！');
//                 } 
//             }else{
//                 alert('请输入再验证！');
//             }
            
//         }
}