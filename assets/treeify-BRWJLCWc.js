import { bO as getDefaultExportFromCjs, bU as commonjsGlobal } from "./index-R4o_uq0C.js";
var bufferReverse = function reverse(src) {
  var buffer = new Buffer(src.length);
  for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
    buffer[i] = src[j];
    buffer[j] = src[i];
  }
  return buffer;
};
const reverse2 = /* @__PURE__ */ getDefaultExportFromCjs(bufferReverse);
var treeify = { exports: {} };
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    function makePrefix(key, last) {
      var str = last ? "└" : "├";
      if (key) {
        str += "─ ";
      } else {
        str += "──┐";
      }
      return str;
    }
    function filterKeys(obj, hideFunctions) {
      var keys = [];
      for (var branch in obj) {
        if (!obj.hasOwnProperty(branch)) {
          continue;
        }
        if (hideFunctions && typeof obj[branch] === "function") {
          continue;
        }
        keys.push(branch);
      }
      return keys;
    }
    function growBranch(key, root, last, lastStates, showValues, hideFunctions, callback) {
      var line = "", index = 0, lastKey, circular, lastStatesCopy = lastStates.slice(0);
      if (lastStatesCopy.push([root, last]) && lastStates.length > 0) {
        lastStates.forEach(function(lastState, idx) {
          if (idx > 0) {
            line += (lastState[1] ? " " : "│") + "  ";
          }
          if (!circular && lastState[0] === root) {
            circular = true;
          }
        });
        line += makePrefix(key, last) + key;
        showValues && (typeof root !== "object" || root instanceof Date) && (line += ": " + root);
        circular && (line += " (circular ref.)");
        callback(line);
      }
      if (!circular && typeof root === "object") {
        var keys = filterKeys(root, hideFunctions);
        keys.forEach(function(branch) {
          lastKey = ++index === keys.length;
          growBranch(branch, root[branch], lastKey, lastStatesCopy, showValues, hideFunctions, callback);
        });
      }
    }
    var Treeify = {};
    Treeify.asLines = function(obj, showValues, hideFunctions, lineCallback) {
      var hideFunctionsArg = typeof hideFunctions !== "function" ? hideFunctions : false;
      growBranch(".", obj, false, [], showValues, hideFunctionsArg, lineCallback || hideFunctions);
    };
    Treeify.asTree = function(obj, showValues, hideFunctions) {
      var tree = "";
      growBranch(".", obj, false, [], showValues, hideFunctions, function(line) {
        tree += line + "\n";
      });
      return tree;
    };
    return Treeify;
  });
})(treeify);
var treeifyExports = treeify.exports;
export {
  bufferReverse as b,
  reverse2 as r,
  treeifyExports as t
};
