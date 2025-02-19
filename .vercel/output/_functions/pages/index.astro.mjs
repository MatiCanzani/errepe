/* empty css                                 */
import { j as createComponent, r as renderTemplate, m as maybeRenderHead, i as createAstro, l as addAttribute, n as renderComponent, o as renderHead, p as renderSlot, q as renderScript, u as Fragment, s as spreadAttributes, v as unescapeHTML } from '../chunks/astro/server_Bx0zT-Sl.mjs';
import { $ as $$Picture, c as $$Image } from '../chunks/_astro_assets_C13bTzPm.mjs';
import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$GtagAw = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=AW-16614997962"><\/script> <script async>\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", "AW-16614997962");\n<\/script>'])));
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/GtagAw.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Gtm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Google Tag Manager --><script async>\n  (function (w, d, s, l, i) {\n    w[l] = w[l] || [];\n    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n    var f = d.getElementsByTagName(s)[0],\n      j = d.createElement(s),\n      dl = l !== "dataLayer" ? "&l=" + l : "";\n    j.async = true;\n    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n    f.parentNode.insertBefore(j, f);\n  })(window, document, "script", "dataLayer", "GTM-5C8MK5S3");\n<\/script> <!-- End Google Tag Manager -->'])));
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Gtm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-deep-blue flex justify-center items-center h-10 text-light-gold italic">
Errepé productora - Todos los derechos reservados.
</footer>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://errepeproductora.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="ERREPE Productora - Una empresa dedicada a la producción gastronómica e infraestructura
    para eventos y comercios"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preload" href="/fonts/compactaBT.woff2" as="font" type="font/woff2" crossorigin>${renderComponent($$result, "GtagAw", $$GtagAw, {})}${renderComponent($$result, "Gtm", $$Gtm, {})}${renderHead()}</head> <body class="w-full"> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C8MK5S3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ${renderSlot($$result, $$slots["default"])}  ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/layouts/Layout.astro", void 0);

const $$SectionBlue = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class=" bg-deep-blue h-full w-full flex justify-center"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/SectionBlue.astro", void 0);

