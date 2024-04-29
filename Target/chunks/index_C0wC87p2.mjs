import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_DHqVazXj.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/RoundWindows/Application/main/src-tauri/src/Image/32x32.png", "LightIcon": "https://raw.githubusercontent.com/RoundWindows/Application/main/src-tauri/src/Image/32x32.png", "Text": "Round\u2003\u2014" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:RoundWindows/Application",
    "GitHub:RoundWindows/Website"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro";
const $$url = "/Raw/Readme/RoundWindows";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_C0wC87p2.mjs.map
