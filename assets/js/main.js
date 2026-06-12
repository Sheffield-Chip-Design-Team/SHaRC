/* SHaRC site interactions: nav state, reveal-on-scroll, counters,
   and the hero chip "decomposition" parallax. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- nav ----- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav__links");

  function onScrollNav() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ----- reveal on scroll ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- animated counters ----- */
  var counters = document.querySelectorAll(".stat__n");
  function runCounter(el) {
    var target = parseInt(el.dataset.count, 10);
    if (reduceMotion) { el.textContent = target; return; }
    var t0 = null;
    var dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(runCounter);
  }

  /* ----- hero chip decomposition -----
     Layers spread apart as the user scrolls through the hero. */
  var stack = document.getElementById("chipStack");
  if (stack && !reduceMotion) {
    var layers = stack.querySelectorAll(".chip__layer");

    function explode() {
      var vh = window.innerHeight;
      var rect = stack.getBoundingClientRect();
      // The hero is pinned (position: sticky) for ~170svh of scroll runway;
      // finish the explosion around 75% of it so the fully-open stack is
      // held on screen for a beat before the page releases
      var progress = Math.min(Math.max(window.scrollY / (vh * 1.25), 0), 1);
      if (rect.bottom < -200) return;
      var eased = 1 - Math.pow(1 - progress, 2);
      layers.forEach(function (layer) {
        var depth = parseFloat(layer.dataset.depth);
        // package (0) sinks slightly; deeper layers lift further from the
        // static 44px-per-depth fan set in CSS
        var dy = depth === 0 ? 20 * eased : -depth * (44 + 78 * eased);
        layer.style.transform = "translateY(" + dy + "px)";
        layer.classList.toggle("is-tagged", progress > 0.08);
      });
    }
    // called directly: five style writes per event is cheap, and avoids a
    // queued-rAF flag that could wedge if a frame never fires
    window.addEventListener("scroll", explode, { passive: true });
    explode();
  }

  /* ----- tapeout gallery: flip cards ----- */
  document.querySelectorAll(".die").forEach(function (die) {
    function flip() { die.classList.toggle("is-flipped"); }
    die.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // let repo links work
      flip();
    });
    die.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
    });
  });

  /* ----- footer year ----- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
