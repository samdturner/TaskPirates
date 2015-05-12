function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(queryString(location.href));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function queryString(url) {
  for (var i = 0; i < url.length; i++) {
    if(url[i] === "?") {
      return url.slice(i, url.length);
    }
  }

  return null;
}
