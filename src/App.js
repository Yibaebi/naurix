import React, { useMemo } from 'react'
import styles from './App.module.css'
import {
  ActionIcon,
  boatIsland,
  BrandFive,
  BrandFour,
  BrandOne,
  BrandThree,
  BrandTwo,
  clientImage,
  contactUsIllustration,
  expertServices,
  GlobeIcon,
  LinkIcon,
  LogoBlackAndWhite,
  LogoIpsumColored,
  ServiceAltPower,
  ServiceBranding,
  ServiceDesign,
  ServiceEngineering,
  ServiceNetworking,
  servicesCover,
  ServiceSurveillance,
  uburu,
  youFood,
} from './assets'
import { HorizontalTextScroller, NavBar } from './components'
import { useWindowSize } from './hooks'

function App() {
  const PROJECT_LIST = useMemo(
    () => [
      {
        name: 'YouFood',
        image: youFood,
        serviceType: 'Website, Product Design',
        description:
          'E-commerce and delivery application, with the store management dashboard for a Swedish Grocery startup',
        link: 'https://get.com',
      },
      {
        name: 'Uburu',
        image: uburu,
        serviceType: 'Product Design',
        description: 'Health Data management & data request portal for a Nigerian startup',
        link: 'https://get.com',
      },
      {
        name: 'Boat Island',
        image: boatIsland,
        serviceType: 'Product Design',
        description: 'Digital marketplace for creatives',
        link: 'https://get.com',
      },
    ],
    [],
  )

  // Client details mock
  const clientDetails = useMemo(
    () => ({
      image: clientImage,
      name: 'Oleg Svensson',
      designation: 'Head of Marketing, Ipsum Co.',
      comment:
        'Working with Naurix is a pleasure. we are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.',
      logo: LogoIpsumColored,
    }),
    [],
  )

  // Listen for window resize
  const windowSize = useWindowSize()

  return (
    <div className={styles.app_container}>
      <div className={`${styles.section} ${styles.header}`}>
        <header className={`${styles.app_header}`}>
          <NavBar />
          <h1>Brand. Design. Product Dev.</h1>
          <h1>
            Tech Installations <span>and more.</span>
          </h1>
          <p>
            Naurix is a strategic partner for fast-growing tech companies in need of a scalable website and future-proof
            brand identity.
          </p>
          <button className="button big button_white">Explore All Our Services</button>
        </header>
      </div>
      <div id="about" className={`${styles.section} ${styles.expert}`}>
        <section className={styles.expert_description}>
          <h6>
            <GlobeIcon /> Based in Lagos & Abuja, Nigeria
          </h6>
          <h3>We provide our expert services around the world</h3>
          <p>
            Our clients are the companies and startups who make the world go round — they treat diseases, move parcels,
            insure cars, create jobs, send emails and publish courses. Vast and complex businesses like these need
            digital experiences that are just as people-friendly as they are robust and scalable. Through challenging
            core assumptions, we shape the products and services that improve the lives of thousands every single day.
          </p>
        </section>
        <img src={expertServices} alt="service coverage" />
      </div>
      <div className={`${styles.section} ${styles.brands}`}>
        <section className={styles.brand_container}>
          <p>Brands we’ve worked with</p>
          {windowSize.width > 1120 && (
            <div className={styles.brand_list}>
              <BrandOne className={styles.brand} />
              <BrandTwo className={styles.brand} />
              <BrandThree className={styles.brand} />
              <BrandFour className={styles.brand} />
              <BrandFive className={styles.brand} />
            </div>
          )}
        </section>
        {windowSize.width <= 1120 && (
          <HorizontalTextScroller
            text={
              <React.Fragment>
                <BrandOne className={styles.brand} />
                <BrandTwo className={styles.brand} />
                <BrandThree className={styles.brand} />
                <BrandFour className={styles.brand} />
                <BrandFive className={styles.brand} />
              </React.Fragment>
            }
            customContainerClassName={styles.horizontal_scroll_text}
          />
        )}
      </div>
      <section id="services" className={`${styles.services_container}`}>
        <header>
          <h6>Our Services</h6>
          <h3>Services We Provide</h3>
          <p>
            From refining your brand identify and running campaigns to powering your digital presence, we do it all.
          </p>
        </header>
        <section className={styles.services_list}>
          <div className={styles.service_item}>
            <ServiceBranding />
            <h5>Branding</h5>
            <p>New or established, we create high-quality visual identity designs for startups</p>
          </div>
          <div className={styles.service_item}>
            <ServiceDesign />
            <h5>Design</h5>
            <p>
              Modern and user-friendly experiences, designed to drive higher conversions, greater brand engagement &
              repeat visits
            </p>
          </div>
          <div className={styles.service_item}>
            <ServiceEngineering />
            <h5>Software Engineering</h5>
            <p>
              Quality customized software solutions for the web and mobile. Develop, deploy and maintain software using
              a predefined set of requirements
            </p>
          </div>
          <div className={styles.service_item}>
            <ServiceNetworking />
            <h5>Networking/Network Infrastructure</h5>
            <p>
              Cutting-edge and innovative infrastructure strategies and solutions that empower your business to stand
              out from your competitors
            </p>
          </div>
          <div className={styles.service_item}>
            <ServiceSurveillance />
            <h5>Security & Surveillance Tech</h5>
            <p>
              Get complete surveillance solution installed for any type of business, residential or community scenarios
            </p>
          </div>
          <div className={styles.service_item}>
            <ServiceAltPower />
            <h5>Solar & Alternative Power</h5>
            <p>Reliable and alternative electricity with renewable energy such as solar panels, inverters etc</p>
          </div>
        </section>
      </section>
      <section id="works" className={styles.project_container}>
        <header>
          <h6>Our work</h6>
          <h3>Some Projects</h3>
          <p>
            We love projects that challenge us and force us to think out of the box. We'll never do work that's generic
            or follow trends blindly. We’re passionate about thoughtful projects that tell a story.
          </p>
        </header>
        <section className={styles.project_list}>
          {PROJECT_LIST.map(project => {
            return (
              <div key={project.name} className={styles.project_item}>
                <img src={project.image} alt={project.name} />
                <aside className={styles.project_details}>
                  <p>{project.serviceType}</p>
                  <h5>{project.name}</h5>
                  <a className={styles.project_link} href={project.link} target="_blank" rel="noreferrer">
                    <LinkIcon />
                  </a>
                </aside>
                <p className={styles.project_desc}>{project.description}</p>
              </div>
            )
          })}
        </section>
        <img src={servicesCover} alt="happy team" />
      </section>
      <section className={`${styles.project_container} ${styles.testimonial_container}`}>
        <header>
          <h6>testimonials</h6>
          <h3>Hear From Our Clients</h3>
          <p>
            We have an amazing record of customer satisfaction. Here is some kind words form our clients around the
            world
          </p>
        </header>
        <div className={styles.client_comment__details}>
          <section className={styles.client_info__container}>
            <img src={clientDetails.image} alt={clientDetails.name} />
            <aside>
              <h5>{clientDetails.name}</h5>
              <h6>{clientDetails.designation}</h6>
              <p>{clientDetails.comment}</p>
            </aside>
          </section>
          <section className={styles.client_logo__container}>
            <LogoIpsumColored />
          </section>
        </div>
      </section>

      <HorizontalTextScroller
        text="let’s work together"
        secText="info@naurix.com"
        customContainerClassName={styles.horizontal_scroll_text}
      />

      <div id="contact" className={`${styles.section} ${styles.expert} ${styles.contact_us__container}`}>
        <img src={contactUsIllustration} alt="contact us illustration" />
        <section className={styles.contact_us__content}>
          <h6>Contact Us</h6>
          <h3>ready to discuss A Project? Drop Us A Line</h3>
          <div className={styles.contact_info}>
            <label htmlFor="email">Email Address</label>
            <a href="mailto:info@naurix.com" id="email">
              info@naurix.com
            </a>
            <a href="mailto:info@naurix.com" id="email" className={styles.cta_icon}>
              <ActionIcon />
            </a>
          </div>
          <div className={styles.contact_info}>
            <label>Phone Number</label>
            <a href="tel:+2349012345678">+234-9012345678</a>
            <a href="tel:+2349012345678" className={styles.cta_icon}>
              <ActionIcon />
            </a>
          </div>
        </section>
      </div>
      <footer className={`${styles.section} ${styles.footer}`}>
        <div className={styles.footer_links__wrapper}>
          <LogoBlackAndWhite className={styles.footer_logo} />
          <ul className={styles.footer_links}>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#works">Our Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <hr />
        <hr />
        <hr />

        <span className={styles.footer_copy}>Copyright {new Date().getFullYear()}. All rights Reserved.</span>
      </footer>
    </div>
  )
}

export default App
