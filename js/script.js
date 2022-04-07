// LANDING SECTION
var landing = document.querySelectorAll('#landing')
function landingAnimi(){
	setTimeout(function(){
     landing[0].style.display = 'block';
     landing[1].style.display = 'none';
     landing[2].style.display = 'none';
	},0
  )
	setTimeout(function(){
    landing[0].style.display = 'none';
    landing[1].style.display = 'block';
    landing[2].style.display = 'none';
	},6000)
	setTimeout(function(){
    landing[0].style.display = 'none';
    landing[1].style.display = 'none';
    landing[2].style.display = 'block'
	},12000)
	setTimeout(function(){
   landingAnimi()
	},18000)
}
// DISPLAY ON SCROLL SECTION
var sectionOne = document.getElementById('section-1')
var sectionTwo = document.getElementById('section-2')
var sectionThree = document.getElementById('section-3')
var sectionFour = document.getElementById('section-4')
var sectionF = document.getElementById('s1')
var moreInfo = document.getElementById('more-info')
var p = 0;
function displayOnScroll(){
console.log(pageYOffset)
  if(window.pageYOffset > 1000){
    sectionThree.style.display = 'block';
    sectionFour.style.display = 'block';
    sectionF.style.display = 'none';
  }
  else if(window.pageYOffset >760){
    sectionTwo.style.display = 'block';
  }
  else if(window.pageYOffset >240){
    sectionOne.style.display = 'block';
  }
}
function displayProfile(){
  if( p == 0){
    moreInfo.style.display = 'block';
    document.getElementById('click-btn').innerHTML = 'Close Profile'
    p = 1
  }
  else{
    moreInfo.style.display = 'none';
    document.getElementById('click-btn').innerHTML = 'View My Profile'
    p = 0
  }
}


// MOBILE NAV 
var mobileNav = document.getElementById('mobile-nav');
var burger = document.querySelectorAll('#burger')
var tapToClose = document.getElementById('tap-to-close')
var b = 0
function openNav(){
  if(b == 0){
    mobileNav.style.animationName = 'open-nav'
    tapToClose.style.animationName = 'fade-in'
    burger[0].style.animationName = 'rotate'
    burger[1].style.animationName = 'rotate1'
    b = 1
  }
  else{
    mobileNav.style.animationName = 'close-nav'
    tapToClose.style.animationName = 'fade-out'
    burger[0].style.animationName = 'unrotate'
    burger[1].style.animationName = 'unrotate1'
    b = 0
  }
}
// IN TOUCH
 var q = document.getElementById('in-touch')
 var w = 0;
 function openInTouch(){
  if(w == 0){
  q.style.display = 'block';
  w = 1
  }
  else{
    q.style.display = 'none'
    w = 0
  }
 }