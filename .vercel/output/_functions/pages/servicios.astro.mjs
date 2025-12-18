import { c as createComponent, h as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlOi4qeq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_IIImvxUO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  const services = [
    {
      title: "Desarrollo de WebApps",
      description: "Construimos plataformas web robustas que escalan con tu negocio. Nos especializamos en aplicaciones SPA y SSR de alto rendimiento.",
      icon: "\u{1F4BB}",
      features: [
        "React / Next.js",
        "Astro",
        "Dashboards Interactivos",
        "SaaS Platforms"
      ]
    },
    {
      title: "Desarrollo Mobile",
      description: "Llevamos tu idea al bolsillo de tus usuarios. Desarrollo nativo y multiplataforma con una experiencia de usuario impecable.",
      icon: "\u{1F4F1}",
      features: [
        "React Native",
        "iOS & Android",
        "UI/UX Mobile First",
        "Integraci\xF3n N\xE1tiva"
      ]
    },
    {
      title: "Soluciones Cloud",
      description: "Arquitecturas en la nube dise\xF1adas para la resiliencia y la eficiencia de costos. Olv\xEDdate de los servidores tradicionales.",
      icon: "\u2601\uFE0F",
      features: [
        "AWS / Azure / GCP",
        "Serverless",
        "Docker & Kubernetes",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Consultor\xEDa Tecnol\xF3gica",
      description: "No solo escribimos c\xF3digo, te ayudamos a tomar las decisiones t\xE9cnicas correctas para el futuro de tu empresa.",
      icon: "\u{1F4A1}",
      features: [
        "Auditor\xEDa de C\xF3digo",
        "Arquitectura de Software",
        "Modernizaci\xF3n Legacy",
        "Mentoria T\xE9cnica"
      ]
    },
    {
      title: "Transformaci\xF3n Digital",
      description: "Guiamos a tu organizaci\xF3n en la adopci\xF3n de cultura digital. Modernizamos procesos obsoletos para competir en la econom\xEDa moderna.",
      icon: "\u{1F680}",
      features: [
        "Digital Mindset",
        "Modernizaci\xF3n de Procesos",
        "Adopci\xF3n Cloud",
        "Estrategia IT"
      ]
    },
    {
      title: "Base de Datos",
      description: "El coraz\xF3n de tu aplicaci\xF3n. Dise\xF1amos esquemas eficientes y optimizamos consultas para un rendimiento m\xE1ximo.",
      icon: "\u{1F5C4}\uFE0F",
      features: [
        "PostgreSQL / MySQL",
        "MongoDB / NoSQL",
        "Modelado de Datos",
        "Optimizaci\xF3n de Queries"
      ]
    },
    {
      title: "Automatizaci\xF3n",
      description: "Libera a tu equipo de tareas repetitivas. Creamos scripts y bots que trabajan 24/7 por ti.",
      icon: "\u2699\uFE0F",
      features: [
        "Python Scripting",
        "Integraci\xF3n de APIs",
        "Process Mining",
        "Workflow Automation"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios | Devinci" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-slate-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-20"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
Nuestras Capacidades
</h1> <p class="text-xl text-slate-400 max-w-3xl mx-auto">
Un abanico completo de soluciones técnicas para abordar
                    cualquier desafío digital, desde la concepción hasta el
                    despliegue.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="bg-slate-800/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-700 flex flex-col h-full group hover:-translate-y-1"> <div class="text-5xl mb-6 bg-slate-900 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-indigo-500/30 transition-colors"> ${service.icon} </div> <h3 class="text-2xl font-bold text-white mb-4"> ${service.title} </h3> <p class="text-slate-400 mb-8 flex-grow leading-relaxed"> ${service.description} </p> <ul class="space-y-2"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center text-sm text-slate-500 font-medium group-hover:text-slate-400 transition-colors"> <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span> ${feature} </li>`)} </ul> </div>`)} </div> <div class="mt-24 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 text-center relative overflow-hidden"> <div class="absolute inset-0 bg-indigo-500/10 blur-[100px]"></div> <div class="relative z-10"> <h2 class="text-3xl font-bold text-white mb-6">
¿No ves lo que buscas?
</h2> <p class="text-slate-400 mb-8 max-w-2xl mx-auto">
Los desafíos únicos requieren soluciones únicas.
                        Cuéntanos tu problema y diseñaremos una solución a
                        medida.
</p> <a href="/contacto" class="inline-block px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
Hablar con un Experto
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/servicios.astro", void 0);

const $$file = "/Users/estebanloaiza/Documents/projects/devinci/devinci/website/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
