"use strict";
(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 4860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ campaign),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(1508);
;// CONCATENATED MODULE: ./ethereum/build/Campaing.json
const Campaing_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"_min_contribution","type":"uint256"},{"internalType":"address","name":"_manager","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"vote","type":"bool"}],"name":"aproveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"count_requests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"address","name":"_recipent","type":"address"}],"name":"makeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"recipent","type":"address"},{"internalType":"uint256","name":"vote_yes","type":"uint256"},{"internalType":"bool","name":"complete","type":"bool"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
;// CONCATENATED MODULE: ./components/campaign-request-card/campaign-card-request.js








const CampaignCardRequest = (props)=>{
    const aproveRequest = async ()=>{
        props.setPending(true);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        const campaign = await new web3/* default.eth.Contract */.Z.eth.Contract(Campaing_namespaceObject.Mt, props.contract);
        console.log(campaign);
        try {
            await campaign.methods.aproveRequest(props.id - 14, true).send({
                from: accounts[0]
            });
            props.setok(true);
        } catch (error) {
            console.error("error");
            props.setok(false);
            props.setPending(false);
        }
        props.setPending(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            minWidth: 100
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontSize: 14
                        },
                        color: "text.primary",
                        gutterBottom: true,
                        children: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontSize: 14
                        },
                        color: "text.secondary",
                        gutterBottom: true,
                        children: "Ammount: " + props.value
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontSize: 14
                        },
                        color: "text.secondary",
                        gutterBottom: true,
                        children: "Aproved: " + props.votes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontSize: 14
                        },
                        color: "text.secondary",
                        gutterBottom: true,
                        children: "Complete: " + props.complete
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        size: "small",
                        onClick: ()=>aproveRequest()
                        ,
                        children: "Aprove request"
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/layout/layout.js + 2 modules
var layout = __webpack_require__(4543);
// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
;// CONCATENATED MODULE: ./components/contribute-modal/contribute-modal.js







const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
const ContributeModal = (props1)=>{
    const router = (0,router_.useRouter)();
    const refreshData = ()=>router.replace(router.asPath)
    ;
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    const [values, setValues] = external_react_default().useState({
        amount: 0
    });
    const [error, setErrors] = external_react_default().useState({
        amount: false
    });
    const handleChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        }
    ;
    const contribute = async (props)=>{
        let name_err = false;
        let amount_err = false;
        let err = 0;
        console.log(values);
        if (values.amount === 0) amount_err = true, err++;
        if (err) setErrors({
            amount: amount_err
        });
        else {
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            try {
                props.setPending(true);
                handleClose();
                const campaign = await new web3/* default.eth.Contract */.Z.eth.Contract(Campaing_namespaceObject.Mt, props.contract);
                console.log(values.amount);
                await campaign.methods.contribute().send({
                    from: accounts[0],
                    value: values.amount
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
                amount: false
            });
            setValues({
                amount: 0
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            textAlign: "bttom"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "contained",
                onClick: handleOpen,
                children: "Contribute"
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
                            children: "Contribute"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            id: "modal-modal-description",
                            sx: {
                                mt: 2
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "ammount"
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
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            onClick: ()=>{
                                contribute(props1);
                            },
                            children: "Contribute"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/campaign.js










const Campaign = (props)=>{
    const pending = /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                display: 'flex'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {})
        })
    });
    const [pendingopen, setpendingtransaction] = external_react_default().useState(false);
    const [okTransaction, setoktransaction] = external_react_default().useState(false);
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setoktransaction(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* Layout */.A, {
                children: [
                    "manager: " + props.manager,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    float: "left",
                                    marginRight: "20px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: props.name
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    height: "20px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    textAlign: "bottom"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ContributeModal, {
                                    setPending: setpendingtransaction,
                                    setok: setoktransaction,
                                    contract: props.contract
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    clear: "both"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Colected: " + props.balance + " wei"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Requests"
                    }),
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
                            children: JSON.parse(props.requests).map((res, index)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 2,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CampaignCardRequest, {
                                        description: res.description,
                                        value: res.value,
                                        recipent: res.recipent,
                                        votes: res.vote_yes,
                                        complete: res.complete,
                                        contract: props.contract,
                                        setPending: setpendingtransaction,
                                        setok: setoktransaction,
                                        id: res.id
                                    })
                                }, index));
                            })
                        })
                    })
                ]
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
async function getServerSideProps(context) {
    const { contract  } = context.query;
    const campaign = await new web3/* default.eth.Contract */.Z.eth.Contract(Campaing_namespaceObject.Mt, contract);
    const description = await campaign.methods.description().call();
    const minContribition = await campaign.methods.minContribution().call();
    const name = await campaign.methods.name().call();
    const manager = await campaign.methods.manager().call();
    const balance = await campaign.methods.getBalance().call();
    const numRequests = await campaign.methods.count_requests().call();
    let requests = [];
    for(let i = 0; i < numRequests; i++){
        const res = await campaign.methods.requests(i).call();
        requests.push(res);
    }
    requests = JSON.stringify(requests);
    return {
        props: {
            description,
            minContribition,
            name,
            manager,
            balance,
            requests,
            contract
        }
    };
}
/* harmony default export */ const campaign = (Campaign);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,555], () => (__webpack_exec__(4860)));
module.exports = __webpack_exports__;

})();