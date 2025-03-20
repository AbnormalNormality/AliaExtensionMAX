function get_param(param) {
  var search = window.location.search.substring(1);
  var compareKeyValuePair = function (pair) {
    var key_value = pair.split("=");
    var decodedKey = decodeURIComponent(key_value[0]);
    var decodedValue = decodeURIComponent(key_value[1]);
    if (decodedKey == param) return decodedValue;
    return null;
  };

  var comparisonResult = null;

  if (search.indexOf("&") > -1) {
    var params = search.split("&");
    for (var i = 0; i < params.length; i++) {
      comparisonResult = compareKeyValuePair(params[i]);
      if (comparisonResult !== null) {
        break;
      }
    }
  } else {
    comparisonResult = compareKeyValuePair(search);
  }

  return comparisonResult;
}

var searchQuery = get_param("q");

const googleImageLink =
  "https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331";
const googleH3Text = "Tonight on Silly News: ";
const googleIntervalDelay = 1000 / 30;

if (searchQuery == null || !searchQuery.includes("-silly-cat")) {
  setInterval(() => {
    document.querySelectorAll("img").forEach((img) => {
      img.src = googleImageLink;
    });

    document.querySelectorAll(".LC20lb.MBeuO.DKV0Md").forEach((h3) => {
      if (!h3.textContent.startsWith(googleH3Text)) {
      h3.textContent = googleH3Text + h3.textContent;
      }
    });
  }, googleIntervalDelay);
}
