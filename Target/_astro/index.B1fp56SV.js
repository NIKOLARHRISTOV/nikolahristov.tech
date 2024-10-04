const d = new Set(),
	c = new WeakSet();
let f,
	p,
	l = !1;
function L(e) {
	l ||
		((l = !0),
		(f ??= e?.prefetchAll ?? !1),
		(p ??= e?.defaultStrategy ?? "hover"),
		m(),
		v(),
		g(),
		S());
}
function m() {
	for (const e of ["touchstart", "mousedown"])
		document.body.addEventListener(
			e,
			(t) => {
				i(t.target, "tap") &&
					s(t.target.href, { ignoreSlowConnection: !0 });
			},
			{ passive: !0 },
		);
}
function v() {
	let e;
	document.body.addEventListener(
		"focusin",
		(n) => {
			i(n.target, "hover") && t(n);
		},
		{ passive: !0 },
	),
		document.body.addEventListener("focusout", o, { passive: !0 }),
		u(() => {
			for (const n of document.getElementsByTagName("a"))
				c.has(n) ||
					(i(n, "hover") &&
						(c.add(n),
						n.addEventListener("mouseenter", t, { passive: !0 }),
						n.addEventListener("mouseleave", o, { passive: !0 })));
		});
	function t(n) {
		const r = n.target.href;
		e && clearTimeout(e),
			(e = setTimeout(() => {
				s(r);
			}, 80));
	}
	function o() {
		e && (clearTimeout(e), (e = 0));
	}
}
function g() {
	let e;
	u(() => {
		for (const t of document.getElementsByTagName("a"))
			c.has(t) ||
				(i(t, "viewport") && (c.add(t), (e ??= y()), e.observe(t)));
	});
}
function y() {
	const e = new WeakMap();
	return new IntersectionObserver((t, o) => {
		for (const n of t) {
			const r = n.target,
				a = e.get(r);
			n.isIntersecting
				? (a && clearTimeout(a),
					e.set(
						r,
						setTimeout(() => {
							o.unobserve(r), e.delete(r), s(r.href);
						}, 300),
					))
				: a && (clearTimeout(a), e.delete(r));
		}
	});
}
function S() {
	u(() => {
		for (const e of document.getElementsByTagName("a"))
			i(e, "load") && s(e.href);
	});
}
function s(e, t) {
	e = e.replace(/#.*/, "");
	const o = t?.ignoreSlowConnection ?? !1;
	if (w(e, o))
		if ((d.add(e), HTMLScriptElement.supports?.("speculationrules"))) E(e);
		else if (
			document.createElement("link").relList?.supports?.("prefetch") &&
			t?.with !== "fetch"
		) {
			const n = document.createElement("link");
			(n.rel = "prefetch"),
				n.setAttribute("href", e),
				document.head.append(n);
		} else fetch(e, { priority: "low" });
}
function w(e, t) {
	if (!navigator.onLine || (!t && h())) return !1;
	try {
		const o = new URL(e, location.href);
		return (
			location.origin === o.origin &&
			(location.pathname !== o.pathname ||
				location.search !== o.search) &&
			!d.has(e)
		);
	} catch {}
	return !1;
}
function i(e, t) {
	if (e?.tagName !== "A") return !1;
	const o = e.dataset.astroPrefetch;
	return o === "false"
		? !1
		: t === "tap" && (o != null || f) && h()
			? !0
			: (o == null && f) || o === ""
				? t === p
				: o === t;
}
function h() {
	if ("connection" in navigator) {
		const e = navigator.connection;
		return e.saveData || /2g/.test(e.effectiveType);
	}
	return !1;
}
function u(e) {
	e();
	let t = !1;
	document.addEventListener("astro:page-load", () => {
		if (!t) {
			t = !0;
			return;
		}
		e();
	});
}
function E(e) {
	const t = document.createElement("script");
	(t.type = "speculationrules"),
		(t.textContent = JSON.stringify({
			prerender: [{ source: "list", urls: [e] }],
			prefetch: [{ source: "list", urls: [e] }],
		})),
		document.head.append(t);
}
export { L as i };
//# sourceMappingURL=index.B1fp56SV.js.map
