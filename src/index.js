"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Thermometer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Thank you https://codepen.io/davidbanks/pen/rksLn
function Thermometer(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      steps = _ref.steps,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue,
      currentValue = _ref.currentValue,
      showGoalline = _ref.showGoalline;
  var tubeWidth = 21.5;
  var allsteps = [];
  console.log('Max ', maxValue, 'MinVal ', minValue);
  var eachStepVal = (parseInt(maxValue) - parseInt(minValue)) / steps; //Y ranges from min = 295  max = 14  

  var lengthOfTube = 295 - 34;
  var eachStepY = lengthOfTube / steps;
  var currentValueY = 295 - lengthOfTube * currentValue / (maxValue - minValue);
  console.log(currentValueY);
  var val, y;

  for (var i = 0; i <= steps; i++) {
    val = minValue + i * eachStepVal;
    y = 295 - eachStepY * i;
    allsteps.push({
      'val': val,
      'y': y
    });
  }

  return _react["default"].createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    width: width,
    height: height,
    viewBox: "0, 0, 150, 400"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("clipPath", {
    id: "cut-off-red"
  }, _react["default"].createElement("rect", {
    x: "38",
    y: currentValueY,
    width: "600",
    height: "500"
  })), _react["default"].createElement("clipPath", {
    id: "Clip_1"
  }, _react["default"].createElement("path", {
    d: "M21,-3.999 L130,-3.999 L130,405 L21,405 z M75.5,6 L77.95,6.12 C90.196,8.294 98.607,16.289 99.498,29.017 C99.454,29.947 99.472,29.497 99.443,30.369 C99.439,30.545 99.434,30.911 99.433,30.952 C99.429,31.083 99.44,31.023 99.277,31.792 L99.02,33 L99.5,33 L99.5,308.679 L99.968,308.973 C113.572,317.514 121.584,332.071 122,348.525 C122,374.181 101.181,395 75.5,395 C49.819,395 29,374.181 29,348.5 C29.086,332.244 36.94,318.493 51.06,308.955 L51.5,308.658 L51.5,33 L51.98,33 L51.723,31.792 C51.56,31.023 51.571,31.083 51.567,30.952 C51.565,30.911 51.56,30.545 51.556,30.369 C51.547,29.989 51.53,29.537 51.499,28.947 C51.5,16.307 62.236,6 75.5,6 z M75.548,4.001 C61.15,4 49.5,15.184 49.5,29 C49.531,29.623 49.548,30.057 49.557,30.417 C49.564,30.835 49.561,30.64 49.567,31 L49.5,31 L49.5,307.612 C35.987,317.262 26.989,331.539 27,348.495 C27,375.286 48.714,397 75.5,397 C102.286,397 124,375.286 124,348.5 C123.103,332.019 115.751,316.615 101.5,307.594 L101.5,31 L101.432,31 C101.439,30.64 101.435,30.835 101.443,30.417 C101.452,30.057 101.468,29.623 101.498,29.052 L101.498,28.947 C100.803,15.73 91.512,5.967 78.192,4.133 L78.104,4.125 L75.548,4.001 z"
  })), _react["default"].createElement("filter", {
    id: "Shadow_2"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  })), _react["default"].createElement("clipPath", {
    id: "Clip_3"
  }, _react["default"].createElement("path", {
    d: "M33.159,5.375 L116.841,5.375 L116.841,394.625 L33.159,394.625 z M71,13.375 L75,14.375 C67.554,14.751 60.793,19.485 59.412,27.125 L59,27.125 L59,316.532 C46.893,323.321 39.135,335.555 39.159,349.625 C39.159,370.06 55.206,386.625 75,386.625 C94.794,386.625 110.841,370.06 110.841,349.625 C110.501,335.774 103.449,323.042 91,316.532 L91,27.125 L90.588,27.125 C89.07,19.681 78.559,13.506 71,13.375 z"
  })), _react["default"].createElement("filter", {
    id: "Shadow_4"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  })), _react["default"].createElement("radialGradient", {
    id: "Gradient_1",
    gradientUnits: "userSpaceOnUse",
    cx: "75",
    cy: "343.003",
    r: "37.099"
  }, _react["default"].createElement("stop", {
    offset: "0",
    stopColor: color
  }), _react["default"].createElement("stop", {
    offset: "1",
    stopColor: color
  })), _react["default"].createElement("filter", {
    id: "Shadow_6"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  })), _react["default"].createElement("filter", {
    id: "Shadow_8"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  })), _react["default"].createElement("clipPath", {
    id: "Clip_9"
  }, _react["default"].createElement("path", {
    d: "M34.5,191 L55.5,191 L55.5,210 L34.5,210 z M49.5,199 L40.5,199 L40.5,202 L49.5,202 L49.5,199 z"
  })), _react["default"].createElement("filter", {
    id: "Shadow_10"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  })), _react["default"].createElement("clipPath", {
    id: "Clip_11"
  }, _react["default"].createElement("path", {
    d: "M34.5,91 L55.5,91 L55.5,110 L34.5,110 z M49.5,99 L40.5,99 L40.5,102 L49.5,102 L49.5,99 z"
  })), _react["default"].createElement("filter", {
    id: "Shadow_12"
  }, _react["default"].createElement("feGaussianBlur", {
    "in": "SourceAlpha",
    stdDeviation: "2.5"
  }), _react["default"].createElement("feOffset", {
    dx: "0",
    dy: "2",
    result: "offsetblur"
  }), _react["default"].createElement("feFlood", {
    floodColor: "#000000"
  }), _react["default"].createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  }))), _react["default"].createElement("g", {
    id: "Layer_1"
  }, _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M75.548,4.001 L78.104,4.125 L78.192,4.133 C91.512,5.967 100.803,15.73 101.498,28.947 L101.498,29.052 C101.468,29.623 101.452,30.057 101.443,30.417 C101.435,30.835 101.439,30.64 101.432,31 L101.5,31 L101.5,307.594 C115.751,316.615 123.103,332.019 124,348.5 C124,375.286 102.286,397 75.5,397 C48.714,397 27,375.286 27,348.495 C26.989,331.539 35.987,317.262 49.5,307.612 L49.5,31 L49.567,31 C49.561,30.64 49.564,30.835 49.557,30.417 C49.548,30.057 49.531,29.623 49.5,29 C49.5,15.184 61.15,4 75.548,4.001 z M75.5,6 C62.236,6 51.5,16.307 51.499,28.947 C51.53,29.537 51.547,29.989 51.556,30.369 C51.56,30.545 51.565,30.911 51.567,30.952 C51.571,31.083 51.56,31.023 51.723,31.792 L51.98,33 L51.5,33 L51.5,308.658 L51.06,308.955 C36.94,318.493 29.086,332.244 29,348.5 C29,374.181 49.819,395 75.5,395 C101.181,395 122,374.181 122,348.525 C121.584,332.071 113.572,317.514 99.968,308.973 L99.5,308.679 L99.5,33 L99.02,33 L99.277,31.792 C99.44,31.023 99.429,31.083 99.433,30.952 C99.434,30.911 99.439,30.545 99.443,30.369 C99.472,29.497 99.454,29.947 99.498,29.017 C98.607,16.289 90.196,8.294 77.95,6.12 L75.5,6 z",
    clipPath: "url(#Clip_1)",
    filter: "url(#Shadow_2)",
    fill: "rgba(0,0,0,0.75)"
  }), _react["default"].createElement("path", {
    d: "M78.056,5.124 C90.746,6.871 99.822,16.113 100.5,29 C100.361,31.64 100.541,30.653 100.255,32 L100.5,32 L100.5,308.126 C114.607,316.983 122.582,331.984 123,348.5 C123,374.734 101.734,396 75.5,396 C49.266,396 28,374.734 28,348.5 C28.09,331.404 36.569,317.536 50.5,308.126 L50.5,32 L50.745,32 C50.459,30.653 50.639,31.64 50.5,29 C50.5,15.745 61.693,5 75.5,5 L78.056,5.124 z",
    fillOpacity: "0",
    stroke: "#6C6E70",
    strokeWidth: "2"
  })), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M71,13.375 C78.559,13.506 89.07,19.681 90.588,27.125 L91,27.125 L91,316.532 C103.449,323.042 110.501,335.774 110.841,349.625 C110.841,370.06 94.794,386.625 75,386.625 C55.206,386.625 39.159,370.06 39.159,349.625 C39.135,335.555 46.893,323.321 59,316.532 L59,27.125 L59.412,27.125 C60.793,19.485 67.554,14.751 75,14.375 L71,13.375 z",
    clipPath: "url(#Clip_3)",
    filter: "url(#Shadow_4)",
    fill: "rgba(0,0,0,0.75)"
  }), _react["default"].createElement("path", {
    clipPath: "url(#cut-off-red)",
    d: "M71,13.375 C78.559,13.506 89.07,19.681 90.588,27.125 L91,27.125 L91,316.532 C103.449,323.042 110.501,335.774 110.841,349.625 C110.841,370.06 94.794,386.625 75,386.625 C55.206,386.625 39.159,370.06 39.159,349.625 C39.135,335.555 46.893,323.321 59,316.532 L59,27.125 L59.412,27.125 C60.793,19.485 67.554,14.751 75,14.375 z",
    fill: "url(#Gradient_1)"
  })), showGoalline && _react["default"].createElement("text", {
    transform: "matrix(1, 0, 0, 1, 124.659, 35)"
  }, _react["default"].createElement("tspan", {
    x: "-19.341",
    y: "6.5",
    fontSize: "18",
    fill: "#000000"
  }, "Goal")), allsteps.map(function (eachStep) {
    return _react["default"].createElement("g", {
      key: eachStep.val
    }, _react["default"].createElement("text", {
      textAnchor: "end",
      x: "42",
      y: eachStep.y - 5,
      className: "small"
    }, eachStep.val), _react["default"].createElement("path", {
      d: "M49.5, ".concat(eachStep.y, " L51, ").concat(eachStep.y, " "),
      filter: "url(#Shadow_10)",
      fill: "rgba(0,0,0,0.75)"
    }), _react["default"].createElement("path", {
      d: "M40.5,".concat(eachStep.y, " L51, ").concat(eachStep.y),
      fillOpacity: "0",
      stroke: "#6A6363",
      strokeWidth: "3"
    }));
  })));
}

