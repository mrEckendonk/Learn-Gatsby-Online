import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
    <>
      <Layout
        pageTitle='Home Page'
        pageHeading='Welcom at this blazing Fast Site'
      >
        <p>
          Some ways to get some images
          <br></br>
          Local Image loaded with a small Blur
        </p>
        <StaticImage
          alt='Great nice Creamy cup of coffee'
          src='../images/coffee.jpg'
          loading='eager'
          placeholder='blurred'
          layout='fullWidth'
        />
        <p>And here is an image pulled from Unsplash, loaded with a simplified, flat SVG version </p>
        <StaticImage
          alt='Some great Image from UNSPLASH'
          src='https://images.unsplash.com/photo-1659923183026-0721b7b6b053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
          loading='lazy'
          placeholder='tracedSVG'
          layout='fullWidth'
        />
      </Layout>
    </>
  );
};

export default HomePage;
