import { useState } from 'react';
import Globe from 'react-globe.gl';
import { useRef, useEffect } from 'react';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [places, setPlaces] = useState([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(' dip710ak@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 20, lng: 90, altitude: 1.2 }, 1000);
    fetch('./assets/ne_110m_populated_places_simple.geojson')
      .then((res) => res.json())
      .then(({ features }) => setPlaces(features));

    const rotateGlobe = () => {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
    };
    rotateGlobe();
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="./assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Dipak Bohara</p>
              <p className="grid-subtext">
                With 4 years of experience in frontend and backend development, I specialize in building scalable and
                dynamic applications using Java, Python, C++, and JavaScript. My expertise spans frameworks like Spring,
                Servlet, JSP, Spring Boot Node.js, React.js and Express.js with strong skills in security, databases,
                and aws clouds. I create responsive, robust solutions that leverage modern tools and practices for
                optimal performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I develop scalable apps with Java, Python, C++, and JavaScript using Spring Boot, Node.js, React.js, and
                Express.js. Skilled in security (JWT, OAuth2), databases (Oracle, MySQL, MongoDB, sql server), and tools
                like Docker, AWS (S3, EC2, RDS, Lambda), Redis, and Kafka. Experienced with Bootstrap, Tailwind, and
                monitoring tools like Prometheus and ELK Stack, ensuring robust solutions through microservices and
                JMeter testing.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {/* <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 25.276987, lng: 55.296249, text: 'Dubai, United Arab Emirates', color: 'white', size: 15 },
                  { lat: 28.8372, lng: 80.321312, text: 'Kanchanpur, Nepal', color: 'white', size: 15 },
                  { lat: 28.679079, lng: 77.06971, text: 'Delhi, India', color: '#0000FF', size: 25 },
                ]}
              /> */}
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                labelsData={places}
                labelLat={(d) => d.properties.latitude}
                labelLng={(d) => d.properties.longitude}
                labelText={(d) => d.properties.name}
                labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                labelResolution={2}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m highly adaptable with communication across different time zones and locations. Originally from
                Kanchanpur, Nepal, I&apos;m currently based in Dubai, UAE, and am open to both on-site opportunities in
                Dubai and remote work worldwide. I hold a Bachelor’s degree in Computer Science and Engineering,
                completed in 2021 from India, and my degree is recognized in the UAE.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={() => (window.location.href = 'mailto:dip710ak@gmail.com')}
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">dip710ak@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
