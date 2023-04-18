let header = document.querySelector("header")
let logo = document.querySelector("header .logo img")
let end = 0;
let goback = document.querySelector(".goback")

window.onscroll = function(){
    console.log(window.scrollY)
    if(window.scrollY <= 60){
        header.style.backgroundColor = "rgb(240, 243, 252)";
        header.style.boxShadow = "none"
        logo.style.width = "100%"
        // console.log("he")
        end = 0
        goback.style.display = "none"
    }
    else if( end !== 1){
        // console.log("hello")
        header.style.backgroundColor = "white"
        header.style.boxShadow = "0px 1px 10px #aaa"
        logo.style.width = "70%"
        end = 1
    }
    else if(window.scrollY >= 4400){
        if(!start){
            cardstext.forEach(function(num){
                startcount(num)
            })
            start = true
        }
    }
    else if(window.scrollY >= 2500 ){
        goback.style.display = "flex"
        goback.onclick =function(){
            window.scrollTo(0,0)
        }
    }
}
// slider before and after
var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}

//count section
let cardstext = document.querySelectorAll(".count .container .card1 h3")
let start = false;

function startcount(ele){
    let goal = ele.dataset.goal;
    let count = setInterval(function(){
        ele.textContent++;
        if(ele.textContent == goal){
            clearInterval(count)
        }
    },3000/goal)
}

// start loading screen (onload)
// function we reload go to the top of the page used in loading screen section down
let loading_screen= document.querySelector(".loading-screenn")

function gotopfun(){
    document.body.style.overflowY = "hidden"
    setTimeout(function(){
        window.scrollTo(0,0)
    },55000) //55
}
window.onload = function(){
    gotopfun()
    setTimeout(() => {
        loading_screen.style.opacity = "0" 
        loading_screen.style.top = "-100%" 
        document.body.style.overflowY = "auto"
    }, 6000);  //6
    animation()
    showrate()
}
let animation = function(){
    setTimeout(() =>{
        AOS.init({
            duration: 3000,
            once: true
        });
    },8000) //8
}

function showrate(){
    setTimeout(() => {
        ratecon.style.bottom = "100px"
    }, 40000);
}


let phases = [
    "“You don’t have to brush all your teeth–just the ones you want to keep.”",
    " “A smile is the best makeup any girl can wear.”",
    " “If a patient cannot clean his teeth, no dentist can clean them for him.” ",
    " “Lying through your teeth does not count as flossing.” ",
    " “Be true to your teeth and they won’t be false to you.” ",
    " “Ignore your teeth and they’ll go away.”",
    " “Teeth aren’t pearly, until you smile.” ",
    " “Whether you have teeth or not, smile! Because our world always needs a smile!” "
]
const phase = phases[Math.floor(Math.random() * phases.length)]
// console.log(phase)

let phasee = document.querySelector('.loading-screenn #phase')
phasee.textContent = phase
// end loading screen (onload)


// start of appontment sct
let appontmentbutton = document.querySelectorAll(".appontment")
let containerfull = document.querySelector(".containerfull")
let loadingscreen = document.querySelector(".containerfull .loading-screen")
let form = document.querySelector(".containerfull form")
let cancleapa = document.querySelector(".containerfull form .cancle")


appontmentbutton.forEach(function(e){
    e.onclick = function(){
        containerfull.style.display = "flex"
        document.body.style.overflowY = "hidden"
        setTimeout(() => {
            loadingscreen.style.display = "flex"
        },1000);
        setTimeout(() => {
            loadingscreen.style.display = "none"
            form.style.display = "flex"
        }, 9000);//9
    }
    cancleapa.onclick = function(){
        containerfull.style.display = "none"
        form.style.display = "none"
        document.body.style.overflowY = "auto"
    }
})
// end of appontment sct


// start of rating sec
let star1 = document.querySelector(".ratecontainer .left .stars ul li i")
let star2 = document.querySelector(".ratecontainer .left .stars ul li:nth-child(2) i")
let star3 = document.querySelector(".ratecontainer .left .stars ul li:nth-child(3) i")
let star4 = document.querySelector(".ratecontainer .left .stars ul li:nth-child(4) i")
let star5 = document.querySelector(".ratecontainer .left .stars ul li:nth-child(5) i")

function change1(color){
    star1.style.color = color
}
function change2(color){
    star2.style.color = color
    change1(color)
}
function change3(color){
    star3.style.color = color
    change1(color)
    change2(color)
}
function change4(color){
    star4.style.color = color
    change1(color)
    change2(color)
    change3(color)
}
function change5(color){
    star5.style.color = color
    change1(color)
    change2(color)
    change3(color)
    change4(color)
}


function chbg1(color){
    star1.style.color = color
}
function chbg2(color){
    star2.style.color = color
    chbg1(color)
}
function chbg3(color){
    star3.style.color = color
    chbg1(color)
    chbg2(color)
}
function chbg4(color){
    star4.style.color = color
    chbg1(color)
    chbg2(color)
    chbg3(color)
}
function chbg5(color){
    star5.style.color = color
    chbg1(color)
    chbg2(color)
    chbg3(color)
    chbg4(color)
}
let ratecon = document.querySelector(".ratecontainer")
let rateleft = document.querySelector(".ratecontainer .left")
let rateright = document.querySelector(".ratecontainer .right")
let rateresult = document.querySelector(".ratecontainer .rateres")
let stars = document.querySelectorAll(".ratecontainer .left .stars")
let canclerate = document.querySelector(".ratecontainer button")
stars.forEach((star) =>{
    star.onclick = function(){
        rateleft.style.display = "none"
        rateright.style.display = "none"
        rateresult.style.display = "block"
        setTimeout(function(){
            ratecon.style.bottom = "-400px"
            ratecon.style.opacity = "0"
        },5000)
    }
})
canclerate.onclick = function(){
    ratecon.style.opacity = "0"
    ratecon.style.bottom = "-400px"
}
// end of rating sec
