/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './nullary.ndarray.js' );


// MAIN //

/**
* Applies a nullary callback and assigns results to elements in a strided output array.
*
* @private
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride length for the output array
* @param {Callback} fcn - nullary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* function fill() {
*     return 3.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var shape = [ x.length ];
* var strides = [ 1 ];
*
* nullary( [ x ], shape, strides, fill );
*
* console.log( x );
* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
*/
function nullary( arrays, shape, strides, fcn ) {
	var offsets = [ stride2offset( shape[ 0 ], strides[ 0 ] ) ];
	return ndarray( arrays, shape, strides, offsets, fcn );
}


// EXPORTS //

module.exports = nullary;
