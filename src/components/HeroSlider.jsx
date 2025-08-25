import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import hero1 from '../assets/images/jumify-hero-1.jpg'
import hero2 from '../assets/images/jumify-hero-2.jpg'
import hero3 from '../assets/images/jumify-hero-3.gif'
import hero4 from '../assets/images/jumify-hero-4.gif'
import hero5 from '../assets/images/jumify-hero-5.jpg'
import hero6 from '../assets/images/jumify-hero-6.jpg'
import hero8 from '../assets/images/jumify-hero-8.png'
import hero9 from '../assets/images/jumify-hero-9.png'


const HeroSlider = () => {
    const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade(), autoplay])

 const slides = [hero1, hero2, hero3, hero4, hero5, hero6, hero8, hero9 ]

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default  HeroSlider
