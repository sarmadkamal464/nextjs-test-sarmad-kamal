import {ICountry} from '../../sharedInterfaces/1-taks-interface'

// this would be a mongoDB cloud instance in real life.

export const countryRecords: ICountry[] = [
  {
    code: 'AD',
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: [
      {
        name: 'Catalan'
      }
    ]
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    languages: [
      {
        name: 'Arabic'
      }
    ]
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: [
      {
        name: 'Pashto'
      },
      {
        name: 'Uzbek'
      },
      {
        name: 'Turkmen'
      }
    ]
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    capital: 'Saint John\'s',
    languages: [
      {
        name: 'English'
      }
    ]
  },
  {
    code: 'AL',
    name: 'Albania',
    capital: 'Tirana',
    languages: [
      {
        name: 'Albanian'
      }
    ]
  },
  {
    code: 'AM',
    name: 'Armenia',
    capital: 'Yerevan',
    languages: [
      {
        name: 'Armenian'
      },
      {
        name: 'Russian'
      }
    ]
  }
]
