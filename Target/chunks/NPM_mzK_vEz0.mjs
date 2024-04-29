import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$NPM$1 } from './NPM_ah8DOZJa.mjs';
import { a as $$Row } from './Row_DHqVazXj.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$NPM = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NPM;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "NPM", $$NPM$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/FoundationLandCommon",
    "GitHub:CodeEditorLand/FoundationLandIngress"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/Land/NPM.astro", void 0);

export { $$NPM as $ };
//# sourceMappingURL=NPM_mzK_vEz0.mjs.map
