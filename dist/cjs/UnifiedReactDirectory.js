"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnifiedDirectory;
const react_1 = __importStar(require("react"));
const Unified_1 = require("./models/Unified");
const MAP_REGION = {
    us: 'https://api.unified.to',
    us_beta: 'https://api-beta.unified.to',
    eu: 'https://api-eu.unified.to',
    eu_beta: 'https://api-eu-beta.unified.to',
    dev: 'https://api-dev.unified.to',
    au: 'https://api-au.unified.to',
};
const CATEGORY_MAP = Unified_1.CATEGORIES.reduce((acc, category) => {
    acc[category.category] = category.label;
    return acc;
}, {});
function UnifiedDirectory(props) {
    const API_URL = MAP_REGION[props.dc || 'us'] || MAP_REGION['us'];
    const [INTEGRATIONS, setIntegrations] = (0, react_1.useState)([]);
    const [CATEGORIES, setCategories] = (0, react_1.useState)([]);
    const [selectedCategory, setCategory] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(undefined);
    const [search, setSearch] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (!loading && !INTEGRATIONS.length) {
            setLoading(true);
            load_data().then((data) => {
                data = data.filter((i) => !(i.categories.length === 1 && i.categories[0] === 'auth')) || [];
                setIntegrations(data);
                let _CATEGORIES = [];
                data.forEach((integration) => {
                    var _a;
                    (_a = integration.categories) === null || _a === void 0 ? void 0 : _a.forEach((c) => {
                        var _a;
                        if ((!search ||
                            integration.name.toLowerCase().includes(search.toLowerCase()) ||
                            integration.type.toLowerCase().includes(search.toLowerCase())) &&
                            CATEGORY_MAP[c] &&
                            (!((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) || props.categories.indexOf(c) !== -1)) {
                            _CATEGORIES.push(c);
                        }
                    });
                });
                _CATEGORIES = [...new Set(_CATEGORIES)];
                if (_CATEGORIES.length === 1) {
                    _CATEGORIES = [];
                }
                else {
                    _CATEGORIES = _CATEGORIES.sort((a, b) => a.localeCompare(b));
                }
                setCategories(_CATEGORIES);
                setLoading(false);
            });
        }
    }, [props.categories]);
    function filter(integrations) {
        return (integrations === null || integrations === void 0 ? void 0 : integrations.filter((integration) => !selectedCategory || integration.categories.indexOf(selectedCategory) !== -1)) || [];
    }
    function unified_get_auth_url(integration) {
        var _a;
        let url = `${API_URL}/unified/integration/auth/${props.workspaceId || props.workspace_id}/${integration.type}?redirect=1`;
        if (props.external_xref) {
            url += `&external_xref=${encodeURIComponent(props.external_xref)}`;
        }
        if (props.state) {
            url += `&state=${encodeURIComponent(props.state)}`;
        }
        if ((_a = props.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            url += `&scopes=${encodeURIComponent(props.scopes.join(','))}`;
        }
        if (props.environment && props.environment !== 'Production') {
            url += `&env=${encodeURIComponent(props.environment)}`;
        }
        if (props.lang) {
            url += `&lang=${props.lang}`;
        }
        url += `&success_redirect=${encodeURIComponent(props.success_redirect || '')}`;
        url += `&failure_redirect=${encodeURIComponent(props.failure_redirect || '')}`;
        return url;
    }
    function load_data() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = `${API_URL}/unified/integration/workspace/${props.workspaceId || props.workspace_id}?summary=1${((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) ? '&categories=' + props.categories.join(',') : ''}${props.environment === 'Production' || !props.environment ? '' : '&env=' + encodeURIComponent(props.environment)}`;
            try {
                const response = yield fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(String(response.status));
                }
                return response.json();
            }
            catch (error) {
                console.error('Failed to load data:', error);
                return [];
            }
        });
    }
    return (react_1.default.createElement("div", { className: "unified" },
        !props.nostyle && react_1.default.createElement("style", null, "@import url(https://api.unified.to/docs/unified.css)"),
        !props.notabs && CATEGORIES && CATEGORIES.length > 0 && filter(INTEGRATIONS).length && !loading && (react_1.default.createElement("div", { className: "unified_menu" },
            react_1.default.createElement("button", { className: `unified_button unified_button_all ${selectedCategory ? '' : ' active'}`, onClick: () => setCategory('') }, "All"),
            CATEGORIES.map((cat) => (react_1.default.createElement("button", { key: cat, className: `unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`, onClick: () => setCategory(cat) }, CATEGORY_MAP[cat]))),
            react_1.default.createElement("input", { type: "search", className: "unified_search", placeholder: "Search...", value: search, onChange: (e) => setSearch(e.target.value) }))),
        !loading && (react_1.default.createElement("div", { className: "unified_vendors" },
            filter(INTEGRATIONS).map((integration) => (react_1.default.createElement("a", { key: integration.type, href: unified_get_auth_url(integration), className: "unified_vendor" },
                react_1.default.createElement("img", { alt: integration.name, src: integration.logo_url, className: "unified_image" }),
                react_1.default.createElement("div", { className: "unified_vendor_inner" },
                    react_1.default.createElement("div", { className: "unified_vendor_name" }, integration.name),
                    !props.nocategories &&
                        integration.categories
                            .filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1)
                            .filter((c) => CATEGORY_MAP[c])
                            .map((cat) => (react_1.default.createElement("div", { key: cat, className: "unified_vendor_cats" },
                            react_1.default.createElement("span", null, CATEGORY_MAP[cat])))))))),
            loading !== undefined && filter(INTEGRATIONS).length === 0 && react_1.default.createElement("div", { className: "unified_vendor" }, "No integrations available"))),
        loading && react_1.default.createElement("div", { className: "unified_loading" }, "Loading...")));
}
//# sourceMappingURL=UnifiedReactDirectory.js.map