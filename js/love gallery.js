var imagesArray=["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png"]
var i=0;
function imagebox()
{
    if(i>=19)
    {
        i=0;
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
  
    }
    i++;
    var time=setTimeout(imagebox,5000);
}
function rightbut()
{
    i++;
    if(i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
    }
}
function leftbut()
{
    i--;
    if(i<0)
    {
        i=imagesArray.length-1;
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("imgbox").style.backgroundImage=`url(../assests/images/${imagesArray[i]})`
    }
}
var img1=document.getElementsByClassName("images")
for(i=0;i<img1.length;i++)
{
    img1[i].src=`../assests/images/${i}.png`
   
}
function closeTheImage()
{
    document.getElementById("bigimg").setAttribute("style","display:none")
}
function openTheImage(img)
{
    document.getElementById("bigimage").setAttribute("src",`../assests/images/${img}.png`)
    document.getElementById("bigimg").removeAttribute("style")
}