Thermometer.defaultProps = {
  width: "100px",
  height: "250px",
  color: '#8BC0ED',
  steps: 5,
  minValue: 0,
  maxValue: 100,
  currentValue: 50,
  showGoalline: false
};
Thermometer.PropTypes = {
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  color: _propTypes["default"].string,
  steps: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  currentValue: _propTypes["default"].number,
  showGoalline: _propTypes["default"].bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaGVybW9tZXRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic3RlcHMiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiY3VycmVudFZhbHVlIiwic2hvd0dvYWxsaW5lIiwidHViZVdpZHRoIiwiYWxsc3RlcHMiLCJjb25zb2xlIiwibG9nIiwiZWFjaFN0ZXBWYWwiLCJwYXJzZUludCIsImxlbmd0aE9mVHViZSIsImVhY2hTdGVwWSIsImN1cnJlbnRWYWx1ZVkiLCJ2YWwiLCJ5IiwiaSIsInB1c2giLCJtYXAiLCJlYWNoU3RlcCIsImRlZmF1bHRQcm9wcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBO0FBRWUsU0FBU0EsV0FBVCxPQUE2RjtBQUFBLE1BQXZFQyxLQUF1RSxRQUF2RUEsS0FBdUU7QUFBQSxNQUFoRUMsTUFBZ0UsUUFBaEVBLE1BQWdFO0FBQUEsTUFBeERDLEtBQXdELFFBQXhEQSxLQUF3RDtBQUFBLE1BQWpEQyxRQUFpRCxRQUFqREEsUUFBaUQ7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsTUFBN0JDLFlBQTZCLFFBQTdCQSxZQUE2QjtBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUd4RyxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQk4sUUFBcEIsRUFBOEIsU0FBOUIsRUFBeUNELFFBQXpDO0FBQ0EsTUFBTVEsV0FBVyxHQUFHLENBQUVDLFFBQVEsQ0FBQ1IsUUFBRCxDQUFSLEdBQXNCUSxRQUFRLENBQUNULFFBQUQsQ0FBaEMsSUFBNENELEtBQWhFLENBTndHLENBT3hHOztBQUNBLE1BQU1XLFlBQVksR0FBRyxNQUFJLEVBQXpCO0FBQ0EsTUFBTUMsU0FBUyxHQUFH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UCxXQUFXLENBQUN3QixTQUFaLEdBQXdCO0FBQ3RCdkIsRUFBQUEsS0FBSyxFQUFHdUIsc0JBQVVDLE1BREk7QUFFdEJ2QixFQUFBQSxNQUFNLEVBQUVzQixzQkFBVUMsTUFGSTtBQUd0QnRCLEVBQUFBLEtBQUssRUFBRXFCLHNCQUFVRSxNQUhLO0FBSXRCdEIsRUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVFLE1BSkU7QUFLdEJyQixFQUFBQSxRQUFRLEVBQUVtQixzQkFBVUUsTUFMRTtBQU10QnBCLEVBQUFBLFlBQVksRUFBRWtCLHNCQUFVRSxNQU5GO0FBT3RCbkIsRUFBQUEsWUFBWSxFQUFFaUIsc0JBQVVHO0FBUEYsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy9UaGFuayB5b3UgaHR0cHM6Ly9jb2RlcGVuLmlvL2RhdmlkYmFua3MvcGVuL3Jrc0xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZXJtb21ldGVyKHt3aWR0aCwgaGVpZ2h0LCBzdGVwcywgbWluVmFsdWUsIG1heFZhbHVlLCBjdXJyZW50VmFsdWUsIHNob3dHb2FsbGluZX0pIHtcblxuICAgIFxuICAgIGxldCB0dWJlV2lkdGggPSAyMS41O1xuICAgIGNvbnN0IGFsbHN0ZXBzID0gW107XG4gICAgY29uc29sZS5sb2coJ01heCAnLCBtYXhWYWx1ZSwgJ01pblZhbCAnLCBtaW5WYWx1ZSk7XG4gICAgY29uc3QgZWFjaFN0ZXBWYWwgPSAoIHBhcnNlSW50KG1heFZhbHVlKSAtICBwYXJzZUludChtaW5WYWx1ZSkpL3N0ZXBzO1xuICAgIC8vWSByYW5nZXMgZnJvbSBtaW4gPSAyOTUgIG1heCA9IDE0ICBcbiAgICBjb25zdCBsZW5ndGhPZlR1YmUgPSAyOTUtMzQ7XG4gICAgY29uc3QgZWFjaFN0ZXBZID0gbGVuZ3RoT2ZUdWJlL3N0ZXBzO1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZVk9ICAyOTUgLSAobGVuZ3RoT2ZUdWJlICogY3VycmVudFZhbHVlLyAobWF4VmFsdWUgLSBtaW5WYWx1ZSkpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCBjdXJyZW50VmFsdWVZKTtcbiAgICBsZXQgdmFsLCB5OyBcbiAgICBmb3IobGV0IGk9MDsgaTw9c3RlcHM7IGkrKykge1xuICAgICAgdmFsID0gbWluVmFsdWUgKyBpKiBlYWNoU3RlcFZhbDtcbiAgICAgIHkgPSAyOTUgLSBlYWNoU3RlcFkgKiBpO1xuICAgICAgYWxsc3RlcHMucHVzaCggeyAndmFsJzogdmFsLCAneSc6eX0pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHZpZXdCb3g9XCIwLCAwLCAxNTAsIDQwMFwiPlxuICAgICAgICAgIDxkZWZzPlxuXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjdXQtb2ZmLXJlZFwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIzOFwiICB5PXtjdXJyZW50VmFsdWVZfSB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjUwMFwiPlxuICAgICAgICAgICAgICAgIDwvcmVjdD5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJDbGlwXzFcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSwtMy45OTkgTDEzMCwtMy45OTkgTDEzMCw0MDUgTDIxLDQwNSB6IE03NS41LDYgTDc3Ljk1LDYuMTIgQzkwLjE5Niw4LjI5NCA5OC42MDcsMTYuMjg5IDk5LjQ5OCwyOS4wMTcgQzk5LjQ1NCwyOS45NDcgOTkuNDcyLDI5LjQ5NyA5OS40NDMsMzAuMzY5IEM5OS40MzksMzAuNTQ1IDk5LjQzNCwzMC45MTEgOTkuNDMzLDMwLjk1MiBDOTkuNDI5LDMxLjA4MyA5OS40NCwzMS4wMjMgOTkuMjc3LDMxLjc5MiBMOTkuMDIsMzMgTDk5LjUsMzMgTDk5LjUsMzA4LjY3OSBMOTkuOTY4LDMwOC45NzMgQzExMy41NzIsMzE3LjUxNCAxMjEuNTg0LDMzMi4wNzEgMTIyLDM0OC41MjUgQzEyMiwzNzQuMTgxIDEwMS4xODEsMzk1IDc1LjUsMzk1IEM0OS44MTksMzk1IDI5LDM3NC4xODEgMjksMzQ4LjUgQzI5LjA4NiwzMzIuMjQ0IDM2Ljk0LDMxOC40OTMgNTEuMDYsMzA4Ljk1NSBMNTEuNSwzMDguNjU4IEw1MS41LDMzIEw1MS45OCwzMyBMNTEuNzIzLDMxLjc5MiBDNTEuNTYsMzEuMDIzIDUxLjU3MSwzMS4wODMgNTEuNTY3LDMwLjk1MiBDNTEuNTY1LDMwLjkxMSA1MS41NiwzMC41NDUgNTEuNTU2LDMwLjM2OSBDNTEuNTQ3LDI5Ljk4OSA1MS41MywyOS41MzcgNTEuNDk5LDI4Ljk0NyBDNTEuNSwxNi4zMDcgNjIuMjM2LDYgNzUuNSw2IHogTTc1LjU0OCw0LjAwMSBDNjEuMTUsNCA0OS41LDE1LjE4NCA0OS41LDI5IEM0OS41MzEsMjkuNjIzIDQ5LjU0OCwzMC4wNTcgNDkuNTU3LDMwLjQxNyBDNDkuNTY0LDMwLjgzNSA0OS41NjEsMzAuNjQgNDkuNTY3LDMxIEw0OS41LDMxIEw0OS41LDMwNy42MTIgQzM1Ljk4NywzMTcuMjYyIDI2Ljk4OSwzMzEuNTM5IDI3LDM0OC40OTUgQzI3LDM3NS4yODYgNDguNzE0LDM5NyA3NS41LDM5NyBDMTAyLjI4NiwzOTcgMTI0LDM3NS4yODYgMTI0LDM0OC41IEMxMjMuMTAzLDMzMi4wMTkgMTE1Ljc1MSwzMTYuNjE1IDEwMS41LDMwNy41OTQgTDEwMS41LDMxIEwxMDEuNDMyLDMxIEMxMDEuNDM5LDMwLjY0IDEwMS40MzUsMzAuODM1IDEwMS40NDMsMzAuNDE3IEMxMDEuNDUyLDMwLjA1NyAxMDEuNDY4LDI5LjYyMyAxMDEuNDk4LDI5LjA1MiBMMTAxLjQ5OCwyOC45NDcgQzEwMC44MDMsMTUuNzMgOTEuNTEyLDUuOTY3IDc4LjE5Miw0LjEzMyBMNzguMTA0LDQuMTI1IEw3NS41NDgsNC4wMDEgelwiLz5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8ZmlsdGVyIGlkPVwiU2hhZG93XzJcIj5cbiAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlQWxwaGFcIiBzdGREZXZpYXRpb249XCIyLjVcIi8+XG4gICAgICAgICAgICAgIDxmZU9mZnNldCBkeD1cIjBcIiBkeT1cIjJcIiByZXN1bHQ9XCJvZmZzZXRibHVyXCIvPlxuICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZENvbG9yPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj1cIm9mZnNldGJsdXJcIiBvcGVyYXRvcj1cImluXCIvPlxuICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJDbGlwXzNcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMy4xNTksNS4zNzUgTDExNi44NDEsNS4zNzUgTDExNi44NDEsMzk0LjYyNSBMMzMuMTU5LDM5NC42MjUgeiBNNzEsMTMuMzc1IEw3NSwxNC4zNzUgQzY3LjU1NCwxNC43NTEgNjAuNzkzLDE5LjQ4NSA1OS40MTIsMjcuMTI1IEw1OSwyNy4xMjUgTDU5LDMxNi41MzIgQzQ2Ljg5MywzMjMuMzIxIDM5LjEzNSwzMzUuNTU1IDM5LjE1OSwzNDkuNjI1IEMzOS4xNTksMzcwLjA2IDU1LjIwNiwzODYuNjI1IDc1LDM4Ni42MjUgQzk0Ljc5NCwzODYuNjI1IDExMC44NDEsMzcwLjA2IDExMC44NDEsMzQ5LjYyNSBDMTEwLjUwMSwzMzUuNzc0IDEwMy40NDksMzIzLjA0MiA5MSwzMTYuNTMyIEw5MSwyNy4xMjUgTDkwLjU4OCwyNy4xMjUgQzg5LjA3LDE5LjY4MSA3OC41NTksMTMuNTA2IDcxLDEzLjM3NSB6XCIvPlxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJTaGFkb3dfNFwiPlxuICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XCJTb3VyY2VBbHBoYVwiIHN0ZERldmlhdGlvbj1cIjIuNVwiLz5cbiAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PVwiMFwiIGR5PVwiMlwiIHJlc3VsdD1cIm9mZnNldGJsdXJcIi8+XG4gICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW4yPVwib2Zmc2V0Ymx1clwiIG9wZXJhdG9yPVwiaW5cIi8+XG4gICAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD1cIkdyYWRpZW50XzFcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjeD1cIjc1XCIgY3k9XCIzNDMuMDAzXCIgcj1cIjM3LjA5OVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI0YzRjNGM1wiLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNFQjRBMDhcIi8+XG4gICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZmlsdGVyIGlkPVwiU2hhZG93XzZcIj5cbiAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlQWxwaGFcIiBzdGREZXZpYXRpb249XCIyLjVcIi8+XG4gICAgICAgICAgICAgIDxmZU9mZnNldCBkeD1cIjBcIiBkeT1cIjJcIiByZXN1bHQ9XCJvZmZzZXRibHVyXCIvPlxuICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZENvbG9yPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj1cIm9mZnNldGJsdXJcIiBvcGVyYXRvcj1cImluXCIvPlxuICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGZpbHRlciBpZD1cIlNoYWRvd184XCI+XG4gICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUFscGhhXCIgc3RkRGV2aWF0aW9uPVwiMi41XCIvPlxuICAgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9XCIwXCIgZHk9XCIyXCIgcmVzdWx0PVwib2Zmc2V0Ymx1clwiLz5cbiAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RDb2xvcj1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbjI9XCJvZmZzZXRibHVyXCIgb3BlcmF0b3I9XCJpblwiLz5cbiAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiQ2xpcF85XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzQuNSwxOTEgTDU1LjUsMTkxIEw1NS41LDIxMCBMMzQuNSwyMTAgeiBNNDkuNSwxOTkgTDQwLjUsMTk5IEw0MC41LDIwMiBMNDkuNSwyMDIgTDQ5LjUsMTk5IHpcIi8+XG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgPGZpbHRlciBpZD1cIlNoYWRvd18xMFwiPlxuICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XCJTb3VyY2VBbHBoYVwiIHN0ZERldmlhdGlvbj1cIjIuNVwiLz5cbiAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PVwiMFwiIGR5PVwiMlwiIHJlc3VsdD1cIm9mZnNldGJsdXJcIi8+XG4gICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW4yPVwib2Zmc2V0Ymx1clwiIG9wZXJhdG9yPVwiaW5cIi8+XG4gICAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cIkNsaXBfMTFcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNC41LDkxIEw1NS41LDkxIEw1NS41LDExMCBMMzQuNSwxMTAgeiBNNDkuNSw5OSBMNDAuNSw5OSBMNDAuNSwxMDIgTDQ5LjUsMTAyIEw0OS41LDk5IHpcIi8+XG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgPGZpbHRlciBpZD1cIlNoYWRvd18xMlwiPlxuICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XCJTb3VyY2VBbHBoYVwiIHN0ZERldmlhdGlvbj1cIjIuNVwiLz5cbiAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PVwiMFwiIGR5PVwiMlwiIHJlc3VsdD1cIm9mZnNldGJsdXJcIi8+XG4gICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW4yPVwib2Zmc2V0Ymx1clwiIG9wZXJhdG9yPVwiaW5cIi8+XG4gICAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPGcgaWQ9XCJMYXllcl8xXCI+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk03NS41NDgsNC4wMDEgTDc4LjEwNCw0LjEyNSBMNzguMTkyLDQuMTMzIEM5MS41MTIsNS45NjcgMTAwLjgwMywxNS43MyAxMDEuNDk4LDI4Ljk0NyBMMTAxLjQ5OCwyOS4wNTIgQzEwMS40NjgsMjkuNjIzIDEwMS40NTIsMzAuMDU3IDEwMS40NDMsMzAuNDE3IEMxMDEuNDM1LDMwLjgzNSAxMDEuNDM5LDMwLjY0IDEwMS40MzIsMzEgTDEwMS41LDMxIEwxMDEuNSwzMDcuNTk0IEMxMTUuNzUxLDMxNi42MTUgMTIzLjEwMywzMzIuMDE5IDEyNCwzNDguNSBDMTI0LDM3NS4yODYgMTAyLjI4NiwzOTcgNzUuNSwzOTcgQzQ4LjcxNCwzOTcgMjcsMzc1LjI4NiAyNywzNDguNDk1IEMyNi45ODksMzMxLjUzOSAzNS45ODcsMzE3LjI2MiA0OS41LDMwNy42MTIgTDQ5LjUsMzEgTDQ5LjU2NywzMSBDNDkuNTYxLDMwLjY0IDQ5LjU2NCwzMC44MzUgNDkuNTU3LDMwLjQxNyBDNDkuNTQ4LDMwLjA1NyA0OS41MzEsMjkuNjIzIDQ5LjUsMjkgQzQ5LjUsMTUuMTg0IDYxLjE1LDQgNzUuNTQ4LDQuMDAxIHogTTc1LjUsNiBDNjIuMjM2LDYgNTEuNSwxNi4zMDcgNTEuNDk5LDI4Ljk0NyBDNTEuNTMsMjkuNTM3IDUxLjU0NywyOS45ODkgNTEuNTU2LDMwLjM2OSBDNTEuNTYsMzAuNTQ1IDUxLjU2NSwzMC45MTEgNTEuNTY3LDMwLjk1MiBDNTEuNTcxLDMxLjA4MyA1MS41NiwzMS4wMjMgNTEuNzIzLDMxLjc5MiBMNTEuOTgsMzMgTDUxLjUsMzMgTDUxLjUsMzA4LjY1OCBMNTEuMDYsMzA4Ljk1NSBDMzYuOTQsMzE4LjQ5MyAyOS4wODYsMzMyLjI0NCAyOSwzNDguNSBDMjksMzc0LjE4MSA0OS44MTksMzk1IDc1LjUsMzk1IEMxMDEuMTgxLDM5NSAxMjIsMzc0LjE4MSAxMjIsMzQ4LjUyNSBDMTIxLjU4NCwzMzIuMDcxIDExMy41NzIsMzE3LjUxNCA5OS45NjgsMzA4Ljk3MyBMOTkuNSwzMDguNjc5IEw5OS41LDMzIEw5OS4wMiwzMyBMOTkuMjc3LDMxLjc5MiBDOTkuNDQsMzEuMDIzIDk5LjQyOSwzMS4wODMgOTkuNDMzLDMwLjk1MiBDOTkuNDM0LDMwLjkxMSA5OS40MzksMzAuNTQ1IDk5LjQ0MywzMC4zNjkgQzk5LjQ3MiwyOS40OTcgOTkuNDU0LDI5Ljk0NyA5OS40OTgsMjkuMDE3IEM5OC42MDcsMTYuMjg5IDkwLjE5Niw4LjI5NCA3Ny45NSw2LjEyIEw3NS41LDYgelwiIGNsaXBQYXRoPVwidXJsKCNDbGlwXzEpXCIgZmlsdGVyPVwidXJsKCNTaGFkb3dfMilcIiBmaWxsPVwicmdiYSgwLDAsMCwwLjc1KVwiLz5cbiAgICAgICAgICAgICAgPHBhdGggIGQ9XCJNNzguMDU2LDUuMTI0IEM5MC43NDYsNi44NzEgOTkuODIyLDE2LjExMyAxMDAuNSwyOSBDMTAwLjM2MSwzMS42NCAxMDAuNTQxLDMwLjY1MyAxMDAuMjU1LDMyIEwxMDAuNSwzMiBMMTAwLjUsMzA4LjEyNiBDMTE0LjYwNywzMTYuOTgzIDEyMi41ODIsMzMxLjk4NCAxMjMsMzQ4LjUgQzEyMywzNzQuNzM0IDEwMS43MzQsMzk2IDc1LjUsMzk2IEM0OS4yNjYsMzk2IDI4LDM3NC43MzQgMjgsMzQ4LjUgQzI4LjA5LDMzMS40MDQgMzYuNTY5LDMxNy41MzYgNTAuNSwzMDguMTI2IEw1MC41LDMyIEw1MC43NDUsMzIgQzUwLjQ1OSwzMC42NTMgNTAuNjM5LDMxLjY0IDUwLjUsMjkgQzUwLjUsMTUuNzQ1IDYxLjY5Myw1IDc1LjUsNSBMNzguMDU2LDUuMTI0IHpcIiBmaWxsT3BhY2l0eT1cIjBcIiBzdHJva2U9XCIjNkM2RTcwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoICBkPVwiTTcxLDEzLjM3NSBDNzguNTU5LDEzLjUwNiA4OS4wNywxOS42ODEgOTAuNTg4LDI3LjEyNSBMOTEsMjcuMTI1IEw5MSwzMTYuNTMyIEMxMDMuNDQ5LDMyMy4wNDIgMTEwLjUwMSwzMzUuNzc0IDExMC44NDEsMzQ5LjYyNSBDMTEwLjg0MSwzNzAuMDYgOTQuNzk0LDM4Ni42MjUgNzUsMzg2LjYyNSBDNTUuMjA2LDM4Ni42MjUgMzkuMTU5LDM3MC4wNiAzOS4xNTksMzQ5LjYyNSBDMzkuMTM1LDMzNS41NTUgNDYuODkzLDMyMy4zMjEgNTksMzE2LjUzMiBMNTksMjcuMTI1IEw1OS40MTIsMjcuMTI1IEM2MC43OTMsMTkuNDg1IDY3LjU1NCwxNC43NTEgNzUsMTQuMzc1IEw3MSwxMy4zNzUgelwiIGNsaXBQYXRoPVwidXJsKCNDbGlwXzMpXCIgZmlsdGVyPVwidXJsKCNTaGFkb3dfNClcIiBmaWxsPVwicmdiYSgwLDAsMCwwLjc1KVwiLz5cbiAgICAgICAgICAgICAgPHBhdGggY2xpcFBhdGg9XCJ1cmwoI2N1dC1vZmYtcmVkKVwiIGQ9XCJNNzEsMTMuMzc1IEM3OC41NTksMTMuNTA2IDg5LjA3LDE5LjY4MSA5MC41ODgsMjcuMTI1IEw5MSwyNy4xMjUgTDkxLDMxNi41MzIgQzEwMy40NDksMzIzLjA0MiAxMTAuNTAxLDMzNS43NzQgMTEwLjg0MSwzNDkuNjI1IEMxMTAuODQxLDM3MC4wNiA5NC43OTQsMzg2LjYyNSA3NSwzODYuNjI1IEM1NS4yMDYsMzg2LjYyNSAzOS4xNTksMzcwLjA2IDM5LjE1OSwzNDkuNjI1IEMzOS4xMzUsMzM1LjU1NSA0Ni44OTMsMzIzLjMyMSA1OSwzMTYuNTMyIEw1OSwyNy4xMjUgTDU5LjQxMiwyNy4xMjUgQzYwLjc5MywxOS40ODUgNjcuNTU0LDE0Ljc1MSA3NSwxNC4zNzUgelwiIGZpbGw9XCJ1cmwoI0dyYWRpZW50XzEpXCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAge3Nob3dHb2FsbGluZSAmJiBcbiAgICAgICAgICAgICg8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgMTI0LjY1OSwgMzUpXCI+XG4gICAgICAgICAgICAgIDx0c3BhbiB4PVwiLTE5LjM0MVwiIHk9XCI2LjVcIiBmb250U2l6ZT1cIjE4XCIgZmlsbD1cIiMwMDAwMDBcIj5Hb2FsPC90c3Bhbj5cbiAgICAgICAgICAgIDwvdGV4dD4pfVxuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICB7YWxsc3RlcHMubWFwKGVhY2hTdGVwID0+IHtcbiAgICAgICAgICByZXR1cm4gPGcga2V5PXtlYWNoU3RlcC52YWx9PlxuICAgICAgICAgICAgICA8dGV4dCB0ZXh0QW5jaG9yPVwiZW5kXCIgeD1cIjQyXCIgeT17ZWFjaFN0ZXAueSAtIDV9IGNsYXNzTmFtZT1cInNtYWxsXCI+e2VhY2hTdGVwLnZhbH08L3RleHQ+XG5cbiAgICAgICAgICA8cGF0aCBkPXtgTTQ5LjUsICR7ZWFjaFN0ZXAueX0gTDUxLCAke2VhY2hTdGVwLnl9IGB9IGZpbHRlcj1cInVybCgjU2hhZG93XzEwKVwiIGZpbGw9XCJyZ2JhKDAsMCwwLDAuNzUpXCIvPlxuICAgICAgICAgIDxwYXRoIGQ9IHtgTTQwLjUsJHtlYWNoU3RlcC55fSBMNTEsICR7ZWFjaFN0ZXAueX1gfSBmaWxsT3BhY2l0eT1cIjBcIiBzdHJva2U9XCIjNkE2MzYzXCIgc3Ryb2tlV2lkdGg9XCIzXCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgICBcbiAgICAgIFxuXG5cbiAgICApXG59XG5cblRoZXJtb21ldGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6ICBcIjEwMHB4XCIsXG4gIGhlaWdodDogXCIyNTBweFwiLFxuICBzdGVwczogNSxcbiAgbWluVmFsdWU6IDAsXG4gIG1heFZhbHVlOiAxMDAsXG4gIGN1cnJlbnRWYWx1ZTogNTAsXG4gIHNob3dHb2FsbGluZTogZmFsc2VcblxufVxuXG5cblRoZXJtb21ldGVyLlByb3BUeXBlcyA9IHtcbiAgd2lkdGg6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0ZXBzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtaW5WYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGN1cnJlbnRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd0dvYWxsaW5lOiBQcm9wVHlwZXMuYm9vbFxufTtcbiJdfQ==
