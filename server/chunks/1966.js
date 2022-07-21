"use strict";
exports.id = 1966;
exports.ids = [1966];
exports.modules = {

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);














// import Logo from "../../Images/LogoDark.png"
// import { useNavigate } from "react-router-dom";


const pages = [
    {
        pageName: "Home",
        url: "/"
    },
    {
        pageName: "Upcoming Experiences",
        url: "/upcoming-experiences"
    },
    {
        pageName: "Private Bookings",
        url: "/private-bookings"
    },
    {
        pageName: "Become a Hosting Artist",
        url: "/become-a-hosting-artist"
    },
    {
        pageName: "Hosting Artists",
        url: "/hosting-artist"
    },
    {
        pageName: "About Us",
        url: "/about-us"
    },
    {
        pageName: "Contact Us",
        url: "contact-us"
    }
];
const settings = (/* unused pure expression or super */ null && ([
    "Profile",
    "Account",
    "Dashboard",
    "Logout"
]));
function NavBar() {
    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = (url)=>{
        if (url != "") navigate(url);
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default()), {
            position: "fixed",
            sx: {
                backgroundColor: "rgba(18, 18, 18, 0.4)",
                backdropFilter: "blur(4px)"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default()), {
                maxWidth: "xl",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default()), {
                    disableGutters: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            component: "img",
                            src: "/Images/Icon/LogoWhite.png",
                            sx: {
                                width: "132px",
                                mr: 2,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    size: "large",
                                    "aria-label": "account of current user",
                                    "aria-controls": "menu-appbar",
                                    "aria-haspopup": "true",
                                    onClick: handleOpenNavMenu,
                                    color: "inherit",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    id: "menu-appbar",
                                    anchorEl: anchorElNav,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    open: Boolean(anchorElNav),
                                    onClose: ()=>{
                                        handleCloseNavMenu("");
                                    },
                                    sx: {
                                        display: {
                                            xs: "block",
                                            md: "none"
                                        }
                                    },
                                    children: pages.map((page, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                href: page.url,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    textAlign: "center",
                                                    children: page.pageName
                                                })
                                            })
                                        }, key))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            component: "img",
                            src: "/Images/LogoDark.png",
                            sx: {
                                width: "156px",
                                mr: 2,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                justifyContent: "right"
                            },
                            children: pages.map((page, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    // onClick={handleCloseNavMenu()}
                                    // onClick={() => { navigate(page.url) }}
                                    sx: {
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                        textTransform: "none"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        href: page.url,
                                        children: page.pageName
                                    })
                                }, key))
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ })

};
;