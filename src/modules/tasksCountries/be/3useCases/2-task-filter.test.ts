import { filterCountries } from './2-task-filter';
import { getAllCountries } from '../4dataAccess/getAllCountries';

describe('Test filterCountries', () => {
  // your solution goes here
  it('no search term', () => {
    const result = filterCountries(getAllCountries());
    const expected = getAllCountries().map((country) => ({
      name: country.name,
      code: country.code,
    }));
    expect(result).toHaveLength(6);
    expect(result).toEqual(expected);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Antigua and Barbuda' }),
      ])
    );
  });

  it('search term is undefined', () => {
    const result = filterCountries(getAllCountries(), undefined);
    const expected = getAllCountries().map((country) => ({
      name: country.name,
      code: country.code,
    }));
    expect(result).toHaveLength(6);
    expect(result).toEqual(expected);
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'Andorra' })])
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
    expect(result).toHaveLength(4);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'AG',
        }),
      ])
    );
  });

  it('search term is am', () => {
    const result = filterCountries(getAllCountries(), 'am');
    const expected = [{ name: 'Armenia', code: 'AM' }];
    expect(result).toEqual(expected);
    expect(result).toHaveLength(1);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Armenia',
        }),
      ])
    );
  });

  it('search term is AND', () => {
    const result = filterCountries(getAllCountries(), 'AND');
    const expected = [
      { name: 'Andorra', code: 'AD' },
      { name: 'Antigua and Barbuda', code: 'AG' },
    ];
    expect(result).toEqual(expected);
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'AD',
        }),
      ])
    );
  });

  it('search term is mp (not matching input)', () => {
    const result = filterCountries(getAllCountries(), 'mp');
    const expected = [];
    expect(result).toEqual(expected);
    expect(result).toHaveLength(0);
  });

  it('search term is am (with white space)', () => {
    const result = filterCountries(getAllCountries(), ' am');
    const expected = [{ name: 'Armenia', code: 'AM' }];
    expect(result).toEqual(expected);
    expect(result).toHaveLength(1);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Armenia',
        }),
      ])
    );
  });
});
