import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B59ePMZa.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"️compress\">🗜️ <a href=\"HTTPS://NPMJS.Org/@playform/compress\">Compress</a> —</h1>\n<p>This <strong><a href=\"HTTPS://docs.astro.build/en/guides/integrations-guide/\">Astro integration</a></strong> brings compression utilities to\nyour Astro project.</p>\n<p><a href=\"HTTPS://NPMJS.Org/csso\">CSS</a> ⁄ <a href=\"HTTPS://NPMJS.Org/html-minifier-terser\">HTML</a> ⁄ <a href=\"HTTPS://NPMJS.Org/terser\">JavaScript</a> ⁄ <a href=\"HTTPS://NPMJS.Org/sharp\">Image</a> ⁄ <a href=\"HTTPS://NPMJS.Org/svgo\">SVG</a></p>\n<blockquote>\n<p><strong>Note</strong></p>\n<p><code>Compress</code> will not compress your requests, only your statically generated\nbuild and pre-rendered routes.</p>\n</blockquote>\n<blockquote>\n<p>[!IMPORTANT]</p>\n<p>Use <code>Compress</code> last in your integration list for the best optimization.</p>\n</blockquote>\n<h2 id=\"installation\">Installation</h2>\n<p>There are two ways to add integrations to your project. Let’s try the most\nconvenient option first!</p>\n<h3 id=\"astro-add-command\"><code>astro add</code> command</h3>\n<p>Astro includes a CLI tool for adding first party integrations: <code>astro add</code>. This\ncommand will:</p>\n<ol>\n<li>(Optionally) Install all necessary dependencies and peer dependencies</li>\n<li>(Also optionally) Update your <code>astro.config.*</code> file to apply this integration</li>\n</ol>\n<p>To install <code>Compress</code>, run the following from your project directory and follow\nthe prompts:</p>\n<p>Using NPM:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sh\"><code><span class=\"line\"><span style=\"color:#B392F0\">npx</span><span style=\"color:#9ECBFF\"> astro</span><span style=\"color:#9ECBFF\"> add</span><span style=\"color:#9ECBFF\"> @playform/compress</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Using Yarn:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sh\"><code><span class=\"line\"><span style=\"color:#B392F0\">yarn</span><span style=\"color:#9ECBFF\"> astro</span><span style=\"color:#9ECBFF\"> add</span><span style=\"color:#9ECBFF\"> @playform/compress</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Using PNPM:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sh\"><code><span class=\"line\"><span style=\"color:#B392F0\">pnpx</span><span style=\"color:#9ECBFF\"> astro</span><span style=\"color:#9ECBFF\"> add</span><span style=\"color:#9ECBFF\"> @playform/compress</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"install-dependencies-manually\">Install dependencies manually</h3>\n<p>First, install the <code>Compress</code> integration like so:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sh\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#79B8FF\"> -D</span><span style=\"color:#79B8FF\"> -E</span><span style=\"color:#9ECBFF\"> @playform/compress</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Then, apply this integration to your <code>astro.config.*</code> file using the\n<code>integrations</code> property:</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">()],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"getting-started\">Getting started</h2>\n<p>The utility will now automatically compress all your CSS, HTML, SVG, JavaScript\nand image files in the Astro <code>outDir</code> folder.</p>\n<p>The following image file types will be compressed via <a href=\"HTTPS://NPMJS.Org/sharp\">sharp</a>:</p>\n<ul>\n<li>avci</li>\n<li>avcs</li>\n<li>avif</li>\n<li>avifs</li>\n<li>gif</li>\n<li>heic</li>\n<li>heics</li>\n<li>heif</li>\n<li>heifs</li>\n<li>jfif</li>\n<li>jif</li>\n<li>jpe</li>\n<li>jpeg</li>\n<li>jpg</li>\n<li>apng</li>\n<li>png</li>\n<li>raw</li>\n<li>tiff</li>\n<li>webp</li>\n</ul>\n<p>SVG compression is supported, as well via <a href=\"HTTPS://NPMJS.Org/svgo\">svgo</a>.</p>\n<h3 id=\"default-compression\">Default Compression</h3>\n<p>You can override any of the default options from the configurations of:</p>\n<ul>\n<li><a href=\"https://github.com/css/csso#minifysource-options\">csso</a></li>\n<li><a href=\"https://github.com/terser/html-minifier-terser#options-quick-reference\">html-minifier-terser</a></li>\n<li><a href=\"https://sharp.pixelplumbing.com/api-output#jpeg\">sharp</a></li>\n<li><a href=\"https://github.com/svg/svgo#configuration\">svgo</a></li>\n<li><a href=\"https://github.com/terser/terser#minify-options-structure\">terser</a></li>\n</ul>\n<p>or disable them entirely:</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tCSS: </span><span style=\"color:#79B8FF\">false</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tHTML: </span><span style=\"color:#79B8FF\">false</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tImage: </span><span style=\"color:#79B8FF\">false</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tJavaScript: </span><span style=\"color:#79B8FF\">false</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tSVG: </span><span style=\"color:#79B8FF\">false</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<p>You can see the full option map here:\n<a href=\"https://github.com/PlayForm/Compress/blob/main/Source/Interface/Option.ts\">Source/Interface/Option.ts</a></p>\n<h3 id=\"output\">Output</h3>\n<p>By default <code>Compress</code> compresses the <code>outDir</code> <code>Astro</code> directory, if you’d like\nit to compress a different directory you would have to add it to the <code>Compress</code>\n<code>Path</code> option, as well:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tPath: [</span><span style=\"color:#9ECBFF\">\"./dist\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"./Compress\"</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"add-multiple-paths\">Add Multiple Paths</h3>\n<p>You can add multiple paths to compress by specifying an array as the <code>Path</code>\nvariable.</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tPath: [</span><span style=\"color:#9ECBFF\">\"./Target\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"./Build\"</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"input-output-mapping\">Input-Output Mapping</h3>\n<p>You can also provide a map of paths for different input output directories.</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tPath: </span><span style=\"color:#F97583\">new</span><span style=\"color:#B392F0\"> Map</span><span style=\"color:#E1E4E8\">([[</span><span style=\"color:#9ECBFF\">\"./Source\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"./Target\"</span><span style=\"color:#E1E4E8\">]]),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Or an array of the two:</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tPath: [</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">\t\t\t\t// Compress Target</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">\t\t\t\t\"./Target\"</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">\t\t\t\t// Compress Target one more time into a different directory</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">\t\t\t\tnew</span><span style=\"color:#B392F0\"> Map</span><span style=\"color:#E1E4E8\">([[</span><span style=\"color:#9ECBFF\">\"./Target\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"./TargetCompress\"</span><span style=\"color:#E1E4E8\">]]),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"file-filtering\">File Filtering</h3>\n<p>You can filter files to exclude specific ones from compression. A filter can be\nan array of regular expressions or a single match. You can also use functions to\nmatch on file names:</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tExclude: [</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">\t\t\t\t\"File.png\"</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t\t(</span><span style=\"color:#FFAB70\">File</span><span style=\"color:#F97583\">:</span><span style=\"color:#79B8FF\"> string</span><span style=\"color:#E1E4E8\">) </span><span style=\"color:#F97583\">=></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t\t\tFile </span><span style=\"color:#F97583\">===</span><span style=\"color:#9ECBFF\"> \"./Target/Favicon/Image/safari-pinned-tab.svg\"</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"controlling-logging\">Controlling Logging</h3>\n<p>You can control the logging level by setting the <code>Logger</code> parameter. The default\nvalue is <code>2</code>, but you can set it to <code>0</code> if you don’t want to see debug messages:</p>\n<p><strong><code>astro.config.ts</code></strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tintegrations: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t(</span><span style=\"color:#F97583\">await</span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"@playform/compress\"</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">default</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\tLogger: </span><span style=\"color:#79B8FF\">0</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t}),</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"changelog\">Changelog</h2>\n<p>See <a href=\"CHANGELOG.md\">CHANGELOG.md</a> for a history of changes to this integration.</p>";

				const frontmatter = {};
				const file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Compress/README.md";
				const url = "/Raw/Readme/PlayForm/Compress/README";
				function rawContent() {
					return "# 🗜️ [Compress] —\n\nThis **[Astro integration][astro-integration]** brings compression utilities to\nyour Astro project.\n\n[CSS][csso] ⁄ [HTML][html-minifier-terser] ⁄ [JavaScript][terser] ⁄ [Image][sharp] ⁄ [SVG][svgo]\n\n> **Note**\n>\n> `Compress` will not compress your requests, only your statically generated\n> build and pre-rendered routes.\n\n> [!IMPORTANT]\n>\n> Use `Compress` last in your integration list for the best optimization.\n\n## Installation\n\nThere are two ways to add integrations to your project. Let's try the most\nconvenient option first!\n\n### `astro add` command\n\nAstro includes a CLI tool for adding first party integrations: `astro add`. This\ncommand will:\n\n1. (Optionally) Install all necessary dependencies and peer dependencies\n2. (Also optionally) Update your `astro.config.*` file to apply this integration\n\nTo install `Compress`, run the following from your project directory and follow\nthe prompts:\n\nUsing NPM:\n\n```sh\nnpx astro add @playform/compress\n```\n\nUsing Yarn:\n\n```sh\nyarn astro add @playform/compress\n```\n\nUsing PNPM:\n\n```sh\npnpx astro add @playform/compress\n```\n\n### Install dependencies manually\n\nFirst, install the `Compress` integration like so:\n\n```sh\nnpm install -D -E @playform/compress\n```\n\nThen, apply this integration to your `astro.config.*` file using the\n`integrations` property:\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [(await import(\"@playform/compress\")).default()],\n};\n```\n\n## Getting started\n\nThe utility will now automatically compress all your CSS, HTML, SVG, JavaScript\nand image files in the Astro `outDir` folder.\n\nThe following image file types will be compressed via [sharp]:\n\n-   avci\n-   avcs\n-   avif\n-   avifs\n-   gif\n-   heic\n-   heics\n-   heif\n-   heifs\n-   jfif\n-   jif\n-   jpe\n-   jpeg\n-   jpg\n-   apng\n-   png\n-   raw\n-   tiff\n-   webp\n\nSVG compression is supported, as well via [svgo].\n\n### Default Compression\n\nYou can override any of the default options from the configurations of:\n\n-   [csso](https://github.com/css/csso#minifysource-options)\n-   [html-minifier-terser](https://github.com/terser/html-minifier-terser#options-quick-reference)\n-   [sharp](https://sharp.pixelplumbing.com/api-output#jpeg)\n-   [svgo](https://github.com/svg/svgo#configuration)\n-   [terser](https://github.com/terser/terser#minify-options-structure)\n\nor disable them entirely:\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tCSS: false,\n\t\t\tHTML: false,\n\t\t\tImage: false,\n\t\t\tJavaScript: false,\n\t\t\tSVG: false,\n\t\t}),\n\t],\n};\n```\n\nYou can see the full option map here:\n[Source/Interface/Option.ts](https://github.com/PlayForm/Compress/blob/main/Source/Interface/Option.ts)\n\n### Output\n\nBy default `Compress` compresses the `outDir` `Astro` directory, if you'd like\nit to compress a different directory you would have to add it to the `Compress`\n`Path` option, as well:\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tPath: [\"./dist\", \"./Compress\"],\n\t\t}),\n\t],\n};\n```\n\n### Add Multiple Paths\n\nYou can add multiple paths to compress by specifying an array as the `Path`\nvariable.\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tPath: [\"./Target\", \"./Build\"],\n\t\t}),\n\t],\n};\n```\n\n### Input-Output Mapping\n\nYou can also provide a map of paths for different input output directories.\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tPath: new Map([[\"./Source\", \"./Target\"]]),\n\t\t}),\n\t],\n};\n```\n\nOr an array of the two:\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tPath: [\n\t\t\t\t// Compress Target\n\t\t\t\t\"./Target\",\n\t\t\t\t// Compress Target one more time into a different directory\n\t\t\t\tnew Map([[\"./Target\", \"./TargetCompress\"]]),\n\t\t\t],\n\t\t}),\n\t],\n};\n```\n\n### File Filtering\n\nYou can filter files to exclude specific ones from compression. A filter can be\nan array of regular expressions or a single match. You can also use functions to\nmatch on file names:\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tExclude: [\n\t\t\t\t\"File.png\",\n\t\t\t\t(File: string) =>\n\t\t\t\t\tFile === \"./Target/Favicon/Image/safari-pinned-tab.svg\",\n\t\t\t],\n\t\t}),\n\t],\n};\n```\n\n### Controlling Logging\n\nYou can control the logging level by setting the `Logger` parameter. The default\nvalue is `2`, but you can set it to `0` if you don't want to see debug messages:\n\n**`astro.config.ts`**\n\n```ts\nexport default {\n\tintegrations: [\n\t\t(await import(\"@playform/compress\")).default({\n\t\t\tLogger: 0,\n\t\t}),\n\t],\n};\n```\n\n[Compress]: HTTPS://NPMJS.Org/@playform/compress\n[csso]: HTTPS://NPMJS.Org/csso\n[html-minifier-terser]: HTTPS://NPMJS.Org/html-minifier-terser\n[terser]: HTTPS://NPMJS.Org/terser\n[sharp]: HTTPS://NPMJS.Org/sharp\n[svgo]: HTTPS://NPMJS.Org/svgo\n[astro-integration]: HTTPS://docs.astro.build/en/guides/integrations-guide/\n\n## Changelog\n\nSee [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"️compress","text":"🗜️ Compress —"},{"depth":2,"slug":"installation","text":"Installation"},{"depth":3,"slug":"astro-add-command","text":"astro add command"},{"depth":3,"slug":"install-dependencies-manually","text":"Install dependencies manually"},{"depth":2,"slug":"getting-started","text":"Getting started"},{"depth":3,"slug":"default-compression","text":"Default Compression"},{"depth":3,"slug":"output","text":"Output"},{"depth":3,"slug":"add-multiple-paths","text":"Add Multiple Paths"},{"depth":3,"slug":"input-output-mapping","text":"Input-Output Mapping"},{"depth":3,"slug":"file-filtering","text":"File Filtering"},{"depth":3,"slug":"controlling-logging","text":"Controlling Logging"},{"depth":2,"slug":"changelog","text":"Changelog"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=README_DeJtqX3l.mjs.map