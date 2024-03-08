var objDiv ;
var objIcon = document.getElementById("arrow");

var isDown = false;
let buttons = document.getElementsByClassName("down_up");
for(var i = 0; i < buttons.length ; i++)
{
    buttons[i].addEventListener("click" , Scroll)
}

function Scroll(e){
   
    let handler  = e.target.getAttribute("data-handler");
    
    objDiv = document.getElementById(handler)
    var heightOfParent = objDiv.scrollHeight;
    var CureentHeight = objDiv.scrollTop ;
    
    if(CureentHeight <= 0)
    {
        isDown = false;
    }
    else
    {
        isDown = true;
    }
    if(!isDown)
    {

        for(var i =0; i <= heightOfParent;i++)
        {
            objDiv.scrollTop = i;
            
        }
        e.target.className = "fas fa-arrow-up";
        isDown = true;
        return ;
    }
    if(isDown)
    {
        for(var i = heightOfParent ; i >= 0;i--)
        {
            objDiv.scrollTop = i;
          
        }
        e.target.className = "fas fa-arrow-down";
        isDown = false;
        return ;
    }
 
}