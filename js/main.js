$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    if (typeof Typed !== "undefined") {
        if ($(".typing").length) {
            new Typed(".typing", {
                strings: ["a SDE III at Evertz India"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }

        if ($(".typing-2").length) {
            new Typed(".typing-2", {
                strings: ["a SDE III at Evertz India"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }
    }

    // History Tab System
    const tabBtns = document.querySelectorAll('.tab-btn');
    const experienceGroups = document.querySelectorAll('.experience-group');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // Update active button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show target group
            experienceGroups.forEach(group => {
                group.classList.remove('active');
                if (group.classList.contains(target)) {
                    group.classList.add('active');
                }
            });
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'light-mode') {
            body.classList.add('light-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            let theme = 'dark';
            if (body.classList.contains('light-mode')) {
                theme = 'light-mode';
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
            localStorage.setItem('theme', theme);
        });
    }

    // owl carousel script
    if ($.fn.owlCarousel && $(".carousel").length) {
        $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
});

// AOS Instance
if (typeof AOS !== "undefined") {
    AOS.init();
}
