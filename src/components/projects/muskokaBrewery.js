import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import muskokaBreweryPortfolioThumba from "../../images/portfolio/muskoka-brewery-portfolio-thumb-1a.jpg"
import muskokaBreweryPortfolioThumbb from "../../images/portfolio/muskoka-brewery-portfolio-thumb-1b.jpg"
import muskokaBreweryPortfolioThumbc from "../../images/portfolio/muskoka-brewery-portfolio-thumb-1c.jpg"

export default function MuskokaBrewery() {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <>
        <div className="col-md-5">
            <div className="work-wrap">
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.1, duration: 1 }} >
                    <img src={muskokaBreweryPortfolioThumba} alt="Muskoka Brewery" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.3, duration: 1 }}>
                    <img src={muskokaBreweryPortfolioThumbb} alt="Muskoka Brewery" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.5, duration: 1 }} >
                    <img src={muskokaBreweryPortfolioThumbc} alt="Muskoka Brewery" />
                </motion.div>
            </div>
        </div>        
        <motion.div ref={ref} className="col-md-7"
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
            transition={{ delay: 1.5, duration: 1 }} >
        <div className="portfolioText">
            <div className="translate-left">
                <div className="description-title-text left">
                    <p>website. <span>muskoka brewery</span></p>
                </div>
                <div className="des-programs-author left">
                <h6>art direction</h6>
                <p>authors: <span>TygerShark, Clive Moore, Brie Brash, Ryan Moreau, Fadi Shawish</span></p>        
                </div>
            </div>	
        </div>
    </motion.div>            
    </>
    )
}