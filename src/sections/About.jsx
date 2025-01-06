import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import EducationCarousel from '../components/EducationalCarusel.jsx';
import { gsap } from 'gsap';

// import  {CardContainer} from '../components/ui/3d-card.jsx'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('samantapriya154@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const techStackData = [
    { name: 'HTML', logo: 'assets/pngegg.png' },
    { name: 'CSS', logo: 'assets/pngegg (1).png' },
    { name: 'Tailwind ', logo: 'assets/Tailwind CSS.png' },
    { name: 'Bootstrap', logo: 'assets/pngegg (4).png' },
    { name: 'SCSS', logo: 'assets/pngegg (5).png' },
    { name: 'JavaScript', logo: 'assets/pngegg (3).png' },
    { name: 'React JS', logo: 'assets/pngegg (6).png' },
    { name: 'Node.js', logo: 'assets/pngegg (2).png' },
    { name: 'MongoDB', logo: 'assets/pngegg (7).png' },
    { name: 'Express', logo: 'assets/icons8-express-js-48.png' },
    { name: 'Native', logo: 'assets/science.png' },
    { name: 'Postman', logo: 'assets/pngwing.com.png' }
  ];

  const circleRadius = 100;
  const globeRef = useRef(null);

  useEffect(() => {
    // GSAP animation for continuous rotation
    if (globeRef.current) {
      gsap.to(globeRef.current, {
        rotationX: 360, // Rotate along Y-axis
        duration: 10, // Duration for a complete rotation (in seconds)
        ease: 'linear', // Maintain constant speed
        repeat: -1, // Infinite loop
      });
    }
  }, []);


  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 0.95,
      backgroundColor: '#00aaff', // bluish neon sky color
      boxShadow: '0 0 15px rgba(0, 170, 255, 0.7)', // glowing effect
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      duration: 0.3,
    });
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3 rounded-lg" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="grid-container grid_rspnsv">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain img_rspnsv" style={{ minHeight: '64%' }} />

            <div>
              <p className="grid-headtext grid-headtext_rspnsv mb-2">Hi, I’m Priya Samanta</p>
              <p className="grid-subtext mb-2 grid-headtext_rspnsvv">
                With hands on experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
            <div className='mb-9'>
              <a className="w-fit" download href='assets/Resume.pdf'>
                <Button
                  name="Download CV"
                  isBeam
                  containerClass="button-hover w-full "
                />

              </a>
            </div>




          </div>
        </div>






        <div className="col-span-1 xl:row-span-3 rounded-lg " onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {/* Background Card */}
          <div className="grid-container grid_rspnsvv" >

            <div className="circle-content " style={{ minHeight: '65%' }}>
              <div className="circle-container "  >
                {/* Central Logo */}
                <div className="central-logo">
                  <img src="assets/github-mark.png" alt="Central Logo" />
                </div>

                {/* Surrounding Logos */}
                {techStackData.map((tech, index) => {
                  const angle = (index * 360) / techStackData.length;
                  const x = circleRadius * Math.cos((angle * Math.PI) / 180);
                  const y = circleRadius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      className="circle-item"
                      key={tech.name}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="logo-container">
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        <div className="tech-hover">
                          <span className="tech-name">{tech.name}</span>
                          <div className="underline"></div>
                        </div>
                      </div>

                    </div>
                  );


                })}

              </div>
            </div>
            <div>
              <p className="grid-headtext grid-headtext_rspnsv mb-2 tech_rspnsv">Tech Stack, Tools & Skills</p>
              <p className="grid-subtext grid-headtext_rspnsvv ">
                Technologies and Tools that I know and use, enabling me to deliver robust, scalable, and user-friendly solutions.
              </p>
            </div>
          </div>
        </div>

        <div
          className="col-span-1 xl:row-span-4 rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={410}
                width={410}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: 'Kolkata, West Bengal',
                    color: 'white',
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext grid-headtext_rspnsv mb-2 globe_rspnsv">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext grid-headtext_rspnsvv">
                I&apos;m based in Kolkata, West Bengal and open to remote work worldwide.
              </p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 grid-container rounded-lg" >



          <p className="grid-subtext">
            <EducationCarousel />
          </p>


        </div>







        <div className="xl:col-span-1 xl:row-span-2 rounded-lg" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center button-hover">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">samantapriya154@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;