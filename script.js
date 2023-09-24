    const closeBTN = document.getElementById("close");
    const hamburger = document.getElementById("hamburger");
    const ham = document.getElementById("ham");
    const hamCheck = document.getElementById("ham-check")

    
    hamburger.addEventListener("click",(e)=>{
        if(!hamCheck.checked){
            document.getElementById("nav-bar").style.transform ="scale(1)";
            ham.style.display = "none";
            closeBTN.style.display = "block"
        }
        else{
            document.getElementById("nav-bar").style.transform ="scale(0)";
            ham.style.display = "block";
            closeBTN.style.display = "none"
        }
        
    })


