/**
 * @jest-environment node
 */
const fetch = require('node-fetch');
const serve = require('./serve');

describe('Promise.all', function() {
  const port = 3008;
  serve(port);
  const get = url =>
    fetch(`http://localhost:${port}/${url}`).then(response => response.json());

  test('should understand Promise.all', function() {
    return Promise.all([
      get('data/player/1.json'),
      get('data/player/7.json')
    ]).then(result =>
      expect(result).toEqual([
        {
          name: 'Alice'
        },
        {
          name: 'Erin'
        }
      ])
    );
  });

  // address already in use issue
  test('should understand how Promise.all deals with rejections', function() {
    return Promise.all([
      get('data/player/brake-it.json'),
      get('data/player/7.json')
    ]).catch(reason =>
      expect(reason).toEqual(null, {
        name: 'Erin'
      })
    );
  });
});
