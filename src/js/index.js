new Swiper ('.swiper',{
    pagination: {
        el: '.swiper-dots',
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById ('burger').addEventListener ('click',function()
    {
        document.querySelector('header').classList.toggle('open')
    })
})