import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About' pageHeading='About Me'>
      <p>
        This is the about page. It is imported as a child component of the
        Layout component.
      </p>
    </Layout>
  );
};

export default AboutPage;
