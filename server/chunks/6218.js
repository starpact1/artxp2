"use strict";
exports.id = 6218;
exports.ids = [6218];
exports.modules = {

/***/ 6218:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const D1 = [
    {
        title: "Easy Setup and Management Tools for Every Artist",
        text: "It only takes a few minutes to set up a hosting artist account. We do not request any upfront costs or subscription fees. Once you have submitted your first experience and reached full access to your artist dashboard, our management tools will help you get started and stay organized. We make it simpler for you to share your art with the world.",
        button: "Get Started",
        image: "/Images/BecomeHero/s1.jpg"
    },
    {
        title: "Ongoing Support and Access to a Wealth of Resources",
        text: "Our team has hosted hundreds of experiences with thousands of guests in attendance. We understand the finer details when it comes to the creation, promotion, and execution of successful art experiences. As such, our hosting artists will gain access to a wealth of resources, guidelines, and ongoing support by our dedicated Host Success Manager. Your success awaits",
        button: "Start Hosting",
        image: "/Images/BecomeHero/s2.jpg"
    },
    {
        title: "Your Terms Your Money",
        text: "What is truly unique about our approach is that we provide every ARTXP hosting artist the chance to host experiences on their own terms. You are in control of your presence, image, and your success. Our tools and platform allow you to choose the pricing of your experiences, the size of your audience (monitored through ticket sales), and the dates you wish to host on. Host anything from 30-300 dates per year and earn anything from 500\u20AC to 5,000\u20AC+ for every date. What are you waiting for?",
        button: "Sign Up Today !",
        image: "/Images/BecomeHero/s3.jpg"
    },
    {
        title: "Gain Prime Exposure",
        text: "As an ARTXP hosting artist, you can take advantage of powerful and influential exposure across online and print media. We help you create and grow your presence through our very own marketing campaigns.",
        button: "Start Hosting",
        image: "/Images/BecomeHero/s4.jpg"
    }
];
function EasySetup() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: D1.map((item, index, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    margin: "auto",
                    mb: "170px",
                    alignItems: "center",
                    justifyContent: "center",
                    gridGap: "64px",
                    gap: "64px",
                    display: "flex",
                    width: "90%",
                    maxWidth: "1300px",
                    flexDirection: `${index % 2 == 0 ? "row" : "row-reverse"}`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            background: `url(${item.image})`,
                            width: "50%",
                            backgroundPosition: "50%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            marginRight: "12px",
                            height: "550px"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            marginLeft: "12px",
                            width: "50%",
                            padding: "88px 110px 88px 120px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    marginBottom: "40px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "fs32fw400",
                                    fontFamily: "Gordita-Regular",
                                    children: [
                                        " ",
                                        item.title,
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    marginBottom: "72px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "26px",
                                    fontFamily: "Gordita-Regular",
                                    children: [
                                        " ",
                                        item.text,
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ButtonBase, {
                                        variant: "shareButton",
                                        sx: {
                                            color: "#ffffff",
                                            background: "#141414",
                                            "&:hover": {
                                                background: "#2B2B2B"
                                            }
                                        },
                                        children: item.button
                                    })
                                })
                            })
                        ]
                    })
                ]
            }, key))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EasySetup);


/***/ })

};
;