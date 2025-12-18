import { c as createComponent, h as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, a as renderScript } from '../chunks/astro/server_BlOi4qeq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_IIImvxUO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Devinci | Ingenier\xEDa + Arte Digital" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-40 overflow-hidden bg-slate-900"> <!-- Background Grid --> <div class="absolute inset-0 -z-10"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div> <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-500/20 bg-slate-800/50 backdrop-blur-sm shadow-sm text-sm font-semibold text-indigo-300 mb-10 animate-fade-in-up"> <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
Consultoría de Software de Alto Nivel
</div> <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-white mb-10 leading-tight">
Ingenio para diseñar. <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">Maestría para construir.</span> </h1> <p class="text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
Combinamos creatividad resolutiva con un dominio técnico
				avanzado. En Devinci, las mejores ideas se ejecutan con el
				código más robusto y moderno.
</p> <div class="flex flex-col sm:flex-row justify-center gap-6"> <a href="/contacto" class="px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/5 hover:-translate-y-1">
Iniciar Conversación
</a> <a href="/nosotros" class="px-10 py-5 rounded-2xl bg-slate-800 text-white border border-slate-700 font-bold text-lg hover:bg-slate-700 transition-all hover:-translate-y-1">
Conócenos
</a> </div> </div> </section>  <section class="py-32 bg-slate-900 relative overflow-hidden" id="metodo"> <!-- Background Accents --> <div class="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] bg-indigo-900/10 rounded-full blur-[120px] opacity-30"></div> <div class="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-violet-900/10 rounded-full blur-[100px] opacity-20"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid lg:grid-cols-12 gap-16 items-start"> <!-- Tabs Column (Left) --> <div class="lg:col-span-4 lg:sticky lg:top-32"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
Metodología <span class="text-indigo-400">Devinci</span> </h2> <p class="text-slate-400 mb-10 leading-relaxed">
No escribimos código por escribir. Diseñamos soluciones
						que transforman negocios.
</p> <!-- Tab Buttons --> <div class="flex flex-col gap-4 relative" id="tabs-container"> <!-- Active Indicator (Animated) --> <div id="tab-indicator" class="hidden lg:block absolute left-0 top-0 w-1 h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out z-10" style="height: 0; opacity: 0;"></div> <button class="tab-btn group text-left p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden focus:outline-none data-[active=true]:bg-slate-800 data-[active=true]:border-indigo-500" data-target="tab-vision" data-active="true"> <div class="flex items-center gap-4 relative z-10"> <span class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl group-data-[active=true]:bg-indigo-500 group-data-[active=true]:text-white transition-colors">
💡
</span> <div> <h3 class="text-lg font-bold text-slate-200 group-data-[active=true]:text-white">
Visión Estratégica
</h3> <p class="text-sm text-slate-500 group-data-[active=true]:text-indigo-200/70">
Diseño centrado en valor
</p> </div> </div> </button> <button class="tab-btn group text-left p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden focus:outline-none data-[active=true]:bg-slate-800 data-[active=true]:border-indigo-500" data-target="tab-engineering"> <div class="flex items-center gap-4 relative z-10"> <span class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl group-data-[active=true]:bg-indigo-500 group-data-[active=true]:text-white transition-colors">
🛠️
</span> <div> <h3 class="text-lg font-bold text-slate-200 group-data-[active=true]:text-white">
Ingeniería Robusta
</h3> <p class="text-sm text-slate-500 group-data-[active=true]:text-indigo-200/70">
Código limpio y moderno
</p> </div> </div> </button> <button class="tab-btn group text-left p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden focus:outline-none data-[active=true]:bg-slate-800 data-[active=true]:border-indigo-500" data-target="tab-scale"> <div class="flex items-center gap-4 relative z-10"> <span class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl group-data-[active=true]:bg-indigo-500 group-data-[active=true]:text-white transition-colors">
🚀
</span> <div> <h3 class="text-lg font-bold text-slate-200 group-data-[active=true]:text-white">
Escalabilidad
</h3> <p class="text-sm text-slate-500 group-data-[active=true]:text-indigo-200/70">
Preparado para crecer
</p> </div> </div> </button> </div> </div> <!-- Content Column (Right) --> <div class="lg:col-span-8 relative min-h-[500px]"> <!-- Content 1: Visión --> <div id="tab-vision" class="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-100 translate-x-0 pointer-events-auto"> <div class="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden relative backdrop-blur-sm"> <!-- Image/Graphic representation --> <div class="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-indigo-500/10 to-transparent -z-10 mix-blend-overlay"></div> <div class="mb-8"> <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
El arte de materializar lo intangible
</h3> <p class="text-lg text-slate-300 leading-relaxed mb-6">
En el mundo digital, una idea vale tanto
									como su ejecución. Nosotros cerramos esa
									brecha entendiendo primero el <strong>"por qué"</strong> antes del "cómo".
</p> <ul class="space-y-4"> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Análisis profundo de requerimientos
											de negocio.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Prototipado rápido y validación de
											conceptos.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Diseño UI/UX centrado en la
											conversión.</span> </li> </ul> </div> <div class="h-64 w-full bg-indigo-900/20 rounded-2xl border border-indigo-500/10 flex items-center justify-center relative overflow-hidden group"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.2),transparent_70%)]"></div> <div class="text-8xl opacity-20 grayscale saturate-0 group-hover:scale-110 transition-transform duration-700">
