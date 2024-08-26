const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DHnd9672.js","assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { du as IEvents, c8 as getAugmentedNamespace, dv as require$$0$1, dw as cjs$1, cb as eventsExports, dx as getWindowMetadata_1, dy as getNavigator_1, dz as getDocument_1, dA as sha256, dB as fromString, dC as toString, dD as x25519, dE as random, dF as HKDF_1, dG as chacha20poly1305, dH as concat, dI as queryString, dJ as C$2, dK as detect, dL as getLocation_1, dM as r, dN as formatJsonRpcRequest, dO as getBigIntRpcId, dP as isJsonRpcError, dQ as isJsonRpcResponse, dR as Yi$1, dS as E$3, dT as y$2, dU as k$1, dV as A$1, dW as h$1, dX as generateKeyPair, dY as encodeIss, dZ as signJWT, d_ as safeJsonStringify, d$ as safeJsonParse, e0 as Hg, e1 as f$2, e2 as isJsonRpcRequest, e3 as formatJsonRpcResult, e4 as Wg, e5 as formatJsonRpcError, e6 as isJsonRpcResult, e7 as Hi$1, e8 as payloadId, bU as commonjsGlobal, bO as getDefaultExportFromCjs, e9 as isHttpUrl, ea as parseConnectionError, c as __vitePreload } from "./index-R4o_uq0C.js";
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents
}, Symbol.toStringTag, { value: "Module" }));
function zo(e, t = []) {
  const r2 = [];
  return Object.keys(e).forEach((i) => {
    if (t.length && !t.includes(i)) return;
    const n2 = e[i];
    r2.push(...n2.accounts);
  }), r2;
}
var On$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0$2(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e).forEach(function(i) {
    var n2 = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r2, i, n2.get ? n2 : { enumerable: true, get: function() {
      return e[i];
    } });
  }), r2;
}
var Pn$2 = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i = typeof window == "object", n2 = i ? window : {};
    n2.JS_SHA3_NO_WINDOW && (i = false);
    var o2 = !i && typeof self == "object", h2 = !n2.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h2 ? n2 = On$2 : o2 && (n2 = self);
    var p3 = !n2.JS_SHA3_NO_COMMON_JS && true && e.exports, b3 = !n2.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m2 = "0123456789abcdef".split(""), w3 = [31, 7936, 2031616, 520093696], y3 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], I2 = [6, 1536, 393216, 100663296], N2 = [0, 8, 16, 24], C2 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F2 = [224, 256, 384, 512], U2 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n2.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u3) {
      return Object.prototype.toString.call(u3) === "[object Array]";
    }), b3 && (n2.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u3) {
      return typeof u3 == "object" && u3.buffer && u3.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u3, E3, _2) {
      return function(B) {
        return new s(u3, E3, u3).update(B)[_2]();
      };
    }, H = function(u3, E3, _2) {
      return function(B, R) {
        return new s(u3, E3, R).update(B)[_2]();
      };
    }, z2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["cshake" + u3].update(B, R, T2, P2)[_2]();
      };
    }, Pt2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["kmac" + u3].update(B, R, T2, P2)[_2]();
      };
    }, W = function(u3, E3, _2, B) {
      for (var R = 0; R < J2.length; ++R) {
        var T2 = J2[R];
        u3[T2] = E3(_2, B, T2);
      }
      return u3;
    }, Rt2 = function(u3, E3) {
      var _2 = G(u3, E3, "hex");
      return _2.create = function() {
        return new s(u3, E3, u3);
      }, _2.update = function(B) {
        return _2.create().update(B);
      }, W(_2, G, u3, E3);
    }, Yt3 = function(u3, E3) {
      var _2 = H(u3, E3, "hex");
      return _2.create = function(B) {
        return new s(u3, E3, B);
      }, _2.update = function(B, R) {
        return _2.create(R).update(B);
      }, W(_2, H, u3, E3);
    }, Y = function(u3, E3) {
      var _2 = Bt2[u3], B = z2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return !T2 && !P2 ? f2["shake" + u3].create(R) : new s(u3, E3, R).bytepad([T2, P2], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(T2, P2, O2).update(R);
      }, W(B, z2, u3, E3);
    }, Vt2 = function(u3, E3) {
      var _2 = Bt2[u3], B = Pt2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return new v3(u3, E3, T2).bytepad(["KMAC", P2], _2).bytepad([R], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(R, P2, O2).update(T2);
      }, W(B, Pt2, u3, E3);
    }, A2 = [{ name: "keccak", padding: S2, bits: F2, createMethod: Rt2 }, { name: "sha3", padding: I2, bits: F2, createMethod: Rt2 }, { name: "shake", padding: w3, bits: U2, createMethod: Yt3 }, { name: "cshake", padding: y3, bits: U2, createMethod: Y }, { name: "kmac", padding: y3, bits: U2, createMethod: Vt2 }], f2 = {}, a2 = [], c2 = 0; c2 < A2.length; ++c2) for (var d3 = A2[c2], g3 = d3.bits, x = 0; x < g3.length; ++x) {
      var M2 = d3.name + "_" + g3[x];
      if (a2.push(M2), f2[M2] = d3.createMethod(g3[x], d3.padding), d3.name !== "sha3") {
        var l2 = d3.name + g3[x];
        a2.push(l2), f2[l2] = f2[M2];
      }
    }
    function s(u3, E3, _2) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _2, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u3 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _2 >> 5, this.extraBytes = (_2 & 31) >> 3;
      for (var B = 0; B < 50; ++B) this.s[B] = 0;
    }
    s.prototype.update = function(u3) {
      if (this.finalized) throw new Error(r2);
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      for (var B = this.blocks, R = this.byteCount, T2 = u3.length, P2 = this.blockCount, O2 = 0, Ct2 = this.s, D2, q2; O2 < T2; ) {
        if (this.reset) for (this.reset = false, B[0] = this.block, D2 = 1; D2 < P2 + 1; ++D2) B[D2] = 0;
        if (E3) for (D2 = this.start; O2 < T2 && D2 < R; ++O2) B[D2 >> 2] |= u3[O2] << N2[D2++ & 3];
        else for (D2 = this.start; O2 < T2 && D2 < R; ++O2) q2 = u3.charCodeAt(O2), q2 < 128 ? B[D2 >> 2] |= q2 << N2[D2++ & 3] : q2 < 2048 ? (B[D2 >> 2] |= (192 | q2 >> 6) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : q2 < 55296 || q2 >= 57344 ? (B[D2 >> 2] |= (224 | q2 >> 12) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : (q2 = 65536 + ((q2 & 1023) << 10 | u3.charCodeAt(++O2) & 1023), B[D2 >> 2] |= (240 | q2 >> 18) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 12 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]);
        if (this.lastByteIndex = D2, D2 >= R) {
          for (this.start = D2 - R, this.block = B[P2], D2 = 0; D2 < P2; ++D2) Ct2[D2] ^= B[D2];
          k2(Ct2), this.reset = true;
        } else this.start = D2;
      }
      return this;
    }, s.prototype.encode = function(u3, E3) {
      var _2 = u3 & 255, B = 1, R = [_2];
      for (u3 = u3 >> 8, _2 = u3 & 255; _2 > 0; ) R.unshift(_2), u3 = u3 >> 8, _2 = u3 & 255, ++B;
      return E3 ? R.push(B) : R.unshift(B), this.update(R), R.length;
    }, s.prototype.encodeString = function(u3) {
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      var B = 0, R = u3.length;
      if (E3) B = R;
      else for (var T2 = 0; T2 < u3.length; ++T2) {
        var P2 = u3.charCodeAt(T2);
        P2 < 128 ? B += 1 : P2 < 2048 ? B += 2 : P2 < 55296 || P2 >= 57344 ? B += 3 : (P2 = 65536 + ((P2 & 1023) << 10 | u3.charCodeAt(++T2) & 1023), B += 4);
      }
      return B += this.encode(B * 8), this.update(u3), B;
    }, s.prototype.bytepad = function(u3, E3) {
      for (var _2 = this.encode(E3), B = 0; B < u3.length; ++B) _2 += this.encodeString(u3[B]);
      var R = E3 - _2 % E3, T2 = [];
      return T2.length = R, this.update(T2), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u3 = this.blocks, E3 = this.lastByteIndex, _2 = this.blockCount, B = this.s;
        if (u3[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount) for (u3[0] = u3[_2], E3 = 1; E3 < _2 + 1; ++E3) u3[E3] = 0;
        for (u3[_2 - 1] |= 2147483648, E3 = 0; E3 < _2; ++E3) B[E3] ^= u3[E3];
        k2(B);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = "", O2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15] + m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15] + m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15] + m2[O2 >> 28 & 15] + m2[O2 >> 24 & 15];
        T2 % u3 === 0 && (k2(E3), R = 0);
      }
      return B && (O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15], B > 1 && (P2 += m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15]), B > 2 && (P2 += m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15])), P2;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = this.outputBits >> 3, O2;
      B ? O2 = new ArrayBuffer(_2 + 1 << 2) : O2 = new ArrayBuffer(P2);
      for (var Ct2 = new Uint32Array(O2); T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) Ct2[T2] = E3[R];
        T2 % u3 === 0 && k2(E3);
      }
      return B && (Ct2[R] = E3[R], O2 = O2.slice(0, P2)), O2;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = [], O2, Ct2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, P2[O2 + 1] = Ct2 >> 8 & 255, P2[O2 + 2] = Ct2 >> 16 & 255, P2[O2 + 3] = Ct2 >> 24 & 255;
        T2 % u3 === 0 && k2(E3);
      }
      return B && (O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, B > 1 && (P2[O2 + 1] = Ct2 >> 8 & 255), B > 2 && (P2[O2 + 2] = Ct2 >> 16 & 255)), P2;
    };
    function v3(u3, E3, _2) {
      s.call(this, u3, E3, _2);
    }
    v3.prototype = new s(), v3.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k2 = function(u3) {
      var E3, _2, B, R, T2, P2, O2, Ct2, D2, q2, De2, X2, Z2, Fe2, $2, tt2, Te, et2, rt2, Ue2, it2, nt2, ke2, ft2, ot2, qe2, st2, at2, Ke2, ut2, ht2, He2, ct2, lt2, ze2, dt2, pt2, Le, vt2, mt2, je2, gt2, At2, Qe2, bt2, yt2, Je2, wt2, xt2, Ge2, Mt2, Et2, Ye2, St2, Nt2, Ve2, It2, _t2, Me2, Ee2, Se2, Ne, Ie;
      for (B = 0; B < 48; B += 2) R = u3[0] ^ u3[10] ^ u3[20] ^ u3[30] ^ u3[40], T2 = u3[1] ^ u3[11] ^ u3[21] ^ u3[31] ^ u3[41], P2 = u3[2] ^ u3[12] ^ u3[22] ^ u3[32] ^ u3[42], O2 = u3[3] ^ u3[13] ^ u3[23] ^ u3[33] ^ u3[43], Ct2 = u3[4] ^ u3[14] ^ u3[24] ^ u3[34] ^ u3[44], D2 = u3[5] ^ u3[15] ^ u3[25] ^ u3[35] ^ u3[45], q2 = u3[6] ^ u3[16] ^ u3[26] ^ u3[36] ^ u3[46], De2 = u3[7] ^ u3[17] ^ u3[27] ^ u3[37] ^ u3[47], X2 = u3[8] ^ u3[18] ^ u3[28] ^ u3[38] ^ u3[48], Z2 = u3[9] ^ u3[19] ^ u3[29] ^ u3[39] ^ u3[49], E3 = X2 ^ (P2 << 1 | O2 >>> 31), _2 = Z2 ^ (O2 << 1 | P2 >>> 31), u3[0] ^= E3, u3[1] ^= _2, u3[10] ^= E3, u3[11] ^= _2, u3[20] ^= E3, u3[21] ^= _2, u3[30] ^= E3, u3[31] ^= _2, u3[40] ^= E3, u3[41] ^= _2, E3 = R ^ (Ct2 << 1 | D2 >>> 31), _2 = T2 ^ (D2 << 1 | Ct2 >>> 31), u3[2] ^= E3, u3[3] ^= _2, u3[12] ^= E3, u3[13] ^= _2, u3[22] ^= E3, u3[23] ^= _2, u3[32] ^= E3, u3[33] ^= _2, u3[42] ^= E3, u3[43] ^= _2, E3 = P2 ^ (q2 << 1 | De2 >>> 31), _2 = O2 ^ (De2 << 1 | q2 >>> 31), u3[4] ^= E3, u3[5] ^= _2, u3[14] ^= E3, u3[15] ^= _2, u3[24] ^= E3, u3[25] ^= _2, u3[34] ^= E3, u3[35] ^= _2, u3[44] ^= E3, u3[45] ^= _2, E3 = Ct2 ^ (X2 << 1 | Z2 >>> 31), _2 = D2 ^ (Z2 << 1 | X2 >>> 31), u3[6] ^= E3, u3[7] ^= _2, u3[16] ^= E3, u3[17] ^= _2, u3[26] ^= E3, u3[27] ^= _2, u3[36] ^= E3, u3[37] ^= _2, u3[46] ^= E3, u3[47] ^= _2, E3 = q2 ^ (R << 1 | T2 >>> 31), _2 = De2 ^ (T2 << 1 | R >>> 31), u3[8] ^= E3, u3[9] ^= _2, u3[18] ^= E3, u3[19] ^= _2, u3[28] ^= E3, u3[29] ^= _2, u3[38] ^= E3, u3[39] ^= _2, u3[48] ^= E3, u3[49] ^= _2, Fe2 = u3[0], $2 = u3[1], yt2 = u3[11] << 4 | u3[10] >>> 28, Je2 = u3[10] << 4 | u3[11] >>> 28, at2 = u3[20] << 3 | u3[21] >>> 29, Ke2 = u3[21] << 3 | u3[20] >>> 29, Ee2 = u3[31] << 9 | u3[30] >>> 23, Se2 = u3[30] << 9 | u3[31] >>> 23, gt2 = u3[40] << 18 | u3[41] >>> 14, At2 = u3[41] << 18 | u3[40] >>> 14, lt2 = u3[2] << 1 | u3[3] >>> 31, ze2 = u3[3] << 1 | u3[2] >>> 31, tt2 = u3[13] << 12 | u3[12] >>> 20, Te = u3[12] << 12 | u3[13] >>> 20, wt2 = u3[22] << 10 | u3[23] >>> 22, xt2 = u3[23] << 10 | u3[22] >>> 22, ut2 = u3[33] << 13 | u3[32] >>> 19, ht2 = u3[32] << 13 | u3[33] >>> 19, Ne = u3[42] << 2 | u3[43] >>> 30, Ie = u3[43] << 2 | u3[42] >>> 30, St2 = u3[5] << 30 | u3[4] >>> 2, Nt2 = u3[4] << 30 | u3[5] >>> 2, dt2 = u3[14] << 6 | u3[15] >>> 26, pt2 = u3[15] << 6 | u3[14] >>> 26, et2 = u3[25] << 11 | u3[24] >>> 21, rt2 = u3[24] << 11 | u3[25] >>> 21, Ge2 = u3[34] << 15 | u3[35] >>> 17, Mt2 = u3[35] << 15 | u3[34] >>> 17, He2 = u3[45] << 29 | u3[44] >>> 3, ct2 = u3[44] << 29 | u3[45] >>> 3, ft2 = u3[6] << 28 | u3[7] >>> 4, ot2 = u3[7] << 28 | u3[6] >>> 4, Ve2 = u3[17] << 23 | u3[16] >>> 9, It2 = u3[16] << 23 | u3[17] >>> 9, Le = u3[26] << 25 | u3[27] >>> 7, vt2 = u3[27] << 25 | u3[26] >>> 7, Ue2 = u3[36] << 21 | u3[37] >>> 11, it2 = u3[37] << 21 | u3[36] >>> 11, Et2 = u3[47] << 24 | u3[46] >>> 8, Ye2 = u3[46] << 24 | u3[47] >>> 8, Qe2 = u3[8] << 27 | u3[9] >>> 5, bt2 = u3[9] << 27 | u3[8] >>> 5, qe2 = u3[18] << 20 | u3[19] >>> 12, st2 = u3[19] << 20 | u3[18] >>> 12, _t2 = u3[29] << 7 | u3[28] >>> 25, Me2 = u3[28] << 7 | u3[29] >>> 25, mt2 = u3[38] << 8 | u3[39] >>> 24, je2 = u3[39] << 8 | u3[38] >>> 24, nt2 = u3[48] << 14 | u3[49] >>> 18, ke2 = u3[49] << 14 | u3[48] >>> 18, u3[0] = Fe2 ^ ~tt2 & et2, u3[1] = $2 ^ ~Te & rt2, u3[10] = ft2 ^ ~qe2 & at2, u3[11] = ot2 ^ ~st2 & Ke2, u3[20] = lt2 ^ ~dt2 & Le, u3[21] = ze2 ^ ~pt2 & vt2, u3[30] = Qe2 ^ ~yt2 & wt2, u3[31] = bt2 ^ ~Je2 & xt2, u3[40] = St2 ^ ~Ve2 & _t2, u3[41] = Nt2 ^ ~It2 & Me2, u3[2] = tt2 ^ ~et2 & Ue2, u3[3] = Te ^ ~rt2 & it2, u3[12] = qe2 ^ ~at2 & ut2, u3[13] = st2 ^ ~Ke2 & ht2, u3[22] = dt2 ^ ~Le & mt2, u3[23] = pt2 ^ ~vt2 & je2, u3[32] = yt2 ^ ~wt2 & Ge2, u3[33] = Je2 ^ ~xt2 & Mt2, u3[42] = Ve2 ^ ~_t2 & Ee2, u3[43] = It2 ^ ~Me2 & Se2, u3[4] = et2 ^ ~Ue2 & nt2, u3[5] = rt2 ^ ~it2 & ke2, u3[14] = at2 ^ ~ut2 & He2, u3[15] = Ke2 ^ ~ht2 & ct2, u3[24] = Le ^ ~mt2 & gt2, u3[25] = vt2 ^ ~je2 & At2, u3[34] = wt2 ^ ~Ge2 & Et2, u3[35] = xt2 ^ ~Mt2 & Ye2, u3[44] = _t2 ^ ~Ee2 & Ne, u3[45] = Me2 ^ ~Se2 & Ie, u3[6] = Ue2 ^ ~nt2 & Fe2, u3[7] = it2 ^ ~ke2 & $2, u3[16] = ut2 ^ ~He2 & ft2, u3[17] = ht2 ^ ~ct2 & ot2, u3[26] = mt2 ^ ~gt2 & lt2, u3[27] = je2 ^ ~At2 & ze2, u3[36] = Ge2 ^ ~Et2 & Qe2, u3[37] = Mt2 ^ ~Ye2 & bt2, u3[46] = Ee2 ^ ~Ne & St2, u3[47] = Se2 ^ ~Ie & Nt2, u3[8] = nt2 ^ ~Fe2 & tt2, u3[9] = ke2 ^ ~$2 & Te, u3[18] = He2 ^ ~ft2 & qe2, u3[19] = ct2 ^ ~ot2 & st2, u3[28] = gt2 ^ ~lt2 & dt2, u3[29] = At2 ^ ~ze2 & pt2, u3[38] = Et2 ^ ~Qe2 & yt2, u3[39] = Ye2 ^ ~bt2 & Je2, u3[48] = Ne ^ ~St2 & Ve2, u3[49] = Ie ^ ~Nt2 & It2, u3[0] ^= C2[B], u3[1] ^= C2[B + 1];
    };
    if (p3) e.exports = f2;
    else for (c2 = 0; c2 < a2.length; ++c2) n2[a2[c2]] = f2[a2[c2]];
  })();
})(Pn$2);
const y0$2 = "logger/5.7.0";
let Dn$2 = false, Fn$2 = false;
const Cr$3 = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Tn$2 = Cr$3.default, gi$2 = null;
function w0$2() {
  try {
    const e = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test") throw new Error("bad normalize");
      } catch {
        e.push(t);
      }
    }), e.length) throw new Error("missing " + e.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
const Un$2 = w0$2();
var Ai$2;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai$2 || (Ai$2 = {}));
var re$3;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re$3 || (re$3 = {}));
const kn$2 = "0123456789abcdef";
let L$5 = class L {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i = t.toLowerCase();
    Cr$3[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn$2 > Cr$3[i]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(L.levels.DEBUG, t);
  }
  info(...t) {
    this._log(L.levels.INFO, t);
  }
  warn(...t) {
    this._log(L.levels.WARNING, t);
  }
  makeError(t, r2, i) {
    if (Fn$2) return this.makeError("censored error", r2, {});
    r2 || (r2 = L.errors.UNKNOWN_ERROR), i || (i = {});
    const n2 = [];
    Object.keys(i).forEach((b3) => {
      const m2 = i[b3];
      try {
        if (m2 instanceof Uint8Array) {
          let w3 = "";
          for (let y3 = 0; y3 < m2.length; y3++) w3 += kn$2[m2[y3] >> 4], w3 += kn$2[m2[y3] & 15];
          n2.push(b3 + "=Uint8Array(0x" + w3 + ")");
        } else n2.push(b3 + "=" + JSON.stringify(m2));
      } catch {
        n2.push(b3 + "=" + JSON.stringify(i[b3].toString()));
      }
    }), n2.push(`code=${r2}`), n2.push(`version=${this.version}`);
    const o2 = t;
    let h2 = "";
    switch (r2) {
      case re$3.NUMERIC_FAULT: {
        h2 = "NUMERIC_FAULT";
        const b3 = t;
        switch (b3) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h2 += "-" + b3;
            break;
          case "negative-power":
          case "negative-width":
            h2 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h2 += "-unbound-result";
            break;
        }
        break;
      }
      case re$3.CALL_EXCEPTION:
      case re$3.INSUFFICIENT_FUNDS:
      case re$3.MISSING_NEW:
      case re$3.NONCE_EXPIRED:
      case re$3.REPLACEMENT_UNDERPRICED:
      case re$3.TRANSACTION_REPLACED:
      case re$3.UNPREDICTABLE_GAS_LIMIT:
        h2 = r2;
        break;
    }
    h2 && (t += " [ See: https://links.ethers.org/v5-errors-" + h2 + " ]"), n2.length && (t += " (" + n2.join(", ") + ")");
    const p3 = new Error(t);
    return p3.reason = o2, p3.code = r2, Object.keys(i).forEach(function(b3) {
      p3[b3] = i[b3];
    }), p3;
  }
  throwError(t, r2, i) {
    throw this.makeError(t, r2, i);
  }
  throwArgumentError(t, r2, i) {
    return this.throwError(t, L.errors.INVALID_ARGUMENT, { argument: r2, value: i });
  }
  assert(t, r2, i, n2) {
    t || this.throwError(r2, i, n2);
  }
  assertArgument(t, r2, i, n2) {
    t || this.throwArgumentError(r2, i, n2);
  }
  checkNormalize(t) {
    Un$2 && this.throwError("platform missing String.prototype.normalize", L.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un$2 });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i) {
    i ? i = ": " + i : i = "", t < r2 && this.throwError("missing argument" + i, L.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i, L.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", L.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi$2 || (gi$2 = new L(y0$2)), gi$2;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn$2) {
      if (!t) return;
      this.globalLogger().throwError("error censorship permanent", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn$2 = !!t, Dn$2 = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr$3[t.toLowerCase()];
    if (r2 == null) {
      L.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn$2 = r2;
  }
  static from(t) {
    return new L(t);
  }
};
L$5.errors = re$3, L$5.levels = Ai$2;
const x0$2 = "bytes/5.7.0", Dt$3 = new L$5(x0$2);
function qn$2(e) {
  return !!e.toHexString;
}
function rr$3(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr$3(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function Kn$2(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function ir$3(e) {
  if (e == null) return false;
  if (e.constructor === Uint8Array) return true;
  if (typeof e == "string" || !Kn$2(e.length) || e.length < 0) return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Kn$2(r2) || r2 < 0 || r2 >= 256) return false;
  }
  return true;
}
function Ot$3(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt$3.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; ) r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), rr$3(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn$2(e) && (e = e.toHexString()), Qt$2(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt$3.throwArgumentError("hex data is odd-length", "value", e));
    const i = [];
    for (let n2 = 0; n2 < r2.length; n2 += 2) i.push(parseInt(r2.substring(n2, n2 + 2), 16));
    return rr$3(new Uint8Array(i));
  }
  return ir$3(e) ? rr$3(new Uint8Array(e)) : Dt$3.throwArgumentError("invalid arrayify value", "value", e);
}
function Qt$2(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t);
}
const bi$2 = "0123456789abcdef";
function Kt$3(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt$3.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; ) r2 = bi$2[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn$2(e)) return e.toHexString();
  if (Qt$2(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt$3.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (ir$3(e)) {
    let r2 = "0x";
    for (let i = 0; i < e.length; i++) {
      let n2 = e[i];
      r2 += bi$2[(n2 & 240) >> 4] + bi$2[n2 & 15];
    }
    return r2;
  }
  return Dt$3.throwArgumentError("invalid hexlify value", "value", e);
}
function oe$2(e, t) {
  for (typeof e != "string" ? e = Kt$3(e) : Qt$2(e) || Dt$3.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt$3.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; ) e = "0x0" + e.substring(2);
  return e;
}
var Ln$2 = { exports: {} }, I0$2 = {}, _0$2 = Object.freeze({ __proto__: null, default: I0$2 }), B0$2 = A0$2(_0$2);
(function(e) {
  (function(t, r2) {
    function i(A2, f2) {
      if (!A2) throw new Error(f2 || "Assertion failed");
    }
    function n2(A2, f2) {
      A2.super_ = f2;
      var a2 = function() {
      };
      a2.prototype = f2.prototype, A2.prototype = new a2(), A2.prototype.constructor = A2;
    }
    function o2(A2, f2, a2) {
      if (o2.isBN(A2)) return A2;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A2 !== null && ((f2 === "le" || f2 === "be") && (a2 = f2, f2 = 10), this._init(A2 || 0, f2 || 10, a2 || "be"));
    }
    typeof t == "object" ? t.exports = o2 : r2.BN = o2, o2.BN = o2, o2.wordSize = 26;
    var h2;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h2 = window.Buffer : h2 = B0$2.Buffer;
    } catch {
    }
    o2.isBN = function(f2) {
      return f2 instanceof o2 ? true : f2 !== null && typeof f2 == "object" && f2.constructor.wordSize === o2.wordSize && Array.isArray(f2.words);
    }, o2.max = function(f2, a2) {
      return f2.cmp(a2) > 0 ? f2 : a2;
    }, o2.min = function(f2, a2) {
      return f2.cmp(a2) < 0 ? f2 : a2;
    }, o2.prototype._init = function(f2, a2, c2) {
      if (typeof f2 == "number") return this._initNumber(f2, a2, c2);
      if (typeof f2 == "object") return this._initArray(f2, a2, c2);
      a2 === "hex" && (a2 = 16), i(a2 === (a2 | 0) && a2 >= 2 && a2 <= 36), f2 = f2.toString().replace(/\s+/g, "");
      var d3 = 0;
      f2[0] === "-" && (d3++, this.negative = 1), d3 < f2.length && (a2 === 16 ? this._parseHex(f2, d3, c2) : (this._parseBase(f2, a2, d3), c2 === "le" && this._initArray(this.toArray(), a2, c2)));
    }, o2.prototype._initNumber = function(f2, a2, c2) {
      f2 < 0 && (this.negative = 1, f2 = -f2), f2 < 67108864 ? (this.words = [f2 & 67108863], this.length = 1) : f2 < 4503599627370496 ? (this.words = [f2 & 67108863, f2 / 67108864 & 67108863], this.length = 2) : (i(f2 < 9007199254740992), this.words = [f2 & 67108863, f2 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a2, c2);
    }, o2.prototype._initArray = function(f2, a2, c2) {
      if (i(typeof f2.length == "number"), f2.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f2.length / 3), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3, x, M2 = 0;
      if (c2 === "be") for (d3 = f2.length - 1, g3 = 0; d3 >= 0; d3 -= 3) x = f2[d3] | f2[d3 - 1] << 8 | f2[d3 - 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      else if (c2 === "le") for (d3 = 0, g3 = 0; d3 < f2.length; d3 += 3) x = f2[d3] | f2[d3 + 1] << 8 | f2[d3 + 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      return this._strip();
    };
    function p3(A2, f2) {
      var a2 = A2.charCodeAt(f2);
      if (a2 >= 48 && a2 <= 57) return a2 - 48;
      if (a2 >= 65 && a2 <= 70) return a2 - 55;
      if (a2 >= 97 && a2 <= 102) return a2 - 87;
      i(false, "Invalid character in " + A2);
    }
    function b3(A2, f2, a2) {
      var c2 = p3(A2, a2);
      return a2 - 1 >= f2 && (c2 |= p3(A2, a2 - 1) << 4), c2;
    }
    o2.prototype._parseHex = function(f2, a2, c2) {
      this.length = Math.ceil((f2.length - a2) / 6), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3 = 0, x = 0, M2;
      if (c2 === "be") for (d3 = f2.length - 1; d3 >= a2; d3 -= 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      else {
        var l2 = f2.length - a2;
        for (d3 = l2 % 2 === 0 ? a2 + 1 : a2; d3 < f2.length; d3 += 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      }
      this._strip();
    };
    function m2(A2, f2, a2, c2) {
      for (var d3 = 0, g3 = 0, x = Math.min(A2.length, a2), M2 = f2; M2 < x; M2++) {
        var l2 = A2.charCodeAt(M2) - 48;
        d3 *= c2, l2 >= 49 ? g3 = l2 - 49 + 10 : l2 >= 17 ? g3 = l2 - 17 + 10 : g3 = l2, i(l2 >= 0 && g3 < c2, "Invalid character"), d3 += g3;
      }
      return d3;
    }
    o2.prototype._parseBase = function(f2, a2, c2) {
      this.words = [0], this.length = 1;
      for (var d3 = 0, g3 = 1; g3 <= 67108863; g3 *= a2) d3++;
      d3--, g3 = g3 / a2 | 0;
      for (var x = f2.length - c2, M2 = x % d3, l2 = Math.min(x, x - M2) + c2, s = 0, v3 = c2; v3 < l2; v3 += d3) s = m2(f2, v3, v3 + d3, a2), this.imuln(g3), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M2 !== 0) {
        var k2 = 1;
        for (s = m2(f2, v3, f2.length, a2), v3 = 0; v3 < M2; v3++) k2 *= a2;
        this.imuln(k2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o2.prototype.copy = function(f2) {
      f2.words = new Array(this.length);
      for (var a2 = 0; a2 < this.length; a2++) f2.words[a2] = this.words[a2];
      f2.length = this.length, f2.negative = this.negative, f2.red = this.red;
    };
    function w3(A2, f2) {
      A2.words = f2.words, A2.length = f2.length, A2.negative = f2.negative, A2.red = f2.red;
    }
    if (o2.prototype._move = function(f2) {
      w3(f2, this);
    }, o2.prototype.clone = function() {
      var f2 = new o2(null);
      return this.copy(f2), f2;
    }, o2.prototype._expand = function(f2) {
      for (; this.length < f2; ) this.words[this.length++] = 0;
      return this;
    }, o2.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o2.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o2.prototype[Symbol.for("nodejs.util.inspect.custom")] = y3;
    } catch {
      o2.prototype.inspect = y3;
    }
    else o2.prototype.inspect = y3;
    function y3() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o2.prototype.toString = function(f2, a2) {
      f2 = f2 || 10, a2 = a2 | 0 || 1;
      var c2;
      if (f2 === 16 || f2 === "hex") {
        c2 = "";
        for (var d3 = 0, g3 = 0, x = 0; x < this.length; x++) {
          var M2 = this.words[x], l2 = ((M2 << d3 | g3) & 16777215).toString(16);
          g3 = M2 >>> 24 - d3 & 16777215, d3 += 2, d3 >= 26 && (d3 -= 26, x--), g3 !== 0 || x !== this.length - 1 ? c2 = S2[6 - l2.length] + l2 + c2 : c2 = l2 + c2;
        }
        for (g3 !== 0 && (c2 = g3.toString(16) + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f2 === (f2 | 0) && f2 >= 2 && f2 <= 36) {
        var s = I2[f2], v3 = N2[f2];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u3 = k2.modrn(v3).toString(f2);
          k2 = k2.idivn(v3), k2.isZero() ? c2 = u3 + c2 : c2 = S2[s - u3.length] + u3 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i(false, "Base should be between 2 and 36");
    }, o2.prototype.toNumber = function() {
      var f2 = this.words[0];
      return this.length === 2 ? f2 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f2 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f2 : f2;
    }, o2.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h2 && (o2.prototype.toBuffer = function(f2, a2) {
      return this.toArrayLike(h2, f2, a2);
    }), o2.prototype.toArray = function(f2, a2) {
      return this.toArrayLike(Array, f2, a2);
    };
    var C2 = function(f2, a2) {
      return f2.allocUnsafe ? f2.allocUnsafe(a2) : new f2(a2);
    };
    o2.prototype.toArrayLike = function(f2, a2, c2) {
      this._strip();
      var d3 = this.byteLength(), g3 = c2 || Math.max(1, d3);
      i(d3 <= g3, "byte array longer than desired length"), i(g3 > 0, "Requested array length <= 0");
      var x = C2(f2, g3), M2 = a2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M2](x, d3), x;
    }, o2.prototype._toArrayLikeLE = function(f2, a2) {
      for (var c2 = 0, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2++] = M2 & 255, c2 < f2.length && (f2[c2++] = M2 >> 8 & 255), c2 < f2.length && (f2[c2++] = M2 >> 16 & 255), x === 6 ? (c2 < f2.length && (f2[c2++] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 < f2.length) for (f2[c2++] = d3; c2 < f2.length; ) f2[c2++] = 0;
    }, o2.prototype._toArrayLikeBE = function(f2, a2) {
      for (var c2 = f2.length - 1, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2--] = M2 & 255, c2 >= 0 && (f2[c2--] = M2 >> 8 & 255), c2 >= 0 && (f2[c2--] = M2 >> 16 & 255), x === 6 ? (c2 >= 0 && (f2[c2--] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 >= 0) for (f2[c2--] = d3; c2 >= 0; ) f2[c2--] = 0;
    }, Math.clz32 ? o2.prototype._countBits = function(f2) {
      return 32 - Math.clz32(f2);
    } : o2.prototype._countBits = function(f2) {
      var a2 = f2, c2 = 0;
      return a2 >= 4096 && (c2 += 13, a2 >>>= 13), a2 >= 64 && (c2 += 7, a2 >>>= 7), a2 >= 8 && (c2 += 4, a2 >>>= 4), a2 >= 2 && (c2 += 2, a2 >>>= 2), c2 + a2;
    }, o2.prototype._zeroBits = function(f2) {
      if (f2 === 0) return 26;
      var a2 = f2, c2 = 0;
      return a2 & 8191 || (c2 += 13, a2 >>>= 13), a2 & 127 || (c2 += 7, a2 >>>= 7), a2 & 15 || (c2 += 4, a2 >>>= 4), a2 & 3 || (c2 += 2, a2 >>>= 2), a2 & 1 || c2++, c2;
    }, o2.prototype.bitLength = function() {
      var f2 = this.words[this.length - 1], a2 = this._countBits(f2);
      return (this.length - 1) * 26 + a2;
    };
    function F2(A2) {
      for (var f2 = new Array(A2.bitLength()), a2 = 0; a2 < f2.length; a2++) {
        var c2 = a2 / 26 | 0, d3 = a2 % 26;
        f2[a2] = A2.words[c2] >>> d3 & 1;
      }
      return f2;
    }
    o2.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f2 = 0, a2 = 0; a2 < this.length; a2++) {
        var c2 = this._zeroBits(this.words[a2]);
        if (f2 += c2, c2 !== 26) break;
      }
      return f2;
    }, o2.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o2.prototype.toTwos = function(f2) {
      return this.negative !== 0 ? this.abs().inotn(f2).iaddn(1) : this.clone();
    }, o2.prototype.fromTwos = function(f2) {
      return this.testn(f2 - 1) ? this.notn(f2).iaddn(1).ineg() : this.clone();
    }, o2.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o2.prototype.neg = function() {
      return this.clone().ineg();
    }, o2.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o2.prototype.iuor = function(f2) {
      for (; this.length < f2.length; ) this.words[this.length++] = 0;
      for (var a2 = 0; a2 < f2.length; a2++) this.words[a2] = this.words[a2] | f2.words[a2];
      return this._strip();
    }, o2.prototype.ior = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuor(f2);
    }, o2.prototype.or = function(f2) {
      return this.length > f2.length ? this.clone().ior(f2) : f2.clone().ior(this);
    }, o2.prototype.uor = function(f2) {
      return this.length > f2.length ? this.clone().iuor(f2) : f2.clone().iuor(this);
    }, o2.prototype.iuand = function(f2) {
      var a2;
      this.length > f2.length ? a2 = f2 : a2 = this;
      for (var c2 = 0; c2 < a2.length; c2++) this.words[c2] = this.words[c2] & f2.words[c2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.iand = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuand(f2);
    }, o2.prototype.and = function(f2) {
      return this.length > f2.length ? this.clone().iand(f2) : f2.clone().iand(this);
    }, o2.prototype.uand = function(f2) {
      return this.length > f2.length ? this.clone().iuand(f2) : f2.clone().iuand(this);
    }, o2.prototype.iuxor = function(f2) {
      var a2, c2;
      this.length > f2.length ? (a2 = this, c2 = f2) : (a2 = f2, c2 = this);
      for (var d3 = 0; d3 < c2.length; d3++) this.words[d3] = a2.words[d3] ^ c2.words[d3];
      if (this !== a2) for (; d3 < a2.length; d3++) this.words[d3] = a2.words[d3];
      return this.length = a2.length, this._strip();
    }, o2.prototype.ixor = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuxor(f2);
    }, o2.prototype.xor = function(f2) {
      return this.length > f2.length ? this.clone().ixor(f2) : f2.clone().ixor(this);
    }, o2.prototype.uxor = function(f2) {
      return this.length > f2.length ? this.clone().iuxor(f2) : f2.clone().iuxor(this);
    }, o2.prototype.inotn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = Math.ceil(f2 / 26) | 0, c2 = f2 % 26;
      this._expand(a2), c2 > 0 && a2--;
      for (var d3 = 0; d3 < a2; d3++) this.words[d3] = ~this.words[d3] & 67108863;
      return c2 > 0 && (this.words[d3] = ~this.words[d3] & 67108863 >> 26 - c2), this._strip();
    }, o2.prototype.notn = function(f2) {
      return this.clone().inotn(f2);
    }, o2.prototype.setn = function(f2, a2) {
      i(typeof f2 == "number" && f2 >= 0);
      var c2 = f2 / 26 | 0, d3 = f2 % 26;
      return this._expand(c2 + 1), a2 ? this.words[c2] = this.words[c2] | 1 << d3 : this.words[c2] = this.words[c2] & ~(1 << d3), this._strip();
    }, o2.prototype.iadd = function(f2) {
      var a2;
      if (this.negative !== 0 && f2.negative === 0) return this.negative = 0, a2 = this.isub(f2), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f2.negative !== 0) return f2.negative = 0, a2 = this.isub(f2), f2.negative = 1, a2._normSign();
      var c2, d3;
      this.length > f2.length ? (c2 = this, d3 = f2) : (c2 = f2, d3 = this);
      for (var g3 = 0, x = 0; x < d3.length; x++) a2 = (c2.words[x] | 0) + (d3.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      for (; g3 !== 0 && x < c2.length; x++) a2 = (c2.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      if (this.length = c2.length, g3 !== 0) this.words[this.length] = g3, this.length++;
      else if (c2 !== this) for (; x < c2.length; x++) this.words[x] = c2.words[x];
      return this;
    }, o2.prototype.add = function(f2) {
      var a2;
      return f2.negative !== 0 && this.negative === 0 ? (f2.negative = 0, a2 = this.sub(f2), f2.negative ^= 1, a2) : f2.negative === 0 && this.negative !== 0 ? (this.negative = 0, a2 = f2.sub(this), this.negative = 1, a2) : this.length > f2.length ? this.clone().iadd(f2) : f2.clone().iadd(this);
    }, o2.prototype.isub = function(f2) {
      if (f2.negative !== 0) {
        f2.negative = 0;
        var a2 = this.iadd(f2);
        return f2.negative = 1, a2._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f2), this.negative = 1, this._normSign();
      var c2 = this.cmp(f2);
      if (c2 === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d3, g3;
      c2 > 0 ? (d3 = this, g3 = f2) : (d3 = f2, g3 = this);
      for (var x = 0, M2 = 0; M2 < g3.length; M2++) a2 = (d3.words[M2] | 0) - (g3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      for (; x !== 0 && M2 < d3.length; M2++) a2 = (d3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      if (x === 0 && M2 < d3.length && d3 !== this) for (; M2 < d3.length; M2++) this.words[M2] = d3.words[M2];
      return this.length = Math.max(this.length, M2), d3 !== this && (this.negative = 1), this._strip();
    }, o2.prototype.sub = function(f2) {
      return this.clone().isub(f2);
    };
    function U2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative;
      var c2 = A2.length + f2.length | 0;
      a2.length = c2, c2 = c2 - 1 | 0;
      var d3 = A2.words[0] | 0, g3 = f2.words[0] | 0, x = d3 * g3, M2 = x & 67108863, l2 = x / 67108864 | 0;
      a2.words[0] = M2;
      for (var s = 1; s < c2; s++) {
        for (var v3 = l2 >>> 26, k2 = l2 & 67108863, u3 = Math.min(s, f2.length - 1), E3 = Math.max(0, s - A2.length + 1); E3 <= u3; E3++) {
          var _2 = s - E3 | 0;
          d3 = A2.words[_2] | 0, g3 = f2.words[E3] | 0, x = d3 * g3 + k2, v3 += x / 67108864 | 0, k2 = x & 67108863;
        }
        a2.words[s] = k2 | 0, l2 = v3 | 0;
      }
      return l2 !== 0 ? a2.words[s] = l2 | 0 : a2.length--, a2._strip();
    }
    var J2 = function(f2, a2, c2) {
      var d3 = f2.words, g3 = a2.words, x = c2.words, M2 = 0, l2, s, v3, k2 = d3[0] | 0, u3 = k2 & 8191, E3 = k2 >>> 13, _2 = d3[1] | 0, B = _2 & 8191, R = _2 >>> 13, T2 = d3[2] | 0, P2 = T2 & 8191, O2 = T2 >>> 13, Ct2 = d3[3] | 0, D2 = Ct2 & 8191, q2 = Ct2 >>> 13, De2 = d3[4] | 0, X2 = De2 & 8191, Z2 = De2 >>> 13, Fe2 = d3[5] | 0, $2 = Fe2 & 8191, tt2 = Fe2 >>> 13, Te = d3[6] | 0, et2 = Te & 8191, rt2 = Te >>> 13, Ue2 = d3[7] | 0, it2 = Ue2 & 8191, nt2 = Ue2 >>> 13, ke2 = d3[8] | 0, ft2 = ke2 & 8191, ot2 = ke2 >>> 13, qe2 = d3[9] | 0, st2 = qe2 & 8191, at2 = qe2 >>> 13, Ke2 = g3[0] | 0, ut2 = Ke2 & 8191, ht2 = Ke2 >>> 13, He2 = g3[1] | 0, ct2 = He2 & 8191, lt2 = He2 >>> 13, ze2 = g3[2] | 0, dt2 = ze2 & 8191, pt2 = ze2 >>> 13, Le = g3[3] | 0, vt2 = Le & 8191, mt2 = Le >>> 13, je2 = g3[4] | 0, gt2 = je2 & 8191, At2 = je2 >>> 13, Qe2 = g3[5] | 0, bt2 = Qe2 & 8191, yt2 = Qe2 >>> 13, Je2 = g3[6] | 0, wt2 = Je2 & 8191, xt2 = Je2 >>> 13, Ge2 = g3[7] | 0, Mt2 = Ge2 & 8191, Et2 = Ge2 >>> 13, Ye2 = g3[8] | 0, St2 = Ye2 & 8191, Nt2 = Ye2 >>> 13, Ve2 = g3[9] | 0, It2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c2.negative = f2.negative ^ a2.negative, c2.length = 19, l2 = Math.imul(u3, ut2), s = Math.imul(u3, ht2), s = s + Math.imul(E3, ut2) | 0, v3 = Math.imul(E3, ht2);
      var Me2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Me2 >>> 26) | 0, Me2 &= 67108863, l2 = Math.imul(B, ut2), s = Math.imul(B, ht2), s = s + Math.imul(R, ut2) | 0, v3 = Math.imul(R, ht2), l2 = l2 + Math.imul(u3, ct2) | 0, s = s + Math.imul(u3, lt2) | 0, s = s + Math.imul(E3, ct2) | 0, v3 = v3 + Math.imul(E3, lt2) | 0;
      var Ee2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l2 = Math.imul(P2, ut2), s = Math.imul(P2, ht2), s = s + Math.imul(O2, ut2) | 0, v3 = Math.imul(O2, ht2), l2 = l2 + Math.imul(B, ct2) | 0, s = s + Math.imul(B, lt2) | 0, s = s + Math.imul(R, ct2) | 0, v3 = v3 + Math.imul(R, lt2) | 0, l2 = l2 + Math.imul(u3, dt2) | 0, s = s + Math.imul(u3, pt2) | 0, s = s + Math.imul(E3, dt2) | 0, v3 = v3 + Math.imul(E3, pt2) | 0;
      var Se2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Se2 >>> 26) | 0, Se2 &= 67108863, l2 = Math.imul(D2, ut2), s = Math.imul(D2, ht2), s = s + Math.imul(q2, ut2) | 0, v3 = Math.imul(q2, ht2), l2 = l2 + Math.imul(P2, ct2) | 0, s = s + Math.imul(P2, lt2) | 0, s = s + Math.imul(O2, ct2) | 0, v3 = v3 + Math.imul(O2, lt2) | 0, l2 = l2 + Math.imul(B, dt2) | 0, s = s + Math.imul(B, pt2) | 0, s = s + Math.imul(R, dt2) | 0, v3 = v3 + Math.imul(R, pt2) | 0, l2 = l2 + Math.imul(u3, vt2) | 0, s = s + Math.imul(u3, mt2) | 0, s = s + Math.imul(E3, vt2) | 0, v3 = v3 + Math.imul(E3, mt2) | 0;
      var Ne = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l2 = Math.imul(X2, ut2), s = Math.imul(X2, ht2), s = s + Math.imul(Z2, ut2) | 0, v3 = Math.imul(Z2, ht2), l2 = l2 + Math.imul(D2, ct2) | 0, s = s + Math.imul(D2, lt2) | 0, s = s + Math.imul(q2, ct2) | 0, v3 = v3 + Math.imul(q2, lt2) | 0, l2 = l2 + Math.imul(P2, dt2) | 0, s = s + Math.imul(P2, pt2) | 0, s = s + Math.imul(O2, dt2) | 0, v3 = v3 + Math.imul(O2, pt2) | 0, l2 = l2 + Math.imul(B, vt2) | 0, s = s + Math.imul(B, mt2) | 0, s = s + Math.imul(R, vt2) | 0, v3 = v3 + Math.imul(R, mt2) | 0, l2 = l2 + Math.imul(u3, gt2) | 0, s = s + Math.imul(u3, At2) | 0, s = s + Math.imul(E3, gt2) | 0, v3 = v3 + Math.imul(E3, At2) | 0;
      var Ie = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l2 = Math.imul($2, ut2), s = Math.imul($2, ht2), s = s + Math.imul(tt2, ut2) | 0, v3 = Math.imul(tt2, ht2), l2 = l2 + Math.imul(X2, ct2) | 0, s = s + Math.imul(X2, lt2) | 0, s = s + Math.imul(Z2, ct2) | 0, v3 = v3 + Math.imul(Z2, lt2) | 0, l2 = l2 + Math.imul(D2, dt2) | 0, s = s + Math.imul(D2, pt2) | 0, s = s + Math.imul(q2, dt2) | 0, v3 = v3 + Math.imul(q2, pt2) | 0, l2 = l2 + Math.imul(P2, vt2) | 0, s = s + Math.imul(P2, mt2) | 0, s = s + Math.imul(O2, vt2) | 0, v3 = v3 + Math.imul(O2, mt2) | 0, l2 = l2 + Math.imul(B, gt2) | 0, s = s + Math.imul(B, At2) | 0, s = s + Math.imul(R, gt2) | 0, v3 = v3 + Math.imul(R, At2) | 0, l2 = l2 + Math.imul(u3, bt2) | 0, s = s + Math.imul(u3, yt2) | 0, s = s + Math.imul(E3, bt2) | 0, v3 = v3 + Math.imul(E3, yt2) | 0;
      var Wr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l2 = Math.imul(et2, ut2), s = Math.imul(et2, ht2), s = s + Math.imul(rt2, ut2) | 0, v3 = Math.imul(rt2, ht2), l2 = l2 + Math.imul($2, ct2) | 0, s = s + Math.imul($2, lt2) | 0, s = s + Math.imul(tt2, ct2) | 0, v3 = v3 + Math.imul(tt2, lt2) | 0, l2 = l2 + Math.imul(X2, dt2) | 0, s = s + Math.imul(X2, pt2) | 0, s = s + Math.imul(Z2, dt2) | 0, v3 = v3 + Math.imul(Z2, pt2) | 0, l2 = l2 + Math.imul(D2, vt2) | 0, s = s + Math.imul(D2, mt2) | 0, s = s + Math.imul(q2, vt2) | 0, v3 = v3 + Math.imul(q2, mt2) | 0, l2 = l2 + Math.imul(P2, gt2) | 0, s = s + Math.imul(P2, At2) | 0, s = s + Math.imul(O2, gt2) | 0, v3 = v3 + Math.imul(O2, At2) | 0, l2 = l2 + Math.imul(B, bt2) | 0, s = s + Math.imul(B, yt2) | 0, s = s + Math.imul(R, bt2) | 0, v3 = v3 + Math.imul(R, yt2) | 0, l2 = l2 + Math.imul(u3, wt2) | 0, s = s + Math.imul(u3, xt2) | 0, s = s + Math.imul(E3, wt2) | 0, v3 = v3 + Math.imul(E3, xt2) | 0;
      var Xr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l2 = Math.imul(it2, ut2), s = Math.imul(it2, ht2), s = s + Math.imul(nt2, ut2) | 0, v3 = Math.imul(nt2, ht2), l2 = l2 + Math.imul(et2, ct2) | 0, s = s + Math.imul(et2, lt2) | 0, s = s + Math.imul(rt2, ct2) | 0, v3 = v3 + Math.imul(rt2, lt2) | 0, l2 = l2 + Math.imul($2, dt2) | 0, s = s + Math.imul($2, pt2) | 0, s = s + Math.imul(tt2, dt2) | 0, v3 = v3 + Math.imul(tt2, pt2) | 0, l2 = l2 + Math.imul(X2, vt2) | 0, s = s + Math.imul(X2, mt2) | 0, s = s + Math.imul(Z2, vt2) | 0, v3 = v3 + Math.imul(Z2, mt2) | 0, l2 = l2 + Math.imul(D2, gt2) | 0, s = s + Math.imul(D2, At2) | 0, s = s + Math.imul(q2, gt2) | 0, v3 = v3 + Math.imul(q2, At2) | 0, l2 = l2 + Math.imul(P2, bt2) | 0, s = s + Math.imul(P2, yt2) | 0, s = s + Math.imul(O2, bt2) | 0, v3 = v3 + Math.imul(O2, yt2) | 0, l2 = l2 + Math.imul(B, wt2) | 0, s = s + Math.imul(B, xt2) | 0, s = s + Math.imul(R, wt2) | 0, v3 = v3 + Math.imul(R, xt2) | 0, l2 = l2 + Math.imul(u3, Mt2) | 0, s = s + Math.imul(u3, Et2) | 0, s = s + Math.imul(E3, Mt2) | 0, v3 = v3 + Math.imul(E3, Et2) | 0;
      var Zr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l2 = Math.imul(ft2, ut2), s = Math.imul(ft2, ht2), s = s + Math.imul(ot2, ut2) | 0, v3 = Math.imul(ot2, ht2), l2 = l2 + Math.imul(it2, ct2) | 0, s = s + Math.imul(it2, lt2) | 0, s = s + Math.imul(nt2, ct2) | 0, v3 = v3 + Math.imul(nt2, lt2) | 0, l2 = l2 + Math.imul(et2, dt2) | 0, s = s + Math.imul(et2, pt2) | 0, s = s + Math.imul(rt2, dt2) | 0, v3 = v3 + Math.imul(rt2, pt2) | 0, l2 = l2 + Math.imul($2, vt2) | 0, s = s + Math.imul($2, mt2) | 0, s = s + Math.imul(tt2, vt2) | 0, v3 = v3 + Math.imul(tt2, mt2) | 0, l2 = l2 + Math.imul(X2, gt2) | 0, s = s + Math.imul(X2, At2) | 0, s = s + Math.imul(Z2, gt2) | 0, v3 = v3 + Math.imul(Z2, At2) | 0, l2 = l2 + Math.imul(D2, bt2) | 0, s = s + Math.imul(D2, yt2) | 0, s = s + Math.imul(q2, bt2) | 0, v3 = v3 + Math.imul(q2, yt2) | 0, l2 = l2 + Math.imul(P2, wt2) | 0, s = s + Math.imul(P2, xt2) | 0, s = s + Math.imul(O2, wt2) | 0, v3 = v3 + Math.imul(O2, xt2) | 0, l2 = l2 + Math.imul(B, Mt2) | 0, s = s + Math.imul(B, Et2) | 0, s = s + Math.imul(R, Mt2) | 0, v3 = v3 + Math.imul(R, Et2) | 0, l2 = l2 + Math.imul(u3, St2) | 0, s = s + Math.imul(u3, Nt2) | 0, s = s + Math.imul(E3, St2) | 0, v3 = v3 + Math.imul(E3, Nt2) | 0;
      var $r2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l2 = Math.imul(st2, ut2), s = Math.imul(st2, ht2), s = s + Math.imul(at2, ut2) | 0, v3 = Math.imul(at2, ht2), l2 = l2 + Math.imul(ft2, ct2) | 0, s = s + Math.imul(ft2, lt2) | 0, s = s + Math.imul(ot2, ct2) | 0, v3 = v3 + Math.imul(ot2, lt2) | 0, l2 = l2 + Math.imul(it2, dt2) | 0, s = s + Math.imul(it2, pt2) | 0, s = s + Math.imul(nt2, dt2) | 0, v3 = v3 + Math.imul(nt2, pt2) | 0, l2 = l2 + Math.imul(et2, vt2) | 0, s = s + Math.imul(et2, mt2) | 0, s = s + Math.imul(rt2, vt2) | 0, v3 = v3 + Math.imul(rt2, mt2) | 0, l2 = l2 + Math.imul($2, gt2) | 0, s = s + Math.imul($2, At2) | 0, s = s + Math.imul(tt2, gt2) | 0, v3 = v3 + Math.imul(tt2, At2) | 0, l2 = l2 + Math.imul(X2, bt2) | 0, s = s + Math.imul(X2, yt2) | 0, s = s + Math.imul(Z2, bt2) | 0, v3 = v3 + Math.imul(Z2, yt2) | 0, l2 = l2 + Math.imul(D2, wt2) | 0, s = s + Math.imul(D2, xt2) | 0, s = s + Math.imul(q2, wt2) | 0, v3 = v3 + Math.imul(q2, xt2) | 0, l2 = l2 + Math.imul(P2, Mt2) | 0, s = s + Math.imul(P2, Et2) | 0, s = s + Math.imul(O2, Mt2) | 0, v3 = v3 + Math.imul(O2, Et2) | 0, l2 = l2 + Math.imul(B, St2) | 0, s = s + Math.imul(B, Nt2) | 0, s = s + Math.imul(R, St2) | 0, v3 = v3 + Math.imul(R, Nt2) | 0, l2 = l2 + Math.imul(u3, It2) | 0, s = s + Math.imul(u3, _t2) | 0, s = s + Math.imul(E3, It2) | 0, v3 = v3 + Math.imul(E3, _t2) | 0;
      var ti = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l2 = Math.imul(st2, ct2), s = Math.imul(st2, lt2), s = s + Math.imul(at2, ct2) | 0, v3 = Math.imul(at2, lt2), l2 = l2 + Math.imul(ft2, dt2) | 0, s = s + Math.imul(ft2, pt2) | 0, s = s + Math.imul(ot2, dt2) | 0, v3 = v3 + Math.imul(ot2, pt2) | 0, l2 = l2 + Math.imul(it2, vt2) | 0, s = s + Math.imul(it2, mt2) | 0, s = s + Math.imul(nt2, vt2) | 0, v3 = v3 + Math.imul(nt2, mt2) | 0, l2 = l2 + Math.imul(et2, gt2) | 0, s = s + Math.imul(et2, At2) | 0, s = s + Math.imul(rt2, gt2) | 0, v3 = v3 + Math.imul(rt2, At2) | 0, l2 = l2 + Math.imul($2, bt2) | 0, s = s + Math.imul($2, yt2) | 0, s = s + Math.imul(tt2, bt2) | 0, v3 = v3 + Math.imul(tt2, yt2) | 0, l2 = l2 + Math.imul(X2, wt2) | 0, s = s + Math.imul(X2, xt2) | 0, s = s + Math.imul(Z2, wt2) | 0, v3 = v3 + Math.imul(Z2, xt2) | 0, l2 = l2 + Math.imul(D2, Mt2) | 0, s = s + Math.imul(D2, Et2) | 0, s = s + Math.imul(q2, Mt2) | 0, v3 = v3 + Math.imul(q2, Et2) | 0, l2 = l2 + Math.imul(P2, St2) | 0, s = s + Math.imul(P2, Nt2) | 0, s = s + Math.imul(O2, St2) | 0, v3 = v3 + Math.imul(O2, Nt2) | 0, l2 = l2 + Math.imul(B, It2) | 0, s = s + Math.imul(B, _t2) | 0, s = s + Math.imul(R, It2) | 0, v3 = v3 + Math.imul(R, _t2) | 0;
      var ei = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l2 = Math.imul(st2, dt2), s = Math.imul(st2, pt2), s = s + Math.imul(at2, dt2) | 0, v3 = Math.imul(at2, pt2), l2 = l2 + Math.imul(ft2, vt2) | 0, s = s + Math.imul(ft2, mt2) | 0, s = s + Math.imul(ot2, vt2) | 0, v3 = v3 + Math.imul(ot2, mt2) | 0, l2 = l2 + Math.imul(it2, gt2) | 0, s = s + Math.imul(it2, At2) | 0, s = s + Math.imul(nt2, gt2) | 0, v3 = v3 + Math.imul(nt2, At2) | 0, l2 = l2 + Math.imul(et2, bt2) | 0, s = s + Math.imul(et2, yt2) | 0, s = s + Math.imul(rt2, bt2) | 0, v3 = v3 + Math.imul(rt2, yt2) | 0, l2 = l2 + Math.imul($2, wt2) | 0, s = s + Math.imul($2, xt2) | 0, s = s + Math.imul(tt2, wt2) | 0, v3 = v3 + Math.imul(tt2, xt2) | 0, l2 = l2 + Math.imul(X2, Mt2) | 0, s = s + Math.imul(X2, Et2) | 0, s = s + Math.imul(Z2, Mt2) | 0, v3 = v3 + Math.imul(Z2, Et2) | 0, l2 = l2 + Math.imul(D2, St2) | 0, s = s + Math.imul(D2, Nt2) | 0, s = s + Math.imul(q2, St2) | 0, v3 = v3 + Math.imul(q2, Nt2) | 0, l2 = l2 + Math.imul(P2, It2) | 0, s = s + Math.imul(P2, _t2) | 0, s = s + Math.imul(O2, It2) | 0, v3 = v3 + Math.imul(O2, _t2) | 0;
      var ri = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l2 = Math.imul(st2, vt2), s = Math.imul(st2, mt2), s = s + Math.imul(at2, vt2) | 0, v3 = Math.imul(at2, mt2), l2 = l2 + Math.imul(ft2, gt2) | 0, s = s + Math.imul(ft2, At2) | 0, s = s + Math.imul(ot2, gt2) | 0, v3 = v3 + Math.imul(ot2, At2) | 0, l2 = l2 + Math.imul(it2, bt2) | 0, s = s + Math.imul(it2, yt2) | 0, s = s + Math.imul(nt2, bt2) | 0, v3 = v3 + Math.imul(nt2, yt2) | 0, l2 = l2 + Math.imul(et2, wt2) | 0, s = s + Math.imul(et2, xt2) | 0, s = s + Math.imul(rt2, wt2) | 0, v3 = v3 + Math.imul(rt2, xt2) | 0, l2 = l2 + Math.imul($2, Mt2) | 0, s = s + Math.imul($2, Et2) | 0, s = s + Math.imul(tt2, Mt2) | 0, v3 = v3 + Math.imul(tt2, Et2) | 0, l2 = l2 + Math.imul(X2, St2) | 0, s = s + Math.imul(X2, Nt2) | 0, s = s + Math.imul(Z2, St2) | 0, v3 = v3 + Math.imul(Z2, Nt2) | 0, l2 = l2 + Math.imul(D2, It2) | 0, s = s + Math.imul(D2, _t2) | 0, s = s + Math.imul(q2, It2) | 0, v3 = v3 + Math.imul(q2, _t2) | 0;
      var ii = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l2 = Math.imul(st2, gt2), s = Math.imul(st2, At2), s = s + Math.imul(at2, gt2) | 0, v3 = Math.imul(at2, At2), l2 = l2 + Math.imul(ft2, bt2) | 0, s = s + Math.imul(ft2, yt2) | 0, s = s + Math.imul(ot2, bt2) | 0, v3 = v3 + Math.imul(ot2, yt2) | 0, l2 = l2 + Math.imul(it2, wt2) | 0, s = s + Math.imul(it2, xt2) | 0, s = s + Math.imul(nt2, wt2) | 0, v3 = v3 + Math.imul(nt2, xt2) | 0, l2 = l2 + Math.imul(et2, Mt2) | 0, s = s + Math.imul(et2, Et2) | 0, s = s + Math.imul(rt2, Mt2) | 0, v3 = v3 + Math.imul(rt2, Et2) | 0, l2 = l2 + Math.imul($2, St2) | 0, s = s + Math.imul($2, Nt2) | 0, s = s + Math.imul(tt2, St2) | 0, v3 = v3 + Math.imul(tt2, Nt2) | 0, l2 = l2 + Math.imul(X2, It2) | 0, s = s + Math.imul(X2, _t2) | 0, s = s + Math.imul(Z2, It2) | 0, v3 = v3 + Math.imul(Z2, _t2) | 0;
      var ni = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l2 = Math.imul(st2, bt2), s = Math.imul(st2, yt2), s = s + Math.imul(at2, bt2) | 0, v3 = Math.imul(at2, yt2), l2 = l2 + Math.imul(ft2, wt2) | 0, s = s + Math.imul(ft2, xt2) | 0, s = s + Math.imul(ot2, wt2) | 0, v3 = v3 + Math.imul(ot2, xt2) | 0, l2 = l2 + Math.imul(it2, Mt2) | 0, s = s + Math.imul(it2, Et2) | 0, s = s + Math.imul(nt2, Mt2) | 0, v3 = v3 + Math.imul(nt2, Et2) | 0, l2 = l2 + Math.imul(et2, St2) | 0, s = s + Math.imul(et2, Nt2) | 0, s = s + Math.imul(rt2, St2) | 0, v3 = v3 + Math.imul(rt2, Nt2) | 0, l2 = l2 + Math.imul($2, It2) | 0, s = s + Math.imul($2, _t2) | 0, s = s + Math.imul(tt2, It2) | 0, v3 = v3 + Math.imul(tt2, _t2) | 0;
      var fi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l2 = Math.imul(st2, wt2), s = Math.imul(st2, xt2), s = s + Math.imul(at2, wt2) | 0, v3 = Math.imul(at2, xt2), l2 = l2 + Math.imul(ft2, Mt2) | 0, s = s + Math.imul(ft2, Et2) | 0, s = s + Math.imul(ot2, Mt2) | 0, v3 = v3 + Math.imul(ot2, Et2) | 0, l2 = l2 + Math.imul(it2, St2) | 0, s = s + Math.imul(it2, Nt2) | 0, s = s + Math.imul(nt2, St2) | 0, v3 = v3 + Math.imul(nt2, Nt2) | 0, l2 = l2 + Math.imul(et2, It2) | 0, s = s + Math.imul(et2, _t2) | 0, s = s + Math.imul(rt2, It2) | 0, v3 = v3 + Math.imul(rt2, _t2) | 0;
      var oi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l2 = Math.imul(st2, Mt2), s = Math.imul(st2, Et2), s = s + Math.imul(at2, Mt2) | 0, v3 = Math.imul(at2, Et2), l2 = l2 + Math.imul(ft2, St2) | 0, s = s + Math.imul(ft2, Nt2) | 0, s = s + Math.imul(ot2, St2) | 0, v3 = v3 + Math.imul(ot2, Nt2) | 0, l2 = l2 + Math.imul(it2, It2) | 0, s = s + Math.imul(it2, _t2) | 0, s = s + Math.imul(nt2, It2) | 0, v3 = v3 + Math.imul(nt2, _t2) | 0;
      var si = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l2 = Math.imul(st2, St2), s = Math.imul(st2, Nt2), s = s + Math.imul(at2, St2) | 0, v3 = Math.imul(at2, Nt2), l2 = l2 + Math.imul(ft2, It2) | 0, s = s + Math.imul(ft2, _t2) | 0, s = s + Math.imul(ot2, It2) | 0, v3 = v3 + Math.imul(ot2, _t2) | 0;
      var ai = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l2 = Math.imul(st2, It2), s = Math.imul(st2, _t2), s = s + Math.imul(at2, It2) | 0, v3 = Math.imul(at2, _t2);
      var ui = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      return M2 = (v3 + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me2, x[1] = Ee2, x[2] = Se2, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r2, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M2 !== 0 && (x[19] = M2, c2.length++), c2;
    };
    Math.imul || (J2 = U2);
    function Bt2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative, a2.length = A2.length + f2.length;
      for (var c2 = 0, d3 = 0, g3 = 0; g3 < a2.length - 1; g3++) {
        var x = d3;
        d3 = 0;
        for (var M2 = c2 & 67108863, l2 = Math.min(g3, f2.length - 1), s = Math.max(0, g3 - A2.length + 1); s <= l2; s++) {
          var v3 = g3 - s, k2 = A2.words[v3] | 0, u3 = f2.words[s] | 0, E3 = k2 * u3, _2 = E3 & 67108863;
          x = x + (E3 / 67108864 | 0) | 0, _2 = _2 + M2 | 0, M2 = _2 & 67108863, x = x + (_2 >>> 26) | 0, d3 += x >>> 26, x &= 67108863;
        }
        a2.words[g3] = M2, c2 = x, x = d3;
      }
      return c2 !== 0 ? a2.words[g3] = c2 : a2.length--, a2._strip();
    }
    function G(A2, f2, a2) {
      return Bt2(A2, f2, a2);
    }
    o2.prototype.mulTo = function(f2, a2) {
      var c2, d3 = this.length + f2.length;
      return this.length === 10 && f2.length === 10 ? c2 = J2(this, f2, a2) : d3 < 63 ? c2 = U2(this, f2, a2) : d3 < 1024 ? c2 = Bt2(this, f2, a2) : c2 = G(this, f2, a2), c2;
    }, o2.prototype.mul = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), this.mulTo(f2, a2);
    }, o2.prototype.mulf = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), G(this, f2, a2);
    }, o2.prototype.imul = function(f2) {
      return this.clone().mulTo(f2, this);
    }, o2.prototype.imuln = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(typeof f2 == "number"), i(f2 < 67108864);
      for (var c2 = 0, d3 = 0; d3 < this.length; d3++) {
        var g3 = (this.words[d3] | 0) * f2, x = (g3 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += g3 / 67108864 | 0, c2 += x >>> 26, this.words[d3] = x & 67108863;
      }
      return c2 !== 0 && (this.words[d3] = c2, this.length++), a2 ? this.ineg() : this;
    }, o2.prototype.muln = function(f2) {
      return this.clone().imuln(f2);
    }, o2.prototype.sqr = function() {
      return this.mul(this);
    }, o2.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o2.prototype.pow = function(f2) {
      var a2 = F2(f2);
      if (a2.length === 0) return new o2(1);
      for (var c2 = this, d3 = 0; d3 < a2.length && a2[d3] === 0; d3++, c2 = c2.sqr()) ;
      if (++d3 < a2.length) for (var g3 = c2.sqr(); d3 < a2.length; d3++, g3 = g3.sqr()) a2[d3] !== 0 && (c2 = c2.mul(g3));
      return c2;
    }, o2.prototype.iushln = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 67108863 >>> 26 - a2 << 26 - a2, g3;
      if (a2 !== 0) {
        var x = 0;
        for (g3 = 0; g3 < this.length; g3++) {
          var M2 = this.words[g3] & d3, l2 = (this.words[g3] | 0) - M2 << a2;
          this.words[g3] = l2 | x, x = M2 >>> 26 - a2;
        }
        x && (this.words[g3] = x, this.length++);
      }
      if (c2 !== 0) {
        for (g3 = this.length - 1; g3 >= 0; g3--) this.words[g3 + c2] = this.words[g3];
        for (g3 = 0; g3 < c2; g3++) this.words[g3] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o2.prototype.ishln = function(f2) {
      return i(this.negative === 0), this.iushln(f2);
    }, o2.prototype.iushrn = function(f2, a2, c2) {
      i(typeof f2 == "number" && f2 >= 0);
      var d3;
      a2 ? d3 = (a2 - a2 % 26) / 26 : d3 = 0;
      var g3 = f2 % 26, x = Math.min((f2 - g3) / 26, this.length), M2 = 67108863 ^ 67108863 >>> g3 << g3, l2 = c2;
      if (d3 -= x, d3 = Math.max(0, d3), l2) {
        for (var s = 0; s < x; s++) l2.words[s] = this.words[s];
        l2.length = x;
      }
      if (x !== 0) if (this.length > x) for (this.length -= x, s = 0; s < this.length; s++) this.words[s] = this.words[s + x];
      else this.words[0] = 0, this.length = 1;
      var v3 = 0;
      for (s = this.length - 1; s >= 0 && (v3 !== 0 || s >= d3); s--) {
        var k2 = this.words[s] | 0;
        this.words[s] = v3 << 26 - g3 | k2 >>> g3, v3 = k2 & M2;
      }
      return l2 && v3 !== 0 && (l2.words[l2.length++] = v3), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o2.prototype.ishrn = function(f2, a2, c2) {
      return i(this.negative === 0), this.iushrn(f2, a2, c2);
    }, o2.prototype.shln = function(f2) {
      return this.clone().ishln(f2);
    }, o2.prototype.ushln = function(f2) {
      return this.clone().iushln(f2);
    }, o2.prototype.shrn = function(f2) {
      return this.clone().ishrn(f2);
    }, o2.prototype.ushrn = function(f2) {
      return this.clone().iushrn(f2);
    }, o2.prototype.testn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return false;
      var g3 = this.words[c2];
      return !!(g3 & d3);
    }, o2.prototype.imaskn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2) return this;
      if (a2 !== 0 && c2++, this.length = Math.min(c2, this.length), a2 !== 0) {
        var d3 = 67108863 ^ 67108863 >>> a2 << a2;
        this.words[this.length - 1] &= d3;
      }
      return this._strip();
    }, o2.prototype.maskn = function(f2) {
      return this.clone().imaskn(f2);
    }, o2.prototype.iaddn = function(f2) {
      return i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0 ? this.isubn(-f2) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f2 ? (this.words[0] = f2 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f2), this.negative = 1, this) : this._iaddn(f2);
    }, o2.prototype._iaddn = function(f2) {
      this.words[0] += f2;
      for (var a2 = 0; a2 < this.length && this.words[a2] >= 67108864; a2++) this.words[a2] -= 67108864, a2 === this.length - 1 ? this.words[a2 + 1] = 1 : this.words[a2 + 1]++;
      return this.length = Math.max(this.length, a2 + 1), this;
    }, o2.prototype.isubn = function(f2) {
      if (i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0) return this.iaddn(-f2);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f2), this.negative = 1, this;
      if (this.words[0] -= f2, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a2 = 0; a2 < this.length && this.words[a2] < 0; a2++) this.words[a2] += 67108864, this.words[a2 + 1] -= 1;
      return this._strip();
    }, o2.prototype.addn = function(f2) {
      return this.clone().iaddn(f2);
    }, o2.prototype.subn = function(f2) {
      return this.clone().isubn(f2);
    }, o2.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o2.prototype.abs = function() {
      return this.clone().iabs();
    }, o2.prototype._ishlnsubmul = function(f2, a2, c2) {
      var d3 = f2.length + c2, g3;
      this._expand(d3);
      var x, M2 = 0;
      for (g3 = 0; g3 < f2.length; g3++) {
        x = (this.words[g3 + c2] | 0) + M2;
        var l2 = (f2.words[g3] | 0) * a2;
        x -= l2 & 67108863, M2 = (x >> 26) - (l2 / 67108864 | 0), this.words[g3 + c2] = x & 67108863;
      }
      for (; g3 < this.length - c2; g3++) x = (this.words[g3 + c2] | 0) + M2, M2 = x >> 26, this.words[g3 + c2] = x & 67108863;
      if (M2 === 0) return this._strip();
      for (i(M2 === -1), M2 = 0, g3 = 0; g3 < this.length; g3++) x = -(this.words[g3] | 0) + M2, M2 = x >> 26, this.words[g3] = x & 67108863;
      return this.negative = 1, this._strip();
    }, o2.prototype._wordDiv = function(f2, a2) {
      var c2 = this.length - f2.length, d3 = this.clone(), g3 = f2, x = g3.words[g3.length - 1] | 0, M2 = this._countBits(x);
      c2 = 26 - M2, c2 !== 0 && (g3 = g3.ushln(c2), d3.iushln(c2), x = g3.words[g3.length - 1] | 0);
      var l2 = d3.length - g3.length, s;
      if (a2 !== "mod") {
        s = new o2(null), s.length = l2 + 1, s.words = new Array(s.length);
        for (var v3 = 0; v3 < s.length; v3++) s.words[v3] = 0;
      }
      var k2 = d3.clone()._ishlnsubmul(g3, 1, l2);
      k2.negative === 0 && (d3 = k2, s && (s.words[l2] = 1));
      for (var u3 = l2 - 1; u3 >= 0; u3--) {
        var E3 = (d3.words[g3.length + u3] | 0) * 67108864 + (d3.words[g3.length + u3 - 1] | 0);
        for (E3 = Math.min(E3 / x | 0, 67108863), d3._ishlnsubmul(g3, E3, u3); d3.negative !== 0; ) E3--, d3.negative = 0, d3._ishlnsubmul(g3, 1, u3), d3.isZero() || (d3.negative ^= 1);
        s && (s.words[u3] = E3);
      }
      return s && s._strip(), d3._strip(), a2 !== "div" && c2 !== 0 && d3.iushrn(c2), { div: s || null, mod: d3 };
    }, o2.prototype.divmod = function(f2, a2, c2) {
      if (i(!f2.isZero()), this.isZero()) return { div: new o2(0), mod: new o2(0) };
      var d3, g3, x;
      return this.negative !== 0 && f2.negative === 0 ? (x = this.neg().divmod(f2, a2), a2 !== "mod" && (d3 = x.div.neg()), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.iadd(f2)), { div: d3, mod: g3 }) : this.negative === 0 && f2.negative !== 0 ? (x = this.divmod(f2.neg(), a2), a2 !== "mod" && (d3 = x.div.neg()), { div: d3, mod: x.mod }) : this.negative & f2.negative ? (x = this.neg().divmod(f2.neg(), a2), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.isub(f2)), { div: x.div, mod: g3 }) : f2.length > this.length || this.cmp(f2) < 0 ? { div: new o2(0), mod: this } : f2.length === 1 ? a2 === "div" ? { div: this.divn(f2.words[0]), mod: null } : a2 === "mod" ? { div: null, mod: new o2(this.modrn(f2.words[0])) } : { div: this.divn(f2.words[0]), mod: new o2(this.modrn(f2.words[0])) } : this._wordDiv(f2, a2);
    }, o2.prototype.div = function(f2) {
      return this.divmod(f2, "div", false).div;
    }, o2.prototype.mod = function(f2) {
      return this.divmod(f2, "mod", false).mod;
    }, o2.prototype.umod = function(f2) {
      return this.divmod(f2, "mod", true).mod;
    }, o2.prototype.divRound = function(f2) {
      var a2 = this.divmod(f2);
      if (a2.mod.isZero()) return a2.div;
      var c2 = a2.div.negative !== 0 ? a2.mod.isub(f2) : a2.mod, d3 = f2.ushrn(1), g3 = f2.andln(1), x = c2.cmp(d3);
      return x < 0 || g3 === 1 && x === 0 ? a2.div : a2.div.negative !== 0 ? a2.div.isubn(1) : a2.div.iaddn(1);
    }, o2.prototype.modrn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = (1 << 26) % f2, d3 = 0, g3 = this.length - 1; g3 >= 0; g3--) d3 = (c2 * d3 + (this.words[g3] | 0)) % f2;
      return a2 ? -d3 : d3;
    }, o2.prototype.modn = function(f2) {
      return this.modrn(f2);
    }, o2.prototype.idivn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = 0, d3 = this.length - 1; d3 >= 0; d3--) {
        var g3 = (this.words[d3] | 0) + c2 * 67108864;
        this.words[d3] = g3 / f2 | 0, c2 = g3 % f2;
      }
      return this._strip(), a2 ? this.ineg() : this;
    }, o2.prototype.divn = function(f2) {
      return this.clone().idivn(f2);
    }, o2.prototype.egcd = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = new o2(0), M2 = new o2(1), l2 = 0; a2.isEven() && c2.isEven(); ) a2.iushrn(1), c2.iushrn(1), ++l2;
      for (var s = c2.clone(), v3 = a2.clone(); !a2.isZero(); ) {
        for (var k2 = 0, u3 = 1; !(a2.words[0] & u3) && k2 < 26; ++k2, u3 <<= 1) ;
        if (k2 > 0) for (a2.iushrn(k2); k2-- > 0; ) (d3.isOdd() || g3.isOdd()) && (d3.iadd(s), g3.isub(v3)), d3.iushrn(1), g3.iushrn(1);
        for (var E3 = 0, _2 = 1; !(c2.words[0] & _2) && E3 < 26; ++E3, _2 <<= 1) ;
        if (E3 > 0) for (c2.iushrn(E3); E3-- > 0; ) (x.isOdd() || M2.isOdd()) && (x.iadd(s), M2.isub(v3)), x.iushrn(1), M2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(x), g3.isub(M2)) : (c2.isub(a2), x.isub(d3), M2.isub(g3));
      }
      return { a: x, b: M2, gcd: c2.iushln(l2) };
    }, o2.prototype._invmp = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = c2.clone(); a2.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M2 = 0, l2 = 1; !(a2.words[0] & l2) && M2 < 26; ++M2, l2 <<= 1) ;
        if (M2 > 0) for (a2.iushrn(M2); M2-- > 0; ) d3.isOdd() && d3.iadd(x), d3.iushrn(1);
        for (var s = 0, v3 = 1; !(c2.words[0] & v3) && s < 26; ++s, v3 <<= 1) ;
        if (s > 0) for (c2.iushrn(s); s-- > 0; ) g3.isOdd() && g3.iadd(x), g3.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(g3)) : (c2.isub(a2), g3.isub(d3));
      }
      var k2;
      return a2.cmpn(1) === 0 ? k2 = d3 : k2 = g3, k2.cmpn(0) < 0 && k2.iadd(f2), k2;
    }, o2.prototype.gcd = function(f2) {
      if (this.isZero()) return f2.abs();
      if (f2.isZero()) return this.abs();
      var a2 = this.clone(), c2 = f2.clone();
      a2.negative = 0, c2.negative = 0;
      for (var d3 = 0; a2.isEven() && c2.isEven(); d3++) a2.iushrn(1), c2.iushrn(1);
      do {
        for (; a2.isEven(); ) a2.iushrn(1);
        for (; c2.isEven(); ) c2.iushrn(1);
        var g3 = a2.cmp(c2);
        if (g3 < 0) {
          var x = a2;
          a2 = c2, c2 = x;
        } else if (g3 === 0 || c2.cmpn(1) === 0) break;
        a2.isub(c2);
      } while (true);
      return c2.iushln(d3);
    }, o2.prototype.invm = function(f2) {
      return this.egcd(f2).a.umod(f2);
    }, o2.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o2.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o2.prototype.andln = function(f2) {
      return this.words[0] & f2;
    }, o2.prototype.bincn = function(f2) {
      i(typeof f2 == "number");
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return this._expand(c2 + 1), this.words[c2] |= d3, this;
      for (var g3 = d3, x = c2; g3 !== 0 && x < this.length; x++) {
        var M2 = this.words[x] | 0;
        M2 += g3, g3 = M2 >>> 26, M2 &= 67108863, this.words[x] = M2;
      }
      return g3 !== 0 && (this.words[x] = g3, this.length++), this;
    }, o2.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o2.prototype.cmpn = function(f2) {
      var a2 = f2 < 0;
      if (this.negative !== 0 && !a2) return -1;
      if (this.negative === 0 && a2) return 1;
      this._strip();
      var c2;
      if (this.length > 1) c2 = 1;
      else {
        a2 && (f2 = -f2), i(f2 <= 67108863, "Number is too big");
        var d3 = this.words[0] | 0;
        c2 = d3 === f2 ? 0 : d3 < f2 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o2.prototype.cmp = function(f2) {
      if (this.negative !== 0 && f2.negative === 0) return -1;
      if (this.negative === 0 && f2.negative !== 0) return 1;
      var a2 = this.ucmp(f2);
      return this.negative !== 0 ? -a2 | 0 : a2;
    }, o2.prototype.ucmp = function(f2) {
      if (this.length > f2.length) return 1;
      if (this.length < f2.length) return -1;
      for (var a2 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d3 = this.words[c2] | 0, g3 = f2.words[c2] | 0;
        if (d3 !== g3) {
          d3 < g3 ? a2 = -1 : d3 > g3 && (a2 = 1);
          break;
        }
      }
      return a2;
    }, o2.prototype.gtn = function(f2) {
      return this.cmpn(f2) === 1;
    }, o2.prototype.gt = function(f2) {
      return this.cmp(f2) === 1;
    }, o2.prototype.gten = function(f2) {
      return this.cmpn(f2) >= 0;
    }, o2.prototype.gte = function(f2) {
      return this.cmp(f2) >= 0;
    }, o2.prototype.ltn = function(f2) {
      return this.cmpn(f2) === -1;
    }, o2.prototype.lt = function(f2) {
      return this.cmp(f2) === -1;
    }, o2.prototype.lten = function(f2) {
      return this.cmpn(f2) <= 0;
    }, o2.prototype.lte = function(f2) {
      return this.cmp(f2) <= 0;
    }, o2.prototype.eqn = function(f2) {
      return this.cmpn(f2) === 0;
    }, o2.prototype.eq = function(f2) {
      return this.cmp(f2) === 0;
    }, o2.red = function(f2) {
      return new Y(f2);
    }, o2.prototype.toRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), f2.convertTo(this)._forceRed(f2);
    }, o2.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o2.prototype._forceRed = function(f2) {
      return this.red = f2, this;
    }, o2.prototype.forceRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(f2);
    }, o2.prototype.redAdd = function(f2) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, f2);
    }, o2.prototype.redIAdd = function(f2) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f2);
    }, o2.prototype.redSub = function(f2) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, f2);
    }, o2.prototype.redISub = function(f2) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, f2);
    }, o2.prototype.redShl = function(f2) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, f2);
    }, o2.prototype.redMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.mul(this, f2);
    }, o2.prototype.redIMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.imul(this, f2);
    }, o2.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o2.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o2.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o2.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o2.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o2.prototype.redPow = function(f2) {
      return i(this.red && !f2.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f2);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z2(A2, f2) {
      this.name = A2, this.p = new o2(f2, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z2.prototype._tmp = function() {
      var f2 = new o2(null);
      return f2.words = new Array(Math.ceil(this.n / 13)), f2;
    }, z2.prototype.ireduce = function(f2) {
      var a2 = f2, c2;
      do
        this.split(a2, this.tmp), a2 = this.imulK(a2), a2 = a2.iadd(this.tmp), c2 = a2.bitLength();
      while (c2 > this.n);
      var d3 = c2 < this.n ? -1 : a2.ucmp(this.p);
      return d3 === 0 ? (a2.words[0] = 0, a2.length = 1) : d3 > 0 ? a2.isub(this.p) : a2.strip !== void 0 ? a2.strip() : a2._strip(), a2;
    }, z2.prototype.split = function(f2, a2) {
      f2.iushrn(this.n, 0, a2);
    }, z2.prototype.imulK = function(f2) {
      return f2.imul(this.k);
    };
    function Pt2() {
      z2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n2(Pt2, z2), Pt2.prototype.split = function(f2, a2) {
      for (var c2 = 4194303, d3 = Math.min(f2.length, 9), g3 = 0; g3 < d3; g3++) a2.words[g3] = f2.words[g3];
      if (a2.length = d3, f2.length <= 9) {
        f2.words[0] = 0, f2.length = 1;
        return;
      }
      var x = f2.words[9];
      for (a2.words[a2.length++] = x & c2, g3 = 10; g3 < f2.length; g3++) {
        var M2 = f2.words[g3] | 0;
        f2.words[g3 - 10] = (M2 & c2) << 4 | x >>> 22, x = M2;
      }
      x >>>= 22, f2.words[g3 - 10] = x, x === 0 && f2.length > 10 ? f2.length -= 10 : f2.length -= 9;
    }, Pt2.prototype.imulK = function(f2) {
      f2.words[f2.length] = 0, f2.words[f2.length + 1] = 0, f2.length += 2;
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = f2.words[c2] | 0;
        a2 += d3 * 977, f2.words[c2] = a2 & 67108863, a2 = d3 * 64 + (a2 / 67108864 | 0);
      }
      return f2.words[f2.length - 1] === 0 && (f2.length--, f2.words[f2.length - 1] === 0 && f2.length--), f2;
    };
    function W() {
      z2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n2(W, z2);
    function Rt2() {
      z2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n2(Rt2, z2);
    function Yt3() {
      z2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n2(Yt3, z2), Yt3.prototype.imulK = function(f2) {
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = (f2.words[c2] | 0) * 19 + a2, g3 = d3 & 67108863;
        d3 >>>= 26, f2.words[c2] = g3, a2 = d3;
      }
      return a2 !== 0 && (f2.words[f2.length++] = a2), f2;
    }, o2._prime = function(f2) {
      if (H[f2]) return H[f2];
      var a2;
      if (f2 === "k256") a2 = new Pt2();
      else if (f2 === "p224") a2 = new W();
      else if (f2 === "p192") a2 = new Rt2();
      else if (f2 === "p25519") a2 = new Yt3();
      else throw new Error("Unknown prime " + f2);
      return H[f2] = a2, a2;
    };
    function Y(A2) {
      if (typeof A2 == "string") {
        var f2 = o2._prime(A2);
        this.m = f2.p, this.prime = f2;
      } else i(A2.gtn(1), "modulus must be greater than 1"), this.m = A2, this.prime = null;
    }
    Y.prototype._verify1 = function(f2) {
      i(f2.negative === 0, "red works only with positives"), i(f2.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f2, a2) {
      i((f2.negative | a2.negative) === 0, "red works only with positives"), i(f2.red && f2.red === a2.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f2) {
      return this.prime ? this.prime.ireduce(f2)._forceRed(this) : (w3(f2, f2.umod(this.m)._forceRed(this)), f2);
    }, Y.prototype.neg = function(f2) {
      return f2.isZero() ? f2.clone() : this.m.sub(f2)._forceRed(this);
    }, Y.prototype.add = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.add(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y.prototype.iadd = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.iadd(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y.prototype.sub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.sub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y.prototype.isub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.isub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y.prototype.shl = function(f2, a2) {
      return this._verify1(f2), this.imod(f2.ushln(a2));
    }, Y.prototype.imul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.imul(a2));
    }, Y.prototype.mul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.mul(a2));
    }, Y.prototype.isqr = function(f2) {
      return this.imul(f2, f2.clone());
    }, Y.prototype.sqr = function(f2) {
      return this.mul(f2, f2);
    }, Y.prototype.sqrt = function(f2) {
      if (f2.isZero()) return f2.clone();
      var a2 = this.m.andln(3);
      if (i(a2 % 2 === 1), a2 === 3) {
        var c2 = this.m.add(new o2(1)).iushrn(2);
        return this.pow(f2, c2);
      }
      for (var d3 = this.m.subn(1), g3 = 0; !d3.isZero() && d3.andln(1) === 0; ) g3++, d3.iushrn(1);
      i(!d3.isZero());
      var x = new o2(1).toRed(this), M2 = x.redNeg(), l2 = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o2(2 * s * s).toRed(this); this.pow(s, l2).cmp(M2) !== 0; ) s.redIAdd(M2);
      for (var v3 = this.pow(s, d3), k2 = this.pow(f2, d3.addn(1).iushrn(1)), u3 = this.pow(f2, d3), E3 = g3; u3.cmp(x) !== 0; ) {
        for (var _2 = u3, B = 0; _2.cmp(x) !== 0; B++) _2 = _2.redSqr();
        i(B < E3);
        var R = this.pow(v3, new o2(1).iushln(E3 - B - 1));
        k2 = k2.redMul(R), v3 = R.redSqr(), u3 = u3.redMul(v3), E3 = B;
      }
      return k2;
    }, Y.prototype.invm = function(f2) {
      var a2 = f2._invmp(this.m);
      return a2.negative !== 0 ? (a2.negative = 0, this.imod(a2).redNeg()) : this.imod(a2);
    }, Y.prototype.pow = function(f2, a2) {
      if (a2.isZero()) return new o2(1).toRed(this);
      if (a2.cmpn(1) === 0) return f2.clone();
      var c2 = 4, d3 = new Array(1 << c2);
      d3[0] = new o2(1).toRed(this), d3[1] = f2;
      for (var g3 = 2; g3 < d3.length; g3++) d3[g3] = this.mul(d3[g3 - 1], f2);
      var x = d3[0], M2 = 0, l2 = 0, s = a2.bitLength() % 26;
      for (s === 0 && (s = 26), g3 = a2.length - 1; g3 >= 0; g3--) {
        for (var v3 = a2.words[g3], k2 = s - 1; k2 >= 0; k2--) {
          var u3 = v3 >> k2 & 1;
          if (x !== d3[0] && (x = this.sqr(x)), u3 === 0 && M2 === 0) {
            l2 = 0;
            continue;
          }
          M2 <<= 1, M2 |= u3, l2++, !(l2 !== c2 && (g3 !== 0 || k2 !== 0)) && (x = this.mul(x, d3[M2]), l2 = 0, M2 = 0);
        }
        s = 26;
      }
      return x;
    }, Y.prototype.convertTo = function(f2) {
      var a2 = f2.umod(this.m);
      return a2 === f2 ? a2.clone() : a2;
    }, Y.prototype.convertFrom = function(f2) {
      var a2 = f2.clone();
      return a2.red = null, a2;
    }, o2.mont = function(f2) {
      return new Vt2(f2);
    };
    function Vt2(A2) {
      Y.call(this, A2), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n2(Vt2, Y), Vt2.prototype.convertTo = function(f2) {
      return this.imod(f2.ushln(this.shift));
    }, Vt2.prototype.convertFrom = function(f2) {
      var a2 = this.imod(f2.mul(this.rinv));
      return a2.red = null, a2;
    }, Vt2.prototype.imul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return f2.words[0] = 0, f2.length = 1, f2;
      var c2 = f2.imul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.mul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return new o2(0)._forceRed(this);
      var c2 = f2.mul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.invm = function(f2) {
      var a2 = this.imod(f2._invmp(this.m).mul(this.r2));
      return a2._forceRed(this);
    };
  })(e, On$2);
})(Ln$2);
var K$3 = Ln$2.exports;
const jn$2 = "bignumber/5.7.0";
var Rr$3 = K$3.BN;
const Ae$2 = new L$5(jn$2), wi$2 = {}, Qn$2 = 9007199254740991;
function C0$2(e) {
  return e != null && (V$3.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt$2(e) || typeof e == "bigint" || ir$3(e));
}
let Jn$2 = false;
let V$3 = class V {
  constructor(t, r2) {
    t !== wi$2 && Ae$2.throwError("cannot call constructor directly; use BigNumber.from", L$5.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt$3(j$4(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt$3(j$4(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt$3(j$4(this).add(j$4(t)));
  }
  sub(t) {
    return Lt$3(j$4(this).sub(j$4(t)));
  }
  div(t) {
    return V.from(t).isZero() && Wt$4("division-by-zero", "div"), Lt$3(j$4(this).div(j$4(t)));
  }
  mul(t) {
    return Lt$3(j$4(this).mul(j$4(t)));
  }
  mod(t) {
    const r2 = j$4(t);
    return r2.isNeg() && Wt$4("division-by-zero", "mod"), Lt$3(j$4(this).umod(r2));
  }
  pow(t) {
    const r2 = j$4(t);
    return r2.isNeg() && Wt$4("negative-power", "pow"), Lt$3(j$4(this).pow(r2));
  }
  and(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$4("unbound-bitwise-result", "and"), Lt$3(j$4(this).and(r2));
  }
  or(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$4("unbound-bitwise-result", "or"), Lt$3(j$4(this).or(r2));
  }
  xor(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$4("unbound-bitwise-result", "xor"), Lt$3(j$4(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt$4("negative-width", "mask"), Lt$3(j$4(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt$4("negative-width", "shl"), Lt$3(j$4(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt$4("negative-width", "shr"), Lt$3(j$4(this).shrn(t));
  }
  eq(t) {
    return j$4(this).eq(j$4(t));
  }
  lt(t) {
    return j$4(this).lt(j$4(t));
  }
  lte(t) {
    return j$4(this).lte(j$4(t));
  }
  gt(t) {
    return j$4(this).gt(j$4(t));
  }
  gte(t) {
    return j$4(this).gte(j$4(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j$4(this).isZero();
  }
  toNumber() {
    try {
      return j$4(this).toNumber();
    } catch {
      Wt$4("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae$2.throwError("this platform does not support BigInt", L$5.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn$2 || (Jn$2 = true, Ae$2.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae$2.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L$5.errors.UNEXPECTED_ARGUMENT, {}) : Ae$2.throwError("BigNumber.toString does not accept parameters", L$5.errors.UNEXPECTED_ARGUMENT, {})), j$4(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof V) return t;
    if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V(wi$2, vr$2(t)) : t.match(/^-?[0-9]+$/) ? new V(wi$2, vr$2(new Rr$3(t))) : Ae$2.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number") return t % 1 && Wt$4("underflow", "BigNumber.from", t), (t >= Qn$2 || t <= -Qn$2) && Wt$4("overflow", "BigNumber.from", t), V.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint") return V.from(r2.toString());
    if (ir$3(r2)) return V.from(Kt$3(r2));
    if (r2) if (r2.toHexString) {
      const i = r2.toHexString();
      if (typeof i == "string") return V.from(i);
    } else {
      let i = r2._hex;
      if (i == null && r2.type === "BigNumber" && (i = r2.hex), typeof i == "string" && (Qt$2(i) || i[0] === "-" && Qt$2(i.substring(1)))) return V.from(i);
    }
    return Ae$2.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function vr$2(e) {
  if (typeof e != "string") return vr$2(e.toString(16));
  if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae$2.throwArgumentError("invalid hex", "value", e), e = vr$2(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; ) e = "0x" + e.substring(4);
  return e;
}
function Lt$3(e) {
  return V$3.from(vr$2(e));
}
function j$4(e) {
  const t = V$3.from(e).toHexString();
  return t[0] === "-" ? new Rr$3("-" + t.substring(3), 16) : new Rr$3(t.substring(2), 16);
}
function Wt$4(e, t, r2) {
  const i = { fault: e, operation: t };
  return r2 != null && (i.value = r2), Ae$2.throwError(e, L$5.errors.NUMERIC_FAULT, i);
}
const Ht$4 = new L$5(jn$2), mr$3 = {}, Gn$2 = V$3.from(0), Yn$2 = V$3.from(-1);
function Vn$3(e, t, r2, i) {
  const n2 = { fault: t, operation: r2 };
  return i !== void 0 && (n2.value = i), Ht$4.throwError(e, L$5.errors.NUMERIC_FAULT, n2);
}
let gr$3 = "0";
for (; gr$3.length < 256; ) gr$3 += gr$3;
function xi$2(e) {
  if (typeof e != "number") try {
    e = V$3.from(e).toNumber();
  } catch {
  }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr$3.substring(0, e) : Ht$4.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi$3(e, t) {
  t == null && (t = 0);
  const r2 = xi$2(t);
  e = V$3.from(e);
  const i = e.lt(Gn$2);
  i && (e = e.mul(Yn$2));
  let n2 = e.mod(r2).toString();
  for (; n2.length < r2.length - 1; ) n2 = "0" + n2;
  n2 = n2.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o2 = e.div(r2).toString();
  return r2.length === 1 ? e = o2 : e = o2 + "." + n2, i && (e = "-" + e), e;
}
function be$3(e, t) {
  t == null && (t = 0);
  const r2 = xi$2(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht$4.throwArgumentError("invalid decimal value", "value", e);
  const i = e.substring(0, 1) === "-";
  i && (e = e.substring(1)), e === "." && Ht$4.throwArgumentError("missing value", "value", e);
  const n2 = e.split(".");
  n2.length > 2 && Ht$4.throwArgumentError("too many decimal points", "value", e);
  let o2 = n2[0], h2 = n2[1];
  for (o2 || (o2 = "0"), h2 || (h2 = "0"); h2[h2.length - 1] === "0"; ) h2 = h2.substring(0, h2.length - 1);
  for (h2.length > r2.length - 1 && Vn$3("fractional component exceeds decimals", "underflow", "parseFixed"), h2 === "" && (h2 = "0"); h2.length < r2.length - 1; ) h2 += "0";
  const p3 = V$3.from(o2), b3 = V$3.from(h2);
  let m2 = p3.mul(r2).add(b3);
  return i && (m2 = m2.mul(Yn$2)), m2;
}
let dr$3 = class dr {
  constructor(t, r2, i, n2) {
    t !== mr$3 && Ht$4.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L$5.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i, this.decimals = n2, this.name = (r2 ? "" : "u") + "fixed" + String(i) + "x" + String(n2), this._multiplier = xi$2(n2), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof dr) return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i = 128, n2 = 18;
    if (typeof t == "string") {
      if (t !== "fixed") if (t === "ufixed") r2 = false;
      else {
        const o2 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o2 || Ht$4.throwArgumentError("invalid fixed format", "format", t), r2 = o2[1] !== "u", i = parseInt(o2[2]), n2 = parseInt(o2[3]);
      }
    } else if (t) {
      const o2 = (h2, p3, b3) => t[h2] == null ? b3 : (typeof t[h2] !== p3 && Ht$4.throwArgumentError("invalid fixed format (" + h2 + " not " + p3 + ")", "format." + h2, t[h2]), t[h2]);
      r2 = o2("signed", "boolean", r2), i = o2("width", "number", i), n2 = o2("decimals", "number", n2);
    }
    return i % 8 && Ht$4.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n2 > 80 && Ht$4.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n2), new dr(mr$3, r2, i, n2);
  }
};
let Ut$3 = class Ut {
  constructor(t, r2, i, n2) {
    t !== mr$3 && Ht$4.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L$5.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n2, this._hex = r2, this._value = i, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht$4.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$3(this._value, this.format.decimals), i = be$3(t._value, t.format.decimals);
    return Ut.fromValue(r2.add(i), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$3(this._value, this.format.decimals), i = be$3(t._value, t.format.decimals);
    return Ut.fromValue(r2.sub(i), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$3(this._value, this.format.decimals), i = be$3(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$3(this._value, this.format.decimals), i = be$3(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return this.isNegative() && i && (r2 = r2.subUnsafe(Wn$2.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i && (r2 = r2.addUnsafe(Wn$2.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht$4.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t) return this;
    const i = Ut.from("1" + gr$3.substring(0, t), this.format), n2 = O0$2.toFormat(this.format);
    return this.mulUnsafe(i).addUnsafe(n2).floor().divUnsafe(i);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null) return this._hex;
    t % 8 && Ht$4.throwArgumentError("invalid byte width", "width", t);
    const r2 = V$3.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe$2(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ut.fromString(this._value, t);
  }
  static fromValue(t, r2, i) {
    return i == null && r2 != null && !C0$2(r2) && (i = r2, r2 = null), r2 == null && (r2 = 0), i == null && (i = "fixed"), Ut.fromString(Mi$3(t, r2), dr$3.from(i));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr$3.from(r2), n2 = be$3(t, i.decimals);
    !i.signed && n2.lt(Gn$2) && Vn$3("unsigned value cannot be negative", "overflow", "value", t);
    let o2 = null;
    i.signed ? o2 = n2.toTwos(i.width).toHexString() : (o2 = n2.toHexString(), o2 = oe$2(o2, i.width / 8));
    const h2 = Mi$3(n2, i.decimals);
    return new Ut(mr$3, o2, h2, i);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr$3.from(r2);
    if (Ot$3(t).length > i.width / 8) throw new Error("overflow");
    let n2 = V$3.from(t);
    i.signed && (n2 = n2.fromTwos(i.width));
    const o2 = n2.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), h2 = Mi$3(n2, i.decimals);
    return new Ut(mr$3, o2, h2, i);
  }
  static from(t, r2) {
    if (typeof t == "string") return Ut.fromString(t, r2);
    if (ir$3(t)) return Ut.fromBytes(t, r2);
    try {
      return Ut.fromValue(t, 0, r2);
    } catch (i) {
      if (i.code !== L$5.errors.INVALID_ARGUMENT) throw i;
    }
    return Ht$4.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
const Wn$2 = Ut$3.from(1), O0$2 = Ut$3.from("0.5");
var Or$3;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or$3 || (Or$3 = {}));
var nr$3;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr$3 || (nr$3 = {}));
function T0$2(e) {
  if (e.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4) t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Si$2(e, t) {
  t || (t = function(n2) {
    return [parseInt(n2, 16)];
  });
  let r2 = 0, i = {};
  return e.split(",").forEach((n2) => {
    let o2 = n2.split(":");
    r2 += parseInt(o2[0], 16), i[r2] = t(o2[1]);
  }), i;
}
function $n$2(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i = r2.split("-");
    i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
    let n2 = t + parseInt(i[0], 16);
    return t = parseInt(i[1], 16), { l: n2, h: t };
  });
}
$n$2("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Si$2("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si$2("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si$2("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0$2), $n$2("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function U0$2(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++) t.push(e.charCodeAt(r2));
  return Ot$3(t);
}
function ef$2(e, t) {
  t == null && (t = 1);
  const r2 = [], i = r2.forEach, n2 = function(o2, h2) {
    i.call(o2, function(p3) {
      h2 > 0 && Array.isArray(p3) ? n2(p3, h2 - 1) : r2.push(p3);
    });
  };
  return n2(e, t), r2;
}
function k0$2(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i = e[r2];
    t[i[0]] = i[1];
  }
  return t;
}
function q0$2(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i = r2(), n2 = 1, o2 = [0, 1];
  for (let H = 1; H < i; H++) o2.push(n2 += r2());
  let h2 = r2(), p3 = t;
  t += h2;
  let b3 = 0, m2 = 0;
  function w3() {
    return b3 == 0 && (m2 = m2 << 8 | e[t++], b3 = 8), m2 >> --b3 & 1;
  }
  const y3 = 31, S2 = Math.pow(2, y3), I2 = S2 >>> 1, N2 = I2 >> 1, C2 = S2 - 1;
  let F2 = 0;
  for (let H = 0; H < y3; H++) F2 = F2 << 1 | w3();
  let U2 = [], J2 = 0, Bt2 = S2;
  for (; ; ) {
    let H = Math.floor(((F2 - J2 + 1) * n2 - 1) / Bt2), z2 = 0, Pt2 = i;
    for (; Pt2 - z2 > 1; ) {
      let Yt3 = z2 + Pt2 >>> 1;
      H < o2[Yt3] ? Pt2 = Yt3 : z2 = Yt3;
    }
    if (z2 == 0) break;
    U2.push(z2);
    let W = J2 + Math.floor(Bt2 * o2[z2] / n2), Rt2 = J2 + Math.floor(Bt2 * o2[z2 + 1] / n2) - 1;
    for (; !((W ^ Rt2) & I2); ) F2 = F2 << 1 & C2 | w3(), W = W << 1 & C2, Rt2 = Rt2 << 1 & C2 | 1;
    for (; W & ~Rt2 & N2; ) F2 = F2 & I2 | F2 << 1 & C2 >>> 1 | w3(), W = W << 1 ^ I2, Rt2 = (Rt2 ^ I2) << 1 | I2 | 1;
    J2 = W, Bt2 = 1 + Rt2 - W;
  }
  let G = i - 4;
  return U2.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e[p3++] << 16 | e[p3++] << 8 | e[p3++]);
      case 2:
        return G + 256 + (e[p3++] << 8 | e[p3++]);
      case 1:
        return G + e[p3++];
      default:
        return H - 1;
    }
  });
}
function K0$2(e) {
  let t = 0;
  return () => e[t++];
}
function H0$2(e) {
  return K0$2(q0$2(e));
}
function z0$2(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function L0$2(e, t) {
  let r2 = Array(e);
  for (let i = 0; i < e; i++) r2[i] = 1 + t();
  return r2;
}
function rf$2(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = -1; i < e; i++) r2[i] = n2 += 1 + t();
  return r2;
}
function j0$2(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = 0; i < e; i++) r2[i] = n2 += z0$2(t());
  return r2;
}
function Pr$3(e, t) {
  let r2 = rf$2(e(), e), i = e(), n2 = rf$2(i, e), o2 = L0$2(i, e);
  for (let h2 = 0; h2 < i; h2++) for (let p3 = 0; p3 < o2[h2]; p3++) r2.push(n2[h2] + p3);
  return t ? r2.map((h2) => t[h2]) : r2;
}
function Q0$2(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(G0$2(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0) break;
    t.push(Y0$2(r2, e));
  }
  return k0$2(ef$2(t));
}
function J0$2(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(r2);
  }
  return t;
}
function nf$2(e, t, r2) {
  let i = Array(e).fill(void 0).map(() => []);
  for (let n2 = 0; n2 < t; n2++) j0$2(e, r2).forEach((o2, h2) => i[h2].push(o2));
  return i;
}
function G0$2(e, t) {
  let r2 = 1 + t(), i = t(), n2 = J0$2(t), o2 = nf$2(n2.length, 1 + e, t);
  return ef$2(o2.map((h2, p3) => {
    const b3 = h2[0], m2 = h2.slice(1);
    return Array(n2[p3]).fill(void 0).map((w3, y3) => {
      let S2 = y3 * i;
      return [b3 + y3 * r2, m2.map((I2) => I2 + S2)];
    });
  }));
}
function Y0$2(e, t) {
  let r2 = 1 + t();
  return nf$2(r2, 1 + e, t).map((n2) => [n2[0], n2.slice(1)]);
}
function V0$2(e) {
  let t = Pr$3(e).sort((i, n2) => i - n2);
  return r2();
  function r2() {
    let i = [];
    for (; ; ) {
      let m2 = Pr$3(e, t);
      if (m2.length == 0) break;
      i.push({ set: new Set(m2), node: r2() });
    }
    i.sort((m2, w3) => w3.set.size - m2.set.size);
    let n2 = e(), o2 = n2 % 3;
    n2 = n2 / 3 | 0;
    let h2 = !!(n2 & 1);
    n2 >>= 1;
    let p3 = n2 == 1, b3 = n2 == 2;
    return { branches: i, valid: o2, fe0f: h2, save: p3, check: b3 };
  }
}
function W0$2() {
  return H0$2(U0$2("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"));
}
const Dr$3 = W0$2();
new Set(Pr$3(Dr$3)), new Set(Pr$3(Dr$3)), Q0$2(Dr$3), V0$2(Dr$3);
const X0$2 = new Uint8Array(32);
X0$2.fill(0);
const os$3 = new Uint8Array(32);
os$3.fill(0), V$3.from(-1);
const ss$4 = V$3.from(0), as$3 = V$3.from(1);
V$3.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe$2(as$3.toHexString(), 32), oe$2(ss$4.toHexString(), 32);
var se$3 = {}, Q$4 = {}, yr$3 = af$2;
function af$2(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
af$2.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var Ii$2 = { exports: {} };
typeof Object.create == "function" ? Ii$2.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii$2.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i = function() {
    };
    i.prototype = r2.prototype, t.prototype = new i(), t.prototype.constructor = t;
  }
};
var us$3 = yr$3, hs$3 = Ii$2.exports;
Q$4.inherits = hs$3;
function cs$3(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls$3(e, t) {
  if (Array.isArray(e)) return e.slice();
  if (!e) return [];
  var r2 = [];
  if (typeof e == "string") if (t) {
    if (t === "hex") for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n2 = 0; n2 < e.length; n2 += 2) r2.push(parseInt(e[n2] + e[n2 + 1], 16));
  } else for (var i = 0, n2 = 0; n2 < e.length; n2++) {
    var o2 = e.charCodeAt(n2);
    o2 < 128 ? r2[i++] = o2 : o2 < 2048 ? (r2[i++] = o2 >> 6 | 192, r2[i++] = o2 & 63 | 128) : cs$3(e, n2) ? (o2 = 65536 + ((o2 & 1023) << 10) + (e.charCodeAt(++n2) & 1023), r2[i++] = o2 >> 18 | 240, r2[i++] = o2 >> 12 & 63 | 128, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128) : (r2[i++] = o2 >> 12 | 224, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128);
  }
  else for (n2 = 0; n2 < e.length; n2++) r2[n2] = e[n2] | 0;
  return r2;
}
Q$4.toArray = ls$3;
function ds$3(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++) t += hf$2(e[r2].toString(16));
  return t;
}
Q$4.toHex = ds$3;
function uf$2(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q$4.htonl = uf$2;
function ps$3(e, t) {
  for (var r2 = "", i = 0; i < e.length; i++) {
    var n2 = e[i];
    t === "little" && (n2 = uf$2(n2)), r2 += cf$2(n2.toString(16));
  }
  return r2;
}
Q$4.toHex32 = ps$3;
function hf$2(e) {
  return e.length === 1 ? "0" + e : e;
}
Q$4.zero2 = hf$2;
function cf$2(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q$4.zero8 = cf$2;
function vs$3(e, t, r2, i) {
  var n2 = r2 - t;
  us$3(n2 % 4 === 0);
  for (var o2 = new Array(n2 / 4), h2 = 0, p3 = t; h2 < o2.length; h2++, p3 += 4) {
    var b3;
    i === "big" ? b3 = e[p3] << 24 | e[p3 + 1] << 16 | e[p3 + 2] << 8 | e[p3 + 3] : b3 = e[p3 + 3] << 24 | e[p3 + 2] << 16 | e[p3 + 1] << 8 | e[p3], o2[h2] = b3 >>> 0;
  }
  return o2;
}
Q$4.join32 = vs$3;
function ms$3(e, t) {
  for (var r2 = new Array(e.length * 4), i = 0, n2 = 0; i < e.length; i++, n2 += 4) {
    var o2 = e[i];
    t === "big" ? (r2[n2] = o2 >>> 24, r2[n2 + 1] = o2 >>> 16 & 255, r2[n2 + 2] = o2 >>> 8 & 255, r2[n2 + 3] = o2 & 255) : (r2[n2 + 3] = o2 >>> 24, r2[n2 + 2] = o2 >>> 16 & 255, r2[n2 + 1] = o2 >>> 8 & 255, r2[n2] = o2 & 255);
  }
  return r2;
}
Q$4.split32 = ms$3;
function gs$3(e, t) {
  return e >>> t | e << 32 - t;
}
Q$4.rotr32 = gs$3;
function As$3(e, t) {
  return e << t | e >>> 32 - t;
}
Q$4.rotl32 = As$3;
function bs$3(e, t) {
  return e + t >>> 0;
}
Q$4.sum32 = bs$3;
function ys$3(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q$4.sum32_3 = ys$3;
function ws$3(e, t, r2, i) {
  return e + t + r2 + i >>> 0;
}
Q$4.sum32_4 = ws$3;
function xs$3(e, t, r2, i, n2) {
  return e + t + r2 + i + n2 >>> 0;
}
Q$4.sum32_5 = xs$3;
function Ms$3(e, t, r2, i) {
  var n2 = e[t], o2 = e[t + 1], h2 = i + o2 >>> 0, p3 = (h2 < i ? 1 : 0) + r2 + n2;
  e[t] = p3 >>> 0, e[t + 1] = h2;
}
Q$4.sum64 = Ms$3;
function Es$3(e, t, r2, i) {
  var n2 = t + i >>> 0, o2 = (n2 < t ? 1 : 0) + e + r2;
  return o2 >>> 0;
}
Q$4.sum64_hi = Es$3;
function Ss$3(e, t, r2, i) {
  var n2 = t + i;
  return n2 >>> 0;
}
Q$4.sum64_lo = Ss$3;
function Ns$3(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = 0, m2 = t;
  m2 = m2 + i >>> 0, b3 += m2 < t ? 1 : 0, m2 = m2 + o2 >>> 0, b3 += m2 < o2 ? 1 : 0, m2 = m2 + p3 >>> 0, b3 += m2 < p3 ? 1 : 0;
  var w3 = e + r2 + n2 + h2 + b3;
  return w3 >>> 0;
}
Q$4.sum64_4_hi = Ns$3;
function Is$3(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = t + i + o2 + p3;
  return b3 >>> 0;
}
Q$4.sum64_4_lo = Is$3;
function _s$3(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = 0, y3 = t;
  y3 = y3 + i >>> 0, w3 += y3 < t ? 1 : 0, y3 = y3 + o2 >>> 0, w3 += y3 < o2 ? 1 : 0, y3 = y3 + p3 >>> 0, w3 += y3 < p3 ? 1 : 0, y3 = y3 + m2 >>> 0, w3 += y3 < m2 ? 1 : 0;
  var S2 = e + r2 + n2 + h2 + b3 + w3;
  return S2 >>> 0;
}
Q$4.sum64_5_hi = _s$3;
function Bs$3(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = t + i + o2 + p3 + m2;
  return w3 >>> 0;
}
Q$4.sum64_5_lo = Bs$3;
function Cs$3(e, t, r2) {
  var i = t << 32 - r2 | e >>> r2;
  return i >>> 0;
}
Q$4.rotr64_hi = Cs$3;
function Rs$3(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$4.rotr64_lo = Rs$3;
function Os$3(e, t, r2) {
  return e >>> r2;
}
Q$4.shr64_hi = Os$3;
function Ps$3(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$4.shr64_lo = Ps$3;
var fr$2 = {}, lf$2 = Q$4, Ds$3 = yr$3;
function Fr$3() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr$2.BlockHash = Fr$3, Fr$3.prototype.update = function(t, r2) {
  if (t = lf$2.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i = t.length % this._delta8;
    this.pending = t.slice(t.length - i, t.length), this.pending.length === 0 && (this.pending = null), t = lf$2.join32(t, 0, t.length - i, this.endian);
    for (var n2 = 0; n2 < t.length; n2 += this._delta32) this._update(t, n2, n2 + this._delta32);
  }
  return this;
}, Fr$3.prototype.digest = function(t) {
  return this.update(this._pad()), Ds$3(this.pending === null), this._digest(t);
}, Fr$3.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i = r2 - (t + this.padLength) % r2, n2 = new Array(i + this.padLength);
  n2[0] = 128;
  for (var o2 = 1; o2 < i; o2++) n2[o2] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
    n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = t >>> 24 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t & 255;
  } else for (n2[o2++] = t & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 24 & 255, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
  return n2;
};
var or$3 = {}, ae$2 = {}, Fs$3 = Q$4, ue$2 = Fs$3.rotr32;
function Ts$3(e, t, r2, i) {
  if (e === 0) return df$2(t, r2, i);
  if (e === 1 || e === 3) return vf$2(t, r2, i);
  if (e === 2) return pf$2(t, r2, i);
}
ae$2.ft_1 = Ts$3;
function df$2(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae$2.ch32 = df$2;
function pf$2(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae$2.maj32 = pf$2;
function vf$2(e, t, r2) {
  return e ^ t ^ r2;
}
ae$2.p32 = vf$2;
function Us$3(e) {
  return ue$2(e, 2) ^ ue$2(e, 13) ^ ue$2(e, 22);
}
ae$2.s0_256 = Us$3;
function ks$3(e) {
  return ue$2(e, 6) ^ ue$2(e, 11) ^ ue$2(e, 25);
}
ae$2.s1_256 = ks$3;
function qs$3(e) {
  return ue$2(e, 7) ^ ue$2(e, 18) ^ e >>> 3;
}
ae$2.g0_256 = qs$3;
function Ks$3(e) {
  return ue$2(e, 17) ^ ue$2(e, 19) ^ e >>> 10;
}
ae$2.g1_256 = Ks$3;
var sr$3 = Q$4, Hs$3 = fr$2, zs$3 = ae$2, _i$2 = sr$3.rotl32, wr$2 = sr$3.sum32, Ls$3 = sr$3.sum32_5, js$3 = zs$3.ft_1, mf$2 = Hs$3.BlockHash, Qs$3 = [1518500249, 1859775393, 2400959708, 3395469782];
function he$2() {
  if (!(this instanceof he$2)) return new he$2();
  mf$2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr$3.inherits(he$2, mf$2);
var Js$3 = he$2;
he$2.blockSize = 512, he$2.outSize = 160, he$2.hmacStrength = 80, he$2.padLength = 64, he$2.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = _i$2(i[n2 - 3] ^ i[n2 - 8] ^ i[n2 - 14] ^ i[n2 - 16], 1);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4];
  for (n2 = 0; n2 < i.length; n2++) {
    var w3 = ~~(n2 / 20), y3 = Ls$3(_i$2(o2, 5), js$3(w3, h2, p3, b3), m2, i[n2], Qs$3[w3]);
    m2 = b3, b3 = p3, p3 = _i$2(h2, 30), h2 = o2, o2 = y3;
  }
  this.h[0] = wr$2(this.h[0], o2), this.h[1] = wr$2(this.h[1], h2), this.h[2] = wr$2(this.h[2], p3), this.h[3] = wr$2(this.h[3], b3), this.h[4] = wr$2(this.h[4], m2);
}, he$2.prototype._digest = function(t) {
  return t === "hex" ? sr$3.toHex32(this.h, "big") : sr$3.split32(this.h, "big");
};
var ar$3 = Q$4, Gs$3 = fr$2, ur$3 = ae$2, Ys$3 = yr$3, ie$4 = ar$3.sum32, Vs$3 = ar$3.sum32_4, Ws$3 = ar$3.sum32_5, Xs$3 = ur$3.ch32, Zs$3 = ur$3.maj32, $s$3 = ur$3.s0_256, ta$2 = ur$3.s1_256, ea$2 = ur$3.g0_256, ra$2 = ur$3.g1_256, gf$2 = Gs$3.BlockHash, ia$2 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce$2() {
  if (!(this instanceof ce$2)) return new ce$2();
  gf$2.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia$2, this.W = new Array(64);
}
ar$3.inherits(ce$2, gf$2);
var Af$2 = ce$2;
ce$2.blockSize = 512, ce$2.outSize = 256, ce$2.hmacStrength = 192, ce$2.padLength = 64, ce$2.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = Vs$3(ra$2(i[n2 - 2]), i[n2 - 7], ea$2(i[n2 - 15]), i[n2 - 16]);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4], w3 = this.h[5], y3 = this.h[6], S2 = this.h[7];
  for (Ys$3(this.k.length === i.length), n2 = 0; n2 < i.length; n2++) {
    var I2 = Ws$3(S2, ta$2(m2), Xs$3(m2, w3, y3), this.k[n2], i[n2]), N2 = ie$4($s$3(o2), Zs$3(o2, h2, p3));
    S2 = y3, y3 = w3, w3 = m2, m2 = ie$4(b3, I2), b3 = p3, p3 = h2, h2 = o2, o2 = ie$4(I2, N2);
  }
  this.h[0] = ie$4(this.h[0], o2), this.h[1] = ie$4(this.h[1], h2), this.h[2] = ie$4(this.h[2], p3), this.h[3] = ie$4(this.h[3], b3), this.h[4] = ie$4(this.h[4], m2), this.h[5] = ie$4(this.h[5], w3), this.h[6] = ie$4(this.h[6], y3), this.h[7] = ie$4(this.h[7], S2);
}, ce$2.prototype._digest = function(t) {
  return t === "hex" ? ar$3.toHex32(this.h, "big") : ar$3.split32(this.h, "big");
};
var Bi$2 = Q$4, bf$2 = Af$2;
function ye$3() {
  if (!(this instanceof ye$3)) return new ye$3();
  bf$2.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi$2.inherits(ye$3, bf$2);
var na$2 = ye$3;
ye$3.blockSize = 512, ye$3.outSize = 224, ye$3.hmacStrength = 192, ye$3.padLength = 64, ye$3.prototype._digest = function(t) {
  return t === "hex" ? Bi$2.toHex32(this.h.slice(0, 7), "big") : Bi$2.split32(this.h.slice(0, 7), "big");
};
var jt$3 = Q$4, fa$2 = fr$2, oa$2 = yr$3, le$2 = jt$3.rotr64_hi, de$3 = jt$3.rotr64_lo, yf$2 = jt$3.shr64_hi, wf$2 = jt$3.shr64_lo, Be$4 = jt$3.sum64, Ci$2 = jt$3.sum64_hi, Ri$2 = jt$3.sum64_lo, sa$2 = jt$3.sum64_4_hi, aa$2 = jt$3.sum64_4_lo, ua$2 = jt$3.sum64_5_hi, ha$2 = jt$3.sum64_5_lo, xf$2 = fa$2.BlockHash, ca$2 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne$3() {
  if (!(this instanceof ne$3)) return new ne$3();
  xf$2.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca$2, this.W = new Array(160);
}
jt$3.inherits(ne$3, xf$2);
var Mf$2 = ne$3;
ne$3.blockSize = 1024, ne$3.outSize = 512, ne$3.hmacStrength = 192, ne$3.padLength = 128, ne$3.prototype._prepareBlock = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 32; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2 += 2) {
    var o2 = xa$3(i[n2 - 4], i[n2 - 3]), h2 = Ma$2(i[n2 - 4], i[n2 - 3]), p3 = i[n2 - 14], b3 = i[n2 - 13], m2 = ya$3(i[n2 - 30], i[n2 - 29]), w3 = wa$2(i[n2 - 30], i[n2 - 29]), y3 = i[n2 - 32], S2 = i[n2 - 31];
    i[n2] = sa$2(o2, h2, p3, b3, m2, w3, y3, S2), i[n2 + 1] = aa$2(o2, h2, p3, b3, m2, w3, y3, S2);
  }
}, ne$3.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i = this.W, n2 = this.h[0], o2 = this.h[1], h2 = this.h[2], p3 = this.h[3], b3 = this.h[4], m2 = this.h[5], w3 = this.h[6], y3 = this.h[7], S2 = this.h[8], I2 = this.h[9], N2 = this.h[10], C2 = this.h[11], F2 = this.h[12], U2 = this.h[13], J2 = this.h[14], Bt2 = this.h[15];
  oa$2(this.k.length === i.length);
  for (var G = 0; G < i.length; G += 2) {
    var H = J2, z2 = Bt2, Pt2 = Aa$2(S2, I2), W = ba$3(S2, I2), Rt2 = la$2(S2, I2, N2, C2, F2), Yt3 = da$2(S2, I2, N2, C2, F2, U2), Y = this.k[G], Vt2 = this.k[G + 1], A2 = i[G], f2 = i[G + 1], a2 = ua$2(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2), c2 = ha$2(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2);
    H = ma$2(n2, o2), z2 = ga$2(n2, o2), Pt2 = pa$2(n2, o2, h2, p3, b3), W = va$2(n2, o2, h2, p3, b3, m2);
    var d3 = Ci$2(H, z2, Pt2, W), g3 = Ri$2(H, z2, Pt2, W);
    J2 = F2, Bt2 = U2, F2 = N2, U2 = C2, N2 = S2, C2 = I2, S2 = Ci$2(w3, y3, a2, c2), I2 = Ri$2(y3, y3, a2, c2), w3 = b3, y3 = m2, b3 = h2, m2 = p3, h2 = n2, p3 = o2, n2 = Ci$2(a2, c2, d3, g3), o2 = Ri$2(a2, c2, d3, g3);
  }
  Be$4(this.h, 0, n2, o2), Be$4(this.h, 2, h2, p3), Be$4(this.h, 4, b3, m2), Be$4(this.h, 6, w3, y3), Be$4(this.h, 8, S2, I2), Be$4(this.h, 10, N2, C2), Be$4(this.h, 12, F2, U2), Be$4(this.h, 14, J2, Bt2);
}, ne$3.prototype._digest = function(t) {
  return t === "hex" ? jt$3.toHex32(this.h, "big") : jt$3.split32(this.h, "big");
};
function la$2(e, t, r2, i, n2) {
  var o2 = e & r2 ^ ~e & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function da$2(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ ~t & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function pa$2(e, t, r2, i, n2) {
  var o2 = e & r2 ^ e & n2 ^ r2 & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function va$2(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ t & o2 ^ i & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function ma$2(e, t) {
  var r2 = le$2(e, t, 28), i = le$2(t, e, 2), n2 = le$2(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ga$2(e, t) {
  var r2 = de$3(e, t, 28), i = de$3(t, e, 2), n2 = de$3(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Aa$2(e, t) {
  var r2 = le$2(e, t, 14), i = le$2(e, t, 18), n2 = le$2(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ba$3(e, t) {
  var r2 = de$3(e, t, 14), i = de$3(e, t, 18), n2 = de$3(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ya$3(e, t) {
  var r2 = le$2(e, t, 1), i = le$2(e, t, 8), n2 = yf$2(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function wa$2(e, t) {
  var r2 = de$3(e, t, 1), i = de$3(e, t, 8), n2 = wf$2(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function xa$3(e, t) {
  var r2 = le$2(e, t, 19), i = le$2(t, e, 29), n2 = yf$2(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ma$2(e, t) {
  var r2 = de$3(e, t, 19), i = de$3(t, e, 29), n2 = wf$2(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
var Oi$2 = Q$4, Ef$2 = Mf$2;
function we$2() {
  if (!(this instanceof we$2)) return new we$2();
  Ef$2.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi$2.inherits(we$2, Ef$2);
var Ea$3 = we$2;
we$2.blockSize = 1024, we$2.outSize = 384, we$2.hmacStrength = 192, we$2.padLength = 128, we$2.prototype._digest = function(t) {
  return t === "hex" ? Oi$2.toHex32(this.h.slice(0, 12), "big") : Oi$2.split32(this.h.slice(0, 12), "big");
}, or$3.sha1 = Js$3, or$3.sha224 = na$2, or$3.sha256 = Af$2, or$3.sha384 = Ea$3, or$3.sha512 = Mf$2;
var Sf$2 = {}, Xe$4 = Q$4, Sa$3 = fr$2, Tr$3 = Xe$4.rotl32, Nf$2 = Xe$4.sum32, xr$3 = Xe$4.sum32_3, If$2 = Xe$4.sum32_4, _f$2 = Sa$3.BlockHash;
function pe$3() {
  if (!(this instanceof pe$3)) return new pe$3();
  _f$2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe$4.inherits(pe$3, _f$2), Sf$2.ripemd160 = pe$3, pe$3.blockSize = 512, pe$3.outSize = 160, pe$3.hmacStrength = 192, pe$3.padLength = 64, pe$3.prototype._update = function(t, r2) {
  for (var i = this.h[0], n2 = this.h[1], o2 = this.h[2], h2 = this.h[3], p3 = this.h[4], b3 = i, m2 = n2, w3 = o2, y3 = h2, S2 = p3, I2 = 0; I2 < 80; I2++) {
    var N2 = Nf$2(Tr$3(If$2(i, Bf$2(I2, n2, o2, h2), t[_a$2[I2] + r2], Na$2(I2)), Ca$2[I2]), p3);
    i = p3, p3 = h2, h2 = Tr$3(o2, 10), o2 = n2, n2 = N2, N2 = Nf$2(Tr$3(If$2(b3, Bf$2(79 - I2, m2, w3, y3), t[Ba$2[I2] + r2], Ia$2(I2)), Ra$3[I2]), S2), b3 = S2, S2 = y3, y3 = Tr$3(w3, 10), w3 = m2, m2 = N2;
  }
  N2 = xr$3(this.h[1], o2, y3), this.h[1] = xr$3(this.h[2], h2, S2), this.h[2] = xr$3(this.h[3], p3, b3), this.h[3] = xr$3(this.h[4], i, m2), this.h[4] = xr$3(this.h[0], n2, w3), this.h[0] = N2;
}, pe$3.prototype._digest = function(t) {
  return t === "hex" ? Xe$4.toHex32(this.h, "little") : Xe$4.split32(this.h, "little");
};
function Bf$2(e, t, r2, i) {
  return e <= 15 ? t ^ r2 ^ i : e <= 31 ? t & r2 | ~t & i : e <= 47 ? (t | ~r2) ^ i : e <= 63 ? t & i | r2 & ~i : t ^ (r2 | ~i);
}
function Na$2(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia$2(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a$2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Ba$2 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ca$2 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Ra$3 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Oa$3 = Q$4, Pa$2 = yr$3;
function hr$4(e, t, r2) {
  if (!(this instanceof hr$4)) return new hr$4(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa$3.toArray(t, r2));
}
var Da$3 = hr$4;
hr$4.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa$2(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++) t.push(0);
  for (r2 = 0; r2 < t.length; r2++) t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++) t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr$4.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr$4.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q$4, t.common = fr$2, t.sha = or$3, t.ripemd = Sf$2, t.hmac = Da$3, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se$3);
function cr$4(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i, n2) {
    return Fa$2(i, n2 ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Fa$2() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi$2 = Cf$2;
function Cf$2(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
Cf$2.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var fe$3 = cr$4(function(e, t) {
  var r2 = t;
  function i(h2, p3) {
    if (Array.isArray(h2)) return h2.slice();
    if (!h2) return [];
    var b3 = [];
    if (typeof h2 != "string") {
      for (var m2 = 0; m2 < h2.length; m2++) b3[m2] = h2[m2] | 0;
      return b3;
    }
    if (p3 === "hex") {
      h2 = h2.replace(/[^a-z0-9]+/ig, ""), h2.length % 2 !== 0 && (h2 = "0" + h2);
      for (var m2 = 0; m2 < h2.length; m2 += 2) b3.push(parseInt(h2[m2] + h2[m2 + 1], 16));
    } else for (var m2 = 0; m2 < h2.length; m2++) {
      var w3 = h2.charCodeAt(m2), y3 = w3 >> 8, S2 = w3 & 255;
      y3 ? b3.push(y3, S2) : b3.push(S2);
    }
    return b3;
  }
  r2.toArray = i;
  function n2(h2) {
    return h2.length === 1 ? "0" + h2 : h2;
  }
  r2.zero2 = n2;
  function o2(h2) {
    for (var p3 = "", b3 = 0; b3 < h2.length; b3++) p3 += n2(h2[b3].toString(16));
    return p3;
  }
  r2.toHex = o2, r2.encode = function(p3, b3) {
    return b3 === "hex" ? o2(p3) : p3;
  };
}), Jt$4 = cr$4(function(e, t) {
  var r2 = t;
  r2.assert = Pi$2, r2.toArray = fe$3.toArray, r2.zero2 = fe$3.zero2, r2.toHex = fe$3.toHex, r2.encode = fe$3.encode;
  function i(b3, m2, w3) {
    var y3 = new Array(Math.max(b3.bitLength(), w3) + 1);
    y3.fill(0);
    for (var S2 = 1 << m2 + 1, I2 = b3.clone(), N2 = 0; N2 < y3.length; N2++) {
      var C2, F2 = I2.andln(S2 - 1);
      I2.isOdd() ? (F2 > (S2 >> 1) - 1 ? C2 = (S2 >> 1) - F2 : C2 = F2, I2.isubn(C2)) : C2 = 0, y3[N2] = C2, I2.iushrn(1);
    }
    return y3;
  }
  r2.getNAF = i;
  function n2(b3, m2) {
    var w3 = [[], []];
    b3 = b3.clone(), m2 = m2.clone();
    for (var y3 = 0, S2 = 0, I2; b3.cmpn(-y3) > 0 || m2.cmpn(-S2) > 0; ) {
      var N2 = b3.andln(3) + y3 & 3, C2 = m2.andln(3) + S2 & 3;
      N2 === 3 && (N2 = -1), C2 === 3 && (C2 = -1);
      var F2;
      N2 & 1 ? (I2 = b3.andln(7) + y3 & 7, (I2 === 3 || I2 === 5) && C2 === 2 ? F2 = -N2 : F2 = N2) : F2 = 0, w3[0].push(F2);
      var U2;
      C2 & 1 ? (I2 = m2.andln(7) + S2 & 7, (I2 === 3 || I2 === 5) && N2 === 2 ? U2 = -C2 : U2 = C2) : U2 = 0, w3[1].push(U2), 2 * y3 === F2 + 1 && (y3 = 1 - y3), 2 * S2 === U2 + 1 && (S2 = 1 - S2), b3.iushrn(1), m2.iushrn(1);
    }
    return w3;
  }
  r2.getJSF = n2;
  function o2(b3, m2, w3) {
    var y3 = "_" + m2;
    b3.prototype[m2] = function() {
      return this[y3] !== void 0 ? this[y3] : this[y3] = w3.call(this);
    };
  }
  r2.cachedProperty = o2;
  function h2(b3) {
    return typeof b3 == "string" ? r2.toArray(b3, "hex") : b3;
  }
  r2.parseBytes = h2;
  function p3(b3) {
    return new K$3(b3, "hex", "le");
  }
  r2.intFromLE = p3;
}), Ur$3 = Jt$4.getNAF, Ta$3 = Jt$4.getJSF, kr$3 = Jt$4.assert;
function Ce$2(e, t) {
  this.type = e, this.p = new K$3(t.p, 16), this.red = t.prime ? K$3.red(t.prime) : K$3.mont(this.p), this.zero = new K$3(0).toRed(this.red), this.one = new K$3(1).toRed(this.red), this.two = new K$3(2).toRed(this.red), this.n = t.n && new K$3(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze$3 = Ce$2;
Ce$2.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce$2.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce$2.prototype._fixedNafMul = function(t, r2) {
  kr$3(t.precomputed);
  var i = t._getDoubles(), n2 = Ur$3(r2, 1, this._bitLength), o2 = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
  o2 /= 3;
  var h2 = [], p3, b3;
  for (p3 = 0; p3 < n2.length; p3 += i.step) {
    b3 = 0;
    for (var m2 = p3 + i.step - 1; m2 >= p3; m2--) b3 = (b3 << 1) + n2[m2];
    h2.push(b3);
  }
  for (var w3 = this.jpoint(null, null, null), y3 = this.jpoint(null, null, null), S2 = o2; S2 > 0; S2--) {
    for (p3 = 0; p3 < h2.length; p3++) b3 = h2[p3], b3 === S2 ? y3 = y3.mixedAdd(i.points[p3]) : b3 === -S2 && (y3 = y3.mixedAdd(i.points[p3].neg()));
    w3 = w3.add(y3);
  }
  return w3.toP();
}, Ce$2.prototype._wnafMul = function(t, r2) {
  var i = 4, n2 = t._getNAFPoints(i);
  i = n2.wnd;
  for (var o2 = n2.points, h2 = Ur$3(r2, i, this._bitLength), p3 = this.jpoint(null, null, null), b3 = h2.length - 1; b3 >= 0; b3--) {
    for (var m2 = 0; b3 >= 0 && h2[b3] === 0; b3--) m2++;
    if (b3 >= 0 && m2++, p3 = p3.dblp(m2), b3 < 0) break;
    var w3 = h2[b3];
    kr$3(w3 !== 0), t.type === "affine" ? w3 > 0 ? p3 = p3.mixedAdd(o2[w3 - 1 >> 1]) : p3 = p3.mixedAdd(o2[-w3 - 1 >> 1].neg()) : w3 > 0 ? p3 = p3.add(o2[w3 - 1 >> 1]) : p3 = p3.add(o2[-w3 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p3.toP() : p3;
}, Ce$2.prototype._wnafMulAdd = function(t, r2, i, n2, o2) {
  var h2 = this._wnafT1, p3 = this._wnafT2, b3 = this._wnafT3, m2 = 0, w3, y3, S2;
  for (w3 = 0; w3 < n2; w3++) {
    S2 = r2[w3];
    var I2 = S2._getNAFPoints(t);
    h2[w3] = I2.wnd, p3[w3] = I2.points;
  }
  for (w3 = n2 - 1; w3 >= 1; w3 -= 2) {
    var N2 = w3 - 1, C2 = w3;
    if (h2[N2] !== 1 || h2[C2] !== 1) {
      b3[N2] = Ur$3(i[N2], h2[N2], this._bitLength), b3[C2] = Ur$3(i[C2], h2[C2], this._bitLength), m2 = Math.max(b3[N2].length, m2), m2 = Math.max(b3[C2].length, m2);
      continue;
    }
    var F2 = [r2[N2], null, null, r2[C2]];
    r2[N2].y.cmp(r2[C2].y) === 0 ? (F2[1] = r2[N2].add(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg())) : r2[N2].y.cmp(r2[C2].y.redNeg()) === 0 ? (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].add(r2[C2].neg())) : (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg()));
    var U2 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta$3(i[N2], i[C2]);
    for (m2 = Math.max(J2[0].length, m2), b3[N2] = new Array(m2), b3[C2] = new Array(m2), y3 = 0; y3 < m2; y3++) {
      var Bt2 = J2[0][y3] | 0, G = J2[1][y3] | 0;
      b3[N2][y3] = U2[(Bt2 + 1) * 3 + (G + 1)], b3[C2][y3] = 0, p3[N2] = F2;
    }
  }
  var H = this.jpoint(null, null, null), z2 = this._wnafT4;
  for (w3 = m2; w3 >= 0; w3--) {
    for (var Pt2 = 0; w3 >= 0; ) {
      var W = true;
      for (y3 = 0; y3 < n2; y3++) z2[y3] = b3[y3][w3] | 0, z2[y3] !== 0 && (W = false);
      if (!W) break;
      Pt2++, w3--;
    }
    if (w3 >= 0 && Pt2++, H = H.dblp(Pt2), w3 < 0) break;
    for (y3 = 0; y3 < n2; y3++) {
      var Rt2 = z2[y3];
      Rt2 !== 0 && (Rt2 > 0 ? S2 = p3[y3][Rt2 - 1 >> 1] : Rt2 < 0 && (S2 = p3[y3][-Rt2 - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w3 = 0; w3 < n2; w3++) p3[w3] = null;
  return o2 ? H : H.toP();
};
function Xt$4(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce$2.BasePoint = Xt$4, Xt$4.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt$4.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce$2.prototype.decodePoint = function(t, r2) {
  t = Jt$4.toArray(t, r2);
  var i = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
    t[0] === 6 ? kr$3(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr$3(t[t.length - 1] % 2 === 1);
    var n2 = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
    return n2;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt$4.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt$4.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", r2));
}, Xt$4.prototype.encode = function(t, r2) {
  return Jt$4.encode(this._encode(r2), t);
}, Xt$4.prototype.precompute = function(t) {
  if (this.precomputed) return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt$4.prototype._hasDoubles = function(t) {
  if (!this.precomputed) return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt$4.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i = [this], n2 = this, o2 = 0; o2 < r2; o2 += t) {
    for (var h2 = 0; h2 < t; h2++) n2 = n2.dbl();
    i.push(n2);
  }
  return { step: t, points: i };
}, Xt$4.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r2 = [this], i = (1 << t) - 1, n2 = i === 1 ? null : this.dbl(), o2 = 1; o2 < i; o2++) r2[o2] = r2[o2 - 1].add(n2);
  return { wnd: t, points: r2 };
}, Xt$4.prototype._getBeta = function() {
  return null;
}, Xt$4.prototype.dblp = function(t) {
  for (var r2 = this, i = 0; i < t; i++) r2 = r2.dbl();
  return r2;
};
var Di$2 = cr$4(function(e) {
  typeof Object.create == "function" ? e.exports = function(r2, i) {
    i && (r2.super_ = i, r2.prototype = Object.create(i.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e.exports = function(r2, i) {
    if (i) {
      r2.super_ = i;
      var n2 = function() {
      };
      n2.prototype = i.prototype, r2.prototype = new n2(), r2.prototype.constructor = r2;
    }
  };
}), Ua$2 = Jt$4.assert;
function Zt$3(e) {
  Ze$3.call(this, "short", e), this.a = new K$3(e.a, 16).toRed(this.red), this.b = new K$3(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di$2(Zt$3, Ze$3);
var ka$2 = Zt$3;
Zt$3.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i;
    if (t.beta) r2 = new K$3(t.beta, 16).toRed(this.red);
    else {
      var n2 = this._getEndoRoots(this.p);
      r2 = n2[0].cmp(n2[1]) < 0 ? n2[0] : n2[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda) i = new K$3(t.lambda, 16);
    else {
      var o2 = this._getEndoRoots(this.n);
      this.g.mul(o2[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i = o2[0] : (i = o2[1], Ua$2(this.g.mul(i).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h2;
    return t.basis ? h2 = t.basis.map(function(p3) {
      return { a: new K$3(p3.a, 16), b: new K$3(p3.b, 16) };
    }) : h2 = this._getEndoBasis(i), { beta: r2, lambda: i, basis: h2 };
  }
}, Zt$3.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K$3.mont(t), i = new K$3(2).toRed(r2).redInvm(), n2 = i.redNeg(), o2 = new K$3(3).toRed(r2).redNeg().redSqrt().redMul(i), h2 = n2.redAdd(o2).fromRed(), p3 = n2.redSub(o2).fromRed();
  return [h2, p3];
}, Zt$3.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = t, n2 = this.n.clone(), o2 = new K$3(1), h2 = new K$3(0), p3 = new K$3(0), b3 = new K$3(1), m2, w3, y3, S2, I2, N2, C2, F2 = 0, U2, J2; i.cmpn(0) !== 0; ) {
    var Bt2 = n2.div(i);
    U2 = n2.sub(Bt2.mul(i)), J2 = p3.sub(Bt2.mul(o2));
    var G = b3.sub(Bt2.mul(h2));
    if (!y3 && U2.cmp(r2) < 0) m2 = C2.neg(), w3 = o2, y3 = U2.neg(), S2 = J2;
    else if (y3 && ++F2 === 2) break;
    C2 = U2, n2 = i, i = U2, p3 = o2, o2 = J2, b3 = h2, h2 = G;
  }
  I2 = U2.neg(), N2 = J2;
  var H = y3.sqr().add(S2.sqr()), z2 = I2.sqr().add(N2.sqr());
  return z2.cmp(H) >= 0 && (I2 = m2, N2 = w3), y3.negative && (y3 = y3.neg(), S2 = S2.neg()), I2.negative && (I2 = I2.neg(), N2 = N2.neg()), [{ a: y3, b: S2 }, { a: I2, b: N2 }];
}, Zt$3.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i = r2[0], n2 = r2[1], o2 = n2.b.mul(t).divRound(this.n), h2 = i.b.neg().mul(t).divRound(this.n), p3 = o2.mul(i.a), b3 = h2.mul(n2.a), m2 = o2.mul(i.b), w3 = h2.mul(n2.b), y3 = t.sub(p3).sub(b3), S2 = m2.add(w3).neg();
  return { k1: y3, k2: S2 };
}, Zt$3.prototype.pointFromX = function(t, r2) {
  t = new K$3(t, 16), t.red || (t = t.toRed(this.red));
  var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n2 = i.redSqrt();
  if (n2.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o2 = n2.fromRed().isOdd();
  return (r2 && !o2 || !r2 && o2) && (n2 = n2.redNeg()), this.point(t, n2);
}, Zt$3.prototype.validate = function(t) {
  if (t.inf) return true;
  var r2 = t.x, i = t.y, n2 = this.a.redMul(r2), o2 = r2.redSqr().redMul(r2).redIAdd(n2).redIAdd(this.b);
  return i.redSqr().redISub(o2).cmpn(0) === 0;
}, Zt$3.prototype._endoWnafMulAdd = function(t, r2, i) {
  for (var n2 = this._endoWnafT1, o2 = this._endoWnafT2, h2 = 0; h2 < t.length; h2++) {
    var p3 = this._endoSplit(r2[h2]), b3 = t[h2], m2 = b3._getBeta();
    p3.k1.negative && (p3.k1.ineg(), b3 = b3.neg(true)), p3.k2.negative && (p3.k2.ineg(), m2 = m2.neg(true)), n2[h2 * 2] = b3, n2[h2 * 2 + 1] = m2, o2[h2 * 2] = p3.k1, o2[h2 * 2 + 1] = p3.k2;
  }
  for (var w3 = this._wnafMulAdd(1, n2, o2, h2 * 2, i), y3 = 0; y3 < h2 * 2; y3++) n2[y3] = null, o2[y3] = null;
  return w3;
};
function Ft$3(e, t, r2, i) {
  Ze$3.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K$3(t, 16), this.y = new K$3(r2, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di$2(Ft$3, Ze$3.BasePoint), Zt$3.prototype.point = function(t, r2, i) {
  return new Ft$3(this, t, r2, i);
}, Zt$3.prototype.pointFromJSON = function(t, r2) {
  return Ft$3.fromJSON(this, t, r2);
}, Ft$3.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i = this.curve, n2 = function(o2) {
        return i.point(o2.x.redMul(i.endo.beta), o2.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n2) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n2) } };
    }
    return r2;
  }
}, Ft$3.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft$3.fromJSON = function(t, r2, i) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n2 = t.point(r2[0], r2[1], i);
  if (!r2[2]) return n2;
  function o2(p3) {
    return t.point(p3[0], p3[1], i);
  }
  var h2 = r2[2];
  return n2.precomputed = { beta: null, doubles: h2.doubles && { step: h2.doubles.step, points: [n2].concat(h2.doubles.points.map(o2)) }, naf: h2.naf && { wnd: h2.naf.wnd, points: [n2].concat(h2.naf.points.map(o2)) } }, n2;
}, Ft$3.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft$3.prototype.isInfinity = function() {
  return this.inf;
}, Ft$3.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i = r2.redSqr().redISub(this.x).redISub(t.x), n2 = r2.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, n2);
}, Ft$3.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var r2 = this.curve.a, i = this.x.redSqr(), n2 = t.redInvm(), o2 = i.redAdd(i).redIAdd(i).redIAdd(r2).redMul(n2), h2 = o2.redSqr().redISub(this.x.redAdd(this.x)), p3 = o2.redMul(this.x.redSub(h2)).redISub(this.y);
  return this.curve.point(h2, p3);
}, Ft$3.prototype.getX = function() {
  return this.x.fromRed();
}, Ft$3.prototype.getY = function() {
  return this.y.fromRed();
}, Ft$3.prototype.mul = function(t) {
  return t = new K$3(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft$3.prototype.mulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2) : this.curve._wnafMulAdd(1, n2, o2, 2);
}, Ft$3.prototype.jmulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2, true) : this.curve._wnafMulAdd(1, n2, o2, 2, true);
}, Ft$3.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft$3.prototype.neg = function(t) {
  if (this.inf) return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i = this.precomputed, n2 = function(o2) {
      return o2.neg();
    };
    r2.precomputed = { naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(n2) }, doubles: i.doubles && { step: i.doubles.step, points: i.doubles.points.map(n2) } };
  }
  return r2;
}, Ft$3.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt$3(e, t, r2, i) {
  Ze$3.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K$3(0)) : (this.x = new K$3(t, 16), this.y = new K$3(r2, 16), this.z = new K$3(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di$2(Tt$3, Ze$3.BasePoint), Zt$3.prototype.jpoint = function(t, r2, i) {
  return new Tt$3(this, t, r2, i);
}, Tt$3.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i = this.x.redMul(r2), n2 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i, n2);
}, Tt$3.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt$3.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var r2 = t.z.redSqr(), i = this.z.redSqr(), n2 = this.x.redMul(r2), o2 = t.x.redMul(i), h2 = this.y.redMul(r2.redMul(t.z)), p3 = t.y.redMul(i.redMul(this.z)), b3 = n2.redSub(o2), m2 = h2.redSub(p3);
  if (b3.cmpn(0) === 0) return m2.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w3 = b3.redSqr(), y3 = w3.redMul(b3), S2 = n2.redMul(w3), I2 = m2.redSqr().redIAdd(y3).redISub(S2).redISub(S2), N2 = m2.redMul(S2.redISub(I2)).redISub(h2.redMul(y3)), C2 = this.z.redMul(t.z).redMul(b3);
  return this.curve.jpoint(I2, N2, C2);
}, Tt$3.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var r2 = this.z.redSqr(), i = this.x, n2 = t.x.redMul(r2), o2 = this.y, h2 = t.y.redMul(r2).redMul(this.z), p3 = i.redSub(n2), b3 = o2.redSub(h2);
  if (p3.cmpn(0) === 0) return b3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m2 = p3.redSqr(), w3 = m2.redMul(p3), y3 = i.redMul(m2), S2 = b3.redSqr().redIAdd(w3).redISub(y3).redISub(y3), I2 = b3.redMul(y3.redISub(S2)).redISub(o2.redMul(w3)), N2 = this.z.redMul(p3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$3.prototype.dblp = function(t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (r2 = 0; r2 < t; r2++) i = i.dbl();
    return i;
  }
  var n2 = this.curve.a, o2 = this.curve.tinv, h2 = this.x, p3 = this.y, b3 = this.z, m2 = b3.redSqr().redSqr(), w3 = p3.redAdd(p3);
  for (r2 = 0; r2 < t; r2++) {
    var y3 = h2.redSqr(), S2 = w3.redSqr(), I2 = S2.redSqr(), N2 = y3.redAdd(y3).redIAdd(y3).redIAdd(n2.redMul(m2)), C2 = h2.redMul(S2), F2 = N2.redSqr().redISub(C2.redAdd(C2)), U2 = C2.redISub(F2), J2 = N2.redMul(U2);
    J2 = J2.redIAdd(J2).redISub(I2);
    var Bt2 = w3.redMul(b3);
    r2 + 1 < t && (m2 = m2.redMul(I2)), h2 = F2, b3 = Bt2, w3 = J2;
  }
  return this.curve.jpoint(h2, w3.redMul(o2), b3);
}, Tt$3.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt$3.prototype._zeroDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2), m2 = b3.redSqr().redISub(p3).redISub(p3), w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), t = m2, r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.x.redSqr(), S2 = this.y.redSqr(), I2 = S2.redSqr(), N2 = this.x.redAdd(S2).redSqr().redISub(y3).redISub(I2);
    N2 = N2.redIAdd(N2);
    var C2 = y3.redAdd(y3).redIAdd(y3), F2 = C2.redSqr(), U2 = I2.redIAdd(I2);
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), t = F2.redISub(N2).redISub(N2), r2 = C2.redMul(N2.redISub(t)).redISub(U2), i = this.y.redMul(this.z), i = i.redIAdd(i);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt$3.prototype._threeDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), m2 = b3.redSqr().redISub(p3).redISub(p3);
    t = m2;
    var w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.z.redSqr(), S2 = this.y.redSqr(), I2 = this.x.redMul(S2), N2 = this.x.redSub(y3).redMul(this.x.redAdd(y3));
    N2 = N2.redAdd(N2).redIAdd(N2);
    var C2 = I2.redIAdd(I2);
    C2 = C2.redIAdd(C2);
    var F2 = C2.redAdd(C2);
    t = N2.redSqr().redISub(F2), i = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y3);
    var U2 = S2.redSqr();
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), r2 = N2.redMul(C2.redISub(t)).redISub(U2);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt$3.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i = this.y, n2 = this.z, o2 = n2.redSqr().redSqr(), h2 = r2.redSqr(), p3 = i.redSqr(), b3 = h2.redAdd(h2).redIAdd(h2).redIAdd(t.redMul(o2)), m2 = r2.redAdd(r2);
  m2 = m2.redIAdd(m2);
  var w3 = m2.redMul(p3), y3 = b3.redSqr().redISub(w3.redAdd(w3)), S2 = w3.redISub(y3), I2 = p3.redSqr();
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = b3.redMul(S2).redISub(I2), C2 = i.redAdd(i).redMul(n2);
  return this.curve.jpoint(y3, N2, C2);
}, Tt$3.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i = this.z.redSqr(), n2 = r2.redSqr(), o2 = t.redAdd(t).redIAdd(t), h2 = o2.redSqr(), p3 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n2);
  p3 = p3.redIAdd(p3), p3 = p3.redAdd(p3).redIAdd(p3), p3 = p3.redISub(h2);
  var b3 = p3.redSqr(), m2 = n2.redIAdd(n2);
  m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2);
  var w3 = o2.redIAdd(p3).redSqr().redISub(h2).redISub(b3).redISub(m2), y3 = r2.redMul(w3);
  y3 = y3.redIAdd(y3), y3 = y3.redIAdd(y3);
  var S2 = this.x.redMul(b3).redISub(y3);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var I2 = this.y.redMul(w3.redMul(m2.redISub(w3)).redISub(p3.redMul(b3)));
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = this.z.redAdd(p3).redSqr().redISub(i).redISub(b3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$3.prototype.mul = function(t, r2) {
  return t = new K$3(t, r2), this.curve._wnafMul(this, t);
}, Tt$3.prototype.eq = function(t) {
  if (t.type === "affine") return this.eq(t.toJ());
  if (this === t) return true;
  var r2 = this.z.redSqr(), i = t.z.redSqr();
  if (this.x.redMul(i).redISub(t.x.redMul(r2)).cmpn(0) !== 0) return false;
  var n2 = r2.redMul(this.z), o2 = i.redMul(t.z);
  return this.y.redMul(o2).redISub(t.y.redMul(n2)).cmpn(0) === 0;
}, Tt$3.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i) === 0) return true;
  for (var n2 = t.clone(), o2 = this.curve.redN.redMul(r2); ; ) {
    if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0) return false;
    if (i.redIAdd(o2), this.x.cmp(i) === 0) return true;
  }
}, Tt$3.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt$3.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr$2 = cr$4(function(e, t) {
  var r2 = t;
  r2.base = Ze$3, r2.short = ka$2, r2.mont = null, r2.edwards = null;
}), Kr$2 = cr$4(function(e, t) {
  var r2 = t, i = Jt$4.assert;
  function n2(p3) {
    p3.type === "short" ? this.curve = new qr$2.short(p3) : p3.type === "edwards" ? this.curve = new qr$2.edwards(p3) : this.curve = new qr$2.mont(p3), this.g = this.curve.g, this.n = this.curve.n, this.hash = p3.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n2;
  function o2(p3, b3) {
    Object.defineProperty(r2, p3, { configurable: true, enumerable: true, get: function() {
      var m2 = new n2(b3);
      return Object.defineProperty(r2, p3, { configurable: true, enumerable: true, value: m2 }), m2;
    } });
  }
  o2("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se$3.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o2("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se$3.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o2("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se$3.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o2("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se$3.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o2("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se$3.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o2("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se$3.sha256, gRed: false, g: ["9"] }), o2("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se$3.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h2;
  try {
    h2 = null.crash();
  } catch {
    h2 = void 0;
  }
  o2("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se$3.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h2] });
});
function Re$3(e) {
  if (!(this instanceof Re$3)) return new Re$3(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe$3.toArray(e.entropy, e.entropyEnc || "hex"), r2 = fe$3.toArray(e.nonce, e.nonceEnc || "hex"), i = fe$3.toArray(e.pers, e.persEnc || "hex");
  Pi$2(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i);
}
var Rf$2 = Re$3;
Re$3.prototype._init = function(t, r2, i) {
  var n2 = t.concat(r2).concat(i);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o2 = 0; o2 < this.V.length; o2++) this.K[o2] = 0, this.V[o2] = 1;
  this._update(n2), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re$3.prototype._hmac = function() {
  return new se$3.hmac(this.hash, this.K);
}, Re$3.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re$3.prototype.reseed = function(t, r2, i, n2) {
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), t = fe$3.toArray(t, r2), i = fe$3.toArray(i, n2), Pi$2(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i || [])), this._reseed = 1;
}, Re$3.prototype.generate = function(t, r2, i, n2) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), i && (i = fe$3.toArray(i, n2 || "hex"), this._update(i));
  for (var o2 = []; o2.length < t; ) this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
  var h2 = o2.slice(0, t);
  return this._update(i), this._reseed++, fe$3.encode(h2, r2);
};
var Fi$3 = Jt$4.assert;
function kt$3(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti$2 = kt$3;
kt$3.fromPublic = function(t, r2, i) {
  return r2 instanceof kt$3 ? r2 : new kt$3(t, { pub: r2, pubEnc: i });
}, kt$3.fromPrivate = function(t, r2, i) {
  return r2 instanceof kt$3 ? r2 : new kt$3(t, { priv: r2, privEnc: i });
}, kt$3.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt$3.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt$3.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt$3.prototype._importPrivate = function(t, r2) {
  this.priv = new K$3(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt$3.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi$3(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi$3(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt$3.prototype.derive = function(t) {
  return t.validate() || Fi$3(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt$3.prototype.sign = function(t, r2, i) {
  return this.ec.sign(t, this, r2, i);
}, kt$3.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt$3.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa$2 = Jt$4.assert;
function Hr$2(e, t) {
  if (e instanceof Hr$2) return e;
  this._importDER(e, t) || (qa$2(e.r && e.s, "Signature without r or s"), this.r = new K$3(e.r, 16), this.s = new K$3(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr$3 = Hr$2;
function Ka$2() {
  this.place = 0;
}
function Ui$3(e, t) {
  var r2 = e[t.place++];
  if (!(r2 & 128)) return r2;
  var i = r2 & 15;
  if (i === 0 || i > 4) return false;
  for (var n2 = 0, o2 = 0, h2 = t.place; o2 < i; o2++, h2++) n2 <<= 8, n2 |= e[h2], n2 >>>= 0;
  return n2 <= 127 ? false : (t.place = h2, n2);
}
function Of$2(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; ) t++;
  return t === 0 ? e : e.slice(t);
}
Hr$2.prototype._importDER = function(t, r2) {
  t = Jt$4.toArray(t, r2);
  var i = new Ka$2();
  if (t[i.place++] !== 48) return false;
  var n2 = Ui$3(t, i);
  if (n2 === false || n2 + i.place !== t.length || t[i.place++] !== 2) return false;
  var o2 = Ui$3(t, i);
  if (o2 === false) return false;
  var h2 = t.slice(i.place, o2 + i.place);
  if (i.place += o2, t[i.place++] !== 2) return false;
  var p3 = Ui$3(t, i);
  if (p3 === false || t.length !== p3 + i.place) return false;
  var b3 = t.slice(i.place, p3 + i.place);
  if (h2[0] === 0) if (h2[1] & 128) h2 = h2.slice(1);
  else return false;
  if (b3[0] === 0) if (b3[1] & 128) b3 = b3.slice(1);
  else return false;
  return this.r = new K$3(h2), this.s = new K$3(b3), this.recoveryParam = null, true;
};
function ki$2(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; ) e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Hr$2.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i[0] & 128 && (i = [0].concat(i)), r2 = Of$2(r2), i = Of$2(i); !i[0] && !(i[1] & 128); ) i = i.slice(1);
  var n2 = [2];
  ki$2(n2, r2.length), n2 = n2.concat(r2), n2.push(2), ki$2(n2, i.length);
  var o2 = n2.concat(i), h2 = [48];
  return ki$2(h2, o2.length), h2 = h2.concat(o2), Jt$4.encode(h2, t);
};
var Ha$2 = function() {
  throw new Error("unsupported");
}, Pf$2 = Jt$4.assert;
function $t$3(e) {
  if (!(this instanceof $t$3)) return new $t$3(e);
  typeof e == "string" && (Pf$2(Object.prototype.hasOwnProperty.call(Kr$2, e), "Unknown curve " + e), e = Kr$2[e]), e instanceof Kr$2.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za$2 = $t$3;
$t$3.prototype.keyPair = function(t) {
  return new Ti$2(this, t);
}, $t$3.prototype.keyFromPrivate = function(t, r2) {
  return Ti$2.fromPrivate(this, t, r2);
}, $t$3.prototype.keyFromPublic = function(t, r2) {
  return Ti$2.fromPublic(this, t, r2);
}, $t$3.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf$2({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha$2(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i = this.n.byteLength(), n2 = this.n.sub(new K$3(2)); ; ) {
    var o2 = new K$3(r2.generate(i));
    if (!(o2.cmp(n2) > 0)) return o2.iaddn(1), this.keyFromPrivate(o2);
  }
}, $t$3.prototype._truncateToN = function(t, r2) {
  var i = t.byteLength() * 8 - this.n.bitLength();
  return i > 0 && (t = t.ushrn(i)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t$3.prototype.sign = function(t, r2, i, n2) {
  typeof i == "object" && (n2 = i, i = null), n2 || (n2 = {}), r2 = this.keyFromPrivate(r2, i), t = this._truncateToN(new K$3(t, 16));
  for (var o2 = this.n.byteLength(), h2 = r2.getPrivate().toArray("be", o2), p3 = t.toArray("be", o2), b3 = new Rf$2({ hash: this.hash, entropy: h2, nonce: p3, pers: n2.pers, persEnc: n2.persEnc || "utf8" }), m2 = this.n.sub(new K$3(1)), w3 = 0; ; w3++) {
    var y3 = n2.k ? n2.k(w3) : new K$3(b3.generate(this.n.byteLength()));
    if (y3 = this._truncateToN(y3, true), !(y3.cmpn(1) <= 0 || y3.cmp(m2) >= 0)) {
      var S2 = this.g.mul(y3);
      if (!S2.isInfinity()) {
        var I2 = S2.getX(), N2 = I2.umod(this.n);
        if (N2.cmpn(0) !== 0) {
          var C2 = y3.invm(this.n).mul(N2.mul(r2.getPrivate()).iadd(t));
          if (C2 = C2.umod(this.n), C2.cmpn(0) !== 0) {
            var F2 = (S2.getY().isOdd() ? 1 : 0) | (I2.cmp(N2) !== 0 ? 2 : 0);
            return n2.canonical && C2.cmp(this.nh) > 0 && (C2 = this.n.sub(C2), F2 ^= 1), new zr$3({ r: N2, s: C2, recoveryParam: F2 });
          }
        }
      }
    }
  }
}, $t$3.prototype.verify = function(t, r2, i, n2) {
  t = this._truncateToN(new K$3(t, 16)), i = this.keyFromPublic(i, n2), r2 = new zr$3(r2, "hex");
  var o2 = r2.r, h2 = r2.s;
  if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0 || h2.cmpn(1) < 0 || h2.cmp(this.n) >= 0) return false;
  var p3 = h2.invm(this.n), b3 = p3.mul(t).umod(this.n), m2 = p3.mul(o2).umod(this.n), w3;
  return this.curve._maxwellTrick ? (w3 = this.g.jmulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.eqXToP(o2)) : (w3 = this.g.mulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.getX().umod(this.n).cmp(o2) === 0);
}, $t$3.prototype.recoverPubKey = function(e, t, r2, i) {
  Pf$2((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr$3(t, i);
  var n2 = this.n, o2 = new K$3(e), h2 = t.r, p3 = t.s, b3 = r2 & 1, m2 = r2 >> 1;
  if (h2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m2) throw new Error("Unable to find sencond key candinate");
  m2 ? h2 = this.curve.pointFromX(h2.add(this.curve.n), b3) : h2 = this.curve.pointFromX(h2, b3);
  var w3 = t.r.invm(n2), y3 = n2.sub(o2).mul(w3).umod(n2), S2 = p3.mul(w3).umod(n2);
  return this.g.mulAdd(y3, h2, S2);
}, $t$3.prototype.getKeyRecoveryParam = function(e, t, r2, i) {
  if (t = new zr$3(t, i), t.recoveryParam !== null) return t.recoveryParam;
  for (var n2 = 0; n2 < 4; n2++) {
    var o2;
    try {
      o2 = this.recoverPubKey(e, t, n2);
    } catch {
      continue;
    }
    if (o2.eq(r2)) return n2;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La$3 = cr$4(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt$4, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr$2, r2.curves = Kr$2, r2.ec = za$2, r2.eddsa = null;
});
La$3.ec;
var Ff$2;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff$2 || (Ff$2 = {}));
const go$2 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function tr$3(e, t) {
  const { message: r2, code: i } = go$2[e];
  return { message: r2, code: i };
}
function Er$2(e, t) {
  return Array.isArray(e) ? true : false;
}
var cjs = {};
var heartbeat$2 = {};
var types = {};
var heartbeat$1 = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esm);
var hasRequiredHeartbeat$2;
function requireHeartbeat$2() {
  if (hasRequiredHeartbeat$2) return heartbeat$1;
  hasRequiredHeartbeat$2 = 1;
  Object.defineProperty(heartbeat$1, "__esModule", { value: true });
  heartbeat$1.IHeartBeat = void 0;
  const events_1 = require$$0;
  class IHeartBeat extends events_1.IEvents {
    constructor(opts) {
      super();
    }
  }
  heartbeat$1.IHeartBeat = IHeartBeat;
  return heartbeat$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireHeartbeat$2(), exports);
  })(types);
  return types;
}
var constants = {};
var heartbeat = {};
var hasRequiredHeartbeat$1;
function requireHeartbeat$1() {
  if (hasRequiredHeartbeat$1) return heartbeat;
  hasRequiredHeartbeat$1 = 1;
  Object.defineProperty(heartbeat, "__esModule", { value: true });
  heartbeat.HEARTBEAT_EVENTS = heartbeat.HEARTBEAT_INTERVAL = void 0;
  const time_1 = cjs$1;
  heartbeat.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
  heartbeat.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  };
  return heartbeat;
}
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireHeartbeat$1(), exports);
  })(constants);
  return constants;
}
var hasRequiredHeartbeat;
function requireHeartbeat() {
  if (hasRequiredHeartbeat) return heartbeat$2;
  hasRequiredHeartbeat = 1;
  Object.defineProperty(heartbeat$2, "__esModule", { value: true });
  heartbeat$2.HeartBeat = void 0;
  const tslib_1 = require$$0$1;
  const events_1 = eventsExports;
  const time_1 = cjs$1;
  const types_1 = requireTypes();
  const constants_1 = requireConstants();
  class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
      super(opts);
      this.events = new events_1.EventEmitter();
      this.interval = constants_1.HEARTBEAT_INTERVAL;
      this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const heartbeat2 = new HeartBeat(opts);
        yield heartbeat2.init();
        return heartbeat2;
      });
    }
    init() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(event, listener) {
      this.events.on(event, listener);
    }
    once(event, listener) {
      this.events.once(event, listener);
    }
    off(event, listener) {
      this.events.off(event, listener);
    }
    removeListener(event, listener) {
      this.events.removeListener(event, listener);
    }
    initialize() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
  }
  heartbeat$2.HeartBeat = HeartBeat;
  return heartbeat$2;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$1;
  tslib_1.__exportStar(requireHeartbeat(), exports);
  tslib_1.__exportStar(requireTypes(), exports);
  tslib_1.__exportStar(requireConstants(), exports);
})(cjs);
class n extends IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
class h extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}
class a {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
}
let u$1 = class u extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
let g$2 = class g extends IEvents {
  constructor(s) {
    super();
  }
};
let p$2 = class p {
  constructor(s, t, o2, M2) {
    this.core = s, this.logger = t, this.name = o2;
  }
};
let d$1 = class d extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
let E$2 = class E extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
};
let y$1 = class y {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
let v$3 = class v {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
let b$1 = class b {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
let w$1 = class w {
  constructor(s) {
    this.client = s;
  }
};
const Ir$2 = ":";
function dn$1(e) {
  const [t, r2] = e.split(Ir$2);
  return { namespace: t, reference: r2 };
}
function _r$1(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
var Qo = Object.defineProperty, bn = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Go = Object.prototype.propertyIsEnumerable, yn = (e, t, r2) => t in e ? Qo(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2, wn = (e, t) => {
  for (var r2 in t || (t = {})) Jo.call(t, r2) && yn(e, r2, t[r2]);
  if (bn) for (var r2 of bn(t)) Go.call(t, r2) && yn(e, r2, t[r2]);
  return e;
};
const xn = "ReactNative", qt$1 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, En = "js";
function pi() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function er$1() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === xn;
}
function pr$1() {
  return !pi() && !!getNavigator_1() && !!getDocument_1();
}
function We$2() {
  return er$1() ? qt$1.reactNative : pi() ? qt$1.node : pr$1() ? qt$1.browser : qt$1.unknown;
}
function Wo() {
  var e;
  try {
    return er$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
  } catch {
    return;
  }
}
function Sn(e, t) {
  let r2 = queryString.parse(e);
  return r2 = wn(wn({}, r2), t), e = queryString.stringify(r2), e;
}
function Xo() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function Nn() {
  if (We$2() === qt$1.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r2, Version: i } = global.Platform;
    return [r2, i].join("-");
  }
  const e = detect();
  if (e === null) return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function In() {
  var e;
  const t = We$2();
  return t === qt$1.browser ? [t, ((e = getLocation_1()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function _n(e, t, r2) {
  const i = Nn(), n2 = In();
  return [[e, t].join("-"), [En, r2].join("-"), i, n2].join("/");
}
function $o({ protocol: e, version: t, relayUrl: r2, sdkVersion: i, auth: n2, projectId: o2, useOnCloseEvent: h2, bundleId: p3 }) {
  const b3 = r2.split("?"), m2 = _n(e, t, i), w3 = { auth: n2, ua: m2, projectId: o2, useOnCloseEvent: h2 || void 0, origin: p3 || void 0 }, y3 = Sn(b3[1] || "", w3);
  return b3[0] + "?" + y3;
}
function _e$1(e, t) {
  return e.filter((r2) => t.includes(r2)).length === e.length;
}
function i0(e) {
  return Object.fromEntries(e.entries());
}
function n0(e) {
  return new Map(Object.entries(e));
}
function a0(e = cjs$1.FIVE_MINUTES, t) {
  const r2 = cjs$1.toMiliseconds(e || cjs$1.FIVE_MINUTES);
  let i, n2, o2;
  return { resolve: (h2) => {
    o2 && i && (clearTimeout(o2), i(h2));
  }, reject: (h2) => {
    o2 && n2 && (clearTimeout(o2), n2(h2));
  }, done: () => new Promise((h2, p3) => {
    o2 = setTimeout(() => {
      p3(new Error(t));
    }, r2), i = h2, n2 = p3;
  }) };
}
function u0(e, t, r2) {
  return new Promise(async (i, n2) => {
    const o2 = setTimeout(() => n2(new Error(r2)), t);
    try {
      const h2 = await e;
      i(h2);
    } catch (h2) {
      n2(h2);
    }
    clearTimeout(o2);
  });
}
function vi(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function h0(e) {
  return vi("topic", e);
}
function c0(e) {
  return vi("id", e);
}
function l0(e) {
  const [t, r2] = e.split(":"), i = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r2 == "string") i.topic = r2;
  else if (t === "id" && Number.isInteger(Number(r2))) i.id = Number(r2);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r2}`);
  return i;
}
function d0(e, t) {
  return cjs$1.fromMiliseconds(Date.now() + cjs$1.toMiliseconds(e));
}
function p0(e) {
  return Date.now() >= cjs$1.toMiliseconds(e);
}
function v0(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
function ge$3(e = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e, ...t])];
}
async function m0({ id: e, topic: t, wcDeepLink: r2 }) {
  try {
    if (!r2) return;
    const i = typeof r2 == "string" ? JSON.parse(r2) : r2;
    let n2 = i == null ? void 0 : i.href;
    if (typeof n2 != "string") return;
    n2.endsWith("/") && (n2 = n2.slice(0, -1));
    const o2 = `${n2}/wc?requestId=${e}&sessionTopic=${t}`, h2 = We$2();
    h2 === qt$1.browser ? o2.startsWith("https://") || o2.startsWith("http://") ? window.open(o2, "_blank", "noreferrer noopener") : window.open(o2, "_self", "noreferrer noopener") : h2 === qt$1.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o2);
  } catch (i) {
    console.error(i);
  }
}
async function g0(e, t) {
  try {
    return await e.getItem(t) || (pr$1() ? localStorage.getItem(t) : void 0);
  } catch (r2) {
    console.error(r2);
  }
}
var On$1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0$1(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e).forEach(function(i) {
    var n2 = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r2, i, n2.get ? n2 : { enumerable: true, get: function() {
      return e[i];
    } });
  }), r2;
}
var Pn$1 = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i = typeof window == "object", n2 = i ? window : {};
    n2.JS_SHA3_NO_WINDOW && (i = false);
    var o2 = !i && typeof self == "object", h2 = !n2.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h2 ? n2 = On$1 : o2 && (n2 = self);
    var p3 = !n2.JS_SHA3_NO_COMMON_JS && true && e.exports, b3 = !n2.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m2 = "0123456789abcdef".split(""), w3 = [31, 7936, 2031616, 520093696], y3 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], I2 = [6, 1536, 393216, 100663296], N2 = [0, 8, 16, 24], C2 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F2 = [224, 256, 384, 512], U2 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n2.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u3) {
      return Object.prototype.toString.call(u3) === "[object Array]";
    }), b3 && (n2.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u3) {
      return typeof u3 == "object" && u3.buffer && u3.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u3, E3, _2) {
      return function(B) {
        return new s(u3, E3, u3).update(B)[_2]();
      };
    }, H = function(u3, E3, _2) {
      return function(B, R) {
        return new s(u3, E3, R).update(B)[_2]();
      };
    }, z2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["cshake" + u3].update(B, R, T2, P2)[_2]();
      };
    }, Pt2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["kmac" + u3].update(B, R, T2, P2)[_2]();
      };
    }, W = function(u3, E3, _2, B) {
      for (var R = 0; R < J2.length; ++R) {
        var T2 = J2[R];
        u3[T2] = E3(_2, B, T2);
      }
      return u3;
    }, Rt2 = function(u3, E3) {
      var _2 = G(u3, E3, "hex");
      return _2.create = function() {
        return new s(u3, E3, u3);
      }, _2.update = function(B) {
        return _2.create().update(B);
      }, W(_2, G, u3, E3);
    }, Yt3 = function(u3, E3) {
      var _2 = H(u3, E3, "hex");
      return _2.create = function(B) {
        return new s(u3, E3, B);
      }, _2.update = function(B, R) {
        return _2.create(R).update(B);
      }, W(_2, H, u3, E3);
    }, Y = function(u3, E3) {
      var _2 = Bt2[u3], B = z2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return !T2 && !P2 ? f2["shake" + u3].create(R) : new s(u3, E3, R).bytepad([T2, P2], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(T2, P2, O2).update(R);
      }, W(B, z2, u3, E3);
    }, Vt2 = function(u3, E3) {
      var _2 = Bt2[u3], B = Pt2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return new v3(u3, E3, T2).bytepad(["KMAC", P2], _2).bytepad([R], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(R, P2, O2).update(T2);
      }, W(B, Pt2, u3, E3);
    }, A2 = [{ name: "keccak", padding: S2, bits: F2, createMethod: Rt2 }, { name: "sha3", padding: I2, bits: F2, createMethod: Rt2 }, { name: "shake", padding: w3, bits: U2, createMethod: Yt3 }, { name: "cshake", padding: y3, bits: U2, createMethod: Y }, { name: "kmac", padding: y3, bits: U2, createMethod: Vt2 }], f2 = {}, a2 = [], c2 = 0; c2 < A2.length; ++c2) for (var d3 = A2[c2], g3 = d3.bits, x = 0; x < g3.length; ++x) {
      var M2 = d3.name + "_" + g3[x];
      if (a2.push(M2), f2[M2] = d3.createMethod(g3[x], d3.padding), d3.name !== "sha3") {
        var l2 = d3.name + g3[x];
        a2.push(l2), f2[l2] = f2[M2];
      }
    }
    function s(u3, E3, _2) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _2, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u3 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _2 >> 5, this.extraBytes = (_2 & 31) >> 3;
      for (var B = 0; B < 50; ++B) this.s[B] = 0;
    }
    s.prototype.update = function(u3) {
      if (this.finalized) throw new Error(r2);
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      for (var B = this.blocks, R = this.byteCount, T2 = u3.length, P2 = this.blockCount, O2 = 0, Ct2 = this.s, D2, q2; O2 < T2; ) {
        if (this.reset) for (this.reset = false, B[0] = this.block, D2 = 1; D2 < P2 + 1; ++D2) B[D2] = 0;
        if (E3) for (D2 = this.start; O2 < T2 && D2 < R; ++O2) B[D2 >> 2] |= u3[O2] << N2[D2++ & 3];
        else for (D2 = this.start; O2 < T2 && D2 < R; ++O2) q2 = u3.charCodeAt(O2), q2 < 128 ? B[D2 >> 2] |= q2 << N2[D2++ & 3] : q2 < 2048 ? (B[D2 >> 2] |= (192 | q2 >> 6) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : q2 < 55296 || q2 >= 57344 ? (B[D2 >> 2] |= (224 | q2 >> 12) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : (q2 = 65536 + ((q2 & 1023) << 10 | u3.charCodeAt(++O2) & 1023), B[D2 >> 2] |= (240 | q2 >> 18) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 12 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]);
        if (this.lastByteIndex = D2, D2 >= R) {
          for (this.start = D2 - R, this.block = B[P2], D2 = 0; D2 < P2; ++D2) Ct2[D2] ^= B[D2];
          k2(Ct2), this.reset = true;
        } else this.start = D2;
      }
      return this;
    }, s.prototype.encode = function(u3, E3) {
      var _2 = u3 & 255, B = 1, R = [_2];
      for (u3 = u3 >> 8, _2 = u3 & 255; _2 > 0; ) R.unshift(_2), u3 = u3 >> 8, _2 = u3 & 255, ++B;
      return E3 ? R.push(B) : R.unshift(B), this.update(R), R.length;
    }, s.prototype.encodeString = function(u3) {
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      var B = 0, R = u3.length;
      if (E3) B = R;
      else for (var T2 = 0; T2 < u3.length; ++T2) {
        var P2 = u3.charCodeAt(T2);
        P2 < 128 ? B += 1 : P2 < 2048 ? B += 2 : P2 < 55296 || P2 >= 57344 ? B += 3 : (P2 = 65536 + ((P2 & 1023) << 10 | u3.charCodeAt(++T2) & 1023), B += 4);
      }
      return B += this.encode(B * 8), this.update(u3), B;
    }, s.prototype.bytepad = function(u3, E3) {
      for (var _2 = this.encode(E3), B = 0; B < u3.length; ++B) _2 += this.encodeString(u3[B]);
      var R = E3 - _2 % E3, T2 = [];
      return T2.length = R, this.update(T2), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u3 = this.blocks, E3 = this.lastByteIndex, _2 = this.blockCount, B = this.s;
        if (u3[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount) for (u3[0] = u3[_2], E3 = 1; E3 < _2 + 1; ++E3) u3[E3] = 0;
        for (u3[_2 - 1] |= 2147483648, E3 = 0; E3 < _2; ++E3) B[E3] ^= u3[E3];
        k2(B);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = "", O2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15] + m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15] + m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15] + m2[O2 >> 28 & 15] + m2[O2 >> 24 & 15];
        T2 % u3 === 0 && (k2(E3), R = 0);
      }
      return B && (O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15], B > 1 && (P2 += m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15]), B > 2 && (P2 += m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15])), P2;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = this.outputBits >> 3, O2;
      B ? O2 = new ArrayBuffer(_2 + 1 << 2) : O2 = new ArrayBuffer(P2);
      for (var Ct2 = new Uint32Array(O2); T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) Ct2[T2] = E3[R];
        T2 % u3 === 0 && k2(E3);
      }
      return B && (Ct2[R] = E3[R], O2 = O2.slice(0, P2)), O2;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = [], O2, Ct2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, P2[O2 + 1] = Ct2 >> 8 & 255, P2[O2 + 2] = Ct2 >> 16 & 255, P2[O2 + 3] = Ct2 >> 24 & 255;
        T2 % u3 === 0 && k2(E3);
      }
      return B && (O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, B > 1 && (P2[O2 + 1] = Ct2 >> 8 & 255), B > 2 && (P2[O2 + 2] = Ct2 >> 16 & 255)), P2;
    };
    function v3(u3, E3, _2) {
      s.call(this, u3, E3, _2);
    }
    v3.prototype = new s(), v3.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k2 = function(u3) {
      var E3, _2, B, R, T2, P2, O2, Ct2, D2, q2, De2, X2, Z2, Fe2, $2, tt2, Te, et2, rt2, Ue2, it2, nt2, ke2, ft2, ot2, qe2, st2, at2, Ke2, ut2, ht2, He2, ct2, lt2, ze2, dt2, pt2, Le, vt2, mt2, je2, gt2, At2, Qe2, bt2, yt2, Je2, wt2, xt2, Ge2, Mt2, Et2, Ye2, St2, Nt2, Ve2, It2, _t2, Me2, Ee2, Se2, Ne, Ie;
      for (B = 0; B < 48; B += 2) R = u3[0] ^ u3[10] ^ u3[20] ^ u3[30] ^ u3[40], T2 = u3[1] ^ u3[11] ^ u3[21] ^ u3[31] ^ u3[41], P2 = u3[2] ^ u3[12] ^ u3[22] ^ u3[32] ^ u3[42], O2 = u3[3] ^ u3[13] ^ u3[23] ^ u3[33] ^ u3[43], Ct2 = u3[4] ^ u3[14] ^ u3[24] ^ u3[34] ^ u3[44], D2 = u3[5] ^ u3[15] ^ u3[25] ^ u3[35] ^ u3[45], q2 = u3[6] ^ u3[16] ^ u3[26] ^ u3[36] ^ u3[46], De2 = u3[7] ^ u3[17] ^ u3[27] ^ u3[37] ^ u3[47], X2 = u3[8] ^ u3[18] ^ u3[28] ^ u3[38] ^ u3[48], Z2 = u3[9] ^ u3[19] ^ u3[29] ^ u3[39] ^ u3[49], E3 = X2 ^ (P2 << 1 | O2 >>> 31), _2 = Z2 ^ (O2 << 1 | P2 >>> 31), u3[0] ^= E3, u3[1] ^= _2, u3[10] ^= E3, u3[11] ^= _2, u3[20] ^= E3, u3[21] ^= _2, u3[30] ^= E3, u3[31] ^= _2, u3[40] ^= E3, u3[41] ^= _2, E3 = R ^ (Ct2 << 1 | D2 >>> 31), _2 = T2 ^ (D2 << 1 | Ct2 >>> 31), u3[2] ^= E3, u3[3] ^= _2, u3[12] ^= E3, u3[13] ^= _2, u3[22] ^= E3, u3[23] ^= _2, u3[32] ^= E3, u3[33] ^= _2, u3[42] ^= E3, u3[43] ^= _2, E3 = P2 ^ (q2 << 1 | De2 >>> 31), _2 = O2 ^ (De2 << 1 | q2 >>> 31), u3[4] ^= E3, u3[5] ^= _2, u3[14] ^= E3, u3[15] ^= _2, u3[24] ^= E3, u3[25] ^= _2, u3[34] ^= E3, u3[35] ^= _2, u3[44] ^= E3, u3[45] ^= _2, E3 = Ct2 ^ (X2 << 1 | Z2 >>> 31), _2 = D2 ^ (Z2 << 1 | X2 >>> 31), u3[6] ^= E3, u3[7] ^= _2, u3[16] ^= E3, u3[17] ^= _2, u3[26] ^= E3, u3[27] ^= _2, u3[36] ^= E3, u3[37] ^= _2, u3[46] ^= E3, u3[47] ^= _2, E3 = q2 ^ (R << 1 | T2 >>> 31), _2 = De2 ^ (T2 << 1 | R >>> 31), u3[8] ^= E3, u3[9] ^= _2, u3[18] ^= E3, u3[19] ^= _2, u3[28] ^= E3, u3[29] ^= _2, u3[38] ^= E3, u3[39] ^= _2, u3[48] ^= E3, u3[49] ^= _2, Fe2 = u3[0], $2 = u3[1], yt2 = u3[11] << 4 | u3[10] >>> 28, Je2 = u3[10] << 4 | u3[11] >>> 28, at2 = u3[20] << 3 | u3[21] >>> 29, Ke2 = u3[21] << 3 | u3[20] >>> 29, Ee2 = u3[31] << 9 | u3[30] >>> 23, Se2 = u3[30] << 9 | u3[31] >>> 23, gt2 = u3[40] << 18 | u3[41] >>> 14, At2 = u3[41] << 18 | u3[40] >>> 14, lt2 = u3[2] << 1 | u3[3] >>> 31, ze2 = u3[3] << 1 | u3[2] >>> 31, tt2 = u3[13] << 12 | u3[12] >>> 20, Te = u3[12] << 12 | u3[13] >>> 20, wt2 = u3[22] << 10 | u3[23] >>> 22, xt2 = u3[23] << 10 | u3[22] >>> 22, ut2 = u3[33] << 13 | u3[32] >>> 19, ht2 = u3[32] << 13 | u3[33] >>> 19, Ne = u3[42] << 2 | u3[43] >>> 30, Ie = u3[43] << 2 | u3[42] >>> 30, St2 = u3[5] << 30 | u3[4] >>> 2, Nt2 = u3[4] << 30 | u3[5] >>> 2, dt2 = u3[14] << 6 | u3[15] >>> 26, pt2 = u3[15] << 6 | u3[14] >>> 26, et2 = u3[25] << 11 | u3[24] >>> 21, rt2 = u3[24] << 11 | u3[25] >>> 21, Ge2 = u3[34] << 15 | u3[35] >>> 17, Mt2 = u3[35] << 15 | u3[34] >>> 17, He2 = u3[45] << 29 | u3[44] >>> 3, ct2 = u3[44] << 29 | u3[45] >>> 3, ft2 = u3[6] << 28 | u3[7] >>> 4, ot2 = u3[7] << 28 | u3[6] >>> 4, Ve2 = u3[17] << 23 | u3[16] >>> 9, It2 = u3[16] << 23 | u3[17] >>> 9, Le = u3[26] << 25 | u3[27] >>> 7, vt2 = u3[27] << 25 | u3[26] >>> 7, Ue2 = u3[36] << 21 | u3[37] >>> 11, it2 = u3[37] << 21 | u3[36] >>> 11, Et2 = u3[47] << 24 | u3[46] >>> 8, Ye2 = u3[46] << 24 | u3[47] >>> 8, Qe2 = u3[8] << 27 | u3[9] >>> 5, bt2 = u3[9] << 27 | u3[8] >>> 5, qe2 = u3[18] << 20 | u3[19] >>> 12, st2 = u3[19] << 20 | u3[18] >>> 12, _t2 = u3[29] << 7 | u3[28] >>> 25, Me2 = u3[28] << 7 | u3[29] >>> 25, mt2 = u3[38] << 8 | u3[39] >>> 24, je2 = u3[39] << 8 | u3[38] >>> 24, nt2 = u3[48] << 14 | u3[49] >>> 18, ke2 = u3[49] << 14 | u3[48] >>> 18, u3[0] = Fe2 ^ ~tt2 & et2, u3[1] = $2 ^ ~Te & rt2, u3[10] = ft2 ^ ~qe2 & at2, u3[11] = ot2 ^ ~st2 & Ke2, u3[20] = lt2 ^ ~dt2 & Le, u3[21] = ze2 ^ ~pt2 & vt2, u3[30] = Qe2 ^ ~yt2 & wt2, u3[31] = bt2 ^ ~Je2 & xt2, u3[40] = St2 ^ ~Ve2 & _t2, u3[41] = Nt2 ^ ~It2 & Me2, u3[2] = tt2 ^ ~et2 & Ue2, u3[3] = Te ^ ~rt2 & it2, u3[12] = qe2 ^ ~at2 & ut2, u3[13] = st2 ^ ~Ke2 & ht2, u3[22] = dt2 ^ ~Le & mt2, u3[23] = pt2 ^ ~vt2 & je2, u3[32] = yt2 ^ ~wt2 & Ge2, u3[33] = Je2 ^ ~xt2 & Mt2, u3[42] = Ve2 ^ ~_t2 & Ee2, u3[43] = It2 ^ ~Me2 & Se2, u3[4] = et2 ^ ~Ue2 & nt2, u3[5] = rt2 ^ ~it2 & ke2, u3[14] = at2 ^ ~ut2 & He2, u3[15] = Ke2 ^ ~ht2 & ct2, u3[24] = Le ^ ~mt2 & gt2, u3[25] = vt2 ^ ~je2 & At2, u3[34] = wt2 ^ ~Ge2 & Et2, u3[35] = xt2 ^ ~Mt2 & Ye2, u3[44] = _t2 ^ ~Ee2 & Ne, u3[45] = Me2 ^ ~Se2 & Ie, u3[6] = Ue2 ^ ~nt2 & Fe2, u3[7] = it2 ^ ~ke2 & $2, u3[16] = ut2 ^ ~He2 & ft2, u3[17] = ht2 ^ ~ct2 & ot2, u3[26] = mt2 ^ ~gt2 & lt2, u3[27] = je2 ^ ~At2 & ze2, u3[36] = Ge2 ^ ~Et2 & Qe2, u3[37] = Mt2 ^ ~Ye2 & bt2, u3[46] = Ee2 ^ ~Ne & St2, u3[47] = Se2 ^ ~Ie & Nt2, u3[8] = nt2 ^ ~Fe2 & tt2, u3[9] = ke2 ^ ~$2 & Te, u3[18] = He2 ^ ~ft2 & qe2, u3[19] = ct2 ^ ~ot2 & st2, u3[28] = gt2 ^ ~lt2 & dt2, u3[29] = At2 ^ ~ze2 & pt2, u3[38] = Et2 ^ ~Qe2 & yt2, u3[39] = Ye2 ^ ~bt2 & Je2, u3[48] = Ne ^ ~St2 & Ve2, u3[49] = Ie ^ ~Nt2 & It2, u3[0] ^= C2[B], u3[1] ^= C2[B + 1];
    };
    if (p3) e.exports = f2;
    else for (c2 = 0; c2 < a2.length; ++c2) n2[a2[c2]] = f2[a2[c2]];
  })();
})(Pn$1);
var b0 = Pn$1.exports;
const y0$1 = "logger/5.7.0";
let Dn$1 = false, Fn$1 = false;
const Cr$2 = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Tn$1 = Cr$2.default, gi$1 = null;
function w0$1() {
  try {
    const e = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test") throw new Error("bad normalize");
      } catch {
        e.push(t);
      }
    }), e.length) throw new Error("missing " + e.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
const Un$1 = w0$1();
var Ai$1;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai$1 || (Ai$1 = {}));
var re$2;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re$2 || (re$2 = {}));
const kn$1 = "0123456789abcdef";
let L$4 = class L2 {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i = t.toLowerCase();
    Cr$2[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn$1 > Cr$2[i]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(L2.levels.DEBUG, t);
  }
  info(...t) {
    this._log(L2.levels.INFO, t);
  }
  warn(...t) {
    this._log(L2.levels.WARNING, t);
  }
  makeError(t, r2, i) {
    if (Fn$1) return this.makeError("censored error", r2, {});
    r2 || (r2 = L2.errors.UNKNOWN_ERROR), i || (i = {});
    const n2 = [];
    Object.keys(i).forEach((b3) => {
      const m2 = i[b3];
      try {
        if (m2 instanceof Uint8Array) {
          let w3 = "";
          for (let y3 = 0; y3 < m2.length; y3++) w3 += kn$1[m2[y3] >> 4], w3 += kn$1[m2[y3] & 15];
          n2.push(b3 + "=Uint8Array(0x" + w3 + ")");
        } else n2.push(b3 + "=" + JSON.stringify(m2));
      } catch {
        n2.push(b3 + "=" + JSON.stringify(i[b3].toString()));
      }
    }), n2.push(`code=${r2}`), n2.push(`version=${this.version}`);
    const o2 = t;
    let h2 = "";
    switch (r2) {
      case re$2.NUMERIC_FAULT: {
        h2 = "NUMERIC_FAULT";
        const b3 = t;
        switch (b3) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h2 += "-" + b3;
            break;
          case "negative-power":
          case "negative-width":
            h2 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h2 += "-unbound-result";
            break;
        }
        break;
      }
      case re$2.CALL_EXCEPTION:
      case re$2.INSUFFICIENT_FUNDS:
      case re$2.MISSING_NEW:
      case re$2.NONCE_EXPIRED:
      case re$2.REPLACEMENT_UNDERPRICED:
      case re$2.TRANSACTION_REPLACED:
      case re$2.UNPREDICTABLE_GAS_LIMIT:
        h2 = r2;
        break;
    }
    h2 && (t += " [ See: https://links.ethers.org/v5-errors-" + h2 + " ]"), n2.length && (t += " (" + n2.join(", ") + ")");
    const p3 = new Error(t);
    return p3.reason = o2, p3.code = r2, Object.keys(i).forEach(function(b3) {
      p3[b3] = i[b3];
    }), p3;
  }
  throwError(t, r2, i) {
    throw this.makeError(t, r2, i);
  }
  throwArgumentError(t, r2, i) {
    return this.throwError(t, L2.errors.INVALID_ARGUMENT, { argument: r2, value: i });
  }
  assert(t, r2, i, n2) {
    t || this.throwError(r2, i, n2);
  }
  assertArgument(t, r2, i, n2) {
    t || this.throwArgumentError(r2, i, n2);
  }
  checkNormalize(t) {
    Un$1 && this.throwError("platform missing String.prototype.normalize", L2.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un$1 });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, L2.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, L2.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i) {
    i ? i = ": " + i : i = "", t < r2 && this.throwError("missing argument" + i, L2.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i, L2.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", L2.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", L2.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", L2.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi$1 || (gi$1 = new L2(y0$1)), gi$1;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", L2.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn$1) {
      if (!t) return;
      this.globalLogger().throwError("error censorship permanent", L2.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn$1 = !!t, Dn$1 = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr$2[t.toLowerCase()];
    if (r2 == null) {
      L2.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn$1 = r2;
  }
  static from(t) {
    return new L2(t);
  }
};
L$4.errors = re$2, L$4.levels = Ai$1;
const x0$1 = "bytes/5.7.0", Dt$2 = new L$4(x0$1);
function qn$1(e) {
  return !!e.toHexString;
}
function rr$2(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr$2(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function M0(e) {
  return Qt$1(e) && !(e.length % 2) || ir$2(e);
}
function Kn$1(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function ir$2(e) {
  if (e == null) return false;
  if (e.constructor === Uint8Array) return true;
  if (typeof e == "string" || !Kn$1(e.length) || e.length < 0) return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Kn$1(r2) || r2 < 0 || r2 >= 256) return false;
  }
  return true;
}
function Ot$2(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt$2.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; ) r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), rr$2(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn$1(e) && (e = e.toHexString()), Qt$1(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt$2.throwArgumentError("hex data is odd-length", "value", e));
    const i = [];
    for (let n2 = 0; n2 < r2.length; n2 += 2) i.push(parseInt(r2.substring(n2, n2 + 2), 16));
    return rr$2(new Uint8Array(i));
  }
  return ir$2(e) ? rr$2(new Uint8Array(e)) : Dt$2.throwArgumentError("invalid arrayify value", "value", e);
}
function E0(e) {
  const t = e.map((n2) => Ot$2(n2)), r2 = t.reduce((n2, o2) => n2 + o2.length, 0), i = new Uint8Array(r2);
  return t.reduce((n2, o2) => (i.set(o2, n2), n2 + o2.length), 0), rr$2(i);
}
function S0(e, t) {
  e = Ot$2(e), e.length > t && Dt$2.throwArgumentError("value out of range", "value", arguments[0]);
  const r2 = new Uint8Array(t);
  return r2.set(e, t - e.length), rr$2(r2);
}
function Qt$1(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
const bi$1 = "0123456789abcdef";
function Kt$2(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt$2.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; ) r2 = bi$1[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn$1(e)) return e.toHexString();
  if (Qt$1(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt$2.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (ir$2(e)) {
    let r2 = "0x";
    for (let i = 0; i < e.length; i++) {
      let n2 = e[i];
      r2 += bi$1[(n2 & 240) >> 4] + bi$1[n2 & 15];
    }
    return r2;
  }
  return Dt$2.throwArgumentError("invalid hexlify value", "value", e);
}
function N0(e) {
  if (typeof e != "string") e = Kt$2(e);
  else if (!Qt$1(e) || e.length % 2) return null;
  return (e.length - 2) / 2;
}
function Hn(e, t, r2) {
  return typeof e != "string" ? e = Kt$2(e) : (!Qt$1(e) || e.length % 2) && Dt$2.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, r2 != null ? "0x" + e.substring(t, 2 + 2 * r2) : "0x" + e.substring(t);
}
function oe$1(e, t) {
  for (typeof e != "string" ? e = Kt$2(e) : Qt$1(e) || Dt$2.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt$2.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; ) e = "0x0" + e.substring(2);
  return e;
}
function zn(e) {
  const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (M0(e)) {
    let r2 = Ot$2(e);
    r2.length === 64 ? (t.v = 27 + (r2[32] >> 7), r2[32] &= 127, t.r = Kt$2(r2.slice(0, 32)), t.s = Kt$2(r2.slice(32, 64))) : r2.length === 65 ? (t.r = Kt$2(r2.slice(0, 32)), t.s = Kt$2(r2.slice(32, 64)), t.v = r2[64]) : Dt$2.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Dt$2.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r2[32] |= 128), t._vs = Kt$2(r2.slice(32, 64));
  } else {
    if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, t._vs != null) {
      const n2 = S0(Ot$2(t._vs), 32);
      t._vs = Kt$2(n2);
      const o2 = n2[0] >= 128 ? 1 : 0;
      t.recoveryParam == null ? t.recoveryParam = o2 : t.recoveryParam !== o2 && Dt$2.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n2[0] &= 127;
      const h2 = Kt$2(n2);
      t.s == null ? t.s = h2 : t.s !== h2 && Dt$2.throwArgumentError("signature v mismatch _vs", "signature", e);
    }
    if (t.recoveryParam == null) t.v == null ? Dt$2.throwArgumentError("signature missing v and recoveryParam", "signature", e) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
    else if (t.v == null) t.v = 27 + t.recoveryParam;
    else {
      const n2 = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
      t.recoveryParam !== n2 && Dt$2.throwArgumentError("signature recoveryParam mismatch v", "signature", e);
    }
    t.r == null || !Qt$1(t.r) ? Dt$2.throwArgumentError("signature missing or invalid r", "signature", e) : t.r = oe$1(t.r, 32), t.s == null || !Qt$1(t.s) ? Dt$2.throwArgumentError("signature missing or invalid s", "signature", e) : t.s = oe$1(t.s, 32);
    const r2 = Ot$2(t.s);
    r2[0] >= 128 && Dt$2.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r2[0] |= 128);
    const i = Kt$2(r2);
    t._vs && (Qt$1(t._vs) || Dt$2.throwArgumentError("signature invalid _vs", "signature", e), t._vs = oe$1(t._vs, 32)), t._vs == null ? t._vs = i : t._vs !== i && Dt$2.throwArgumentError("signature _vs mismatch v and s", "signature", e);
  }
  return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function yi(e) {
  return "0x" + b0.keccak_256(Ot$2(e));
}
var Ln$1 = { exports: {} }, I0$1 = {}, _0$1 = Object.freeze({ __proto__: null, default: I0$1 }), B0$1 = A0$1(_0$1);
(function(e) {
  (function(t, r2) {
    function i(A2, f2) {
      if (!A2) throw new Error(f2 || "Assertion failed");
    }
    function n2(A2, f2) {
      A2.super_ = f2;
      var a2 = function() {
      };
      a2.prototype = f2.prototype, A2.prototype = new a2(), A2.prototype.constructor = A2;
    }
    function o2(A2, f2, a2) {
      if (o2.isBN(A2)) return A2;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A2 !== null && ((f2 === "le" || f2 === "be") && (a2 = f2, f2 = 10), this._init(A2 || 0, f2 || 10, a2 || "be"));
    }
    typeof t == "object" ? t.exports = o2 : r2.BN = o2, o2.BN = o2, o2.wordSize = 26;
    var h2;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h2 = window.Buffer : h2 = B0$1.Buffer;
    } catch {
    }
    o2.isBN = function(f2) {
      return f2 instanceof o2 ? true : f2 !== null && typeof f2 == "object" && f2.constructor.wordSize === o2.wordSize && Array.isArray(f2.words);
    }, o2.max = function(f2, a2) {
      return f2.cmp(a2) > 0 ? f2 : a2;
    }, o2.min = function(f2, a2) {
      return f2.cmp(a2) < 0 ? f2 : a2;
    }, o2.prototype._init = function(f2, a2, c2) {
      if (typeof f2 == "number") return this._initNumber(f2, a2, c2);
      if (typeof f2 == "object") return this._initArray(f2, a2, c2);
      a2 === "hex" && (a2 = 16), i(a2 === (a2 | 0) && a2 >= 2 && a2 <= 36), f2 = f2.toString().replace(/\s+/g, "");
      var d3 = 0;
      f2[0] === "-" && (d3++, this.negative = 1), d3 < f2.length && (a2 === 16 ? this._parseHex(f2, d3, c2) : (this._parseBase(f2, a2, d3), c2 === "le" && this._initArray(this.toArray(), a2, c2)));
    }, o2.prototype._initNumber = function(f2, a2, c2) {
      f2 < 0 && (this.negative = 1, f2 = -f2), f2 < 67108864 ? (this.words = [f2 & 67108863], this.length = 1) : f2 < 4503599627370496 ? (this.words = [f2 & 67108863, f2 / 67108864 & 67108863], this.length = 2) : (i(f2 < 9007199254740992), this.words = [f2 & 67108863, f2 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a2, c2);
    }, o2.prototype._initArray = function(f2, a2, c2) {
      if (i(typeof f2.length == "number"), f2.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f2.length / 3), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3, x, M2 = 0;
      if (c2 === "be") for (d3 = f2.length - 1, g3 = 0; d3 >= 0; d3 -= 3) x = f2[d3] | f2[d3 - 1] << 8 | f2[d3 - 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      else if (c2 === "le") for (d3 = 0, g3 = 0; d3 < f2.length; d3 += 3) x = f2[d3] | f2[d3 + 1] << 8 | f2[d3 + 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      return this._strip();
    };
    function p3(A2, f2) {
      var a2 = A2.charCodeAt(f2);
      if (a2 >= 48 && a2 <= 57) return a2 - 48;
      if (a2 >= 65 && a2 <= 70) return a2 - 55;
      if (a2 >= 97 && a2 <= 102) return a2 - 87;
      i(false, "Invalid character in " + A2);
    }
    function b3(A2, f2, a2) {
      var c2 = p3(A2, a2);
      return a2 - 1 >= f2 && (c2 |= p3(A2, a2 - 1) << 4), c2;
    }
    o2.prototype._parseHex = function(f2, a2, c2) {
      this.length = Math.ceil((f2.length - a2) / 6), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3 = 0, x = 0, M2;
      if (c2 === "be") for (d3 = f2.length - 1; d3 >= a2; d3 -= 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      else {
        var l2 = f2.length - a2;
        for (d3 = l2 % 2 === 0 ? a2 + 1 : a2; d3 < f2.length; d3 += 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      }
      this._strip();
    };
    function m2(A2, f2, a2, c2) {
      for (var d3 = 0, g3 = 0, x = Math.min(A2.length, a2), M2 = f2; M2 < x; M2++) {
        var l2 = A2.charCodeAt(M2) - 48;
        d3 *= c2, l2 >= 49 ? g3 = l2 - 49 + 10 : l2 >= 17 ? g3 = l2 - 17 + 10 : g3 = l2, i(l2 >= 0 && g3 < c2, "Invalid character"), d3 += g3;
      }
      return d3;
    }
    o2.prototype._parseBase = function(f2, a2, c2) {
      this.words = [0], this.length = 1;
      for (var d3 = 0, g3 = 1; g3 <= 67108863; g3 *= a2) d3++;
      d3--, g3 = g3 / a2 | 0;
      for (var x = f2.length - c2, M2 = x % d3, l2 = Math.min(x, x - M2) + c2, s = 0, v3 = c2; v3 < l2; v3 += d3) s = m2(f2, v3, v3 + d3, a2), this.imuln(g3), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M2 !== 0) {
        var k2 = 1;
        for (s = m2(f2, v3, f2.length, a2), v3 = 0; v3 < M2; v3++) k2 *= a2;
        this.imuln(k2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o2.prototype.copy = function(f2) {
      f2.words = new Array(this.length);
      for (var a2 = 0; a2 < this.length; a2++) f2.words[a2] = this.words[a2];
      f2.length = this.length, f2.negative = this.negative, f2.red = this.red;
    };
    function w3(A2, f2) {
      A2.words = f2.words, A2.length = f2.length, A2.negative = f2.negative, A2.red = f2.red;
    }
    if (o2.prototype._move = function(f2) {
      w3(f2, this);
    }, o2.prototype.clone = function() {
      var f2 = new o2(null);
      return this.copy(f2), f2;
    }, o2.prototype._expand = function(f2) {
      for (; this.length < f2; ) this.words[this.length++] = 0;
      return this;
    }, o2.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o2.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o2.prototype[Symbol.for("nodejs.util.inspect.custom")] = y3;
    } catch {
      o2.prototype.inspect = y3;
    }
    else o2.prototype.inspect = y3;
    function y3() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o2.prototype.toString = function(f2, a2) {
      f2 = f2 || 10, a2 = a2 | 0 || 1;
      var c2;
      if (f2 === 16 || f2 === "hex") {
        c2 = "";
        for (var d3 = 0, g3 = 0, x = 0; x < this.length; x++) {
          var M2 = this.words[x], l2 = ((M2 << d3 | g3) & 16777215).toString(16);
          g3 = M2 >>> 24 - d3 & 16777215, d3 += 2, d3 >= 26 && (d3 -= 26, x--), g3 !== 0 || x !== this.length - 1 ? c2 = S2[6 - l2.length] + l2 + c2 : c2 = l2 + c2;
        }
        for (g3 !== 0 && (c2 = g3.toString(16) + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f2 === (f2 | 0) && f2 >= 2 && f2 <= 36) {
        var s = I2[f2], v3 = N2[f2];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u3 = k2.modrn(v3).toString(f2);
          k2 = k2.idivn(v3), k2.isZero() ? c2 = u3 + c2 : c2 = S2[s - u3.length] + u3 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i(false, "Base should be between 2 and 36");
    }, o2.prototype.toNumber = function() {
      var f2 = this.words[0];
      return this.length === 2 ? f2 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f2 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f2 : f2;
    }, o2.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h2 && (o2.prototype.toBuffer = function(f2, a2) {
      return this.toArrayLike(h2, f2, a2);
    }), o2.prototype.toArray = function(f2, a2) {
      return this.toArrayLike(Array, f2, a2);
    };
    var C2 = function(f2, a2) {
      return f2.allocUnsafe ? f2.allocUnsafe(a2) : new f2(a2);
    };
    o2.prototype.toArrayLike = function(f2, a2, c2) {
      this._strip();
      var d3 = this.byteLength(), g3 = c2 || Math.max(1, d3);
      i(d3 <= g3, "byte array longer than desired length"), i(g3 > 0, "Requested array length <= 0");
      var x = C2(f2, g3), M2 = a2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M2](x, d3), x;
    }, o2.prototype._toArrayLikeLE = function(f2, a2) {
      for (var c2 = 0, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2++] = M2 & 255, c2 < f2.length && (f2[c2++] = M2 >> 8 & 255), c2 < f2.length && (f2[c2++] = M2 >> 16 & 255), x === 6 ? (c2 < f2.length && (f2[c2++] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 < f2.length) for (f2[c2++] = d3; c2 < f2.length; ) f2[c2++] = 0;
    }, o2.prototype._toArrayLikeBE = function(f2, a2) {
      for (var c2 = f2.length - 1, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2--] = M2 & 255, c2 >= 0 && (f2[c2--] = M2 >> 8 & 255), c2 >= 0 && (f2[c2--] = M2 >> 16 & 255), x === 6 ? (c2 >= 0 && (f2[c2--] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 >= 0) for (f2[c2--] = d3; c2 >= 0; ) f2[c2--] = 0;
    }, Math.clz32 ? o2.prototype._countBits = function(f2) {
      return 32 - Math.clz32(f2);
    } : o2.prototype._countBits = function(f2) {
      var a2 = f2, c2 = 0;
      return a2 >= 4096 && (c2 += 13, a2 >>>= 13), a2 >= 64 && (c2 += 7, a2 >>>= 7), a2 >= 8 && (c2 += 4, a2 >>>= 4), a2 >= 2 && (c2 += 2, a2 >>>= 2), c2 + a2;
    }, o2.prototype._zeroBits = function(f2) {
      if (f2 === 0) return 26;
      var a2 = f2, c2 = 0;
      return a2 & 8191 || (c2 += 13, a2 >>>= 13), a2 & 127 || (c2 += 7, a2 >>>= 7), a2 & 15 || (c2 += 4, a2 >>>= 4), a2 & 3 || (c2 += 2, a2 >>>= 2), a2 & 1 || c2++, c2;
    }, o2.prototype.bitLength = function() {
      var f2 = this.words[this.length - 1], a2 = this._countBits(f2);
      return (this.length - 1) * 26 + a2;
    };
    function F2(A2) {
      for (var f2 = new Array(A2.bitLength()), a2 = 0; a2 < f2.length; a2++) {
        var c2 = a2 / 26 | 0, d3 = a2 % 26;
        f2[a2] = A2.words[c2] >>> d3 & 1;
      }
      return f2;
    }
    o2.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f2 = 0, a2 = 0; a2 < this.length; a2++) {
        var c2 = this._zeroBits(this.words[a2]);
        if (f2 += c2, c2 !== 26) break;
      }
      return f2;
    }, o2.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o2.prototype.toTwos = function(f2) {
      return this.negative !== 0 ? this.abs().inotn(f2).iaddn(1) : this.clone();
    }, o2.prototype.fromTwos = function(f2) {
      return this.testn(f2 - 1) ? this.notn(f2).iaddn(1).ineg() : this.clone();
    }, o2.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o2.prototype.neg = function() {
      return this.clone().ineg();
    }, o2.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o2.prototype.iuor = function(f2) {
      for (; this.length < f2.length; ) this.words[this.length++] = 0;
      for (var a2 = 0; a2 < f2.length; a2++) this.words[a2] = this.words[a2] | f2.words[a2];
      return this._strip();
    }, o2.prototype.ior = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuor(f2);
    }, o2.prototype.or = function(f2) {
      return this.length > f2.length ? this.clone().ior(f2) : f2.clone().ior(this);
    }, o2.prototype.uor = function(f2) {
      return this.length > f2.length ? this.clone().iuor(f2) : f2.clone().iuor(this);
    }, o2.prototype.iuand = function(f2) {
      var a2;
      this.length > f2.length ? a2 = f2 : a2 = this;
      for (var c2 = 0; c2 < a2.length; c2++) this.words[c2] = this.words[c2] & f2.words[c2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.iand = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuand(f2);
    }, o2.prototype.and = function(f2) {
      return this.length > f2.length ? this.clone().iand(f2) : f2.clone().iand(this);
    }, o2.prototype.uand = function(f2) {
      return this.length > f2.length ? this.clone().iuand(f2) : f2.clone().iuand(this);
    }, o2.prototype.iuxor = function(f2) {
      var a2, c2;
      this.length > f2.length ? (a2 = this, c2 = f2) : (a2 = f2, c2 = this);
      for (var d3 = 0; d3 < c2.length; d3++) this.words[d3] = a2.words[d3] ^ c2.words[d3];
      if (this !== a2) for (; d3 < a2.length; d3++) this.words[d3] = a2.words[d3];
      return this.length = a2.length, this._strip();
    }, o2.prototype.ixor = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuxor(f2);
    }, o2.prototype.xor = function(f2) {
      return this.length > f2.length ? this.clone().ixor(f2) : f2.clone().ixor(this);
    }, o2.prototype.uxor = function(f2) {
      return this.length > f2.length ? this.clone().iuxor(f2) : f2.clone().iuxor(this);
    }, o2.prototype.inotn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = Math.ceil(f2 / 26) | 0, c2 = f2 % 26;
      this._expand(a2), c2 > 0 && a2--;
      for (var d3 = 0; d3 < a2; d3++) this.words[d3] = ~this.words[d3] & 67108863;
      return c2 > 0 && (this.words[d3] = ~this.words[d3] & 67108863 >> 26 - c2), this._strip();
    }, o2.prototype.notn = function(f2) {
      return this.clone().inotn(f2);
    }, o2.prototype.setn = function(f2, a2) {
      i(typeof f2 == "number" && f2 >= 0);
      var c2 = f2 / 26 | 0, d3 = f2 % 26;
      return this._expand(c2 + 1), a2 ? this.words[c2] = this.words[c2] | 1 << d3 : this.words[c2] = this.words[c2] & ~(1 << d3), this._strip();
    }, o2.prototype.iadd = function(f2) {
      var a2;
      if (this.negative !== 0 && f2.negative === 0) return this.negative = 0, a2 = this.isub(f2), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f2.negative !== 0) return f2.negative = 0, a2 = this.isub(f2), f2.negative = 1, a2._normSign();
      var c2, d3;
      this.length > f2.length ? (c2 = this, d3 = f2) : (c2 = f2, d3 = this);
      for (var g3 = 0, x = 0; x < d3.length; x++) a2 = (c2.words[x] | 0) + (d3.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      for (; g3 !== 0 && x < c2.length; x++) a2 = (c2.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      if (this.length = c2.length, g3 !== 0) this.words[this.length] = g3, this.length++;
      else if (c2 !== this) for (; x < c2.length; x++) this.words[x] = c2.words[x];
      return this;
    }, o2.prototype.add = function(f2) {
      var a2;
      return f2.negative !== 0 && this.negative === 0 ? (f2.negative = 0, a2 = this.sub(f2), f2.negative ^= 1, a2) : f2.negative === 0 && this.negative !== 0 ? (this.negative = 0, a2 = f2.sub(this), this.negative = 1, a2) : this.length > f2.length ? this.clone().iadd(f2) : f2.clone().iadd(this);
    }, o2.prototype.isub = function(f2) {
      if (f2.negative !== 0) {
        f2.negative = 0;
        var a2 = this.iadd(f2);
        return f2.negative = 1, a2._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f2), this.negative = 1, this._normSign();
      var c2 = this.cmp(f2);
      if (c2 === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d3, g3;
      c2 > 0 ? (d3 = this, g3 = f2) : (d3 = f2, g3 = this);
      for (var x = 0, M2 = 0; M2 < g3.length; M2++) a2 = (d3.words[M2] | 0) - (g3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      for (; x !== 0 && M2 < d3.length; M2++) a2 = (d3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      if (x === 0 && M2 < d3.length && d3 !== this) for (; M2 < d3.length; M2++) this.words[M2] = d3.words[M2];
      return this.length = Math.max(this.length, M2), d3 !== this && (this.negative = 1), this._strip();
    }, o2.prototype.sub = function(f2) {
      return this.clone().isub(f2);
    };
    function U2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative;
      var c2 = A2.length + f2.length | 0;
      a2.length = c2, c2 = c2 - 1 | 0;
      var d3 = A2.words[0] | 0, g3 = f2.words[0] | 0, x = d3 * g3, M2 = x & 67108863, l2 = x / 67108864 | 0;
      a2.words[0] = M2;
      for (var s = 1; s < c2; s++) {
        for (var v3 = l2 >>> 26, k2 = l2 & 67108863, u3 = Math.min(s, f2.length - 1), E3 = Math.max(0, s - A2.length + 1); E3 <= u3; E3++) {
          var _2 = s - E3 | 0;
          d3 = A2.words[_2] | 0, g3 = f2.words[E3] | 0, x = d3 * g3 + k2, v3 += x / 67108864 | 0, k2 = x & 67108863;
        }
        a2.words[s] = k2 | 0, l2 = v3 | 0;
      }
      return l2 !== 0 ? a2.words[s] = l2 | 0 : a2.length--, a2._strip();
    }
    var J2 = function(f2, a2, c2) {
      var d3 = f2.words, g3 = a2.words, x = c2.words, M2 = 0, l2, s, v3, k2 = d3[0] | 0, u3 = k2 & 8191, E3 = k2 >>> 13, _2 = d3[1] | 0, B = _2 & 8191, R = _2 >>> 13, T2 = d3[2] | 0, P2 = T2 & 8191, O2 = T2 >>> 13, Ct2 = d3[3] | 0, D2 = Ct2 & 8191, q2 = Ct2 >>> 13, De2 = d3[4] | 0, X2 = De2 & 8191, Z2 = De2 >>> 13, Fe2 = d3[5] | 0, $2 = Fe2 & 8191, tt2 = Fe2 >>> 13, Te = d3[6] | 0, et2 = Te & 8191, rt2 = Te >>> 13, Ue2 = d3[7] | 0, it2 = Ue2 & 8191, nt2 = Ue2 >>> 13, ke2 = d3[8] | 0, ft2 = ke2 & 8191, ot2 = ke2 >>> 13, qe2 = d3[9] | 0, st2 = qe2 & 8191, at2 = qe2 >>> 13, Ke2 = g3[0] | 0, ut2 = Ke2 & 8191, ht2 = Ke2 >>> 13, He2 = g3[1] | 0, ct2 = He2 & 8191, lt2 = He2 >>> 13, ze2 = g3[2] | 0, dt2 = ze2 & 8191, pt2 = ze2 >>> 13, Le = g3[3] | 0, vt2 = Le & 8191, mt2 = Le >>> 13, je2 = g3[4] | 0, gt2 = je2 & 8191, At2 = je2 >>> 13, Qe2 = g3[5] | 0, bt2 = Qe2 & 8191, yt2 = Qe2 >>> 13, Je2 = g3[6] | 0, wt2 = Je2 & 8191, xt2 = Je2 >>> 13, Ge2 = g3[7] | 0, Mt2 = Ge2 & 8191, Et2 = Ge2 >>> 13, Ye2 = g3[8] | 0, St2 = Ye2 & 8191, Nt2 = Ye2 >>> 13, Ve2 = g3[9] | 0, It2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c2.negative = f2.negative ^ a2.negative, c2.length = 19, l2 = Math.imul(u3, ut2), s = Math.imul(u3, ht2), s = s + Math.imul(E3, ut2) | 0, v3 = Math.imul(E3, ht2);
      var Me2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Me2 >>> 26) | 0, Me2 &= 67108863, l2 = Math.imul(B, ut2), s = Math.imul(B, ht2), s = s + Math.imul(R, ut2) | 0, v3 = Math.imul(R, ht2), l2 = l2 + Math.imul(u3, ct2) | 0, s = s + Math.imul(u3, lt2) | 0, s = s + Math.imul(E3, ct2) | 0, v3 = v3 + Math.imul(E3, lt2) | 0;
      var Ee2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l2 = Math.imul(P2, ut2), s = Math.imul(P2, ht2), s = s + Math.imul(O2, ut2) | 0, v3 = Math.imul(O2, ht2), l2 = l2 + Math.imul(B, ct2) | 0, s = s + Math.imul(B, lt2) | 0, s = s + Math.imul(R, ct2) | 0, v3 = v3 + Math.imul(R, lt2) | 0, l2 = l2 + Math.imul(u3, dt2) | 0, s = s + Math.imul(u3, pt2) | 0, s = s + Math.imul(E3, dt2) | 0, v3 = v3 + Math.imul(E3, pt2) | 0;
      var Se2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Se2 >>> 26) | 0, Se2 &= 67108863, l2 = Math.imul(D2, ut2), s = Math.imul(D2, ht2), s = s + Math.imul(q2, ut2) | 0, v3 = Math.imul(q2, ht2), l2 = l2 + Math.imul(P2, ct2) | 0, s = s + Math.imul(P2, lt2) | 0, s = s + Math.imul(O2, ct2) | 0, v3 = v3 + Math.imul(O2, lt2) | 0, l2 = l2 + Math.imul(B, dt2) | 0, s = s + Math.imul(B, pt2) | 0, s = s + Math.imul(R, dt2) | 0, v3 = v3 + Math.imul(R, pt2) | 0, l2 = l2 + Math.imul(u3, vt2) | 0, s = s + Math.imul(u3, mt2) | 0, s = s + Math.imul(E3, vt2) | 0, v3 = v3 + Math.imul(E3, mt2) | 0;
      var Ne = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l2 = Math.imul(X2, ut2), s = Math.imul(X2, ht2), s = s + Math.imul(Z2, ut2) | 0, v3 = Math.imul(Z2, ht2), l2 = l2 + Math.imul(D2, ct2) | 0, s = s + Math.imul(D2, lt2) | 0, s = s + Math.imul(q2, ct2) | 0, v3 = v3 + Math.imul(q2, lt2) | 0, l2 = l2 + Math.imul(P2, dt2) | 0, s = s + Math.imul(P2, pt2) | 0, s = s + Math.imul(O2, dt2) | 0, v3 = v3 + Math.imul(O2, pt2) | 0, l2 = l2 + Math.imul(B, vt2) | 0, s = s + Math.imul(B, mt2) | 0, s = s + Math.imul(R, vt2) | 0, v3 = v3 + Math.imul(R, mt2) | 0, l2 = l2 + Math.imul(u3, gt2) | 0, s = s + Math.imul(u3, At2) | 0, s = s + Math.imul(E3, gt2) | 0, v3 = v3 + Math.imul(E3, At2) | 0;
      var Ie = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l2 = Math.imul($2, ut2), s = Math.imul($2, ht2), s = s + Math.imul(tt2, ut2) | 0, v3 = Math.imul(tt2, ht2), l2 = l2 + Math.imul(X2, ct2) | 0, s = s + Math.imul(X2, lt2) | 0, s = s + Math.imul(Z2, ct2) | 0, v3 = v3 + Math.imul(Z2, lt2) | 0, l2 = l2 + Math.imul(D2, dt2) | 0, s = s + Math.imul(D2, pt2) | 0, s = s + Math.imul(q2, dt2) | 0, v3 = v3 + Math.imul(q2, pt2) | 0, l2 = l2 + Math.imul(P2, vt2) | 0, s = s + Math.imul(P2, mt2) | 0, s = s + Math.imul(O2, vt2) | 0, v3 = v3 + Math.imul(O2, mt2) | 0, l2 = l2 + Math.imul(B, gt2) | 0, s = s + Math.imul(B, At2) | 0, s = s + Math.imul(R, gt2) | 0, v3 = v3 + Math.imul(R, At2) | 0, l2 = l2 + Math.imul(u3, bt2) | 0, s = s + Math.imul(u3, yt2) | 0, s = s + Math.imul(E3, bt2) | 0, v3 = v3 + Math.imul(E3, yt2) | 0;
      var Wr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l2 = Math.imul(et2, ut2), s = Math.imul(et2, ht2), s = s + Math.imul(rt2, ut2) | 0, v3 = Math.imul(rt2, ht2), l2 = l2 + Math.imul($2, ct2) | 0, s = s + Math.imul($2, lt2) | 0, s = s + Math.imul(tt2, ct2) | 0, v3 = v3 + Math.imul(tt2, lt2) | 0, l2 = l2 + Math.imul(X2, dt2) | 0, s = s + Math.imul(X2, pt2) | 0, s = s + Math.imul(Z2, dt2) | 0, v3 = v3 + Math.imul(Z2, pt2) | 0, l2 = l2 + Math.imul(D2, vt2) | 0, s = s + Math.imul(D2, mt2) | 0, s = s + Math.imul(q2, vt2) | 0, v3 = v3 + Math.imul(q2, mt2) | 0, l2 = l2 + Math.imul(P2, gt2) | 0, s = s + Math.imul(P2, At2) | 0, s = s + Math.imul(O2, gt2) | 0, v3 = v3 + Math.imul(O2, At2) | 0, l2 = l2 + Math.imul(B, bt2) | 0, s = s + Math.imul(B, yt2) | 0, s = s + Math.imul(R, bt2) | 0, v3 = v3 + Math.imul(R, yt2) | 0, l2 = l2 + Math.imul(u3, wt2) | 0, s = s + Math.imul(u3, xt2) | 0, s = s + Math.imul(E3, wt2) | 0, v3 = v3 + Math.imul(E3, xt2) | 0;
      var Xr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l2 = Math.imul(it2, ut2), s = Math.imul(it2, ht2), s = s + Math.imul(nt2, ut2) | 0, v3 = Math.imul(nt2, ht2), l2 = l2 + Math.imul(et2, ct2) | 0, s = s + Math.imul(et2, lt2) | 0, s = s + Math.imul(rt2, ct2) | 0, v3 = v3 + Math.imul(rt2, lt2) | 0, l2 = l2 + Math.imul($2, dt2) | 0, s = s + Math.imul($2, pt2) | 0, s = s + Math.imul(tt2, dt2) | 0, v3 = v3 + Math.imul(tt2, pt2) | 0, l2 = l2 + Math.imul(X2, vt2) | 0, s = s + Math.imul(X2, mt2) | 0, s = s + Math.imul(Z2, vt2) | 0, v3 = v3 + Math.imul(Z2, mt2) | 0, l2 = l2 + Math.imul(D2, gt2) | 0, s = s + Math.imul(D2, At2) | 0, s = s + Math.imul(q2, gt2) | 0, v3 = v3 + Math.imul(q2, At2) | 0, l2 = l2 + Math.imul(P2, bt2) | 0, s = s + Math.imul(P2, yt2) | 0, s = s + Math.imul(O2, bt2) | 0, v3 = v3 + Math.imul(O2, yt2) | 0, l2 = l2 + Math.imul(B, wt2) | 0, s = s + Math.imul(B, xt2) | 0, s = s + Math.imul(R, wt2) | 0, v3 = v3 + Math.imul(R, xt2) | 0, l2 = l2 + Math.imul(u3, Mt2) | 0, s = s + Math.imul(u3, Et2) | 0, s = s + Math.imul(E3, Mt2) | 0, v3 = v3 + Math.imul(E3, Et2) | 0;
      var Zr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l2 = Math.imul(ft2, ut2), s = Math.imul(ft2, ht2), s = s + Math.imul(ot2, ut2) | 0, v3 = Math.imul(ot2, ht2), l2 = l2 + Math.imul(it2, ct2) | 0, s = s + Math.imul(it2, lt2) | 0, s = s + Math.imul(nt2, ct2) | 0, v3 = v3 + Math.imul(nt2, lt2) | 0, l2 = l2 + Math.imul(et2, dt2) | 0, s = s + Math.imul(et2, pt2) | 0, s = s + Math.imul(rt2, dt2) | 0, v3 = v3 + Math.imul(rt2, pt2) | 0, l2 = l2 + Math.imul($2, vt2) | 0, s = s + Math.imul($2, mt2) | 0, s = s + Math.imul(tt2, vt2) | 0, v3 = v3 + Math.imul(tt2, mt2) | 0, l2 = l2 + Math.imul(X2, gt2) | 0, s = s + Math.imul(X2, At2) | 0, s = s + Math.imul(Z2, gt2) | 0, v3 = v3 + Math.imul(Z2, At2) | 0, l2 = l2 + Math.imul(D2, bt2) | 0, s = s + Math.imul(D2, yt2) | 0, s = s + Math.imul(q2, bt2) | 0, v3 = v3 + Math.imul(q2, yt2) | 0, l2 = l2 + Math.imul(P2, wt2) | 0, s = s + Math.imul(P2, xt2) | 0, s = s + Math.imul(O2, wt2) | 0, v3 = v3 + Math.imul(O2, xt2) | 0, l2 = l2 + Math.imul(B, Mt2) | 0, s = s + Math.imul(B, Et2) | 0, s = s + Math.imul(R, Mt2) | 0, v3 = v3 + Math.imul(R, Et2) | 0, l2 = l2 + Math.imul(u3, St2) | 0, s = s + Math.imul(u3, Nt2) | 0, s = s + Math.imul(E3, St2) | 0, v3 = v3 + Math.imul(E3, Nt2) | 0;
      var $r2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l2 = Math.imul(st2, ut2), s = Math.imul(st2, ht2), s = s + Math.imul(at2, ut2) | 0, v3 = Math.imul(at2, ht2), l2 = l2 + Math.imul(ft2, ct2) | 0, s = s + Math.imul(ft2, lt2) | 0, s = s + Math.imul(ot2, ct2) | 0, v3 = v3 + Math.imul(ot2, lt2) | 0, l2 = l2 + Math.imul(it2, dt2) | 0, s = s + Math.imul(it2, pt2) | 0, s = s + Math.imul(nt2, dt2) | 0, v3 = v3 + Math.imul(nt2, pt2) | 0, l2 = l2 + Math.imul(et2, vt2) | 0, s = s + Math.imul(et2, mt2) | 0, s = s + Math.imul(rt2, vt2) | 0, v3 = v3 + Math.imul(rt2, mt2) | 0, l2 = l2 + Math.imul($2, gt2) | 0, s = s + Math.imul($2, At2) | 0, s = s + Math.imul(tt2, gt2) | 0, v3 = v3 + Math.imul(tt2, At2) | 0, l2 = l2 + Math.imul(X2, bt2) | 0, s = s + Math.imul(X2, yt2) | 0, s = s + Math.imul(Z2, bt2) | 0, v3 = v3 + Math.imul(Z2, yt2) | 0, l2 = l2 + Math.imul(D2, wt2) | 0, s = s + Math.imul(D2, xt2) | 0, s = s + Math.imul(q2, wt2) | 0, v3 = v3 + Math.imul(q2, xt2) | 0, l2 = l2 + Math.imul(P2, Mt2) | 0, s = s + Math.imul(P2, Et2) | 0, s = s + Math.imul(O2, Mt2) | 0, v3 = v3 + Math.imul(O2, Et2) | 0, l2 = l2 + Math.imul(B, St2) | 0, s = s + Math.imul(B, Nt2) | 0, s = s + Math.imul(R, St2) | 0, v3 = v3 + Math.imul(R, Nt2) | 0, l2 = l2 + Math.imul(u3, It2) | 0, s = s + Math.imul(u3, _t2) | 0, s = s + Math.imul(E3, It2) | 0, v3 = v3 + Math.imul(E3, _t2) | 0;
      var ti = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l2 = Math.imul(st2, ct2), s = Math.imul(st2, lt2), s = s + Math.imul(at2, ct2) | 0, v3 = Math.imul(at2, lt2), l2 = l2 + Math.imul(ft2, dt2) | 0, s = s + Math.imul(ft2, pt2) | 0, s = s + Math.imul(ot2, dt2) | 0, v3 = v3 + Math.imul(ot2, pt2) | 0, l2 = l2 + Math.imul(it2, vt2) | 0, s = s + Math.imul(it2, mt2) | 0, s = s + Math.imul(nt2, vt2) | 0, v3 = v3 + Math.imul(nt2, mt2) | 0, l2 = l2 + Math.imul(et2, gt2) | 0, s = s + Math.imul(et2, At2) | 0, s = s + Math.imul(rt2, gt2) | 0, v3 = v3 + Math.imul(rt2, At2) | 0, l2 = l2 + Math.imul($2, bt2) | 0, s = s + Math.imul($2, yt2) | 0, s = s + Math.imul(tt2, bt2) | 0, v3 = v3 + Math.imul(tt2, yt2) | 0, l2 = l2 + Math.imul(X2, wt2) | 0, s = s + Math.imul(X2, xt2) | 0, s = s + Math.imul(Z2, wt2) | 0, v3 = v3 + Math.imul(Z2, xt2) | 0, l2 = l2 + Math.imul(D2, Mt2) | 0, s = s + Math.imul(D2, Et2) | 0, s = s + Math.imul(q2, Mt2) | 0, v3 = v3 + Math.imul(q2, Et2) | 0, l2 = l2 + Math.imul(P2, St2) | 0, s = s + Math.imul(P2, Nt2) | 0, s = s + Math.imul(O2, St2) | 0, v3 = v3 + Math.imul(O2, Nt2) | 0, l2 = l2 + Math.imul(B, It2) | 0, s = s + Math.imul(B, _t2) | 0, s = s + Math.imul(R, It2) | 0, v3 = v3 + Math.imul(R, _t2) | 0;
      var ei = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l2 = Math.imul(st2, dt2), s = Math.imul(st2, pt2), s = s + Math.imul(at2, dt2) | 0, v3 = Math.imul(at2, pt2), l2 = l2 + Math.imul(ft2, vt2) | 0, s = s + Math.imul(ft2, mt2) | 0, s = s + Math.imul(ot2, vt2) | 0, v3 = v3 + Math.imul(ot2, mt2) | 0, l2 = l2 + Math.imul(it2, gt2) | 0, s = s + Math.imul(it2, At2) | 0, s = s + Math.imul(nt2, gt2) | 0, v3 = v3 + Math.imul(nt2, At2) | 0, l2 = l2 + Math.imul(et2, bt2) | 0, s = s + Math.imul(et2, yt2) | 0, s = s + Math.imul(rt2, bt2) | 0, v3 = v3 + Math.imul(rt2, yt2) | 0, l2 = l2 + Math.imul($2, wt2) | 0, s = s + Math.imul($2, xt2) | 0, s = s + Math.imul(tt2, wt2) | 0, v3 = v3 + Math.imul(tt2, xt2) | 0, l2 = l2 + Math.imul(X2, Mt2) | 0, s = s + Math.imul(X2, Et2) | 0, s = s + Math.imul(Z2, Mt2) | 0, v3 = v3 + Math.imul(Z2, Et2) | 0, l2 = l2 + Math.imul(D2, St2) | 0, s = s + Math.imul(D2, Nt2) | 0, s = s + Math.imul(q2, St2) | 0, v3 = v3 + Math.imul(q2, Nt2) | 0, l2 = l2 + Math.imul(P2, It2) | 0, s = s + Math.imul(P2, _t2) | 0, s = s + Math.imul(O2, It2) | 0, v3 = v3 + Math.imul(O2, _t2) | 0;
      var ri = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l2 = Math.imul(st2, vt2), s = Math.imul(st2, mt2), s = s + Math.imul(at2, vt2) | 0, v3 = Math.imul(at2, mt2), l2 = l2 + Math.imul(ft2, gt2) | 0, s = s + Math.imul(ft2, At2) | 0, s = s + Math.imul(ot2, gt2) | 0, v3 = v3 + Math.imul(ot2, At2) | 0, l2 = l2 + Math.imul(it2, bt2) | 0, s = s + Math.imul(it2, yt2) | 0, s = s + Math.imul(nt2, bt2) | 0, v3 = v3 + Math.imul(nt2, yt2) | 0, l2 = l2 + Math.imul(et2, wt2) | 0, s = s + Math.imul(et2, xt2) | 0, s = s + Math.imul(rt2, wt2) | 0, v3 = v3 + Math.imul(rt2, xt2) | 0, l2 = l2 + Math.imul($2, Mt2) | 0, s = s + Math.imul($2, Et2) | 0, s = s + Math.imul(tt2, Mt2) | 0, v3 = v3 + Math.imul(tt2, Et2) | 0, l2 = l2 + Math.imul(X2, St2) | 0, s = s + Math.imul(X2, Nt2) | 0, s = s + Math.imul(Z2, St2) | 0, v3 = v3 + Math.imul(Z2, Nt2) | 0, l2 = l2 + Math.imul(D2, It2) | 0, s = s + Math.imul(D2, _t2) | 0, s = s + Math.imul(q2, It2) | 0, v3 = v3 + Math.imul(q2, _t2) | 0;
      var ii = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l2 = Math.imul(st2, gt2), s = Math.imul(st2, At2), s = s + Math.imul(at2, gt2) | 0, v3 = Math.imul(at2, At2), l2 = l2 + Math.imul(ft2, bt2) | 0, s = s + Math.imul(ft2, yt2) | 0, s = s + Math.imul(ot2, bt2) | 0, v3 = v3 + Math.imul(ot2, yt2) | 0, l2 = l2 + Math.imul(it2, wt2) | 0, s = s + Math.imul(it2, xt2) | 0, s = s + Math.imul(nt2, wt2) | 0, v3 = v3 + Math.imul(nt2, xt2) | 0, l2 = l2 + Math.imul(et2, Mt2) | 0, s = s + Math.imul(et2, Et2) | 0, s = s + Math.imul(rt2, Mt2) | 0, v3 = v3 + Math.imul(rt2, Et2) | 0, l2 = l2 + Math.imul($2, St2) | 0, s = s + Math.imul($2, Nt2) | 0, s = s + Math.imul(tt2, St2) | 0, v3 = v3 + Math.imul(tt2, Nt2) | 0, l2 = l2 + Math.imul(X2, It2) | 0, s = s + Math.imul(X2, _t2) | 0, s = s + Math.imul(Z2, It2) | 0, v3 = v3 + Math.imul(Z2, _t2) | 0;
      var ni = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l2 = Math.imul(st2, bt2), s = Math.imul(st2, yt2), s = s + Math.imul(at2, bt2) | 0, v3 = Math.imul(at2, yt2), l2 = l2 + Math.imul(ft2, wt2) | 0, s = s + Math.imul(ft2, xt2) | 0, s = s + Math.imul(ot2, wt2) | 0, v3 = v3 + Math.imul(ot2, xt2) | 0, l2 = l2 + Math.imul(it2, Mt2) | 0, s = s + Math.imul(it2, Et2) | 0, s = s + Math.imul(nt2, Mt2) | 0, v3 = v3 + Math.imul(nt2, Et2) | 0, l2 = l2 + Math.imul(et2, St2) | 0, s = s + Math.imul(et2, Nt2) | 0, s = s + Math.imul(rt2, St2) | 0, v3 = v3 + Math.imul(rt2, Nt2) | 0, l2 = l2 + Math.imul($2, It2) | 0, s = s + Math.imul($2, _t2) | 0, s = s + Math.imul(tt2, It2) | 0, v3 = v3 + Math.imul(tt2, _t2) | 0;
      var fi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l2 = Math.imul(st2, wt2), s = Math.imul(st2, xt2), s = s + Math.imul(at2, wt2) | 0, v3 = Math.imul(at2, xt2), l2 = l2 + Math.imul(ft2, Mt2) | 0, s = s + Math.imul(ft2, Et2) | 0, s = s + Math.imul(ot2, Mt2) | 0, v3 = v3 + Math.imul(ot2, Et2) | 0, l2 = l2 + Math.imul(it2, St2) | 0, s = s + Math.imul(it2, Nt2) | 0, s = s + Math.imul(nt2, St2) | 0, v3 = v3 + Math.imul(nt2, Nt2) | 0, l2 = l2 + Math.imul(et2, It2) | 0, s = s + Math.imul(et2, _t2) | 0, s = s + Math.imul(rt2, It2) | 0, v3 = v3 + Math.imul(rt2, _t2) | 0;
      var oi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l2 = Math.imul(st2, Mt2), s = Math.imul(st2, Et2), s = s + Math.imul(at2, Mt2) | 0, v3 = Math.imul(at2, Et2), l2 = l2 + Math.imul(ft2, St2) | 0, s = s + Math.imul(ft2, Nt2) | 0, s = s + Math.imul(ot2, St2) | 0, v3 = v3 + Math.imul(ot2, Nt2) | 0, l2 = l2 + Math.imul(it2, It2) | 0, s = s + Math.imul(it2, _t2) | 0, s = s + Math.imul(nt2, It2) | 0, v3 = v3 + Math.imul(nt2, _t2) | 0;
      var si = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l2 = Math.imul(st2, St2), s = Math.imul(st2, Nt2), s = s + Math.imul(at2, St2) | 0, v3 = Math.imul(at2, Nt2), l2 = l2 + Math.imul(ft2, It2) | 0, s = s + Math.imul(ft2, _t2) | 0, s = s + Math.imul(ot2, It2) | 0, v3 = v3 + Math.imul(ot2, _t2) | 0;
      var ai = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l2 = Math.imul(st2, It2), s = Math.imul(st2, _t2), s = s + Math.imul(at2, It2) | 0, v3 = Math.imul(at2, _t2);
      var ui = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      return M2 = (v3 + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me2, x[1] = Ee2, x[2] = Se2, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r2, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M2 !== 0 && (x[19] = M2, c2.length++), c2;
    };
    Math.imul || (J2 = U2);
    function Bt2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative, a2.length = A2.length + f2.length;
      for (var c2 = 0, d3 = 0, g3 = 0; g3 < a2.length - 1; g3++) {
        var x = d3;
        d3 = 0;
        for (var M2 = c2 & 67108863, l2 = Math.min(g3, f2.length - 1), s = Math.max(0, g3 - A2.length + 1); s <= l2; s++) {
          var v3 = g3 - s, k2 = A2.words[v3] | 0, u3 = f2.words[s] | 0, E3 = k2 * u3, _2 = E3 & 67108863;
          x = x + (E3 / 67108864 | 0) | 0, _2 = _2 + M2 | 0, M2 = _2 & 67108863, x = x + (_2 >>> 26) | 0, d3 += x >>> 26, x &= 67108863;
        }
        a2.words[g3] = M2, c2 = x, x = d3;
      }
      return c2 !== 0 ? a2.words[g3] = c2 : a2.length--, a2._strip();
    }
    function G(A2, f2, a2) {
      return Bt2(A2, f2, a2);
    }
    o2.prototype.mulTo = function(f2, a2) {
      var c2, d3 = this.length + f2.length;
      return this.length === 10 && f2.length === 10 ? c2 = J2(this, f2, a2) : d3 < 63 ? c2 = U2(this, f2, a2) : d3 < 1024 ? c2 = Bt2(this, f2, a2) : c2 = G(this, f2, a2), c2;
    }, o2.prototype.mul = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), this.mulTo(f2, a2);
    }, o2.prototype.mulf = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), G(this, f2, a2);
    }, o2.prototype.imul = function(f2) {
      return this.clone().mulTo(f2, this);
    }, o2.prototype.imuln = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(typeof f2 == "number"), i(f2 < 67108864);
      for (var c2 = 0, d3 = 0; d3 < this.length; d3++) {
        var g3 = (this.words[d3] | 0) * f2, x = (g3 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += g3 / 67108864 | 0, c2 += x >>> 26, this.words[d3] = x & 67108863;
      }
      return c2 !== 0 && (this.words[d3] = c2, this.length++), a2 ? this.ineg() : this;
    }, o2.prototype.muln = function(f2) {
      return this.clone().imuln(f2);
    }, o2.prototype.sqr = function() {
      return this.mul(this);
    }, o2.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o2.prototype.pow = function(f2) {
      var a2 = F2(f2);
      if (a2.length === 0) return new o2(1);
      for (var c2 = this, d3 = 0; d3 < a2.length && a2[d3] === 0; d3++, c2 = c2.sqr()) ;
      if (++d3 < a2.length) for (var g3 = c2.sqr(); d3 < a2.length; d3++, g3 = g3.sqr()) a2[d3] !== 0 && (c2 = c2.mul(g3));
      return c2;
    }, o2.prototype.iushln = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 67108863 >>> 26 - a2 << 26 - a2, g3;
      if (a2 !== 0) {
        var x = 0;
        for (g3 = 0; g3 < this.length; g3++) {
          var M2 = this.words[g3] & d3, l2 = (this.words[g3] | 0) - M2 << a2;
          this.words[g3] = l2 | x, x = M2 >>> 26 - a2;
        }
        x && (this.words[g3] = x, this.length++);
      }
      if (c2 !== 0) {
        for (g3 = this.length - 1; g3 >= 0; g3--) this.words[g3 + c2] = this.words[g3];
        for (g3 = 0; g3 < c2; g3++) this.words[g3] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o2.prototype.ishln = function(f2) {
      return i(this.negative === 0), this.iushln(f2);
    }, o2.prototype.iushrn = function(f2, a2, c2) {
      i(typeof f2 == "number" && f2 >= 0);
      var d3;
      a2 ? d3 = (a2 - a2 % 26) / 26 : d3 = 0;
      var g3 = f2 % 26, x = Math.min((f2 - g3) / 26, this.length), M2 = 67108863 ^ 67108863 >>> g3 << g3, l2 = c2;
      if (d3 -= x, d3 = Math.max(0, d3), l2) {
        for (var s = 0; s < x; s++) l2.words[s] = this.words[s];
        l2.length = x;
      }
      if (x !== 0) if (this.length > x) for (this.length -= x, s = 0; s < this.length; s++) this.words[s] = this.words[s + x];
      else this.words[0] = 0, this.length = 1;
      var v3 = 0;
      for (s = this.length - 1; s >= 0 && (v3 !== 0 || s >= d3); s--) {
        var k2 = this.words[s] | 0;
        this.words[s] = v3 << 26 - g3 | k2 >>> g3, v3 = k2 & M2;
      }
      return l2 && v3 !== 0 && (l2.words[l2.length++] = v3), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o2.prototype.ishrn = function(f2, a2, c2) {
      return i(this.negative === 0), this.iushrn(f2, a2, c2);
    }, o2.prototype.shln = function(f2) {
      return this.clone().ishln(f2);
    }, o2.prototype.ushln = function(f2) {
      return this.clone().iushln(f2);
    }, o2.prototype.shrn = function(f2) {
      return this.clone().ishrn(f2);
    }, o2.prototype.ushrn = function(f2) {
      return this.clone().iushrn(f2);
    }, o2.prototype.testn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return false;
      var g3 = this.words[c2];
      return !!(g3 & d3);
    }, o2.prototype.imaskn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2) return this;
      if (a2 !== 0 && c2++, this.length = Math.min(c2, this.length), a2 !== 0) {
        var d3 = 67108863 ^ 67108863 >>> a2 << a2;
        this.words[this.length - 1] &= d3;
      }
      return this._strip();
    }, o2.prototype.maskn = function(f2) {
      return this.clone().imaskn(f2);
    }, o2.prototype.iaddn = function(f2) {
      return i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0 ? this.isubn(-f2) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f2 ? (this.words[0] = f2 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f2), this.negative = 1, this) : this._iaddn(f2);
    }, o2.prototype._iaddn = function(f2) {
      this.words[0] += f2;
      for (var a2 = 0; a2 < this.length && this.words[a2] >= 67108864; a2++) this.words[a2] -= 67108864, a2 === this.length - 1 ? this.words[a2 + 1] = 1 : this.words[a2 + 1]++;
      return this.length = Math.max(this.length, a2 + 1), this;
    }, o2.prototype.isubn = function(f2) {
      if (i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0) return this.iaddn(-f2);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f2), this.negative = 1, this;
      if (this.words[0] -= f2, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a2 = 0; a2 < this.length && this.words[a2] < 0; a2++) this.words[a2] += 67108864, this.words[a2 + 1] -= 1;
      return this._strip();
    }, o2.prototype.addn = function(f2) {
      return this.clone().iaddn(f2);
    }, o2.prototype.subn = function(f2) {
      return this.clone().isubn(f2);
    }, o2.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o2.prototype.abs = function() {
      return this.clone().iabs();
    }, o2.prototype._ishlnsubmul = function(f2, a2, c2) {
      var d3 = f2.length + c2, g3;
      this._expand(d3);
      var x, M2 = 0;
      for (g3 = 0; g3 < f2.length; g3++) {
        x = (this.words[g3 + c2] | 0) + M2;
        var l2 = (f2.words[g3] | 0) * a2;
        x -= l2 & 67108863, M2 = (x >> 26) - (l2 / 67108864 | 0), this.words[g3 + c2] = x & 67108863;
      }
      for (; g3 < this.length - c2; g3++) x = (this.words[g3 + c2] | 0) + M2, M2 = x >> 26, this.words[g3 + c2] = x & 67108863;
      if (M2 === 0) return this._strip();
      for (i(M2 === -1), M2 = 0, g3 = 0; g3 < this.length; g3++) x = -(this.words[g3] | 0) + M2, M2 = x >> 26, this.words[g3] = x & 67108863;
      return this.negative = 1, this._strip();
    }, o2.prototype._wordDiv = function(f2, a2) {
      var c2 = this.length - f2.length, d3 = this.clone(), g3 = f2, x = g3.words[g3.length - 1] | 0, M2 = this._countBits(x);
      c2 = 26 - M2, c2 !== 0 && (g3 = g3.ushln(c2), d3.iushln(c2), x = g3.words[g3.length - 1] | 0);
      var l2 = d3.length - g3.length, s;
      if (a2 !== "mod") {
        s = new o2(null), s.length = l2 + 1, s.words = new Array(s.length);
        for (var v3 = 0; v3 < s.length; v3++) s.words[v3] = 0;
      }
      var k2 = d3.clone()._ishlnsubmul(g3, 1, l2);
      k2.negative === 0 && (d3 = k2, s && (s.words[l2] = 1));
      for (var u3 = l2 - 1; u3 >= 0; u3--) {
        var E3 = (d3.words[g3.length + u3] | 0) * 67108864 + (d3.words[g3.length + u3 - 1] | 0);
        for (E3 = Math.min(E3 / x | 0, 67108863), d3._ishlnsubmul(g3, E3, u3); d3.negative !== 0; ) E3--, d3.negative = 0, d3._ishlnsubmul(g3, 1, u3), d3.isZero() || (d3.negative ^= 1);
        s && (s.words[u3] = E3);
      }
      return s && s._strip(), d3._strip(), a2 !== "div" && c2 !== 0 && d3.iushrn(c2), { div: s || null, mod: d3 };
    }, o2.prototype.divmod = function(f2, a2, c2) {
      if (i(!f2.isZero()), this.isZero()) return { div: new o2(0), mod: new o2(0) };
      var d3, g3, x;
      return this.negative !== 0 && f2.negative === 0 ? (x = this.neg().divmod(f2, a2), a2 !== "mod" && (d3 = x.div.neg()), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.iadd(f2)), { div: d3, mod: g3 }) : this.negative === 0 && f2.negative !== 0 ? (x = this.divmod(f2.neg(), a2), a2 !== "mod" && (d3 = x.div.neg()), { div: d3, mod: x.mod }) : this.negative & f2.negative ? (x = this.neg().divmod(f2.neg(), a2), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.isub(f2)), { div: x.div, mod: g3 }) : f2.length > this.length || this.cmp(f2) < 0 ? { div: new o2(0), mod: this } : f2.length === 1 ? a2 === "div" ? { div: this.divn(f2.words[0]), mod: null } : a2 === "mod" ? { div: null, mod: new o2(this.modrn(f2.words[0])) } : { div: this.divn(f2.words[0]), mod: new o2(this.modrn(f2.words[0])) } : this._wordDiv(f2, a2);
    }, o2.prototype.div = function(f2) {
      return this.divmod(f2, "div", false).div;
    }, o2.prototype.mod = function(f2) {
      return this.divmod(f2, "mod", false).mod;
    }, o2.prototype.umod = function(f2) {
      return this.divmod(f2, "mod", true).mod;
    }, o2.prototype.divRound = function(f2) {
      var a2 = this.divmod(f2);
      if (a2.mod.isZero()) return a2.div;
      var c2 = a2.div.negative !== 0 ? a2.mod.isub(f2) : a2.mod, d3 = f2.ushrn(1), g3 = f2.andln(1), x = c2.cmp(d3);
      return x < 0 || g3 === 1 && x === 0 ? a2.div : a2.div.negative !== 0 ? a2.div.isubn(1) : a2.div.iaddn(1);
    }, o2.prototype.modrn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = (1 << 26) % f2, d3 = 0, g3 = this.length - 1; g3 >= 0; g3--) d3 = (c2 * d3 + (this.words[g3] | 0)) % f2;
      return a2 ? -d3 : d3;
    }, o2.prototype.modn = function(f2) {
      return this.modrn(f2);
    }, o2.prototype.idivn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = 0, d3 = this.length - 1; d3 >= 0; d3--) {
        var g3 = (this.words[d3] | 0) + c2 * 67108864;
        this.words[d3] = g3 / f2 | 0, c2 = g3 % f2;
      }
      return this._strip(), a2 ? this.ineg() : this;
    }, o2.prototype.divn = function(f2) {
      return this.clone().idivn(f2);
    }, o2.prototype.egcd = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = new o2(0), M2 = new o2(1), l2 = 0; a2.isEven() && c2.isEven(); ) a2.iushrn(1), c2.iushrn(1), ++l2;
      for (var s = c2.clone(), v3 = a2.clone(); !a2.isZero(); ) {
        for (var k2 = 0, u3 = 1; !(a2.words[0] & u3) && k2 < 26; ++k2, u3 <<= 1) ;
        if (k2 > 0) for (a2.iushrn(k2); k2-- > 0; ) (d3.isOdd() || g3.isOdd()) && (d3.iadd(s), g3.isub(v3)), d3.iushrn(1), g3.iushrn(1);
        for (var E3 = 0, _2 = 1; !(c2.words[0] & _2) && E3 < 26; ++E3, _2 <<= 1) ;
        if (E3 > 0) for (c2.iushrn(E3); E3-- > 0; ) (x.isOdd() || M2.isOdd()) && (x.iadd(s), M2.isub(v3)), x.iushrn(1), M2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(x), g3.isub(M2)) : (c2.isub(a2), x.isub(d3), M2.isub(g3));
      }
      return { a: x, b: M2, gcd: c2.iushln(l2) };
    }, o2.prototype._invmp = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = c2.clone(); a2.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M2 = 0, l2 = 1; !(a2.words[0] & l2) && M2 < 26; ++M2, l2 <<= 1) ;
        if (M2 > 0) for (a2.iushrn(M2); M2-- > 0; ) d3.isOdd() && d3.iadd(x), d3.iushrn(1);
        for (var s = 0, v3 = 1; !(c2.words[0] & v3) && s < 26; ++s, v3 <<= 1) ;
        if (s > 0) for (c2.iushrn(s); s-- > 0; ) g3.isOdd() && g3.iadd(x), g3.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(g3)) : (c2.isub(a2), g3.isub(d3));
      }
      var k2;
      return a2.cmpn(1) === 0 ? k2 = d3 : k2 = g3, k2.cmpn(0) < 0 && k2.iadd(f2), k2;
    }, o2.prototype.gcd = function(f2) {
      if (this.isZero()) return f2.abs();
      if (f2.isZero()) return this.abs();
      var a2 = this.clone(), c2 = f2.clone();
      a2.negative = 0, c2.negative = 0;
      for (var d3 = 0; a2.isEven() && c2.isEven(); d3++) a2.iushrn(1), c2.iushrn(1);
      do {
        for (; a2.isEven(); ) a2.iushrn(1);
        for (; c2.isEven(); ) c2.iushrn(1);
        var g3 = a2.cmp(c2);
        if (g3 < 0) {
          var x = a2;
          a2 = c2, c2 = x;
        } else if (g3 === 0 || c2.cmpn(1) === 0) break;
        a2.isub(c2);
      } while (true);
      return c2.iushln(d3);
    }, o2.prototype.invm = function(f2) {
      return this.egcd(f2).a.umod(f2);
    }, o2.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o2.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o2.prototype.andln = function(f2) {
      return this.words[0] & f2;
    }, o2.prototype.bincn = function(f2) {
      i(typeof f2 == "number");
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return this._expand(c2 + 1), this.words[c2] |= d3, this;
      for (var g3 = d3, x = c2; g3 !== 0 && x < this.length; x++) {
        var M2 = this.words[x] | 0;
        M2 += g3, g3 = M2 >>> 26, M2 &= 67108863, this.words[x] = M2;
      }
      return g3 !== 0 && (this.words[x] = g3, this.length++), this;
    }, o2.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o2.prototype.cmpn = function(f2) {
      var a2 = f2 < 0;
      if (this.negative !== 0 && !a2) return -1;
      if (this.negative === 0 && a2) return 1;
      this._strip();
      var c2;
      if (this.length > 1) c2 = 1;
      else {
        a2 && (f2 = -f2), i(f2 <= 67108863, "Number is too big");
        var d3 = this.words[0] | 0;
        c2 = d3 === f2 ? 0 : d3 < f2 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o2.prototype.cmp = function(f2) {
      if (this.negative !== 0 && f2.negative === 0) return -1;
      if (this.negative === 0 && f2.negative !== 0) return 1;
      var a2 = this.ucmp(f2);
      return this.negative !== 0 ? -a2 | 0 : a2;
    }, o2.prototype.ucmp = function(f2) {
      if (this.length > f2.length) return 1;
      if (this.length < f2.length) return -1;
      for (var a2 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d3 = this.words[c2] | 0, g3 = f2.words[c2] | 0;
        if (d3 !== g3) {
          d3 < g3 ? a2 = -1 : d3 > g3 && (a2 = 1);
          break;
        }
      }
      return a2;
    }, o2.prototype.gtn = function(f2) {
      return this.cmpn(f2) === 1;
    }, o2.prototype.gt = function(f2) {
      return this.cmp(f2) === 1;
    }, o2.prototype.gten = function(f2) {
      return this.cmpn(f2) >= 0;
    }, o2.prototype.gte = function(f2) {
      return this.cmp(f2) >= 0;
    }, o2.prototype.ltn = function(f2) {
      return this.cmpn(f2) === -1;
    }, o2.prototype.lt = function(f2) {
      return this.cmp(f2) === -1;
    }, o2.prototype.lten = function(f2) {
      return this.cmpn(f2) <= 0;
    }, o2.prototype.lte = function(f2) {
      return this.cmp(f2) <= 0;
    }, o2.prototype.eqn = function(f2) {
      return this.cmpn(f2) === 0;
    }, o2.prototype.eq = function(f2) {
      return this.cmp(f2) === 0;
    }, o2.red = function(f2) {
      return new Y(f2);
    }, o2.prototype.toRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), f2.convertTo(this)._forceRed(f2);
    }, o2.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o2.prototype._forceRed = function(f2) {
      return this.red = f2, this;
    }, o2.prototype.forceRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(f2);
    }, o2.prototype.redAdd = function(f2) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, f2);
    }, o2.prototype.redIAdd = function(f2) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f2);
    }, o2.prototype.redSub = function(f2) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, f2);
    }, o2.prototype.redISub = function(f2) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, f2);
    }, o2.prototype.redShl = function(f2) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, f2);
    }, o2.prototype.redMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.mul(this, f2);
    }, o2.prototype.redIMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.imul(this, f2);
    }, o2.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o2.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o2.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o2.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o2.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o2.prototype.redPow = function(f2) {
      return i(this.red && !f2.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f2);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z2(A2, f2) {
      this.name = A2, this.p = new o2(f2, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z2.prototype._tmp = function() {
      var f2 = new o2(null);
      return f2.words = new Array(Math.ceil(this.n / 13)), f2;
    }, z2.prototype.ireduce = function(f2) {
      var a2 = f2, c2;
      do
        this.split(a2, this.tmp), a2 = this.imulK(a2), a2 = a2.iadd(this.tmp), c2 = a2.bitLength();
      while (c2 > this.n);
      var d3 = c2 < this.n ? -1 : a2.ucmp(this.p);
      return d3 === 0 ? (a2.words[0] = 0, a2.length = 1) : d3 > 0 ? a2.isub(this.p) : a2.strip !== void 0 ? a2.strip() : a2._strip(), a2;
    }, z2.prototype.split = function(f2, a2) {
      f2.iushrn(this.n, 0, a2);
    }, z2.prototype.imulK = function(f2) {
      return f2.imul(this.k);
    };
    function Pt2() {
      z2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n2(Pt2, z2), Pt2.prototype.split = function(f2, a2) {
      for (var c2 = 4194303, d3 = Math.min(f2.length, 9), g3 = 0; g3 < d3; g3++) a2.words[g3] = f2.words[g3];
      if (a2.length = d3, f2.length <= 9) {
        f2.words[0] = 0, f2.length = 1;
        return;
      }
      var x = f2.words[9];
      for (a2.words[a2.length++] = x & c2, g3 = 10; g3 < f2.length; g3++) {
        var M2 = f2.words[g3] | 0;
        f2.words[g3 - 10] = (M2 & c2) << 4 | x >>> 22, x = M2;
      }
      x >>>= 22, f2.words[g3 - 10] = x, x === 0 && f2.length > 10 ? f2.length -= 10 : f2.length -= 9;
    }, Pt2.prototype.imulK = function(f2) {
      f2.words[f2.length] = 0, f2.words[f2.length + 1] = 0, f2.length += 2;
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = f2.words[c2] | 0;
        a2 += d3 * 977, f2.words[c2] = a2 & 67108863, a2 = d3 * 64 + (a2 / 67108864 | 0);
      }
      return f2.words[f2.length - 1] === 0 && (f2.length--, f2.words[f2.length - 1] === 0 && f2.length--), f2;
    };
    function W() {
      z2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n2(W, z2);
    function Rt2() {
      z2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n2(Rt2, z2);
    function Yt3() {
      z2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n2(Yt3, z2), Yt3.prototype.imulK = function(f2) {
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = (f2.words[c2] | 0) * 19 + a2, g3 = d3 & 67108863;
        d3 >>>= 26, f2.words[c2] = g3, a2 = d3;
      }
      return a2 !== 0 && (f2.words[f2.length++] = a2), f2;
    }, o2._prime = function(f2) {
      if (H[f2]) return H[f2];
      var a2;
      if (f2 === "k256") a2 = new Pt2();
      else if (f2 === "p224") a2 = new W();
      else if (f2 === "p192") a2 = new Rt2();
      else if (f2 === "p25519") a2 = new Yt3();
      else throw new Error("Unknown prime " + f2);
      return H[f2] = a2, a2;
    };
    function Y(A2) {
      if (typeof A2 == "string") {
        var f2 = o2._prime(A2);
        this.m = f2.p, this.prime = f2;
      } else i(A2.gtn(1), "modulus must be greater than 1"), this.m = A2, this.prime = null;
    }
    Y.prototype._verify1 = function(f2) {
      i(f2.negative === 0, "red works only with positives"), i(f2.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f2, a2) {
      i((f2.negative | a2.negative) === 0, "red works only with positives"), i(f2.red && f2.red === a2.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f2) {
      return this.prime ? this.prime.ireduce(f2)._forceRed(this) : (w3(f2, f2.umod(this.m)._forceRed(this)), f2);
    }, Y.prototype.neg = function(f2) {
      return f2.isZero() ? f2.clone() : this.m.sub(f2)._forceRed(this);
    }, Y.prototype.add = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.add(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y.prototype.iadd = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.iadd(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y.prototype.sub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.sub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y.prototype.isub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.isub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y.prototype.shl = function(f2, a2) {
      return this._verify1(f2), this.imod(f2.ushln(a2));
    }, Y.prototype.imul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.imul(a2));
    }, Y.prototype.mul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.mul(a2));
    }, Y.prototype.isqr = function(f2) {
      return this.imul(f2, f2.clone());
    }, Y.prototype.sqr = function(f2) {
      return this.mul(f2, f2);
    }, Y.prototype.sqrt = function(f2) {
      if (f2.isZero()) return f2.clone();
      var a2 = this.m.andln(3);
      if (i(a2 % 2 === 1), a2 === 3) {
        var c2 = this.m.add(new o2(1)).iushrn(2);
        return this.pow(f2, c2);
      }
      for (var d3 = this.m.subn(1), g3 = 0; !d3.isZero() && d3.andln(1) === 0; ) g3++, d3.iushrn(1);
      i(!d3.isZero());
      var x = new o2(1).toRed(this), M2 = x.redNeg(), l2 = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o2(2 * s * s).toRed(this); this.pow(s, l2).cmp(M2) !== 0; ) s.redIAdd(M2);
      for (var v3 = this.pow(s, d3), k2 = this.pow(f2, d3.addn(1).iushrn(1)), u3 = this.pow(f2, d3), E3 = g3; u3.cmp(x) !== 0; ) {
        for (var _2 = u3, B = 0; _2.cmp(x) !== 0; B++) _2 = _2.redSqr();
        i(B < E3);
        var R = this.pow(v3, new o2(1).iushln(E3 - B - 1));
        k2 = k2.redMul(R), v3 = R.redSqr(), u3 = u3.redMul(v3), E3 = B;
      }
      return k2;
    }, Y.prototype.invm = function(f2) {
      var a2 = f2._invmp(this.m);
      return a2.negative !== 0 ? (a2.negative = 0, this.imod(a2).redNeg()) : this.imod(a2);
    }, Y.prototype.pow = function(f2, a2) {
      if (a2.isZero()) return new o2(1).toRed(this);
      if (a2.cmpn(1) === 0) return f2.clone();
      var c2 = 4, d3 = new Array(1 << c2);
      d3[0] = new o2(1).toRed(this), d3[1] = f2;
      for (var g3 = 2; g3 < d3.length; g3++) d3[g3] = this.mul(d3[g3 - 1], f2);
      var x = d3[0], M2 = 0, l2 = 0, s = a2.bitLength() % 26;
      for (s === 0 && (s = 26), g3 = a2.length - 1; g3 >= 0; g3--) {
        for (var v3 = a2.words[g3], k2 = s - 1; k2 >= 0; k2--) {
          var u3 = v3 >> k2 & 1;
          if (x !== d3[0] && (x = this.sqr(x)), u3 === 0 && M2 === 0) {
            l2 = 0;
            continue;
          }
          M2 <<= 1, M2 |= u3, l2++, !(l2 !== c2 && (g3 !== 0 || k2 !== 0)) && (x = this.mul(x, d3[M2]), l2 = 0, M2 = 0);
        }
        s = 26;
      }
      return x;
    }, Y.prototype.convertTo = function(f2) {
      var a2 = f2.umod(this.m);
      return a2 === f2 ? a2.clone() : a2;
    }, Y.prototype.convertFrom = function(f2) {
      var a2 = f2.clone();
      return a2.red = null, a2;
    }, o2.mont = function(f2) {
      return new Vt2(f2);
    };
    function Vt2(A2) {
      Y.call(this, A2), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n2(Vt2, Y), Vt2.prototype.convertTo = function(f2) {
      return this.imod(f2.ushln(this.shift));
    }, Vt2.prototype.convertFrom = function(f2) {
      var a2 = this.imod(f2.mul(this.rinv));
      return a2.red = null, a2;
    }, Vt2.prototype.imul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return f2.words[0] = 0, f2.length = 1, f2;
      var c2 = f2.imul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.mul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return new o2(0)._forceRed(this);
      var c2 = f2.mul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.invm = function(f2) {
      var a2 = this.imod(f2._invmp(this.m).mul(this.r2));
      return a2._forceRed(this);
    };
  })(e, On$1);
})(Ln$1);
var K$2 = Ln$1.exports;
const jn$1 = "bignumber/5.7.0";
var Rr$2 = K$2.BN;
const Ae$1 = new L$4(jn$1), wi$1 = {}, Qn$1 = 9007199254740991;
function C0$1(e) {
  return e != null && (V$2.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt$1(e) || typeof e == "bigint" || ir$2(e));
}
let Jn$1 = false;
let V$2 = class V2 {
  constructor(t, r2) {
    t !== wi$1 && Ae$1.throwError("cannot call constructor directly; use BigNumber.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt$2(j$3(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt$2(j$3(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? V2.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt$2(j$3(this).add(j$3(t)));
  }
  sub(t) {
    return Lt$2(j$3(this).sub(j$3(t)));
  }
  div(t) {
    return V2.from(t).isZero() && Wt$3("division-by-zero", "div"), Lt$2(j$3(this).div(j$3(t)));
  }
  mul(t) {
    return Lt$2(j$3(this).mul(j$3(t)));
  }
  mod(t) {
    const r2 = j$3(t);
    return r2.isNeg() && Wt$3("division-by-zero", "mod"), Lt$2(j$3(this).umod(r2));
  }
  pow(t) {
    const r2 = j$3(t);
    return r2.isNeg() && Wt$3("negative-power", "pow"), Lt$2(j$3(this).pow(r2));
  }
  and(t) {
    const r2 = j$3(t);
    return (this.isNegative() || r2.isNeg()) && Wt$3("unbound-bitwise-result", "and"), Lt$2(j$3(this).and(r2));
  }
  or(t) {
    const r2 = j$3(t);
    return (this.isNegative() || r2.isNeg()) && Wt$3("unbound-bitwise-result", "or"), Lt$2(j$3(this).or(r2));
  }
  xor(t) {
    const r2 = j$3(t);
    return (this.isNegative() || r2.isNeg()) && Wt$3("unbound-bitwise-result", "xor"), Lt$2(j$3(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt$3("negative-width", "mask"), Lt$2(j$3(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt$3("negative-width", "shl"), Lt$2(j$3(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt$3("negative-width", "shr"), Lt$2(j$3(this).shrn(t));
  }
  eq(t) {
    return j$3(this).eq(j$3(t));
  }
  lt(t) {
    return j$3(this).lt(j$3(t));
  }
  lte(t) {
    return j$3(this).lte(j$3(t));
  }
  gt(t) {
    return j$3(this).gt(j$3(t));
  }
  gte(t) {
    return j$3(this).gte(j$3(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j$3(this).isZero();
  }
  toNumber() {
    try {
      return j$3(this).toNumber();
    } catch {
      Wt$3("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae$1.throwError("this platform does not support BigInt", L$4.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn$1 || (Jn$1 = true, Ae$1.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae$1.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L$4.errors.UNEXPECTED_ARGUMENT, {}) : Ae$1.throwError("BigNumber.toString does not accept parameters", L$4.errors.UNEXPECTED_ARGUMENT, {})), j$3(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof V2) return t;
    if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V2(wi$1, vr$1(t)) : t.match(/^-?[0-9]+$/) ? new V2(wi$1, vr$1(new Rr$2(t))) : Ae$1.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number") return t % 1 && Wt$3("underflow", "BigNumber.from", t), (t >= Qn$1 || t <= -Qn$1) && Wt$3("overflow", "BigNumber.from", t), V2.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint") return V2.from(r2.toString());
    if (ir$2(r2)) return V2.from(Kt$2(r2));
    if (r2) if (r2.toHexString) {
      const i = r2.toHexString();
      if (typeof i == "string") return V2.from(i);
    } else {
      let i = r2._hex;
      if (i == null && r2.type === "BigNumber" && (i = r2.hex), typeof i == "string" && (Qt$1(i) || i[0] === "-" && Qt$1(i.substring(1)))) return V2.from(i);
    }
    return Ae$1.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function vr$1(e) {
  if (typeof e != "string") return vr$1(e.toString(16));
  if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae$1.throwArgumentError("invalid hex", "value", e), e = vr$1(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; ) e = "0x" + e.substring(4);
  return e;
}
function Lt$2(e) {
  return V$2.from(vr$1(e));
}
function j$3(e) {
  const t = V$2.from(e).toHexString();
  return t[0] === "-" ? new Rr$2("-" + t.substring(3), 16) : new Rr$2(t.substring(2), 16);
}
function Wt$3(e, t, r2) {
  const i = { fault: e, operation: t };
  return r2 != null && (i.value = r2), Ae$1.throwError(e, L$4.errors.NUMERIC_FAULT, i);
}
function R0(e) {
  return new Rr$2(e, 36).toString(16);
}
const Ht$3 = new L$4(jn$1), mr$2 = {}, Gn$1 = V$2.from(0), Yn$1 = V$2.from(-1);
function Vn$2(e, t, r2, i) {
  const n2 = { fault: t, operation: r2 };
  return i !== void 0 && (n2.value = i), Ht$3.throwError(e, L$4.errors.NUMERIC_FAULT, n2);
}
let gr$2 = "0";
for (; gr$2.length < 256; ) gr$2 += gr$2;
function xi$1(e) {
  if (typeof e != "number") try {
    e = V$2.from(e).toNumber();
  } catch {
  }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr$2.substring(0, e) : Ht$3.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi$2(e, t) {
  t == null && (t = 0);
  const r2 = xi$1(t);
  e = V$2.from(e);
  const i = e.lt(Gn$1);
  i && (e = e.mul(Yn$1));
  let n2 = e.mod(r2).toString();
  for (; n2.length < r2.length - 1; ) n2 = "0" + n2;
  n2 = n2.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o2 = e.div(r2).toString();
  return r2.length === 1 ? e = o2 : e = o2 + "." + n2, i && (e = "-" + e), e;
}
function be$2(e, t) {
  t == null && (t = 0);
  const r2 = xi$1(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht$3.throwArgumentError("invalid decimal value", "value", e);
  const i = e.substring(0, 1) === "-";
  i && (e = e.substring(1)), e === "." && Ht$3.throwArgumentError("missing value", "value", e);
  const n2 = e.split(".");
  n2.length > 2 && Ht$3.throwArgumentError("too many decimal points", "value", e);
  let o2 = n2[0], h2 = n2[1];
  for (o2 || (o2 = "0"), h2 || (h2 = "0"); h2[h2.length - 1] === "0"; ) h2 = h2.substring(0, h2.length - 1);
  for (h2.length > r2.length - 1 && Vn$2("fractional component exceeds decimals", "underflow", "parseFixed"), h2 === "" && (h2 = "0"); h2.length < r2.length - 1; ) h2 += "0";
  const p3 = V$2.from(o2), b3 = V$2.from(h2);
  let m2 = p3.mul(r2).add(b3);
  return i && (m2 = m2.mul(Yn$1)), m2;
}
let dr$2 = class dr2 {
  constructor(t, r2, i, n2) {
    t !== mr$2 && Ht$3.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i, this.decimals = n2, this.name = (r2 ? "" : "u") + "fixed" + String(i) + "x" + String(n2), this._multiplier = xi$1(n2), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof dr2) return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i = 128, n2 = 18;
    if (typeof t == "string") {
      if (t !== "fixed") if (t === "ufixed") r2 = false;
      else {
        const o2 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o2 || Ht$3.throwArgumentError("invalid fixed format", "format", t), r2 = o2[1] !== "u", i = parseInt(o2[2]), n2 = parseInt(o2[3]);
      }
    } else if (t) {
      const o2 = (h2, p3, b3) => t[h2] == null ? b3 : (typeof t[h2] !== p3 && Ht$3.throwArgumentError("invalid fixed format (" + h2 + " not " + p3 + ")", "format." + h2, t[h2]), t[h2]);
      r2 = o2("signed", "boolean", r2), i = o2("width", "number", i), n2 = o2("decimals", "number", n2);
    }
    return i % 8 && Ht$3.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n2 > 80 && Ht$3.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n2), new dr2(mr$2, r2, i, n2);
  }
};
let Ut$2 = class Ut2 {
  constructor(t, r2, i, n2) {
    t !== mr$2 && Ht$3.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n2, this._hex = r2, this._value = i, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht$3.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$2(this._value, this.format.decimals), i = be$2(t._value, t.format.decimals);
    return Ut2.fromValue(r2.add(i), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$2(this._value, this.format.decimals), i = be$2(t._value, t.format.decimals);
    return Ut2.fromValue(r2.sub(i), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$2(this._value, this.format.decimals), i = be$2(t._value, t.format.decimals);
    return Ut2.fromValue(r2.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$2(this._value, this.format.decimals), i = be$2(t._value, t.format.decimals);
    return Ut2.fromValue(r2.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut2.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return this.isNegative() && i && (r2 = r2.subUnsafe(Wn$1.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut2.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i && (r2 = r2.addUnsafe(Wn$1.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht$3.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t) return this;
    const i = Ut2.from("1" + gr$2.substring(0, t), this.format), n2 = O0$1.toFormat(this.format);
    return this.mulUnsafe(i).addUnsafe(n2).floor().divUnsafe(i);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null) return this._hex;
    t % 8 && Ht$3.throwArgumentError("invalid byte width", "width", t);
    const r2 = V$2.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe$1(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ut2.fromString(this._value, t);
  }
  static fromValue(t, r2, i) {
    return i == null && r2 != null && !C0$1(r2) && (i = r2, r2 = null), r2 == null && (r2 = 0), i == null && (i = "fixed"), Ut2.fromString(Mi$2(t, r2), dr$2.from(i));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr$2.from(r2), n2 = be$2(t, i.decimals);
    !i.signed && n2.lt(Gn$1) && Vn$2("unsigned value cannot be negative", "overflow", "value", t);
    let o2 = null;
    i.signed ? o2 = n2.toTwos(i.width).toHexString() : (o2 = n2.toHexString(), o2 = oe$1(o2, i.width / 8));
    const h2 = Mi$2(n2, i.decimals);
    return new Ut2(mr$2, o2, h2, i);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr$2.from(r2);
    if (Ot$2(t).length > i.width / 8) throw new Error("overflow");
    let n2 = V$2.from(t);
    i.signed && (n2 = n2.fromTwos(i.width));
    const o2 = n2.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), h2 = Mi$2(n2, i.decimals);
    return new Ut2(mr$2, o2, h2, i);
  }
  static from(t, r2) {
    if (typeof t == "string") return Ut2.fromString(t, r2);
    if (ir$2(t)) return Ut2.fromBytes(t, r2);
    try {
      return Ut2.fromValue(t, 0, r2);
    } catch (i) {
      if (i.code !== L$4.errors.INVALID_ARGUMENT) throw i;
    }
    return Ht$3.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
const Wn$1 = Ut$2.from(1), O0$1 = Ut$2.from("0.5"), P0 = "strings/5.7.0", Xn = new L$4(P0);
var Or$2;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or$2 || (Or$2 = {}));
var nr$2;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr$2 || (nr$2 = {}));
function Ei(e, t = Or$2.current) {
  t != Or$2.current && (Xn.checkNormalize(), e = e.normalize(t));
  let r2 = [];
  for (let i = 0; i < e.length; i++) {
    const n2 = e.charCodeAt(i);
    if (n2 < 128) r2.push(n2);
    else if (n2 < 2048) r2.push(n2 >> 6 | 192), r2.push(n2 & 63 | 128);
    else if ((n2 & 64512) == 55296) {
      i++;
      const o2 = e.charCodeAt(i);
      if (i >= e.length || (o2 & 64512) !== 56320) throw new Error("invalid utf-8 string");
      const h2 = 65536 + ((n2 & 1023) << 10) + (o2 & 1023);
      r2.push(h2 >> 18 | 240), r2.push(h2 >> 12 & 63 | 128), r2.push(h2 >> 6 & 63 | 128), r2.push(h2 & 63 | 128);
    } else r2.push(n2 >> 12 | 224), r2.push(n2 >> 6 & 63 | 128), r2.push(n2 & 63 | 128);
  }
  return Ot$2(r2);
}
function T0$1(e) {
  if (e.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4) t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Si$1(e, t) {
  t || (t = function(n2) {
    return [parseInt(n2, 16)];
  });
  let r2 = 0, i = {};
  return e.split(",").forEach((n2) => {
    let o2 = n2.split(":");
    r2 += parseInt(o2[0], 16), i[r2] = t(o2[1]);
  }), i;
}
function $n$1(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i = r2.split("-");
    i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
    let n2 = t + parseInt(i[0], 16);
    return t = parseInt(i[1], 16), { l: n2, h: t };
  });
}
$n$1("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Si$1("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si$1("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si$1("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0$1), $n$1("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function U0$1(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++) t.push(e.charCodeAt(r2));
  return Ot$2(t);
}
function ef$1(e, t) {
  t == null && (t = 1);
  const r2 = [], i = r2.forEach, n2 = function(o2, h2) {
    i.call(o2, function(p3) {
      h2 > 0 && Array.isArray(p3) ? n2(p3, h2 - 1) : r2.push(p3);
    });
  };
  return n2(e, t), r2;
}
function k0$1(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i = e[r2];
    t[i[0]] = i[1];
  }
  return t;
}
function q0$1(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i = r2(), n2 = 1, o2 = [0, 1];
  for (let H = 1; H < i; H++) o2.push(n2 += r2());
  let h2 = r2(), p3 = t;
  t += h2;
  let b3 = 0, m2 = 0;
  function w3() {
    return b3 == 0 && (m2 = m2 << 8 | e[t++], b3 = 8), m2 >> --b3 & 1;
  }
  const y3 = 31, S2 = Math.pow(2, y3), I2 = S2 >>> 1, N2 = I2 >> 1, C2 = S2 - 1;
  let F2 = 0;
  for (let H = 0; H < y3; H++) F2 = F2 << 1 | w3();
  let U2 = [], J2 = 0, Bt2 = S2;
  for (; ; ) {
    let H = Math.floor(((F2 - J2 + 1) * n2 - 1) / Bt2), z2 = 0, Pt2 = i;
    for (; Pt2 - z2 > 1; ) {
      let Yt3 = z2 + Pt2 >>> 1;
      H < o2[Yt3] ? Pt2 = Yt3 : z2 = Yt3;
    }
    if (z2 == 0) break;
    U2.push(z2);
    let W = J2 + Math.floor(Bt2 * o2[z2] / n2), Rt2 = J2 + Math.floor(Bt2 * o2[z2 + 1] / n2) - 1;
    for (; !((W ^ Rt2) & I2); ) F2 = F2 << 1 & C2 | w3(), W = W << 1 & C2, Rt2 = Rt2 << 1 & C2 | 1;
    for (; W & ~Rt2 & N2; ) F2 = F2 & I2 | F2 << 1 & C2 >>> 1 | w3(), W = W << 1 ^ I2, Rt2 = (Rt2 ^ I2) << 1 | I2 | 1;
    J2 = W, Bt2 = 1 + Rt2 - W;
  }
  let G = i - 4;
  return U2.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e[p3++] << 16 | e[p3++] << 8 | e[p3++]);
      case 2:
        return G + 256 + (e[p3++] << 8 | e[p3++]);
      case 1:
        return G + e[p3++];
      default:
        return H - 1;
    }
  });
}
function K0$1(e) {
  let t = 0;
  return () => e[t++];
}
function H0$1(e) {
  return K0$1(q0$1(e));
}
function z0$1(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function L0$1(e, t) {
  let r2 = Array(e);
  for (let i = 0; i < e; i++) r2[i] = 1 + t();
  return r2;
}
function rf$1(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = -1; i < e; i++) r2[i] = n2 += 1 + t();
  return r2;
}
function j0$1(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = 0; i < e; i++) r2[i] = n2 += z0$1(t());
  return r2;
}
function Pr$2(e, t) {
  let r2 = rf$1(e(), e), i = e(), n2 = rf$1(i, e), o2 = L0$1(i, e);
  for (let h2 = 0; h2 < i; h2++) for (let p3 = 0; p3 < o2[h2]; p3++) r2.push(n2[h2] + p3);
  return t ? r2.map((h2) => t[h2]) : r2;
}
function Q0$1(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(G0$1(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0) break;
    t.push(Y0$1(r2, e));
  }
  return k0$1(ef$1(t));
}
function J0$1(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(r2);
  }
  return t;
}
function nf$1(e, t, r2) {
  let i = Array(e).fill(void 0).map(() => []);
  for (let n2 = 0; n2 < t; n2++) j0$1(e, r2).forEach((o2, h2) => i[h2].push(o2));
  return i;
}
function G0$1(e, t) {
  let r2 = 1 + t(), i = t(), n2 = J0$1(t), o2 = nf$1(n2.length, 1 + e, t);
  return ef$1(o2.map((h2, p3) => {
    const b3 = h2[0], m2 = h2.slice(1);
    return Array(n2[p3]).fill(void 0).map((w3, y3) => {
      let S2 = y3 * i;
      return [b3 + y3 * r2, m2.map((I2) => I2 + S2)];
    });
  }));
}
function Y0$1(e, t) {
  let r2 = 1 + t();
  return nf$1(r2, 1 + e, t).map((n2) => [n2[0], n2.slice(1)]);
}
function V0$1(e) {
  let t = Pr$2(e).sort((i, n2) => i - n2);
  return r2();
  function r2() {
    let i = [];
    for (; ; ) {
      let m2 = Pr$2(e, t);
      if (m2.length == 0) break;
      i.push({ set: new Set(m2), node: r2() });
    }
    i.sort((m2, w3) => w3.set.size - m2.set.size);
    let n2 = e(), o2 = n2 % 3;
    n2 = n2 / 3 | 0;
    let h2 = !!(n2 & 1);
    n2 >>= 1;
    let p3 = n2 == 1, b3 = n2 == 2;
    return { branches: i, valid: o2, fe0f: h2, save: p3, check: b3 };
  }
}
function W0$1() {
  return H0$1(U0$1("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Dr$2 = W0$1();
new Set(Pr$2(Dr$2)), new Set(Pr$2(Dr$2)), Q0$1(Dr$2), V0$1(Dr$2);
const X0$1 = new Uint8Array(32);
X0$1.fill(0);
const Z0 = `Ethereum Signed Message:
`;
function ff(e) {
  return typeof e == "string" && (e = Ei(e)), yi(E0([Ei(Z0), Ei(String(e.length)), e]));
}
const ts$2 = "address/5.7.0", Ar$1 = new L$4(ts$2);
function of(e) {
  Qt$1(e, 20) || Ar$1.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
  const t = e.substring(2).split(""), r2 = new Uint8Array(40);
  for (let n2 = 0; n2 < 40; n2++) r2[n2] = t[n2].charCodeAt(0);
  const i = Ot$2(yi(r2));
  for (let n2 = 0; n2 < 40; n2 += 2) i[n2 >> 1] >> 4 >= 8 && (t[n2] = t[n2].toUpperCase()), (i[n2 >> 1] & 15) >= 8 && (t[n2 + 1] = t[n2 + 1].toUpperCase());
  return "0x" + t.join("");
}
const es$2 = 9007199254740991;
function rs$2(e) {
  return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
const Ni = {};
for (let e = 0; e < 10; e++) Ni[String(e)] = String(e);
for (let e = 0; e < 26; e++) Ni[String.fromCharCode(65 + e)] = String(10 + e);
const sf = Math.floor(rs$2(es$2));
function is$2(e) {
  e = e.toUpperCase(), e = e.substring(4) + e.substring(0, 2) + "00";
  let t = e.split("").map((i) => Ni[i]).join("");
  for (; t.length >= sf; ) {
    let i = t.substring(0, sf);
    t = parseInt(i, 10) % 97 + t.substring(i.length);
  }
  let r2 = String(98 - parseInt(t, 10) % 97);
  for (; r2.length < 2; ) r2 = "0" + r2;
  return r2;
}
function ns$1(e) {
  let t = null;
  if (typeof e != "string" && Ar$1.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) e.substring(0, 2) !== "0x" && (e = "0x" + e), t = of(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && Ar$1.throwArgumentError("bad address checksum", "address", e);
  else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (e.substring(2, 4) !== is$2(e) && Ar$1.throwArgumentError("bad icap checksum", "address", e), t = R0(e.substring(4)); t.length < 40; ) t = "0" + t;
    t = of("0x" + t);
  } else Ar$1.throwArgumentError("invalid address", "address", e);
  return t;
}
function br$1(e, t, r2) {
  Object.defineProperty(e, t, { enumerable: true, value: r2, writable: false });
}
const os$2 = new Uint8Array(32);
os$2.fill(0), V$2.from(-1);
const ss$3 = V$2.from(0), as$2 = V$2.from(1);
V$2.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe$1(as$2.toHexString(), 32), oe$1(ss$3.toHexString(), 32);
var se$2 = {}, Q$3 = {}, yr$2 = af$1;
function af$1(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
af$1.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var Ii$1 = { exports: {} };
typeof Object.create == "function" ? Ii$1.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii$1.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i = function() {
    };
    i.prototype = r2.prototype, t.prototype = new i(), t.prototype.constructor = t;
  }
};
var us$2 = yr$2, hs$2 = Ii$1.exports;
Q$3.inherits = hs$2;
function cs$2(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls$2(e, t) {
  if (Array.isArray(e)) return e.slice();
  if (!e) return [];
  var r2 = [];
  if (typeof e == "string") if (t) {
    if (t === "hex") for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n2 = 0; n2 < e.length; n2 += 2) r2.push(parseInt(e[n2] + e[n2 + 1], 16));
  } else for (var i = 0, n2 = 0; n2 < e.length; n2++) {
    var o2 = e.charCodeAt(n2);
    o2 < 128 ? r2[i++] = o2 : o2 < 2048 ? (r2[i++] = o2 >> 6 | 192, r2[i++] = o2 & 63 | 128) : cs$2(e, n2) ? (o2 = 65536 + ((o2 & 1023) << 10) + (e.charCodeAt(++n2) & 1023), r2[i++] = o2 >> 18 | 240, r2[i++] = o2 >> 12 & 63 | 128, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128) : (r2[i++] = o2 >> 12 | 224, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128);
  }
  else for (n2 = 0; n2 < e.length; n2++) r2[n2] = e[n2] | 0;
  return r2;
}
Q$3.toArray = ls$2;
function ds$2(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++) t += hf$1(e[r2].toString(16));
  return t;
}
Q$3.toHex = ds$2;
function uf$1(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q$3.htonl = uf$1;
function ps$2(e, t) {
  for (var r2 = "", i = 0; i < e.length; i++) {
    var n2 = e[i];
    t === "little" && (n2 = uf$1(n2)), r2 += cf$1(n2.toString(16));
  }
  return r2;
}
Q$3.toHex32 = ps$2;
function hf$1(e) {
  return e.length === 1 ? "0" + e : e;
}
Q$3.zero2 = hf$1;
function cf$1(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q$3.zero8 = cf$1;
function vs$2(e, t, r2, i) {
  var n2 = r2 - t;
  us$2(n2 % 4 === 0);
  for (var o2 = new Array(n2 / 4), h2 = 0, p3 = t; h2 < o2.length; h2++, p3 += 4) {
    var b3;
    i === "big" ? b3 = e[p3] << 24 | e[p3 + 1] << 16 | e[p3 + 2] << 8 | e[p3 + 3] : b3 = e[p3 + 3] << 24 | e[p3 + 2] << 16 | e[p3 + 1] << 8 | e[p3], o2[h2] = b3 >>> 0;
  }
  return o2;
}
Q$3.join32 = vs$2;
function ms$2(e, t) {
  for (var r2 = new Array(e.length * 4), i = 0, n2 = 0; i < e.length; i++, n2 += 4) {
    var o2 = e[i];
    t === "big" ? (r2[n2] = o2 >>> 24, r2[n2 + 1] = o2 >>> 16 & 255, r2[n2 + 2] = o2 >>> 8 & 255, r2[n2 + 3] = o2 & 255) : (r2[n2 + 3] = o2 >>> 24, r2[n2 + 2] = o2 >>> 16 & 255, r2[n2 + 1] = o2 >>> 8 & 255, r2[n2] = o2 & 255);
  }
  return r2;
}
Q$3.split32 = ms$2;
function gs$2(e, t) {
  return e >>> t | e << 32 - t;
}
Q$3.rotr32 = gs$2;
function As$2(e, t) {
  return e << t | e >>> 32 - t;
}
Q$3.rotl32 = As$2;
function bs$2(e, t) {
  return e + t >>> 0;
}
Q$3.sum32 = bs$2;
function ys$2(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q$3.sum32_3 = ys$2;
function ws$2(e, t, r2, i) {
  return e + t + r2 + i >>> 0;
}
Q$3.sum32_4 = ws$2;
function xs$2(e, t, r2, i, n2) {
  return e + t + r2 + i + n2 >>> 0;
}
Q$3.sum32_5 = xs$2;
function Ms$2(e, t, r2, i) {
  var n2 = e[t], o2 = e[t + 1], h2 = i + o2 >>> 0, p3 = (h2 < i ? 1 : 0) + r2 + n2;
  e[t] = p3 >>> 0, e[t + 1] = h2;
}
Q$3.sum64 = Ms$2;
function Es$2(e, t, r2, i) {
  var n2 = t + i >>> 0, o2 = (n2 < t ? 1 : 0) + e + r2;
  return o2 >>> 0;
}
Q$3.sum64_hi = Es$2;
function Ss$2(e, t, r2, i) {
  var n2 = t + i;
  return n2 >>> 0;
}
Q$3.sum64_lo = Ss$2;
function Ns$2(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = 0, m2 = t;
  m2 = m2 + i >>> 0, b3 += m2 < t ? 1 : 0, m2 = m2 + o2 >>> 0, b3 += m2 < o2 ? 1 : 0, m2 = m2 + p3 >>> 0, b3 += m2 < p3 ? 1 : 0;
  var w3 = e + r2 + n2 + h2 + b3;
  return w3 >>> 0;
}
Q$3.sum64_4_hi = Ns$2;
function Is$2(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = t + i + o2 + p3;
  return b3 >>> 0;
}
Q$3.sum64_4_lo = Is$2;
function _s$2(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = 0, y3 = t;
  y3 = y3 + i >>> 0, w3 += y3 < t ? 1 : 0, y3 = y3 + o2 >>> 0, w3 += y3 < o2 ? 1 : 0, y3 = y3 + p3 >>> 0, w3 += y3 < p3 ? 1 : 0, y3 = y3 + m2 >>> 0, w3 += y3 < m2 ? 1 : 0;
  var S2 = e + r2 + n2 + h2 + b3 + w3;
  return S2 >>> 0;
}
Q$3.sum64_5_hi = _s$2;
function Bs$2(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = t + i + o2 + p3 + m2;
  return w3 >>> 0;
}
Q$3.sum64_5_lo = Bs$2;
function Cs$2(e, t, r2) {
  var i = t << 32 - r2 | e >>> r2;
  return i >>> 0;
}
Q$3.rotr64_hi = Cs$2;
function Rs$2(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$3.rotr64_lo = Rs$2;
function Os$2(e, t, r2) {
  return e >>> r2;
}
Q$3.shr64_hi = Os$2;
function Ps$2(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$3.shr64_lo = Ps$2;
var fr$1 = {}, lf$1 = Q$3, Ds$2 = yr$2;
function Fr$2() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr$1.BlockHash = Fr$2, Fr$2.prototype.update = function(t, r2) {
  if (t = lf$1.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i = t.length % this._delta8;
    this.pending = t.slice(t.length - i, t.length), this.pending.length === 0 && (this.pending = null), t = lf$1.join32(t, 0, t.length - i, this.endian);
    for (var n2 = 0; n2 < t.length; n2 += this._delta32) this._update(t, n2, n2 + this._delta32);
  }
  return this;
}, Fr$2.prototype.digest = function(t) {
  return this.update(this._pad()), Ds$2(this.pending === null), this._digest(t);
}, Fr$2.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i = r2 - (t + this.padLength) % r2, n2 = new Array(i + this.padLength);
  n2[0] = 128;
  for (var o2 = 1; o2 < i; o2++) n2[o2] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
    n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = t >>> 24 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t & 255;
  } else for (n2[o2++] = t & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 24 & 255, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
  return n2;
};
var or$2 = {}, ae$1 = {}, Fs$2 = Q$3, ue$1 = Fs$2.rotr32;
function Ts$2(e, t, r2, i) {
  if (e === 0) return df$1(t, r2, i);
  if (e === 1 || e === 3) return vf$1(t, r2, i);
  if (e === 2) return pf$1(t, r2, i);
}
ae$1.ft_1 = Ts$2;
function df$1(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae$1.ch32 = df$1;
function pf$1(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae$1.maj32 = pf$1;
function vf$1(e, t, r2) {
  return e ^ t ^ r2;
}
ae$1.p32 = vf$1;
function Us$2(e) {
  return ue$1(e, 2) ^ ue$1(e, 13) ^ ue$1(e, 22);
}
ae$1.s0_256 = Us$2;
function ks$2(e) {
  return ue$1(e, 6) ^ ue$1(e, 11) ^ ue$1(e, 25);
}
ae$1.s1_256 = ks$2;
function qs$2(e) {
  return ue$1(e, 7) ^ ue$1(e, 18) ^ e >>> 3;
}
ae$1.g0_256 = qs$2;
function Ks$2(e) {
  return ue$1(e, 17) ^ ue$1(e, 19) ^ e >>> 10;
}
ae$1.g1_256 = Ks$2;
var sr$2 = Q$3, Hs$2 = fr$1, zs$2 = ae$1, _i$1 = sr$2.rotl32, wr$1 = sr$2.sum32, Ls$2 = sr$2.sum32_5, js$2 = zs$2.ft_1, mf$1 = Hs$2.BlockHash, Qs$2 = [1518500249, 1859775393, 2400959708, 3395469782];
function he$1() {
  if (!(this instanceof he$1)) return new he$1();
  mf$1.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr$2.inherits(he$1, mf$1);
var Js$2 = he$1;
he$1.blockSize = 512, he$1.outSize = 160, he$1.hmacStrength = 80, he$1.padLength = 64, he$1.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = _i$1(i[n2 - 3] ^ i[n2 - 8] ^ i[n2 - 14] ^ i[n2 - 16], 1);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4];
  for (n2 = 0; n2 < i.length; n2++) {
    var w3 = ~~(n2 / 20), y3 = Ls$2(_i$1(o2, 5), js$2(w3, h2, p3, b3), m2, i[n2], Qs$2[w3]);
    m2 = b3, b3 = p3, p3 = _i$1(h2, 30), h2 = o2, o2 = y3;
  }
  this.h[0] = wr$1(this.h[0], o2), this.h[1] = wr$1(this.h[1], h2), this.h[2] = wr$1(this.h[2], p3), this.h[3] = wr$1(this.h[3], b3), this.h[4] = wr$1(this.h[4], m2);
}, he$1.prototype._digest = function(t) {
  return t === "hex" ? sr$2.toHex32(this.h, "big") : sr$2.split32(this.h, "big");
};
var ar$2 = Q$3, Gs$2 = fr$1, ur$2 = ae$1, Ys$2 = yr$2, ie$3 = ar$2.sum32, Vs$2 = ar$2.sum32_4, Ws$2 = ar$2.sum32_5, Xs$2 = ur$2.ch32, Zs$2 = ur$2.maj32, $s$2 = ur$2.s0_256, ta$1 = ur$2.s1_256, ea$1 = ur$2.g0_256, ra$1 = ur$2.g1_256, gf$1 = Gs$2.BlockHash, ia$1 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce$1() {
  if (!(this instanceof ce$1)) return new ce$1();
  gf$1.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia$1, this.W = new Array(64);
}
ar$2.inherits(ce$1, gf$1);
var Af$1 = ce$1;
ce$1.blockSize = 512, ce$1.outSize = 256, ce$1.hmacStrength = 192, ce$1.padLength = 64, ce$1.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = Vs$2(ra$1(i[n2 - 2]), i[n2 - 7], ea$1(i[n2 - 15]), i[n2 - 16]);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4], w3 = this.h[5], y3 = this.h[6], S2 = this.h[7];
  for (Ys$2(this.k.length === i.length), n2 = 0; n2 < i.length; n2++) {
    var I2 = Ws$2(S2, ta$1(m2), Xs$2(m2, w3, y3), this.k[n2], i[n2]), N2 = ie$3($s$2(o2), Zs$2(o2, h2, p3));
    S2 = y3, y3 = w3, w3 = m2, m2 = ie$3(b3, I2), b3 = p3, p3 = h2, h2 = o2, o2 = ie$3(I2, N2);
  }
  this.h[0] = ie$3(this.h[0], o2), this.h[1] = ie$3(this.h[1], h2), this.h[2] = ie$3(this.h[2], p3), this.h[3] = ie$3(this.h[3], b3), this.h[4] = ie$3(this.h[4], m2), this.h[5] = ie$3(this.h[5], w3), this.h[6] = ie$3(this.h[6], y3), this.h[7] = ie$3(this.h[7], S2);
}, ce$1.prototype._digest = function(t) {
  return t === "hex" ? ar$2.toHex32(this.h, "big") : ar$2.split32(this.h, "big");
};
var Bi$1 = Q$3, bf$1 = Af$1;
function ye$2() {
  if (!(this instanceof ye$2)) return new ye$2();
  bf$1.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi$1.inherits(ye$2, bf$1);
var na$1 = ye$2;
ye$2.blockSize = 512, ye$2.outSize = 224, ye$2.hmacStrength = 192, ye$2.padLength = 64, ye$2.prototype._digest = function(t) {
  return t === "hex" ? Bi$1.toHex32(this.h.slice(0, 7), "big") : Bi$1.split32(this.h.slice(0, 7), "big");
};
var jt$2 = Q$3, fa$1 = fr$1, oa$1 = yr$2, le$1 = jt$2.rotr64_hi, de$2 = jt$2.rotr64_lo, yf$1 = jt$2.shr64_hi, wf$1 = jt$2.shr64_lo, Be$3 = jt$2.sum64, Ci$1 = jt$2.sum64_hi, Ri$1 = jt$2.sum64_lo, sa$1 = jt$2.sum64_4_hi, aa$1 = jt$2.sum64_4_lo, ua$1 = jt$2.sum64_5_hi, ha$1 = jt$2.sum64_5_lo, xf$1 = fa$1.BlockHash, ca$1 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne$2() {
  if (!(this instanceof ne$2)) return new ne$2();
  xf$1.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca$1, this.W = new Array(160);
}
jt$2.inherits(ne$2, xf$1);
var Mf$1 = ne$2;
ne$2.blockSize = 1024, ne$2.outSize = 512, ne$2.hmacStrength = 192, ne$2.padLength = 128, ne$2.prototype._prepareBlock = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 32; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2 += 2) {
    var o2 = xa$2(i[n2 - 4], i[n2 - 3]), h2 = Ma$1(i[n2 - 4], i[n2 - 3]), p3 = i[n2 - 14], b3 = i[n2 - 13], m2 = ya$2(i[n2 - 30], i[n2 - 29]), w3 = wa$1(i[n2 - 30], i[n2 - 29]), y3 = i[n2 - 32], S2 = i[n2 - 31];
    i[n2] = sa$1(o2, h2, p3, b3, m2, w3, y3, S2), i[n2 + 1] = aa$1(o2, h2, p3, b3, m2, w3, y3, S2);
  }
}, ne$2.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i = this.W, n2 = this.h[0], o2 = this.h[1], h2 = this.h[2], p3 = this.h[3], b3 = this.h[4], m2 = this.h[5], w3 = this.h[6], y3 = this.h[7], S2 = this.h[8], I2 = this.h[9], N2 = this.h[10], C2 = this.h[11], F2 = this.h[12], U2 = this.h[13], J2 = this.h[14], Bt2 = this.h[15];
  oa$1(this.k.length === i.length);
  for (var G = 0; G < i.length; G += 2) {
    var H = J2, z2 = Bt2, Pt2 = Aa$1(S2, I2), W = ba$2(S2, I2), Rt2 = la$1(S2, I2, N2, C2, F2), Yt3 = da$1(S2, I2, N2, C2, F2, U2), Y = this.k[G], Vt2 = this.k[G + 1], A2 = i[G], f2 = i[G + 1], a2 = ua$1(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2), c2 = ha$1(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2);
    H = ma$1(n2, o2), z2 = ga$1(n2, o2), Pt2 = pa$1(n2, o2, h2, p3, b3), W = va$1(n2, o2, h2, p3, b3, m2);
    var d3 = Ci$1(H, z2, Pt2, W), g3 = Ri$1(H, z2, Pt2, W);
    J2 = F2, Bt2 = U2, F2 = N2, U2 = C2, N2 = S2, C2 = I2, S2 = Ci$1(w3, y3, a2, c2), I2 = Ri$1(y3, y3, a2, c2), w3 = b3, y3 = m2, b3 = h2, m2 = p3, h2 = n2, p3 = o2, n2 = Ci$1(a2, c2, d3, g3), o2 = Ri$1(a2, c2, d3, g3);
  }
  Be$3(this.h, 0, n2, o2), Be$3(this.h, 2, h2, p3), Be$3(this.h, 4, b3, m2), Be$3(this.h, 6, w3, y3), Be$3(this.h, 8, S2, I2), Be$3(this.h, 10, N2, C2), Be$3(this.h, 12, F2, U2), Be$3(this.h, 14, J2, Bt2);
}, ne$2.prototype._digest = function(t) {
  return t === "hex" ? jt$2.toHex32(this.h, "big") : jt$2.split32(this.h, "big");
};
function la$1(e, t, r2, i, n2) {
  var o2 = e & r2 ^ ~e & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function da$1(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ ~t & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function pa$1(e, t, r2, i, n2) {
  var o2 = e & r2 ^ e & n2 ^ r2 & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function va$1(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ t & o2 ^ i & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function ma$1(e, t) {
  var r2 = le$1(e, t, 28), i = le$1(t, e, 2), n2 = le$1(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ga$1(e, t) {
  var r2 = de$2(e, t, 28), i = de$2(t, e, 2), n2 = de$2(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Aa$1(e, t) {
  var r2 = le$1(e, t, 14), i = le$1(e, t, 18), n2 = le$1(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ba$2(e, t) {
  var r2 = de$2(e, t, 14), i = de$2(e, t, 18), n2 = de$2(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ya$2(e, t) {
  var r2 = le$1(e, t, 1), i = le$1(e, t, 8), n2 = yf$1(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function wa$1(e, t) {
  var r2 = de$2(e, t, 1), i = de$2(e, t, 8), n2 = wf$1(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function xa$2(e, t) {
  var r2 = le$1(e, t, 19), i = le$1(t, e, 29), n2 = yf$1(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ma$1(e, t) {
  var r2 = de$2(e, t, 19), i = de$2(t, e, 29), n2 = wf$1(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
var Oi$1 = Q$3, Ef$1 = Mf$1;
function we$1() {
  if (!(this instanceof we$1)) return new we$1();
  Ef$1.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi$1.inherits(we$1, Ef$1);
var Ea$2 = we$1;
we$1.blockSize = 1024, we$1.outSize = 384, we$1.hmacStrength = 192, we$1.padLength = 128, we$1.prototype._digest = function(t) {
  return t === "hex" ? Oi$1.toHex32(this.h.slice(0, 12), "big") : Oi$1.split32(this.h.slice(0, 12), "big");
}, or$2.sha1 = Js$2, or$2.sha224 = na$1, or$2.sha256 = Af$1, or$2.sha384 = Ea$2, or$2.sha512 = Mf$1;
var Sf$1 = {}, Xe$3 = Q$3, Sa$2 = fr$1, Tr$2 = Xe$3.rotl32, Nf$1 = Xe$3.sum32, xr$2 = Xe$3.sum32_3, If$1 = Xe$3.sum32_4, _f$1 = Sa$2.BlockHash;
function pe$2() {
  if (!(this instanceof pe$2)) return new pe$2();
  _f$1.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe$3.inherits(pe$2, _f$1), Sf$1.ripemd160 = pe$2, pe$2.blockSize = 512, pe$2.outSize = 160, pe$2.hmacStrength = 192, pe$2.padLength = 64, pe$2.prototype._update = function(t, r2) {
  for (var i = this.h[0], n2 = this.h[1], o2 = this.h[2], h2 = this.h[3], p3 = this.h[4], b3 = i, m2 = n2, w3 = o2, y3 = h2, S2 = p3, I2 = 0; I2 < 80; I2++) {
    var N2 = Nf$1(Tr$2(If$1(i, Bf$1(I2, n2, o2, h2), t[_a$1[I2] + r2], Na$1(I2)), Ca$1[I2]), p3);
    i = p3, p3 = h2, h2 = Tr$2(o2, 10), o2 = n2, n2 = N2, N2 = Nf$1(Tr$2(If$1(b3, Bf$1(79 - I2, m2, w3, y3), t[Ba$1[I2] + r2], Ia$1(I2)), Ra$2[I2]), S2), b3 = S2, S2 = y3, y3 = Tr$2(w3, 10), w3 = m2, m2 = N2;
  }
  N2 = xr$2(this.h[1], o2, y3), this.h[1] = xr$2(this.h[2], h2, S2), this.h[2] = xr$2(this.h[3], p3, b3), this.h[3] = xr$2(this.h[4], i, m2), this.h[4] = xr$2(this.h[0], n2, w3), this.h[0] = N2;
}, pe$2.prototype._digest = function(t) {
  return t === "hex" ? Xe$3.toHex32(this.h, "little") : Xe$3.split32(this.h, "little");
};
function Bf$1(e, t, r2, i) {
  return e <= 15 ? t ^ r2 ^ i : e <= 31 ? t & r2 | ~t & i : e <= 47 ? (t | ~r2) ^ i : e <= 63 ? t & i | r2 & ~i : t ^ (r2 | ~i);
}
function Na$1(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia$1(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a$1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Ba$1 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ca$1 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Ra$2 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Oa$2 = Q$3, Pa$1 = yr$2;
function hr$3(e, t, r2) {
  if (!(this instanceof hr$3)) return new hr$3(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa$2.toArray(t, r2));
}
var Da$2 = hr$3;
hr$3.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa$1(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++) t.push(0);
  for (r2 = 0; r2 < t.length; r2++) t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++) t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr$3.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr$3.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q$3, t.common = fr$1, t.sha = or$2, t.ripemd = Sf$1, t.hmac = Da$2, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se$2);
function cr$3(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i, n2) {
    return Fa$1(i, n2 ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Fa$1() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi$1 = Cf$1;
function Cf$1(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
Cf$1.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var fe$2 = cr$3(function(e, t) {
  var r2 = t;
  function i(h2, p3) {
    if (Array.isArray(h2)) return h2.slice();
    if (!h2) return [];
    var b3 = [];
    if (typeof h2 != "string") {
      for (var m2 = 0; m2 < h2.length; m2++) b3[m2] = h2[m2] | 0;
      return b3;
    }
    if (p3 === "hex") {
      h2 = h2.replace(/[^a-z0-9]+/ig, ""), h2.length % 2 !== 0 && (h2 = "0" + h2);
      for (var m2 = 0; m2 < h2.length; m2 += 2) b3.push(parseInt(h2[m2] + h2[m2 + 1], 16));
    } else for (var m2 = 0; m2 < h2.length; m2++) {
      var w3 = h2.charCodeAt(m2), y3 = w3 >> 8, S2 = w3 & 255;
      y3 ? b3.push(y3, S2) : b3.push(S2);
    }
    return b3;
  }
  r2.toArray = i;
  function n2(h2) {
    return h2.length === 1 ? "0" + h2 : h2;
  }
  r2.zero2 = n2;
  function o2(h2) {
    for (var p3 = "", b3 = 0; b3 < h2.length; b3++) p3 += n2(h2[b3].toString(16));
    return p3;
  }
  r2.toHex = o2, r2.encode = function(p3, b3) {
    return b3 === "hex" ? o2(p3) : p3;
  };
}), Jt$3 = cr$3(function(e, t) {
  var r2 = t;
  r2.assert = Pi$1, r2.toArray = fe$2.toArray, r2.zero2 = fe$2.zero2, r2.toHex = fe$2.toHex, r2.encode = fe$2.encode;
  function i(b3, m2, w3) {
    var y3 = new Array(Math.max(b3.bitLength(), w3) + 1);
    y3.fill(0);
    for (var S2 = 1 << m2 + 1, I2 = b3.clone(), N2 = 0; N2 < y3.length; N2++) {
      var C2, F2 = I2.andln(S2 - 1);
      I2.isOdd() ? (F2 > (S2 >> 1) - 1 ? C2 = (S2 >> 1) - F2 : C2 = F2, I2.isubn(C2)) : C2 = 0, y3[N2] = C2, I2.iushrn(1);
    }
    return y3;
  }
  r2.getNAF = i;
  function n2(b3, m2) {
    var w3 = [[], []];
    b3 = b3.clone(), m2 = m2.clone();
    for (var y3 = 0, S2 = 0, I2; b3.cmpn(-y3) > 0 || m2.cmpn(-S2) > 0; ) {
      var N2 = b3.andln(3) + y3 & 3, C2 = m2.andln(3) + S2 & 3;
      N2 === 3 && (N2 = -1), C2 === 3 && (C2 = -1);
      var F2;
      N2 & 1 ? (I2 = b3.andln(7) + y3 & 7, (I2 === 3 || I2 === 5) && C2 === 2 ? F2 = -N2 : F2 = N2) : F2 = 0, w3[0].push(F2);
      var U2;
      C2 & 1 ? (I2 = m2.andln(7) + S2 & 7, (I2 === 3 || I2 === 5) && N2 === 2 ? U2 = -C2 : U2 = C2) : U2 = 0, w3[1].push(U2), 2 * y3 === F2 + 1 && (y3 = 1 - y3), 2 * S2 === U2 + 1 && (S2 = 1 - S2), b3.iushrn(1), m2.iushrn(1);
    }
    return w3;
  }
  r2.getJSF = n2;
  function o2(b3, m2, w3) {
    var y3 = "_" + m2;
    b3.prototype[m2] = function() {
      return this[y3] !== void 0 ? this[y3] : this[y3] = w3.call(this);
    };
  }
  r2.cachedProperty = o2;
  function h2(b3) {
    return typeof b3 == "string" ? r2.toArray(b3, "hex") : b3;
  }
  r2.parseBytes = h2;
  function p3(b3) {
    return new K$2(b3, "hex", "le");
  }
  r2.intFromLE = p3;
}), Ur$2 = Jt$3.getNAF, Ta$2 = Jt$3.getJSF, kr$2 = Jt$3.assert;
function Ce$1(e, t) {
  this.type = e, this.p = new K$2(t.p, 16), this.red = t.prime ? K$2.red(t.prime) : K$2.mont(this.p), this.zero = new K$2(0).toRed(this.red), this.one = new K$2(1).toRed(this.red), this.two = new K$2(2).toRed(this.red), this.n = t.n && new K$2(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze$2 = Ce$1;
Ce$1.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce$1.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce$1.prototype._fixedNafMul = function(t, r2) {
  kr$2(t.precomputed);
  var i = t._getDoubles(), n2 = Ur$2(r2, 1, this._bitLength), o2 = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
  o2 /= 3;
  var h2 = [], p3, b3;
  for (p3 = 0; p3 < n2.length; p3 += i.step) {
    b3 = 0;
    for (var m2 = p3 + i.step - 1; m2 >= p3; m2--) b3 = (b3 << 1) + n2[m2];
    h2.push(b3);
  }
  for (var w3 = this.jpoint(null, null, null), y3 = this.jpoint(null, null, null), S2 = o2; S2 > 0; S2--) {
    for (p3 = 0; p3 < h2.length; p3++) b3 = h2[p3], b3 === S2 ? y3 = y3.mixedAdd(i.points[p3]) : b3 === -S2 && (y3 = y3.mixedAdd(i.points[p3].neg()));
    w3 = w3.add(y3);
  }
  return w3.toP();
}, Ce$1.prototype._wnafMul = function(t, r2) {
  var i = 4, n2 = t._getNAFPoints(i);
  i = n2.wnd;
  for (var o2 = n2.points, h2 = Ur$2(r2, i, this._bitLength), p3 = this.jpoint(null, null, null), b3 = h2.length - 1; b3 >= 0; b3--) {
    for (var m2 = 0; b3 >= 0 && h2[b3] === 0; b3--) m2++;
    if (b3 >= 0 && m2++, p3 = p3.dblp(m2), b3 < 0) break;
    var w3 = h2[b3];
    kr$2(w3 !== 0), t.type === "affine" ? w3 > 0 ? p3 = p3.mixedAdd(o2[w3 - 1 >> 1]) : p3 = p3.mixedAdd(o2[-w3 - 1 >> 1].neg()) : w3 > 0 ? p3 = p3.add(o2[w3 - 1 >> 1]) : p3 = p3.add(o2[-w3 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p3.toP() : p3;
}, Ce$1.prototype._wnafMulAdd = function(t, r2, i, n2, o2) {
  var h2 = this._wnafT1, p3 = this._wnafT2, b3 = this._wnafT3, m2 = 0, w3, y3, S2;
  for (w3 = 0; w3 < n2; w3++) {
    S2 = r2[w3];
    var I2 = S2._getNAFPoints(t);
    h2[w3] = I2.wnd, p3[w3] = I2.points;
  }
  for (w3 = n2 - 1; w3 >= 1; w3 -= 2) {
    var N2 = w3 - 1, C2 = w3;
    if (h2[N2] !== 1 || h2[C2] !== 1) {
      b3[N2] = Ur$2(i[N2], h2[N2], this._bitLength), b3[C2] = Ur$2(i[C2], h2[C2], this._bitLength), m2 = Math.max(b3[N2].length, m2), m2 = Math.max(b3[C2].length, m2);
      continue;
    }
    var F2 = [r2[N2], null, null, r2[C2]];
    r2[N2].y.cmp(r2[C2].y) === 0 ? (F2[1] = r2[N2].add(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg())) : r2[N2].y.cmp(r2[C2].y.redNeg()) === 0 ? (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].add(r2[C2].neg())) : (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg()));
    var U2 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta$2(i[N2], i[C2]);
    for (m2 = Math.max(J2[0].length, m2), b3[N2] = new Array(m2), b3[C2] = new Array(m2), y3 = 0; y3 < m2; y3++) {
      var Bt2 = J2[0][y3] | 0, G = J2[1][y3] | 0;
      b3[N2][y3] = U2[(Bt2 + 1) * 3 + (G + 1)], b3[C2][y3] = 0, p3[N2] = F2;
    }
  }
  var H = this.jpoint(null, null, null), z2 = this._wnafT4;
  for (w3 = m2; w3 >= 0; w3--) {
    for (var Pt2 = 0; w3 >= 0; ) {
      var W = true;
      for (y3 = 0; y3 < n2; y3++) z2[y3] = b3[y3][w3] | 0, z2[y3] !== 0 && (W = false);
      if (!W) break;
      Pt2++, w3--;
    }
    if (w3 >= 0 && Pt2++, H = H.dblp(Pt2), w3 < 0) break;
    for (y3 = 0; y3 < n2; y3++) {
      var Rt2 = z2[y3];
      Rt2 !== 0 && (Rt2 > 0 ? S2 = p3[y3][Rt2 - 1 >> 1] : Rt2 < 0 && (S2 = p3[y3][-Rt2 - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w3 = 0; w3 < n2; w3++) p3[w3] = null;
  return o2 ? H : H.toP();
};
function Xt$3(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce$1.BasePoint = Xt$3, Xt$3.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt$3.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce$1.prototype.decodePoint = function(t, r2) {
  t = Jt$3.toArray(t, r2);
  var i = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
    t[0] === 6 ? kr$2(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr$2(t[t.length - 1] % 2 === 1);
    var n2 = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
    return n2;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt$3.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt$3.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", r2));
}, Xt$3.prototype.encode = function(t, r2) {
  return Jt$3.encode(this._encode(r2), t);
}, Xt$3.prototype.precompute = function(t) {
  if (this.precomputed) return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt$3.prototype._hasDoubles = function(t) {
  if (!this.precomputed) return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt$3.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i = [this], n2 = this, o2 = 0; o2 < r2; o2 += t) {
    for (var h2 = 0; h2 < t; h2++) n2 = n2.dbl();
    i.push(n2);
  }
  return { step: t, points: i };
}, Xt$3.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r2 = [this], i = (1 << t) - 1, n2 = i === 1 ? null : this.dbl(), o2 = 1; o2 < i; o2++) r2[o2] = r2[o2 - 1].add(n2);
  return { wnd: t, points: r2 };
}, Xt$3.prototype._getBeta = function() {
  return null;
}, Xt$3.prototype.dblp = function(t) {
  for (var r2 = this, i = 0; i < t; i++) r2 = r2.dbl();
  return r2;
};
var Di$1 = cr$3(function(e) {
  typeof Object.create == "function" ? e.exports = function(r2, i) {
    i && (r2.super_ = i, r2.prototype = Object.create(i.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e.exports = function(r2, i) {
    if (i) {
      r2.super_ = i;
      var n2 = function() {
      };
      n2.prototype = i.prototype, r2.prototype = new n2(), r2.prototype.constructor = r2;
    }
  };
}), Ua$1 = Jt$3.assert;
function Zt$2(e) {
  Ze$2.call(this, "short", e), this.a = new K$2(e.a, 16).toRed(this.red), this.b = new K$2(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di$1(Zt$2, Ze$2);
var ka$1 = Zt$2;
Zt$2.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i;
    if (t.beta) r2 = new K$2(t.beta, 16).toRed(this.red);
    else {
      var n2 = this._getEndoRoots(this.p);
      r2 = n2[0].cmp(n2[1]) < 0 ? n2[0] : n2[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda) i = new K$2(t.lambda, 16);
    else {
      var o2 = this._getEndoRoots(this.n);
      this.g.mul(o2[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i = o2[0] : (i = o2[1], Ua$1(this.g.mul(i).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h2;
    return t.basis ? h2 = t.basis.map(function(p3) {
      return { a: new K$2(p3.a, 16), b: new K$2(p3.b, 16) };
    }) : h2 = this._getEndoBasis(i), { beta: r2, lambda: i, basis: h2 };
  }
}, Zt$2.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K$2.mont(t), i = new K$2(2).toRed(r2).redInvm(), n2 = i.redNeg(), o2 = new K$2(3).toRed(r2).redNeg().redSqrt().redMul(i), h2 = n2.redAdd(o2).fromRed(), p3 = n2.redSub(o2).fromRed();
  return [h2, p3];
}, Zt$2.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = t, n2 = this.n.clone(), o2 = new K$2(1), h2 = new K$2(0), p3 = new K$2(0), b3 = new K$2(1), m2, w3, y3, S2, I2, N2, C2, F2 = 0, U2, J2; i.cmpn(0) !== 0; ) {
    var Bt2 = n2.div(i);
    U2 = n2.sub(Bt2.mul(i)), J2 = p3.sub(Bt2.mul(o2));
    var G = b3.sub(Bt2.mul(h2));
    if (!y3 && U2.cmp(r2) < 0) m2 = C2.neg(), w3 = o2, y3 = U2.neg(), S2 = J2;
    else if (y3 && ++F2 === 2) break;
    C2 = U2, n2 = i, i = U2, p3 = o2, o2 = J2, b3 = h2, h2 = G;
  }
  I2 = U2.neg(), N2 = J2;
  var H = y3.sqr().add(S2.sqr()), z2 = I2.sqr().add(N2.sqr());
  return z2.cmp(H) >= 0 && (I2 = m2, N2 = w3), y3.negative && (y3 = y3.neg(), S2 = S2.neg()), I2.negative && (I2 = I2.neg(), N2 = N2.neg()), [{ a: y3, b: S2 }, { a: I2, b: N2 }];
}, Zt$2.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i = r2[0], n2 = r2[1], o2 = n2.b.mul(t).divRound(this.n), h2 = i.b.neg().mul(t).divRound(this.n), p3 = o2.mul(i.a), b3 = h2.mul(n2.a), m2 = o2.mul(i.b), w3 = h2.mul(n2.b), y3 = t.sub(p3).sub(b3), S2 = m2.add(w3).neg();
  return { k1: y3, k2: S2 };
}, Zt$2.prototype.pointFromX = function(t, r2) {
  t = new K$2(t, 16), t.red || (t = t.toRed(this.red));
  var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n2 = i.redSqrt();
  if (n2.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o2 = n2.fromRed().isOdd();
  return (r2 && !o2 || !r2 && o2) && (n2 = n2.redNeg()), this.point(t, n2);
}, Zt$2.prototype.validate = function(t) {
  if (t.inf) return true;
  var r2 = t.x, i = t.y, n2 = this.a.redMul(r2), o2 = r2.redSqr().redMul(r2).redIAdd(n2).redIAdd(this.b);
  return i.redSqr().redISub(o2).cmpn(0) === 0;
}, Zt$2.prototype._endoWnafMulAdd = function(t, r2, i) {
  for (var n2 = this._endoWnafT1, o2 = this._endoWnafT2, h2 = 0; h2 < t.length; h2++) {
    var p3 = this._endoSplit(r2[h2]), b3 = t[h2], m2 = b3._getBeta();
    p3.k1.negative && (p3.k1.ineg(), b3 = b3.neg(true)), p3.k2.negative && (p3.k2.ineg(), m2 = m2.neg(true)), n2[h2 * 2] = b3, n2[h2 * 2 + 1] = m2, o2[h2 * 2] = p3.k1, o2[h2 * 2 + 1] = p3.k2;
  }
  for (var w3 = this._wnafMulAdd(1, n2, o2, h2 * 2, i), y3 = 0; y3 < h2 * 2; y3++) n2[y3] = null, o2[y3] = null;
  return w3;
};
function Ft$2(e, t, r2, i) {
  Ze$2.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K$2(t, 16), this.y = new K$2(r2, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di$1(Ft$2, Ze$2.BasePoint), Zt$2.prototype.point = function(t, r2, i) {
  return new Ft$2(this, t, r2, i);
}, Zt$2.prototype.pointFromJSON = function(t, r2) {
  return Ft$2.fromJSON(this, t, r2);
}, Ft$2.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i = this.curve, n2 = function(o2) {
        return i.point(o2.x.redMul(i.endo.beta), o2.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n2) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n2) } };
    }
    return r2;
  }
}, Ft$2.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft$2.fromJSON = function(t, r2, i) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n2 = t.point(r2[0], r2[1], i);
  if (!r2[2]) return n2;
  function o2(p3) {
    return t.point(p3[0], p3[1], i);
  }
  var h2 = r2[2];
  return n2.precomputed = { beta: null, doubles: h2.doubles && { step: h2.doubles.step, points: [n2].concat(h2.doubles.points.map(o2)) }, naf: h2.naf && { wnd: h2.naf.wnd, points: [n2].concat(h2.naf.points.map(o2)) } }, n2;
}, Ft$2.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft$2.prototype.isInfinity = function() {
  return this.inf;
}, Ft$2.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i = r2.redSqr().redISub(this.x).redISub(t.x), n2 = r2.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, n2);
}, Ft$2.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var r2 = this.curve.a, i = this.x.redSqr(), n2 = t.redInvm(), o2 = i.redAdd(i).redIAdd(i).redIAdd(r2).redMul(n2), h2 = o2.redSqr().redISub(this.x.redAdd(this.x)), p3 = o2.redMul(this.x.redSub(h2)).redISub(this.y);
  return this.curve.point(h2, p3);
}, Ft$2.prototype.getX = function() {
  return this.x.fromRed();
}, Ft$2.prototype.getY = function() {
  return this.y.fromRed();
}, Ft$2.prototype.mul = function(t) {
  return t = new K$2(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft$2.prototype.mulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2) : this.curve._wnafMulAdd(1, n2, o2, 2);
}, Ft$2.prototype.jmulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2, true) : this.curve._wnafMulAdd(1, n2, o2, 2, true);
}, Ft$2.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft$2.prototype.neg = function(t) {
  if (this.inf) return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i = this.precomputed, n2 = function(o2) {
      return o2.neg();
    };
    r2.precomputed = { naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(n2) }, doubles: i.doubles && { step: i.doubles.step, points: i.doubles.points.map(n2) } };
  }
  return r2;
}, Ft$2.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt$2(e, t, r2, i) {
  Ze$2.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K$2(0)) : (this.x = new K$2(t, 16), this.y = new K$2(r2, 16), this.z = new K$2(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di$1(Tt$2, Ze$2.BasePoint), Zt$2.prototype.jpoint = function(t, r2, i) {
  return new Tt$2(this, t, r2, i);
}, Tt$2.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i = this.x.redMul(r2), n2 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i, n2);
}, Tt$2.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt$2.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var r2 = t.z.redSqr(), i = this.z.redSqr(), n2 = this.x.redMul(r2), o2 = t.x.redMul(i), h2 = this.y.redMul(r2.redMul(t.z)), p3 = t.y.redMul(i.redMul(this.z)), b3 = n2.redSub(o2), m2 = h2.redSub(p3);
  if (b3.cmpn(0) === 0) return m2.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w3 = b3.redSqr(), y3 = w3.redMul(b3), S2 = n2.redMul(w3), I2 = m2.redSqr().redIAdd(y3).redISub(S2).redISub(S2), N2 = m2.redMul(S2.redISub(I2)).redISub(h2.redMul(y3)), C2 = this.z.redMul(t.z).redMul(b3);
  return this.curve.jpoint(I2, N2, C2);
}, Tt$2.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var r2 = this.z.redSqr(), i = this.x, n2 = t.x.redMul(r2), o2 = this.y, h2 = t.y.redMul(r2).redMul(this.z), p3 = i.redSub(n2), b3 = o2.redSub(h2);
  if (p3.cmpn(0) === 0) return b3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m2 = p3.redSqr(), w3 = m2.redMul(p3), y3 = i.redMul(m2), S2 = b3.redSqr().redIAdd(w3).redISub(y3).redISub(y3), I2 = b3.redMul(y3.redISub(S2)).redISub(o2.redMul(w3)), N2 = this.z.redMul(p3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$2.prototype.dblp = function(t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (r2 = 0; r2 < t; r2++) i = i.dbl();
    return i;
  }
  var n2 = this.curve.a, o2 = this.curve.tinv, h2 = this.x, p3 = this.y, b3 = this.z, m2 = b3.redSqr().redSqr(), w3 = p3.redAdd(p3);
  for (r2 = 0; r2 < t; r2++) {
    var y3 = h2.redSqr(), S2 = w3.redSqr(), I2 = S2.redSqr(), N2 = y3.redAdd(y3).redIAdd(y3).redIAdd(n2.redMul(m2)), C2 = h2.redMul(S2), F2 = N2.redSqr().redISub(C2.redAdd(C2)), U2 = C2.redISub(F2), J2 = N2.redMul(U2);
    J2 = J2.redIAdd(J2).redISub(I2);
    var Bt2 = w3.redMul(b3);
    r2 + 1 < t && (m2 = m2.redMul(I2)), h2 = F2, b3 = Bt2, w3 = J2;
  }
  return this.curve.jpoint(h2, w3.redMul(o2), b3);
}, Tt$2.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt$2.prototype._zeroDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2), m2 = b3.redSqr().redISub(p3).redISub(p3), w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), t = m2, r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.x.redSqr(), S2 = this.y.redSqr(), I2 = S2.redSqr(), N2 = this.x.redAdd(S2).redSqr().redISub(y3).redISub(I2);
    N2 = N2.redIAdd(N2);
    var C2 = y3.redAdd(y3).redIAdd(y3), F2 = C2.redSqr(), U2 = I2.redIAdd(I2);
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), t = F2.redISub(N2).redISub(N2), r2 = C2.redMul(N2.redISub(t)).redISub(U2), i = this.y.redMul(this.z), i = i.redIAdd(i);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt$2.prototype._threeDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), m2 = b3.redSqr().redISub(p3).redISub(p3);
    t = m2;
    var w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.z.redSqr(), S2 = this.y.redSqr(), I2 = this.x.redMul(S2), N2 = this.x.redSub(y3).redMul(this.x.redAdd(y3));
    N2 = N2.redAdd(N2).redIAdd(N2);
    var C2 = I2.redIAdd(I2);
    C2 = C2.redIAdd(C2);
    var F2 = C2.redAdd(C2);
    t = N2.redSqr().redISub(F2), i = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y3);
    var U2 = S2.redSqr();
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), r2 = N2.redMul(C2.redISub(t)).redISub(U2);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt$2.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i = this.y, n2 = this.z, o2 = n2.redSqr().redSqr(), h2 = r2.redSqr(), p3 = i.redSqr(), b3 = h2.redAdd(h2).redIAdd(h2).redIAdd(t.redMul(o2)), m2 = r2.redAdd(r2);
  m2 = m2.redIAdd(m2);
  var w3 = m2.redMul(p3), y3 = b3.redSqr().redISub(w3.redAdd(w3)), S2 = w3.redISub(y3), I2 = p3.redSqr();
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = b3.redMul(S2).redISub(I2), C2 = i.redAdd(i).redMul(n2);
  return this.curve.jpoint(y3, N2, C2);
}, Tt$2.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i = this.z.redSqr(), n2 = r2.redSqr(), o2 = t.redAdd(t).redIAdd(t), h2 = o2.redSqr(), p3 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n2);
  p3 = p3.redIAdd(p3), p3 = p3.redAdd(p3).redIAdd(p3), p3 = p3.redISub(h2);
  var b3 = p3.redSqr(), m2 = n2.redIAdd(n2);
  m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2);
  var w3 = o2.redIAdd(p3).redSqr().redISub(h2).redISub(b3).redISub(m2), y3 = r2.redMul(w3);
  y3 = y3.redIAdd(y3), y3 = y3.redIAdd(y3);
  var S2 = this.x.redMul(b3).redISub(y3);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var I2 = this.y.redMul(w3.redMul(m2.redISub(w3)).redISub(p3.redMul(b3)));
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = this.z.redAdd(p3).redSqr().redISub(i).redISub(b3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$2.prototype.mul = function(t, r2) {
  return t = new K$2(t, r2), this.curve._wnafMul(this, t);
}, Tt$2.prototype.eq = function(t) {
  if (t.type === "affine") return this.eq(t.toJ());
  if (this === t) return true;
  var r2 = this.z.redSqr(), i = t.z.redSqr();
  if (this.x.redMul(i).redISub(t.x.redMul(r2)).cmpn(0) !== 0) return false;
  var n2 = r2.redMul(this.z), o2 = i.redMul(t.z);
  return this.y.redMul(o2).redISub(t.y.redMul(n2)).cmpn(0) === 0;
}, Tt$2.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i) === 0) return true;
  for (var n2 = t.clone(), o2 = this.curve.redN.redMul(r2); ; ) {
    if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0) return false;
    if (i.redIAdd(o2), this.x.cmp(i) === 0) return true;
  }
}, Tt$2.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt$2.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr$1 = cr$3(function(e, t) {
  var r2 = t;
  r2.base = Ze$2, r2.short = ka$1, r2.mont = null, r2.edwards = null;
}), Kr$1 = cr$3(function(e, t) {
  var r2 = t, i = Jt$3.assert;
  function n2(p3) {
    p3.type === "short" ? this.curve = new qr$1.short(p3) : p3.type === "edwards" ? this.curve = new qr$1.edwards(p3) : this.curve = new qr$1.mont(p3), this.g = this.curve.g, this.n = this.curve.n, this.hash = p3.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n2;
  function o2(p3, b3) {
    Object.defineProperty(r2, p3, { configurable: true, enumerable: true, get: function() {
      var m2 = new n2(b3);
      return Object.defineProperty(r2, p3, { configurable: true, enumerable: true, value: m2 }), m2;
    } });
  }
  o2("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se$2.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o2("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se$2.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o2("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se$2.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o2("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se$2.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o2("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se$2.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o2("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se$2.sha256, gRed: false, g: ["9"] }), o2("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se$2.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h2;
  try {
    h2 = null.crash();
  } catch {
    h2 = void 0;
  }
  o2("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se$2.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h2] });
});
function Re$2(e) {
  if (!(this instanceof Re$2)) return new Re$2(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe$2.toArray(e.entropy, e.entropyEnc || "hex"), r2 = fe$2.toArray(e.nonce, e.nonceEnc || "hex"), i = fe$2.toArray(e.pers, e.persEnc || "hex");
  Pi$1(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i);
}
var Rf$1 = Re$2;
Re$2.prototype._init = function(t, r2, i) {
  var n2 = t.concat(r2).concat(i);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o2 = 0; o2 < this.V.length; o2++) this.K[o2] = 0, this.V[o2] = 1;
  this._update(n2), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re$2.prototype._hmac = function() {
  return new se$2.hmac(this.hash, this.K);
}, Re$2.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re$2.prototype.reseed = function(t, r2, i, n2) {
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), t = fe$2.toArray(t, r2), i = fe$2.toArray(i, n2), Pi$1(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i || [])), this._reseed = 1;
}, Re$2.prototype.generate = function(t, r2, i, n2) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), i && (i = fe$2.toArray(i, n2 || "hex"), this._update(i));
  for (var o2 = []; o2.length < t; ) this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
  var h2 = o2.slice(0, t);
  return this._update(i), this._reseed++, fe$2.encode(h2, r2);
};
var Fi$2 = Jt$3.assert;
function kt$2(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti$1 = kt$2;
kt$2.fromPublic = function(t, r2, i) {
  return r2 instanceof kt$2 ? r2 : new kt$2(t, { pub: r2, pubEnc: i });
}, kt$2.fromPrivate = function(t, r2, i) {
  return r2 instanceof kt$2 ? r2 : new kt$2(t, { priv: r2, privEnc: i });
}, kt$2.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt$2.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt$2.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt$2.prototype._importPrivate = function(t, r2) {
  this.priv = new K$2(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt$2.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi$2(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi$2(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt$2.prototype.derive = function(t) {
  return t.validate() || Fi$2(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt$2.prototype.sign = function(t, r2, i) {
  return this.ec.sign(t, this, r2, i);
}, kt$2.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt$2.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa$1 = Jt$3.assert;
function Hr$1(e, t) {
  if (e instanceof Hr$1) return e;
  this._importDER(e, t) || (qa$1(e.r && e.s, "Signature without r or s"), this.r = new K$2(e.r, 16), this.s = new K$2(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr$2 = Hr$1;
function Ka$1() {
  this.place = 0;
}
function Ui$2(e, t) {
  var r2 = e[t.place++];
  if (!(r2 & 128)) return r2;
  var i = r2 & 15;
  if (i === 0 || i > 4) return false;
  for (var n2 = 0, o2 = 0, h2 = t.place; o2 < i; o2++, h2++) n2 <<= 8, n2 |= e[h2], n2 >>>= 0;
  return n2 <= 127 ? false : (t.place = h2, n2);
}
function Of$1(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; ) t++;
  return t === 0 ? e : e.slice(t);
}
Hr$1.prototype._importDER = function(t, r2) {
  t = Jt$3.toArray(t, r2);
  var i = new Ka$1();
  if (t[i.place++] !== 48) return false;
  var n2 = Ui$2(t, i);
  if (n2 === false || n2 + i.place !== t.length || t[i.place++] !== 2) return false;
  var o2 = Ui$2(t, i);
  if (o2 === false) return false;
  var h2 = t.slice(i.place, o2 + i.place);
  if (i.place += o2, t[i.place++] !== 2) return false;
  var p3 = Ui$2(t, i);
  if (p3 === false || t.length !== p3 + i.place) return false;
  var b3 = t.slice(i.place, p3 + i.place);
  if (h2[0] === 0) if (h2[1] & 128) h2 = h2.slice(1);
  else return false;
  if (b3[0] === 0) if (b3[1] & 128) b3 = b3.slice(1);
  else return false;
  return this.r = new K$2(h2), this.s = new K$2(b3), this.recoveryParam = null, true;
};
function ki$1(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; ) e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Hr$1.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i[0] & 128 && (i = [0].concat(i)), r2 = Of$1(r2), i = Of$1(i); !i[0] && !(i[1] & 128); ) i = i.slice(1);
  var n2 = [2];
  ki$1(n2, r2.length), n2 = n2.concat(r2), n2.push(2), ki$1(n2, i.length);
  var o2 = n2.concat(i), h2 = [48];
  return ki$1(h2, o2.length), h2 = h2.concat(o2), Jt$3.encode(h2, t);
};
var Ha$1 = function() {
  throw new Error("unsupported");
}, Pf$1 = Jt$3.assert;
function $t$2(e) {
  if (!(this instanceof $t$2)) return new $t$2(e);
  typeof e == "string" && (Pf$1(Object.prototype.hasOwnProperty.call(Kr$1, e), "Unknown curve " + e), e = Kr$1[e]), e instanceof Kr$1.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za$1 = $t$2;
$t$2.prototype.keyPair = function(t) {
  return new Ti$1(this, t);
}, $t$2.prototype.keyFromPrivate = function(t, r2) {
  return Ti$1.fromPrivate(this, t, r2);
}, $t$2.prototype.keyFromPublic = function(t, r2) {
  return Ti$1.fromPublic(this, t, r2);
}, $t$2.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf$1({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha$1(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i = this.n.byteLength(), n2 = this.n.sub(new K$2(2)); ; ) {
    var o2 = new K$2(r2.generate(i));
    if (!(o2.cmp(n2) > 0)) return o2.iaddn(1), this.keyFromPrivate(o2);
  }
}, $t$2.prototype._truncateToN = function(t, r2) {
  var i = t.byteLength() * 8 - this.n.bitLength();
  return i > 0 && (t = t.ushrn(i)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t$2.prototype.sign = function(t, r2, i, n2) {
  typeof i == "object" && (n2 = i, i = null), n2 || (n2 = {}), r2 = this.keyFromPrivate(r2, i), t = this._truncateToN(new K$2(t, 16));
  for (var o2 = this.n.byteLength(), h2 = r2.getPrivate().toArray("be", o2), p3 = t.toArray("be", o2), b3 = new Rf$1({ hash: this.hash, entropy: h2, nonce: p3, pers: n2.pers, persEnc: n2.persEnc || "utf8" }), m2 = this.n.sub(new K$2(1)), w3 = 0; ; w3++) {
    var y3 = n2.k ? n2.k(w3) : new K$2(b3.generate(this.n.byteLength()));
    if (y3 = this._truncateToN(y3, true), !(y3.cmpn(1) <= 0 || y3.cmp(m2) >= 0)) {
      var S2 = this.g.mul(y3);
      if (!S2.isInfinity()) {
        var I2 = S2.getX(), N2 = I2.umod(this.n);
        if (N2.cmpn(0) !== 0) {
          var C2 = y3.invm(this.n).mul(N2.mul(r2.getPrivate()).iadd(t));
          if (C2 = C2.umod(this.n), C2.cmpn(0) !== 0) {
            var F2 = (S2.getY().isOdd() ? 1 : 0) | (I2.cmp(N2) !== 0 ? 2 : 0);
            return n2.canonical && C2.cmp(this.nh) > 0 && (C2 = this.n.sub(C2), F2 ^= 1), new zr$2({ r: N2, s: C2, recoveryParam: F2 });
          }
        }
      }
    }
  }
}, $t$2.prototype.verify = function(t, r2, i, n2) {
  t = this._truncateToN(new K$2(t, 16)), i = this.keyFromPublic(i, n2), r2 = new zr$2(r2, "hex");
  var o2 = r2.r, h2 = r2.s;
  if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0 || h2.cmpn(1) < 0 || h2.cmp(this.n) >= 0) return false;
  var p3 = h2.invm(this.n), b3 = p3.mul(t).umod(this.n), m2 = p3.mul(o2).umod(this.n), w3;
  return this.curve._maxwellTrick ? (w3 = this.g.jmulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.eqXToP(o2)) : (w3 = this.g.mulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.getX().umod(this.n).cmp(o2) === 0);
}, $t$2.prototype.recoverPubKey = function(e, t, r2, i) {
  Pf$1((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr$2(t, i);
  var n2 = this.n, o2 = new K$2(e), h2 = t.r, p3 = t.s, b3 = r2 & 1, m2 = r2 >> 1;
  if (h2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m2) throw new Error("Unable to find sencond key candinate");
  m2 ? h2 = this.curve.pointFromX(h2.add(this.curve.n), b3) : h2 = this.curve.pointFromX(h2, b3);
  var w3 = t.r.invm(n2), y3 = n2.sub(o2).mul(w3).umod(n2), S2 = p3.mul(w3).umod(n2);
  return this.g.mulAdd(y3, h2, S2);
}, $t$2.prototype.getKeyRecoveryParam = function(e, t, r2, i) {
  if (t = new zr$2(t, i), t.recoveryParam !== null) return t.recoveryParam;
  for (var n2 = 0; n2 < 4; n2++) {
    var o2;
    try {
      o2 = this.recoverPubKey(e, t, n2);
    } catch {
      continue;
    }
    if (o2.eq(r2)) return n2;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La$2 = cr$3(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt$3, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr$1, r2.curves = Kr$1, r2.ec = za$1, r2.eddsa = null;
}), ja = La$2.ec;
const Qa = "signing-key/5.7.0", qi$1 = new L$4(Qa);
let Ki = null;
function ve() {
  return Ki || (Ki = new ja("secp256k1")), Ki;
}
class Ja {
  constructor(t) {
    br$1(this, "curve", "secp256k1"), br$1(this, "privateKey", Kt$2(t)), N0(this.privateKey) !== 32 && qi$1.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r2 = ve().keyFromPrivate(Ot$2(this.privateKey));
    br$1(this, "publicKey", "0x" + r2.getPublic(false, "hex")), br$1(this, "compressedPublicKey", "0x" + r2.getPublic(true, "hex")), br$1(this, "_isSigningKey", true);
  }
  _addPoint(t) {
    const r2 = ve().keyFromPublic(Ot$2(this.publicKey)), i = ve().keyFromPublic(Ot$2(t));
    return "0x" + r2.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const r2 = ve().keyFromPrivate(Ot$2(this.privateKey)), i = Ot$2(t);
    i.length !== 32 && qi$1.throwArgumentError("bad digest length", "digest", t);
    const n2 = r2.sign(i, { canonical: true });
    return zn({ recoveryParam: n2.recoveryParam, r: oe$1("0x" + n2.r.toString(16), 32), s: oe$1("0x" + n2.s.toString(16), 32) });
  }
  computeSharedSecret(t) {
    const r2 = ve().keyFromPrivate(Ot$2(this.privateKey)), i = ve().keyFromPublic(Ot$2(Df(t)));
    return oe$1("0x" + r2.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function Ga(e, t) {
  const r2 = zn(t), i = { r: Ot$2(r2.r), s: Ot$2(r2.s) };
  return "0x" + ve().recoverPubKey(Ot$2(e), i, r2.recoveryParam).encode("hex", false);
}
function Df(e, t) {
  const r2 = Ot$2(e);
  if (r2.length === 32) {
    const i = new Ja(r2);
    return i.publicKey;
  } else {
    if (r2.length === 33) return "0x" + ve().keyFromPublic(r2).getPublic(false, "hex");
    if (r2.length === 65) return Kt$2(r2);
  }
  return qi$1.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var Ff$1;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff$1 || (Ff$1 = {}));
function Va(e) {
  const t = Df(e);
  return ns$1(Hn(yi(Hn(t, 1)), 12));
}
function Wa(e, t) {
  return Va(Ga(Ot$2(e), t));
}
const Xa = "https://rpc.walletconnect.com/v1";
async function Tf(e, t, r2, i, n2, o2) {
  switch (r2.t) {
    case "eip191":
      return Uf(e, t, r2.s);
    case "eip1271":
      return await kf(e, t, r2.s, i, n2, o2);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r2.t}`);
  }
}
function Uf(e, t, r2) {
  return Wa(ff(t), r2).toLowerCase() === e.toLowerCase();
}
async function kf(e, t, r2, i, n2, o2) {
  try {
    const h2 = "0x1626ba7e", p3 = "0000000000000000000000000000000000000000000000000000000000000040", b3 = "0000000000000000000000000000000000000000000000000000000000000041", m2 = r2.substring(2), w3 = ff(t).substring(2), y3 = h2 + w3 + p3 + b3 + m2, S2 = await fetch(`${o2 || Xa}/?chainId=${i}&projectId=${n2}`, { method: "POST", body: JSON.stringify({ id: Za(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e, data: y3 }, "latest"] }) }), { result: I2 } = await S2.json();
    return I2 ? I2.slice(0, h2.length).toLowerCase() === h2.toLowerCase() : false;
  } catch (h2) {
    return console.error("isValidEip1271Signature: ", h2), false;
  }
}
function Za() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var $a = Object.defineProperty, tu = Object.defineProperties, eu = Object.getOwnPropertyDescriptors, qf = Object.getOwnPropertySymbols, ru = Object.prototype.hasOwnProperty, iu = Object.prototype.propertyIsEnumerable, Kf = (e, t, r2) => t in e ? $a(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2, Hi = (e, t) => {
  for (var r2 in t || (t = {})) ru.call(t, r2) && Kf(e, r2, t[r2]);
  if (qf) for (var r2 of qf(t)) iu.call(t, r2) && Kf(e, r2, t[r2]);
  return e;
}, Hf = (e, t) => tu(e, eu(t));
const nu = "did:pkh:", Lr$1 = (e) => e == null ? void 0 : e.split(":"), zi = (e) => {
  const t = e && Lr$1(e);
  if (t) return e.includes(nu) ? t[3] : t[1];
}, fu = (e) => {
  const t = e && Lr$1(e);
  if (t) return t[2] + ":" + t[3];
}, Li = (e) => {
  const t = e && Lr$1(e);
  if (t) return t.pop();
};
async function ou(e) {
  const { cacao: t, projectId: r2 } = e, { s: i, p: n2 } = t, o2 = zf(n2, n2.iss), h2 = Li(n2.iss);
  return await Tf(h2, o2, i, zi(n2.iss), r2);
}
const zf = (e, t) => {
  const r2 = `${e.domain} wants you to sign in with your Ethereum account:`, i = Li(t);
  if (!e.aud && !e.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let n2 = e.statement || void 0;
  const o2 = `URI: ${e.aud || e.uri}`, h2 = `Version: ${e.version}`, p3 = `Chain ID: ${zi(t)}`, b3 = `Nonce: ${e.nonce}`, m2 = `Issued At: ${e.iat}`, w3 = e.resources ? `Resources:${e.resources.map((S2) => `
- ${S2}`).join("")}` : void 0, y3 = Qr(e.resources);
  if (y3) {
    const S2 = Oe(y3);
    n2 = Ji$1(n2, S2);
  }
  return [r2, i, "", n2, "", o2, h2, p3, b3, m2, w3].filter((S2) => S2 != null).join(`
`);
};
function Jf(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64");
}
function Gf(e) {
  return JSON.parse(Buffer.from(e, "base64").toString("utf-8"));
}
function me$1(e) {
  if (!e) throw new Error("No recap provided, value is undefined");
  if (!e.att) throw new Error("No `att` property found");
  const t = Object.keys(e.att);
  if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
  t.forEach((r2) => {
    const i = e.att[r2];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${r2}`);
    if (typeof i != "object") throw new Error(`Resource must be an object: ${r2}`);
    if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${r2}`);
    Object.keys(i).forEach((n2) => {
      const o2 = i[n2];
      if (!Array.isArray(o2)) throw new Error(`Ability limits ${n2} must be an array of objects, found: ${o2}`);
      if (!o2.length) throw new Error(`Value of ${n2} is empty array, must be an array with objects`);
      o2.forEach((h2) => {
        if (typeof h2 != "object") throw new Error(`Ability limits (${n2}) must be an array of objects, found: ${h2}`);
      });
    });
  });
}
function Yf(e, t, r2, i = {}) {
  return r2 == null ? void 0 : r2.sort((n2, o2) => n2.localeCompare(o2)), { att: { [e]: ji(t, r2, i) } };
}
function ji(e, t, r2 = {}) {
  t = t == null ? void 0 : t.sort((n2, o2) => n2.localeCompare(o2));
  const i = t.map((n2) => ({ [`${e}/${n2}`]: [r2] }));
  return Object.assign({}, ...i);
}
function jr(e) {
  return me$1(e), `urn:recap:${Jf(e).replace(/=/g, "")}`;
}
function Oe(e) {
  const t = Gf(e.replace("urn:recap:", ""));
  return me$1(t), t;
}
function cu(e, t, r2) {
  const i = Yf(e, t, r2);
  return jr(i);
}
function Qi$1(e) {
  return e && e.includes("urn:recap:");
}
function lu(e, t) {
  const r2 = Oe(e), i = Oe(t), n2 = Wf(r2, i);
  return jr(n2);
}
function Wf(e, t) {
  me$1(e), me$1(t);
  const r2 = Object.keys(e.att).concat(Object.keys(t.att)).sort((n2, o2) => n2.localeCompare(o2)), i = { att: {} };
  return r2.forEach((n2) => {
    var o2, h2;
    Object.keys(((o2 = e.att) == null ? void 0 : o2[n2]) || {}).concat(Object.keys(((h2 = t.att) == null ? void 0 : h2[n2]) || {})).sort((p3, b3) => p3.localeCompare(b3)).forEach((p3) => {
      var b3, m2;
      i.att[n2] = Hf(Hi({}, i.att[n2]), { [p3]: ((b3 = e.att[n2]) == null ? void 0 : b3[p3]) || ((m2 = t.att[n2]) == null ? void 0 : m2[p3]) });
    });
  }), i;
}
function Ji$1(e = "", t) {
  me$1(t);
  const r2 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e.includes(r2)) return e;
  const i = [];
  let n2 = 0;
  Object.keys(t.att).forEach((p3) => {
    const b3 = Object.keys(t.att[p3]).map((y3) => ({ ability: y3.split("/")[0], action: y3.split("/")[1] }));
    b3.sort((y3, S2) => y3.action.localeCompare(S2.action));
    const m2 = {};
    b3.forEach((y3) => {
      m2[y3.ability] || (m2[y3.ability] = []), m2[y3.ability].push(y3.action);
    });
    const w3 = Object.keys(m2).map((y3) => (n2++, `(${n2}) '${y3}': '${m2[y3].join("', '")}' for '${p3}'.`));
    i.push(w3.join(", ").replace(".,", "."));
  });
  const o2 = i.join(" "), h2 = `${r2}${o2}`;
  return `${e ? e + " " : ""}${h2}`;
}
function du(e) {
  var t;
  const r2 = Oe(e);
  me$1(r2);
  const i = (t = r2.att) == null ? void 0 : t.eip155;
  return i ? Object.keys(i).map((n2) => n2.split("/")[1]) : [];
}
function pu(e) {
  const t = Oe(e);
  me$1(t);
  const r2 = [];
  return Object.values(t.att).forEach((i) => {
    Object.values(i).forEach((n2) => {
      var o2;
      (o2 = n2 == null ? void 0 : n2[0]) != null && o2.chains && r2.push(n2[0].chains);
    });
  }), [...new Set(r2.flat())];
}
function Qr(e) {
  if (!e) return;
  const t = e == null ? void 0 : e[e.length - 1];
  return Qi$1(t) ? t : void 0;
}
const Gi = "base10", zt$1 = "base16", Jr = "base64pad", Gr = "utf8", Yi = 0, lr$2 = 1, vu = 0, Zf = 1, Vi = 12, Wi$2 = 32;
function mu() {
  const e = x25519.generateKeyPair();
  return { privateKey: toString(e.secretKey, zt$1), publicKey: toString(e.publicKey, zt$1) };
}
function gu() {
  const e = random.randomBytes(Wi$2);
  return toString(e, zt$1);
}
function Au(e, t) {
  const r2 = x25519.sharedKey(fromString(e, zt$1), fromString(t, zt$1), true), i = new HKDF_1(sha256.SHA256, r2).expand(Wi$2);
  return toString(i, zt$1);
}
function bu(e) {
  const t = sha256.hash(fromString(e, zt$1));
  return toString(t, zt$1);
}
function yu(e) {
  const t = sha256.hash(fromString(e, Gr));
  return toString(t, zt$1);
}
function $f(e) {
  return fromString(`${e}`, Gi);
}
function Mr(e) {
  return Number(toString(e, Gi));
}
function wu(e) {
  const t = $f(typeof e.type < "u" ? e.type : Yi);
  if (Mr(t) === lr$2 && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const r2 = typeof e.senderPublicKey < "u" ? fromString(e.senderPublicKey, zt$1) : void 0, i = typeof e.iv < "u" ? fromString(e.iv, zt$1) : random.randomBytes(Vi), n2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, zt$1)).seal(i, fromString(e.message, Gr));
  return to({ type: t, sealed: n2, iv: i, senderPublicKey: r2 });
}
function xu(e) {
  const t = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, zt$1)), { sealed: r2, iv: i } = Xi$1(e.encoded), n2 = t.open(i, r2);
  if (n2 === null) throw new Error("Failed to decrypt");
  return toString(n2, Gr);
}
function to(e) {
  if (Mr(e.type) === lr$2) {
    if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e.type, e.senderPublicKey, e.iv, e.sealed]), Jr);
  }
  return toString(concat([e.type, e.iv, e.sealed]), Jr);
}
function Xi$1(e) {
  const t = fromString(e, Jr), r2 = t.slice(vu, Zf), i = Zf;
  if (Mr(r2) === lr$2) {
    const p3 = i + Wi$2, b3 = p3 + Vi, m2 = t.slice(i, p3), w3 = t.slice(p3, b3), y3 = t.slice(b3);
    return { type: r2, sealed: y3, iv: w3, senderPublicKey: m2 };
  }
  const n2 = i + Vi, o2 = t.slice(i, n2), h2 = t.slice(n2);
  return { type: r2, sealed: h2, iv: o2 };
}
function Mu(e, t) {
  const r2 = Xi$1(e);
  return eo({ type: Mr(r2.type), senderPublicKey: typeof r2.senderPublicKey < "u" ? toString(r2.senderPublicKey, zt$1) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function eo(e) {
  const t = (e == null ? void 0 : e.type) || Yi;
  if (t === lr$2) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function Eu(e) {
  return e.type === lr$2 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
const ro = "irn";
function Su(e) {
  return (e == null ? void 0 : e.relay) || { protocol: ro };
}
function Nu(e) {
  const t = C$2[e];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var Iu = Object.defineProperty, _u = Object.defineProperties, Bu = Object.getOwnPropertyDescriptors, io = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, no = (e, t, r2) => t in e ? Iu(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2, fo = (e, t) => {
  for (var r2 in t || (t = {})) Cu.call(t, r2) && no(e, r2, t[r2]);
  if (io) for (var r2 of io(t)) Ru.call(t, r2) && no(e, r2, t[r2]);
  return e;
}, Ou = (e, t) => _u(e, Bu(t));
function oo(e, t = "-") {
  const r2 = {}, i = "relay" + t;
  return Object.keys(e).forEach((n2) => {
    if (n2.startsWith(i)) {
      const o2 = n2.replace(i, ""), h2 = e[n2];
      r2[o2] = h2;
    }
  }), r2;
}
function Pu(e) {
  e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
  const t = e.indexOf(":"), r2 = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n2 = e.substring(t + 1, r2).split("@"), o2 = typeof r2 < "u" ? e.substring(r2) : "", h2 = queryString.parse(o2), p3 = typeof h2.methods == "string" ? h2.methods.split(",") : void 0;
  return { protocol: i, topic: so(n2[0]), version: parseInt(n2[1], 10), symKey: h2.symKey, relay: oo(h2), methods: p3, expiryTimestamp: h2.expiryTimestamp ? parseInt(h2.expiryTimestamp, 10) : void 0 };
}
function so(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function ao(e, t = "-") {
  const r2 = "relay", i = {};
  return Object.keys(e).forEach((n2) => {
    const o2 = r2 + t + n2;
    e[n2] && (i[o2] = e[n2]);
  }), i;
}
function Du(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + queryString.stringify(fo(Ou(fo({ symKey: e.symKey }, ao(e.relay)), { expiryTimestamp: e.expiryTimestamp }), e.methods ? { methods: e.methods.join(",") } : {}));
}
function $e$1(e) {
  const t = [];
  return e.forEach((r2) => {
    const [i, n2] = r2.split(":");
    t.push(`${i}:${n2}`);
  }), t;
}
function co(e) {
  const t = [];
  return Object.values(e).forEach((r2) => {
    t.push(...$e$1(r2.accounts));
  }), t;
}
function lo(e, t) {
  const r2 = [];
  return Object.values(e).forEach((i) => {
    $e$1(i.accounts).includes(t) && r2.push(...i.methods);
  }), r2;
}
function po(e, t) {
  const r2 = [];
  return Object.values(e).forEach((i) => {
    $e$1(i.accounts).includes(t) && r2.push(...i.events);
  }), r2;
}
function mo(e) {
  const t = {};
  return e == null ? void 0 : e.forEach((r2) => {
    const [i, n2] = r2.split(":");
    t[i] || (t[i] = { accounts: [], chains: [], events: [] }), t[i].accounts.push(r2), t[i].chains.push(`${i}:${n2}`);
  }), t;
}
function ju(e, t) {
  t = t.map((i) => i.replace("did:pkh:", ""));
  const r2 = mo(t);
  for (const [i, n2] of Object.entries(r2)) n2.methods ? n2.methods = ge$3(n2.methods, e) : n2.methods = e, n2.events = ["chainChanged", "accountsChanged"];
  return r2;
}
const go$1 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Ao = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function xe(e, t) {
  const { message: r2, code: i } = Ao[e];
  return { message: t ? `${r2} ${t}` : r2, code: i };
}
function tr$2(e, t) {
  const { message: r2, code: i } = go$1[e];
  return { message: t ? `${r2} ${t}` : r2, code: i };
}
function Er$1(e, t) {
  return Array.isArray(e) ? true : false;
}
function Yr$1(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Pe(e) {
  return typeof e > "u";
}
function Gt$1(e, t) {
  return t && Pe(e) ? true : typeof e == "string" && !!e.trim().length;
}
function Vr(e, t) {
  return typeof e == "number" && !isNaN(e);
}
function Qu(e, t) {
  const { requiredNamespaces: r2 } = t, i = Object.keys(e.namespaces), n2 = Object.keys(r2);
  let o2 = true;
  return _e$1(n2, i) ? (i.forEach((h2) => {
    const { accounts: p3, methods: b3, events: m2 } = e.namespaces[h2], w3 = $e$1(p3), y3 = r2[h2];
    (!_e$1(_r$1(h2, y3), w3) || !_e$1(y3.methods, b3) || !_e$1(y3.events, m2)) && (o2 = false);
  }), o2) : false;
}
function Sr$1(e) {
  return Gt$1(e, false) && e.includes(":") ? e.split(":").length === 2 : false;
}
function bo(e) {
  if (Gt$1(e, false) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r2 = t[0] + ":" + t[1];
      return !!t[2] && Sr$1(r2);
    }
  }
  return false;
}
function Ju(e) {
  if (Gt$1(e, false)) try {
    return typeof new URL(e) < "u";
  } catch {
    return false;
  }
  return false;
}
function Gu(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function Yu(e) {
  return e == null ? void 0 : e.topic;
}
function Vu(e, t) {
  let r2 = null;
  return Gt$1(e == null ? void 0 : e.publicKey, false) || (r2 = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r2;
}
function tn(e) {
  let t = true;
  return Er$1(e) ? e.length && (t = e.every((r2) => Gt$1(r2, false))) : t = false, t;
}
function yo(e, t, r2) {
  let i = null;
  return Er$1(t) && t.length ? t.forEach((n2) => {
    i || Sr$1(n2) || (i = tr$2("UNSUPPORTED_CHAINS", `${r2}, chain ${n2} should be a string and conform to "namespace:chainId" format`));
  }) : Sr$1(e) || (i = tr$2("UNSUPPORTED_CHAINS", `${r2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function wo(e, t, r2) {
  let i = null;
  return Object.entries(e).forEach(([n2, o2]) => {
    if (i) return;
    const h2 = yo(n2, _r$1(n2, o2), `${t} ${r2}`);
    h2 && (i = h2);
  }), i;
}
function xo(e, t) {
  let r2 = null;
  return Er$1(e) ? e.forEach((i) => {
    r2 || bo(i) || (r2 = tr$2("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r2 = tr$2("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r2;
}
function Mo(e, t) {
  let r2 = null;
  return Object.values(e).forEach((i) => {
    if (r2) return;
    const n2 = xo(i == null ? void 0 : i.accounts, `${t} namespace`);
    n2 && (r2 = n2);
  }), r2;
}
function Eo(e, t) {
  let r2 = null;
  return tn(e == null ? void 0 : e.methods) ? tn(e == null ? void 0 : e.events) || (r2 = tr$2("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r2 = tr$2("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r2;
}
function en(e, t) {
  let r2 = null;
  return Object.values(e).forEach((i) => {
    if (r2) return;
    const n2 = Eo(i, `${t}, namespace`);
    n2 && (r2 = n2);
  }), r2;
}
function Wu(e, t, r2) {
  let i = null;
  if (e && Yr$1(e)) {
    const n2 = en(e, t);
    n2 && (i = n2);
    const o2 = wo(e, t, r2);
    o2 && (i = o2);
  } else i = xe("MISSING_OR_INVALID", `${t}, ${r2} should be an object with data`);
  return i;
}
function So(e, t) {
  let r2 = null;
  if (e && Yr$1(e)) {
    const i = en(e, t);
    i && (r2 = i);
    const n2 = Mo(e, t);
    n2 && (r2 = n2);
  } else r2 = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r2;
}
function No(e) {
  return Gt$1(e.protocol, true);
}
function Xu(e, t) {
  let r2 = false;
  return !e ? r2 = true : e && Er$1(e) && e.length && e.forEach((i) => {
    r2 = No(i);
  }), r2;
}
function Zu(e) {
  return typeof e == "number";
}
function $u(e) {
  return typeof e < "u" && typeof e !== null;
}
function th(e) {
  return !(!e || typeof e != "object" || !e.code || !Vr(e.code) || !e.message || !Gt$1(e.message, false));
}
function eh(e) {
  return !(Pe(e) || !Gt$1(e.method, false));
}
function rh(e) {
  return !(Pe(e) || Pe(e.result) && Pe(e.error) || !Vr(e.id) || !Gt$1(e.jsonrpc, false));
}
function ih(e) {
  return !(Pe(e) || !Gt$1(e.name, false));
}
function nh(e, t) {
  return !(!Sr$1(t) || !co(e).includes(t));
}
function fh(e, t, r2) {
  return Gt$1(r2, false) ? lo(e, t).includes(r2) : false;
}
function oh(e, t, r2) {
  return Gt$1(r2, false) ? po(e, t).includes(r2) : false;
}
function Io(e, t, r2) {
  let i = null;
  const n2 = sh(e), o2 = ah(t), h2 = Object.keys(n2), p3 = Object.keys(o2), b3 = _o(Object.keys(e)), m2 = _o(Object.keys(t)), w3 = b3.filter((y3) => !m2.includes(y3));
  return w3.length && (i = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w3.toString()}
      Received: ${Object.keys(t).toString()}`)), _e$1(h2, p3) || (i = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces chains don't satisfy required namespaces.
      Required: ${h2.toString()}
      Approved: ${p3.toString()}`)), Object.keys(t).forEach((y3) => {
    if (!y3.includes(":") || i) return;
    const S2 = $e$1(t[y3].accounts);
    S2.includes(y3) || (i = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces accounts don't satisfy namespace accounts for ${y3}
        Required: ${y3}
        Approved: ${S2.toString()}`));
  }), h2.forEach((y3) => {
    i || (_e$1(n2[y3].methods, o2[y3].methods) ? _e$1(n2[y3].events, o2[y3].events) || (i = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces events don't satisfy namespace events for ${y3}`)) : i = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces methods don't satisfy namespace methods for ${y3}`));
  }), i;
}
function sh(e) {
  const t = {};
  return Object.keys(e).forEach((r2) => {
    var i;
    r2.includes(":") ? t[r2] = e[r2] : (i = e[r2].chains) == null || i.forEach((n2) => {
      t[n2] = { methods: e[r2].methods, events: e[r2].events };
    });
  }), t;
}
function _o(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function ah(e) {
  const t = {};
  return Object.keys(e).forEach((r2) => {
    if (r2.includes(":")) t[r2] = e[r2];
    else {
      const i = $e$1(e[r2].accounts);
      i == null ? void 0 : i.forEach((n2) => {
        t[n2] = { accounts: e[r2].accounts.filter((o2) => o2.includes(`${n2}:`)), methods: e[r2].methods, events: e[r2].events };
      });
    }
  }), t;
}
function uh(e, t) {
  return Vr(e) && e <= t.max && e >= t.min;
}
function hh() {
  const e = We$2();
  return new Promise((t) => {
    switch (e) {
      case qt$1.browser:
        t(Bo());
        break;
      case qt$1.reactNative:
        t(Co());
        break;
      case qt$1.node:
        t(Ro());
        break;
      default:
        t(true);
    }
  });
}
function Bo() {
  return pr$1() && (navigator == null ? void 0 : navigator.onLine);
}
async function Co() {
  if (er$1() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return true;
}
function Ro() {
  return true;
}
function ch(e) {
  switch (We$2()) {
    case qt$1.browser:
      Oo(e);
      break;
    case qt$1.reactNative:
      Po(e);
      break;
  }
}
function Oo(e) {
  !er$1() && pr$1() && (window.addEventListener("online", () => e(true)), window.addEventListener("offline", () => e(false)));
}
function Po(e) {
  er$1() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((t) => e(t == null ? void 0 : t.isConnected)));
}
const rn = {};
class lh {
  static get(t) {
    return rn[t];
  }
  static set(t, r2) {
    rn[t] = r2;
  }
  static delete(t) {
    delete rn[t];
  }
}
let JsonRpcProvider$1 = class JsonRpcProvider extends r {
  constructor(connection) {
    super(connection);
    this.events = new eventsExports.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
};
var define_process_env_default = {};
function Ji(n2, e) {
  if (n2.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < n2.length; s++) {
    var r2 = n2.charAt(s), o2 = r2.charCodeAt(0);
    if (t[o2] !== 255) throw new TypeError(r2 + " is ambiguous");
    t[o2] = s;
  }
  var a2 = n2.length, h2 = n2.charAt(0), l2 = Math.log(a2) / Math.log(256), d3 = Math.log(256) / Math.log(a2);
  function g3(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u3.length === 0) return "";
    for (var p3 = 0, _2 = 0, D2 = 0, P2 = u3.length; D2 !== P2 && u3[D2] === 0; ) D2++, p3++;
    for (var x = (P2 - D2) * d3 + 1 >>> 0, E3 = new Uint8Array(x); D2 !== P2; ) {
      for (var O2 = u3[D2], N2 = 0, R = x - 1; (O2 !== 0 || N2 < _2) && R !== -1; R--, N2++) O2 += 256 * E3[R] >>> 0, E3[R] = O2 % a2 >>> 0, O2 = O2 / a2 >>> 0;
      if (O2 !== 0) throw new Error("Non-zero carry");
      _2 = N2, D2++;
    }
    for (var A2 = x - _2; A2 !== x && E3[A2] === 0; ) A2++;
    for (var j2 = h2.repeat(p3); A2 < x; ++A2) j2 += n2.charAt(E3[A2]);
    return j2;
  }
  function m2(u3) {
    if (typeof u3 != "string") throw new TypeError("Expected String");
    if (u3.length === 0) return new Uint8Array();
    var p3 = 0;
    if (u3[p3] !== " ") {
      for (var _2 = 0, D2 = 0; u3[p3] === h2; ) _2++, p3++;
      for (var P2 = (u3.length - p3) * l2 + 1 >>> 0, x = new Uint8Array(P2); u3[p3]; ) {
        var E3 = t[u3.charCodeAt(p3)];
        if (E3 === 255) return;
        for (var O2 = 0, N2 = P2 - 1; (E3 !== 0 || O2 < D2) && N2 !== -1; N2--, O2++) E3 += a2 * x[N2] >>> 0, x[N2] = E3 % 256 >>> 0, E3 = E3 / 256 >>> 0;
        if (E3 !== 0) throw new Error("Non-zero carry");
        D2 = O2, p3++;
      }
      if (u3[p3] !== " ") {
        for (var R = P2 - D2; R !== P2 && x[R] === 0; ) R++;
        for (var A2 = new Uint8Array(_2 + (P2 - R)), j2 = _2; R !== P2; ) A2[j2++] = x[R++];
        return A2;
      }
    }
  }
  function L5(u3) {
    var p3 = m2(u3);
    if (p3) return p3;
    throw new Error(`Non-${e} character`);
  }
  return { encode: g3, decodeUnsafe: m2, decode: L5 };
}
var Xi = Ji, Wi$1 = Xi;
const Ue$1 = (n2) => {
  if (n2 instanceof Uint8Array && n2.constructor.name === "Uint8Array") return n2;
  if (n2 instanceof ArrayBuffer) return new Uint8Array(n2);
  if (ArrayBuffer.isView(n2)) return new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Qi = (n2) => new TextEncoder().encode(n2), Zi$1 = (n2) => new TextDecoder().decode(n2);
let es$1 = class es {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
let ts$1 = class ts {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return $e(this, e);
  }
};
let is$1 = class is {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return $e(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const $e = (n2, e) => new is$1({ ...n2.decoders || { [n2.prefix]: n2 }, ...e.decoders || { [e.prefix]: e } });
let ss$2 = class ss {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new es$1(e, t, i), this.decoder = new ts$1(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
const Q$2 = ({ name: n2, prefix: e, encode: t, decode: i }) => new ss$2(n2, e, t, i), K$1 = ({ prefix: n2, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = Wi$1(t, e);
  return Q$2({ prefix: n2, name: e, encode: i, decode: (r2) => Ue$1(s(r2)) });
}, rs$1 = (n2, e, t, i) => {
  const s = {};
  for (let d3 = 0; d3 < e.length; ++d3) s[e[d3]] = d3;
  let r2 = n2.length;
  for (; n2[r2 - 1] === "="; ) --r2;
  const o2 = new Uint8Array(r2 * t / 8 | 0);
  let a2 = 0, h2 = 0, l2 = 0;
  for (let d3 = 0; d3 < r2; ++d3) {
    const g3 = s[n2[d3]];
    if (g3 === void 0) throw new SyntaxError(`Non-${i} character`);
    h2 = h2 << t | g3, a2 += t, a2 >= 8 && (a2 -= 8, o2[l2++] = 255 & h2 >> a2);
  }
  if (a2 >= t || 255 & h2 << 8 - a2) throw new SyntaxError("Unexpected end of data");
  return o2;
}, ns = (n2, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let r2 = "", o2 = 0, a2 = 0;
  for (let h2 = 0; h2 < n2.length; ++h2) for (a2 = a2 << 8 | n2[h2], o2 += 8; o2 > t; ) o2 -= t, r2 += e[s & a2 >> o2];
  if (o2 && (r2 += e[s & a2 << t - o2]), i) for (; r2.length * t & 7; ) r2 += "=";
  return r2;
}, y2 = ({ name: n2, prefix: e, bitsPerChar: t, alphabet: i }) => Q$2({ prefix: e, name: n2, encode(s) {
  return ns(s, i, t);
}, decode(s) {
  return rs$1(s, i, t, n2);
} }), os$1 = Q$2({ prefix: "\0", name: "identity", encode: (n2) => Zi$1(n2), decode: (n2) => Qi(n2) });
var as$1 = Object.freeze({ __proto__: null, identity: os$1 });
const hs$1 = y2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var cs$1 = Object.freeze({ __proto__: null, base2: hs$1 });
const ls$1 = y2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var us$1 = Object.freeze({ __proto__: null, base8: ls$1 });
const ds$1 = K$1({ prefix: "9", name: "base10", alphabet: "0123456789" });
var gs$1 = Object.freeze({ __proto__: null, base10: ds$1 });
const ps$1 = y2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Ds$1 = y2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var ys$1 = Object.freeze({ __proto__: null, base16: ps$1, base16upper: Ds$1 });
const ms$1 = y2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), bs$1 = y2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), fs = y2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Es$1 = y2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), ws$1 = y2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), vs$1 = y2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Is$1 = y2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Cs$1 = y2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), _s$1 = y2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Rs$1 = Object.freeze({ __proto__: null, base32: ms$1, base32upper: bs$1, base32pad: fs, base32padupper: Es$1, base32hex: ws$1, base32hexupper: vs$1, base32hexpad: Is$1, base32hexpadupper: Cs$1, base32z: _s$1 });
const Ts$1 = K$1({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Ss$1 = K$1({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ps$1 = Object.freeze({ __proto__: null, base36: Ts$1, base36upper: Ss$1 });
const xs$1 = K$1({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Os$1 = K$1({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var As$1 = Object.freeze({ __proto__: null, base58btc: xs$1, base58flickr: Os$1 });
const zs$1 = y2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Ns$1 = y2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Ls$1 = y2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Us$1 = y2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var $s$1 = Object.freeze({ __proto__: null, base64: zs$1, base64pad: Ns$1, base64url: Ls$1, base64urlpad: Us$1 });
const Fe$1 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Fs$1 = Fe$1.reduce((n2, e, t) => (n2[t] = e, n2), []), ks$1 = Fe$1.reduce((n2, e, t) => (n2[e.codePointAt(0)] = t, n2), []);
function Bs$1(n2) {
  return n2.reduce((e, t) => (e += Fs$1[t], e), "");
}
function Ms$1(n2) {
  const e = [];
  for (const t of n2) {
    const i = ks$1[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Ks$1 = Q$2({ prefix: "🚀", name: "base256emoji", encode: Bs$1, decode: Ms$1 });
var Vs$1 = Object.freeze({ __proto__: null, base256emoji: Ks$1 }), qs$1 = Be$2, ke$1 = 128, js$1 = 127, Gs$1 = ~js$1, Ys$1 = Math.pow(2, 31);
function Be$2(n2, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; n2 >= Ys$1; ) e[t++] = n2 & 255 | ke$1, n2 /= 128;
  for (; n2 & Gs$1; ) e[t++] = n2 & 255 | ke$1, n2 >>>= 7;
  return e[t] = n2 | 0, Be$2.bytes = t - i + 1, e;
}
var Hs$1 = de$1, Js$1 = 128, Me = 127;
function de$1(n2, i) {
  var t = 0, i = i || 0, s = 0, r2 = i, o2, a2 = n2.length;
  do {
    if (r2 >= a2) throw de$1.bytes = 0, new RangeError("Could not decode varint");
    o2 = n2[r2++], t += s < 28 ? (o2 & Me) << s : (o2 & Me) * Math.pow(2, s), s += 7;
  } while (o2 >= Js$1);
  return de$1.bytes = r2 - i, t;
}
var Xs$1 = Math.pow(2, 7), Ws$1 = Math.pow(2, 14), Qs$1 = Math.pow(2, 21), Zs$1 = Math.pow(2, 28), er = Math.pow(2, 35), tr$1 = Math.pow(2, 42), ir$1 = Math.pow(2, 49), sr$1 = Math.pow(2, 56), rr$1 = Math.pow(2, 63), nr$1 = function(n2) {
  return n2 < Xs$1 ? 1 : n2 < Ws$1 ? 2 : n2 < Qs$1 ? 3 : n2 < Zs$1 ? 4 : n2 < er ? 5 : n2 < tr$1 ? 6 : n2 < ir$1 ? 7 : n2 < sr$1 ? 8 : n2 < rr$1 ? 9 : 10;
}, or$1 = { encode: qs$1, decode: Hs$1, encodingLength: nr$1 }, Ke$1 = or$1;
const Ve = (n2, e, t = 0) => (Ke$1.encode(n2, e, t), e), qe = (n2) => Ke$1.encodingLength(n2), ge$2 = (n2, e) => {
  const t = e.byteLength, i = qe(n2), s = i + qe(t), r2 = new Uint8Array(s + t);
  return Ve(n2, r2, 0), Ve(t, r2, i), r2.set(e, s), new ar$1(n2, t, e, r2);
};
let ar$1 = class ar {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
};
const je$1 = ({ name: n2, code: e, encode: t }) => new hr$2(n2, e, t);
let hr$2 = class hr {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? ge$2(this.code, t) : t.then((i) => ge$2(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
};
const Ge$1 = (n2) => async (e) => new Uint8Array(await crypto.subtle.digest(n2, e)), cr$2 = je$1({ name: "sha2-256", code: 18, encode: Ge$1("SHA-256") }), lr$1 = je$1({ name: "sha2-512", code: 19, encode: Ge$1("SHA-512") });
var ur$1 = Object.freeze({ __proto__: null, sha256: cr$2, sha512: lr$1 });
const Ye$1 = 0, dr$1 = "identity", He$1 = Ue$1, gr$1 = (n2) => ge$2(Ye$1, He$1(n2)), pr = { code: Ye$1, name: dr$1, encode: He$1, digest: gr$1 };
var Dr$1 = Object.freeze({ __proto__: null, identity: pr });
new TextEncoder(), new TextDecoder();
const Je$1 = { ...as$1, ...cs$1, ...us$1, ...gs$1, ...ys$1, ...Rs$1, ...Ps$1, ...As$1, ...$s$1, ...Vs$1 };
({ ...ur$1, ...Dr$1 });
function Xe$2(n2) {
  return globalThis.Buffer != null ? new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength) : n2;
}
function yr$1(n2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xe$2(globalThis.Buffer.allocUnsafe(n2)) : new Uint8Array(n2);
}
function We$1(n2, e, t, i) {
  return { name: n2, prefix: e, encoder: { name: n2, prefix: e, encode: t }, decoder: { decode: i } };
}
const Qe$1 = We$1("utf8", "u", (n2) => "u" + new TextDecoder("utf8").decode(n2), (n2) => new TextEncoder().encode(n2.substring(1))), pe$1 = We$1("ascii", "a", (n2) => {
  let e = "a";
  for (let t = 0; t < n2.length; t++) e += String.fromCharCode(n2[t]);
  return e;
}, (n2) => {
  n2 = n2.substring(1);
  const e = yr$1(n2.length);
  for (let t = 0; t < n2.length; t++) e[t] = n2.charCodeAt(t);
  return e;
}), mr$1 = { utf8: Qe$1, "utf-8": Qe$1, hex: Je$1.base16, latin1: pe$1, ascii: pe$1, binary: pe$1, ...Je$1 };
function br(n2, e = "utf8") {
  const t = mr$1[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xe$2(globalThis.Buffer.from(n2, "utf-8")) : t.decoder.decode(`${t.prefix}${n2}`);
}
const De = "wc", Ze$1 = 2, Z = "core", z$1 = `${De}@2:${Z}:`, et = { name: Z, logger: "error" }, tt = { database: ":memory:" }, it = "crypto", ye$1 = "client_ed25519_seed", st = cjs$1.ONE_DAY, rt = "keychain", nt = "0.3", ot = "messages", at = "0.3", ht = cjs$1.SIX_HOURS, ct = "publisher", lt = "irn", ut = "error", me = "wss://relay.walletconnect.com", be$1 = "wss://relay.walletconnect.org", dt = "relayer", v$2 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, gt = "_subscription", f$1 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, pt = cjs$1.ONE_SECOND, Dt$1 = "2.12.2", yt = 1e4, mt = "0.3", bt = "WALLETCONNECT_CLIENT_ID", S$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ft$1 = "subscription", Et = "0.3", wt = cjs$1.FIVE_SECONDS * 1e3, vt = "pairing", It = "0.3", F$1 = { wc_pairingDelete: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$1.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$1.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 0 } } }, V$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, I = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Ct$1 = "history", _t = "0.3", Rt = "expirer", C$1 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Tt$1 = "0.3", ee = "verify-api", k = "https://verify.walletconnect.com", te = "https://verify.walletconnect.org", St = [k, te], Pt = "echo", xt = "https://echo.walletconnect.com";
let Ot$1 = class Ot {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = rt, this.version = nt, this.initialized = false, this.storagePrefix = z$1, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = true;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: r2 } = xe("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(r2);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = E$3(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, i0(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? n0(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
class At {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = it, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), r2 = generateKeyPair(s);
      return encodeIss(r2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = mu();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), o2 = generateKeyPair(r2), a2 = gu(), h2 = st;
      return await signJWT(a2, s, h2, o2);
    }, this.generateSharedKey = (s, r2, o2) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(s), h2 = Au(a2, r2);
      return this.setSymKey(h2, o2);
    }, this.setSymKey = async (s, r2) => {
      this.isInitialized();
      const o2 = r2 || bu(s);
      return await this.keychain.set(o2, s), o2;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, r2, o2) => {
      this.isInitialized();
      const a2 = eo(o2), h2 = safeJsonStringify(r2);
      if (Eu(a2)) {
        const m2 = a2.senderPublicKey, L5 = a2.receiverPublicKey;
        s = await this.generateSharedKey(m2, L5);
      }
      const l2 = this.getSymKey(s), { type: d3, senderPublicKey: g3 } = a2;
      return wu({ type: d3, symKey: l2, message: h2, senderPublicKey: g3 });
    }, this.decode = async (s, r2, o2) => {
      this.isInitialized();
      const a2 = Mu(r2, o2);
      if (Eu(a2)) {
        const h2 = a2.receiverPublicKey, l2 = a2.senderPublicKey;
        s = await this.generateSharedKey(h2, l2);
      }
      try {
        const h2 = this.getSymKey(s), l2 = xu({ symKey: h2, encoded: r2 });
        return safeJsonParse(l2);
      } catch (h2) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h2);
      }
    }, this.getPayloadType = (s) => {
      const r2 = Xi$1(s);
      return Mr(r2.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const r2 = Xi$1(s);
      return r2.senderPublicKey ? toString(r2.senderPublicKey, zt$1) : void 0;
    }, this.core = e, this.logger = E$3(t, this.name), this.keychain = i || new Ot$1(this.core, this.logger);
  }
  get context() {
    return y$2(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ye$1);
    } catch {
      e = gu(), await this.keychain.set(ye$1, e);
    }
    return br(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class zt extends a {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = ot, this.version = at, this.initialized = false, this.storagePrefix = z$1, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const r2 = yu(s);
      let o2 = this.messages.get(i);
      return typeof o2 > "u" && (o2 = {}), typeof o2[r2] < "u" || (o2[r2] = s, this.messages.set(i, o2), await this.persist()), r2;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const r2 = this.get(i), o2 = yu(s);
      return typeof r2[o2] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = E$3(e, this.name), this.core = t;
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, i0(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? n0(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
let Ir$1 = class Ir extends u$1 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new eventsExports.EventEmitter(), this.name = ct, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$1.toMiliseconds(cjs$1.ONE_MINUTE), this.failedPublishTimeout = cjs$1.toMiliseconds(cjs$1.ONE_SECOND), this.needsTransportRestart = false, this.publish = async (i, s, r2) => {
      var o2;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: r2 } });
      const a2 = (r2 == null ? void 0 : r2.ttl) || ht, h2 = Su(r2), l2 = (r2 == null ? void 0 : r2.prompt) || false, d3 = (r2 == null ? void 0 : r2.tag) || 0, g3 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), m2 = { topic: i, message: s, opts: { ttl: a2, relay: h2, prompt: l2, tag: d3, id: g3 } }, L5 = `Failed to publish payload, please try again. id:${g3} tag:${d3}`, u3 = Date.now();
      let p3, _2 = 1;
      try {
        for (; p3 === void 0; ) {
          if (Date.now() - u3 > this.publishTimeout) throw new Error(L5);
          this.logger.trace({ id: g3, attempts: _2 }, `publisher.publish - attempt ${_2}`), p3 = await await u0(this.rpcPublish(i, s, a2, h2, l2, d3, g3).catch((D2) => this.logger.warn(D2)), this.publishTimeout, L5), _2++, p3 || await new Promise((D2) => setTimeout(D2, this.failedPublishTimeout));
        }
        this.relayer.events.emit(v$2.publish, m2), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: g3, topic: i, message: s, opts: r2 } });
      } catch (D2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D2), (o2 = r2 == null ? void 0 : r2.internal) != null && o2.throwOnFailedPublish) throw D2;
        this.queue.set(g3, m2);
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = E$3(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$2(this.logger);
  }
  rpcPublish(e, t, i, s, r2, o2, a2) {
    var h2, l2, d3, g3;
    const m2 = { method: Nu(s.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: r2, tag: o2 }, id: a2 };
    return Pe((h2 = m2.params) == null ? void 0 : h2.prompt) && ((l2 = m2.params) == null || delete l2.prompt), Pe((d3 = m2.params) == null ? void 0 : d3.tag) && ((g3 = m2.params) == null || delete g3.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: m2 }), this.relayer.request(m2);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(v$2.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(v$2.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
let Cr$1 = class Cr {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, t)) return;
      const s = i.filter((r2) => r2 !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var _r = Object.defineProperty, Rr$1 = Object.defineProperties, Tr$1 = Object.getOwnPropertyDescriptors, Nt = Object.getOwnPropertySymbols, Sr = Object.prototype.hasOwnProperty, Pr$1 = Object.prototype.propertyIsEnumerable, Lt$1 = (n2, e, t) => e in n2 ? _r(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, q$2 = (n2, e) => {
  for (var t in e || (e = {})) Sr.call(e, t) && Lt$1(n2, t, e[t]);
  if (Nt) for (var t of Nt(e)) Pr$1.call(e, t) && Lt$1(n2, t, e[t]);
  return n2;
}, fe$1 = (n2, e) => Rr$1(n2, Tr$1(e));
let Ut$1 = class Ut3 extends d$1 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Cr$1(), this.events = new eventsExports.EventEmitter(), this.name = ft$1, this.version = Et, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = z$1, this.subscribeTimeout = cjs$1.toMiliseconds(cjs$1.ONE_MINUTE), this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const r2 = Su(s), o2 = { topic: i, relay: r2 };
        this.pending.set(i, o2);
        const a2 = await this.rpcSubscribe(i, r2);
        return typeof a2 == "string" && (this.onSubscribe(a2, o2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } })), a2;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => {
      if (this.topics.includes(i)) return true;
      const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
      return await new Promise((r2, o2) => {
        const a2 = new cjs$1.Watch();
        a2.start(s);
        const h2 = setInterval(() => {
          !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h2), a2.stop(s), r2(true)), a2.elapsed(s) >= wt && (clearInterval(h2), a2.stop(s), o2(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = E$3(t, this.name), this.clientId = "";
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = false;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = Su(i);
      await this.rpcUnsubscribe(e, t, s);
      const r2 = tr$2("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: Nu(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await u0(this.relayer.request(i).catch((s) => this.logger.warn(s)), this.subscribeTimeout) ? yu(e + this.clientId) : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(v$2.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay, i = { method: Nu(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await u0(this.relayer.request(i).catch((s) => this.logger.warn(s)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(v$2.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: Nu(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, fe$1(q$2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, q$2({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, q$2({}, t)), this.topicMap.set(t.topic, e), this.events.emit(S$1.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(S$1.deleted, fe$1(q$2({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(S$1.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(S$1.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    Er$1(t) && this.onBatchSubscribe(t.map((i, s) => fe$1(q$2({}, e[s]), { id: i })));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.events.on(S$1.created, async (e) => {
      const t = S$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(S$1.deleted, async (e) => {
      const t = S$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var xr$1 = Object.defineProperty, $t$1 = Object.getOwnPropertySymbols, Or$1 = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, Ft$1 = (n2, e, t) => e in n2 ? xr$1(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, zr$1 = (n2, e) => {
  for (var t in e || (e = {})) Or$1.call(e, t) && Ft$1(n2, t, e[t]);
  if ($t$1) for (var t of $t$1(e)) Ar.call(e, t) && Ft$1(n2, t, e[t]);
  return n2;
};
let kt$1 = class kt extends g$2 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = dt, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled", "interrupted"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = cjs$1.toMiliseconds(cjs$1.THIRTY_SECONDS + cjs$1.ONE_SECOND), this.request = async (t) => {
      var i, s;
      this.logger.debug("Publishing Request Payload");
      const r2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        const o2 = this.provider.request(t);
        this.requestsInFlight.set(r2, { promise: o2, request: t }), this.logger.trace({ id: r2, method: t.method, topic: (i = t.params) == null ? void 0 : i.topic }, "relayer.request - attempt to publish...");
        const a2 = await new Promise(async (h2, l2) => {
          const d3 = () => {
            l2(new Error(`relayer.request - publish interrupted, id: ${r2}`));
          };
          this.provider.on(f$1.disconnect, d3);
          const g3 = await o2;
          this.provider.off(f$1.disconnect, d3), h2(g3);
        });
        return this.logger.trace({ id: r2, method: t.method, topic: (s = t.params) == null ? void 0 : s.topic }, "relayer.request - published"), a2;
      } catch (o2) {
        throw this.logger.debug(`Failed to Publish Request: ${r2}`), o2;
      } finally {
        this.requestsInFlight.delete(r2);
      }
    }, this.resetPingTimeout = () => {
      if (pi()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t, i, s;
          (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null || s.terminate();
        }, this.heartBeatTimeout);
      } catch (t) {
        this.logger.warn(t);
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.startPingTimeout(), this.events.emit(v$2.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(v$2.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(f$1.payload, this.onPayloadHandler), this.provider.on(f$1.connect, this.onConnectHandler), this.provider.on(f$1.disconnect, this.onDisconnectHandler), this.provider.on(f$1.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E$3(e.logger, this.name) : Hg(k$1({ level: e.logger || ut })), this.messages = new zt(this.logger, e.core), this.subscriber = new Ut$1(this, this.logger), this.publisher = new Ir$1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || me, this.projectId = e.projectId, this.bundleId = Wo(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${be$1}...`), await this.restartTransport(be$1);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, yt);
  }
  get context() {
    return y$2(this.logger);
  }
  get connected() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1;
  }
  get connecting() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i;
    this.isInitialized();
    let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", r2;
    const o2 = (a2) => {
      a2.topic === e && (this.subscriber.off(S$1.created, o2), r2());
    };
    return await Promise.all([new Promise((a2) => {
      r2 = a2, this.subscriber.on(S$1.created, o2);
    }), new Promise(async (a2) => {
      s = await this.subscriber.subscribe(e, t) || s, a2();
    })]), s;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
      await Promise.all(Array.from(this.requestsInFlight.values()).map((e) => e.promise));
    } catch (e) {
      this.logger.warn(e);
    }
    this.hasExperiencedNetworkDisruption || this.connected ? await u0(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect(), await this.createProvider()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    try {
      await new Promise(async (t, i) => {
        const s = () => {
          this.provider.off(f$1.disconnect, s), i(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(f$1.disconnect, s), await u0(this.provider.connect(), cjs$1.toMiliseconds(cjs$1.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r2) => {
          i(r2);
        }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = false, t();
      });
    } catch (t) {
      this.logger.error(t);
      const i = t;
      if (!this.isConnectionStalled(i.message)) throw t;
    } finally {
      this.connectionAttemptInProgress = false;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await hh()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  startPingTimeout() {
    var e, t, i, s, r2;
    if (pi()) try {
      (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r2 = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || r2.once("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o2) {
      this.logger.warn(o2);
    }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider$1(new f$2($o({ sdkVersion: Dt$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), true;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s = this.messages.has(t, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(gt)) return;
      const t = e.params, { topic: i, message: s, publishedAt: r2 } = t.data, o2 = { topic: i, message: s, publishedAt: r2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(zr$1({ type: "event", event: t.id }, o2)), this.events.emit(t.id, o2), await this.acknowledgePayload(e), await this.onMessageEvent(o2);
    } else isJsonRpcResponse(e) && this.events.emit(v$2.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(v$2.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(f$1.payload, this.onPayloadHandler), this.provider.off(f$1.connect, this.onConnectHandler), this.provider.off(f$1.disconnect, this.onDisconnectHandler), this.provider.off(f$1.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    let e = await hh();
    ch(async (t) => {
      e !== t && (e = t, t ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.events.emit(v$2.disconnect), this.connectionAttemptInProgress = false, !this.transportExplicitlyClosed && setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e));
    }, cjs$1.toMiliseconds(pt));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.connected && (clearInterval(t), e());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
};
var Nr = Object.defineProperty, Bt$1 = Object.getOwnPropertySymbols, Lr = Object.prototype.hasOwnProperty, Ur$1 = Object.prototype.propertyIsEnumerable, Mt = (n2, e, t) => e in n2 ? Nr(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, Kt$1 = (n2, e) => {
  for (var t in e || (e = {})) Lr.call(e, t) && Mt(n2, t, e[t]);
  if (Bt$1) for (var t of Bt$1(e)) Ur$1.call(e, t) && Mt(n2, t, e[t]);
  return n2;
};
class Vt extends p$2 {
  constructor(e, t, i, s = z$1, r2 = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = mt, this.cached = [], this.initialized = false, this.storagePrefix = z$1, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o2) => {
        this.getKey && o2 !== null && !Pe(o2) ? this.map.set(this.getKey(o2), o2) : Gu(o2) ? this.map.set(o2.id, o2) : Yu(o2) && this.map.set(o2.topic, o2);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o2, a2) => {
      this.isInitialized(), this.map.has(o2) ? await this.update(o2, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o2, value: a2 }), this.map.set(o2, a2), await this.persist());
    }, this.get = (o2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o2 }), this.getData(o2)), this.getAll = (o2) => (this.isInitialized(), o2 ? this.values.filter((a2) => Object.keys(o2).every((h2) => Yi$1(a2[h2], o2[h2]))) : this.values), this.update = async (o2, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o2, update: a2 });
      const h2 = Kt$1(Kt$1({}, this.getData(o2)), a2);
      this.map.set(o2, h2), await this.persist();
    }, this.delete = async (o2, a2) => {
      this.isInitialized(), this.map.has(o2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o2, reason: a2 }), this.map.delete(o2), this.addToRecentlyDeleted(o2), await this.persist());
    }, this.logger = E$3(t, this.name), this.storagePrefix = s, this.getKey = r2;
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: i } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class qt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = vt, this.version = It, this.events = new Wg(), this.initialized = false, this.storagePrefix = z$1, this.ignoredPayloadTypes = [lr$2], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async (i) => {
      this.isInitialized();
      const s = gu(), r2 = await this.core.crypto.setSymKey(s), o2 = d0(cjs$1.FIVE_MINUTES), a2 = { protocol: lt }, h2 = { topic: r2, expiry: o2, relay: a2, active: false }, l2 = Du({ protocol: this.core.protocol, version: this.core.version, topic: r2, symKey: s, relay: a2, expiryTimestamp: o2, methods: i == null ? void 0 : i.methods });
      return await this.pairings.set(r2, h2), await this.core.relayer.subscribe(r2), this.core.expirer.set(r2, o2), { topic: r2, uri: l2 };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: r2, relay: o2, expiryTimestamp: a2, methods: h2 } = Pu(i.uri);
      let l2;
      if (this.pairings.keys.includes(s) && (l2 = this.pairings.get(s), l2.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const d3 = a2 || d0(cjs$1.FIVE_MINUTES), g3 = { topic: s, relay: o2, expiry: d3, active: false, methods: h2 };
      return await this.pairings.set(s, g3), this.core.expirer.set(s, d3), i.activatePairing && await this.activate({ topic: s }), this.events.emit(V$1.create, g3), this.core.crypto.keychain.has(s) || await this.core.crypto.setSymKey(r2, s), await this.core.relayer.subscribe(s, { relay: o2 }), g3;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = d0(cjs$1.THIRTY_DAYS);
      await this.pairings.update(i, { active: true, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const r2 = await this.sendRequest(s, "wc_pairingPing", {}), { done: o2, resolve: a2, reject: h2 } = a0();
        this.events.once(v0("pairing_ping", r2), ({ error: l2 }) => {
          l2 ? h2(l2) : a2();
        }), await o2();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", tr$2("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, r2) => {
      const o2 = formatJsonRpcRequest(s, r2), a2 = await this.core.crypto.encode(i, o2), h2 = F$1[s].req;
      return this.core.history.set(i, o2), this.core.relayer.publish(i, a2, h2), o2.id;
    }, this.sendResult = async (i, s, r2) => {
      const o2 = formatJsonRpcResult(i, r2), a2 = await this.core.crypto.encode(s, o2), h2 = await this.core.history.get(s, i), l2 = F$1[h2.request.method].res;
      await this.core.relayer.publish(s, a2, l2), await this.core.history.resolve(o2);
    }, this.sendError = async (i, s, r2) => {
      const o2 = formatJsonRpcError(i, r2), a2 = await this.core.crypto.encode(s, o2), h2 = await this.core.history.get(s, i), l2 = F$1[h2.request.method] ? F$1[h2.request.method].res : F$1.unregistered_method.res;
      await this.core.relayer.publish(s, a2, l2), await this.core.history.resolve(o2);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, tr$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => p0(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: r2 } = i;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, r2);
        default:
          return this.onUnknownRpcMethodRequest(s, r2);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: r2 } = i, o2 = (await this.core.history.get(s, r2.id)).request.method;
      switch (o2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, r2);
        default:
          return this.onUnknownRpcMethodResponse(o2);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: r2 } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(r2, i, true), this.events.emit(V$1.ping, { id: r2, topic: i });
      } catch (o2) {
        await this.sendError(r2, i, o2), this.logger.error(o2);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: r2 } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(v0("pairing_ping", r2), {}) : isJsonRpcError(s) && this.events.emit(v0("pairing_ping", r2), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: r2 } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(V$1.delete, { id: r2, topic: i });
      } catch (o2) {
        await this.sendError(r2, i, o2), this.logger.error(o2);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: r2, method: o2 } = s;
      try {
        if (this.registeredMethods.includes(o2)) return;
        const a2 = tr$2("WC_METHOD_UNSUPPORTED", o2);
        await this.sendError(r2, i, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(r2, i, a2), this.logger.error(a2);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(tr$2("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      var s;
      if (!$u(i)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(o2);
      }
      if (!Ju(i.uri)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(o2);
      }
      const r2 = Pu(i.uri);
      if (!((s = r2 == null ? void 0 : r2.relay) != null && s.protocol)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o2);
      }
      if (!(r2 != null && r2.symKey)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o2);
      }
      if (r2 != null && r2.expiryTimestamp && cjs$1.toMiliseconds(r2 == null ? void 0 : r2.expiryTimestamp) < Date.now()) {
        const { message: o2 } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o2);
      }
    }, this.isValidPing = async (i) => {
      if (!$u(i)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(r2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!$u(i)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(r2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!Gt$1(i, false)) {
        const { message: s } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (p0(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = xe("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = E$3(t, this.name), this.pairings = new Vt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(v$2.message, async (e) => {
      const { topic: t, message: i } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
      const s = await this.core.crypto.decode(t, i);
      try {
        isJsonRpcRequest(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : isJsonRpcResponse(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: t, payload: s }), this.core.history.delete(t, s.id));
      } catch (r2) {
        this.logger.error(r2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(C$1.expired, async (e) => {
      const { topic: t } = l0(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(V$1.expire, { topic: t }));
    });
  }
}
let jt$1 = class jt extends h {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Ct$1, this.version = _t, this.cached = [], this.initialized = false, this.storagePrefix = z$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i, s, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: r2 }), this.records.has(s.id)) return;
      const o2 = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: r2, expiry: d0(cjs$1.THIRTY_DAYS) };
      this.records.set(o2.id, o2), this.persist(), this.events.emit(I.created, o2);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id)) return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.persist(), this.events.emit(I.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((r2) => {
        if (r2.topic === i) {
          if (typeof s < "u" && r2.id !== s) return;
          this.records.delete(r2.id), this.events.emit(I.deleted, r2);
        }
      }), this.persist();
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : false), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = E$3(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(I.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(I.created, (e) => {
      const t = I.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(I.updated, (e) => {
      const t = I.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(I.deleted, (e) => {
      const t = I.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.core.heartbeat.on(cjs.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = false;
      this.records.forEach((t) => {
        cjs$1.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(I.deleted, t, false), e = true);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
class Gt extends E$2 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Rt, this.version = Tt$1, this.cached = [], this.initialized = false, this.storagePrefix = z$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const r2 = this.formatTarget(i), o2 = { target: r2, expiry: s };
      this.expirations.set(r2, o2), this.checkExpiry(r2, o2), this.events.emit(C$1.created, { target: r2, expiration: o2 });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), r2 = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(C$1.deleted, { target: s, expiration: r2 });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = E$3(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return h0(e);
    if (typeof e == "number") return c0(e);
    const { message: t } = xe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(C$1.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    cjs$1.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(C$1.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(cjs.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(C$1.created, (e) => {
      const t = C$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(C$1.expired, (e) => {
      const t = C$1.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(C$1.deleted, (e) => {
      const t = C$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
let Yt$1 = class Yt extends y$1 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = ee, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i) => {
      if (this.verifyDisabled || er$1() || !pr$1()) return;
      const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (r2) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = te;
        try {
          await this.createIframe();
        } catch (r2) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv) return "";
      const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      let r2;
      try {
        r2 = await this.fetchAttestation(i.attestationId, s);
      } catch (o2) {
        this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(o2), r2 = await this.fetchAttestation(i.attestationId, te);
      }
      return r2;
    }, this.fetchAttestation = async (i, s) => {
      this.logger.info(`resolving attestation: ${i} from url: ${s}`);
      const r2 = this.startAbortTimer(cjs$1.ONE_SECOND * 2), o2 = await fetch(`${s}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(r2), o2.status === 200 ? await o2.json() : void 0;
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var s;
      try {
        if (!this.iframe) return;
        (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const s = (r2) => {
        r2.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s), i());
      };
      await Promise.race([new Promise((r2) => {
        const o2 = document.getElementById(ee);
        if (o2) return this.iframe = o2, this.onInit(), r2();
        window.addEventListener("message", s);
        const a2 = document.createElement("iframe");
        a2.id = ee, a2.src = `${this.verifyUrl}/${this.projectId}`, a2.style.display = "none", document.body.append(a2), this.iframe = a2, i = r2;
      }), new Promise((r2, o2) => setTimeout(() => {
        window.removeEventListener("message", s), o2("verify iframe load timeout");
      }, cjs$1.toMiliseconds(cjs$1.FIVE_SECONDS)))]);
    }, this.onInit = () => {
      this.initialized = true, this.processQueue();
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i) => {
      let s = i || k;
      return St.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${k}`), s = k), s;
    }, this.logger = E$3(t, this.name), this.verifyUrl = k, this.abortController = new AbortController(), this.isDevEnv = pi() && define_process_env_default.IS_VITEST;
  }
  get context() {
    return y$2(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$1.toMiliseconds(e));
  }
};
let Ht$2 = class Ht extends v$3 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = Pt, this.registerDeviceToken = async (i) => {
      const { clientId: s, token: r2, notificationType: o2, enableEncrypted: a2 = false } = i, h2 = `${xt}/${this.projectId}/clients`;
      await Hi$1(h2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o2, token: r2, always_raw: a2 }) });
    }, this.logger = E$3(t, this.context);
  }
};
var $r = Object.defineProperty, Jt$2 = Object.getOwnPropertySymbols, Fr$1 = Object.prototype.hasOwnProperty, kr$1 = Object.prototype.propertyIsEnumerable, Xt$2 = (n2, e, t) => e in n2 ? $r(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, Wt$2 = (n2, e) => {
  for (var t in e || (e = {})) Fr$1.call(e, t) && Xt$2(n2, t, e[t]);
  if (Jt$2) for (var t of Jt$2(e)) kr$1.call(e, t) && Xt$2(n2, t, e[t]);
  return n2;
};
let ie$2 = class ie extends n {
  constructor(e) {
    var t;
    super(e), this.protocol = De, this.version = Ze$1, this.name = Z, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (o2, a2) => this.events.on(o2, a2), this.once = (o2, a2) => this.events.once(o2, a2), this.off = (o2, a2) => this.events.off(o2, a2), this.removeListener = (o2, a2) => this.events.removeListener(o2, a2), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || me, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = k$1({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : et.logger }), { logger: s, chunkLoggerController: r2 } = A$1({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = r2, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var o2, a2;
      (o2 = this.logChunkController) != null && o2.downloadLogsBlobInBrowser && ((a2 = this.logChunkController) == null || a2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$3(s, this.name), this.heartbeat = new cjs.HeartBeat(), this.crypto = new At(this, this.logger, e == null ? void 0 : e.keychain), this.history = new jt$1(this, this.logger), this.expirer = new Gt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h$1(Wt$2(Wt$2({}, tt), e == null ? void 0 : e.storageOptions)), this.relayer = new kt$1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new qt(this, this.logger), this.verify = new Yt$1(this.projectId || "", this.logger), this.echoClient = new Ht$2(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new ie(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(bt, i), t;
  }
  get context() {
    return y$2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
const Br = ie$2;
const Se = "wc", Ee = 2, _e = "client", se$1 = `${Se}@${Ee}:${_e}:`, ie$1 = { name: _e, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, Re$1 = "WALLETCONNECT_DEEPLINK_CHOICE", Ke = "proposal", Ue = "Proposal expired", Ge = "session", L$3 = cjs$1.SEVEN_DAYS, ke = "engine", q$1 = { wc_sessionPropose: { req: { ttl: cjs$1.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$1.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$1.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$1.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$1.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$1.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$1.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$1.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: cjs$1.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: cjs$1.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: cjs$1.ONE_HOUR, prompt: false, tag: 1117 } } }, re$1 = { min: cjs$1.FIVE_MINUTES, max: cjs$1.SEVEN_DAYS }, A = { idle: "IDLE", active: "ACTIVE" }, Fe = "request", je = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"], Qe = "wc", ze = "auth", He = "authKeys", Ye = "pairingTopics", Xe$1 = "requests", X = `${Qe}@${1.5}:${ze}:`, J = `${X}:PUB_KEY`;
var Ht$1 = Object.defineProperty, Yt2 = Object.defineProperties, Xt$1 = Object.getOwnPropertyDescriptors, Je = Object.getOwnPropertySymbols, Jt$1 = Object.prototype.hasOwnProperty, Bt = Object.prototype.propertyIsEnumerable, Be$1 = (S2, n2, t) => n2 in S2 ? Ht$1(S2, n2, { enumerable: true, configurable: true, writable: true, value: t }) : S2[n2] = t, m$1 = (S2, n2) => {
  for (var t in n2 || (n2 = {})) Jt$1.call(n2, t) && Be$1(S2, t, n2[t]);
  if (Je) for (var t of Je(n2)) Bt.call(n2, t) && Be$1(S2, t, n2[t]);
  return S2;
}, F = (S2, n2) => Yt2(S2, Xt$1(n2));
let Wt$1 = class Wt extends w$1 {
  constructor(n2) {
    super(n2), this.name = ke, this.events = new Wg(), this.initialized = false, this.requestQueue = { state: A.idle, queue: [] }, this.sessionRequestQueue = { state: A.idle, queue: [] }, this.requestQueueDelay = cjs$1.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(q$1) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$1.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const e = F(m$1({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(e);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: r2, sessionProperties: o2, relays: a2 } = e;
      let c2 = s, d3, p3 = false;
      try {
        c2 && (p3 = this.client.core.pairing.pairings.get(c2).active);
      } catch (f2) {
        throw this.client.logger.error(`connect() -> pairing.get(${c2}) failed`), f2;
      }
      if (!c2 || !p3) {
        const { topic: f2, uri: v3 } = await this.client.core.pairing.create();
        c2 = f2, d3 = v3;
      }
      if (!c2) {
        const { message: f2 } = xe("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(f2);
      }
      const g3 = await this.client.core.crypto.generateKeyPair(), h2 = q$1.wc_sessionPropose.req.ttl || cjs$1.FIVE_MINUTES, y3 = d0(h2), w3 = m$1({ requiredNamespaces: i, optionalNamespaces: r2, relays: a2 ?? [{ protocol: lt }], proposer: { publicKey: g3, metadata: this.client.metadata }, expiryTimestamp: y3 }, o2 && { sessionProperties: o2 }), { reject: I2, resolve: D2, done: E3 } = a0(h2, Ue);
      this.events.once(v0("session_connect"), async ({ error: f2, session: v3 }) => {
        if (f2) I2(f2);
        else if (v3) {
          v3.self.publicKey = g3;
          const j2 = F(m$1({}, v3), { requiredNamespaces: w3.requiredNamespaces, optionalNamespaces: w3.optionalNamespaces });
          await this.client.session.set(v3.topic, j2), await this.setExpiry(v3.topic, v3.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: v3.peer.metadata }), D2(j2);
        }
      });
      const P2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: w3, throwOnFailedPublish: true });
      return await this.setProposal(P2, m$1({ id: P2 }, w3)), { uri: d3, approval: E3 };
    }, this.pair = async (t) => {
      await this.isInitialized();
      try {
        return await this.client.core.pairing.pair(t);
      } catch (e) {
        throw this.client.logger.error("pair() failed"), e;
      }
    }, this.approve = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidApprove(t);
      } catch (E3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), E3;
      }
      const { id: e, relayProtocol: s, namespaces: i, sessionProperties: r2, sessionConfig: o2 } = t;
      let a2;
      try {
        a2 = this.client.proposal.get(e);
      } catch (E3) {
        throw this.client.logger.error(`approve() -> proposal.get(${e}) failed`), E3;
      }
      let { pairingTopic: c2, proposer: d3, requiredNamespaces: p3, optionalNamespaces: g3 } = a2;
      c2 = c2 || "";
      const h2 = await this.client.core.crypto.generateKeyPair(), y3 = d3.publicKey, w3 = await this.client.core.crypto.generateSharedKey(h2, y3), I2 = m$1(m$1({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: c2, controller: { publicKey: h2, metadata: this.client.metadata }, expiry: d0(L$3) }, r2 && { sessionProperties: r2 }), o2 && { sessionConfig: o2 });
      await this.client.core.relayer.subscribe(w3);
      const D2 = F(m$1({}, I2), { topic: w3, requiredNamespaces: p3, optionalNamespaces: g3, pairingTopic: c2, acknowledged: false, self: I2.controller, peer: { publicKey: d3.publicKey, metadata: d3.metadata }, controller: h2 });
      await this.client.session.set(w3, D2);
      try {
        await this.sendResult({ id: e, topic: c2, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: h2 }, throwOnFailedPublish: true }), await this.sendRequest({ topic: w3, method: "wc_sessionSettle", params: I2, throwOnFailedPublish: true });
      } catch (E3) {
        throw this.client.logger.error(E3), this.client.session.delete(w3, tr$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(w3), E3;
      }
      return await this.client.core.pairing.updateMetadata({ topic: c2, metadata: d3.metadata }), await this.client.proposal.delete(e, tr$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c2 }), await this.setExpiry(w3, d0(L$3)), { topic: w3, acknowledged: () => new Promise((E3) => setTimeout(() => E3(this.client.session.get(w3)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidReject(t);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: e, reason: s } = t;
      let i;
      try {
        i = this.client.proposal.get(e).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`), r2;
      }
      i && (await this.sendError({ id: e, topic: i, error: s }), await this.client.proposal.delete(e, tr$2("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidUpdate(t);
      } catch (p3) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), p3;
      }
      const { topic: e, namespaces: s } = t, { done: i, resolve: r2, reject: o2 } = a0(), a2 = payloadId(), c2 = getBigIntRpcId().toString(), d3 = this.client.session.get(e).namespaces;
      return this.events.once(v0("session_update", a2), ({ error: p3 }) => {
        p3 ? o2(p3) : r2();
      }), await this.client.session.update(e, { namespaces: s }), this.sendRequest({ topic: e, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: c2 }).catch((p3) => {
        this.client.logger.error(p3), this.client.session.update(e, { namespaces: d3 }), o2(p3);
      }), { acknowledged: i };
    }, this.extend = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidExtend(t);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: e } = t, s = payloadId(), { done: i, resolve: r2, reject: o2 } = a0();
      return this.events.once(v0("session_extend", s), ({ error: a2 }) => {
        a2 ? o2(a2) : r2();
      }), await this.setExpiry(e, d0(L$3)), this.sendRequest({ topic: e, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: true }).catch((a2) => {
        o2(a2);
      }), { acknowledged: i };
    }, this.request = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidRequest(t);
      } catch (h2) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), h2;
      }
      const { chainId: e, request: s, topic: i, expiry: r2 = q$1.wc_sessionRequest.req.ttl } = t, o2 = this.client.session.get(i), a2 = payloadId(), c2 = getBigIntRpcId().toString(), { done: d3, resolve: p3, reject: g3 } = a0(r2, "Request expired. Please try again.");
      return this.events.once(v0("session_request", a2), ({ error: h2, result: y3 }) => {
        h2 ? g3(h2) : p3(y3);
      }), await Promise.all([new Promise(async (h2) => {
        await this.sendRequest({ clientRpcId: a2, relayRpcId: c2, topic: i, method: "wc_sessionRequest", params: { request: F(m$1({}, s), { expiryTimestamp: d0(r2) }), chainId: e }, expiry: r2, throwOnFailedPublish: true }).catch((y3) => g3(y3)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: e, id: a2 }), h2();
      }), new Promise(async (h2) => {
        var y3;
        if (!((y3 = o2.sessionConfig) != null && y3.disableDeepLink)) {
          const w3 = await g0(this.client.core.storage, Re$1);
          m0({ id: a2, topic: i, wcDeepLink: w3 });
        }
        h2();
      }), d3()]).then((h2) => h2[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: e, response: s } = t, { id: i } = s;
      isJsonRpcResult(s) ? await this.sendResult({ id: i, topic: e, result: s.result, throwOnFailedPublish: true }) : isJsonRpcError(s) && await this.sendError({ id: i, topic: e, error: s.error }), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidPing(t);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: e } = t;
      if (this.client.session.keys.includes(e)) {
        const s = payloadId(), i = getBigIntRpcId().toString(), { done: r2, resolve: o2, reject: a2 } = a0();
        this.events.once(v0("session_ping", s), ({ error: c2 }) => {
          c2 ? a2(c2) : o2();
        }), await Promise.all([this.sendRequest({ topic: e, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s, relayRpcId: i }), r2()]);
      } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({ topic: e });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: e, event: s, chainId: i } = t, r2 = getBigIntRpcId().toString();
      await this.sendRequest({ topic: e, method: "wc_sessionEvent", params: { event: s, chainId: i }, throwOnFailedPublish: true, relayRpcId: r2 });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: e } = t;
      if (this.client.session.keys.includes(e)) await this.sendRequest({ topic: e, method: "wc_sessionDelete", params: tr$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e)) await this.client.core.pairing.disconnect({ topic: e });
      else {
        const { message: s } = xe("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e}`);
        throw new Error(s);
      }
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((e) => Qu(e, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (t) => {
      this.isInitialized(), this.isValidAuthenticate(t);
      const { chains: e, statement: s = "", uri: i, domain: r2, nonce: o2, type: a2, exp: c2, nbf: d3, methods: p3 = [] } = t, g3 = [...t.resources || []], { topic: h2, uri: y3 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"] });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: h2, uri: y3 } });
      const w3 = await this.client.core.crypto.generateKeyPair(), I2 = bu(w3);
      if (await Promise.all([this.client.auth.authKeys.set(J, { responseTopic: I2, publicKey: w3 }), this.client.auth.pairingTopics.set(I2, { topic: I2, pairingTopic: h2 })]), await this.client.core.relayer.subscribe(I2), this.client.logger.info(`sending request to new pairing topic: ${h2}`), p3.length > 0) {
        const { namespace: O2 } = dn$1(e[0]);
        let _2 = cu(O2, "request", p3);
        Qr(g3) && (_2 = lu(_2, g3.pop())), g3.push(_2);
      }
      const D2 = d0(q$1.wc_sessionPropose.req.ttl), E3 = { authPayload: { type: a2 ?? "caip122", chains: e, statement: s, aud: i, domain: r2, version: "1", nonce: o2, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: c2, nbf: d3, resources: g3 }, requester: { publicKey: w3, metadata: this.client.metadata }, expiryTimestamp: D2 }, P2 = { eip155: { chains: e, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...p3])], events: ["chainChanged", "accountsChanged"] } }, f2 = { requiredNamespaces: {}, optionalNamespaces: P2, relays: [{ protocol: "irn" }], proposer: { publicKey: w3, metadata: this.client.metadata }, expiryTimestamp: D2 }, { done: v3, resolve: j2, reject: oe2 } = a0(q$1.wc_sessionAuthenticate.req.ttl, "Request expired"), B = async ({ error: O2, session: _2 }) => {
        if (this.events.off(v0("session_request", M2), ae2), O2) oe2(O2);
        else if (_2) {
          _2.self.publicKey = w3, await this.client.session.set(_2.topic, _2), await this.setExpiry(_2.topic, _2.expiry), h2 && await this.client.core.pairing.updateMetadata({ topic: h2, metadata: _2.peer.metadata });
          const Q2 = this.client.session.get(_2.topic);
          j2({ session: Q2 });
        }
      }, ae2 = async (O2) => {
        if (O2.error) {
          const z2 = tr$2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return O2.error.code === z2.code ? void 0 : (this.events.off(v0("session_connect"), B), oe2(O2.error.message));
        }
        this.events.off(v0("session_connect"), B);
        const { cacaos: _2, responder: Q2 } = O2.result, le2 = [], Ie = [];
        for (const z2 of _2) {
          await ou({ cacao: z2, projectId: this.client.core.projectId }) || (this.client.logger.error(z2, "Signature verification failed"), oe2(tr$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: he2 } = z2, pe2 = Qr(he2.resources), fe2 = [fu(he2.iss)], Ze2 = Li(he2.iss);
          if (pe2) {
            const de2 = du(pe2), et2 = pu(pe2);
            le2.push(...de2), fe2.push(...et2);
          }
          for (const de2 of fe2) Ie.push(`${de2}:${Ze2}`);
        }
        const W = await this.client.core.crypto.generateSharedKey(w3, Q2.publicKey);
        let Z2;
        le2.length > 0 && (Z2 = { topic: W, acknowledged: true, self: { publicKey: w3, metadata: this.client.metadata }, peer: Q2, controller: Q2.publicKey, expiry: d0(L$3), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: h2, namespaces: ju([...new Set(le2)], [...new Set(Ie)]) }, await this.client.core.relayer.subscribe(W), await this.client.session.set(W, Z2), Z2 = this.client.session.get(W)), j2({ auths: _2, session: Z2 });
      }, M2 = payloadId(), ce2 = payloadId();
      this.events.once(v0("session_connect"), B), this.events.once(v0("session_request", M2), ae2);
      try {
        await Promise.all([this.sendRequest({ topic: h2, method: "wc_sessionAuthenticate", params: E3, expiry: t.expiry, throwOnFailedPublish: true, clientRpcId: M2 }), this.sendRequest({ topic: h2, method: "wc_sessionPropose", params: f2, expiry: q$1.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: ce2 })]);
      } catch (O2) {
        throw this.events.off(v0("session_connect"), B), this.events.off(v0("session_request", M2), ae2), O2;
      }
      return await this.setProposal(ce2, m$1({ id: ce2 }, f2)), await this.client.auth.requests.set(M2, { authPayload: E3.authPayload, requester: E3.requester, expiryTimestamp: D2, id: M2, pairingTopic: h2, verifyContext: {} }), { uri: y3, response: v3 };
    }, this.approveSessionAuthenticate = async (t) => {
      this.isInitialized();
      const { id: e, auths: s } = t, i = this.getPendingAuthRequest(e);
      if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
      const r2 = i.requester.publicKey, o2 = await this.client.core.crypto.generateKeyPair(), a2 = bu(r2), c2 = { type: lr$2, receiverPublicKey: r2, senderPublicKey: o2 }, d3 = [], p3 = [];
      for (const y3 of s) {
        if (!await ou({ cacao: y3, projectId: this.client.core.projectId })) {
          const P2 = tr$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e, topic: a2, error: P2, encodeOpts: c2 }), new Error(P2.message);
        }
        const { p: w3 } = y3, I2 = Qr(w3.resources), D2 = [fu(w3.iss)], E3 = Li(w3.iss);
        if (I2) {
          const P2 = du(I2), f2 = pu(I2);
          d3.push(...P2), D2.push(...f2);
        }
        for (const P2 of D2) p3.push(`${P2}:${E3}`);
      }
      const g3 = await this.client.core.crypto.generateSharedKey(o2, r2);
      let h2;
      return (d3 == null ? void 0 : d3.length) > 0 && (h2 = { topic: g3, acknowledged: true, self: { publicKey: o2, metadata: this.client.metadata }, peer: { publicKey: r2, metadata: i.requester.metadata }, controller: r2, expiry: d0(L$3), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: "", namespaces: ju([...new Set(d3)], [...new Set(p3)]) }, await this.client.core.relayer.subscribe(g3), await this.client.session.set(g3, h2)), await this.sendResult({ topic: a2, id: e, result: { cacaos: s, responder: { publicKey: o2, metadata: this.client.metadata } }, encodeOpts: c2, throwOnFailedPublish: true }), await this.client.auth.requests.delete(e, { message: "fullfilled", code: 0 }), await this.client.core.pairing.activate({ topic: i.pairingTopic }), { session: h2 };
    }, this.rejectSessionAuthenticate = async (t) => {
      await this.isInitialized();
      const { id: e, reason: s } = t, i = this.getPendingAuthRequest(e);
      if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
      const r2 = i.requester.publicKey, o2 = await this.client.core.crypto.generateKeyPair(), a2 = bu(r2), c2 = { type: lr$2, receiverPublicKey: r2, senderPublicKey: o2 };
      await this.sendError({ id: e, topic: a2, error: s, encodeOpts: c2 }), await this.client.auth.requests.delete(e, { message: "rejected", code: 0 }), await this.client.proposal.delete(e, tr$2("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (t) => {
      this.isInitialized();
      const { request: e, iss: s } = t;
      return zf(e, s);
    }, this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic) try {
        const e = this.client.core.pairing.pairings.get(t.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i) => {
          var r2, o2;
          return ((r2 = i.peerMetadata) == null ? void 0 : r2.url) && ((o2 = i.peerMetadata) == null ? void 0 : o2.url) === t.peer.metadata.url && i.topic && i.topic !== e.topic;
        });
        if (s.length === 0) return;
        this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (e) {
        this.client.logger.error(e);
      }
    }, this.deleteSession = async (t) => {
      const { topic: e, expirerHasDeleted: s = false, emitEvent: i = true, id: r2 = 0 } = t, { self: o2 } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), await this.client.session.delete(e, tr$2("USER_DISCONNECTED")), this.addToRecentlyDeleted(e, "session"), this.client.core.crypto.keychain.has(o2.publicKey) && await this.client.core.crypto.deleteKeyPair(o2.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), s || this.client.core.expirer.del(e), this.client.core.storage.removeItem(Re$1).catch((a2) => this.client.logger.warn(a2)), this.getPendingSessionRequests().forEach((a2) => {
        a2.topic === e && this.deletePendingSessionRequest(a2.id, tr$2("USER_DISCONNECTED"));
      }), i && this.client.events.emit("session_delete", { id: r2, topic: e });
    }, this.deleteProposal = async (t, e) => {
      await Promise.all([this.client.proposal.delete(t, tr$2("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal");
    }, this.deletePendingSessionRequest = async (t, e, s = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, e), s ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== t), s && (this.sessionRequestQueue.state = A.idle, this.client.events.emit("session_request_expire", { id: t }));
    }, this.setExpiry = async (t, e) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: e }), this.client.core.expirer.set(t, e);
    }, this.setProposal = async (t, e) => {
      await this.client.proposal.set(t, e), this.client.core.expirer.set(t, d0(q$1.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (t) => {
      const { id: e, topic: s, params: i, verifyContext: r2 } = t, o2 = i.request.expiryTimestamp || d0(q$1.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(e, { id: e, topic: s, params: i, verifyContext: r2 }), o2 && this.client.core.expirer.set(e, o2);
    }, this.sendRequest = async (t) => {
      const { topic: e, method: s, params: i, expiry: r2, relayRpcId: o2, clientRpcId: a2, throwOnFailedPublish: c2 } = t, d3 = formatJsonRpcRequest(s, i, a2);
      if (pr$1() && je.includes(s)) {
        const h2 = yu(JSON.stringify(d3));
        this.client.core.verify.register({ attestationId: h2 });
      }
      let p3;
      try {
        p3 = await this.client.core.crypto.encode(e, d3);
      } catch (h2) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`), h2;
      }
      const g3 = q$1[s].req;
      return r2 && (g3.ttl = r2), o2 && (g3.id = o2), this.client.core.history.set(e, d3), c2 ? (g3.internal = F(m$1({}, g3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e, p3, g3)) : this.client.core.relayer.publish(e, p3, g3).catch((h2) => this.client.logger.error(h2)), d3.id;
    }, this.sendResult = async (t) => {
      const { id: e, topic: s, result: i, throwOnFailedPublish: r2, encodeOpts: o2 } = t, a2 = formatJsonRpcResult(e, i);
      let c2;
      try {
        c2 = await this.client.core.crypto.encode(s, a2, o2);
      } catch (g3) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), g3;
      }
      let d3;
      try {
        d3 = await this.client.core.history.get(s, e);
      } catch (g3) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`), g3;
      }
      const p3 = q$1[d3.request.method].res;
      r2 ? (p3.internal = F(m$1({}, p3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, c2, p3)) : this.client.core.relayer.publish(s, c2, p3).catch((g3) => this.client.logger.error(g3)), await this.client.core.history.resolve(a2);
    }, this.sendError = async (t) => {
      const { id: e, topic: s, error: i, encodeOpts: r2 } = t, o2 = formatJsonRpcError(e, i);
      let a2;
      try {
        a2 = await this.client.core.crypto.encode(s, o2, r2);
      } catch (p3) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), p3;
      }
      let c2;
      try {
        c2 = await this.client.core.history.get(s, e);
      } catch (p3) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`), p3;
      }
      const d3 = q$1[c2.request.method].res;
      this.client.core.relayer.publish(s, a2, d3), await this.client.core.history.resolve(o2);
    }, this.cleanup = async () => {
      const t = [], e = [];
      this.client.session.getAll().forEach((s) => {
        let i = false;
        p0(s.expiry) && (i = true), this.client.core.crypto.keychain.has(s.topic) || (i = true), i && t.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        p0(s.expiryTimestamp) && e.push(s.id);
      }), await Promise.all([...t.map((s) => this.deleteSession({ topic: s })), ...e.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === A.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = A.active;
        const t = this.requestQueue.queue.shift();
        if (t) try {
          this.processRequest(t), await new Promise((e) => setTimeout(e, 300));
        } catch (e) {
          this.client.logger.warn(e);
        }
      }
      this.requestQueue.state = A.idle;
    }, this.processRequest = (t) => {
      const { topic: e, payload: s } = t, i = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: e, requestMethod: i })) switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(e, s);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(e, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(e, s);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(e, s);
        case "wc_sessionPing":
          return this.onSessionPingRequest(e, s);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(e, s);
        case "wc_sessionRequest":
          return this.onSessionRequest(e, s);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(e, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateRequest(e, s);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: e, payload: s } = t, i = (await this.client.core.history.get(e, s.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e, s);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e, s);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: e } = t, { message: s } = xe("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.shouldIgnorePairingRequest = (t) => {
      const { topic: e, requestMethod: s } = t, i = this.expectedPairingMethodMap.get(e);
      return !i || i.includes(s) ? false : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (t, e) => {
      const { params: s, id: i } = e;
      try {
        this.isValidConnect(m$1({}, e.params));
        const r2 = s.expiryTimestamp || d0(q$1.wc_sessionPropose.req.ttl), o2 = m$1({ id: i, pairingTopic: t, expiryTimestamp: r2 }, s);
        await this.setProposal(i, o2);
        const a2 = yu(JSON.stringify(e)), c2 = await this.getVerifyContext(a2, o2.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o2, verifyContext: c2 });
      } catch (r2) {
        await this.sendError({ id: i, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionProposeResponse = async (t, e) => {
      const { id: s } = e;
      if (isJsonRpcResult(e)) {
        const { result: i } = e;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const r2 = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: r2 });
        const o2 = r2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o2 });
        const a2 = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a2 });
        const c2 = await this.client.core.crypto.generateSharedKey(o2, a2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
        const d3 = await this.client.core.relayer.subscribe(c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d3 }), await this.client.core.pairing.activate({ topic: t });
      } else if (isJsonRpcError(e)) {
        await this.client.proposal.delete(s, tr$2("USER_DISCONNECTED"));
        const i = v0("session_connect");
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners, 954`);
        this.events.emit(v0("session_connect"), { error: e.error });
      }
    }, this.onSessionSettleRequest = async (t, e) => {
      const { id: s, params: i } = e;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: r2, controller: o2, expiry: a2, namespaces: c2, sessionProperties: d3, pairingTopic: p3, sessionConfig: g3 } = e.params, h2 = m$1(m$1({ topic: t, relay: r2, expiry: a2, namespaces: c2, acknowledged: true, pairingTopic: p3, requiredNamespaces: {}, optionalNamespaces: {}, controller: o2.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o2.publicKey, metadata: o2.metadata } }, d3 && { sessionProperties: d3 }), g3 && { sessionConfig: g3 });
        await this.sendResult({ id: e.id, topic: t, result: true, throwOnFailedPublish: true });
        const y3 = v0("session_connect");
        if (this.events.listenerCount(y3) === 0) throw new Error(`emitting ${y3} without any listeners 997`);
        this.events.emit(v0("session_connect"), { session: h2 }), this.cleanupDuplicatePairings(h2);
      } catch (r2) {
        await this.sendError({ id: s, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionSettleResponse = async (t, e) => {
      const { id: s } = e;
      isJsonRpcResult(e) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(v0("session_approve", s), {})) : isJsonRpcError(e) && (await this.client.session.delete(t, tr$2("USER_DISCONNECTED")), this.events.emit(v0("session_approve", s), { error: e.error }));
    }, this.onSessionUpdateRequest = async (t, e) => {
      const { params: s, id: i } = e;
      try {
        const r2 = `${t}_session_update`, o2 = lh.get(r2);
        if (o2 && this.isRequestOutOfSync(o2, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({ id: i, topic: t, error: tr$2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(m$1({ topic: t }, s));
        try {
          lh.set(r2, i), await this.client.session.update(t, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: t, result: true, throwOnFailedPublish: true });
        } catch (a2) {
          throw lh.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i, topic: t, params: s });
      } catch (r2) {
        await this.sendError({ id: i, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e) => {
      const { id: s } = e, i = v0("session_update", s);
      if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
      isJsonRpcResult(e) ? this.events.emit(v0("session_update", s), {}) : isJsonRpcError(e) && this.events.emit(v0("session_update", s), { error: e.error });
    }, this.onSessionExtendRequest = async (t, e) => {
      const { id: s } = e;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, d0(L$3)), await this.sendResult({ id: s, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s, topic: t });
      } catch (i) {
        await this.sendError({ id: s, topic: t, error: i }), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (t, e) => {
      const { id: s } = e, i = v0("session_extend", s);
      if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
      isJsonRpcResult(e) ? this.events.emit(v0("session_extend", s), {}) : isJsonRpcError(e) && this.events.emit(v0("session_extend", s), { error: e.error });
    }, this.onSessionPingRequest = async (t, e) => {
      const { id: s } = e;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: s, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s, topic: t });
      } catch (i) {
        await this.sendError({ id: s, topic: t, error: i }), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (t, e) => {
      const { id: s } = e, i = v0("session_ping", s);
      if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(e) ? this.events.emit(v0("session_ping", s), {}) : isJsonRpcError(e) && this.events.emit(v0("session_ping", s), { error: e.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, e) => {
      const { id: s } = e;
      try {
        this.isValidDisconnect({ topic: t, reason: e.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(v$2.publish, async () => {
            i(await this.deleteSession({ topic: t, id: s }));
          });
        }), this.sendResult({ id: s, topic: t, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: tr$2("USER_DISCONNECTED") })]);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (t, e) => {
      const { id: s, params: i } = e;
      try {
        await this.isValidRequest(m$1({ topic: t }, i));
        const r2 = yu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i, s))), o2 = this.client.session.get(t), a2 = await this.getVerifyContext(r2, o2.peer.metadata), c2 = { id: s, topic: t, params: i, verifyContext: a2 };
        await this.setPendingSessionRequest(c2), this.addSessionRequestToSessionRequestQueue(c2), this.processSessionRequestQueue();
      } catch (r2) {
        await this.sendError({ id: s, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionRequestResponse = (t, e) => {
      const { id: s } = e, i = v0("session_request", s);
      if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
      isJsonRpcResult(e) ? this.events.emit(v0("session_request", s), { result: e.result }) : isJsonRpcError(e) && this.events.emit(v0("session_request", s), { error: e.error });
    }, this.onSessionEventRequest = async (t, e) => {
      const { id: s, params: i } = e;
      try {
        const r2 = `${t}_session_event_${i.event.name}`, o2 = lh.get(r2);
        if (o2 && this.isRequestOutOfSync(o2, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(m$1({ topic: t }, i)), this.client.events.emit("session_event", { id: s, topic: t, params: i }), lh.set(r2, s);
      } catch (r2) {
        await this.sendError({ id: s, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionAuthenticateResponse = (t, e) => {
      const { id: s } = e;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t, payload: e }), isJsonRpcResult(e) ? this.events.emit(v0("session_request", s), { result: e.result }) : isJsonRpcError(e) && this.events.emit(v0("session_request", s), { error: e.error });
    }, this.onSessionAuthenticateRequest = async (t, e) => {
      const { requester: s, authPayload: i, expiryTimestamp: r2 } = e.params, o2 = yu(JSON.stringify(e)), a2 = await this.getVerifyContext(o2, this.client.metadata), c2 = { requester: s, pairingTopic: t, id: e.id, authPayload: i, verifyContext: a2, expiryTimestamp: r2 };
      await this.client.auth.requests.set(e.id, c2), this.client.events.emit("session_authenticate", { topic: t, params: e.params, id: e.id });
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = A.idle, this.processSessionRequestQueue();
      }, cjs$1.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: e }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i) => i.topic === t && i.request.method === "wc_sessionRequest").forEach((i) => {
        const r2 = i.request.id, o2 = v0("session_request", r2);
        if (this.events.listenerCount(o2) === 0) throw new Error(`emitting ${o2} without any listeners`);
        this.events.emit(v0("session_request", i.request.id), { error: e });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === A.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = A.active, this.client.events.emit("session_request", t);
      } catch (e) {
        this.client.logger.error(e);
      }
    }, this.onPairingCreated = (t) => {
      if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
      const e = this.client.proposal.getAll().find((s) => s.pairingTopic === t.topic);
      e && this.onSessionProposeRequest(t.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: e.requiredNamespaces, optionalNamespaces: e.optionalNamespaces, relays: e.relays, proposer: e.proposer, sessionProperties: e.sessionProperties }, e.id));
    }, this.isValidConnect = async (t) => {
      if (!$u(t)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(a2);
      }
      const { pairingTopic: e, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: r2, relays: o2 } = t;
      if (Pe(e) || await this.isValidPairingTopic(e), !Xu(o2)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `connect() relays: ${o2}`);
        throw new Error(a2);
      }
      !Pe(s) && Yr$1(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Pe(i) && Yr$1(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.validateNamespaces = (t, e) => {
      const s = Wu(t, "connect()", e);
      if (s) throw new Error(s.message);
    }, this.isValidApprove = async (t) => {
      if (!$u(t)) throw new Error(xe("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: e, namespaces: s, relayProtocol: i, sessionProperties: r2 } = t;
      this.checkRecentlyDeleted(e), await this.isValidProposalId(e);
      const o2 = this.client.proposal.get(e), a2 = So(s, "approve()");
      if (a2) throw new Error(a2.message);
      const c2 = Io(o2.requiredNamespaces, s, "approve()");
      if (c2) throw new Error(c2.message);
      if (!Gt$1(i, true)) {
        const { message: d3 } = xe("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(d3);
      }
      Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!$u(t)) {
        const { message: i } = xe("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(i);
      }
      const { id: e, reason: s } = t;
      if (this.checkRecentlyDeleted(e), await this.isValidProposalId(e), !th(s)) {
        const { message: i } = xe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!$u(t)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(c2);
      }
      const { relay: e, controller: s, namespaces: i, expiry: r2 } = t;
      if (!No(e)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const o2 = Vu(s, "onSessionSettleRequest()");
      if (o2) throw new Error(o2.message);
      const a2 = So(i, "onSessionSettleRequest()");
      if (a2) throw new Error(a2.message);
      if (p0(r2)) {
        const { message: c2 } = xe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (t) => {
      if (!$u(t)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(a2);
      }
      const { topic: e, namespaces: s } = t;
      this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
      const i = this.client.session.get(e), r2 = So(s, "update()");
      if (r2) throw new Error(r2.message);
      const o2 = Io(i.requiredNamespaces, s, "update()");
      if (o2) throw new Error(o2.message);
    }, this.isValidExtend = async (t) => {
      if (!$u(t)) {
        const { message: s } = xe("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s);
      }
      const { topic: e } = t;
      this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
    }, this.isValidRequest = async (t) => {
      if (!$u(t)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(a2);
      }
      const { topic: e, request: s, chainId: i, expiry: r2 } = t;
      this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
      const { namespaces: o2 } = this.client.session.get(e);
      if (!nh(o2, i)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(a2);
      }
      if (!eh(s)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(a2);
      }
      if (!fh(o2, i, s.method)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(a2);
      }
      if (r2 && !uh(r2, re$1)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${re$1.min} and ${re$1.max}`);
        throw new Error(a2);
      }
    }, this.isValidRespond = async (t) => {
      var e;
      if (!$u(t)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(r2);
      }
      const { topic: s, response: i } = t;
      try {
        await this.isValidSessionTopic(s);
      } catch (r2) {
        throw (e = t == null ? void 0 : t.response) != null && e.id && this.cleanupAfterResponse(t), r2;
      }
      if (!rh(i)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(r2);
      }
    }, this.isValidPing = async (t) => {
      if (!$u(t)) {
        const { message: s } = xe("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s);
      }
      const { topic: e } = t;
      await this.isValidSessionOrPairingTopic(e);
    }, this.isValidEmit = async (t) => {
      if (!$u(t)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(o2);
      }
      const { topic: e, event: s, chainId: i } = t;
      await this.isValidSessionTopic(e);
      const { namespaces: r2 } = this.client.session.get(e);
      if (!nh(r2, i)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o2);
      }
      if (!ih(s)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o2);
      }
      if (!oh(r2, i, s.name)) {
        const { message: o2 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o2);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!$u(t)) {
        const { message: s } = xe("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s);
      }
      const { topic: e } = t;
      await this.isValidSessionOrPairingTopic(e);
    }, this.isValidAuthenticate = (t) => {
      const { chains: e, uri: s, domain: i, nonce: r2 } = t;
      if (!Array.isArray(e) || e.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!Gt$1(s, false)) throw new Error("uri is required parameter");
      if (!Gt$1(i, false)) throw new Error("domain is required parameter");
      if (!Gt$1(r2, false)) throw new Error("nonce is required parameter");
      if ([...new Set(e.map((a2) => dn$1(a2).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o2 } = dn$1(e[0]);
      if (o2 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (t, e) => {
      const s = { verified: { verifyUrl: e.verifyUrl || k, validation: "UNKNOWN", origin: e.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: e.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(e.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (t, e) => {
      Object.values(t).forEach((s) => {
        if (!Gt$1(s, false)) {
          const { message: i } = xe("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i);
        }
      });
    }, this.getPendingAuthRequest = (t) => {
      const e = this.client.auth.requests.get(t);
      return typeof e == "object" ? e : void 0;
    }, this.addToRecentlyDeleted = (t, e) => {
      if (this.recentlyDeletedMap.set(t, e), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const i = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s++ >= i) break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }, this.checkRecentlyDeleted = (t) => {
      const e = this.recentlyDeletedMap.get(t);
      if (e) {
        const { message: s } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${e}: ${t}`);
        throw new Error(s);
      }
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: n2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(n2);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(v$2.message, async (n2) => {
      const { topic: t, message: e } = n2, { publicKey: s } = this.client.auth.authKeys.keys.includes(J) ? this.client.auth.authKeys.get(J) : { responseTopic: void 0, publicKey: void 0 }, i = await this.client.core.crypto.decode(t, e, { receiverPublicKey: s });
      try {
        isJsonRpcRequest(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({ topic: t, payload: i })) : isJsonRpcResponse(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: t, payload: i }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: i });
      } catch (r2) {
        this.client.logger.error(r2);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(C$1.expired, async (n2) => {
      const { topic: t, id: e } = l0(n2.target);
      if (e && this.client.pendingRequest.keys.includes(e)) return await this.deletePendingSessionRequest(e, xe("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t })) : e && (await this.deleteProposal(e, true), this.client.events.emit("proposal_expire", { id: e }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(V$1.create, (n2) => this.onPairingCreated(n2)), this.client.core.pairing.events.on(V$1.delete, (n2) => {
      this.addToRecentlyDeleted(n2.topic, "pairing");
    });
  }
  isValidPairingTopic(n2) {
    if (!Gt$1(n2, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${n2}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n2)) {
      const { message: t } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n2}`);
      throw new Error(t);
    }
    if (p0(this.client.core.pairing.pairings.get(n2).expiry)) {
      const { message: t } = xe("EXPIRED", `pairing topic: ${n2}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(n2) {
    if (!Gt$1(n2, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic should be a string: ${n2}`);
      throw new Error(t);
    }
    if (this.checkRecentlyDeleted(n2), !this.client.session.keys.includes(n2)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session topic doesn't exist: ${n2}`);
      throw new Error(t);
    }
    if (p0(this.client.session.get(n2).expiry)) {
      await this.deleteSession({ topic: n2 });
      const { message: t } = xe("EXPIRED", `session topic: ${n2}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(n2)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n2}`);
      throw await this.deleteSession({ topic: n2 }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(n2) {
    if (this.checkRecentlyDeleted(n2), this.client.session.keys.includes(n2)) await this.isValidSessionTopic(n2);
    else if (this.client.core.pairing.pairings.keys.includes(n2)) this.isValidPairingTopic(n2);
    else if (Gt$1(n2, false)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n2}`);
      throw new Error(t);
    } else {
      const { message: t } = xe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n2}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(n2) {
    if (!Zu(n2)) {
      const { message: t } = xe("MISSING_OR_INVALID", `proposal id should be a number: ${n2}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(n2)) {
      const { message: t } = xe("NO_MATCHING_KEY", `proposal id doesn't exist: ${n2}`);
      throw new Error(t);
    }
    if (p0(this.client.proposal.get(n2).expiryTimestamp)) {
      await this.deleteProposal(n2);
      const { message: t } = xe("EXPIRED", `proposal id: ${n2}`);
      throw new Error(t);
    }
  }
};
let Zt$1 = class Zt extends Vt {
  constructor(n2, t) {
    super(n2, t, Ke, se$1), this.core = n2, this.logger = t;
  }
};
class We extends Vt {
  constructor(n2, t) {
    super(n2, t, Ge, se$1), this.core = n2, this.logger = t;
  }
}
class es2 extends Vt {
  constructor(n2, t) {
    super(n2, t, Fe, se$1, (e) => e.id), this.core = n2, this.logger = t;
  }
}
class ts2 extends Vt {
  constructor(n2, t) {
    super(n2, t, He, X, () => J), this.core = n2, this.logger = t;
  }
}
let ss$1 = class ss2 extends Vt {
  constructor(n2, t) {
    super(n2, t, Ye, X), this.core = n2, this.logger = t;
  }
};
class is2 extends Vt {
  constructor(n2, t) {
    super(n2, t, Xe$1, X, (e) => e.id), this.core = n2, this.logger = t;
  }
}
class rs {
  constructor(n2, t) {
    this.core = n2, this.logger = t, this.authKeys = new ts2(this.core, this.logger), this.pairingTopics = new ss$1(this.core, this.logger), this.requests = new is2(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
let ne$1 = class ne extends b$1 {
  constructor(n2) {
    super(n2), this.protocol = Se, this.version = Ee, this.name = ie$1.name, this.events = new eventsExports.EventEmitter(), this.on = (e, s) => this.events.on(e, s), this.once = (e, s) => this.events.once(e, s), this.off = (e, s) => this.events.off(e, s), this.removeListener = (e, s) => this.events.removeListener(e, s), this.removeAllListeners = (e) => this.events.removeAllListeners(e), this.connect = async (e) => {
      try {
        return await this.engine.connect(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (e) => {
      try {
        return await this.engine.pair(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (e) => {
      try {
        return await this.engine.approve(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (e) => {
      try {
        return await this.engine.reject(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (e) => {
      try {
        return await this.engine.update(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (e) => {
      try {
        return await this.engine.extend(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (e) => {
      try {
        return await this.engine.request(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (e) => {
      try {
        return await this.engine.respond(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (e) => {
      try {
        return await this.engine.ping(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (e) => {
      try {
        return await this.engine.emit(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (e) => {
      try {
        return await this.engine.disconnect(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (e) => {
      try {
        return this.engine.find(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e) {
        throw this.logger.error(e.message), e;
      }
    }, this.authenticate = async (e) => {
      try {
        return await this.engine.authenticate(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.formatAuthMessage = (e) => {
      try {
        return this.engine.formatAuthMessage(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approveSessionAuthenticate = async (e) => {
      try {
        return await this.engine.approveSessionAuthenticate(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.rejectSessionAuthenticate = async (e) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (n2 == null ? void 0 : n2.name) || ie$1.name, this.metadata = (n2 == null ? void 0 : n2.metadata) || Xo();
    const t = typeof (n2 == null ? void 0 : n2.logger) < "u" && typeof (n2 == null ? void 0 : n2.logger) != "string" ? n2.logger : Hg(k$1({ level: (n2 == null ? void 0 : n2.logger) || ie$1.logger }));
    this.core = (n2 == null ? void 0 : n2.core) || new Br(n2), this.logger = E$3(t, this.name), this.session = new We(this.core, this.logger), this.proposal = new Zt$1(this.core, this.logger), this.pendingRequest = new es2(this.core, this.logger), this.engine = new Wt$1(this), this.auth = new rs(this.core, this.logger);
  }
  static async init(n2) {
    const t = new ne(n2);
    return await t.initialize(), t;
  }
  get context() {
    return y$2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (n2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n2.message), n2;
    }
  }
};
const Ir2 = ":";
function dn(e) {
  const [t, r2] = e.split(Ir2);
  return { namespace: t, reference: r2 };
}
function ge$1(e = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e, ...t])];
}
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e).forEach(function(i) {
    var n2 = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r2, i, n2.get ? n2 : { enumerable: true, get: function() {
      return e[i];
    } });
  }), r2;
}
var Pn = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i = typeof window == "object", n2 = i ? window : {};
    n2.JS_SHA3_NO_WINDOW && (i = false);
    var o2 = !i && typeof self == "object", h2 = !n2.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h2 ? n2 = On : o2 && (n2 = self);
    var p3 = !n2.JS_SHA3_NO_COMMON_JS && true && e.exports, b3 = !n2.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m2 = "0123456789abcdef".split(""), w3 = [31, 7936, 2031616, 520093696], y3 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], I2 = [6, 1536, 393216, 100663296], N2 = [0, 8, 16, 24], C2 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F2 = [224, 256, 384, 512], U2 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n2.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u3) {
      return Object.prototype.toString.call(u3) === "[object Array]";
    }), b3 && (n2.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u3) {
      return typeof u3 == "object" && u3.buffer && u3.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u3, E3, _2) {
      return function(B) {
        return new s(u3, E3, u3).update(B)[_2]();
      };
    }, H = function(u3, E3, _2) {
      return function(B, R) {
        return new s(u3, E3, R).update(B)[_2]();
      };
    }, z2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["cshake" + u3].update(B, R, T2, P2)[_2]();
      };
    }, Pt2 = function(u3, E3, _2) {
      return function(B, R, T2, P2) {
        return f2["kmac" + u3].update(B, R, T2, P2)[_2]();
      };
    }, W = function(u3, E3, _2, B) {
      for (var R = 0; R < J2.length; ++R) {
        var T2 = J2[R];
        u3[T2] = E3(_2, B, T2);
      }
      return u3;
    }, Rt2 = function(u3, E3) {
      var _2 = G(u3, E3, "hex");
      return _2.create = function() {
        return new s(u3, E3, u3);
      }, _2.update = function(B) {
        return _2.create().update(B);
      }, W(_2, G, u3, E3);
    }, Yt3 = function(u3, E3) {
      var _2 = H(u3, E3, "hex");
      return _2.create = function(B) {
        return new s(u3, E3, B);
      }, _2.update = function(B, R) {
        return _2.create(R).update(B);
      }, W(_2, H, u3, E3);
    }, Y = function(u3, E3) {
      var _2 = Bt2[u3], B = z2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return !T2 && !P2 ? f2["shake" + u3].create(R) : new s(u3, E3, R).bytepad([T2, P2], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(T2, P2, O2).update(R);
      }, W(B, z2, u3, E3);
    }, Vt2 = function(u3, E3) {
      var _2 = Bt2[u3], B = Pt2(u3, E3, "hex");
      return B.create = function(R, T2, P2) {
        return new v3(u3, E3, T2).bytepad(["KMAC", P2], _2).bytepad([R], _2);
      }, B.update = function(R, T2, P2, O2) {
        return B.create(R, P2, O2).update(T2);
      }, W(B, Pt2, u3, E3);
    }, A2 = [{ name: "keccak", padding: S2, bits: F2, createMethod: Rt2 }, { name: "sha3", padding: I2, bits: F2, createMethod: Rt2 }, { name: "shake", padding: w3, bits: U2, createMethod: Yt3 }, { name: "cshake", padding: y3, bits: U2, createMethod: Y }, { name: "kmac", padding: y3, bits: U2, createMethod: Vt2 }], f2 = {}, a2 = [], c2 = 0; c2 < A2.length; ++c2) for (var d3 = A2[c2], g3 = d3.bits, x = 0; x < g3.length; ++x) {
      var M2 = d3.name + "_" + g3[x];
      if (a2.push(M2), f2[M2] = d3.createMethod(g3[x], d3.padding), d3.name !== "sha3") {
        var l2 = d3.name + g3[x];
        a2.push(l2), f2[l2] = f2[M2];
      }
    }
    function s(u3, E3, _2) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _2, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u3 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _2 >> 5, this.extraBytes = (_2 & 31) >> 3;
      for (var B = 0; B < 50; ++B) this.s[B] = 0;
    }
    s.prototype.update = function(u3) {
      if (this.finalized) throw new Error(r2);
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      for (var B = this.blocks, R = this.byteCount, T2 = u3.length, P2 = this.blockCount, O2 = 0, Ct2 = this.s, D2, q2; O2 < T2; ) {
        if (this.reset) for (this.reset = false, B[0] = this.block, D2 = 1; D2 < P2 + 1; ++D2) B[D2] = 0;
        if (E3) for (D2 = this.start; O2 < T2 && D2 < R; ++O2) B[D2 >> 2] |= u3[O2] << N2[D2++ & 3];
        else for (D2 = this.start; O2 < T2 && D2 < R; ++O2) q2 = u3.charCodeAt(O2), q2 < 128 ? B[D2 >> 2] |= q2 << N2[D2++ & 3] : q2 < 2048 ? (B[D2 >> 2] |= (192 | q2 >> 6) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : q2 < 55296 || q2 >= 57344 ? (B[D2 >> 2] |= (224 | q2 >> 12) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : (q2 = 65536 + ((q2 & 1023) << 10 | u3.charCodeAt(++O2) & 1023), B[D2 >> 2] |= (240 | q2 >> 18) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 12 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]);
        if (this.lastByteIndex = D2, D2 >= R) {
          for (this.start = D2 - R, this.block = B[P2], D2 = 0; D2 < P2; ++D2) Ct2[D2] ^= B[D2];
          k2(Ct2), this.reset = true;
        } else this.start = D2;
      }
      return this;
    }, s.prototype.encode = function(u3, E3) {
      var _2 = u3 & 255, B = 1, R = [_2];
      for (u3 = u3 >> 8, _2 = u3 & 255; _2 > 0; ) R.unshift(_2), u3 = u3 >> 8, _2 = u3 & 255, ++B;
      return E3 ? R.push(B) : R.unshift(B), this.update(R), R.length;
    }, s.prototype.encodeString = function(u3) {
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null) throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer) u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3))) throw new Error(t);
        } else throw new Error(t);
        E3 = true;
      }
      var B = 0, R = u3.length;
      if (E3) B = R;
      else for (var T2 = 0; T2 < u3.length; ++T2) {
        var P2 = u3.charCodeAt(T2);
        P2 < 128 ? B += 1 : P2 < 2048 ? B += 2 : P2 < 55296 || P2 >= 57344 ? B += 3 : (P2 = 65536 + ((P2 & 1023) << 10 | u3.charCodeAt(++T2) & 1023), B += 4);
      }
      return B += this.encode(B * 8), this.update(u3), B;
    }, s.prototype.bytepad = function(u3, E3) {
      for (var _2 = this.encode(E3), B = 0; B < u3.length; ++B) _2 += this.encodeString(u3[B]);
      var R = E3 - _2 % E3, T2 = [];
      return T2.length = R, this.update(T2), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u3 = this.blocks, E3 = this.lastByteIndex, _2 = this.blockCount, B = this.s;
        if (u3[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount) for (u3[0] = u3[_2], E3 = 1; E3 < _2 + 1; ++E3) u3[E3] = 0;
        for (u3[_2 - 1] |= 2147483648, E3 = 0; E3 < _2; ++E3) B[E3] ^= u3[E3];
        k2(B);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = "", O2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15] + m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15] + m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15] + m2[O2 >> 28 & 15] + m2[O2 >> 24 & 15];
        T2 % u3 === 0 && (k2(E3), R = 0);
      }
      return B && (O2 = E3[R], P2 += m2[O2 >> 4 & 15] + m2[O2 & 15], B > 1 && (P2 += m2[O2 >> 12 & 15] + m2[O2 >> 8 & 15]), B > 2 && (P2 += m2[O2 >> 20 & 15] + m2[O2 >> 16 & 15])), P2;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = this.outputBits >> 3, O2;
      B ? O2 = new ArrayBuffer(_2 + 1 << 2) : O2 = new ArrayBuffer(P2);
      for (var Ct2 = new Uint32Array(O2); T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) Ct2[T2] = E3[R];
        T2 % u3 === 0 && k2(E3);
      }
      return B && (Ct2[R] = E3[R], O2 = O2.slice(0, P2)), O2;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B = this.extraBytes, R = 0, T2 = 0, P2 = [], O2, Ct2; T2 < _2; ) {
        for (R = 0; R < u3 && T2 < _2; ++R, ++T2) O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, P2[O2 + 1] = Ct2 >> 8 & 255, P2[O2 + 2] = Ct2 >> 16 & 255, P2[O2 + 3] = Ct2 >> 24 & 255;
        T2 % u3 === 0 && k2(E3);
      }
      return B && (O2 = T2 << 2, Ct2 = E3[R], P2[O2] = Ct2 & 255, B > 1 && (P2[O2 + 1] = Ct2 >> 8 & 255), B > 2 && (P2[O2 + 2] = Ct2 >> 16 & 255)), P2;
    };
    function v3(u3, E3, _2) {
      s.call(this, u3, E3, _2);
    }
    v3.prototype = new s(), v3.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k2 = function(u3) {
      var E3, _2, B, R, T2, P2, O2, Ct2, D2, q2, De2, X2, Z2, Fe2, $2, tt2, Te, et2, rt2, Ue2, it2, nt2, ke2, ft2, ot2, qe2, st2, at2, Ke2, ut2, ht2, He2, ct2, lt2, ze2, dt2, pt2, Le, vt2, mt2, je2, gt2, At2, Qe2, bt2, yt2, Je2, wt2, xt2, Ge2, Mt2, Et2, Ye2, St2, Nt2, Ve2, It2, _t2, Me2, Ee2, Se2, Ne, Ie;
      for (B = 0; B < 48; B += 2) R = u3[0] ^ u3[10] ^ u3[20] ^ u3[30] ^ u3[40], T2 = u3[1] ^ u3[11] ^ u3[21] ^ u3[31] ^ u3[41], P2 = u3[2] ^ u3[12] ^ u3[22] ^ u3[32] ^ u3[42], O2 = u3[3] ^ u3[13] ^ u3[23] ^ u3[33] ^ u3[43], Ct2 = u3[4] ^ u3[14] ^ u3[24] ^ u3[34] ^ u3[44], D2 = u3[5] ^ u3[15] ^ u3[25] ^ u3[35] ^ u3[45], q2 = u3[6] ^ u3[16] ^ u3[26] ^ u3[36] ^ u3[46], De2 = u3[7] ^ u3[17] ^ u3[27] ^ u3[37] ^ u3[47], X2 = u3[8] ^ u3[18] ^ u3[28] ^ u3[38] ^ u3[48], Z2 = u3[9] ^ u3[19] ^ u3[29] ^ u3[39] ^ u3[49], E3 = X2 ^ (P2 << 1 | O2 >>> 31), _2 = Z2 ^ (O2 << 1 | P2 >>> 31), u3[0] ^= E3, u3[1] ^= _2, u3[10] ^= E3, u3[11] ^= _2, u3[20] ^= E3, u3[21] ^= _2, u3[30] ^= E3, u3[31] ^= _2, u3[40] ^= E3, u3[41] ^= _2, E3 = R ^ (Ct2 << 1 | D2 >>> 31), _2 = T2 ^ (D2 << 1 | Ct2 >>> 31), u3[2] ^= E3, u3[3] ^= _2, u3[12] ^= E3, u3[13] ^= _2, u3[22] ^= E3, u3[23] ^= _2, u3[32] ^= E3, u3[33] ^= _2, u3[42] ^= E3, u3[43] ^= _2, E3 = P2 ^ (q2 << 1 | De2 >>> 31), _2 = O2 ^ (De2 << 1 | q2 >>> 31), u3[4] ^= E3, u3[5] ^= _2, u3[14] ^= E3, u3[15] ^= _2, u3[24] ^= E3, u3[25] ^= _2, u3[34] ^= E3, u3[35] ^= _2, u3[44] ^= E3, u3[45] ^= _2, E3 = Ct2 ^ (X2 << 1 | Z2 >>> 31), _2 = D2 ^ (Z2 << 1 | X2 >>> 31), u3[6] ^= E3, u3[7] ^= _2, u3[16] ^= E3, u3[17] ^= _2, u3[26] ^= E3, u3[27] ^= _2, u3[36] ^= E3, u3[37] ^= _2, u3[46] ^= E3, u3[47] ^= _2, E3 = q2 ^ (R << 1 | T2 >>> 31), _2 = De2 ^ (T2 << 1 | R >>> 31), u3[8] ^= E3, u3[9] ^= _2, u3[18] ^= E3, u3[19] ^= _2, u3[28] ^= E3, u3[29] ^= _2, u3[38] ^= E3, u3[39] ^= _2, u3[48] ^= E3, u3[49] ^= _2, Fe2 = u3[0], $2 = u3[1], yt2 = u3[11] << 4 | u3[10] >>> 28, Je2 = u3[10] << 4 | u3[11] >>> 28, at2 = u3[20] << 3 | u3[21] >>> 29, Ke2 = u3[21] << 3 | u3[20] >>> 29, Ee2 = u3[31] << 9 | u3[30] >>> 23, Se2 = u3[30] << 9 | u3[31] >>> 23, gt2 = u3[40] << 18 | u3[41] >>> 14, At2 = u3[41] << 18 | u3[40] >>> 14, lt2 = u3[2] << 1 | u3[3] >>> 31, ze2 = u3[3] << 1 | u3[2] >>> 31, tt2 = u3[13] << 12 | u3[12] >>> 20, Te = u3[12] << 12 | u3[13] >>> 20, wt2 = u3[22] << 10 | u3[23] >>> 22, xt2 = u3[23] << 10 | u3[22] >>> 22, ut2 = u3[33] << 13 | u3[32] >>> 19, ht2 = u3[32] << 13 | u3[33] >>> 19, Ne = u3[42] << 2 | u3[43] >>> 30, Ie = u3[43] << 2 | u3[42] >>> 30, St2 = u3[5] << 30 | u3[4] >>> 2, Nt2 = u3[4] << 30 | u3[5] >>> 2, dt2 = u3[14] << 6 | u3[15] >>> 26, pt2 = u3[15] << 6 | u3[14] >>> 26, et2 = u3[25] << 11 | u3[24] >>> 21, rt2 = u3[24] << 11 | u3[25] >>> 21, Ge2 = u3[34] << 15 | u3[35] >>> 17, Mt2 = u3[35] << 15 | u3[34] >>> 17, He2 = u3[45] << 29 | u3[44] >>> 3, ct2 = u3[44] << 29 | u3[45] >>> 3, ft2 = u3[6] << 28 | u3[7] >>> 4, ot2 = u3[7] << 28 | u3[6] >>> 4, Ve2 = u3[17] << 23 | u3[16] >>> 9, It2 = u3[16] << 23 | u3[17] >>> 9, Le = u3[26] << 25 | u3[27] >>> 7, vt2 = u3[27] << 25 | u3[26] >>> 7, Ue2 = u3[36] << 21 | u3[37] >>> 11, it2 = u3[37] << 21 | u3[36] >>> 11, Et2 = u3[47] << 24 | u3[46] >>> 8, Ye2 = u3[46] << 24 | u3[47] >>> 8, Qe2 = u3[8] << 27 | u3[9] >>> 5, bt2 = u3[9] << 27 | u3[8] >>> 5, qe2 = u3[18] << 20 | u3[19] >>> 12, st2 = u3[19] << 20 | u3[18] >>> 12, _t2 = u3[29] << 7 | u3[28] >>> 25, Me2 = u3[28] << 7 | u3[29] >>> 25, mt2 = u3[38] << 8 | u3[39] >>> 24, je2 = u3[39] << 8 | u3[38] >>> 24, nt2 = u3[48] << 14 | u3[49] >>> 18, ke2 = u3[49] << 14 | u3[48] >>> 18, u3[0] = Fe2 ^ ~tt2 & et2, u3[1] = $2 ^ ~Te & rt2, u3[10] = ft2 ^ ~qe2 & at2, u3[11] = ot2 ^ ~st2 & Ke2, u3[20] = lt2 ^ ~dt2 & Le, u3[21] = ze2 ^ ~pt2 & vt2, u3[30] = Qe2 ^ ~yt2 & wt2, u3[31] = bt2 ^ ~Je2 & xt2, u3[40] = St2 ^ ~Ve2 & _t2, u3[41] = Nt2 ^ ~It2 & Me2, u3[2] = tt2 ^ ~et2 & Ue2, u3[3] = Te ^ ~rt2 & it2, u3[12] = qe2 ^ ~at2 & ut2, u3[13] = st2 ^ ~Ke2 & ht2, u3[22] = dt2 ^ ~Le & mt2, u3[23] = pt2 ^ ~vt2 & je2, u3[32] = yt2 ^ ~wt2 & Ge2, u3[33] = Je2 ^ ~xt2 & Mt2, u3[42] = Ve2 ^ ~_t2 & Ee2, u3[43] = It2 ^ ~Me2 & Se2, u3[4] = et2 ^ ~Ue2 & nt2, u3[5] = rt2 ^ ~it2 & ke2, u3[14] = at2 ^ ~ut2 & He2, u3[15] = Ke2 ^ ~ht2 & ct2, u3[24] = Le ^ ~mt2 & gt2, u3[25] = vt2 ^ ~je2 & At2, u3[34] = wt2 ^ ~Ge2 & Et2, u3[35] = xt2 ^ ~Mt2 & Ye2, u3[44] = _t2 ^ ~Ee2 & Ne, u3[45] = Me2 ^ ~Se2 & Ie, u3[6] = Ue2 ^ ~nt2 & Fe2, u3[7] = it2 ^ ~ke2 & $2, u3[16] = ut2 ^ ~He2 & ft2, u3[17] = ht2 ^ ~ct2 & ot2, u3[26] = mt2 ^ ~gt2 & lt2, u3[27] = je2 ^ ~At2 & ze2, u3[36] = Ge2 ^ ~Et2 & Qe2, u3[37] = Mt2 ^ ~Ye2 & bt2, u3[46] = Ee2 ^ ~Ne & St2, u3[47] = Se2 ^ ~Ie & Nt2, u3[8] = nt2 ^ ~Fe2 & tt2, u3[9] = ke2 ^ ~$2 & Te, u3[18] = He2 ^ ~ft2 & qe2, u3[19] = ct2 ^ ~ot2 & st2, u3[28] = gt2 ^ ~lt2 & dt2, u3[29] = At2 ^ ~ze2 & pt2, u3[38] = Et2 ^ ~Qe2 & yt2, u3[39] = Ye2 ^ ~bt2 & Je2, u3[48] = Ne ^ ~St2 & Ve2, u3[49] = Ie ^ ~Nt2 & It2, u3[0] ^= C2[B], u3[1] ^= C2[B + 1];
    };
    if (p3) e.exports = f2;
    else for (c2 = 0; c2 < a2.length; ++c2) n2[a2[c2]] = f2[a2[c2]];
  })();
})(Pn);
const y0 = "logger/5.7.0";
let Dn = false, Fn = false;
const Cr2 = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Tn = Cr2.default, gi = null;
function w0() {
  try {
    const e = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test") throw new Error("bad normalize");
      } catch {
        e.push(t);
      }
    }), e.length) throw new Error("missing " + e.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
const Un = w0();
var Ai;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai || (Ai = {}));
var re;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
const kn = "0123456789abcdef";
let L$2 = class L3 {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i = t.toLowerCase();
    Cr2[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr2[i]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(L3.levels.DEBUG, t);
  }
  info(...t) {
    this._log(L3.levels.INFO, t);
  }
  warn(...t) {
    this._log(L3.levels.WARNING, t);
  }
  makeError(t, r2, i) {
    if (Fn) return this.makeError("censored error", r2, {});
    r2 || (r2 = L3.errors.UNKNOWN_ERROR), i || (i = {});
    const n2 = [];
    Object.keys(i).forEach((b3) => {
      const m2 = i[b3];
      try {
        if (m2 instanceof Uint8Array) {
          let w3 = "";
          for (let y3 = 0; y3 < m2.length; y3++) w3 += kn[m2[y3] >> 4], w3 += kn[m2[y3] & 15];
          n2.push(b3 + "=Uint8Array(0x" + w3 + ")");
        } else n2.push(b3 + "=" + JSON.stringify(m2));
      } catch {
        n2.push(b3 + "=" + JSON.stringify(i[b3].toString()));
      }
    }), n2.push(`code=${r2}`), n2.push(`version=${this.version}`);
    const o2 = t;
    let h2 = "";
    switch (r2) {
      case re.NUMERIC_FAULT: {
        h2 = "NUMERIC_FAULT";
        const b3 = t;
        switch (b3) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h2 += "-" + b3;
            break;
          case "negative-power":
          case "negative-width":
            h2 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h2 += "-unbound-result";
            break;
        }
        break;
      }
      case re.CALL_EXCEPTION:
      case re.INSUFFICIENT_FUNDS:
      case re.MISSING_NEW:
      case re.NONCE_EXPIRED:
      case re.REPLACEMENT_UNDERPRICED:
      case re.TRANSACTION_REPLACED:
      case re.UNPREDICTABLE_GAS_LIMIT:
        h2 = r2;
        break;
    }
    h2 && (t += " [ See: https://links.ethers.org/v5-errors-" + h2 + " ]"), n2.length && (t += " (" + n2.join(", ") + ")");
    const p3 = new Error(t);
    return p3.reason = o2, p3.code = r2, Object.keys(i).forEach(function(b3) {
      p3[b3] = i[b3];
    }), p3;
  }
  throwError(t, r2, i) {
    throw this.makeError(t, r2, i);
  }
  throwArgumentError(t, r2, i) {
    return this.throwError(t, L3.errors.INVALID_ARGUMENT, { argument: r2, value: i });
  }
  assert(t, r2, i, n2) {
    t || this.throwError(r2, i, n2);
  }
  assertArgument(t, r2, i, n2) {
    t || this.throwArgumentError(r2, i, n2);
  }
  checkNormalize(t) {
    Un && this.throwError("platform missing String.prototype.normalize", L3.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, L3.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, L3.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i) {
    i ? i = ": " + i : i = "", t < r2 && this.throwError("missing argument" + i, L3.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i, L3.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", L3.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", L3.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", L3.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi || (gi = new L3(y0)), gi;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", L3.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn) {
      if (!t) return;
      this.globalLogger().throwError("error censorship permanent", L3.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn = !!t, Dn = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr2[t.toLowerCase()];
    if (r2 == null) {
      L3.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn = r2;
  }
  static from(t) {
    return new L3(t);
  }
};
L$2.errors = re, L$2.levels = Ai;
const x0 = "bytes/5.7.0", Dt = new L$2(x0);
function qn(e) {
  return !!e.toHexString;
}
function rr(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function Kn(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function ir(e) {
  if (e == null) return false;
  if (e.constructor === Uint8Array) return true;
  if (typeof e == "string" || !Kn(e.length) || e.length < 0) return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Kn(r2) || r2 < 0 || r2 >= 256) return false;
  }
  return true;
}
function Ot2(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; ) r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), rr(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e) && (e = e.toHexString()), Qt(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e));
    const i = [];
    for (let n2 = 0; n2 < r2.length; n2 += 2) i.push(parseInt(r2.substring(n2, n2 + 2), 16));
    return rr(new Uint8Array(i));
  }
  return ir(e) ? rr(new Uint8Array(e)) : Dt.throwArgumentError("invalid arrayify value", "value", e);
}
function Qt(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t);
}
const bi = "0123456789abcdef";
function Kt(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; ) r2 = bi[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e)) return e.toHexString();
  if (Qt(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (ir(e)) {
    let r2 = "0x";
    for (let i = 0; i < e.length; i++) {
      let n2 = e[i];
      r2 += bi[(n2 & 240) >> 4] + bi[n2 & 15];
    }
    return r2;
  }
  return Dt.throwArgumentError("invalid hexlify value", "value", e);
}
function oe(e, t) {
  for (typeof e != "string" ? e = Kt(e) : Qt(e) || Dt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; ) e = "0x0" + e.substring(2);
  return e;
}
var Ln = { exports: {} }, I0 = {}, _0 = Object.freeze({ __proto__: null, default: I0 }), B0 = A0(_0);
(function(e) {
  (function(t, r2) {
    function i(A2, f2) {
      if (!A2) throw new Error(f2 || "Assertion failed");
    }
    function n2(A2, f2) {
      A2.super_ = f2;
      var a2 = function() {
      };
      a2.prototype = f2.prototype, A2.prototype = new a2(), A2.prototype.constructor = A2;
    }
    function o2(A2, f2, a2) {
      if (o2.isBN(A2)) return A2;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A2 !== null && ((f2 === "le" || f2 === "be") && (a2 = f2, f2 = 10), this._init(A2 || 0, f2 || 10, a2 || "be"));
    }
    typeof t == "object" ? t.exports = o2 : r2.BN = o2, o2.BN = o2, o2.wordSize = 26;
    var h2;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h2 = window.Buffer : h2 = B0.Buffer;
    } catch {
    }
    o2.isBN = function(f2) {
      return f2 instanceof o2 ? true : f2 !== null && typeof f2 == "object" && f2.constructor.wordSize === o2.wordSize && Array.isArray(f2.words);
    }, o2.max = function(f2, a2) {
      return f2.cmp(a2) > 0 ? f2 : a2;
    }, o2.min = function(f2, a2) {
      return f2.cmp(a2) < 0 ? f2 : a2;
    }, o2.prototype._init = function(f2, a2, c2) {
      if (typeof f2 == "number") return this._initNumber(f2, a2, c2);
      if (typeof f2 == "object") return this._initArray(f2, a2, c2);
      a2 === "hex" && (a2 = 16), i(a2 === (a2 | 0) && a2 >= 2 && a2 <= 36), f2 = f2.toString().replace(/\s+/g, "");
      var d3 = 0;
      f2[0] === "-" && (d3++, this.negative = 1), d3 < f2.length && (a2 === 16 ? this._parseHex(f2, d3, c2) : (this._parseBase(f2, a2, d3), c2 === "le" && this._initArray(this.toArray(), a2, c2)));
    }, o2.prototype._initNumber = function(f2, a2, c2) {
      f2 < 0 && (this.negative = 1, f2 = -f2), f2 < 67108864 ? (this.words = [f2 & 67108863], this.length = 1) : f2 < 4503599627370496 ? (this.words = [f2 & 67108863, f2 / 67108864 & 67108863], this.length = 2) : (i(f2 < 9007199254740992), this.words = [f2 & 67108863, f2 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a2, c2);
    }, o2.prototype._initArray = function(f2, a2, c2) {
      if (i(typeof f2.length == "number"), f2.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f2.length / 3), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3, x, M2 = 0;
      if (c2 === "be") for (d3 = f2.length - 1, g3 = 0; d3 >= 0; d3 -= 3) x = f2[d3] | f2[d3 - 1] << 8 | f2[d3 - 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      else if (c2 === "le") for (d3 = 0, g3 = 0; d3 < f2.length; d3 += 3) x = f2[d3] | f2[d3 + 1] << 8 | f2[d3 + 2] << 16, this.words[g3] |= x << M2 & 67108863, this.words[g3 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      return this._strip();
    };
    function p3(A2, f2) {
      var a2 = A2.charCodeAt(f2);
      if (a2 >= 48 && a2 <= 57) return a2 - 48;
      if (a2 >= 65 && a2 <= 70) return a2 - 55;
      if (a2 >= 97 && a2 <= 102) return a2 - 87;
      i(false, "Invalid character in " + A2);
    }
    function b3(A2, f2, a2) {
      var c2 = p3(A2, a2);
      return a2 - 1 >= f2 && (c2 |= p3(A2, a2 - 1) << 4), c2;
    }
    o2.prototype._parseHex = function(f2, a2, c2) {
      this.length = Math.ceil((f2.length - a2) / 6), this.words = new Array(this.length);
      for (var d3 = 0; d3 < this.length; d3++) this.words[d3] = 0;
      var g3 = 0, x = 0, M2;
      if (c2 === "be") for (d3 = f2.length - 1; d3 >= a2; d3 -= 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      else {
        var l2 = f2.length - a2;
        for (d3 = l2 % 2 === 0 ? a2 + 1 : a2; d3 < f2.length; d3 += 2) M2 = b3(f2, a2, d3) << g3, this.words[x] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g3 += 8;
      }
      this._strip();
    };
    function m2(A2, f2, a2, c2) {
      for (var d3 = 0, g3 = 0, x = Math.min(A2.length, a2), M2 = f2; M2 < x; M2++) {
        var l2 = A2.charCodeAt(M2) - 48;
        d3 *= c2, l2 >= 49 ? g3 = l2 - 49 + 10 : l2 >= 17 ? g3 = l2 - 17 + 10 : g3 = l2, i(l2 >= 0 && g3 < c2, "Invalid character"), d3 += g3;
      }
      return d3;
    }
    o2.prototype._parseBase = function(f2, a2, c2) {
      this.words = [0], this.length = 1;
      for (var d3 = 0, g3 = 1; g3 <= 67108863; g3 *= a2) d3++;
      d3--, g3 = g3 / a2 | 0;
      for (var x = f2.length - c2, M2 = x % d3, l2 = Math.min(x, x - M2) + c2, s = 0, v3 = c2; v3 < l2; v3 += d3) s = m2(f2, v3, v3 + d3, a2), this.imuln(g3), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M2 !== 0) {
        var k2 = 1;
        for (s = m2(f2, v3, f2.length, a2), v3 = 0; v3 < M2; v3++) k2 *= a2;
        this.imuln(k2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o2.prototype.copy = function(f2) {
      f2.words = new Array(this.length);
      for (var a2 = 0; a2 < this.length; a2++) f2.words[a2] = this.words[a2];
      f2.length = this.length, f2.negative = this.negative, f2.red = this.red;
    };
    function w3(A2, f2) {
      A2.words = f2.words, A2.length = f2.length, A2.negative = f2.negative, A2.red = f2.red;
    }
    if (o2.prototype._move = function(f2) {
      w3(f2, this);
    }, o2.prototype.clone = function() {
      var f2 = new o2(null);
      return this.copy(f2), f2;
    }, o2.prototype._expand = function(f2) {
      for (; this.length < f2; ) this.words[this.length++] = 0;
      return this;
    }, o2.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o2.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o2.prototype[Symbol.for("nodejs.util.inspect.custom")] = y3;
    } catch {
      o2.prototype.inspect = y3;
    }
    else o2.prototype.inspect = y3;
    function y3() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o2.prototype.toString = function(f2, a2) {
      f2 = f2 || 10, a2 = a2 | 0 || 1;
      var c2;
      if (f2 === 16 || f2 === "hex") {
        c2 = "";
        for (var d3 = 0, g3 = 0, x = 0; x < this.length; x++) {
          var M2 = this.words[x], l2 = ((M2 << d3 | g3) & 16777215).toString(16);
          g3 = M2 >>> 24 - d3 & 16777215, d3 += 2, d3 >= 26 && (d3 -= 26, x--), g3 !== 0 || x !== this.length - 1 ? c2 = S2[6 - l2.length] + l2 + c2 : c2 = l2 + c2;
        }
        for (g3 !== 0 && (c2 = g3.toString(16) + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f2 === (f2 | 0) && f2 >= 2 && f2 <= 36) {
        var s = I2[f2], v3 = N2[f2];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u3 = k2.modrn(v3).toString(f2);
          k2 = k2.idivn(v3), k2.isZero() ? c2 = u3 + c2 : c2 = S2[s - u3.length] + u3 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a2 !== 0; ) c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i(false, "Base should be between 2 and 36");
    }, o2.prototype.toNumber = function() {
      var f2 = this.words[0];
      return this.length === 2 ? f2 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f2 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f2 : f2;
    }, o2.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h2 && (o2.prototype.toBuffer = function(f2, a2) {
      return this.toArrayLike(h2, f2, a2);
    }), o2.prototype.toArray = function(f2, a2) {
      return this.toArrayLike(Array, f2, a2);
    };
    var C2 = function(f2, a2) {
      return f2.allocUnsafe ? f2.allocUnsafe(a2) : new f2(a2);
    };
    o2.prototype.toArrayLike = function(f2, a2, c2) {
      this._strip();
      var d3 = this.byteLength(), g3 = c2 || Math.max(1, d3);
      i(d3 <= g3, "byte array longer than desired length"), i(g3 > 0, "Requested array length <= 0");
      var x = C2(f2, g3), M2 = a2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M2](x, d3), x;
    }, o2.prototype._toArrayLikeLE = function(f2, a2) {
      for (var c2 = 0, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2++] = M2 & 255, c2 < f2.length && (f2[c2++] = M2 >> 8 & 255), c2 < f2.length && (f2[c2++] = M2 >> 16 & 255), x === 6 ? (c2 < f2.length && (f2[c2++] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 < f2.length) for (f2[c2++] = d3; c2 < f2.length; ) f2[c2++] = 0;
    }, o2.prototype._toArrayLikeBE = function(f2, a2) {
      for (var c2 = f2.length - 1, d3 = 0, g3 = 0, x = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x | d3;
        f2[c2--] = M2 & 255, c2 >= 0 && (f2[c2--] = M2 >> 8 & 255), c2 >= 0 && (f2[c2--] = M2 >> 16 & 255), x === 6 ? (c2 >= 0 && (f2[c2--] = M2 >> 24 & 255), d3 = 0, x = 0) : (d3 = M2 >>> 24, x += 2);
      }
      if (c2 >= 0) for (f2[c2--] = d3; c2 >= 0; ) f2[c2--] = 0;
    }, Math.clz32 ? o2.prototype._countBits = function(f2) {
      return 32 - Math.clz32(f2);
    } : o2.prototype._countBits = function(f2) {
      var a2 = f2, c2 = 0;
      return a2 >= 4096 && (c2 += 13, a2 >>>= 13), a2 >= 64 && (c2 += 7, a2 >>>= 7), a2 >= 8 && (c2 += 4, a2 >>>= 4), a2 >= 2 && (c2 += 2, a2 >>>= 2), c2 + a2;
    }, o2.prototype._zeroBits = function(f2) {
      if (f2 === 0) return 26;
      var a2 = f2, c2 = 0;
      return a2 & 8191 || (c2 += 13, a2 >>>= 13), a2 & 127 || (c2 += 7, a2 >>>= 7), a2 & 15 || (c2 += 4, a2 >>>= 4), a2 & 3 || (c2 += 2, a2 >>>= 2), a2 & 1 || c2++, c2;
    }, o2.prototype.bitLength = function() {
      var f2 = this.words[this.length - 1], a2 = this._countBits(f2);
      return (this.length - 1) * 26 + a2;
    };
    function F2(A2) {
      for (var f2 = new Array(A2.bitLength()), a2 = 0; a2 < f2.length; a2++) {
        var c2 = a2 / 26 | 0, d3 = a2 % 26;
        f2[a2] = A2.words[c2] >>> d3 & 1;
      }
      return f2;
    }
    o2.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f2 = 0, a2 = 0; a2 < this.length; a2++) {
        var c2 = this._zeroBits(this.words[a2]);
        if (f2 += c2, c2 !== 26) break;
      }
      return f2;
    }, o2.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o2.prototype.toTwos = function(f2) {
      return this.negative !== 0 ? this.abs().inotn(f2).iaddn(1) : this.clone();
    }, o2.prototype.fromTwos = function(f2) {
      return this.testn(f2 - 1) ? this.notn(f2).iaddn(1).ineg() : this.clone();
    }, o2.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o2.prototype.neg = function() {
      return this.clone().ineg();
    }, o2.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o2.prototype.iuor = function(f2) {
      for (; this.length < f2.length; ) this.words[this.length++] = 0;
      for (var a2 = 0; a2 < f2.length; a2++) this.words[a2] = this.words[a2] | f2.words[a2];
      return this._strip();
    }, o2.prototype.ior = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuor(f2);
    }, o2.prototype.or = function(f2) {
      return this.length > f2.length ? this.clone().ior(f2) : f2.clone().ior(this);
    }, o2.prototype.uor = function(f2) {
      return this.length > f2.length ? this.clone().iuor(f2) : f2.clone().iuor(this);
    }, o2.prototype.iuand = function(f2) {
      var a2;
      this.length > f2.length ? a2 = f2 : a2 = this;
      for (var c2 = 0; c2 < a2.length; c2++) this.words[c2] = this.words[c2] & f2.words[c2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.iand = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuand(f2);
    }, o2.prototype.and = function(f2) {
      return this.length > f2.length ? this.clone().iand(f2) : f2.clone().iand(this);
    }, o2.prototype.uand = function(f2) {
      return this.length > f2.length ? this.clone().iuand(f2) : f2.clone().iuand(this);
    }, o2.prototype.iuxor = function(f2) {
      var a2, c2;
      this.length > f2.length ? (a2 = this, c2 = f2) : (a2 = f2, c2 = this);
      for (var d3 = 0; d3 < c2.length; d3++) this.words[d3] = a2.words[d3] ^ c2.words[d3];
      if (this !== a2) for (; d3 < a2.length; d3++) this.words[d3] = a2.words[d3];
      return this.length = a2.length, this._strip();
    }, o2.prototype.ixor = function(f2) {
      return i((this.negative | f2.negative) === 0), this.iuxor(f2);
    }, o2.prototype.xor = function(f2) {
      return this.length > f2.length ? this.clone().ixor(f2) : f2.clone().ixor(this);
    }, o2.prototype.uxor = function(f2) {
      return this.length > f2.length ? this.clone().iuxor(f2) : f2.clone().iuxor(this);
    }, o2.prototype.inotn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = Math.ceil(f2 / 26) | 0, c2 = f2 % 26;
      this._expand(a2), c2 > 0 && a2--;
      for (var d3 = 0; d3 < a2; d3++) this.words[d3] = ~this.words[d3] & 67108863;
      return c2 > 0 && (this.words[d3] = ~this.words[d3] & 67108863 >> 26 - c2), this._strip();
    }, o2.prototype.notn = function(f2) {
      return this.clone().inotn(f2);
    }, o2.prototype.setn = function(f2, a2) {
      i(typeof f2 == "number" && f2 >= 0);
      var c2 = f2 / 26 | 0, d3 = f2 % 26;
      return this._expand(c2 + 1), a2 ? this.words[c2] = this.words[c2] | 1 << d3 : this.words[c2] = this.words[c2] & ~(1 << d3), this._strip();
    }, o2.prototype.iadd = function(f2) {
      var a2;
      if (this.negative !== 0 && f2.negative === 0) return this.negative = 0, a2 = this.isub(f2), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f2.negative !== 0) return f2.negative = 0, a2 = this.isub(f2), f2.negative = 1, a2._normSign();
      var c2, d3;
      this.length > f2.length ? (c2 = this, d3 = f2) : (c2 = f2, d3 = this);
      for (var g3 = 0, x = 0; x < d3.length; x++) a2 = (c2.words[x] | 0) + (d3.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      for (; g3 !== 0 && x < c2.length; x++) a2 = (c2.words[x] | 0) + g3, this.words[x] = a2 & 67108863, g3 = a2 >>> 26;
      if (this.length = c2.length, g3 !== 0) this.words[this.length] = g3, this.length++;
      else if (c2 !== this) for (; x < c2.length; x++) this.words[x] = c2.words[x];
      return this;
    }, o2.prototype.add = function(f2) {
      var a2;
      return f2.negative !== 0 && this.negative === 0 ? (f2.negative = 0, a2 = this.sub(f2), f2.negative ^= 1, a2) : f2.negative === 0 && this.negative !== 0 ? (this.negative = 0, a2 = f2.sub(this), this.negative = 1, a2) : this.length > f2.length ? this.clone().iadd(f2) : f2.clone().iadd(this);
    }, o2.prototype.isub = function(f2) {
      if (f2.negative !== 0) {
        f2.negative = 0;
        var a2 = this.iadd(f2);
        return f2.negative = 1, a2._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f2), this.negative = 1, this._normSign();
      var c2 = this.cmp(f2);
      if (c2 === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d3, g3;
      c2 > 0 ? (d3 = this, g3 = f2) : (d3 = f2, g3 = this);
      for (var x = 0, M2 = 0; M2 < g3.length; M2++) a2 = (d3.words[M2] | 0) - (g3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      for (; x !== 0 && M2 < d3.length; M2++) a2 = (d3.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      if (x === 0 && M2 < d3.length && d3 !== this) for (; M2 < d3.length; M2++) this.words[M2] = d3.words[M2];
      return this.length = Math.max(this.length, M2), d3 !== this && (this.negative = 1), this._strip();
    }, o2.prototype.sub = function(f2) {
      return this.clone().isub(f2);
    };
    function U2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative;
      var c2 = A2.length + f2.length | 0;
      a2.length = c2, c2 = c2 - 1 | 0;
      var d3 = A2.words[0] | 0, g3 = f2.words[0] | 0, x = d3 * g3, M2 = x & 67108863, l2 = x / 67108864 | 0;
      a2.words[0] = M2;
      for (var s = 1; s < c2; s++) {
        for (var v3 = l2 >>> 26, k2 = l2 & 67108863, u3 = Math.min(s, f2.length - 1), E3 = Math.max(0, s - A2.length + 1); E3 <= u3; E3++) {
          var _2 = s - E3 | 0;
          d3 = A2.words[_2] | 0, g3 = f2.words[E3] | 0, x = d3 * g3 + k2, v3 += x / 67108864 | 0, k2 = x & 67108863;
        }
        a2.words[s] = k2 | 0, l2 = v3 | 0;
      }
      return l2 !== 0 ? a2.words[s] = l2 | 0 : a2.length--, a2._strip();
    }
    var J2 = function(f2, a2, c2) {
      var d3 = f2.words, g3 = a2.words, x = c2.words, M2 = 0, l2, s, v3, k2 = d3[0] | 0, u3 = k2 & 8191, E3 = k2 >>> 13, _2 = d3[1] | 0, B = _2 & 8191, R = _2 >>> 13, T2 = d3[2] | 0, P2 = T2 & 8191, O2 = T2 >>> 13, Ct2 = d3[3] | 0, D2 = Ct2 & 8191, q2 = Ct2 >>> 13, De2 = d3[4] | 0, X2 = De2 & 8191, Z2 = De2 >>> 13, Fe2 = d3[5] | 0, $2 = Fe2 & 8191, tt2 = Fe2 >>> 13, Te = d3[6] | 0, et2 = Te & 8191, rt2 = Te >>> 13, Ue2 = d3[7] | 0, it2 = Ue2 & 8191, nt2 = Ue2 >>> 13, ke2 = d3[8] | 0, ft2 = ke2 & 8191, ot2 = ke2 >>> 13, qe2 = d3[9] | 0, st2 = qe2 & 8191, at2 = qe2 >>> 13, Ke2 = g3[0] | 0, ut2 = Ke2 & 8191, ht2 = Ke2 >>> 13, He2 = g3[1] | 0, ct2 = He2 & 8191, lt2 = He2 >>> 13, ze2 = g3[2] | 0, dt2 = ze2 & 8191, pt2 = ze2 >>> 13, Le = g3[3] | 0, vt2 = Le & 8191, mt2 = Le >>> 13, je2 = g3[4] | 0, gt2 = je2 & 8191, At2 = je2 >>> 13, Qe2 = g3[5] | 0, bt2 = Qe2 & 8191, yt2 = Qe2 >>> 13, Je2 = g3[6] | 0, wt2 = Je2 & 8191, xt2 = Je2 >>> 13, Ge2 = g3[7] | 0, Mt2 = Ge2 & 8191, Et2 = Ge2 >>> 13, Ye2 = g3[8] | 0, St2 = Ye2 & 8191, Nt2 = Ye2 >>> 13, Ve2 = g3[9] | 0, It2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c2.negative = f2.negative ^ a2.negative, c2.length = 19, l2 = Math.imul(u3, ut2), s = Math.imul(u3, ht2), s = s + Math.imul(E3, ut2) | 0, v3 = Math.imul(E3, ht2);
      var Me2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Me2 >>> 26) | 0, Me2 &= 67108863, l2 = Math.imul(B, ut2), s = Math.imul(B, ht2), s = s + Math.imul(R, ut2) | 0, v3 = Math.imul(R, ht2), l2 = l2 + Math.imul(u3, ct2) | 0, s = s + Math.imul(u3, lt2) | 0, s = s + Math.imul(E3, ct2) | 0, v3 = v3 + Math.imul(E3, lt2) | 0;
      var Ee2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l2 = Math.imul(P2, ut2), s = Math.imul(P2, ht2), s = s + Math.imul(O2, ut2) | 0, v3 = Math.imul(O2, ht2), l2 = l2 + Math.imul(B, ct2) | 0, s = s + Math.imul(B, lt2) | 0, s = s + Math.imul(R, ct2) | 0, v3 = v3 + Math.imul(R, lt2) | 0, l2 = l2 + Math.imul(u3, dt2) | 0, s = s + Math.imul(u3, pt2) | 0, s = s + Math.imul(E3, dt2) | 0, v3 = v3 + Math.imul(E3, pt2) | 0;
      var Se2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Se2 >>> 26) | 0, Se2 &= 67108863, l2 = Math.imul(D2, ut2), s = Math.imul(D2, ht2), s = s + Math.imul(q2, ut2) | 0, v3 = Math.imul(q2, ht2), l2 = l2 + Math.imul(P2, ct2) | 0, s = s + Math.imul(P2, lt2) | 0, s = s + Math.imul(O2, ct2) | 0, v3 = v3 + Math.imul(O2, lt2) | 0, l2 = l2 + Math.imul(B, dt2) | 0, s = s + Math.imul(B, pt2) | 0, s = s + Math.imul(R, dt2) | 0, v3 = v3 + Math.imul(R, pt2) | 0, l2 = l2 + Math.imul(u3, vt2) | 0, s = s + Math.imul(u3, mt2) | 0, s = s + Math.imul(E3, vt2) | 0, v3 = v3 + Math.imul(E3, mt2) | 0;
      var Ne = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l2 = Math.imul(X2, ut2), s = Math.imul(X2, ht2), s = s + Math.imul(Z2, ut2) | 0, v3 = Math.imul(Z2, ht2), l2 = l2 + Math.imul(D2, ct2) | 0, s = s + Math.imul(D2, lt2) | 0, s = s + Math.imul(q2, ct2) | 0, v3 = v3 + Math.imul(q2, lt2) | 0, l2 = l2 + Math.imul(P2, dt2) | 0, s = s + Math.imul(P2, pt2) | 0, s = s + Math.imul(O2, dt2) | 0, v3 = v3 + Math.imul(O2, pt2) | 0, l2 = l2 + Math.imul(B, vt2) | 0, s = s + Math.imul(B, mt2) | 0, s = s + Math.imul(R, vt2) | 0, v3 = v3 + Math.imul(R, mt2) | 0, l2 = l2 + Math.imul(u3, gt2) | 0, s = s + Math.imul(u3, At2) | 0, s = s + Math.imul(E3, gt2) | 0, v3 = v3 + Math.imul(E3, At2) | 0;
      var Ie = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l2 = Math.imul($2, ut2), s = Math.imul($2, ht2), s = s + Math.imul(tt2, ut2) | 0, v3 = Math.imul(tt2, ht2), l2 = l2 + Math.imul(X2, ct2) | 0, s = s + Math.imul(X2, lt2) | 0, s = s + Math.imul(Z2, ct2) | 0, v3 = v3 + Math.imul(Z2, lt2) | 0, l2 = l2 + Math.imul(D2, dt2) | 0, s = s + Math.imul(D2, pt2) | 0, s = s + Math.imul(q2, dt2) | 0, v3 = v3 + Math.imul(q2, pt2) | 0, l2 = l2 + Math.imul(P2, vt2) | 0, s = s + Math.imul(P2, mt2) | 0, s = s + Math.imul(O2, vt2) | 0, v3 = v3 + Math.imul(O2, mt2) | 0, l2 = l2 + Math.imul(B, gt2) | 0, s = s + Math.imul(B, At2) | 0, s = s + Math.imul(R, gt2) | 0, v3 = v3 + Math.imul(R, At2) | 0, l2 = l2 + Math.imul(u3, bt2) | 0, s = s + Math.imul(u3, yt2) | 0, s = s + Math.imul(E3, bt2) | 0, v3 = v3 + Math.imul(E3, yt2) | 0;
      var Wr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l2 = Math.imul(et2, ut2), s = Math.imul(et2, ht2), s = s + Math.imul(rt2, ut2) | 0, v3 = Math.imul(rt2, ht2), l2 = l2 + Math.imul($2, ct2) | 0, s = s + Math.imul($2, lt2) | 0, s = s + Math.imul(tt2, ct2) | 0, v3 = v3 + Math.imul(tt2, lt2) | 0, l2 = l2 + Math.imul(X2, dt2) | 0, s = s + Math.imul(X2, pt2) | 0, s = s + Math.imul(Z2, dt2) | 0, v3 = v3 + Math.imul(Z2, pt2) | 0, l2 = l2 + Math.imul(D2, vt2) | 0, s = s + Math.imul(D2, mt2) | 0, s = s + Math.imul(q2, vt2) | 0, v3 = v3 + Math.imul(q2, mt2) | 0, l2 = l2 + Math.imul(P2, gt2) | 0, s = s + Math.imul(P2, At2) | 0, s = s + Math.imul(O2, gt2) | 0, v3 = v3 + Math.imul(O2, At2) | 0, l2 = l2 + Math.imul(B, bt2) | 0, s = s + Math.imul(B, yt2) | 0, s = s + Math.imul(R, bt2) | 0, v3 = v3 + Math.imul(R, yt2) | 0, l2 = l2 + Math.imul(u3, wt2) | 0, s = s + Math.imul(u3, xt2) | 0, s = s + Math.imul(E3, wt2) | 0, v3 = v3 + Math.imul(E3, xt2) | 0;
      var Xr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l2 = Math.imul(it2, ut2), s = Math.imul(it2, ht2), s = s + Math.imul(nt2, ut2) | 0, v3 = Math.imul(nt2, ht2), l2 = l2 + Math.imul(et2, ct2) | 0, s = s + Math.imul(et2, lt2) | 0, s = s + Math.imul(rt2, ct2) | 0, v3 = v3 + Math.imul(rt2, lt2) | 0, l2 = l2 + Math.imul($2, dt2) | 0, s = s + Math.imul($2, pt2) | 0, s = s + Math.imul(tt2, dt2) | 0, v3 = v3 + Math.imul(tt2, pt2) | 0, l2 = l2 + Math.imul(X2, vt2) | 0, s = s + Math.imul(X2, mt2) | 0, s = s + Math.imul(Z2, vt2) | 0, v3 = v3 + Math.imul(Z2, mt2) | 0, l2 = l2 + Math.imul(D2, gt2) | 0, s = s + Math.imul(D2, At2) | 0, s = s + Math.imul(q2, gt2) | 0, v3 = v3 + Math.imul(q2, At2) | 0, l2 = l2 + Math.imul(P2, bt2) | 0, s = s + Math.imul(P2, yt2) | 0, s = s + Math.imul(O2, bt2) | 0, v3 = v3 + Math.imul(O2, yt2) | 0, l2 = l2 + Math.imul(B, wt2) | 0, s = s + Math.imul(B, xt2) | 0, s = s + Math.imul(R, wt2) | 0, v3 = v3 + Math.imul(R, xt2) | 0, l2 = l2 + Math.imul(u3, Mt2) | 0, s = s + Math.imul(u3, Et2) | 0, s = s + Math.imul(E3, Mt2) | 0, v3 = v3 + Math.imul(E3, Et2) | 0;
      var Zr = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l2 = Math.imul(ft2, ut2), s = Math.imul(ft2, ht2), s = s + Math.imul(ot2, ut2) | 0, v3 = Math.imul(ot2, ht2), l2 = l2 + Math.imul(it2, ct2) | 0, s = s + Math.imul(it2, lt2) | 0, s = s + Math.imul(nt2, ct2) | 0, v3 = v3 + Math.imul(nt2, lt2) | 0, l2 = l2 + Math.imul(et2, dt2) | 0, s = s + Math.imul(et2, pt2) | 0, s = s + Math.imul(rt2, dt2) | 0, v3 = v3 + Math.imul(rt2, pt2) | 0, l2 = l2 + Math.imul($2, vt2) | 0, s = s + Math.imul($2, mt2) | 0, s = s + Math.imul(tt2, vt2) | 0, v3 = v3 + Math.imul(tt2, mt2) | 0, l2 = l2 + Math.imul(X2, gt2) | 0, s = s + Math.imul(X2, At2) | 0, s = s + Math.imul(Z2, gt2) | 0, v3 = v3 + Math.imul(Z2, At2) | 0, l2 = l2 + Math.imul(D2, bt2) | 0, s = s + Math.imul(D2, yt2) | 0, s = s + Math.imul(q2, bt2) | 0, v3 = v3 + Math.imul(q2, yt2) | 0, l2 = l2 + Math.imul(P2, wt2) | 0, s = s + Math.imul(P2, xt2) | 0, s = s + Math.imul(O2, wt2) | 0, v3 = v3 + Math.imul(O2, xt2) | 0, l2 = l2 + Math.imul(B, Mt2) | 0, s = s + Math.imul(B, Et2) | 0, s = s + Math.imul(R, Mt2) | 0, v3 = v3 + Math.imul(R, Et2) | 0, l2 = l2 + Math.imul(u3, St2) | 0, s = s + Math.imul(u3, Nt2) | 0, s = s + Math.imul(E3, St2) | 0, v3 = v3 + Math.imul(E3, Nt2) | 0;
      var $r2 = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l2 = Math.imul(st2, ut2), s = Math.imul(st2, ht2), s = s + Math.imul(at2, ut2) | 0, v3 = Math.imul(at2, ht2), l2 = l2 + Math.imul(ft2, ct2) | 0, s = s + Math.imul(ft2, lt2) | 0, s = s + Math.imul(ot2, ct2) | 0, v3 = v3 + Math.imul(ot2, lt2) | 0, l2 = l2 + Math.imul(it2, dt2) | 0, s = s + Math.imul(it2, pt2) | 0, s = s + Math.imul(nt2, dt2) | 0, v3 = v3 + Math.imul(nt2, pt2) | 0, l2 = l2 + Math.imul(et2, vt2) | 0, s = s + Math.imul(et2, mt2) | 0, s = s + Math.imul(rt2, vt2) | 0, v3 = v3 + Math.imul(rt2, mt2) | 0, l2 = l2 + Math.imul($2, gt2) | 0, s = s + Math.imul($2, At2) | 0, s = s + Math.imul(tt2, gt2) | 0, v3 = v3 + Math.imul(tt2, At2) | 0, l2 = l2 + Math.imul(X2, bt2) | 0, s = s + Math.imul(X2, yt2) | 0, s = s + Math.imul(Z2, bt2) | 0, v3 = v3 + Math.imul(Z2, yt2) | 0, l2 = l2 + Math.imul(D2, wt2) | 0, s = s + Math.imul(D2, xt2) | 0, s = s + Math.imul(q2, wt2) | 0, v3 = v3 + Math.imul(q2, xt2) | 0, l2 = l2 + Math.imul(P2, Mt2) | 0, s = s + Math.imul(P2, Et2) | 0, s = s + Math.imul(O2, Mt2) | 0, v3 = v3 + Math.imul(O2, Et2) | 0, l2 = l2 + Math.imul(B, St2) | 0, s = s + Math.imul(B, Nt2) | 0, s = s + Math.imul(R, St2) | 0, v3 = v3 + Math.imul(R, Nt2) | 0, l2 = l2 + Math.imul(u3, It2) | 0, s = s + Math.imul(u3, _t2) | 0, s = s + Math.imul(E3, It2) | 0, v3 = v3 + Math.imul(E3, _t2) | 0;
      var ti = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l2 = Math.imul(st2, ct2), s = Math.imul(st2, lt2), s = s + Math.imul(at2, ct2) | 0, v3 = Math.imul(at2, lt2), l2 = l2 + Math.imul(ft2, dt2) | 0, s = s + Math.imul(ft2, pt2) | 0, s = s + Math.imul(ot2, dt2) | 0, v3 = v3 + Math.imul(ot2, pt2) | 0, l2 = l2 + Math.imul(it2, vt2) | 0, s = s + Math.imul(it2, mt2) | 0, s = s + Math.imul(nt2, vt2) | 0, v3 = v3 + Math.imul(nt2, mt2) | 0, l2 = l2 + Math.imul(et2, gt2) | 0, s = s + Math.imul(et2, At2) | 0, s = s + Math.imul(rt2, gt2) | 0, v3 = v3 + Math.imul(rt2, At2) | 0, l2 = l2 + Math.imul($2, bt2) | 0, s = s + Math.imul($2, yt2) | 0, s = s + Math.imul(tt2, bt2) | 0, v3 = v3 + Math.imul(tt2, yt2) | 0, l2 = l2 + Math.imul(X2, wt2) | 0, s = s + Math.imul(X2, xt2) | 0, s = s + Math.imul(Z2, wt2) | 0, v3 = v3 + Math.imul(Z2, xt2) | 0, l2 = l2 + Math.imul(D2, Mt2) | 0, s = s + Math.imul(D2, Et2) | 0, s = s + Math.imul(q2, Mt2) | 0, v3 = v3 + Math.imul(q2, Et2) | 0, l2 = l2 + Math.imul(P2, St2) | 0, s = s + Math.imul(P2, Nt2) | 0, s = s + Math.imul(O2, St2) | 0, v3 = v3 + Math.imul(O2, Nt2) | 0, l2 = l2 + Math.imul(B, It2) | 0, s = s + Math.imul(B, _t2) | 0, s = s + Math.imul(R, It2) | 0, v3 = v3 + Math.imul(R, _t2) | 0;
      var ei = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l2 = Math.imul(st2, dt2), s = Math.imul(st2, pt2), s = s + Math.imul(at2, dt2) | 0, v3 = Math.imul(at2, pt2), l2 = l2 + Math.imul(ft2, vt2) | 0, s = s + Math.imul(ft2, mt2) | 0, s = s + Math.imul(ot2, vt2) | 0, v3 = v3 + Math.imul(ot2, mt2) | 0, l2 = l2 + Math.imul(it2, gt2) | 0, s = s + Math.imul(it2, At2) | 0, s = s + Math.imul(nt2, gt2) | 0, v3 = v3 + Math.imul(nt2, At2) | 0, l2 = l2 + Math.imul(et2, bt2) | 0, s = s + Math.imul(et2, yt2) | 0, s = s + Math.imul(rt2, bt2) | 0, v3 = v3 + Math.imul(rt2, yt2) | 0, l2 = l2 + Math.imul($2, wt2) | 0, s = s + Math.imul($2, xt2) | 0, s = s + Math.imul(tt2, wt2) | 0, v3 = v3 + Math.imul(tt2, xt2) | 0, l2 = l2 + Math.imul(X2, Mt2) | 0, s = s + Math.imul(X2, Et2) | 0, s = s + Math.imul(Z2, Mt2) | 0, v3 = v3 + Math.imul(Z2, Et2) | 0, l2 = l2 + Math.imul(D2, St2) | 0, s = s + Math.imul(D2, Nt2) | 0, s = s + Math.imul(q2, St2) | 0, v3 = v3 + Math.imul(q2, Nt2) | 0, l2 = l2 + Math.imul(P2, It2) | 0, s = s + Math.imul(P2, _t2) | 0, s = s + Math.imul(O2, It2) | 0, v3 = v3 + Math.imul(O2, _t2) | 0;
      var ri = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l2 = Math.imul(st2, vt2), s = Math.imul(st2, mt2), s = s + Math.imul(at2, vt2) | 0, v3 = Math.imul(at2, mt2), l2 = l2 + Math.imul(ft2, gt2) | 0, s = s + Math.imul(ft2, At2) | 0, s = s + Math.imul(ot2, gt2) | 0, v3 = v3 + Math.imul(ot2, At2) | 0, l2 = l2 + Math.imul(it2, bt2) | 0, s = s + Math.imul(it2, yt2) | 0, s = s + Math.imul(nt2, bt2) | 0, v3 = v3 + Math.imul(nt2, yt2) | 0, l2 = l2 + Math.imul(et2, wt2) | 0, s = s + Math.imul(et2, xt2) | 0, s = s + Math.imul(rt2, wt2) | 0, v3 = v3 + Math.imul(rt2, xt2) | 0, l2 = l2 + Math.imul($2, Mt2) | 0, s = s + Math.imul($2, Et2) | 0, s = s + Math.imul(tt2, Mt2) | 0, v3 = v3 + Math.imul(tt2, Et2) | 0, l2 = l2 + Math.imul(X2, St2) | 0, s = s + Math.imul(X2, Nt2) | 0, s = s + Math.imul(Z2, St2) | 0, v3 = v3 + Math.imul(Z2, Nt2) | 0, l2 = l2 + Math.imul(D2, It2) | 0, s = s + Math.imul(D2, _t2) | 0, s = s + Math.imul(q2, It2) | 0, v3 = v3 + Math.imul(q2, _t2) | 0;
      var ii = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l2 = Math.imul(st2, gt2), s = Math.imul(st2, At2), s = s + Math.imul(at2, gt2) | 0, v3 = Math.imul(at2, At2), l2 = l2 + Math.imul(ft2, bt2) | 0, s = s + Math.imul(ft2, yt2) | 0, s = s + Math.imul(ot2, bt2) | 0, v3 = v3 + Math.imul(ot2, yt2) | 0, l2 = l2 + Math.imul(it2, wt2) | 0, s = s + Math.imul(it2, xt2) | 0, s = s + Math.imul(nt2, wt2) | 0, v3 = v3 + Math.imul(nt2, xt2) | 0, l2 = l2 + Math.imul(et2, Mt2) | 0, s = s + Math.imul(et2, Et2) | 0, s = s + Math.imul(rt2, Mt2) | 0, v3 = v3 + Math.imul(rt2, Et2) | 0, l2 = l2 + Math.imul($2, St2) | 0, s = s + Math.imul($2, Nt2) | 0, s = s + Math.imul(tt2, St2) | 0, v3 = v3 + Math.imul(tt2, Nt2) | 0, l2 = l2 + Math.imul(X2, It2) | 0, s = s + Math.imul(X2, _t2) | 0, s = s + Math.imul(Z2, It2) | 0, v3 = v3 + Math.imul(Z2, _t2) | 0;
      var ni = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l2 = Math.imul(st2, bt2), s = Math.imul(st2, yt2), s = s + Math.imul(at2, bt2) | 0, v3 = Math.imul(at2, yt2), l2 = l2 + Math.imul(ft2, wt2) | 0, s = s + Math.imul(ft2, xt2) | 0, s = s + Math.imul(ot2, wt2) | 0, v3 = v3 + Math.imul(ot2, xt2) | 0, l2 = l2 + Math.imul(it2, Mt2) | 0, s = s + Math.imul(it2, Et2) | 0, s = s + Math.imul(nt2, Mt2) | 0, v3 = v3 + Math.imul(nt2, Et2) | 0, l2 = l2 + Math.imul(et2, St2) | 0, s = s + Math.imul(et2, Nt2) | 0, s = s + Math.imul(rt2, St2) | 0, v3 = v3 + Math.imul(rt2, Nt2) | 0, l2 = l2 + Math.imul($2, It2) | 0, s = s + Math.imul($2, _t2) | 0, s = s + Math.imul(tt2, It2) | 0, v3 = v3 + Math.imul(tt2, _t2) | 0;
      var fi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l2 = Math.imul(st2, wt2), s = Math.imul(st2, xt2), s = s + Math.imul(at2, wt2) | 0, v3 = Math.imul(at2, xt2), l2 = l2 + Math.imul(ft2, Mt2) | 0, s = s + Math.imul(ft2, Et2) | 0, s = s + Math.imul(ot2, Mt2) | 0, v3 = v3 + Math.imul(ot2, Et2) | 0, l2 = l2 + Math.imul(it2, St2) | 0, s = s + Math.imul(it2, Nt2) | 0, s = s + Math.imul(nt2, St2) | 0, v3 = v3 + Math.imul(nt2, Nt2) | 0, l2 = l2 + Math.imul(et2, It2) | 0, s = s + Math.imul(et2, _t2) | 0, s = s + Math.imul(rt2, It2) | 0, v3 = v3 + Math.imul(rt2, _t2) | 0;
      var oi = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l2 = Math.imul(st2, Mt2), s = Math.imul(st2, Et2), s = s + Math.imul(at2, Mt2) | 0, v3 = Math.imul(at2, Et2), l2 = l2 + Math.imul(ft2, St2) | 0, s = s + Math.imul(ft2, Nt2) | 0, s = s + Math.imul(ot2, St2) | 0, v3 = v3 + Math.imul(ot2, Nt2) | 0, l2 = l2 + Math.imul(it2, It2) | 0, s = s + Math.imul(it2, _t2) | 0, s = s + Math.imul(nt2, It2) | 0, v3 = v3 + Math.imul(nt2, _t2) | 0;
      var si = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l2 = Math.imul(st2, St2), s = Math.imul(st2, Nt2), s = s + Math.imul(at2, St2) | 0, v3 = Math.imul(at2, Nt2), l2 = l2 + Math.imul(ft2, It2) | 0, s = s + Math.imul(ft2, _t2) | 0, s = s + Math.imul(ot2, It2) | 0, v3 = v3 + Math.imul(ot2, _t2) | 0;
      var ai = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      M2 = (v3 + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l2 = Math.imul(st2, It2), s = Math.imul(st2, _t2), s = s + Math.imul(at2, It2) | 0, v3 = Math.imul(at2, _t2);
      var ui = (M2 + l2 | 0) + ((s & 8191) << 13) | 0;
      return M2 = (v3 + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me2, x[1] = Ee2, x[2] = Se2, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r2, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M2 !== 0 && (x[19] = M2, c2.length++), c2;
    };
    Math.imul || (J2 = U2);
    function Bt2(A2, f2, a2) {
      a2.negative = f2.negative ^ A2.negative, a2.length = A2.length + f2.length;
      for (var c2 = 0, d3 = 0, g3 = 0; g3 < a2.length - 1; g3++) {
        var x = d3;
        d3 = 0;
        for (var M2 = c2 & 67108863, l2 = Math.min(g3, f2.length - 1), s = Math.max(0, g3 - A2.length + 1); s <= l2; s++) {
          var v3 = g3 - s, k2 = A2.words[v3] | 0, u3 = f2.words[s] | 0, E3 = k2 * u3, _2 = E3 & 67108863;
          x = x + (E3 / 67108864 | 0) | 0, _2 = _2 + M2 | 0, M2 = _2 & 67108863, x = x + (_2 >>> 26) | 0, d3 += x >>> 26, x &= 67108863;
        }
        a2.words[g3] = M2, c2 = x, x = d3;
      }
      return c2 !== 0 ? a2.words[g3] = c2 : a2.length--, a2._strip();
    }
    function G(A2, f2, a2) {
      return Bt2(A2, f2, a2);
    }
    o2.prototype.mulTo = function(f2, a2) {
      var c2, d3 = this.length + f2.length;
      return this.length === 10 && f2.length === 10 ? c2 = J2(this, f2, a2) : d3 < 63 ? c2 = U2(this, f2, a2) : d3 < 1024 ? c2 = Bt2(this, f2, a2) : c2 = G(this, f2, a2), c2;
    }, o2.prototype.mul = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), this.mulTo(f2, a2);
    }, o2.prototype.mulf = function(f2) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f2.length), G(this, f2, a2);
    }, o2.prototype.imul = function(f2) {
      return this.clone().mulTo(f2, this);
    }, o2.prototype.imuln = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(typeof f2 == "number"), i(f2 < 67108864);
      for (var c2 = 0, d3 = 0; d3 < this.length; d3++) {
        var g3 = (this.words[d3] | 0) * f2, x = (g3 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += g3 / 67108864 | 0, c2 += x >>> 26, this.words[d3] = x & 67108863;
      }
      return c2 !== 0 && (this.words[d3] = c2, this.length++), a2 ? this.ineg() : this;
    }, o2.prototype.muln = function(f2) {
      return this.clone().imuln(f2);
    }, o2.prototype.sqr = function() {
      return this.mul(this);
    }, o2.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o2.prototype.pow = function(f2) {
      var a2 = F2(f2);
      if (a2.length === 0) return new o2(1);
      for (var c2 = this, d3 = 0; d3 < a2.length && a2[d3] === 0; d3++, c2 = c2.sqr()) ;
      if (++d3 < a2.length) for (var g3 = c2.sqr(); d3 < a2.length; d3++, g3 = g3.sqr()) a2[d3] !== 0 && (c2 = c2.mul(g3));
      return c2;
    }, o2.prototype.iushln = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 67108863 >>> 26 - a2 << 26 - a2, g3;
      if (a2 !== 0) {
        var x = 0;
        for (g3 = 0; g3 < this.length; g3++) {
          var M2 = this.words[g3] & d3, l2 = (this.words[g3] | 0) - M2 << a2;
          this.words[g3] = l2 | x, x = M2 >>> 26 - a2;
        }
        x && (this.words[g3] = x, this.length++);
      }
      if (c2 !== 0) {
        for (g3 = this.length - 1; g3 >= 0; g3--) this.words[g3 + c2] = this.words[g3];
        for (g3 = 0; g3 < c2; g3++) this.words[g3] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o2.prototype.ishln = function(f2) {
      return i(this.negative === 0), this.iushln(f2);
    }, o2.prototype.iushrn = function(f2, a2, c2) {
      i(typeof f2 == "number" && f2 >= 0);
      var d3;
      a2 ? d3 = (a2 - a2 % 26) / 26 : d3 = 0;
      var g3 = f2 % 26, x = Math.min((f2 - g3) / 26, this.length), M2 = 67108863 ^ 67108863 >>> g3 << g3, l2 = c2;
      if (d3 -= x, d3 = Math.max(0, d3), l2) {
        for (var s = 0; s < x; s++) l2.words[s] = this.words[s];
        l2.length = x;
      }
      if (x !== 0) if (this.length > x) for (this.length -= x, s = 0; s < this.length; s++) this.words[s] = this.words[s + x];
      else this.words[0] = 0, this.length = 1;
      var v3 = 0;
      for (s = this.length - 1; s >= 0 && (v3 !== 0 || s >= d3); s--) {
        var k2 = this.words[s] | 0;
        this.words[s] = v3 << 26 - g3 | k2 >>> g3, v3 = k2 & M2;
      }
      return l2 && v3 !== 0 && (l2.words[l2.length++] = v3), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o2.prototype.ishrn = function(f2, a2, c2) {
      return i(this.negative === 0), this.iushrn(f2, a2, c2);
    }, o2.prototype.shln = function(f2) {
      return this.clone().ishln(f2);
    }, o2.prototype.ushln = function(f2) {
      return this.clone().iushln(f2);
    }, o2.prototype.shrn = function(f2) {
      return this.clone().ishrn(f2);
    }, o2.prototype.ushrn = function(f2) {
      return this.clone().iushrn(f2);
    }, o2.prototype.testn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return false;
      var g3 = this.words[c2];
      return !!(g3 & d3);
    }, o2.prototype.imaskn = function(f2) {
      i(typeof f2 == "number" && f2 >= 0);
      var a2 = f2 % 26, c2 = (f2 - a2) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2) return this;
      if (a2 !== 0 && c2++, this.length = Math.min(c2, this.length), a2 !== 0) {
        var d3 = 67108863 ^ 67108863 >>> a2 << a2;
        this.words[this.length - 1] &= d3;
      }
      return this._strip();
    }, o2.prototype.maskn = function(f2) {
      return this.clone().imaskn(f2);
    }, o2.prototype.iaddn = function(f2) {
      return i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0 ? this.isubn(-f2) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f2 ? (this.words[0] = f2 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f2), this.negative = 1, this) : this._iaddn(f2);
    }, o2.prototype._iaddn = function(f2) {
      this.words[0] += f2;
      for (var a2 = 0; a2 < this.length && this.words[a2] >= 67108864; a2++) this.words[a2] -= 67108864, a2 === this.length - 1 ? this.words[a2 + 1] = 1 : this.words[a2 + 1]++;
      return this.length = Math.max(this.length, a2 + 1), this;
    }, o2.prototype.isubn = function(f2) {
      if (i(typeof f2 == "number"), i(f2 < 67108864), f2 < 0) return this.iaddn(-f2);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f2), this.negative = 1, this;
      if (this.words[0] -= f2, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a2 = 0; a2 < this.length && this.words[a2] < 0; a2++) this.words[a2] += 67108864, this.words[a2 + 1] -= 1;
      return this._strip();
    }, o2.prototype.addn = function(f2) {
      return this.clone().iaddn(f2);
    }, o2.prototype.subn = function(f2) {
      return this.clone().isubn(f2);
    }, o2.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o2.prototype.abs = function() {
      return this.clone().iabs();
    }, o2.prototype._ishlnsubmul = function(f2, a2, c2) {
      var d3 = f2.length + c2, g3;
      this._expand(d3);
      var x, M2 = 0;
      for (g3 = 0; g3 < f2.length; g3++) {
        x = (this.words[g3 + c2] | 0) + M2;
        var l2 = (f2.words[g3] | 0) * a2;
        x -= l2 & 67108863, M2 = (x >> 26) - (l2 / 67108864 | 0), this.words[g3 + c2] = x & 67108863;
      }
      for (; g3 < this.length - c2; g3++) x = (this.words[g3 + c2] | 0) + M2, M2 = x >> 26, this.words[g3 + c2] = x & 67108863;
      if (M2 === 0) return this._strip();
      for (i(M2 === -1), M2 = 0, g3 = 0; g3 < this.length; g3++) x = -(this.words[g3] | 0) + M2, M2 = x >> 26, this.words[g3] = x & 67108863;
      return this.negative = 1, this._strip();
    }, o2.prototype._wordDiv = function(f2, a2) {
      var c2 = this.length - f2.length, d3 = this.clone(), g3 = f2, x = g3.words[g3.length - 1] | 0, M2 = this._countBits(x);
      c2 = 26 - M2, c2 !== 0 && (g3 = g3.ushln(c2), d3.iushln(c2), x = g3.words[g3.length - 1] | 0);
      var l2 = d3.length - g3.length, s;
      if (a2 !== "mod") {
        s = new o2(null), s.length = l2 + 1, s.words = new Array(s.length);
        for (var v3 = 0; v3 < s.length; v3++) s.words[v3] = 0;
      }
      var k2 = d3.clone()._ishlnsubmul(g3, 1, l2);
      k2.negative === 0 && (d3 = k2, s && (s.words[l2] = 1));
      for (var u3 = l2 - 1; u3 >= 0; u3--) {
        var E3 = (d3.words[g3.length + u3] | 0) * 67108864 + (d3.words[g3.length + u3 - 1] | 0);
        for (E3 = Math.min(E3 / x | 0, 67108863), d3._ishlnsubmul(g3, E3, u3); d3.negative !== 0; ) E3--, d3.negative = 0, d3._ishlnsubmul(g3, 1, u3), d3.isZero() || (d3.negative ^= 1);
        s && (s.words[u3] = E3);
      }
      return s && s._strip(), d3._strip(), a2 !== "div" && c2 !== 0 && d3.iushrn(c2), { div: s || null, mod: d3 };
    }, o2.prototype.divmod = function(f2, a2, c2) {
      if (i(!f2.isZero()), this.isZero()) return { div: new o2(0), mod: new o2(0) };
      var d3, g3, x;
      return this.negative !== 0 && f2.negative === 0 ? (x = this.neg().divmod(f2, a2), a2 !== "mod" && (d3 = x.div.neg()), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.iadd(f2)), { div: d3, mod: g3 }) : this.negative === 0 && f2.negative !== 0 ? (x = this.divmod(f2.neg(), a2), a2 !== "mod" && (d3 = x.div.neg()), { div: d3, mod: x.mod }) : this.negative & f2.negative ? (x = this.neg().divmod(f2.neg(), a2), a2 !== "div" && (g3 = x.mod.neg(), c2 && g3.negative !== 0 && g3.isub(f2)), { div: x.div, mod: g3 }) : f2.length > this.length || this.cmp(f2) < 0 ? { div: new o2(0), mod: this } : f2.length === 1 ? a2 === "div" ? { div: this.divn(f2.words[0]), mod: null } : a2 === "mod" ? { div: null, mod: new o2(this.modrn(f2.words[0])) } : { div: this.divn(f2.words[0]), mod: new o2(this.modrn(f2.words[0])) } : this._wordDiv(f2, a2);
    }, o2.prototype.div = function(f2) {
      return this.divmod(f2, "div", false).div;
    }, o2.prototype.mod = function(f2) {
      return this.divmod(f2, "mod", false).mod;
    }, o2.prototype.umod = function(f2) {
      return this.divmod(f2, "mod", true).mod;
    }, o2.prototype.divRound = function(f2) {
      var a2 = this.divmod(f2);
      if (a2.mod.isZero()) return a2.div;
      var c2 = a2.div.negative !== 0 ? a2.mod.isub(f2) : a2.mod, d3 = f2.ushrn(1), g3 = f2.andln(1), x = c2.cmp(d3);
      return x < 0 || g3 === 1 && x === 0 ? a2.div : a2.div.negative !== 0 ? a2.div.isubn(1) : a2.div.iaddn(1);
    }, o2.prototype.modrn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = (1 << 26) % f2, d3 = 0, g3 = this.length - 1; g3 >= 0; g3--) d3 = (c2 * d3 + (this.words[g3] | 0)) % f2;
      return a2 ? -d3 : d3;
    }, o2.prototype.modn = function(f2) {
      return this.modrn(f2);
    }, o2.prototype.idivn = function(f2) {
      var a2 = f2 < 0;
      a2 && (f2 = -f2), i(f2 <= 67108863);
      for (var c2 = 0, d3 = this.length - 1; d3 >= 0; d3--) {
        var g3 = (this.words[d3] | 0) + c2 * 67108864;
        this.words[d3] = g3 / f2 | 0, c2 = g3 % f2;
      }
      return this._strip(), a2 ? this.ineg() : this;
    }, o2.prototype.divn = function(f2) {
      return this.clone().idivn(f2);
    }, o2.prototype.egcd = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = new o2(0), M2 = new o2(1), l2 = 0; a2.isEven() && c2.isEven(); ) a2.iushrn(1), c2.iushrn(1), ++l2;
      for (var s = c2.clone(), v3 = a2.clone(); !a2.isZero(); ) {
        for (var k2 = 0, u3 = 1; !(a2.words[0] & u3) && k2 < 26; ++k2, u3 <<= 1) ;
        if (k2 > 0) for (a2.iushrn(k2); k2-- > 0; ) (d3.isOdd() || g3.isOdd()) && (d3.iadd(s), g3.isub(v3)), d3.iushrn(1), g3.iushrn(1);
        for (var E3 = 0, _2 = 1; !(c2.words[0] & _2) && E3 < 26; ++E3, _2 <<= 1) ;
        if (E3 > 0) for (c2.iushrn(E3); E3-- > 0; ) (x.isOdd() || M2.isOdd()) && (x.iadd(s), M2.isub(v3)), x.iushrn(1), M2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(x), g3.isub(M2)) : (c2.isub(a2), x.isub(d3), M2.isub(g3));
      }
      return { a: x, b: M2, gcd: c2.iushln(l2) };
    }, o2.prototype._invmp = function(f2) {
      i(f2.negative === 0), i(!f2.isZero());
      var a2 = this, c2 = f2.clone();
      a2.negative !== 0 ? a2 = a2.umod(f2) : a2 = a2.clone();
      for (var d3 = new o2(1), g3 = new o2(0), x = c2.clone(); a2.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M2 = 0, l2 = 1; !(a2.words[0] & l2) && M2 < 26; ++M2, l2 <<= 1) ;
        if (M2 > 0) for (a2.iushrn(M2); M2-- > 0; ) d3.isOdd() && d3.iadd(x), d3.iushrn(1);
        for (var s = 0, v3 = 1; !(c2.words[0] & v3) && s < 26; ++s, v3 <<= 1) ;
        if (s > 0) for (c2.iushrn(s); s-- > 0; ) g3.isOdd() && g3.iadd(x), g3.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d3.isub(g3)) : (c2.isub(a2), g3.isub(d3));
      }
      var k2;
      return a2.cmpn(1) === 0 ? k2 = d3 : k2 = g3, k2.cmpn(0) < 0 && k2.iadd(f2), k2;
    }, o2.prototype.gcd = function(f2) {
      if (this.isZero()) return f2.abs();
      if (f2.isZero()) return this.abs();
      var a2 = this.clone(), c2 = f2.clone();
      a2.negative = 0, c2.negative = 0;
      for (var d3 = 0; a2.isEven() && c2.isEven(); d3++) a2.iushrn(1), c2.iushrn(1);
      do {
        for (; a2.isEven(); ) a2.iushrn(1);
        for (; c2.isEven(); ) c2.iushrn(1);
        var g3 = a2.cmp(c2);
        if (g3 < 0) {
          var x = a2;
          a2 = c2, c2 = x;
        } else if (g3 === 0 || c2.cmpn(1) === 0) break;
        a2.isub(c2);
      } while (true);
      return c2.iushln(d3);
    }, o2.prototype.invm = function(f2) {
      return this.egcd(f2).a.umod(f2);
    }, o2.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o2.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o2.prototype.andln = function(f2) {
      return this.words[0] & f2;
    }, o2.prototype.bincn = function(f2) {
      i(typeof f2 == "number");
      var a2 = f2 % 26, c2 = (f2 - a2) / 26, d3 = 1 << a2;
      if (this.length <= c2) return this._expand(c2 + 1), this.words[c2] |= d3, this;
      for (var g3 = d3, x = c2; g3 !== 0 && x < this.length; x++) {
        var M2 = this.words[x] | 0;
        M2 += g3, g3 = M2 >>> 26, M2 &= 67108863, this.words[x] = M2;
      }
      return g3 !== 0 && (this.words[x] = g3, this.length++), this;
    }, o2.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o2.prototype.cmpn = function(f2) {
      var a2 = f2 < 0;
      if (this.negative !== 0 && !a2) return -1;
      if (this.negative === 0 && a2) return 1;
      this._strip();
      var c2;
      if (this.length > 1) c2 = 1;
      else {
        a2 && (f2 = -f2), i(f2 <= 67108863, "Number is too big");
        var d3 = this.words[0] | 0;
        c2 = d3 === f2 ? 0 : d3 < f2 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o2.prototype.cmp = function(f2) {
      if (this.negative !== 0 && f2.negative === 0) return -1;
      if (this.negative === 0 && f2.negative !== 0) return 1;
      var a2 = this.ucmp(f2);
      return this.negative !== 0 ? -a2 | 0 : a2;
    }, o2.prototype.ucmp = function(f2) {
      if (this.length > f2.length) return 1;
      if (this.length < f2.length) return -1;
      for (var a2 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d3 = this.words[c2] | 0, g3 = f2.words[c2] | 0;
        if (d3 !== g3) {
          d3 < g3 ? a2 = -1 : d3 > g3 && (a2 = 1);
          break;
        }
      }
      return a2;
    }, o2.prototype.gtn = function(f2) {
      return this.cmpn(f2) === 1;
    }, o2.prototype.gt = function(f2) {
      return this.cmp(f2) === 1;
    }, o2.prototype.gten = function(f2) {
      return this.cmpn(f2) >= 0;
    }, o2.prototype.gte = function(f2) {
      return this.cmp(f2) >= 0;
    }, o2.prototype.ltn = function(f2) {
      return this.cmpn(f2) === -1;
    }, o2.prototype.lt = function(f2) {
      return this.cmp(f2) === -1;
    }, o2.prototype.lten = function(f2) {
      return this.cmpn(f2) <= 0;
    }, o2.prototype.lte = function(f2) {
      return this.cmp(f2) <= 0;
    }, o2.prototype.eqn = function(f2) {
      return this.cmpn(f2) === 0;
    }, o2.prototype.eq = function(f2) {
      return this.cmp(f2) === 0;
    }, o2.red = function(f2) {
      return new Y(f2);
    }, o2.prototype.toRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), f2.convertTo(this)._forceRed(f2);
    }, o2.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o2.prototype._forceRed = function(f2) {
      return this.red = f2, this;
    }, o2.prototype.forceRed = function(f2) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(f2);
    }, o2.prototype.redAdd = function(f2) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, f2);
    }, o2.prototype.redIAdd = function(f2) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f2);
    }, o2.prototype.redSub = function(f2) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, f2);
    }, o2.prototype.redISub = function(f2) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, f2);
    }, o2.prototype.redShl = function(f2) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, f2);
    }, o2.prototype.redMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.mul(this, f2);
    }, o2.prototype.redIMul = function(f2) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f2), this.red.imul(this, f2);
    }, o2.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o2.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o2.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o2.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o2.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o2.prototype.redPow = function(f2) {
      return i(this.red && !f2.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f2);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z2(A2, f2) {
      this.name = A2, this.p = new o2(f2, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z2.prototype._tmp = function() {
      var f2 = new o2(null);
      return f2.words = new Array(Math.ceil(this.n / 13)), f2;
    }, z2.prototype.ireduce = function(f2) {
      var a2 = f2, c2;
      do
        this.split(a2, this.tmp), a2 = this.imulK(a2), a2 = a2.iadd(this.tmp), c2 = a2.bitLength();
      while (c2 > this.n);
      var d3 = c2 < this.n ? -1 : a2.ucmp(this.p);
      return d3 === 0 ? (a2.words[0] = 0, a2.length = 1) : d3 > 0 ? a2.isub(this.p) : a2.strip !== void 0 ? a2.strip() : a2._strip(), a2;
    }, z2.prototype.split = function(f2, a2) {
      f2.iushrn(this.n, 0, a2);
    }, z2.prototype.imulK = function(f2) {
      return f2.imul(this.k);
    };
    function Pt2() {
      z2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n2(Pt2, z2), Pt2.prototype.split = function(f2, a2) {
      for (var c2 = 4194303, d3 = Math.min(f2.length, 9), g3 = 0; g3 < d3; g3++) a2.words[g3] = f2.words[g3];
      if (a2.length = d3, f2.length <= 9) {
        f2.words[0] = 0, f2.length = 1;
        return;
      }
      var x = f2.words[9];
      for (a2.words[a2.length++] = x & c2, g3 = 10; g3 < f2.length; g3++) {
        var M2 = f2.words[g3] | 0;
        f2.words[g3 - 10] = (M2 & c2) << 4 | x >>> 22, x = M2;
      }
      x >>>= 22, f2.words[g3 - 10] = x, x === 0 && f2.length > 10 ? f2.length -= 10 : f2.length -= 9;
    }, Pt2.prototype.imulK = function(f2) {
      f2.words[f2.length] = 0, f2.words[f2.length + 1] = 0, f2.length += 2;
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = f2.words[c2] | 0;
        a2 += d3 * 977, f2.words[c2] = a2 & 67108863, a2 = d3 * 64 + (a2 / 67108864 | 0);
      }
      return f2.words[f2.length - 1] === 0 && (f2.length--, f2.words[f2.length - 1] === 0 && f2.length--), f2;
    };
    function W() {
      z2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n2(W, z2);
    function Rt2() {
      z2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n2(Rt2, z2);
    function Yt3() {
      z2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n2(Yt3, z2), Yt3.prototype.imulK = function(f2) {
      for (var a2 = 0, c2 = 0; c2 < f2.length; c2++) {
        var d3 = (f2.words[c2] | 0) * 19 + a2, g3 = d3 & 67108863;
        d3 >>>= 26, f2.words[c2] = g3, a2 = d3;
      }
      return a2 !== 0 && (f2.words[f2.length++] = a2), f2;
    }, o2._prime = function(f2) {
      if (H[f2]) return H[f2];
      var a2;
      if (f2 === "k256") a2 = new Pt2();
      else if (f2 === "p224") a2 = new W();
      else if (f2 === "p192") a2 = new Rt2();
      else if (f2 === "p25519") a2 = new Yt3();
      else throw new Error("Unknown prime " + f2);
      return H[f2] = a2, a2;
    };
    function Y(A2) {
      if (typeof A2 == "string") {
        var f2 = o2._prime(A2);
        this.m = f2.p, this.prime = f2;
      } else i(A2.gtn(1), "modulus must be greater than 1"), this.m = A2, this.prime = null;
    }
    Y.prototype._verify1 = function(f2) {
      i(f2.negative === 0, "red works only with positives"), i(f2.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f2, a2) {
      i((f2.negative | a2.negative) === 0, "red works only with positives"), i(f2.red && f2.red === a2.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f2) {
      return this.prime ? this.prime.ireduce(f2)._forceRed(this) : (w3(f2, f2.umod(this.m)._forceRed(this)), f2);
    }, Y.prototype.neg = function(f2) {
      return f2.isZero() ? f2.clone() : this.m.sub(f2)._forceRed(this);
    }, Y.prototype.add = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.add(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y.prototype.iadd = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.iadd(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y.prototype.sub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.sub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y.prototype.isub = function(f2, a2) {
      this._verify2(f2, a2);
      var c2 = f2.isub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y.prototype.shl = function(f2, a2) {
      return this._verify1(f2), this.imod(f2.ushln(a2));
    }, Y.prototype.imul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.imul(a2));
    }, Y.prototype.mul = function(f2, a2) {
      return this._verify2(f2, a2), this.imod(f2.mul(a2));
    }, Y.prototype.isqr = function(f2) {
      return this.imul(f2, f2.clone());
    }, Y.prototype.sqr = function(f2) {
      return this.mul(f2, f2);
    }, Y.prototype.sqrt = function(f2) {
      if (f2.isZero()) return f2.clone();
      var a2 = this.m.andln(3);
      if (i(a2 % 2 === 1), a2 === 3) {
        var c2 = this.m.add(new o2(1)).iushrn(2);
        return this.pow(f2, c2);
      }
      for (var d3 = this.m.subn(1), g3 = 0; !d3.isZero() && d3.andln(1) === 0; ) g3++, d3.iushrn(1);
      i(!d3.isZero());
      var x = new o2(1).toRed(this), M2 = x.redNeg(), l2 = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o2(2 * s * s).toRed(this); this.pow(s, l2).cmp(M2) !== 0; ) s.redIAdd(M2);
      for (var v3 = this.pow(s, d3), k2 = this.pow(f2, d3.addn(1).iushrn(1)), u3 = this.pow(f2, d3), E3 = g3; u3.cmp(x) !== 0; ) {
        for (var _2 = u3, B = 0; _2.cmp(x) !== 0; B++) _2 = _2.redSqr();
        i(B < E3);
        var R = this.pow(v3, new o2(1).iushln(E3 - B - 1));
        k2 = k2.redMul(R), v3 = R.redSqr(), u3 = u3.redMul(v3), E3 = B;
      }
      return k2;
    }, Y.prototype.invm = function(f2) {
      var a2 = f2._invmp(this.m);
      return a2.negative !== 0 ? (a2.negative = 0, this.imod(a2).redNeg()) : this.imod(a2);
    }, Y.prototype.pow = function(f2, a2) {
      if (a2.isZero()) return new o2(1).toRed(this);
      if (a2.cmpn(1) === 0) return f2.clone();
      var c2 = 4, d3 = new Array(1 << c2);
      d3[0] = new o2(1).toRed(this), d3[1] = f2;
      for (var g3 = 2; g3 < d3.length; g3++) d3[g3] = this.mul(d3[g3 - 1], f2);
      var x = d3[0], M2 = 0, l2 = 0, s = a2.bitLength() % 26;
      for (s === 0 && (s = 26), g3 = a2.length - 1; g3 >= 0; g3--) {
        for (var v3 = a2.words[g3], k2 = s - 1; k2 >= 0; k2--) {
          var u3 = v3 >> k2 & 1;
          if (x !== d3[0] && (x = this.sqr(x)), u3 === 0 && M2 === 0) {
            l2 = 0;
            continue;
          }
          M2 <<= 1, M2 |= u3, l2++, !(l2 !== c2 && (g3 !== 0 || k2 !== 0)) && (x = this.mul(x, d3[M2]), l2 = 0, M2 = 0);
        }
        s = 26;
      }
      return x;
    }, Y.prototype.convertTo = function(f2) {
      var a2 = f2.umod(this.m);
      return a2 === f2 ? a2.clone() : a2;
    }, Y.prototype.convertFrom = function(f2) {
      var a2 = f2.clone();
      return a2.red = null, a2;
    }, o2.mont = function(f2) {
      return new Vt2(f2);
    };
    function Vt2(A2) {
      Y.call(this, A2), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n2(Vt2, Y), Vt2.prototype.convertTo = function(f2) {
      return this.imod(f2.ushln(this.shift));
    }, Vt2.prototype.convertFrom = function(f2) {
      var a2 = this.imod(f2.mul(this.rinv));
      return a2.red = null, a2;
    }, Vt2.prototype.imul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return f2.words[0] = 0, f2.length = 1, f2;
      var c2 = f2.imul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.mul = function(f2, a2) {
      if (f2.isZero() || a2.isZero()) return new o2(0)._forceRed(this);
      var c2 = f2.mul(a2), d3 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d3).iushrn(this.shift), x = g3;
      return g3.cmp(this.m) >= 0 ? x = g3.isub(this.m) : g3.cmpn(0) < 0 && (x = g3.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.invm = function(f2) {
      var a2 = this.imod(f2._invmp(this.m).mul(this.r2));
      return a2._forceRed(this);
    };
  })(e, On);
})(Ln);
var K = Ln.exports;
const jn = "bignumber/5.7.0";
var Rr = K.BN;
const Ae = new L$2(jn), wi = {}, Qn = 9007199254740991;
function C0(e) {
  return e != null && (V3.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt(e) || typeof e == "bigint" || ir(e));
}
let Jn = false;
class V3 {
  constructor(t, r2) {
    t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L$2.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt(j$2(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt(j$2(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? V3.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt(j$2(this).add(j$2(t)));
  }
  sub(t) {
    return Lt(j$2(this).sub(j$2(t)));
  }
  div(t) {
    return V3.from(t).isZero() && Wt2("division-by-zero", "div"), Lt(j$2(this).div(j$2(t)));
  }
  mul(t) {
    return Lt(j$2(this).mul(j$2(t)));
  }
  mod(t) {
    const r2 = j$2(t);
    return r2.isNeg() && Wt2("division-by-zero", "mod"), Lt(j$2(this).umod(r2));
  }
  pow(t) {
    const r2 = j$2(t);
    return r2.isNeg() && Wt2("negative-power", "pow"), Lt(j$2(this).pow(r2));
  }
  and(t) {
    const r2 = j$2(t);
    return (this.isNegative() || r2.isNeg()) && Wt2("unbound-bitwise-result", "and"), Lt(j$2(this).and(r2));
  }
  or(t) {
    const r2 = j$2(t);
    return (this.isNegative() || r2.isNeg()) && Wt2("unbound-bitwise-result", "or"), Lt(j$2(this).or(r2));
  }
  xor(t) {
    const r2 = j$2(t);
    return (this.isNegative() || r2.isNeg()) && Wt2("unbound-bitwise-result", "xor"), Lt(j$2(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt2("negative-width", "mask"), Lt(j$2(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt2("negative-width", "shl"), Lt(j$2(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt2("negative-width", "shr"), Lt(j$2(this).shrn(t));
  }
  eq(t) {
    return j$2(this).eq(j$2(t));
  }
  lt(t) {
    return j$2(this).lt(j$2(t));
  }
  lte(t) {
    return j$2(this).lte(j$2(t));
  }
  gt(t) {
    return j$2(this).gt(j$2(t));
  }
  gte(t) {
    return j$2(this).gte(j$2(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j$2(this).isZero();
  }
  toNumber() {
    try {
      return j$2(this).toNumber();
    } catch {
      Wt2("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", L$2.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L$2.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L$2.errors.UNEXPECTED_ARGUMENT, {})), j$2(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof V3) return t;
    if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V3(wi, vr(t)) : t.match(/^-?[0-9]+$/) ? new V3(wi, vr(new Rr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number") return t % 1 && Wt2("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt2("overflow", "BigNumber.from", t), V3.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint") return V3.from(r2.toString());
    if (ir(r2)) return V3.from(Kt(r2));
    if (r2) if (r2.toHexString) {
      const i = r2.toHexString();
      if (typeof i == "string") return V3.from(i);
    } else {
      let i = r2._hex;
      if (i == null && r2.type === "BigNumber" && (i = r2.hex), typeof i == "string" && (Qt(i) || i[0] === "-" && Qt(i.substring(1)))) return V3.from(i);
    }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
}
function vr(e) {
  if (typeof e != "string") return vr(e.toString(16));
  if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = vr(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; ) e = "0x" + e.substring(4);
  return e;
}
function Lt(e) {
  return V3.from(vr(e));
}
function j$2(e) {
  const t = V3.from(e).toHexString();
  return t[0] === "-" ? new Rr("-" + t.substring(3), 16) : new Rr(t.substring(2), 16);
}
function Wt2(e, t, r2) {
  const i = { fault: e, operation: t };
  return r2 != null && (i.value = r2), Ae.throwError(e, L$2.errors.NUMERIC_FAULT, i);
}
const Ht2 = new L$2(jn), mr = {}, Gn = V3.from(0), Yn = V3.from(-1);
function Vn$1(e, t, r2, i) {
  const n2 = { fault: t, operation: r2 };
  return i !== void 0 && (n2.value = i), Ht2.throwError(e, L$2.errors.NUMERIC_FAULT, n2);
}
let gr = "0";
for (; gr.length < 256; ) gr += gr;
function xi(e) {
  if (typeof e != "number") try {
    e = V3.from(e).toNumber();
  } catch {
  }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr.substring(0, e) : Ht2.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi$1(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  e = V3.from(e);
  const i = e.lt(Gn);
  i && (e = e.mul(Yn));
  let n2 = e.mod(r2).toString();
  for (; n2.length < r2.length - 1; ) n2 = "0" + n2;
  n2 = n2.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o2 = e.div(r2).toString();
  return r2.length === 1 ? e = o2 : e = o2 + "." + n2, i && (e = "-" + e), e;
}
function be(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht2.throwArgumentError("invalid decimal value", "value", e);
  const i = e.substring(0, 1) === "-";
  i && (e = e.substring(1)), e === "." && Ht2.throwArgumentError("missing value", "value", e);
  const n2 = e.split(".");
  n2.length > 2 && Ht2.throwArgumentError("too many decimal points", "value", e);
  let o2 = n2[0], h2 = n2[1];
  for (o2 || (o2 = "0"), h2 || (h2 = "0"); h2[h2.length - 1] === "0"; ) h2 = h2.substring(0, h2.length - 1);
  for (h2.length > r2.length - 1 && Vn$1("fractional component exceeds decimals", "underflow", "parseFixed"), h2 === "" && (h2 = "0"); h2.length < r2.length - 1; ) h2 += "0";
  const p3 = V3.from(o2), b3 = V3.from(h2);
  let m2 = p3.mul(r2).add(b3);
  return i && (m2 = m2.mul(Yn)), m2;
}
class dr3 {
  constructor(t, r2, i, n2) {
    t !== mr && Ht2.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L$2.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i, this.decimals = n2, this.name = (r2 ? "" : "u") + "fixed" + String(i) + "x" + String(n2), this._multiplier = xi(n2), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof dr3) return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i = 128, n2 = 18;
    if (typeof t == "string") {
      if (t !== "fixed") if (t === "ufixed") r2 = false;
      else {
        const o2 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o2 || Ht2.throwArgumentError("invalid fixed format", "format", t), r2 = o2[1] !== "u", i = parseInt(o2[2]), n2 = parseInt(o2[3]);
      }
    } else if (t) {
      const o2 = (h2, p3, b3) => t[h2] == null ? b3 : (typeof t[h2] !== p3 && Ht2.throwArgumentError("invalid fixed format (" + h2 + " not " + p3 + ")", "format." + h2, t[h2]), t[h2]);
      r2 = o2("signed", "boolean", r2), i = o2("width", "number", i), n2 = o2("decimals", "number", n2);
    }
    return i % 8 && Ht2.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n2 > 80 && Ht2.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n2), new dr3(mr, r2, i, n2);
  }
}
class Ut4 {
  constructor(t, r2, i, n2) {
    t !== mr && Ht2.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L$2.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n2, this._hex = r2, this._value = i, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht2.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
    return Ut4.fromValue(r2.add(i), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
    return Ut4.fromValue(r2.sub(i), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
    return Ut4.fromValue(r2.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
    return Ut4.fromValue(r2.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut4.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return this.isNegative() && i && (r2 = r2.subUnsafe(Wn.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut4.from(t[0], this.format);
    const i = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i && (r2 = r2.addUnsafe(Wn.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht2.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t) return this;
    const i = Ut4.from("1" + gr.substring(0, t), this.format), n2 = O0.toFormat(this.format);
    return this.mulUnsafe(i).addUnsafe(n2).floor().divUnsafe(i);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null) return this._hex;
    t % 8 && Ht2.throwArgumentError("invalid byte width", "width", t);
    const r2 = V3.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ut4.fromString(this._value, t);
  }
  static fromValue(t, r2, i) {
    return i == null && r2 != null && !C0(r2) && (i = r2, r2 = null), r2 == null && (r2 = 0), i == null && (i = "fixed"), Ut4.fromString(Mi$1(t, r2), dr3.from(i));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr3.from(r2), n2 = be(t, i.decimals);
    !i.signed && n2.lt(Gn) && Vn$1("unsigned value cannot be negative", "overflow", "value", t);
    let o2 = null;
    i.signed ? o2 = n2.toTwos(i.width).toHexString() : (o2 = n2.toHexString(), o2 = oe(o2, i.width / 8));
    const h2 = Mi$1(n2, i.decimals);
    return new Ut4(mr, o2, h2, i);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i = dr3.from(r2);
    if (Ot2(t).length > i.width / 8) throw new Error("overflow");
    let n2 = V3.from(t);
    i.signed && (n2 = n2.fromTwos(i.width));
    const o2 = n2.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), h2 = Mi$1(n2, i.decimals);
    return new Ut4(mr, o2, h2, i);
  }
  static from(t, r2) {
    if (typeof t == "string") return Ut4.fromString(t, r2);
    if (ir(t)) return Ut4.fromBytes(t, r2);
    try {
      return Ut4.fromValue(t, 0, r2);
    } catch (i) {
      if (i.code !== L$2.errors.INVALID_ARGUMENT) throw i;
    }
    return Ht2.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
}
const Wn = Ut4.from(1), O0 = Ut4.from("0.5");
var Or;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or || (Or = {}));
var nr;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr || (nr = {}));
function T0(e) {
  if (e.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4) t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Si(e, t) {
  t || (t = function(n2) {
    return [parseInt(n2, 16)];
  });
  let r2 = 0, i = {};
  return e.split(",").forEach((n2) => {
    let o2 = n2.split(":");
    r2 += parseInt(o2[0], 16), i[r2] = t(o2[1]);
  }), i;
}
function $n(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i = r2.split("-");
    i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
    let n2 = t + parseInt(i[0], 16);
    return t = parseInt(i[1], 16), { l: n2, h: t };
  });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function U0(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++) t.push(e.charCodeAt(r2));
  return Ot2(t);
}
function ef(e, t) {
  t == null && (t = 1);
  const r2 = [], i = r2.forEach, n2 = function(o2, h2) {
    i.call(o2, function(p3) {
      h2 > 0 && Array.isArray(p3) ? n2(p3, h2 - 1) : r2.push(p3);
    });
  };
  return n2(e, t), r2;
}
function k0(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i = e[r2];
    t[i[0]] = i[1];
  }
  return t;
}
function q0(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i = r2(), n2 = 1, o2 = [0, 1];
  for (let H = 1; H < i; H++) o2.push(n2 += r2());
  let h2 = r2(), p3 = t;
  t += h2;
  let b3 = 0, m2 = 0;
  function w3() {
    return b3 == 0 && (m2 = m2 << 8 | e[t++], b3 = 8), m2 >> --b3 & 1;
  }
  const y3 = 31, S2 = Math.pow(2, y3), I2 = S2 >>> 1, N2 = I2 >> 1, C2 = S2 - 1;
  let F2 = 0;
  for (let H = 0; H < y3; H++) F2 = F2 << 1 | w3();
  let U2 = [], J2 = 0, Bt2 = S2;
  for (; ; ) {
    let H = Math.floor(((F2 - J2 + 1) * n2 - 1) / Bt2), z2 = 0, Pt2 = i;
    for (; Pt2 - z2 > 1; ) {
      let Yt3 = z2 + Pt2 >>> 1;
      H < o2[Yt3] ? Pt2 = Yt3 : z2 = Yt3;
    }
    if (z2 == 0) break;
    U2.push(z2);
    let W = J2 + Math.floor(Bt2 * o2[z2] / n2), Rt2 = J2 + Math.floor(Bt2 * o2[z2 + 1] / n2) - 1;
    for (; !((W ^ Rt2) & I2); ) F2 = F2 << 1 & C2 | w3(), W = W << 1 & C2, Rt2 = Rt2 << 1 & C2 | 1;
    for (; W & ~Rt2 & N2; ) F2 = F2 & I2 | F2 << 1 & C2 >>> 1 | w3(), W = W << 1 ^ I2, Rt2 = (Rt2 ^ I2) << 1 | I2 | 1;
    J2 = W, Bt2 = 1 + Rt2 - W;
  }
  let G = i - 4;
  return U2.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e[p3++] << 16 | e[p3++] << 8 | e[p3++]);
      case 2:
        return G + 256 + (e[p3++] << 8 | e[p3++]);
      case 1:
        return G + e[p3++];
      default:
        return H - 1;
    }
  });
}
function K0(e) {
  let t = 0;
  return () => e[t++];
}
function H0(e) {
  return K0(q0(e));
}
function z0(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function L0(e, t) {
  let r2 = Array(e);
  for (let i = 0; i < e; i++) r2[i] = 1 + t();
  return r2;
}
function rf(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = -1; i < e; i++) r2[i] = n2 += 1 + t();
  return r2;
}
function j0(e, t) {
  let r2 = Array(e);
  for (let i = 0, n2 = 0; i < e; i++) r2[i] = n2 += z0(t());
  return r2;
}
function Pr(e, t) {
  let r2 = rf(e(), e), i = e(), n2 = rf(i, e), o2 = L0(i, e);
  for (let h2 = 0; h2 < i; h2++) for (let p3 = 0; p3 < o2[h2]; p3++) r2.push(n2[h2] + p3);
  return t ? r2.map((h2) => t[h2]) : r2;
}
function Q0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(G0(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0) break;
    t.push(Y0(r2, e));
  }
  return k0(ef(t));
}
function J0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(r2);
  }
  return t;
}
function nf(e, t, r2) {
  let i = Array(e).fill(void 0).map(() => []);
  for (let n2 = 0; n2 < t; n2++) j0(e, r2).forEach((o2, h2) => i[h2].push(o2));
  return i;
}
function G0(e, t) {
  let r2 = 1 + t(), i = t(), n2 = J0(t), o2 = nf(n2.length, 1 + e, t);
  return ef(o2.map((h2, p3) => {
    const b3 = h2[0], m2 = h2.slice(1);
    return Array(n2[p3]).fill(void 0).map((w3, y3) => {
      let S2 = y3 * i;
      return [b3 + y3 * r2, m2.map((I2) => I2 + S2)];
    });
  }));
}
function Y0(e, t) {
  let r2 = 1 + t();
  return nf(r2, 1 + e, t).map((n2) => [n2[0], n2.slice(1)]);
}
function V0(e) {
  let t = Pr(e).sort((i, n2) => i - n2);
  return r2();
  function r2() {
    let i = [];
    for (; ; ) {
      let m2 = Pr(e, t);
      if (m2.length == 0) break;
      i.push({ set: new Set(m2), node: r2() });
    }
    i.sort((m2, w3) => w3.set.size - m2.set.size);
    let n2 = e(), o2 = n2 % 3;
    n2 = n2 / 3 | 0;
    let h2 = !!(n2 & 1);
    n2 >>= 1;
    let p3 = n2 == 1, b3 = n2 == 2;
    return { branches: i, valid: o2, fe0f: h2, save: p3, check: b3 };
  }
}
function W0() {
  return H0(U0("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"));
}
const Dr = W0();
new Set(Pr(Dr)), new Set(Pr(Dr)), Q0(Dr), V0(Dr);
const X0 = new Uint8Array(32);
X0.fill(0);
const os = new Uint8Array(32);
os.fill(0), V3.from(-1);
const ss3 = V3.from(0), as = V3.from(1);
V3.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(as.toHexString(), 32), oe(ss3.toHexString(), 32);
var se = {}, Q$1 = {}, yr = af;
function af(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
af.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var Ii = { exports: {} };
typeof Object.create == "function" ? Ii.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i = function() {
    };
    i.prototype = r2.prototype, t.prototype = new i(), t.prototype.constructor = t;
  }
};
var us = yr, hs = Ii.exports;
Q$1.inherits = hs;
function cs(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls(e, t) {
  if (Array.isArray(e)) return e.slice();
  if (!e) return [];
  var r2 = [];
  if (typeof e == "string") if (t) {
    if (t === "hex") for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n2 = 0; n2 < e.length; n2 += 2) r2.push(parseInt(e[n2] + e[n2 + 1], 16));
  } else for (var i = 0, n2 = 0; n2 < e.length; n2++) {
    var o2 = e.charCodeAt(n2);
    o2 < 128 ? r2[i++] = o2 : o2 < 2048 ? (r2[i++] = o2 >> 6 | 192, r2[i++] = o2 & 63 | 128) : cs(e, n2) ? (o2 = 65536 + ((o2 & 1023) << 10) + (e.charCodeAt(++n2) & 1023), r2[i++] = o2 >> 18 | 240, r2[i++] = o2 >> 12 & 63 | 128, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128) : (r2[i++] = o2 >> 12 | 224, r2[i++] = o2 >> 6 & 63 | 128, r2[i++] = o2 & 63 | 128);
  }
  else for (n2 = 0; n2 < e.length; n2++) r2[n2] = e[n2] | 0;
  return r2;
}
Q$1.toArray = ls;
function ds(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++) t += hf(e[r2].toString(16));
  return t;
}
Q$1.toHex = ds;
function uf(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q$1.htonl = uf;
function ps(e, t) {
  for (var r2 = "", i = 0; i < e.length; i++) {
    var n2 = e[i];
    t === "little" && (n2 = uf(n2)), r2 += cf(n2.toString(16));
  }
  return r2;
}
Q$1.toHex32 = ps;
function hf(e) {
  return e.length === 1 ? "0" + e : e;
}
Q$1.zero2 = hf;
function cf(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q$1.zero8 = cf;
function vs(e, t, r2, i) {
  var n2 = r2 - t;
  us(n2 % 4 === 0);
  for (var o2 = new Array(n2 / 4), h2 = 0, p3 = t; h2 < o2.length; h2++, p3 += 4) {
    var b3;
    i === "big" ? b3 = e[p3] << 24 | e[p3 + 1] << 16 | e[p3 + 2] << 8 | e[p3 + 3] : b3 = e[p3 + 3] << 24 | e[p3 + 2] << 16 | e[p3 + 1] << 8 | e[p3], o2[h2] = b3 >>> 0;
  }
  return o2;
}
Q$1.join32 = vs;
function ms(e, t) {
  for (var r2 = new Array(e.length * 4), i = 0, n2 = 0; i < e.length; i++, n2 += 4) {
    var o2 = e[i];
    t === "big" ? (r2[n2] = o2 >>> 24, r2[n2 + 1] = o2 >>> 16 & 255, r2[n2 + 2] = o2 >>> 8 & 255, r2[n2 + 3] = o2 & 255) : (r2[n2 + 3] = o2 >>> 24, r2[n2 + 2] = o2 >>> 16 & 255, r2[n2 + 1] = o2 >>> 8 & 255, r2[n2] = o2 & 255);
  }
  return r2;
}
Q$1.split32 = ms;
function gs(e, t) {
  return e >>> t | e << 32 - t;
}
Q$1.rotr32 = gs;
function As(e, t) {
  return e << t | e >>> 32 - t;
}
Q$1.rotl32 = As;
function bs(e, t) {
  return e + t >>> 0;
}
Q$1.sum32 = bs;
function ys(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q$1.sum32_3 = ys;
function ws(e, t, r2, i) {
  return e + t + r2 + i >>> 0;
}
Q$1.sum32_4 = ws;
function xs(e, t, r2, i, n2) {
  return e + t + r2 + i + n2 >>> 0;
}
Q$1.sum32_5 = xs;
function Ms(e, t, r2, i) {
  var n2 = e[t], o2 = e[t + 1], h2 = i + o2 >>> 0, p3 = (h2 < i ? 1 : 0) + r2 + n2;
  e[t] = p3 >>> 0, e[t + 1] = h2;
}
Q$1.sum64 = Ms;
function Es(e, t, r2, i) {
  var n2 = t + i >>> 0, o2 = (n2 < t ? 1 : 0) + e + r2;
  return o2 >>> 0;
}
Q$1.sum64_hi = Es;
function Ss(e, t, r2, i) {
  var n2 = t + i;
  return n2 >>> 0;
}
Q$1.sum64_lo = Ss;
function Ns(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = 0, m2 = t;
  m2 = m2 + i >>> 0, b3 += m2 < t ? 1 : 0, m2 = m2 + o2 >>> 0, b3 += m2 < o2 ? 1 : 0, m2 = m2 + p3 >>> 0, b3 += m2 < p3 ? 1 : 0;
  var w3 = e + r2 + n2 + h2 + b3;
  return w3 >>> 0;
}
Q$1.sum64_4_hi = Ns;
function Is(e, t, r2, i, n2, o2, h2, p3) {
  var b3 = t + i + o2 + p3;
  return b3 >>> 0;
}
Q$1.sum64_4_lo = Is;
function _s(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = 0, y3 = t;
  y3 = y3 + i >>> 0, w3 += y3 < t ? 1 : 0, y3 = y3 + o2 >>> 0, w3 += y3 < o2 ? 1 : 0, y3 = y3 + p3 >>> 0, w3 += y3 < p3 ? 1 : 0, y3 = y3 + m2 >>> 0, w3 += y3 < m2 ? 1 : 0;
  var S2 = e + r2 + n2 + h2 + b3 + w3;
  return S2 >>> 0;
}
Q$1.sum64_5_hi = _s;
function Bs(e, t, r2, i, n2, o2, h2, p3, b3, m2) {
  var w3 = t + i + o2 + p3 + m2;
  return w3 >>> 0;
}
Q$1.sum64_5_lo = Bs;
function Cs(e, t, r2) {
  var i = t << 32 - r2 | e >>> r2;
  return i >>> 0;
}
Q$1.rotr64_hi = Cs;
function Rs(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$1.rotr64_lo = Rs;
function Os(e, t, r2) {
  return e >>> r2;
}
Q$1.shr64_hi = Os;
function Ps(e, t, r2) {
  var i = e << 32 - r2 | t >>> r2;
  return i >>> 0;
}
Q$1.shr64_lo = Ps;
var fr = {}, lf = Q$1, Ds = yr;
function Fr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr, Fr.prototype.update = function(t, r2) {
  if (t = lf.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i = t.length % this._delta8;
    this.pending = t.slice(t.length - i, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i, this.endian);
    for (var n2 = 0; n2 < t.length; n2 += this._delta32) this._update(t, n2, n2 + this._delta32);
  }
  return this;
}, Fr.prototype.digest = function(t) {
  return this.update(this._pad()), Ds(this.pending === null), this._digest(t);
}, Fr.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i = r2 - (t + this.padLength) % r2, n2 = new Array(i + this.padLength);
  n2[0] = 128;
  for (var o2 = 1; o2 < i; o2++) n2[o2] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
    n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = t >>> 24 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t & 255;
  } else for (n2[o2++] = t & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 24 & 255, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, h2 = 8; h2 < this.padLength; h2++) n2[o2++] = 0;
  return n2;
};
var or = {}, ae = {}, Fs = Q$1, ue = Fs.rotr32;
function Ts(e, t, r2, i) {
  if (e === 0) return df(t, r2, i);
  if (e === 1 || e === 3) return vf(t, r2, i);
  if (e === 2) return pf(t, r2, i);
}
ae.ft_1 = Ts;
function df(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae.ch32 = df;
function pf(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae.maj32 = pf;
function vf(e, t, r2) {
  return e ^ t ^ r2;
}
ae.p32 = vf;
function Us(e) {
  return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Us;
function ks(e) {
  return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = ks;
function qs(e) {
  return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = qs;
function Ks(e) {
  return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = Ks;
var sr = Q$1, Hs = fr, zs = ae, _i = sr.rotl32, wr = sr.sum32, Ls = sr.sum32_5, js = zs.ft_1, mf = Hs.BlockHash, Qs = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he)) return new he();
  mf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr.inherits(he, mf);
var Js = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = _i(i[n2 - 3] ^ i[n2 - 8] ^ i[n2 - 14] ^ i[n2 - 16], 1);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4];
  for (n2 = 0; n2 < i.length; n2++) {
    var w3 = ~~(n2 / 20), y3 = Ls(_i(o2, 5), js(w3, h2, p3, b3), m2, i[n2], Qs[w3]);
    m2 = b3, b3 = p3, p3 = _i(h2, 30), h2 = o2, o2 = y3;
  }
  this.h[0] = wr(this.h[0], o2), this.h[1] = wr(this.h[1], h2), this.h[2] = wr(this.h[2], p3), this.h[3] = wr(this.h[3], b3), this.h[4] = wr(this.h[4], m2);
}, he.prototype._digest = function(t) {
  return t === "hex" ? sr.toHex32(this.h, "big") : sr.split32(this.h, "big");
};
var ar2 = Q$1, Gs = fr, ur = ae, Ys = yr, ie2 = ar2.sum32, Vs = ar2.sum32_4, Ws = ar2.sum32_5, Xs = ur.ch32, Zs = ur.maj32, $s = ur.s0_256, ta = ur.s1_256, ea = ur.g0_256, ra = ur.g1_256, gf = Gs.BlockHash, ia = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce)) return new ce();
  gf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia, this.W = new Array(64);
}
ar2.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 16; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2++) i[n2] = Vs(ra(i[n2 - 2]), i[n2 - 7], ea(i[n2 - 15]), i[n2 - 16]);
  var o2 = this.h[0], h2 = this.h[1], p3 = this.h[2], b3 = this.h[3], m2 = this.h[4], w3 = this.h[5], y3 = this.h[6], S2 = this.h[7];
  for (Ys(this.k.length === i.length), n2 = 0; n2 < i.length; n2++) {
    var I2 = Ws(S2, ta(m2), Xs(m2, w3, y3), this.k[n2], i[n2]), N2 = ie2($s(o2), Zs(o2, h2, p3));
    S2 = y3, y3 = w3, w3 = m2, m2 = ie2(b3, I2), b3 = p3, p3 = h2, h2 = o2, o2 = ie2(I2, N2);
  }
  this.h[0] = ie2(this.h[0], o2), this.h[1] = ie2(this.h[1], h2), this.h[2] = ie2(this.h[2], p3), this.h[3] = ie2(this.h[3], b3), this.h[4] = ie2(this.h[4], m2), this.h[5] = ie2(this.h[5], w3), this.h[6] = ie2(this.h[6], y3), this.h[7] = ie2(this.h[7], S2);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ar2.toHex32(this.h, "big") : ar2.split32(this.h, "big");
};
var Bi = Q$1, bf = Af;
function ye() {
  if (!(this instanceof ye)) return new ye();
  bf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi.inherits(ye, bf);
var na = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
  return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt2 = Q$1, fa = fr, oa = yr, le = jt2.rotr64_hi, de = jt2.rotr64_lo, yf = jt2.shr64_hi, wf = jt2.shr64_lo, Be = jt2.sum64, Ci = jt2.sum64_hi, Ri = jt2.sum64_lo, sa = jt2.sum64_4_hi, aa = jt2.sum64_4_lo, ua = jt2.sum64_5_hi, ha = jt2.sum64_5_lo, xf = fa.BlockHash, ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne2() {
  if (!(this instanceof ne2)) return new ne2();
  xf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca, this.W = new Array(160);
}
jt2.inherits(ne2, xf);
var Mf = ne2;
ne2.blockSize = 1024, ne2.outSize = 512, ne2.hmacStrength = 192, ne2.padLength = 128, ne2.prototype._prepareBlock = function(t, r2) {
  for (var i = this.W, n2 = 0; n2 < 32; n2++) i[n2] = t[r2 + n2];
  for (; n2 < i.length; n2 += 2) {
    var o2 = xa$1(i[n2 - 4], i[n2 - 3]), h2 = Ma(i[n2 - 4], i[n2 - 3]), p3 = i[n2 - 14], b3 = i[n2 - 13], m2 = ya$1(i[n2 - 30], i[n2 - 29]), w3 = wa(i[n2 - 30], i[n2 - 29]), y3 = i[n2 - 32], S2 = i[n2 - 31];
    i[n2] = sa(o2, h2, p3, b3, m2, w3, y3, S2), i[n2 + 1] = aa(o2, h2, p3, b3, m2, w3, y3, S2);
  }
}, ne2.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i = this.W, n2 = this.h[0], o2 = this.h[1], h2 = this.h[2], p3 = this.h[3], b3 = this.h[4], m2 = this.h[5], w3 = this.h[6], y3 = this.h[7], S2 = this.h[8], I2 = this.h[9], N2 = this.h[10], C2 = this.h[11], F2 = this.h[12], U2 = this.h[13], J2 = this.h[14], Bt2 = this.h[15];
  oa(this.k.length === i.length);
  for (var G = 0; G < i.length; G += 2) {
    var H = J2, z2 = Bt2, Pt2 = Aa(S2, I2), W = ba$1(S2, I2), Rt2 = la(S2, I2, N2, C2, F2), Yt3 = da(S2, I2, N2, C2, F2, U2), Y = this.k[G], Vt2 = this.k[G + 1], A2 = i[G], f2 = i[G + 1], a2 = ua(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2), c2 = ha(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f2);
    H = ma(n2, o2), z2 = ga(n2, o2), Pt2 = pa(n2, o2, h2, p3, b3), W = va(n2, o2, h2, p3, b3, m2);
    var d3 = Ci(H, z2, Pt2, W), g3 = Ri(H, z2, Pt2, W);
    J2 = F2, Bt2 = U2, F2 = N2, U2 = C2, N2 = S2, C2 = I2, S2 = Ci(w3, y3, a2, c2), I2 = Ri(y3, y3, a2, c2), w3 = b3, y3 = m2, b3 = h2, m2 = p3, h2 = n2, p3 = o2, n2 = Ci(a2, c2, d3, g3), o2 = Ri(a2, c2, d3, g3);
  }
  Be(this.h, 0, n2, o2), Be(this.h, 2, h2, p3), Be(this.h, 4, b3, m2), Be(this.h, 6, w3, y3), Be(this.h, 8, S2, I2), Be(this.h, 10, N2, C2), Be(this.h, 12, F2, U2), Be(this.h, 14, J2, Bt2);
}, ne2.prototype._digest = function(t) {
  return t === "hex" ? jt2.toHex32(this.h, "big") : jt2.split32(this.h, "big");
};
function la(e, t, r2, i, n2) {
  var o2 = e & r2 ^ ~e & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function da(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ ~t & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function pa(e, t, r2, i, n2) {
  var o2 = e & r2 ^ e & n2 ^ r2 & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function va(e, t, r2, i, n2, o2) {
  var h2 = t & i ^ t & o2 ^ i & o2;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function ma(e, t) {
  var r2 = le(e, t, 28), i = le(t, e, 2), n2 = le(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ga(e, t) {
  var r2 = de(e, t, 28), i = de(t, e, 2), n2 = de(t, e, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Aa(e, t) {
  var r2 = le(e, t, 14), i = le(e, t, 18), n2 = le(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ba$1(e, t) {
  var r2 = de(e, t, 14), i = de(e, t, 18), n2 = de(t, e, 9), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ya$1(e, t) {
  var r2 = le(e, t, 1), i = le(e, t, 8), n2 = yf(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function wa(e, t) {
  var r2 = de(e, t, 1), i = de(e, t, 8), n2 = wf(e, t, 7), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function xa$1(e, t) {
  var r2 = le(e, t, 19), i = le(t, e, 29), n2 = yf(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ma(e, t) {
  var r2 = de(e, t, 19), i = de(t, e, 29), n2 = wf(e, t, 6), o2 = r2 ^ i ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
var Oi = Q$1, Ef = Mf;
function we() {
  if (!(this instanceof we)) return new we();
  Ef.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi.inherits(we, Ef);
var Ea$1 = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or.sha1 = Js, or.sha224 = na, or.sha256 = Af, or.sha384 = Ea$1, or.sha512 = Mf;
var Sf = {}, Xe = Q$1, Sa$1 = fr, Tr = Xe.rotl32, Nf = Xe.sum32, xr = Xe.sum32_3, If = Xe.sum32_4, _f = Sa$1.BlockHash;
function pe() {
  if (!(this instanceof pe)) return new pe();
  _f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, _f), Sf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r2) {
  for (var i = this.h[0], n2 = this.h[1], o2 = this.h[2], h2 = this.h[3], p3 = this.h[4], b3 = i, m2 = n2, w3 = o2, y3 = h2, S2 = p3, I2 = 0; I2 < 80; I2++) {
    var N2 = Nf(Tr(If(i, Bf(I2, n2, o2, h2), t[_a[I2] + r2], Na(I2)), Ca[I2]), p3);
    i = p3, p3 = h2, h2 = Tr(o2, 10), o2 = n2, n2 = N2, N2 = Nf(Tr(If(b3, Bf(79 - I2, m2, w3, y3), t[Ba[I2] + r2], Ia(I2)), Ra$1[I2]), S2), b3 = S2, S2 = y3, y3 = Tr(w3, 10), w3 = m2, m2 = N2;
  }
  N2 = xr(this.h[1], o2, y3), this.h[1] = xr(this.h[2], h2, S2), this.h[2] = xr(this.h[3], p3, b3), this.h[3] = xr(this.h[4], i, m2), this.h[4] = xr(this.h[0], n2, w3), this.h[0] = N2;
}, pe.prototype._digest = function(t) {
  return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Bf(e, t, r2, i) {
  return e <= 15 ? t ^ r2 ^ i : e <= 31 ? t & r2 | ~t & i : e <= 47 ? (t | ~r2) ^ i : e <= 63 ? t & i | r2 & ~i : t ^ (r2 | ~i);
}
function Na(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Ba = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ca = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Ra$1 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Oa$1 = Q$1, Pa = yr;
function hr$1(e, t, r2) {
  if (!(this instanceof hr$1)) return new hr$1(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa$1.toArray(t, r2));
}
var Da$1 = hr$1;
hr$1.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++) t.push(0);
  for (r2 = 0; r2 < t.length; r2++) t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++) t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr$1.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr$1.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q$1, t.common = fr, t.sha = or, t.ripemd = Sf, t.hmac = Da$1, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr$1(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i, n2) {
    return Fa(i, n2 ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Fa() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r2, i) {
  if (t != r2) throw new Error(i || "Assertion failed: " + t + " != " + r2);
};
var fe = cr$1(function(e, t) {
  var r2 = t;
  function i(h2, p3) {
    if (Array.isArray(h2)) return h2.slice();
    if (!h2) return [];
    var b3 = [];
    if (typeof h2 != "string") {
      for (var m2 = 0; m2 < h2.length; m2++) b3[m2] = h2[m2] | 0;
      return b3;
    }
    if (p3 === "hex") {
      h2 = h2.replace(/[^a-z0-9]+/ig, ""), h2.length % 2 !== 0 && (h2 = "0" + h2);
      for (var m2 = 0; m2 < h2.length; m2 += 2) b3.push(parseInt(h2[m2] + h2[m2 + 1], 16));
    } else for (var m2 = 0; m2 < h2.length; m2++) {
      var w3 = h2.charCodeAt(m2), y3 = w3 >> 8, S2 = w3 & 255;
      y3 ? b3.push(y3, S2) : b3.push(S2);
    }
    return b3;
  }
  r2.toArray = i;
  function n2(h2) {
    return h2.length === 1 ? "0" + h2 : h2;
  }
  r2.zero2 = n2;
  function o2(h2) {
    for (var p3 = "", b3 = 0; b3 < h2.length; b3++) p3 += n2(h2[b3].toString(16));
    return p3;
  }
  r2.toHex = o2, r2.encode = function(p3, b3) {
    return b3 === "hex" ? o2(p3) : p3;
  };
}), Jt = cr$1(function(e, t) {
  var r2 = t;
  r2.assert = Pi, r2.toArray = fe.toArray, r2.zero2 = fe.zero2, r2.toHex = fe.toHex, r2.encode = fe.encode;
  function i(b3, m2, w3) {
    var y3 = new Array(Math.max(b3.bitLength(), w3) + 1);
    y3.fill(0);
    for (var S2 = 1 << m2 + 1, I2 = b3.clone(), N2 = 0; N2 < y3.length; N2++) {
      var C2, F2 = I2.andln(S2 - 1);
      I2.isOdd() ? (F2 > (S2 >> 1) - 1 ? C2 = (S2 >> 1) - F2 : C2 = F2, I2.isubn(C2)) : C2 = 0, y3[N2] = C2, I2.iushrn(1);
    }
    return y3;
  }
  r2.getNAF = i;
  function n2(b3, m2) {
    var w3 = [[], []];
    b3 = b3.clone(), m2 = m2.clone();
    for (var y3 = 0, S2 = 0, I2; b3.cmpn(-y3) > 0 || m2.cmpn(-S2) > 0; ) {
      var N2 = b3.andln(3) + y3 & 3, C2 = m2.andln(3) + S2 & 3;
      N2 === 3 && (N2 = -1), C2 === 3 && (C2 = -1);
      var F2;
      N2 & 1 ? (I2 = b3.andln(7) + y3 & 7, (I2 === 3 || I2 === 5) && C2 === 2 ? F2 = -N2 : F2 = N2) : F2 = 0, w3[0].push(F2);
      var U2;
      C2 & 1 ? (I2 = m2.andln(7) + S2 & 7, (I2 === 3 || I2 === 5) && N2 === 2 ? U2 = -C2 : U2 = C2) : U2 = 0, w3[1].push(U2), 2 * y3 === F2 + 1 && (y3 = 1 - y3), 2 * S2 === U2 + 1 && (S2 = 1 - S2), b3.iushrn(1), m2.iushrn(1);
    }
    return w3;
  }
  r2.getJSF = n2;
  function o2(b3, m2, w3) {
    var y3 = "_" + m2;
    b3.prototype[m2] = function() {
      return this[y3] !== void 0 ? this[y3] : this[y3] = w3.call(this);
    };
  }
  r2.cachedProperty = o2;
  function h2(b3) {
    return typeof b3 == "string" ? r2.toArray(b3, "hex") : b3;
  }
  r2.parseBytes = h2;
  function p3(b3) {
    return new K(b3, "hex", "le");
  }
  r2.intFromLE = p3;
}), Ur = Jt.getNAF, Ta$1 = Jt.getJSF, kr = Jt.assert;
function Ce(e, t) {
  this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r2) {
  kr(t.precomputed);
  var i = t._getDoubles(), n2 = Ur(r2, 1, this._bitLength), o2 = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
  o2 /= 3;
  var h2 = [], p3, b3;
  for (p3 = 0; p3 < n2.length; p3 += i.step) {
    b3 = 0;
    for (var m2 = p3 + i.step - 1; m2 >= p3; m2--) b3 = (b3 << 1) + n2[m2];
    h2.push(b3);
  }
  for (var w3 = this.jpoint(null, null, null), y3 = this.jpoint(null, null, null), S2 = o2; S2 > 0; S2--) {
    for (p3 = 0; p3 < h2.length; p3++) b3 = h2[p3], b3 === S2 ? y3 = y3.mixedAdd(i.points[p3]) : b3 === -S2 && (y3 = y3.mixedAdd(i.points[p3].neg()));
    w3 = w3.add(y3);
  }
  return w3.toP();
}, Ce.prototype._wnafMul = function(t, r2) {
  var i = 4, n2 = t._getNAFPoints(i);
  i = n2.wnd;
  for (var o2 = n2.points, h2 = Ur(r2, i, this._bitLength), p3 = this.jpoint(null, null, null), b3 = h2.length - 1; b3 >= 0; b3--) {
    for (var m2 = 0; b3 >= 0 && h2[b3] === 0; b3--) m2++;
    if (b3 >= 0 && m2++, p3 = p3.dblp(m2), b3 < 0) break;
    var w3 = h2[b3];
    kr(w3 !== 0), t.type === "affine" ? w3 > 0 ? p3 = p3.mixedAdd(o2[w3 - 1 >> 1]) : p3 = p3.mixedAdd(o2[-w3 - 1 >> 1].neg()) : w3 > 0 ? p3 = p3.add(o2[w3 - 1 >> 1]) : p3 = p3.add(o2[-w3 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p3.toP() : p3;
}, Ce.prototype._wnafMulAdd = function(t, r2, i, n2, o2) {
  var h2 = this._wnafT1, p3 = this._wnafT2, b3 = this._wnafT3, m2 = 0, w3, y3, S2;
  for (w3 = 0; w3 < n2; w3++) {
    S2 = r2[w3];
    var I2 = S2._getNAFPoints(t);
    h2[w3] = I2.wnd, p3[w3] = I2.points;
  }
  for (w3 = n2 - 1; w3 >= 1; w3 -= 2) {
    var N2 = w3 - 1, C2 = w3;
    if (h2[N2] !== 1 || h2[C2] !== 1) {
      b3[N2] = Ur(i[N2], h2[N2], this._bitLength), b3[C2] = Ur(i[C2], h2[C2], this._bitLength), m2 = Math.max(b3[N2].length, m2), m2 = Math.max(b3[C2].length, m2);
      continue;
    }
    var F2 = [r2[N2], null, null, r2[C2]];
    r2[N2].y.cmp(r2[C2].y) === 0 ? (F2[1] = r2[N2].add(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg())) : r2[N2].y.cmp(r2[C2].y.redNeg()) === 0 ? (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].add(r2[C2].neg())) : (F2[1] = r2[N2].toJ().mixedAdd(r2[C2]), F2[2] = r2[N2].toJ().mixedAdd(r2[C2].neg()));
    var U2 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta$1(i[N2], i[C2]);
    for (m2 = Math.max(J2[0].length, m2), b3[N2] = new Array(m2), b3[C2] = new Array(m2), y3 = 0; y3 < m2; y3++) {
      var Bt2 = J2[0][y3] | 0, G = J2[1][y3] | 0;
      b3[N2][y3] = U2[(Bt2 + 1) * 3 + (G + 1)], b3[C2][y3] = 0, p3[N2] = F2;
    }
  }
  var H = this.jpoint(null, null, null), z2 = this._wnafT4;
  for (w3 = m2; w3 >= 0; w3--) {
    for (var Pt2 = 0; w3 >= 0; ) {
      var W = true;
      for (y3 = 0; y3 < n2; y3++) z2[y3] = b3[y3][w3] | 0, z2[y3] !== 0 && (W = false);
      if (!W) break;
      Pt2++, w3--;
    }
    if (w3 >= 0 && Pt2++, H = H.dblp(Pt2), w3 < 0) break;
    for (y3 = 0; y3 < n2; y3++) {
      var Rt2 = z2[y3];
      Rt2 !== 0 && (Rt2 > 0 ? S2 = p3[y3][Rt2 - 1 >> 1] : Rt2 < 0 && (S2 = p3[y3][-Rt2 - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w3 = 0; w3 < n2; w3++) p3[w3] = null;
  return o2 ? H : H.toP();
};
function Xt(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt, Xt.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
    t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
    var n2 = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
    return n2;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", r2));
}, Xt.prototype.encode = function(t, r2) {
  return Jt.encode(this._encode(r2), t);
}, Xt.prototype.precompute = function(t) {
  if (this.precomputed) return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt.prototype._hasDoubles = function(t) {
  if (!this.precomputed) return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i = [this], n2 = this, o2 = 0; o2 < r2; o2 += t) {
    for (var h2 = 0; h2 < t; h2++) n2 = n2.dbl();
    i.push(n2);
  }
  return { step: t, points: i };
}, Xt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r2 = [this], i = (1 << t) - 1, n2 = i === 1 ? null : this.dbl(), o2 = 1; o2 < i; o2++) r2[o2] = r2[o2 - 1].add(n2);
  return { wnd: t, points: r2 };
}, Xt.prototype._getBeta = function() {
  return null;
}, Xt.prototype.dblp = function(t) {
  for (var r2 = this, i = 0; i < t; i++) r2 = r2.dbl();
  return r2;
};
var Di = cr$1(function(e) {
  typeof Object.create == "function" ? e.exports = function(r2, i) {
    i && (r2.super_ = i, r2.prototype = Object.create(i.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e.exports = function(r2, i) {
    if (i) {
      r2.super_ = i;
      var n2 = function() {
      };
      n2.prototype = i.prototype, r2.prototype = new n2(), r2.prototype.constructor = r2;
    }
  };
}), Ua = Jt.assert;
function Zt2(e) {
  Ze.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt2, Ze);
var ka = Zt2;
Zt2.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i;
    if (t.beta) r2 = new K(t.beta, 16).toRed(this.red);
    else {
      var n2 = this._getEndoRoots(this.p);
      r2 = n2[0].cmp(n2[1]) < 0 ? n2[0] : n2[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda) i = new K(t.lambda, 16);
    else {
      var o2 = this._getEndoRoots(this.n);
      this.g.mul(o2[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i = o2[0] : (i = o2[1], Ua(this.g.mul(i).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h2;
    return t.basis ? h2 = t.basis.map(function(p3) {
      return { a: new K(p3.a, 16), b: new K(p3.b, 16) };
    }) : h2 = this._getEndoBasis(i), { beta: r2, lambda: i, basis: h2 };
  }
}, Zt2.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K.mont(t), i = new K(2).toRed(r2).redInvm(), n2 = i.redNeg(), o2 = new K(3).toRed(r2).redNeg().redSqrt().redMul(i), h2 = n2.redAdd(o2).fromRed(), p3 = n2.redSub(o2).fromRed();
  return [h2, p3];
}, Zt2.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = t, n2 = this.n.clone(), o2 = new K(1), h2 = new K(0), p3 = new K(0), b3 = new K(1), m2, w3, y3, S2, I2, N2, C2, F2 = 0, U2, J2; i.cmpn(0) !== 0; ) {
    var Bt2 = n2.div(i);
    U2 = n2.sub(Bt2.mul(i)), J2 = p3.sub(Bt2.mul(o2));
    var G = b3.sub(Bt2.mul(h2));
    if (!y3 && U2.cmp(r2) < 0) m2 = C2.neg(), w3 = o2, y3 = U2.neg(), S2 = J2;
    else if (y3 && ++F2 === 2) break;
    C2 = U2, n2 = i, i = U2, p3 = o2, o2 = J2, b3 = h2, h2 = G;
  }
  I2 = U2.neg(), N2 = J2;
  var H = y3.sqr().add(S2.sqr()), z2 = I2.sqr().add(N2.sqr());
  return z2.cmp(H) >= 0 && (I2 = m2, N2 = w3), y3.negative && (y3 = y3.neg(), S2 = S2.neg()), I2.negative && (I2 = I2.neg(), N2 = N2.neg()), [{ a: y3, b: S2 }, { a: I2, b: N2 }];
}, Zt2.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i = r2[0], n2 = r2[1], o2 = n2.b.mul(t).divRound(this.n), h2 = i.b.neg().mul(t).divRound(this.n), p3 = o2.mul(i.a), b3 = h2.mul(n2.a), m2 = o2.mul(i.b), w3 = h2.mul(n2.b), y3 = t.sub(p3).sub(b3), S2 = m2.add(w3).neg();
  return { k1: y3, k2: S2 };
}, Zt2.prototype.pointFromX = function(t, r2) {
  t = new K(t, 16), t.red || (t = t.toRed(this.red));
  var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n2 = i.redSqrt();
  if (n2.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o2 = n2.fromRed().isOdd();
  return (r2 && !o2 || !r2 && o2) && (n2 = n2.redNeg()), this.point(t, n2);
}, Zt2.prototype.validate = function(t) {
  if (t.inf) return true;
  var r2 = t.x, i = t.y, n2 = this.a.redMul(r2), o2 = r2.redSqr().redMul(r2).redIAdd(n2).redIAdd(this.b);
  return i.redSqr().redISub(o2).cmpn(0) === 0;
}, Zt2.prototype._endoWnafMulAdd = function(t, r2, i) {
  for (var n2 = this._endoWnafT1, o2 = this._endoWnafT2, h2 = 0; h2 < t.length; h2++) {
    var p3 = this._endoSplit(r2[h2]), b3 = t[h2], m2 = b3._getBeta();
    p3.k1.negative && (p3.k1.ineg(), b3 = b3.neg(true)), p3.k2.negative && (p3.k2.ineg(), m2 = m2.neg(true)), n2[h2 * 2] = b3, n2[h2 * 2 + 1] = m2, o2[h2 * 2] = p3.k1, o2[h2 * 2 + 1] = p3.k2;
  }
  for (var w3 = this._wnafMulAdd(1, n2, o2, h2 * 2, i), y3 = 0; y3 < h2 * 2; y3++) n2[y3] = null, o2[y3] = null;
  return w3;
};
function Ft(e, t, r2, i) {
  Ze.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K(t, 16), this.y = new K(r2, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di(Ft, Ze.BasePoint), Zt2.prototype.point = function(t, r2, i) {
  return new Ft(this, t, r2, i);
}, Zt2.prototype.pointFromJSON = function(t, r2) {
  return Ft.fromJSON(this, t, r2);
}, Ft.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i = this.curve, n2 = function(o2) {
        return i.point(o2.x.redMul(i.endo.beta), o2.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n2) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n2) } };
    }
    return r2;
  }
}, Ft.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft.fromJSON = function(t, r2, i) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n2 = t.point(r2[0], r2[1], i);
  if (!r2[2]) return n2;
  function o2(p3) {
    return t.point(p3[0], p3[1], i);
  }
  var h2 = r2[2];
  return n2.precomputed = { beta: null, doubles: h2.doubles && { step: h2.doubles.step, points: [n2].concat(h2.doubles.points.map(o2)) }, naf: h2.naf && { wnd: h2.naf.wnd, points: [n2].concat(h2.naf.points.map(o2)) } }, n2;
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.inf;
}, Ft.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i = r2.redSqr().redISub(this.x).redISub(t.x), n2 = r2.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, n2);
}, Ft.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var r2 = this.curve.a, i = this.x.redSqr(), n2 = t.redInvm(), o2 = i.redAdd(i).redIAdd(i).redIAdd(r2).redMul(n2), h2 = o2.redSqr().redISub(this.x.redAdd(this.x)), p3 = o2.redMul(this.x.redSub(h2)).redISub(this.y);
  return this.curve.point(h2, p3);
}, Ft.prototype.getX = function() {
  return this.x.fromRed();
}, Ft.prototype.getY = function() {
  return this.y.fromRed();
}, Ft.prototype.mul = function(t) {
  return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft.prototype.mulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2) : this.curve._wnafMulAdd(1, n2, o2, 2);
}, Ft.prototype.jmulAdd = function(t, r2, i) {
  var n2 = [this, r2], o2 = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2, true) : this.curve._wnafMulAdd(1, n2, o2, 2, true);
}, Ft.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft.prototype.neg = function(t) {
  if (this.inf) return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i = this.precomputed, n2 = function(o2) {
      return o2.neg();
    };
    r2.precomputed = { naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(n2) }, doubles: i.doubles && { step: i.doubles.step, points: i.doubles.points.map(n2) } };
  }
  return r2;
}, Ft.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt(e, t, r2, i) {
  Ze.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r2, 16), this.z = new K(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt, Ze.BasePoint), Zt2.prototype.jpoint = function(t, r2, i) {
  return new Tt(this, t, r2, i);
}, Tt.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i = this.x.redMul(r2), n2 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i, n2);
}, Tt.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var r2 = t.z.redSqr(), i = this.z.redSqr(), n2 = this.x.redMul(r2), o2 = t.x.redMul(i), h2 = this.y.redMul(r2.redMul(t.z)), p3 = t.y.redMul(i.redMul(this.z)), b3 = n2.redSub(o2), m2 = h2.redSub(p3);
  if (b3.cmpn(0) === 0) return m2.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w3 = b3.redSqr(), y3 = w3.redMul(b3), S2 = n2.redMul(w3), I2 = m2.redSqr().redIAdd(y3).redISub(S2).redISub(S2), N2 = m2.redMul(S2.redISub(I2)).redISub(h2.redMul(y3)), C2 = this.z.redMul(t.z).redMul(b3);
  return this.curve.jpoint(I2, N2, C2);
}, Tt.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var r2 = this.z.redSqr(), i = this.x, n2 = t.x.redMul(r2), o2 = this.y, h2 = t.y.redMul(r2).redMul(this.z), p3 = i.redSub(n2), b3 = o2.redSub(h2);
  if (p3.cmpn(0) === 0) return b3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m2 = p3.redSqr(), w3 = m2.redMul(p3), y3 = i.redMul(m2), S2 = b3.redSqr().redIAdd(w3).redISub(y3).redISub(y3), I2 = b3.redMul(y3.redISub(S2)).redISub(o2.redMul(w3)), N2 = this.z.redMul(p3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt.prototype.dblp = function(t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (r2 = 0; r2 < t; r2++) i = i.dbl();
    return i;
  }
  var n2 = this.curve.a, o2 = this.curve.tinv, h2 = this.x, p3 = this.y, b3 = this.z, m2 = b3.redSqr().redSqr(), w3 = p3.redAdd(p3);
  for (r2 = 0; r2 < t; r2++) {
    var y3 = h2.redSqr(), S2 = w3.redSqr(), I2 = S2.redSqr(), N2 = y3.redAdd(y3).redIAdd(y3).redIAdd(n2.redMul(m2)), C2 = h2.redMul(S2), F2 = N2.redSqr().redISub(C2.redAdd(C2)), U2 = C2.redISub(F2), J2 = N2.redMul(U2);
    J2 = J2.redIAdd(J2).redISub(I2);
    var Bt2 = w3.redMul(b3);
    r2 + 1 < t && (m2 = m2.redMul(I2)), h2 = F2, b3 = Bt2, w3 = J2;
  }
  return this.curve.jpoint(h2, w3.redMul(o2), b3);
}, Tt.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt.prototype._zeroDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2), m2 = b3.redSqr().redISub(p3).redISub(p3), w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), t = m2, r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.x.redSqr(), S2 = this.y.redSqr(), I2 = S2.redSqr(), N2 = this.x.redAdd(S2).redSqr().redISub(y3).redISub(I2);
    N2 = N2.redIAdd(N2);
    var C2 = y3.redAdd(y3).redIAdd(y3), F2 = C2.redSqr(), U2 = I2.redIAdd(I2);
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), t = F2.redISub(N2).redISub(N2), r2 = C2.redMul(N2.redISub(t)).redISub(U2), i = this.y.redMul(this.z), i = i.redIAdd(i);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt.prototype._threeDbl = function() {
  var t, r2, i;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h2 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h2);
    p3 = p3.redIAdd(p3);
    var b3 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), m2 = b3.redSqr().redISub(p3).redISub(p3);
    t = m2;
    var w3 = h2.redIAdd(h2);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), r2 = b3.redMul(p3.redISub(m2)).redISub(w3), i = this.y.redAdd(this.y);
  } else {
    var y3 = this.z.redSqr(), S2 = this.y.redSqr(), I2 = this.x.redMul(S2), N2 = this.x.redSub(y3).redMul(this.x.redAdd(y3));
    N2 = N2.redAdd(N2).redIAdd(N2);
    var C2 = I2.redIAdd(I2);
    C2 = C2.redIAdd(C2);
    var F2 = C2.redAdd(C2);
    t = N2.redSqr().redISub(F2), i = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y3);
    var U2 = S2.redSqr();
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), r2 = N2.redMul(C2.redISub(t)).redISub(U2);
  }
  return this.curve.jpoint(t, r2, i);
}, Tt.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i = this.y, n2 = this.z, o2 = n2.redSqr().redSqr(), h2 = r2.redSqr(), p3 = i.redSqr(), b3 = h2.redAdd(h2).redIAdd(h2).redIAdd(t.redMul(o2)), m2 = r2.redAdd(r2);
  m2 = m2.redIAdd(m2);
  var w3 = m2.redMul(p3), y3 = b3.redSqr().redISub(w3.redAdd(w3)), S2 = w3.redISub(y3), I2 = p3.redSqr();
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = b3.redMul(S2).redISub(I2), C2 = i.redAdd(i).redMul(n2);
  return this.curve.jpoint(y3, N2, C2);
}, Tt.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i = this.z.redSqr(), n2 = r2.redSqr(), o2 = t.redAdd(t).redIAdd(t), h2 = o2.redSqr(), p3 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n2);
  p3 = p3.redIAdd(p3), p3 = p3.redAdd(p3).redIAdd(p3), p3 = p3.redISub(h2);
  var b3 = p3.redSqr(), m2 = n2.redIAdd(n2);
  m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2), m2 = m2.redIAdd(m2);
  var w3 = o2.redIAdd(p3).redSqr().redISub(h2).redISub(b3).redISub(m2), y3 = r2.redMul(w3);
  y3 = y3.redIAdd(y3), y3 = y3.redIAdd(y3);
  var S2 = this.x.redMul(b3).redISub(y3);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var I2 = this.y.redMul(w3.redMul(m2.redISub(w3)).redISub(p3.redMul(b3)));
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = this.z.redAdd(p3).redSqr().redISub(i).redISub(b3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt.prototype.mul = function(t, r2) {
  return t = new K(t, r2), this.curve._wnafMul(this, t);
}, Tt.prototype.eq = function(t) {
  if (t.type === "affine") return this.eq(t.toJ());
  if (this === t) return true;
  var r2 = this.z.redSqr(), i = t.z.redSqr();
  if (this.x.redMul(i).redISub(t.x.redMul(r2)).cmpn(0) !== 0) return false;
  var n2 = r2.redMul(this.z), o2 = i.redMul(t.z);
  return this.y.redMul(o2).redISub(t.y.redMul(n2)).cmpn(0) === 0;
}, Tt.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i) === 0) return true;
  for (var n2 = t.clone(), o2 = this.curve.redN.redMul(r2); ; ) {
    if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0) return false;
    if (i.redIAdd(o2), this.x.cmp(i) === 0) return true;
  }
}, Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr = cr$1(function(e, t) {
  var r2 = t;
  r2.base = Ze, r2.short = ka, r2.mont = null, r2.edwards = null;
}), Kr = cr$1(function(e, t) {
  var r2 = t, i = Jt.assert;
  function n2(p3) {
    p3.type === "short" ? this.curve = new qr.short(p3) : p3.type === "edwards" ? this.curve = new qr.edwards(p3) : this.curve = new qr.mont(p3), this.g = this.curve.g, this.n = this.curve.n, this.hash = p3.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n2;
  function o2(p3, b3) {
    Object.defineProperty(r2, p3, { configurable: true, enumerable: true, get: function() {
      var m2 = new n2(b3);
      return Object.defineProperty(r2, p3, { configurable: true, enumerable: true, value: m2 }), m2;
    } });
  }
  o2("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o2("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o2("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o2("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o2("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o2("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o2("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h2;
  try {
    h2 = null.crash();
  } catch {
    h2 = void 0;
  }
  o2("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h2] });
});
function Re(e) {
  if (!(this instanceof Re)) return new Re(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe.toArray(e.entropy, e.entropyEnc || "hex"), r2 = fe.toArray(e.nonce, e.nonceEnc || "hex"), i = fe.toArray(e.pers, e.persEnc || "hex");
  Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i);
}
var Rf = Re;
Re.prototype._init = function(t, r2, i) {
  var n2 = t.concat(r2).concat(i);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o2 = 0; o2 < this.V.length; o2++) this.K[o2] = 0, this.V[o2] = 1;
  this._update(n2), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r2, i, n2) {
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), t = fe.toArray(t, r2), i = fe.toArray(i, n2), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r2, i, n2) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r2 != "string" && (n2 = i, i = r2, r2 = null), i && (i = fe.toArray(i, n2 || "hex"), this._update(i));
  for (var o2 = []; o2.length < t; ) this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
  var h2 = o2.slice(0, t);
  return this._update(i), this._reseed++, fe.encode(h2, r2);
};
var Fi$1 = Jt.assert;
function kt2(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt2;
kt2.fromPublic = function(t, r2, i) {
  return r2 instanceof kt2 ? r2 : new kt2(t, { pub: r2, pubEnc: i });
}, kt2.fromPrivate = function(t, r2, i) {
  return r2 instanceof kt2 ? r2 : new kt2(t, { priv: r2, privEnc: i });
}, kt2.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt2.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt2.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt2.prototype._importPrivate = function(t, r2) {
  this.priv = new K(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt2.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi$1(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi$1(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt2.prototype.derive = function(t) {
  return t.validate() || Fi$1(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt2.prototype.sign = function(t, r2, i) {
  return this.ec.sign(t, this, r2, i);
}, kt2.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt2.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt.assert;
function Hr(e, t) {
  if (e instanceof Hr) return e;
  this._importDER(e, t) || (qa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr = Hr;
function Ka() {
  this.place = 0;
}
function Ui$1(e, t) {
  var r2 = e[t.place++];
  if (!(r2 & 128)) return r2;
  var i = r2 & 15;
  if (i === 0 || i > 4) return false;
  for (var n2 = 0, o2 = 0, h2 = t.place; o2 < i; o2++, h2++) n2 <<= 8, n2 |= e[h2], n2 >>>= 0;
  return n2 <= 127 ? false : (t.place = h2, n2);
}
function Of(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; ) t++;
  return t === 0 ? e : e.slice(t);
}
Hr.prototype._importDER = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i = new Ka();
  if (t[i.place++] !== 48) return false;
  var n2 = Ui$1(t, i);
  if (n2 === false || n2 + i.place !== t.length || t[i.place++] !== 2) return false;
  var o2 = Ui$1(t, i);
  if (o2 === false) return false;
  var h2 = t.slice(i.place, o2 + i.place);
  if (i.place += o2, t[i.place++] !== 2) return false;
  var p3 = Ui$1(t, i);
  if (p3 === false || t.length !== p3 + i.place) return false;
  var b3 = t.slice(i.place, p3 + i.place);
  if (h2[0] === 0) if (h2[1] & 128) h2 = h2.slice(1);
  else return false;
  if (b3[0] === 0) if (b3[1] & 128) b3 = b3.slice(1);
  else return false;
  return this.r = new K(h2), this.s = new K(b3), this.recoveryParam = null, true;
};
function ki(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; ) e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Hr.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i[0] & 128 && (i = [0].concat(i)), r2 = Of(r2), i = Of(i); !i[0] && !(i[1] & 128); ) i = i.slice(1);
  var n2 = [2];
  ki(n2, r2.length), n2 = n2.concat(r2), n2.push(2), ki(n2, i.length);
  var o2 = n2.concat(i), h2 = [48];
  return ki(h2, o2.length), h2 = h2.concat(o2), Jt.encode(h2, t);
};
var Ha = function() {
  throw new Error("unsupported");
}, Pf = Jt.assert;
function $t(e) {
  if (!(this instanceof $t)) return new $t(e);
  typeof e == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e), "Unknown curve " + e), e = Kr[e]), e instanceof Kr.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za = $t;
$t.prototype.keyPair = function(t) {
  return new Ti(this, t);
}, $t.prototype.keyFromPrivate = function(t, r2) {
  return Ti.fromPrivate(this, t, r2);
}, $t.prototype.keyFromPublic = function(t, r2) {
  return Ti.fromPublic(this, t, r2);
}, $t.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i = this.n.byteLength(), n2 = this.n.sub(new K(2)); ; ) {
    var o2 = new K(r2.generate(i));
    if (!(o2.cmp(n2) > 0)) return o2.iaddn(1), this.keyFromPrivate(o2);
  }
}, $t.prototype._truncateToN = function(t, r2) {
  var i = t.byteLength() * 8 - this.n.bitLength();
  return i > 0 && (t = t.ushrn(i)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t.prototype.sign = function(t, r2, i, n2) {
  typeof i == "object" && (n2 = i, i = null), n2 || (n2 = {}), r2 = this.keyFromPrivate(r2, i), t = this._truncateToN(new K(t, 16));
  for (var o2 = this.n.byteLength(), h2 = r2.getPrivate().toArray("be", o2), p3 = t.toArray("be", o2), b3 = new Rf({ hash: this.hash, entropy: h2, nonce: p3, pers: n2.pers, persEnc: n2.persEnc || "utf8" }), m2 = this.n.sub(new K(1)), w3 = 0; ; w3++) {
    var y3 = n2.k ? n2.k(w3) : new K(b3.generate(this.n.byteLength()));
    if (y3 = this._truncateToN(y3, true), !(y3.cmpn(1) <= 0 || y3.cmp(m2) >= 0)) {
      var S2 = this.g.mul(y3);
      if (!S2.isInfinity()) {
        var I2 = S2.getX(), N2 = I2.umod(this.n);
        if (N2.cmpn(0) !== 0) {
          var C2 = y3.invm(this.n).mul(N2.mul(r2.getPrivate()).iadd(t));
          if (C2 = C2.umod(this.n), C2.cmpn(0) !== 0) {
            var F2 = (S2.getY().isOdd() ? 1 : 0) | (I2.cmp(N2) !== 0 ? 2 : 0);
            return n2.canonical && C2.cmp(this.nh) > 0 && (C2 = this.n.sub(C2), F2 ^= 1), new zr({ r: N2, s: C2, recoveryParam: F2 });
          }
        }
      }
    }
  }
}, $t.prototype.verify = function(t, r2, i, n2) {
  t = this._truncateToN(new K(t, 16)), i = this.keyFromPublic(i, n2), r2 = new zr(r2, "hex");
  var o2 = r2.r, h2 = r2.s;
  if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0 || h2.cmpn(1) < 0 || h2.cmp(this.n) >= 0) return false;
  var p3 = h2.invm(this.n), b3 = p3.mul(t).umod(this.n), m2 = p3.mul(o2).umod(this.n), w3;
  return this.curve._maxwellTrick ? (w3 = this.g.jmulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.eqXToP(o2)) : (w3 = this.g.mulAdd(b3, i.getPublic(), m2), w3.isInfinity() ? false : w3.getX().umod(this.n).cmp(o2) === 0);
}, $t.prototype.recoverPubKey = function(e, t, r2, i) {
  Pf((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr(t, i);
  var n2 = this.n, o2 = new K(e), h2 = t.r, p3 = t.s, b3 = r2 & 1, m2 = r2 >> 1;
  if (h2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m2) throw new Error("Unable to find sencond key candinate");
  m2 ? h2 = this.curve.pointFromX(h2.add(this.curve.n), b3) : h2 = this.curve.pointFromX(h2, b3);
  var w3 = t.r.invm(n2), y3 = n2.sub(o2).mul(w3).umod(n2), S2 = p3.mul(w3).umod(n2);
  return this.g.mulAdd(y3, h2, S2);
}, $t.prototype.getKeyRecoveryParam = function(e, t, r2, i) {
  if (t = new zr(t, i), t.recoveryParam !== null) return t.recoveryParam;
  for (var n2 = 0; n2 < 4; n2++) {
    var o2;
    try {
      o2 = this.recoverPubKey(e, t, n2);
    } catch {
      continue;
    }
    if (o2.eq(r2)) return n2;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La$1 = cr$1(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr, r2.curves = Kr, r2.ec = za, r2.eddsa = null;
});
La$1.ec;
var Ff;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));
function Zi(e) {
  return e.includes(":");
}
function vo(e) {
  return Zi(e) ? e.split(":")[0] : e;
}
const go = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function tr(e, t) {
  const { message: r2, code: i } = go[e];
  return { message: t ? `${r2} ${t}` : r2, code: i };
}
function Er(e, t) {
  return Array.isArray(e) ? true : false;
}
function Yr(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var global2 = typeof self !== "undefined" ? self : commonjsGlobal;
  var __self__ = function() {
    function F2() {
      this.fetch = false;
      this.DOMException = global2.DOMException;
    }
    F2.prototype = global2;
    return new F2();
  }();
  (function(self2) {
    (function(exports2) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = self2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports2.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch2;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__self__);
  __self__.fetch.ponyfill = true;
  delete __self__.fetch.polyfill;
  var ctx = __self__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
var browserPonyfillExports = browserPonyfill.exports;
const o = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports);
var P = Object.defineProperty, w2 = Object.defineProperties, E$1 = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, L$1 = Object.prototype.hasOwnProperty, O$1 = Object.prototype.propertyIsEnumerable, l = (r2, t, e) => t in r2 ? P(r2, t, { enumerable: true, configurable: true, writable: true, value: e }) : r2[t] = e, p$1 = (r2, t) => {
  for (var e in t || (t = {})) L$1.call(t, e) && l(r2, e, t[e]);
  if (c) for (var e of c(t)) O$1.call(t, e) && l(r2, e, t[e]);
  return r2;
}, v$1 = (r2, t) => w2(r2, E$1(t));
const j$1 = { Accept: "application/json", "Content-Type": "application/json" }, T$1 = "POST", d2 = { headers: j$1, method: T$1 }, g$1 = 10;
class f {
  constructor(t, e = false) {
    if (this.url = t, this.disableProviderPing = e, this.events = new eventsExports.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e = safeJsonStringify(t), s = await (await o(this.url, v$1(p$1({}, d2), { body: e }))).json();
      this.onPayload({ data: s });
    } catch (e) {
      this.onError(t.id, e);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((s, i) => {
        this.events.once("register_error", (n2) => {
          this.resetMaxListeners(), i(n2);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i(new Error("HTTP connection is missing or invalid"));
          s();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await o(t, v$1(p$1({}, d2), { body: e }));
      }
      this.onOpen();
    } catch (e) {
      const s = this.parseError(e);
      throw this.events.emit("register_error", s), this.onClose(), s;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const e = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e);
  }
  onError(t, e) {
    const s = this.parseError(e), i = s.message || s.toString(), n2 = formatJsonRpcError(t, i);
    this.events.emit("payload", n2);
  }
  parseError(t, e = this.url) {
    return parseConnectionError(t, e, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g$1 && this.events.setMaxListeners(g$1);
  }
}
class JsonRpcProvider2 extends r {
  constructor(connection) {
    super(connection);
    this.events = new eventsExports.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
}
const xa = "error", Mg = "wss://relay.walletconnect.com", qg = "wc", Bg = "universal_provider", Ea = `${qg}@2:${Bg}:`, Gg = "https://rpc.walletconnect.com/v1/", Vn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(A2, u3) {
  (function() {
    var i, p3 = "4.17.21", w3 = 200, b3 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D2 = "Expected a function", En2 = "Invalid `variable` option passed into `_.template`", zt2 = "__lodash_hash_undefined__", pr2 = 500, It2 = "__lodash_placeholder__", Ln2 = 1, Fn2 = 2, xt2 = 4, Et2 = 1, ve2 = 2, vn = 1, ct2 = 2, Bi2 = 4, Dn2 = 8, yt2 = 16, Nn2 = 32, St2 = 64, Mn = 128, Kt2 = 256, dr4 = 512, Na2 = 30, Ha2 = "...", $a2 = 800, Ua2 = 16, Gi2 = 1, Wa2 = 2, Fa2 = 3, ht2 = 1 / 0, kn2 = 9007199254740991, Ma2 = 17976931348623157e292, _e2 = 0 / 0, Hn2 = 4294967295, qa2 = Hn2 - 1, Ba2 = Hn2 >>> 1, Ga2 = [["ary", Mn], ["bind", vn], ["bindKey", ct2], ["curry", Dn2], ["curryRight", yt2], ["flip", dr4], ["partial", Nn2], ["partialRight", St2], ["rearg", Kt2]], Ot3 = "[object Arguments]", me2 = "[object Array]", za2 = "[object AsyncFunction]", Yt3 = "[object Boolean]", Zt3 = "[object Date]", Ka2 = "[object DOMException]", we2 = "[object Error]", Pe2 = "[object Function]", zi2 = "[object GeneratorFunction]", yn2 = "[object Map]", Jt2 = "[object Number]", Ya = "[object Null]", qn2 = "[object Object]", Ki2 = "[object Promise]", Za2 = "[object Proxy]", Xt2 = "[object RegExp]", Sn2 = "[object Set]", Qt2 = "[object String]", Ae2 = "[object Symbol]", Ja2 = "[object Undefined]", Vt2 = "[object WeakMap]", Xa2 = "[object WeakSet]", kt3 = "[object ArrayBuffer]", Rt2 = "[object DataView]", gr2 = "[object Float32Array]", vr2 = "[object Float64Array]", _r2 = "[object Int8Array]", mr2 = "[object Int16Array]", wr2 = "[object Int32Array]", Pr2 = "[object Uint8Array]", Ar2 = "[object Uint8ClampedArray]", Cr3 = "[object Uint16Array]", Ir3 = "[object Uint32Array]", Qa2 = /\b__p \+= '';/g, Va2 = /\b(__p \+=) '' \+/g, ka2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi2 = /&(?:amp|lt|gt|quot|#39);/g, Zi2 = /[&<>"']/g, ja2 = RegExp(Yi2.source), no2 = RegExp(Zi2.source), to2 = /<%-([\s\S]+?)%>/g, eo2 = /<%([\s\S]+?)%>/g, Ji2 = /<%=([\s\S]+?)%>/g, ro2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, io2 = /^\w*$/, so2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr2 = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(xr2.source), Er2 = /^\s+/, ao2 = /\s/, oo2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fo2 = /\{\n\/\* \[wrapped with (.+)\] \*/, co2 = /,? & /, ho = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lo2 = /[()=,{}\[\]\/\s]/, po2 = /\\(\\)?/g, go2 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xi2 = /\w*$/, vo2 = /^[-+]0x[0-9a-f]+$/i, _o2 = /^0b[01]+$/i, mo2 = /^\[object .+?Constructor\]$/, wo2 = /^0o[0-7]+$/i, Po2 = /^(?:0|[1-9]\d*)$/, Ao2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Co2 = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Io2 = "\\u0300-\\u036f", xo2 = "\\ufe20-\\ufe2f", Eo2 = "\\u20d0-\\u20ff", Qi2 = Io2 + xo2 + Eo2, Vi2 = "\\u2700-\\u27bf", ki2 = "a-z\\xdf-\\xf6\\xf8-\\xff", yo2 = "\\xac\\xb1\\xd7\\xf7", So2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oo2 = "\\u2000-\\u206f", Ro2 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ji2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ns2 = "\\ufe0e\\ufe0f", ts3 = yo2 + So2 + Oo2 + Ro2, yr2 = "['’]", bo2 = "[" + Ie + "]", es3 = "[" + ts3 + "]", xe2 = "[" + Qi2 + "]", rs2 = "\\d+", To = "[" + Vi2 + "]", is3 = "[" + ki2 + "]", ss4 = "[^" + Ie + ts3 + rs2 + Vi2 + ki2 + ji2 + "]", Sr2 = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + xe2 + "|" + Sr2 + ")", us2 = "[^" + Ie + "]", Or2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt2 = "[" + ji2 + "]", as2 = "\\u200d", os2 = "(?:" + is3 + "|" + ss4 + ")", Do = "(?:" + bt2 + "|" + ss4 + ")", fs2 = "(?:" + yr2 + "(?:d|ll|m|re|s|t|ve))?", cs2 = "(?:" + yr2 + "(?:D|LL|M|RE|S|T|VE))?", hs2 = Lo + "?", ls2 = "[" + ns2 + "]?", No2 = "(?:" + as2 + "(?:" + [us2, Or2, Rr2].join("|") + ")" + ls2 + hs2 + ")*", Ho = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $o2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ps2 = ls2 + hs2 + No2, Uo = "(?:" + [To, Or2, Rr2].join("|") + ")" + ps2, Wo2 = "(?:" + [us2 + xe2 + "?", xe2, Or2, Rr2, bo2].join("|") + ")", Fo = RegExp(yr2, "g"), Mo2 = RegExp(xe2, "g"), br2 = RegExp(Sr2 + "(?=" + Sr2 + ")|" + Wo2 + ps2, "g"), qo = RegExp([bt2 + "?" + is3 + "+" + fs2 + "(?=" + [es3, bt2, "$"].join("|") + ")", Do + "+" + cs2 + "(?=" + [es3, bt2 + os2, "$"].join("|") + ")", bt2 + "?" + os2 + "+" + fs2, bt2 + "+" + cs2, $o2, Ho, rs2, Uo].join("|"), "g"), Bo2 = RegExp("[" + as2 + Ie + Qi2 + ns2 + "]"), Go2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zo2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ko = -1, B = {};
    B[gr2] = B[vr2] = B[_r2] = B[mr2] = B[wr2] = B[Pr2] = B[Ar2] = B[Cr3] = B[Ir3] = true, B[Ot3] = B[me2] = B[kt3] = B[Yt3] = B[Rt2] = B[Zt3] = B[we2] = B[Pe2] = B[yn2] = B[Jt2] = B[qn2] = B[Xt2] = B[Sn2] = B[Qt2] = B[Vt2] = false;
    var q2 = {};
    q2[Ot3] = q2[me2] = q2[kt3] = q2[Rt2] = q2[Yt3] = q2[Zt3] = q2[gr2] = q2[vr2] = q2[_r2] = q2[mr2] = q2[wr2] = q2[yn2] = q2[Jt2] = q2[qn2] = q2[Xt2] = q2[Sn2] = q2[Qt2] = q2[Ae2] = q2[Pr2] = q2[Ar2] = q2[Cr3] = q2[Ir3] = true, q2[we2] = q2[Pe2] = q2[Vt2] = false;
    var Yo = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Zo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jo2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Xo2 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qo2 = parseFloat, Vo = parseInt, ds2 = typeof ge == "object" && ge && ge.Object === Object && ge, ko = typeof self == "object" && self && self.Object === Object && self, k2 = ds2 || ko || Function("return this")(), Tr2 = u3 && !u3.nodeType && u3, lt2 = Tr2 && true && A2 && !A2.nodeType && A2, gs2 = lt2 && lt2.exports === Tr2, Lr2 = gs2 && ds2.process, _n2 = function() {
      try {
        var h2 = lt2 && lt2.require && lt2.require("util").types;
        return h2 || Lr2 && Lr2.binding && Lr2.binding("util");
      } catch {
      }
    }(), vs2 = _n2 && _n2.isArrayBuffer, _s2 = _n2 && _n2.isDate, ms2 = _n2 && _n2.isMap, ws2 = _n2 && _n2.isRegExp, Ps2 = _n2 && _n2.isSet, As2 = _n2 && _n2.isTypedArray;
    function cn(h2, g3, d3) {
      switch (d3.length) {
        case 0:
          return h2.call(g3);
        case 1:
          return h2.call(g3, d3[0]);
        case 2:
          return h2.call(g3, d3[0], d3[1]);
        case 3:
          return h2.call(g3, d3[0], d3[1], d3[2]);
      }
      return h2.apply(g3, d3);
    }
    function jo(h2, g3, d3, C2) {
      for (var S2 = -1, U2 = h2 == null ? 0 : h2.length; ++S2 < U2; ) {
        var X2 = h2[S2];
        g3(C2, X2, d3(X2), h2);
      }
      return C2;
    }
    function mn(h2, g3) {
      for (var d3 = -1, C2 = h2 == null ? 0 : h2.length; ++d3 < C2 && g3(h2[d3], d3, h2) !== false; ) ;
      return h2;
    }
    function nf2(h2, g3) {
      for (var d3 = h2 == null ? 0 : h2.length; d3-- && g3(h2[d3], d3, h2) !== false; ) ;
      return h2;
    }
    function Cs2(h2, g3) {
      for (var d3 = -1, C2 = h2 == null ? 0 : h2.length; ++d3 < C2; ) if (!g3(h2[d3], d3, h2)) return false;
      return true;
    }
    function jn2(h2, g3) {
      for (var d3 = -1, C2 = h2 == null ? 0 : h2.length, S2 = 0, U2 = []; ++d3 < C2; ) {
        var X2 = h2[d3];
        g3(X2, d3, h2) && (U2[S2++] = X2);
      }
      return U2;
    }
    function Ee2(h2, g3) {
      var d3 = h2 == null ? 0 : h2.length;
      return !!d3 && Tt2(h2, g3, 0) > -1;
    }
    function Dr2(h2, g3, d3) {
      for (var C2 = -1, S2 = h2 == null ? 0 : h2.length; ++C2 < S2; ) if (d3(g3, h2[C2])) return true;
      return false;
    }
    function G(h2, g3) {
      for (var d3 = -1, C2 = h2 == null ? 0 : h2.length, S2 = Array(C2); ++d3 < C2; ) S2[d3] = g3(h2[d3], d3, h2);
      return S2;
    }
    function nt2(h2, g3) {
      for (var d3 = -1, C2 = g3.length, S2 = h2.length; ++d3 < C2; ) h2[S2 + d3] = g3[d3];
      return h2;
    }
    function Nr2(h2, g3, d3, C2) {
      var S2 = -1, U2 = h2 == null ? 0 : h2.length;
      for (C2 && U2 && (d3 = h2[++S2]); ++S2 < U2; ) d3 = g3(d3, h2[S2], S2, h2);
      return d3;
    }
    function tf(h2, g3, d3, C2) {
      var S2 = h2 == null ? 0 : h2.length;
      for (C2 && S2 && (d3 = h2[--S2]); S2--; ) d3 = g3(d3, h2[S2], S2, h2);
      return d3;
    }
    function Hr2(h2, g3) {
      for (var d3 = -1, C2 = h2 == null ? 0 : h2.length; ++d3 < C2; ) if (g3(h2[d3], d3, h2)) return true;
      return false;
    }
    var ef2 = $r2("length");
    function rf2(h2) {
      return h2.split("");
    }
    function sf2(h2) {
      return h2.match(ho) || [];
    }
    function Is2(h2, g3, d3) {
      var C2;
      return d3(h2, function(S2, U2, X2) {
        if (g3(S2, U2, X2)) return C2 = U2, false;
      }), C2;
    }
    function ye2(h2, g3, d3, C2) {
      for (var S2 = h2.length, U2 = d3 + (C2 ? 1 : -1); C2 ? U2-- : ++U2 < S2; ) if (g3(h2[U2], U2, h2)) return U2;
      return -1;
    }
    function Tt2(h2, g3, d3) {
      return g3 === g3 ? _f2(h2, g3, d3) : ye2(h2, xs2, d3);
    }
    function uf2(h2, g3, d3, C2) {
      for (var S2 = d3 - 1, U2 = h2.length; ++S2 < U2; ) if (C2(h2[S2], g3)) return S2;
      return -1;
    }
    function xs2(h2) {
      return h2 !== h2;
    }
    function Es2(h2, g3) {
      var d3 = h2 == null ? 0 : h2.length;
      return d3 ? Wr(h2, g3) / d3 : _e2;
    }
    function $r2(h2) {
      return function(g3) {
        return g3 == null ? i : g3[h2];
      };
    }
    function Ur2(h2) {
      return function(g3) {
        return h2 == null ? i : h2[g3];
      };
    }
    function ys2(h2, g3, d3, C2, S2) {
      return S2(h2, function(U2, X2, M2) {
        d3 = C2 ? (C2 = false, U2) : g3(d3, U2, X2, M2);
      }), d3;
    }
    function af2(h2, g3) {
      var d3 = h2.length;
      for (h2.sort(g3); d3--; ) h2[d3] = h2[d3].value;
      return h2;
    }
    function Wr(h2, g3) {
      for (var d3, C2 = -1, S2 = h2.length; ++C2 < S2; ) {
        var U2 = g3(h2[C2]);
        U2 !== i && (d3 = d3 === i ? U2 : d3 + U2);
      }
      return d3;
    }
    function Fr2(h2, g3) {
      for (var d3 = -1, C2 = Array(h2); ++d3 < h2; ) C2[d3] = g3(d3);
      return C2;
    }
    function of2(h2, g3) {
      return G(g3, function(d3) {
        return [d3, h2[d3]];
      });
    }
    function Ss2(h2) {
      return h2 && h2.slice(0, Ts2(h2) + 1).replace(Er2, "");
    }
    function hn(h2) {
      return function(g3) {
        return h2(g3);
      };
    }
    function Mr2(h2, g3) {
      return G(g3, function(d3) {
        return h2[d3];
      });
    }
    function jt3(h2, g3) {
      return h2.has(g3);
    }
    function Os2(h2, g3) {
      for (var d3 = -1, C2 = h2.length; ++d3 < C2 && Tt2(g3, h2[d3], 0) > -1; ) ;
      return d3;
    }
    function Rs2(h2, g3) {
      for (var d3 = h2.length; d3-- && Tt2(g3, h2[d3], 0) > -1; ) ;
      return d3;
    }
    function ff2(h2, g3) {
      for (var d3 = h2.length, C2 = 0; d3--; ) h2[d3] === g3 && ++C2;
      return C2;
    }
    var cf2 = Ur2(Yo), hf2 = Ur2(Zo);
    function lf2(h2) {
      return "\\" + Xo2[h2];
    }
    function pf2(h2, g3) {
      return h2 == null ? i : h2[g3];
    }
    function Lt2(h2) {
      return Bo2.test(h2);
    }
    function df2(h2) {
      return Go2.test(h2);
    }
    function gf2(h2) {
      for (var g3, d3 = []; !(g3 = h2.next()).done; ) d3.push(g3.value);
      return d3;
    }
    function qr2(h2) {
      var g3 = -1, d3 = Array(h2.size);
      return h2.forEach(function(C2, S2) {
        d3[++g3] = [S2, C2];
      }), d3;
    }
    function bs2(h2, g3) {
      return function(d3) {
        return h2(g3(d3));
      };
    }
    function tt2(h2, g3) {
      for (var d3 = -1, C2 = h2.length, S2 = 0, U2 = []; ++d3 < C2; ) {
        var X2 = h2[d3];
        (X2 === g3 || X2 === It2) && (h2[d3] = It2, U2[S2++] = d3);
      }
      return U2;
    }
    function Se2(h2) {
      var g3 = -1, d3 = Array(h2.size);
      return h2.forEach(function(C2) {
        d3[++g3] = C2;
      }), d3;
    }
    function vf2(h2) {
      var g3 = -1, d3 = Array(h2.size);
      return h2.forEach(function(C2) {
        d3[++g3] = [C2, C2];
      }), d3;
    }
    function _f2(h2, g3, d3) {
      for (var C2 = d3 - 1, S2 = h2.length; ++C2 < S2; ) if (h2[C2] === g3) return C2;
      return -1;
    }
    function mf2(h2, g3, d3) {
      for (var C2 = d3 + 1; C2--; ) if (h2[C2] === g3) return C2;
      return C2;
    }
    function Dt2(h2) {
      return Lt2(h2) ? Pf2(h2) : ef2(h2);
    }
    function On2(h2) {
      return Lt2(h2) ? Af2(h2) : rf2(h2);
    }
    function Ts2(h2) {
      for (var g3 = h2.length; g3-- && ao2.test(h2.charAt(g3)); ) ;
      return g3;
    }
    var wf2 = Ur2(Jo2);
    function Pf2(h2) {
      for (var g3 = br2.lastIndex = 0; br2.test(h2); ) ++g3;
      return g3;
    }
    function Af2(h2) {
      return h2.match(br2) || [];
    }
    function Cf2(h2) {
      return h2.match(qo) || [];
    }
    var If2 = function h2(g3) {
      g3 = g3 == null ? k2 : Nt2.defaults(k2.Object(), g3, Nt2.pick(k2, zo2));
      var d3 = g3.Array, C2 = g3.Date, S2 = g3.Error, U2 = g3.Function, X2 = g3.Math, M2 = g3.Object, Br2 = g3.RegExp, xf2 = g3.String, wn2 = g3.TypeError, Oe2 = d3.prototype, Ef2 = U2.prototype, Ht3 = M2.prototype, Re2 = g3["__core-js_shared__"], be2 = Ef2.toString, F2 = Ht3.hasOwnProperty, yf2 = 0, Ls2 = function() {
        var n2 = /[^.]+$/.exec(Re2 && Re2.keys && Re2.keys.IE_PROTO || "");
        return n2 ? "Symbol(src)_1." + n2 : "";
      }(), Te = Ht3.toString, Sf2 = be2.call(M2), Of2 = k2._, Rf2 = Br2("^" + be2.call(F2).replace(xr2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le = gs2 ? g3.Buffer : i, et2 = g3.Symbol, De2 = g3.Uint8Array, Ds2 = Le ? Le.allocUnsafe : i, Ne = bs2(M2.getPrototypeOf, M2), Ns2 = M2.create, Hs2 = Ht3.propertyIsEnumerable, He2 = Oe2.splice, $s2 = et2 ? et2.isConcatSpreadable : i, ne3 = et2 ? et2.iterator : i, pt2 = et2 ? et2.toStringTag : i, $e2 = function() {
        try {
          var n2 = mt2(M2, "defineProperty");
          return n2({}, "", {}), n2;
        } catch {
        }
      }(), bf2 = g3.clearTimeout !== k2.clearTimeout && g3.clearTimeout, Tf2 = C2 && C2.now !== k2.Date.now && C2.now, Lf = g3.setTimeout !== k2.setTimeout && g3.setTimeout, Ue2 = X2.ceil, We2 = X2.floor, Gr2 = M2.getOwnPropertySymbols, Df2 = Le ? Le.isBuffer : i, Us2 = g3.isFinite, Nf2 = Oe2.join, Hf2 = bs2(M2.keys, M2), Q2 = X2.max, nn = X2.min, $f2 = C2.now, Uf2 = g3.parseInt, Ws2 = X2.random, Wf2 = Oe2.reverse, zr2 = mt2(g3, "DataView"), te2 = mt2(g3, "Map"), Kr2 = mt2(g3, "Promise"), $t2 = mt2(g3, "Set"), ee2 = mt2(g3, "WeakMap"), re2 = mt2(M2, "create"), Fe2 = ee2 && new ee2(), Ut5 = {}, Ff2 = wt2(zr2), Mf2 = wt2(te2), qf2 = wt2(Kr2), Bf2 = wt2($t2), Gf2 = wt2(ee2), Me2 = et2 ? et2.prototype : i, ie3 = Me2 ? Me2.valueOf : i, Fs2 = Me2 ? Me2.toString : i;
      function a2(n2) {
        if (Y(n2) && !O2(n2) && !(n2 instanceof H)) {
          if (n2 instanceof Pn2) return n2;
          if (F2.call(n2, "__wrapped__")) return Mu2(n2);
        }
        return new Pn2(n2);
      }
      var Wt3 = /* @__PURE__ */ function() {
        function n2() {
        }
        return function(t) {
          if (!K2(t)) return {};
          if (Ns2) return Ns2(t);
          n2.prototype = t;
          var e = new n2();
          return n2.prototype = i, e;
        };
      }();
      function qe2() {
      }
      function Pn2(n2, t) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      a2.templateSettings = { escape: to2, evaluate: eo2, interpolate: Ji2, variable: "", imports: { _: a2 } }, a2.prototype = qe2.prototype, a2.prototype.constructor = a2, Pn2.prototype = Wt3(qe2.prototype), Pn2.prototype.constructor = Pn2;
      function H(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Hn2, this.__views__ = [];
      }
      function zf2() {
        var n2 = new H(this.__wrapped__);
        return n2.__actions__ = un(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = un(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = un(this.__views__), n2;
      }
      function Kf2() {
        if (this.__filtered__) {
          var n2 = new H(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else n2 = this.clone(), n2.__dir__ *= -1;
        return n2;
      }
      function Yf2() {
        var n2 = this.__wrapped__.value(), t = this.__dir__, e = O2(n2), r2 = t < 0, s = e ? n2.length : 0, o2 = ih2(0, s, this.__views__), f2 = o2.start, c2 = o2.end, l2 = c2 - f2, v3 = r2 ? c2 : f2 - 1, _2 = this.__iteratees__, m2 = _2.length, P2 = 0, I2 = nn(l2, this.__takeCount__);
        if (!e || !r2 && s == l2 && I2 == l2) return fu2(n2, this.__actions__);
        var E3 = [];
        n: for (; l2-- && P2 < I2; ) {
          v3 += t;
          for (var T2 = -1, y3 = n2[v3]; ++T2 < m2; ) {
            var N2 = _2[T2], $2 = N2.iteratee, dn2 = N2.type, sn = $2(y3);
            if (dn2 == Wa2) y3 = sn;
            else if (!sn) {
              if (dn2 == Gi2) continue n;
              break n;
            }
          }
          E3[P2++] = y3;
        }
        return E3;
      }
      H.prototype = Wt3(qe2.prototype), H.prototype.constructor = H;
      function dt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function Zf2() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Jf2(n2) {
        var t = this.has(n2) && delete this.__data__[n2];
        return this.size -= t ? 1 : 0, t;
      }
      function Xf(n2) {
        var t = this.__data__;
        if (re2) {
          var e = t[n2];
          return e === zt2 ? i : e;
        }
        return F2.call(t, n2) ? t[n2] : i;
      }
      function Qf(n2) {
        var t = this.__data__;
        return re2 ? t[n2] !== i : F2.call(t, n2);
      }
      function Vf(n2, t) {
        var e = this.__data__;
        return this.size += this.has(n2) ? 0 : 1, e[n2] = re2 && t === i ? zt2 : t, this;
      }
      dt2.prototype.clear = Zf2, dt2.prototype.delete = Jf2, dt2.prototype.get = Xf, dt2.prototype.has = Qf, dt2.prototype.set = Vf;
      function Bn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function kf2() {
        this.__data__ = [], this.size = 0;
      }
      function jf(n2) {
        var t = this.__data__, e = Be2(t, n2);
        if (e < 0) return false;
        var r2 = t.length - 1;
        return e == r2 ? t.pop() : He2.call(t, e, 1), --this.size, true;
      }
      function nc(n2) {
        var t = this.__data__, e = Be2(t, n2);
        return e < 0 ? i : t[e][1];
      }
      function tc(n2) {
        return Be2(this.__data__, n2) > -1;
      }
      function ec(n2, t) {
        var e = this.__data__, r2 = Be2(e, n2);
        return r2 < 0 ? (++this.size, e.push([n2, t])) : e[r2][1] = t, this;
      }
      Bn.prototype.clear = kf2, Bn.prototype.delete = jf, Bn.prototype.get = nc, Bn.prototype.has = tc, Bn.prototype.set = ec;
      function Gn2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function rc() {
        this.size = 0, this.__data__ = { hash: new dt2(), map: new (te2 || Bn)(), string: new dt2() };
      }
      function ic(n2) {
        var t = nr2(this, n2).delete(n2);
        return this.size -= t ? 1 : 0, t;
      }
      function sc(n2) {
        return nr2(this, n2).get(n2);
      }
      function uc(n2) {
        return nr2(this, n2).has(n2);
      }
      function ac(n2, t) {
        var e = nr2(this, n2), r2 = e.size;
        return e.set(n2, t), this.size += e.size == r2 ? 0 : 1, this;
      }
      Gn2.prototype.clear = rc, Gn2.prototype.delete = ic, Gn2.prototype.get = sc, Gn2.prototype.has = uc, Gn2.prototype.set = ac;
      function gt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.__data__ = new Gn2(); ++t < e; ) this.add(n2[t]);
      }
      function oc(n2) {
        return this.__data__.set(n2, zt2), this;
      }
      function fc(n2) {
        return this.__data__.has(n2);
      }
      gt2.prototype.add = gt2.prototype.push = oc, gt2.prototype.has = fc;
      function Rn(n2) {
        var t = this.__data__ = new Bn(n2);
        this.size = t.size;
      }
      function cc() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function hc(n2) {
        var t = this.__data__, e = t.delete(n2);
        return this.size = t.size, e;
      }
      function lc(n2) {
        return this.__data__.get(n2);
      }
      function pc(n2) {
        return this.__data__.has(n2);
      }
      function dc(n2, t) {
        var e = this.__data__;
        if (e instanceof Bn) {
          var r2 = e.__data__;
          if (!te2 || r2.length < w3 - 1) return r2.push([n2, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn2(r2);
        }
        return e.set(n2, t), this.size = e.size, this;
      }
      Rn.prototype.clear = cc, Rn.prototype.delete = hc, Rn.prototype.get = lc, Rn.prototype.has = pc, Rn.prototype.set = dc;
      function Ms2(n2, t) {
        var e = O2(n2), r2 = !e && Pt2(n2), s = !e && !r2 && at2(n2), o2 = !e && !r2 && !s && Bt2(n2), f2 = e || r2 || s || o2, c2 = f2 ? Fr2(n2.length, xf2) : [], l2 = c2.length;
        for (var v3 in n2) (t || F2.call(n2, v3)) && !(f2 && (v3 == "length" || s && (v3 == "offset" || v3 == "parent") || o2 && (v3 == "buffer" || v3 == "byteLength" || v3 == "byteOffset") || Zn(v3, l2))) && c2.push(v3);
        return c2;
      }
      function qs2(n2) {
        var t = n2.length;
        return t ? n2[ei(0, t - 1)] : i;
      }
      function gc(n2, t) {
        return tr2(un(n2), vt2(t, 0, n2.length));
      }
      function vc(n2) {
        return tr2(un(n2));
      }
      function Yr2(n2, t, e) {
        (e !== i && !bn2(n2[t], e) || e === i && !(t in n2)) && zn2(n2, t, e);
      }
      function se2(n2, t, e) {
        var r2 = n2[t];
        (!(F2.call(n2, t) && bn2(r2, e)) || e === i && !(t in n2)) && zn2(n2, t, e);
      }
      function Be2(n2, t) {
        for (var e = n2.length; e--; ) if (bn2(n2[e][0], t)) return e;
        return -1;
      }
      function _c(n2, t, e, r2) {
        return rt2(n2, function(s, o2, f2) {
          t(r2, s, e(s), f2);
        }), r2;
      }
      function Bs2(n2, t) {
        return n2 && Un2(t, V4(t), n2);
      }
      function mc(n2, t) {
        return n2 && Un2(t, on(t), n2);
      }
      function zn2(n2, t, e) {
        t == "__proto__" && $e2 ? $e2(n2, t, { configurable: true, enumerable: true, value: e, writable: true }) : n2[t] = e;
      }
      function Zr(n2, t) {
        for (var e = -1, r2 = t.length, s = d3(r2), o2 = n2 == null; ++e < r2; ) s[e] = o2 ? i : Si2(n2, t[e]);
        return s;
      }
      function vt2(n2, t, e) {
        return n2 === n2 && (e !== i && (n2 = n2 <= e ? n2 : e), t !== i && (n2 = n2 >= t ? n2 : t)), n2;
      }
      function An(n2, t, e, r2, s, o2) {
        var f2, c2 = t & Ln2, l2 = t & Fn2, v3 = t & xt2;
        if (e && (f2 = s ? e(n2, r2, s, o2) : e(n2)), f2 !== i) return f2;
        if (!K2(n2)) return n2;
        var _2 = O2(n2);
        if (_2) {
          if (f2 = uh2(n2), !c2) return un(n2, f2);
        } else {
          var m2 = tn2(n2), P2 = m2 == Pe2 || m2 == zi2;
          if (at2(n2)) return lu2(n2, c2);
          if (m2 == qn2 || m2 == Ot3 || P2 && !s) {
            if (f2 = l2 || P2 ? {} : Tu(n2), !c2) return l2 ? Xc(n2, mc(f2, n2)) : Jc(n2, Bs2(f2, n2));
          } else {
            if (!q2[m2]) return s ? n2 : {};
            f2 = ah2(n2, m2, c2);
          }
        }
        o2 || (o2 = new Rn());
        var I2 = o2.get(n2);
        if (I2) return I2;
        o2.set(n2, f2), ua2(n2) ? n2.forEach(function(y3) {
          f2.add(An(y3, t, e, y3, n2, o2));
        }) : ia2(n2) && n2.forEach(function(y3, N2) {
          f2.set(N2, An(y3, t, e, N2, n2, o2));
        });
        var E3 = v3 ? l2 ? pi2 : li : l2 ? on : V4, T2 = _2 ? i : E3(n2);
        return mn(T2 || n2, function(y3, N2) {
          T2 && (N2 = y3, y3 = n2[N2]), se2(f2, N2, An(y3, t, e, N2, n2, o2));
        }), f2;
      }
      function wc(n2) {
        var t = V4(n2);
        return function(e) {
          return Gs2(e, n2, t);
        };
      }
      function Gs2(n2, t, e) {
        var r2 = e.length;
        if (n2 == null) return !r2;
        for (n2 = M2(n2); r2--; ) {
          var s = e[r2], o2 = t[s], f2 = n2[s];
          if (f2 === i && !(s in n2) || !o2(f2)) return false;
        }
        return true;
      }
      function zs2(n2, t, e) {
        if (typeof n2 != "function") throw new wn2(D2);
        return le2(function() {
          n2.apply(i, e);
        }, t);
      }
      function ue2(n2, t, e, r2) {
        var s = -1, o2 = Ee2, f2 = true, c2 = n2.length, l2 = [], v3 = t.length;
        if (!c2) return l2;
        e && (t = G(t, hn(e))), r2 ? (o2 = Dr2, f2 = false) : t.length >= w3 && (o2 = jt3, f2 = false, t = new gt2(t));
        n: for (; ++s < c2; ) {
          var _2 = n2[s], m2 = e == null ? _2 : e(_2);
          if (_2 = r2 || _2 !== 0 ? _2 : 0, f2 && m2 === m2) {
            for (var P2 = v3; P2--; ) if (t[P2] === m2) continue n;
            l2.push(_2);
          } else o2(t, m2, r2) || l2.push(_2);
        }
        return l2;
      }
      var rt2 = _u2($n2), Ks2 = _u2(Xr, true);
      function Pc(n2, t) {
        var e = true;
        return rt2(n2, function(r2, s, o2) {
          return e = !!t(r2, s, o2), e;
        }), e;
      }
      function Ge2(n2, t, e) {
        for (var r2 = -1, s = n2.length; ++r2 < s; ) {
          var o2 = n2[r2], f2 = t(o2);
          if (f2 != null && (c2 === i ? f2 === f2 && !pn(f2) : e(f2, c2))) var c2 = f2, l2 = o2;
        }
        return l2;
      }
      function Ac(n2, t, e, r2) {
        var s = n2.length;
        for (e = R(e), e < 0 && (e = -e > s ? 0 : s + e), r2 = r2 === i || r2 > s ? s : R(r2), r2 < 0 && (r2 += s), r2 = e > r2 ? 0 : oa2(r2); e < r2; ) n2[e++] = t;
        return n2;
      }
      function Ys2(n2, t) {
        var e = [];
        return rt2(n2, function(r2, s, o2) {
          t(r2, s, o2) && e.push(r2);
        }), e;
      }
      function j2(n2, t, e, r2, s) {
        var o2 = -1, f2 = n2.length;
        for (e || (e = fh2), s || (s = []); ++o2 < f2; ) {
          var c2 = n2[o2];
          t > 0 && e(c2) ? t > 1 ? j2(c2, t - 1, e, r2, s) : nt2(s, c2) : r2 || (s[s.length] = c2);
        }
        return s;
      }
      var Jr2 = mu2(), Zs2 = mu2(true);
      function $n2(n2, t) {
        return n2 && Jr2(n2, t, V4);
      }
      function Xr(n2, t) {
        return n2 && Zs2(n2, t, V4);
      }
      function ze2(n2, t) {
        return jn2(t, function(e) {
          return Jn2(n2[e]);
        });
      }
      function _t2(n2, t) {
        t = st2(t, n2);
        for (var e = 0, r2 = t.length; n2 != null && e < r2; ) n2 = n2[Wn2(t[e++])];
        return e && e == r2 ? n2 : i;
      }
      function Js2(n2, t, e) {
        var r2 = t(n2);
        return O2(n2) ? r2 : nt2(r2, e(n2));
      }
      function en2(n2) {
        return n2 == null ? n2 === i ? Ja2 : Ya : pt2 && pt2 in M2(n2) ? rh2(n2) : vh(n2);
      }
      function Qr2(n2, t) {
        return n2 > t;
      }
      function Cc(n2, t) {
        return n2 != null && F2.call(n2, t);
      }
      function Ic(n2, t) {
        return n2 != null && t in M2(n2);
      }
      function xc(n2, t, e) {
        return n2 >= nn(t, e) && n2 < Q2(t, e);
      }
      function Vr2(n2, t, e) {
        for (var r2 = e ? Dr2 : Ee2, s = n2[0].length, o2 = n2.length, f2 = o2, c2 = d3(o2), l2 = 1 / 0, v3 = []; f2--; ) {
          var _2 = n2[f2];
          f2 && t && (_2 = G(_2, hn(t))), l2 = nn(_2.length, l2), c2[f2] = !e && (t || s >= 120 && _2.length >= 120) ? new gt2(f2 && _2) : i;
        }
        _2 = n2[0];
        var m2 = -1, P2 = c2[0];
        n: for (; ++m2 < s && v3.length < l2; ) {
          var I2 = _2[m2], E3 = t ? t(I2) : I2;
          if (I2 = e || I2 !== 0 ? I2 : 0, !(P2 ? jt3(P2, E3) : r2(v3, E3, e))) {
            for (f2 = o2; --f2; ) {
              var T2 = c2[f2];
              if (!(T2 ? jt3(T2, E3) : r2(n2[f2], E3, e))) continue n;
            }
            P2 && P2.push(E3), v3.push(I2);
          }
        }
        return v3;
      }
      function Ec(n2, t, e, r2) {
        return $n2(n2, function(s, o2, f2) {
          t(r2, e(s), o2, f2);
        }), r2;
      }
      function ae2(n2, t, e) {
        t = st2(t, n2), n2 = Hu(n2, t);
        var r2 = n2 == null ? n2 : n2[Wn2(In2(t))];
        return r2 == null ? i : cn(r2, n2, e);
      }
      function Xs2(n2) {
        return Y(n2) && en2(n2) == Ot3;
      }
      function yc(n2) {
        return Y(n2) && en2(n2) == kt3;
      }
      function Sc(n2) {
        return Y(n2) && en2(n2) == Zt3;
      }
      function oe2(n2, t, e, r2, s) {
        return n2 === t ? true : n2 == null || t == null || !Y(n2) && !Y(t) ? n2 !== n2 && t !== t : Oc(n2, t, e, r2, oe2, s);
      }
      function Oc(n2, t, e, r2, s, o2) {
        var f2 = O2(n2), c2 = O2(t), l2 = f2 ? me2 : tn2(n2), v3 = c2 ? me2 : tn2(t);
        l2 = l2 == Ot3 ? qn2 : l2, v3 = v3 == Ot3 ? qn2 : v3;
        var _2 = l2 == qn2, m2 = v3 == qn2, P2 = l2 == v3;
        if (P2 && at2(n2)) {
          if (!at2(t)) return false;
          f2 = true, _2 = false;
        }
        if (P2 && !_2) return o2 || (o2 = new Rn()), f2 || Bt2(n2) ? Ou2(n2, t, e, r2, s, o2) : th2(n2, t, l2, e, r2, s, o2);
        if (!(e & Et2)) {
          var I2 = _2 && F2.call(n2, "__wrapped__"), E3 = m2 && F2.call(t, "__wrapped__");
          if (I2 || E3) {
            var T2 = I2 ? n2.value() : n2, y3 = E3 ? t.value() : t;
            return o2 || (o2 = new Rn()), s(T2, y3, e, r2, o2);
          }
        }
        return P2 ? (o2 || (o2 = new Rn()), eh2(n2, t, e, r2, s, o2)) : false;
      }
      function Rc(n2) {
        return Y(n2) && tn2(n2) == yn2;
      }
      function kr2(n2, t, e, r2) {
        var s = e.length, o2 = s, f2 = !r2;
        if (n2 == null) return !o2;
        for (n2 = M2(n2); s--; ) {
          var c2 = e[s];
          if (f2 && c2[2] ? c2[1] !== n2[c2[0]] : !(c2[0] in n2)) return false;
        }
        for (; ++s < o2; ) {
          c2 = e[s];
          var l2 = c2[0], v3 = n2[l2], _2 = c2[1];
          if (f2 && c2[2]) {
            if (v3 === i && !(l2 in n2)) return false;
          } else {
            var m2 = new Rn();
            if (r2) var P2 = r2(v3, _2, l2, n2, t, m2);
            if (!(P2 === i ? oe2(_2, v3, Et2 | ve2, r2, m2) : P2)) return false;
          }
        }
        return true;
      }
      function Qs2(n2) {
        if (!K2(n2) || hh2(n2)) return false;
        var t = Jn2(n2) ? Rf2 : mo2;
        return t.test(wt2(n2));
      }
      function bc(n2) {
        return Y(n2) && en2(n2) == Xt2;
      }
      function Tc(n2) {
        return Y(n2) && tn2(n2) == Sn2;
      }
      function Lc(n2) {
        return Y(n2) && ar3(n2.length) && !!B[en2(n2)];
      }
      function Vs2(n2) {
        return typeof n2 == "function" ? n2 : n2 == null ? fn : typeof n2 == "object" ? O2(n2) ? nu2(n2[0], n2[1]) : js2(n2) : wa2(n2);
      }
      function jr2(n2) {
        if (!he2(n2)) return Hf2(n2);
        var t = [];
        for (var e in M2(n2)) F2.call(n2, e) && e != "constructor" && t.push(e);
        return t;
      }
      function Dc(n2) {
        if (!K2(n2)) return gh(n2);
        var t = he2(n2), e = [];
        for (var r2 in n2) r2 == "constructor" && (t || !F2.call(n2, r2)) || e.push(r2);
        return e;
      }
      function ni(n2, t) {
        return n2 < t;
      }
      function ks2(n2, t) {
        var e = -1, r2 = an(n2) ? d3(n2.length) : [];
        return rt2(n2, function(s, o2, f2) {
          r2[++e] = t(s, o2, f2);
        }), r2;
      }
      function js2(n2) {
        var t = gi2(n2);
        return t.length == 1 && t[0][2] ? Du2(t[0][0], t[0][1]) : function(e) {
          return e === n2 || kr2(e, n2, t);
        };
      }
      function nu2(n2, t) {
        return _i2(n2) && Lu(t) ? Du2(Wn2(n2), t) : function(e) {
          var r2 = Si2(e, n2);
          return r2 === i && r2 === t ? Oi2(e, n2) : oe2(t, r2, Et2 | ve2);
        };
      }
      function Ke2(n2, t, e, r2, s) {
        n2 !== t && Jr2(t, function(o2, f2) {
          if (s || (s = new Rn()), K2(o2)) Nc(n2, t, f2, e, Ke2, r2, s);
          else {
            var c2 = r2 ? r2(wi2(n2, f2), o2, f2 + "", n2, t, s) : i;
            c2 === i && (c2 = o2), Yr2(n2, f2, c2);
          }
        }, on);
      }
      function Nc(n2, t, e, r2, s, o2, f2) {
        var c2 = wi2(n2, e), l2 = wi2(t, e), v3 = f2.get(l2);
        if (v3) {
          Yr2(n2, e, v3);
          return;
        }
        var _2 = o2 ? o2(c2, l2, e + "", n2, t, f2) : i, m2 = _2 === i;
        if (m2) {
          var P2 = O2(l2), I2 = !P2 && at2(l2), E3 = !P2 && !I2 && Bt2(l2);
          _2 = l2, P2 || I2 || E3 ? O2(c2) ? _2 = c2 : Z2(c2) ? _2 = un(c2) : I2 ? (m2 = false, _2 = lu2(l2, true)) : E3 ? (m2 = false, _2 = pu2(l2, true)) : _2 = [] : pe2(l2) || Pt2(l2) ? (_2 = c2, Pt2(c2) ? _2 = fa2(c2) : (!K2(c2) || Jn2(c2)) && (_2 = Tu(l2))) : m2 = false;
        }
        m2 && (f2.set(l2, _2), s(_2, l2, r2, o2, f2), f2.delete(l2)), Yr2(n2, e, _2);
      }
      function tu2(n2, t) {
        var e = n2.length;
        if (e) return t += t < 0 ? e : 0, Zn(t, e) ? n2[t] : i;
      }
      function eu2(n2, t, e) {
        t.length ? t = G(t, function(o2) {
          return O2(o2) ? function(f2) {
            return _t2(f2, o2.length === 1 ? o2[0] : o2);
          } : o2;
        }) : t = [fn];
        var r2 = -1;
        t = G(t, hn(x()));
        var s = ks2(n2, function(o2, f2, c2) {
          var l2 = G(t, function(v3) {
            return v3(o2);
          });
          return { criteria: l2, index: ++r2, value: o2 };
        });
        return af2(s, function(o2, f2) {
          return Zc(o2, f2, e);
        });
      }
      function Hc(n2, t) {
        return ru2(n2, t, function(e, r2) {
          return Oi2(n2, r2);
        });
      }
      function ru2(n2, t, e) {
        for (var r2 = -1, s = t.length, o2 = {}; ++r2 < s; ) {
          var f2 = t[r2], c2 = _t2(n2, f2);
          e(c2, f2) && fe2(o2, st2(f2, n2), c2);
        }
        return o2;
      }
      function $c(n2) {
        return function(t) {
          return _t2(t, n2);
        };
      }
      function ti(n2, t, e, r2) {
        var s = r2 ? uf2 : Tt2, o2 = -1, f2 = t.length, c2 = n2;
        for (n2 === t && (t = un(t)), e && (c2 = G(n2, hn(e))); ++o2 < f2; ) for (var l2 = 0, v3 = t[o2], _2 = e ? e(v3) : v3; (l2 = s(c2, _2, l2, r2)) > -1; ) c2 !== n2 && He2.call(c2, l2, 1), He2.call(n2, l2, 1);
        return n2;
      }
      function iu2(n2, t) {
        for (var e = n2 ? t.length : 0, r2 = e - 1; e--; ) {
          var s = t[e];
          if (e == r2 || s !== o2) {
            var o2 = s;
            Zn(s) ? He2.call(n2, s, 1) : si(n2, s);
          }
        }
        return n2;
      }
      function ei(n2, t) {
        return n2 + We2(Ws2() * (t - n2 + 1));
      }
      function Uc(n2, t, e, r2) {
        for (var s = -1, o2 = Q2(Ue2((t - n2) / (e || 1)), 0), f2 = d3(o2); o2--; ) f2[r2 ? o2 : ++s] = n2, n2 += e;
        return f2;
      }
      function ri(n2, t) {
        var e = "";
        if (!n2 || t < 1 || t > kn2) return e;
        do
          t % 2 && (e += n2), t = We2(t / 2), t && (n2 += n2);
        while (t);
        return e;
      }
      function L5(n2, t) {
        return Pi2(Nu2(n2, t, fn), n2 + "");
      }
      function Wc(n2) {
        return qs2(Gt2(n2));
      }
      function Fc(n2, t) {
        var e = Gt2(n2);
        return tr2(e, vt2(t, 0, e.length));
      }
      function fe2(n2, t, e, r2) {
        if (!K2(n2)) return n2;
        t = st2(t, n2);
        for (var s = -1, o2 = t.length, f2 = o2 - 1, c2 = n2; c2 != null && ++s < o2; ) {
          var l2 = Wn2(t[s]), v3 = e;
          if (l2 === "__proto__" || l2 === "constructor" || l2 === "prototype") return n2;
          if (s != f2) {
            var _2 = c2[l2];
            v3 = r2 ? r2(_2, l2, c2) : i, v3 === i && (v3 = K2(_2) ? _2 : Zn(t[s + 1]) ? [] : {});
          }
          se2(c2, l2, v3), c2 = c2[l2];
        }
        return n2;
      }
      var su = Fe2 ? function(n2, t) {
        return Fe2.set(n2, t), n2;
      } : fn, Mc = $e2 ? function(n2, t) {
        return $e2(n2, "toString", { configurable: true, enumerable: false, value: bi2(t), writable: true });
      } : fn;
      function qc(n2) {
        return tr2(Gt2(n2));
      }
      function Cn(n2, t, e) {
        var r2 = -1, s = n2.length;
        t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o2 = d3(s); ++r2 < s; ) o2[r2] = n2[r2 + t];
        return o2;
      }
      function Bc(n2, t) {
        var e;
        return rt2(n2, function(r2, s, o2) {
          return e = t(r2, s, o2), !e;
        }), !!e;
      }
      function Ye2(n2, t, e) {
        var r2 = 0, s = n2 == null ? r2 : n2.length;
        if (typeof t == "number" && t === t && s <= Ba2) {
          for (; r2 < s; ) {
            var o2 = r2 + s >>> 1, f2 = n2[o2];
            f2 !== null && !pn(f2) && (e ? f2 <= t : f2 < t) ? r2 = o2 + 1 : s = o2;
          }
          return s;
        }
        return ii(n2, t, fn, e);
      }
      function ii(n2, t, e, r2) {
        var s = 0, o2 = n2 == null ? 0 : n2.length;
        if (o2 === 0) return 0;
        t = e(t);
        for (var f2 = t !== t, c2 = t === null, l2 = pn(t), v3 = t === i; s < o2; ) {
          var _2 = We2((s + o2) / 2), m2 = e(n2[_2]), P2 = m2 !== i, I2 = m2 === null, E3 = m2 === m2, T2 = pn(m2);
          if (f2) var y3 = r2 || E3;
          else v3 ? y3 = E3 && (r2 || P2) : c2 ? y3 = E3 && P2 && (r2 || !I2) : l2 ? y3 = E3 && P2 && !I2 && (r2 || !T2) : I2 || T2 ? y3 = false : y3 = r2 ? m2 <= t : m2 < t;
          y3 ? s = _2 + 1 : o2 = _2;
        }
        return nn(o2, qa2);
      }
      function uu(n2, t) {
        for (var e = -1, r2 = n2.length, s = 0, o2 = []; ++e < r2; ) {
          var f2 = n2[e], c2 = t ? t(f2) : f2;
          if (!e || !bn2(c2, l2)) {
            var l2 = c2;
            o2[s++] = f2 === 0 ? 0 : f2;
          }
        }
        return o2;
      }
      function au(n2) {
        return typeof n2 == "number" ? n2 : pn(n2) ? _e2 : +n2;
      }
      function ln(n2) {
        if (typeof n2 == "string") return n2;
        if (O2(n2)) return G(n2, ln) + "";
        if (pn(n2)) return Fs2 ? Fs2.call(n2) : "";
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht2 ? "-0" : t;
      }
      function it2(n2, t, e) {
        var r2 = -1, s = Ee2, o2 = n2.length, f2 = true, c2 = [], l2 = c2;
        if (e) f2 = false, s = Dr2;
        else if (o2 >= w3) {
          var v3 = t ? null : jc(n2);
          if (v3) return Se2(v3);
          f2 = false, s = jt3, l2 = new gt2();
        } else l2 = t ? [] : c2;
        n: for (; ++r2 < o2; ) {
          var _2 = n2[r2], m2 = t ? t(_2) : _2;
          if (_2 = e || _2 !== 0 ? _2 : 0, f2 && m2 === m2) {
            for (var P2 = l2.length; P2--; ) if (l2[P2] === m2) continue n;
            t && l2.push(m2), c2.push(_2);
          } else s(l2, m2, e) || (l2 !== c2 && l2.push(m2), c2.push(_2));
        }
        return c2;
      }
      function si(n2, t) {
        return t = st2(t, n2), n2 = Hu(n2, t), n2 == null || delete n2[Wn2(In2(t))];
      }
      function ou2(n2, t, e, r2) {
        return fe2(n2, t, e(_t2(n2, t)), r2);
      }
      function Ze2(n2, t, e, r2) {
        for (var s = n2.length, o2 = r2 ? s : -1; (r2 ? o2-- : ++o2 < s) && t(n2[o2], o2, n2); ) ;
        return e ? Cn(n2, r2 ? 0 : o2, r2 ? o2 + 1 : s) : Cn(n2, r2 ? o2 + 1 : 0, r2 ? s : o2);
      }
      function fu2(n2, t) {
        var e = n2;
        return e instanceof H && (e = e.value()), Nr2(t, function(r2, s) {
          return s.func.apply(s.thisArg, nt2([r2], s.args));
        }, e);
      }
      function ui(n2, t, e) {
        var r2 = n2.length;
        if (r2 < 2) return r2 ? it2(n2[0]) : [];
        for (var s = -1, o2 = d3(r2); ++s < r2; ) for (var f2 = n2[s], c2 = -1; ++c2 < r2; ) c2 != s && (o2[s] = ue2(o2[s] || f2, n2[c2], t, e));
        return it2(j2(o2, 1), t, e);
      }
      function cu2(n2, t, e) {
        for (var r2 = -1, s = n2.length, o2 = t.length, f2 = {}; ++r2 < s; ) {
          var c2 = r2 < o2 ? t[r2] : i;
          e(f2, n2[r2], c2);
        }
        return f2;
      }
      function ai(n2) {
        return Z2(n2) ? n2 : [];
      }
      function oi(n2) {
        return typeof n2 == "function" ? n2 : fn;
      }
      function st2(n2, t) {
        return O2(n2) ? n2 : _i2(n2, t) ? [n2] : Fu(W(n2));
      }
      var Gc = L5;
      function ut2(n2, t, e) {
        var r2 = n2.length;
        return e = e === i ? r2 : e, !t && e >= r2 ? n2 : Cn(n2, t, e);
      }
      var hu = bf2 || function(n2) {
        return k2.clearTimeout(n2);
      };
      function lu2(n2, t) {
        if (t) return n2.slice();
        var e = n2.length, r2 = Ds2 ? Ds2(e) : new n2.constructor(e);
        return n2.copy(r2), r2;
      }
      function fi(n2) {
        var t = new n2.constructor(n2.byteLength);
        return new De2(t).set(new De2(n2)), t;
      }
      function zc(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.byteLength);
      }
      function Kc(n2) {
        var t = new n2.constructor(n2.source, Xi2.exec(n2));
        return t.lastIndex = n2.lastIndex, t;
      }
      function Yc(n2) {
        return ie3 ? M2(ie3.call(n2)) : {};
      }
      function pu2(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.length);
      }
      function du2(n2, t) {
        if (n2 !== t) {
          var e = n2 !== i, r2 = n2 === null, s = n2 === n2, o2 = pn(n2), f2 = t !== i, c2 = t === null, l2 = t === t, v3 = pn(t);
          if (!c2 && !v3 && !o2 && n2 > t || o2 && f2 && l2 && !c2 && !v3 || r2 && f2 && l2 || !e && l2 || !s) return 1;
          if (!r2 && !o2 && !v3 && n2 < t || v3 && e && s && !r2 && !o2 || c2 && e && s || !f2 && s || !l2) return -1;
        }
        return 0;
      }
      function Zc(n2, t, e) {
        for (var r2 = -1, s = n2.criteria, o2 = t.criteria, f2 = s.length, c2 = e.length; ++r2 < f2; ) {
          var l2 = du2(s[r2], o2[r2]);
          if (l2) {
            if (r2 >= c2) return l2;
            var v3 = e[r2];
            return l2 * (v3 == "desc" ? -1 : 1);
          }
        }
        return n2.index - t.index;
      }
      function gu2(n2, t, e, r2) {
        for (var s = -1, o2 = n2.length, f2 = e.length, c2 = -1, l2 = t.length, v3 = Q2(o2 - f2, 0), _2 = d3(l2 + v3), m2 = !r2; ++c2 < l2; ) _2[c2] = t[c2];
        for (; ++s < f2; ) (m2 || s < o2) && (_2[e[s]] = n2[s]);
        for (; v3--; ) _2[c2++] = n2[s++];
        return _2;
      }
      function vu2(n2, t, e, r2) {
        for (var s = -1, o2 = n2.length, f2 = -1, c2 = e.length, l2 = -1, v3 = t.length, _2 = Q2(o2 - c2, 0), m2 = d3(_2 + v3), P2 = !r2; ++s < _2; ) m2[s] = n2[s];
        for (var I2 = s; ++l2 < v3; ) m2[I2 + l2] = t[l2];
        for (; ++f2 < c2; ) (P2 || s < o2) && (m2[I2 + e[f2]] = n2[s++]);
        return m2;
      }
      function un(n2, t) {
        var e = -1, r2 = n2.length;
        for (t || (t = d3(r2)); ++e < r2; ) t[e] = n2[e];
        return t;
      }
      function Un2(n2, t, e, r2) {
        var s = !e;
        e || (e = {});
        for (var o2 = -1, f2 = t.length; ++o2 < f2; ) {
          var c2 = t[o2], l2 = r2 ? r2(e[c2], n2[c2], c2, e, n2) : i;
          l2 === i && (l2 = n2[c2]), s ? zn2(e, c2, l2) : se2(e, c2, l2);
        }
        return e;
      }
      function Jc(n2, t) {
        return Un2(n2, vi2(n2), t);
      }
      function Xc(n2, t) {
        return Un2(n2, Ru2(n2), t);
      }
      function Je2(n2, t) {
        return function(e, r2) {
          var s = O2(e) ? jo : _c, o2 = t ? t() : {};
          return s(e, n2, x(r2, 2), o2);
        };
      }
      function Ft2(n2) {
        return L5(function(t, e) {
          var r2 = -1, s = e.length, o2 = s > 1 ? e[s - 1] : i, f2 = s > 2 ? e[2] : i;
          for (o2 = n2.length > 3 && typeof o2 == "function" ? (s--, o2) : i, f2 && rn2(e[0], e[1], f2) && (o2 = s < 3 ? i : o2, s = 1), t = M2(t); ++r2 < s; ) {
            var c2 = e[r2];
            c2 && n2(t, c2, r2, o2);
          }
          return t;
        });
      }
      function _u2(n2, t) {
        return function(e, r2) {
          if (e == null) return e;
          if (!an(e)) return n2(e, r2);
          for (var s = e.length, o2 = t ? s : -1, f2 = M2(e); (t ? o2-- : ++o2 < s) && r2(f2[o2], o2, f2) !== false; ) ;
          return e;
        };
      }
      function mu2(n2) {
        return function(t, e, r2) {
          for (var s = -1, o2 = M2(t), f2 = r2(t), c2 = f2.length; c2--; ) {
            var l2 = f2[n2 ? c2 : ++s];
            if (e(o2[l2], l2, o2) === false) break;
          }
          return t;
        };
      }
      function Qc(n2, t, e) {
        var r2 = t & vn, s = ce2(n2);
        function o2() {
          var f2 = this && this !== k2 && this instanceof o2 ? s : n2;
          return f2.apply(r2 ? e : this, arguments);
        }
        return o2;
      }
      function wu2(n2) {
        return function(t) {
          t = W(t);
          var e = Lt2(t) ? On2(t) : i, r2 = e ? e[0] : t.charAt(0), s = e ? ut2(e, 1).join("") : t.slice(1);
          return r2[n2]() + s;
        };
      }
      function Mt2(n2) {
        return function(t) {
          return Nr2(_a2(va2(t).replace(Fo, "")), n2, "");
        };
      }
      function ce2(n2) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t[0]);
            case 2:
              return new n2(t[0], t[1]);
            case 3:
              return new n2(t[0], t[1], t[2]);
            case 4:
              return new n2(t[0], t[1], t[2], t[3]);
            case 5:
              return new n2(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Wt3(n2.prototype), r2 = n2.apply(e, t);
          return K2(r2) ? r2 : e;
        };
      }
      function Vc(n2, t, e) {
        var r2 = ce2(n2);
        function s() {
          for (var o2 = arguments.length, f2 = d3(o2), c2 = o2, l2 = qt2(s); c2--; ) f2[c2] = arguments[c2];
          var v3 = o2 < 3 && f2[0] !== l2 && f2[o2 - 1] !== l2 ? [] : tt2(f2, l2);
          if (o2 -= v3.length, o2 < e) return xu2(n2, t, Xe2, s.placeholder, i, f2, v3, i, i, e - o2);
          var _2 = this && this !== k2 && this instanceof s ? r2 : n2;
          return cn(_2, this, f2);
        }
        return s;
      }
      function Pu2(n2) {
        return function(t, e, r2) {
          var s = M2(t);
          if (!an(t)) {
            var o2 = x(e, 3);
            t = V4(t), e = function(c2) {
              return o2(s[c2], c2, s);
            };
          }
          var f2 = n2(t, e, r2);
          return f2 > -1 ? s[o2 ? t[f2] : f2] : i;
        };
      }
      function Au2(n2) {
        return Yn2(function(t) {
          var e = t.length, r2 = e, s = Pn2.prototype.thru;
          for (n2 && t.reverse(); r2--; ) {
            var o2 = t[r2];
            if (typeof o2 != "function") throw new wn2(D2);
            if (s && !f2 && je2(o2) == "wrapper") var f2 = new Pn2([], true);
          }
          for (r2 = f2 ? r2 : e; ++r2 < e; ) {
            o2 = t[r2];
            var c2 = je2(o2), l2 = c2 == "wrapper" ? di(o2) : i;
            l2 && mi(l2[0]) && l2[1] == (Mn | Dn2 | Nn2 | Kt2) && !l2[4].length && l2[9] == 1 ? f2 = f2[je2(l2[0])].apply(f2, l2[3]) : f2 = o2.length == 1 && mi(o2) ? f2[c2]() : f2.thru(o2);
          }
          return function() {
            var v3 = arguments, _2 = v3[0];
            if (f2 && v3.length == 1 && O2(_2)) return f2.plant(_2).value();
            for (var m2 = 0, P2 = e ? t[m2].apply(this, v3) : _2; ++m2 < e; ) P2 = t[m2].call(this, P2);
            return P2;
          };
        });
      }
      function Xe2(n2, t, e, r2, s, o2, f2, c2, l2, v3) {
        var _2 = t & Mn, m2 = t & vn, P2 = t & ct2, I2 = t & (Dn2 | yt2), E3 = t & dr4, T2 = P2 ? i : ce2(n2);
        function y3() {
          for (var N2 = arguments.length, $2 = d3(N2), dn2 = N2; dn2--; ) $2[dn2] = arguments[dn2];
          if (I2) var sn = qt2(y3), gn = ff2($2, sn);
          if (r2 && ($2 = gu2($2, r2, s, I2)), o2 && ($2 = vu2($2, o2, f2, I2)), N2 -= gn, I2 && N2 < v3) {
            var J2 = tt2($2, sn);
            return xu2(n2, t, Xe2, y3.placeholder, e, $2, J2, c2, l2, v3 - N2);
          }
          var Tn2 = m2 ? e : this, Qn2 = P2 ? Tn2[n2] : n2;
          return N2 = $2.length, c2 ? $2 = _h($2, c2) : E3 && N2 > 1 && $2.reverse(), _2 && l2 < N2 && ($2.length = l2), this && this !== k2 && this instanceof y3 && (Qn2 = T2 || ce2(Qn2)), Qn2.apply(Tn2, $2);
        }
        return y3;
      }
      function Cu2(n2, t) {
        return function(e, r2) {
          return Ec(e, n2, t(r2), {});
        };
      }
      function Qe2(n2, t) {
        return function(e, r2) {
          var s;
          if (e === i && r2 === i) return t;
          if (e !== i && (s = e), r2 !== i) {
            if (s === i) return r2;
            typeof e == "string" || typeof r2 == "string" ? (e = ln(e), r2 = ln(r2)) : (e = au(e), r2 = au(r2)), s = n2(e, r2);
          }
          return s;
        };
      }
      function ci(n2) {
        return Yn2(function(t) {
          return t = G(t, hn(x())), L5(function(e) {
            var r2 = this;
            return n2(t, function(s) {
              return cn(s, r2, e);
            });
          });
        });
      }
      function Ve2(n2, t) {
        t = t === i ? " " : ln(t);
        var e = t.length;
        if (e < 2) return e ? ri(t, n2) : t;
        var r2 = ri(t, Ue2(n2 / Dt2(t)));
        return Lt2(t) ? ut2(On2(r2), 0, n2).join("") : r2.slice(0, n2);
      }
      function kc(n2, t, e, r2) {
        var s = t & vn, o2 = ce2(n2);
        function f2() {
          for (var c2 = -1, l2 = arguments.length, v3 = -1, _2 = r2.length, m2 = d3(_2 + l2), P2 = this && this !== k2 && this instanceof f2 ? o2 : n2; ++v3 < _2; ) m2[v3] = r2[v3];
          for (; l2--; ) m2[v3++] = arguments[++c2];
          return cn(P2, s ? e : this, m2);
        }
        return f2;
      }
      function Iu2(n2) {
        return function(t, e, r2) {
          return r2 && typeof r2 != "number" && rn2(t, e, r2) && (e = r2 = i), t = Xn2(t), e === i ? (e = t, t = 0) : e = Xn2(e), r2 = r2 === i ? t < e ? 1 : -1 : Xn2(r2), Uc(t, e, r2, n2);
        };
      }
      function ke2(n2) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn2(t), e = xn2(e)), n2(t, e);
        };
      }
      function xu2(n2, t, e, r2, s, o2, f2, c2, l2, v3) {
        var _2 = t & Dn2, m2 = _2 ? f2 : i, P2 = _2 ? i : f2, I2 = _2 ? o2 : i, E3 = _2 ? i : o2;
        t |= _2 ? Nn2 : St2, t &= ~(_2 ? St2 : Nn2), t & Bi2 || (t &= ~(vn | ct2));
        var T2 = [n2, t, s, I2, m2, E3, P2, c2, l2, v3], y3 = e.apply(i, T2);
        return mi(n2) && $u2(y3, T2), y3.placeholder = r2, Uu(y3, n2, t);
      }
      function hi(n2) {
        var t = X2[n2];
        return function(e, r2) {
          if (e = xn2(e), r2 = r2 == null ? 0 : nn(R(r2), 292), r2 && Us2(e)) {
            var s = (W(e) + "e").split("e"), o2 = t(s[0] + "e" + (+s[1] + r2));
            return s = (W(o2) + "e").split("e"), +(s[0] + "e" + (+s[1] - r2));
          }
          return t(e);
        };
      }
      var jc = $t2 && 1 / Se2(new $t2([, -0]))[1] == ht2 ? function(n2) {
        return new $t2(n2);
      } : Di2;
      function Eu2(n2) {
        return function(t) {
          var e = tn2(t);
          return e == yn2 ? qr2(t) : e == Sn2 ? vf2(t) : of2(t, n2(t));
        };
      }
      function Kn2(n2, t, e, r2, s, o2, f2, c2) {
        var l2 = t & ct2;
        if (!l2 && typeof n2 != "function") throw new wn2(D2);
        var v3 = r2 ? r2.length : 0;
        if (v3 || (t &= ~(Nn2 | St2), r2 = s = i), f2 = f2 === i ? f2 : Q2(R(f2), 0), c2 = c2 === i ? c2 : R(c2), v3 -= s ? s.length : 0, t & St2) {
          var _2 = r2, m2 = s;
          r2 = s = i;
        }
        var P2 = l2 ? i : di(n2), I2 = [n2, t, e, r2, s, _2, m2, o2, f2, c2];
        if (P2 && dh(I2, P2), n2 = I2[0], t = I2[1], e = I2[2], r2 = I2[3], s = I2[4], c2 = I2[9] = I2[9] === i ? l2 ? 0 : n2.length : Q2(I2[9] - v3, 0), !c2 && t & (Dn2 | yt2) && (t &= ~(Dn2 | yt2)), !t || t == vn) var E3 = Qc(n2, t, e);
        else t == Dn2 || t == yt2 ? E3 = Vc(n2, t, c2) : (t == Nn2 || t == (vn | Nn2)) && !s.length ? E3 = kc(n2, t, e, r2) : E3 = Xe2.apply(i, I2);
        var T2 = P2 ? su : $u2;
        return Uu(T2(E3, I2), n2, t);
      }
      function yu2(n2, t, e, r2) {
        return n2 === i || bn2(n2, Ht3[e]) && !F2.call(r2, e) ? t : n2;
      }
      function Su2(n2, t, e, r2, s, o2) {
        return K2(n2) && K2(t) && (o2.set(t, n2), Ke2(n2, t, i, Su2, o2), o2.delete(t)), n2;
      }
      function nh2(n2) {
        return pe2(n2) ? i : n2;
      }
      function Ou2(n2, t, e, r2, s, o2) {
        var f2 = e & Et2, c2 = n2.length, l2 = t.length;
        if (c2 != l2 && !(f2 && l2 > c2)) return false;
        var v3 = o2.get(n2), _2 = o2.get(t);
        if (v3 && _2) return v3 == t && _2 == n2;
        var m2 = -1, P2 = true, I2 = e & ve2 ? new gt2() : i;
        for (o2.set(n2, t), o2.set(t, n2); ++m2 < c2; ) {
          var E3 = n2[m2], T2 = t[m2];
          if (r2) var y3 = f2 ? r2(T2, E3, m2, t, n2, o2) : r2(E3, T2, m2, n2, t, o2);
          if (y3 !== i) {
            if (y3) continue;
            P2 = false;
            break;
          }
          if (I2) {
            if (!Hr2(t, function(N2, $2) {
              if (!jt3(I2, $2) && (E3 === N2 || s(E3, N2, e, r2, o2))) return I2.push($2);
            })) {
              P2 = false;
              break;
            }
          } else if (!(E3 === T2 || s(E3, T2, e, r2, o2))) {
            P2 = false;
            break;
          }
        }
        return o2.delete(n2), o2.delete(t), P2;
      }
      function th2(n2, t, e, r2, s, o2, f2) {
        switch (e) {
          case Rt2:
            if (n2.byteLength != t.byteLength || n2.byteOffset != t.byteOffset) return false;
            n2 = n2.buffer, t = t.buffer;
          case kt3:
            return !(n2.byteLength != t.byteLength || !o2(new De2(n2), new De2(t)));
          case Yt3:
          case Zt3:
          case Jt2:
            return bn2(+n2, +t);
          case we2:
            return n2.name == t.name && n2.message == t.message;
          case Xt2:
          case Qt2:
            return n2 == t + "";
          case yn2:
            var c2 = qr2;
          case Sn2:
            var l2 = r2 & Et2;
            if (c2 || (c2 = Se2), n2.size != t.size && !l2) return false;
            var v3 = f2.get(n2);
            if (v3) return v3 == t;
            r2 |= ve2, f2.set(n2, t);
            var _2 = Ou2(c2(n2), c2(t), r2, s, o2, f2);
            return f2.delete(n2), _2;
          case Ae2:
            if (ie3) return ie3.call(n2) == ie3.call(t);
        }
        return false;
      }
      function eh2(n2, t, e, r2, s, o2) {
        var f2 = e & Et2, c2 = li(n2), l2 = c2.length, v3 = li(t), _2 = v3.length;
        if (l2 != _2 && !f2) return false;
        for (var m2 = l2; m2--; ) {
          var P2 = c2[m2];
          if (!(f2 ? P2 in t : F2.call(t, P2))) return false;
        }
        var I2 = o2.get(n2), E3 = o2.get(t);
        if (I2 && E3) return I2 == t && E3 == n2;
        var T2 = true;
        o2.set(n2, t), o2.set(t, n2);
        for (var y3 = f2; ++m2 < l2; ) {
          P2 = c2[m2];
          var N2 = n2[P2], $2 = t[P2];
          if (r2) var dn2 = f2 ? r2($2, N2, P2, t, n2, o2) : r2(N2, $2, P2, n2, t, o2);
          if (!(dn2 === i ? N2 === $2 || s(N2, $2, e, r2, o2) : dn2)) {
            T2 = false;
            break;
          }
          y3 || (y3 = P2 == "constructor");
        }
        if (T2 && !y3) {
          var sn = n2.constructor, gn = t.constructor;
          sn != gn && "constructor" in n2 && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn == "function" && gn instanceof gn) && (T2 = false);
        }
        return o2.delete(n2), o2.delete(t), T2;
      }
      function Yn2(n2) {
        return Pi2(Nu2(n2, i, Gu2), n2 + "");
      }
      function li(n2) {
        return Js2(n2, V4, vi2);
      }
      function pi2(n2) {
        return Js2(n2, on, Ru2);
      }
      var di = Fe2 ? function(n2) {
        return Fe2.get(n2);
      } : Di2;
      function je2(n2) {
        for (var t = n2.name + "", e = Ut5[t], r2 = F2.call(Ut5, t) ? e.length : 0; r2--; ) {
          var s = e[r2], o2 = s.func;
          if (o2 == null || o2 == n2) return s.name;
        }
        return t;
      }
      function qt2(n2) {
        var t = F2.call(a2, "placeholder") ? a2 : n2;
        return t.placeholder;
      }
      function x() {
        var n2 = a2.iteratee || Ti2;
        return n2 = n2 === Ti2 ? Vs2 : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function nr2(n2, t) {
        var e = n2.__data__;
        return ch2(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function gi2(n2) {
        for (var t = V4(n2), e = t.length; e--; ) {
          var r2 = t[e], s = n2[r2];
          t[e] = [r2, s, Lu(s)];
        }
        return t;
      }
      function mt2(n2, t) {
        var e = pf2(n2, t);
        return Qs2(e) ? e : i;
      }
      function rh2(n2) {
        var t = F2.call(n2, pt2), e = n2[pt2];
        try {
          n2[pt2] = i;
          var r2 = true;
        } catch {
        }
        var s = Te.call(n2);
        return r2 && (t ? n2[pt2] = e : delete n2[pt2]), s;
      }
      var vi2 = Gr2 ? function(n2) {
        return n2 == null ? [] : (n2 = M2(n2), jn2(Gr2(n2), function(t) {
          return Hs2.call(n2, t);
        }));
      } : Ni2, Ru2 = Gr2 ? function(n2) {
        for (var t = []; n2; ) nt2(t, vi2(n2)), n2 = Ne(n2);
        return t;
      } : Ni2, tn2 = en2;
      (zr2 && tn2(new zr2(new ArrayBuffer(1))) != Rt2 || te2 && tn2(new te2()) != yn2 || Kr2 && tn2(Kr2.resolve()) != Ki2 || $t2 && tn2(new $t2()) != Sn2 || ee2 && tn2(new ee2()) != Vt2) && (tn2 = function(n2) {
        var t = en2(n2), e = t == qn2 ? n2.constructor : i, r2 = e ? wt2(e) : "";
        if (r2) switch (r2) {
          case Ff2:
            return Rt2;
          case Mf2:
            return yn2;
          case qf2:
            return Ki2;
          case Bf2:
            return Sn2;
          case Gf2:
            return Vt2;
        }
        return t;
      });
      function ih2(n2, t, e) {
        for (var r2 = -1, s = e.length; ++r2 < s; ) {
          var o2 = e[r2], f2 = o2.size;
          switch (o2.type) {
            case "drop":
              n2 += f2;
              break;
            case "dropRight":
              t -= f2;
              break;
            case "take":
              t = nn(t, n2 + f2);
              break;
            case "takeRight":
              n2 = Q2(n2, t - f2);
              break;
          }
        }
        return { start: n2, end: t };
      }
      function sh2(n2) {
        var t = n2.match(fo2);
        return t ? t[1].split(co2) : [];
      }
      function bu2(n2, t, e) {
        t = st2(t, n2);
        for (var r2 = -1, s = t.length, o2 = false; ++r2 < s; ) {
          var f2 = Wn2(t[r2]);
          if (!(o2 = n2 != null && e(n2, f2))) break;
          n2 = n2[f2];
        }
        return o2 || ++r2 != s ? o2 : (s = n2 == null ? 0 : n2.length, !!s && ar3(s) && Zn(f2, s) && (O2(n2) || Pt2(n2)));
      }
      function uh2(n2) {
        var t = n2.length, e = new n2.constructor(t);
        return t && typeof n2[0] == "string" && F2.call(n2, "index") && (e.index = n2.index, e.input = n2.input), e;
      }
      function Tu(n2) {
        return typeof n2.constructor == "function" && !he2(n2) ? Wt3(Ne(n2)) : {};
      }
      function ah2(n2, t, e) {
        var r2 = n2.constructor;
        switch (t) {
          case kt3:
            return fi(n2);
          case Yt3:
          case Zt3:
            return new r2(+n2);
          case Rt2:
            return zc(n2, e);
          case gr2:
          case vr2:
          case _r2:
          case mr2:
          case wr2:
          case Pr2:
          case Ar2:
          case Cr3:
          case Ir3:
            return pu2(n2, e);
          case yn2:
            return new r2();
          case Jt2:
          case Qt2:
            return new r2(n2);
          case Xt2:
            return Kc(n2);
          case Sn2:
            return new r2();
          case Ae2:
            return Yc(n2);
        }
      }
      function oh2(n2, t) {
        var e = t.length;
        if (!e) return n2;
        var r2 = e - 1;
        return t[r2] = (e > 1 ? "& " : "") + t[r2], t = t.join(e > 2 ? ", " : " "), n2.replace(oo2, `{
/* [wrapped with ` + t + `] */
`);
      }
      function fh2(n2) {
        return O2(n2) || Pt2(n2) || !!($s2 && n2 && n2[$s2]);
      }
      function Zn(n2, t) {
        var e = typeof n2;
        return t = t ?? kn2, !!t && (e == "number" || e != "symbol" && Po2.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t;
      }
      function rn2(n2, t, e) {
        if (!K2(e)) return false;
        var r2 = typeof t;
        return (r2 == "number" ? an(e) && Zn(t, e.length) : r2 == "string" && t in e) ? bn2(e[t], n2) : false;
      }
      function _i2(n2, t) {
        if (O2(n2)) return false;
        var e = typeof n2;
        return e == "number" || e == "symbol" || e == "boolean" || n2 == null || pn(n2) ? true : io2.test(n2) || !ro2.test(n2) || t != null && n2 in M2(t);
      }
      function ch2(n2) {
        var t = typeof n2;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n2 !== "__proto__" : n2 === null;
      }
      function mi(n2) {
        var t = je2(n2), e = a2[t];
        if (typeof e != "function" || !(t in H.prototype)) return false;
        if (n2 === e) return true;
        var r2 = di(e);
        return !!r2 && n2 === r2[0];
      }
      function hh2(n2) {
        return !!Ls2 && Ls2 in n2;
      }
      var lh2 = Re2 ? Jn2 : Hi2;
      function he2(n2) {
        var t = n2 && n2.constructor, e = typeof t == "function" && t.prototype || Ht3;
        return n2 === e;
      }
      function Lu(n2) {
        return n2 === n2 && !K2(n2);
      }
      function Du2(n2, t) {
        return function(e) {
          return e == null ? false : e[n2] === t && (t !== i || n2 in M2(e));
        };
      }
      function ph(n2) {
        var t = sr2(n2, function(r2) {
          return e.size === pr2 && e.clear(), r2;
        }), e = t.cache;
        return t;
      }
      function dh(n2, t) {
        var e = n2[1], r2 = t[1], s = e | r2, o2 = s < (vn | ct2 | Mn), f2 = r2 == Mn && e == Dn2 || r2 == Mn && e == Kt2 && n2[7].length <= t[8] || r2 == (Mn | Kt2) && t[7].length <= t[8] && e == Dn2;
        if (!(o2 || f2)) return n2;
        r2 & vn && (n2[2] = t[2], s |= e & vn ? 0 : Bi2);
        var c2 = t[3];
        if (c2) {
          var l2 = n2[3];
          n2[3] = l2 ? gu2(l2, c2, t[4]) : c2, n2[4] = l2 ? tt2(n2[3], It2) : t[4];
        }
        return c2 = t[5], c2 && (l2 = n2[5], n2[5] = l2 ? vu2(l2, c2, t[6]) : c2, n2[6] = l2 ? tt2(n2[5], It2) : t[6]), c2 = t[7], c2 && (n2[7] = c2), r2 & Mn && (n2[8] = n2[8] == null ? t[8] : nn(n2[8], t[8])), n2[9] == null && (n2[9] = t[9]), n2[0] = t[0], n2[1] = s, n2;
      }
      function gh(n2) {
        var t = [];
        if (n2 != null) for (var e in M2(n2)) t.push(e);
        return t;
      }
      function vh(n2) {
        return Te.call(n2);
      }
      function Nu2(n2, t, e) {
        return t = Q2(t === i ? n2.length - 1 : t, 0), function() {
          for (var r2 = arguments, s = -1, o2 = Q2(r2.length - t, 0), f2 = d3(o2); ++s < o2; ) f2[s] = r2[t + s];
          s = -1;
          for (var c2 = d3(t + 1); ++s < t; ) c2[s] = r2[s];
          return c2[t] = e(f2), cn(n2, this, c2);
        };
      }
      function Hu(n2, t) {
        return t.length < 2 ? n2 : _t2(n2, Cn(t, 0, -1));
      }
      function _h(n2, t) {
        for (var e = n2.length, r2 = nn(t.length, e), s = un(n2); r2--; ) {
          var o2 = t[r2];
          n2[r2] = Zn(o2, e) ? s[o2] : i;
        }
        return n2;
      }
      function wi2(n2, t) {
        if (!(t === "constructor" && typeof n2[t] == "function") && t != "__proto__") return n2[t];
      }
      var $u2 = Wu2(su), le2 = Lf || function(n2, t) {
        return k2.setTimeout(n2, t);
      }, Pi2 = Wu2(Mc);
      function Uu(n2, t, e) {
        var r2 = t + "";
        return Pi2(n2, oh2(r2, mh(sh2(r2), e)));
      }
      function Wu2(n2) {
        var t = 0, e = 0;
        return function() {
          var r2 = $f2(), s = Ua2 - (r2 - e);
          if (e = r2, s > 0) {
            if (++t >= $a2) return arguments[0];
          } else t = 0;
          return n2.apply(i, arguments);
        };
      }
      function tr2(n2, t) {
        var e = -1, r2 = n2.length, s = r2 - 1;
        for (t = t === i ? r2 : t; ++e < t; ) {
          var o2 = ei(e, s), f2 = n2[o2];
          n2[o2] = n2[e], n2[e] = f2;
        }
        return n2.length = t, n2;
      }
      var Fu = ph(function(n2) {
        var t = [];
        return n2.charCodeAt(0) === 46 && t.push(""), n2.replace(so2, function(e, r2, s, o2) {
          t.push(s ? o2.replace(po2, "$1") : r2 || e);
        }), t;
      });
      function Wn2(n2) {
        if (typeof n2 == "string" || pn(n2)) return n2;
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht2 ? "-0" : t;
      }
      function wt2(n2) {
        if (n2 != null) {
          try {
            return be2.call(n2);
          } catch {
          }
          try {
            return n2 + "";
          } catch {
          }
        }
        return "";
      }
      function mh(n2, t) {
        return mn(Ga2, function(e) {
          var r2 = "_." + e[0];
          t & e[1] && !Ee2(n2, r2) && n2.push(r2);
        }), n2.sort();
      }
      function Mu2(n2) {
        if (n2 instanceof H) return n2.clone();
        var t = new Pn2(n2.__wrapped__, n2.__chain__);
        return t.__actions__ = un(n2.__actions__), t.__index__ = n2.__index__, t.__values__ = n2.__values__, t;
      }
      function wh(n2, t, e) {
        (e ? rn2(n2, t, e) : t === i) ? t = 1 : t = Q2(R(t), 0);
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2 || t < 1) return [];
        for (var s = 0, o2 = 0, f2 = d3(Ue2(r2 / t)); s < r2; ) f2[o2++] = Cn(n2, s, s += t);
        return f2;
      }
      function Ph(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r2 = 0, s = []; ++t < e; ) {
          var o2 = n2[t];
          o2 && (s[r2++] = o2);
        }
        return s;
      }
      function Ah() {
        var n2 = arguments.length;
        if (!n2) return [];
        for (var t = d3(n2 - 1), e = arguments[0], r2 = n2; r2--; ) t[r2 - 1] = arguments[r2];
        return nt2(O2(e) ? un(e) : [e], j2(t, 1));
      }
      var Ch = L5(function(n2, t) {
        return Z2(n2) ? ue2(n2, j2(t, 1, Z2, true)) : [];
      }), Ih = L5(function(n2, t) {
        var e = In2(t);
        return Z2(e) && (e = i), Z2(n2) ? ue2(n2, j2(t, 1, Z2, true), x(e, 2)) : [];
      }), xh = L5(function(n2, t) {
        var e = In2(t);
        return Z2(e) && (e = i), Z2(n2) ? ue2(n2, j2(t, 1, Z2, true), i, e) : [];
      });
      function Eh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i ? 1 : R(t), Cn(n2, t < 0 ? 0 : t, r2)) : [];
      }
      function yh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i ? 1 : R(t), t = r2 - t, Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function Sh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), true, true) : [];
      }
      function Oh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), true) : [];
      }
      function Rh(n2, t, e, r2) {
        var s = n2 == null ? 0 : n2.length;
        return s ? (e && typeof e != "number" && rn2(n2, t, e) && (e = 0, r2 = s), Ac(n2, t, e, r2)) : [];
      }
      function qu(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2) return -1;
        var s = e == null ? 0 : R(e);
        return s < 0 && (s = Q2(r2 + s, 0)), ye2(n2, x(t, 3), s);
      }
      function Bu2(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2) return -1;
        var s = r2 - 1;
        return e !== i && (s = R(e), s = e < 0 ? Q2(r2 + s, 0) : nn(s, r2 - 1)), ye2(n2, x(t, 3), s, true);
      }
      function Gu2(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, 1) : [];
      }
      function bh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, ht2) : [];
      }
      function Th(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        return e ? (t = t === i ? 1 : R(t), j2(n2, t)) : [];
      }
      function Lh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r2 = {}; ++t < e; ) {
          var s = n2[t];
          r2[s[0]] = s[1];
        }
        return r2;
      }
      function zu(n2) {
        return n2 && n2.length ? n2[0] : i;
      }
      function Dh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2) return -1;
        var s = e == null ? 0 : R(e);
        return s < 0 && (s = Q2(r2 + s, 0)), Tt2(n2, t, s);
      }
      function Nh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 0, -1) : [];
      }
      var Hh = L5(function(n2) {
        var t = G(n2, ai);
        return t.length && t[0] === n2[0] ? Vr2(t) : [];
      }), $h = L5(function(n2) {
        var t = In2(n2), e = G(n2, ai);
        return t === In2(e) ? t = i : e.pop(), e.length && e[0] === n2[0] ? Vr2(e, x(t, 2)) : [];
      }), Uh = L5(function(n2) {
        var t = In2(n2), e = G(n2, ai);
        return t = typeof t == "function" ? t : i, t && e.pop(), e.length && e[0] === n2[0] ? Vr2(e, i, t) : [];
      });
      function Wh(n2, t) {
        return n2 == null ? "" : Nf2.call(n2, t);
      }
      function In2(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? n2[t - 1] : i;
      }
      function Fh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2) return -1;
        var s = r2;
        return e !== i && (s = R(e), s = s < 0 ? Q2(r2 + s, 0) : nn(s, r2 - 1)), t === t ? mf2(n2, t, s) : ye2(n2, xs2, s, true);
      }
      function Mh(n2, t) {
        return n2 && n2.length ? tu2(n2, R(t)) : i;
      }
      var qh = L5(Ku);
      function Ku(n2, t) {
        return n2 && n2.length && t && t.length ? ti(n2, t) : n2;
      }
      function Bh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, x(e, 2)) : n2;
      }
      function Gh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, i, e) : n2;
      }
      var zh = Yn2(function(n2, t) {
        var e = n2 == null ? 0 : n2.length, r2 = Zr(n2, t);
        return iu2(n2, G(t, function(s) {
          return Zn(s, e) ? +s : s;
        }).sort(du2)), r2;
      });
      function Kh(n2, t) {
        var e = [];
        if (!(n2 && n2.length)) return e;
        var r2 = -1, s = [], o2 = n2.length;
        for (t = x(t, 3); ++r2 < o2; ) {
          var f2 = n2[r2];
          t(f2, r2, n2) && (e.push(f2), s.push(r2));
        }
        return iu2(n2, s), e;
      }
      function Ai2(n2) {
        return n2 == null ? n2 : Wf2.call(n2);
      }
      function Yh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (e && typeof e != "number" && rn2(n2, t, e) ? (t = 0, e = r2) : (t = t == null ? 0 : R(t), e = e === i ? r2 : R(e)), Cn(n2, t, e)) : [];
      }
      function Zh(n2, t) {
        return Ye2(n2, t);
      }
      function Jh(n2, t, e) {
        return ii(n2, t, x(e, 2));
      }
      function Xh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r2 = Ye2(n2, t);
          if (r2 < e && bn2(n2[r2], t)) return r2;
        }
        return -1;
      }
      function Qh(n2, t) {
        return Ye2(n2, t, true);
      }
      function Vh(n2, t, e) {
        return ii(n2, t, x(e, 2), true);
      }
      function kh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r2 = Ye2(n2, t, true) - 1;
          if (bn2(n2[r2], t)) return r2;
        }
        return -1;
      }
      function jh(n2) {
        return n2 && n2.length ? uu(n2) : [];
      }
      function nl(n2, t) {
        return n2 && n2.length ? uu(n2, x(t, 2)) : [];
      }
      function tl(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 1, t) : [];
      }
      function el(n2, t, e) {
        return n2 && n2.length ? (t = e || t === i ? 1 : R(t), Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function rl(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i ? 1 : R(t), t = r2 - t, Cn(n2, t < 0 ? 0 : t, r2)) : [];
      }
      function il(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), false, true) : [];
      }
      function sl(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3)) : [];
      }
      var ul = L5(function(n2) {
        return it2(j2(n2, 1, Z2, true));
      }), al = L5(function(n2) {
        var t = In2(n2);
        return Z2(t) && (t = i), it2(j2(n2, 1, Z2, true), x(t, 2));
      }), ol = L5(function(n2) {
        var t = In2(n2);
        return t = typeof t == "function" ? t : i, it2(j2(n2, 1, Z2, true), i, t);
      });
      function fl(n2) {
        return n2 && n2.length ? it2(n2) : [];
      }
      function cl(n2, t) {
        return n2 && n2.length ? it2(n2, x(t, 2)) : [];
      }
      function hl(n2, t) {
        return t = typeof t == "function" ? t : i, n2 && n2.length ? it2(n2, i, t) : [];
      }
      function Ci2(n2) {
        if (!(n2 && n2.length)) return [];
        var t = 0;
        return n2 = jn2(n2, function(e) {
          if (Z2(e)) return t = Q2(e.length, t), true;
        }), Fr2(t, function(e) {
          return G(n2, $r2(e));
        });
      }
      function Yu2(n2, t) {
        if (!(n2 && n2.length)) return [];
        var e = Ci2(n2);
        return t == null ? e : G(e, function(r2) {
          return cn(t, i, r2);
        });
      }
      var ll = L5(function(n2, t) {
        return Z2(n2) ? ue2(n2, t) : [];
      }), pl = L5(function(n2) {
        return ui(jn2(n2, Z2));
      }), dl = L5(function(n2) {
        var t = In2(n2);
        return Z2(t) && (t = i), ui(jn2(n2, Z2), x(t, 2));
      }), gl = L5(function(n2) {
        var t = In2(n2);
        return t = typeof t == "function" ? t : i, ui(jn2(n2, Z2), i, t);
      }), vl = L5(Ci2);
      function _l(n2, t) {
        return cu2(n2 || [], t || [], se2);
      }
      function ml(n2, t) {
        return cu2(n2 || [], t || [], fe2);
      }
      var wl = L5(function(n2) {
        var t = n2.length, e = t > 1 ? n2[t - 1] : i;
        return e = typeof e == "function" ? (n2.pop(), e) : i, Yu2(n2, e);
      });
      function Zu2(n2) {
        var t = a2(n2);
        return t.__chain__ = true, t;
      }
      function Pl(n2, t) {
        return t(n2), n2;
      }
      function er2(n2, t) {
        return t(n2);
      }
      var Al = Yn2(function(n2) {
        var t = n2.length, e = t ? n2[0] : 0, r2 = this.__wrapped__, s = function(o2) {
          return Zr(o2, n2);
        };
        return t > 1 || this.__actions__.length || !(r2 instanceof H) || !Zn(e) ? this.thru(s) : (r2 = r2.slice(e, +e + (t ? 1 : 0)), r2.__actions__.push({ func: er2, args: [s], thisArg: i }), new Pn2(r2, this.__chain__).thru(function(o2) {
          return t && !o2.length && o2.push(i), o2;
        }));
      });
      function Cl() {
        return Zu2(this);
      }
      function Il() {
        return new Pn2(this.value(), this.__chain__);
      }
      function xl() {
        this.__values__ === i && (this.__values__ = aa2(this.value()));
        var n2 = this.__index__ >= this.__values__.length, t = n2 ? i : this.__values__[this.__index__++];
        return { done: n2, value: t };
      }
      function El() {
        return this;
      }
      function yl(n2) {
        for (var t, e = this; e instanceof qe2; ) {
          var r2 = Mu2(e);
          r2.__index__ = 0, r2.__values__ = i, t ? s.__wrapped__ = r2 : t = r2;
          var s = r2;
          e = e.__wrapped__;
        }
        return s.__wrapped__ = n2, t;
      }
      function Sl() {
        var n2 = this.__wrapped__;
        if (n2 instanceof H) {
          var t = n2;
          return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({ func: er2, args: [Ai2], thisArg: i }), new Pn2(t, this.__chain__);
        }
        return this.thru(Ai2);
      }
      function Ol() {
        return fu2(this.__wrapped__, this.__actions__);
      }
      var Rl = Je2(function(n2, t, e) {
        F2.call(n2, e) ? ++n2[e] : zn2(n2, e, 1);
      });
      function bl(n2, t, e) {
        var r2 = O2(n2) ? Cs2 : Pc;
        return e && rn2(n2, t, e) && (t = i), r2(n2, x(t, 3));
      }
      function Tl(n2, t) {
        var e = O2(n2) ? jn2 : Ys2;
        return e(n2, x(t, 3));
      }
      var Ll = Pu2(qu), Dl = Pu2(Bu2);
      function Nl(n2, t) {
        return j2(rr2(n2, t), 1);
      }
      function Hl(n2, t) {
        return j2(rr2(n2, t), ht2);
      }
      function $l(n2, t, e) {
        return e = e === i ? 1 : R(e), j2(rr2(n2, t), e);
      }
      function Ju2(n2, t) {
        var e = O2(n2) ? mn : rt2;
        return e(n2, x(t, 3));
      }
      function Xu2(n2, t) {
        var e = O2(n2) ? nf2 : Ks2;
        return e(n2, x(t, 3));
      }
      var Ul = Je2(function(n2, t, e) {
        F2.call(n2, e) ? n2[e].push(t) : zn2(n2, e, [t]);
      });
      function Wl(n2, t, e, r2) {
        n2 = an(n2) ? n2 : Gt2(n2), e = e && !r2 ? R(e) : 0;
        var s = n2.length;
        return e < 0 && (e = Q2(s + e, 0)), or2(n2) ? e <= s && n2.indexOf(t, e) > -1 : !!s && Tt2(n2, t, e) > -1;
      }
      var Fl = L5(function(n2, t, e) {
        var r2 = -1, s = typeof t == "function", o2 = an(n2) ? d3(n2.length) : [];
        return rt2(n2, function(f2) {
          o2[++r2] = s ? cn(t, f2, e) : ae2(f2, t, e);
        }), o2;
      }), Ml = Je2(function(n2, t, e) {
        zn2(n2, e, t);
      });
      function rr2(n2, t) {
        var e = O2(n2) ? G : ks2;
        return e(n2, x(t, 3));
      }
      function ql(n2, t, e, r2) {
        return n2 == null ? [] : (O2(t) || (t = t == null ? [] : [t]), e = r2 ? i : e, O2(e) || (e = e == null ? [] : [e]), eu2(n2, t, e));
      }
      var Bl = Je2(function(n2, t, e) {
        n2[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Gl(n2, t, e) {
        var r2 = O2(n2) ? Nr2 : ys2, s = arguments.length < 3;
        return r2(n2, x(t, 4), e, s, rt2);
      }
      function zl(n2, t, e) {
        var r2 = O2(n2) ? tf : ys2, s = arguments.length < 3;
        return r2(n2, x(t, 4), e, s, Ks2);
      }
      function Kl(n2, t) {
        var e = O2(n2) ? jn2 : Ys2;
        return e(n2, ur2(x(t, 3)));
      }
      function Yl(n2) {
        var t = O2(n2) ? qs2 : Wc;
        return t(n2);
      }
      function Zl(n2, t, e) {
        (e ? rn2(n2, t, e) : t === i) ? t = 1 : t = R(t);
        var r2 = O2(n2) ? gc : Fc;
        return r2(n2, t);
      }
      function Jl(n2) {
        var t = O2(n2) ? vc : qc;
        return t(n2);
      }
      function Xl(n2) {
        if (n2 == null) return 0;
        if (an(n2)) return or2(n2) ? Dt2(n2) : n2.length;
        var t = tn2(n2);
        return t == yn2 || t == Sn2 ? n2.size : jr2(n2).length;
      }
      function Ql(n2, t, e) {
        var r2 = O2(n2) ? Hr2 : Bc;
        return e && rn2(n2, t, e) && (t = i), r2(n2, x(t, 3));
      }
      var Vl = L5(function(n2, t) {
        if (n2 == null) return [];
        var e = t.length;
        return e > 1 && rn2(n2, t[0], t[1]) ? t = [] : e > 2 && rn2(t[0], t[1], t[2]) && (t = [t[0]]), eu2(n2, j2(t, 1), []);
      }), ir2 = Tf2 || function() {
        return k2.Date.now();
      };
      function kl(n2, t) {
        if (typeof t != "function") throw new wn2(D2);
        return n2 = R(n2), function() {
          if (--n2 < 1) return t.apply(this, arguments);
        };
      }
      function Qu2(n2, t, e) {
        return t = e ? i : t, t = n2 && t == null ? n2.length : t, Kn2(n2, Mn, i, i, i, i, t);
      }
      function Vu2(n2, t) {
        var e;
        if (typeof t != "function") throw new wn2(D2);
        return n2 = R(n2), function() {
          return --n2 > 0 && (e = t.apply(this, arguments)), n2 <= 1 && (t = i), e;
        };
      }
      var Ii2 = L5(function(n2, t, e) {
        var r2 = vn;
        if (e.length) {
          var s = tt2(e, qt2(Ii2));
          r2 |= Nn2;
        }
        return Kn2(n2, r2, t, e, s);
      }), ku = L5(function(n2, t, e) {
        var r2 = vn | ct2;
        if (e.length) {
          var s = tt2(e, qt2(ku));
          r2 |= Nn2;
        }
        return Kn2(t, r2, n2, e, s);
      });
      function ju2(n2, t, e) {
        t = e ? i : t;
        var r2 = Kn2(n2, Dn2, i, i, i, i, i, t);
        return r2.placeholder = ju2.placeholder, r2;
      }
      function na2(n2, t, e) {
        t = e ? i : t;
        var r2 = Kn2(n2, yt2, i, i, i, i, i, t);
        return r2.placeholder = na2.placeholder, r2;
      }
      function ta2(n2, t, e) {
        var r2, s, o2, f2, c2, l2, v3 = 0, _2 = false, m2 = false, P2 = true;
        if (typeof n2 != "function") throw new wn2(D2);
        t = xn2(t) || 0, K2(e) && (_2 = !!e.leading, m2 = "maxWait" in e, o2 = m2 ? Q2(xn2(e.maxWait) || 0, t) : o2, P2 = "trailing" in e ? !!e.trailing : P2);
        function I2(J2) {
          var Tn2 = r2, Qn2 = s;
          return r2 = s = i, v3 = J2, f2 = n2.apply(Qn2, Tn2), f2;
        }
        function E3(J2) {
          return v3 = J2, c2 = le2(N2, t), _2 ? I2(J2) : f2;
        }
        function T2(J2) {
          var Tn2 = J2 - l2, Qn2 = J2 - v3, Pa2 = t - Tn2;
          return m2 ? nn(Pa2, o2 - Qn2) : Pa2;
        }
        function y3(J2) {
          var Tn2 = J2 - l2, Qn2 = J2 - v3;
          return l2 === i || Tn2 >= t || Tn2 < 0 || m2 && Qn2 >= o2;
        }
        function N2() {
          var J2 = ir2();
          if (y3(J2)) return $2(J2);
          c2 = le2(N2, T2(J2));
        }
        function $2(J2) {
          return c2 = i, P2 && r2 ? I2(J2) : (r2 = s = i, f2);
        }
        function dn2() {
          c2 !== i && hu(c2), v3 = 0, r2 = l2 = s = c2 = i;
        }
        function sn() {
          return c2 === i ? f2 : $2(ir2());
        }
        function gn() {
          var J2 = ir2(), Tn2 = y3(J2);
          if (r2 = arguments, s = this, l2 = J2, Tn2) {
            if (c2 === i) return E3(l2);
            if (m2) return hu(c2), c2 = le2(N2, t), I2(l2);
          }
          return c2 === i && (c2 = le2(N2, t)), f2;
        }
        return gn.cancel = dn2, gn.flush = sn, gn;
      }
      var jl = L5(function(n2, t) {
        return zs2(n2, 1, t);
      }), np = L5(function(n2, t, e) {
        return zs2(n2, xn2(t) || 0, e);
      });
      function tp(n2) {
        return Kn2(n2, dr4);
      }
      function sr2(n2, t) {
        if (typeof n2 != "function" || t != null && typeof t != "function") throw new wn2(D2);
        var e = function() {
          var r2 = arguments, s = t ? t.apply(this, r2) : r2[0], o2 = e.cache;
          if (o2.has(s)) return o2.get(s);
          var f2 = n2.apply(this, r2);
          return e.cache = o2.set(s, f2) || o2, f2;
        };
        return e.cache = new (sr2.Cache || Gn2)(), e;
      }
      sr2.Cache = Gn2;
      function ur2(n2) {
        if (typeof n2 != "function") throw new wn2(D2);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t[0]);
            case 2:
              return !n2.call(this, t[0], t[1]);
            case 3:
              return !n2.call(this, t[0], t[1], t[2]);
          }
          return !n2.apply(this, t);
        };
      }
      function ep(n2) {
        return Vu2(2, n2);
      }
      var rp = Gc(function(n2, t) {
        t = t.length == 1 && O2(t[0]) ? G(t[0], hn(x())) : G(j2(t, 1), hn(x()));
        var e = t.length;
        return L5(function(r2) {
          for (var s = -1, o2 = nn(r2.length, e); ++s < o2; ) r2[s] = t[s].call(this, r2[s]);
          return cn(n2, this, r2);
        });
      }), xi2 = L5(function(n2, t) {
        var e = tt2(t, qt2(xi2));
        return Kn2(n2, Nn2, i, t, e);
      }), ea2 = L5(function(n2, t) {
        var e = tt2(t, qt2(ea2));
        return Kn2(n2, St2, i, t, e);
      }), ip = Yn2(function(n2, t) {
        return Kn2(n2, Kt2, i, i, i, t);
      });
      function sp(n2, t) {
        if (typeof n2 != "function") throw new wn2(D2);
        return t = t === i ? t : R(t), L5(n2, t);
      }
      function up(n2, t) {
        if (typeof n2 != "function") throw new wn2(D2);
        return t = t == null ? 0 : Q2(R(t), 0), L5(function(e) {
          var r2 = e[t], s = ut2(e, 0, t);
          return r2 && nt2(s, r2), cn(n2, this, s);
        });
      }
      function ap(n2, t, e) {
        var r2 = true, s = true;
        if (typeof n2 != "function") throw new wn2(D2);
        return K2(e) && (r2 = "leading" in e ? !!e.leading : r2, s = "trailing" in e ? !!e.trailing : s), ta2(n2, t, { leading: r2, maxWait: t, trailing: s });
      }
      function op(n2) {
        return Qu2(n2, 1);
      }
      function fp(n2, t) {
        return xi2(oi(t), n2);
      }
      function cp() {
        if (!arguments.length) return [];
        var n2 = arguments[0];
        return O2(n2) ? n2 : [n2];
      }
      function hp(n2) {
        return An(n2, xt2);
      }
      function lp(n2, t) {
        return t = typeof t == "function" ? t : i, An(n2, xt2, t);
      }
      function pp(n2) {
        return An(n2, Ln2 | xt2);
      }
      function dp(n2, t) {
        return t = typeof t == "function" ? t : i, An(n2, Ln2 | xt2, t);
      }
      function gp(n2, t) {
        return t == null || Gs2(n2, t, V4(t));
      }
      function bn2(n2, t) {
        return n2 === t || n2 !== n2 && t !== t;
      }
      var vp = ke2(Qr2), _p = ke2(function(n2, t) {
        return n2 >= t;
      }), Pt2 = Xs2(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Xs2 : function(n2) {
        return Y(n2) && F2.call(n2, "callee") && !Hs2.call(n2, "callee");
      }, O2 = d3.isArray, mp = vs2 ? hn(vs2) : yc;
      function an(n2) {
        return n2 != null && ar3(n2.length) && !Jn2(n2);
      }
      function Z2(n2) {
        return Y(n2) && an(n2);
      }
      function wp(n2) {
        return n2 === true || n2 === false || Y(n2) && en2(n2) == Yt3;
      }
      var at2 = Df2 || Hi2, Pp = _s2 ? hn(_s2) : Sc;
      function Ap(n2) {
        return Y(n2) && n2.nodeType === 1 && !pe2(n2);
      }
      function Cp(n2) {
        if (n2 == null) return true;
        if (an(n2) && (O2(n2) || typeof n2 == "string" || typeof n2.splice == "function" || at2(n2) || Bt2(n2) || Pt2(n2))) return !n2.length;
        var t = tn2(n2);
        if (t == yn2 || t == Sn2) return !n2.size;
        if (he2(n2)) return !jr2(n2).length;
        for (var e in n2) if (F2.call(n2, e)) return false;
        return true;
      }
      function Ip(n2, t) {
        return oe2(n2, t);
      }
      function xp(n2, t, e) {
        e = typeof e == "function" ? e : i;
        var r2 = e ? e(n2, t) : i;
        return r2 === i ? oe2(n2, t, i, e) : !!r2;
      }
      function Ei2(n2) {
        if (!Y(n2)) return false;
        var t = en2(n2);
        return t == we2 || t == Ka2 || typeof n2.message == "string" && typeof n2.name == "string" && !pe2(n2);
      }
      function Ep(n2) {
        return typeof n2 == "number" && Us2(n2);
      }
      function Jn2(n2) {
        if (!K2(n2)) return false;
        var t = en2(n2);
        return t == Pe2 || t == zi2 || t == za2 || t == Za2;
      }
      function ra2(n2) {
        return typeof n2 == "number" && n2 == R(n2);
      }
      function ar3(n2) {
        return typeof n2 == "number" && n2 > -1 && n2 % 1 == 0 && n2 <= kn2;
      }
      function K2(n2) {
        var t = typeof n2;
        return n2 != null && (t == "object" || t == "function");
      }
      function Y(n2) {
        return n2 != null && typeof n2 == "object";
      }
      var ia2 = ms2 ? hn(ms2) : Rc;
      function yp(n2, t) {
        return n2 === t || kr2(n2, t, gi2(t));
      }
      function Sp(n2, t, e) {
        return e = typeof e == "function" ? e : i, kr2(n2, t, gi2(t), e);
      }
      function Op(n2) {
        return sa2(n2) && n2 != +n2;
      }
      function Rp(n2) {
        if (lh2(n2)) throw new S2(b3);
        return Qs2(n2);
      }
      function bp(n2) {
        return n2 === null;
      }
      function Tp(n2) {
        return n2 == null;
      }
      function sa2(n2) {
        return typeof n2 == "number" || Y(n2) && en2(n2) == Jt2;
      }
      function pe2(n2) {
        if (!Y(n2) || en2(n2) != qn2) return false;
        var t = Ne(n2);
        if (t === null) return true;
        var e = F2.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && be2.call(e) == Sf2;
      }
      var yi2 = ws2 ? hn(ws2) : bc;
      function Lp(n2) {
        return ra2(n2) && n2 >= -kn2 && n2 <= kn2;
      }
      var ua2 = Ps2 ? hn(Ps2) : Tc;
      function or2(n2) {
        return typeof n2 == "string" || !O2(n2) && Y(n2) && en2(n2) == Qt2;
      }
      function pn(n2) {
        return typeof n2 == "symbol" || Y(n2) && en2(n2) == Ae2;
      }
      var Bt2 = As2 ? hn(As2) : Lc;
      function Dp(n2) {
        return n2 === i;
      }
      function Np(n2) {
        return Y(n2) && tn2(n2) == Vt2;
      }
      function Hp(n2) {
        return Y(n2) && en2(n2) == Xa2;
      }
      var $p = ke2(ni), Up = ke2(function(n2, t) {
        return n2 <= t;
      });
      function aa2(n2) {
        if (!n2) return [];
        if (an(n2)) return or2(n2) ? On2(n2) : un(n2);
        if (ne3 && n2[ne3]) return gf2(n2[ne3]());
        var t = tn2(n2), e = t == yn2 ? qr2 : t == Sn2 ? Se2 : Gt2;
        return e(n2);
      }
      function Xn2(n2) {
        if (!n2) return n2 === 0 ? n2 : 0;
        if (n2 = xn2(n2), n2 === ht2 || n2 === -ht2) {
          var t = n2 < 0 ? -1 : 1;
          return t * Ma2;
        }
        return n2 === n2 ? n2 : 0;
      }
      function R(n2) {
        var t = Xn2(n2), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function oa2(n2) {
        return n2 ? vt2(R(n2), 0, Hn2) : 0;
      }
      function xn2(n2) {
        if (typeof n2 == "number") return n2;
        if (pn(n2)) return _e2;
        if (K2(n2)) {
          var t = typeof n2.valueOf == "function" ? n2.valueOf() : n2;
          n2 = K2(t) ? t + "" : t;
        }
        if (typeof n2 != "string") return n2 === 0 ? n2 : +n2;
        n2 = Ss2(n2);
        var e = _o2.test(n2);
        return e || wo2.test(n2) ? Vo(n2.slice(2), e ? 2 : 8) : vo2.test(n2) ? _e2 : +n2;
      }
      function fa2(n2) {
        return Un2(n2, on(n2));
      }
      function Wp(n2) {
        return n2 ? vt2(R(n2), -kn2, kn2) : n2 === 0 ? n2 : 0;
      }
      function W(n2) {
        return n2 == null ? "" : ln(n2);
      }
      var Fp = Ft2(function(n2, t) {
        if (he2(t) || an(t)) {
          Un2(t, V4(t), n2);
          return;
        }
        for (var e in t) F2.call(t, e) && se2(n2, e, t[e]);
      }), ca2 = Ft2(function(n2, t) {
        Un2(t, on(t), n2);
      }), fr2 = Ft2(function(n2, t, e, r2) {
        Un2(t, on(t), n2, r2);
      }), Mp = Ft2(function(n2, t, e, r2) {
        Un2(t, V4(t), n2, r2);
      }), qp = Yn2(Zr);
      function Bp(n2, t) {
        var e = Wt3(n2);
        return t == null ? e : Bs2(e, t);
      }
      var Gp = L5(function(n2, t) {
        n2 = M2(n2);
        var e = -1, r2 = t.length, s = r2 > 2 ? t[2] : i;
        for (s && rn2(t[0], t[1], s) && (r2 = 1); ++e < r2; ) for (var o2 = t[e], f2 = on(o2), c2 = -1, l2 = f2.length; ++c2 < l2; ) {
          var v3 = f2[c2], _2 = n2[v3];
          (_2 === i || bn2(_2, Ht3[v3]) && !F2.call(n2, v3)) && (n2[v3] = o2[v3]);
        }
        return n2;
      }), zp = L5(function(n2) {
        return n2.push(i, Su2), cn(ha2, i, n2);
      });
      function Kp(n2, t) {
        return Is2(n2, x(t, 3), $n2);
      }
      function Yp(n2, t) {
        return Is2(n2, x(t, 3), Xr);
      }
      function Zp(n2, t) {
        return n2 == null ? n2 : Jr2(n2, x(t, 3), on);
      }
      function Jp(n2, t) {
        return n2 == null ? n2 : Zs2(n2, x(t, 3), on);
      }
      function Xp(n2, t) {
        return n2 && $n2(n2, x(t, 3));
      }
      function Qp(n2, t) {
        return n2 && Xr(n2, x(t, 3));
      }
      function Vp(n2) {
        return n2 == null ? [] : ze2(n2, V4(n2));
      }
      function kp(n2) {
        return n2 == null ? [] : ze2(n2, on(n2));
      }
      function Si2(n2, t, e) {
        var r2 = n2 == null ? i : _t2(n2, t);
        return r2 === i ? e : r2;
      }
      function jp(n2, t) {
        return n2 != null && bu2(n2, t, Cc);
      }
      function Oi2(n2, t) {
        return n2 != null && bu2(n2, t, Ic);
      }
      var nd = Cu2(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), n2[t] = e;
      }, bi2(fn)), td = Cu2(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), F2.call(n2, t) ? n2[t].push(e) : n2[t] = [e];
      }, x), ed = L5(ae2);
      function V4(n2) {
        return an(n2) ? Ms2(n2) : jr2(n2);
      }
      function on(n2) {
        return an(n2) ? Ms2(n2, true) : Dc(n2);
      }
      function rd(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r2, s, o2) {
          zn2(e, t(r2, s, o2), r2);
        }), e;
      }
      function id(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r2, s, o2) {
          zn2(e, s, t(r2, s, o2));
        }), e;
      }
      var sd = Ft2(function(n2, t, e) {
        Ke2(n2, t, e);
      }), ha2 = Ft2(function(n2, t, e, r2) {
        Ke2(n2, t, e, r2);
      }), ud = Yn2(function(n2, t) {
        var e = {};
        if (n2 == null) return e;
        var r2 = false;
        t = G(t, function(o2) {
          return o2 = st2(o2, n2), r2 || (r2 = o2.length > 1), o2;
        }), Un2(n2, pi2(n2), e), r2 && (e = An(e, Ln2 | Fn2 | xt2, nh2));
        for (var s = t.length; s--; ) si(e, t[s]);
        return e;
      });
      function ad(n2, t) {
        return la2(n2, ur2(x(t)));
      }
      var od = Yn2(function(n2, t) {
        return n2 == null ? {} : Hc(n2, t);
      });
      function la2(n2, t) {
        if (n2 == null) return {};
        var e = G(pi2(n2), function(r2) {
          return [r2];
        });
        return t = x(t), ru2(n2, e, function(r2, s) {
          return t(r2, s[0]);
        });
      }
      function fd(n2, t, e) {
        t = st2(t, n2);
        var r2 = -1, s = t.length;
        for (s || (s = 1, n2 = i); ++r2 < s; ) {
          var o2 = n2 == null ? i : n2[Wn2(t[r2])];
          o2 === i && (r2 = s, o2 = e), n2 = Jn2(o2) ? o2.call(n2) : o2;
        }
        return n2;
      }
      function cd(n2, t, e) {
        return n2 == null ? n2 : fe2(n2, t, e);
      }
      function hd(n2, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i, n2 == null ? n2 : fe2(n2, t, e, r2);
      }
      var pa2 = Eu2(V4), da2 = Eu2(on);
      function ld(n2, t, e) {
        var r2 = O2(n2), s = r2 || at2(n2) || Bt2(n2);
        if (t = x(t, 4), e == null) {
          var o2 = n2 && n2.constructor;
          s ? e = r2 ? new o2() : [] : K2(n2) ? e = Jn2(o2) ? Wt3(Ne(n2)) : {} : e = {};
        }
        return (s ? mn : $n2)(n2, function(f2, c2, l2) {
          return t(e, f2, c2, l2);
        }), e;
      }
      function pd(n2, t) {
        return n2 == null ? true : si(n2, t);
      }
      function dd(n2, t, e) {
        return n2 == null ? n2 : ou2(n2, t, oi(e));
      }
      function gd(n2, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i, n2 == null ? n2 : ou2(n2, t, oi(e), r2);
      }
      function Gt2(n2) {
        return n2 == null ? [] : Mr2(n2, V4(n2));
      }
      function vd(n2) {
        return n2 == null ? [] : Mr2(n2, on(n2));
      }
      function _d(n2, t, e) {
        return e === i && (e = t, t = i), e !== i && (e = xn2(e), e = e === e ? e : 0), t !== i && (t = xn2(t), t = t === t ? t : 0), vt2(xn2(n2), t, e);
      }
      function md(n2, t, e) {
        return t = Xn2(t), e === i ? (e = t, t = 0) : e = Xn2(e), n2 = xn2(n2), xc(n2, t, e);
      }
      function wd(n2, t, e) {
        if (e && typeof e != "boolean" && rn2(n2, t, e) && (t = e = i), e === i && (typeof t == "boolean" ? (e = t, t = i) : typeof n2 == "boolean" && (e = n2, n2 = i)), n2 === i && t === i ? (n2 = 0, t = 1) : (n2 = Xn2(n2), t === i ? (t = n2, n2 = 0) : t = Xn2(t)), n2 > t) {
          var r2 = n2;
          n2 = t, t = r2;
        }
        if (e || n2 % 1 || t % 1) {
          var s = Ws2();
          return nn(n2 + s * (t - n2 + Qo2("1e-" + ((s + "").length - 1))), t);
        }
        return ei(n2, t);
      }
      var Pd = Mt2(function(n2, t, e) {
        return t = t.toLowerCase(), n2 + (e ? ga2(t) : t);
      });
      function ga2(n2) {
        return Ri2(W(n2).toLowerCase());
      }
      function va2(n2) {
        return n2 = W(n2), n2 && n2.replace(Ao2, cf2).replace(Mo2, "");
      }
      function Ad(n2, t, e) {
        n2 = W(n2), t = ln(t);
        var r2 = n2.length;
        e = e === i ? r2 : vt2(R(e), 0, r2);
        var s = e;
        return e -= t.length, e >= 0 && n2.slice(e, s) == t;
      }
      function Cd(n2) {
        return n2 = W(n2), n2 && no2.test(n2) ? n2.replace(Zi2, hf2) : n2;
      }
      function Id(n2) {
        return n2 = W(n2), n2 && uo.test(n2) ? n2.replace(xr2, "\\$&") : n2;
      }
      var xd = Mt2(function(n2, t, e) {
        return n2 + (e ? "-" : "") + t.toLowerCase();
      }), Ed = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toLowerCase();
      }), yd = wu2("toLowerCase");
      function Sd(n2, t, e) {
        n2 = W(n2), t = R(t);
        var r2 = t ? Dt2(n2) : 0;
        if (!t || r2 >= t) return n2;
        var s = (t - r2) / 2;
        return Ve2(We2(s), e) + n2 + Ve2(Ue2(s), e);
      }
      function Od(n2, t, e) {
        n2 = W(n2), t = R(t);
        var r2 = t ? Dt2(n2) : 0;
        return t && r2 < t ? n2 + Ve2(t - r2, e) : n2;
      }
      function Rd(n2, t, e) {
        n2 = W(n2), t = R(t);
        var r2 = t ? Dt2(n2) : 0;
        return t && r2 < t ? Ve2(t - r2, e) + n2 : n2;
      }
      function bd(n2, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), Uf2(W(n2).replace(Er2, ""), t || 0);
      }
      function Td(n2, t, e) {
        return (e ? rn2(n2, t, e) : t === i) ? t = 1 : t = R(t), ri(W(n2), t);
      }
      function Ld() {
        var n2 = arguments, t = W(n2[0]);
        return n2.length < 3 ? t : t.replace(n2[1], n2[2]);
      }
      var Dd = Mt2(function(n2, t, e) {
        return n2 + (e ? "_" : "") + t.toLowerCase();
      });
      function Nd(n2, t, e) {
        return e && typeof e != "number" && rn2(n2, t, e) && (t = e = i), e = e === i ? Hn2 : e >>> 0, e ? (n2 = W(n2), n2 && (typeof t == "string" || t != null && !yi2(t)) && (t = ln(t), !t && Lt2(n2)) ? ut2(On2(n2), 0, e) : n2.split(t, e)) : [];
      }
      var Hd = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + Ri2(t);
      });
      function $d(n2, t, e) {
        return n2 = W(n2), e = e == null ? 0 : vt2(R(e), 0, n2.length), t = ln(t), n2.slice(e, e + t.length) == t;
      }
      function Ud(n2, t, e) {
        var r2 = a2.templateSettings;
        e && rn2(n2, t, e) && (t = i), n2 = W(n2), t = fr2({}, t, r2, yu2);
        var s = fr2({}, t.imports, r2.imports, yu2), o2 = V4(s), f2 = Mr2(s, o2), c2, l2, v3 = 0, _2 = t.interpolate || Ce2, m2 = "__p += '", P2 = Br2((t.escape || Ce2).source + "|" + _2.source + "|" + (_2 === Ji2 ? go2 : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I2 = "//# sourceURL=" + (F2.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`;
        n2.replace(P2, function(y3, N2, $2, dn2, sn, gn) {
          return $2 || ($2 = dn2), m2 += n2.slice(v3, gn).replace(Co2, lf2), N2 && (c2 = true, m2 += `' +
__e(` + N2 + `) +
'`), sn && (l2 = true, m2 += `';
` + sn + `;
__p += '`), $2 && (m2 += `' +
((__t = (` + $2 + `)) == null ? '' : __t) +
'`), v3 = gn + y3.length, y3;
        }), m2 += `';
`;
        var E3 = F2.call(t, "variable") && t.variable;
        if (!E3) m2 = `with (obj) {
` + m2 + `
}
`;
        else if (lo2.test(E3)) throw new S2(En2);
        m2 = (l2 ? m2.replace(Qa2, "") : m2).replace(Va2, "$1").replace(ka2, "$1;"), m2 = "function(" + (E3 || "obj") + `) {
` + (E3 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c2 ? ", __e = _.escape" : "") + (l2 ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var T2 = ma2(function() {
          return U2(o2, I2 + "return " + m2).apply(i, f2);
        });
        if (T2.source = m2, Ei2(T2)) throw T2;
        return T2;
      }
      function Wd(n2) {
        return W(n2).toLowerCase();
      }
      function Fd(n2) {
        return W(n2).toUpperCase();
      }
      function Md(n2, t, e) {
        if (n2 = W(n2), n2 && (e || t === i)) return Ss2(n2);
        if (!n2 || !(t = ln(t))) return n2;
        var r2 = On2(n2), s = On2(t), o2 = Os2(r2, s), f2 = Rs2(r2, s) + 1;
        return ut2(r2, o2, f2).join("");
      }
      function qd(n2, t, e) {
        if (n2 = W(n2), n2 && (e || t === i)) return n2.slice(0, Ts2(n2) + 1);
        if (!n2 || !(t = ln(t))) return n2;
        var r2 = On2(n2), s = Rs2(r2, On2(t)) + 1;
        return ut2(r2, 0, s).join("");
      }
      function Bd(n2, t, e) {
        if (n2 = W(n2), n2 && (e || t === i)) return n2.replace(Er2, "");
        if (!n2 || !(t = ln(t))) return n2;
        var r2 = On2(n2), s = Os2(r2, On2(t));
        return ut2(r2, s).join("");
      }
      function Gd(n2, t) {
        var e = Na2, r2 = Ha2;
        if (K2(t)) {
          var s = "separator" in t ? t.separator : s;
          e = "length" in t ? R(t.length) : e, r2 = "omission" in t ? ln(t.omission) : r2;
        }
        n2 = W(n2);
        var o2 = n2.length;
        if (Lt2(n2)) {
          var f2 = On2(n2);
          o2 = f2.length;
        }
        if (e >= o2) return n2;
        var c2 = e - Dt2(r2);
        if (c2 < 1) return r2;
        var l2 = f2 ? ut2(f2, 0, c2).join("") : n2.slice(0, c2);
        if (s === i) return l2 + r2;
        if (f2 && (c2 += l2.length - c2), yi2(s)) {
          if (n2.slice(c2).search(s)) {
            var v3, _2 = l2;
            for (s.global || (s = Br2(s.source, W(Xi2.exec(s)) + "g")), s.lastIndex = 0; v3 = s.exec(_2); ) var m2 = v3.index;
            l2 = l2.slice(0, m2 === i ? c2 : m2);
          }
        } else if (n2.indexOf(ln(s), c2) != c2) {
          var P2 = l2.lastIndexOf(s);
          P2 > -1 && (l2 = l2.slice(0, P2));
        }
        return l2 + r2;
      }
      function zd(n2) {
        return n2 = W(n2), n2 && ja2.test(n2) ? n2.replace(Yi2, wf2) : n2;
      }
      var Kd = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toUpperCase();
      }), Ri2 = wu2("toUpperCase");
      function _a2(n2, t, e) {
        return n2 = W(n2), t = e ? i : t, t === i ? df2(n2) ? Cf2(n2) : sf2(n2) : n2.match(t) || [];
      }
      var ma2 = L5(function(n2, t) {
        try {
          return cn(n2, i, t);
        } catch (e) {
          return Ei2(e) ? e : new S2(e);
        }
      }), Yd = Yn2(function(n2, t) {
        return mn(t, function(e) {
          e = Wn2(e), zn2(n2, e, Ii2(n2[e], n2));
        }), n2;
      });
      function Zd(n2) {
        var t = n2 == null ? 0 : n2.length, e = x();
        return n2 = t ? G(n2, function(r2) {
          if (typeof r2[1] != "function") throw new wn2(D2);
          return [e(r2[0]), r2[1]];
        }) : [], L5(function(r2) {
          for (var s = -1; ++s < t; ) {
            var o2 = n2[s];
            if (cn(o2[0], this, r2)) return cn(o2[1], this, r2);
          }
        });
      }
      function Jd(n2) {
        return wc(An(n2, Ln2));
      }
      function bi2(n2) {
        return function() {
          return n2;
        };
      }
      function Xd(n2, t) {
        return n2 == null || n2 !== n2 ? t : n2;
      }
      var Qd = Au2(), Vd = Au2(true);
      function fn(n2) {
        return n2;
      }
      function Ti2(n2) {
        return Vs2(typeof n2 == "function" ? n2 : An(n2, Ln2));
      }
      function kd(n2) {
        return js2(An(n2, Ln2));
      }
      function jd(n2, t) {
        return nu2(n2, An(t, Ln2));
      }
      var ng = L5(function(n2, t) {
        return function(e) {
          return ae2(e, n2, t);
        };
      }), tg = L5(function(n2, t) {
        return function(e) {
          return ae2(n2, e, t);
        };
      });
      function Li2(n2, t, e) {
        var r2 = V4(t), s = ze2(t, r2);
        e == null && !(K2(t) && (s.length || !r2.length)) && (e = t, t = n2, n2 = this, s = ze2(t, V4(t)));
        var o2 = !(K2(e) && "chain" in e) || !!e.chain, f2 = Jn2(n2);
        return mn(s, function(c2) {
          var l2 = t[c2];
          n2[c2] = l2, f2 && (n2.prototype[c2] = function() {
            var v3 = this.__chain__;
            if (o2 || v3) {
              var _2 = n2(this.__wrapped__), m2 = _2.__actions__ = un(this.__actions__);
              return m2.push({ func: l2, args: arguments, thisArg: n2 }), _2.__chain__ = v3, _2;
            }
            return l2.apply(n2, nt2([this.value()], arguments));
          });
        }), n2;
      }
      function eg() {
        return k2._ === this && (k2._ = Of2), this;
      }
      function Di2() {
      }
      function rg(n2) {
        return n2 = R(n2), L5(function(t) {
          return tu2(t, n2);
        });
      }
      var ig = ci(G), sg = ci(Cs2), ug = ci(Hr2);
      function wa2(n2) {
        return _i2(n2) ? $r2(Wn2(n2)) : $c(n2);
      }
      function ag(n2) {
        return function(t) {
          return n2 == null ? i : _t2(n2, t);
        };
      }
      var og = Iu2(), fg = Iu2(true);
      function Ni2() {
        return [];
      }
      function Hi2() {
        return false;
      }
      function cg() {
        return {};
      }
      function hg() {
        return "";
      }
      function lg() {
        return true;
      }
      function pg(n2, t) {
        if (n2 = R(n2), n2 < 1 || n2 > kn2) return [];
        var e = Hn2, r2 = nn(n2, Hn2);
        t = x(t), n2 -= Hn2;
        for (var s = Fr2(r2, t); ++e < n2; ) t(e);
        return s;
      }
      function dg(n2) {
        return O2(n2) ? G(n2, Wn2) : pn(n2) ? [n2] : un(Fu(W(n2)));
      }
      function gg(n2) {
        var t = ++yf2;
        return W(n2) + t;
      }
      var vg = Qe2(function(n2, t) {
        return n2 + t;
      }, 0), _g = hi("ceil"), mg = Qe2(function(n2, t) {
        return n2 / t;
      }, 1), wg = hi("floor");
      function Pg(n2) {
        return n2 && n2.length ? Ge2(n2, fn, Qr2) : i;
      }
      function Ag(n2, t) {
        return n2 && n2.length ? Ge2(n2, x(t, 2), Qr2) : i;
      }
      function Cg(n2) {
        return Es2(n2, fn);
      }
      function Ig(n2, t) {
        return Es2(n2, x(t, 2));
      }
      function xg(n2) {
        return n2 && n2.length ? Ge2(n2, fn, ni) : i;
      }
      function Eg(n2, t) {
        return n2 && n2.length ? Ge2(n2, x(t, 2), ni) : i;
      }
      var yg = Qe2(function(n2, t) {
        return n2 * t;
      }, 1), Sg = hi("round"), Og = Qe2(function(n2, t) {
        return n2 - t;
      }, 0);
      function Rg(n2) {
        return n2 && n2.length ? Wr(n2, fn) : 0;
      }
      function bg(n2, t) {
        return n2 && n2.length ? Wr(n2, x(t, 2)) : 0;
      }
      return a2.after = kl, a2.ary = Qu2, a2.assign = Fp, a2.assignIn = ca2, a2.assignInWith = fr2, a2.assignWith = Mp, a2.at = qp, a2.before = Vu2, a2.bind = Ii2, a2.bindAll = Yd, a2.bindKey = ku, a2.castArray = cp, a2.chain = Zu2, a2.chunk = wh, a2.compact = Ph, a2.concat = Ah, a2.cond = Zd, a2.conforms = Jd, a2.constant = bi2, a2.countBy = Rl, a2.create = Bp, a2.curry = ju2, a2.curryRight = na2, a2.debounce = ta2, a2.defaults = Gp, a2.defaultsDeep = zp, a2.defer = jl, a2.delay = np, a2.difference = Ch, a2.differenceBy = Ih, a2.differenceWith = xh, a2.drop = Eh, a2.dropRight = yh, a2.dropRightWhile = Sh, a2.dropWhile = Oh, a2.fill = Rh, a2.filter = Tl, a2.flatMap = Nl, a2.flatMapDeep = Hl, a2.flatMapDepth = $l, a2.flatten = Gu2, a2.flattenDeep = bh, a2.flattenDepth = Th, a2.flip = tp, a2.flow = Qd, a2.flowRight = Vd, a2.fromPairs = Lh, a2.functions = Vp, a2.functionsIn = kp, a2.groupBy = Ul, a2.initial = Nh, a2.intersection = Hh, a2.intersectionBy = $h, a2.intersectionWith = Uh, a2.invert = nd, a2.invertBy = td, a2.invokeMap = Fl, a2.iteratee = Ti2, a2.keyBy = Ml, a2.keys = V4, a2.keysIn = on, a2.map = rr2, a2.mapKeys = rd, a2.mapValues = id, a2.matches = kd, a2.matchesProperty = jd, a2.memoize = sr2, a2.merge = sd, a2.mergeWith = ha2, a2.method = ng, a2.methodOf = tg, a2.mixin = Li2, a2.negate = ur2, a2.nthArg = rg, a2.omit = ud, a2.omitBy = ad, a2.once = ep, a2.orderBy = ql, a2.over = ig, a2.overArgs = rp, a2.overEvery = sg, a2.overSome = ug, a2.partial = xi2, a2.partialRight = ea2, a2.partition = Bl, a2.pick = od, a2.pickBy = la2, a2.property = wa2, a2.propertyOf = ag, a2.pull = qh, a2.pullAll = Ku, a2.pullAllBy = Bh, a2.pullAllWith = Gh, a2.pullAt = zh, a2.range = og, a2.rangeRight = fg, a2.rearg = ip, a2.reject = Kl, a2.remove = Kh, a2.rest = sp, a2.reverse = Ai2, a2.sampleSize = Zl, a2.set = cd, a2.setWith = hd, a2.shuffle = Jl, a2.slice = Yh, a2.sortBy = Vl, a2.sortedUniq = jh, a2.sortedUniqBy = nl, a2.split = Nd, a2.spread = up, a2.tail = tl, a2.take = el, a2.takeRight = rl, a2.takeRightWhile = il, a2.takeWhile = sl, a2.tap = Pl, a2.throttle = ap, a2.thru = er2, a2.toArray = aa2, a2.toPairs = pa2, a2.toPairsIn = da2, a2.toPath = dg, a2.toPlainObject = fa2, a2.transform = ld, a2.unary = op, a2.union = ul, a2.unionBy = al, a2.unionWith = ol, a2.uniq = fl, a2.uniqBy = cl, a2.uniqWith = hl, a2.unset = pd, a2.unzip = Ci2, a2.unzipWith = Yu2, a2.update = dd, a2.updateWith = gd, a2.values = Gt2, a2.valuesIn = vd, a2.without = ll, a2.words = _a2, a2.wrap = fp, a2.xor = pl, a2.xorBy = dl, a2.xorWith = gl, a2.zip = vl, a2.zipObject = _l, a2.zipObjectDeep = ml, a2.zipWith = wl, a2.entries = pa2, a2.entriesIn = da2, a2.extend = ca2, a2.extendWith = fr2, Li2(a2, a2), a2.add = vg, a2.attempt = ma2, a2.camelCase = Pd, a2.capitalize = ga2, a2.ceil = _g, a2.clamp = _d, a2.clone = hp, a2.cloneDeep = pp, a2.cloneDeepWith = dp, a2.cloneWith = lp, a2.conformsTo = gp, a2.deburr = va2, a2.defaultTo = Xd, a2.divide = mg, a2.endsWith = Ad, a2.eq = bn2, a2.escape = Cd, a2.escapeRegExp = Id, a2.every = bl, a2.find = Ll, a2.findIndex = qu, a2.findKey = Kp, a2.findLast = Dl, a2.findLastIndex = Bu2, a2.findLastKey = Yp, a2.floor = wg, a2.forEach = Ju2, a2.forEachRight = Xu2, a2.forIn = Zp, a2.forInRight = Jp, a2.forOwn = Xp, a2.forOwnRight = Qp, a2.get = Si2, a2.gt = vp, a2.gte = _p, a2.has = jp, a2.hasIn = Oi2, a2.head = zu, a2.identity = fn, a2.includes = Wl, a2.indexOf = Dh, a2.inRange = md, a2.invoke = ed, a2.isArguments = Pt2, a2.isArray = O2, a2.isArrayBuffer = mp, a2.isArrayLike = an, a2.isArrayLikeObject = Z2, a2.isBoolean = wp, a2.isBuffer = at2, a2.isDate = Pp, a2.isElement = Ap, a2.isEmpty = Cp, a2.isEqual = Ip, a2.isEqualWith = xp, a2.isError = Ei2, a2.isFinite = Ep, a2.isFunction = Jn2, a2.isInteger = ra2, a2.isLength = ar3, a2.isMap = ia2, a2.isMatch = yp, a2.isMatchWith = Sp, a2.isNaN = Op, a2.isNative = Rp, a2.isNil = Tp, a2.isNull = bp, a2.isNumber = sa2, a2.isObject = K2, a2.isObjectLike = Y, a2.isPlainObject = pe2, a2.isRegExp = yi2, a2.isSafeInteger = Lp, a2.isSet = ua2, a2.isString = or2, a2.isSymbol = pn, a2.isTypedArray = Bt2, a2.isUndefined = Dp, a2.isWeakMap = Np, a2.isWeakSet = Hp, a2.join = Wh, a2.kebabCase = xd, a2.last = In2, a2.lastIndexOf = Fh, a2.lowerCase = Ed, a2.lowerFirst = yd, a2.lt = $p, a2.lte = Up, a2.max = Pg, a2.maxBy = Ag, a2.mean = Cg, a2.meanBy = Ig, a2.min = xg, a2.minBy = Eg, a2.stubArray = Ni2, a2.stubFalse = Hi2, a2.stubObject = cg, a2.stubString = hg, a2.stubTrue = lg, a2.multiply = yg, a2.nth = Mh, a2.noConflict = eg, a2.noop = Di2, a2.now = ir2, a2.pad = Sd, a2.padEnd = Od, a2.padStart = Rd, a2.parseInt = bd, a2.random = wd, a2.reduce = Gl, a2.reduceRight = zl, a2.repeat = Td, a2.replace = Ld, a2.result = fd, a2.round = Sg, a2.runInContext = h2, a2.sample = Yl, a2.size = Xl, a2.snakeCase = Dd, a2.some = Ql, a2.sortedIndex = Zh, a2.sortedIndexBy = Jh, a2.sortedIndexOf = Xh, a2.sortedLastIndex = Qh, a2.sortedLastIndexBy = Vh, a2.sortedLastIndexOf = kh, a2.startCase = Hd, a2.startsWith = $d, a2.subtract = Og, a2.sum = Rg, a2.sumBy = bg, a2.template = Ud, a2.times = pg, a2.toFinite = Xn2, a2.toInteger = R, a2.toLength = oa2, a2.toLower = Wd, a2.toNumber = xn2, a2.toSafeInteger = Wp, a2.toString = W, a2.toUpper = Fd, a2.trim = Md, a2.trimEnd = qd, a2.trimStart = Bd, a2.truncate = Gd, a2.unescape = zd, a2.uniqueId = gg, a2.upperCase = Kd, a2.upperFirst = Ri2, a2.each = Ju2, a2.eachRight = Xu2, a2.first = zu, Li2(a2, function() {
        var n2 = {};
        return $n2(a2, function(t, e) {
          F2.call(a2.prototype, e) || (n2[e] = t);
        }), n2;
      }(), { chain: false }), a2.VERSION = p3, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
        a2[n2].placeholder = a2;
      }), mn(["drop", "take"], function(n2, t) {
        H.prototype[n2] = function(e) {
          e = e === i ? 1 : Q2(R(e), 0);
          var r2 = this.__filtered__ && !t ? new H(this) : this.clone();
          return r2.__filtered__ ? r2.__takeCount__ = nn(e, r2.__takeCount__) : r2.__views__.push({ size: nn(e, Hn2), type: n2 + (r2.__dir__ < 0 ? "Right" : "") }), r2;
        }, H.prototype[n2 + "Right"] = function(e) {
          return this.reverse()[n2](e).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(n2, t) {
        var e = t + 1, r2 = e == Gi2 || e == Fa2;
        H.prototype[n2] = function(s) {
          var o2 = this.clone();
          return o2.__iteratees__.push({ iteratee: x(s, 3), type: e }), o2.__filtered__ = o2.__filtered__ || r2, o2;
        };
      }), mn(["head", "last"], function(n2, t) {
        var e = "take" + (t ? "Right" : "");
        H.prototype[n2] = function() {
          return this[e](1).value()[0];
        };
      }), mn(["initial", "tail"], function(n2, t) {
        var e = "drop" + (t ? "" : "Right");
        H.prototype[n2] = function() {
          return this.__filtered__ ? new H(this) : this[e](1);
        };
      }), H.prototype.compact = function() {
        return this.filter(fn);
      }, H.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, H.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, H.prototype.invokeMap = L5(function(n2, t) {
        return typeof n2 == "function" ? new H(this) : this.map(function(e) {
          return ae2(e, n2, t);
        });
      }), H.prototype.reject = function(n2) {
        return this.filter(ur2(x(n2)));
      }, H.prototype.slice = function(n2, t) {
        n2 = R(n2);
        var e = this;
        return e.__filtered__ && (n2 > 0 || t < 0) ? new H(e) : (n2 < 0 ? e = e.takeRight(-n2) : n2 && (e = e.drop(n2)), t !== i && (t = R(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n2)), e);
      }, H.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, H.prototype.toArray = function() {
        return this.take(Hn2);
      }, $n2(H.prototype, function(n2, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r2 = /^(?:head|last)$/.test(t), s = a2[r2 ? "take" + (t == "last" ? "Right" : "") : t], o2 = r2 || /^find/.test(t);
        s && (a2.prototype[t] = function() {
          var f2 = this.__wrapped__, c2 = r2 ? [1] : arguments, l2 = f2 instanceof H, v3 = c2[0], _2 = l2 || O2(f2), m2 = function(N2) {
            var $2 = s.apply(a2, nt2([N2], c2));
            return r2 && P2 ? $2[0] : $2;
          };
          _2 && e && typeof v3 == "function" && v3.length != 1 && (l2 = _2 = false);
          var P2 = this.__chain__, I2 = !!this.__actions__.length, E3 = o2 && !P2, T2 = l2 && !I2;
          if (!o2 && _2) {
            f2 = T2 ? f2 : new H(this);
            var y3 = n2.apply(f2, c2);
            return y3.__actions__.push({ func: er2, args: [m2], thisArg: i }), new Pn2(y3, P2);
          }
          return E3 && T2 ? n2.apply(this, c2) : (y3 = this.thru(m2), E3 ? r2 ? y3.value()[0] : y3.value() : y3);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
        var t = Oe2[n2], e = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", r2 = /^(?:pop|shift)$/.test(n2);
        a2.prototype[n2] = function() {
          var s = arguments;
          if (r2 && !this.__chain__) {
            var o2 = this.value();
            return t.apply(O2(o2) ? o2 : [], s);
          }
          return this[e](function(f2) {
            return t.apply(O2(f2) ? f2 : [], s);
          });
        };
      }), $n2(H.prototype, function(n2, t) {
        var e = a2[t];
        if (e) {
          var r2 = e.name + "";
          F2.call(Ut5, r2) || (Ut5[r2] = []), Ut5[r2].push({ name: t, func: e });
        }
      }), Ut5[Xe2(i, ct2).name] = [{ name: "wrapper", func: i }], H.prototype.clone = zf2, H.prototype.reverse = Kf2, H.prototype.value = Yf2, a2.prototype.at = Al, a2.prototype.chain = Cl, a2.prototype.commit = Il, a2.prototype.next = xl, a2.prototype.plant = yl, a2.prototype.reverse = Sl, a2.prototype.toJSON = a2.prototype.valueOf = a2.prototype.value = Ol, a2.prototype.first = a2.prototype.head, ne3 && (a2.prototype[ne3] = El), a2;
    }, Nt2 = If2();
    lt2 ? ((lt2.exports = Nt2)._ = Nt2, Tr2._ = Nt2) : k2._ = Nt2;
  }).call(ge);
})(Ui, Ui.exports);
var zg = Object.defineProperty, Kg = Object.defineProperties, Yg = Object.getOwnPropertyDescriptors, ya = Object.getOwnPropertySymbols, Zg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, Sa = (A2, u3, i) => u3 in A2 ? zg(A2, u3, { enumerable: true, configurable: true, writable: true, value: i }) : A2[u3] = i, cr = (A2, u3) => {
  for (var i in u3 || (u3 = {})) Zg.call(u3, i) && Sa(A2, i, u3[i]);
  if (ya) for (var i of ya(u3)) Jg.call(u3, i) && Sa(A2, i, u3[i]);
  return A2;
}, Xg = (A2, u3) => Kg(A2, Yg(u3));
function ft(A2, u3, i) {
  var p3;
  const w3 = dn(A2);
  return ((p3 = u3.rpcMap) == null ? void 0 : p3[w3.reference]) || `${Gg}?chainId=${w3.namespace}:${w3.reference}&projectId=${i}`;
}
function Ct(A2) {
  return A2.includes(":") ? A2.split(":")[1] : A2;
}
function Oa(A2) {
  return A2.map((u3) => `${u3.split(":")[0]}:${u3.split(":")[1]}`);
}
function Qg(A2, u3) {
  const i = Object.keys(u3.namespaces).filter((w3) => w3.includes(A2));
  if (!i.length) return [];
  const p3 = [];
  return i.forEach((w3) => {
    const b3 = u3.namespaces[w3].accounts;
    p3.push(...b3);
  }), p3;
}
function Wi(A2 = {}, u3 = {}) {
  const i = Ra(A2), p3 = Ra(u3);
  return Ui.exports.merge(i, p3);
}
function Ra(A2) {
  var u3, i, p3, w3;
  const b3 = {};
  if (!Yr(A2)) return b3;
  for (const [D2, En2] of Object.entries(A2)) {
    const zt2 = Zi(D2) ? [D2] : En2.chains, pr2 = En2.methods || [], It2 = En2.events || [], Ln2 = En2.rpcMap || {}, Fn2 = vo(D2);
    b3[Fn2] = Xg(cr(cr({}, b3[Fn2]), En2), { chains: ge$1(zt2, (u3 = b3[Fn2]) == null ? void 0 : u3.chains), methods: ge$1(pr2, (i = b3[Fn2]) == null ? void 0 : i.methods), events: ge$1(It2, (p3 = b3[Fn2]) == null ? void 0 : p3.events), rpcMap: cr(cr({}, Ln2), (w3 = b3[Fn2]) == null ? void 0 : w3.rpcMap) });
  }
  return b3;
}
function Vg(A2) {
  return A2.includes(":") ? A2.split(":")[2] : A2;
}
function ba(A2) {
  const u3 = {};
  for (const [i, p3] of Object.entries(A2)) {
    const w3 = p3.methods || [], b3 = p3.events || [], D2 = p3.accounts || [], En2 = Zi(i) ? [i] : p3.chains ? p3.chains : Oa(p3.accounts);
    u3[i] = { chains: En2, methods: w3, events: b3, accounts: D2 };
  }
  return u3;
}
function Fi(A2) {
  return typeof A2 == "number" ? A2 : A2.includes("0x") ? parseInt(A2, 16) : (A2 = A2.includes(":") ? A2.split(":")[1] : A2, isNaN(Number(A2)) ? A2 : Number(A2));
}
const Ta = {}, z = (A2) => Ta[A2], Mi = (A2, u3) => {
  Ta[A2] = u3;
};
class kg {
  constructor(u3) {
    this.name = "polkadot", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class jg {
  constructor(u3) {
    this.name = "eip155", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u3) {
    switch (u3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u3.request.method) ? await this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(parseInt(u3), i), this.chainId = parseInt(u3), this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(`${this.name}:${u3}`, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = parseInt(Ct(i));
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u3 = this.chainId, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  async handleSwitchChain(u3) {
    var i, p3;
    let w3 = u3.request.params ? (i = u3.request.params[0]) == null ? void 0 : i.chainId : "0x0";
    w3 = w3.startsWith("0x") ? w3 : `0x${w3}`;
    const b3 = parseInt(w3, 16);
    if (this.isChainApproved(b3)) this.setDefaultChain(`${b3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: u3.topic, request: { method: u3.request.method, params: [{ chainId: w3 }] }, chainId: (p3 = this.namespace.chains) == null ? void 0 : p3[0] }), this.setDefaultChain(`${b3}`);
    else throw new Error(`Failed to switch to chain 'eip155:${b3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u3) {
    return this.namespace.chains.includes(`${this.name}:${u3}`);
  }
}
class nv {
  constructor(u3) {
    this.name = "solana", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class tv {
  constructor(u3) {
    this.name = "cosmos", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class ev {
  constructor(u3) {
    this.name = "cip34", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      const p3 = this.getCardanoRPCUrl(i), w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, p3);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  getCardanoRPCUrl(u3) {
    const i = this.namespace.rpcMap;
    if (i) return i[u3];
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || this.getCardanoRPCUrl(u3);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class rv {
  constructor(u3) {
    this.name = "elrond", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class iv {
  constructor(u3) {
    this.name = "multiversx", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      const w3 = Ct(i);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
class sv {
  constructor(u3) {
    this.name = "near", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3) throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i) {
    if (this.chainId = u3, !this.httpProviders[u3]) {
      const p3 = i || ft(`${this.name}:${u3}`, this.namespace);
      if (!p3) throw new Error(`No RPC url provided for chainId: ${u3}`);
      this.setHttpProvider(u3, p3);
    }
    this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i) => {
      var p3;
      u3[i] = this.createHttpProvider(i, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i = this.httpProviders[u3];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i;
  }
  setHttpProvider(u3, i) {
    const p3 = this.createHttpProvider(u3, i);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i) {
    const p3 = i || ft(u3, this.namespace);
    return typeof p3 > "u" ? void 0 : new JsonRpcProvider2(new f(p3, z("disableProviderPing")));
  }
}
var uv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, La = Object.getOwnPropertySymbols, fv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Da = (A2, u3, i) => u3 in A2 ? uv(A2, u3, { enumerable: true, configurable: true, writable: true, value: i }) : A2[u3] = i, hr2 = (A2, u3) => {
  for (var i in u3 || (u3 = {})) fv.call(u3, i) && Da(A2, i, u3[i]);
  if (La) for (var i of La(u3)) cv.call(u3, i) && Da(A2, i, u3[i]);
  return A2;
}, qi = (A2, u3) => av(A2, ov(u3));
class lr {
  constructor(u3) {
    this.events = new Wg(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u3, this.logger = typeof (u3 == null ? void 0 : u3.logger) < "u" && typeof (u3 == null ? void 0 : u3.logger) != "string" ? u3.logger : Hg(k$1({ level: (u3 == null ? void 0 : u3.logger) || xa })), this.disableProviderPing = (u3 == null ? void 0 : u3.disableProviderPing) || false;
  }
  static async init(u3) {
    const i = new lr(u3);
    return await i.initialize(), i;
  }
  async request(u3, i, p3) {
    const [w3, b3] = this.validateChain(i);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(w3).request({ request: hr2({}, u3), chainId: `${w3}:${b3}`, topic: this.session.topic, expiry: p3 });
  }
  sendAsync(u3, i, p3, w3) {
    const b3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(u3, p3, w3).then((D2) => i(null, formatJsonRpcResult(b3, D2))).catch((D2) => i(D2, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u3;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u3 = this.session) == null ? void 0 : u3.topic, reason: tr("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u3) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u3), await this.cleanupPendingPairings(), !u3.skipPairing) return await this.pair(u3.pairingTopic);
  }
  async authenticate(u3) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(u3), await this.cleanupPendingPairings();
    const { uri: i, response: p3 } = await this.client.authenticate(u3);
    i && (this.uri = i, this.events.emit("display_uri", i));
    const w3 = await p3();
    if (this.session = w3.session, this.session) {
      const b3 = ba(this.session.namespaces);
      this.namespaces = Wi(this.namespaces, b3), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return w3;
  }
  on(u3, i) {
    this.events.on(u3, i);
  }
  once(u3, i) {
    this.events.once(u3, i);
  }
  removeListener(u3, i) {
    this.events.removeListener(u3, i);
  }
  off(u3, i) {
    this.events.off(u3, i);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u3) {
    this.shouldAbortPairingAttempt = false;
    let i = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (i >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
      const { uri: p3, approval: w3 } = await this.client.connect({ pairingTopic: u3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      p3 && (this.uri = p3, this.events.emit("display_uri", p3)), await w3().then((b3) => {
        this.session = b3;
        const D2 = ba(b3.namespaces);
        this.namespaces = Wi(this.namespaces, D2), this.persist("namespaces", this.namespaces);
      }).catch((b3) => {
        if (b3.message !== Ue) throw b3;
        i++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u3, i) {
    try {
      if (!this.session) return;
      const [p3, w3] = this.validateChain(u3);
      this.getProvider(p3).setDefaultChain(w3, i);
    } catch (p3) {
      if (!/Please call connect/.test(p3.message)) throw p3;
    }
  }
  async cleanupPendingPairings(u3 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i = this.client.pairing.getAll();
    if (Er(i)) {
      for (const p3 of i) u3.deletePairings ? this.client.core.expirer.set(p3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p3.topic);
      this.logger.info(`Inactive pairings cleared: ${i.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u3 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u3]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await ne$1.init({ logger: this.providerOpts.logger || xa, relayUrl: this.providerOpts.relayUrl || Mg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const u3 = [...new Set(Object.keys(this.session.namespaces).map((i) => vo(i)))];
    Mi("client", this.client), Mi("events", this.events), Mi("disableProviderPing", this.disableProviderPing), u3.forEach((i) => {
      if (!this.session) return;
      const p3 = Qg(i, this.session), w3 = Oa(p3), b3 = Wi(this.namespaces, this.optionalNamespaces), D2 = qi(hr2({}, b3[i]), { accounts: p3, chains: w3 });
      switch (i) {
        case "eip155":
          this.rpcProviders[i] = new jg({ namespace: D2 });
          break;
        case "solana":
          this.rpcProviders[i] = new nv({ namespace: D2 });
          break;
        case "cosmos":
          this.rpcProviders[i] = new tv({ namespace: D2 });
          break;
        case "polkadot":
          this.rpcProviders[i] = new kg({ namespace: D2 });
          break;
        case "cip34":
          this.rpcProviders[i] = new ev({ namespace: D2 });
          break;
        case "elrond":
          this.rpcProviders[i] = new rv({ namespace: D2 });
          break;
        case "multiversx":
          this.rpcProviders[i] = new iv({ namespace: D2 });
          break;
        case "near":
          this.rpcProviders[i] = new sv({ namespace: D2 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u3) => {
      this.events.emit("session_ping", u3);
    }), this.client.on("session_event", (u3) => {
      const { params: i } = u3, { event: p3 } = i;
      if (p3.name === "accountsChanged") {
        const w3 = p3.data;
        w3 && Er(w3) && this.events.emit("accountsChanged", w3.map(Vg));
      } else if (p3.name === "chainChanged") {
        const w3 = i.chainId, b3 = i.event.data, D2 = vo(w3), En2 = Fi(w3) !== Fi(b3) ? `${D2}:${Fi(b3)}` : w3;
        this.onChainChanged(En2);
      } else this.events.emit(p3.name, p3.data);
      this.events.emit("session_event", u3);
    }), this.client.on("session_update", ({ topic: u3, params: i }) => {
      var p3;
      const { namespaces: w3 } = i, b3 = (p3 = this.client) == null ? void 0 : p3.session.get(u3);
      this.session = qi(hr2({}, b3), { namespaces: w3 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u3, params: i });
    }), this.client.on("session_delete", async (u3) => {
      await this.cleanup(), this.events.emit("session_delete", u3), this.events.emit("disconnect", qi(hr2({}, tr("USER_DISCONNECTED")), { data: u3.topic }));
    }), this.on(Vn.DEFAULT_CHAIN_CHANGED, (u3) => {
      this.onChainChanged(u3, true);
    });
  }
  getProvider(u3) {
    if (!this.rpcProviders[u3]) throw new Error(`Provider not found: ${u3}`);
    return this.rpcProviders[u3];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u3) => {
      var i;
      this.getProvider(u3).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[u3]);
    });
  }
  setNamespaces(u3) {
    const { namespaces: i, optionalNamespaces: p3, sessionProperties: w3 } = u3;
    i && Object.keys(i).length && (this.namespaces = i), p3 && Object.keys(p3).length && (this.optionalNamespaces = p3), this.sessionProperties = w3, this.persist("namespaces", i), this.persist("optionalNamespaces", p3);
  }
  validateChain(u3) {
    const [i, p3] = (u3 == null ? void 0 : u3.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [i, p3];
    if (i && !Object.keys(this.namespaces || {}).map((D2) => vo(D2)).includes(i)) throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
    if (i && p3) return [i, p3];
    const w3 = vo(Object.keys(this.namespaces)[0]), b3 = this.rpcProviders[w3].getDefaultChain();
    return [w3, b3];
  }
  async requestAccounts() {
    const [u3] = this.validateChain();
    return await this.getProvider(u3).requestAccounts();
  }
  onChainChanged(u3, i = false) {
    if (!this.namespaces) return;
    const [p3, w3] = this.validateChain(u3);
    w3 && (i || this.getProvider(p3).setDefaultChain(w3), this.namespaces[p3] ? this.namespaces[p3].defaultChain = w3 : this.namespaces[`${p3}:${w3}`] ? this.namespaces[`${p3}:${w3}`].defaultChain = w3 : this.namespaces[`${p3}:${w3}`] = { defaultChain: w3 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w3));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u3, i) {
    this.client.core.storage.setItem(`${Ea}/${u3}`, i);
  }
  async getFromStore(u3) {
    return await this.client.core.storage.getItem(`${Ea}/${u3}`);
  }
}
const hv = lr;
const T = "wc", S = "ethereum_provider", $ = `${T}@2:${S}:`, j = "https://rpc.walletconnect.com/v1/", u2 = ["eth_sendTransaction", "personal_sign"], _ = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], g2 = ["chainChanged", "accountsChanged"], M = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var q = Object.defineProperty, N = Object.defineProperties, D = Object.getOwnPropertyDescriptors, O = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, Q = Object.prototype.propertyIsEnumerable, b2 = (a2, t, s) => t in a2 ? q(a2, t, { enumerable: true, configurable: true, writable: true, value: s }) : a2[t] = s, p2 = (a2, t) => {
  for (var s in t || (t = {})) U.call(t, s) && b2(a2, s, t[s]);
  if (O) for (var s of O(t)) Q.call(t, s) && b2(a2, s, t[s]);
  return a2;
}, E2 = (a2, t) => N(a2, D(t));
function m(a2) {
  return Number(a2[0].split(":")[1]);
}
function v2(a2) {
  return `0x${a2.toString(16)}`;
}
function L4(a2) {
  const { chains: t, optionalChains: s, methods: i, optionalMethods: n2, events: e, optionalEvents: o2, rpcMap: r2 } = a2;
  if (!Er$2(t)) throw new Error("Invalid chains");
  const c2 = { chains: t, methods: i || u2, events: e || g2, rpcMap: p2({}, t.length ? { [m(t)]: r2[m(t)] } : {}) }, h2 = e == null ? void 0 : e.filter((l2) => !g2.includes(l2)), d3 = i == null ? void 0 : i.filter((l2) => !u2.includes(l2));
  if (!s && !o2 && !n2 && !(h2 != null && h2.length) && !(d3 != null && d3.length)) return { required: t.length ? c2 : void 0 };
  const I2 = (h2 == null ? void 0 : h2.length) && (d3 == null ? void 0 : d3.length) || !s, w3 = { chains: [...new Set(I2 ? c2.chains.concat(s || []) : s)], methods: [...new Set(c2.methods.concat(n2 != null && n2.length ? n2 : _))], events: [...new Set(c2.events.concat(o2 != null && o2.length ? o2 : M))], rpcMap: r2 };
  return { required: t.length ? c2 : void 0, optional: s.length ? w3 : void 0 };
}
class C {
  constructor() {
    this.events = new eventsExports.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $, this.on = (t, s) => (this.events.on(t, s), this), this.once = (t, s) => (this.events.once(t, s), this), this.removeListener = (t, s) => (this.events.removeListener(t, s), this), this.off = (t, s) => (this.events.off(t, s), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new C();
    return await s.initialize(t), s;
  }
  async request(t, s) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s);
  }
  sendAsync(t, s, i) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i } = L4(this.rpc);
    try {
      const n2 = await new Promise(async (o2, r2) => {
        var c2;
        this.rpc.showQrModal && ((c2 = this.modal) == null || c2.subscribeModal((h2) => {
          !h2.open && !this.signer.session && (this.signer.abortPairingAttempt(), r2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(E2(p2({ namespaces: p2({}, s && { [this.namespace]: s }) }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((h2) => {
          o2(h2);
        }).catch((h2) => {
          r2(new Error(h2.message));
        });
      });
      if (!n2) return;
      const e = zo(n2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", { chainId: v2(this.chainId) });
    } catch (n2) {
      throw this.signer.logger.error(n2), n2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const s = await new Promise(async (n2, e) => {
        var o2;
        this.rpc.showQrModal && ((o2 = this.modal) == null || o2.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), e(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(E2(p2({}, t), { chains: this.rpc.chains })).then((r2) => {
          n2(r2);
        }).catch((r2) => {
          e(new Error(r2.message));
        });
      }), i = s.session;
      if (i) {
        const n2 = zo(i.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n2), this.setAccounts(n2), this.events.emit("connect", { chainId: v2(this.chainId) });
      }
      return s;
    } catch (s) {
      throw this.signer.logger.error(s), s;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i } = s;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", v2(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", E2(p2({}, tr$3("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i = this.modal) == null || i.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", v2(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i, n2] = t.split(":");
    return { chainId: `${s}:${i}`, address: n2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i;
    const n2 = (s = t == null ? void 0 : t.chains) != null ? s : [], e = (i = t == null ? void 0 : t.optionalChains) != null ? i : [], o2 = n2.concat(e);
    if (!o2.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const r2 = n2.length ? (t == null ? void 0 : t.methods) || u2 : [], c2 = n2.length ? (t == null ? void 0 : t.events) || g2 : [], h2 = (t == null ? void 0 : t.optionalMethods) || [], d3 = (t == null ? void 0 : t.optionalEvents) || [], I2 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(o2, t.projectId), w3 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: n2 == null ? void 0 : n2.map((l2) => this.formatChainId(l2)), optionalChains: e.map((l2) => this.formatChainId(l2)), methods: r2, events: c2, optionalMethods: h2, optionalEvents: d3, rpcMap: I2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: w3, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i = {};
    return t.forEach((n2) => {
      i[n2] = this.getRpcUrl(n2, s);
    }), i;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? m(this.rpc.chains) : m(this.rpc.optionalChains), this.signer = await hv.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i } = await __vitePreload(() => import("./index-DHnd9672.js").then((n2) => n2.i), true ? __vite__mapDeps([0,1,2]) : void 0);
        s = i;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s) try {
        this.modal = new s(p2({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i) {
        throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s, optionalChains: i, rpcMap: n2 } = t;
    s && Er$2(s) && (this.rpc.chains = s.map((e) => this.formatChainId(e)), s.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    })), i && Er$2(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((e) => this.formatChainId(e)), i.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    }));
  }
  getRpcUrl(t, s) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[t]) || `${j}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
      this.setChainIds(t ? [this.formatChainId(t)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
    } catch (t) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s) => this.signer.logger.warn(s));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
}
export {
  M as OPTIONAL_EVENTS,
  _ as OPTIONAL_METHODS,
  g2 as REQUIRED_EVENTS,
  u2 as REQUIRED_METHODS,
  C as default
};
