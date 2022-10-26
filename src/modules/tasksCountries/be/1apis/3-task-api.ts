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
  singleCountry,
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
      return apiResponse(
        res,
        ApiResponseStatus.OK,
        singleCountry(getAllCountries(), req.body.searchTerm),
        []
      );
    }

    case 'GET': {
      return apiResponse(
        res,
        ApiResponseStatus.OK,
        filterCountries(getAllCountries(), req.query?.searchTerm),
        []
      );
    }

    default:
      return methodsNotAllowedResponse(res, [HttpMethods.POST], method);
  }
};
