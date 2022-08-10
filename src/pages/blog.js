import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const blogPage = ({ data }) => {
  console.log('data: ', data);
  return (
    <Layout pageTitle='Blog' pageHeading='Blog'>
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.id}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default blogPage;
