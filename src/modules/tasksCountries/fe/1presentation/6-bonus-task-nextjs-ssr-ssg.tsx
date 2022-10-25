/*
Bonus Task:
 1. Please explain the methods getStaticPaths() and getStaticProps() for next.js pages
 2. Please explain how to fetch the routes for dynamic paths



 1: getStaticPaths() and getStaticProps() are used for generating pages on build time. If a page has dynamic routes we need to use getStaticProps() to pre-render pages at build time using the props returned by getStaticProps(). And in order to use getStaticProps(), it is required to use getStaticPaths() to pre-render all the paths returned by getStaticPaths() function

 2: We use square brackets around file name to indicate that it is a dynamic route and using that name we can fetch the current route

*/
// solution
import { getAllCountries } from '../../be/4dataAccess/getAllCountries';

export const getStaticPathsForCountries = async () => {
  // normally data fetching from api - we use sample data for simplicity
  return getAllCountries().map((c) => {
    return { params: { code: c.code } };
  });
};
