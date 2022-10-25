import {countryRecords} from '../5dataSources/sampleData'

export const getAllCountries = () => {
  // in real life this would be prisma (ORM) to access mongoDB.
  return countryRecords
}