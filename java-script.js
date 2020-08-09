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

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

var prevScrollpos = window.pageYOffset;
var d = 0;
function shownav() {
    d=1;
}
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("head").style.top = "0";
  } else if(!d) {
    document.getElementById("head").style.top = "-100px";
  }
  d=0;
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