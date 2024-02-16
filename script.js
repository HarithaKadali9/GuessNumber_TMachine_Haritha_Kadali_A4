var randomNumber = Math.floor(Math.random() * 15) + 1;
var tries=3;
function guess(){
    var num=document.getElementById("num").value;
    if(num == randomNumber){
        var p=document.getElementById("res");
        p.innerText="congrats!! your guss is correct  ";
        p.className="win";
        document.getElementsByTagName("input")[0].disabled = true;
        document.getElementsByTagName("input")[1].disabled = true;
        var img=document.getElementById("img");
        img.src="win.jpg";
        img.style='width:200px;height:200px;';
        document.getElementById("tries").innerText="";
    }
    else{
        console.log("yes it is wrong : "+randomNumber);
        tries-=1;
        var p=document.getElementById("res");
        p.innerText="Sorry!! Your Guss Is Incorrect ..!"
        p.className="lost";
        var msg="";
        if(tries > 0){
            if(num > randomNumber){
                msg+="Gussed number is  High.. Remaining Tries : "+tries;
            }
            else{
                msg+="Gussed number is  Low.. Remaining Tries : "+tries;
            }
            document.getElementById("tries").innerText=msg;
            
            
            
        }
        else{
            p.innerText="Incorrect Guss You Lost The Game..! "
            document.getElementById("tries").innerText="";
            var img=document.getElementById("img");
            img.src="lost.jpg";
            img.style='width:200px;height:200px;';
            document.getElementsByTagName("input")[0].disabled = true;
            document.getElementsByTagName("input")[1].disabled = true;
        }

    }
}