import { config } from '@config';
import { Layout } from '@layout';
import { Intro } from '@styleGuide';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const HomePage = () => {
  const t = useTranslations('Home');

  return (
    <Layout title={t('title')}>
      <Intro>
        This project holds a set of tasks. The tasks can be found in the
        readme.md file in the root of the project.
        <br />
        <br />
        Goal: We want to create a small app, that displays processes some
        country data in the backend and displays it in the frontend.
        <br />
      </Intro>
    </Layout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: config.localize(locale),
    },
    revalidate: 1,
  };
}

export default HomePage;
