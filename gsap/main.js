AOS.init();

{
  // gsap.to(".photo", { duration: 2, x: 300, backgroundColor: "#560563", borderRadius: "20%", border: "5px solid module-explain", ease: "back" })
  //there are various ease available in gsap:     https://gsap.com/docs/v3/Eases/

  //FOR TEST: IMAGE AND CIRCLES:
  //random color function
  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  // Get all elements with the class 'colored-box'
  const elements = document.querySelectorAll('.circle');

  // Apply random color to each element
  elements.forEach(element => {
    element.style.backgroundColor = getRandomColor();
  });


  // gsap.from(".photo", { duration: 1.5, opacity: 0, scale: 1.3, ease: "back" })
  // gsap.from(".circle", { duration: 1, opacity: 0, y: "random(-200,200)", stagger: 0.25 })


  // gsap.from(".photo", { duration: 3, opacity: 0, scale: 0.3, ease: "back" })
  // gsap.from(".circle", { duration: 1, opacity: 0,delay:1, y: 150, stagger: 0.25 })

  //using timeline
  // var tl = gsap.timeline({ repeat: -1, yoyo: true })
  // tl.from(".photo", { duration: 3, opacity: 0, scale: 0.3,rotation: -360, ease: "back" })
  // tl.from(".photo", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back" })
  // tl.to(".photo", { duration: 1, rotation: -360 })
  // tl.from(".circle", { duration: 1, opacity: 0, y: 150, stagger: 0.25 })
  // tl.addLabel("circlesOutro", "+=1")
  // tl.to(".circle", { duration: 0.5, opacity: 0, x: 300, ease: "power3.out" }, "circlesOutro")
}

//navbar
{
  document.querySelector('#show').addEventListener('click', () => {
    document.getElementById('on-open').style.display = 'block'
    document.getElementById('show').style.display = 'none'
    document.getElementById('hide').style.display = 'block'
  })

  document.querySelector('#hide').addEventListener('click', () => {
    document.getElementById('on-open').style.display = 'none'
    document.getElementById('show').style.display = 'block'
    document.getElementById('hide').style.display = 'none'
  })
}

var tl = gsap.timeline()
//load animation
gsap.from("#module", { duration: 3, opacity: 0, scale: 0.3, rotation: -500, y: 150, ease: "back" })
gsap.from("#left", { duration: 3, opacity: 0, scale: 0.3, rotation: 180, ease: "back" })
gsap.from("#right", { duration: 3, opacity: 0, scale: 0.3, rotation: -180, ease: "back" })

//scroll animation
gsap.registerPlugin(ScrollTrigger)
// Initial properties for #left
{
  gsap.set("#left", {
    x: 0,
    y: 0,
    autoAlpha: 1,
  });
  gsap.to("#left", {
    scrollTrigger: {
      trigger: ".module-explain",
      // markers: true,
      scrub: true,
      // start: 3-200px center",
      end: "center top",
      toggleActions: "restart pause reverse reverse",
    },
    x: "-300vh",
    y: "110vh",
    ease: "none",
    duration: 5,
    autoAlpha: 0,
  })
}

//right
{
  gsap.set("#right", {
    x: 0,
    y: 0,
    autoAlpha: 1,
  })
  gsap.to("#right", {
    scrollTrigger: {
      trigger: ".module-explain",
      // markers: true,
      scrub: true,
      end: "center top",
      toggleActions: "restart pause reverse reverse"
    },
    x: "300vh",
    y: "110vh",
    ease: "none",
    duration: 5,
    autoAlpha: 0,
  })
}

//module
{
  //module
  gsap.set("#module", {
    x: 0,
    y: 0,
  })
  gsap.to("#module", {
    scrollTrigger: {
      trigger: ".module-explain",
      // markers: true,
      scrub: true,
      end: "center top",
      toggleActions: "restart pause reverse reverse",
    },
    // x: "30vh",
    x: window.innerWidth > 768 ? "40vh" : "10vh",
    y: "80vh",
    width: window.innerWidth > 768 ? "40vh" : "20vh",
    ease: "back",
    duration: 3,
  })

  //module-bg
  gsap.set("#module-bg", {
    x: 0,
    y: 0,
  })
  gsap.to("#module-bg", {
    scrollTrigger: {
      trigger: ".module-explain",
      // markers: true,
      scrub: true,
      end: "center top",
      toggleActions: "restart pause reverse reverse",
    },
    // x: "28vh",
    y: "80vh",
    // width:"50%",
    opacity: 0.7,
    ease: "back",
    duration: 3,
  })
}

//esp
gsap.from(".esp", {
  scrollTrigger: {
    trigger: ".esp",
    toggleActions: "restart pause reverse reverse",
  },
  duration: 3,
  opacity: 0,
  scale: 0,
  ease: "back",
  rotation: window.innerWidth > 768 ? -40 : -20,
  y: "-100px",
})
// gsap.to(".esp", {
//   scrollTrigger: {
//     trigger: ".esp",
//     markers: true,
//     toggleActions: "restart pause reverse reverse",
//   },
//   duration: 3,
//   rotation: 360,
//   ease: "back",
// })

//beam splitter
gsap.from(".bm", {
  scrollTrigger: {
    trigger: ".bm",
    toggleActions: "restart pause reverse reverse",
  },
  duration: 3,
  opacity: 0,
  scale: 0,
  ease: "back",
  rotation: window.innerWidth > 768 ? -40 : -20,
  y: "-100px",
})

//CUSTOM CURSOR
{
  // Check if it's a touch device
  const isTouchDevice = 'ontouchstart' in window;
  const createCursorFollower = () => {
    const $el = document.querySelector('.cursor-follower');
    // Each time the mouse coordinates are updated,
    // we need to pass the values to gsap in order
    // to animate the element
    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e;
      // Check if target is inside a link or button
      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
      // GSAP config
      gsap.to($el, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
      });
    });
    // Hidding the cursor element when the mouse cursor
    // is moved out of the page
    document.addEventListener('mouseleave', (e) => {
      gsap.to($el, {
        duration: 0.7,
        opacity: 0,
      });
    });
  };
  // Only invoke the function if isn't a touch device
  if (!isTouchDevice) {
    createCursorFollower();
  }
}