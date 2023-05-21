"use strict";
exports.id = 182;
exports.ids = [182];
exports.modules = {

/***/ 8182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Markdown": () => (/* binding */ Markdown),
/* harmony export */   "MarkdownContent": () => (/* binding */ MarkdownContent),
/* harmony export */   "Mermaid": () => (/* binding */ Mermaid),
/* harmony export */   "PreCode": () => (/* binding */ PreCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2711);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1645);
/* harmony import */ var remark_breaks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(415);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9056);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6231);
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6433);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3217);
/* harmony import */ var _icons_three_dots_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3076);













function Mermaid(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props.code && ref.current) {
            mermaid__WEBPACK_IMPORTED_MODULE_5__/* ["default"].run */ .Z.run({
                nodes: [
                    ref.current
                ]
            }).catch((e)=>{
                props.onError();
                console.error("[Mermaid] ", e.message);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.code
    ]);
    function viewSvgInNewWindow() {
        const svg = ref.current?.querySelector("svg");
        if (!svg) return;
        const text = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([
            text
        ], {
            type: "image/svg+xml"
        });
        const url = URL.createObjectURL(blob);
        const win = window.open(url);
        if (win) {
            win.onload = ()=>URL.revokeObjectURL(url);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "no-dark",
        style: {
            cursor: "pointer",
            overflow: "auto"
        },
        ref: ref,
        onClick: ()=>viewSvgInNewWindow(),
        children: props.code
    });
}
function PreCode(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [mermaidCode, setMermaidCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!ref.current) return;
        const mermaidDom = ref.current.querySelector("code.language-mermaid");
        if (mermaidDom) {
            setMermaidCode(mermaidDom.innerText);
        }
    }, [
        props.children
    ]);
    if (mermaidCode) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mermaid, {
            code: mermaidCode,
            onError: ()=>setMermaidCode("")
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "copy-code-button",
                onClick: ()=>{
                    if (ref.current) {
                        const code = ref.current.innerText;
                        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .vQ)(code);
                    }
                }
            }),
            props.children
        ]
    });
}
function _MarkDownContent(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__/* .ReactMarkdown */ .D, {
        remarkPlugins: [
            remark_math__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            remark_gfm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            remark_breaks__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
        ],
        rehypePlugins: [
            rehype_katex__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            [
                rehype_highlight__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                {
                    detect: false,
                    ignoreMissing: true
                }
            ]
        ],
        components: {
            pre: PreCode,
            a: (aProps)=>{
                const href = aProps.href || "";
                const isInternal = /^\/#/i.test(href);
                const target = isInternal ? "_self" : aProps.target ?? "_blank";
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    ...aProps,
                    target: target
                });
            }
        },
        children: props.content
    });
}
const MarkdownContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(_MarkDownContent);
function Markdown(props) {
    const mdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const renderedHeight = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    const inView = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(!!props.defaultShow);
    const parent = props.parentRef.current;
    const md = mdRef.current;
    const checkInView = ()=>{
        if (parent && md) {
            const parentBounds = parent.getBoundingClientRect();
            const twoScreenHeight = Math.max(500, parentBounds.height * 2);
            const mdBounds = md.getBoundingClientRect();
            const parentTop = parentBounds.top - twoScreenHeight;
            const parentBottom = parentBounds.bottom + twoScreenHeight;
            const isOverlap = Math.max(parentTop, mdBounds.top) <= Math.min(parentBottom, mdBounds.bottom);
            inView.current = isOverlap;
        }
        if (inView.current && md) {
            renderedHeight.current = Math.max(renderedHeight.current, md.getBoundingClientRect().height);
        }
    };
    setTimeout(()=>checkInView(), 1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "markdown-body",
        style: {
            fontSize: `${props.fontSize ?? 14}px`,
            height: !inView.current && renderedHeight.current > 0 ? renderedHeight.current : "auto"
        },
        ref: mdRef,
        onContextMenu: props.onContextMenu,
        onDoubleClickCapture: props.onDoubleClickCapture,
        children: inView.current && (props.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_three_dots_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkdownContent, {
            content: props.content
        }))
    });
}


/***/ })

};
;