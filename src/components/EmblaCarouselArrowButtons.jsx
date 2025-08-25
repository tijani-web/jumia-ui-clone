import React from 'react'

export const PrevButton = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--prev" onClick={onClick} disabled={disabled}>
    ‹
  </button>
)

export const NextButton = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--next" onClick={onClick} disabled={disabled}>
    ›
  </button>
)

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: () => emblaApi && emblaApi.scrollPrev(),
    onNextButtonClick: () => emblaApi && emblaApi.scrollNext()
  }
}
