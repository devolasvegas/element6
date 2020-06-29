import React from 'react'
import { CarouselProvider, Slide, Slider, Image, ButtonFirst, ButtonLast } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import innisbrook from "../images/logos/innisbrook.png"
import algonquin from "../images/logos/algonquin.png"
import misterTransmission from "../images/logos/mister-transmission.png"
import hydroOne from "../images/logos/hydro-one.png"
import muskoka from "../images/logos/muskoka.png"
import cannab from "../images/logos/cannab.png"
import barriePride from "../images/logos/barrie-pride.png"

export default function LogoCarousel() {
        return (
            <CarouselProvider className="noBg"
                naturalSlideWidth={500}
                naturalSlideHeight={150}
                totalSlides={7}
                visibleSlides={4}
                infinite={true}
                isPlaying={true}
            >
                <Slider>
                    <Slide index={0}>
                        <Image 
                            src={innisbrook} alt="Innisbrook" 
                        />
                    </Slide>
                    <Slide index={1}>
                        <Image 
                            src={algonquin} alt="Algonquin" 
                        />
                    </Slide>
                    <Slide index={2}>
                        <Image 
                            src={misterTransmission} alt="Mister Transmission" 
                        />
                    </Slide>
                    <Slide index={3}>
                        <Image 
                            src={hydroOne} alt="Hydro One" 
                        />
                    </Slide>
                    <Slide index={4}>
                        <Image 
                            src={muskoka} alt="Muskoka Brewery" 
                        />
                    </Slide>
                    <Slide index={5}>
                        <Image 
                            src={cannab} alt="Cannab Agency" 
                        />
                    </Slide>
                    <Slide index={6}>
                        <Image 
                            src={barriePride} alt="Barrie Pride" 
                        />
                    </Slide>
                </Slider>   
                <div className="dotContainer">   
                    <ButtonFirst />
                    <ButtonLast />
                </div>
            </CarouselProvider>
        );
}