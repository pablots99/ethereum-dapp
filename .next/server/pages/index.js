"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(1508);
;// CONCATENATED MODULE: ./ethereum/build/CampaingFactory.json
const CampaingFactory_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaings","outputs":[{"internalType":"contract Campaing","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"createCampaing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCampaings","outputs":[{"internalType":"contract Campaing[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./ethereum/factory.js


//0xFA19Dae26B94EaDaB98b1838Fc446Af7243F640
342850557430352700000000000000000000000000000000;
const factory = new web3/* default.eth.Contract */.Z.eth.Contract(CampaingFactory_namespaceObject.Mt, "0x3C0Df36196d1316C87e72DbcdEa028499091F8Ec");

// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/campaign-card/campaign-card.js










const bull = /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
    component: "span",
    sx: {
        display: 'inline-block',
        mx: '2px',
        transform: 'scale(0.8)'
    },
    children: "•"
});
const CampaignCard = ({ campaings  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            minWidth: 275
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            fontSize: 14
                        },
                        color: "text.secondary",
                        gutterBottom: true,
                        children: "contract"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h4",
                        component: "div",
                        children: [
                            campaings.slice(0, 8),
                            "..."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/campaign?contract=" + campaings,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            size: "small",
                            children: "View Campaign"
                        })
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./components/layout/layout.js + 2 modules
var layout = __webpack_require__(4543);
// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
;// CONCATENATED MODULE: ./components/CampaignModal/CampaignModal.js








const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
const CampaignModal = (props1)=>{
    const router = (0,router_.useRouter)();
    const refreshData = ()=>router.replace(router.asPath)
    ;
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    const [values, setValues] = external_react_default().useState({
        amount: 0,
        name: '',
        description: ''
    });
    const [error, setErrors] = external_react_default().useState({
        amount: false,
        name: false
    });
    const handleChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        }
    ;
    const createCampaign = async (props)=>{
        let name_err = false;
        let amount_err = false;
        let err = 0;
        console.log(values);
        if (values.amount === 0) amount_err = true, err++;
        if (values.name === '') name_err = true, err++;
        if (err) setErrors({
            amount: amount_err,
            name: name_err
        });
        else {
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            try {
                props.setPending(true);
                handleClose();
                await factory.methods.createCampaing(values.amount, values.name, values.description).send({
                    from: accounts[0]
                });
                await refreshData();
                props.setPending(false);
                props.setok(true);
            } catch (err) {
                console.error(err);
                props.setPending(false);
            //handle error methamask
            //return ??
            }
            setErrors({
                amount: false,
                name: false
            });
            setValues({
                amount: 0,
                name: '',
                description: ''
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                onClick: handleOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {}),
                    "Add Campaign"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: style,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            id: "modal-modal-title",
                            variant: "h6",
                            component: "h2",
                            children: "Add campaign"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            id: "modal-modal-description",
                            sx: {
                                mt: 2
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Minimun Contribution"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                            variant: "outlined",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.OutlinedInput, {
                                error: error.amount,
                                id: "ammount",
                                type: "number",
                                onChange: handleChange('amount'),
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                    position: "end",
                                    children: "wei"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            error: error.name,
                            id: "name",
                            value: values.name,
                            onChange: handleChange('name')
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            fullWidth: true,
                            id: "description",
                            onChange: handleChange('description'),
                            value: values.description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            onClick: ()=>{
                                createCampaign(props1);
                            },
                            children: "Create Campaign"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js









const CampaingIndex = ({ campaings  })=>{
    const pending = /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                display: 'flex'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {})
        })
    });
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setoktransaction(false);
    };
    const [pendingopen, setpendingtransaction] = external_react_default().useState(false);
    const [okTransaction, setoktransaction] = external_react_default().useState(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout/* Layout */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        "CAMPAINGS",
                        /*#__PURE__*/ jsx_runtime_.jsx(CampaignModal, {
                            setPending: setpendingtransaction,
                            setok: setoktransaction
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                container: true,
                                spacing: {
                                    xs: 2,
                                    md: 3
                                },
                                columns: {
                                    xs: 4,
                                    sm: 8,
                                    md: 12
                                },
                                children: campaings.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        item: true,
                                        xs: 2,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CampaignCard, {
                                            campaings: c
                                        })
                                    }, c)
                                )
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                open: pendingopen,
                autoHideDuration: 6000,
                message: "Transaction is beign processed",
                action: pending
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                open: okTransaction,
                autoHideDuration: 6000,
                onClose: handleClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
                    onClose: handleClose,
                    severity: "success",
                    sx: {
                        width: '100%'
                    },
                    children: "Transaction succeeded"
                })
            })
        ]
    }));
};
//server side render
async function getServerSideProps() {
    const campaings = await factory.methods.getCampaings().call();
    return {
        props: {
            campaings
        }
    };
}
/* harmony default export */ const pages = (CampaingIndex);


/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1453:
/***/ ((module) => {

module.exports = require("@truffle/hdwallet-provider");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,555], () => (__webpack_exec__(9333)));
module.exports = __webpack_exports__;

})();