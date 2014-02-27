var foo, bar;
var tid = setTimeout(function() { failure(new Error("timed out")) }, 1000);

var xhr1 = makeXHR(
  "foo.json",
  function(txt) { foo = txt; success() },
  function(err) { failure() }
);
var xhr2 = makeXHR(
  "bar.json",
  function(txt) { bar = txt; success() },
  function(e) { failure(e) }
);

function success() {
    if (typeof foo === "string" && typeof bar === "string") {
        cancelTimeout(tid);
        xhr1 = xhr2 = null;
        render(foo);
        render(bar);
    }
}

function failure(e) {
    xhr1 && xhr1.abort();
    xhr1 = null;
    xhr2 && xhr2.abort();
    xhr2 = null;
    console.log("read failed: " + e);
}
