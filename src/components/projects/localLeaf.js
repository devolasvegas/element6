import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import localLeafa from "../../images/portfolio/local-leaf-1.jpg"
import localLeafb from "../../images/portfolio/local-leaf-2.jpg"
import localLeafc from "../../images/portfolio/local-leaf-3.jpg"

export default function LocalLeaf() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '20%'
    })

    return (
        <>
            <div className="col-md-7 portfolioText">
                <motion.div ref={ref}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
                    transition={{ delay: 1.5, duration: 1 }} >
                    <div className="translate-right">
                        <div className="description-title-text right">
                            <p>website. <span>My Local Leaf</span></p>
                        </div>
                        <div className="des-programs-author right">
                            <h6>creative direction, copywriting, graphic design, css</h6>
                            <p>authors: <span>clive moore, carole wright, ryan moreau</span></p>
                            <a href="http://mylocalleaf.com/" target="blank" data-title="visit"><div className="link">discover</div></a>
                        </div>
                    </div>
                </motion.div>
            </div>     
            <div className="col-md-5 float-right">
                <div className="work-wrap">
                    <motion.div ref={ref}
                        animate={{ opacity: inView ? 1 : 0, y: inView? 0 : 150 }}
                        transition={{ delay: 0.1, duration: 1 }} >    
                        <img src={localLeafa} alt="local leaf website" />
                    </motion.div>
                    <motion.div ref={ref}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                        transition={{ delay: 0.3, duration: 1 }} >    
                        <img src={localLeafb} alt="local leaf website" />
                    </motion.div>
                    <motion.div ref={ref}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                        transition={{ delay: 0.5, duration: 1 }} >    
                        <img src={localLeafc} alt="local leaf website" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}