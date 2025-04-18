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

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-nullary
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var nullary = require( '@stdlib/strided-base-nullary' );
```

#### nullary( arrays, shape, strides, fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

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
var Float64Array = require( '@stdlib/array-float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

nullary( [ x ], [ 3 ], [ -1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, -4.0, -5.0, -6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

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
var Float64Array = require( '@stdlib/array-float64' );

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
var Float64Array = require( '@stdlib/array-float64' );

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
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var nullary = require( '@stdlib/strided-base-nullary' );

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

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- charcodes -->

-   **x**: `bool` (boolean).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **f**: `float32` (single-precision floating-point number).
-   **d**: `float64` (double-precision floating-point number).
-   **k**: `int16` (signed 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **s**: `int8` (signed 8-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).

<!-- ./charcodes -->

Function name suffix naming convention:

```text
stdlib_strided_<output_data_type>[_as_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_strided_d(...) {...}
```

is a function which accepts one double-precision floating-point strided output array. In other words, the suffix encodes the function type signature.

To support callbacks whose return values are of a different data type than the strided output array data type, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_strided_f_as_d(...) {...}
```

is a function which accepts one single-precision floating-point strided output array. However, the callback returns double-precision floating-point numbers. Accordingly, the output value needs to be cast using the following conversion sequence

```c
// Evaluate the callback:
double out = f();

// Convert the callback return value to single-precision:
y[ i ] = (float)out;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/nullary.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

#### stdlib_strided_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 1 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static stdlib_complex64_t fcn( void ) {
    // ...
}

// Apply the callback:
stdlib_strided_c( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_f( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static float fcn( void ) {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_c_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_f( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_z( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static stdlib_complex128_t fcn( void ) {
    // ...
}

// Apply the callback:
stdlib_strided_c_as_z( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_z( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static double fcn( void ) {
    return 3.0;
}

// Apply the callback:
stdlib_strided_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_f( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static float fcn( void ) {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_d_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_f( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_i( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_i( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_u( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_u( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static float fcn( void ) {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_d( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static double fcn( void ) {
    return 3.0;
}

// Apply the callback:
stdlib_strided_f_as_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_d( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_i( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_k_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_k_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_k_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_k_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 1 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_t_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_t_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_t_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_u( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_u_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_u_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_u_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_u_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_x( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdbool.h>
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 1 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static bool fcn( void ) {
    return true;
}

// Apply the callback:
stdlib_strided_x( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `bool (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_x( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static stdlib_complex128_t fcn( void ) {
    // ...
}

// Apply the callback:
stdlib_strided_z( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_b( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_b( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_c( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static stdlib_complex64_t fcn( void ) {
    // ...
}

// Apply the callback:
stdlib_strided_z_as_c( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_c( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_d( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static double fcn( void ) {
    return 3.0;
}

// Apply the callback:
stdlib_strided_z_as_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_d( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_f( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static float fcn( void ) {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_z_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_f( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_i( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_i( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_k( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_k( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_s( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static int8_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_s( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_t( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint16_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_u( \*arrays\[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
static uint32_t fcn( void ) {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_u( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );
```

<!-- ./loops -->

<!-- macros -->

* * *

#### STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE

Macro containing the preamble for a loop which updates a strided output array.

```c
STDLIB_STRIDED_NULLARY_LOOP_PREMABLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **op1**: `uint8_t*` pointer to the first indexed element of the output strided array.
-   **os1**: `int64_t` index increment for the output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE               \
    uint8_t *op1 = arrays[ 0 ];                            \
    int64_t os1 = strides[ 0 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    for ( i = 0; i < n; i++, op1 += os1 )
```

#### STDLIB_STRIDED_NULLARY_LOOP_TWO_OUT_PREAMBLE

Macro containing the preamble for a loop which updates two strided output arrays.

```c
STDLIB_STRIDED_NULLARY_LOOP_TWO_OUT_PREMABLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **op1**: `uint8_t*` pointer to the first indexed element of the first output strided array.
-   **op2**: `uint8_t*` pointer to the first indexed element of the second output strided array.
-   **os1**: `int64_t` index increment for the first output strided array.
-   **os2**: `int64_t` index increment for the second output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_TWO_OUT_PREAMBLE       \
    uint8_t *op1 = arrays[ 0 ];                            \
    uint8_t *op2 = arrays[ 1 ];                            \
    int64_t os1 = strides[ 0 ];                            \
    int64_t os2 = strides[ 1 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    if ( os2 < 0 ) {                                       \
        op2 += (1-n) * os2;                                \
    }                                                      \
    for ( i = 0; i < n; i++, op1 += os1, op2 += os2 )
```

#### STDLIB_STRIDED_NULLARY_LOOP_INLINE( tout, expr )

Macro for a nullary loop which inlines an expression.

```c
STDLIB_STRIDED_NULLARY_LOOP_INLINE( double, *out = (double)1.0 )
```

The macro expects the following arguments:

-   **tout**: output strided array element type.
-   **expr**: expression to inline.

In addition to the variables defined by the `STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE` macro, the macro defines the following variables:

-   **out**: `<tout>*` pointer to an output strided array element.

The macro expects a provided expression to store the result via `*out`.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_INLINE( tout, expr )   \
    STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                 \
        tout *out = (tout *)op1;                           \
        expr;                                              \
    }
```

#### STDLIB_STRIDED_NULLARY_LOOP_CLBK( tout )

Macro for a nullary loop which invokes a callback.

```c
STDLIB_STRIDED_NULLARY_LOOP_CLBK( double )
```

The macro expects the following arguments:

-   **tout**: output strided array element data type.

In addition to the variables expected by `STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: nullary callback.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK( tout )           \
    STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                 \
        *(tout *)op1 = (tout)f();                          \
    }
```

#### STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_NOCAST( tout )

Macro for a nullary loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).

```c
#include "stdlib/complex/float64/ctor.h"

STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t )
```

The macro expects the following arguments:

-   **tout**: output strided array element data type.

In addition to the variables expected by `STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: nullary callback.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_NOCAST( tout )                    \
    STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                                     \
        *(tout *)op1 = f();                                                    \
    }
```

#### STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( tout, cout )

Macro for a nullary loop which invokes a callback whose return values should be cast to a different type via casting functions.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float64/ctor.h"

STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex128_to_complex64 )
```

The macro expects the following arguments:

-   **tout**: output strided array element data type.
-   **cout**: function for casting an callback's return value to the output array data type.

In addition to the variables expected by `STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: nullary callback.

```c
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( tout, cout )            \
    STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                                     \
        *(tout *)op1 = cout( f() );                                            \
    }
```

<!-- ./macros -->

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/strided/base/nullary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double fill( void ) {
    return 10.0;
}

int main( void ) {
    // Create underlying byte arrays:
    uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define a pointer to an array containing pointers to strided arrays:
    uint8_t *arrays[] = { out };

    // Define the strides:
    int64_t strides[] = { 8 }; // 8 bytes per double

    // Define the number of elements over which to iterate:
    int64_t shape[] = { 3 };

    // Apply the callback:
    stdlib_strided_d( arrays, shape, strides, (void *)fill );

    // Print the contents of the output array:
    uint8_t *op1 = out;
    for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[0] ) {
        const double v = *(double *)op1;
        printf( "out[ %"PRId64" ] = %lf\n", i, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/quaternary`][@stdlib/strided/base/quaternary]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/quinary`][@stdlib/strided/base/quinary]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/ternary`][@stdlib/strided/base/ternary]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[deno-readme]: https://github.com/stdlib-js/strided-base-nullary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-nullary/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-nullary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-nullary/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-nullary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-nullary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-nullary/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided-base-binary

[@stdlib/strided/base/quaternary]: https://github.com/stdlib-js/strided-base-quaternary

[@stdlib/strided/base/quinary]: https://github.com/stdlib-js/strided-base-quinary

[@stdlib/strided/base/ternary]: https://github.com/stdlib-js/strided-base-ternary

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided-base-unary

<!-- </related-links> -->

</section>

<!-- /.links -->
