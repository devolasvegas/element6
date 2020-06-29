import React from 'react'

import logo from "../images/logo.png"
import ionGroup from "../images/logos/iongroup.svg"

import Cookie from './cookie'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Footer() {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <>
        <Cookie />
        <footer className="section back-dark padding-top-bottom overflow-hidden">
        <motion.div ref={ref} className="container"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }} >
        <div className="row">
            <div className="col-md-12" data-scroll-reveal="enter bottom move 100px over 1s after 0.4s">
                <div className="footer-top">
                    <img src={logo} alt="Element 6 logo" />
                </div>
            </div>
        </div>        
        <div className="footer-top col-md-12">
            <div className="social-footer">
                <ul className="list-social-footer">

                    <li className="icon-footer tipped" data-title="instagram"  data-tipper-options='{"direction":"top","follow":"true"}'>
                        <a href="https://www.instagram.com/element6io/" target="_blank" rel="noreferrer">&#xf16d;</a>
                    </li> 

                    <li className="icon-footer tipped" data-title="facebook"  data-tipper-options='{"direction":"top","follow":"true"}'>
                        <a href="https://www.facebook.com/Element-6-2046113445602816/" target="_blank" rel="noreferrer">&#xf09a;</a>
                    </li>

                    <li className="icon-footer tipped" data-title="twitter"  data-tipper-options='{"direction":"top","follow":"true"}'>
                        <a href="https://twitter.com/element6io" target="_blank" rel="noreferrer">&#xf099;</a>
                    </li>

                </ul>	
            </div>
        </div>
        <div className="row">
            <div className="footer-line"></div>
        </div>
        <div className="row">
        <div className="col-md-5" data-scroll-reveal="enter bottom move 100px over 1s after 0.4s">
            <div className="left-footer">
                <p>2020 &copy; Element 6 Inc. Part of the ImageOn Group of companies. All rights reserved.</p>
            </div>
        </div>
        <div className="col-md-2" data-scroll-reveal="enter bottom move 100px over 1s after 0.4s">
            <a href="#home" data-gal="m_PageScroll2id"><div className="arrow-up-footer"></div></a>
        </div>
        <div className="col-md-5" data-scroll-reveal="enter bottom move 100px over 1s after 0.4s">
            <div className="right-footer">
                 <p><a href="privacy.html">Privacy</a></p>
            </div>
        </div>
        </div>
        <div className="twelve columns remove-top remove-bottom marginless" data-scroll-reveal="enter bottom move 100px over 1s after 0.4s">
            <div className="footer-row">
                <div className="footer-logos two columns prepend-one">
                <a href="http://iongroup.ca/" target="_blank" rel="noreferrer">
                <img src={ionGroup} alt="ION Group of Companies" />
                </a>
                </div>
            </div>
        </div>
        </motion.div>
    </footer>	
    </>
    )
}
