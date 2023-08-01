/*eslint-disable*/
import { matchMediaMock } from 'match-media-mock';
import "@testing-library/jest-dom/extend-expect";
// setupTests.js
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

//Fix for "matchMedia not present, legacy browsers require a polyfill jest" error
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
global.matchMedia = global.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
};