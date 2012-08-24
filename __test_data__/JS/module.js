/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule module-tag
 * @css foo-css
 *
 * Some text here
 */

var x = require('foo');
var bar = require('bar');

function foo(a) {
  return x(bar(a));
}

module.exports = foo;