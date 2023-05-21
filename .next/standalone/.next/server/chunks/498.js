"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ usePromptStore),
/* harmony export */   "o": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8658);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5971);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(855);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2080);





const SearchService = {
    ready: false,
    builtinEngine: new (fuse_js__WEBPACK_IMPORTED_MODULE_2___default())([], {
        keys: [
            "title"
        ]
    }),
    userEngine: new (fuse_js__WEBPACK_IMPORTED_MODULE_2___default())([], {
        keys: [
            "title"
        ]
    }),
    count: {
        builtin: 0
    },
    allPrompts: [],
    builtinPrompts: [],
    init (builtinPrompts, userPrompts) {
        if (this.ready) {
            return;
        }
        this.allPrompts = userPrompts.concat(builtinPrompts);
        this.builtinPrompts = builtinPrompts.slice();
        this.builtinEngine.setCollection(builtinPrompts);
        this.userEngine.setCollection(userPrompts);
        this.ready = true;
    },
    remove (id) {
        this.userEngine.remove((doc)=>doc.id === id);
    },
    add (prompt) {
        this.userEngine.add(prompt);
    },
    search (text) {
        const userResults = this.userEngine.search(text);
        const builtinResults = this.builtinEngine.search(text);
        return userResults.concat(builtinResults).map((v)=>v.item);
    }
};
const usePromptStore = (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .create */ .Ue)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_4__/* .persist */ .tJ)((set, get)=>({
        counter: 0,
        latestId: 0,
        prompts: {},
        add (prompt) {
            const prompts = get().prompts;
            prompt.id = get().latestId + 1;
            prompt.isUser = true;
            prompts[prompt.id] = prompt;
            set(()=>({
                    latestId: prompt.id,
                    prompts: prompts
                }));
            return prompt.id;
        },
        get (id) {
            const targetPrompt = get().prompts[id];
            if (!targetPrompt) {
                return SearchService.builtinPrompts.find((v)=>v.id === id);
            }
            return targetPrompt;
        },
        remove (id) {
            const prompts = get().prompts;
            delete prompts[id];
            SearchService.remove(id);
            set(()=>({
                    prompts,
                    counter: get().counter + 1
                }));
        },
        getUserPrompts () {
            const userPrompts = Object.values(get().prompts ?? {});
            userPrompts.sort((a, b)=>b.id && a.id ? b.id - a.id : 0);
            return userPrompts;
        },
        update (id, updater) {
            const prompt = get().prompts[id] ?? {
                title: "",
                content: "",
                id
            };
            SearchService.remove(id);
            updater(prompt);
            const prompts = get().prompts;
            prompts[id] = prompt;
            set(()=>({
                    prompts
                }));
            SearchService.add(prompt);
        },
        search (text) {
            if (text.length === 0) {
                // return all rompts
                return SearchService.allPrompts.concat([
                    ...get().getUserPrompts()
                ]);
            }
            return SearchService.search(text);
        }
    }), {
    name: _constant__WEBPACK_IMPORTED_MODULE_1__/* .StoreKey.Prompt */ .KJ.Prompt,
    version: 1,
    onRehydrateStorage (state) {
        const PROMPT_URL = "./prompts.json";
        fetch(PROMPT_URL).then((res)=>res.json()).then((res)=>{
            let fetchPrompts = [
                res.en,
                res.cn
            ];
            if ((0,_locales__WEBPACK_IMPORTED_MODULE_0__/* .getLang */ .VQ)() === "cn") {
                fetchPrompts = fetchPrompts.reverse();
            }
            const builtinPrompts = fetchPrompts.map((promptList)=>{
                return promptList.map(([title, content])=>({
                        id: Math.random(),
                        title,
                        content
                    }));
            });
            const userPrompts = usePromptStore.getState().getUserPrompts() ?? [];
            const allPromptsForSearch = builtinPrompts.reduce((pre, cur)=>pre.concat(cur), []).filter((v)=>!!v.title && !!v.content);
            SearchService.count.builtin = res.en.length + res.cn.length;
            SearchService.init(allPromptsForSearch, userPrompts);
        });
    }
}));


/***/ })

};
;