const ImageBottom = new Proxy({"src":"/_astro/image_bottom.DQZsouRk.png","width":1666,"height":908,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/image_bottom.png";
							}
							
							return target[name];
						}
					});

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-brown-1 flex justify-center flex-col items-center min-h-svh"> <div class="flex justify-center flex-col max-h-48 w-full gap-8 items-center z-50 md:absolute md:mt-[20%] md:top-0"> <div class="flex justify-center items-center mx-auto relative w-full h-auto"> <div class="flex flex-col"> <div class="flex flew-row gap-6 md:gap-8 justify-center items-center"> <div class="logo h-28 md:h-36 flex justify-start"> <svg xmlns="http://www.w3.org/2000/svg" width="106" height="170" viewBox="0 0 106 170" fill="none" class="h-full w-auto pt-[0.9rem] pb-[1.2rem] md:pt-[0.1rem] md:pb-[0.9rem]"> <g clip-path="url(#clip0_3_2)"> <mask id="mask0_3_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-409" y="-1158" width="1441" height="2561"> <path d="M-408.516 -1157.63H1031.48V1402.37H-408.516V-1157.63Z" fill="white"></path> </mask> <g mask="url(#mask0_3_2)"> <path d="M67.0523 22.1121V73.8788C67.6643 73.8788 68.1563 73.8961 68.5296 73.9294C68.9029 73.9641 69.2589 74.0161 69.6003 74.0828C72.3163 74.0828 74.0989 73.4708 74.9496 72.2481C75.7989 71.0254 76.2229 68.7161 76.2229 65.3188V32.8108C76.2229 28.3268 75.8669 25.4241 75.1536 24.0988C74.4403 22.7748 72.3843 22.1121 68.9883 22.1121H67.0523ZM38.0096 0.000111826H73.5256C82.7096 0.000111826 89.5136 1.00278 93.9376 3.00544C98.3603 5.01078 101.32 8.44144 102.816 13.2974C104.314 18.1548 105.062 25.2041 105.062 34.4414V56.5548C105.062 62.3988 104.772 67.0508 104.196 70.5161C103.618 73.9801 102.376 76.9534 100.476 79.4321C98.5736 81.9121 95.7203 84.0348 91.9163 85.8001C97.0109 87.7041 100.476 90.6761 102.311 94.7174C104.144 98.7601 105.062 104.484 105.062 111.887V169.463H76.2229V106.691C76.2229 103.837 75.7136 101.835 74.6949 100.679C73.6763 99.5241 71.9083 98.9468 69.3963 98.9468C68.9203 98.9468 68.5123 98.9641 68.1736 98.9974C67.8323 99.0321 67.4603 99.0841 67.0523 99.1508V169.463H38.0096V0.000111826Z" fill="#FCD558"></path> </g> <mask id="mask1_3_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-409" y="-1158" width="1441" height="2561"> <path d="M-408.516 -1157.63H1031.48V1402.37H-408.516V-1157.63Z" fill="white"></path> </mask> <g mask="url(#mask1_3_2)"> <path d="M31.5371 0.00085442C22.0798 0.00085442 15.1576 0.900789 10.7696 2.69812C6.38156 4.49945 3.48649 7.74388 2.09182 12.4305C0.697159 17.1199 3.05176e-05 24.4569 3.05176e-05 34.4423V74.8973C3.05176e-05 82.4387 0.342227 88.3478 1.01956 92.6278C1.69956 96.9078 3.0584 100.288 5.09573 102.766C7.1344 105.249 10.1755 106.996 14.2168 108.016C18.2582 109.034 23.9479 109.544 31.2852 109.544H38.0098V169.462H67.0528V0.00085442H31.5371ZM35.8692 22.1122H38.0098V87.2274H35.4629C32.4069 87.2274 30.5375 86.6155 29.8575 85.3915C29.1788 84.1688 28.8399 81.386 28.8399 77.038V32.8114C28.8399 28.2621 29.1788 25.3403 29.8575 24.0497C30.5375 22.759 32.5412 22.1122 35.8692 22.1122Z" fill="#FCD558"></path> </g> </g> <defs> <clipPath id="clip0_3_2"> <rect width="105.062" height="169.463" fill="white"></rect> </clipPath> </defs> </svg> </div> <h1 class="uppercase text-black text-8xl md:text-[8rem] title font-compactaBT leading-none">
errepé
</h1> </div> <div class="flex justify-center items-center h-fit"> <h2 class="uppercase text-gold text-[1.75rem] md:text-5xl font-semibold subtitle">
productora
</h2> </div> </div> </div> <div class="flex flex-row location text-center"> <h2 class="uppercase text-black text-xl md:text-2xl font-compactaBT">
Buenos Aires -
</h2> <h2 class="uppercase text-black text-xl md:text-2xl font-compactaBT pl-2"> <a href="https://star-carpas.com/" target="_blank" class="group transition duration-300">
Madrid
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span> </a> </h2> </div> </div> <div class="absolute bottom-0 md:relative md:mt-[25%] w-full"> ${renderComponent($$result, "Picture", $$Picture, { "src": ImageBottom, "alt": "Night Tent event image", "widths": [400, 800, 1200, 1600], "sizes": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 100vw", "formats": ["avif", "webp", "jpg"], "quality": 80, "loading": "eager", "width": ImageBottom.width, "height": ImageBottom.height })} </div> </div> ${renderScript($$result, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Intro.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Intro.astro", void 0);

const $$SectionYellow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-light-gold h-full w-full"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/SectionYellow.astro", void 0);

const $$SectionBrown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-brown-1 h-full w-full"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/SectionBrown.astro", void 0);

const Logo$1 = new Proxy({"src":"/_astro/logo-black.BF8pLhHh.svg","width":73,"height":169,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/logo-black.svg";
							}
							
							return target[name];
						}
					});

const service01 = new Proxy({"src":"/_astro/Fotos Web servicios-02.C3FJyAb7.png","width":450,"height":669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-02.png";
							}
							
							return target[name];
						}
					});

const service02 = new Proxy({"src":"/_astro/Fotos Web servicios-03.iGXdT9CL.png","width":450,"height":669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-03.png";
							}
							
							return target[name];
						}
					});

const service03 = new Proxy({"src":"/_astro/Fotos Web servicios-04.BUEl3FDP.png","width":450,"height":669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-04.png";
							}
							
							return target[name];
						}
					});

const service04 = new Proxy({"src":"/_astro/Fotos Web servicios-05.BgMi2CCr.png","width":400,"height":594,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-05.png";
							}
							
							return target[name];
						}
					});