💡
</div> </div> </div> </div> <!-- Content 2: Ingeniería --> <div id="tab-engineering" class="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-0 translate-x-10 pointer-events-none"> <div class="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden relative backdrop-blur-sm"> <div class="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-violet-500/10 to-transparent -z-10 mix-blend-overlay"></div> <div class="mb-8"> <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
Maestría Técnica
</h3> <p class="text-lg text-slate-300 leading-relaxed mb-6">
No somos una fábrica de software. Somos
									artesanos digitales. Nuestro código es
									limpio, documentado y construido sobre
									estándares modernos.
</p> <ul class="space-y-4"> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Clean Architecture & SOLID
											principles.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Stack moderno: React, Astro,
											Node.js, AWS.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Testing automatizado y CI/CD
											pipelines.</span> </li> </ul> </div> <div class="h-64 w-full bg-violet-900/20 rounded-2xl border border-violet-500/10 flex items-center justify-center relative overflow-hidden group"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.2),transparent_70%)]"></div> <div class="text-8xl opacity-20 grayscale saturate-0 group-hover:scale-110 transition-transform duration-700">
🛠️
</div> </div> </div> </div> <!-- Content 3: Escalabilidad --> <div id="tab-scale" class="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-0 translate-x-10 pointer-events-none"> <div class="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden relative backdrop-blur-sm"> <div class="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent -z-10 mix-blend-overlay"></div> <div class="mb-8"> <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
Built for Growth
</h3> <p class="text-lg text-slate-300 leading-relaxed mb-6">
Construimos pensando en el mañana. Nuestras
									soluciones están diseñadas para crecer con
									tu negocio sin necesidad de reescribir todo.
</p> <ul class="space-y-4"> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Arquitectura Serverless y
											Microservicios.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Optimización de rendimiento y SEO
											técnico.</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span> <span class="text-slate-400">Seguridad y cumplimiento de
											normativas.</span> </li> </ul> </div> <div class="h-64 w-full bg-blue-900/20 rounded-2xl border border-blue-500/10 flex items-center justify-center relative overflow-hidden group"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2),transparent_70%)]"></div> <div class="text-8xl opacity-20 grayscale saturate-0 group-hover:scale-110 transition-transform duration-700">
🚀
</div> </div> </div> </div> </div> </div> </div> <!-- Script for Tabs Logic --> ${renderScript($$result2, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </section>   <section class="py-32 bg-slate-900 text-white relative overflow-hidden"> <!-- Background Pattern --> <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:32px_32px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Title Block --> <div class="col-span-1 md:col-span-2 lg:col-span-4 mb-12 text-center"> <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
Nuestro ADN
</h2> <span class="w-24 h-1 bg-indigo-500 block mx-auto rounded-full"></span> </div> <!-- Ingenio --> <div class="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"> <div class="relative z-10"> <div class="text-3xl mb-6 p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 group-hover:text-indigo-300 transition-colors">
🧠
</div> <h3 class="text-xl font-bold text-white mb-3">
Ingenio
</h3> <p class="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
Encontrar la solución elegante donde otros solo ven
							complejidad. Lo difícil lo hacemos posible.
</p> </div> </div> <!-- Inventiva --> <div class="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"> <div class="relative z-10"> <div class="text-3xl mb-6 p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 group-hover:text-indigo-300 transition-colors">
✨
</div> <h3 class="text-xl font-bold text-white mb-3">
Inventiva
</h3> <p class="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
Crear caminos nuevos. Innovación aplicada al
							resultado, no por capricho.
</p> </div> </div> <!-- Resolución --> <div class="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"> <div class="relative z-10"> <div class="text-3xl mb-6 p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 group-hover:text-indigo-300 transition-colors">
🎯
</div> <h3 class="text-xl font-bold text-white mb-3">
Resolución
</h3> <p class="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
Obsesión por el "Done". Ejecución pragmática,
							certera y a tiempo.
</p> </div> </div> <!-- Excelencia --> <div class="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"> <div class="relative z-10"> <div class="text-3xl mb-6 p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 group-hover:text-indigo-300 transition-colors">
💎
</div> <h3 class="text-xl font-bold text-white mb-3">
Excelencia
</h3> <p class="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
Rigor técnico absoluto. Sin deuda técnica, sin
							atajos. Calidad de clase mundial.
</p> </div> </div> </div> <div class="mt-28 text-center border-t border-slate-800 pt-16"> <p class="text-slate-400 mb-8 font-medium uppercase tracking-widest text-sm">
Empresas que confían en nuestra arquitectura
</p> <div class="flex flex-wrap justify-center gap-12 opacity-30 grayscale saturate-0 hover:opacity-50 transition-opacity"> <!-- Placeholders for logos --> <div class="h-8 w-32 bg-slate-600 rounded"></div> <div class="h-8 w-32 bg-slate-600 rounded"></div> <div class="h-8 w-32 bg-slate-600 rounded"></div> <div class="h-8 w-32 bg-slate-600 rounded"></div> </div> </div> </div> </section>  <section class="py-24"> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
¿Listo para construir el futuro?
</h2> <p class="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
Ya sea una migración compleja a la nube o una nueva plataforma
				SaaS, tenemos el equipo y la experiencia.
</p> <a href="/contacto" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-white rounded-lg hover:bg-slate-200 shadow-lg shadow-white/10">
Agendar Consulta Técnica
</a> </div> </section> ` })}`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro", void 0);

const $$file = "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
