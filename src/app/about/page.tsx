import MainWrapper from '@/components/MainWrapper/MainWrapper';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className="w-full max-w-[42.25rem] mx-auto mt-10">
        <h3 className="font-bold font-sans text-center">About Us 📝</h3>
        <p className="font-mono mt-6 text-center">
          This is the About Us page. We are a team of passionate individuals dedicated to creating amazing things.
        </p>
        <p className="font-mono mt-4 text-center opacity-75">
          Our mission is to deliver high-quality solutions and innovate in our field. Feel free to learn more about our journey and values below.
        </p>
      </div>
    </MainWrapper>
  );
};

export default AboutPage;
