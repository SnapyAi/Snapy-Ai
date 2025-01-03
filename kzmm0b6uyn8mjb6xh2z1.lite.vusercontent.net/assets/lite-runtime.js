"use strict";
(() => {
    if (typeof window < "u") {
        let _ = function(n) {
                if (n.fullKey !== null) return n.fullKey;
                var r = n.ownKey,
                    e;
                try {
                    e = n.getCustomHooks()
                } catch {
                    return n.forceReset = !0, n.fullKey = r, r
                }
                for (var f = 0; f < e.length; f++) {
                    var i = e[f];
                    if (typeof i != "function") return n.forceReset = !0, n.fullKey = r, r;
                    var v = d.get(i);
                    if (v !== void 0) {
                        var u = _(v);
                        v.forceReset && (n.forceReset = !0), r += `
---
` + u
                    }
                }
                return n.fullKey = r, r
            },
            Q = function(n, r) {
                var e = d.get(n),
                    f = d.get(r);
                return e === void 0 && f === void 0 ? !0 : !(e === void 0 || f === void 0 || _(e) !== _(f) || f.forceReset)
            },
            C = function(n) {
                return n.prototype && n.prototype.isReactComponent
            },
            X = function(n, r) {
                return C(n) || C(r) ? !1 : !!Q(n, r)
            },
            q = function(n) {
                return Z.get(n)
            },
            W = function(n) {
                var r = new Map;
                return n.forEach(function(e, f) {
                    r.set(f, e)
                }), r
            },
            J = function(n) {
                var r = new Set;
                return n.forEach(function(e) {
                    r.add(e)
                }), r
            },
            S = function(n, r) {
                try {
                    return n[r]
                } catch {
                    return
                }
            },
            U = function() {
                if ($.length === 0 || O) return null;
                O = !0;
                try {
                    var n = new Set,
                        r = new Set,
                        e = $;
                    $ = [], e.forEach(function(c) {
                        var a = c[0],
                            h = c[1],
                            w = a.current;
                        Z.set(w, a), Z.set(h, a), a.current = h, X(w, h) ? r.add(a) : n.add(a)
                    });
                    var f = {
                        updatedFamilies: r,
                        staleFamilies: n
                    };
                    K.forEach(function(c) {
                        c.setRefreshHandler(q)
                    });
                    var i = !1,
                        v = null,
                        u = J(b),
                        t = J(l),
                        o = W(L);
                    if (u.forEach(function(c) {
                            var a = o.get(c);
                            if (a === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                            if (b.has(c), s !== null && s.has(c)) {
                                var h = s.get(c);
                                try {
                                    a.scheduleRoot(c, h)
                                } catch (w) {
                                    i || (i = !0, v = w)
                                }
                            }
                        }), t.forEach(function(c) {
                            var a = o.get(c);
                            if (a === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                            l.has(c);
                            try {
                                a.scheduleRefresh(c, f)
                            } catch (h) {
                                i || (i = !0, v = h)
                            }
                        }), i) throw v;
                    return f
                } finally {
                    O = !1
                }
            },
            j = function(n, r) {
                {
                    if (n === null || typeof n != "function" && typeof n != "object" || N.has(n)) return;
                    var e = x.get(r);
                    if (e === void 0 ? (e = {
                            current: n
                        }, x.set(r, e)) : $.push([e, n]), N.set(n, e), typeof n == "object" && n !== null) switch (S(n, "$$typeof")) {
                        case H:
                            j(n.render, r + "$render");
                            break;
                        case g:
                            j(n.type, r + "$type");
                            break
                    }
                }
            },
            z = function(n, r) {
                var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                    f = arguments.length > 3 ? arguments[3] : void 0;
                if (d.has(n) || d.set(n, {
                        forceReset: e,
                        ownKey: r,
                        fullKey: null,
                        getCustomHooks: f || function() {
                            return []
                        }
                    }), typeof n == "object" && n !== null) switch (S(n, "$$typeof")) {
                    case H:
                        z(n.render, r, e, f);
                        break;
                    case g:
                        z(n.type, r, e, f);
                        break
                }
            },
            A = function(n) {
                {
                    var r = d.get(n);
                    r !== void 0 && _(r)
                }
            },
            M = function(n) {
                return x.get(n)
            },
            k = function(n) {
                return N.get(n)
            },
            I = function(n) {
                {
                    var r = new Set;
                    return l.forEach(function(e) {
                        var f = L.get(e);
                        if (f === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                        var i = f.findHostInstancesForRefresh(e, n);
                        i.forEach(function(v) {
                            r.add(v)
                        })
                    }), r
                }
            },
            Y = function(n) {
                {
                    var r = n.__REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (r === void 0) {
                        var e = 0;
                        n.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                            renderers: new Map,
                            supportsFiber: !0,
                            inject: function(u) {
                                return e++
                            },
                            onScheduleFiberRoot: function(u, t, o) {},
                            onCommitFiberRoot: function(u, t, o, c) {},
                            onCommitFiberUnmount: function() {}
                        }
                    }
                    if (r.isDisabled) {
                        console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                        return
                    }
                    var f = r.inject;
                    r.inject = function(u) {
                        var t = f.apply(this, arguments);
                        return typeof u.scheduleRefresh == "function" && typeof u.setRefreshHandler == "function" && K.set(t, u), t
                    }, r.renderers.forEach(function(u, t) {
                        typeof u.scheduleRefresh == "function" && typeof u.setRefreshHandler == "function" && K.set(t, u)
                    });
                    var i = r.onCommitFiberRoot,
                        v = r.onScheduleFiberRoot || function() {};
                    r.onScheduleFiberRoot = function(u, t, o) {
                        return O || (b.delete(t), s !== null && s.set(t, o)), v.apply(this, arguments)
                    }, r.onCommitFiberRoot = function(u, t, o, c) {
                        var a = K.get(u);
                        if (a !== void 0) {
                            L.set(t, a);
                            var h = t.current,
                                w = h.alternate;
                            if (w !== null) {
                                var V = w.memoizedState != null && w.memoizedState.element != null && l.has(t),
                                    G = h.memoizedState != null && h.memoizedState.element != null;
                                !V && G ? (l.add(t), b.delete(t)) : V && G || (V && !G ? (l.delete(t), c ? b.add(t) : L.delete(t)) : !V && !G && c && b.add(t))
                            } else l.add(t)
                        }
                        return i.apply(this, arguments)
                    }
                }
            },
            p = function() {
                return !1
            },
            F = function() {
                return l.size
            },
            D = function() {
                {
                    var n, r, e = !1;
                    return function(f, i, v, u) {
                        if (typeof i == "string") return n || (n = f, r = typeof u == "function"), f != null && (typeof f == "function" || typeof f == "object") && z(f, i, v, u), f;
                        !e && r && (e = !0, A(n))
                    }
                }
            },
            P = function(n) {
                switch (typeof n) {
                    case "function":
                        {
                            if (n.prototype != null) {
                                if (n.prototype.isReactComponent) return !0;
                                var r = Object.getOwnPropertyNames(n.prototype);
                                if (r.length > 1 || r[0] !== "constructor" || n.prototype.__proto__ !== Object.prototype) return !1
                            }
                            var e = n.name || n.displayName;
                            return typeof e == "string" && /^[A-Z]/.test(e)
                        }
                    case "object":
                        {
                            if (n != null) switch (S(n, "$$typeof")) {
                                case H:
                                case g:
                                    return !0;
                                default:
                                    return !1
                            }
                            return !1
                        }
                    default:
                        return !1
                }
            };
        R = _, E = Q, T = C, B = X, y = q, nn = W, rn = J, en = S, fn = U, tn = j, un = z, cn = A, an = M, vn = k, hn = I, ln = Y, wn = p, on = F, dn = D, bn = P, H = Symbol.for("react.forward_ref"), g = Symbol.for("react.memo"), m = typeof WeakMap == "function" ? WeakMap : Map, x = new Map, N = new m, d = new m, Z = new m, $ = [], K = new Map, L = new Map, l = new Set, b = new Set, s = typeof WeakMap == "function" ? new WeakMap : null, O = !1, Y(window), window.__v0_$RefreshReg$ = () => {}, window.__v0_$RefreshSig$ = () => n => n, window.__v0_refreshRuntime = {
            register: j,
            createSignatureFunctionForTransform: D,
            performReactRefresh: U
        }
    }
    var H, g, m, x, N, d, Z, $, K, L, l, b, s, O, R, E, T, B, y, nn, rn, en, fn, tn, un, cn, an, vn, hn, ln, wn, on, dn, bn;
})();