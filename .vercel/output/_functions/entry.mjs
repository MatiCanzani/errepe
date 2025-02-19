import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bgiew2Kg.mjs';
import { manifest } from './manifest_BjHM_7Tn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_@types+node@20.14.12_jiti@1.21.6_rollup@4.34.8_typescript@5.7.3_yaml@2.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "886c798f-0994-441a-8979-9e6d55a0e418",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
