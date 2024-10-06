//Auto hide header on screens smaller than 600px
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const mainWrap = document.querySelector(".main-wrap.for-header");

  if (screenWidth > 1000 && screenHeight < 660) {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      mainWrap.style.transition = "opacity 0.4s ease";
      mainWrap.style.opacity = "0";
    } else {
      // Scrolling up
      mainWrap.style.transition = "opacity 0.4s ease";
      mainWrap.style.opacity = "1";
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// auto change year in footer
document.querySelector(".footer_dynamic_year").textContent =
  new Date().getFullYear();

//OPEN / CLOSE Login Modal window
// Add event listeners to elements with [modal-open='trigger']
document
  .querySelectorAll("[modal-open='trigger']")
  .forEach((triggerElement) => {
    triggerElement.addEventListener("click", function () {
      // Add .show class to .main-wrap.for-modal and .container.for-mod
      document.querySelector(".main-wrap.for-modal").classList.add("show");
      document.querySelector(".modal-cont").classList.add("show");
    });
  });

// Add event listeners to elements with [modal-open='target']
document
  .querySelectorAll("[modal-close='trigger']")
  .forEach((targetElement) => {
    targetElement.addEventListener("click", function () {
      // Remove .show class from .main-wrap.for-modal and .container.for-mod
      document
        .querySelector(".main-wrap.for-modal.show")
        .classList.remove("show");
      document.querySelector(".modal-cont.show").classList.remove("show");
    });
  });

/* CUSTOM CODE FOR NAV COLOR */
$(document).ready(function () {
  //Burger menu adding classes on click
  if ($(window).width() < 991) {
    $(".burger-icon_wrap").click(function () {
      let clickCount = $(this).data("clickCount") || 0;
      clickCount++;
      $(this).data("clickCount", clickCount);

      $(".burger-icon_bl").toggleClass("opened-burger");
      $(".burger-icon_line").toggleClass("opened-burger");
    });

    $("[burger-stagger-link='wrap']").each(function (index) {
      let burgerItem = $(this).find("[burger-stagger-link='target']");

      let burgerTl = gsap.timeline({ paused: true });
      burgerTl.fromTo(
        burgerItem,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: { amount: 0.6 } }
      );

      let clickCount = 0;

      $('[burger-stagger-link="trigger"]').click(function () {
        clickCount++;
        if (clickCount % 2 === 1) {
          burgerTl.timeScale(1).play();
        } else {
          burgerTl.timeScale(2).reverse();
        }
      });
    });

    // // Function to track user scroll in 1000px intervals in both directions
    // function trackUserScroll() {
    //   let lastScroll = window.scrollY;

    //   window.addEventListener('scroll', function () {
    //     const currentScroll = window.scrollY;
    //     const scrollDifference = currentScroll - lastScroll;

    //     if (Math.abs(scrollDifference) >= 1000) {
    //       const scrollDirection = scrollDifference > 0 ? 'down' : 'up';
    //       console.log(
    //         `User scrolled 1000px ${scrollDirection}. Scroll position: ${currentScroll}px`
    //       );
    //       lastScroll = currentScroll;

    //       // Refresh ScrollTrigger each time the user scrolls 1000px
    //       ScrollTrigger.refresh();
    //     }
    //   });
    // }

    // // Call the function to start tracking user scroll
    // trackUserScroll();

    let isScrolling; // Variable to hold the timeout
    let lastScrollY = 0; // Variable to track the last scroll position

    // Function to handle scroll events
    function trackScrolling() {
      // Clear the previous timeout
      clearTimeout(isScrolling);

      // Check if the page is currently scrolling
      if (window.scrollY !== lastScrollY) {
        // console.log('Scrolling...'); // Log when scrolling starts
        lastScrollY = window.scrollY; // Update last scroll position

        // Set a timeout to run when scrolling ends
        isScrolling = setTimeout(() => {
          ScrollTrigger.refresh();
          // console.log('Scrolling has stopped.'); // Log when scrolling stops
        }, 100); // Adjust the timeout duration as needed (100ms in this case)
      }
    }
    // Add the scroll event listener
    window.addEventListener("scroll", trackScrolling);

    $('[for-burger-bg="trigger"]').each(function () {
      let burgerTrigger = $(this);
      let burgerTarget = $('[for-burger-bg="target"]');
      let burgerTargetLines = $('[for-burger-bg-lines="target"]');

      let scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: burgerTrigger,
          start: "top top+=30",
          end: "bottom top+=80",
          //markers: true,
          toggleActions: "play reverse play reverse",
          // onRefresh: () => console.log('ScrollTrigger refreshed!'),
        },
      });
      scrollTl.to(burgerTarget, {
        borderColor: "#fff",
        duration: 0.05,
      });
      scrollTl.to(burgerTargetLines, {
        backgroundColor: "#fff",
        duration: 0.05,
      });

      // Refresh ScrollTrigger after creating the timeline
      ScrollTrigger.refresh();
    });

    $('[modal-open="trigger"]').on("click", function () {
      $('[burger-stagger-link="trigger"]').click();
    });
  }
});

//REPLACE TEXT IN HEADER BUTTON
const linkText = document.getElementById("text-trigger").textContent;
document.getElementById("text-target").textContent = linkText;
// console.log(linkText);
