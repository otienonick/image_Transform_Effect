$( document ).ready(function() {
    // typing animation
    var typed = new Typed(".typing",{
        strings:["Nick","Otieno"],
        typeSpeed:60,
        backDelay: 3000,
        backSpeed:30,
        loop:true
    })
        setTimeout(function(){
        $('body').addClass('loaded');
    }, 3500);

});