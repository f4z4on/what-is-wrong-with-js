spawn(function*() {
  try {
    var [foo, bar] = yield join(
      read("foo.json"),
      read("bar.json")
    ).timeout(1000);
    render(foo);
    render(bar);
  } catch (e) {
    console.log("read failed: " + e);
  }
});
