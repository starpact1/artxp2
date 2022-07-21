"use strict";
exports.id = 7307;
exports.ids = [7307];
exports.modules = {

/***/ 7307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




function OnSale({ sale , image , absoluteText , title , price , place , dateString , hosted , sOnline =false , minimum =false  }) {
    const { 0: isMouseIn , 1: setIsMouseIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: saleColor , 1: setSaleColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: saleBColor , 1: setSaleBColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sale == "on sale") {
            setSaleColor("#00949d");
            setSaleBColor("#E5F4F5");
        } else if (sale == "selling fast" || sale == "selling out") {
            setSaleColor("#fe2a50");
            setSaleBColor("#FFE9ED");
        }
    });
    const mouseIn = ()=>{
        setIsMouseIn(true);
    };
    const mouseOut = ()=>{
        setIsMouseIn(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                position: "relative",
                cursor: "pointer",
                mb: "28px"
            },
            onMouseEnter: mouseIn,
            onMouseLeave: mouseOut,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: "100%",
                        textAlign: "center",
                        background: `${saleBColor}`
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "fs11fw400",
                        textTransform: "uppercase",
                        color: saleColor,
                        lineHeight: "normal",
                        children: [
                            " ",
                            sale,
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: "100%",
                        height: "220px",
                        position: "relative"
                    },
                    children: [
                        isMouseIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(20,20,20,.2)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "fs11fw400",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                children: " Go To Experience "
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: image,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center"
                            },
                            all: "images1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                backgroundColor: "hsla(0,0%,100%,.7)",
                                color: "#141414",
                                py: "5px",
                                px: "8px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "fs11fw400",
                                color: "#141414",
                                textTransform: "uppercase",
                                children: [
                                    "  ",
                                    absoluteText,
                                    " "
                                ]
                            })
                        }),
                        sOnline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                                backgroundColor: "rgba(20,20,20,.4)",
                                color: "#141414",
                                py: "5px",
                                px: "8px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "fs11fw400",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                children: "  Online "
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "21px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                width: "70%",
                                fontSize: "13px",
                                fontWeight: "700"
                            },
                            children: isMouseIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                children: title
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: title
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "fs12fw700",
                                    whiteSpace: "nowrap",
                                    children: [
                                        " ",
                                        price,
                                        " "
                                    ]
                                }),
                                minimum && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "fs11fw400",
                                    lineHeight: "14px",
                                    color: "#545454",
                                    children: " minimum "
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {},
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "fs11fw400",
                        lineHeight: "14px",
                        color: "#545454",
                        children: [
                            " ",
                            place,
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        mt: "12px",
                        pt: "2px",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "fs10fw400",
                            fontWeight: "500",
                            color: "#545454",
                            children: [
                                " ",
                                dateString,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "fs10fw400",
                            color: "#545454",
                            children: [
                                " ",
                                hosted,
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnSale);


/***/ })

};
;