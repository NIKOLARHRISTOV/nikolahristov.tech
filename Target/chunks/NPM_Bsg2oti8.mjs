import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$NPM$1 } from './NPM_DjcB2SWk.mjs';
import { a as $$Row } from './Row_IrM2WuDj.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$NPM = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NPM;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "NPM", $$NPM$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/Tauri/NPM.astro", void 0);

export { $$NPM as $ };
//# sourceMappingURL=NPM_Bsg2oti8.mjs.map
