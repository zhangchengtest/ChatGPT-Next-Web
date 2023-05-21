exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 7157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Settings": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/components/settings.module.scss
var settings_module = __webpack_require__(1345);
var settings_module_default = /*#__PURE__*/__webpack_require__.n(settings_module);
// EXTERNAL MODULE: ./app/icons/reload.svg
var reload = __webpack_require__(4925);
// EXTERNAL MODULE: ./app/icons/add.svg
var add = __webpack_require__(1935);
// EXTERNAL MODULE: ./app/icons/close.svg
var icons_close = __webpack_require__(4299);
// EXTERNAL MODULE: ./app/icons/copy.svg
var copy = __webpack_require__(3231);
;// CONCATENATED MODULE: ./app/icons/clear.svg
var _defs, _mask;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClear = function SvgClear(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _defs || (_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "clear_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, _mask || (_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "clear_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#clear_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#clear_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2.667 5)",
    d: "M1 9.67h8.67l1-9.67H0l1 9.67Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(6.667 8.334)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(9.334 8.333)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(4 1)",
    d: "m0 4 5.44-4L8 4"
  }))));
};
/* harmony default export */ const clear = (SvgClear);
// EXTERNAL MODULE: ./app/icons/three-dots.svg
var three_dots = __webpack_require__(3076);
// EXTERNAL MODULE: ./app/icons/edit.svg
var edit = __webpack_require__(4095);
// EXTERNAL MODULE: ./app/icons/eye.svg
var eye = __webpack_require__(1221);
// EXTERNAL MODULE: ./app/components/ui-lib.tsx + 3 modules
var ui_lib = __webpack_require__(1974);
// EXTERNAL MODULE: ./app/components/model-config.tsx
var model_config = __webpack_require__(9731);
// EXTERNAL MODULE: ./app/components/button.tsx
var components_button = __webpack_require__(554);
// EXTERNAL MODULE: ./app/store/index.ts + 2 modules
var store = __webpack_require__(5870);
// EXTERNAL MODULE: ./app/locales/index.ts + 14 modules
var locales = __webpack_require__(855);
// EXTERNAL MODULE: ./app/utils.ts
var utils = __webpack_require__(6433);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/constant.ts
var constant = __webpack_require__(2080);
// EXTERNAL MODULE: ./app/store/prompt.ts
var store_prompt = __webpack_require__(9498);
// EXTERNAL MODULE: ./app/components/error.tsx
var error = __webpack_require__(4904);
// EXTERNAL MODULE: ./app/components/input-range.tsx
var input_range = __webpack_require__(6344);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(9742);
// EXTERNAL MODULE: ./app/components/emoji.tsx + 1 modules
var emoji = __webpack_require__(8377);
;// CONCATENATED MODULE: ./app/components/settings.tsx
























