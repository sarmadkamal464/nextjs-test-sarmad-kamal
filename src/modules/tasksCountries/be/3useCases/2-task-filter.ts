/*
Use Case:
  Imagine we have a website with a list of country records and a search field.
  The countries should be filtered and displayed/ filtered while the user types into the search field.

Example 1:
  Given: an array of country records called "countryRecords" with the fields 'code' and 'name' -> see sampleData.ts
  Given: the search term "an"
  Result: [{
            "name": "Andorra",
            "code": "AD"
        },
        {
            "name": "Afghanistan",
            "code": "AF"
        },
        {
            "name": "Antigua and Barbuda",
            "code": "AG"
        },
        {
            "name": "Albania",
            "code": "AL"
        }]
Example 2:
  Given: an array of country records called "countryRecords" with the fields 'code' and 'name' -> see sampleData.ts
  Given: no search term
  Result: all countries -> [{
            "name": "Andorra",
            "code": "AD"
        }, ...]
Example 3:
  Given: an array of country records called "countryRecords" with the fields 'code' and 'name' -> see sampleData.ts
  Given: search term "am"
  Result: [ { name: 'Armenia', code: 'AM' } ]


Task:
  1. please write a function called 'filterCountries' that supports this functionality and cover it with tests
*/

import {
  ICountry,
  ICountryOverview,
} from '../../sharedInterfaces/1-taks-interface';

export const filterCountries = (
  countries: ICountry[],
  searchTerm?: string
): ICountryOverview[] => {
  // your solution goes here
  if (searchTerm) {
    countries = countries.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }
  return countries.map((item: ICountry) => ({
    name: item.name,
    code: item.code,
  }));
};
