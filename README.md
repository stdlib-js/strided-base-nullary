<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Nullary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a nullary callback and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import nullary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@deno/mod.js';
```

#### nullary( arrays, shape, strides, fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

nullary( [ x ], [ x.length ], [ 1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride length for the strided output array.
-   **fcn**: nullary function to apply.

The `shape` and `strides` parameters determine which elements in the strided output array are accessed at runtime. For example, to index the first `N` elements of the strided output array in reverse order,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

nullary( [ x ], [ 3 ], [ -1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, -4.0, -5.0, -6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function fill() {
    return 3.0;
}

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

nullary( [ x1 ], [ 3 ], [ 1 ], fill );
// x0 => <Float64Array>[ -1.0, 3.0, 3.0, 3.0, -5.0, -6.0 ]
```

#### nullary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a nullary callback and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

nullary.ndarray( [ x ], [ x.length ], [ 1 ], [ 0 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting index (i.e., index offset) for the strided output array.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index the last `N` elements in the strided output array,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

nullary.ndarray( [ x ], [ 3 ], [ -1 ], [ x.length-1 ], fill );
// x => <Float64Array>[ -1.0, -2.0, -3.0, 3.0, 3.0, 3.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filledarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled@deno/mod.js';
import nullary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@deno/mod.js';

var x = filledarray( 0.0, 10, 'generic' );
console.log( x );

var shape = [ x.length ];
var strides = [ 1 ];
var offsets = [ 0 ];

nullary.ndarray( [ x ], shape, strides, offsets, discreteUniform( -100, 100 ) );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-nullary.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-nullary

[test-image]: https://github.com/stdlib-js/strided-base-nullary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-nullary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-nullary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-nullary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-nullary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-nullary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-nullary/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-nullary/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-nullary/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-nullary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-nullary/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
