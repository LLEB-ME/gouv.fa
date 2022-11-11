"use strict";

function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

function formatSearchResultItem(item, terms) {
  var blurb = `${item.doc.body}`.slice(0,120);
  return (
    `<article>` +
    `<h3>` +
    `<a href='${item.ref}'>${item.doc.title}</a>` +
    `</h3>` +
    `</article>`
  );
}

function search() {
  var $searchInput = document.getElementById("search");
  var $searchResults = document.querySelector(".search-results");
  var $searchResultsItems = document.querySelector(".search-results__items");
  var MAX_ITEMS = 20;

  var options = {
    bool: "AND",
    fields: {
      title: { boost: 2 },
      body: { boost: 2 },
    },
  };
  var currentTerm = "";
  var index = elasticlunr.Index.load(window.searchIndex);

  $searchInput.addEventListener(
    "keyup",
    debounce(function () {
      var term = $searchInput.value.trim();
      if (term === currentTerm || !index) {
        return;
      }
      $searchResults.style.display = term === "" ? "none" : "block";
      $searchResultsItems.innerHTML = "";
      if (term === "") {
        return;
      }

      var results = index.search(term, options);
      if (results.length === 0) {
        $searchResults.style.display = "none";
        return;
      }

      currentTerm = term;
      for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
        var item = document.createElement("div");
        item.innerHTML = formatSearchResultItem(results[i], term.split(" "));
        $searchResultsItems.appendChild(item);
      }
    }, 150)
  );
}


document.getElementById("search").addEventListener("keyup", () => {
  search();
});
/*document.getElementById("searchbtn").addEventListener("click", () => {
  debounce(function () {
    var term = $searchInput.value.trim();
    if (term === currentTerm || !index) {
      return;
    }
    $searchResults.style.display = term === "" ? "none" : "block";
    $searchResultsItems.innerHTML = "";
    if (term === "") {
      return;
    }

    var results = index.search(term, options);
    if (results.length === 0) {
      $searchResults.style.display = "none";
      return;
    }

    currentTerm = term;
    for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
      var item = document.createElement("div");
      item.innerHTML = formatSearchResultItem(results[i], term.split(" "));
      $searchResultsItems.appendChild(item);
    }
  }, 150)
});*/
