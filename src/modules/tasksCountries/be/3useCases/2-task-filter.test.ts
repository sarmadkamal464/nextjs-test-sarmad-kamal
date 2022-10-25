import { filterCountries } from './2-task-filter';
import { getAllCountries } from '../4dataAccess/getAllCountries';

describe('Test filterCountries', () => {
  // your solution goes here
  it('no search term', () => {
    const result = filterCountries(getAllCountries());
    expect(result).toEqual(getAllCountries());
  });

  it('search term an', () => {
    const result = filterCountries(getAllCountries(), 'an');
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Andorra' }),
        expect.objectContaining({ name: 'Afghanistan' }),
        expect.objectContaining({ name: 'Antigua and Barbuda' }),
        expect.objectContaining({ code: 'AL' }),
        expect.not.objectContaining({ name: 'Armenia', code: 'AM' }),
      ])
    );
  });

  it('search term am', () => {
    const result = filterCountries(getAllCountries(), 'am');
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Armenia', code: 'AM' }),
        expect.not.objectContaining({ name: 'Antigua and Barbuda' }),
        expect.not.objectContaining({ code: 'AL' }),
      ])
    );
  });
});
