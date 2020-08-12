import numRef from './ref.json'
// import _ from 'lodash'

export function numToWorld(num) {
    return reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
}

export function wordToNum(word) {
    console.log('test--------');
    return reduce(numRef, (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  };