const service05 = new Proxy({"src":"/_astro/Fotos Web servicios-06.Deggp5yo.png","width":450,"height":669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-06.png";
							}
							
							return target[name];
						}
					});

const service06 = new Proxy({"src":"/_astro/Fotos Web servicios-07.CYusi5XY.png","width":450,"height":669,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/services/Fotos Web servicios-07.png";
							}
							
							return target[name];
						}
					});

const servicesData = [
  {
    id: "Service1",
    title: "EVENTOS",
    description:
      "Nuestra experiencia, trayectoria y recursos propios son los que nos hacen capaz de darle servicio de producción gastronómica, mobiliaria y estructural a cualquier tipo de evento, brindando un servicio calidad y garantías.",
    image: service01,
  },
  {
    id: "Service2",
    title: "MOBILIARIOS",
    description:
      "Contamos con recursos como mesas de madera para banquetes, salones, mobiliarios para ceremonias, pérgolas y biombos, Chill out, mobiliario de forja, etc. Junto a Star Carpas, brindamos una asesoría de espacialidad y diseño con una vasta trayectoria en Madrid y Buenos Aires.",
    image: service02,
  },
  {
    id: "Service3",
    title: "PRODUCCIÓN",
    description:
      "Hacemos lo imposible realidad. Con nuestra alianza española Star Carpas, somos capaces de producir eventos chicos, medianos y masivos, donde sea y cuando sea necesario.",
    image: service03,
  },
  {
    id: "Service4",
    title: "CATERING",
    description:
      "Un centro de producción gastronómico propio hace posible que podamos diseñar y producir servicios de catering a medida, con gran reconocimiento en eventos masivos y corporativos.",
    image: service04,
  },
  {
    id: "Service5",
    title: "GASTRONOMÍA",
    description:
      "Desde administración a la implementación, brindamos soluciones gastronómicas para comercios, cadenas gastronómicas, eventos corporativos y eventos privados a medida.",
    image: service05,
  },
  {
    id: "Service6",
    title: "CONSULTING",
    description:
      "La trayectoria tanto en cadenas gastronómicas como servicios para las principales empresas de Argentina y España, nos posicionan dando valor a nuestros procesos, capaces de capacitar e idear las estructuras para tu próximo proyecto.",
    image: service06,
  },
];

