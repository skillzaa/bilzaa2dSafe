import PlayHead from './PlayHead.js';

const playhead = new PlayHead();
console.log(playhead);

document.getElementById("start").addEventListener("click",
()=>{ playhead.play();});

document.getElementById("stop").addEventListener("click",
()=>{ playhead.stop();});
document.getElementById("pause").addEventListener("click",
()=>{ playhead.pause();});
document.getElementById("resume").addEventListener("click",
()=>{ playhead.resume();});

document.getElementById("forward").addEventListener("click",
()=>{ playhead.forward();});
document.getElementById("rewind").addEventListener("click",
()=>{ playhead.rewind();});

setInterval(() => {
 const h = document.getElementById("runningTime");
 h.innerText = playhead.runningTime();   
   
}, 100);