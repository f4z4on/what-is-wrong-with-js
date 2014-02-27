Q.async(function*() {
  try {
    var [foo, bar] = yield Q.timeout(Q.spread([
      read("foo.json"),
      read("bar.json")
    ]), 1000);
    render(foo);
    render(bar);
  } catch (e) {
    console.log("read failed: " + e);
  }
});
