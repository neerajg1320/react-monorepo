'use strict';

const paragraph = require('..');
const assert = require('assert').strict;

assert.strictEqual(paragraph(), 'Hello from paragraph');
console.info("paragraph tests passed");
