let cd=0;
function BulbWork(){
    if (cd == 0){
        cd = 1;
        document.getElementById("Bulb").src = "./Images/pic_bulbon.gif";
    }else{
        cd = 0;
        document.getElementById("Bulb").src = "./Images/pic_bulboff.gif";
    }

    
}