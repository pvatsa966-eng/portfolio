document.addEventListener("DOMContentLoaded", function () {

    console.log("Piyush Vatsa Portfolio Loaded");

    // Smooth scroll for navigation links

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // Animate skill bars when they become visible

    const skillBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.transition =
                        "width 1.2s ease";

                }

            });

        },

        {
            threshold: 0.2
        }

    );


    skillBars.forEach(function (bar) {

        observer.observe(bar);

    });

});
