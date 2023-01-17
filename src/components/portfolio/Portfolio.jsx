import React from 'react';
import IMG7 from '../../assets/workImg01.png';
import IMG6 from '../../assets/Metaversus.png';
import IMG5 from '../../assets/workImg07.png';
import IMG4 from '../../assets/workImg09.png';
import IMG2 from '../../assets/workImg11.png';
import IMG1 from '../../assets/workImg0012.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'YouTube 2.0',
      img: IMG1,
      description:
        'YouTube Clone. Can play any YouTube video & Search any YouTube channel',
      technologies: 'React JS | Tailwind CSS | Material UI',
      link: 'https://imtiazshawn.github.io/YouTube-2.0/',
    },
    {
      id: 2,
      title: 'Modern Animated Metaversus Web Application',
      img: IMG6,
      description:
        'Fully Responsive website with beautiful animations',
      technologies: 'Next JS | Framer-Motion | Tailwind CSS',
      link: 'https://metaversus-modern-web-application.vercel.app/',
    },
    {
      id: 3,
      title: 'Social Media Application',
      img: IMG4,
      description:
        'I build this only frontend part. I used react-router-dom to go different pages',
      technologies: 'React JS | CSS',
      link: 'https://socialmedia-imtiazshawn.netlify.app/',
    },
    {
      id: 4,
      title: 'Amazon E-Commarce Clone',
      img: IMG2,
      description: 'E-commarce website with add to cart function',
      technologies: 'React JS | CSS',
      link: 'https://imtiazshawn.github.io/amazon-2.0/',
    },
    {
      id: 5,
      title: 'Modern UI Web Application',
      img: IMG7,
      description:
        'It is modern UI/UX web application which is build from sketch',
      technologies: 'React JS | CSS',
      link: 'https://imtiazshawn.github.io/modern-ui-webapp/',
    },
    {
      id: 6,
      title: 'E-Commarce Web Application',
      img: IMG5,
      description:
        'Fully responsive E-commarce website with add to cart functionality',
      technologies: 'React JS | Tailwind CSS',
      link: 'https://imtiazshawn.github.io/Ecommarce-Web-App/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className='gradient__text'>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
