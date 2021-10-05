  function checkSlider(slickSlider) {
    const sliderLength = $(slickSlider + ">div").length;
    return sliderLength > 1 ? true : false;
  }

  function sliderCounter(slickSlider, classNameCounter, setingsSlick = {}) {
    if (checkSlider(slickSlider)) {
      let currentSlide;
      const sliderCounter = document.createElement("div");
      sliderCounter.classList.add(classNameCounter);

      function updateCounter(slick) {
        currentSlide = slick.slickCurrentSlide() + 1;
        sliderCounter.textContent =
          currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
      }

      $(slickSlider)
        .on("init", (event, slick) => {
          $(slickSlider).append(sliderCounter);
          updateCounter(slick);
        })
        .on("afterChange", (event, slick, currentSlide) => {
          updateCounter(slick, currentSlide);
        });
      $(slickSlider).slick(setingsSlick);
    } else console.log("Slider empty or contains one slide. Add more slides");
  }