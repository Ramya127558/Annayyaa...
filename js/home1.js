function gift()
{
    document.getElementById("book").removeAttribute("style")
    document.getElementById("close").removeAttribute("style")
    document.getElementById("maindiv").style.opacity=0.5
    document.getElementById("tbox").setAttribute("style","display:none")
    document.getElementById("ribbon").setAttribute("style","display:none")
    document.getElementById("d3").removeAttribute("style")
    document.getElementById("d3").style.transform="rotateY(360deg)"
}
function open1()
{
    document.getElementById("page1").removeAttribute("style")
    document.getElementById("page2").removeAttribute("style")
}
function open2()
{
    document.getElementById("page3").removeAttribute("style")
    document.getElementById("page4").removeAttribute("style")
}
function open3()
{
    document.getElementById("page5").removeAttribute("style")
    document.getElementById("page6").removeAttribute("style")
}
function open4()
{
    document.getElementById("page7").removeAttribute("style")
    document.getElementById("page8").removeAttribute("style")
}
function open5()
{
    document.getElementById("page9").removeAttribute("style")
    document.getElementById("page8").setAttribute("style","display:none")
    document.getElementById("page6").setAttribute("style","display:none")
    document.getElementById("page4").setAttribute("style","display:none")
    document.getElementById("page2").setAttribute("style","display:none")
    document.getElementById("book").setAttribute("style","display:none")


}
function back1()
{
    document.getElementById("page8").setAttribute("style","display:none")
    document.getElementById("page7").setAttribute("style","display:none")
}
function back2()
{
    document.getElementById("page6").setAttribute("style","display:none")
    document.getElementById("page5").setAttribute("style","display:none")
}
function back3()
{
    document.getElementById("page4").setAttribute("style","display:none")
    document.getElementById("page3").setAttribute("style","display:none")
}
function back4()
{
    document.getElementById("page2").setAttribute("style","display:none")
    document.getElementById("page1").setAttribute("style","display:none")
}
function close1()
{
    document.getElementById("book").setAttribute("style","display:none")
    document.getElementById("close").setAttribute("style","display:none")
    document.getElementById("page1").setAttribute("style","display:none")
    document.getElementById("page2").setAttribute("style","display:none")
    document.getElementById("page3").setAttribute("style","display:none")
    document.getElementById("page4").setAttribute("style","display:none")
    document.getElementById("page5").setAttribute("style","display:none")
    document.getElementById("page6").setAttribute("style","display:none")
    document.getElementById("page7").setAttribute("style","display:none")
    document.getElementById("page8").setAttribute("style","display:none")
    document.getElementById("page9").setAttribute("style","display:none")
    document.getElementById("d3").setAttribute("style","display:none")
    document.getElementById("tbox").removeAttribute("style")
    document.getElementById("ribbon").removeAttribute("style")


    document.getElementById("maindiv").style.opacity=1
}
function nodiv()
{
   document.getElementById("blurdiv").setAttribute("style","display:none")
}
var closethediv=setTimeout(nodiv,3000)