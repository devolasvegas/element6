import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import linkmonicPortfolioThumba from "../../images/portfolio/linkmonic-portfolio-thumb-1a.jpg"
import linkmonicPortfolioThumbb from "../../images/portfolio/linkmonic-portfolio-thumb-1b.jpg"
import linkmonicPortfolioThumbc from "../../images/portfolio/linkmonic-portfolio-thumb-1c.jpg"

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
                    <img src={linkmonicPortfolioThumba} alt="LinkMonic" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.3, duration: 1 }}>
                    <img src={linkmonicPortfolioThumbb} alt="LinkMonic" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.5, duration: 1 }} >
                    <img src={linkmonicPortfolioThumbc} alt="LinkMonic" />
                </motion.div>
            </div>
        </div>        
        <motion.div ref={ref} className="col-md-7"
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
            transition={{ delay: 1.5, duration: 1 }} >
        <div className="portfolioText">
            <div className="translate-left">
                <div className="description-title-text left">
                    <p>application. <span>linkmonic</span></p>
                </div>
                <div className="des-programs-author left">
                    <h6>branding, art direction, ui design, ux, html, css, js</h6>
                    <p>author: <span>kyle jessop, jennifer hawkyard, clive moore</span></p>
                </div>
            </div>	
        </div>
    </motion.div>            
    </>
    )
}