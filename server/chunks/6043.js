"use strict";
exports.id = 6043;
exports.ids = [6043];
exports.modules = {

/***/ 6043:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function NavBar1() {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: logo , 1: setLogo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/Images/Icon/LogoDark.png");
    const { 0: scrollTop , 1: setScrollTop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const listenToScroll = ()=>{
        setScrollTop(window.pageYOffset);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", listenToScroll);
        if (pathname == "/") {
            setLogo("/Images/Icon/LogoWhite.png");
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: pathname != "/become-a-hosting-artist/sign-up" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: (pathname == "/" || pathname == "/become-a-hosting-artist") && scrollTop < 10 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
                position: "fixed",
                onMouseEnter: ()=>setLogo("/Images/Icon/LogoDark.png"),
                onMouseLeave: ()=>setLogo("/Images/Icon/LogoWhite.png"),
                sx: {
                    height: "62px",
                    background: "transparent",
                    boxShadow: "none",
                    borderBottom: "0.5px solid rgba(20,20,20,.1)",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                        background: "#ffffff",
                        color: "#000000 !important"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    variant: "ct110",
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 6,
                                sx: {
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: logo,
                                            style: {
                                                cursor: "pointer"
                                            },
                                            alt: "logo"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pl: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/upcoming-experiences",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Upcoming Experiences "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pl: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/private-bookings",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Private Bookings "
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 6,
                                sx: {
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pr: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/become-a-hosting-artist",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Become a Hosting Artist "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pr: "20px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Sign In "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            mt: "4px",
                                            pr: "20px",
                                            fontWeight: "50",
                                            height: "12px",
                                            borderLeft: "1px solid"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {},
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Skift til Dansk "
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
                position: "fixed",
                onMouseEnter: ()=>setLogo("/Images/Icon/LogoDark.png"),
                onMouseLeave: ()=>setLogo("/Images/Icon/LogoWhite.png"),
                sx: {
                    height: "62px",
                    background: "#ffffff",
                    boxShadow: "none",
                    color: "#000000",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                        background: "#ffffff",
                        color: "#000000 !important"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    variant: "ct110",
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 6,
                                sx: {
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/Images/Icon/LogoDark.png",
                                            style: {
                                                cursor: "pointer"
                                            },
                                            alt: "Logo"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pl: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/upcoming-experiences",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Upcoming Experiences "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pl: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/private-bookings",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Private Bookings "
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 6,
                                sx: {
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pr: "42px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/become-a-hosting-artist",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Become a Hosting Artist "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            pr: "20px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Sign In "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            mt: "4px",
                                            pr: "20px",
                                            fontWeight: "50",
                                            height: "12px",
                                            borderLeft: "1px solid"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {},
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs13fw400",
                                                fontFamily: "Gordita-Regular",
                                                color: "inherit",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                children: " Skift til Dansk "
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar1);


/***/ })

};
;