function EditPromptModal(props) {
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const prompt = promptStore.get(props.id);
    return prompt ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal-mask",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Modal */.u_, {
            title: locales/* default.Settings.Prompt.EditModal.Title */.ZP.Settings.Prompt.EditModal.Title,
            onClose: props.onClose,
            actions: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    onClick: props.onClose,
                    text: locales/* default.UI.Confirm */.ZP.UI.Confirm,
                    bordered: true
                }, "")
            ],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default())["edit-prompt-modal"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: prompt.title,
                        readOnly: !prompt.isUser,
                        className: (settings_module_default())["edit-prompt-title"],
                        onInput: (e)=>promptStore.update(props.id, (prompt)=>prompt.title = e.currentTarget.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Input */.II, {
                        value: prompt.content,
                        readOnly: !prompt.isUser,
                        className: (settings_module_default())["edit-prompt-content"],
                        rows: 10,
                        onInput: (e)=>promptStore.update(props.id, (prompt)=>prompt.content = e.currentTarget.value)
                    })
                ]
            })
        })
    }) : null;
}
function UserPromptModal(props) {
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const userPrompts = promptStore.getUserPrompts();
    const builtinPrompts = store_prompt/* SearchService.builtinPrompts */.o.builtinPrompts;
    const allPrompts = userPrompts.concat(builtinPrompts);
    const [searchInput, setSearchInput] = (0,react_.useState)("");
    const [searchPrompts, setSearchPrompts] = (0,react_.useState)([]);
    const prompts = searchInput.length > 0 ? searchPrompts : allPrompts;
    const [editingPromptId, setEditingPromptId] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        if (searchInput.length > 0) {
            const searchResult = store_prompt/* SearchService.search */.o.search(searchInput);
            setSearchPrompts(searchResult);
        } else {
            setSearchPrompts([]);
        }
    }, [
        searchInput
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal-mask",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Modal */.u_, {
                title: locales/* default.Settings.Prompt.Modal.Title */.ZP.Settings.Prompt.Modal.Title,
                onClose: ()=>props.onClose?.(),
                actions: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        onClick: ()=>promptStore.add({
                                title: "Empty Prompt",
                                content: "Empty Prompt Content"
                            }),
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(add/* default */.Z, {}),
                        bordered: true,
                        text: locales/* default.Settings.Prompt.Modal.Add */.ZP.Settings.Prompt.Modal.Add
                    }, "add")
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (settings_module_default())["user-prompt-modal"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            className: (settings_module_default())["user-prompt-search"],
                            placeholder: locales/* default.Settings.Prompt.Modal.Search */.ZP.Settings.Prompt.Modal.Search,
                            value: searchInput,
                            onInput: (e)=>setSearchInput(e.currentTarget.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (settings_module_default())["user-prompt-list"],
                            children: prompts.map((v, _)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (settings_module_default())["user-prompt-item"],
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (settings_module_default())["user-prompt-header"],
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (settings_module_default())["user-prompt-title"],
                                                    children: v.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (settings_module_default())["user-prompt-content"] + " one-line",
                                                    children: v.content
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (settings_module_default())["user-prompt-buttons"],
                                            children: [
                                                v.isUser && /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(clear, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>promptStore.remove(v.id)
                                                }),
                                                v.isUser ? /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(edit/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>setEditingPromptId(v.id)
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(eye/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>setEditingPromptId(v.id)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(copy/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>(0,utils/* copyToClipboard */.vQ)(v.content)
                                                })
                                            ]
                                        })
                                    ]
                                }, v.id ?? v.title))
                        })
                    ]
                })
            }),
            editingPromptId !== undefined && /*#__PURE__*/ jsx_runtime_.jsx(EditPromptModal, {
                id: editingPromptId,
                onClose: ()=>setEditingPromptId(undefined)
            })
        ]
    });
}
function formatVersionDate(t) {
    const d = new Date(+t);
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    return [
        year.toString(),
        month.toString().padStart(2, "0"),
        day.toString().padStart(2, "0")
    ].join("");
}
function Settings() {
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    const [showEmojiPicker, setShowEmojiPicker] = (0,react_.useState)(false);
    const config = (0,store/* useAppConfig */.MG)();
    const updateConfig = config.update;
    const resetConfig = config.reset;
    const chatStore = (0,store/* useChatStore */.aK)();
    const updateStore = (0,store/* useUpdateStore */.u2)();
    const [checkingUpdate, setCheckingUpdate] = (0,react_.useState)(false);
    const currentVersion = formatVersionDate(updateStore.version);
    const remoteId = formatVersionDate(updateStore.remoteVersion);
    const hasNewVersion = currentVersion !== remoteId;
    function checkUpdate(force = false) {
        setCheckingUpdate(true);
        updateStore.getLatestVersion(force).then(()=>{
            setCheckingUpdate(false);
        });
        console.log("[Update] local version ", new Date(+updateStore.version).toLocaleString());
        console.log("[Update] remote version ", new Date(+updateStore.remoteVersion).toLocaleString());
    }
    const usage = {
        used: updateStore.used,
        subscription: updateStore.subscription
    };
    const [loadingUsage, setLoadingUsage] = (0,react_.useState)(false);
    function checkUsage(force = false) {
        setLoadingUsage(true);
        updateStore.updateUsage(force).finally(()=>{
            setLoadingUsage(false);
        });
    }
    const accessStore = (0,store/* useAccessStore */._X)();
    const enabledAccessControl = (0,react_.useMemo)(()=>accessStore.enabledAccessControl(), // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const builtinCount = store_prompt/* SearchService.count.builtin */.o.count.builtin;
    const customCount = promptStore.getUserPrompts().length ?? 0;
    const [shouldShowPromptModal, setShowPromptModal] = (0,react_.useState)(false);
    const showUsage = accessStore.isAuthorized();
    (0,react_.useEffect)(()=>{
        // checks per minutes
        checkUpdate();
        showUsage && checkUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react_.useEffect)(()=>{
        const keydownEvent = (e)=>{
            if (e.key === "Escape") {
                navigate(constant/* Path.Home */.y$.Home);
            }
        };
        document.addEventListener("keydown", keydownEvent);
        return ()=>{
            document.removeEventListener("keydown", keydownEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(error/* ErrorBoundary */.S, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "window-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-header-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-header-main-title",
                                children: locales/* default.Settings.Title */.ZP.Settings.Title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-header-sub-title",
                                children: locales/* default.Settings.SubTitle */.ZP.Settings.SubTitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-actions",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(clear, {}),
                                    onClick: ()=>{
                                        if (confirm(locales/* default.Settings.Actions.ConfirmClearAll */.ZP.Settings.Actions.ConfirmClearAll)) {
                                            chatStore.clearAllData();
                                        }
                                    },
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.ClearAll */.ZP.Settings.Actions.ClearAll
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                                    onClick: ()=>{
                                        if (confirm(locales/* default.Settings.Actions.ConfirmResetAll */.ZP.Settings.Actions.ConfirmResetAll)) {
                                            resetConfig();
                                        }
                                    },
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.ResetAll */.ZP.Settings.Actions.ResetAll
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_close/* default */.Z, {}),
                                    onClick: ()=>navigate(constant/* Path.Home */.y$.Home),
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.Close */.ZP.Settings.Actions.Close
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default()).settings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Avatar */.ZP.Settings.Avatar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Popover */.J2, {
                                    onClose: ()=>setShowEmojiPicker(false),
                                    content: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* AvatarPicker */.aR, {
                                        onEmojiClick: (avatar)=>{
                                            updateConfig((config)=>config.avatar = avatar);
                                            setShowEmojiPicker(false);
                                        }
                                    }),
                                    open: showEmojiPicker,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (settings_module_default()).avatar,
                                        onClick: ()=>setShowEmojiPicker(true),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* Avatar */.qE, {
                                            avatar: config.avatar
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Update.Version */.ZP.Settings.Update.Version(currentVersion ?? "unknown"),
                                subTitle: checkingUpdate ? locales/* default.Settings.Update.IsChecking */.ZP.Settings.Update.IsChecking : hasNewVersion ? locales/* default.Settings.Update.FoundUpdate */.ZP.Settings.Update.FoundUpdate(remoteId ?? "ERROR") : locales/* default.Settings.Update.IsLatest */.ZP.Settings.Update.IsLatest,
                                children: checkingUpdate ? /*#__PURE__*/ jsx_runtime_.jsx(three_dots/* default */.Z, {}) : hasNewVersion ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: constant/* UPDATE_URL */.Cs,
                                    target: "_blank",
                                    className: "link",
                                    children: locales/* default.Settings.Update.GoToUpdate */.ZP.Settings.Update.GoToUpdate
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                                    text: locales/* default.Settings.Update.CheckUpdate */.ZP.Settings.Update.CheckUpdate,
                                    onClick: ()=>checkUpdate(true)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.SendKey */.ZP.Settings.SendKey,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: config.submitKey,
                                    onChange: (e)=>{
                                        updateConfig((config)=>config.submitKey = e.target.value);
                                    },
                                    children: Object.values(store/* SubmitKey */.mQ).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: v,
                                            children: v
                                        }, v))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Theme */.ZP.Settings.Theme,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: config.theme,
                                    onChange: (e)=>{
                                        updateConfig((config)=>config.theme = e.target.value);
                                    },
                                    children: Object.values(store/* Theme */.Q2).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: v,
                                            children: v
                                        }, v))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Lang.Name */.ZP.Settings.Lang.Name,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: (0,locales/* getLang */.VQ)(),
                                    onChange: (e)=>{
                                        (0,locales/* changeLang */.t4)(e.target.value);
                                    },
                                    children: locales/* AllLangs.map */.DC.map((lang)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: lang,
                                            children: locales/* ALL_LANG_OPTIONS */.nW[lang]
                                        }, lang))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.FontSize.Title */.ZP.Settings.FontSize.Title,
                                subTitle: locales/* default.Settings.FontSize.SubTitle */.ZP.Settings.FontSize.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(input_range/* InputRange */.O, {
                                    title: `${config.fontSize ?? 14}px`,
                                    value: config.fontSize,
                                    min: "12",
                                    max: "18",
                                    step: "1",
                                    onChange: (e)=>updateConfig((config)=>config.fontSize = Number.parseInt(e.currentTarget.value))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.SendPreviewBubble.Title */.ZP.Settings.SendPreviewBubble.Title,
                                subTitle: locales/* default.Settings.SendPreviewBubble.SubTitle */.ZP.Settings.SendPreviewBubble.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.sendPreviewBubble,
                                    onChange: (e)=>updateConfig((config)=>config.sendPreviewBubble = e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Mask.Title */.ZP.Settings.Mask.Title,
                                subTitle: locales/* default.Settings.Mask.SubTitle */.ZP.Settings.Mask.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: !config.dontShowMaskSplashScreen,
                                    onChange: (e)=>updateConfig((config)=>config.dontShowMaskSplashScreen = !e.currentTarget.checked)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            enabledAccessControl ? /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.AccessCode.Title */.ZP.Settings.AccessCode.Title,
                                subTitle: locales/* default.Settings.AccessCode.SubTitle */.ZP.Settings.AccessCode.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* PasswordInput */.WU, {
                                    value: accessStore.accessCode,
                                    type: "text",
                                    placeholder: locales/* default.Settings.AccessCode.Placeholder */.ZP.Settings.AccessCode.Placeholder,
                                    onChange: (e)=>{
                                        accessStore.updateCode(e.currentTarget.value);
                                    }
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                            !accessStore.hideUserApiKey ? /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Token.Title */.ZP.Settings.Token.Title,
                                subTitle: locales/* default.Settings.Token.SubTitle */.ZP.Settings.Token.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* PasswordInput */.WU, {
                                    value: accessStore.token,
                                    type: "text",
                                    placeholder: locales/* default.Settings.Token.Placeholder */.ZP.Settings.Token.Placeholder,
                                    onChange: (e)=>{
                                        accessStore.updateToken(e.currentTarget.value);
                                    }
                                })
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Usage.Title */.ZP.Settings.Usage.Title,
                                subTitle: showUsage ? loadingUsage ? locales/* default.Settings.Usage.IsChecking */.ZP.Settings.Usage.IsChecking : locales/* default.Settings.Usage.SubTitle */.ZP.Settings.Usage.SubTitle(usage?.used ?? "[?]", usage?.subscription ?? "[?]") : locales/* default.Settings.Usage.NoAccess */.ZP.Settings.Usage.NoAccess,
                                children: !showUsage || loadingUsage ? /*#__PURE__*/ jsx_runtime_.jsx("div", {}) : /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                                    text: locales/* default.Settings.Usage.Check */.ZP.Settings.Usage.Check,
                                    onClick: ()=>checkUsage(true)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Prompt.Disable.Title */.ZP.Settings.Prompt.Disable.Title,
                                subTitle: locales/* default.Settings.Prompt.Disable.SubTitle */.ZP.Settings.Prompt.Disable.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.disablePromptHint,
                                    onChange: (e)=>updateConfig((config)=>config.disablePromptHint = e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default.Settings.Prompt.List */.ZP.Settings.Prompt.List,
                                subTitle: locales/* default.Settings.Prompt.ListCount */.ZP.Settings.Prompt.ListCount(builtinCount, customCount),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(edit/* default */.Z, {}),
                                    text: locales/* default.Settings.Prompt.Edit */.ZP.Settings.Prompt.Edit,
                                    onClick: ()=>setShowPromptModal(true)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* List */.aV, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(model_config/* ModelConfigList */.j, {
                            modelConfig: config.modelConfig,
                            updateConfig: (updater)=>{
                                const modelConfig = {
                                    ...config.modelConfig
                                };
                                updater(modelConfig);
                                config.update((config)=>config.modelConfig = modelConfig);
                            }
                        })
                    }),
                    shouldShowPromptModal && /*#__PURE__*/ jsx_runtime_.jsx(UserPromptModal, {
                        onClose: ()=>setShowPromptModal(false)
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1345:
/***/ ((module) => {

// Exports
module.exports = {
	"settings": "settings_settings__dC7Vo",
	"avatar": "settings_avatar__yApsT",
	"edit-prompt-modal": "settings_edit-prompt-modal__IZvoi",
	"edit-prompt-title": "settings_edit-prompt-title__1PUIs",
	"edit-prompt-content": "settings_edit-prompt-content__djmWB",
	"user-prompt-modal": "settings_user-prompt-modal__O628_",
	"user-prompt-search": "settings_user-prompt-search__uGQDB",
	"user-prompt-list": "settings_user-prompt-list__eztCF",
	"user-prompt-item": "settings_user-prompt-item__R4_0Y",
	"user-prompt-header": "settings_user-prompt-header__I0mU1",
	"user-prompt-title": "settings_user-prompt-title__RcMrV",
	"user-prompt-content": "settings_user-prompt-content__dlvDK",
	"user-prompt-buttons": "settings_user-prompt-buttons__2xrp5",
	"user-prompt-button": "settings_user-prompt-button__7Q2lC"
};


/***/ })

};
;