const $$Astro$1 = createAstro("https://errepeproductora.com/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, description, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hidden w-full card"${addAttribute(id, "id")}> <div class="service h-full w-full py-16 px-4 text flex justify-between gap-10 lg:gap-16 items-center flex-col lg:flex-row description"> ${renderComponent($$result, "Picture", $$Picture, { "src": imageUrl, "alt": id, "class": "md:min-w-72 rounded-md drop-shadow-4xl lg:drop-shadow-3xl" })} <p class="text-deep-blue text-xl md:text-2xl  font-extrabold font-FormaDJRMicro my-8 text-right lg:pl-10"> ${description} </p> </div> </div>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Card.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container w-11/12 md:w-full flex mx-auto justify-center items-end flex-col h-full py-20 relative" id="textSection" data-astro-cid-g5jplrhu> <div class="w-full flex justify-between items-center my-4 xl:my-20" data-astro-cid-g5jplrhu> <p class="uppercase text-black text-9xl md:text-[16rem] opacity-10 font-compactaBT leading-none" data-astro-cid-g5jplrhu>
errepé
</p> ${renderComponent($$result, "Image", $$Image, { "src": Logo$1, "alt": "ERP", "class": "fill-gold w-12 md:w-24", "data-astro-cid-g5jplrhu": true })} </div> <div class="w-full flex flex-col justify-between items-start my-4 md:flex-row xl:my-20" data-astro-cid-g5jplrhu> <div class="text-center md:text-left w-full md:w-2/6" data-astro-cid-g5jplrhu> <h2 class="text-deep-blue text-xl md:text-2xl font-FormaDJRMicro font-extrabold pt-[105px] w-full text-right mb-10 xl:mb-0 md:ml-[50%]" data-astro-cid-g5jplrhu>
A lo que nos dedicamos:
</h2> </div> <div class="text-right w-full md:w-4/6" data-astro-cid-g5jplrhu> <div id="services" class="flex flex-col text-end items-end grow" data-astro-cid-g5jplrhu> ${servicesData && servicesData.map((service) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-g5jplrhu": true }, { "default": ($$result2) => renderTemplate` <button class="uppercase text-deep-blue text-[5rem] md:text-[8rem] xl:text-[10rem] font-compactaBT leading-[100%] service-word touch-auto"${addAttribute(service.title, "id")} data-astro-cid-g5jplrhu> <span class="link-underline link-underline-black" data-astro-cid-g5jplrhu> ${service.title} <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span> </span> </button> ${renderComponent($$result2, "Card", $$Card, { "description": service.description, "id": service.id, "imageUrl": service.image, "data-astro-cid-g5jplrhu": true })} ` })}`)} </div> </div> </div> <div class="text-right h-full w-full" data-astro-cid-g5jplrhu> <p class="text-deep-blue text-xl md:text-2xl font-extrabold font-FormaDJRMicro mt-10 pl-[30%]" data-astro-cid-g5jplrhu>
Poseemos nuestra propia infraestrucutura, contando con un centro de
      producción gastronómico propio, que brinda serivicio tanto para eventos
      como para comercios.
</p> <div class="text-right gap-4 flex justify-center flex-col text-deep-blue text-xl md:text-2xl font-extrabold font-FormaDJRMicro mt-10" data-astro-cid-g5jplrhu> <p class="font-bold italic" data-astro-cid-g5jplrhu>Descarga Nuestro Catálogos</p> <div class="flex flex-col md:flex-row justify-end gap-4 font-extrabold text-right" data-astro-cid-g5jplrhu> <a href="/Catalogos/Carpas/Carpas.zip" download class="group transition duration-300" data-astro-cid-g5jplrhu>Carpas<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span></a> <span class="hidden md:block" data-astro-cid-g5jplrhu>-</span> <a href="/Catalogos/Iluminacion/Iluminacion.zip" download class="group transition duration-300" data-astro-cid-g5jplrhu>Iluminación<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span></a> <span class="hidden md:block" data-astro-cid-g5jplrhu>-</span> <a href="/Catalogos/Mobiliarios/Mobiliarios.zip" download class="group transition duration-300" data-astro-cid-g5jplrhu>Mobiliarios<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span></a> <span class="hidden md:block" data-astro-cid-g5jplrhu>-</span> <a href="/Catalogos/Arreglos_Florales/Catalogo_de_Arreglos_Florales.pdf" download class="group transition duration-300" data-astro-cid-g5jplrhu>Arreglos Florales<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span></a> <a href="/Catalogos/Catering/Catering.pdf" download class="group transition duration-300" data-astro-cid-g5jplrhu>Catering<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" data-astro-cid-g5jplrhu></span></a> </div> </div> </div> </div> ${renderScript($$result, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Services.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Services.astro", void 0);

const Bar = new Proxy({"src":"/_astro/bar.BlUDeMEC.svg","width":250,"height":300,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/bar.svg";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/_astro/logo.D9Ni9zy9.svg","width":73,"height":169,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/logo.svg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="container w-11/12 md:w-full flex mx-auto justify-center items-end flex-col h-full py-20 relative" id="textSection"> <div class="w-full flex justify-between items-center my-4 pt- xl:my-20"> <p class="uppercase text-black text-9xl md:text-[16rem] opacity-10 font-compactaBT leading-none">
errepé
</p> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "ERP", "class": "fill-gold w-12 md:w-24" })} </div> <div class="flex items-end w-full justify-end text-end font-FormaDJRMicro "> <div class="text-black text-xl md:text-2xl  flex gap-6 xl:gap-14 flex-col grid-flow-row-dense"> <div class="flex justify-end"> <div class="flex justify-center items-center"> <p>
Una empresa dedicada <br> a la producción gastronómica e infraestructura
<br>
para eventos y comercios.
</p> </div> </div> <div class="flex justify-end items-center"> <div class="h-full max-h-64 xl:max-h-64 flex justify-start w-4/6 xl:absolute left-32"> ${renderComponent($$result, "Image", $$Image, { "src": Bar, "alt": "ERP" })} </div> <div class="flex justify-center items-center "> <p>
Con nuestro propio centro de producción <br> y junto a la alianza española
            con Star <br> Carpas, tenemos la capacidad de brindar, <br>
infraestructura , producción y servicio <br> para eventos masivos,
            empresariales y <br> acciones gastronómicas, a medida de <br> cualquier
            cliente y exigencia.
</p> </div> </div> <div class="flex justify-end"> <div class="flex justify-center items-center"> <p>
Con más de 20 años de experiencia, <br> trabajamos con las prinicipales
            empresas <br> y eventos masivos de la Argentina.
</p> </div> </div> </div> </div> </article>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/About.astro", void 0);

const Almundo = "/_astro/almundo.CgSBjE6J.svg";

const BI = "/_astro/bi.B20mLWMu.svg";

const Lolla = "/_astro/lolla.Bb1z3uYV.svg";

const KC = "/_astro/kc.BtBqGF2T.svg";

const Carp = "/_astro/carp.B7rz3scw.svg";

const Oracle = "/_astro/oracle.DXM45ZQO.svg";

const Pariscrepas = "/_astro/paricrepas.OXEhbr_E.svg";

const Rocky = "/_astro/rockypoint.BtYXzIC8.svg";

const Santader = "/_astro/santander.CYnrBtDx.svg";

const Topper = "/_astro/topper.BoCyqBhC.svg";

const Zurich = "/_astro/zurich.Bd8znWQO.svg";

const Dakar = "/_astro/dakar.Cu24u_w7.svg";

const AirEuropa = "/_astro/aireuropa.ME2eLace.svg";

const Toyota = "/_astro/toyota.Cy5DNw88.svg";

const Marquee = () => {
  const logosRef = useRef(null);
  const logos = [
    {
      key: "Almundo",
      name: "Almundo",
      src: Almundo,
      alt: "Almundo Logo"
    },
    {
      key: "BI",
      name: "BI",
      src: BI,
      alt: "BI Logo"
    },
    // {
    //   key: "Andreani",
    //   name: "Andreani",
    //   src: Andreani,
    //   alt: "Andreani Logo",
    // },
    {
      key: "Lolla",
      name: "Lolla",
      src: Lolla,
      alt: "Lolla Logo"
    },
    {
      key: "KC",
      name: "KC",
      src: KC,
      alt: "KC Logo"
    },
    {
      key: "Carp",
      name: "Carp",
      src: Carp,
      alt: "Carp Logo"
    },
    {
      key: "Oracle",
      name: "Oracle",
      src: Oracle,
      alt: "Oracle Logo"
    },
    {
      key: "Pariscrepas",
      name: "Pariscrepas",
      src: Pariscrepas,
      alt: "Pariscrepas Logo"
    },
    {
      key: "Rocky",
      name: "Rocky",
      src: Rocky,
      alt: "Rocky Logo"
    },
    {
      key: "Santader",
      name: "Santader",
      src: Santader,
      alt: "Santader Logo"
    },
    {
      key: "Topper",
      name: "Topper",
      src: Topper,
      alt: "Topper Logo"
    },
    {
      key: "Zurich",
      name: "Zurich",
      src: Zurich,
      alt: "Zurich Logo"
    },
    {
      key: "Dakar",
      name: "Dakar",
      src: Dakar,
      alt: "Dakar Logo"
    },
    {
      key: "AirEuropa",
      name: "AirEuropa",
      src: AirEuropa,
      alt: "AirEuropa Logo"
    },
    {
      key: "Toyota",
      name: "Toyota",
      src: Toyota,
      alt: "Toyota Logo"
    }
  ];
  useEffect(() => {
    const cloneNode = () => {
      if (!logosRef.current) return;
      const ul = logosRef.current;
      const clone = ul.cloneNode(true);
      if (!(clone instanceof HTMLElement)) return;
      clone.setAttribute("aria-hidden", "true");
      ul.parentElement.insertBefore(clone, ul.nextSibling);
    };
    cloneNode();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full inline-flex flex-nowrap overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]\n    ",
      children: /* @__PURE__ */ jsx(
        "ul",
        {
          ref: logosRef,
          className: "flex items-center justify-center animate-infinite-scroll",
          children: logos.map((logo) => /* @__PURE__ */ jsx("li", { className: "mx-8", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo.src,
              alt: logo.alt,
              width: 200,
              height: 200,
              className: "max-h-20 xl:max-h-36 max-w-[200px]\n              ",
              loading: "lazy"
            }
          ) }, logo.key))
        }
      )
    }
  );
};

