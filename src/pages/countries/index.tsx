import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Layout } from '@layout';
import { ICountryOverview } from '../../modules/tasksCountries/sharedInterfaces/1-taks-interface';
import { CountryList } from '../../modules/tasksCountries/fe/1presentation/5-task-responsive-design';
import { useFilterContext } from '../../context/FilterContext';
import { countryDataFromApi } from '../../modules/tasksCountries/fe/3dataAccess/countryData';
// import { filterCountries } from '../../modules/tasksCountries/be/3useCases/2-task-filter';
import { countryRecords } from '../../modules/tasksCountries/be/5dataSources/sampleData';
interface IPageProps {
  countries: ICountryOverview[];
}

export const CountriesPage = ({ countries }: IPageProps) => {
  const t = useTranslations('CountriesOverview');
  const { search } = useFilterContext();

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase())
  );

  return (
    <Layout title={t('title')}>
      <CountryList countriesList={countryRecords} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      countries: await countryDataFromApi(),
      messages: require(`localize/${locale}.json`),
    },
  };
};

export default CountriesPage;
