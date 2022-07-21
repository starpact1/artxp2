"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,1493,3827,7693,1375,979,4146,4586,6157,1788,9330,8762,9064,6019];
exports.modules = {

/***/ 5161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./Theme/Theme.js

const Theme = (0,material_.createTheme)({
    palette: {
        primary: {
            main: "#1135d4"
        }
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Gordita",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"', 
        ].join(","),
        bannerHeading: {
            fontWeight: 700,
            fontSize: "56px",
            color: "#FFFFFF",
            fontStyle: "normal",
            lineHeight: "67px"
        },
        bannerSubHeading: {
            fontWeight: 500,
            fontSize: "16px",
            color: "#FFFFFF",
            fontStyle: "normal",
            lineHeight: "62px"
        },
        bannerSubHeading2: {
            fontWeight: 400,
            fontSize: "16px",
            color: "#FFFFFF",
            fontStyle: "normal",
            lineHeight: "100%"
        },
        bannerSubHeading3: {
            fontWeight: 400,
            fontSize: "14px",
            color: "#FFFFFF",
            fontStyle: "normal",
            lineHeight: "100%"
        },
        fs16fw500: {
            fontWeight: 500,
            fontSize: "16px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "100%"
        },
        fs16fw700: {
            fontWeight: 700,
            fontSize: "16px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "140%"
        },
        fs14fw400: {
            fontWeight: 400,
            fontSize: "14px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "100%"
        },
        fs13fw400: {
            fontWeight: 400,
            fontSize: "13px",
            color: "#ffffff",
            fontStyle: "normal",
            lineHeight: "18.2px"
        },
        fs13fw700: {
            fontWeight: 700,
            fontSize: "13px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "18.2px"
        },
        fs12fw700: {
            fontWeight: 700,
            fontSize: "12px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "16px"
        },
        fs11fw400: {
            fontWeight: 400,
            fontSize: "11px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "15.4px"
        },
        fs10fw400: {
            fontWeight: 200,
            fontSize: "10px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "14px"
        },
        fs9fw400: {
            fontWeight: 200,
            fontSize: "9px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "140%"
        },
        fs18fw700: {
            fontWeight: 700,
            fontSize: "18px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "25.2px"
        },
        fs18fw400: {
            fontWeight: 400,
            fontSize: "18px",
            fontStyle: "normal",
            lineHeight: "140%"
        },
        fs26fw700: {
            fontWeight: 700,
            fontSize: "26px",
            color: "#000000",
            fontStyle: "normal",
            lineHeight: "35px"
        },
        fs20fw700: {
            fontWeight: 700,
            fontSize: "20px",
            color: "inherit",
            fontStyle: "normal",
            lineHeight: "35px",
            letterSpacing: "0px"
        },
        fs32fw700: {
            fontWeight: 700,
            fontSize: "32px",
            color: "#fff",
            fontStyle: "normal",
            lineHeight: "35px"
        },
        fs32fw400: {
            fontWeight: 400,
            fontSize: "32px",
            fontStyle: "normal",
            lineHeight: "120%"
        },
        fs44fw700: {
            fontWeight: 700,
            fontSize: "44px",
            color: "#fff",
            fontStyle: "normal",
            lineHeight: "normal"
        }
    },
    components: {
        MuiContainer: {
            variants: [
                {
                    props: {
                        variant: "ct"
                    },
                    style: {
                        paddingLeft: "28px",
                        paddingRight: "28px"
                    }
                },
                {
                    props: {
                        variant: "ct29"
                    },
                    style: {
                        paddingLeft: "29px",
                        paddingRight: "29px"
                    }
                },
                {
                    props: {
                        variant: "ct1"
                    },
                    style: {
                        paddingLeft: "56px",
                        marginLeft: "152px",
                        marginTop: "170px",
                        paddingRight: "56px"
                    }
                },
                {
                    props: {
                        variant: "ct110"
                    },
                    style: {
                        // margin: "0px",
                        padding: 0,
                        paddingLeft: "71px !important",
                        paddingRight: "71px !important"
                    }
                }, 
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "SearchButton"
                    },
                    style: {
                        fontWeight: "200",
                        fontSize: "13px",
                        lineHeight: "18px",
                        color: "#FFFFFF",
                        width: "200px",
                        background: "#141414",
                        // backgroundImage: "linear-gradient(180deg, #f24406 80%, #a12e02 100%)",
                        // backgroundImage: "linear-gradient(45deg, rgba(247,208,1,1) 72%, rgba(237,249,113,1) 100%)",
                        // background: "linear-gradient(98.35deg, #00286B -3.15%, #1D58AF 34.38%, #1433FF 76.96%)",
                        backgroundRepeat: "no-repeat",
                        // height: "57px",
                        width: "100%",
                        boxShadow: "0px 8px 16px rgba(27, 57, 255, 0.2)",
                        borderRadius: "6px",
                        width: "136px",
                        height: "36px",
                        fontStyle: "normal",
                        textTransform: "none",
                        "&:hover": {
                            background: "#2B2B2B"
                        }
                    }
                }
            ]
        },
        MuiButtonBase: {
            variants: [
                {
                    props: {
                        variant: "shareButton"
                    },
                    style: {
                        paddingTop: "14px",
                        paddingLeft: "32px",
                        paddingBottom: "14px",
                        paddingRight: "32px",
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: "13px",
                        lineHeight: "140%",
                        color: "#8e9499",
                        cursor: "pointer",
                        border: "1px solid #2d2f30"
                    }
                },
                {
                    props: {
                        variant: "LoadMore"
                    },
                    style: {
                        paddingTop: "14px",
                        paddingLeft: "32px",
                        paddingBottom: "14px",
                        paddingRight: "32px",
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: "13px",
                        lineHeight: "140%",
                        color: "#141414 ",
                        cursor: "pointer",
                        border: "1px solid #f5f6f7",
                        "&:hover": {
                            backgroundColor: "rgba(245,246,247,.5)"
                        }
                    }
                }
            ]
        }
    }
});
/* harmony default export */ const Theme_Theme = (Theme);

// EXTERNAL MODULE: ./pages/Components/AllComponents/NavBar.jsx
var NavBar = __webpack_require__(1966);
// EXTERNAL MODULE: ./pages/Components/AllComponents/Footer.jsx
var Footer = __webpack_require__(7483);
// EXTERNAL MODULE: ./pages/Components/AllComponents/NavBar1.jsx
var NavBar1 = __webpack_require__(6043);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
            theme: Theme_Theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBar1["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer["default"], {})
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5993:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Copyright");

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

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9311,910,2952,1664,5675,1966,6043,7483], () => (__webpack_exec__(5161)));
module.exports = __webpack_exports__;

})();