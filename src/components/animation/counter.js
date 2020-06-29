import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ target, title, duration }) => {
	const [ref, inView] = useInView({
		triggerOnce: true
	});

	return (
        <>
        <div className="container z-bigger" ref={ref}>
        <div className="row">
            <div className="col-md-3">
                <div className="counter-wrap">
                    <p>
                        <CountUp 
                            end={inView ? 147 : 0} 
                            duration={5} 
                            useEasing={true} 
                        />
                    </p>
                    <h6>clients</h6>
                </div>	
            </div>
            
            <div className="col-md-3">
                <div className="counter-wrap">
                    <p>
                        <CountUp 
                            end={inView ? 2619 : 0 } 
                            duration={5} 
                            useEasing={true} 
                        />
                    </p>
                    <h6>projects</h6>
                </div>	
            </div>

            <div className="col-md-3">
                <div className="counter-wrap">
                    <p>
                        <CountUp 
                            end={inView ? 231 : 0 } 
                            duration={5} 
                            useEasing={true} 
                        />
                    </p>
                    <h6>brands</h6>
                </div>	
            </div>

            <div className="col-md-3">
                <div className="counter-wrap">
                    <p>
                        <CountUp 
                            end={inView ? 4 : 0} 
                            duration={5} 
                            useEasing={true} 
                        />
                    </p>
                    <h6>awards</h6>
                </div>	
            </div>
        </div>
        </div>
        </>
    );
};

export default Counter;