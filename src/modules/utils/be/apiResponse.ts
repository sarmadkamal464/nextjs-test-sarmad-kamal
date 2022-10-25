import {ErrorTypes} from '@utils'
import {NextApiResponse} from 'next'

// https://blog.restcase.com/rest-api-error-codes-101/
export enum ApiResponseStatus {
  OK = 200,
  BAD_REQUEST = 400,
  VALIDATION_ERROR = 400,
  UNAUTHORISED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  Method_Not_Allowed = 405,
  SERVER_ERROR = 500
}

export interface IResult<D> {
  type: IResultType
  data: D | null
  errors: IError[]
}

export interface IError {
  error: ErrorTypes
  errorMessage?: string
}

type IResultType = 'ok' | 'failure'


export const apiResult: <D>(data?: (D | null), errors?: IError[]) => IResult<D> = <D>(data?: D | null, errors?: IError[]) => {
  const response: IResult<D> = {
    type: getResponseType(data, errors),
    data: data || null,
    errors: errors || []
  }

  return response
}

export const apiResponse = <D>(res: NextApiResponse<IResult<D>>, status: ApiResponseStatus, data: D | null, errors?: IError[]) => {
  res.status(status)

  const response: IResult<D> = {
    type: getResponseType(data, errors),
    data,
    errors: errors || []
  }

  res.json(response)
  return res
}

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD'
}

export const methodsNotAllowedResponse = (res: NextApiResponse, allowedHttpMethods: HttpMethods[], method?: string) => {
  res.setHeader('Allow', allowedHttpMethods)

  const error: IError = {
    error: ErrorTypes.RequestMethodNotAllowed,
    errorMessage: `Method ${method} Not Allowed`
  }
  return apiResponse(res, ApiResponseStatus.Method_Not_Allowed, null, [error])
}

export const getResponseType = <D>(data?: D | null, errors?: IError[]) => data && !errors?.length ? 'ok' : 'failure'
