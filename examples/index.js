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

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var randu = require( '@stdlib/random-base-randu' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var nanmaxBy = require( './../lib' );

function fill() {
	if ( randu() < 0.2 ) {
		return NaN;
	}
	return discreteUniform( -50, 50 );
}

function accessor( v ) {
	return v * 2.0;
}

var x = filledarrayBy( 10, 'float64', fill );
console.log( x );

var v = nanmaxBy( x.length, x, 1, accessor );
console.log( v );
