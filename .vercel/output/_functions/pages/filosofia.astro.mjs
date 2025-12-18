import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlOi4qeq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_IIImvxUO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_JAPhFHwJ.mjs';
export { renderers } from '../renderers.mjs';

const devinciFace = new Proxy({"src":"/_astro/devinci_face.Dbwev3zy.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/assets/images/devinci_face.png";
							}
							
							return target[name];
						}
					});

const $$Filosofia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Filosof\xEDa | Devinci" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24 bg-slate-900 overflow-hidden relative min-h-screen flex flex-col justify-center"> <!-- Background elements --> <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden"> <!-- Main Background Image --> <!-- Removed blur, adjusted opacity for clearer visibility while maintaining text contrast --> <div class="absolute inset-0 opacity-40"> ${renderComponent($$result2, "Image", $$Image, { "src": devinciFace, "alt": "Leonardo da Vinci Background", "class": "w-full h-full object-cover grayscale scale-105" })} </div> <!-- Gradient Overlay - Adjusted to be lighter in the center to reveal the face --> <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div> <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div> <!-- Color Accents --> <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen opacity-60"></div> <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] mix-blend-screen opacity-60"></div> </div> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Header --> <div class="text-center mb-24"> <span class="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in relative z-20">Manifesto</span> <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl relative z-20">
El Método <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Devinci</span> </h1> <div class="h-1 w-24 bg-indigo-500 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div> </div> <!-- Quote --> <div class="mb-24 relative"> <!-- Added a stronger backdrop to the quote to visually separate it from the clearer background --> <div class="absolute inset-0 bg-slate-900/60 blur-3xl -z-10 rounded-full transform scale-125"></div> <blockquote class="text-3xl md:text-5xl font-serif text-slate-100 text-center leading-relaxed italic relative z-10 drop-shadow-xl text-balance"> <span class="text-7xl text-indigo-500/40 absolute -top-12 left-0 font-sans">"</span>
La simplicidad es la máxima sofisticación.
<span class="text-7xl text-indigo-500/40 absolute -bottom-12 right-0 font-sans">"</span> <footer class="mt-8 text-xl text-indigo-300 font-sans not-italic font-medium tracking-wide drop-shadow-md">
— LEONARDO DA VINCI
</footer> </blockquote> </div> <!-- Intro Text --> <div class="text-xl text-slate-300 leading-relaxed space-y-6 mb-24 text-center max-w-3xl mx-auto font-light drop-shadow-md relative"> <div class="absolute inset-0 bg-slate-900/40 blur-2xl -z-10 rounded-full"></div> <p>
Inspirados en la faceta de inventor de Leonardo, en Devinci
                    abordamos los problemas de negocio con una visión integral.
<strong class="text-white font-medium">Entendemos que una herramienta tecnológica sin una
                        estrategia clara es irrelevante.</strong> </p> <p>
No elegimos entre "buen diseño" o "buen código". Buscamos la
                    simbiosis perfecta donde la capacidad técnica potencia la
                    creatividad.
</p> </div> <!-- Principles Grid --> <div class="grid md:grid-cols-2 gap-8"> <!-- Card 1 --> <div class="group p-8 rounded-3xl bg-slate-900/70 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"> <div class="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(99,102,241,0.2)]">
👁️
</div> <h3 class="text-2xl font-bold text-white mb-4">
Saper Vedere
</h3> <p class="text-slate-300 leading-relaxed">
"Saber ver". Nuestro ingenio nace de entender el
                        problema real. Diseñamos la estrategia perfecta antes de
                        escribir la primera línea de código.
</p> </div> <!-- Card 2 --> <div class="group p-8 rounded-3xl bg-slate-900/70 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"> <div class="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.2)]">
⚙️
</div> <h3 class="text-2xl font-bold text-white mb-4">
Rigor Técnico
</h3> <p class="text-slate-300 leading-relaxed">
La creatividad sin ejecución es solo un sueño. Usamos
                        arquitectura de vanguardia para convertir grandes ideas
                        en software indestructible.
</p> </div> </div> </div> </section> ` })}`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/filosofia.astro", void 0);

const $$file = "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/filosofia.astro";
const $$url = "/filosofia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Filosofia,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
