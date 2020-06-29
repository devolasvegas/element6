import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Branding() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '80%'
    })

    return (
        <>
        <div className="row">
            <motion.div ref={ref} className="col-md-4"
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: 0, duration: 1 }} >    
                <div className="services-wrap back-gray">							
                    <h5><span>&#xe001;</span> branding.</h5>
                    <p>We work with you to build a strong brand that will help you connect and develop strong relationships.</p>
                    <br />
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: 0.2, duration: 1 }} >   
                 
                <div className="services-wrap back-gray">
                    <h5><span>&#xe02b;</span> web development.</h5>
                    <p>A professionally designed website is essential to creating brand awareness and building your online presence..</p>
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe03b;</span> social media.</h5>
                    <p>We can work with you to develop an effective social media plan that is tailored to your needs, industry and budget.</p>
                </div>
            </motion.div>	
        </div>

            <div className="row">
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe033;</span> graphic design.</h5>
                    <p>We’ll provide you with professional and creative graphic design services you need within a budget that works well for you.</p>
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe050;</span> seo.</h5>
                    <p>Our search engine optimization services (SEO) ensure that your target demographic can easily find you online.</p>
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe032;</span> copywriting.</h5>
                    <p>Copy that motivates, inspires and engages your audience, we help you tell your story the right way.</p>
                    <br />
                </div>
            </motion.div>	
            </div> 
            
            <div className="row">            
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe00e;</span> display.</h5>
                    <p>To ensure we meet the diverse needs of our clients, our capabilities also include large-format printing.</p>
                    <br />
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe027;</span> swag.</h5>
                    <p>We’ll help you choose and build the right promotional products for your industry or business niche.</p>
                    <br />
                </div>
            </motion.div>	
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="services-wrap back-gray">
                    <h5><span>&#xe032;</span> collateral.</h5>
                    <p>We take extreme pride in making sure that your presentation folder, inserts and sell sheet are always the best they can be.</p>
                </div>
            </motion.div>	
        </div>
        </>
    )
}
