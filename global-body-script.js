let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let e = window.pageYOffset || document.documentElement.scrollTop;
  const t = window.innerWidth,
    o = window.innerHeight,
    r = document.querySelector(".main-wrap.for-header");
  t > 1e3 &&
    o < 660 &&
    (e > lastScrollTop
      ? ((r.style.transition = "opacity 0.4s ease"), (r.style.opacity = "0"))
      : ((r.style.transition = "opacity 0.4s ease"), (r.style.opacity = "1"))),
    (lastScrollTop = e <= 0 ? 0 : e);
}),
  (document.querySelector(".footer_dynamic_year").textContent =
    new Date().getFullYear()),
  document.querySelectorAll("[modal-open='trigger']").forEach((e) => {
    e.addEventListener("click", function () {
      document.querySelector(".main-wrap.for-modal").classList.add("show"),
        document.querySelector(".modal-cont").classList.add("show");
    });
  }),
  document.querySelectorAll("[modal-close='trigger']").forEach((e) => {
    e.addEventListener("click", function () {
      document
        .querySelector(".main-wrap.for-modal.show")
        .classList.remove("show"),
        document.querySelector(".modal-cont.show").classList.remove("show");
    });
  }),
  $(document).ready(function () {
    if ($(window).width() < 991) {
      let t;
      $(".burger-icon_wrap").click(function () {
        let e = $(this).data("clickCount") || 0;
        e++,
          $(this).data("clickCount", e),
          $(".burger-icon_bl").toggleClass("opened-burger"),
          $(".burger-icon_line").toggleClass("opened-burger");
      }),
        $("[burger-stagger-link='wrap']").each(function (e) {
          let t = $(this).find("[burger-stagger-link='target']"),
            o = gsap.timeline({ paused: !0 });
          o.fromTo(
            t,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, stagger: { amount: 0.6 } }
          );
          let r = 0;
          $('[burger-stagger-link="trigger"]').click(function () {
            r++, r % 2 == 1 ? o.timeScale(1).play() : o.timeScale(2).reverse();
          });
        });
      let o = 0;
      function e() {
        clearTimeout(t),
          window.scrollY !== o &&
            ((o = window.scrollY),
            (t = setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100)));
      }
      window.addEventListener("scroll", e),
        $('[for-burger-bg="trigger"]').each(function () {
          let e = $(this),
            t = $('[for-burger-bg="target"]'),
            o = $('[for-burger-bg-lines="target"]'),
            r = gsap.timeline({
              scrollTrigger: {
                trigger: e,
                start: "top top+=30",
                end: "bottom top+=80",
                toggleActions: "play reverse play reverse",
              },
            });
          r.to(t, { borderColor: "#fff", duration: 0.05 }),
            r.to(o, { backgroundColor: "#fff", duration: 0.05 }),
            ScrollTrigger.refresh();
        }),
        $('[modal-open="trigger"]').on("click", function () {
          $('[burger-stagger-link="trigger"]').click();
        });
    }
  });
const linkText = document.getElementById("text-trigger").textContent;
(document.getElementById("text-target").textContent = linkText),
  console.log(linkText);
