import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("https://nikolahristov.tech/");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  let {
    AltIcon = null,
    DarkIcon = null,
    Emoji = null,
    LightIcon = null,
    Text = null
  } = Astro2.props;
  LightIcon = LightIcon ?? DarkIcon;
  DarkIcon = DarkIcon ?? LightIcon;
  return renderTemplate`${maybeRenderHead()}<tr> <td colspan="4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<h3 align="center">`)}` })} <span> <picture> ${DarkIcon ? renderTemplate`<source media="(prefers-color-scheme: dark)"${addAttribute(DarkIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<source media="(prefers-color-scheme: light)"${addAttribute(LightIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<img width="28"${addAttribute(AltIcon ?? "", "alt")}${addAttribute(LightIcon, "src")}>` : ""} </picture> ${Emoji} </span> ${Text ?? ""} <br> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`</h3>`)}` })} </td> </tr>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading.astro", void 0);

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { Link, Image, Alt } = Astro2.props.Badge;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(Link, "href")} target="_blank"> <picture> <source media="(prefers-color-scheme: dark)"${addAttribute(`${Image}${Dark}`, "srcset")}> <source media="(prefers-color-scheme: light)"${addAttribute(`${Image}${Light}`, "srcset")}> <img${addAttribute(`${Image}${Dark}`, "src")}${addAttribute(Alt, "alt")}${addAttribute(Alt, "title")}> </picture> </a>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Badge.astro", void 0);

const $$Astro = createAstro("https://nikolahristov.tech/");
await import('./Icon_C4pM-rEA.mjs');
const { default: Parse } = await import('./Parse_CHFv6Dcy.mjs');
const $$Row = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Row;
  const Items = await Parse(Astro2.props.Package);
  return renderTemplate`${[...(await import('./Chunks_CO1rO0Y1.mjs')).default(Array.from(Items), 2)].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      let Length = Array.from(Package.Badge).filter(
        (Badge2) => !Badge2.Float
      ).length;
      Span -= Length >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Length >= 1 ? renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br>${Array.from(Package.Badge).filter((Badge2) => !Badge2.Float).map((_Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "Badge": _Badge })}<br>` })}`)}<br></td>` : ""}<td valign="top"${addAttribute(Span, "colspan")}><br><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Light}&logoColor=black`, "srcset")}><img${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "src")} alt="Star"></picture></a><br>${Array.from(Package.Badge).filter((Badge2) => Badge2.Float).map((_Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "Badge": _Badge })}<br>` })}`)}<a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a><br></td>` })}`;
    })}</tr>`
  )}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Row.astro", void 0);

export { $$Heading as $, $$Row as a };
//# sourceMappingURL=Row_DHqVazXj.mjs.map
