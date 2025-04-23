"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var MainPage = function () {
    var cell = document.querySelector('h1');
    console.log(cell);
    cell.forEach(function (el) {
        el.addEventListener('click', function (e) {
            console.log(e.target.textContent);
        });
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\u041A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438" }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "0" }), (0, jsx_runtime_1.jsx)("td", { children: "1" }), (0, jsx_runtime_1.jsx)("td", { children: "2" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "3" }), (0, jsx_runtime_1.jsx)("td", { children: "4" }), (0, jsx_runtime_1.jsx)("td", { children: "5" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "6" }), (0, jsx_runtime_1.jsx)("td", { children: "7" }), (0, jsx_runtime_1.jsx)("td", { children: "8" })] })] }) })] }));
};
exports.default = MainPage;
Page;
