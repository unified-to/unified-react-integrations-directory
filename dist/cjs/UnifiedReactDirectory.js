"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const API_NA_URL = 'https://api.unified.to';
const API_EU_URL = 'https://api-eu.unified.to';
const CATEGORY_MAP = {
    crm: 'CRM',
    martech: 'Marketing',
    ticketing: 'Ticketing',
    uc: 'Unified Communications',
    enrich: 'Enrichment',
    ats: 'ATS',
    hris: 'HR',
    accounting: 'Accounting',
    storage: 'Storage',
    commerce: 'Commerce',
    payment: 'Payment',
    genai: 'GenAI',
};
function UnifiedDirectory(props) {
    const API_URL = props.dc === 'eu' ? API_EU_URL : API_NA_URL;
    const [INTEGRATIONS, setIntegrations] = (0, react_2.useState)([]);
    const [CATEGORIES, setCategories] = (0, react_2.useState)([]);
    const [selectedCategory, setCategory] = (0, react_2.useState)('');
    const [loading, setLoading] = (0, react_2.useState)(false);
    function filter(integrations) {
        return (integrations === null || integrations === void 0 ? void 0 : integrations.filter((integration) => !selectedCategory || integration.categories.indexOf(selectedCategory) !== -1)) || [];
    }
    function unified_get_auth_url(integration) {
        var _a;
        let url = `${API_URL}/unified/integration/auth/${props.workspaceId || props.workspace_id}/${integration.type}?redirect=1`;
        if (props === null || props === void 0 ? void 0 : props.external_xref) {
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
        // if (this.success_redirect) {
        url += `&success_redirect=${encodeURIComponent(props.success_redirect || '' //|| window.location.href
        )}`;
        // }
        // if (this.failure_redirect) {
        url += `&failure_redirect=${encodeURIComponent(props.failure_redirect || '' //|| window.location.href
        )}`;
        // }
        return url;
    }
    function load_data() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${API_URL}/unified/integration/workspace/${props.workspaceId || props.workspace_id}?summary=1${((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) ? '&categories=' + props.categories.join(',') : ''}${props.environment === 'Production' || !props.environment ? '' : '&env=' + encodeURIComponent(props.environment)}`;
            console.log('url', url);
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
            catch (_b) {
                return [];
            }
        });
    }
    if (!loading && !(INTEGRATIONS === null || INTEGRATIONS === void 0 ? void 0 : INTEGRATIONS.length)) {
        setLoading(true);
        load_data().then((data) => {
            data = data.filter((i) => !(i.categories.length === 1 && i.categories[0] === 'auth')) || [];
            setIntegrations(data);
            console.log('INTEGRATIONS.length', data.length);
            let _CATEGORIES = [];
            data.forEach((integration) => {
                var _a;
                (_a = integration.categories) === null || _a === void 0 ? void 0 : _a.forEach((c) => {
                    var _a;
                    if (CATEGORY_MAP[c] && (!((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) || props.categories.indexOf(c) !== -1)) {
                        _CATEGORIES.push(c);
                    }
                });
            });
            _CATEGORIES = [...new Set(_CATEGORIES)];
            if (_CATEGORIES.length === 1) {
                _CATEGORIES = [];
            }
            else {
                _CATEGORIES = _CATEGORIES.sort(function (a, b) {
                    return a.localeCompare(b);
                });
            }
            console.log('categories', _CATEGORIES);
            setCategories(_CATEGORIES);
            setLoading(false);
        });
    }
    return (react_1.default.createElement("div", { className: "unified" },
        !props.nostyle && react_1.default.createElement("style", null, "@import url(https://api.unified.to/docs/unified.css)"),
        !props.notabs && CATEGORIES && (CATEGORIES === null || CATEGORIES === void 0 ? void 0 : CATEGORIES.length) > 0 && filter(INTEGRATIONS).length && (react_1.default.createElement("div", { className: "unified_menu" },
            react_1.default.createElement("button", { className: `unified_button unified_button_all ${selectedCategory ? '' : ' active'}`, onClick: () => setCategory('') }, "All"),
            CATEGORIES.map((cat) => (react_1.default.createElement("button", { key: cat, className: `unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`, onClick: () => setCategory(cat) }, CATEGORY_MAP[cat]))))),
        react_1.default.createElement("div", { className: "unified_vendors" },
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
            filter(INTEGRATIONS).length === 0 && react_1.default.createElement("div", { className: "unified_vendor" }, "No integrations available"))));
}
exports.default = UnifiedDirectory;
//# sourceMappingURL=UnifiedReactDirectory.js.map