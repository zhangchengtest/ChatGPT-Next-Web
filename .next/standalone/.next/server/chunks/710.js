"use strict";
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 5710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatItem": () => (/* binding */ ChatItem),
/* harmony export */   "ChatList": () => (/* binding */ ChatList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7360);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7986);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1423);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5870);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(855);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9742);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2080);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7809);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);










function ChatItem(props) {
    const draggableRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (props.selected && draggableRef.current) {
            draggableRef.current?.scrollIntoView({
                block: "center"
            });
        }
    }, [
        props.selected
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_7__/* .Draggable */ ._l, {
        draggableId: `${props.id}`,
        index: props.index,
        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item"])} ${props.selected && (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-selected"])}`,
                onClick: props.onClick,
                ref: (ele)=>{
                    draggableRef.current = ele;
                    provided.innerRef(ele);
                },
                ...provided.draggableProps,
                ...provided.dragHandleProps,
                title: `${props.title}\n${_locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ChatItem.ChatItemCount */ .ZP.ChatItem.ChatItemCount(props.count)}`,
                children: [
                    props.narrow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-narrow"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-avatar"]) + " no-dark",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mask__WEBPACK_IMPORTED_MODULE_5__.MaskAvatar, {
                                    mask: props.mask
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-narrow-count"]),
                                children: props.count
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-title"]),
                                children: props.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-info"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-count"]),
                                        children: _locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ChatItem.ChatItemCount */ .ZP.ChatItem.ChatItemCount(props.count)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-date"]),
                                        children: new Date(props.time).toLocaleString()
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-item-delete"]),
                        onClickCapture: props.onDelete,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                ]
            })
    });
}
function ChatList(props) {
    const [sessions, selectedIndex, selectSession, moveSession] = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)((state)=>[
            state.sessions,
            state.currentSessionIndex,
            state.selectSession,
            state.moveSession
        ]);
    const chatStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
    const onDragEnd = (result)=>{
        const { destination , source  } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        moveSession(source.index, destination.index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_7__/* .DragDropContext */ .Z5, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_7__/* .Droppable */ .bK, {
            droppableId: "chat-list",
            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chat-list"]),
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                        sessions.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatItem, {
                                title: item.topic,
                                time: new Date(item.lastUpdate).toLocaleString(),
                                count: item.messages.length,
                                id: item.id,
                                index: i,
                                selected: i === selectedIndex,
                                onClick: ()=>{
                                    navigate(_constant__WEBPACK_IMPORTED_MODULE_4__/* .Path.Chat */ .y$.Chat);
                                    selectSession(i);
                                },
                                onDelete: ()=>{
                                    if (!props.narrow || confirm(_locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Home.DeleteChat */ .ZP.Home.DeleteChat)) {
                                        chatStore.deleteSession(i);
                                    }
                                },
                                narrow: props.narrow,
                                mask: item.mask
                            }, item.id)),
                        provided.placeholder
                    ]
                })
        })
    });
}


/***/ })

};
;