
Tinytest.add('d3cloud exists', function (test) {
  test.equal(typeof d3cloud, "function");
});

Tinytest.add('d3cloud instantiates', function (test) {
  test.equal(typeof d3cloud === 'function' && typeof d3cloud(), "object");
});

//TODO: Could probably use some more detailed tests against actual docs and for each plugin.
