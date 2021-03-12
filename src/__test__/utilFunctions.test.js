const { shortenText } = require('../../src/utils/functions');
const { wordCount, attachUserName } = require('../../server/utils');
const {
  shortText,
  longText,
  posts,
  users,
} = require('../__test__/__data__/testData');

describe('function shortenText', () => {
  test('it should make sure it does not alter a string with less than 100 characters', () => {
    const length = shortText.length;
    expect(shortenText(shortText)).toHaveLength(length);
  });

  test('it should add 3 periods at the end', () => {
    const newText = shortenText(longText);
    expect(newText.slice(-3)).toEqual('...');
  });

  test('it should shorten text over 100 characters', () => {
    const length = longText.length;
    expect(shortenText(longText)).not.toHaveLength(length);
  });
});

describe('function wordCount', () => {
  test('it should check to see if the total word count in the posts array equals 233', () => {
    expect(wordCount(posts)).toEqual(233);
  });
});
