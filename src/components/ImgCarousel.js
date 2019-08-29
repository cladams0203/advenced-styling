import styled from 'styled-components';
import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const CarouselContainer = styled(Carousel)`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    padding: 50px 0 ;
    margin: 50px 0;
    background: darkgrey;
    max-width: 1000px;
    border-radius: 3rem;
    box-shadow: 2px 2px 2px black;
`
const Image = styled.img `
width: 60%;
height: 300px;
margin: 0 auto
`
const CarouselText = styled(CarouselCaption) `
Color: Black
`

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
                        <Image src={item.url} alt={'Nasa pic of the Day'}></Image>
                        <CarouselText captionText={item.explanation} captionHeader={item.title} />
                    </CarouselItem>
                   
                )

            })
        
    return (
        <CarouselContainer activeIndex={activeIndex} next={next} previous={previous} >
            <CarouselIndicators items={props.imgData} activeIndex={activeIndex} onClickHandler={goToIndex} />
           
            {slides}
            
            <CarouselControl direction='prev' directionText='Prevoius' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </CarouselContainer>
    )

    
}