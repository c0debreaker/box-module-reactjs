'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxComponent = function BoxComponent(props) {

  var style = _extends({
    backgroundColor: '#40b4e5',
    color: 'white',
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#85CEEC',
    width: 200,
    textAlign: 'center'
  }, props.style);

  var PrimaryText = 'Default Section Name';
  PrimaryText = props.PrimaryText ? props.PrimaryText : PrimaryText;

  return _react2.default.createElement(
    'div',
    { style: style },
    PrimaryText
  );
};

exports.default = BoxComponent;
