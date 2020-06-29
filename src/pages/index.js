import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUs from "../components/animation/aboutUs"
import OurTeam from "../components/animation/ourTeam"
import Counter from "../components/animation/counter"
import Branding from '../components/animation/branding'

import Algonquin from "../components/projects/algonquin"
import LocalLeaf from "../components/projects/localLeaf"
import MuskokaBrewery from "../components/projects/muskokaBrewery"
import Innisbook from "../components/projects/innisbrook"
import LinkMonic from "../components/projects/linkMonic"

import LogoCarousel from '../components/carousel'
import Locations from '../components/map/locations'

const Home = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                image {
                  publicURL
                }
              }
              fields {
                slug
              }
      
            }
          }
        }
      }    
    `)



    return (
    <Layout>
    <SEO title="Home" />

    <div className="section full-height" id="home">
    <Carousel controls={false} fade={true}>
        <Carousel.Item>
            <Carousel.Caption className="home-text">
                <h1>helping local brands<br />create better experiences</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="home-text">
                <h1>fuelled by strategy<br />focused on results</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="home-text">
                <h1>connecting people<br />with products they love</h1>
            </Carousel.Caption>
        </Carousel.Item>    
    </Carousel>

<a href="#about" data-gal="m_PageScroll2id" data-ps2id-offset="78"><div className="link-down fade-elements"></div></a>

</div>

<div className="section back-white" id="about">
    <div className="section padding-top-bottom">
        <div className="container">
            <div className="twelve columns">
                <div className="title-text left">
                    <p>a. <span>about us</span></p>
                    <h3>We help businesses and startups turn ideas and passion into compelling brands that connect with their audiences needs and desires.</h3>
                </div>
            </div>
            <AboutUs />
        </div>
    </div>	
</div>

<div className="section padding-top-bottom back-dark">
<div className="container">
<Carousel controls={false} fade={true} className="testimonial">
        <Carousel.Item>
            <Carousel.Caption className="quote">
                <h4>&ldquo;Great things in business are never done by one person.<br />They&rsquo;re done by a team of people&rdquo;</h4>
                <p>&mdash;Steve Jobs</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="quote">
                <h4>&ldquo;The best way to predict the future is to create it.&rdquo;</h4>
                <p>&mdash;Abraham Lincoln"</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="quote">
                <h4>&ldquo;Design is not just what it looks like and feels like,<br />design is how it works.&rdquo;</h4>
                <p>&mdash;Steve Jobs</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="quote">
                <h4>&ldquo;If you think good design is expensive, you should look at<br />the cost of bad design.&rdquo;</h4>
                <p>&mdash;Ralf Speth</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption className="quote">
                <h4>&ldquo;Any product that needs a manual to work is broken.&rdquo;</h4>
                <p>&mdash;Elon Musk</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
</div>

<div className="section padding-top-bottom back-white" id="team">
    <div className="container">
        <div className="twelve columns">
            <div className="title-text left">
                <p>b. <span>our team</span></p>
                <h3 >We&rsquo;re a close team of entrepreneurs, creatives, designers & developers who work together to create beautiful, engaging brand experiences.</h3>
            </div>
        </div>
        <OurTeam />
    </div>
</div>

<div className="section padding-top-bottom">
    <div className="parallax-1"></div>
    <div className="dark-over-sep"></div>
        <Counter />
</div>

<div className="section padding-top-bottom back-white" id="work">
    <div className="container">

        <div className="twelve columns">
        <div className="title-text left">
        <p>c. <span>recent projects</span></p>
        <h3>We take pride in our work delivering outstanding quality and service.<br />We're an agency born out of passion, wanting to make great products that connect with people.</h3>
        </div>
        </div>

        <div className="clear"></div>

        <div className="portfolio"></div>

        <div className="row">
            <Algonquin />
        </div>
        <div className="row">
            <LocalLeaf />
        </div>
        <div className="row">
            <MuskokaBrewery />
        </div>
        <div className="row">
            <Innisbook />
        </div>
        <div className="row">
            <LinkMonic />
        </div>
    </div>	
</div>

<div className="section back-dark" id="clients">
<div className="container-fluid">
    <div className="row">
    <div className="portfolio-bottom-link">work with us</div>
        <div className="section padding-top-bottom">
            <div className="parallax-3"></div>
                <div className="dark-over-sep slider_master"></div>
                    <div className="container">
                        <LogoCarousel />
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="section back-white" id="services">
    <div className="section padding-top-bottom">
        <div className="container">
            <div className="twelve columns">
                <div className="title-text left">
                    <p>d. <span>engaging branding</span></p>
                    <h3>We create successful, innovative products from the initial concept through full product launch. We can handle anything you throw at us.</h3>
                </div>
            </div>
            <Branding />
        </div>	
    </div>
</div>

<span id="seperate"></span>

<div className="section back-white padding-top-bottom" id="blog">
    <div className="container">
        <div className="col-md-12">
            <div className="title-text left">
                <p>e. <span>business blogging</span></p>
                <h3>If you don't love writing, that's OK, because we do. Blogging is our business - have a peek below at some of our recent blogs.</h3>
            </div>
            <div className="row">
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <div className="col-md-4" data-scroll-reveal="enter bottom move 100px over 1s after 0.3s" key={edge.node.fields.slug}>
					<div className="blog-wrap">
						<span>&#xe049;</span>
						<h5>{edge.node.frontmatter.title}.</h5>
						<div className="content">
							<Link to={edge.node.fields.slug}>
								<div className="content-overlay"></div>
								<img className="content-image" src={edge.node.frontmatter.image.publicURL} alt={edge.node.frontmatter.title} />
								<div className="content-details fadeIn-bottom">
									<h5 className="content-title">read blog</h5>
								</div>
							</Link>
						</div> 
					</div>
				</div>	
                )
            })}          
            </div>          
            </div>
    </div>
</div>
<Locations />
</Layout>
)
}

export default Home