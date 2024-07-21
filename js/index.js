console.log('hello')

$(".icon_1").click(()=>{
    console.log('GGGG');
    $("nav").animate({marginLeft:"-250px"},500);
    $(".nav_2").animate({marginLeft:"0"},500);

});
$(".nav_2").click(()=>{
    console.log('GGGG');
    $("nav").animate({marginLeft:"-0"},500)
    $(".nav_2").animate({marginLeft:"250px"},500);
});

for(let i=0 ; i < 4 ;i++){
    $("#sliderDown h3").eq(i).click(()=>{
        console.log('nnnn');
        $("#sliderDown div").eq(i).slideToggle();
    })
}

function count (){
    let now = new Date();
    const days =now.getDate()
    const hours =now.getHours();
    const minutes =now.getMinutes();
    const second =now.getSeconds();
    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(second)
    $(".hours").textContent = hours
}
count()

$("textarea").keyup(()=>{
    
    let myLength =$("textarea").val().length;

    $("#chars").text(
        100 -myLength < 0 ? "your available character finished" : 100 -myLength )
    });

    // 




// countdown.js

function countdown(eventDate) {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hours").innerHTML=hours + " H";
    document.querySelector(".days").innerHTML=days +" D";
    document.querySelector(".minutes").innerHTML=minutes +" m";
    document.querySelector(".seconds").innerHTML=seconds +" S";

}

const eventDate = new Date('October 25, 2026 00:00:00').getTime();

const x = setInterval(function() {
    countdown(eventDate);
}, 1000);

countdown(eventDate);