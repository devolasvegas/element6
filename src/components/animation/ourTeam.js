import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function OurTeam() {

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
                <div className="team-wrap fst">
                    <h6>Peter Lain</h6>
                    <p><strong>President</strong></p>
                    <p>Peter is a serial entrepreneur and the President of the ImageOn Group of companies as well as ION Facilities Services, a national property management company</p>
                </div>
            </motion.div>

            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.2, duration: 1 }} >            
                <div className="team-wrap snd">
                    <h6>Shawn Tallon</h6>
                    <p><strong>Vice President</strong></p>
                    <p>Shawn has more than two decades of excellence in customer service and believes customer service and providing quality products are key to the success of any organization.</p>
                </div>
            </motion.div>

            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="team-wrap trd">
                    <h6>Clive Moore</h6>
                    <p><strong> Chief Creative Officer</strong></p>
                    <p>Clive is Chief Creative Officer at Element 6 and Commander in Chief of cm3 a design collective, he brings over 20 years branding and user experience design expertise to the team.</p>
                </div>
            </motion.div>
        </div>

        <div className="row">
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >
                <div className="team-wrap trd">
                    <h6>Jonathan Guthrie</h6>
                    <p><strong>Chief Technical Officer</strong></p>
                    <p>Jono has pursued custom system design and build right out of university, and has experience working with multiple development languages and platforms, as well as all levels of business including university and health projects. Jono is adept at systems architecture that ensures longevity and performance, is frequently called a propeller-head, and actively contributes to open source projects.</p>
                </div>
            </motion.div>

            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >
                <div className="team-wrap trd">
                    <h6>Slawomira Hatlas Weber</h6>
                    <p><strong>Creative Director</strong></p>
                    <p>Slawka is a professional graphic designer with experience in all facets of design. Her specialties include the creation of innovative print materials using photos, illustration and compelling layouts. In addition to her technical skills, Slawka has the ability to develop ideas that accurately and creatively reflect
                    a message and help to meet the objectives of a project. Clients are continually impressed by her energy, willingness to contribute to the overall success of a project and ability to meet tight deadlines. </p>
                </div>
            </motion.div>
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="team-wrap trd">
                    <h6>Mark Carpenter</h6>
                    <p><strong>Director Of Business Development</strong></p>
                    <p>
                    An experienced business professional with over 22 highly successful years in Communications, Marketing, Advertising, and Public Relations, Mark excels at building strong relationships with industry experts, clients and members of his team. Mark is also a part-time Professor at Durham college, where he is known for his exceptional lectures and his ability to inspire his students and colleagues. 
                    </p>
                </div>
            </motion.div>
        </div>

        <div className="row">
            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >
                <div className="team-wrap trd">
                    <h6>Carole Wright</h6>
                    <p><strong>Community Manager</strong></p>
                    <p>A Western University graduate, Carole has over 20 years of experience in creative, dynamic roles such as project coordinator, adult education instructor, marketing coordinator and most recently as a lead copywriter. She's a also a grammar nerd. </p>
                </div>
            </motion.div>

            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >
                <div className="team-wrap trd">
                    <h6>Dan Zaina</h6>
                    <p><strong>Graphic/UI Designer</strong></p>
                    <p>Dan is currently a Graphic/UI Designer at Element 6. As a former graduate of the Graphic Design & Interactive Media Web Design program at Georgian College, Dan has worked on e-commerce platforms as well various front end digital publications.</p>
                </div>
            </motion.div>

            <motion.div ref={ref} className="col-md-4"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.4, duration: 1 }} >    
                <div className="team-wrap trd">
                    <h6>Ryan Moreau</h6>
                    <p><strong>Developer</strong></p>
                    <p>A self-taught web development guru, Ryan Moreau specializes in developing optimized and secure web sites and applications that follow industry best practices. When not using his abilities to create magical code, Ryan can be found wowing audiences as a professional magician.</p>
                </div>
            </motion.div>
        </div>
        </>
    )
}