const $$Clients = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container w-11/12 md:w-full flex mx-auto justify-center items-end flex-col h-full py-20"> <div class="w-full flex justify-between items-center my-4 xl:my-20"> <p class="uppercase text-black text-9xl md:text-[16rem] opacity-10 font-compactaBT leading-none">
errepé
</p> ${renderComponent($$result, "Image", $$Image, { "src": Logo$1, "alt": "ERP", "class": "fill-gold w-12 md:w-24" })} </div> <div class="container w-10/12 xl:w-full h-full flex mx-auto flex-col"> <div class="flex w-full justify-end flex-col-reverse xl:flex-row gap-8 py-10 xl:pb-20 items-end mb-4 xl:mb-10"> <h2 class="text-deep-blue text-xl md:text-2xl  font-extrabold font-FormaDJRMicro">
Experiencia y trayectoria,<br>
y sobretodas las cosas , confianza.
</h2> <div class="flex flex-col gap-0"> <h3 class="uppercase text-deep-blue text-[5rem] md:text-[8rem] xl:text-[10rem] text-end font-compactaBT leading-[90%]">
NUESTROS CLIENTES
</h3> </div> </div> ${renderComponent($$result, "Marquee", Marquee, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Marquee.tsx", "client:component-export": "default" })} </div> </div>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Clients.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Forms = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form method="POST" id="form" class="border rounded border-light-gold p-6"> <input type="hidden" name="access_key" value="3e3919a6-29d7-4dc4-8261-be48206b3541"> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <input type="hidden" name="from_name" value="floating_first_name floating_last_name"> <div class="w-10/12 mx-auto flex flex-col gap-5"> <div class="grid md:grid-cols-2 md:gap-8"> <div class="relative z-0 w-full mb-5 group"> <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required> <label for="floating_first_name" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label> </div> <div class="relative z-0 w-full mb-5 group"> <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required> <label for="floating_last_name" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label> </div> </div> <div class="relative z-0 w-full mb-5 group"> <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required> <label for="floating_email" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label> </div> <div class="relative z-0 w-full mb-5 group"> <input type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required> <label for="floating_phone" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel\xE9fono</label> </div> <div class="relative z-0 w-full mb-5 group"> <input type="text" name="floating_subject" id="floating_subject" class="block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required> <label for="floating_subject" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto</label> </div> <div class="relative z-0 w-full mb-5 group"> <textarea name="floating_message" id="floating_message" class="resize block py-2.5 px-0 w-full text-md text-light-gold bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " rows="5" required oninput="autoGrow(this)"></textarea> <label for="floating_message" class="peer-focus:font-medium absolute text-md text-light-gold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label> </div> <button type="submit" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-deep-blue transition duration-300 ease-out border-2 border-gold rounded-md shadow-md group"> <span class="absolute inset-0 flex items-center justify-center w-full h-full text-deep-blue duration-300 -translate-x-full bg-gold group-hover:translate-x-0 ease"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> </span> <span class="absolute flex items-center justify-center w-full h-full text-light-gold transition-all duration-300 transform group-hover:translate-x-full ease">Enviar</span> <span class="relative invisible">Enviar</span> </button> <div id="result" class="text-gold"></div> </div> </form> <script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    const formData = new FormData(form);\n    e.preventDefault();\n\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Please wait...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.innerHTML = "Email enviado con \xE9xito";\n        } else {\n          console.log(response);\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 3000);\n      });\n  });\n<\/script>'])), maybeRenderHead());
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Forms.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1739976327,"icons":{"instagram":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z\"/><path d=\"M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m7.5-4.5v.01\"/></g>","width":24,"height":24}}}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://errepeproductora.com/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use ${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/node_modules/.pnpm/astro-icon@1.1.0/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full flex justify-center items-center py-40"> <div class="flex w-full flex-col gap-12 justify-around items-center"> <h4 class="uppercase text-light-gold text-6xl md:text-[8rem] font-compactaBT">
contactanos
</h4> <div class="flex flex-col md:flex-row mt-4 md:mt-8 justify-center gap-10 w-10/12"> ${renderComponent($$result, "Form", $$Forms, {})} <div class="flex justify-center flex-col items-center gap-8 mt-4 md:mt-0"> <a href="tel:+5491141880580" class="uppercase text-gold text-xl md:text-2xl font-semibold"> <h5>+54 9 11 41880580</h5> </a> <div class="flex flex-row"> <h5 class="uppercase text-light-gold text-xl md:text-2xl font-compactaBT tracking-wider">
Buenos Aires -
</h5> <h5 class="uppercase text-light-gold text-xl md:text-2xl font-compactaBT pl-2 tracking-wider"> <a href="https://star-carpas.com/" target="_blank" class="group transition duration-300">
Madrid
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gold"></span> </a> </h5> </div> <a href="mailto:info@errepeproductora.com" class="uppercase text-light-gold text-xl md:text-2xl font-compactaBT pl-2 tracking-wider cursor-pointer">info@errepeproductora.com</a> <div class="w-full flex justify-center gap-3 items-center flex-row"> <span class="text-light-gold text-xl md:text-2xl font-compactaBT pl-2 tracking-wider">NUESTRO INSTAGRAM</span> <a href="https://www.instagram.com/errepeproductora" aria-label="Errepe instagram"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "text-light-gold text-4xl hover:text-gold" })} </a> </div> </div> </div> </div> </div>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Contact.astro", void 0);

