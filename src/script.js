document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        console.log('Scroll event triggered');
        var header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


