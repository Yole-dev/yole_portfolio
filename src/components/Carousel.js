import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectClipsCarousel({
  img1 = "",
  img2 = "",
  img3 = "",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      speed: 20,
      dragFree: true,
      slidesToScroll: 1,
    },
    [Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section
      className="embla"
      ref={emblaRef}
      onMouseEnter={() => emblaApi?.plugins()?.autoplay?.stop()}
      onMouseLeave={() => emblaApi?.plugins()?.autoplay?.play()}
    >
      <div className="embla__container">
        <div className="embla__slide">
          <div className="project-img-container">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="embla__slide">
          <div className="project-img-container">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="embla__slide">
          <div className="project-img-container">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
