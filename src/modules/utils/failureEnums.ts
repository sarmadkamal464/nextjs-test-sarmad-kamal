export enum ErrorTypes {
  // general

  ///////////////////////////////////////////////////////////////////////////////////
  /////////////////////////// Front End /////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  // GraphQL Types
  ImgNoProperDimensions = 'Image has no proper dimensions',

  // data transformations
  DataTransformNoTranslations = 'No valid translations for ',


  // SWR
  SwrFailure = 'SWR failure',
  SwrNoDataNoError = 'SWR could not load the data and did not throw an error',

  // Forms
  ValidationError = 'some validation went wrong',

  ///////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// Back End ///////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  // API Response
  RequestMissingUrlParameters = 'Parameter is missing in URL',
  RequestMethodNotAllowed = 'The request method is not allowed',

  // Email (from Strapi)
  SendEmailError = 'Sending Email failed',
  StrapiRegisterUserError = 'User could not be registered',

  // ProxyCurl
  CouldNotFetchCompanyError = 'Could not fetch the company from proxycurl',
  CouldNotFetchPersonError = 'Could not fetch the person from proxycurl',

  // DevJobs
  SwissDevJobsFetchError = 'Could not fetch the job data from SwissDevJobs',
  SwissDevJobsStoreError = 'Not all Jobs were stored in Strapi',


  //MongoDb
  MongoDbError = 'Error with MongoDb',
  MongoDbUpsertError = 'Error with upserting MongoDb',
}
