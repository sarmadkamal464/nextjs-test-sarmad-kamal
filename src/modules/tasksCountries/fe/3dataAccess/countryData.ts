// not required for this exercise.

import {ICountryOverview} from '../../sharedInterfaces/1-taks-interface'
import axios from 'axios'
import {IResult} from '@utils'

export const countryDataFromApi = async (searchTerm?: string): Promise<ICountryOverview[]> => {
  const axiosResponse = await axios.post('http://localhost:3000/api/countries', {searchTerm})
  const result: IResult<ICountryOverview[]> = axiosResponse.data
  return result.data || []
}
