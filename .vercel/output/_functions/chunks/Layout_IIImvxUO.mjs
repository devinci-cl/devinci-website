import { c as createComponent, h as createAstro, m as maybeRenderHead, a as renderScript, j as addAttribute, b as renderTemplate, n as renderHead, r as renderComponent, o as renderSlot } from './astro/server_BlOi4qeq.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const links = [
    { name: "Inicio", href: "/" },
    // { name: "Nosotros", href: "/nosotros" },
    { name: "Filosof\xEDa", href: "/filosofia" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" }
  ];
  const pathname = Astro2.url.pathname;
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    return normalizedPath.startsWith(href);
  };
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-indigo-500/10"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <!-- Logo --> <div class="flex-shrink-0 flex items-center"> <a href="/" class="text-2xl font-bold tracking-tighter text-white hover:text-indigo-400 transition-colors">
DEVINCI
</a> </div> <!-- Desktop Menu --> <div class="hidden md:flex items-center space-x-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "text-sm font-medium transition-all duration-300 relative py-1",
    isActive(link.href) ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500 after:rounded-full after:shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "text-slate-400 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500/50 after:transition-all after:duration-300 hover:after:w-full"
  ], "class:list")}> ${link.name} </a>`)} <a href="/contacto" class="px-5 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-bold hover:bg-slate-200 transition-all shadow-lg shadow-white/5 hover:-translate-y-0.5">
Iniciar Proyecto
</a> </div> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center"> <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Abrir menú principal</span> <!-- Icon menu --> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu --> <div class="md:hidden hidden bg-slate-900 border-b border-indigo-500/10" id="mobile-menu"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
    isActive(link.href) ? "bg-slate-800 text-white border-l-2 border-indigo-500" : "text-slate-400 hover:text-white hover:bg-slate-800"
  ], "class:list")}> ${link.name} </a>`)} </div> </div> </nav> ${renderScript($$result, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-950 border-t border-white/5 pt-16 pb-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <div class="col-span-1 md:col-span-2"> <a href="/" class="text-2xl font-bold tracking-tighter text-white mb-4 block">
DEVINCI
</a> <p class="text-slate-400 max-w-sm leading-relaxed">
Fusionamos ingenio estratégico con excelencia técnica.
                    Dominamos la tecnología para materializar soluciones que
                    marcan la diferencia.
</p> </div> <div> <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">
Explorar
</h3> <ul class="space-y-3"> <li> <a href="/nosotros" class="text-slate-400 hover:text-white transition-colors">Nosotros</a> </li> <li> <a href="/filosofia" class="text-slate-400 hover:text-white transition-colors">Filosofía</a> </li> <li> <a href="/servicios" class="text-slate-400 hover:text-white transition-colors">Servicios</a> </li> <li> <a href="/contacto" class="text-slate-400 hover:text-white transition-colors">Contacto</a> </li> </ul> </div> <div> <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">
Social
</h3> <ul class="space-y-3"> <li> <a href="#" class="text-slate-400 hover:text-white transition-colors">LinkedIn</a> </li> <li> <a href="#" class="text-slate-400 hover:text-white transition-colors">GitHub</a> </li> <li> <a href="#" class="text-slate-400 hover:text-white transition-colors">Twitter</a> </li> </ul> </div> </div> <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-sm text-slate-500">
&copy; ${currentYear} Devinci. Todos los derechos reservados.
</p> <p class="text-sm text-slate-500 flex items-center gap-1">
Hecho con <span class="text-indigo-400">✦</span> en Santiago, Chile
</p> </div> </div> </footer>`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Devinci | Consultor\xEDa Tecnol\xF3gica" } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-slate-900 text-slate-300 font-sans antialiased flex flex-col min-h-screen selection:bg-indigo-500 selection:text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
