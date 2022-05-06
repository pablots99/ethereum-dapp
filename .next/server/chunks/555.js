"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 4543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/layout/headder.js










function Headder() {
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            flexGrow: 1
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            position: "static",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    component: "div",
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        style: {
                            "text-decoration": "none"
                        },
                        underline: "none",
                        href: "/",
                        children: "BLOCKSTAR"
                    })
                })
            })
        })
    }));
};

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/layout/footer.js




function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
            elevation: 1,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h5",
                    component: "h3",
                    children: "WEB3 REACT APP"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    component: "p",
                    children: "@2022 All right reserved"
                })
            ]
        })
    }));
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/layout.js




const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Headder, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-content",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    }));
};


/***/ }),

/***/ 1508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

const HDWalletProvider = __webpack_require__(1453);
let web3;
if (false) {} else {
    console.log("next short enter easy minute absorb plunge high dial lawn space pause");
    const provider = new HDWalletProvider({
        mnemonic: {
            phrase: "next short enter easy minute absorb plunge high dial lawn space pause"
        },
        providerOrUrl: "https://rinkeby.infura.io/v3/1c9a83f2f28b493cba9b36fad7ce37a9"
    });
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ })

};
;