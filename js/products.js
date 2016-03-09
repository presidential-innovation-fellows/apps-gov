'use strict';

function getVisibleItemUrls(results) {
  var visibleItemUrls = {},
      origin = location.origin || (location.protocol + '//' + location.host);

  results.forEach(function(result, index) {
    visibleItemUrls[origin + result.url] = true;
  });
  return visibleItemUrls;
}

function filterMatchingItems(resultsList, visibleItemUrls) {
  var item,
      i,
      itemsToRemove = [];

  for (i = 0; i != resultsList.children.length; ++i) {
    item = resultsList.children[i];
    if (visibleItemUrls[item.getElementsByTagName('a')[0].href] !== true) {
      itemsToRemove.push(item);
    }
  };

  itemsToRemove.forEach(function(item) {
    resultsList.removeChild(item);
  });
}

function setTabIndices(resultsList) {
  var i,
      anchor;

  for (i = 0; i != resultsList.children.length; ++i) {
    anchor = resultsList.children[i].getElementsByTagName('a')[0];
    anchor.tabindex = i;
    if (i === 0) {
      anchor.focus();
    }
  }
}

module.exports = function(query, results, doc, resultsList) {
  filterMatchingItems(resultsList, getVisibleItemUrls(results));
  setTabIndices(resultsList);
}
