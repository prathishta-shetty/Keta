function boxAnimation() {
    var box = document.querySelector("#box1")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box1", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box1", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"

        })
    })
    var box = document.querySelector("#box2")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box2", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box2", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })
    })
    var box = document.querySelector("#box3")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box3", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box3", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })
    })
    var box = document.querySelector("#box4")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box4", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box4", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })
    })
    var box = document.querySelector("#box5")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box5", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box5", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })
    })
    var box = document.querySelector("#box6")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box6", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box6", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"



        })
    })
    var box = document.querySelector("#box7")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box7", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",

        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box7", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })

    })
    var box = document.querySelector("#box8")
    box.addEventListener("mouseenter", function () {
        gsap.to("#box8", {
            scale: 1.1,
            y: -50,
            backgroundColor: "#A0FF27",
            borderRadius: "25px",
        })
    })
    box.addEventListener("mouseleave", function () {
        gsap.to("#box8", {
            scale: 1,
            y: 0,
            backgroundColor: "#2A3539",
            borderRadius: "0px"


        })
    })
}
function Page1Animation() {
    var tl = gsap.timeline()
    tl.from("#logo,#about-us,#signupbtn", {
        opacity: 0,
        y: -100,
        duration: 1,
        delay: 1,
        stagger: 0.4
    })
    tl.from("#part1 h1,#part1 p", {
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.15
    }, "Anim")
    tl.from(".center .center-part2 img", {
        opacity: 0,
        x: 100,
        duration: .8,

    }, "Anim")
    tl.from("#part2 button,#part2 h4", {
        opacity: 0,
        x: -100,
        duration: .8,
        stagger: 0.15
    })
    tl.from("#part3 img,#part3 h4", {
        opacity: 0,
        y: 100,
        duration: .3,

    })
}
function Page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#middle",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            // markers:true,
            scrub: 3
        }
    })

    tl2.from("#middle-part1 h1", {
        opacity: 0,
        y: -60,
    })
    tl2.from("#middle-part2", {
        opacity: 0,
        y: -60
    })
    tl2.from("#middle-part2 .box", {
        opacity: 0,
        y: -60
    })
}
function Page4Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            start: "top 60%",
            end: "top 0",
            // markers:true,
            scrub: 2
        }
    })

    tl4.from("#heartpart1 h2,#heartpart1 p", {
        opacity: 0,
        x: -60,
        stagger: 0.1
    }, "prath")
    tl4.from("#heartpart2 .cards", {
        opacity: 0,
        y: -60,
        stagger: 0.1
    })
    tl4.from(".heart-part2 img", {
        opacity: 0,
        x: 120
    }, "prath")

}
function Page3Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            start: "top 60%",
            end: "top 0",
            // markers:true,
            scrub: 2
        }
    })

    tl3.from(".page3-part1 img", {
        opacity: 0,
        x: -60,

    }, "ash")
    // tl3.from(".accordion", {
    //     opacity: 0,
    //     y: 90,   /*-------------------------------- */
    //     stagger: 0.1
    // })
    tl3.from("#pg3part1 h2,#pg3part1 p", {
        opacity: 0,
        y: 90,
        stagger: .3
    }, "ash")

}

function FooterAnimation() {
    var tlf = gsap.timeline({
        scrollTrigger: {
            trigger: ".page6",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            // markers: true,
            scrub: 2
        }
    })

    tlf.from("#footer-info,#footer-info h1,#footer-info p,#footer-info button", {
        opacity: 0,
        y: -60,
        stagger: 0.5,
        duration: 1
    })
    tlf.to("#footerup-part1 img", {
        opacity: 1,
        x: -150,

    }, "Anime")
    tlf.to("#footerdown-part1", {
        opacity: 1,
        x: -150,

    }, "Anime")
    tlf.to("#footerup-part2 h4", {
        opacity: 1,
        x: 150,
        stagger: 0.1

    }, "Anime")
    tlf.to("#footerdown-part2 h4", {
        opacity: 1,
        x: 150,
        stagger: 0.1

    }, "Anime")
}
function Cursor() {
    var crsr = document.querySelector("#cursor")
    

    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + 10 + "px"
        crsr.style.top = dets.y + 10 + "px"
    })
}
function Page5Animation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            // markers:true,
            scrub: 3
        }

    })
    tl5.from(".page5-part1 img",{
        x:-100,
        opacity:0,
        
    })
    tl5.from(".testimonial-slider",{
        x:200,
        opacity:0,
        
    })
    tl5.from("#pg5-part1 h2,#pg5-part1 p,.testimonial-box", {
        x: -120,
        opacity: 0,
        stagger: .1

    })
}
boxAnimation()
Page1Animation()
Page2Animation()
Page4Animation()
Page5Animation()
FooterAnimation()
Cursor()

Page3Animation()


const testimonials = [
    {
        text: '"Lorem, ipsum dolor sit amet  itaque repudiandae omnis. Exercitationem magni quo nihil, officiis corrupti earum iste repellat, tempore similique provident dignissimos. Amet, provident dolores."',
        name: "- Li Chun Chay"
    },
    {
        text: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni quo nihil, officiis corrupti earum iste repellat, tempore similique provident dignissimos. Amet, provident dolores."',
        name: "- Watson Gabriel"
    },
    {
        text: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni quo nihil, officiis corrupti earum iste repellat, tempore similique provident dignissimos. Amet, provident dolores."',
        name: "- Virat Kohli"
    },
    {
        text: '"Lorem, otam minus harum itaque repudiandae omnis. Exercitationem magni quo nihil, officiis corrupti earum iste repellat, tempore similique provident dignissimos. Amet, provident dolores."',
        name: "- James Anderson"
    }
];

 

let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonialText = document.getElementById('testimonial-text');
    const testimonialName = document.getElementById('testimonial-name');

    // Fade out
    testimonialText.style.opacity = 0;
    testimonialName.style.opacity = 0;

    setTimeout(() => {
        // Update content
        testimonialText.textContent = testimonials[index].text;
        testimonialName.textContent = testimonials[index].name;

        // Fade in
        testimonialText.style.opacity = 1;
        testimonialName.style.opacity = 1;
    }, 300); // Adjust timing to match CSS transition duration
}

function prevTestimonial() {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    showTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    showTestimonial(currentTestimonialIndex);
}

// Initialize the first testimonial
showTestimonial(currentTestimonialIndex);



























const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const content = item.querySelector('.content');

    // Mouse enter: Expand the content.
    item.addEventListener('mouseenter', () => {
        content.classList.add('show');
    });

    // Mouse leave: Collapse the content.
    item.addEventListener('mouseleave', () => {
        content.classList.remove('show');
    });
});
