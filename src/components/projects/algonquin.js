import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import algonquinFinanciala from "../../images/portfolio/algonquin-financial-portfolio-thumb-1a.jpg"
import algonquinFinancialb from "../../images/portfolio/algonquin-financial-portfolio-thumb-1b.jpg"
import algonquinFinancialc from "../../images/portfolio/algonquin-financial-portfolio-thumb-1c.jpg"

export default function Algonquin() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '20%'
    })

    return (
        <>
        <div className="col-md-5 portfolioImage">
            <div className="work-wrap">
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.1, duration: 1 }} >
                    <img src={algonquinFinanciala} alt="Algonquin Financial" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.3, duration: 1 }}>
                    <img src={algonquinFinancialb} alt="Algonquin Financial" />
                </motion.div>
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                    transition={{ delay: 0.5, duration: 1 }} >
                    <img src={algonquinFinancialc} alt="Algonquin Financial" />
                </motion.div>
            </div>
        </div>
        <motion.div ref={ref} className="col-md-7"
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
            transition={{ delay: 1.5, duration: 1 }} >
            <div className="portfolioText">
                <div className="translate-left">
                    <div className="description-title-text left">
                        <p>branding. <span>Algonquin Financial Services</span></p>
                    </div>
                    <div className="des-programs-author left">
                        <h6>logo design, branding, graphic design, wordpress, css</h6>
                        <p>author: <span>clive moore</span></p>
                    </div>
                </div>	
            </div>
        </motion.div>            
        </>
    )
}