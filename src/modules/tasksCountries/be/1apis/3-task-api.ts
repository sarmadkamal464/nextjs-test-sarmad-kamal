/*
  Task:
  1. Please provide an api that excepts a field "searchTerm" and exposes the countries matched in 2-tasks-filter.ts -> function: filterCountries()

  You can test your api on http://localhost:3000/api/countries
 */

import {
  apiResponse,
  ApiResponseStatus,
  HttpMethods,
  IResult,
  methodsNotAllowedResponse,
} from '@utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { filterCountries } from '../3useCases/2-task-filter';
import { getAllCountries } from '../4dataAccess/getAllCountries';
import { ICountryOverview } from '../../sharedInterfaces/1-taks-interface';

export const countriesApi = async (
  req: NextApiRequest,
  res: NextApiResponse<IResult<ICountryOverview[]>>
) => {
  const { method } = req;

  // your solution goes here

  switch (method) {
    case 'POST': {
      const singleCountry = getAllCountries().filter(
        (item) => item.code === req.body.searchTerm
      );
      return apiResponse(res, ApiResponseStatus.OK, singleCountry, []);
    }

    case 'GET': {
      let finalResult: any = [];
      if (req.query?.searchTerm) {
        finalResult = filterCountries(getAllCountries(), req.query.searchTerm);
      } else {
        finalResult = getAllCountries();
      }
      return apiResponse(res, ApiResponseStatus.OK, finalResult, []);
    }

    default:
      return methodsNotAllowedResponse(res, [HttpMethods.POST], method);
  }
};
