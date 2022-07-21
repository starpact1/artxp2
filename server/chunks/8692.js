exports.id = 8692;
exports.ids = [8692];
exports.modules = {

/***/ 8578:
/***/ ((module) => {

// Exports
module.exports = {
	"mySwiper": "HeroSection_mySwiper__xvOAk",
	"swiper-button-prev": "HeroSection_swiper-button-prev__biYUQ",
	"header1": "HeroSection_header1__ui8AO",
	"overlay": "HeroSection_overlay__Q4bwH"
};


/***/ }),

/***/ 4146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8578);
/* harmony import */ var _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Import Swiper styles



// import required modules




const t1 = [
    {
        image: "/Images/LoaderImages/L1.png",
        text: "Experience Printmaking"
    },
    {
        image: "/Images/LoaderImages/L2.jpg",
        text: "Meditation and Intuitive Art Making"
    },
    {
        image: "/Images/LoaderImages/L3.jpg",
        text: "Learn Travel Photography"
    },
    {
        image: "/Images/LoaderImages/L4.jpg",
        text: "Learn to Draw the Human Body"
    },
    {
        image: "/Images/LoaderImages/L5.jfif",
        text: "Create Abstruct Art"
    },
    {
        image: "/Images/LoaderImages/L6.jpg",
        text: "Learn Water Color Painting"
    }, 
];
function HeroSection() {
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_3__.useSwiper)();
    const Swiper1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [city, setCity] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [media, setMedia] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const handleCityChange = (event)=>{
        setCity(event.target.value);
    };
    const handleMediaChange = (event)=>{
        setMedia(event.target.value);
    };
    const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [color, setColor] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("red");
    const [watch1, setWatch1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    const [featureText, setFeatureText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(t1[0].text);
    const [featureImage, setFeatureImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(t1[0].image);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (progress >= 100) setWatch1((prev)=>prev >= 6 ? 1 : prev + 1);
    }, [
        progress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFeatureText(t1[watch1 - 1].text);
        setFeatureImage(t1[watch1 - 1].image);
        Swiper1.current.swiper.slideNext();
    }, [
        watch1
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const timer = setInterval(()=>{
            setProgress((prevProgress)=>prevProgress >= 100 ? 0 : prevProgress + 1);
        }, 50);
        // const timer1 = setInterval(() => {
        //     next1()
        //   }, 50*100);
        return ()=>{
            clearInterval(timer);
        // clearInterval(timer1);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().header1),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    position: "absolute",
                    display: "flex",
                    flexDiection: "row",
                    justifyContent: "center",
                    alignItems: "end",
                    minWidth: "280px",
                    textAlign: "right",
                    bottom: "40px",
                    right: "40px",
                    zIndex: "999999"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            width: "80%",
                            pb: "8px",
                            pr: "20px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                variant: "fs11fw400",
                                color: "#ffffff",
                                lineHeight: "2px",
                                component: "div",
                                sx: {
                                    opacity: "0.6"
                                },
                                children: " Featured Experience "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                variant: "fs11fw400",
                                color: "#ffffff",
                                lineHeight: "2px",
                                opacity: "90%",
                                children: [
                                    " ",
                                    featureText,
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            width: "20%",
                            color: "#ffffff",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
                                color: "inherit",
                                value: progress,
                                size: "42px",
                                thickness: 1,
                                variant: "determinate",
                                sx: {
                                    "& .MuiCircularProgress-circle": {
                                        transition: "none"
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    position: "absolute",
                                    top: "3px",
                                    left: "16px",
                                    width: "37px",
                                    height: "37px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    zIndex: "99999"
                                },
                                src: featureImage,
                                alt: featureText
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    position: "absolute",
                    ml: "152px",
                    mt: "170px",
                    background: "transparent",
                    top: "0px",
                    zIndex: 99
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        component: "h2",
                        variant: "bannerHeading",
                        children: " Bringing people "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        variant: "bannerHeading",
                        children: " together through art "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            mt: "12px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "bannerSubHeading",
                            children: " Search and book art experiences near you. "
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
                        sx: {
                            mt: "28px",
                            width: "100%",
                            height: "54px",
                            pl: "44px",
                            pr: "8px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                height: "100%"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    style: {
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        width: "126px",
                                        border: "none",
                                        color: "#8e9499"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Copenhagen "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Copenhagen "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Copenhagen "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    style: {
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        width: "151px",
                                        border: "none",
                                        color: "#8e9499"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Select a medium "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Copenhagen "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: " Copenhagen "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                    sx: {},
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        variant: "SearchButton",
                                        sx: {},
                                        children: "Search"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            mt: "16px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "bannerSubHeading3",
                            children: " New cities announcing shortly "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            mt: "71px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                variant: "fs12fw700",
                                fontWeight: "400",
                                color: "#ffffff",
                                children: " Are you an artist? "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "#",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    variant: "fs12fw700",
                                    color: "#ffffff",
                                    children: [
                                        " Become a Hosting Artist ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                mb: "-7px"
                                            }
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                ref: Swiper1,
                navigation: {
                    nextEl: ".next"
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                ],
                autoplay: false,
                loop: true,
                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().mySwiper),
                watchSlidesProgress: true,
                a11y: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide1.png",
                                layout: "fill"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide2.jpg",
                                layout: "fill"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide3.jpg",
                                layout: "fill"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide4.jpeg",
                                layout: "fill"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide5.png",
                                layout: "fill"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                className: (_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/Images/Images/slide6.jpg",
                                layout: "fill"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;