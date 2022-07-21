exports.id = 3249;
exports.ids = [3249];
exports.modules = {

/***/ 4908:
/***/ ((module) => {

// Exports
module.exports = {
	"select1": "upcoming-experiences_select1__pZKNA",
	"select1Wrapper": "upcoming-experiences_select1Wrapper__F5aEY",
	"label1": "upcoming-experiences_label1__Xj0mC",
	"checkboxInput": "upcoming-experiences_checkboxInput__icy4_",
	"checkmark": "upcoming-experiences_checkmark__3vaNs",
	"timeUl": "upcoming-experiences_timeUl__afL2r"
};


/***/ }),

/***/ 3249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7307);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4908);
/* harmony import */ var _upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5__);






function Experience() {
    const { 0: showMedium , 1: setShowMedium  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showType , 1: setShowType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeTime , 1: setActiveTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const mediumList = [
        {
            id: "m1",
            title: "Figure drawing",
            count: "2"
        },
        {
            id: "m2",
            title: "Mixed media",
            count: "7"
        },
        {
            id: "m3",
            title: "Photography",
            count: "8"
        },
        {
            id: "m4",
            title: "Printmaking",
            count: "6"
        },
        {
            id: "m5",
            title: "Painting",
            count: "17"
        },
        {
            id: "m6",
            title: "Drawing",
            count: "1"
        },
        {
            id: "m7",
            title: "Watercolour painting",
            count: "2"
        },
        {
            id: "m8",
            title: "Alcohol Ink",
            count: "6"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
            variant: "ct110",
            sx: {
                pt: "82px"
            },
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        sm: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "fs26fw700",
                            children: " Experiences Available For Private Booking "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        sm: 3,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    pt: "74px",
                                    maxWidth: "190px",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "fs11fw400",
                                        fontWeight: "700",
                                        children: " City "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().select1Wrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().select1),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: " Copenhagen "
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    pt: "24px",
                                    maxWidth: "210px",
                                    display: "flex",
                                    flexDirection: "row"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "start"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "online",
                                            className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    id: "online",
                                                    type: "checkbox",
                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxInput)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        paddingTop: "-6px",
                                                        paddingLeft: "6px"
                                                    },
                                                    children: " Online "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkmark)
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            display: "flex",
                                            flexDirection: "row",
                                            pl: "32px"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "inPerson",
                                            className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    id: "inPerson",
                                                    type: "checkbox",
                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxInput)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        paddingTop: "-6px",
                                                        paddingLeft: "6px"
                                                    },
                                                    children: " In Person "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkmark)
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    pt: "22px",
                                    maxWidth: "190px",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs11fw400",
                                                fontWeight: "700",
                                                children: " Medium "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ButtonBase, {
                                                sx: {
                                                    fontSize: "18px"
                                                },
                                                onClick: ()=>setShowMedium((prev)=>!prev),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    fontSize: "inherit"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                        in: showMedium,
                                        sx: {
                                            mt: "12px",
                                            p: 0
                                        },
                                        children: [
                                            mediumList.map((item, key)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                    container: true,
                                                    sx: {
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                            item: true,
                                                            xs: 10,
                                                            sx: {
                                                                ml: "-8px"
                                                            },
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: item.id,
                                                                className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        id: item.id,
                                                                        type: "checkbox",
                                                                        className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxInput)
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        style: {
                                                                            paddingTop: "-6px",
                                                                            paddingLeft: "16px"
                                                                        },
                                                                        children: [
                                                                            " ",
                                                                            item.title,
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkmark)
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                            item: true,
                                                            xs: 2,
                                                            sx: {
                                                                textAlign: "right",
                                                                display: "flex",
                                                                justifyContent: "end",
                                                                alignItems: "center"
                                                            },
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                                variant: "fs9fw400",
                                                                mr: "2px",
                                                                children: [
                                                                    " ",
                                                                    item.count,
                                                                    " "
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, key);
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    borderTop: "1px solid #f5f6f7",
                                                    mt: "20px",
                                                    mb: "49px"
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    pt: "1px",
                                    maxWidth: "190px",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "fs11fw400",
                                                fontWeight: "700",
                                                children: " Type "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ButtonBase, {
                                                sx: {
                                                    fontSize: "18px"
                                                },
                                                onClick: ()=>setShowType((prev)=>!prev),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    fontSize: "inherit"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                        in: showType,
                                        sx: {
                                            mt: "12px",
                                            p: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                container: true,
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        xs: 10,
                                                        sx: {
                                                            ml: "-8px"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "workshop",
                                                            className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "workshop",
                                                                    type: "checkbox",
                                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxInput)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        paddingTop: "-6px",
                                                                        paddingLeft: "16px"
                                                                    },
                                                                    children: " Workshop "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkmark)
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        xs: 2,
                                                        sx: {
                                                            textAlign: "right",
                                                            display: "flex",
                                                            justifyContent: "end",
                                                            alignItems: "center"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                            variant: "fs9fw400",
                                                            mr: "2px",
                                                            children: " 45 "
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                container: true,
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        xs: 10,
                                                        sx: {
                                                            ml: "-8px"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Tour",
                                                            className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "Tour",
                                                                    type: "checkbox",
                                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxInput)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        paddingTop: "-6px",
                                                                        paddingLeft: "16px"
                                                                    },
                                                                    children: " Tour & WorkShop "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_upcoming_experiences_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkmark)
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        xs: 2,
                                                        sx: {
                                                            textAlign: "right",
                                                            display: "flex",
                                                            justifyContent: "end",
                                                            alignItems: "center"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                            variant: "fs9fw400",
                                                            mr: "2px",
                                                            children: " 4 "
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    borderTop: "1px solid #f5f6f7",
                                                    mt: "20px",
                                                    mb: "49px"
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: 5,
                        item: true,
                        sm: 9,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 12,
                                sx: {
                                    mb: "38px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sOnline: true,
                                    minimum: true,
                                    sale: "on sale",
                                    image: "/Images/Paintings/p1.png",
                                    absoluteText: "printmaking",
                                    title: "Linocut Print Workshop with Henry the Rabbit",
                                    price: "500 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Tuesday, 19th Jul 2022, 22:00 - 00:30",
                                    hosted: "Hosted by Craig Martin Wood"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sOnline: true,
                                    sale: "on sale",
                                    image: "/Images/Paintings/p2.jpg",
                                    absoluteText: "drawing",
                                    title: "Get Started with Drawing Portraits: A Beginner\u2019s Workshop in Drawing Faces",
                                    price: "250 DKK",
                                    place: "Online",
                                    dateString: "Thursday, 21st Jul 2022, 20:30 - 22:30",
                                    hosted: "Hosted by Lot Winther"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sOnline: true,
                                    sale: "selling fast",
                                    image: "/Images/Paintings/p3.jpeg",
                                    absoluteText: "mixed media",
                                    title: "Meditation and Intuitive Art Making: Learn to Draw Your Emotions",
                                    price: "390 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Thursday, 21st Jul 2022, 21:00 - 23:00",
                                    hosted: "Hosted by Hira Sameer Ahmed"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sOnline: true,
                                    sale: "selling out",
                                    image: "Images/Paintings/p4.png",
                                    absoluteText: "printmaking",
                                    title: "Linocut Print Workshop with Henry the Rabbit",
                                    price: "500 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Thursday, 21st Jul 2022, 22:00 - 00:30",
                                    hosted: "Hosted by Craig Martin Wood"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sale: "on sale",
                                    image: "Images/Paintings/p5.jpg",
                                    absoluteText: "printmaking",
                                    title: "Create a Magical Landscape Painting with Acrylics and Water",
                                    price: "250 DKK",
                                    place: "Online",
                                    dateString: "Tuesday, 26th Jul 2022, 22:00 - 00:30",
                                    hosted: "Hosted by Craig Martin Wood"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sale: "on sale",
                                    image: "Images/Paintings/p6.jpg",
                                    absoluteText: "painting",
                                    title: "Create a Dreamy Landscape Painting with Acrylics",
                                    price: "320 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Saturday, 23rd Jul 2022, 19:00 - 22:00",
                                    hosted: "Hosted by Melanie Larsen"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sale: "on sale",
                                    image: "Images/Paintings/p7.jpeg",
                                    absoluteText: "alcohol ink",
                                    title: "Create Unique Abstract Art",
                                    price: "590 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Saturday, 23rd Jul 2022, 20:30 - 23:30",
                                    hosted: "Hosted by Rita Howis"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sale: "selling fast",
                                    image: "Images/Paintings/p8.jpeg",
                                    absoluteText: "photography",
                                    title: "Cyanotype: Make Botanical Sun Prints",
                                    price: "390 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Sunday, 24th Jul 2022, 14:30 - 16:30",
                                    hosted: "Hosted by Kathrine Thude"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IndexPage_OnSale__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sale: "selling fast",
                                    image: "Images/Paintings/p8.jpeg",
                                    absoluteText: "photography",
                                    title: "Cyanotype: Make Botanical Sun Prints",
                                    price: "390 DKK",
                                    place: "Copenhagen, Denmark",
                                    dateString: "Sunday, 24th Jul 2022, 14:30 - 16:30",
                                    hosted: "Hosted by Kathrine Thude"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                sm: 12,
                                sx: {
                                    mt: "60px",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ButtonBase, {
                                    variant: "LoadMore",
                                    children: "Load More Experiences"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);


/***/ })

};
;