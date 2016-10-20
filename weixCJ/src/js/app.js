/**
 * Created by Administrator on 2016/10/17.
 */
;(function(){
var music = document.getElementById("music-btn");
var myaudio =document.getElementById("myAudio");
    var box1 = document.querySelector(".box1-box");
    var box2 = document.querySelector(".box2 .box2-tent");
    var box3 = document.querySelector(".box3 .box2-tent");
    var box4 = document.querySelector(".box4 .box2-tent")
    var box5 = document.querySelector(".box5 .box2-tent");
    music.addEventListener("click",function(){
        var dom = this.previousElementSibling;
        if(dom.innerHTML == "开始"){
            myaudio.pause();
            dom.innerHTML="暂停";
            this.parentNode.className = "music-k stop";
            dom.style.opacity="1";
            setTimeout(function(){
                animate(dom,{
                    opacity:0
                },20);
            },1000)
        }else{
            myaudio.play();
            dom.innerHTML="开始";
            dom.style.opacity="1";
            this.parentNode.className = "music-k start";
            setTimeout(function(){
                animate(dom,{
                    opacity:0
                },20);
            },1000)
        }
    })
    setInterval(function(){
      var i = mySwiper.activeIndex;
        if(i==0){
            box1.className="box1-box start";
        }
        if(i==1){
            box2.className = "box2-tent start";
        }
        if(i==2){
            box3.className = "box2-tent start";
        }
        if(i==3){
            box4.className = "box2-tent start";
        }
        if(i==4){
            box5.className = "box2-tent start";
        }

    },600)
})();