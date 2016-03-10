'use strict';

function getVisibleItemUrlsToScores(results) {
  var visibleItemUrlsToScores = {},
      origin = location.origin || (location.protocol + '//' + location.host);

  results.forEach(function(result, index) {
    visibleItemUrlsToScores[origin + result.url] = result.score;
  });
  return visibleItemUrlsToScores;
}

function filterMatchingItems(resultsList, visibleItemUrlsToScores) {
  var item,
      i,
      score,
      matchingItems = [];

  for (i = 0; i !== resultsList.children.length; ++i) {
    item = resultsList.children[i];
    score = visibleItemUrlsToScores[item.getElementsByTagName('a')[0].href];
    if (score) {
      item.score = score;
      matchingItems.push(item);
    }
  };
  matchingItems.sort(function(lhs, rhs) {
    return rhs.score - lhs.score;
  });
  return matchingItems;
}

function replaceListItemsWithMatchingItems(resultsList, matchingItems) {
  while (resultsList.firstChild) {
    resultsList.removeChild(resultsList.firstChild);
  }
  matchingItems.forEach(function(item) {
    resultsList.appendChild(item);
  });
}

function setTabIndices(resultsList) {
  var i,
      anchor;

  for (i = 0; i !== resultsList.children.length; ++i) {
    anchor = resultsList.children[i].getElementsByTagName('a')[0];
    anchor.tabindex = i;
    if (i === 0) {
      anchor.focus();
    }
  }
}

module.exports = function(query, results, doc, resultsList) {
  var matchingItems = filterMatchingItems(
    resultsList, getVisibleItemUrlsToScores(results));

  replaceListItemsWithMatchingItems(resultsList, matchingItems);
  setTabIndices(resultsList);
}
