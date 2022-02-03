
var player = {
    calcHMS: function(sec){
        var sec_num = parseInt(sec, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        
        return hours+':'+minutes+':'+seconds;
    },
    elements:{
        audio: document.getElementById("Audiox"),
        currentTime: document.getElementById("curdur Player.time"),
        audioScrollbar: document.getElementById("AudioxCurrTime"),
        playPause: document.getElementById("PlayPauseBTN Ctrl"),
        repeat: document.getElementById("RepeatBTN Ctrl"),
        descriptions: document.getElementById("DescriBTN Ctrl"),
    },
    playPauseToggle() {
        if(this.elements.audio.paused == false) {
            this.elements.audio.pause();
            //this.elements.audio.paused = true;
            this.elements.playPause.innerHTML = "<i class=\"bi bi-play-fill\"></i>";
        }else if(this.elements.audio.paused == true) {
            this.elements.audio.play();
            //this.elements.audio.paused = false;
            this.elements.playPause.innerHTML = "<i class=\"bi bi-pause-fill\"></i>";
        }
        //console.log(this.elements.audio.paused);
    },
    repeatToggle() {
        if(this.elements.audio.loop == false){
            this.elements.audio.loop = true;
            this.elements.repeat.classList.replace("btn-outline-primary", "btn-outline-success");
        }else{
            this.elements.audio.loop = false;
            this.elements.repeat.classList.replace("btn-outline-success", "btn-outline-primary");
        }
    },
}

setInterval(() => {
    player.elements.currentTime.innerText = player.calcHMS(player.elements.audio.currentTime) +" / "+ player.calcHMS(player.elements.audio.duration);

    if(player.elements.audio.currentTime == player.elements.audio.duration){

        if(player.elements.audio.loop == false){
            player.elements.audio.pause();
            player.elements.audio.playingz = "false";
            app.player.ctrlBTN_PlayPause.innerHTML = "<i class=\"bi bi-play-fill\"></i>"
        }else{
            player.elements.audio.currentTime = 0;
        }
    }
    
    if(player.elements.audio.paused == false) {
        player.elements.currentTime.innerText = player.calcHMS(player.elements.audio.currentTime) +" / "+ player.calcHMS(player.elements.audio.duration);
    }

    if(player.elements.audio.playing == true){
        player.elements.currentTime.innerText = player.calcHMS(player.elements.audio.currentTime) +" / "+ player.calcHMS(player.elements.audio.duration);

        if(player.elements.audio.currentTime == player.elements.audio.duration){

            if(player.elements.audio.loop == false){
                player.elements.audio.pause();
                player.elements.audio.playingz = "false";
                app.player.ctrlBTN_PlayPause.innerHTML = "<i class=\"bi bi-play-fill\"></i>"
            }else{
                player.elements.audio.currentTime = 0;
            }
        }
    }
}, 1000);




/*
var player={calcHMS:function(e){var l=parseInt(e,10),a=Math.floor(l/3600),t=Math.floor((l-3600*a)/60),i=l-3600*a-60*t;return a<10&&(a="0"+a),t<10&&(t="0"+t),i<10&&(i="0"+i),a+":"+t+":"+i},elements:{audio:document.getElementById("Audiox"),currentTime:document.getElementById("curdur Player.time"),audioScrollbar:document.getElementById("AudioxCurrTime"),playPause:document.getElementById("PlayPauseBTN Ctrl"),repeat:document.getElementById("RepeatBTN Ctrl"),descriptions:document.getElementById("DescriBTN Ctrl")},playPauseToggle(){0==this.elements.audio.paused?(this.elements.audio.pause(),this.elements.playPause.innerHTML='<i class="bi bi-play-fill"></i>'):1==this.elements.audio.paused&&(this.elements.audio.play(),this.elements.playPause.innerHTML='<i class="bi bi-pause-fill"></i>')},repeatToggle(){0==this.elements.audio.loop?(this.elements.audio.loop=!0,this.elements.repeat.classList.replace("btn-outline-primary","btn-outline-success")):(this.elements.audio.loop=!1,this.elements.repeat.classList.replace("btn-outline-success","btn-outline-primary"))}};setInterval(()=>{0==player.elements.audio.paused&&(player.elements.currentTime.innerText=player.calcHMS(player.elements.audio.currentTime)+" / "+player.calcHMS(player.elements.audio.duration)),1==player.elements.audio.playing&&(player.elements.currentTime.innerText=player.calcHMS(player.elements.audio.currentTime)+" / "+player.calcHMS(player.elements.audio.duration),player.elements.audio.currentTime==player.elements.audio.duration&&(0==player.elements.audio.loop?(player.elements.audio.pause(),player.elements.audio.playingz="false",app.player.ctrlBTN_PlayPause.innerHTML='<i class="bi bi-play-fill"></i>'):player.elements.audio.currentTime=0))},500);
*/
/*
var player={calcHMS:function(e){var l=parseInt(e,10),a=Math.floor(l/3600),t=Math.floor((l-3600*a)/60),i=l-3600*a-60*t;return a<10&&(a="0"+a),t<10&&(t="0"+t),i<10&&(i="0"+i),a+":"+t+":"+i},elements:{audio:document.getElementById("Audiox"),currentTime:document.getElementById("curdur Player.time"),audioScrollbar:document.getElementById("AudioxCurrTime"),playPause:document.getElementById("PlayPauseBTN Ctrl"),repeat:document.getElementById("RepeatBTN Ctrl"),descriptions:document.getElementById("DescriBTN Ctrl")},playPauseToggle(){0==this.elements.audio.paused?(this.elements.audio.pause(),this.elements.playPause.innerHTML='<i class="bi bi-play-fill"></i>'):1==this.elements.audio.paused&&(this.elements.audio.play(),this.elements.playPause.innerHTML='<i class="bi bi-pause-fill"></i>')},repeatToggle(){0==this.elements.audio.loop?(this.elements.audio.loop=!0,this.elements.repeat.classList.replace("btn-outline-primary","btn-outline-success")):(this.elements.audio.loop=!1,this.elements.repeat.classList.replace("btn-outline-success","btn-outline-primary"))}};setInterval(()=>{player.elements.currentTime.innerText=player.calcHMS(player.elements.audio.currentTime)+" / "+player.calcHMS(player.elements.audio.duration),0==player.elements.audio.paused&&(player.elements.currentTime.innerText=player.calcHMS(player.elements.audio.currentTime)+" / "+player.calcHMS(player.elements.audio.duration)),1==player.elements.audio.playing&&(player.elements.currentTime.innerText=player.calcHMS(player.elements.audio.currentTime)+" / "+player.calcHMS(player.elements.audio.duration),player.elements.audio.currentTime==player.elements.audio.duration&&(0==player.elements.audio.loop?(player.elements.audio.pause(),player.elements.audio.playingz="false",app.player.ctrlBTN_PlayPause.innerHTML='<i class="bi bi-play-fill"></i>'):player.elements.audio.currentTime=0))},1e3);
*/

