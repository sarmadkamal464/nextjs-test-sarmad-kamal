import { filterCountries } from './2-task-filter';
import { getAllCountries } from '../4dataAccess/getAllCountries';

describe('Test filterCountries', () => {
  // your solution goes here
  it('no search term', () => {
    const result = filterCountries(getAllCountries());
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Andorra' }),
        expect.objectContaining({ name: 'Afghanistan' }),
        expect.objectContaining({ name: 'Antigua and Barbuda' }),
        expect.objectContaining({ code: 'AL' }),
        expect.objectContaining({ name: 'Armenia', code: 'AM' }),
      ])
    );
  });

  it('search term is undefined', () => {
    const result = filterCountries(getAllCountries(), undefined);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Andorra' }),
        expect.objectContaining({ name: 'Afghanistan' }),
        expect.objectContaining({ name: 'Antigua and Barbuda' }),
        expect.objectContaining({ code: 'AL' }),
        expect.objectContaining({ name: 'Armenia', code: 'AM' }),
      ])
    );
  });

  it('search term is an', () => {
    const result = filterCountries(getAllCountries(), 'an');
    const expected = [
      {
        name: 'Andorra',
        code: 'AD',
      },
      {
        name: 'Afghanistan',
        code: 'AF',
      },
      {
        name: 'Antigua and Barbuda',
        code: 'AG',
      },
      {
        name: 'Albania',
        code: 'AL',
      },
    ];
    expect(result).toEqual(expected);
  });

  it('search term is am', () => {
    const result = filterCountries(getAllCountries(), 'am');
    const expected = [{ name: 'Armenia', code: 'AM' }];
    expect(result).toEqual(expected);
  });

  it('search term is AND', () => {
    const result = filterCountries(getAllCountries(), 'AND');
    const expected = [
      { name: 'Andorra', code: 'AD' },
      { name: 'Antigua and Barbuda', code: 'AG' },
    ];
    expect(result).toEqual(expected);
  });

  it('search term is mp (not matching input)', () => {
    const result = filterCountries(getAllCountries(), 'mp');
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('search term is am (with white space)', () => {
    const result = filterCountries(getAllCountries(), ' am');
    const expected = [{ name: 'Armenia', code: 'AM' }];
    expect(result).toEqual(expected);
  });
});
