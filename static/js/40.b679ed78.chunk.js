(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[40],{515:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="\nimport numpy as np\ncimport cython\nfrom libc.math cimport sqrt\n\n@cython.boundscheck(False)\n@cython.wraparound(False)\ndef pairwise_cython(double[:, ::1] X):\n    cdef int M = X.shape[0]\n    cdef int N = X.shape[1]\n    cdef double tmp, d\n    cdef double[:, ::1] D = np.empty((M, M), dtype=np.float64)\n    for i in range(M):\n        for j in range(M):\n            d = 0.0\n            for k in range(N):\n                tmp = X[i, k] - X[j, k]\n                d += tmp * tmp\n            D[i, j] = sqrt(d)\n    return np.asarray(D)\n"}}]);
//# sourceMappingURL=40.b679ed78.chunk.js.map