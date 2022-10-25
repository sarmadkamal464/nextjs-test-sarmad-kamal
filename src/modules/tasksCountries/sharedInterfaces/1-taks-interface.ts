/*
  Task:
  1. Please write an appropriate interface called 'ICountry' for "countryRecords" in "sampleData.ts" in this folder.
  This could be used for a country detail page.
  2. Imagine you have a country overview page and need an interface with only "name" and "code" called ICountryOverview.
  You would not want to miss if the "main" ICountry interface was changed. E.g. the name was removed.
  Please write a second interface uses a subset of the fields in the ICountry interface.
 */

export interface ILanguage {
  // name of language
  name: string;
}

// ICountryOverview -> create a subset of ICountry
export interface ICountryOverview {
  // name of country
  name: string;
  // code of country
  code: string;
}

export interface ICountry extends ICountryOverview {
  // Your solution goes here
  // capital of country
  capital: string;
  // languages of country
  languages: ILanguage[];
}
