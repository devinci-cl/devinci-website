import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BlOi4qeq.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DRyvc-Lz.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/","cacheDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/node_modules/.astro/","outDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/dist/","srcDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/","publicDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/public/","buildClientDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/dist/client/","buildServerDir":"file:///Users/estebanloaiza/Documents/projects/devinci/devinci/website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.B3qmg_7G.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.B3qmg_7G.css"}],"routeData":{"route":"/filosofia","isIndex":false,"type":"page","pattern":"^\\/filosofia\\/?$","segments":[[{"content":"filosofia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/filosofia.astro","pathname":"/filosofia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.B3qmg_7G.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.B3qmg_7G.css"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.B3qmg_7G.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/filosofia.astro",{"propagation":"none","containsHead":true}],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/filosofia@_@astro":"pages/filosofia.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DvOPXE4i.mjs","/Users/estebanloaiza/Documents/projects/devinci/devinci/website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_9ZPSHflC.mjs","/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.B0EDUunJ.js","/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.jHXGm-Ha.js","/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.DOs1FH3n.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const r=document.getElementById(\"contact-form\"),t=r?.querySelector('button[type=\"submit\"]'),e=document.getElementById(\"form-message\"),i=t?.innerText;r&&t&&e&&r.addEventListener(\"submit\",async o=>{o.preventDefault(),t.disabled=!0,t.innerText=\"Enviando...\",e.classList.add(\"hidden\"),e.className=\"hidden p-4 rounded-lg text-sm font-medium\";const s=new FormData(r),a=Object.fromEntries(s);try{const n=await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)}),d=await n.json();if(n.ok)e.innerText=\"¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.\",e.classList.remove(\"hidden\"),e.classList.add(\"bg-green-500/10\",\"text-green-400\",\"border\",\"border-green-500/20\"),r.reset();else throw new Error(d.message||\"Error al enviar\")}catch(n){console.error(n),e.innerText=n.message||\"Hubo un error al enviar el mensaje. Por favor intenta nuevamente.\",e.classList.remove(\"hidden\"),e.classList.add(\"bg-red-500/10\",\"text-red-400\",\"border\",\"border-red-500/20\")}finally{t.disabled=!1,t.innerText=i}});"],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro?astro&type=script&index=0&lang.ts","function s(){const a=document.querySelectorAll(\".tab-btn\"),o=document.querySelectorAll(\".tab-content\");a.forEach(e=>{e.addEventListener(\"click\",()=>{const r=e.getAttribute(\"data-target\");a.forEach(t=>t.setAttribute(\"data-active\",\"false\")),e.setAttribute(\"data-active\",\"true\"),o.forEach(t=>{t.id===r?(t.classList.remove(\"opacity-0\",\"translate-x-10\",\"pointer-events-none\"),t.classList.add(\"opacity-100\",\"translate-x-0\",\"pointer-events-auto\")):(t.classList.remove(\"opacity-100\",\"translate-x-0\",\"pointer-events-auto\"),t.classList.add(\"opacity-0\",\"translate-x-10\",\"pointer-events-none\"))})})})}document.addEventListener(\"astro:page-load\",s);s();"],["/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"button.mobile-menu-button\"),t=document.querySelector(\"#mobile-menu\");e&&t&&e.addEventListener(\"click\",()=>{t.classList.toggle(\"hidden\")});"]],"assets":["/_astro/devinci_face.Dbwev3zy.png","/_astro/contacto.B3qmg_7G.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"IYXZlagS/giKz2y2EUu+cCkDrXsYxCfpUIlpumjmuNk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
