import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import anime from 'animejs'

// SVG
import SvgOne from "../../images/SvgOne"
import SvgTwo from "../../images/SvgTwo"
import SvgThree from "../../images/SvgThree"
import SvgFour from "../../images/SvgFour"

export default function AboutUs() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '20%'
    })
    
    return (
    <>
    <div className="row">
        <div className="col-md-6 about-pillar">
            <motion.div ref={ref} className="about-icon"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} >
                <SvgOne /> 
            </motion.div>
            <motion.div ref={ref} className="about-wrap"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }} >
                <h5>branding & identity</h5>
                <p>For new start-up companies or established companies we will build a strong brand that will connect you and develop strong relationships with your customer.</p>
            </motion.div>      
        </div>

            <div className="col-md-6 about-pillar">
            <motion.div ref={ref} className="about-icon"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} >
                <SvgTwo />
            </motion.div>
            <motion.div ref={ref} className="about-wrap"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} >
                <h5>user experience</h5>
                <p>A user friendly responsive website is essential to creating a successful brand experience, we will create a website that is forward thinking and aligns with your audience.</p>
            </motion.div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 about-pillar">
            <motion.div ref={ref} className="about-icon"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} >
                <SvgThree />
            </motion.div>
            <motion.div ref={ref} className="about-wrap"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }} >
                <h5>web design & development</h5>
                <p>A professionally designed website is essential to creating brand awareness and building your online presence.</p>
            </motion.div>
        </div>

        <div className="col-md-6 about-pillar">
            <motion.div ref={ref} className="about-icon"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.2, duration: 1 }} >
                <SvgFour />                    
            </motion.div>
            <motion.div ref={ref} className="about-wrap"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.2, duration: 1 }} >    
                <h5>social media strategy</h5>
                <p>Connecting socially with your target audience is key to promoting your business<br /> and building brand awareness.</p>
            </motion.div>
        </div>
    </div>
    </>
    )
}