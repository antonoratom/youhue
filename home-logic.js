$('[product-intro="trigger"]').on('click', function () {
  $('[product-intro="target"]').click()
})
const swiper = new Swiper('.testimonials-clw', {
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.15,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 1.55,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.testimonials-arrow.r',
    prevEl: '.testimonials-arrow.l',
  },
})

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.benefit-video')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (video.tagName.toLowerCase() === 'video') {
          if (entry.isIntersecting) {
            //console.log('Playing video:', video);
            video.play()
          } else {
            //console.log('Pausing video:', video);
            video.pause()
          }
        } else {
          //console.error('Observed element is not a video:', video);
        }
      })
    },
    { threshold: 0.5 }
  )

  videos.forEach((video) => observer.observe(video))
})
if ($(window).width() > 990) {
  const toolKitTrigger = document.querySelector('[tool-kit-scrub="trigger"]')
  // Find the element with the class .toolkit-hor-sec
  const toolkitHorSecElement = document.querySelector('.toolkit-hor-full-w')
  const toolkitVertSecElement = document.querySelector('.toolkit-hor-wrap')
  const toolkitContainer = document.querySelector('[tool-kit="container"]')
  const toolKitTarget = document.querySelector('[tool-kit-scrub="target"]')

  if (toolkitHorSecElement && toolkitVertSecElement) {
    // Get the width of the element
    const toolkitWidth = toolkitHorSecElement.offsetWidth
    const toolkitContainerWidth = toolkitContainer.offsetWidth
    toolkitVertSecElement.style.height = `${toolkitWidth}px`
    toolKitTarget.style.width = `calc(100% - ${toolkitContainerWidth}px - var(--spacing-layout--row-col-gap-lg) / 2)`

    //console.log(`Width of toolkit container: ${toolkitContainerWidth}px`);
    //console.log(`Width of toolkit target: ${toolKitTarget}`);
  } else {
    //console.log('Element with class .toolkit-hor-full-w not found');
  }

  // RESIZE SECTION BASED ON SCROLL
  let loadTl = gsap.timeline()
  $('[hero-motion-wrapper="trigger"]').each(function () {
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'bottom bottom',
        end: '117% bottom',
        //markers: true,
        scrub: true,
        toggleActions: 'play play play reverse',
      },
    })
    scrollTl.to($(this).find('[hero-purple-bg="target"]'), {
      scale: 0.97,
      borderBottomLeftRadius: '5rem',
      borderBottomRightRadius: '5rem',
      duration: 0.5,
    })
  })

  $('[hero-motion-wrapper="trigger"]').each(function () {
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        //markers: true,
        scrub: true,
        toggleActions: 'play play play reverse',
      },
    })
    scrollTl.to($(this).find('[hero-lottie="target"]'), {
      top: '40vh',
    })
  })

  $('[three-benefits="trigger"]').each(function () {
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top 75%',
        end: 'bottom 75%',
        //markers: true,
        // scrub: true,
        toggleActions: 'play play play reverse',
      },
    })
    scrollTl.from($(this).find('[three-benefits="target"]'), {
      x: 24,
      opacity: 0,
      duration: 0.6,
      stagger: { each: 0.1 },
    })
    scrollTl.from(
      $(this).find('[three-benefits-card="target"]'),
      {
        x: 24,
        opacity: 0,
        rotation: 7,
        duration: 2.5,
        ease: 'elastic.out(1,0.3)',
        stagger: { each: 0.1 },
      },
      0
    )
    scrollTl.from(
      $(this).find('[three-benefits="target-add"]'),
      {
        opacity: 0,
        duration: 1.2,
        // stagger: { each: 0.1 },
      },
      1
    )
  })

  $('[emotions-cards="target"]').each(function () {
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: '20% 35%',
        end: '75% 35%',
        // markers: true,
        scrub: true,
        // toggleActions: 'play play play reverse',
      },
    })
    scrollTl.to(
      $(this).find('.first'),
      {
        scale: 0.93,
      },
      0
    )
    scrollTl.to(
      $(this).find('.second'),
      {
        scale: 0.95,
      },
      0
    )
    scrollTl.to(
      $(this).find('.third'),
      {
        scale: 0.97,
      },
      0
    )
  })

  let scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: toolKitTrigger,
      start: 'top bottom',
      end: 'bottom bottom',
      //markers: true,
      scrub: true,
      toggleActions: 'play play play reverse',
    },
  })
  scrollTl.to(toolKitTarget, {
    x: '-100%',
  })

  $('[lottie-section="trigger"]').each(function () {
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: '5% 10%',
        end: 'bottom 30%',
        //markers: true,
        // toggleActions: 'play play play reverse',
        onEnter: () => {
          // Kill existing animation for the target
          gsap.killTweensOf('[lottie-section="target"]')

          // Start a new animation
          let scrollTl = gsap.timeline({}).to('[lottie-section="target"]', {
            top: '-52vh',
            duration: 2.2,
          })
        },
        onLeaveBack: () => {
          // Kill existing animation for the target
          gsap.killTweensOf('[lottie-section="target"]')

          // Start a new animation
          let scrollTl = gsap.timeline({}).to('[lottie-section="target"]', {
            top: '0',
            duration: 0.8,
          })
        },
      },
    })
  })
}
