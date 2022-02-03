
var Loader = {
    load(){
        var TEXT = document.getElementById("Loading Text");

        
        
        var RSXSEC = 0;
        var changingTXT = setInterval(() => {
            if(RSXSEC == 1) {
                TEXT.innerText = "Loading Contents"
            }
            if(RSXSEC == 2) {
                TEXT.innerText = "Loading Contents ."
            }
            if(RSXSEC == 3) {
                TEXT.innerText = "Loading Contents . ."
            }
            if(RSXSEC == 4) {
                TEXT.innerText = "Loading Contents . . ."
                RSXSEC = 0;
            };
            RSXSEC++;
        }, 500);

        
        /*
        document.addEventListener("DOMContentLoaded", () => {
            clearInterval(changingTXT);
            setTimeout(() => {
                TEXT.innerText = "Content Loaded.";
                setTimeout(() => {
                    document.getElementById("LoaderMAIN").classList.add("out");
                    
                    setTimeout(()=>{
                        document.getElementsByTagName("body")[0].removeChild(document.getElementById("LoaderMAIN"));
                    }, 500);
                }, 5000);
            }, 1);
            
        });*/

        window.addEventListener("load", () => {
            console.log("Loaded")
            clearInterval(changingTXT);
            setTimeout(() => {
                TEXT.innerText = "Content Loaded.";
                setTimeout(() => {
                    document.getElementById("LoaderMAIN").classList.add("out");
                    
                    setTimeout(()=>{
                        document.getElementsByTagName("body")[0].removeChild(document.getElementById("LoaderMAIN"));
                    }, 500);
                }, 5000);
            }, 1);
            
        });



    }
}