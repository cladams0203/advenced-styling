import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


export function ImgCarousel(props) {
    
    const [activeIndex, setActiveIndex] = useState(0)
    let animating = ''
    const onExiting = () => {
        animating = true;
    }
    const onExited = () => {
        animating = false;
    }
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.imgData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex)
    }
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.imgData.length - 1 ? 0 : activeIndex - 1;
        setActiveIndex(nextIndex)
    }
    const goToIndex = (newIndex) => {
        if (animating) return
        setActiveIndex(newIndex)
    }
    


    const slides = props.imgData.map((item) => {
                return (
                    <CarouselItem 
                        key={item.url}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <img src={item.url} alt={'hey'}></img>
                        <CarouselCaption captionText={item.explanation} captionHeader={item.title} />
                    </CarouselItem>
                )

            })
        
    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} autoPlay={false}>
            <CarouselIndicators items={props.imgData} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText='Prevoius' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    )

    
}