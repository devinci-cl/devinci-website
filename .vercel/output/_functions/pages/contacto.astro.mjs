import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlOi4qeq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_IIImvxUO.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto | Devinci" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-slate-900"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-16"> <div> <h1 class="text-4xl font-bold text-white mb-6">
Empecemos a construir
</h1> <p class="text-lg text-slate-400 mb-8">
Cuéntanos sobre tus desafíos tecnológicos. Ya sea una
                        idea nueva o un sistema legacy que necesita
                        modernización, estamos listos para escuchar.
</p> <div class="space-y-8 mt-12"> <div class="flex items-start gap-4"> <div class="p-3 bg-slate-800 border border-slate-700 text-indigo-400 rounded-lg"> <span class="text-2xl">✉️</span> </div> <div> <h3 class="font-bold text-white">
Email Directo
</h3> <p class="text-slate-400">
contacto@devinci.cl
</p> </div> </div> <div class="flex items-start gap-4"> <div class="p-3 bg-slate-800 border border-slate-700 text-indigo-400 rounded-lg"> <span class="text-2xl">📅</span> </div> <div> <h3 class="font-bold text-white">
Reunión Inicial
</h3> <p class="text-slate-400">
Agenda una videollamada de 30 minutos sin
                                    costo.
</p> </div> </div> </div> </div> <div class="bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-950/50 border border-slate-700"> <h2 class="text-2xl font-bold text-white mb-6">
Formulario de Contacto
</h2> <form class="space-y-5" id="contact-form"> <div class="grid grid-cols-2 gap-4"> <div class="col-span-2 md:col-span-1"> <label for="name" class="block text-sm font-medium text-slate-300 mb-1">Nombre</label> <input type="text" id="name" name="name" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600" required> </div> <div class="col-span-2 md:col-span-1"> <label for="lastname" class="block text-sm font-medium text-slate-300 mb-1">Apellido</label> <input type="text" id="lastname" name="lastname" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600"> </div> </div> <div> <label for="email" class="block text-sm font-medium text-slate-300 mb-1">Email Corporativo</label> <input type="email" id="email" name="email" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600" required> </div> <div> <label for="message" class="block text-sm font-medium text-slate-300 mb-1">¿Cómo podemos ayudarte?</label> <textarea id="message" name="message" rows="4" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600" required></textarea> </div> <div id="form-message" class="hidden p-4 rounded-lg text-sm font-medium"></div> <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 transform hover:-translate-y-0.5 border border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
Enviar Consulta
</button> <p class="text-xs text-center text-slate-500 mt-4">
Te responderemos en menos de 24 horas.
</p> </form> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro", void 0);

const $$file = "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
