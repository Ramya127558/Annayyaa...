var email="Annayya"
var pass="143"
function autho()
{
    var usergivenId=document.getElementById("Email").value 
    var usergivenpass=document.getElementById("pass").value 
    if(email==usergivenId && pass==usergivenpass)
    {
        document.getElementById("fom").setAttribute("action","./html/home1.html")
        document.getElementById("but").setAttribute("type","submit")
        document.getElementById("inputDiv").style.borderColor="royalblue"
        document.getElementById("passwordDiv").style.borderColor="royalblue"
    }
    else if(email!=usergivenId && pass==usergivenpass)
    {
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("passwordDiv").style.borderColor="royalblue"
        document.getElementById("result").innerHTML="wrong Email ID"
    }
    else if(email==usergivenId && pass!=usergivenpass)
    {
        document.getElementById("inputDiv").style.borderColor="royalblue"
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("result").innerHTML="wrong password"
    }
    else
    {
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("result").innerHTML="wrong Emaail and password"
    }
}
    function visiblepass()
    {
        document.getElementById("pass").removeAttribute("type")
        document.getElementById("visible").setAttribute("src","./assests/logos/visible.jpg")
        document.getElementById("visible").style.transform="rotateY(360deg)"
    }
    function hidenpass()
    {
        document.getElementById("pass").setAttribute("type","password")
        document.getElementById("visible").setAttribute("src","./assests/logos/hidden.jpg")
        document.getElementById("visible").style.transform="rotateY(-360deg)"
    }