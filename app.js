let cursor = document.querySelector(".cursor")
let cursorblur = document.querySelector(".cursorblur")

document.addEventListener("mousemove", event => { // added eventlistener on whole document(page) so wherever mouse scrolls the div cursor will follow it
    // console.log(event.x)
    cursor.style.left = event.x + 15 + "px" //this is to move it from x axis by updating the style
    cursor.style.top = event.y + "px" // this is to move it from y axis
    cursorblur.style.left = event.x - 125 + "px" //this is to move it from x axis by updating the style
    cursorblur.style.top = event.y - 125 + "px" // this is to move it from y axis

})

let h4all = document.querySelectorAll("#mainnav h4")
h4all.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        cursor.style.scale = 2
        cursor.style.border = "2px solid #fb4b4e"
        cursor.style.backgroundColor = "transparent"
        // cursor.style.transition = "linear 0.1s"
    })
    item.addEventListener("mouseleave", () => {
        cursor.style.scale = 1
        cursor.style.border = "1px solid #fb4b4e"
        cursor.style.backgroundColor = "#fb4b4e"
        // cursor.style.transition = "linear 0.1s"
    })
})

gsap.to("#mainnav", {
    backgroundColor: "#1B1725",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#mainnav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top - 11",
        scrub: 1,
    }
});

gsap.to(".main", {
    backgroundColor: "#1B1725",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        scrub: 2,
        end: "top -70%"

    }
})

