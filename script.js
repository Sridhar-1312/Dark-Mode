let icon = document.getElementById("icon")


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
        document.body.classList.add("color") ;

    }else{
                icon.src = "images/moon.png";
                 document.body.classList.remove("color") ;


    }
}