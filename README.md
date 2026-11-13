<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# sgemm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform the matrix-matrix operation `C = alpha*op(A)*op(B) + beta*C`.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import sgemm from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-sgemm@deno/mod.js';
```

#### sgemm( arrays )

Performs the matrix-matrix operation `C = alpha*op(A)*op(B) + beta*C`, where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `alpha` and `beta` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.

```javascript
import Float32Matrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-matrix-float32@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-transpose-operation-resolve-enum@deno/mod.js';

var A = new Float32Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
var B = new Float32Matrix( [ [ 1.0, 1.0 ], [ 0.0, 1.0 ] ] );
var C = new Float32Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );

var transA = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int32'
});
var transB = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 1.0, {
    'dtype': 'float32'
});
var beta = scalar2ndarray( 1.0, {
    'dtype': 'float32'
});

var out = sgemm( [ A, B, C, transA, transB, alpha, beta ] );
// returns <ndarray>[ [ 2.0, 5.0 ], [ 6.0, 11.0 ] ]

var bool = ( out === C );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a two-dimensional input ndarray corresponding to `B`.
    -   a two-dimensional input/output ndarray corresponding to `C`.
    -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
    -   a zero-dimensional ndarray specifying whether `B` should be transposed, conjugate-transposed, or not transposed.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `beta`.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-discrete-uniform@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-transpose-operation-resolve-enum@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import sgemm from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-sgemm@deno/mod.js';

var opts = {
    'dtype': 'float32'
};

var A = discreteUniform( [ 3, 4 ], 0, 10, opts );
var B = discreteUniform( [ 4, 2 ], 0, 10, opts );
var C = discreteUniform( [ 3, 2 ], 0, 10, opts );

var transA = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int32'
});
var transB = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 1.0, opts );
var beta = scalar2ndarray( 1.0, opts );

var out = sgemm( [ A, B, C, transA, transB, alpha, beta ] );
console.log( ndarray2array( out ) );
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ndarray-sgemm.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ndarray-sgemm

[test-image]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ndarray-sgemm/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ndarray-sgemm?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ndarray-sgemm.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ndarray-sgemm/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-ndarray-sgemm/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ndarray-sgemm/main/LICENSE

</section>

<!-- /.links -->
