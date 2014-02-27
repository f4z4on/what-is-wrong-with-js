o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
Object.getOwnPropertyDescriptor(o, "baz");
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
obj.propertyIsEnumerable("baz");
// false


// Originaly it was supposed to be only something like this:
o = {
  get baz() {
    return 8675309;
  }
};
