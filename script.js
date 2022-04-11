$( document ).ready(function() {
    // typing animation
    var typed = new Typed(".typing",{
        strings:["Nick","Otieno"],
        typeSpeed:60,
        backDelay: 3000,
        backSpeed:30,
        loop:true
    })
    // preloader
        setTimeout(function(){
        $('body').addClass('loaded');
    }, 3500);


});

    //opening/closing images
    var fullImgBox = document.getElementById('fullImgBox');
    var fullImg = document.getElementById('fullImg');

    function openFullImg(pic){
        fullImgBox.style.display = 'flex';
        fullImg.src = pic;
    };
    function closeFullImg(){
        fullImgBox.style.display = 'none';

    }