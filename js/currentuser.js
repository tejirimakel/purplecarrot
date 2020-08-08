/*! For license information please see current_user-c4352d9baf7d40f752fe.js.LICENSE.txt */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/purplecarrot/",
    n(n.s = 1729)
}({
    1729: function(e, t, n) {
        window.currentUserData = n(9).default,
        window.doNotSell = n(1730).default
    },
    1730: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return i
        }
        ));
        var r = n(4)
          , o = n.n(r);
        function i(e) {
            o.a.get("do_not_sell") || e()
        }
    },
    4: function(e, t, n) {
        var r, o;
        !function(i) {
            if (void 0 === (o = "function" === typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o),
            !0,
            e.exports = i(),
            !!0) {
                var u = window.Cookies
                  , c = window.Cookies = i();
                c.noConflict = function() {
                    return window.Cookies = u,
                    c
                }
            }
        }((function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        t[r] = n[r]
                }
                return t
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function n(r) {
                function o() {}
                function i(t, n, i) {
                    if ("undefined" !== typeof document) {
                        "number" === typeof (i = e({
                            path: "/"
                        }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            var u = JSON.stringify(n);
                            /^[\{\[]/.test(u) && (n = u)
                        } catch (a) {}
                        n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var f in i)
                            i[f] && (c += "; " + f,
                            !0 !== i[f] && (c += "=" + i[f].split(";")[0]));
                        return document.cookie = t + "=" + n + c
                    }
                }
                function u(e, n) {
                    if ("undefined" !== typeof document) {
                        for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], u = 0; u < i.length; u++) {
                            var c = i[u].split("=")
                              , f = c.slice(1).join("=");
                            n || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                            try {
                                var a = t(c[0]);
                                if (f = (r.read || r)(f, a) || t(f),
                                n)
                                    try {
                                        f = JSON.parse(f)
                                    } catch (d) {}
                                if (o[a] = f,
                                e === a)
                                    break
                            } catch (d) {}
                        }
                        return e ? o[e] : o
                    }
                }
                return o.set = i,
                o.get = function(e) {
                    return u(e, !1)
                }
                ,
                o.getJSON = function(e) {
                    return u(e, !0)
                }
                ,
                o.remove = function(t, n) {
                    i(t, "", e(n, {
                        expires: -1
                    }))
                }
                ,
                o.defaults = {},
                o.withConverter = n,
                o
            }((function() {}
            ))
        }
        ))
    },
    9: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "JSONParseCookies", (function() {
            return u
        }
        ));
        var r, o = n(4), i = n.n(o);
        function u(e) {
            return i.a.get(e) ? ((r = r || JSON.parse(decodeURIComponent(i.a.get(e)))).do_not_sell = i.a.get("do_not_sell"),
            r) : void 0
        }
        t.default = u("data-current-user")
    }
});
//# sourceMappingURL=current_user-c4352d9baf7d40f752fe.js.map
