import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();

  useEffect(() => {
    let req;
    const animate = () => {
      if (globeEl.current && globeEl.current.scene) {
        const scene = globeEl.current.scene();
        scene.rotation.y += 0.015;
      }
      req = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(req);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('amishachoudhary2212@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <motion.div
        className="grid grid-cols-3 grid-rows-[0.8fr_0.8fr] gap-5 w-full h-full" // Adjusted grid-rows
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* ... (rest of your code remains the same) */}
        {/* About Section (Column 1, Row 1) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all rounded-2xl"
        >
          <div className="grid-container flex flex-col justify-center p-4 h-full">
            <img src="assets/grid1.png" alt="grid-1" className="w-full h-auto object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Amisha Choudhary</p>
              <p className="grid-subtext">
                I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack (Column 2, Row 1) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all rounded-2xl"
        >
          <div className="grid-container p-4 h-full">
            <img src="assets/grid2.png" alt="grid-2" className="w-full h-auto object-contain" />
            <div className="mt-4">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust
                and scalable applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Globe Section (Column 3, Row 1, 2/3 Height) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all rounded-2xl flex flex-col grid-container" // Added grid-container
          style={{ display: 'grid', gridTemplateRows: '2fr 1fr' }}
        >
          <div className="p-4 flex flex-col justify-center items-center">
            <div className="rounded-3xl w-full h-full flex justify-center items-center">
              <Globe
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
                  { lat: 40, lng: -100, text: 'Bihar, India', color: 'white', size: 15 },
                ]}
              />
            </div>
          </div>
          <div className="p-4">
            <p className="grid-headtext">I’m flexible with time zones & locations</p>
            <p className="grid-subtext">
              Based in Bihar, India. Open to remote and on-site work in India.
            </p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-4" />
          </div>
        </motion.div>

        {/* Passion for Coding (Column 1, Row 2) */}
       {/* Passion for Coding (Column 1, Row 2) */}
       <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-all rounded-2xl"
          style={{ height: 'calc(1fr - 1rem)' }} // Reduced height
        >
          <div className="grid-container p-4 h-full">
            <img src="assets/grid3.png" alt="grid-3" className="w-full h-auto object-contain" />
            <div className="mt-4">
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other Interests (Column 2, Row 2) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all rounded-2xl"
          style={{ height: 'calc(1fr - 1rem)' }} // Reduced height
        >
          <div className="grid-container p-4 h-full">
            <img src="assets/design1.jpg" alt="design" className="w-full h-auto object-contain mb-4" />
            <div>
              <p className="grid-headtext">Other Interests</p>
              <p className="grid-subtext">
                I have a profound love for sketching, art and craft, and writing. I also love digital designing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons (Column 3, Row 2, 1/3 Height) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          className="border border-transparent hover:border-green-500 hover:shadow-lg hover:shadow-green-500/50 transition-all rounded-2xl"
          style={{ height: 'calc(1fr - 3.5rem)' }} // Reduced height
        >
          <div className="grid-container p-4 flex flex-col items-center justify-center space-y-4 h-full">
            <div className="flex gap-4">
              <a href="https://github.com/Amishachoudhary22" target="_blank" rel="noopener noreferrer">
                <img src="assets/github.svg" alt="GitHub" className="w-12 h-12 rounded-full hover:shadow-md hover:shadow-purple-500/50 transition-all" />
              </a>
              <a href="https://www.linkedin.com/in/amisha-choudhary-8957a7221/" target="_blank" rel="noopener noreferrer">
                <img src="assets/linkedin.png" alt="LinkedIn" className="w-12 h-12 rounded-full hover:shadow-md hover:shadow-blue-500/50 transition-all" />
              </a>
              <a href="https://leetcode.com/Amisha2212/" target="_blank" rel="noopener noreferrer">
                <img src="assets/leetcode.png" alt="LeetCode" className="w-12 h-12 rounded-full hover:shadow-md hover:shadow-yellow-500/50 transition-all" />
              </a>
            </div>
            <div className="text-center">
              <p className="grid-subtext text-white">Know more of me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-white">
                  amishachoudhary2212@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;