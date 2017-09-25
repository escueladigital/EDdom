(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EDdom = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _utils = require('../shared/utils');

var _query = require('../dom/query');

var _query2 = _interopRequireDefault(_query);

var _iterable = require('../decorators/iterable');

var _iterable2 = _interopRequireDefault(_iterable);

var _Stack2 = require('./Stack');

var _Stack3 = _interopRequireDefault(_Stack2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var EDdom = (_class = function (_Stack) {
  _inherits(EDdom, _Stack);

  /**
   * Crea una nueva instancia de EDdom
   *
   * @constructor
   *
   * @param {*} selector
   * @param {*} context
   */


  /**
   * Selector de elementos
   *
   * @member {string}
   */
  function EDdom(selector, context) {
    _classCallCheck(this, EDdom);

    var _this = _possibleConstructorReturn(this, (EDdom.__proto__ || Object.getPrototypeOf(EDdom)).call(this));

    _this.selector = '';
    _this.context = document.body;


    if (!(0, _utils.isNullable)(context)) {
      _this.context = context;
    }

    if ((0, _utils.isString)(selector)) {
      _this.selector = selector;
    }

    var elements = (0, _query2.default)(selector, _this.context);

    if ((0, _utils.isArrayLike)(elements)) _this.add.apply(_this, _toConsumableArray(elements));
    return _this;
  }

  /**
   * Escucha un evento en todos los elementos de la colección
   *
   * @alias Element.prototype.addEventListener
   *
   * @param {string} event
   * @param {Function} listener
   *
   * @return {EDdom}
   *
   * @api public
   */


  /**
   * Contexto al consultar elementos
   *
   * @member {HTMLElement}
   */


  _createClass(EDdom, [{
    key: 'on',
    value: function on(element, event, listener) {
      element.addEventListener(event, listener);
    }

    /**
     * Deja de escuchar un evento de todos los elementos de la colección
     *
     * @alias Element.prototype.removeEventListener
     *
     * @param {string} event
     * @param {Function} listener
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'off',
    value: function off(element, event, listener) {
      element.removeEventListener(event, listener);
    }

    /**
     * Añade una clase a todos los elementos en la colección
     *
     * @param {string} klass
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'addClass',
    value: function addClass(element, klass) {
      element.classList.add(klass);
    }

    /**
     * Añade/remueve una clase de todos los elementos en la colección
     *
     * @param {string} klass
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'toggleClass',
    value: function toggleClass(element, klass) {
      element.classList.toggle(klass);
    }

    /**
     * Remueve la clase dada en todos los elementos de la colección
     *
     * @param {string} klass
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'removeClass',
    value: function removeClass(element, klass) {
      element.classList.remove(klass);
    }

    /**
     * Envuelva a cada elemento de la colección con el elemento dado
     *
     * @param {HTMLElement} wrapper
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'wrap',
    value: function wrap(element, wrapper) {
      var wrapperClone = wrapper.cloneNode(false);
      element.parentElement.insertBefore(wrapperClone, element);
      wrapperClone.appendChild(element);
    }

    /**
     * Verifica si en la colección un elemento tiene la clase dad
     *
     * @param {string} klass
     *
     * @return {boolean}
     *
     * @api public
     */

  }, {
    key: 'hasClass',
    value: function hasClass(klass) {
      return this.some(function (element) {
        return element.classList.contains(klass);
      });
    }

    /**
     * Añade/remueve atributos de los elementos en la colección
     *
     * @param {string|Object} name
     * @param {string=} value
     *
     * @return {EDdom|string|null}
     *
     * @api public
     */

  }, {
    key: 'attr',
    value: function attr(name, value) {
      if ((0, _utils.isObject)(name)) {
        var attributes = name;

        for (var attribute in attributes) {
          if (attributes.hasOwnProperty(attribute)) {
            this.attr(attribute, attributes[attribute]);
          }
        }
      } else if (arguments.length === 1) {
        return this[0] && this[0].getAttribute(name);
      } else {
        var method = (0, _utils.isNullable)(value) ? 'removeAttribute' : 'setAttribute';

        this.each(function (element) {
          element[method](name, value);
        });
      }

      return this;
    }

    /**
     * Añade al final los elementos dados como hijos de cada elemento de la colección
     *
     * @param {*} children
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'append',
    value: function append(children) {
      var $children = new EDdom(children);

      this.each(function (element) {
        $children.each(function (child) {
          element.appendChild(child.cloneNode(true));
        });
      });

      return this;
    }

    /**
     *
     * @param {*} children
     *
     * @return {EDdom}
     *
     * @api public
     */

  }, {
    key: 'prepend',
    value: function prepend(children) {
      var $children = new EDdom(children);

      this.each(function (element) {
        var referenceChild = element.firstElementChild;

        $children.each(function (child) {
          element.insertBefore(child, referenceChild);
        });
      });

      return this;
    }
  }]);

  return EDdom;
}(_Stack3.default), (_applyDecoratedDescriptor(_class.prototype, 'on', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'on'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'off', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'off'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addClass', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'addClass'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleClass', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleClass'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeClass', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'removeClass'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wrap', [_iterable2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'wrap'), _class.prototype)), _class);
exports.default = EDdom;
module.exports = exports['default'];

},{"../decorators/iterable":3,"../dom/query":4,"../shared/utils":5,"./Stack":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @alias Array.prototype
 */
var proto = Array.prototype;

// Clase encargada de emular algunos métodos de Array.prototype

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.length = 0;
  }

  /**
   * Número de elementos en la colección
   *
   * @member {number}
   */


  _createClass(Stack, [{
    key: "add",


    /**
     * Añade elementos a la colección
     *
     * @param {*} elements
     *
     * @return {Stack}
     *
     * @api public
     */
    value: function add() {
      for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
        elements[_key] = arguments[_key];
      }

      proto.push.apply(this, elements);
      return this;
    }

    /**
     * Itera los elementos de la colección
     *
     * @param {Function} iterator
     *
     * @return {Stack}
     *
     * @api public
     */

  }, {
    key: "each",
    value: function each(iterator) {
      proto.forEach.call(this, iterator);
      return this;
    }

    /**
     * Verifica algún elemento en la colección si cumple
     * con la confición que retorna el `callback`
     *
     * @param {Function} callback
     *
     * @return {boolean}
     *
     * @api public
     */

  }, {
    key: "some",
    value: function some(callback) {
      return proto.some.call(this, callback);
    }
  }]);

  return Stack;
}();

exports.default = Stack;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Itera todos los elementos y los pasa al método "decorado"
 *
 * @param {Object} proto
 * @param {string} key
 * @param {Object} descriptor
 *
 * @return void
 *
 * @api private
 */
exports.default = function (proto, key, descriptor) {
  var original = descriptor.value;

  descriptor.value = function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.each(function (element) {
      original.call.apply(original, [_this, element].concat(args));
    });

    return this;
  };
};

module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getOptimumMethod = _getOptimumMethod;

var _utils = require('../shared/utils');

/**
 * Obtiene el tipo de selector
 *
 * @type {RegExp}
 */
var SELECTOR_TYPE_REGEX = /^([#.]?)[\w-]+$/;

/**
 * Consulta y obtiene elemento(s) del DOM
 *
 * @param {string|HTMLElement|NodeList|HTMLCollection} selector
 * @param {HTMLElement} context
 *
 * @return {HTMLElement|NodeList|HTMLCollection|Array}
 *
 * @api private
 */

exports.default = function (selector, context) {
  if ((0, _utils.isString)(selector)) {
    var method = _getOptimumMethod(selector);
    var isSelectorID = method === 'getElementById';

    if (isSelectorID || method === 'getElementsByClassName') {
      selector = selector.replace(/^[#.]/, '');
    }

    selector = (isSelectorID ? document : context)[method](selector);
  }

  return (0, _utils.isNullable)(selector) || (0, _utils.isArrayLike)(selector) ? selector : [selector];
};

/**
 * Obtiene el método más óptimo para seleccionar los elementos del DOM
 *
 * @param {string} selector
 *
 * @return {string}
 *
 * @api private
 */


function _getOptimumMethod(selector) {
  var match = SELECTOR_TYPE_REGEX.exec(selector);

  // Selector complejo
  if (!match) return 'querySelectorAll';

  // Selector simple
  switch (match[1]) {
    case '#':
      return 'getElementById';
    case '.':
      return 'getElementsByClassName';
    default:
      return 'getElementsByTagName';
  }
}

},{"../shared/utils":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isString = isString;
exports.isArrayLike = isArrayLike;
exports.isObject = isObject;
exports.isNullable = isNullable;
exports.isElement = isElement;
/**
 * Determina si el valor pasado es una cadena
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Determina si el valor pasado se comporta como arreglo
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
function isArrayLike(value) {
  return isObject(value) && 'length' in value;
}

/**
 * Determina si el valor pasado es un objeto
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

/**
 * Determina si el valor pasado es nulo o indefinido
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
function isNullable(value) {
  return value == null;
}

/**
 * Determina si el valor pasado es un elemento HTML
 *
 * @param {*} value
 *
 * @return {boolean}
 */
function isElement(value) {
  return value instanceof HTMLElement;
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = edDom;

var _EDdom = require('./classes/EDdom');

var _EDdom2 = _interopRequireDefault(_EDdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Envoltura para evitar tener que instanciar la clase `EDdom`
 *
 * @param {*} args
 *
 * @return {EDdom}
 *
 * @api public
 */
function edDom() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_EDdom2.default, [null].concat(args)))();
}

/**
 * Crea un elemento con los atributos y lo retorna como un EDdom object
 *
 * @param {string} tag
 * @param {Object} attrs
 * @param {Array} children
 *
 * @return {EDdom}
 *
 * @api public
 */
edDom.create = function (tag) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return edDom(document.createElement(tag)).attr(attrs).append(children);
};

// Definir un alias en caso de que no esté definido
if (window.$ == null) window.$ = edDom;
module.exports = exports['default'];

},{"./classes/EDdom":1}]},{},[6])(6)
});