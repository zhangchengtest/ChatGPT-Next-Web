"use strict";
exports.id = 387;
exports.ids = [387];
exports.modules = {

/***/ 3387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diagram": () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4281);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(680);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9857);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(314);
/* harmony import */ var _index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8599);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8786);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2841);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3598);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2701);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3893);
/* harmony import */ var _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2461);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5123);




















const SHAPE_STATE = "rect";
const SHAPE_STATE_WITH_DESC = "rectWithTitle";
const SHAPE_START = "start";
const SHAPE_END = "end";
const SHAPE_DIVIDER = "divider";
const SHAPE_GROUP = "roundedWithTitle";
const SHAPE_NOTE = "note";
const SHAPE_NOTEGROUP = "noteGroup";
const CSS_DIAGRAM = "statediagram";
const CSS_STATE = "state";
const CSS_DIAGRAM_STATE = `${CSS_DIAGRAM}-${CSS_STATE}`;
const CSS_EDGE = "transition";
const CSS_NOTE = "note";
const CSS_NOTE_EDGE = "note-edge";
const CSS_EDGE_NOTE_EDGE = `${CSS_EDGE} ${CSS_NOTE_EDGE}`;
const CSS_DIAGRAM_NOTE = `${CSS_DIAGRAM}-${CSS_NOTE}`;
const CSS_CLUSTER = "cluster";
const CSS_DIAGRAM_CLUSTER = `${CSS_DIAGRAM}-${CSS_CLUSTER}`;
const CSS_CLUSTER_ALT = "cluster-alt";
const CSS_DIAGRAM_CLUSTER_ALT = `${CSS_DIAGRAM}-${CSS_CLUSTER_ALT}`;
const PARENT = "parent";
const NOTE = "note";
const DOMID_STATE = "state";
const DOMID_TYPE_SPACER = "----";
const NOTE_ID = `${DOMID_TYPE_SPACER}${NOTE}`;
const PARENT_ID = `${DOMID_TYPE_SPACER}${PARENT}`;
const G_EDGE_STYLE = "fill:none";
const G_EDGE_ARROWHEADSTYLE = "fill: #333";
const G_EDGE_LABELPOS = "c";
const G_EDGE_LABELTYPE = "text";
const G_EDGE_THICKNESS = "normal";
let nodeDb = {};
let graphItemCount = 0;
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    cnf[key];
  }
};
const getClasses = function(text, diagramObj) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Extracting classes");
  diagramObj.db.clear();
  try {
    diagramObj.parser.parse(text);
    diagramObj.db.extract(diagramObj.db.getRootDocV2());
    return diagramObj.db.getClasses();
  } catch (e) {
    return e;
  }
};
function getClassesFromDbInfo(dbInfoItem) {
  if (dbInfoItem === void 0 || dbInfoItem === null) {
    return "";
  } else {
    if (dbInfoItem.classes) {
      return dbInfoItem.classes.join(" ");
    } else {
      return "";
    }
  }
}
function stateDomId(itemId = "", counter = 0, type = "", typeSpacer = DOMID_TYPE_SPACER) {
  const typeStr = type !== null && type.length > 0 ? `${typeSpacer}${type}` : "";
  return `${DOMID_STATE}-${itemId}${typeStr}-${counter}`;
}
const setupNode = (g, parent, parsedItem, diagramStates, diagramDb, altFlag) => {
  const itemId = parsedItem.id;
  const classStr = getClassesFromDbInfo(diagramStates[itemId]);
  if (itemId !== "root") {
    let shape = SHAPE_STATE;
    if (parsedItem.start === true) {
      shape = SHAPE_START;
    }
    if (parsedItem.start === false) {
      shape = SHAPE_END;
    }
    if (parsedItem.type !== _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.a) {
      shape = parsedItem.type;
    }
    if (!nodeDb[itemId]) {
      nodeDb[itemId] = {
        id: itemId,
        shape,
        description: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeText(itemId, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)()),
        classes: `${classStr} ${CSS_DIAGRAM_STATE}`
      };
    }
    const newNode = nodeDb[itemId];
    if (parsedItem.description) {
      if (Array.isArray(newNode.description)) {
        newNode.shape = SHAPE_STATE_WITH_DESC;
        newNode.description.push(parsedItem.description);
      } else {
        if (newNode.description.length > 0) {
          newNode.shape = SHAPE_STATE_WITH_DESC;
          if (newNode.description === itemId) {
            newNode.description = [parsedItem.description];
          } else {
            newNode.description = [newNode.description, parsedItem.description];
          }
        } else {
          newNode.shape = SHAPE_STATE;
          newNode.description = parsedItem.description;
        }
      }
      newNode.description = _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeTextOrArray(newNode.description, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)());
    }
    if (newNode.description.length === 1 && newNode.shape === SHAPE_STATE_WITH_DESC) {
      newNode.shape = SHAPE_STATE;
    }
    if (!newNode.type && parsedItem.doc) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("Setting cluster for ", itemId, getDir(parsedItem));
      newNode.type = "group";
      newNode.dir = getDir(parsedItem);
      newNode.shape = parsedItem.type === _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.b ? SHAPE_DIVIDER : SHAPE_GROUP;
      newNode.classes = newNode.classes + " " + CSS_DIAGRAM_CLUSTER + " " + (altFlag ? CSS_DIAGRAM_CLUSTER_ALT : "");
    }
    const nodeData = {
      labelStyle: "",
      shape: newNode.shape,
      labelText: newNode.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: newNode.classes,
      style: "",
      //styles.style,
      id: itemId,
      dir: newNode.dir,
      domId: stateDomId(itemId, graphItemCount),
      type: newNode.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    nodeData.centerLabel = true;
    if (parsedItem.note) {
      const noteData = {
        labelStyle: "",
        shape: SHAPE_NOTE,
        labelText: parsedItem.note.text,
        classes: CSS_DIAGRAM_NOTE,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: itemId + NOTE_ID + "-" + graphItemCount,
        domId: stateDomId(itemId, graphItemCount, NOTE),
        type: newNode.type,
        padding: 15
        //getConfig().flowchart.padding
      };
      const groupData = {
        labelStyle: "",
        shape: SHAPE_NOTEGROUP,
        labelText: parsedItem.note.text,
        classes: newNode.classes,
        style: "",
        // styles.style,
        id: itemId + PARENT_ID,
        domId: stateDomId(itemId, graphItemCount, PARENT),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      graphItemCount++;
      const parentNodeId = itemId + PARENT_ID;
      g.setNode(parentNodeId, groupData);
      g.setNode(noteData.id, noteData);
      g.setNode(itemId, nodeData);
      g.setParent(itemId, parentNodeId);
      g.setParent(noteData.id, parentNodeId);
      let from = itemId;
      let to = noteData.id;
      if (parsedItem.note.position === "left of") {
        from = noteData.id;
        to = itemId;
      }
      g.setEdge(from, to, {
        arrowhead: "none",
        arrowType: "",
        style: G_EDGE_STYLE,
        labelStyle: "",
        classes: CSS_EDGE_NOTE_EDGE,
        arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
        labelpos: G_EDGE_LABELPOS,
        labelType: G_EDGE_LABELTYPE,
        thickness: G_EDGE_THICKNESS
      });
    } else {
      g.setNode(itemId, nodeData);
    }
  }
  if (parent && parent.id !== "root") {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Setting node ", itemId, " to be child of its parent ", parent.id);
    g.setParent(itemId, parent.id);
  }
  if (parsedItem.doc) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Adding nodes children ");
    setupDoc(g, parsedItem, parsedItem.doc, diagramStates, diagramDb, !altFlag);
  }
};
const setupDoc = (g, parentParsedItem, doc, diagramStates, diagramDb, altFlag) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("items", doc);
  doc.forEach((item) => {
    switch (item.stmt) {
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.c:
        setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
        break;
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.a:
        setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
        break;
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.S:
        {
          setupNode(g, parentParsedItem, item.state1, diagramStates, diagramDb, altFlag);
          setupNode(g, parentParsedItem, item.state2, diagramStates, diagramDb, altFlag);
          const edgeData = {
            id: "edge" + graphItemCount,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: G_EDGE_STYLE,
            labelStyle: "",
            label: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeText(item.description, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)()),
            arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
            labelpos: G_EDGE_LABELPOS,
            labelType: G_EDGE_LABELTYPE,
            thickness: G_EDGE_THICKNESS,
            classes: CSS_EDGE
          };
          g.setEdge(item.state1.id, item.state2.id, edgeData, graphItemCount);
          graphItemCount++;
        }
        break;
    }
  });
};
const getDir = (parsedItem, defaultDir = _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.e) => {
  let dir = defaultDir;
  if (parsedItem.doc) {
    for (let i = 0; i < parsedItem.doc.length; i++) {
      const parsedItemDoc = parsedItem.doc[i];
      if (parsedItemDoc.stmt === "dir") {
        dir = parsedItemDoc.value;
      }
    }
  }
  return dir;
};
const draw = function(text, id, _version, diag) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("Drawing state diagram (v2)", id);
  nodeDb = {};
  let dir = diag.db.getDirection();
  if (dir === void 0) {
    dir = _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.D;
  }
  const { securityLevel, state: conf } = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)();
  const nodeSpacing = conf.nodeSpacing || 50;
  const rankSpacing = conf.rankSpacing || 50;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(diag.db.getRootDocV2());
  diag.db.extract(diag.db.getRootDocV2());
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(diag.db.getRootDocV2());
  const diagramStates = diag.db.getStates();
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Graph */ .k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: getDir(diag.db.getRootDocV2()),
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  setupNode(g, void 0, diag.db.getRootDocV2(), diagramStates, diag.db, true);
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("body");
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  (0,_index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__.r)(element, g, ["barb"], CSS_DIAGRAM, id);
  const padding = 8;
  _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__.u.insertTitle(svg, "statediagramTitleText", conf.titleTopMargin, diag.db.getDiagramTitle());
  const bounds = svg.node().getBBox();
  const width = bounds.width + padding * 2;
  const height = bounds.height + padding * 2;
  svg.attr("class", CSS_DIAGRAM);
  const svgBounds = svg.node().getBBox();
  (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__.k)(svg, height, width, conf.useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.debug(`viewBox ${vBox}`);
  svg.attr("viewBox", vBox);
  const labels = document.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
  for (const label of labels) {
    const dim = label.getBBox();
    const rect = document.createElementNS("http://www.w3.org/2000/svg", SHAPE_STATE);
    rect.setAttribute("rx", 0);
    rect.setAttribute("ry", 0);
    rect.setAttribute("width", dim.width);
    rect.setAttribute("height", dim.height);
    label.insertBefore(rect, label.firstChild);
  }
};
const renderer = {
  setConf,
  getClasses,
  draw
};
const diagram = {
  parser: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.p,
  db: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.d,
  renderer,
  styles: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.s,
  init: (cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.d.clear();
  }
};

//# sourceMappingURL=stateDiagram-v2-9765461d.js.map


/***/ })

};
;