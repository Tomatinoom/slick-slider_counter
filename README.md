# slick-slider Counter

_Its my training project to expand the functionality of the [Slick Slider](https://kenwheeler.github.io/slick/)_

_jquery, js, [slick-carousel 1.8.1](https://www.npmjs.com/package/slick-carousel)_

## This code adds counter slides for slick-slider

![slider counter](https://github.com/Tomatinoom/slick-slider_counter/blob/master/images%20for%20README/counter.jpg) ![slider counter with slash](https://github.com/Tomatinoom/slick-slider_counter/blob/master/images%20for%20README/counter-slash.jpg)

To add a slide counter, use the function **_sliderCounter (slickSlider, classNameCounter, setingsSlick = {})_**.

For **counter with slash** use **_sliderCounterSlash (slickSlider, classCounter, setingsSlick = {})_**.

Where:

- **slickSlider** - slider selector.
- **classNameCounter** - class name of counter.
- **{}** - default options for slick-slider. You can add your settings.

for example:

```
sliderCounter(".slider-box", "slider__counter", {
    autoplay: true,
    infinite: true,
    dots: true,
  })
```

## Counter with slash

for styling the current slide and slides count use classes:

```
.slide-current
.slide-count
```

for example:

```
.slider__counter .slide-current{
            font-size: 44px;
            line-height: 44px;
            color: blue;
  }
```

Thanks for your attention
