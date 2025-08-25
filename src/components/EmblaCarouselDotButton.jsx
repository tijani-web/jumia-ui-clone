import React from 'react'

export const DotButton = ({ selected, className, ...rest }) => (
  <button type="button" className={className} {...rest} />
)

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = React.useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick: scrollTo
  }
}
