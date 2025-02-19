import { d as decodeKey } from './chunks/astro/server_Bx0zT-Sl.mjs';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bdai0wW1.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/","cacheDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/node_modules/.astro/","outDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/dist/","srcDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/src/","publicDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/public/","buildClientDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/dist/client/","buildServerDir":"file:///Users/maticanzani/Documents/Personal/repos/Nico/RP/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.3.0_@types+node@20.14.12_jiti@1.21.6_rollup@4.34.8_typescript@5.7.3_yaml@2.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C-wPR7BX.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://errepeproductora.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.3.0_@types+node@20.14.12_jiti@1.21.6_rollup@4.34.8_typescript@5.7.3_yaml@2.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/maticanzani/Documents/Personal/repos/Nico/RP/node_modules/.pnpm/astro@5.3.0_@types+node@20.14.12_jiti@1.21.6_rollup@4.34.8_typescript@5.7.3_yaml@2.4.5/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CZqdjP5o.mjs","\u0000@astrojs-manifest":"manifest_Bl3NjKzo.mjs","/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Marquee.tsx":"_astro/Marquee.DYCTeu1p.js","@astrojs/react/client.js":"_astro/client.Ck7an2Yk.js","/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Intro.astro?astro&type=script&index=0&lang.ts":"_astro/Intro.astro_astro_type_script_index_0_lang.BTz7SByz.js","/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Services.astro?astro&type=script&index=0&lang.ts":"_astro/Services.astro_astro_type_script_index_0_lang.tY-UIq68.js","/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Works.astro?astro&type=script&index=0&lang.ts":"_astro/Works.astro_astro_type_script_index_0_lang.iEPdIpAQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/bar.BlUDeMEC.svg","/_astro/logo.D9Ni9zy9.svg","/_astro/logo-black.BF8pLhHh.svg","/_astro/image_bottom.DQZsouRk.png","/_astro/Desktop_1_1_1.4o6kqCHr.png","/_astro/Desktop-2-2-2.CD7xpbnI.png","/_astro/Desktop_3_3_3.B_qZr3yI.png","/_astro/Celeste_Fontana.DD7Z_wjc.png","/_astro/Eduardo_Carballo.B7vQE98m.png","/_astro/Hernan_Menendez.BHgJUijs.png","/_astro/Pablo_Jimenez.Cr07zTtz.png","/_astro/Leandro_Mambretti.DLuWryno.png","/_astro/Rita_Jimenez_Alonso.C4GfkSVG.png","/_astro/Gonzalo_Ripoll.C-rJ2rkO.png","/_astro/Desktop_5.BSCJfQyX.png","/_astro/Desktop_1.ZchhB_TO.png","/_astro/Fotos Web servicios-02.C3FJyAb7.png","/_astro/Fotos Web servicios-06.Deggp5yo.png","/_astro/Fotos Web servicios-07.CYusi5XY.png","/_astro/Fotos Web servicios-03.iGXdT9CL.png","/_astro/Fotos Web servicios-05.BgMi2CCr.png","/_astro/Fotos Web servicios-04.BUEl3FDP.png","/_astro/Desktop_2.BWAq-CU9.png","/_astro/almundo.CgSBjE6J.svg","/_astro/bi.B20mLWMu.svg","/_astro/kc.BtBqGF2T.svg","/_astro/lolla.Bb1z3uYV.svg","/_astro/oracle.DXM45ZQO.svg","/_astro/carp.B7rz3scw.svg","/_astro/paricrepas.OXEhbr_E.svg","/_astro/santander.CYnrBtDx.svg","/_astro/rockypoint.BtYXzIC8.svg","/_astro/topper.BoCyqBhC.svg","/_astro/dakar.Cu24u_w7.svg","/_astro/zurich.Bd8znWQO.svg","/_astro/aireuropa.ME2eLace.svg","/_astro/toyota.Cy5DNw88.svg","/_astro/index.C-wPR7BX.css","/favicon-16x16.png","/icon512_maskable.png","/icon512_rounded.png","/site.webmanifest","/_astro/Intro.astro_astro_type_script_index_0_lang.BTz7SByz.js","/_astro/Marquee.DYCTeu1p.js","/_astro/ScrollTrigger.DZdR0iV_.js","/_astro/Services.astro_astro_type_script_index_0_lang.tY-UIq68.js","/_astro/Works.astro_astro_type_script_index_0_lang.iEPdIpAQ.js","/_astro/client.Ck7an2Yk.js","/_astro/index.DEqwg3Z9.js","/_astro/index._OACqPSs.js","/fonts/ChaletNewYorkNineteenSeventy.ttf","/fonts/Cinematografica-Heavy-trial.ttf","/fonts/FormaDJRMicro-Regular.ttf","/fonts/Impact.ttf","/fonts/MyriadPro-Regular.otf","/fonts/b047f23ebfdc92b210ca04dd4b8e2005.ttf","/fonts/compactaBT.ttf","/fonts/compactaBT.woff2","/Catalogos/Arreglos_Florales/Catalogo_de_Arreglos_Florales.pdf","/Catalogos/Mobiliarios/Catalogo Mesas cd Banquetes.pdf","/Catalogos/Mobiliarios/Catalogo de mesas.pdf","/Catalogos/Mobiliarios/Catalogos Piezas Únicas.pdf","/Catalogos/Mobiliarios/Chill out Chester.pdf","/Catalogos/Mobiliarios/Mobiliario Chill Out Cocktail.pdf","/Catalogos/Mobiliarios/Mobiliarios.zip","/Catalogos/Iluminacion/Brazos Con Luz.pdf","/Catalogos/Iluminacion/Iluminacion.zip","/Catalogos/Iluminacion/Tipos de Iluminación.pdf","/Catalogos/Catering/Catering.pdf","/Catalogos/Carpas/Carpas.zip","/Catalogos/Carpas/Carpas/Datos Técnicos Carpas Beduinas.pdf","/Catalogos/Carpas/Carpas/Dosier Carpas Beduinas.pdf","/Catalogos/Carpas/Carpas/Dosier Pergola Cubo.pdf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8JzhK8SQtmACch9xqEy2SZAuLQIAihceWxWGvnQMJ+8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
