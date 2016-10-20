/**
 * Created by Administrator on 2016/10/20.
 */
var myaudio = document.getElementById("mymusic");

myaudio.addEventListener("click",function(){
    var dom = this.children;
    console.log(dom)
    if(dom[0].paused){
        dom[0].play();
        dom[1].firstElementChild.className="music-bo start";
        dom[1].lastElementChild.style.display="block";
    }else{
        dom[0].pause();
        dom[1].firstElementChild.className="music-bo";
        dom[1].lastElementChild.style.display="none";
    }
})
