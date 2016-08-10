/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/5371d7821600404790920f56116f88c4", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(1)
	    __webpack_require__(2)
	    __weex_module__.exports = {
	        data: function() {
	            return {}
	        },
	        computed: {},
	        ready: function() {},
	        attached: function() {},
	        methods: {
	            showSupport: function(e) {
	                var support = this.$vm('support')
	                support.action()
	            },
	            showFollow: function(e) {
	                var follow = this.$vm('follow')
	                follow.action()
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "scroller",
	  "classList": [
	    "about"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "logo"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "image-logo"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/image/logo_about.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line",
	        "support"
	      ],
	      "events": {
	        "click": "showSupport"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/about/icon_telephone.png"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "content"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "label"
	              ],
	              "attr": {
	                "value": "Telephone"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "0755-26979931"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line",
	        "address"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/about/icon_address.png"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "content"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "label"
	              ],
	              "attr": {
	                "value": "Address"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "深圳市南山区锦绣花园滨海阁20F"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line",
	        "email"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/about/icon_email.png"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "content"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "label"
	              ],
	              "attr": {
	                "value": "E-mail"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "wangbo@zhiyoula.com"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line",
	        "wechat"
	      ],
	      "events": {
	        "click": "showFollow"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/about/icon_wechat.png"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "content",
	            "content-wechat"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "label"
	              ],
	              "attr": {
	                "value": "Wechat"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "zhiyoula_2014"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "next-wechat"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "next"
	              ],
	              "attr": {
	                "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/util/icon_arrow.png"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "next"
	              ],
	              "attr": {
	                "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/about/icon_qr.png"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "team"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "team-name"
	          ],
	          "attr": {
	            "value": "R & D team"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "team-name",
	            "team-cn"
	          ],
	          "attr": {
	            "value": "研发团队"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "team-line"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "team-office"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "PM"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "UI"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "F2E"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "SDE"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "team-office"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "鹏嘉"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "凯迪"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "黎锐"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "office"
	              ],
	              "attr": {
	                "value": "有才"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "support",
	      "id": "support"
	    },
	    {
	      "type": "follow",
	      "id": "follow"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "about": {
	    "width": 750,
	    "backgroundColor": "#ebebeb"
	  },
	  "logo": {
	    "width": 750,
	    "height": 300,
	    "backgroundColor": "#ff8a34"
	  },
	  "image-logo": {
	    "width": 200,
	    "height": 200,
	    "marginTop": 50,
	    "marginLeft": 275
	  },
	  "line": {
	    "width": 750,
	    "height": 200,
	    "backgroundColor": "#FFFFFF",
	    "marginTop": 20,
	    "flexDirection": "row"
	  },
	  "icon": {
	    "width": 60,
	    "height": 60,
	    "marginTop": 70,
	    "marginBottom": 70,
	    "marginLeft": 70,
	    "marginRight": 70
	  },
	  "content-wechat": {
	    "flex": 3
	  },
	  "label": {
	    "color": "#999999",
	    "marginTop": 44
	  },
	  "text": {
	    "color": "#666666",
	    "marginTop": 22
	  },
	  "next-wechat": {
	    "flex": 1,
	    "flexDirection": "row"
	  },
	  "next": {
	    "width": 50,
	    "height": 50,
	    "marginTop": 80
	  },
	  "team": {
	    "width": 750,
	    "textAlign": "center"
	  },
	  "team-name": {
	    "fontSize": 36,
	    "marginTop": 40,
	    "textAlign": "center",
	    "color": "#999999"
	  },
	  "team-cn": {
	    "fontSize": 32
	  },
	  "team-line": {
	    "marginTop": 40,
	    "marginBottom": 40,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomStyle": "solid"
	  },
	  "team-office": {
	    "width": 750,
	    "flexDirection": "row",
	    "marginBottom": 40
	  },
	  "office": {
	    "color": "#999999",
	    "fontSize": 32,
	    "flex": 1,
	    "textAlign": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/5371d7821600404790920f56116f88c4", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/support", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function() {
	            return {
	                show: false
	            }
	        },
	        computed: {},
	        ready: function() {},
	        attached: function() {},
	        methods: {
	            action: function() {
	                this.show = !this.show
	            },
	            call: function() {
	                this.action()
	                this.$openURL('tel://0755-26979932')
	            }
	        },
	        components: {}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "support"
	      ],
	      "shown": function () {return this.show},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "pannel"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "智游啦客服热线"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text",
	                "number"
	              ],
	              "attr": {
	                "value": "0755-26979932"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "action"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "button"
	                  ],
	                  "events": {
	                    "click": "action"
	                  },
	                  "attr": {
	                    "value": "取消"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "button",
	                    "call"
	                  ],
	                  "events": {
	                    "click": "call"
	                  },
	                  "attr": {
	                    "value": "呼叫"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "support": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "height": 1500,
	    "backgroundColor": "rgba(0,0,0,0.5)"
	  },
	  "pannel": {
	    "width": 600,
	    "height": 320,
	    "marginTop": 425,
	    "marginLeft": 75,
	    "borderRadius": 8,
	    "backgroundColor": "#ffffff"
	  },
	  "text": {
	    "width": 600,
	    "textAlign": "center",
	    "marginTop": 44,
	    "fontSize": 36,
	    "color": "#666666"
	  },
	  "action": {
	    "width": 600,
	    "marginTop": 44,
	    "borderTopWidth": 1,
	    "borderTopColor": "#ebebeb",
	    "borderTopStyle": "solid",
	    "flexDirection": "row"
	  },
	  "button": {
	    "flex": 1,
	    "paddingTop": 35,
	    "paddingBottom": 35,
	    "textAlign": "center",
	    "color": "#ff6c00"
	  },
	  "call": {
	    "borderLeftWidth": 1,
	    "borderLeftColor": "#ebebeb",
	    "borderLeftStyle": "solid"
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/follow", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function() {
	            return {
	                show: false
	            }
	        },
	        computed: {},
	        ready: function() {},
	        attached: function() {},
	        methods: {
	            action: function() {
	                this.show = !this.show
	            }
	        },
	        components: {}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "follow"
	      ],
	      "shown": function () {return this.show},
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "qr"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/image/qr.png"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "notice"
	          ],
	          "attr": {
	            "value": "长按识别二维码"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "notice"
	          ],
	          "attr": {
	            "value": "获取最新产品动态"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "close"
	      ],
	      "events": {
	        "click": "action"
	      },
	      "shown": function () {return this.show},
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "x"
	          ],
	          "attr": {
	            "src": "https://zhiyoula.b0.upaiyun.com/assets/icon/util/icon_close.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "container"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "follow": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "height": 1500,
	    "backgroundColor": "#ffffff"
	  },
	  "qr": {
	    "width": 350,
	    "height": 350,
	    "marginTop": 300,
	    "marginLeft": 200
	  },
	  "notice": {
	    "textAlign": "center",
	    "marginTop": 30
	  },
	  "close": {
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "width": 750,
	    "height": 100,
	    "backgroundColor": "#ebebeb"
	  },
	  "x": {
	    "height": 60,
	    "width": 60,
	    "marginTop": 20,
	    "marginLeft": 355
	  }
	})
	})

/***/ }
/******/ ]);