const EduardoCarballo = new Proxy({"src":"/_astro/Eduardo_Carballo.B7vQE98m.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Eduardo_Carballo.png";
							}
							
							return target[name];
						}
					});

const HernanMenendez = new Proxy({"src":"/_astro/Hernan_Menendez.BHgJUijs.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Hernan_Menendez.png";
							}
							
							return target[name];
						}
					});

const LeandroMambretti = new Proxy({"src":"/_astro/Leandro_Mambretti.DLuWryno.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Leandro_Mambretti.png";
							}
							
							return target[name];
						}
					});

const PabloJimenez = new Proxy({"src":"/_astro/Pablo_Jimenez.Cr07zTtz.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Pablo_Jimenez.png";
							}
							
							return target[name];
						}
					});

const RitaJimenezAlonso = new Proxy({"src":"/_astro/Rita_Jimenez_Alonso.C4GfkSVG.png","width":2250,"height":2250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Rita_Jimenez_Alonso.png";
							}
							
							return target[name];
						}
					});

const GonzaloRipoll = new Proxy({"src":"/_astro/Gonzalo_Ripoll.C-rJ2rkO.png","width":2250,"height":2250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Gonzalo_Ripoll.png";
							}
							
							return target[name];
						}
					});

const CelesteFontana = new Proxy({"src":"/_astro/Celeste_Fontana.DD7Z_wjc.png","width":733,"height":703,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/staff/Celeste_Fontana.png";
							}
							
							return target[name];
						}
					});

