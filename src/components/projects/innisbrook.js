import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import innisbrookGolfCoursePortfolioThumba from "../../images/portfolio/innisbrook-golf-course-portfolio-thumb-1a.jpg"
import innisbrookGolfCoursePortfolioThumbb from "../../images/portfolio/innisbrook-golf-course-portfolio-thumb-1b.jpg"
import innisbrookGolfCoursePortfolioThumbc from "../../images/portfolio/innisbrook-golf-course-portfolio-thumb-1c.jpg"

export default function MuskokaBrewery() {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <>
        <motion.div ref={ref} className="col-md-7"
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
            transition={{ delay: 1.5, duration: 1 }} >
        <div className="portfolioText">
            <div className="translate-right">
                <div className="description-title-text left">
                    <p>social media. <span>innisbrook</span></p>
                </div>
                <div className="des-programs-author left">
                    <h6>social media strategy, art direction, branding, graphic design</h6>
                    <p>authors: <span>clive moore, stephanie danielle</span></p>
                </div>
            </div>	
        </div>
    </motion.div>         
    <div className="col-md-5">
    <div className="work-wrap">
        <motion.div ref={ref}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
            transition={{ delay: 0.1, duration: 1 }} >
            <img src={innisbrookGolfCoursePortfolioThumba} alt="Innisbrook" />
        </motion.div>
        <motion.div ref={ref}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
            transition={{ delay: 0.3, duration: 1 }}>
            <img src={innisbrookGolfCoursePortfolioThumbb} alt="Innisbrook" />
        </motion.div>
        <motion.div ref={ref}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
            transition={{ delay: 0.5, duration: 1 }} >
            <img src={innisbrookGolfCoursePortfolioThumbc} alt="Innisbrook" />
        </motion.div>
    </div>
</div>        
    </>
    )
}