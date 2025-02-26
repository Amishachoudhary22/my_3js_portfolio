import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="work-canvas col-span-1 rounded-lg bg-black-200 border border-black-300">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content col-span-2 rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              <VerticalTimeline layout={'1-column'}>
                {workExperiences.map((item, index) => (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: '#1d1836',
                      color: '#fff',
                      width: '100% !important',
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
                    date={item.duration}
                    iconStyle={{ background: '#1d1836', color: '#fff' }}
                    icon={
                      <div className="flex justify-center items-center w-full h-full">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    }
                  >
                    <div style={{ width: '95% !important', margin: '0 auto', padding: '5px' }}>
                      <h3 className="vertical-timeline-element-title">{item.name}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{item.pos}</h4>
                      <p>{item.title}</p>
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;