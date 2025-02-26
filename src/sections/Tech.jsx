import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { techStackCategories } from '../constants';
import { motion } from 'framer-motion';

const Tech = () => {
  
  const timelineLineOffset = 100; 
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <h2 className="text-4xl font-bold  mb-8 text-gray-400">Tech Stack</h2>
      <VerticalTimeline layout="4-column" className="tech-vertical-timeline">
        {techStackCategories.map((category, index) => (
          <div key={category.id} className="relative" style={{ marginLeft: timelineLineOffset }}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'transparent',
                color: '#fff',
                boxShadow: 'none',
                padding: '0',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #232631' }}
              iconStyle={{ background: 'white', color: 'transparent' }}
              icon={<div />}
              date=""
            >
              
              <h3
                className="vertical-timeline-element-title text-white absolute"
                style={{
                  right: timelineLineOffset + 980, 
                  top: '80%',
                  transform: 'translateY(-50%)',
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                }}
              >
                {category.name}
              </h3>
            </VerticalTimelineElement>
            
            <motion.div
              className="relative"
              custom={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={{
                marginLeft: timelineLineOffset,
                position: 'relative',
                left: timelineLineOffset - 120,
                top: '50%',
                transform: 'translateY(-110%)', // Ensure this stays the same
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-contain"
                style={{
                  
                  ...(category.id === 1 && { width: '1090px' }),
                  ...(category.id === 2 && { width: '1090px' }),
                  ...(category.id === 3 && { width: '1090px' }),
                  ...(category.id === 4 && { width: '1090px' }),
                  position: 'relative',
                  left: timelineLineOffset -130, 
                  top: '50%',
                  transform: 'translateY(-110%)',
                }}
              />
            </motion.div>
          </div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Tech;

//<div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
//<h2 className="text-4xl font-bold  mb-8 text-gray-400">Tech Stack</h2>