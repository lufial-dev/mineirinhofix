! function() {
    function c(t, r) {
        let e = r.indexOf("#"),
            n = e === -1 ? r : r.substring(0, e),
            o = e === -1 ? "" : r.substring(e),
            a = n.indexOf("?");
        if (a === -1) return n + t + o;
        let d = new URLSearchParams(t),
            h = n.substring(a + 1),
            s = new URLSearchParams(h);
        for (let [i, m] of d) s.has(i) || s.append(i, m);
        return n.substring(0, a + 1) + s.toString() + o
    }
    var l = 'div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',
        u = "div#main a[data-framer-preserve-params]",
        f, g = (f = document.currentScript) == null ? void 0 : f.hasAttribute("data-preserve-internal-params");
    if (window.location.search && !/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)) {
        let t = document.querySelectorAll(g ? `${l},${u}` : u);
        for (let r of t) {
            let e = c(window.location.search, r.href);
            r.setAttribute("href", e)
        }
    }
}()