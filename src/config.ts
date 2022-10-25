// can only be casted to string as these are NEXT_PUBLIC_ variables
const hostRoute = process.env.NEXT_PUBLIC_NEXT_HOST_ROUTE as string
const graphQlEndpoint = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT as string
const strapiHostRoute = process.env.NEXT_PUBLIC_STRAPI_HOST_ROUTE as string
const proxyCurlApiKey = process.env.NEXT_PUBLIC_PROXYCURL_API_KEY as string
const mongoDbConnectionUrl = process.env.NEXT_PUBLIC_MONGO_DB_CONNECTION_URL as string

const SwrCachingKeys = {
  Categories: 'Categories',
  Lesson: 'Lesson',
  LessonOverview: 'LessonOverview'
}

export enum DatabaseCollectionNames {
  RawDevJobs = 'RawDevJobs',
  RawLinkedInSearch = 'RawLinkedInSearch'
}


export const config = {
  websiteName: 'Work Match',
  env: {
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production'
  },

  hostRoute,
  graphQlEndpoint,
  strapiHostRoute,

  database: {
    mongoDbConnectionUrl,
    databaseName: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    collectionNames: DatabaseCollectionNames
  },

  nextAuth: {
    gitHubClientId: process.env.GITHUB_CLIENT_ID as string,
    gitHubClientSecret: process.env.GITHUB_CLIENT_SECRET as string
  },

  proxyCurl: {
    apiKey: proxyCurlApiKey,
    personEndpoint: `https://nubela.co/proxycurl/api/v2/linkedin`,
    companyEndpoint: `https://nubela.co/proxycurl/api/linkedin/company`
  },

  algolia: {
    applicationId: '60VN3BT1RT',
    searchOnlyApiKey: 'aafe6f9140d24d64832d952cf9f6606d',
    index: process.env.NODE_ENV === 'production' ? 'prod-culturefy_lessons' : 'test-culturefy_lessons'
  },

  routes: {
    home: '/',
    toggle: '/toggle',
    countriesOverview: '/countries',
    country: (code) => `/countries/${code}`,
    countriesApiTest: '/api/countries',
  },

  localize: (locale?: string) => require(`localize/${locale}.json`),

  swrCacheKeys: SwrCachingKeys

}


