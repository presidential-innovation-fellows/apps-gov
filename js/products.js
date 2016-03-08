'use strict';

var lunr = require('lunr');
var querystring = require('querystring');
var url = require('url');

var PRODUCT_SEARCH_INPUT_ID = 'search-field';
var PRODUCT_SEARCH_RESULTS_ID = 'search-results';

function fetchIndex(baseUrl) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest(),
        indexUrl = baseUrl + '/search-index.json';

    req.addEventListener('load', function() {
      var rawJson;

      try {
        rawJson = JSON.parse(this.responseText);
        resolve({
          urlToDoc: rawJson.urlToDoc,
          index: lunr.Index.load(rawJson.index)
        });
      } catch (err) {
        reject(new Error('failed to parse ' + indexUrl));
      }
    });
    req.open('GET', indexUrl);
    req.send();
  });
}

function parseSearchQuery(queryUrl) {
  return querystring.parse(url.parse(queryUrl).query).q;
}

function getResults(query, searchIndex) {
  var results = searchIndex.index.search(query);

  results.forEach(function(result) {
    var urlAndTitle = searchIndex.urlToDoc[result.ref];

    Object.keys(urlAndTitle).forEach(function(key) {
      result[key] = urlAndTitle[key];
    });
  });
  return results;
}

// based on https://github.com/angular/angular.js/blob/54ddca537/docs/app/src/search.js#L198-L206
function SearchUi(doc, inputElement) {
  var isForwardSlash = function(keyCode) {
    return keyCode === 191;
  };

  var isInput = function(el) {
    return el.tagName.toLowerCase() === 'input';
  };

  var giveSearchFocus = function() {
    inputElement.focus();
  };

  var onKeyDown = function(event) {
    if (isForwardSlash(event.keyCode) && !isInput(doc.activeElement)) {
      event.stopPropagation();
      event.preventDefault();
      giveSearchFocus();
    }
  };

  this.enableGlobalShortcut = function() {
    doc.body.onkeydown = onKeyDown;
  };
}

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

function appendNoResultsFoundMessage(doc, searchQuery, resultsList) {
  var noResultsMessage;

  if (resultsList.children.length === 0) {
    noResultsMessage = doc.createElement('li');
    noResultsMessage.appendChild(doc.createTextNode(
      'No products matched "' + searchQuery + '".')); 
    resultsList.appendChild(noResultsMessage);
  }
}

function toggleResults(searchQuery, doc, searchBox, resultsList, results) {
  if (!searchQuery) {
    return;
  }
  searchBox.value = searchQuery;
  filterMatchingItems(resultsList, getVisibleItemUrls(results));
  setTabIndices(resultsList);
  appendNoResultsFoundMessage(doc, searchQuery, resultsList);
}

module.exports = function() {
  var doc = window.document,
      inputElement = doc.getElementById(PRODUCT_SEARCH_INPUT_ID),
      searchUi = new SearchUi(doc, inputElement),
      resultsElement = doc.getElementById(PRODUCT_SEARCH_RESULTS_ID);

  searchUi.enableGlobalShortcut();

  if (!resultsElement) {
    return;
  }

  return fetchIndex(window.SEARCH_BASEURL)
    .then(function(searchIndex) {
      var query = parseSearchQuery(window.location.href),
          results = getResults(query, searchIndex);
      toggleResults(query, doc, inputElement, resultsElement, results);
    })
    .catch(function(error) {
      console.error(error);
    });
}();