const $$Staff = createComponent(($$result, $$props, $$slots) => {
  const staffData = [
    {
      imageSrc: EduardoCarballo,
      altText: "Eduardo Carballo",
      name: "Eduardo Carballo"
    },
    {
      imageSrc: HernanMenendez,
      altText: "Hernan Menendez",
      name: "Hernan Menendez"
    },
    {
      imageSrc: LeandroMambretti,
      altText: "Leandro Mambretti",
      name: "Leandro Mambretti"
    },
    {
      imageSrc: PabloJimenez,
      altText: "Pablo Jimenez",
      name: "Pablo Jimenez"
    },
    {
      imageSrc: RitaJimenezAlonso,
      altText: "Rita Jimenez Alonso",
      name: "Rita Jimenez Alonso"
    },
    {
      imageSrc: GonzaloRipoll,
      altText: "Gonzalo Ripoll",
      name: "Gonzalo Ripoll"
    },
    {
      imageSrc: CelesteFontana,
      altText: "Celeste Fontana",
      name: "Celeste Fontana"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full" data-astro-cid-xzjhjol4> <div class="container w-10/12 xl:w-full h-full flex mx-auto flex-col py-20" data-astro-cid-xzjhjol4> <div class="w-full flex justify-between items-center my-4 xl:my-20" data-astro-cid-xzjhjol4> <p class="uppercase text-black text-9xl md:text-[16rem] opacity-10 font-compactaBT leading-none" data-astro-cid-xzjhjol4>
errepé
</p> ${renderComponent($$result, "Image", $$Image, { "src": Logo$1, "alt": "ERP", "class": "w-12 md:w-24", "data-astro-cid-xzjhjol4": true })} </div> </div> <div class="flex w-full justify-center xl:flex-row gap-8 pb-20 items-center" data-astro-cid-xzjhjol4> <h4 class="uppercase text-deep-blue text-6xl md:text-[8rem] xl:text-[10rem] text-end font-compactaBT leading-[90%]" data-astro-cid-xzjhjol4>
nuestro equipo
</h4> </div> <div class="h-full flex-col md:flex-wrap md:gap-44 w-full md:flex-row lg:gap-20 flex justify-center items-center mx-auto pb-20 gap-20" data-astro-cid-xzjhjol4> ${staffData.map((member) => renderTemplate`<div class="flex justify-center items-center gap-6 flex-col w-2/12" data-astro-cid-xzjhjol4> ${renderComponent($$result, "Image", $$Image, { "src": member.imageSrc, "alt": member.altText, "class": "staff-image", "id": "staff", "data-astro-cid-xzjhjol4": true })} <p class="capitalize text-center text-black text-lg font-semibold font-FormaDJRMicro" data-astro-cid-xzjhjol4> ${member.name} </p> </div>`)} </div> </div> `;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Staff.astro", void 0);

const Event01 = new Proxy({"src":"/_astro/Desktop_1.ZchhB_TO.png","width":2667,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop_1.png";
							}
							
							return target[name];
						}
					});

const Event02 = new Proxy({"src":"/_astro/Desktop_2.BWAq-CU9.png","width":2667,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop_2.png";
							}
							
							return target[name];
						}
					});

const Event05 = new Proxy({"src":"/_astro/Desktop_5.BSCJfQyX.png","width":2667,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop_5.png";
							}
							
							return target[name];
						}
					});

const Front1 = new Proxy({"src":"/_astro/Desktop-2-2-2.CD7xpbnI.png","width":1926,"height":1277,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop-2-2-2.png";
							}
							
							return target[name];
						}
					});

const Front3 = new Proxy({"src":"/_astro/Desktop_1_1_1.4o6kqCHr.png","width":2262,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop_1_1_1.png";
							}
							
							return target[name];
						}
					});

const Front2 = new Proxy({"src":"/_astro/Desktop_3_3_3.B_qZr3yI.png","width":1262,"height":837,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/images/works/Desktop_3_3_3.png";
							}
							
							return target[name];
						}
					});

const $$Works = createComponent(($$result, $$props, $$slots) => {
  const images = [
    {
      src: Front1,
      alt: "Front page design version 1 for desktop"
    },
    {
      src: Event01,
      alt: "Event page design version 1 for desktop"
    },
    {
      src: Front3,
      alt: "Front page design version 3 for desktop"
    },
    {
      src: Event02,
      alt: "Event page design version 2 for desktop"
    },
    {
      src: Front2,
      alt: "Front page design version 2 for desktop"
    },
    {
      src: Event05,
      alt: "Event page design version 5 for desktop"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full xl:w-full h-full mx-auto my-0 bg-deep-blue p-10 works"> <div class="columns-1 md:columns-2"> ${images.map((data) => renderTemplate`<div class="relative mb-4 before:content-[''] before:rounded-md before:absolute "> ${renderComponent($$result, "Image", $$Image, { "src": data.src, "alt": data.alt, "class": "rounded-md w-full box" })} </div>`)} </div> </div> ${renderScript($$result, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Works.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Works.astro", void 0);

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-full w-full"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Section.astro", void 0);

const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/5491141880580" target="_blank" class="fixed bottom-4 right-4 bg-light-gold text-deep-blue rounded-full shadow-lg transition-colors whatsapp-btn hover:bg-gold overflow-hidden" data-astro-cid-w7tvgi5a> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" data-astro-cid-w7tvgi5a> <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" data-astro-cid-w7tvgi5a></path> <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" data-astro-cid-w7tvgi5a></path> </svg> <span class="whatsapp-text text-sm text-deep-blue" data-astro-cid-w7tvgi5a>
Escribimos por WhatsApp
</span> </a> `;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/components/Whatsapp.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ERREPE" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SectionBlue", $$SectionBlue, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Intro", $$Intro, {})} ` })} ${renderComponent($$result2, "SectionYellow", $$SectionYellow, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Services", $$Services, {})} ` })} ${renderComponent($$result2, "SectionBrown", $$SectionBrown, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "About", $$About, {})} ` })} ${renderComponent($$result2, "SectionYellow", $$SectionYellow, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Clients", $$Clients, {})} ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Works", $$Works, {})} ` })} ${renderComponent($$result2, "SectionYellow", $$SectionYellow, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Staff", $$Staff, {})} ` })} ${renderComponent($$result2, "SectionBlue", $$SectionBlue, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Contact", $$Contact, {})} ` })} ${renderComponent($$result2, "Whatsapp", $$Whatsapp, {})} </main> ` })}`;
}, "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/pages/index.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/repos/Nico/RP/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
