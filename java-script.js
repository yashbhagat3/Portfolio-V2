$(window).on("load",function(){
    $("#loader").fadeOut("slow");
})
function openNav() {
    document.getElementById("fade").style.display = "block";
    document.getElementById("cross").style.display = "block";
    document.getElementById("Hamburger").style.width = "250px";
}

function closeNav() {
    document.getElementById("fade").style.display = "none";
    document.getElementById("cross").style.display = "none";
    document.getElementById("Hamburger").style.width = "0px";
}
// function inactive(){
//     document.getElementById("work-nav1").style.color="black";
//     document.getElementById("work-nav2").style.color="black";
//     document.getElementById("home-nav1").style.color="black";
//     document.getElementById("home-nav2").style.color="black";
//     document.getElementById("art-nav1").style.color="black";
//     document.getElementById("art-nav2").style.color="black";
//     document.getElementById("contact-nav1").style.color="black";
//     document.getElementById("contact-nav2").style.color="black";
// }
// function clickwork()
// {
//     inactive();
//     document.getElementById("work-nav1").style.color="#8836FF";
//     document.getElementById("work-nav2").style.color="#8836FF";
//     closeNav();
// }
// function clickhome()
// {
//     inactive();
//     document.getElementById("home-nav1").style.color="#8836FF";
//     document.getElementById("home-nav2").style.color="#8836FF";
//     closeNav();
// }
// function clickart()
// {
//     inactive();
//     document.getElementById("art-nav1").style.color="#8836FF";
//     document.getElementById("art-nav2").style.color="#8836FF";
//     closeNav()
// }
// function clickcontact()
// {
//     inactive();
//     document.getElementById("contact-nav1").style.color="#8836FF";
//     document.getElementById("contact-nav2").style.color="#8836FF";
//     closeNav();
// }
function all1()
{
    let myElements = document.querySelectorAll(".sketches");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".compositions");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".illustrations");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".all");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "block";
    }
    //alert("YAy");
}
function illustration()
{
    let myElements = document.querySelectorAll(".sketches");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".compositions");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".all");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".illustrations");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "block";
    }
    //alert("Done");
}
function composition()
{
    let myElements = document.querySelectorAll(".sketches");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".all");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".illustrations");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".compositions");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "block";
    }
    //alert("DONE");
}
function sketches()
{
    let myElements = document.querySelectorAll(".all");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".compositions");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".illustrations");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElements = document.querySelectorAll(".sketches");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "block";
    }
    //alert("Yay");
}
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("head").style.top = "0";
  } else {
    document.getElementById("head").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  if(currentScrollPos!=0)
  {
    document.getElementById("head").style.background="white";
  }
  else {
    document.getElementById("head").style.background="white";
  }
  var art=document.getElementById("art1");
  var work=document.getElementById("work1");
  var contact=document.getElementById("footer1");
  var artoff=offset(art);
  var workoff=offset(work);
  var footeroff=offset(contact);
  if(currentScrollPos>=footeroff.top)
  {
    document.getElementById("art-nav2").checked=false;
    document.getElementById("work-nav2").checked=false;
    document.getElementById("home-nav2").checked=false;
    document.getElementById("contact-nav2").checked=true;
  }
  if(currentScrollPos>=artoff.top)
  {
    document.getElementById("art-nav2").checked=true;
    document.getElementById("work-nav2").checked=false;
    document.getElementById("home-nav2").checked=false;
    document.getElementById("contact-nav2").checked=false;
  }
  else if(currentScrollPos>=workoff.top)
  {
    document.getElementById("art-nav2").checked=false;
    document.getElementById("work-nav2").checked=true;
    document.getElementById("home-nav2").checked=false;
    document.getElementById("contact-nav2").checked=false;
  }
  else 
  {
    document.getElementById("art-nav2").checked=false;
    document.getElementById("work-nav2").checked=false;
    document.getElementById("home-nav2").checked=true;
    document.getElementById("contact-nav2").checked=false;
  }
}
function hidess(){
    document.getElementById("slide-show").style.display="none";
}

function showss(n)
{
    document.getElementById("slide-show").style.display="flex";
    document.getElementById("back").style.display="flex";
    let myElements = document.querySelectorAll(".art-all-ss");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "none";
    }
    myElementsp[n-1].style.display = "block";
}

function prev()
{
    let myElements = document.querySelectorAll(".art-all-ss");

    for (let i = 0; i < myElements.length; i++) {

        if(myElements[i].style.display == "block")
        {
            myElements[i].style.display ="none";
            myElements[(i-1+myElements.length)%myElements.length].style.display = "block";
            break;
        }
    }
    //alert("DONE");
}

function next()
{
    let myElements = document.querySelectorAll(".art-all-ss");

    for (let i = 0; i < myElements.length; i++) {

        if(myElements[i].style.display == "block")
        {
            myElements[i].style.display = "none";
            myElements[(i+1+myElements.length)%myElements.length].style.display = "block";
            break;
        }
    }
    //alert("DONE");
}