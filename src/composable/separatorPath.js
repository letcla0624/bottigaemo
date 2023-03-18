import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSeparatorPath() {
  gsap.registerPlugin(ScrollTrigger);
  const paths = [...document.querySelectorAll("path.path-anim")];

  paths.forEach((el) => {
    const svgEl = el.closest("svg");
    const pathTo = el.dataset.pathTo;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgEl,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(el, {
        ease: "none",
        attr: { d: pathTo },
      });
  });
}
