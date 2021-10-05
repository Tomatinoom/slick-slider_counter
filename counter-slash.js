function checkSlider(slickSlider) {
  const sliderLength = $(slickSlider + ">div").length;
  return sliderLength > 1 ? true : false;
}

function sliderCounterSlash(slickSlider, classCounter, setingsSlick = {}) {
  if (checkSlider(slickSlider)) {
    const currentSlide = document.createElement("div");
    currentSlide.classList.add("slide-current");
    const slidesCount = document.createElement("div");
    slidesCount.classList.add("slide-count");
    const sliderCounter = document.createElement("div");
    sliderCounter.classList.add(classCounter);

    function updateSliderCounter(slick) {
      slidesCount.textContent =
        slick.slideCount > 9 ? `/${slick.slideCount}` : `/0${slick.slideCount}`;
      const current = slick.slickCurrentSlide() + 1;
      currentSlide.textContent = current > 9 ? `${current}` : `0${current}`;
      sliderCounter.append(currentSlide);
      sliderCounter.append(slidesCount);
    }

    $(slickSlider)
      .on("init", function (event, slick) {
        $(slickSlider).append(sliderCounter);
        updateSliderCounter(slick);
      })
      .on("afterChange", function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
    $(slickSlider).slick(setingsSlick);
  } else console.log("Slider empty or contains one slide. Add more slides");
}
