function Carousel(e) {
        function u() {
            i = e.width(), r.each(function() {
                $(this).width(i)
            }), n.width(i * s)
        }

        function a(e, t) {
            n.removeClass("animate"), t && n.addClass("animate");
            if (Modernizr.csstransforms3d) n.css("transform", "translate3d(" + e + "%,0,0) scale3d(1,1,1)");
            else if (Modernizr.csstransforms) n.css("transform", "translate(" + e + "%,0)");
            else {
                var r = i * s / 100 * e;
                n.css("left", r + "px")
            }
            var img = $("li>div>img", n);
            img.css("transform", "scale(0.8,0.8)");
        }

        function f(e) {
            e.gesture.preventDefault();
            switch (e.type) {
                case "dragright":
                case "dragleft":
                    var n = -(100 / s) * o,
                        r = 100 / i * e.gesture.deltaX / s;
                    if (o == 0 && e.gesture.direction == Hammer.DIRECTION_RIGHT || o == s - 1 && e.gesture.direction == Hammer.DIRECTION_LEFT) r *= .4;
                    a(r + n);
                    break;
                case "swipeleft":
                    t.next(), e.gesture.stopDetect();
                    break;
                case "swiperight":
                    t.prev(), e.gesture.stopDetect();
                    break;
                case "release":
                    var u = Math.abs(e.gesture.deltaX);
                    u > i / 2 ? e.gesture.direction == "right" ? t.prev() : t.next() : u > 5 ? t.showPane(o, !0) : $(t).trigger("click")
            }
        }
        var t = this;
        e = $(e);
        var n = $(">ul", e),
            r = $(">ul>li", e),
            i = 0,
            s = r.length,
            o = 0;
        this.init = function() {
            u(), $(window).on("load resize orientationchange", function() {
                u()
            })
        }, this.resize = function() {
            u()
        }, this.showPane = function(e) {
            e = Math.max(0, Math.min(e, s - 1)), o = e;
            var t = -(100 / s * o);
            a(t, !0), $(this).trigger("pane", [e])
        }, this.next = function() {
            return this.showPane(o + 1, !0)
        }, this.prev = function() {
            return this.showPane(o - 1, !0)
        }, e.hammer({
            drag_lock_to_axis: !0
        }).on("release dragleft dragright swipeleft swiperight", f)
    }(function() {
        "use strict";
        var e = typeof window != "undefined" ? window : global;
        if (typeof e.require == "function") return;
        var t = {},
            n = {},
            r = function(e, t) {
                return {}.hasOwnProperty.call(e, t)
            },
            i = function(e, t) {
                var n = [],
                    r, i;
                /^\.\.?(\/|$)/.test(t) ? r = [e, t].join("/").split("/") : r = t.split("/");
                for (var s = 0, o = r.length; s < o; s++) i = r[s], i === ".." ? n.pop() : i !== "." && i !== "" && n.push(i);
                return n.join("/")
            },
            s = function(e) {
                return e.split("/").slice(0, -1).join("/")
            },
            o = function(t) {
                return function(n) {
                    var r = s(t),
                        o = i(r, n);
                    return e.require(o)
                }
            },
            u = function(e, t) {
                var r = {
                    id: e,
                    exports: {}
                };
                t(r.exports, o(e), r);
                var i = n[e] = r.exports;
                return i
            },
            a = function(e) {
                var s = i(e, ".");
                if (r(n, s)) return n[s];
                if (r(t, s)) return u(s, t[s]);
                var o = i(s, "./index");
                if (r(n, o)) return n[o];
                if (r(t, o)) return u(o, t[o]);
                throw new Error('Cannot find module "' + e + '"')
            },
            f = function(e) {
                for (var n in e) r(e, n) && (t[n] = e[n])
            };
        e.require = a, e.require.define = f, e.require.brunch = !0
    })(),
    function(e, t) {
        function _(e) {
            var t = M[e] = {};
            return v.each(e.split(y), function(e, n) {
                t[n] = !0
            }), t
        }

        function H(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(P, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                    } catch (s) {}
                    v.data(e, n, r)
                } else r = t
            }
            return r
        }

        function B(e) {
            var t;
            for (t in e) {
                if (t === "data" && v.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1
            }
            return !0
        }

        function et() {
            return !1
        }

        function tt() {
            return !0
        }

        function ut(e) {
            return !e || !e.parentNode || e.parentNode.nodeType === 11
        }

        function at(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e
        }

        function ft(e, t, n) {
            t = t || 0;
            if (v.isFunction(t)) return v.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return v.grep(e, function(e, r) {
                return e === t === n
            });
            if (typeof t == "string") {
                var r = v.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (it.test(t)) return v.filter(t, r, !n);
                t = v.filter(t, r)
            }
            return v.grep(e, function(e, r) {
                return v.inArray(e, t) >= 0 === n
            })
        }

        function lt(e) {
            var t = ct.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n
        }

        function Lt(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function At(e, t) {
            if (t.nodeType !== 1 || !v.hasData(e)) return;
            var n, r, i, s = v._data(e),
                o = v._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
            }
            o.data && (o.data = v.extend({}, o.data))
        }

        function Ot(e, t) {
            var n;
            if (t.nodeType !== 1) return;
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
        }

        function Mt(e) {
            return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
        }

        function _t(e) {
            Et.test(e.type) && (e.defaultChecked = e.checked)
        }

        function Qt(e, t) {
            if (t in e) return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = Jt.length;
            while (i--) {
                t = Jt[i] + n;
                if (t in e) return t
            }
            return r
        }

        function Gt(e, t) {
            return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
        }

        function Yt(e, t) {
            var n, r, i = [],
                s = 0,
                o = e.length;
            for (; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
            }
            for (s = 0; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
            }
            return e
        }

        function Zt(e, t, n) {
            var r = Rt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function en(e, t, n, r) {
            var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                s = 0;
            for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
            return s
        }

        function tn(e, t, n) {
            var r = t === "width" ? e.offsetWidth : e.offsetHeight,
                i = !0,
                s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
            if (r <= 0 || r == null) {
                r = Dt(e, t);
                if (r < 0 || r == null) r = e.style[t];
                if (Ut.test(r)) return r;
                i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
        }

        function nn(e) {
            if (Wt[e]) return Wt[e];
            var t = v("<" + e + ">").appendTo(i.body),
                n = t.css("display");
            t.remove();
            if (n === "none" || n === "") {
                Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
                t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
            }
            return Wt[e] = n, n
        }

        function fn(e, t, n, r) {
            var i;
            if (v.isArray(t)) v.each(t, function(t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
            else if (!n && v.type(t) === "object")
                for (i in t) fn(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }

        function Cn(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i, s, o = t.toLowerCase().split(y),
                    u = 0,
                    a = o.length;
                if (v.isFunction(n))
                    for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
            }
        }

        function kn(e, n, r, i, s, o) {
            s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
            var u, a = e[s],
                f = 0,
                l = a ? a.length : 0,
                c = e === Sn;
            for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
            return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
        }

        function Ln(e, n) {
            var r, i, s = v.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            i && v.extend(!0, e, i)
        }

        function An(e, n, r) {
            var i, s, o, u, a = e.contents,
                f = e.dataTypes,
                l = e.responseFields;
            for (s in l) s in r && (n[l[s]] = r[s]);
            while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break
                    }
            if (f[0] in r) o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break
                    }
                    u || (u = s)
                }
                o = o || u
            }
            if (o) return o !== f[0] && f.unshift(o), r[o]
        }

        function On(e, t) {
            var n, r, i, s, o = e.dataTypes.slice(),
                u = o[0],
                a = {},
                f = 0;
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (o[1])
                for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
            for (; i = o[++f];)
                if (i !== "*") {
                    if (u !== "*" && u !== i) {
                        n = a[u + " " + i] || a["* " + i];
                        if (!n)
                            for (r in a) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = a[u + " " + s[0]] || a["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                        break
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    u = i
                }
            return {
                state: "success",
                data: t
            }
        }

        function Fn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function In() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function $n() {
            return setTimeout(function() {
                qn = t
            }, 0), qn = v.now()
        }

        function Jn(e, t) {
            v.each(t, function(t, n) {
                var r = (Vn[t] || []).concat(Vn["*"]),
                    i = 0,
                    s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n)) return
            })
        }

        function Kn(e, t, n) {
            var r, i = 0,
                s = 0,
                o = Xn.length,
                u = v.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    var t = qn || $n(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = 1 - (n / f.duration || 0),
                        i = 0,
                        s = f.tweens.length;
                    for (; i < s; i++) f.tweens[i].run(r);
                    return u.notifyWith(e, [f, r, n]), r < 1 && s ? n : (u.resolveWith(e, [f]), !1)
                },
                f = u.promise({
                    elem: e,
                    props: v.extend({}, t),
                    opts: v.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: qn || $n(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n, r) {
                        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                    }
                }),
                l = f.props;
            Qn(l, f.opts.specialEasing);
            for (; i < o; i++) {
                r = Xn[i].call(f, e, l, f.opts);
                if (r) return r
            }
            return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
                anim: f,
                queue: f.opts.queue,
                elem: e
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        function Qn(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
                if (o && "expand" in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i)
                } else t[r] = i
            }
        }

        function Gn(e, t, n) {
            var r, i, s, o, u, a, f, l, c = this,
                h = e.style,
                p = {},
                d = [],
                m = e.nodeType && Gt(e);
            n.queue || (f = v._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function() {
                f.unqueued || l()
            }), f.unqueued++, c.always(function() {
                c.always(function() {
                    f.unqueued--, v.queue(e, "fx").length || f.empty.fire()
                })
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)), n.overflow && (h.overflow = "hidden", v.support.shrinkWrapBlocks || c.done(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (r in t) {
                s = t[r];
                if (Un.exec(s)) {
                    delete t[r];
                    if (s === (m ? "hide" : "show")) continue;
                    d.push(r)
                }
            }
            o = d.length;
            if (o) {
                u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), m ? v(e).show() : c.done(function() {
                    v(e).hide()
                }), c.done(function() {
                    var t;
                    v.removeData(e, "fxshow", !0);
                    for (t in p) v.style(e, t, p[t])
                });
                for (r = 0; r < o; r++) i = d[r], a = c.createTween(i, m ? u[i] : 0), p[i] = u[i] || v.style(e, i), i in u || (u[i] = a.start, m && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0))
            }
        }

        function Yn(e, t, n, r, i) {
            return new Yn.prototype.init(e, t, n, r, i)
        }

        function Zn(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function tr(e) {
            return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n, r, i = e.document,
            s = e.location,
            o = e.navigator,
            u = e.jQuery,
            a = e.$,
            f = Array.prototype.push,
            l = Array.prototype.slice,
            c = Array.prototype.indexOf,
            h = Object.prototype.toString,
            p = Object.prototype.hasOwnProperty,
            d = String.prototype.trim,
            v = function(e, t) {
                return new v.fn.init(e, t, n)
            },
            m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            g = /\S/,
            y = /\s+/,
            b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            S = /^[\],:{}\s]*$/,
            x = /(?:^|:|,)(?:\s*\[)+/g,
            T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            C = /^-ms-/,
            k = /-([\da-z])/gi,
            L = function(e, t) {
                return (t + "").toUpperCase()
            },
            A = function() {
                i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
            },
            O = {};
        v.fn = v.prototype = {
            constructor: v,
            init: function(e, n, r) {
                var s, o, u, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                    if (s && (s[1] || !n)) {
                        if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                        o = i.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = i, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var r = v.merge(this.constructor(), e);
                return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
            },
            each: function(e, t) {
                return v.each(this, e, t)
            },
            ready: function(e) {
                return v.ready.promise().done(e), this
            },
            eq: function(e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(v.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: [].sort,
            splice: [].splice
        }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i) continue;
                        l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                    }
                return u
        }, v.extend({
            noConflict: function(t) {
                return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? v.readyWait++ : v.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? --v.readyWait : v.isReady) return;
                if (!i.body) return setTimeout(v.ready, 1);
                v.isReady = !0;
                if (e !== !0 && --v.readyWait > 0) return;
                r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
            },
            isFunction: function(e) {
                return v.type(e) === "function"
            },
            isArray: Array.isArray || function(e) {
                return v.type(e) === "array"
            },
            isWindow: function(e) {
                return e != null && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return e == null ? String(e) : O[h.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
                try {
                    if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || p.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                var r;
                return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
            },
            parseJSON: function(t) {
                if (!t || typeof t != "string") return null;
                t = v.trim(t);
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
                v.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string") return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && g.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(C, "ms-").replace(k, L)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(e, n, r) {
                var i, s = 0,
                    o = e.length,
                    u = o === t || v.isFunction(e);
                if (r) {
                    if (u) {
                        for (i in e)
                            if (n.apply(e[i], r) === !1) break
                    } else
                        for (; s < o;)
                            if (n.apply(e[s++], r) === !1) break
                } else if (u) {
                    for (i in e)
                        if (n.call(e[i], i, e[i]) === !1) break
                } else
                    for (; s < o;)
                        if (n.call(e[s], s, e[s++]) === !1) break; return e
            },
            trim: d && !d.call("﻿ ") ? function(e) {
                return e == null ? "" : d.call(e)
            } : function(e) {
                return e == null ? "" : e.toString().replace(b, "")
            },
            makeArray: function(e, t) {
                var n, r = t || [];
                return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (c) return c.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if (typeof r == "number")
                    for (; s < r; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                n = !!n;
                for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, n, r) {
                var i, s, o = [],
                    u = 0,
                    a = e.length,
                    f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
                if (f)
                    for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
                else
                    for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
                return o.concat.apply([], o)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                    return e.apply(n, i.concat(l.call(arguments)))
                }, s.guid = e.guid = e.guid || s.guid || v.guid++, s) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a, f = r == null,
                    l = 0,
                    c = e.length;
                if (r && typeof r == "object") {
                    for (l in r) v.access(e, n, l, r[l], 1, o, i);
                    s = 1
                } else if (i !== t) {
                    a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                        return a.call(v(e), n)
                    }) : (n.call(e, i), n = null));
                    if (n)
                        for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                    s = 1
                }
                return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        }), v.ready.promise = function(t) {
            if (!r) {
                r = v.Deferred();
                if (i.readyState === "complete") setTimeout(v.ready, 1);
                else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
                else {
                    i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && i.documentElement
                    } catch (s) {}
                    n && n.doScroll && function o() {
                        if (!v.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            v.ready()
                        }
                    }()
                }
            }
            return r.promise(t)
        }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            O["[object " + t + "]"] = t.toLowerCase()
        }), n = v(i);
        var M = {};
        v.Callbacks = function(e) {
            e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
            var n, r, i, s, o, u, a = [],
                f = !e.once && [],
                l = function(t) {
                    n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                    for (; a && u < o; u++)
                        if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (a) {
                            var t = a.length;
                            (function r(t) {
                                v.each(t, function(t, n) {
                                    var i = v.type(n);
                                    i === "function" && (!e.unique || !c.has(n)) ? a.push(n) : n && n.length && i !== "string" && r(n)
                                })
                            })(arguments), i ? o = a.length : n && (s = t, l(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && v.each(arguments, function(e, t) {
                            var n;
                            while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                        }), this
                    },
                    has: function(e) {
                        return v.inArray(e, a) > -1
                    },
                    empty: function() {
                        return a = [], this
                    },
                    disable: function() {
                        return a = f = n = t, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return f = t, n || c.disable(), this
                    },
                    locked: function() {
                        return !f
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, v.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", v.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return v.Deferred(function(n) {
                                v.each(t, function(t, r) {
                                    var s = r[0],
                                        o = e[t];
                                    i[r[1]](v.isFunction(o) ? function() {
                                        var e = o.apply(this, arguments);
                                        e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                    } : n[s])
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return typeof e == "object" ? v.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, v.each(t, function(e, s) {
                    var o = s[2],
                        u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = 0,
                    n = l.call(arguments),
                    r = n.length,
                    i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                    s = i === 1 ? e : v.Deferred(),
                    o = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                        }
                    },
                    u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }
        }), v.support = function() {
            var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
            p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5";
            if (!n || !n.length || !r) return {};
            s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], t = {
                leadingWhitespace: p.firstChild.nodeType === 3,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: u.value === "on",
                optSelected: o.selected,
                getSetAttribute: p.className !== "t",
                enctype: !!i.createElement("form").enctype,
                html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: i.compatMode === "CSS1Compat",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete p.test
            } catch (d) {
                t.deleteExpando = !1
            }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
            if (p.attachEvent)
                for (l in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
            return v(function() {
                var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    a = i.getElementsByTagName("body")[0];
                if (!a) return;
                n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                    width: "4px"
                }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
            }), a.removeChild(p), n = r = s = o = u = a = p = null, t
        }();
        var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            P = /([A-Z])/g;
        v.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
            },
            data: function(e, n, r, i) {
                if (!v.acceptData(e)) return;
                var s, o, u = v.expando,
                    a = typeof n == "string",
                    f = e.nodeType,
                    l = f ? v.cache : e,
                    c = f ? e[u] : e[u] && u;
                if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
                c || (f ? e[u] = c = v.deletedIds.pop() || ++v.uuid : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
                if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
                return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
            },
            removeData: function(e, t, n) {
                if (!v.acceptData(e)) return;
                var r, i, s, o = e.nodeType,
                    u = o ? v.cache : e,
                    a = o ? e[v.expando] : v.expando;
                if (!u[a]) return;
                if (t) {
                    r = n ? u[a] : u[a].data;
                    if (r) {
                        v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? B : v.isEmptyObject)(r)) return
                    }
                }
                if (!n) {
                    delete u[a].data;
                    if (!B(u[a])) return
                }
                o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
            },
            _data: function(e, t, n) {
                return v.data(e, t, n, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), v.fn.extend({
            data: function(e, n) {
                var r, i, s, o, u, a = this[0],
                    f = 0,
                    l = null;
                if (e === t) {
                    if (this.length) {
                        l = v.data(a);
                        if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                            s = a.attributes;
                            for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") === 0 && (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                            v._data(a, "parsedAttrs", !0)
                        }
                    }
                    return l
                }
                return typeof e == "object" ? this.each(function() {
                    v.data(this, e)
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                    if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                    r[1] = n, this.each(function() {
                        var t = v(this);
                        t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                    })
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function(e) {
                return this.each(function() {
                    v.removeData(this, e)
                })
            }
        }), v.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = v.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = v._queueHooks(e, t),
                    o = function() {
                        v.dequeue(e, t)
                    };
                i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return v._data(e, n) || v._data(e, n, {
                    empty: v.Callbacks("once memory").add(function() {
                        v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                    })
                })
            }
        }), v.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = v.queue(this, e, n);
                    v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    v.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    s = v.Deferred(),
                    o = this,
                    u = this.length,
                    a = function() {
                        --i || s.resolveWith(o, [o])
                    };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n)
            }
        });
        var j, F, I, q = /[\t\r\n]/g,
            R = /\r/g,
            U = /^(?:button|input)$/i,
            z = /^(?:button|input|object|select|textarea)$/i,
            W = /^a(?:rea|)$/i,
            X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            V = v.support.getSetAttribute;
        v.fn.extend({
            attr: function(e, t) {
                return v.access(this, v.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    v.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return v.access(this, v.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = v.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, s, o, u;
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).addClass(e.call(this, t, this.className))
                });
                if (e && typeof e == "string") {
                    t = e.split(y);
                    for (n = 0, r = this.length; n < r; n++) {
                        i = this[n];
                        if (i.nodeType === 1)
                            if (!i.className && t.length === 1) i.className = e;
                            else {
                                s = " " + i.className + " ";
                                for (o = 0, u = t.length; o < u; o++) ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                                i.className = v.trim(s)
                            }
                    }
                }
                return this
            },
            removeClass: function(e) {
                var n, r, i, s, o, u, a;
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, this.className))
                });
                if (e && typeof e == "string" || e === t) {
                    n = (e || "").split(y);
                    for (u = 0, a = this.length; u < a; u++) {
                        i = this[u];
                        if (i.nodeType === 1 && i.className) {
                            r = (" " + i.className + " ").replace(q, " ");
                            for (s = 0, o = n.length; s < o; s++)
                                while (r.indexOf(" " + n[s] + " ") > -1) r = r.replace(" " + n[s] + " ", " ");
                            i.className = e ? v.trim(r) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = typeof t == "boolean";
                return v.isFunction(e) ? this.each(function(n) {
                    v(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if (n === "string") {
                        var i, s = 0,
                            o = v(this),
                            u = t,
                            a = e.split(y);
                        while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                    } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
                })
            },
            hasClass: function(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) > -1) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                    return
                }
                return i = v.isFunction(e), this.each(function(r) {
                    var s, o = v(this);
                    if (this.nodeType !== 1) return;
                    i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                        return e == null ? "" : e + ""
                    })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
                })
            }
        }), v.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i, s = e.selectedIndex,
                            o = [],
                            u = e.options,
                            a = e.type === "select-one";
                        if (s < 0) return null;
                        n = a ? s : 0, r = a ? s + 1 : u.length;
                        for (; n < r; n++) {
                            i = u[n];
                            if (i.selected && (v.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                                t = v(i).val();
                                if (a) return t;
                                o.push(t)
                            }
                        }
                        return a && !o.length && u.length ? v(u[s]).val() : o
                    },
                    set: function(e, t) {
                        var n = v.makeArray(t);
                        return v(e).find("option").each(function() {
                            this.selected = v.inArray(v(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {},
            attr: function(e, n, r, i) {
                var s, o, u, a = e.nodeType;
                if (!e || a === 3 || a === 8 || a === 2) return;
                if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
                if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
                u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
                if (r !== t) {
                    if (r === null) {
                        v.removeAttr(e, n);
                        return
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
            },
            removeAttr: function(e, t) {
                var n, r, i, s, o = 0;
                if (t && e.nodeType === 1) {
                    r = t.split(y);
                    for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                        else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), F = {
            get: function(e, n) {
                var r, i = v.prop(e, n);
                return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                var r;
                return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, V || (I = {
            name: !0,
            id: !0,
            coords: !0
        }, j = v.valHooks.button = {
            get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
            },
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
            }
        }, v.each(["width", "height"], function(e, t) {
            v.attrHooks[t] = v.extend(v.attrHooks[t], {
                set: function(e, n) {
                    if (n === "") return e.setAttribute(t, "auto"), n
                }
            })
        }), v.attrHooks.contenteditable = {
            get: j.get,
            set: function(e, t, n) {
                t === "" && (t = "false"), j.set(e, t, n)
            }
        }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
            v.attrHooks[n] = v.extend(v.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return r === null ? t : r
                }
            })
        }), v.support.style || (v.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = "" + t
            }
        }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        }), v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = v.extend(v.valHooks[this], {
                set: function(e, t) {
                    if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
                }
            })
        });
        var $ = /^(?:textarea|input|select)$/i,
            J = /^([^\.]*|)(?:\.(.+)|)$/,
            K = /(?:^|\s)hover(\.\S+|)\b/,
            Q = /^key/,
            G = /^(?:mouse|contextmenu)|click/,
            Y = /^(?:focusinfocus|focusoutblur)$/,
            Z = function(e) {
                return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
            };
        v.event = {
                add: function(e, n, r, i, s) {
                    var o, u, a, f, l, c, h, p, d, m, g;
                    if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                    r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                        return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), n = v.trim(Z(n)).split(" ");
                    for (f = 0; f < n.length; f++) {
                        l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                            type: c,
                            origType: l[1],
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: s,
                            namespace: h.join(".")
                        }, d), m = a[c];
                        if (!m) {
                            m = a[c] = [], m.delegateCount = 0;
                            if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                        }
                        g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                    }
                    e = null
                },
                global: {},
                remove: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                    if (!g || !(h = g.events)) return;
                    t = v.trim(Z(t || "")).split(" ");
                    for (s = 0; s < t.length; s++) {
                        o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                        if (!u) {
                            for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                            continue
                        }
                        p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                        d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                    }
                    v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(n, r, s, o) {
                    if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                        var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                            b = [];
                        if (Y.test(y + v.event.triggered)) return;
                        y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                        if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                        n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                        if (!s) {
                            u = v.cache;
                            for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                            return
                        }
                        n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                        if (p.trigger && p.trigger.apply(s, r) === !1) return;
                        m = [
                            [s, p.bindType || y]
                        ];
                        if (!o && !p.noBubble && !v.isWindow(s)) {
                            g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                            for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                            c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                        }
                        for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply(l, r) === !1 && n.preventDefault();
                        return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                    }
                    return
                },
                dispatch: function(n) {
                    n = v.event.fix(n || e.event);
                    var r, i, s, o, u, a, f, l, c, h, p = (v._data(this, "events") || {})[n.type] || [],
                        d = p.delegateCount,
                        m = [].slice.call(arguments),
                        g = !n.exclusive && !n.namespace,
                        y = v.event.special[n.type] || {},
                        b = [];
                    m[0] = n, n.delegateTarget = this;
                    if (y.preDispatch && y.preDispatch.call(this, n) === !1) return;
                    if (d && (!n.button || n.type !== "click"))
                        for (s = n.target; s != this; s = s.parentNode || this)
                            if (s.disabled !== !0 || n.type !== "click") {
                                u = {}, f = [];
                                for (r = 0; r < d; r++) l = p[r], c = l.selector, u[c] === t && (u[c] = v(c, this).index(s) >= 0), u[c] && f.push(l);
                                f.length && b.push({
                                    elem: s,
                                    matches: f
                                })
                            }
                    p.length > d && b.push({
                        elem: this,
                        matches: p.slice(d)
                    });
                    for (r = 0; r < b.length && !n.isPropagationStopped(); r++) {
                        a = b[r], n.currentTarget = a.elem;
                        for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                            l = a.matches[i];
                            if (g || !n.namespace && !l.namespace || n.namespace_re && n.namespace_re.test(l.namespace)) n.data = l.data, n.handleObj = l, o = ((v.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, m), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                        }
                    }
                    return y.postDispatch && y.postDispatch.call(this, n), n.result
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var r, s, o, u = n.button,
                            a = n.fromElement;
                        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[v.expando]) return e;
                    var t, n, r = e,
                        s = v.event.fixHooks[e.type] || {},
                        o = s.props ? this.props.concat(s.props) : this.props;
                    e = v.Event(r);
                    for (t = o.length; t;) n = o[--t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(e, t, n) {
                            v.isWindow(this) && (this.onbeforeunload = n)
                        },
                        teardown: function(e, t) {
                            this.onbeforeunload === t && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = v.extend(new v.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
            }, v.Event = function(e, t) {
                if (!(this instanceof v.Event)) return new v.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
            }, v.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = tt;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function() {
                    this.isPropagationStopped = tt;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = tt, this.stopPropagation()
                },
                isDefaultPrevented: et,
                isPropagationStopped: et,
                isImmediatePropagationStopped: et
            }, v.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                v.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj,
                            o = s.selector;
                        if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n
                    }
                }
            }), v.support.submitBubbles || (v.event.special.submit = {
                setup: function() {
                    if (v.nodeName(this, "form")) return !1;
                    v.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                        r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), v._data(r, "_submit_attached", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    if (v.nodeName(this, "form")) return !1;
                    v.event.remove(this, "._submit")
                }
            }), v.support.changeBubbles || (v.event.special.change = {
                setup: function() {
                    if ($.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), v.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                        });
                        return !1
                    }
                    v.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                        }), v._data(t, "_change_attached", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return v.event.remove(this, "._change"), !$.test(this.nodeName)
                }
            }), v.support.focusinBubbles || v.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    r = function(e) {
                        v.event.simulate(t, e.target, v.event.fix(e), !0)
                    };
                v.event.special[t] = {
                    setup: function() {
                        n++ === 0 && i.addEventListener(e, r, !0)
                    },
                    teardown: function() {
                        --n === 0 && i.removeEventListener(e, r, !0)
                    }
                }
            }), v.fn.extend({
                on: function(e, n, r, i, s) {
                    var o, u;
                    if (typeof e == "object") {
                        typeof n != "string" && (r = r || n, n = t);
                        for (u in e) this.on(u, n, r, e[u], s);
                        return this
                    }
                    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                    if (i === !1) i = et;
                    else if (!i) return this;
                    return s === 1 && (o = i, i = function(e) {
                        return v().off(e), o.apply(this, arguments)
                    }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                        v.event.add(this, e, i, r, n)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if (typeof e == "object") {
                        for (s in e) this.off(s, n, e[s]);
                        return this
                    }
                    if (n === !1 || typeof n == "function") r = n, n = t;
                    return r === !1 && (r = et), this.each(function() {
                        v.event.remove(this, e, r, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                live: function(e, t, n) {
                    return v(this.context).on(e, this.selector, t, n), this
                },
                die: function(e, t) {
                    return v(this.context).off(e, this.selector || "**", t), this
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return arguments.length == 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        v.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    if (this[0]) return v.event.trigger(e, t, this[0], !0)
                },
                toggle: function(e) {
                    var t = arguments,
                        n = e.guid || v.guid++,
                        r = 0,
                        i = function(n) {
                            var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                            return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                        };
                    i.guid = n;
                    while (r < t.length) t[r++].guid = n;
                    return this.click(i)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                v.fn[t] = function(e, n) {
                    return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
            }),
            function(e, t) {
                function Y(e, t, n, r) {
                    n = n || [], t = t || m;
                    var i, s, o, f, l = t.nodeType;
                    if (l !== 1 && l !== 9) return [];
                    if (!e || typeof e != "string") return n;
                    o = u(t);
                    if (!o && !r)
                        if (i = j.exec(e))
                            if (f = i[1]) {
                                if (l === 9) {
                                    s = t.getElementById(f);
                                    if (!s || !s.parentNode) return n;
                                    if (s.id === f) return n.push(s), n
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && a(t, s) && s.id === f) return n.push(s), n
                            } else {
                                if (i[2]) return w.apply(n, b.call(t.getElementsByTagName(e), 0)), n;
                                if ((f = i[3]) && K && t.getElementsByClassName) return w.apply(n, b.call(t.getElementsByClassName(f), 0)), n
                            }
                    return lt(e, t, n, r, o)
                }

                function Z(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function et(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function tt(e, t, n) {
                    if (e === t) return n;
                    var r = e.nextSibling;
                    while (r) {
                        if (r === t) return -1;
                        r = r.nextSibling
                    }
                    return 1
                }

                function nt(e, t, n, r) {
                    var i, o, u, a, f, l, c, h, p, v, g = !n && t !== m,
                        y = (g ? "<s>" : "") + e.replace(D, "$1<s>"),
                        w = T[d][y];
                    if (w) return r ? 0 : b.call(w, 0);
                    f = e, l = [], h = 0, p = s.preFilter, v = s.filter;
                    while (f) {
                        if (!i || (o = P.exec(f))) o && (f = f.slice(o[0].length), u.selector = c), l.push(u = []), c = "", g && (f = " " + f);
                        i = !1;
                        if (o = H.exec(f)) c += o[0], f = f.slice(o[0].length), i = u.push({
                            part: o.pop().replace(D, " "),
                            string: o[0],
                            captures: o
                        });
                        for (a in v)(o = W[a].exec(f)) && (!p[a] || (o = p[a](o, t, n))) && (c += o[0], f = f.slice(o[0].length), i = u.push({
                            part: a,
                            string: o.shift(),
                            captures: o
                        }));
                        if (!i) break
                    }
                    return c && (u.selector = c), r ? f.length : f ? Y.error(e) : b.call(T(y, l), 0)
                }

                function rt(e, t, i, s) {
                    var o = t.dir,
                        u = y++;
                    return e || (e = function(e) {
                        return e === i
                    }), t.first ? function(t) {
                        while (t = t[o])
                            if (t.nodeType === 1) return e(t) && t
                    } : s ? function(t) {
                        while (t = t[o])
                            if (t.nodeType === 1 && e(t)) return t
                    } : function(t) {
                        var i, s = u + "." + n,
                            a = s + "." + r;
                        while (t = t[o])
                            if (t.nodeType === 1) {
                                if ((i = t[d]) === a) return t.sizset;
                                if (typeof i == "string" && i.indexOf(s) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = a;
                                    if (e(t)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    }
                }

                function it(e, t) {
                    return e ? function(n) {
                        var r = t(n);
                        return r && e(r === !0 ? n : r)
                    } : t
                }

                function st(e, t, n) {
                    var r, i, o = 0;
                    for (; r = e[o]; o++) s.relative[r.part] ? i = rt(i, s.relative[r.part], t, n) : i = it(i, s.filter[r.part].apply(null, r.captures.concat(t, n)));
                    return i
                }

                function ot(e) {
                    return function(t) {
                        var n, r = 0;
                        for (; n = e[r]; r++)
                            if (n(t)) return !0;
                        return !1
                    }
                }

                function ut(e, t, n, r) {
                    var i = 0,
                        s = t.length;
                    for (; i < s; i++) Y(e, t[i], n, r)
                }

                function at(e, t, n, r, i, o) {
                    var u, a = s.setFilters[t.toLowerCase()];
                    return a || Y.error(t), (e || !(u = i)) && ut(e || "*", r, u = [], i), u.length > 0 ? a(u, n, o) : []
                }

                function ft(e, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, v, m, g, y = 0,
                        b = e.length,
                        E = W.POS,
                        S = new RegExp("^" + E.source + "(?!" + C + ")", "i"),
                        x = function() {
                            var e = 1,
                                n = arguments.length - 2;
                            for (; e < n; e++) arguments[e] === t && (p[e] = t)
                        };
                    for (; y < b; y++) {
                        s = e[y], o = "", h = i;
                        for (u = 0, a = s.length; u < a; u++) {
                            f = s[u], l = f.string;
                            if (f.part === "PSEUDO") {
                                E.exec(""), c = 0;
                                while (p = E.exec(l)) {
                                    d = !0, v = E.lastIndex = p.index + p[0].length;
                                    if (v > c) {
                                        o += l.slice(c, p.index), c = v, m = [n], H.test(o) && (h && (m = h), h = i);
                                        if (g = q.test(o)) o = o.slice(0, -5).replace(H, "$&*"), c++;
                                        p.length > 1 && p[0].replace(S, x), h = at(o, p[1], p[2], m, h, g)
                                    }
                                    o = ""
                                }
                            }
                            d || (o += l), d = !1
                        }
                        o ? H.test(o) ? ut(o, h || [n], r, i) : Y(o, n, r, i ? i.concat(h) : h) : w.apply(r, h)
                    }
                    return b === 1 ? r : Y.uniqueSort(r)
                }

                function lt(e, t, i, o, u) {
                    e = e.replace(D, "$1");
                    var a, l, c, h, p, d, v, m, g, y, E = nt(e, t, u),
                        S = t.nodeType;
                    if (W.POS.test(e)) return ft(E, t, i, o);
                    if (o) a = b.call(o, 0);
                    else if (E.length === 1) {
                        if ((d = b.call(E[0], 0)).length > 2 && (v = d[0]).part === "ID" && S === 9 && !u && s.relative[d[1].part]) {
                            t = s.find.ID(v.captures[0].replace(z, ""), t, u)[0];
                            if (!t) return i;
                            e = e.slice(d.shift().string.length)
                        }
                        g = (E = I.exec(d[0].string)) && !E.index && t.parentNode || t, m = "";
                        for (p = d.length - 1; p >= 0; p--) {
                            v = d[p], y = v.part, m = v.string + m;
                            if (s.relative[y]) break;
                            if (s.order.test(y)) {
                                a = s.find[y](v.captures[0].replace(z, ""), g, u);
                                if (a == null) continue;
                                e = e.slice(0, e.length - m.length) + m.replace(W[y], ""), e || w.apply(i, b.call(a, 0));
                                break
                            }
                        }
                    }
                    if (e) {
                        l = f(e, t, u), n = l.dirruns++, a == null && (a = s.find.TAG("*", I.test(e) && t.parentNode || t));
                        for (p = 0; h = a[p]; p++) r = l.runs++, l(h) && i.push(h)
                    }
                    return i
                }
                var n, r, i, s, o, u, a, f, l, c, h = !0,
                    p = "undefined",
                    d = ("sizcache" + Math.random()).replace(".", ""),
                    m = e.document,
                    g = m.documentElement,
                    y = 0,
                    b = [].slice,
                    w = [].push,
                    E = function(e, t) {
                        return e[d] = t || !0, e
                    },
                    S = function() {
                        var e = {},
                            t = [];
                        return E(function(n, r) {
                            return t.push(n) > s.cacheLength && delete e[t.shift()], e[n] = r
                        }, e)
                    },
                    x = S(),
                    T = S(),
                    N = S(),
                    C = "[\\x20\\t\\r\\n\\f]",
                    k = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    L = k.replace("w", "w#"),
                    A = "([*^$|!~]?=)",
                    O = "\\[" + C + "*(" + k + ")" + C + "*(?:" + A + C + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + L + ")|)|)" + C + "*\\]",
                    M = ":(" + k + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + O + ")|[^:]|\\\\.)*|.*))\\)|)",
                    _ = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
                    D = new RegExp("^" + C + "+|((?:^|[^\\\\])(?:\\\\.)*)" + C + "+$", "g"),
                    P = new RegExp("^" + C + "*," + C + "*"),
                    H = new RegExp("^" + C + "*([\\x20\\t\\r\\n\\f>+~])" + C + "*"),
                    B = new RegExp(M),
                    j = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    F = /^:not/,
                    I = /[\x20\t\r\n\f]*[+~]/,
                    q = /:not\($/,
                    R = /h\d/i,
                    U = /input|select|textarea|button/i,
                    z = /\\(?!\\)/g,
                    W = {
                        ID: new RegExp("^#(" + k + ")"),
                        CLASS: new RegExp("^\\.(" + k + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + k + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + k.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + O),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + C + "*(even|odd|(([+-]|)(\\d*)n|)" + C + "*(?:([+-]|)" + C + "*(\\d+)|))" + C + "*\\)|)", "i"),
                        POS: new RegExp(_, "ig"),
                        needsContext: new RegExp("^" + C + "*[>+~]|" + _, "i")
                    },
                    X = function(e) {
                        var t = m.createElement("div");
                        try {
                            return e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t = null
                        }
                    },
                    V = X(function(e) {
                        return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
                    }),
                    $ = X(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                    }),
                    J = X(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string"
                    }),
                    K = X(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                    }),
                    Q = X(function(e) {
                        e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", g.insertBefore(e, g.firstChild);
                        var t = m.getElementsByName && m.getElementsByName(d).length === 2 + m.getElementsByName(d + 0).length;
                        return i = !m.getElementById(d), g.removeChild(e), t
                    });
                try {
                    b.call(g.childNodes, 0)[0].nodeType
                } catch (G) {
                    b = function(e) {
                        var t, n = [];
                        for (; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                Y.matches = function(e, t) {
                    return Y(e, null, null, t)
                }, Y.matchesSelector = function(e, t) {
                    return Y(t, null, null, [e]).length > 0
                }, o = Y.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (i === 1 || i === 9 || i === 11) {
                            if (typeof e.textContent == "string") return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (i === 3 || i === 4) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += o(t);
                    return n
                }, u = Y.isXML = function(t) {
                    var n = t && (t.ownerDocument || t).documentElement;
                    return n ? n.nodeName !== "HTML" : !1
                }, a = Y.contains = g.contains ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
                } : g.compareDocumentPosition ? function(e, t) {
                    return t && !!(e.compareDocumentPosition(t) & 16)
                } : function(e, t) {
                    while (t = t.parentNode)
                        if (t === e) return !0;
                    return !1
                }, Y.attr = function(e, t) {
                    var n, r = u(e);
                    return r || (t = t.toLowerCase()), s.attrHandle[t] ? s.attrHandle[t](e) : J || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
                }, s = Y.selectors = {
                    cacheLength: 50,
                    createPseudo: E,
                    match: W,
                    order: new RegExp("ID|TAG" + (Q ? "|NAME" : "") + (K ? "|CLASS" : "")),
                    attrHandle: $ ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    find: {
                        ID: i ? function(e, t, n) {
                            if (typeof t.getElementById !== p && !n) {
                                var r = t.getElementById(e);
                                return r && r.parentNode ? [r] : []
                            }
                        } : function(e, n, r) {
                            if (typeof n.getElementById !== p && !r) {
                                var i = n.getElementById(e);
                                return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                            }
                        },
                        TAG: V ? function(e, t) {
                            if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if (e === "*") {
                                var r, i = [],
                                    s = 0;
                                for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                                return i
                            }
                            return n
                        },
                        NAME: function(e, t) {
                            if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                        },
                        CLASS: function(e, t, n) {
                            if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(z, ""), e[3] = (e[4] || e[5] || "").replace(z, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || Y.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && Y.error(e[0]), e
                        },
                        PSEUDO: function(e, t, n) {
                            var r, i;
                            if (W.CHILD.test(e[0])) return null;
                            if (e[3]) e[2] = e[3];
                            else if (r = e[4]) B.test(r) && (i = nt(r, t, n, !0)) && (i = r.indexOf(")", r.length - i) - r.length) && (r = r.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = r;
                            return e.slice(0, 3)
                        }
                    },
                    filter: {
                        ID: i ? function(e) {
                            return e = e.replace(z, ""),
                                function(t) {
                                    return t.getAttribute("id") === e
                                }
                        } : function(e) {
                            return e = e.replace(z, ""),
                                function(t) {
                                    var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                        },
                        TAG: function(e) {
                            return e === "*" ? function() {
                                return !0
                            } : (e = e.replace(z, "").toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = x[d][e];
                            return t || (t = x(e, new RegExp("(^|" + C + ")" + e + "(" + C + "|$)"))),
                                function(e) {
                                    return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(e, t, n) {
                            return t ? function(r) {
                                var i = Y.attr(r, e),
                                    s = i + "";
                                if (i == null) return t === "!=";
                                switch (t) {
                                    case "=":
                                        return s === n;
                                    case "!=":
                                        return s !== n;
                                    case "^=":
                                        return n && s.indexOf(n) === 0;
                                    case "*=":
                                        return n && s.indexOf(n) > -1;
                                    case "$=":
                                        return n && s.substr(s.length - n.length) === n;
                                    case "~=":
                                        return (" " + s + " ").indexOf(n) > -1;
                                    case "|=":
                                        return s === n || s.substr(0, n.length + 1) === n + "-"
                                }
                            } : function(t) {
                                return Y.attr(t, e) != null
                            }
                        },
                        CHILD: function(e, t, n, r) {
                            if (e === "nth") {
                                var i = y++;
                                return function(e) {
                                    var t, s, o = 0,
                                        u = e;
                                    if (n === 1 && r === 0) return !0;
                                    t = e.parentNode;
                                    if (t && (t[d] !== i || !e.sizset)) {
                                        for (u = t.firstChild; u; u = u.nextSibling)
                                            if (u.nodeType === 1) {
                                                u.sizset = ++o;
                                                if (u === e) break
                                            }
                                        t[d] = i
                                    }
                                    return s = e.sizset - r, n === 0 ? s === 0 : s % n === 0 && s / n >= 0
                                }
                            }
                            return function(t) {
                                var n = t;
                                switch (e) {
                                    case "only":
                                    case "first":
                                        while (n = n.previousSibling)
                                            if (n.nodeType === 1) return !1;
                                        if (e === "first") return !0;
                                        n = t;
                                    case "last":
                                        while (n = n.nextSibling)
                                            if (n.nodeType === 1) return !1;
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(e, t, n, r) {
                            var i, o = s.pseudos[e] || s.pseudos[e.toLowerCase()];
                            return o || Y.error("unsupported pseudo: " + e), o[d] ? o(t, n, r) : o.length > 1 ? (i = [e, e, "", t], function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: E(function(e, t, n) {
                            var r = f(e.replace(D, "$1"), t, n);
                            return function(e) {
                                return !r(e)
                            }
                        }),
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !s.pseudos.empty(e)
                        },
                        empty: function(e) {
                            var t;
                            e = e.firstChild;
                            while (e) {
                                if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                                e = e.nextSibling
                            }
                            return !0
                        },
                        contains: E(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                        }),
                        has: E(function(e) {
                            return function(t) {
                                return Y(e, t).length > 0
                            }
                        }),
                        header: function(e) {
                            return R.test(e.nodeName)
                        },
                        text: function(e) {
                            var t, n;
                            return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                        },
                        radio: Z("radio"),
                        checkbox: Z("checkbox"),
                        file: Z("file"),
                        password: Z("password"),
                        image: Z("image"),
                        submit: et("submit"),
                        reset: et("reset"),
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        input: function(e) {
                            return U.test(e.nodeName)
                        },
                        focus: function(e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href)
                        },
                        active: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t, n) {
                            return n ? e.slice(1) : [e[0]]
                        },
                        last: function(e, t, n) {
                            var r = e.pop();
                            return n ? e : [r]
                        },
                        even: function(e, t, n) {
                            var r = [],
                                i = n ? 1 : 0,
                                s = e.length;
                            for (; i < s; i += 2) r.push(e[i]);
                            return r
                        },
                        odd: function(e, t, n) {
                            var r = [],
                                i = n ? 0 : 1,
                                s = e.length;
                            for (; i < s; i += 2) r.push(e[i]);
                            return r
                        },
                        lt: function(e, t, n) {
                            return n ? e.slice(+t) : e.slice(0, +t)
                        },
                        gt: function(e, t, n) {
                            return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                        },
                        eq: function(e, t, n) {
                            var r = e.splice(+t, 1);
                            return n ? e : r
                        }
                    }
                }, l = g.compareDocumentPosition ? function(e, t) {
                    return e === t ? (c = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        s = [],
                        o = e.parentNode,
                        u = t.parentNode,
                        a = o;
                    if (o === u) return tt(e, t);
                    if (!o) return -1;
                    if (!u) return 1;
                    while (a) i.unshift(a), a = a.parentNode;
                    a = u;
                    while (a) s.unshift(a), a = a.parentNode;
                    n = i.length, r = s.length;
                    for (var f = 0; f < n && f < r; f++)
                        if (i[f] !== s[f]) return tt(i[f], s[f]);
                    return f === n ? tt(e, s[f], -1) : tt(i[f], t, 1)
                }, [0, 0].sort(l), h = !c, Y.uniqueSort = function(e) {
                    var t, n = 1;
                    c = h, e.sort(l);
                    if (c)
                        for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                    return e
                }, Y.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, f = Y.compile = function(e, t, n) {
                    var r, i, s, o = N[d][e];
                    if (o && o.context === t) return o;
                    r = nt(e, t, n);
                    for (i = 0, s = r.length; i < s; i++) r[i] = st(r[i], t, n);
                    return o = N(e, ot(r)), o.context = t, o.runs = o.dirruns = 0, o
                }, m.querySelectorAll && function() {
                    var e, t = lt,
                        n = /'|\\/g,
                        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        i = [],
                        s = [":active"],
                        o = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.oMatchesSelector || g.msMatchesSelector;
                    X(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + C + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                    }), X(function(e) {
                        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + C + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                    }), i = i.length && new RegExp(i.join("|")), lt = function(e, r, s, o, u) {
                        if (!o && !u && (!i || !i.test(e)))
                            if (r.nodeType === 9) try {
                                return w.apply(s, b.call(r.querySelectorAll(e), 0)), s
                            } catch (a) {} else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                                var f, l, c, h = r.getAttribute("id"),
                                    p = h || d,
                                    v = I.test(e) && r.parentNode || r;
                                h ? p = p.replace(n, "\\$&") : r.setAttribute("id", p), f = nt(e, r, u), p = "[id='" + p + "']";
                                for (l = 0, c = f.length; l < c; l++) f[l] = p + f[l].selector;
                                try {
                                    return w.apply(s, b.call(v.querySelectorAll(f.join(",")), 0)), s
                                } catch (a) {} finally {
                                    h || r.removeAttribute("id")
                                }
                            }
                        return t(e, r, s, o, u)
                    }, o && (X(function(t) {
                        e = o.call(t, "div");
                        try {
                            o.call(t, "[test!='']:sizzle"), s.push(W.PSEUDO.source, W.POS.source, "!=")
                        } catch (n) {}
                    }), s = new RegExp(s.join("|")), Y.matchesSelector = function(t, n) {
                        n = n.replace(r, "='$1']");
                        if (!u(t) && !s.test(n) && (!i || !i.test(n))) try {
                            var a = o.call(t, n);
                            if (a || e || t.document && t.document.nodeType !== 11) return a
                        } catch (f) {}
                        return Y(n, null, null, [t]).length > 0
                    })
                }(), s.setFilters.nth = s.setFilters.eq, s.filters = s.pseudos, Y.attr = v.attr, v.find = Y, v.expr = Y.selectors, v.expr[":"] = v.expr.pseudos, v.unique = Y.uniqueSort, v.text = Y.getText, v.isXMLDoc = Y.isXML, v.contains = Y.contains
            }(e);
        var nt = /Until$/,
            rt = /^(?:parents|prev(?:Until|All))/,
            it = /^.[^:#\[\.,]*$/,
            st = v.expr.match.needsContext,
            ot = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        v.fn.extend({
            find: function(e) {
                var t, n, r, i, s, o, u = this;
                if (typeof e != "string") return v(e).filter(function() {
                    for (t = 0, n = u.length; t < n; t++)
                        if (v.contains(u[t], this)) return !0
                });
                o = this.pushStack("", "find", e);
                for (t = 0, n = this.length; t < n; t++) {
                    r = o.length, v.find(e, this[t], o);
                    if (t > 0)
                        for (i = r; i < o.length; i++)
                            for (s = 0; s < r; s++)
                                if (o[s] === o[i]) {
                                    o.splice(i--, 1);
                                    break
                                }
                }
                return o
            },
            has: function(e) {
                var t, n = v(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (v.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(ft(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(ft(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    s = [],
                    o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
                for (; r < i; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                            s.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
            },
            index: function(e) {
                return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                    r = v.merge(this.get(), n);
                return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        }), v.fn.andSelf = v.fn.addBack, v.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return v.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return v.dir(e, "parentNode", n)
            },
            next: function(e) {
                return at(e, "nextSibling")
            },
            prev: function(e) {
                return at(e, "previousSibling")
            },
            nextAll: function(e) {
                return v.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return v.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return v.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return v.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return v.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return v.sibling(e.firstChild)
            },
            contents: function(e) {
                return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
            }
        }, function(e, t) {
            v.fn[e] = function(n, r) {
                var i = v.map(this, t, n);
                return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
            }
        }), v.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
            },
            dir: function(e, n, r) {
                var i = [],
                    s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
                return i
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ht = / jQuery\d+="(?:null|\d+)"/g,
            pt = /^\s+/,
            dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            vt = /<([\w:]+)/,
            mt = /<tbody/i,
            gt = /<|&#?\w+;/,
            yt = /<(?:script|style|link)/i,
            bt = /<(?:script|object|embed|option|style)/i,
            wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
            Et = /^(?:checkbox|radio)$/,
            St = /checked\s*(?:[^=]|=\s*.checked.)/i,
            xt = /\/(java|ecma)script/i,
            Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Nt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            Ct = lt(i),
            kt = Ct.appendChild(i.createElement("div"));
        Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
                text: function(e) {
                    return v.access(this, function(e) {
                        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (v.isFunction(e)) return this.each(function(t) {
                        v(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return v.isFunction(e) ? this.each(function(t) {
                        v(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = v(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = v.isFunction(e);
                    return this.each(function(n) {
                        v(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this)
                    });
                    if (arguments.length) {
                        var e = v.clean(arguments);
                        return this.pushStack(v.merge(e, this), "before", this.selector)
                    }
                },
                after: function() {
                    if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    });
                    if (arguments.length) {
                        var e = v.clean(arguments);
                        return this.pushStack(v.merge(this, e), "after", this.selector)
                    }
                },
                remove: function(e, t) {
                    var n, r = 0;
                    for (;
                        (n = this[r]) != null; r++)
                        if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for (;
                        (e = this[t]) != null; t++) {
                        e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                        while (e.firstChild) e.removeChild(e.firstChild)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                        return v.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return v.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                        if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(dt, "<$1></$2>");
                            try {
                                for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                n = 0
                            } catch (s) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function(e) {
                    return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                        var n = v(this),
                            r = n.html();
                        n.replaceWith(e.call(this, t, r))
                    }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                    }))
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, r) {
                    e = [].concat.apply([], e);
                    var i, s, o, u, a = 0,
                        f = e[0],
                        l = [],
                        c = this.length;
                    if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                        v(this).domManip(e, n, r)
                    });
                    if (v.isFunction(f)) return this.each(function(i) {
                        var s = v(this);
                        e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                    });
                    if (this[0]) {
                        i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                        if (s) {
                            n = n && v.nodeName(s, "tr");
                            for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                        }
                        o = s = null, l.length && v.each(l, function(e, t) {
                            t.src ? v.ajax ? v.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                        })
                    }
                    return this
                }
            }), v.buildFragment = function(e, n, r) {
                var s, o, u, a = e[0];
                return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                    fragment: s,
                    cacheable: o
                }
            }, v.fragments = {}, v.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                v.fn[e] = function(n) {
                    var r, i = 0,
                        s = [],
                        o = v(n),
                        u = o.length,
                        a = this.length === 1 && this[0].parentNode;
                    if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                    for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                    return this.pushStack(s, e, o.selector)
                }
            }), v.extend({
                clone: function(e, t, n) {
                    var r, i, s, o;
                    v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                    if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                        Ot(e, o), r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                    }
                    if (t) {
                        At(e, o);
                        if (n) {
                            r = Mt(e), i = Mt(o);
                            for (s = 0; r[s]; ++s) At(r[s], i[s])
                        }
                    }
                    return r = i = null, o
                },
                clean: function(e, t, n, r) {
                    var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                        b = [];
                    if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                    for (s = 0;
                        (u = e[s]) != null; s++) {
                        typeof u == "number" && (u += "");
                        if (!u) continue;
                        if (typeof u == "string")
                            if (!gt.test(u)) u = t.createTextNode(u);
                            else {
                                y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                                while (l--) c = c.lastChild;
                                if (!v.support.tbody) {
                                    h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                    for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                                }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                            }
                        u.nodeType ? b.push(u) : v.merge(b, u)
                    }
                    c && (u = c = y = null);
                    if (!v.support.appendChecked)
                        for (s = 0;
                            (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                    if (n) {
                        m = function(e) {
                            if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                        };
                        for (s = 0;
                            (u = b[s]) != null; s++)
                            if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                    }
                    return b
                },
                cleanData: function(e, t) {
                    var n, r, i, s, o = 0,
                        u = v.expando,
                        a = v.cache,
                        f = v.support.deleteExpando,
                        l = v.event.special;
                    for (;
                        (i = e[o]) != null; o++)
                        if (t || v.acceptData(i)) {
                            r = i[u], n = r && a[r];
                            if (n) {
                                if (n.events)
                                    for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                                a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                            }
                        }
                }
            }),
            function() {
                var e, t;
                v.uaMatch = function(e) {
                    e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                        return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(i);
                    return e
                }
            }();
        var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
            jt = /opacity=([^)]*)/,
            Ft = /^(top|right|bottom|left)$/,
            It = /^(none|table(?!-c[ea]).+)/,
            qt = /^margin/,
            Rt = new RegExp("^(" + m + ")(.*)$", "i"),
            Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
            zt = new RegExp("^([-+])=(" + m + ")", "i"),
            Wt = {},
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            $t = ["Top", "Right", "Bottom", "Left"],
            Jt = ["Webkit", "O", "Moz", "ms"],
            Kt = v.fn.toggle;
        v.fn.extend({
            css: function(e, n) {
                return v.access(this, function(e, n, r) {
                    return r !== t ? v.style(e, n, r) : v.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return Yt(this, !0)
            },
            hide: function() {
                return Yt(this)
            },
            toggle: function(e, t) {
                var n = typeof e == "boolean";
                return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                    (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
                })
            }
        }), v.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Dt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var s, o, u, a = v.camelCase(n),
                    f = e.style;
                n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
                if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !v.cssNumber[a] && (r += "px");
                if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                    f[n] = r
                } catch (l) {}
            },
            css: function(e, n, r, i) {
                var s, o, u, a = v.camelCase(n);
                return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
            },
            swap: function(e, t, n) {
                var r, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                r = n.call(e);
                for (i in t) e.style[i] = s[i];
                return r
            }
        }), e.getComputedStyle ? Dt = function(t, n) {
            var r, i, s, o, u = e.getComputedStyle(t, null),
                a = t.style;
            return u && (r = u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
        } : i.documentElement.currentStyle && (Dt = function(e, t) {
            var n, r, i = e.currentStyle && e.currentStyle[t],
                s = e.style;
            return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
        }), v.each(["height", "width"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                        return tn(e, t, r)
                    }) : tn(e, t, r)
                },
                set: function(e, n, r) {
                    return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
                }
            }
        }), v.support.opacity || (v.cssHooks.opacity = {
            get: function(e, t) {
                return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (r && !r.filter) return
                }
                n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
            }
        }), v(function() {
            v.support.reliableMarginRight || (v.cssHooks.marginRight = {
                get: function(e, t) {
                    return v.swap(e, {
                        display: "inline-block"
                    }, function() {
                        if (t) return Dt(e, "marginRight")
                    })
                }
            }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
                v.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var r = Dt(e, t);
                            return Ut.test(r) ? v(e).position()[t] + "px" : r
                        }
                    }
                }
            })
        }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
        }, v.expr.filters.visible = function(e) {
            return !v.expr.filters.hidden(e)
        }), v.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            v.cssHooks[e + t] = {
                expand: function(n) {
                    var r, i = typeof n == "string" ? n.split(" ") : [n],
                        s = {};
                    for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                    return s
                }
            }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
        });
        var rn = /%20/g,
            sn = /\[\]$/,
            on = /\r?\n/g,
            un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            an = /^(?:select|textarea)/i;
        v.fn.extend({
            serialize: function() {
                return v.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? v.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
                }).map(function(e, t) {
                    var n = v(this).val();
                    return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                        return {
                            name: t.name,
                            value: e.replace(on, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(on, "\r\n")
                    }
                }).get()
            }
        }), v.param = function(e, n) {
            var r, i = [],
                s = function(e, t) {
                    t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
            if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
                s(this.name, this.value)
            });
            else
                for (r in e) fn(r, e[r], n, s);
            return i.join("&").replace(rn, "+")
        };
        var ln, cn, hn = /#.*$/,
            pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            vn = /^(?:GET|HEAD)$/,
            mn = /^\/\//,
            gn = /\?/,
            yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            bn = /([?&])_=[^&]*/,
            wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            En = v.fn.load,
            Sn = {},
            xn = {},
            Tn = ["*/"] + ["*"];
        try {
            ln = s.href
        } catch (Nn) {
            ln = i.createElement("a"), ln.href = "", ln = ln.href
        }
        cn = wn.exec(ln.toLowerCase()) || [], v.fn.load = function(e, n, r) {
            if (typeof e != "string" && En) return En.apply(this, arguments);
            if (!this.length) return this;
            var i, s, o, u = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n,
                complete: function(e, t) {
                    r && u.each(r, o || [e.responseText, t, e])
                }
            }).done(function(e) {
                o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
            }), this
        }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            v.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), v.each(["get", "post"], function(e, n) {
            v[n] = function(e, r, i, s) {
                return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: s
                })
            }
        }), v.extend({
            getScript: function(e, n) {
                return v.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return v.get(e, t, n, "json")
            },
            ajaxSetup: function(e, t) {
                return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
            },
            ajaxSettings: {
                url: ln,
                isLocal: dn.test(cn[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Tn
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": v.parseJSON,
                    "text xml": v.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Cn(Sn),
            ajaxTransport: Cn(xn),
            ajax: function(e, n) {
                function T(e, n, s, a) {
                    var l, y, b, w, S, T = n;
                    if (E === 2) return;
                    E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                    if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                    else {
                        b = T;
                        if (!T || e) T = "error", e < 0 && (e = 0)
                    }
                    x.status = e, x.statusText = "" + (n || T), l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                    h = c.context || c,
                    p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                    d = v.Deferred(),
                    m = v.Callbacks("once memory"),
                    g = c.statusCode || {},
                    b = {},
                    w = {},
                    E = 0,
                    S = "canceled",
                    x = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!E) {
                                var n = e.toLowerCase();
                                e = w[n] = w[n] || e, b[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return E === 2 ? i : null
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (E === 2) {
                                if (!s) {
                                    s = {};
                                    while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                                }
                                n = s[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function(e) {
                            return E || (c.mimeType = e), this
                        },
                        abort: function(e) {
                            return e = e || S, o && o.abort(e), T(0, e), this
                        }
                    };
                d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (E < 2)
                            for (t in e) g[t] = [g[t], e[t]];
                        else t = e[x.status], x.always(t)
                    }
                    return this
                }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, cn[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] == cn[1] && a[2] == cn[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (cn[3] || (cn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
                if (E === 2) return x;
                f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
                if (!c.hasContent) {
                    c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                    if (c.cache === !1) {
                        var N = v.now(),
                            C = c.url.replace(bn, "$1_=" + N);
                        c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                    }
                }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
                for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
                if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                    S = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[l](c[l]);
                    o = kn(xn, c, n, x);
                    if (!o) T(-1, "No Transport");
                    else {
                        x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            E = 1, o.send(b, T)
                        } catch (k) {
                            if (!(E < 2)) throw k;
                            T(-1, k)
                        }
                    }
                    return x
                }
                return x.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Mn = [],
            _n = /\?/,
            Dn = /(=)\?(?=&|$)|\?\?/,
            Pn = v.now();
        v.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Mn.pop() || v.expando + "_" + Pn++;
                return this[e] = !0, e
            }
        }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
            var s, o, u, a = n.data,
                f = n.url,
                l = n.jsonp !== !1,
                c = l && Dn.test(f),
                h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
            if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return u || v.error(s + " was not called"), u[0]
            }, n.dataTypes[0] = "json", e[s] = function() {
                u = arguments
            }, i.always(function() {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
            }), "script"
        }), v.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return v.globalEval(e), e
                }
            }
        }), v.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), v.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
                return {
                    send: function(s, o) {
                        n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                            if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var Hn, Bn = e.ActiveXObject ? function() {
                for (var e in Hn) Hn[e](0, 1)
            } : !1,
            jn = 0;
        v.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && Fn() || In()
            } : Fn,
            function(e) {
                v.extend(v.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                })
            }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
                if (!n.crossDomain || v.support.cors) {
                    var r;
                    return {
                        send: function(i, s) {
                            var o, u, a = n.xhr();
                            n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                            if (n.xhrFields)
                                for (u in n.xhrFields) a[u] = n.xhrFields[u];
                            n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (u in i) a.setRequestHeader(u, i[u])
                            } catch (f) {}
                            a.send(n.hasContent && n.data || null), r = function(e, i) {
                                var u, f, l, c, h;
                                try {
                                    if (r && (i || a.readyState === 4)) {
                                        r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                        if (i) a.readyState !== 4 && a.abort();
                                        else {
                                            u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                            try {
                                                c.text = a.responseText
                                            } catch (e) {}
                                            try {
                                                f = a.statusText
                                            } catch (p) {
                                                f = ""
                                            }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                        }
                                    }
                                } catch (d) {
                                    i || s(-1, d)
                                }
                                c && s(u, f, c, l)
                            }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                        },
                        abort: function() {
                            r && r(0, 1)
                        }
                    }
                }
            });
        var qn, Rn, Un = /^(?:toggle|show|hide)$/,
            zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
            Wn = /queueHooks$/,
            Xn = [Gn],
            Vn = {
                "*": [function(e, t) {
                    var n, r, i, s = this.createTween(e, t),
                        o = zn.exec(t),
                        u = s.cur(),
                        a = +u || 0,
                        f = 1;
                    if (o) {
                        n = +o[2], r = o[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && a) {
                            a = v.css(s.elem, e, !0) || n || 1;
                            do i = f = f || ".5", a /= f, v.style(s.elem, e, a + r), f = s.cur() / u; while (f !== 1 && f !== i)
                        }
                        s.unit = r, s.start = a, s.end = o[1] ? a + (o[1] + 1) * n : n
                    }
                    return s
                }]
            };
        v.Animation = v.extend(Kn, {
            tweener: function(e, t) {
                v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Xn.unshift(e) : Xn.push(e)
            }
        }), v.Tween = Yn, Yn.prototype = {
            constructor: Yn,
            init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Yn.propHooks[this.prop];
                return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Yn.propHooks[this.prop];
                return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
            }
        }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                },
                set: function(e) {
                    v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, v.each(["toggle", "show", "hide"], function(e, t) {
            var n = v.fn[t];
            v.fn[t] = function(r, i, s) {
                return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
            }
        }), v.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Gt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = v.isEmptyObject(e),
                    s = v.speed(t, n, r),
                    o = function() {
                        var t = Kn(this, v.extend({}, e), s);
                        i && t.stop(!0)
                    };
                return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = e != null && e + "queueHooks",
                        s = v.timers,
                        o = v._data(this);
                    if (n) o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                    for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                    (t || !r) && v.dequeue(this, e)
                })
            }
        }), v.each({
            slideDown: Zn("show"),
            slideUp: Zn("hide"),
            slideToggle: Zn("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            v.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), v.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? v.extend({}, e) : {
                complete: n || !n && t || v.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !v.isFunction(t) && t
            };
            r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
            }, r
        }, v.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
            var e, t = v.timers,
                n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || v.fx.stop()
        }, v.fx.timer = function(e) {
            e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
        }, v.fx.interval = 13, v.fx.stop = function() {
            clearInterval(Rn), Rn = null
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
            return v.grep(v.timers, function(t) {
                return e === t.elem
            }).length
        });
        var er = /^(?:body|html)$/i;
        v.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                v.offset.setOffset(this, e, t)
            });
            var n, r, i, s, o, u, a, f, l, c, h = this[0],
                p = h && h.ownerDocument;
            if (!p) return;
            return (i = p.body) === h ? v.offset.bodyOffset(h) : (r = p.documentElement, v.contains(r, h) ? (n = h.getBoundingClientRect(), s = tr(p), o = r.clientTop || i.clientTop || 0, u = r.clientLeft || i.clientLeft || 0, a = s.pageYOffset || r.scrollTop, f = s.pageXOffset || r.scrollLeft, l = n.top + a - o, c = n.left + f - u, {
                top: l,
                left: c
            }) : {
                top: 0,
                left: 0
            })
        }, v.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function(e, t, n) {
                var r = v.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = v(e),
                    s = i.offset(),
                    o = v.css(e, "top"),
                    u = v.css(e, "left"),
                    a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                    f = {},
                    l = {},
                    c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
            }
        }, v.fn.extend({
            position: function() {
                if (!this[0]) return;
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = er.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || i.body;
                    while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                    return e || i.body
                })
            }
        }), v.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            v.fn[e] = function(i) {
                return v.access(this, function(e, i, s) {
                    var o = tr(e);
                    if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
                }, e, i, arguments.length, null)
            }
        }), v.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            v.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                v.fn[i] = function(i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"),
                        u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return v.access(this, function(n, r, i) {
                        var s;
                        return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                    }, n, o ? i : t, o, null)
                }
            })
        }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return v
        })
    }(window),
    function(e, t, n) {
        "use strict";
        e.fn.backstretch = function(r, s) {
            return (r === n || r.length === 0) && e.error("No images were supplied for Backstretch"), e(t).scrollTop() === 0 && t.scrollTo(0, 0), this.each(function() {
                var t = e(this),
                    n = t.data("backstretch");
                if (n) {
                    if (typeof r == "string" && typeof n[r] == "function") {
                        n[r](s);
                        return
                    }
                    s = e.extend(n.options, s), n.destroy(!0)
                }
                n = new i(this, r, s), t.data("backstretch", n)
            })
        }, e.backstretch = function(t, n) {
            return e("body").backstretch(t, n).data("backstretch")
        }, e.expr[":"].backstretch = function(t) {
            return e(t).data("backstretch") !== n
        }, e.fn.backstretch.defaults = {
            centeredX: !0,
            centeredY: !0,
            duration: 5e3,
            fade: 0
        };
        var r = {
                wrap: {
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: -999999
                },
                img: {
                    position: "absolute",
                    display: "none",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    width: "auto",
                    height: "auto",
                    maxHeight: "none",
                    maxWidth: "none",
                    zIndex: -999999
                }
            },
            i = function(n, i, o) {
                this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(i) ? i : [i], e.each(this.images, function() {
                    e("<img />")[0].src = this
                }), this.isBody = n === document.body, this.$container = e(n), this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;
                var u = this.$container.children(".backstretch").first();
                this.$wrap = u.length ? u : e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container);
                if (!this.isBody) {
                    var a = this.$container.css("position"),
                        f = this.$container.css("zIndex");
                    this.$container.css({
                        position: a === "static" ? "relative" : a,
                        zIndex: f === "auto" ? 0 : f,
                        background: "none"
                    }), this.$wrap.css({
                        zIndex: -999998
                    })
                }
                this.$wrap.css({
                    position: this.isBody && s ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
                    this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1), this.resize())
                }, this))
            };
        i.prototype = {
            resize: function() {
                try {
                    var e = {
                            left: 0,
                            top: 0
                        },
                        n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        r = n,
                        i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        s = r / this.$img.data("ratio"),
                        o;
                    s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px")), this.$wrap.css({
                        width: n,
                        height: i
                    }).find("img:not(.deleteable)").css({
                        width: r,
                        height: s
                    }).css(e)
                } catch (u) {}
                return this
            },
            show: function(t) {
                if (Math.abs(t) > this.images.length - 1) return;
                var n = this,
                    i = n.$wrap.find("img").addClass("deleteable"),
                    s = {
                        relatedTarget: n.$container[0]
                    };
                return n.$container.trigger(e.Event("backstretch.before", s), [n, t]), this.index = t, clearInterval(n.interval), n.$img = e("<img />").css(r.img).bind("load", function(r) {
                    var o = this.width || e(r.target).width(),
                        u = this.height || e(r.target).height();
                    e(this).data("ratio", o / u), e(this).fadeIn(n.options.speed || n.options.fade, function() {
                        i.remove(), n.paused || n.cycle(), e(["after", "show"]).each(function() {
                            n.$container.trigger(e.Event("backstretch." + this, s), [n, t])
                        })
                    }), n.resize()
                }).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n
            },
            next: function() {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            },
            prev: function() {
                return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1)
            },
            pause: function() {
                return this.paused = !0, this
            },
            resume: function() {
                return this.paused = !1, this.next(), this
            },
            cycle: function() {
                return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function() {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            },
            destroy: function(n) {
                e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var s = function() {
            var e = navigator.userAgent,
                n = navigator.platform,
                r = e.match(/AppleWebKit\/([0-9]+)/),
                i = !!r && r[1],
                s = e.match(/Fennec\/([0-9]+)/),
                o = !!s && s[1],
                u = e.match(/Opera Mobi\/([0-9]+)/),
                a = !!u && u[1],
                f = e.match(/MSIE ([0-9]+)/),
                l = !!f && f[1];
            return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6)
        }()
    }(jQuery, window),
    function(e) {
        "use strict";
        var t = {
            init: function(t) {
                var n = {
                        fit: !1,
                        before: function(e) {},
                        complete: function(e) {}
                    },
                    r = e.extend({}, n, t);
                return this.each(function() {
                    var t = e(this),
                        n = t.find("img");
                    typeof r.before == "function" && r.before(t), n.one("load", function() {
                        var n = e(this);
                        n.removeAttr("width height").css({
                            width: "",
                            height: "",
                            "margin-left": "",
                            "margin-top": ""
                        });
                        var i = n.width(),
                            s = n.height(),
                            o = t.innerWidth(),
                            u = t.innerHeight(),
                            a, f, l, c;
                        r.fit ? (i >= o && s >= u ? (a = 1 / (i / o), f = 1 / (s / u)) : (a = o / i, f = u / s), a < f ? (i = f * i, s = f * s) : (i = a * i, s = a * s), i > o ? (c = (o - i) / 2, n.css("margin-left", c + "px")) : (l = (u - s) / 2, n.css("margin-top", l + "px"))) : (a = o / i, f = u / s, a > f ? (i = f * i, s = f * s) : (i = a * i, s = a * s), i < o ? (c = (o - i) / 2, n.css("margin-left", c + "px")) : (l = (u - s) / 2, n.css("margin-top", l + "px"))), n.width(i), n.height(s), typeof r.complete == "function" && r.complete(t)
                    }).each(function() {
                        this.complete && n.load()
                    })
                })
            }
        };
        e.fn.fitc = function(n) {
            if (t[n]) return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof n == "object" || !n) return t.init.apply(this, arguments);
            e.error("Method " + n + " does not exist on jQuery.fitc")
        }
    }(jQuery),
    function(e, t) {
        "use strict";

        function r() {
            if (n.READY) return;
            n.event.determineEventTypes();
            for (var e in n.gestures) n.gestures.hasOwnProperty(e) && n.detection.register(n.gestures[e]);
            n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
        }
        var n = function(e, t) {
            return new n.Instance(e, t || {})
        };
        n.defaults = {
            stop_browser_behavior: {
                userSelect: "none",
                touchAction: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in e, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function(e, t) {
            var i = this;
            return r(), this.element = e, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), t || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(e, n.EVENT_START, function(e) {
                i.enabled && n.detection.startDetect(i, e)
            }), this
        }, n.Instance.prototype = {
            on: function(t, n) {
                var r = t.split(" ");
                for (var i = 0; i < r.length; i++) this.element.addEventListener(r[i], n, !1);
                return this
            },
            off: function(t, n) {
                var r = t.split(" ");
                for (var i = 0; i < r.length; i++) this.element.removeEventListener(r[i], n, !1);
                return this
            },
            trigger: function(t, r) {
                var i = n.DOCUMENT.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = r;
                var s = this.element;
                return n.utils.hasParent(r.target, s) && (s = r.target), s.dispatchEvent(i), this
            },
            enable: function(t) {
                return this.enabled = t, this
            }
        };
        var i = null,
            s = !1,
            o = !1;
        n.event = {
            bindDom: function(e, t, n) {
                var r = t.split(" ");
                for (var i = 0; i < r.length; i++) e.addEventListener(r[i], n, !1)
            },
            onTouch: function(t, r, u) {
                var a = this;
                this.bindDom(t, n.EVENT_TYPES[r], function(f) {
                    var l = f.type.toLowerCase();
                    if (l.match(/mouse/) && o) return;
                    if (l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && f.which === 1) s = !0;
                    l.match(/touch|pointer/) && (o = !0);
                    var c = 0;
                    s && (n.HAS_POINTEREVENTS && r != n.EVENT_END ? c = n.PointerEvent.updatePointer(r, f) : l.match(/touch/) ? c = f.touches.length : o || (c = l.match(/up/) ? 0 : 1), c > 0 && r == n.EVENT_END ? r = n.EVENT_MOVE : c || (r = n.EVENT_END), !c && i !== null ? f = i : i = f, u.call(n.detection, a.collectEventData(t, r, f)), n.HAS_POINTEREVENTS && r == n.EVENT_END && (c = n.PointerEvent.updatePointer(r, f))), c || (i = null, s = !1, o = !1, n.PointerEvent.reset())
                })
            },
            determineEventTypes: function() {
                var t;
                n.HAS_POINTEREVENTS ? t = n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? t = ["touchstart", "touchmove", "touchend touchcancel"] : t = ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = t[0], n.EVENT_TYPES[n.EVENT_MOVE] = t[1], n.EVENT_TYPES[n.EVENT_END] = t[2]
            },
            getTouchList: function(t) {
                return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                    identifier: 1,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.target
                }]
            },
            collectEventData: function(t, r, i) {
                var s = this.getTouchList(i, r),
                    o = n.POINTER_TOUCH;
                if (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) o = n.POINTER_MOUSE;
                return {
                    center: n.utils.getCenter(s),
                    timeStamp: (new Date).getTime(),
                    target: i.target,
                    touches: s,
                    eventType: r,
                    pointerType: o,
                    srcEvent: i,
                    preventDefault: function() {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return n.detection.stopDetect()
                    }
                }
            }
        }, n.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var e = this,
                    t = [];
                return Object.keys(e.pointers).sort().forEach(function(n) {
                    t.push(e.pointers[n])
                }), t
            },
            updatePointer: function(e, t) {
                return e == n.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
            },
            matchType: function(e, t) {
                if (!t.pointerType) return !1;
                var r = {};
                return r[n.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == n.POINTER_MOUSE, r[n.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == n.POINTER_TOUCH, r[n.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == n.POINTER_PEN, r[e]
            },
            getEvents: function() {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function() {
                this.pointers = {}
            }
        }, n.utils = {
            extend: function(n, r, i) {
                for (var s in r) {
                    if (n[s] !== t && i) continue;
                    n[s] = r[s]
                }
                return n
            },
            hasParent: function(e, t) {
                while (e) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            },
            getCenter: function(t) {
                var n = [],
                    r = [];
                for (var i = 0, s = t.length; i < s; i++) n.push(t[i].pageX), r.push(t[i].pageY);
                return {
                    pageX: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2,
                    pageY: (Math.min.apply(Math, r) + Math.max.apply(Math, r)) / 2
                }
            },
            getVelocity: function(t, n, r) {
                return {
                    x: Math.abs(n / t) || 0,
                    y: Math.abs(r / t) || 0
                }
            },
            getAngle: function(t, n) {
                var r = n.pageY - t.pageY,
                    i = n.pageX - t.pageX;
                return Math.atan2(r, i) * 180 / Math.PI
            },
            getDirection: function(t, r) {
                var i = Math.abs(t.pageX - r.pageX),
                    s = Math.abs(t.pageY - r.pageY);
                return i >= s ? t.pageX - r.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : t.pageY - r.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
            },
            getDistance: function(t, n) {
                var r = n.pageX - t.pageX,
                    i = n.pageY - t.pageY;
                return Math.sqrt(r * r + i * i)
            },
            getScale: function(t, n) {
                return t.length >= 2 && n.length >= 2 ? this.getDistance(n[0], n[1]) / this.getDistance(t[0], t[1]) : 1
            },
            getRotation: function(t, n) {
                return t.length >= 2 && n.length >= 2 ? this.getAngle(n[1], n[0]) - this.getAngle(t[1], t[0]) : 0
            },
            isVertical: function(t) {
                return t == n.DIRECTION_UP || t == n.DIRECTION_DOWN
            },
            stopDefaultBrowserBehavior: function(t, n) {
                var r, i = ["webkit", "khtml", "moz", "ms", "o", ""];
                if (!n || !t.style) return;
                for (var s = 0; s < i.length; s++)
                    for (var o in n) n.hasOwnProperty(o) && (r = o, i[s] && (r = i[s] + r.substring(0, 1).toUpperCase() + r.substring(1)), t.style[r] = n[o]);
                n.userSelect == "none" && (t.onselectstart = function() {
                    return !1
                })
            }
        }, n.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(t, r) {
                if (this.current) return;
                this.stopped = !1, this.current = {
                    inst: t,
                    startEvent: n.utils.extend({}, r),
                    lastEvent: !1,
                    name: ""
                }, this.detect(r)
            },
            detect: function(t) {
                if (!this.current || this.stopped) return;
                t = this.extendEventData(t);
                var r = this.current.inst.options;
                for (var i = 0, s = this.gestures.length; i < s; i++) {
                    var o = this.gestures[i];
                    if (!this.stopped && r[o.name] !== !1 && o.handler.call(o, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t), t.eventType == n.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
            },
            stopDetect: function() {
                this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
            },
            extendEventData: function(t) {
                var r = this.current.startEvent;
                if (r && (t.touches.length != r.touches.length || t.touches === r.touches)) {
                    r.touches = [];
                    for (var i = 0, s = t.touches.length; i < s; i++) r.touches.push(n.utils.extend({}, t.touches[i]))
                }
                var o = t.timeStamp - r.timeStamp,
                    u = t.center.pageX - r.center.pageX,
                    a = t.center.pageY - r.center.pageY,
                    f = n.utils.getVelocity(o, u, a);
                return n.utils.extend(t, {
                    deltaTime: o,
                    deltaX: u,
                    deltaY: a,
                    velocityX: f.x,
                    velocityY: f.y,
                    distance: n.utils.getDistance(r.center, t.center),
                    angle: n.utils.getAngle(r.center, t.center),
                    direction: n.utils.getDirection(r.center, t.center),
                    scale: n.utils.getScale(r.touches, t.touches),
                    rotation: n.utils.getRotation(r.touches, t.touches),
                    startEvent: r
                }), t
            },
            register: function(r) {
                var i = r.defaults || {};
                return i[r.name] === t && (i[r.name] = !0), n.utils.extend(n.defaults, i, !0), r.index = r.index || 1e3, this.gestures.push(r), this.gestures.sort(function(e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        }, n.gestures = n.gestures || {}, n.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: {
                hold_timeout: 500,
                hold_threshold: 1
            },
            timer: null,
            handler: function(t, r) {
                switch (t.eventType) {
                    case n.EVENT_START:
                        clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function() {
                            n.detection.current.name == "hold" && r.trigger("hold", t)
                        }, r.options.hold_timeout);
                        break;
                    case n.EVENT_MOVE:
                        t.distance > r.options.hold_threshold && clearTimeout(this.timer);
                        break;
                    case n.EVENT_END:
                        clearTimeout(this.timer)
                }
            }
        }, n.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: {
                tap_max_touchtime: 250,
                tap_max_distance: 10,
                tap_always: !0,
                doubletap_distance: 20,
                doubletap_interval: 300
            },
            handler: function(t, r) {
                if (t.eventType == n.EVENT_END) {
                    var i = n.detection.previous,
                        s = !1;
                    if (t.deltaTime > r.options.tap_max_touchtime || t.distance > r.options.tap_max_distance) return;
                    i && i.name == "tap" && t.timeStamp - i.lastEvent.timeStamp < r.options.doubletap_interval && t.distance < r.options.doubletap_distance && (r.trigger("doubletap", t), s = !0);
                    if (!s || r.options.tap_always) n.detection.current.name = "tap", r.trigger(n.detection.current.name, t)
                }
            }
        }, n.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipe_max_touches: 1,
                swipe_velocity: .7
            },
            handler: function(t, r) {
                if (t.eventType == n.EVENT_END) {
                    if (r.options.swipe_max_touches > 0 && t.touches.length > r.options.swipe_max_touches) return;
                    if (t.velocityX > r.options.swipe_velocity || t.velocityY > r.options.swipe_velocity) r.trigger(this.name, t), r.trigger(this.name + t.direction, t)
                }
            }
        }, n.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: {
                drag_min_distance: 10,
                drag_max_touches: 1,
                drag_block_horizontal: !1,
                drag_block_vertical: !1,
                drag_lock_to_axis: !1,
                drag_lock_min_distance: 25
            },
            triggered: !1,
            handler: function(t, r) {
                if (n.detection.current.name != this.name && this.triggered) {
                    r.trigger(this.name + "end", t), this.triggered = !1;
                    return
                }
                if (r.options.drag_max_touches > 0 && t.touches.length > r.options.drag_max_touches) return;
                switch (t.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        if (t.distance < r.options.drag_min_distance && n.detection.current.name != this.name) return;
                        n.detection.current.name = this.name;
                        if (n.detection.current.lastEvent.drag_locked_to_axis || r.options.drag_lock_to_axis && r.options.drag_lock_min_distance <= t.distance) t.drag_locked_to_axis = !0;
                        var i = n.detection.current.lastEvent.direction;
                        t.drag_locked_to_axis && i !== t.direction && (n.utils.isVertical(i) ? t.direction = t.deltaY < 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN : t.direction = t.deltaX < 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (r.trigger(this.name + "start", t), this.triggered = !0), r.trigger(this.name, t), r.trigger(this.name + t.direction, t), (r.options.drag_block_vertical && n.utils.isVertical(t.direction) || r.options.drag_block_horizontal && !n.utils.isVertical(t.direction)) && t.preventDefault();
                        break;
                    case n.EVENT_END:
                        this.triggered && r.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, n.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: {
                transform_min_scale: .01,
                transform_min_rotation: 1,
                transform_always_block: !1
            },
            triggered: !1,
            handler: function(t, r) {
                if (n.detection.current.name != this.name && this.triggered) {
                    r.trigger(this.name + "end", t), this.triggered = !1;
                    return
                }
                if (t.touches.length < 2) return;
                r.options.transform_always_block && t.preventDefault();
                switch (t.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        var i = Math.abs(1 - t.scale),
                            s = Math.abs(t.rotation);
                        if (i < r.options.transform_min_scale && s < r.options.transform_min_rotation) return;
                        n.detection.current.name = this.name, this.triggered || (r.trigger(this.name + "start", t), this.triggered = !0), r.trigger(this.name, t), s > r.options.transform_min_rotation && r.trigger("rotate", t), i > r.options.transform_min_scale && (r.trigger("pinch", t), r.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
                        break;
                    case n.EVENT_END:
                        this.triggered && r.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, n.gestures.Touch = {
            name: "touch",
            index: -Infinity,
            defaults: {
                prevent_default: !1,
                prevent_mouseevents: !1
            },
            handler: function(t, r) {
                if (r.options.prevent_mouseevents && t.pointerType == n.POINTER_MOUSE) {
                    t.stopDetect();
                    return
                }
                r.options.prevent_default && t.preventDefault(), t.eventType == n.EVENT_START && r.trigger(this.name, t)
            }
        }, n.gestures.Release = {
            name: "release",
            index: Infinity,
            handler: function(t, r) {
                t.eventType == n.EVENT_END && r.trigger(this.name, t)
            }
        }, typeof module == "object" && typeof module.exports == "object" ? module.exports = n : (e.Hammer = n, typeof e.define == "function" && e.define.amd && e.define("hammer", [], function() {
            return n
        }))
    }(this),
    function(e, t) {
        "use strict";
        if (e === t) return;
        Hammer.event.bindDom = function(n, r, i) {
            e(n).on(r, function(e) {
                var n = e.originalEvent || e;
                n.pageX === t && (n.pageX = e.pageX, n.pageY = e.pageY), n.target || (n.target = e.target), n.which === t && (n.which = n.button), n.preventDefault || (n.preventDefault = e.preventDefault), n.stopPropagation || (n.stopPropagation = e.stopPropagation), i.call(this, n)
            })
        }, Hammer.Instance.prototype.on = function(t, n) {
            return e(this.element).on(t, n)
        }, Hammer.Instance.prototype.off = function(t, n) {
            return e(this.element).off(t, n)
        }, Hammer.Instance.prototype.trigger = function(t, n) {
            var r = e(this.element);
            return r.has(n.target).length && (r = e(n.target)), r.trigger({
                type: t,
                gesture: n
            })
        }, e.fn.hammer = function(t) {
            return this.each(function() {
                var n = e(this),
                    r = n.data("hammer");
                r ? r && t && Hammer.utils.extend(r.options, t) : n.data("hammer", new Hammer(this, t || {}))
            })
        }
    }(window.jQuery || window.Zepto),
    function(e, t) {
        function dt(e) {
            if (e && typeof e == "object" && e.__wrapped__) return e;
            if (!(this instanceof dt)) return new dt(e);
            this.__wrapped__ = e
        }

        function bt(e, t, n) {
            t || (t = 0);
            var r = e.length,
                i = r - t >= (n || a);
            if (i) {
                var s = {},
                    o = t - 1;
                while (++o < r) {
                    var u = e[o] + "";
                    (A.call(s, u) ? s[u] : s[u] = []).push(e[o])
                }
            }
            return function(n) {
                if (i) {
                    var r = n + "";
                    return A.call(s, r) && qn(s[r], n) > -1
                }
                return qn(e, n, t) > -1
            }
        }

        function wt(e) {
            return e.charCodeAt(0)
        }

        function Et(e, t) {
            var n = e.index,
                r = t.index;
            e = e.criteria, t = t.criteria;
            if (e !== t) {
                if (e > t || typeof e == "undefined") return 1;
                if (e < t || typeof t == "undefined") return -1
            }
            return n < r ? -1 : 1
        }

        function St(e, t, n) {
            function o() {
                var u = arguments,
                    a = i ? this : t;
                r || (e = t[s]), n.length && (u = u.length ? n.concat(Ot(u)) : n);
                if (this instanceof o) {
                    At.prototype = e.prototype, a = new At, At.prototype = null;
                    var f = e.apply(a, u);
                    return en(f) ? f : a
                }
                return e.apply(a, u)
            }
            var r = Zt(e),
                i = !n,
                s = t;
            return i && (n = t), r || (t = e), o
        }

        function xt(e, t, n) {
            return e ? typeof e != "function" ? function(t) {
                return t[e]
            } : typeof t != "undefined" ? n ? function(n, r, i, s) {
                return e.call(t, n, r, i, s)
            } : function(n, r, i) {
                return e.call(t, n, r, i)
            } : e : pr
        }

        function Tt() {
            var e = {
                arrayLoop: "",
                bottom: "",
                hasDontEnumBug: et,
                isKeysFast: Z,
                objectLoop: "",
                nonEnumArgs: rt,
                noCharByIndex: ot,
                shadowed: x,
                top: "",
                useHas: !0
            };
            for (var t, n = 0; t = arguments[n]; n++)
                for (var r in t) e[r] = t[r];
            var i = e.args;
            e.firstArg = /^[^,]+/.exec(i)[0];
            var s = Function("createCallback, hasOwnProperty, isArguments, isString, objectTypes, nativeKeys, propertyIsEnumerable", "return function(" + i + ") {\n" + vt(e) + "\n}");
            return s(xt, A, Dt, un, ht, j, M)
        }

        function Ct(e) {
            return "\\" + pt[e]
        }

        function kt(e) {
            return Ft[e]
        }

        function Lt(e) {
            return typeof e.toString != "function" && typeof(e + "") == "string"
        }

        function At() {}

        function Ot(e, t, n) {
            t || (t = 0), typeof n == "undefined" && (n = e ? e.length : 0);
            var r = -1,
                i = n - t || 0,
                s = Array(i < 0 ? 0 : i);
            while (++r < i) s[r] = e[t + r];
            return s
        }

        function Mt(e) {
            return It[e]
        }

        function Dt(e) {
            return _.call(e) == R
        }

        function Bt(e) {
            var t = !1;
            if (!e || typeof e != "object" || Dt(e)) return t;
            var n = e.constructor;
            return !Zt(n) && (!ut || !Lt(e)) || n instanceof n ? tt ? (Pt(e, function(e, n, r) {
                return t = !A.call(r, n), !1
            }), t === !1) : (Pt(e, function(e, n) {
                t = n
            }), t === !1 || A.call(e, t)) : t
        }

        function jt(e) {
            var t = [];
            return Ht(e, function(e, n) {
                t.push(n)
            }), t
        }

        function qt(e, t, n, r, i) {
            if (e == null) return e;
            n && (t = !1);
            var s = en(e);
            if (s) {
                var o = _.call(e);
                if (!lt[o] || ut && Lt(e)) return e;
                var u = Vt(e)
            }
            if (!s || !t) return s ? u ? Ot(e) : _t({}, e) : e;
            var a = ct[o];
            switch (o) {
                case z:
                case W:
                    return new a(+e);
                case V:
                case K:
                    return new a(e);
                case J:
                    return a(e.source, v.exec(e))
            }
            r || (r = []), i || (i = []);
            var f = r.length;
            while (f--)
                if (r[f] == e) return i[f];
            var l = u ? a(e.length) : {};
            return r.push(e), i.push(l), (u ? wn : Ht)(e, function(e, n) {
                l[n] = qt(e, t, null, r, i)
            }), u && (A.call(e, "index") && (l.index = e.index), A.call(e, "input") && (l.input = e.input)), l
        }

        function Rt(e) {
            return qt(e, !0)
        }

        function zt(e) {
            var t = [];
            return Pt(e, function(e, n) {
                Zt(e) && t.push(n)
            }), t.sort()
        }

        function Wt(e, t) {
            return e ? A.call(e, t) : !1
        }

        function Xt(e) {
            var t = {};
            return Ht(e, function(e, n) {
                t[e] = n
            }), t
        }

        function $t(e) {
            return e === !0 || e === !1 || _.call(e) == z
        }

        function Jt(e) {
            return e instanceof Date || _.call(e) == W
        }

        function Kt(e) {
            return e ? e.nodeType === 1 : !1
        }

        function Qt(e) {
            var t = !0;
            if (!e) return t;
            var n = _.call(e),
                r = e.length;
            return n == U || n == K || n == R || st && Dt(e) || n == $ && typeof r == "number" && Zt(e.splice) ? !r : (Ht(e, function() {
                return t = !1
            }), t)
        }

        function Gt(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null) return e === t;
            var i = _.call(e),
                s = _.call(t);
            i == R && (i = $), s == R && (s = $);
            if (i != s) return !1;
            switch (i) {
                case z:
                case W:
                    return +e == +t;
                case V:
                    return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                case J:
                case K:
                    return e == t + ""
            }
            var o = i == U;
            if (!o) {
                if (e.__wrapped__ || t.__wrapped__) return Gt(e.__wrapped__ || e, t.__wrapped__ || t);
                if (i != $ || ut && (Lt(e) || Lt(t))) return !1;
                var u = !it && Dt(e) ? Object : e.constructor,
                    a = !it && Dt(t) ? Object : t.constructor;
                if (u != a && !(Zt(u) && u instanceof u && Zt(a) && a instanceof a)) return !1
            }
            n || (n = []), r || (r = []);
            var f = n.length;
            while (f--)
                if (n[f] == e) return r[f] == t;
            var l = -1,
                c = !0,
                h = 0;
            n.push(e), r.push(t);
            if (o) {
                h = e.length, c = h == t.length;
                if (c)
                    while (h--)
                        if (!(c = Gt(e[h], t[h], n, r))) break;
                return c
            }
            return Pt(e, function(e, i, s) {
                if (A.call(s, i)) return h++, c = A.call(t, i) && Gt(e, t[i], n, r)
            }), c && Pt(t, function(e, t, n) {
                if (A.call(n, t)) return c = --h > -1
            }), c
        }

        function Yt(e) {
            return H(e) && !B(parseFloat(e))
        }

        function Zt(e) {
            return typeof e == "function"
        }

        function en(e) {
            return e ? ht[typeof e] : !1
        }

        function tn(e) {
            return rn(e) && e != +e
        }

        function nn(e) {
            return e === null
        }

        function rn(e) {
            return typeof e == "number" || _.call(e) == V
        }

        function on(e) {
            return e instanceof RegExp || _.call(e) == J
        }

        function un(e) {
            return typeof e == "string" || _.call(e) == K
        }

        function an(e) {
            return typeof e == "undefined"
        }

        function ln(e, t, n) {
            var r = arguments,
                i = 0,
                s = 2,
                o = r[3],
                a = r[4];
            n !== u && (o = [], a = [], typeof n != "number" && (s = r.length));
            while (++i < s) Ht(r[i], function(t, n) {
                var r, i, s;
                if (t && ((i = Vt(t)) || sn(t))) {
                    var f = o.length;
                    while (f--) {
                        r = o[f] == t;
                        if (r) break
                    }
                    r ? e[n] = a[f] : (o.push(t), a.push(s = (s = e[n], i) ? Vt(s) ? s : [] : sn(s) ? s : {}), e[n] = ln(s, t, u, o, a))
                } else t != null && (e[n] = t)
            });
            return e
        }

        function cn(e, t, n) {
            var r = typeof t == "function",
                s = {};
            if (r) t = xt(t, n);
            else var o = C.apply(i, arguments);
            return Pt(e, function(e, n, i) {
                if (r ? !t(e, n, i) : qn(o, n, 1) < 0) s[n] = e
            }), s
        }

        function hn(e) {
            var t = [];
            return Ht(e, function(e, n) {
                t.push([n, e])
            }), t
        }

        function pn(e, t, n) {
            var r = {};
            if (typeof t != "function") {
                var s = 0,
                    o = C.apply(i, arguments),
                    u = o.length;
                while (++s < u) {
                    var a = o[s];
                    a in e && (r[a] = e[a])
                }
            } else t = xt(t, n), Pt(e, function(e, n, i) {
                t(e, n, i) && (r[n] = e)
            });
            return r
        }

        function dn(e) {
            var t = [];
            return Ht(e, function(e) {
                t.push(e)
            }), t
        }

        function vn(e, t, n) {
            var r = -1,
                i = e ? e.length : 0,
                s = !1;
            return n = (n < 0 ? F(0, i + n) : n) || 0, typeof i == "number" ? s = (un(e) ? e.indexOf(t, n) : qn(e, t, n)) > -1 : Nt(e, function(e) {
                if (++r >= n) return !(s = e === t)
            }), s
        }

        function mn(e, t, n) {
            var r = {};
            return t = xt(t, n), wn(e, function(e, n, i) {
                n = t(e, n, i), A.call(r, n) ? r[n]++ : r[n] = 1
            }), r
        }

        function gn(e, t, n) {
            var r = !0;
            t = xt(t, n);
            if (Vt(e)) {
                var i = -1,
                    s = e.length;
                while (++i < s)
                    if (!(r = !!t(e[i], i, e))) break
            } else Nt(e, function(e, n, i) {
                return r = !!t(e, n, i)
            });
            return r
        }

        function yn(e, t, n) {
            var r = [];
            t = xt(t, n);
            if (Vt(e)) {
                var i = -1,
                    s = e.length;
                while (++i < s) {
                    var o = e[i];
                    t(o, i, e) && r.push(o)
                }
            } else Nt(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            });
            return r
        }

        function bn(e, t, n) {
            var r;
            return t = xt(t, n), wn(e, function(e, n, i) {
                if (t(e, n, i)) return r = e, !1
            }), r
        }

        function wn(e, t, n) {
            if (t && typeof n == "undefined" && Vt(e)) {
                var r = -1,
                    i = e.length;
                while (++r < i)
                    if (t(e[r], r, e) === !1) break
            } else Nt(e, t, n);
            return e
        }

        function En(e, t, n) {
            var r = {};
            return t = xt(t, n), wn(e, function(e, n, i) {
                n = t(e, n, i), (A.call(r, n) ? r[n] : r[n] = []).push(e)
            }), r
        }

        function Sn(e, t) {
            var n = Ot(arguments, 2),
                r = typeof t == "function",
                i = [];
            return wn(e, function(e) {
                i.push((r ? t : e[t]).apply(e, n))
            }), i
        }

        function xn(e, t, n) {
            var r = -1,
                i = e ? e.length : 0,
                s = Array(typeof i == "number" ? i : 0);
            t = xt(t, n);
            if (Vt(e))
                while (++r < i) s[r] = t(e[r], r, e);
            else Nt(e, function(e, n, i) {
                s[++r] = t(e, n, i)
            });
            return s
        }

        function Tn(e, t, n) {
            var r = -Infinity,
                i = -1,
                s = e ? e.length : 0,
                o = r;
            if (t || !Vt(e)) t = !t && un(e) ? wt : xt(t, n), Nt(e, function(e, n, i) {
                var s = t(e, n, i);
                s > r && (r = s, o = e)
            });
            else
                while (++i < s) e[i] > o && (o = e[i]);
            return o
        }

        function Nn(e, t, n) {
            var r = Infinity,
                i = -1,
                s = e ? e.length : 0,
                o = r;
            if (t || !Vt(e)) t = !t && un(e) ? wt : xt(t, n), Nt(e, function(e, n, i) {
                var s = t(e, n, i);
                s < r && (r = s, o = e)
            });
            else
                while (++i < s) e[i] < o && (o = e[i]);
            return o
        }

        function Cn(e, t) {
            return xn(e, t + "")
        }

        function kn(e, t, n, r) {
            var i = arguments.length < 3;
            t = xt(t, r, u);
            if (Vt(e)) {
                var s = -1,
                    o = e.length;
                i && (n = e[++s]);
                while (++s < o) n = t(n, e[s], s, e)
            } else Nt(e, function(e, r, s) {
                n = i ? (i = !1, e) : t(n, e, r, s)
            });
            return n
        }

        function Ln(e, t, n, r) {
            var i = e,
                s = e ? e.length : 0,
                o = arguments.length < 3;
            if (typeof s != "number") {
                var a = fn(e);
                s = a.length
            } else ot && un(e) && (i = e.split(""));
            return t = xt(t, r, u), wn(e, function(e, r, u) {
                r = a ? a[--s] : --s, n = o ? (o = !1, i[r]) : t(n, i[r], r, u)
            }), n
        }

        function An(e, t, n) {
            return t = xt(t, n), yn(e, function(e, n, r) {
                return !t(e, n, r)
            })
        }

        function On(e) {
            var t = -1,
                n = Array(e ? e.length : 0);
            return wn(e, function(e) {
                var r = k(q() * (++t + 1));
                n[t] = n[r], n[r] = e
            }), n
        }

        function Mn(e) {
            var t = e ? e.length : 0;
            return typeof t == "number" ? t : fn(e).length
        }

        function _n(e, t, n) {
            var r;
            t = xt(t, n);
            if (Vt(e)) {
                var i = -1,
                    s = e.length;
                while (++i < s)
                    if (r = t(e[i], i, e)) break
            } else Nt(e, function(e, n, i) {
                return !(r = t(e, n, i))
            });
            return !!r
        }

        function Dn(e, t, n) {
            var r = [];
            t = xt(t, n), wn(e, function(e, n, i) {
                r.push({
                    criteria: t(e, n, i),
                    index: n,
                    value: e
                })
            });
            var i = r.length;
            r.sort(Et);
            while (i--) r[i] = r[i].value;
            return r
        }

        function Pn(e) {
            var t = e ? e.length : 0;
            return typeof t == "number" ? ot && un(e) ? e.split("") : Ot(e) : dn(e)
        }

        function Hn(e, t) {
            var n = fn(t);
            return yn(e, function(e) {
                var r = n.length;
                while (r--) {
                    var i = e[n[r]] === t[n[r]];
                    if (!i) break
                }
                return !!i
            })
        }

        function Bn(e) {
            var t = -1,
                n = e ? e.length : 0,
                r = [];
            while (++t < n) {
                var i = e[t];
                i && r.push(i)
            }
            return r
        }

        function jn(e) {
            var t = -1,
                n = e ? e.length : 0,
                r = C.apply(i, arguments),
                s = bt(r, n),
                o = [];
            while (++t < n) {
                var u = e[t];
                s(u) || o.push(u)
            }
            return o
        }

        function Fn(e, t, n) {
            if (e) {
                var r = e.length;
                return t == null || n ? e[0] : Ot(e, 0, I(F(0, t), r))
            }
        }

        function In(e, t) {
            var n = -1,
                r = e ? e.length : 0,
                i = [];
            while (++n < r) {
                var s = e[n];
                Vt(s) ? O.apply(i, t ? s : In(s)) : i.push(s)
            }
            return i
        }

        function qn(e, t, n) {
            var r = -1,
                i = e ? e.length : 0;
            if (typeof n == "number") r = (n < 0 ? F(0, i + n) : n || 0) - 1;
            else if (n) return r = Jn(e, t), e[r] === t ? r : -1;
            while (++r < i)
                if (e[r] === t) return r;
            return -1
        }

        function Rn(e, t, n) {
            if (!e) return [];
            var r = e.length;
            return t = t == null || n ? 1 : t || 0, Ot(e, 0, I(F(0, r - t), r))
        }

        function Un(e) {
            var t = arguments,
                n = t.length,
                r = {
                    0: {}
                },
                i = -1,
                s = e ? e.length : 0,
                o = s >= 100,
                u = [],
                a = u;
            e: while (++i < s) {
                var f = e[i];
                if (o) var l = f + "",
                    c = A.call(r[0], l) ? !(a = r[0][l]) : a = r[0][l] = [];
                if (c || qn(a, f) < 0) {
                    o && a.push(f);
                    var h = n;
                    while (--h)
                        if (!(r[h] || (r[h] = bt(t[h], 0, 100)))(f)) continue e;
                    u.push(f)
                }
            }
            return u
        }

        function zn(e, t, n) {
            if (e) {
                var r = e.length;
                return t == null || n ? e[r - 1] : Ot(e, F(0, r - t))
            }
        }

        function Wn(e, t, n) {
            var r = e ? e.length : 0;
            typeof n == "number" && (r = (n < 0 ? F(0, r + n) : I(n, r - 1)) + 1);
            while (r--)
                if (e[r] === t) return r;
            return -1
        }

        function Xn(e, t) {
            var n = -1,
                r = e ? e.length : 0,
                i = {};
            while (++n < r) {
                var s = e[n];
                t ? i[s] = t[n] : i[s[0]] = s[1]
            }
            return i
        }

        function Vn(e, t, n) {
            e = +e || 0, n = +n || 1, t == null && (t = e, e = 0);
            var r = -1,
                i = F(0, N((t - e) / n)),
                s = Array(i);
            while (++r < i) s[r] = e, e += n;
            return s
        }

        function $n(e, t, n) {
            return Ot(e, t == null || n ? 1 : F(0, t))
        }

        function Jn(e, t, n, r) {
            var i = 0,
                s = e ? e.length : i;
            n = n ? xt(n, r) : pr, t = n(t);
            while (i < s) {
                var o = i + s >>> 1;
                n(e[o]) < t ? i = o + 1 : s = o
            }
            return i
        }

        function Kn() {
            return Qn(C.apply(i, arguments))
        }

        function Qn(e, t, n, r) {
            var i = -1,
                s = e ? e.length : 0,
                o = [],
                u = o;
            typeof t == "function" && (r = n, n = t, t = !1);
            var a = !t && s >= 75;
            if (a) var f = {};
            n && (u = [], n = xt(n, r));
            while (++i < s) {
                var l = e[i],
                    c = n ? n(l, i, e) : l;
                if (a) var h = c + "",
                    p = A.call(f, h) ? !(u = f[h]) : u = f[h] = [];
                if (t ? !i || u[u.length - 1] !== c : p || qn(u, c) < 0)(n || a) && u.push(c), o.push(l)
            }
            return o
        }

        function Gn(e) {
            var t = -1,
                n = e ? e.length : 0,
                r = bt(arguments, 1, 20),
                i = [];
            while (++t < n) {
                var s = e[t];
                r(s) || i.push(s)
            }
            return i
        }

        function Yn(e) {
            var t = -1,
                n = e ? Tn(Cn(arguments, "length")) : 0,
                r = Array(n);
            while (++t < n) r[t] = Cn(arguments, t);
            return r
        }

        function Zn(e, t) {
            return e < 1 ? t() : function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }

        function er(e, t) {
            return Y || D && arguments.length > 2 ? D.call.apply(D, arguments) : St(e, t, Ot(arguments, 2))
        }

        function tr(e) {
            var t = arguments,
                n = t.length > 1 ? 0 : (t = zt(e), -1),
                r = t.length;
            while (++n < r) {
                var i = t[n];
                e[i] = er(e[i], e)
            }
            return e
        }

        function nr(e, t) {
            return St(e, t, Ot(arguments, 2))
        }

        function rr() {
            var e = arguments;
            return function() {
                var t = arguments,
                    n = e.length;
                while (n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }

        function ir(e, t, n) {
            function u() {
                o = null, n || (i = e.apply(s, r))
            }
            var r, i, s, o;
            return function() {
                var a = n && !o;
                return r = arguments, s = this, clearTimeout(o), o = setTimeout(u, t), a && (i = e.apply(s, r)), i
            }
        }

        function sr(e, n) {
            var r = Ot(arguments, 2);
            return setTimeout(function() {
                e.apply(t, r)
            }, n)
        }

        function or(e) {
            var n = Ot(arguments, 1);
            return setTimeout(function() {
                e.apply(t, n)
            }, 1)
        }

        function ur(e, t) {
            var n = {};
            return function() {
                var r = t ? t.apply(this, arguments) : arguments[0];
                return A.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
        }

        function ar(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }

        function fr(e) {
            return St(e, Ot(arguments, 1))
        }

        function lr(e, t) {
            function u() {
                o = new Date, s = null, r = e.apply(i, n)
            }
            var n, r, i, s, o = 0;
            return function() {
                var a = new Date,
                    f = t - (a - o);
                return n = arguments, i = this, f <= 0 ? (clearTimeout(s), s = null, o = a, r = e.apply(i, n)) : s || (s = setTimeout(u, f)), r
            }
        }

        function cr(e, t) {
            return function() {
                var n = [e];
                return O.apply(n, arguments), t.apply(this, n)
            }
        }

        function hr(e) {
            return e == null ? "" : (e + "").replace(E, kt)
        }

        function pr(e) {
            return e
        }

        function dr(e) {
            wn(zt(e), function(t) {
                var n = dt[t] = e[t];
                dt.prototype[t] = function() {
                    var e = [this.__wrapped__];
                    O.apply(e, arguments);
                    var t = n.apply(dt, e);
                    return new dt(t)
                }
            })
        }

        function vr() {
            return e._ = f, this
        }

        function mr(e, t) {
            return e == null && t == null && (t = 1), e = +e || 0, t == null && (t = e, e = 0), e + k(q() * ((+t || 0) - e + 1))
        }

        function gr(e, t) {
            var n = e ? e[t] : null;
            return Zt(n) ? e[t]() : n
        }

        function yr(e, t, n) {
            e || (e = ""), n || (n = {});
            var r, i, s = dt.templateSettings,
                o = 0,
                u = n.interpolate || s.interpolate || w,
                a = "__p += '",
                f = n.variable || s.variable,
                c = f,
                v = RegExp((n.escape || s.escape || w).source + "|" + u.source + "|" + (u === b ? y : w).source + "|" + (n.evaluate || s.evaluate || w).source + "|$", "g");
            e.replace(v, function(t, n, i, s, u, f) {
                return i || (i = s), a += e.slice(o, f).replace(S, Ct), n && (a += "' +\n__e(" + n + ") +\n'"), u && (a += "';\n" + u + ";\n__p += '"), i && (a += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), r || (r = u || l.test(n || i)), o = f + t.length, t
            }), a += "';\n";
            if (!c) {
                f = "obj";
                if (r) a = "with (" + f + ") {\n" + a + "\n}\n";
                else {
                    var g = RegExp("(\\(\\s*)" + f + "\\." + f + "\\b", "g");
                    a = a.replace(m, "$&" + f + ".").replace(g, "$1__d")
                }
            }
            a = (r ? a.replace(h, "") : a).replace(p, "$1").replace(d, "$1;"), a = "function(" + f + ") {\n" + (c ? "" : f + " || (" + f + " = {});\n") + "var __t, __p = '', __e = _.escape" + (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : (c ? "" : ", __d = " + f + "." + f + " || " + f) + ";\n") + a + "return __p\n}";
            var E = ft ? "\n//@ sourceURL=" + (n.sourceURL || "/lodash/template/source[" + T++ + "]") : "";
            try {
                i = Function("_", "return " + a + E)(dt)
            } catch (x) {
                throw x.source = a, x
            }
            return t ? i(t) : (i.source = a, i)
        }

        function br(e, t, n) {
            e = +e || 0;
            var r = -1,
                i = Array(e);
            while (++r < e) i[r] = t.call(n, r);
            return i
        }

        function wr(e) {
            return e == null ? "" : (e + "").replace(c, Mt)
        }

        function Er(e) {
            return (e == null ? "" : e + "") + ++o
        }

        function Sr(e, t) {
            return t(e), e
        }

        function xr() {
            return this.__wrapped__ + ""
        }

        function Tr() {
            return this.__wrapped__
        }
        var n = typeof exports == "object" && exports,
            r = typeof global == "object" && global;
        r.global === r && (e = r);
        var i = [],
            s = new function() {},
            o = 0,
            u = s,
            a = 30,
            f = e._,
            l = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,
            c = /&(?:amp|lt|gt|quot|#x27);/g,
            h = /\b__p \+= '';/g,
            p = /\b(__p \+=) '' \+/g,
            d = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            v = /\w*$/,
            m = /(?:__e|__t = )\(\s*(?![\d\s"']|this\.)/g,
            g = RegExp("^" + (s.valueOf + "").replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            y = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,
            b = /<%=([\s\S]+?)%>/g,
            w = /($^)/,
            E = /[&<>"']/g,
            S = /['\n\r\t\u2028\u2029\\]/g,
            x = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            T = 0,
            N = Math.ceil,
            C = i.concat,
            k = Math.floor,
            L = g.test(L = Object.getPrototypeOf) && L,
            A = s.hasOwnProperty,
            O = i.push,
            M = s.propertyIsEnumerable,
            _ = s.toString,
            D = g.test(D = Ot.bind) && D,
            P = g.test(P = Array.isArray) && P,
            H = e.isFinite,
            B = e.isNaN,
            j = g.test(j = Object.keys) && j,
            F = Math.max,
            I = Math.min,
            q = Math.random,
            R = "[object Arguments]",
            U = "[object Array]",
            z = "[object Boolean]",
            W = "[object Date]",
            X = "[object Function]",
            V = "[object Number]",
            $ = "[object Object]",
            J = "[object RegExp]",
            K = "[object String]",
            Q = !!e.attachEvent,
            G = D && !/\n|true/.test(D + Q),
            Y = D && !G,
            Z = j && (Q || G),
            et, tt, nt = (nt = {
                0: 1,
                length: 1
            }, i.splice.call(nt, 0, 1), nt[0]),
            rt = !0;
        (function() {
            function t() {
                this.x = 1
            }
            var e = [];
            t.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var n in new t) e.push(n);
            for (n in arguments) rt = !n;
            et = !/valueOf/.test(e), tt = e[0] != "x"
        })(1);
        var it = arguments.constructor == Object,
            st = !Dt(arguments),
            ot = "x" [0] + Object("x")[0] != "xx";
        try {
            var ut = ({
                toString: 0
            } + "", _.call(document) == $)
        } catch (at) {}
        try {
            var ft = (Function("//@")(), !Q)
        } catch (at) {}
        var lt = {};
        lt[X] = !1, lt[R] = lt[U] = lt[z] = lt[W] = lt[V] = lt[$] = lt[J] = lt[K] = !0;
        var ct = {};
        ct[U] = Array, ct[z] = Boolean, ct[W] = Date, ct[$] = Object, ct[V] = Number, ct[J] = RegExp, ct[K] = String;
        var ht = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                "undefined": !1
            },
            pt = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "   ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            };
        dt.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: b,
            variable: ""
        };
        var vt = yr("<% if (obj.useStrict) { %>'use strict';\n<% } %>var index, iteratee = <%= firstArg %>, result = <%= firstArg %>;\nif (!<%= firstArg %>) return result;\n<%= top %>;\n<% if (arrayLoop) { %>var length = iteratee.length; index = -1;\nif (typeof length == 'number') {  <% if (noCharByIndex) { %>\n  if (isString(iteratee)) {\n    iteratee = iteratee.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= arrayLoop %>\n  }\n}\nelse {  <%  } else if (nonEnumArgs) { %>\n  var length = iteratee.length; index = -1;\n  if (length && isArguments(iteratee)) {\n    while (++index < length) {\n      index += '';\n      <%= objectLoop %>\n    }\n  } else {  <% } %>  <% if (!hasDontEnumBug) { %>\n  var skipProto = typeof iteratee == 'function' && \n    propertyIsEnumerable.call(iteratee, 'prototype');\n  <% } %>  <% if (isKeysFast && useHas) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iteratee] ? nativeKeys(iteratee) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    <% if (!hasDontEnumBug) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>    <%= objectLoop %>\n    <% if (!hasDontEnumBug) { %>}\n<% } %>  }  <% } else { %>\n  for (index in iteratee) {<%    if (!hasDontEnumBug || useHas) { %>\n    if (<%      if (!hasDontEnumBug) { %>!(skipProto && index == 'prototype')<% }      if (!hasDontEnumBug && useHas) { %> && <% }      if (useHas) { %>hasOwnProperty.call(iteratee, index)<% }    %>) {    <% } %>\n    <%= objectLoop %>;    <% if (!hasDontEnumBug || useHas) { %>\n    }<% } %>\n  }  <% } %>  <% if (hasDontEnumBug) { %>\n\n  var ctor = iteratee.constructor;\n    <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === iteratee) && <%      } %>hasOwnProperty.call(iteratee, index)) {\n    <%= objectLoop %>\n  }    <% } %>  <% } %>  <% if (arrayLoop || nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result"),
            mt = {
                args: "object, source, guard",
                top: "for (var argsIndex = 1, argsLength = typeof guard == 'number' ? 2 : arguments.length; argsIndex < argsLength; argsIndex++) {\n  if ((iteratee = arguments[argsIndex])) {",
                objectLoop: "result[index] = iteratee[index]",
                bottom: "  }\n}"
            },
            gt = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
                arrayLoop: "if (callback(iteratee[index], index, collection) === false) return result",
                objectLoop: "if (callback(iteratee[index], index, collection) === false) return result"
            },
            yt = {
                arrayLoop: null
            },
            Nt = Tt(gt),
            _t = Tt(mt);
        st && (Dt = function(e) {
            return e ? A.call(e, "callee") : !1
        });
        var Pt = Tt(gt, yt, {
                useHas: !1
            }),
            Ht = Tt(gt, yt),
            Ft = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            },
            It = Xt(Ft),
            Ut = Tt(mt, {
                objectLoop: "if (result[index] == null) " + mt.objectLoop
            }),
            Vt = P || function(e) {
                return it && e instanceof Array || _.call(e) == U
            };
        Zt(/x/) && (Zt = function(e) {
            return e instanceof Function || _.call(e) == X
        });
        var sn = L ? function(e) {
                if (!e || typeof e != "object") return !1;
                var t = e.valueOf,
                    n = typeof t == "function" && (n = L(t)) && L(n);
                return n ? e == n || L(e) == n && !Dt(e) : Bt(e)
            } : Bt,
            fn = j ? function(e) {
                return typeof e == "function" && M.call(e, "prototype") ? jt(e) : en(e) ? j(e) : []
            } : jt;
        dt.after = Zn, dt.assign = _t, dt.bind = er, dt.bindAll = tr, dt.bindKey = nr, dt.compact = Bn, dt.compose = rr, dt.countBy = mn, dt.debounce = ir, dt.defaults = Ut, dt.defer = or, dt.delay = sr, dt.difference = jn, dt.filter = yn, dt.flatten = In, dt.forEach = wn, dt.forIn = Pt, dt.forOwn = Ht, dt.functions = zt, dt.groupBy = En, dt.initial = Rn, dt.intersection = Un, dt.invert = Xt, dt.invoke = Sn, dt.keys = fn, dt.map = xn, dt.max = Tn, dt.memoize = ur, dt.merge = ln, dt.min = Nn, dt.object = Xn, dt.omit = cn, dt.once = ar, dt.pairs = hn, dt.partial = fr, dt.pick = pn, dt.pluck = Cn, dt.range = Vn, dt.reject = An, dt.rest = $n, dt.shuffle = On, dt.sortBy = Dn, dt.tap = Sr, dt.throttle = lr, dt.times = br, dt.toArray = Pn, dt.union = Kn, dt.uniq = Qn, dt.values = dn, dt.where = Hn, dt.without = Gn, dt.wrap = cr, dt.zip = Yn, dt.collect = xn, dt.drop = $n, dt.each = wn, dt.extend = _t, dt.methods = zt, dt.select = yn, dt.tail = $n, dt.unique = Qn, dr(dt), dt.clone = qt, dt.cloneDeep = Rt, dt.contains = vn, dt.escape = hr, dt.every = gn, dt.find = bn, dt.has = Wt, dt.identity = pr, dt.indexOf = qn, dt.isArguments = Dt, dt.isArray = Vt, dt.isBoolean = $t, dt.isDate = Jt, dt.isElement = Kt, dt.isEmpty = Qt, dt.isEqual = Gt, dt.isFinite = Yt, dt.isFunction = Zt, dt.isNaN = tn, dt.isNull = nn, dt.isNumber = rn, dt.isObject = en, dt.isPlainObject = sn, dt.isRegExp = on, dt.isString = un, dt.isUndefined = an, dt.lastIndexOf = Wn, dt.mixin = dr, dt.noConflict = vr, dt.random = mr, dt.reduce = kn, dt.reduceRight = Ln, dt.result = gr, dt.size = Mn, dt.some = _n, dt.sortedIndex = Jn, dt.template = yr, dt.unescape = wr, dt.uniqueId = Er, dt.all = gn, dt.any = _n, dt.detect = bn, dt.foldl = kn, dt.foldr = Ln, dt.include = vn, dt.inject = kn, Ht(dt, function(e, t) {
            dt.prototype[t] || (dt.prototype[t] = function() {
                var t = [this.__wrapped__];
                return O.apply(t, arguments), e.apply(dt, t)
            })
        }), dt.first = Fn, dt.last = zn, dt.take = Fn, dt.head = Fn, Ht(dt, function(e, t) {
            dt.prototype[t] || (dt.prototype[t] = function(t, n) {
                var r = e(this.__wrapped__, t, n);
                return t == null || n ? r : new dt(r)
            })
        }), dt.VERSION = "1.0.0-rc.3", dt.prototype.toString = xr, dt.prototype.value = Tr, dt.prototype.valueOf = Tr, Nt(["join", "pop", "shift"], function(e) {
            var t = i[e];
            dt.prototype[e] = function() {
                return t.apply(this.__wrapped__, arguments)
            }
        }), Nt(["push", "reverse", "sort", "unshift"], function(e) {
            var t = i[e];
            dt.prototype[e] = function() {
                return t.apply(this.__wrapped__, arguments), this
            }
        }), Nt(["concat", "slice", "splice"], function(e) {
            var t = i[e];
            dt.prototype[e] = function() {
                var e = t.apply(this.__wrapped__, arguments);
                return new dt(e)
            }
        }), nt && Nt(["pop", "shift", "splice"], function(e) {
            var t = i[e],
                n = e == "splice";
            dt.prototype[e] = function() {
                var e = this.__wrapped__,
                    r = t.apply(e, arguments);
                return e.length === 0 && delete e[0], n ? new dt(r) : r
            }
        }), dt._each = Nt, dt._iteratorTemplate = vt, typeof define == "function" && typeof define.amd == "object" && define.amd ? (e._ = dt, define(function() {
            return dt
        })) : n ? typeof module == "object" && module && module.exports == n ? (module.exports = dt)._ = dt : n._ = dt : e._ = dt
    }(this),
    function(e, t) {
        function y(e) {
            m.put.call(this, e)
        }

        function b(e) {
            this.parent = e, this.byStart = [{
                start: -1,
                end: -1
            }], this.byEnd = [{
                start: -1,
                end: -1
            }], this.animating = [], this.startIndex = 0, this.endIndex = 0, this.previousUpdateTime = -1, Object.defineProperty(this, "count", {
                get: function() {
                    return this.byStart.length
                }
            })
        }

        function w(e, t, n) {
            return e[t] && e[t] === n
        }

        function E(e, t) {
            var n = {};
            for (var r in e) u.call(t, r) && u.call(e, r) && (n[r] = e[r]);
            return n
        }

        function S(e, t) {
            return function() {
                if (g.plugin.debug) return e.apply(this, arguments);
                try {
                    return e.apply(this, arguments)
                } catch (n) {
                    g.plugin.errors.push({
                        plugin: t,
                        thrown: n,
                        source: e.toString()
                    }), this.emit("pluginerror", g.plugin.errors)
                }
            }
        }
        if (!t.addEventListener) {
            e.Popcorn = {
                isSupported: !1
            };
            var n = "byId forEach extend effects error guid sizeOf isArray nop position disable enable destroyaddTrackEvent removeTrackEvent getTrackEvents getTrackEvent getLastTrackEventId timeUpdate plugin removePlugin compose effect xhr getJSONP getScript".split(/\s+/);
            while (n.length) e.Popcorn[n.shift()] = function() {};
            return
        }
        var r = Array.prototype,
            i = Object.prototype,
            s = r.forEach,
            o = r.slice,
            u = i.hasOwnProperty,
            a = i.toString,
            f = e.Popcorn,
            l = [],
            c = !1,
            h = !1,
            p = {
                events: {
                    hash: {},
                    apis: {}
                }
            },
            d = function() {
                return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t, n) {
                    e.setTimeout(t, 16)
                }
            }(),
            v = function(e) {
                return Object.keys ? Object.keys(e) : function(e) {
                    var t, n = [];
                    for (t in e) u.call(e, t) && n.push(t);
                    return n
                }(e)
            },
            m = {
                put: function(e) {
                    Object.getOwnPropertyNames(e).forEach(function(t) {
                        this[t] = e[t]
                    }, this)
                }
            },
            g = function(e, t) {
                return new g.p.init(e, t || null)
            };
        g.version = "d4df049", g.isSupported = !0, g.instances = [], g.p = g.prototype = {
                init: function(e, n) {
                    var r, i, s = this;
                    if (typeof e == "function") {
                        if (t.readyState === "complete") {
                            e(t, g);
                            return
                        }
                        l.push(e);
                        if (!c) {
                            c = !0;
                            var o = function() {
                                h = !0, t.removeEventListener("DOMContentLoaded", o, !1);
                                for (var e = 0, n = l.length; e < n; e++) l[e].call(t, g);
                                l = null
                            };
                            t.addEventListener("DOMContentLoaded", o, !1)
                        }
                        return
                    }
                    if (typeof e == "string") try {
                        r = t.querySelector(e)
                    } catch (u) {
                        throw new Error("Popcorn.js Error: Invalid media element selector: " + e)
                    }
                    this.media = r || e, i = this.media.nodeName && this.media.nodeName.toLowerCase() || "video", this[i] = this.media, this.options = g.extend({}, n) || {}, this.id = this.options.id || g.guid(i);
                    if (g.byId(this.id)) throw new Error("Popcorn.js Error: Cannot use duplicate ID (" + this.id + ")");
                    this.isDestroyed = !1, this.data = {
                        running: {
                            cue: []
                        },
                        timeUpdate: g.nop,
                        disabled: {},
                        events: {},
                        hooks: {},
                        history: [],
                        state: {
                            volume: this.media.volume
                        },
                        trackRefs: {},
                        trackEvents: new b(this)
                    }, g.instances.push(this);
                    var a = function() {
                        s.media.currentTime < 0 && (s.media.currentTime = 0), s.media.removeEventListener("loadedmetadata", a, !1);
                        var e, t, n, r, i, o;
                        e = s.media.duration, t = e != e ? Number.MAX_VALUE : e + 1, g.addTrackEvent(s, {
                            start: t,
                            end: t
                        }), s.options.frameAnimation ? (s.data.timeUpdate = function() {
                            g.timeUpdate(s, {}), g.forEach(g.manifest, function(e, t) {
                                n = s.data.running[t];
                                if (n) {
                                    i = n.length;
                                    for (var u = 0; u < i; u++) r = n[u], o = r._natives, o && o.frame && o.frame.call(s, {}, r, s.currentTime())
                                }
                            }), s.emit("timeupdate"), !s.isDestroyed && d(s.data.timeUpdate)
                        }, !s.isDestroyed && d(s.data.timeUpdate)) : (s.data.timeUpdate = function(e) {
                            g.timeUpdate(s, e)
                        }, s.isDestroyed || s.media.addEventListener("timeupdate", s.data.timeUpdate, !1))
                    };
                    return Object.defineProperty(this, "error", {
                        get: function() {
                            return s.media.error
                        }
                    }), s.media.readyState >= 1 ? a() : s.media.addEventListener("loadedmetadata", a, !1), this
                }
            }, g.p.init.prototype = g.p, g.byId = function(e) {
                var t = g.instances,
                    n = t.length,
                    r = 0;
                for (; r < n; r++)
                    if (t[r].id === e) return t[r];
                return null
            }, g.forEach = function(e, t, n) {
                if (!e || !t) return {};
                n = n || this;
                var r, i;
                if (s && e.forEach === s) return e.forEach(t, n);
                if (a.call(e) === "[object NodeList]") {
                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
                    return e
                }
                for (r in e) u.call(e, r) && t.call(n, e[r], r, e);
                return e
            }, g.extend = function(e) {
                var t = e,
                    n = o.call(arguments, 1);
                return g.forEach(n, function(e) {
                    for (var n in e) t[n] = e[n]
                }), t
            }, g.extend(g, {
                noConflict: function(t) {
                    return t && (e.Popcorn = f), g
                },
                error: function(e) {
                    throw new Error(e)
                },
                guid: function(e) {
                    return g.guid.counter++, (e ? e : "") + (+(new Date) + g.guid.counter)
                },
                sizeOf: function(e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                isArray: Array.isArray || function(e) {
                    return a.call(e) === "[object Array]"
                },
                nop: function() {},
                position: function(n) {
                    if (!n.parentNode) return null;
                    var r = n.getBoundingClientRect(),
                        i = {},
                        s = n.ownerDocument,
                        o = t.documentElement,
                        u = t.body,
                        a, f, l, c, h, p;
                    a = o.clientTop || u.clientTop || 0, f = o.clientLeft || u.clientLeft || 0, l = e.pageYOffset && o.scrollTop || u.scrollTop, c = e.pageXOffset && o.scrollLeft || u.scrollLeft, h = Math.ceil(r.top + l - a), p = Math.ceil(r.left + c - f);
                    for (var d in r) i[d] = Math.round(r[d]);
                    return g.extend({}, i, {
                        top: h,
                        left: p
                    })
                },
                disable: function(e, t) {
                    if (e.data.disabled[t]) return;
                    e.data.disabled[t] = !0;
                    if (t in g.registryByName && e.data.running[t])
                        for (var n = e.data.running[t].length - 1, r; n >= 0; n--) r = e.data.running[t][n], r._natives.end.call(e, null, r), e.emit("trackend", g.extend({}, r, {
                            plugin: r.type,
                            type: "trackend"
                        }));
                    return e
                },
                enable: function(e, t) {
                    if (!e.data.disabled[t]) return;
                    e.data.disabled[t] = !1;
                    if (t in g.registryByName && e.data.running[t])
                        for (var n = e.data.running[t].length - 1, r; n >= 0; n--) r = e.data.running[t][n], r._natives.start.call(e, null, r), e.emit("trackstart", g.extend({}, r, {
                            plugin: r.type,
                            type: "trackstart",
                            track: r
                        }));
                    return e
                },
                destroy: function(e) {
                    var t = e.data.events,
                        n = e.data.trackEvents,
                        r, i, s, o;
                    for (i in t) {
                        r = t[i];
                        for (s in r) delete r[s];
                        t[i] = null
                    }
                    for (o in g.registryByName) g.removePlugin(e, o);
                    n.byStart.length = 0, n.byEnd.length = 0, e.isDestroyed || (e.data.timeUpdate && e.media.removeEventListener("timeupdate", e.data.timeUpdate, !1), e.isDestroyed = !0), g.instances.splice(g.instances.indexOf(e), 1)
                }
            }), g.guid.counter = 1, g.extend(g.p, function() {
                var e = "load play pause currentTime playbackRate volume duration preload playbackRate autoplay loop controls muted buffered readyState seeking paused played seekable ended",
                    t = {};
                return g.forEach(e.split(/\s+/g), function(e) {
                    t[e] = function(t) {
                        var n;
                        return typeof this.media[e] == "function" ? (t != null && /play|pause/.test(e) && (this.media.currentTime = g.util.toSeconds(t)), this.media[e](), this) : t != null ? (n = this.media[e], this.media[e] = t, n !== t && this.emit("attrchange", {
                            attribute: e,
                            previousValue: n,
                            currentValue: t
                        }), this) : this.media[e]
                    }
                }), t
            }()), g.forEach("enable disable".split(" "), function(e) {
                g.p[e] = function(t) {
                    return g[e](this, t)
                }
            }), g.extend(g.p, {
                roundTime: function() {
                    return Math.round(this.media.currentTime)
                },
                exec: function(e, t, n) {
                    var r = arguments.length,
                        i = "trackadded",
                        s, o, u;
                    try {
                        o = g.util.toSeconds(e)
                    } catch (a) {}
                    typeof o == "number" && (e = o);
                    if (typeof e == "number" && r === 2) n = t, t = e, e = g.guid("cue");
                    else if (r === 1) t = -1;
                    else {
                        s = this.getTrackEvent(e);
                        if (s) this.data.trackEvents.remove(e), y.end(this, s), g.removeTrackEvent.ref(this, e), i = "cuechange", typeof e == "string" && r === 2 && (typeof t == "number" && (n = s._natives.start), typeof t == "function" && (n = t, t = s.start));
                        else if (r >= 2) {
                            if (typeof t == "string") {
                                try {
                                    o = g.util.toSeconds(t)
                                } catch (a) {}
                                t = o
                            }
                            typeof t == "number" && (n = n || g.nop()), typeof t == "function" && (n = t, t = -1)
                        }
                    }
                    return u = {
                        id: e,
                        start: t,
                        end: t + 1,
                        _running: !1,
                        _natives: {
                            start: n || g.nop,
                            end: g.nop,
                            type: "cue"
                        }
                    }, s && (u = g.extend(s, u)), i === "cuechange" ? (u._id = u.id || u._id || g.guid(u._natives.type), this.data.trackEvents.add(u), y.start(this, u), this.timeUpdate(this, null, !0), g.addTrackEvent.ref(this, u), this.emit(i, g.extend({}, u, {
                        id: e,
                        type: i,
                        previousValue: {
                            time: s.start,
                            fn: s._natives.start
                        },
                        currentValue: {
                            time: t,
                            fn: n || g.nop
                        },
                        track: s
                    }))) : g.addTrackEvent(this, u), this
                },
                mute: function(e) {
                    var t = e == null || e === !0 ? "muted" : "unmuted";
                    return t === "unmuted" && (this.media.muted = !1, this.media.volume = this.data.state.volume), t === "muted" && (this.data.state.volume = this.media.volume, this.media.muted = !0), this.emit(t), this
                },
                unmute: function(e) {
                    return this.mute(e == null ? !1 : !e)
                },
                position: function() {
                    return g.position(this.media)
                },
                toggle: function(e) {
                    return g[this.data.disabled[e] ? "enable" : "disable"](this, e)
                },
                defaults: function(e, t) {
                    return g.isArray(e) ? (g.forEach(e, function(e) {
                        for (var t in e) this.defaults(t, e[t])
                    }, this), this) : (this.options.defaults || (this.options.defaults = {}), this.options.defaults[e] || (this.options.defaults[e] = {}), g.extend(this.options.defaults[e], t), this)
                }
            }), g.Events = {
                UIEvents: "blur focus focusin focusout load resize scroll unload",
                MouseEvents: "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave click dblclick",
                Events: "loadstart progress suspend emptied stalled play pause error loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange"
            }, g.Events.Natives = g.Events.UIEvents + " " + g.Events.MouseEvents + " " + g.Events.Events, p.events.apiTypes = ["UIEvents", "MouseEvents", "Events"],
            function(e, t) {
                var n = p.events.apiTypes,
                    r = e.Natives.split(/\s+/g),
                    i = 0,
                    s = r.length,
                    o;
                for (; i < s; i++) t.hash[r[i]] = !0;
                n.forEach(function(n, r) {
                    t.apis[n] = {};
                    var i = e[n].split(/\s+/g),
                        s = i.length,
                        o = 0;
                    for (; o < s; o++) t.apis[n][i[o]] = !0
                })
            }(g.Events, p.events), g.events = {
                isNative: function(e) {
                    return !!p.events.hash[e]
                },
                getInterface: function(e) {
                    if (!g.events.isNative(e)) return !1;
                    var t = p.events,
                        n = t.apiTypes,
                        r = t.apis,
                        i = 0,
                        s = n.length,
                        o, u;
                    for (; i < s; i++) {
                        u = n[i];
                        if (r[u][e]) {
                            o = u;
                            break
                        }
                    }
                    return o
                },
                all: g.Events.Natives.split(/\s+/g),
                fn: {
                    trigger: function(n, r) {
                        var i, s, o, u = this.data.events[n];
                        if (u) {
                            i = g.events.getInterface(n);
                            if (i) return s = t.createEvent(i), s.initEvent(n, !0, !0, e, 1), this.media.dispatchEvent(s), this;
                            o = u.slice();
                            while (o.length) o.shift().call(this, r)
                        }
                        return this
                    },
                    listen: function(e, t) {
                        var n = this,
                            r = !0,
                            i = g.events.hooks[e],
                            s = e,
                            o, u;
                        if (typeof t != "function") throw new Error("Popcorn.js Error: Listener is not a function");
                        return this.data.events[e] || (this.data.events[e] = [], r = !1), i && (i.add && i.add.call(this, {}, t), i.bind && (e = i.bind), i.handler && (u = t, t = function(t) {
                            i.handler.call(n, t, u)
                        }), r = !0, this.data.events[e] || (this.data.events[e] = [], r = !1)), this.data.events[e].push(t), !r && g.events.all.indexOf(e) > -1 && this.media.addEventListener(e, function(t) {
                            if (n.data.events[e]) {
                                o = n.data.events[e].slice();
                                while (o.length) o.shift().call(n, t)
                            }
                        }, !1), this
                    },
                    unlisten: function(e, t) {
                        var n, r = this.data.events[e];
                        if (!r) return;
                        if (typeof t == "string") {
                            for (var i = 0; i < r.length; i++) r[i].name === t && r.splice(i--, 1);
                            return this
                        }
                        if (typeof t == "function") {
                            while (n !== -1) n = r.indexOf(t), n !== -1 && r.splice(n, 1);
                            return this
                        }
                        return this.data.events[e] = null, this
                    }
                },
                hooks: {
                    canplayall: {
                        bind: "canplaythrough",
                        add: function(e, t) {
                            var n = !1;
                            this.media.readyState && (setTimeout(function() {
                                t.call(this, e)
                            }.bind(this), 0), n = !0), this.data.hooks.canplayall = {
                                fired: n
                            }
                        },
                        handler: function(t, n) {
                            this.data.hooks.canplayall.fired || (n.call(this, t), this.data.hooks.canplayall.fired = !0)
                        }
                    }
                }
            }, g.forEach([
                ["trigger", "emit"],
                ["listen", "on"],
                ["unlisten", "off"]
            ], function(e) {
                g.p[e[0]] = g.p[e[1]] = g.events.fn[e[0]]
            }), y.start = function(e, t) {
                t.end > e.media.currentTime && t.start <= e.media.currentTime && !t._running && (t._running = !0, e.data.running[t._natives.type].push(t), e.data.disabled[t._natives.type] || (t._natives.start.call(e, null, t), e.emit("trackstart", g.extend({}, t, {
                    plugin: t._natives.type,
                    type: "trackstart",
                    track: t
                }))))
            }, y.end = function(e, t) {
                var n;
                (t.end <= e.media.currentTime || t.start > e.media.currentTime) && t._running && (n = e.data.running[t._natives.type], t._running = !1, n.splice(n.indexOf(t), 1), e.data.disabled[t._natives.type] || (t._natives.end.call(e, null, t), e.emit("trackend", g.extend({}, t, {
                    plugin: t._natives.type,
                    type: "trackend",
                    track: t
                }))))
            }, b.prototype.where = function(e) {
                return (this.parent.getTrackEvents() || []).filter(function(t) {
                    var n, r;
                    if (!e) return !0;
                    for (n in e) {
                        r = e[n];
                        if (w(t, n, r) || w(t._natives, n, r)) return !0
                    }
                    return !1
                })
            }, b.prototype.add = function(e) {
                var t = this.byStart,
                    n = this.byEnd,
                    r, i;
                e && e._id && this.parent.data.history.push(e._id), e.start = g.util.toSeconds(e.start, this.parent.options.framerate), e.end = g.util.toSeconds(e.end, this.parent.options.framerate);
                for (r = t.length - 1; r >= 0; r--)
                    if (e.start >= t[r].start) {
                        t.splice(r + 1, 0, e);
                        break
                    }
                for (i = n.length - 1; i >= 0; i--)
                    if (e.end > n[i].end) {
                        n.splice(i + 1, 0, e);
                        break
                    }
                r <= this.parent.data.trackEvents.startIndex && e.start <= this.parent.data.trackEvents.previousUpdateTime && this.parent.data.trackEvents.startIndex++, i <= this.parent.data.trackEvents.endIndex && e.end < this.parent.data.trackEvents.previousUpdateTime && this.parent.data.trackEvents.endIndex++
            }, b.prototype.remove = function(e, t) {
                e instanceof y && (e = e.id);
                if (typeof e == "object") return this.where(e).forEach(function(e) {
                    this.removeTrackEvent(e._id)
                }, this.parent), this;
                var n, r, i, s, o, u = this.byStart.length,
                    a = 0,
                    f = 0,
                    l = [],
                    c = [],
                    h = [],
                    p = [],
                    d = {};
                t = t || {};
                while (--u > -1) n = this.byStart[a], r = this.byEnd[a], n._id || (l.push(n), c.push(r)), n._id && (n._id !== e && l.push(n), r._id !== e && c.push(r), n._id === e && (f = a, o = n)), a++;
                u = this.animating.length, a = 0;
                if (u)
                    while (--u > -1) i = this.animating[a], i._id || h.push(i), i._id && i._id !== e && h.push(i), a++;
                f <= this.startIndex && this.startIndex--, f <= this.endIndex && this.endIndex--, this.byStart = l, this.byEnd = c, this.animating = h, s = this.parent.data.history.length;
                for (var v = 0; v < s; v++) this.parent.data.history[v] !== e && p.push(this.parent.data.history[v]);
                this.parent.data.history = p
            }, g.addTrackEvent = function(e, t) {
                var n;
                if (t instanceof y) return;
                t = new y(t), t && t._natives && t._natives.type && e.options.defaults && e.options.defaults[t._natives.type] && (n = g.extend({}, t), g.extend(t, e.options.defaults[t._natives.type], n)), t._natives && (t._id = t.id || t._id || g.guid(t._natives.type), t._natives._setup && (t._natives._setup.call(e, t), e.emit("tracksetup", g.extend({}, t, {
                    plugin: t._natives.type,
                    type: "tracksetup",
                    track: t
                })))), e.data.trackEvents.add(t), y.start(e, t), this.timeUpdate(e, null, !0), t._id && g.addTrackEvent.ref(e, t), e.emit("trackadded", g.extend({}, t, t._natives ? {
                    plugin: t._natives.type
                } : {}, {
                    type: "trackadded",
                    track: t
                }))
            }, g.addTrackEvent.ref = function(e, t) {
                return e.data.trackRefs[t._id] = t, e
            }, g.removeTrackEvent = function(e, t) {
                var n = e.getTrackEvent(t);
                if (!n) return;
                n._natives._teardown && n._natives._teardown.call(e, n), e.data.trackEvents.remove(t), g.removeTrackEvent.ref(e, t), n._natives && e.emit("trackremoved", g.extend({}, n, {
                    plugin: n._natives.type,
                    type: "trackremoved",
                    track: n
                }))
            }, g.removeTrackEvent.ref = function(e, t) {
                return delete e.data.trackRefs[t], e
            }, g.getTrackEvents = function(e) {
                var t = [],
                    n = e.data.trackEvents.byStart,
                    r = n.length,
                    i = 0,
                    s;
                for (; i < r; i++) s = n[i], s._id && t.push(s);
                return t
            }, g.getTrackEvents.ref = function(e) {
                return e.data.trackRefs
            }, g.getTrackEvent = function(e, t) {
                return e.data.trackRefs[t]
            }, g.getTrackEvent.ref = function(e, t) {
                return e.data.trackRefs[t]
            }, g.getLastTrackEventId = function(e) {
                return e.data.history[e.data.history.length - 1]
            }, g.timeUpdate = function(e, t) {
                var n = e.media.currentTime,
                    r = e.data.trackEvents.previousUpdateTime,
                    i = e.data.trackEvents,
                    s = i.endIndex,
                    o = i.startIndex,
                    u = i.byStart.length,
                    a = i.byEnd.length,
                    f = g.registryByName,
                    l = "trackstart",
                    c = "trackend",
                    h, p, d, v, m, y;
                if (r <= n) {
                    while (i.byEnd[s] && i.byEnd[s].end <= n) {
                        h = i.byEnd[s], v = h._natives, m = v && v.type;
                        if (!!v && !f[m] && !e[m]) {
                            g.removeTrackEvent(e, h._id);
                            return
                        }
                        h._running === !0 && (h._running = !1, y = e.data.running[m], y.splice(y.indexOf(h), 1), e.data.disabled[m] || (v.end.call(e, t, h), e.emit(c, g.extend({}, h, {
                            plugin: m,
                            type: c,
                            track: h
                        })))), s++
                    }
                    while (i.byStart[o] && i.byStart[o].start <= n) {
                        p = i.byStart[o], v = p._natives, m = v && v.type;
                        if (!!v && !f[m] && !e[m]) {
                            g.removeTrackEvent(e, p._id);
                            return
                        }
                        p.end > n && p._running === !1 && (p._running = !0, e.data.running[m].push(p), e.data.disabled[m] || (v.start.call(e, t, p), e.emit(l, g.extend({}, p, {
                            plugin: m,
                            type: l,
                            track: p
                        })))), o++
                    }
                } else if (r > n) {
                    while (i.byStart[o] && i.byStart[o].start > n) {
                        p = i.byStart[o], v = p._natives, m = v && v.type;
                        if (!!v && !f[m] && !e[m]) {
                            g.removeTrackEvent(e, p._id);
                            return
                        }
                        p._running === !0 && (p._running = !1, y = e.data.running[m], y.splice(y.indexOf(p), 1), e.data.disabled[m] || (v.end.call(e, t, p), e.emit(c, g.extend({}, p, {
                            plugin: m,
                            type: c,
                            track: p
                        })))), o--
                    }
                    while (i.byEnd[s] && i.byEnd[s].end > n) {
                        h = i.byEnd[s], v = h._natives, m = v && v.type;
                        if (!!v && !f[m] && !e[m]) {
                            g.removeTrackEvent(e, h._id);
                            return
                        }
                        h.start <= n && h._running === !1 && (h._running = !0, e.data.running[m].push(h), e.data.disabled[m] || (v.start.call(e, t, h), e.emit(l, g.extend({}, h, {
                            plugin: m,
                            type: l,
                            track: h
                        })))), s--
                    }
                }
                i.endIndex = s, i.startIndex = o, i.previousUpdateTime = n, i.byStart.length < u && i.startIndex--, i.byEnd.length < a && i.endIndex--
            }, g.extend(g.p, {
                getTrackEvents: function() {
                    return g.getTrackEvents.call(null, this)
                },
                getTrackEvent: function(e) {
                    return g.getTrackEvent.call(null, this, e)
                },
                getLastTrackEventId: function() {
                    return g.getLastTrackEventId.call(null, this)
                },
                removeTrackEvent: function(e) {
                    return g.removeTrackEvent.call(null, this, e), this
                },
                removePlugin: function(e) {
                    return g.removePlugin.call(null, this, e), this
                },
                timeUpdate: function(e) {
                    return g.timeUpdate.call(null, this, e), this
                },
                destroy: function() {
                    return g.destroy.call(null, this), this
                }
            }), g.manifest = {}, g.registry = [], g.registryByName = {}, g.plugin = function(e, t, n) {
                if (g.protect.natives.indexOf(e.toLowerCase()) >= 0) {
                    g.error("'" + e + "' is a protected function name");
                    return
                }
                var r = typeof t == "function",
                    i = ["start", "end", "type", "manifest"],
                    s = ["_setup", "_teardown", "start", "end", "frame"],
                    a = {},
                    f, l = function(e, t) {
                        return e = e || g.nop, t = t || g.nop,
                            function() {
                                e.apply(this, arguments), t.apply(this, arguments)
                            }
                    };
                g.manifest[e] = n = n || t.manifest || {}, s.forEach(function(n) {
                    t[n] = S(t[n] || g.nop, e)
                });
                var c = function(t, r) {
                    if (!r) return this;
                    if (r.ranges && g.isArray(r.ranges)) return g.forEach(r.ranges, function(t) {
                        var n = g.extend({}, r, t);
                        delete n.ranges, this[e](n)
                    }, this), this;
                    var a = r._natives = {},
                        f = "",
                        c, h;
                    return g.extend(a, t), r._natives.type = r._natives.plugin = e, r._running = !1, a.start = a.start || a["in"], a.end = a.end || a.out, r.once && (a.end = l(a.end, function() {
                        this.removeTrackEvent(r._id)
                    })), a._teardown = l(function() {
                        var e = o.call(arguments),
                            t = this.data.running[a.type];
                        e.unshift(null), e[1]._running && t.splice(t.indexOf(r), 1) && a.end.apply(this, e), e[1]._running = !1, this.emit("trackend", g.extend({}, r, {
                            plugin: a.type,
                            type: "trackend",
                            track: g.getTrackEvent(this, r.id || r._id)
                        }))
                    }, a._teardown), a._teardown = l(a._teardown, function() {
                        this.emit("trackteardown", g.extend({}, r, {
                            plugin: e,
                            type: "trackteardown",
                            track: g.getTrackEvent(this, r.id || r._id)
                        }))
                    }), r.compose = r.compose || [], typeof r.compose == "string" && (r.compose = r.compose.split(" ")), r.effect = r.effect || [], typeof r.effect == "string" && (r.effect = r.effect.split(" ")), r.compose = r.compose.concat(r.effect), r.compose.forEach(function(e) {
                        f = g.compositions[e] || {}, s.forEach(function(e) {
                            a[e] = l(a[e], f[e])
                        })
                    }), r._natives.manifest = n, "start" in r || (r.start = r["in"] || 0), !r.end && r.end !== 0 && (r.end = r.out || Number.MAX_VALUE), u.call(r, "toString") || (r.toString = function() {
                        var t = ["start: " + r.start, "end: " + r.end, "id: " + (r.id || r._id)];
                        return r.target != null && t.push("target: " + r.target), e + " ( " + t.join(", ") + " )"
                    }), r.target || (h = "options" in n && n.options, r.target = h && "target" in h && h.target), !r._id && r._natives && (r._id = g.guid(r._natives.type)), r instanceof y ? (r._natives && (r._id = r.id || r._id || g.guid(r._natives.type), r._natives._setup && (r._natives._setup.call(this, r), this.emit("tracksetup", g.extend({}, r, {
                        plugin: r._natives.type,
                        type: "tracksetup",
                        track: r
                    })))), this.data.trackEvents.add(r), y.start(this, r), this.timeUpdate(this, null, !0), r._id && g.addTrackEvent.ref(this, r)) : g.addTrackEvent(this, r), g.forEach(t, function(e, t) {
                        i.indexOf(t) === -1 && this.on(t, e)
                    }, this), this
                };
                g.p[e] = a[e] = function(n, i) {
                    var s = arguments.length,
                        o, a, f, l, h;
                    if (n && !i) i = n, n = null;
                    else {
                        o = this.getTrackEvent(n);
                        if (!!o) return h = i, l = E(o, h), o._natives._update ? (this.data.trackEvents.remove(o), u.call(i, "start") && (o.start = i.start), u.call(i, "end") && (o.end = i.end), y.end(this, o), r && t.call(this, o), o._natives._update.call(this, o, i), this.data.trackEvents.add(o), y.start(this, o), o._natives.type !== "cue" && this.emit("trackchange", {
                            id: o.id,
                            type: "trackchange",
                            previousValue: l,
                            currentValue: h,
                            track: o
                        }), this) : (g.extend(o, i), this.data.trackEvents.remove(n), o._natives._teardown && o._natives._teardown.call(this, o), g.removeTrackEvent.ref(this, n), r ? c.call(this, t.call(this, o), o) : (o._id = o.id || o._id || g.guid(o._natives.type), o._natives && o._natives._setup && (o._natives._setup.call(this, o), this.emit("tracksetup", g.extend({}, o, {
                            plugin: o._natives.type,
                            type: "tracksetup",
                            track: o
                        }))), this.data.trackEvents.add(o), y.start(this, o), this.timeUpdate(this, null, !0), g.addTrackEvent.ref(this, o)), this.emit("trackchange", {
                            id: o.id,
                            type: "trackchange",
                            previousValue: l,
                            currentValue: o,
                            track: o
                        }), this);
                        i.id = n
                    }
                    return this.data.running[e] = this.data.running[e] || [], a = this.options.defaults && this.options.defaults[e] || {}, f = g.extend({}, a, i), c.call(this, r ? t.call(this, f) : t, f), this
                }, n && g.extend(t, {
                    manifest: n
                });
                var h = {
                    fn: a[e],
                    definition: t,
                    base: t,
                    parents: [],
                    name: e
                };
                return g.registry.push(g.extend(a, h, {
                    type: e
                })), g.registryByName[e] = h, a
            }, g.plugin.errors = [], g.plugin.debug = g.version === "@VERSION", g.removePlugin = function(e, t) {
                if (!t) {
                    t = e, e = g.p;
                    if (g.protect.natives.indexOf(t.toLowerCase()) >= 0) {
                        g.error("'" + t + "' is a protected function name");
                        return
                    }
                    var n = g.registry.length,
                        r;
                    for (r = 0; r < n; r++)
                        if (g.registry[r].name === t) {
                            g.registry.splice(r, 1), delete g.registryByName[t], delete g.manifest[t], delete e[t];
                            return
                        }
                }
                var i = e.data.trackEvents.byStart,
                    s = e.data.trackEvents.byEnd,
                    o = e.data.trackEvents.animating,
                    u, a;
                for (u = 0, a = i.length; u < a; u++) i[u] && i[u]._natives && i[u]._natives.type === t && (i[u]._natives._teardown && i[u]._natives._teardown.call(e, i[u]), i.splice(u, 1), u--, a--, e.data.trackEvents.startIndex <= u && (e.data.trackEvents.startIndex--, e.data.trackEvents.endIndex--)), s[u] && s[u]._natives && s[u]._natives.type === t && s.splice(u, 1);
                for (u = 0, a = o.length; u < a; u++) o[u] && o[u]._natives && o[u]._natives.type === t && (o.splice(u, 1), u--, a--)
            }, g.compositions = {}, g.compose = function(e, t, n) {
                g.manifest[e] = n = n || t.manifest || {}, g.compositions[e] = t
            }, g.plugin.effect = g.effect = g.compose;
        var x = /^(?:\.|#|\[)/;
        g.dom = {
            debug: !1,
            find: function(e, n) {
                var r = null;
                n = n || t;
                if (e) {
                    if (!x.test(e)) {
                        r = t.getElementById(e);
                        if (r !== null) return r
                    }
                    try {
                        r = n.querySelector(e)
                    } catch (i) {
                        if (g.dom.debug) throw new Error(i)
                    }
                }
                return r
            }
        };
        var T = /\?/,
            N = {
                ajax: null,
                url: "",
                data: "",
                dataType: "",
                success: g.nop,
                type: "GET",
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            };
        g.xhr = function(e) {
            var t;
            e.dataType = e.dataType && e.dataType.toLowerCase() || null;
            if (!(!e.dataType || e.dataType !== "jsonp" && e.dataType !== "script")) {
                g.xhr.getJSONP(e.url, e.success, e.dataType === "script");
                return
            }
            t = g.extend({}, N, e), t.ajax = new XMLHttpRequest;
            if (t.ajax) return t.type === "GET" && t.data && (t.url += (T.test(t.url) ? "&" : "?") + t.data, t.data = null), t.ajax.open(t.type, t.url, t.async), t.type === "POST" && t.ajax.setRequestHeader("Content-Type", t.contentType), t.ajax.send(t.data || null), g.xhr.httpData(t)
        }, g.xhr.httpData = function(e) {
            var t, n = null,
                r, i = null;
            return e.ajax.onreadystatechange = function() {
                if (e.ajax.readyState === 4) {
                    try {
                        n = JSON.parse(e.ajax.responseText)
                    } catch (s) {}
                    t = {
                        xml: e.ajax.responseXML,
                        text: e.ajax.responseText,
                        json: n
                    };
                    if (!t.xml || !t.xml.documentElement) {
                        t.xml = null;
                        try {
                            r = new DOMParser, i = r.parseFromString(e.ajax.responseText, "text/xml"), i.getElementsByTagName("parsererror").length || (t.xml = i)
                        } catch (s) {}
                    }
                    e.dataType && (t = t[e.dataType]), e.success.call(e.ajax, t)
                }
            }, t
        }, g.xhr.getJSONP = function(e, n, r) {
            var i = t.head || t.getElementsByTagName("head")[0] || t.documentElement,
                s = t.createElement("script"),
                o = !1,
                u = [],
                a = /(=)\?(?=&|$)|\?\?/,
                f, l, c, h, p;
            r || (p = e.match(/(callback=[^&]*)/), p !== null && p.length ? (l = p[1].split("=")[1], l === "?" && (l = "jsonp"), h = g.guid(l), e = e.replace(/(callback=[^&]*)/, "callback=" + h)) : (h = g.guid("jsonp"), a.test(e) && (e = e.replace(a, "$1" + h)), u = e.split(/\?(.+)?/), e = u[0] + "?", u[1] && (e += u[1] + "&"), e += "callback=" + h), window[h] = function(e) {
                n && n(e), o = !0
            }), s.addEventListener("load", function() {
                r && n && n(), o && delete window[h], i.removeChild(s)
            }, !1), s.src = e, i.insertBefore(s, i.firstChild);
            return
        }, g.getJSONP = g.xhr.getJSONP, g.getScript = g.xhr.getScript = function(e, t) {
            return g.xhr.getJSONP(e, t, !0)
        }, g.util = {
            toSeconds: function(e, t) {
                var n = /^([0-9]+:){0,2}[0-9]+([.;][0-9]+)?$/,
                    r = "Invalid time format",
                    i, s, o, u, a, f;
                return typeof e == "number" ? e : (typeof e == "string" && !n.test(e) && g.error(r), i = e.split(":"), s = i.length - 1, o = i[s], o.indexOf(";") > -1 && (a = o.split(";"), f = 0, t && typeof t == "number" && (f = parseFloat(a[1], 10) / t), i[s] = parseInt(a[0], 10) + f), u = i[0], {
                    1: parseFloat(u, 10),
                    2: parseInt(u, 10) * 60 + parseFloat(i[1], 10),
                    3: parseInt(u, 10) * 3600 + parseInt(i[1], 10) * 60 + parseFloat(i[2], 10)
                }[i.length || 1])
            }
        }, g.p.cue = g.p.exec, g.protect = {
            natives: v(g.p).map(function(e) {
                return e.toLowerCase()
            })
        }, g.forEach({
            listen: "on",
            unlisten: "off",
            trigger: "emit",
            exec: "cue"
        }, function(e, t) {
            var n = g.p[t];
            g.p[t] = function() {
                return typeof console != "undefined" && console.warn && (console.warn("Deprecated method '" + t + "', " + (e == null ? "do not use." : "use '" + e + "' instead.")), g.p[t] = n), g.p[e].apply(this, [].slice.call(arguments))
            }
        }), e.Popcorn = g
    }(window, window.document),
    function(e, t) {
        function r(e) {
            var t = typeof e == "string" ? e : [e.language, e.region].join("-"),
                n = t.split("-");
            return {
                iso6391: t,
                language: n[0] || "",
                region: n[1] || ""
            }
        }
        var n = e.navigator,
            i = r(n.userLanguage || n.language);
        t.locale = {
            get: function() {
                return i
            },
            set: function(e) {
                return i = r(e), t.locale.broadcast(), i
            },
            broadcast: function(e) {
                var n = t.instances,
                    r = n.length,
                    i = 0,
                    s;
                e = e || "locale:changed";
                for (; i < r; i++) s = n[i], e in s.data.events && s.trigger(e)
            }
        }
    }(this, this.Popcorn),
    function(e) {
        var t = Array.prototype,
            n = Object.prototype,
            r = t.forEach,
            i = t.slice,
            s = n.hasOwnProperty,
            o = n.toString;
        e.parsers = {}, e.parser = function(t, n, r) {
            if (e.protect.natives.indexOf(t.toLowerCase()) >= 0) {
                e.error("'" + t + "' is a protected function name");
                return
            }
            typeof n == "function" && !r && (r = n, n = "");
            if (typeof r != "function" || typeof n != "string") return;
            var i = e.events.all,
                o, u = {};
            return o = function(t, i) {
                if (!t) return this;
                var o = this;
                return e.xhr({
                    url: t,
                    dataType: n,
                    success: function(e) {
                        var t = r(e),
                            n, u, a, f = 0;
                        n = t.data || [], u = n.length, a = null;
                        if (!u) return;
                        for (; f < u; f++) {
                            a = n[f];
                            for (var l in a) s.call(a, l) && !!o[l] && o[l](a[l])
                        }
                        i && i()
                    }
                }), this
            }, u[t] = o, e.extend(e.p, u), u
        }
    }(Popcorn),
    function(e) {
        var t = function(t, n) {
                return t = t || e.nop, n = n || e.nop,
                    function() {
                        t.apply(this, arguments), n.apply(this, arguments)
                    }
            },
            n = /^(#([\w\-\_\.]+))$/;
        e.player = function(n, r) {
            if (e[n]) return;
            r = r || {};
            var i = function(n, i, s) {
                s = s || {};
                var o = new Date / 1e3,
                    u = o,
                    a = 0,
                    f = 0,
                    l = 1,
                    c = !1,
                    h = {},
                    p = typeof n == "string" ? e.dom.find(n) : n,
                    d = {},
                    v, m;
                Object.prototype.__defineGetter__ || (d = p || document.createElement("div"));
                for (var g in p) {
                    if (g in d) continue;
                    typeof p[g] == "object" ? d[g] = p[g] : typeof p[g] == "function" ? d[g] = function(e) {
                        return "length" in p[e] && !p[e].call ? p[e] : function() {
                            return p[e].apply(p, arguments)
                        }
                    }(g) : e.player.defineProperty(d, g, {
                        get: function(e) {
                            return function() {
                                return p[e]
                            }
                        }(g),
                        set: e.nop,
                        configurable: !0
                    })
                }
                var y = function() {
                    o = new Date / 1e3, d.paused || (d.currentTime = d.currentTime + (o - u), d.dispatchEvent("timeupdate"), v = setTimeout(y, 10)), u = o
                };
                return d.play = function() {
                    this.paused = !1, d.readyState >= 4 && (u = new Date / 1e3, d.dispatchEvent("play"), y())
                }, d.pause = function() {
                    this.paused = !0, d.dispatchEvent("pause")
                }, e.player.defineProperty(d, "currentTime", {
                    get: function() {
                        return a
                    },
                    set: function(e) {
                        return a = +e, d.dispatchEvent("timeupdate"), a
                    },
                    configurable: !0
                }), e.player.defineProperty(d, "volume", {
                    get: function() {
                        return l
                    },
                    set: function(e) {
                        return l = +e, d.dispatchEvent("volumechange"), l
                    },
                    configurable: !0
                }), e.player.defineProperty(d, "muted", {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        return c = +e, d.dispatchEvent("volumechange"), c
                    },
                    configurable: !0
                }), e.player.defineProperty(d, "readyState", {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        return f = e, f
                    },
                    configurable: !0
                }), d.addEventListener = function(e, t) {
                    return h[e] || (h[e] = []), h[e].push(t), t
                }, d.removeEventListener = function(e, t) {
                    var n, r = h[e];
                    if (!r) return;
                    for (n = h[e].length - 1; n >= 0; n--) t === r[n] && r.splice(n, 1);
                    return t
                }, d.dispatchEvent = function(t) {
                    var n, r = this,
                        i, s = t.type;
                    s || (s = t, i = e.events.getInterface(s), i && (n = document.createEvent(i), n.initEvent(s, !0, !0, window, 1)));
                    if (h[s])
                        for (var o = h[s].length - 1; o >= 0; o--) h[s][o].call(r, n, r)
                }, d.src = i || "", d.duration = 0, d.paused = !0, d.ended = 0, s && s.events && e.forEach(s.events, function(e, t) {
                    d.addEventListener(t, e, !1)
                }), r._canPlayType(p.nodeName, i) !== !1 ? r._setup ? r._setup.call(d, s) : (d.readyState = 4, d.dispatchEvent("loadedmetadata"), d.dispatchEvent("loadeddata"), d.dispatchEvent("canplaythrough")) : setTimeout(function() {
                    d.dispatchEvent("error")
                }, 0), m = new e.p.init(d, s), r._teardown && (m.destroy = t(m.destroy, function() {
                    r._teardown.call(d, s)
                })), m
            };
            i.canPlayType = r._canPlayType = r._canPlayType || e.nop, e[n] = e.player.registry[n] = i
        }, e.player.registry = {}, e.player.defineProperty = Object.defineProperty || function(t, n, r) {
            t.__defineGetter__(n, r.get || e.nop), t.__defineSetter__(n, r.set || e.nop)
        }, e.player.playerQueue = function() {
            var e = [],
                t = !1;
            return {
                next: function() {
                    t = !1, e.shift(), e[0] && e[0]()
                },
                add: function(n) {
                    e.push(function() {
                        t = !0, n && n()
                    }), !t && e[0]()
                }
            }
        }, e.smart = function(t, n, r) {
            var i = typeof t == "string" ? e.dom.find(t) : t,
                s, o, u, a, f, l, c, h = "HTMLYouTubeVideoElement HTMLVimeoVideoElement HTMLSoundCloudAudioElement HTMLNullVideoElement".split(" ");
            if (!i) {
                e.error("Specified target `" + t + "` was not found.");
                return
            }
            n = typeof n == "string" ? [n] : n;
            for (s = 0, c = n.length; s < c; s++) {
                o = n[s];
                for (u = 0; u < h.length; u++) {
                    f = e[h[u]];
                    if (f && f._canPlaySrc(o) === "probably") return a = f(i), l = e(a, r), setTimeout(function() {
                        a.src = o
                    }, 0), l
                }
                for (var p in e.player.registry)
                    if (e.player.registry.hasOwnProperty(p) && e.player.registry[p].canPlayType(i.nodeName, o)) return e[p](i, o, r)
            }
            var d, v = e.guid("popcorn-video-");
            d = '<video id="' + v + '" preload=auto autobuffer>';
            for (s = 0, c = n.length; s < c; s++) d += '<source src="' + n[s] + '">';
            return d += "</video>", i.innerHTML = d, r && r.events && r.events.error && i.addEventListener("error", r.events.error, !1), e("#" + v, r)
        }
    }(Popcorn),
    function(e, t) {
        var n = e.document,
            r = e.location,
            i = /:\/\//,
            s = r.href.replace(r.href.split("/").slice(-1)[0], ""),
            o = function(e, t, n) {
                e = e || 0, t = (t || e || 0) + 1, n = n || 1;
                var r = Math.ceil((t - e) / n) || 0,
                    i = 0,
                    s = [];
                s.length = r;
                while (i < r) s[i++] = e, e += n;
                return s
            };
        t.sequence = function(e, n) {
            return new t.sequence.init(e, n)
        }, t.sequence.init = function(e, r) {
            this.parent = n.getElementById(e), this.seqId = t.guid("__sequenced"), this.queue = [], this.playlist = [], this.inOuts = {
                ofVideos: [],
                ofClips: []
            }, this.dims = {
                width: 0,
                height: 0
            }, this.active = 0, this.cycling = !1, this.playing = !1, this.times = {
                last: 0
            }, this.events = {};
            var o = this,
                u = 0;
            return t.forEach(r, function(r, u) {
                var a = n.createElement("video");
                a.preload = "auto", a.controls = !0, a.style.display = u && "none" || "", a.id = o.seqId + "-" + u, o.queue.push(a);
                var f = r["in"],
                    l = r.out;
                o.inOuts.ofVideos.push({
                    "in": f !== undefined && f || 1,
                    out: l !== undefined && l || 0
                }), o.inOuts.ofVideos[u].out = o.inOuts.ofVideos[u].out || o.inOuts.ofVideos[u]["in"] + 2, a.src = i.test(r.src) ? r.src : s + r.src, a.setAttribute("data-sequence-owner", e), a.setAttribute("data-sequence-guid", o.seqId), a.setAttribute("data-sequence-id", u), a.setAttribute("data-sequence-clip", [o.inOuts.ofVideos[u]["in"], o.inOuts.ofVideos[u].out].join(":")), o.parent.appendChild(a), o.playlist.push(t("#" + a.id))
            }), o.inOuts.ofVideos.forEach(function(e) {
                var t = e.out - e["in"],
                    n = {
                        "in": u,
                        out: u + t
                    };
                o.inOuts.ofClips.push(n), u = n.out + 1
            }), t.forEach(this.queue, function(e, n) {
                function r(t) {
                    return n || (o.dims.width = e.videoWidth, o.dims.height = e.videoHeight), e.currentTime = o.inOuts.ofVideos[n]["in"] - .5, e.removeEventListener("canplaythrough", r, !1), !0
                }
                e.addEventListener("canplaythrough", r, !1), e.addEventListener("play", function(e) {
                    o.playing = !0
                }, !1), e.addEventListener("pause", function(e) {
                    o.playing = !1
                }, !1), e.addEventListener("timeupdate", function(n) {
                    var r = n.srcElement || n.target,
                        i = +(r.dataset && r.dataset.sequenceId || r.getAttribute("data-sequence-id")),
                        s = Math.floor(e.currentTime);
                    o.times.last !== s && i === o.active && (o.times.last = s, s === o.inOuts.ofVideos[i].out && t.sequence.cycle.call(o, i))
                }, !1)
            }), this
        }, t.sequence.init.prototype = t.sequence.prototype, t.sequence.cycle = function(e) {
            this.queue || t.error("Popcorn.sequence.cycle is not a public method");
            var n = this.queue,
                r = this.inOuts.ofVideos,
                i = n[e],
                s = 0,
                o, u, a, f;
            return n[e + 1] && (s = e + 1), n[e + 1] ? (o = n[s], u = r[s], t.extend(o, {
                width: this.dims.width,
                height: this.dims.height
            }), a = this.playlist[s], f = this.playlist[e], i.pause(), this.active = s, this.times.last = u["in"] - 1, a.currentTime(u["in"]), a[s ? "play" : "pause"](), this.trigger("cycle", {
                position: {
                    previous: e,
                    current: s
                }
            }), s && (i.style.display = "none", o.style.display = ""), this.cycling = !1) : (s = 0, this.playlist[e].pause()), this
        };
        var u = ["timeupdate", "play", "pause"];
        t.extend(t.sequence.prototype, {
            eq: function(e) {
                return this.playlist[e]
            },
            remove: function() {
                this.parent.innerHTML = null
            },
            clip: function(e) {
                return this.inOuts.ofVideos[e]
            },
            duration: function() {
                var e = 0,
                    t = this.inOuts.ofClips,
                    n = 0;
                for (; n < t.length; n++) e += t[n].out - t[n]["in"] + 1;
                return e - 1
            },
            play: function() {
                return this.playlist[this.active].play(), this
            },
            exec: function(e, n) {
                var r = this.active;
                return this.inOuts.ofClips.forEach(function(t, n) {
                    e >= t["in"] && e <= t.out && (r = n)
                }), e += this.inOuts.ofVideos[r]["in"] - this.inOuts.ofClips[r]["in"], t.addTrackEvent(this.playlist[r], {
                    start: e - 1,
                    end: e,
                    _running: !1,
                    _natives: {
                        start: n || t.nop,
                        end: t.nop,
                        type: "exec"
                    }
                }), this
            },
            listen: function(e, n) {
                var r = this,
                    i = this.playlist,
                    s = i.length,
                    o = 0,
                    a;
                return n || (n = t.nop), t.Events.Natives.indexOf(e) > -1 ? t.forEach(i, function(t) {
                    t.listen(e, function(i) {
                        i.active = r, u.indexOf(e) > -1 ? n.call(t, i) : ++o === s && n.call(t, i)
                    })
                }) : (this.events[e] || (this.events[e] = {}), a = n.name || t.guid("__" + e), this.events[e][a] = n), this
            },
            unlisten: function(e, t) {},
            trigger: function(e, n) {
                var r = this;
                if (t.Events.Natives.indexOf(e) > -1) return;
                return this.events[e] && t.forEach(this.events[e], function(t, i) {
                    t.call(r, {
                        type: e
                    }, n)
                }), this
            }
        }), t.forEach(t.manifest, function(e, n) {
            t.sequence.prototype[n] = function(e) {
                var r = {},
                    i = [],
                    s, u, a, f, l, c, h, p, d;
                for (s = 0; s < this.inOuts.ofClips.length; s++) u = this.inOuts.ofClips[s], a = o(u["in"], u.out), f = a.indexOf(e.start), l = a.indexOf(e.end), f > -1 && (r[s] = t.extend({}, u, {
                    start: a[f],
                    clipIdx: f
                })), l > -1 && (r[s] = t.extend({}, u, {
                    end: a[l],
                    clipIdx: l
                }));
                c = Object.keys(r).map(function(e) {
                    return +e
                }), i = o(c[0], c[1]);
                for (s = 0; s < i.length; s++) {
                    var v = {},
                        m = i[s],
                        g = r[m];
                    g ? (h = this.inOuts.ofVideos[m], p = g.clipIdx, d = o(h["in"], h.out), g.start && (v.start = d[p], v.end = d[d.length - 1]), g.end && (v.start = d[0], v.end = d[p])) : (v.start = this.inOuts.ofVideos[m]["in"], v.end = this.inOuts.ofVideos[m].out), this.playlist[m][n](t.extend({}, e, v))
                }
                return this
            }
        })
    }(this, Popcorn),
    function(e) {
        document.addEventListener("DOMContentLoaded", function() {
            var t = "data-timeline-sources",
                n = document.querySelectorAll("[" + t + "]");
            e.forEach(n, function(r, i) {
                var s = n[i],
                    o = !1,
                    u, a, f;
                s.id || (s.id = e.guid("__popcorn")), s.nodeType && s.nodeType === 1 && (f = e("#" + s.id), u = (s.getAttribute(t) || "").split(","), u[0] && e.forEach(u, function(e) {
                    a = e.split("!"), a.length === 1 && (a = e.match(/(.*)[\/\\]([^\/\\]+\.\w+)$/)[2].split("."), a[0] = "parse" + a[1].toUpperCase(), a[1] = e), u[0] && f[a[0]] && f[a[0]](a[1])
                }), !f.autoplay() || f.play())
            })
        }, !1)
    }(Popcorn),
    function(e, t) {
        function n(e) {
            var t = n.options,
                r = t.parser[t.strictMode ? "strict" : "loose"].exec(e),
                i = {},
                s = 14;
            while (s--) i[t.key[s]] = r[s] || "";
            return i[t.q.name] = {}, i[t.key[12]].replace(t.q.parser, function(e, n, r) {
                n && (i[t.q.name][n] = r)
            }), i
        }

        function i() {}
        n.options = {
            strictMode: !1,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        var r = {
            length: 0,
            start: e.nop,
            end: e.nop
        };
        MediaError = MediaError || function() {
            function e(e, t) {
                this.code = e || null, this.message = t || ""
            }
            return e.MEDIA_ERR_NONE_ACTIVE = 0, e.MEDIA_ERR_ABORTED = 1, e.MEDIA_ERR_NETWORK = 2, e.MEDIA_ERR_DECODE = 3, e.MEDIA_ERR_NONE_SUPPORTED = 4, e
        }(), i.prototype = {
            _util: {
                type: "HTML5",
                TIMEUPDATE_MS: 250,
                MIN_WIDTH: 300,
                MIN_HEIGHT: 150,
                isAttributeSet: function(e) {
                    return typeof e == "string" || e === !0
                },
                parseUri: n
            },
            addEventListener: function(e, n, r) {
                t.addEventListener(this._eventNamespace + e, n, r)
            },
            removeEventListener: function(e, n, r) {
                t.removeEventListener(this._eventNamespace + e, n, r)
            },
            dispatchEvent: function(e) {
                var n = t.createEvent("CustomEvent"),
                    r = {
                        type: e,
                        target: this.parentNode,
                        data: null
                    };
                n.initCustomEvent(this._eventNamespace + e, !1, !1, r), t.dispatchEvent(n)
            },
            load: e.nop,
            canPlayType: function(e) {
                return ""
            },
            getBoundingClientRect: function() {
                return this.parentNode.getBoundingClientRect()
            },
            NETWORK_EMPTY: 0,
            NETWORK_IDLE: 1,
            NETWORK_LOADING: 2,
            NETWORK_NO_SOURCE: 3,
            HAVE_NOTHING: 0,
            HAVE_METADATA: 1,
            HAVE_CURRENT_DATA: 2,
            HAVE_FUTURE_DATA: 3,
            HAVE_ENOUGH_DATA: 4
        }, i.prototype.constructor = i, Object.defineProperties(i.prototype, {
            currentSrc: {
                get: function() {
                    return this.src !== undefined ? this.src : ""
                }
            },
            preload: {
                get: function() {
                    return "auto"
                },
                set: e.nop
            },
            controls: {
                get: function() {
                    return !0
                },
                set: e.nop
            },
            poster: {
                get: function() {
                    return ""
                },
                set: e.nop
            },
            crossorigin: {
                get: function() {
                    return ""
                }
            },
            played: {
                get: function() {
                    return r
                }
            },
            seekable: {
                get: function() {
                    return r
                }
            },
            buffered: {
                get: function() {
                    return r
                }
            },
            defaultMuted: {
                get: function() {
                    return !1
                }
            },
            defaultPlaybackRate: {
                get: function() {
                    return 1
                }
            },
            style: {
                get: function() {
                    return this.parentNode.style
                }
            },
            id: {
                get: function() {
                    return this.parentNode.id
                }
            }
        }), e._MediaElementProto = i
    }(Popcorn, window.document),
    function(e, t) {
        function n(e) {
            return "maybe"
        }

        function r(e, r) {
            var i = typeof e == "string" ? t.querySelector(e) : e,
                s = t.createElement(r);
            return i.appendChild(s), s._canPlaySrc = n, s
        }
        e.HTMLVideoElement = function(e) {
            return r(e, "video")
        }, e.HTMLVideoElement._canPlaySrc = n, e.HTMLAudioElement = function(e) {
            return r(e, "audio")
        }, e.HTMLAudioElement._canPlaySrc = n
    }(Popcorn, window.document),
    function(e, t) {
        function o(t) {
            this.startTime = 0, this.currentTime = t.currentTime || 0, this.duration = t.duration || NaN, this.playInterval = null, this.paused = !0, this.ended = t.endedCallback || e.nop
        }

        function u(e) {
            e.currentTime += (Date.now() - e.startTime) / 1e3, e.startTime = Date.now(), e.currentTime >= e.duration && (e.currentTime = e.duration, e.pause(), e.ended())
        }

        function a(n) {
            function d(e) {
                h.unshift(e)
            }

            function v() {
                f = !0, c.networkState = r.NETWORK_IDLE, c.readyState = r.HAVE_METADATA, r.dispatchEvent("loadedmetadata"), r.dispatchEvent("loadeddata"), c.readyState = r.HAVE_FUTURE_DATA, r.dispatchEvent("canplay"), c.readyState = r.HAVE_ENOUGH_DATA, r.dispatchEvent("canplaythrough");
                var e = h.length;
                while (e--) h[e](), delete h[e];
                c.autoplay && r.play()
            }

            function m() {
                return l ? l.duration : NaN
            }

            function g() {
                if (!f || !l) return;
                l.pause(), l = null, u.removeChild(a), a = t.createElement("div")
            }

            function y(e) {
                if (!r._canPlaySrc(e)) {
                    c.error = {
                        name: "MediaError",
                        message: "Media Source Not Supported",
                        code: MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                    }, r.dispatchEvent("error");
                    return
                }
                c.src = e, f && g(), a.width = c.width, a.height = c.height, u.appendChild(a);
                var t = s.exec(e),
                    n = +t[1],
                    i = +t[2];
                l = new o({
                    currentTime: n,
                    duration: i,
                    endedCallback: C
                }), r.dispatchEvent("loadstart"), r.dispatchEvent("progress"), r.dispatchEvent("durationchange"), v()
            }

            function b() {
                return f ? l.currentTime : 0
            }

            function w(e) {
                if (!f) {
                    d(function() {
                        w(e)
                    });
                    return
                }
                S(), l.seekTo(e), x()
            }

            function E() {
                r.dispatchEvent("timeupdate")
            }

            function S(e) {
                c.seeking = !0, r.dispatchEvent("seeking")
            }

            function x() {
                c.ended = !1, c.seeking = !1, r.dispatchEvent("timeupdate"), r.dispatchEvent("seeked"), r.dispatchEvent("canplay"), r.dispatchEvent("canplaythrough")
            }

            function T() {
                c.paused === 1 ? (c.paused = !1, r.dispatchEvent("play"), r.dispatchEvent("playing")) : (c.ended && (w(0), c.ended = !1), c.paused && (c.paused = !1, c.loop || r.dispatchEvent("play"), r.dispatchEvent("playing"))), p = setInterval(E, r._util.TIMEUPDATE_MS)
            }

            function N() {
                c.paused = !0, clearInterval(p), r.dispatchEvent("pause")
            }

            function C() {
                c.loop ? (w(0), r.play()) : (c.ended = !0, N(), r.dispatchEvent("timeupdate"), r.dispatchEvent("ended"))
            }

            function k(e) {
                c.volume = e, r.dispatchEvent("volumechange")
            }

            function L() {
                return c.volume
            }

            function A(e) {
                c.muted = e, r.dispatchEvent("volumechange")
            }

            function O() {
                return c.muted
            }
            var r = this,
                u = typeof n == "string" ? t.querySelector(n) : n,
                a = t.createElement("div"),
                f = !1,
                l, c = {
                    src: i,
                    networkState: r.NETWORK_EMPTY,
                    readyState: r.HAVE_NOTHING,
                    autoplay: i,
                    preload: i,
                    controls: i,
                    loop: !1,
                    poster: i,
                    volume: 1,
                    muted: !1,
                    width: u.width | 0 ? u.width : r._util.MIN_WIDTH,
                    height: u.height | 0 ? u.height : r._util.MIN_HEIGHT,
                    seeking: !1,
                    ended: !1,
                    paused: 1,
                    error: null
                },
                h = [],
                p;
            r._eventNamespace = e.guid("HTMLNullVideoElement::"), r.parentNode = u, r._util.type = "NullVideo", r.play = function() {
                if (!f) {
                    d(function() {
                        r.play()
                    });
                    return
                }
                l.play(), c.paused && T()
            }, r.pause = function() {
                if (!f) {
                    d(function() {
                        r.pause()
                    });
                    return
                }
                l.pause(), c.paused || N()
            }, Object.defineProperties(r, {
                src: {
                    get: function() {
                        return c.src
                    },
                    set: function(e) {
                        e && e !== c.src && y(e)
                    }
                },
                autoplay: {
                    get: function() {
                        return c.autoplay
                    },
                    set: function(e) {
                        c.autoplay = r._util.isAttributeSet(e)
                    }
                },
                loop: {
                    get: function() {
                        return c.loop
                    },
                    set: function(e) {
                        c.loop = r._util.isAttributeSet(e)
                    }
                },
                width: {
                    get: function() {
                        return a.width
                    },
                    set: function(e) {
                        a.width = e, c.width = a.width
                    }
                },
                height: {
                    get: function() {
                        return a.height
                    },
                    set: function(e) {
                        a.height = e, c.height = a.height
                    }
                },
                currentTime: {
                    get: function() {
                        return b()
                    },
                    set: function(e) {
                        w(e)
                    }
                },
                duration: {
                    get: function() {
                        return m()
                    }
                },
                ended: {
                    get: function() {
                        return c.ended
                    }
                },
                paused: {
                    get: function() {
                        return c.paused
                    }
                },
                seeking: {
                    get: function() {
                        return c.seeking
                    }
                },
                readyState: {
                    get: function() {
                        return c.readyState
                    }
                },
                networkState: {
                    get: function() {
                        return c.networkState
                    }
                },
                volume: {
                    get: function() {
                        return L()
                    },
                    set: function(e) {
                        if (e < 0 || e > 1) throw "Volume value must be between 0.0 and 1.0";
                        k(e)
                    }
                },
                muted: {
                    get: function() {
                        return O()
                    },
                    set: function(e) {
                        A(r._util.isAttributeSet(e))
                    }
                },
                error: {
                    get: function() {
                        return c.error
                    }
                }
            })
        }
        var n = 16,
            r = n / 1e3,
            i = "",
            s = /#t=(\d+\.?\d*)?,?(\d+\.?\d*)/;
        o.prototype = {
            play: function() {
                var e = this;
                this.paused && (this.paused = !1, this.startTime = Date.now(), this.playInterval = setInterval(function() {
                    u(e)
                }, n))
            },
            pause: function() {
                this.paused || (this.paused = !0, clearInterval(this.playInterval))
            },
            seekTo: function(e) {
                e = e < 0 ? 0 : e, e = e > this.duration ? this.duration : e, this.currentTime = e
            }
        }, a.prototype = new e._MediaElementProto, a.prototype.constructor = a, a.prototype._canPlaySrc = function(e) {
            return s.test(e) ? "probably" : i
        }, a.prototype.canPlayType = function(e) {
            return e === "video/x-nullvideo" ? "probably" : i
        }, e.HTMLNullVideoElement = function(e) {
            return new a(e)
        }, e.HTMLNullVideoElement._canPlaySrc = a.prototype._canPlaySrc
    }(Popcorn, document),
    function(e, t, n) {
        function a() {
            return o || (e.getScript("//w.soundcloud.com/player/api.js", function() {
                e.getScript("//connect.soundcloud.com/sdk.js", function() {
                    s = !0, SC.initialize({
                        client_id: "PRaNFlda6Bhf5utPjUsptg"
                    });
                    var e = u.length;
                    while (e--) u[e](), delete u[e]
                })
            }), o = !0), s
        }

        function f(e) {
            u.unshift(e)
        }

        function l(s) {
            function y(e) {
                d.unshift(e)
            }

            function b() {
                p.bind(SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    _({
                        type: "loadProgress",
                        data: e.currentPosition / 1e3
                    })
                }), p.bind(SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    _({
                        type: "playProgress",
                        data: e.currentPosition / 1e3
                    })
                }), p.bind(SC.Widget.Events.PLAY, function(e) {
                    _({
                        type: "play"
                    })
                }), p.bind(SC.Widget.Events.PAUSE, function(e) {
                    _({
                        type: "pause"
                    })
                }), p.bind(SC.Widget.Events.SEEK, function(e) {
                    _({
                        type: "seek",
                        data: e.currentPosition / 1e3
                    })
                }), p.bind(SC.Widget.Events.FINISH, function() {
                    _({
                        type: "finish"
                    })
                }), h = !0, p.getDuration(E)
            }

            function w(e) {
                p.bind(SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    e.loadedProgress > 0 && (p.unbind(SC.Widget.Events.LOAD_PROGRESS), p.pause())
                }), p.bind(SC.Widget.Events.PLAY, function(e) {
                    p.unbind(SC.Widget.Events.PLAY), p.bind(SC.Widget.Events.PAUSE, function(e) {
                        p.unbind(SC.Widget.Events.PAUSE), p.setVolume(100), b()
                    })
                }), p.setVolume(0), p.play()
            }

            function E(e) {
                e /= 1e3;
                var t = c.duration;
                if (t !== e) {
                    c.duration = e, o.dispatchEvent("durationchange");
                    if (isNaN(t)) {
                        c.networkState = o.NETWORK_IDLE, c.readyState = o.HAVE_METADATA, o.dispatchEvent("loadedmetadata"), o.dispatchEvent("loadeddata"), c.readyState = o.HAVE_FUTURE_DATA, o.dispatchEvent("canplay"), c.readyState = o.HAVE_ENOUGH_DATA, o.dispatchEvent("canplaythrough");
                        var n = d.length;
                        while (n--) d[n](), delete d[n];
                        c.paused && c.autoplay && o.play()
                    }
                }
            }

            function S() {
                h || y(function() {
                    S()
                }), p.getDuration(E)
            }

            function x() {
                if (!h || !p) return;
                clearInterval(m), p.pause(), p.unbind(SC.Widget.Events.READY), p.unbind(SC.Widget.Events.LOAD_PROGRESS), p.unbind(SC.Widget.Events.PLAY_PROGRESS), p.unbind(SC.Widget.Events.PLAY), p.unbind(SC.Widget.Events.PAUSE), p.unbind(SC.Widget.Events.SEEK), p.unbind(SC.Widget.Events.FINISH), u.removeChild(l), l = n.createElement("iframe")
            }

            function T(e) {
                function t() {
                    N(), p.seekTo(e), C()
                }
                c.currentTime = e, e *= 1e3;
                if (!h) {
                    addMediaReadyCallback(t);
                    return
                }
                t()
            }

            function N() {
                c.seeking = !0, o.dispatchEvent("seeking")
            }

            function C() {
                c.ended = !1, c.seeking = !1, o.dispatchEvent("timeupdate"), o.dispatchEvent("seeked"), o.dispatchEvent("canplay"), o.dispatchEvent("canplaythrough")
            }

            function k() {
                c.paused = !0, clearInterval(v), o.dispatchEvent("pause")
            }

            function L() {
                o.dispatchEvent("timeupdate")
            }

            function A() {
                m || (m = setInterval(D, r), c.loop && o.dispatchEvent("play")), v = setInterval(L, o._util.TIMEUPDATE_MS), c.paused && (c.paused = !1, c.loop || o.dispatchEvent("play"), o.dispatchEvent("playing"))
            }

            function O() {
                c.loop ? (T(0), o.play()) : (c.ended = !0, o.pause(), k(), o.dispatchEvent("timeupdate"), o.dispatchEvent("ended"))
            }

            function M(e) {
                c.currentTime = e, e !== g && o.dispatchEvent("timeupdate"), g = e
            }

            function _(e) {
                switch (e.type) {
                    case "loadProgress":
                        o.dispatchEvent("progress");
                        break;
                    case "playProgress":
                        M(e.data);
                        break;
                    case "play":
                        A();
                        break;
                    case "pause":
                        k();
                        break;
                    case "finish":
                        O();
                        break;
                    case "seek":
                        M(e.data)
                }
            }

            function D() {
                if (c.ended) return;
                p.getPosition(function(e) {
                    M(e / 1e3)
                })
            }

            function P(t) {
                if (!o._canPlaySrc(t)) {
                    c.error = {
                        name: "MediaError",
                        message: "Media Source Not Supported",
                        code: MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                    }, o.dispatchEvent("error");
                    return
                }
                c.src = t, h && x();
                if (!a()) {
                    f(function() {
                        P(t)
                    });
                    return
                }
                h = !1, SC.get("/resolve", {
                    url: t
                }, function(t) {
                    l.id = e.guid("soundcloud-"), l.width = c.width, l.height = c.height, l.frameBorder = 0, l.webkitAllowFullScreen = !0, l.mozAllowFullScreen = !0, l.allowFullScreen = !0, I(c.controls), u.appendChild(l), l.onload = function() {
                        l.onload = null, p = SC.Widget(l), p.bind(SC.Widget.Events.READY, w), c.networkState = o.NETWORK_LOADING, o.dispatchEvent("loadstart"), o.dispatchEvent("progress")
                    }, l.src = "https://w.soundcloud.com/player/?url=" + t.uri + "&show_artwork=false" + "&buying=false" + "&liking=false" + "&sharing=false" + "&download=false" + "&show_comments=false" + "&show_user=false" + "&single_active=false"
                })
            }

            function H(e) {
                c.volume = e;
                if (!h) {
                    y(function() {
                        H(e)
                    });
                    return
                }
                p.setVolume(e), o.dispatchEvent("volumechange")
            }

            function B() {
                return c.muted > 0 ? c.muted : c.volume
            }

            function j(e) {
                if (!h) {
                    c.muted = e ? 1 : 0, y(function() {
                        j(e)
                    });
                    return
                }
                e ? (c.muted = c.volume, H(0)) : (c.muted = 0, H(c.muted))
            }

            function F() {
                return c.muted > 0
            }

            function I(e) {
                h ? (l.style.position = "absolute", l.style.visibility = e ? "visible" : "hidden") : (l.style.opacity = e ? "1" : "0", l.style.pointerEvents = e ? "auto" : "none"), c.controls = e
            }
            if (!t.postMessage) throw "ERROR: HTMLSoundCloudAudioElement requires window.postMessage";
            var o = this,
                u = typeof s == "string" ? e.dom.find(s) : s,
                l = n.createElement("iframe"),
                c = {
                    src: i,
                    networkState: o.NETWORK_EMPTY,
                    readyState: o.HAVE_NOTHING,
                    seeking: !1,
                    autoplay: i,
                    preload: i,
                    controls: !1,
                    loop: !1,
                    poster: i,
                    volume: 100,
                    muted: 0,
                    currentTime: 0,
                    duration: NaN,
                    ended: !1,
                    paused: !0,
                    width: u.width | 0 ? u.width : o._util.MIN_WIDTH,
                    height: u.height | 0 ? u.height : o._util.MIN_HEIGHT,
                    error: null
                },
                h = !1,
                p, d = [],
                v, m, g = 0;
            o._eventNamespace = e.guid("HTMLSoundCloudAudioElement::"), o.parentNode = u, o._util.type = "SoundCloud", o.play = function() {
                if (!h) {
                    y(function() {
                        o.play()
                    });
                    return
                }
                c.ended && T(0), p.play()
            }, o.pause = function() {
                if (!h) {
                    y(function() {
                        o.pause()
                    });
                    return
                }
                p.pause()
            }, Object.defineProperties(o, {
                src: {
                    get: function() {
                        return c.src
                    },
                    set: function(e) {
                        e && e !== c.src && P(e)
                    }
                },
                autoplay: {
                    get: function() {
                        return c.autoplay
                    },
                    set: function(e) {
                        c.autoplay = o._util.isAttributeSet(e)
                    }
                },
                loop: {
                    get: function() {
                        return c.loop
                    },
                    set: function(e) {
                        c.loop = o._util.isAttributeSet(e)
                    }
                },
                width: {
                    get: function() {
                        return l.width
                    },
                    set: function(e) {
                        l.width = e, c.width = l.width
                    }
                },
                height: {
                    get: function() {
                        return l.height
                    },
                    set: function(e) {
                        l.height = e, c.height = l.height
                    }
                },
                currentTime: {
                    get: function() {
                        return c.currentTime
                    },
                    set: function(e) {
                        T(e)
                    }
                },
                duration: {
                    get: function() {
                        return c.duration
                    }
                },
                ended: {
                    get: function() {
                        return c.ended
                    }
                },
                paused: {
                    get: function() {
                        return c.paused
                    }
                },
                seeking: {
                    get: function() {
                        return c.seeking
                    }
                },
                readyState: {
                    get: function() {
                        return c.readyState
                    }
                },
                networkState: {
                    get: function() {
                        return c.networkState
                    }
                },
                volume: {
                    get: function() {
                        var e = B();
                        return e / 100
                    },
                    set: function(e) {
                        if (e < 0 || e > 1) throw "Volume value must be between 0.0 and 1.0";
                        e *= 100, H(e)
                    }
                },
                muted: {
                    get: function() {
                        return F()
                    },
                    set: function(e) {
                        j(o._util.isAttributeSet(e))
                    }
                },
                error: {
                    get: function() {
                        return c.error
                    }
                },
                controls: {
                    get: function() {
                        return c.controls
                    },
                    set: function(e) {
                        I(!!e)
                    }
                }
            })
        }
        var r = 16,
            i = "",
            s = !1,
            o = !1,
            u = [];
        l.prototype = new e._MediaElementProto, l.prototype._canPlaySrc = function(e) {
            return /(?:https?:\/\/www\.|https?:\/\/|www\.|\.|^)(soundcloud)/.test(e) ? "probably" : i
        }, l.prototype.canPlayType = function(e) {
            return e === "audio/x-soundcloud" ? "probably" : i
        }, e.HTMLSoundCloudAudioElement = function(e) {
            return new l(e)
        }, e.HTMLSoundCloudAudioElement._canPlaySrc = l.prototype._canPlaySrc
    }(Popcorn, window, document),
    function(e, t, n) {
        function o(e) {
            function s(t, n) {
                var i = JSON.stringify({
                    method: t,
                    value: n
                });
                if (!e.contentWindow) return;
                e.contentWindow.postMessage(i, r)
            }
            var n = this,
                r = e.src.split("?")[0],
                i = 0;
            r.substr(0, 2) === "//" && (r = t.location.protocol + r);
            var o = "play pause paused seekTo unload getCurrentTime getDuration getVideoEmbedCode getVideoHeight getVideoWidth getVideoUrl getColor setColor setLoop getVolume setVolume addEventListener".split(" ");
            o.forEach(function(e) {
                n[e] = function(t) {
                    s(e, t)
                }
            })
        }

        function u(u) {
            function b(e) {
                v.unshift(e)
            }

            function w(e) {
                d.addEventListener("loadProgress"), d.addEventListener("playProgress"), d.addEventListener("play"), d.addEventListener("pause"), d.addEventListener("finish"), d.addEventListener("seek"), d.getDuration(), c.networkState = a.NETWORK_LOADING, a.dispatchEvent("loadstart"), a.dispatchEvent("progress")
            }

            function E(e) {
                var t = c.duration;
                if (t !== e) {
                    c.duration = e, a.dispatchEvent("durationchange");
                    if (isNaN(t)) {
                        c.networkState = a.NETWORK_IDLE, c.readyState = a.HAVE_METADATA, a.dispatchEvent("loadedmetadata"), a.dispatchEvent("loadeddata"), c.readyState = a.HAVE_FUTURE_DATA, a.dispatchEvent("canplay"), c.readyState = a.HAVE_ENOUGH_DATA, a.dispatchEvent("canplaythrough"), c.autoplay && a.play();
                        var n = v.length;
                        while (n--) v[n](), delete v[n]
                    }
                }
            }

            function S() {
                h || b(function() {
                    S()
                }), d.getDuration()
            }

            function x() {
                if (!h || !d) return;
                clearInterval(g), d.pause(), t.removeEventListener("message", D, !1), f.removeChild(l), l = n.createElement("iframe")
            }

            function T(e) {
                if (!h) {
                    b(function() {
                        T(e)
                    });
                    return
                }
                N(), d.seekTo(e)
            }

            function N() {
                c.seeking = !0, a.dispatchEvent("seeking")
            }

            function C() {
                c.seeking = !1, a.dispatchEvent("timeupdate"), a.dispatchEvent("seeked"), a.dispatchEvent("canplay"), a.dispatchEvent("canplaythrough")
            }

            function k() {
                c.paused = !0, clearInterval(m), a.dispatchEvent("pause")
            }

            function L() {
                a.dispatchEvent("timeupdate")
            }

            function A() {
                c.ended && T(0), g || (g = setInterval(P, r), c.loop && a.dispatchEvent("play")), m = setInterval(L, a._util.TIMEUPDATE_MS), c.paused && (c.paused = !1, c.loop || a.dispatchEvent("play"), a.dispatchEvent("playing"))
            }

            function O() {
                c.loop ? (T(0), a.play()) : (c.ended = !0, a.dispatchEvent("ended"))
            }

            function M(e) {
                var t = c.currentTime = e;
                t !== y && a.dispatchEvent("timeupdate"), y = c.currentTime
            }

            function _(e) {
                if (e.origin !== s) return;
                var n;
                try {
                    n = JSON.parse(e.data)
                } catch (r) {
                    console.warn(r)
                }
                if (n.player_id != p) return;
                switch (n.event) {
                    case "ready":
                        d = new o(l), d.addEventListener("loadProgress"), d.addEventListener("pause"), d.setVolume(0), d.play();
                        break;
                    case "loadProgress":
                        var i = parseFloat(n.data.duration);
                        i > 0 && !h && (h = !0, d.pause());
                        break;
                    case "pause":
                        d.setVolume(1), t.removeEventListener("message", _, !1), t.addEventListener("message", D, !1), w()
                }
            }

            function D(e) {
                if (e.origin !== s) return;
                var t;
                try {
                    t = JSON.parse(e.data)
                } catch (n) {
                    console.warn(n)
                }
                if (t.player_id != p) return;
                switch (t.method) {
                    case "getCurrentTime":
                        M(parseFloat(t.value));
                        break;
                    case "getDuration":
                        E(parseFloat(t.value));
                        break;
                    case "getVolume":
                        B(parseFloat(t.value))
                }
                switch (t.event) {
                    case "loadProgress":
                        a.dispatchEvent("progress"), E(parseFloat(t.data.duration));
                        break;
                    case "playProgress":
                        M(parseFloat(t.data.seconds));
                        break;
                    case "play":
                        A();
                        break;
                    case "pause":
                        k();
                        break;
                    case "finish":
                        O();
                        break;
                    case "seek":
                        M(parseFloat(t.data.seconds)), C(), c.paused && a.pause()
                }
            }

            function P() {
                d.getCurrentTime()
            }

            function H(e) {
                if (!a._canPlaySrc(e)) {
                    c.error = {
                        name: "MediaError",
                        message: "Media Source Not Supported",
                        code: MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                    }, a.dispatchEvent("error");
                    return
                }
                c.src = e, h && x(), h = !1;
                var n = a._util.parseUri(e),
                    r = n.queryKey,
                    i, o = ["api=1", "player_id=" + p, "title=0", "byline=0", "portrait=0"];
                c.loop = r.loop === "1" || c.loop, delete r.loop, c.autoplay = r.autoplay === "1" || c.autoplay, delete r.autoplay, n = s + "/video/" + /\d+$/.exec(n.path) + "?";
                for (i in r) r.hasOwnProperty(i) && o.push(encodeURIComponent(i) + "=" + encodeURIComponent(r[i]));
                n += o.join("&"), l.id = p, l.style.width = "100%", l.style.height = "100%", l.frameBorder = 0, l.webkitAllowFullScreen = !0, l.mozAllowFullScreen = !0, l.allowFullScreen = !0, f.appendChild(l), l.src = n, t.addEventListener("message", _, !1)
            }

            function B(e) {
                c.volume !== e && (c.volume = e, a.dispatchEvent("volumechange"))
            }

            function j(e) {
                c.volume = e;
                if (!h) {
                    b(function() {
                        j(e)
                    });
                    return
                }
                d.setVolume(e), a.dispatchEvent("volumechange")
            }

            function F() {
                return c.muted > 0 ? c.muted : c.volume
            }

            function I(e) {
                if (!h) {
                    c.muted = e ? 1 : 0, b(function() {
                        I(e)
                    });
                    return
                }
                e ? (c.muted = c.volume, j(0)) : (c.muted = 0, j(c.muted))
            }

            function q() {
                return c.muted > 0
            }
            if (!t.postMessage) throw "ERROR: HTMLVimeoVideoElement requires window.postMessage";
            var a = this,
                f = typeof u == "string" ? e.dom.find(u) : u,
                l = n.createElement("iframe"),
                c = {
                    src: i,
                    networkState: a.NETWORK_EMPTY,
                    readyState: a.HAVE_NOTHING,
                    seeking: !1,
                    autoplay: i,
                    preload: i,
                    controls: !1,
                    loop: !1,
                    poster: i,
                    volume: 1,
                    muted: 0,
                    currentTime: 0,
                    duration: NaN,
                    ended: !1,
                    paused: !0,
                    error: null
                },
                h = !1,
                p = e.guid(),
                d, v = [],
                m, g, y = 0;
            a._eventNamespace = e.guid("HTMLVimeoVideoElement::"), a.parentNode = f, a._util.type = "Vimeo", a.play = function() {
                if (!h) {
                    b(function() {
                        a.play()
                    });
                    return
                }
                d.play()
            }, a.pause = function() {
                if (!h) {
                    b(function() {
                        a.pause()
                    });
                    return
                }
                d.pause()
            }, Object.defineProperties(a, {
                src: {
                    get: function() {
                        return c.src
                    },
                    set: function(e) {
                        e && e !== c.src && H(e)
                    }
                },
                autoplay: {
                    get: function() {
                        return c.autoplay
                    },
                    set: function(e) {
                        c.autoplay = a._util.isAttributeSet(e)
                    }
                },
                loop: {
                    get: function() {
                        return c.loop
                    },
                    set: function(e) {
                        c.loop = a._util.isAttributeSet(e)
                    }
                },
                width: {
                    get: function() {
                        return a.parentNode.offsetWidth
                    }
                },
                height: {
                    get: function() {
                        return a.parentNode.offsetHeight
                    }
                },
                currentTime: {
                    get: function() {
                        return c.currentTime
                    },
                    set: function(e) {
                        T(e)
                    }
                },
                duration: {
                    get: function() {
                        return c.duration
                    }
                },
                ended: {
                    get: function() {
                        return c.ended
                    }
                },
                paused: {
                    get: function() {
                        return c.paused
                    }
                },
                seeking: {
                    get: function() {
                        return c.seeking
                    }
                },
                readyState: {
                    get: function() {
                        return c.readyState
                    }
                },
                networkState: {
                    get: function() {
                        return c.networkState
                    }
                },
                volume: {
                    get: function() {
                        return F()
                    },
                    set: function(e) {
                        if (e < 0 || e > 1) throw "Volume value must be between 0.0 and 1.0";
                        j(e)
                    }
                },
                muted: {
                    get: function() {
                        return q()
                    },
                    set: function(e) {
                        I(a._util.isAttributeSet(e))
                    }
                },
                error: {
                    get: function() {
                        return c.error
                    }
                }
            })
        }
        var r = 16,
            i = "",
            s = t.location.protocol + "//player.vimeo.com";
        u.prototype = new e._MediaElementProto, u.prototype.constructor = u, u.prototype._canPlaySrc = function(e) {
            return /player.vimeo.com\/video\/\d+/.test(e) || /vimeo.com\/\d+/.test(e) ? "probably" : i
        }, u.prototype.canPlayType = function(e) {
            return e === "video/x-vimeo" ? "probably" : i
        }, e.HTMLVimeoVideoElement = function(e) {
            return new u(e)
        }, e.HTMLVimeoVideoElement._canPlaySrc = u.prototype._canPlaySrc
    }(Popcorn, window, document),
    function(e, t, n) {
        function l() {
            if (!a) {
                var e = n.createElement("script"),
                    r = t.location.protocol === "file:" ? "http:" : "";
                e.src = r + "//www.youtube.com/iframe_api";
                var i = n.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(e, i), a = !0
            }
            return u
        }

        function c(e) {
            f.unshift(e)
        }

        function h(u) {
            function L(e) {
                E.unshift(e)
            }

            function A(e) {
                var t = function() {
                    b.isMuted() ? b.playVideo() : setTimeout(t, 0)
                };
                d = !0, b.mute(), t()
            }

            function O() {
                if (!g) return p.duration;
                var e = p.duration,
                    t = b.getDuration();
                return t ? e !== t && (p.duration = t, a.dispatchEvent("durationchange")) : setTimeout(O, 50), t
            }

            function M(e) {
                var t = {
                    name: "MediaError"
                };
                switch (e.data) {
                    case 2:
                        t.message = "Invalid video parameter.", t.code = MediaError.MEDIA_ERR_ABORTED;
                        break;
                    case 5:
                        t.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", t.code = MediaError.MEDIA_ERR_DECODE;
                    case 100:
                        t.message = "Video not found.", t.code = MediaError.MEDIA_ERR_NETWORK;
                        break;
                    case 101:
                    case 150:
                        t.message = "Video not usable.", t.code = MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;
                        break;
                    default:
                        t.message = "Unknown error.", t.code = 5
                }
                p.error = t, a.dispatchEvent("error")
            }

            function _(e) {
                switch (e.data) {
                    case YT.PlayerState.ENDED:
                        X(), b.seekTo(0);
                        break;
                    case YT.PlayerState.PLAYING:
                        if (k) {
                            k = !1, L(function() {
                                x = setInterval(B, 50)
                            }), p.autoplay || !p.paused ? (p.paused = !1, L(function() {
                                U()
                            })) : (v = !1, b.pauseVideo()), p.muted || b.unMute(), p.duration = b.getDuration(), p.readyState = a.HAVE_METADATA, a.dispatchEvent("loadedmetadata"), N = setInterval(H, r), a.dispatchEvent("loadeddata"), p.readyState = a.HAVE_FUTURE_DATA, a.dispatchEvent("canplay"), g = !0;
                            var t = E.length;
                            while (t--) E[t](), delete E[t];
                            p.readyState = a.HAVE_ENOUGH_DATA, a.dispatchEvent("canplaythrough")
                        } else m ? (m = !1, b.pauseVideo()) : U();
                        break;
                    case YT.PlayerState.PAUSED:
                        if (v) {
                            v = !1;
                            break
                        }
                        W();
                        break;
                    case YT.PlayerState.BUFFERING:
                        p.networkState = a.NETWORK_LOADING, a.dispatchEvent("waiting");
                        break;
                    case YT.PlayerState.CUED:
                }
                e.data !== YT.PlayerState.BUFFERING && S === YT.PlayerState.BUFFERING && z(), S = e.data
            }

            function D() {
                if (!d || !b) return;
                clearInterval(N), clearInterval(x), b.stopVideo(), b.clearVideo(), f.removeChild(h), h = n.createElement("div")
            }

            function P(e) {
                if (!a._canPlaySrc(e)) {
                    p.error = {
                        name: "MediaError",
                        message: "Media Source Not Supported",
                        code: MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                    }, a.dispatchEvent("error");
                    return
                }
                p.src = e;
                if (!l()) {
                    c(function() {
                        P(e)
                    });
                    return
                }
                d && D(), f.appendChild(h);
                var n = a._util.parseUri(e).queryKey;
                delete n.v, p.autoplay = n.autoplay === "1" || p.autoplay, delete n.autoplay, p.loop = n.loop === "1" || p.loop, delete n.loop, n.rel = n.rel || 0, n.modestbranding = n.modestbranding || 1, n.iv_load_policy = n.iv_load_policy || 3, n.showinfo = n.showinfo || 0;
                var r = t.location.protocol === "file:" ? "*" : t.location.protocol + "//" + t.location.host;
                n.origin = n.origin || r, n.controls = n.controls || p.controls ? 2 : 0, p.controls = n.controls, n.wmode = n.wmode || "opaque", e = s.exec(e)[1], b = new YT.Player(h, {
                    width: "100%",
                    height: "100%",
                    wmode: n.wmode,
                    videoId: e,
                    playerVars: n,
                    events: {
                        onReady: A,
                        onError: M,
                        onStateChange: _
                    }
                }), p.networkState = a.NETWORK_LOADING, a.dispatchEvent("loadstart"), a.dispatchEvent("progress"), O()
            }

            function H() {
                var e = b.getCurrentTime();
                p.seeking ? o(e - p.currentTime) < 1 && R() : (o(p.currentTime - e) > r && (q(), R()), p.currentTime = e)
            }

            function B() {
                var e = b.getVideoLoadedFraction();
                T !== e && (T = e, z(), e >= 1 && clearInterval(x))
            }

            function j() {
                return p.currentTime
            }

            function F(e) {
                p.currentTime = e;
                if (!g) {
                    L(function() {
                        q(), b.seekTo(e)
                    });
                    return
                }
                q(), b.seekTo(e)
            }

            function I() {
                a.dispatchEvent("timeupdate")
            }

            function q() {
                v = !0, p.seeking = !0, a.dispatchEvent("seeking")
            }

            function R() {
                p.ended = !1, p.seeking = !1, a.dispatchEvent("timeupdate"), a.dispatchEvent("seeked"), a.dispatchEvent("canplay"), a.dispatchEvent("canplaythrough")
            }

            function U() {
                p.ended && (F(0), p.ended = !1), C = setInterval(I, a._util.TIMEUPDATE_MS), p.paused = !1;
                if (w) {
                    w = !1;
                    if (p.loop && !y || !p.loop) y = !0, a.dispatchEvent("play");
                    a.dispatchEvent("playing")
                }
            }

            function z() {
                a.dispatchEvent("progress")
            }

            function W() {
                p.paused = !0, w || (w = !0, clearInterval(C), a.dispatchEvent("pause"))
            }

            function X() {
                p.loop ? (F(0), a.play()) : (p.ended = !0, W(), m = !0, a.dispatchEvent("timeupdate"), a.dispatchEvent("ended"))
            }

            function V(e) {
                p.volume = e;
                if (!g) {
                    L(function() {
                        V(p.volume)
                    });
                    return
                }
                b.setVolume(p.volume * 100), a.dispatchEvent("volumechange")
            }

            function $() {
                return p.volume
            }

            function J(e) {
                p.muted = e;
                if (!g) {
                    L(function() {
                        J(p.muted)
                    });
                    return
                }
                b[e ? "mute" : "unMute"](), a.dispatchEvent("volumechange")
            }

            function K() {
                return p.muted
            }
            if (!t.postMessage) throw "ERROR: HTMLYouTubeVideoElement requires window.postMessage";
            var a = this,
                f = typeof u == "string" ? n.querySelector(u) : u,
                h = n.createElement("div"),
                p = {
                    src: i,
                    networkState: a.NETWORK_EMPTY,
                    readyState: a.HAVE_NOTHING,
                    seeking: !1,
                    autoplay: i,
                    preload: i,
                    controls: !1,
                    loop: !1,
                    poster: i,
                    volume: 1,
                    muted: !1,
                    currentTime: 0,
                    duration: NaN,
                    ended: !1,
                    paused: !0,
                    error: null
                },
                d = !1,
                v = !1,
                m = !1,
                g = !1,
                y = !1,
                b, w = !0,
                E = [],
                S = -1,
                x, T = 0,
                N, C, k = !0;
            a._eventNamespace = e.guid("HTMLYouTubeVideoElement::"), a.parentNode = f, a._util.type = "YouTube", a.play = function() {
                p.paused = !1;
                if (!g) {
                    L(function() {
                        a.play()
                    });
                    return
                }
                b.playVideo()
            }, a.pause = function() {
                p.paused = !0;
                if (!g) {
                    L(function() {
                        a.pause()
                    });
                    return
                }
                v = !1, b.pauseVideo()
            }, Object.defineProperties(a, {
                src: {
                    get: function() {
                        return p.src
                    },
                    set: function(e) {
                        e && e !== p.src && P(e)
                    }
                },
                autoplay: {
                    get: function() {
                        return p.autoplay
                    },
                    set: function(e) {
                        p.autoplay = a._util.isAttributeSet(e)
                    }
                },
                loop: {
                    get: function() {
                        return p.loop
                    },
                    set: function(e) {
                        p.loop = a._util.isAttributeSet(e)
                    }
                },
                width: {
                    get: function() {
                        return a.parentNode.offsetWidth
                    }
                },
                height: {
                    get: function() {
                        return a.parentNode.offsetHeight
                    }
                },
                currentTime: {
                    get: function() {
                        return j()
                    },
                    set: function(e) {
                        F(e)
                    }
                },
                duration: {
                    get: function() {
                        return O()
                    }
                },
                ended: {
                    get: function() {
                        return p.ended
                    }
                },
                paused: {
                    get: function() {
                        return p.paused
                    }
                },
                seeking: {
                    get: function() {
                        return p.seeking
                    }
                },
                readyState: {
                    get: function() {
                        return p.readyState
                    }
                },
                networkState: {
                    get: function() {
                        return p.networkState
                    }
                },
                volume: {
                    get: function() {
                        var e = $();
                        return e / 100
                    },
                    set: function(e) {
                        if (e < 0 || e > 1) throw "Volume value must be between 0.0 and 1.0";
                        V(e)
                    }
                },
                muted: {
                    get: function() {
                        return K()
                    },
                    set: function(e) {
                        J(a._util.isAttributeSet(e))
                    }
                },
                error: {
                    get: function() {
                        return p.error
                    }
                },
                buffered: {
                    get: function() {
                        var e = {
                            start: function(e) {
                                if (e === 0) return 0;
                                throw "INDEX_SIZE_ERR: DOM Exception 1"
                            },
                            end: function(e) {
                                var t;
                                if (e === 0) return t = O(), t ? t * b.getVideoLoadedFraction() : 0;
                                throw "INDEX_SIZE_ERR: DOM Exception 1"
                            }
                        };
                        return Object.defineProperties(e, {
                            length: {
                                get: function() {
                                    return 1
                                }
                            }
                        }), e
                    }
                }
            })
        }
        var r = 10,
            i = "",
            s = /^.*(?:\/|v=)(.{11})/,
            o = Math.abs,
            u = !1,
            a = !1,
            f = [];
        t.YT && (t.quarantineYT = t.YT, t.YT = null), t.onYouTubeIframeAPIReady = function() {
            u = !0;
            var e = f.length;
            while (e--) f[e](), delete f[e]
        }, h.prototype = new e._MediaElementProto, h.prototype.constructor = h, h.prototype._canPlaySrc = function(e) {
            return /(?:http:\/\/www\.|http:\/\/|www\.|\.|^)(youtu).*(?:\/|v=)(.{11})/.test(e) ? "probably" : i
        }, h.prototype.canPlayType = function(e) {
            return e === "video/x-youtube" ? "probably" : i
        }, e.HTMLYouTubeVideoElement = function(e) {
            return new h(e)
        }, e.HTMLYouTubeVideoElement._canPlaySrc = h.prototype._canPlaySrc
    }(Popcorn, window, document),
    function(e) {
        e.plugin("code", function(t) {
            var n = !1,
                r = this,
                i = function() {
                    var e = function(e) {
                        return function(t, i) {
                            var s = function() {
                                n && t.call(r, i), n && e(s)
                            };
                            s()
                        }
                    };
                    return window.webkitRequestAnimationFrame ? e(window.webkitRequestAnimationFrame) : window.mozRequestAnimationFrame ? e(window.mozRequestAnimationFrame) : e(function(e) {
                        window.setTimeout(e, 16)
                    })
                }();
            if (!t.onStart || typeof t.onStart != "function") t.onStart = e.nop;
            return t.onEnd && typeof t.onEnd != "function" && (t.onEnd = undefined), t.onFrame && typeof t.onFrame != "function" && (t.onFrame = undefined), {
                start: function(e, t) {
                    t.onStart.call(r, t), t.onFrame && (n = !0, i(t.onFrame, t))
                },
                end: function(e, t) {
                    t.onFrame && (n = !1), t.onEnd && t.onEnd.call(r, t)
                }
            }
        }, {
            about: {
                name: "Popcorn Code Plugin",
                version: "0.1",
                author: "David Humphrey (@humphd)",
                website: "http://vocamus.net/dave"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                onStart: {
                    elem: "input",
                    type: "function",
                    label: "onStart"
                },
                onFrame: {
                    elem: "input",
                    type: "function",
                    label: "onFrame",
                    optional: !0
                },
                onEnd: {
                    elem: "input",
                    type: "function",
                    label: "onEnd"
                }
            }
        })
    }(Popcorn),
    function(e, t) {
        var n = {};
        e.plugin("documentcloud", {
            manifest: {
                about: {
                    name: "Popcorn Document Cloud Plugin",
                    version: "0.1",
                    author: "@humphd, @ChrisDeCairos",
                    website: "http://vocamus.net/dave"
                },
                options: {
                    start: {
                        elem: "input",
                        type: "number",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "number",
                        label: "End"
                    },
                    target: "documentcloud-container",
                    width: {
                        elem: "input",
                        type: "text",
                        label: "Width",
                        optional: !0
                    },
                    height: {
                        elem: "input",
                        type: "text",
                        label: "Height",
                        optional: !0
                    },
                    src: {
                        elem: "input",
                        type: "url",
                        label: "PDF URL",
                        "default": "http://www.documentcloud.org/documents/70050-urbina-day-1-in-progress.html"
                    },
                    preload: {
                        elem: "input",
                        type: "checkbox",
                        label: "Preload",
                        "default": !0
                    },
                    page: {
                        elem: "input",
                        type: "number",
                        label: "Page Number",
                        optional: !0
                    },
                    aid: {
                        elem: "input",
                        type: "number",
                        label: "Annotation Id",
                        optional: !0
                    }
                }
            },
            _setup: function(r) {
                function o() {
                    function E(e) {
                        r._key = e.api.getId(), r._changeView = function(e) {
                            r.aid ? e.pageSet.showAnnotation(e.api.getAnnotation(r.aid)) : e.api.setCurrentPage(r.page)
                        }
                    }

                    function S(t) {
                        var s = !1;
                        return e.forEach(i.viewers, function(e, o) {
                            if (e.api.getSchema().canonicalURL === t) {
                                var u;
                                E(e), u = n[r._key], r._containerId = u.id, u.num += 1, s = !0, i.loaded = !0
                            }
                        }), s
                    }

                    function x() {
                        var e = {
                            num: 1,
                            id: r._containerId
                        };
                        n[r._key] = e, i.loaded = !0
                    }
                    i.loaded = !1;
                    var o = r.url.replace(/\.html$/, ".js"),
                        u = r.target,
                        a = t.getElementById(u),
                        f = t.createElement("div"),
                        l = e.position(a),
                        c = r.width || l.width,
                        h = r.height || l.height,
                        p = r.sidebar || !0,
                        d = r.text || !0,
                        v = r.pdf || !0,
                        m = r.showAnnotations || !0,
                        g = r.zoom || 700,
                        y = r.search || !0,
                        b = r.page,
                        w;
                    if (!S(r.url)) {
                        f.id = r._containerId = e.guid(u), w = "#" + f.id, a.appendChild(f), s.trigger("documentready");
                        var T = r.page || r.aid ? function(e) {
                            E(e), r._changeView(e), f.style.visibility = "hidden", e.elements.pages.hide(), x()
                        } : function(e) {
                            E(e), x(), f.style.visibility = "hidden", e.elements.pages.hide()
                        };
                        i.load(o, {
                            width: c,
                            height: h,
                            sidebar: p,
                            text: d,
                            pdf: v,
                            showAnnotations: m,
                            zoom: g,
                            search: y,
                            container: w,
                            afterLoad: T
                        })
                    }
                }

                function u() {
                    window.DV.loaded ? o() : setTimeout(u, 25)
                }
                var i = window.DV = window.DV || {},
                    s = this;
                if (!i.loading) {
                    i.loading = !0, i.recordHit = "//www.documentcloud.org/pixel.gif";
                    var a = t.createElement("link"),
                        f = t.getElementsByTagName("head")[0];
                    a.rel = "stylesheet", a.type = "text/css", a.media = "screen", a.href = "//s3.documentcloud.org/viewer/viewer-datauri.css", f.appendChild(a), i.loaded = !1, e.getScript("http://s3.documentcloud.org/viewer/viewer.js", function() {
                        i.loading = !1, o()
                    })
                } else u();
                r.toString = function() {
                    return r.src || r._natives.manifest.options.src["default"]
                }
            },
            start: function(e, n) {
                var r = t.getElementById(n._containerId),
                    i = DV.viewers[n._key];
                (n.page || n.aid) && i && n._changeView(i), r && i && (r.style.visibility = "visible", i.elements.pages.show())
            },
            end: function(e, n) {
                var r = t.getElementById(n._containerId);
                r && DV.viewers[n._key] && (r.style.visibility = "hidden", DV.viewers[n._key].elements.pages.hide())
            },
            _teardown: function(e) {
                var r = t.getElementById(e._containerId),
                    i = e._key;
                if (i && DV.viewers[i] && --n[i].num === 0) {
                    DV.viewers[i].api.unload();
                    while (r.hasChildNodes()) r.removeChild(r.lastChild);
                    r.parentNode.removeChild(r)
                }
            }
        })
    }(Popcorn, window.document),
    function(e) {
        var t = 0;
        e.plugin("flickr", function(n) {
            var r, i = document.getElementById(n.target),
                s, o, u, a, f = n.numberofimages || 4,
                l = n.height || "50px",
                c = n.width || "50px",
                h = n.padding || "5px",
                p = n.border || "0px";
            r = document.createElement("div"), r.id = "flickr" + t, r.style.width = "100%", r.style.height = "100%", r.style.display = "none", t++, i && i.appendChild(r);
            var d = function() {
                    s ? setTimeout(function() {
                        d()
                    }, 5) : (o = "http://api.flickr.com/services/rest/?method=flickr.people.findByUsername&", o += "username=" + n.username + "&api_key=" + n.apikey + "&format=json&jsoncallback=flickr", e.getJSONP(o, function(e) {
                        s = e.user.nsid, v()
                    }))
                },
                v = function() {
                    o = "http://api.flickr.com/services/feeds/photos_public.gne?", s && (o += "id=" + s + "&"), n.tags && (o += "tags=" + n.tags + "&"), o += "lang=en-us&format=json&jsoncallback=flickr", e.xhr.getJSONP(o, function(t) {
                        var n = document.createElement("div");
                        n.innerHTML = "<p style='padding:" + h + ";'>" + t.title + "<p/>", e.forEach(t.items, function(e, t) {
                            if (!(t < f)) return !1;
                            u = document.createElement("a"), u.setAttribute("href", e.link), u.setAttribute("target", "_blank"), a = document.createElement("img"), a.setAttribute("src", e.media.m), a.setAttribute("height", l), a.setAttribute("width", c), a.setAttribute("style", "border:" + p + ";padding:" + h), u.appendChild(a), n.appendChild(u)
                        }), r.appendChild(n)
                    })
                };
            return n.username && n.apikey ? d() : (s = n.userid, v()), n.toString = function() {
                return n.tags || n.username || "Flickr"
            }, {
                start: function(e, t) {
                    r.style.display = "inline"
                },
                end: function(e, t) {
                    r.style.display = "none"
                },
                _teardown: function(e) {
                    document.getElementById(e.target) && document.getElementById(e.target).removeChild(r)
                }
            }
        }, {
            about: {
                name: "Popcorn Flickr Plugin",
                version: "0.2",
                author: "Scott Downe, Steven Weerdenburg, Annasob",
                website: "http://scottdowne.wordpress.com/"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                userid: {
                    elem: "input",
                    type: "text",
                    label: "User ID",
                    optional: !0
                },
                tags: {
                    elem: "input",
                    type: "text",
                    label: "Tags"
                },
                username: {
                    elem: "input",
                    type: "text",
                    label: "Username",
                    optional: !0
                },
                apikey: {
                    elem: "input",
                    type: "text",
                    label: "API Key",
                    optional: !0
                },
                target: "flickr-container",
                height: {
                    elem: "input",
                    type: "text",
                    label: "Height",
                    "default": "50px",
                    optional: !0
                },
                width: {
                    elem: "input",
                    type: "text",
                    label: "Width",
                    "default": "50px",
                    optional: !0
                },
                padding: {
                    elem: "input",
                    type: "text",
                    label: "Padding",
                    optional: !0
                },
                border: {
                    elem: "input",
                    type: "text",
                    label: "Border",
                    "default": "5px",
                    optional: !0
                },
                numberofimages: {
                    elem: "input",
                    type: "number",
                    "default": 4,
                    label: "Number of Images"
                }
            }
        })
    }(Popcorn),
    function(e) {
        e.plugin("footnote", {
            manifest: {
                about: {
                    name: "Popcorn Footnote Plugin",
                    version: "0.2",
                    author: "@annasob, @rwaldron",
                    website: "annasob.wordpress.com"
                },
                options: {
                    start: {
                        elem: "input",
                        type: "number",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "number",
                        label: "End"
                    },
                    text: {
                        elem: "input",
                        type: "text",
                        label: "Text"
                    },
                    target: "footnote-container"
                }
            },
            _setup: function(t) {
                var n = e.dom.find(t.target);
                t._container = document.createElement("div"), t._container.style.display = "none", t._container.innerHTML = t.text, n.appendChild(t._container)
            },
            start: function(e, t) {
                t._container.style.display = "inline"
            },
            end: function(e, t) {
                t._container.style.display = "none"
            },
            _teardown: function(t) {
                var n = e.dom.find(t.target);
                n && n.removeChild(t._container)
            }
        })
    }(Popcorn),
    function(e) {
        var t = 1,
            n = !1;
        e.plugin("googlefeed", function(r) {
            var s = function() {
                var t = !1,
                    r = 0,
                    i = document.getElementsByTagName("link"),
                    s = i.length,
                    o = document.head || document.getElementsByTagName("head")[0],
                    u = document.createElement("link"),
                    a = "//www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.";
                window.GFdynamicFeedControl ? n = !0 : e.getScript(a + "js", function() {
                    n = !0
                });
                for (; r < s; r++) i[r].href === a + "css" && (t = !0);
                t || (u.type = "text/css", u.rel = "stylesheet", u.href = a + "css", o.insertBefore(u, o.firstChild))
            };
            window.google ? s() : e.getScript("//www.google.com/jsapi", function() {
                google.load("feeds", "1", {
                    callback: function() {
                        s()
                    }
                })
            });
            var o = document.createElement("div"),
                u = document.getElementById(r.target),
                a = function() {
                    n ? r.feed = new GFdynamicFeedControl(r.url, o, {
                        vertical: r.orientation.toLowerCase() === "vertical" ? !0 : !1,
                        horizontal: r.orientation.toLowerCase() === "horizontal" ? !0 : !1,
                        title: r.title = r.title || "Blog"
                    }) : setTimeout(function() {
                        a()
                    }, 5)
                };
            if (!r.orientation || r.orientation.toLowerCase() !== "vertical" && r.orientation.toLowerCase() !== "horizontal") r.orientation = "vertical";
            return o.style.display = "none", o.id = "_feed" + t, o.style.width = "100%", o.style.height = "100%", t++, u && u.appendChild(o), a(), r.toString = function() {
                return r.url || r._natives.manifest.options.url["default"]
            }, {
                start: function(e, t) {
                    o.setAttribute("style", "display:inline")
                },
                end: function(e, t) {
                    o.setAttribute("style", "display:none")
                },
                _teardown: function(e) {
                    document.getElementById(e.target) && document.getElementById(e.target).removeChild(o), delete e.feed
                }
            }
        }, {
            about: {
                name: "Popcorn Google Feed Plugin",
                version: "0.1",
                author: "David Seifried",
                website: "dseifried.wordpress.com"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                target: "feed-container",
                url: {
                    elem: "input",
                    type: "url",
                    label: "Feed URL",
                    "default": "http://planet.mozilla.org/rss20.xml"
                },
                title: {
                    elem: "input",
                    type: "text",
                    label: "Title",
                    "default": "Planet Mozilla",
                    optional: !0
                },
                orientation: {
                    elem: "select",
                    options: ["Vertical", "Horizontal"],
                    label: "Orientation",
                    "default": "Vertical",
                    optional: !0
                }
            }
        })
    }(Popcorn);
var googleCallback;
(function(e) {
    function o(e, t, n) {
        var r = e.type ? e.type.toUpperCase() : "HYBRID",
            i;
        if (r === "STAMEN-WATERCOLOR" || r === "STAMEN-TERRAIN" || r === "STAMEN-TONER") i = r.replace("STAMEN-", "").toLowerCase();
        var s = new google.maps.Map(n, {
            mapTypeId: i ? i : google.maps.MapTypeId[r],
            mapTypeControlOptions: {
                mapTypeIds: []
            }
        });
        return i && s.mapTypes.set(i, new google.maps.StamenMapType(i)), s.getDiv().style.display = "none", s
    }
    var t = 1,
        n = !1,
        r = !1,
        i, s;
    googleCallback = function(t) {
        typeof google != "undefined" && google.maps && google.maps.Geocoder && google.maps.LatLng ? (i = new google.maps.Geocoder, e.getScript("//maps.stamen.com/js/tile.stamen.js", function() {
            r = !0
        })) : setTimeout(function() {
            googleCallback(t)
        }, 1)
    }, s = function() {
        document.body ? (n = !0, e.getScript("//maps.google.com/maps/api/js?sensor=false&callback=googleCallback")) : setTimeout(function() {
            s()
        }, 1)
    }, e.plugin("googlemap", function(e) {
        var u, a, f, l = document.getElementById(e.target);
        e.type = e.type || "ROADMAP", e.zoom = e.zoom || 1, e.lat = e.lat || 0, e.lng = e.lng || 0, n || s(), u = document.createElement("div"), u.id = "actualmap" + t, u.style.width = e.width || "100%", e.height ? u.style.height = e.height : l && l.clientHeight ? u.style.height = l.clientHeight + "px" : u.style.height = "100%", t++, l && l.appendChild(u);
        var c = function() {
            r ? u && (e.location ? i.geocode({
                address: e.location
            }, function(t, n) {
                u && n === google.maps.GeocoderStatus.OK && (e.lat = t[0].geometry.location.lat(), e.lng = t[0].geometry.location.lng(), f = new google.maps.LatLng(e.lat, e.lng), a = o(e, f, u))
            }) : (f = new google.maps.LatLng(e.lat, e.lng), a = o(e, f, u))) : setTimeout(function() {
                c()
            }, 5)
        };
        return c(), e.toString = function() {
            return e.location || (e.lat && e.lng ? e.lat + ", " + e.lng : e._natives.manifest.options.location["default"])
        }, {
            start: function(e, t) {
                var n = this,
                    r, i = function() {
                        if (a) {
                            t._map = a, a.getDiv().style.display = "block", google.maps.event.trigger(a, "resize"), a.setCenter(f), t.zoom && typeof t.zoom != "number" && (t.zoom = +t.zoom), a.setZoom(t.zoom), t.heading && typeof t.heading != "number" && (t.heading = +t.heading), t.pitch && typeof t.pitch != "number" && (t.pitch = +t.pitch);
                            if (t.type === "STREETVIEW") {
                                a.setStreetView(r = new google.maps.StreetViewPanorama(u, {
                                    position: f,
                                    pov: {
                                        heading: t.heading = t.heading || 0,
                                        pitch: t.pitch = t.pitch || 0,
                                        zoom: t.zoom
                                    }
                                }));
                                var e = function(r, i) {
                                    var u = google.maps.geometry.spherical.computeHeading;
                                    setTimeout(function() {
                                        var i = n.media.currentTime;
                                        if (typeof t.tween == "object") {
                                            for (var a = 0, f = r.length; a < f; a++) {
                                                var l = r[a];
                                                i >= l.interval * (a + 1) / 1e3 && (i <= l.interval * (a + 2) / 1e3 || i >= l.interval * f / 1e3) && (d.setPosition(new google.maps.LatLng(l.position.lat, l.position.lng)), d.setPov({
                                                    heading: l.pov.heading || u(l, r[a + 1]) || 0,
                                                    zoom: l.pov.zoom || 0,
                                                    pitch: l.pov.pitch || 0
                                                }))
                                            }
                                            e(r, r[0].interval)
                                        } else {
                                            for (var c = 0, h = r.length; c < h; c++) {
                                                var p = t.interval;
                                                i >= p * (c + 1) / 1e3 && (i <= p * (c + 2) / 1e3 || i >= p * h / 1e3) && (s.setPov({
                                                    heading: u(r[c], r[c + 1]) || 0,
                                                    zoom: t.zoom,
                                                    pitch: t.pitch || 0
                                                }), s.setPosition(o[c]))
                                            }
                                            e(o, t.interval)
                                        }
                                    }, i)
                                };
                                if (t.location && typeof t.tween == "string") {
                                    var s = r,
                                        o = [],
                                        l = new google.maps.DirectionsService,
                                        c = new google.maps.DirectionsRenderer(s),
                                        h = {
                                            origin: t.location,
                                            destination: t.tween,
                                            travelMode: google.maps.TravelMode.DRIVING
                                        };
                                    l.route(h, function(e, t) {
                                        t == google.maps.DirectionsStatus.OK && (c.setDirections(e), p(e, n))
                                    });
                                    var p = function(n, r) {
                                        var i = n.routes[0].overview_path;
                                        for (var s = 0, u = i.length; s < u; s++) o.push(new google.maps.LatLng(i[s].lat(), i[s].lng()));
                                        t.interval = t.interval || 1e3, e(o, 10)
                                    }
                                } else if (typeof t.tween == "object") {
                                    var d = r;
                                    for (var v = 0, m = t.tween.length; v < m; v++) t.tween[v].interval = t.tween[v].interval || 1e3, e(t.tween, 10)
                                }
                            }
                            t.onmaploaded && t.onmaploaded(t, a)
                        } else setTimeout(function() {
                            i()
                        }, 13)
                    };
                i()
            },
            end: function(e, t) {
                a && (a.getDiv().style.display = "none")
            },
            _teardown: function(e) {
                var t = document.getElementById(e.target);
                t && t.removeChild(u), u = a = f = null, e._map = null
            }
        }
    }, {
        about: {
            name: "Popcorn Google Map Plugin",
            version: "0.1",
            author: "@annasob",
            website: "annasob.wordpress.com"
        },
        options: {
            start: {
                elem: "input",
                type: "start",
                label: "Start"
            },
            end: {
                elem: "input",
                type: "start",
                label: "End"
            },
            target: "map-container",
            type: {
                elem: "select",
                options: ["ROADMAP", "SATELLITE", "STREETVIEW", "HYBRID", "TERRAIN", "STAMEN-WATERCOLOR", "STAMEN-TERRAIN", "STAMEN-TONER"],
                label: "Map Type",
                optional: !0
            },
            zoom: {
                elem: "input",
                type: "text",
                label: "Zoom",
                "default": 0,
                optional: !0
            },
            lat: {
                elem: "input",
                type: "text",
                label: "Lat",
                optional: !0
            },
            lng: {
                elem: "input",
                type: "text",
                label: "Lng",
                optional: !0
            },
            location: {
                elem: "input",
                type: "text",
                label: "Location",
                "default": "Toronto, Ontario, Canada"
            },
            heading: {
                elem: "input",
                type: "text",
                label: "Heading",
                "default": 0,
                optional: !0
            },
            pitch: {
                elem: "input",
                type: "text",
                label: "Pitch",
                "default": 1,
                optional: !0
            }
        }
    })
})(Popcorn),
function(e) {
    function r(e) {
        function o() {
            var t = e.getBoundingClientRect(),
                n = i.getBoundingClientRect();
            n.left !== t.left && (i.style.left = t.left + "px"), n.top !== t.top && (i.style.top = t.top + "px")
        }
        var r = -1,
            i = document.createElement("div"),
            s = getComputedStyle(e).zIndex;
        return i.setAttribute("data-popcorn-helper-container", !0), i.style.position = "absolute", isNaN(s) ? i.style.zIndex = t : i.style.zIndex = s + 1, document.body.appendChild(i), {
            element: i,
            start: function() {
                r = setInterval(o, n)
            },
            stop: function() {
                clearInterval(r), r = -1
            },
            destroy: function() {
                document.body.removeChild(i), r !== -1 && clearInterval(r)
            }
        }
    }
    var t = 2e3,
        n = 10;
    e.plugin("image", {
        manifest: {
            about: {
                name: "Popcorn image Plugin",
                version: "0.1",
                author: "Scott Downe",
                website: "http://scottdowne.wordpress.com/"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                src: {
                    elem: "input",
                    type: "url",
                    label: "Image URL",
                    "default": "http://mozillapopcorn.org/wp-content/themes/popcorn/images/for_developers.png"
                },
                href: {
                    elem: "input",
                    type: "url",
                    label: "Link",
                    "default": "http://mozillapopcorn.org/wp-content/themes/popcorn/images/for_developers.png",
                    optional: !0
                },
                target: "image-container",
                text: {
                    elem: "input",
                    type: "text",
                    label: "Caption",
                    "default": "Popcorn.js",
                    optional: !0
                }
            }
        },
        _setup: function(t) {
            var n = document.createElement("img"),
                i = document.getElementById(t.target);
            t.anchor = document.createElement("a"), t.anchor.style.position = "relative", t.anchor.style.textDecoration = "none", t.anchor.style.display = "none", i && (["VIDEO", "AUDIO"].indexOf(i.nodeName) > -1 ? (t.trackedContainer = r(i), t.trackedContainer.element.appendChild(t.anchor)) : i && i.appendChild(t.anchor)), n.addEventListener("load", function() {
                n.style.borderStyle = "none", t.anchor.href = t.href || t.src || "#", t.anchor.target = "_blank";
                var r, s;
                n.style.height = i.style.height, n.style.width = i.style.width, t.anchor.appendChild(n), t.text && (r = n.height / 12 + "px", s = document.createElement("div"), e.extend(s.style, {
                    color: "black",
                    fontSize: r,
                    fontWeight: "bold",
                    position: "relative",
                    textAlign: "center",
                    width: n.style.width || n.width + "px",
                    zIndex: "10"
                }), s.innerHTML = t.text || "", s.style.top = (n.style.height.replace("px", "") || n.height) / 2 - s.offsetHeight / 2 + "px", t.anchor.insertBefore(s, n))
            }, !1), n.src = t.src, t.toString = function() {
                var e = t.src || t._natives.manifest.options.src["default"],
                    n = e.replace(/.*\//g, "");
                return n.length ? n : e
            }
        },
        start: function(e, t) {
            t.anchor.style.display = "inline", t.trackedContainer && t.trackedContainer.start()
        },
        end: function(e, t) {
            t.anchor.style.display = "none", t.trackedContainer && t.trackedContainer.stop()
        },
        _teardown: function(e) {
            e.trackedContainer ? e.trackedContainer.destroy() : e.anchor.parentNode && e.anchor.parentNode.removeChild(e.anchor)
        }
    })
}(Popcorn),
function(e, t) {
    var n = "http://popcornjs.org/code/modules/player/popcorn.player.js",
        r = /(?:http:\/\/www\.|http:\/\/|www\.|\.|^)(youtu|vimeo|soundcloud|baseplayer)/,
        i, s = {},
        o = {
            vimeo: !1,
            youtube: !1,
            soundcloud: !1,
            module: !1
        };
    Object.defineProperty(s, i, {
        get: function() {
            return o[i]
        },
        set: function(e) {
            o[i] = e
        }
    }), e.plugin("mediaspawner", {
        manifest: {
            about: {
                name: "Popcorn Media Spawner Plugin",
                version: "0.1",
                author: "Matthew Schranz, @mjschranz",
                website: "mschranz.wordpress.com"
            },
            options: {
                source: {
                    elem: "input",
                    type: "text",
                    label: "Media Source",
                    "default": "http://www.youtube.com/watch?v=CXDstfD9eJ0"
                },
                caption: {
                    elem: "input",
                    type: "text",
                    label: "Media Caption",
                    "default": "Popcorn Popping",
                    optional: !0
                },
                target: "mediaspawner-container",
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                autoplay: {
                    elem: "input",
                    type: "checkbox",
                    label: "Autoplay Video",
                    optional: !0
                },
                width: {
                    elem: "input",
                    type: "number",
                    label: "Media Width",
                    "default": 400,
                    units: "px",
                    optional: !0
                },
                height: {
                    elem: "input",
                    type: "number",
                    label: "Media Height",
                    "default": 200,
                    units: "px",
                    optional: !0
                }
            }
        },
        _setup: function(t) {
            function l() {
                function n() {
                    o !== "HTML5" && !window.Popcorn[o] ? setTimeout(function() {
                        n()
                    }, 300) : (t.id = t._container.id, t._container.style.width = t.width + "px", t._container.style.height = t.height + "px", t.popcorn = e.smart("#" + t.id, t.source), o === "HTML5" && t.popcorn.controls(!0), t._container.style.width = "0px", t._container.style.height = "0px", t._container.style.visibility = "hidden", t._container.style.overflow = "hidden")
                }
                o !== "HTML5" && !window.Popcorn[o] && !s[o] ? (s[o] = !0, e.getScript("http://popcornjs.org/code/players/" + o + "/popcorn." + o + ".js", function() {
                    n()
                })) : n()
            }

            function c() {
                window.Popcorn.player ? l() : setTimeout(function() {
                    c()
                }, 300)
            }
            var i = document.getElementById(t.target) || {},
                o, u, a, f;
            f = r.exec(t.source), f ? (o = f[1], o === "youtu" && (o = "youtube")) : o = "HTML5", t._type = o, t._container = document.createElement("div"), u = t._container, u.id = "mediaSpawnerdiv-" + e.guid(), t.width = t.width || 400, t.height = t.height || 200, t.caption && (a = document.createElement("div"), a.innerHTML = t.caption, a.style.display = "none", t._capCont = a, u.appendChild(a)), i && i.appendChild(u), !window.Popcorn.player && !s.module ? (s.module = !0, e.getScript(n, c)) : c(), t.toString = function() {
                return t.source || t._natives.manifest.options.source["default"]
            }
        },
        start: function(e, t) {
            t._capCont && (t._capCont.style.display = ""), t._container.style.width = t.width + "px", t._container.style.height = t.height + "px", t._container.style.visibility = "visible", t._container.style.overflow = "visible", t.autoplay && t.popcorn.play()
        },
        end: function(e, t) {
            t._capCont && (t._capCont.style.display = "none"), t._container.style.width = "0px", t._container.style.height = "0px", t._container.style.visibility = "hidden", t._container.style.overflow = "hidden", t.popcorn.pause()
        },
        _teardown: function(e) {
            e.popcorn && e.popcorn.destory && e.popcorn.destroy(), document.getElementById(e.target) && document.getElementById(e.target).removeChild(e._container)
        }
    })
}(Popcorn, this),
function(e) {
    e.plugin("mustache", function(t) {
        var n, r, i, s;
        e.getScript("http://mustache.github.com/extras/mustache.js");
        var o = !!t.dynamic,
            u = typeof t.template,
            a = typeof t.data,
            f = document.getElementById(t.target);
        return t.container = f || document.createElement("div"), u === "function" ? o ? i = t.template : s = t.template(t) : u === "string" ? s = t.template : s = "", a === "function" ? o ? n = t.data : r = t.data(t) : a === "string" ? r = JSON.parse(t.data) : a === "object" ? r = t.data : r = "", {
            start: function(e, t) {
                var o = function() {
                    if (!window.Mustache) setTimeout(function() {
                        o()
                    }, 10);
                    else {
                        n && (r = n(t)), i && (s = i(t));
                        var e = Mustache.to_html(s, r).replace(/^\s*/mg, "");
                        t.container.innerHTML = e
                    }
                };
                o()
            },
            end: function(e, t) {
                t.container.innerHTML = ""
            },
            _teardown: function(e) {
                n = r = i = s = null
            }
        }
    }, {
        about: {
            name: "Popcorn Mustache Plugin",
            version: "0.1",
            author: "David Humphrey (@humphd)",
            website: "http://vocamus.net/dave"
        },
        options: {
            start: {
                elem: "input",
                type: "number",
                label: "Start"
            },
            end: {
                elem: "input",
                type: "number",
                label: "End"
            },
            target: "mustache-container",
            template: {
                elem: "input",
                type: "text",
                label: "Template"
            },
            data: {
                elem: "input",
                type: "text",
                label: "Data"
            },
            dynamic: {
                elem: "input",
                type: "checkbox",
                label: "Dynamic",
                "default": !0
            }
        }
    })
}(Popcorn),
function(e) {
    function r(e, t) {
        if (e.map) {
            e.map.div.style.display = t;
            return
        }
        setTimeout(function() {
            r(e, t)
        }, 10)
    }
    var t, n = 1;
    e.plugin("openmap", function(t) {
        var s, o, u, a, f, l, c, h, p = document.getElementById(t.target);
        return s = document.createElement("div"), s.id = "openmapdiv" + n, s.style.width = "100%", s.style.height = "100%", n++, p && p.appendChild(s), h = function() {
            if (!window.OpenLayers || !window.OpenLayers.Layer.Stamen) setTimeout(function() {
                h()
            }, 50);
            else {
                t.location ? (location = new OpenLayers.LonLat(0, 0), e.getJSONP("//tinygeocoder.com/create-api.php?q=" + t.location + "&callback=jsonp", function(e) {
                    o = new OpenLayers.LonLat(e[1], e[0])
                })) : o = new OpenLayers.LonLat(t.lng, t.lat), t.type = t.type || "ROADMAP";
                switch (t.type) {
                    case "SATELLITE":
                        t.map = new OpenLayers.Map({
                            div: s,
                            maxResolution: .28125,
                            tileSize: new OpenLayers.Size(512, 512)
                        });
                        var n = new OpenLayers.Layer.WorldWind("LANDSAT", "//worldwind25.arc.nasa.gov/tile/tile.aspx", 2.25, 4, {
                            T: "105"
                        });
                        t.map.addLayer(n), a = new OpenLayers.Projection("EPSG:4326"), u = new OpenLayers.Projection("EPSG:4326");
                        break;
                    case "TERRAIN":
                        a = new OpenLayers.Projection("EPSG:4326"), u = new OpenLayers.Projection("EPSG:4326"), t.map = new OpenLayers.Map({
                            div: s,
                            projection: u
                        });
                        var r = new OpenLayers.Layer.WMS("USGS Terraserver", "//terraserver-usa.org/ogcmap.ashx?", {
                            layers: "DRG"
                        });
                        t.map.addLayer(r);
                        break;
                    case "STAMEN-TONER":
                    case "STAMEN-WATERCOLOR":
                    case "STAMEN-TERRAIN":
                        var i = t.type.replace("STAMEN-", "").toLowerCase(),
                            f = new OpenLayers.Layer.Stamen(i);
                        a = new OpenLayers.Projection("EPSG:4326"), u = new OpenLayers.Projection("EPSG:900913"), o = o.transform(a, u), t.map = new OpenLayers.Map({
                            div: s,
                            projection: u,
                            displayProjection: a,
                            controls: [new OpenLayers.Control.Navigation, new OpenLayers.Control.PanPanel, new OpenLayers.Control.ZoomPanel]
                        }), t.map.addLayer(f);
                        break;
                    default:
                        u = new OpenLayers.Projection("EPSG:900913"), a = new OpenLayers.Projection("EPSG:4326"), o = o.transform(a, u), t.map = new OpenLayers.Map({
                            div: s,
                            projection: u,
                            displayProjection: a
                        });
                        var l = new OpenLayers.Layer.OSM;
                        t.map.addLayer(l)
                }
                t.map && (t.map.setCenter(o, t.zoom || 10), t.map.div.style.display = "none")
            }
        }, h(), {
            _setup: function(t) {
                window.OpenLayers || e.getScript("//openlayers.org/api/OpenLayers.js", function() {
                    e.getScript("//maps.stamen.com/js/tile.stamen.js")
                });
                var n = function() {
                    if (!t.map) setTimeout(function() {
                        n()
                    }, 13);
                    else {
                        t.zoom = t.zoom || 2, t.zoom && typeof t.zoom != "number" && (t.zoom = +t.zoom), t.map.setCenter(o, t.zoom);
                        if (t.markers) {
                            var r = OpenLayers.Util.extend({}, OpenLayers.Feature.Vector.style["default"]),
                                i = function(e) {
                                    clickedFeature = e.feature;
                                    if (!clickedFeature.attributes.text) return;
                                    c = new OpenLayers.Popup.FramedCloud("featurePopup", clickedFeature.geometry.getBounds().getCenterLonLat(), new OpenLayers.Size(120, 250), clickedFeature.attributes.text, null, !0, function(e) {
                                        l.unselect(this.feature)
                                    }), clickedFeature.popup = c, c.feature = clickedFeature, t.map.addPopup(c)
                                },
                                s = function(e) {
                                    feature = e.feature, feature.popup && (c.feature = null, t.map.removePopup(feature.popup), feature.popup.destroy(), feature.popup = null)
                                },
                                h = function(t) {
                                    e.getJSONP("//tinygeocoder.com/create-api.php?q=" + t.location + "&callback=jsonp", function(e) {
                                        var n = (new OpenLayers.Geometry.Point(e[1], e[0])).transform(a, u),
                                            i = OpenLayers.Util.extend({}, r);
                                        if (!t.size || isNaN(t.size)) t.size = 14;
                                        i.pointRadius = t.size, i.graphicOpacity = 1, i.externalGraphic = t.icon;
                                        var s = new OpenLayers.Feature.Vector(n, null, i);
                                        t.text && (s.attributes = {
                                            text: t.text
                                        }), f.addFeatures([s])
                                    })
                                };
                            f = new OpenLayers.Layer.Vector("Point Layer", {
                                style: r
                            }), t.map.addLayer(f);
                            for (var p = 0, d = t.markers.length; p < d; p++) {
                                var v = t.markers[p];
                                v.text && (l || (l = new OpenLayers.Control.SelectFeature(f), t.map.addControl(l), l.activate(), f.events.on({
                                    featureselected: i,
                                    featureunselected: s
                                })));
                                if (v.location) {
                                    var m = h;
                                    m(v)
                                } else {
                                    var g = (new OpenLayers.Geometry.Point(v.lng, v.lat)).transform(a, u),
                                        y = OpenLayers.Util.extend({}, r);
                                    if (!v.size || isNaN(v.size)) v.size = 14;
                                    y.pointRadius = v.size, y.graphicOpacity = 1, y.externalGraphic = v.icon;
                                    var b = new OpenLayers.Feature.Vector(g, null, y);
                                    v.text && (b.attributes = {
                                        text: v.text
                                    }), f.addFeatures([b])
                                }
                            }
                        }
                    }
                };
                n()
            },
            start: function(e, t) {
                r(t, "block")
            },
            end: function(e, t) {
                r(t, "none")
            },
            _teardown: function(e) {
                p && p.removeChild(s), s = map = o = u = a = f = l = c = null
            }
        }
    }, {
        about: {
            name: "Popcorn OpenMap Plugin",
            version: "0.3",
            author: "@mapmeld",
            website: "mapadelsur.blogspot.com"
        },
        options: {
            start: {
                elem: "input",
                type: "number",
                label: "Start"
            },
            end: {
                elem: "input",
                type: "number",
                label: "End"
            },
            target: "map-container",
            type: {
                elem: "select",
                options: ["ROADMAP", "SATELLITE", "TERRAIN"],
                label: "Map Type",
                optional: !0
            },
            zoom: {
                elem: "input",
                type: "number",
                label: "Zoom",
                "default": 2
            },
            lat: {
                elem: "input",
                type: "text",
                label: "Lat",
                optional: !0
            },
            lng: {
                elem: "input",
                type: "text",
                label: "Lng",
                optional: !0
            },
            location: {
                elem: "input",
                type: "text",
                label: "Location",
                "default": "Toronto, Ontario, Canada"
            },
            markers: {
                elem: "input",
                type: "text",
                label: "List Markers",
                optional: !0
            }
        }
    })
}(Popcorn), document.addEventListener("click", function(e) {
        var t = e.target;
        (t.nodeName === "A" || t.parentNode && t.parentNode.nodeName === "A") && Popcorn.instances.forEach(function(e) {
            e.options.pauseOnLinkClicked && e.pause()
        })
    }, !1),
    function(e) {
        var t = 0,
            n = function(t, n) {
                var r = t.container = document.createElement("div"),
                    i = r.style,
                    s = t.media,
                    o = function() {
                        var e = t.position();
                        i.fontSize = "18px", i.width = s.offsetWidth + "px", i.top = e.top + s.offsetHeight - r.offsetHeight - 40 + "px", i.left = e.left + "px", setTimeout(o, 10)
                    };
                return r.id = n || e.guid(), i.position = "absolute", i.color = "white", i.textShadow = "black 2px 2px 6px", i.fontWeight = "bold", i.textAlign = "center", o(), t.media.parentNode.appendChild(r), r
            };
        e.plugin("subtitle", {
            manifest: {
                about: {
                    name: "Popcorn Subtitle Plugin",
                    version: "0.1",
                    author: "Scott Downe",
                    website: "http://scottdowne.wordpress.com/"
                },
                options: {
                    start: {
                        elem: "input",
                        type: "text",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "text",
                        label: "End"
                    },
                    target: "subtitle-container",
                    text: {
                        elem: "input",
                        type: "text",
                        label: "Text"
                    }
                }
            },
            _setup: function(e) {
                var r = document.createElement("div");
                r.id = "subtitle-" + t++, r.style.display = "none", !this.container && (!e.target || e.target === "subtitle-container") && n(this), e.target && e.target !== "subtitle-container" ? e.container = document.getElementById(e.target) || n(this, e.target) : e.container = this.container, document.getElementById(e.container.id) && document.getElementById(e.container.id).appendChild(r), e.innerContainer = r, e.showSubtitle = function() {
                    e.innerContainer.innerHTML = e.text || ""
                }
            },
            start: function(e, t) {
                t.innerContainer.style.display = "inline", t.showSubtitle(t, t.text)
            },
            end: function(e, t) {
                t.innerContainer.style.display = "none", t.innerContainer.innerHTML = ""
            },
            _teardown: function(e) {
                e.container.removeChild(e.innerContainer)
            }
        })
    }(Popcorn),
    function(e) {
        function n(e, n) {
            return String(e).replace(/&(?!\w+;)|[<>"']/g, function(e) {
                return t[e] || e
            })
        }

        function r(e) {
            return e.replace(/\r?\n/gm, "<br>")
        }

        function i(e, t) {
            var n = e.container = document.createElement("div"),
                r = n.style,
                i = e.media,
                s = function() {
                    var t = e.position();
                    r.fontSize = "18px", r.width = i.offsetWidth + "px", r.top = t.top + i.offsetHeight - n.offsetHeight - 40 + "px", r.left = t.left + "px", setTimeout(s, 10)
                };
            return n.id = t || "", r.position = "absolute", r.color = "white", r.textShadow = "black 2px 2px 6px", r.fontWeight = "bold", r.textAlign = "center", s(), e.media.parentNode.appendChild(n), n
        }
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        e.plugin("text", {
            manifest: {
                about: {
                    name: "Popcorn Text Plugin",
                    version: "0.1",
                    author: "@humphd"
                },
                options: {
                    start: {
                        elem: "input",
                        type: "number",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "number",
                        label: "End"
                    },
                    text: {
                        elem: "input",
                        type: "text",
                        label: "Text",
                        "default": "Popcorn.js"
                    },
                    escape: {
                        elem: "input",
                        type: "checkbox",
                        label: "Escape"
                    },
                    multiline: {
                        elem: "input",
                        type: "checkbox",
                        label: "Multiline"
                    }
                }
            },
            _setup: function(t) {
                var s, o, u = t._container = document.createElement("div");
                u.style.display = "none", t.target ? (s = e.dom.find(t.target), s ? ["VIDEO", "AUDIO"].indexOf(s.nodeName) > -1 && (s = i(this, t.target + "-overlay")) : s = i(this, t.target)) : this.container ? s = this.container : s = i(this), t._target = s, o = t.escape ? n(t.text) : t.text, o = t.multiline ? r(o) : o, u.innerHTML = o || "", s.appendChild(u), t.toString = function() {
                    return t.text || t._natives.manifest.options.text["default"]
                }
            },
            start: function(e, t) {
                t._container.style.display = "inline"
            },
            end: function(e, t) {
                t._container.style.display = "none"
            },
            _teardown: function(e) {
                var t = e._target;
                t && t.removeChild(e._container)
            }
        })
    }(Popcorn),
    function(e) {
        var t = 1;
        e.plugin("timeline", function(e) {
            var n = document.getElementById(e.target),
                r = document.createElement("div"),
                s, o = !0;
            return n && !n.firstChild ? (n.appendChild(s = document.createElement("div")), s.style.width = "inherit", s.style.height = "inherit", s.style.overflow = "auto") : s = n.firstChild, r.style.display = "none", r.id = "timelineDiv" + t, e.direction = e.direction || "up", e.direction.toLowerCase() === "down" && (o = !1), n && s && (o ? s.insertBefore(r, s.firstChild) : s.appendChild(r)), t++, r.innerHTML = "<p><span id='big' style='font-size:24px; line-height: 130%;' >" + e.title + "</span><br />" + "<span id='mid' style='font-size: 16px;'>" + e.text + "</span><br />" + e.innerHTML, {
                start: function(e, t) {
                    r.style.display = "block", t.direction === "down" && (s.scrollTop = s.scrollHeight)
                },
                end: function(e, t) {
                    r.style.display = "none"
                },
                _teardown: function(e) {
                    s && r && s.removeChild(r) && !s.firstChild && n.removeChild(s)
                }
            }
        }, {
            about: {
                name: "Popcorn Timeline Plugin",
                version: "0.1",
                author: "David Seifried @dcseifried",
                website: "dseifried.wordpress.com"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                target: "feed-container",
                title: {
                    elem: "input",
                    type: "text",
                    label: "Title"
                },
                text: {
                    elem: "input",
                    type: "text",
                    label: "Text"
                },
                innerHTML: {
                    elem: "input",
                    type: "text",
                    label: "HTML Code",
                    optional: !0
                },
                direction: {
                    elem: "select",
                    options: ["DOWN", "UP"],
                    label: "Direction",
                    optional: !0
                }
            }
        })
    }(Popcorn),
    function(e) {
        var t = !1;
        e.plugin("twitter", {
            manifest: {
                about: {
                    name: "Popcorn Twitter Plugin",
                    version: "0.1",
                    author: "Scott Downe",
                    website: "http://scottdowne.wordpress.com/"
                },
                options: {
                    start: {
                        elem: "input",
                        type: "number",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "number",
                        label: "End"
                    },
                    src: {
                        elem: "input",
                        type: "text",
                        label: "Tweet Source (# or @)",
                        "default": "@popcornjs"
                    },
                    target: "twitter-container",
                    height: {
                        elem: "input",
                        type: "number",
                        label: "Height",
                        "default": "200",
                        optional: !0
                    },
                    width: {
                        elem: "input",
                        type: "number",
                        label: "Width",
                        "default": "250",
                        optional: !0
                    }
                }
            },
            _setup: function(n) {
                !window.TWTR && !t && (t = !0, e.getScript("//widgets.twimg.com/j/2/widget.js"));
                var r = document.getElementById(n.target);
                n.container = document.createElement("div"), n.container.setAttribute("id", e.guid()), n.container.style.display = "none", r && r.appendChild(n.container);
                var i = n.src || "",
                    s = n.width || 250,
                    o = n.height || 200,
                    u = /^@/.test(i),
                    a = {
                        version: 2,
                        id: n.container.getAttribute("id"),
                        rpp: 30,
                        width: s,
                        height: o,
                        interval: 6e3,
                        theme: {
                            shell: {
                                background: "#ffffff",
                                color: "#000000"
                            },
                            tweets: {
                                background: "#ffffff",
                                color: "#444444",
                                links: "#1985b5"
                            }
                        },
                        features: {
                            loop: !0,
                            timestamp: !0,
                            avatars: !0,
                            hashtags: !0,
                            toptweets: !0,
                            live: !0,
                            scrollbar: !1,
                            behavior: "default"
                        }
                    },
                    f = function(e) {
                        window.TWTR ? u ? (a.type = "profile", (new TWTR.Widget(a)).render().setUser(i).start()) : (a.type = "search", a.search = i, a.subject = i, (new TWTR.Widget(a)).render().start()) : setTimeout(function() {
                            f(e)
                        }, 1)
                    };
                n.toString = function() {
                    return n.src || n._natives.manifest.options.src["default"]
                }, f(this)
            },
            start: function(e, t) {
                t.container.style.display = "inline"
            },
            end: function(e, t) {
                t.container.style.display = "none"
            },
            _teardown: function(e) {
                document.getElementById(e.target) && document.getElementById(e.target).removeChild(e.container)
            }
        })
    }(Popcorn),
    function(e) {
        e.plugin("webpage", {
            manifest: {
                about: {
                    name: "Popcorn Webpage Plugin",
                    version: "0.1",
                    author: "@annasob",
                    website: "annasob.wordpress.com"
                },
                options: {
                    id: {
                        elem: "input",
                        type: "text",
                        label: "Id",
                        optional: !0
                    },
                    start: {
                        elem: "input",
                        type: "number",
                        label: "Start"
                    },
                    end: {
                        elem: "input",
                        type: "number",
                        label: "End"
                    },
                    src: {
                        elem: "input",
                        type: "url",
                        label: "Webpage URL",
                        "default": "http://mozillapopcorn.org"
                    },
                    target: "iframe-container"
                }
            },
            _setup: function(e) {
                var t = document.getElementById(e.target);
                e.src = e.src.replace(/^(https?:)?(\/\/)?/, "//"), e._iframe = document.createElement("iframe"), e._iframe.setAttribute("width", "100%"), e._iframe.setAttribute("height", "100%"), e._iframe.id = e.id, e._iframe.src = e.src, e._iframe.style.display = "none", t && t.appendChild(e._iframe)
            },
            start: function(e, t) {
                t._iframe.src = t.src, t._iframe.style.display = "inline"
            },
            end: function(e, t) {
                t._iframe.style.display = "none"
            },
            _teardown: function(e) {
                document.getElementById(e.target) && document.getElementById(e.target).removeChild(e._iframe)
            }
        })
    }(Popcorn);
var wikiCallback;
(function(e) {
    e.plugin("wikipedia", {
        manifest: {
            about: {
                name: "Popcorn Wikipedia Plugin",
                version: "0.1",
                author: "@annasob",
                website: "annasob.wordpress.com"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                lang: {
                    elem: "input",
                    type: "text",
                    label: "Language",
                    "default": "english",
                    optional: !0
                },
                src: {
                    elem: "input",
                    type: "url",
                    label: "Wikipedia URL",
                    "default": "http://en.wikipedia.org/wiki/Cat"
                },
                title: {
                    elem: "input",
                    type: "text",
                    label: "Title",
                    "default": "Cats",
                    optional: !0
                },
                numberofwords: {
                    elem: "input",
                    type: "number",
                    label: "Number of Words",
                    "default": "200",
                    optional: !0
                },
                target: "wikipedia-container"
            }
        },
        _setup: function(t) {
            var n, r = e.guid();
            t.lang || (t.lang = "en"), t.numberofwords = t.numberofwords || 200, window["wikiCallback" + r] = function(e) {
                t._link = document.createElement("a"), t._link.setAttribute("href", t.src), t._link.setAttribute("target", "_blank"), t._link.innerHTML = t.title || e.parse.displaytitle, t._desc = document.createElement("p"), n = e.parse.text["*"].substr(e.parse.text["*"].indexOf("<p>")), n = n.replace(/((<(.|\n)+?>)|(\((.*?)\) )|(\[(.*?)\]))/g, ""), n = n.split(" "), t._desc.innerHTML = n.slice(0, n.length >= t.numberofwords ? t.numberofwords : n.length).join(" ") + " ...", t._fired = !0
            }, t.src && e.getScript("//" + t.lang + ".wikipedia.org/w/api.php?action=parse&props=text&redirects&page=" + t.src.slice(t.src.lastIndexOf("/") + 1) + "&format=json&callback=wikiCallback" + r), t.toString = function() {
                return t.src || t._natives.manifest.options.src["default"]
            }
        },
        start: function(e, t) {
            var n = function() {
                t._fired ? t._link && t._desc && document.getElementById(t.target) && (document.getElementById(t.target).appendChild(t._link), document.getElementById(t.target).appendChild(t._desc), t._added = !0) : setTimeout(function() {
                    n()
                }, 13)
            };
            n()
        },
        end: function(e, t) {
            t._added && (document.getElementById(t.target).removeChild(t._link), document.getElementById(t.target).removeChild(t._desc))
        },
        _teardown: function(e) {
            e._added && (e._link.parentNode && document.getElementById(e.target).removeChild(e._link), e._desc.parentNode && document.getElementById(e.target).removeChild(e._desc), delete e.target)
        }
    })
})(Popcorn),
function(e) {
    var t = {},
        n = 0,
        r = function(e) {
            t[e] = document.createElement("div");
            var n = document.getElementById(e);
            return n && n.appendChild(t[e]), t[e].style.height = "100%", t[e].style.position = "relative", t[e]
        },
        i = document.createElement("span"),
        s = ["webkit", "Moz", "ms", "O", ""],
        o = ["Transform", "TransitionDuration", "TransitionTimingFunction"],
        u = {},
        a;
    document.getElementsByTagName("head")[0].appendChild(i);
    for (var f = 0, l = o.length; f < l; f++)
        for (var c = 0, h = s.length; c < h; c++) {
            a = s[c] + o[f];
            if (a in i.style) {
                u[o[f].toLowerCase()] = a;
                break
            }
        }
    document.getElementsByTagName("head")[0].appendChild(i), e.plugin("wordriver", {
        manifest: {
            about: {
                name: "Popcorn WordRiver Plugin"
            },
            options: {
                start: {
                    elem: "input",
                    type: "number",
                    label: "Start"
                },
                end: {
                    elem: "input",
                    type: "number",
                    label: "End"
                },
                target: "wordriver-container",
                text: {
                    elem: "input",
                    type: "text",
                    label: "Text",
                    "default": "Popcorn.js"
                },
                color: {
                    elem: "input",
                    type: "text",
                    label: "Color",
                    "default": "Green",
                    optional: !0
                }
            }
        },
        _setup: function(e) {
            e._duration = e.end - e.start, e._container = t[e.target] || r(e.target), e.word = document.createElement("span"), e.word.style.position = "absolute", e.word.style.whiteSpace = "nowrap", e.word.style.opacity = 0, e.word.style.MozTransitionProperty = "opacity, -moz-transform", e.word.style.webkitTransitionProperty = "opacity, -webkit-transform", e.word.style.OTransitionProperty = "opacity, -o-transform", e.word.style.transitionProperty = "opacity, transform", e.word.style[u.transitionduration] = "1s, " + e._duration + "s", e.word.style[u.transitiontimingfunction] = "linear", e.word.innerHTML = e.text, e.word.style.color = e.color || "black"
        },
        start: function(e, t) {
            t._container.appendChild(t.word), t.word.style[u.transform] = "", t.word.style.fontSize = ~~(30 + 20 * Math.random()) + "px", n %= t._container.offsetWidth - t.word.offsetWidth, t.word.style.left = n + "px", n += t.word.offsetWidth + 10, t.word.style[u.transform] = "translateY(" + (t._container.offsetHeight - t.word.offsetHeight) + "px)", t.word.style.opacity = 1, setTimeout(function() {
                t.word.style.opacity = 0
            }, (t.end - t.start - 1 || 1) * 1e3)
        },
        end: function(e, t) {
            t.word.style.opacity = 0
        },
        _teardown: function(e) {
            var n = document.getElementById(e.target);
            e.word.parentNode && e._container.removeChild(e.word), t[e.target] && !t[e.target].childElementCount && n && n.removeChild(t[e.target]) && delete t[e.target]
        }
    })
}(Popcorn),
function(e) {
    e.parser("parseJSON", "JSON", function(t) {
        var n = {
                title: "",
                remote: "",
                data: []
            },
            r = {},
            i = t;
        return e.forEach(i.data, function(e, t) {
            n.data.push(e)
        }), n
    })
}(Popcorn),
function(e) {
    e.parser("parseSBV", function(e) {
        var t = {
                title: "",
                remote: "",
                data: []
            },
            n = [],
            r, i = 0,
            s = 0,
            o = 0,
            u = function(e) {
                var t = e.split(":"),
                    n = t.length - 1,
                    r;
                try {
                    r = parseInt(t[n - 1], 10) * 60 + parseFloat(t[n], 10), n === 2 && (r += parseInt(t[0], 10) * 3600)
                } catch (i) {
                    throw "Bad cue"
                }
                return r
            },
            a = function(e, t) {
                var n = {};
                return n[e] = t, n
            };
        r = e.text.split(/(?:\r\n|\r|\n)/gm), s = r.length;
        while (i < s) {
            var f = {},
                l = [],
                c = r[i++].split(",");
            try {
                f.start = u(c[0]), f.end = u(c[1]);
                while (i < s && r[i]) l.push(r[i++]);
                f.text = l.join("<br />"), n.push(a("subtitle", f))
            } catch (h) {
                while (i < s && r[i]) i++
            }
            while (i < s && !r[i]) i++
        }
        return t.data = n, t
    })
}(Popcorn),
function(e) {
    function t(e, t) {
        var n = {};
        return n[e] = t, n
    }

    function n(e) {
        var t = e.split(":");
        try {
            var n = t[2].split(",");
            return n.length === 1 && (n = t[2].split(".")), parseFloat(t[0], 10) * 3600 + parseFloat(t[1], 10) * 60 + parseFloat(n[0], 10) + parseFloat(n[1], 10) / 1e3
        } catch (r) {
            return 0
        }
    }

    function r(e) {
        var t = e.length - 1;
        while (t >= 0 && !e[t]) t--;
        return t
    }
    e.parser("parseSRT", function(e) {
        var i = {
                title: "",
                remote: "",
                data: []
            },
            s = [],
            o = 0,
            u = 0,
            a, f, l, c, h;
        a = e.text.split(/(?:\r\n|\r|\n)/gm), c = r(a) + 1;
        for (o = 0; o < c; o++) {
            h = {}, l = [], h.id = parseInt(a[o++], 10), f = a[o++].split(/[\t ]*-->[\t ]*/), h.start = n(f[0]), u = f[1].indexOf(" "), u !== -1 && (f[1] = f[1].substr(0, u)), h.end = n(f[1]);
            while (o < c && a[o]) l.push(a[o++]);
            h.text = l.join("\\N").replace(/\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi, ""), h.text = h.text.replace(/</g, "&lt;").replace(/>/g, "&gt;"), h.text = h.text.replace(/&lt;(\/?(font|b|u|i|s))((\s+(\w|\w[\w\-]*\w)(\s*=\s*(?:\".*?\"|'.*?'|[^'\">\s]+))?)+\s*|\s*)(\/?)&gt;/gi, "<$1$3$7>"), h.text = h.text.replace(/\\N/gi, "<br />"), s.push(t("subtitle", h))
        }
        return i.data = s, i
    })
}(Popcorn),
function(e) {
    function t(e, t) {
        var i = e.substr(10).split(","),
            s = /\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi,
            o = /\\N/gi,
            u;
        u = {
            start: n(i[t.start]),
            end: n(i[t.end])
        };
        if (u.start === -1 || u.end === -1) throw "Invalid time";
        return u.text = r(i, t.text).replace(s, "").replace(o, "<br />"), u
    }

    function n(e) {
        var t = e.split(":");
        return e.length !== 10 || t.length < 3 ? -1 : parseInt(t[0], 10) * 3600 + parseInt(t[1], 10) * 60 + parseFloat(t[2], 10)
    }

    function r(e, t) {
        var n = e.length,
            r = [],
            i = t;
        for (; i < n; i++) r.push(e[i]);
        return r.join(",")
    }

    function i(e, t) {
        var n = {};
        return n[e] = t, n
    }

    function s(e) {
        var t = e.substr(8).split(", "),
            n = {},
            r, i;
        for (i = 0, r = t.length; i < r; i++) t[i] === "Start" ? n.start = i : t[i] === "End" ? n.end = i : t[i] === "Text" && (n.text = i);
        return n
    }
    e.parser("parseSSA", function(e) {
        var n = {
                title: "",
                remote: "",
                data: []
            },
            r = /(?:\r\n|\r|\n)/gm,
            o = [],
            u, a, f = 0,
            l;
        u = e.text.split(r), l = u.length;
        while (f < l && u[f] !== "[Events]") f++;
        a = s(u[++f]);
        while (++f < l && u[f] && u[f][0] !== "[") try {
            o.push(i("subtitle", t(u[f], a)))
        } catch (c) {}
        return n.data = o, n
    })
}(Popcorn),
function(e) {
    function r(e, t, n) {
        var u = e.firstChild,
            a = i(e, n),
            f = [],
            l;
        while (u) u.nodeType === 1 && (u.nodeName === "p" ? f.push(s(u, t, a)) : u.nodeName === "div" && (l = o(u.getAttribute("begin")), l < 0 && (l = t), f.push.apply(f, r(u, l, a)))), u = u.nextSibling;
        return f
    }

    function i(e, t) {
        var n = e.getAttribute("region");
        return n !== null ? n : t || ""
    }

    function s(e, r, s) {
        var u = {};
        return u.text = (e.textContent || e.text).replace(t, "").replace(n, "<br />"), u.id = e.getAttribute("xml:id") || e.getAttribute("id"), u.start = o(e.getAttribute("begin"), r), u.end = o(e.getAttribute("end"), r), u.target = i(e, s), u.end < 0 && (u.end = o(e.getAttribute("duration"), 0), u.end >= 0 ? u.end += u.start : u.end = Number.MAX_VALUE), {
            subtitle: u
        }
    }

    function o(t, n) {
        var r;
        if (!t) return -1;
        try {
            return e.util.toSeconds(t)
        } catch (i) {
            return r = u(t), parseFloat(t.substring(0, r)) * a(t.substring(r)) + (n || 0)
        }
    }

    function u(e) {
        var t = e.length - 1;
        while (t >= 0 && e[t] <= "9" && e[t] >= "0") t--;
        return t
    }

    function a(e) {
        return {
            h: 3600,
            m: 60,
            s: 1,
            ms: .001
        }[e] || -1
    }
    var t = /^[\s]+|[\s]+$/gm,
        n = /(?:\r\n|\r|\n)/gm;
    e.parser("parseTTML", function(e) {
        var t = {
                title: "",
                remote: "",
                data: []
            },
            n;
        if (!e.xml || !e.xml.documentElement) return t;
        n = e.xml.documentElement.firstChild;
        if (!n) return t;
        while (n.nodeName !== "body") n = n.nextSibling;
        return n && (t.data = r(n, 0)), t
    })
}(Popcorn),
function(e) {
    e.parser("parseTTXT", function(e) {
        var t = {
                title: "",
                remote: "",
                data: []
            },
            n = function(e) {
                var t = e.split(":"),
                    n = 0;
                try {
                    return parseFloat(t[0], 10) * 60 * 60 + parseFloat(t[1], 10) * 60 + parseFloat(t[2], 10)
                } catch (r) {
                    n = 0
                }
                return n
            },
            r = function(e, t) {
                var n = {};
                return n[e] = t, n
            },
            i = e.xml.lastChild.lastChild,
            s = Number.MAX_VALUE,
            o = [];
        while (i) {
            if (i.nodeType === 1 && i.nodeName === "TextSample") {
                var u = {};
                u.start = n(i.getAttribute("sampleTime")), u.text = i.getAttribute("text"), u.text && (u.end = s - .001, o.push(r("subtitle", u))), s = u.start
            }
            i = i.previousSibling
        }
        return t.data = o.reverse(), t
    })
}(Popcorn),
function(e) {
    function t(e) {
        var t = e.split(":"),
            n = e.length,
            r;
        if (n !== 12 && n !== 9) throw "Bad cue";
        n = t.length - 1;
        try {
            r = parseInt(t[n - 1], 10) * 60 + parseFloat(t[n], 10), n === 2 && (r += parseInt(t[0], 10) * 3600)
        } catch (i) {
            throw "Bad cue"
        }
        return r
    }

    function n(e, t) {
        var n = {};
        return n[e] = t, n
    }

    function r(e) {
        var n, r, i = {},
            s = /-->/,
            o = /[\t ]+/;
        if (!e || e.indexOf("-->") === -1) throw "Bad cue";
        n = e.replace(s, " --> ").split(o);
        if (n.length < 2) throw "Bad cue";
        return i.id = e, i.start = t(n[0]), i.end = t(n[2]), i
    }

    function i(e, t, n) {
        while (n < t && !e[n]) n++;
        return n
    }

    function s(e, t, n) {
        while (n < t && e[n]) n++;
        return n
    }
    e.parser("parseVTT", function(e) {
        var t = {
                title: "",
                remote: "",
                data: []
            },
            o = [],
            u = 0,
            a = 0,
            f, l, c, h = /(?:\r\n|\r|\n)/gm;
        f = e.text.split(h), a = f.length;
        if (a === 0 || f[0] !== "WEBVTT") return t;
        u++;
        while (u < a) {
            l = [];
            try {
                u = i(f, a, u), c = r(f[u++]);
                while (u < a && f[u]) l.push(f[u++]);
                c.text = l.join("<br />"), o.push(n("subtitle", c))
            } catch (p) {
                u = s(f, a, u)
            }
        }
        return t.data = o, t
    })
}(Popcorn),
function(e) {
    e.parser("parseXML", "XML", function(t) {
        var n = {
                title: "",
                remote: "",
                data: []
            },
            r = {},
            i = function(e) {
                var t = e.split(":");
                if (t.length === 1) return parseFloat(t[0], 10);
                if (t.length === 2) return parseFloat(t[0], 10) + parseFloat(t[1] / 12, 10);
                if (t.length === 3) return parseInt(t[0] * 60, 10) + parseFloat(t[1], 10) + parseFloat(t[2] / 12, 10);
                if (t.length === 4) return parseInt(t[0] * 3600, 10) + parseInt(t[1] * 60, 10) + parseFloat(t[2], 10) + parseFloat(t[3] / 12, 10)
            },
            s = function(e) {
                var t = {};
                for (var n = 0, s = e.length; n < s; n++) {
                    var o = e.item(n).nodeName,
                        u = e.item(n).nodeValue,
                        a = r[u];
                    if (o === "in") t.start = i(u);
                    else if (o === "out") t.end = i(u);
                    else if (o === "resourceid")
                        for (var f in a) a.hasOwnProperty(f) && !t[f] && f !== "id" && (t[f] = a[f]);
                    else t[o] = u
                }
                return t
            },
            o = function(e, t) {
                var n = {};
                return n[e] = t, n
            },
            u = function(t, i, a) {
                var f = {};
                e.extend(f, i, s(t.attributes), {
                    text: t.textContent || t.text
                });
                var l = t.childNodes;
                if (l.length < 1 || l.length === 1 && l[0].nodeType === 3) a ? r[f.id] = f : n.data.push(o(t.nodeName, f));
                else
                    for (var c = 0; c < l.length; c++) l[c].nodeType === 1 && u(l[c], f, a)
            },
            a = t.documentElement.childNodes;
        for (var f = 0, l = a.length; f < l; f++) a[f].nodeType === 1 && (a[f].nodeName === "manifest" ? u(a[f], {}, !0) : u(a[f], {}, !1));
        return n
    })
}(Popcorn),
function(e, t) {
    t.player("soundcloud", {
        _canPlayType: function(e, n) {
            return typeof n == "string" && t.HTMLSoundCloudAudioElement._canPlaySrc(n) && e.toLowerCase() !== "audio"
        }
    }), t.soundcloud = function(e, n, r) {
        typeof console != "undefined" && console.warn && console.warn("Deprecated player 'soundcloud'. Please use Popcorn.HTMLSoundCloudAudioElement directly.");
        var i = t.HTMLSoundCloudAudioElement(e),
            s = t(i, r);
        return setTimeout(function() {
            i.src = n
        }, 0), s
    }
}(window, Popcorn),
function(e, t) {
    t.player("vimeo", {
        _canPlayType: function(e, n) {
            return typeof n == "string" && t.HTMLVimeoVideoElement._canPlaySrc(n)
        }
    }), t.vimeo = function(e, n, r) {
        typeof console != "undefined" && console.warn && console.warn("Deprecated player 'vimeo'. Please use Popcorn.HTMLVimeoVideoElement directly.");
        var i = t.HTMLVimeoVideoElement(e),
            s = t(i, r);
        return setTimeout(function() {
            i.src = n
        }, 0), s
    }
}(window, Popcorn),
function(e, t) {
    var n = function(e, n) {
        return typeof n == "string" && t.HTMLYouTubeVideoElement._canPlaySrc(n)
    };
    t.player("youtube", {
        _canPlayType: n
    }), t.youtube = function(e, n, r) {
        typeof console != "undefined" && console.warn && console.warn("Deprecated player 'youtube'. Please use Popcorn.HTMLYouTubeVideoElement directly.");
        var i = t.HTMLYouTubeVideoElement(e),
            s = t(i, r);
        return setTimeout(function() {
            i.src = n
        }, 0), s
    }, t.youtube.canPlayType = n
}(window, Popcorn),
function(e) {
    var t = function(t, n) {
        var r = 0,
            i = 0,
            s;
        e.forEach(n.classes, function(e, t) {
            s = [], e === "parent" ? s[0] = document.querySelectorAll("#" + n.target)[0].parentNode : s = document.querySelectorAll("#" + n.target + " " + e);
            for (r = 0, i = s.length; r < i; r++) s[r].classList.toggle(t)
        })
    };
    e.compose("applyclass", {
        manifest: {
            about: {
                name: "Popcorn applyclass Effect",
                version: "0.1",
                author: "@scottdowne",
                website: "scottdowne.wordpress.com"
            },
            options: {}
        },
        _setup: function(e) {
            e.classes = {}, e.applyclass = e.applyclass || "";
            var t = e.applyclass.replace(/\s/g, "").split(","),
                n = [],
                r = 0,
                i = t.length;
            for (; r < i; r++) n = t[r].split(":"), n[0] && (e.classes[n[0]] = n[1] || "")
        },
        start: t,
        end: t
    })
}(Popcorn),
function() {
    var e = 0,
        t = ["ms", "moz", "webkit", "o"];
    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
        var r = (new Date).getTime(),
            i = Math.max(0, 16 - (r - e)),
            s = window.setTimeout(function() {
                t(r + i)
            }, i);
        return e = r + i, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(), jade = function(e) {
    function t(e) {
        return e != null
    }
    return Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }), Object.keys || (Object.keys = function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t
    }), e.merge = function(n, r) {
        var i = n["class"],
            s = r["class"];
        if (i || s) i = i || [], s = s || [], Array.isArray(i) || (i = [i]), Array.isArray(s) || (s = [s]), i = i.filter(t), s = s.filter(t), n["class"] = i.concat(s).join(" ");
        for (var o in r) o != "class" && (n[o] = r[o]);
        return n
    }, e.attrs = function(n, r) {
        var i = [],
            s = n.terse;
        delete n.terse;
        var o = Object.keys(n),
            u = o.length;
        if (u) {
            i.push("");
            for (var a = 0; a < u; ++a) {
                var f = o[a],
                    l = n[f];
                "boolean" == typeof l || null == l ? l && (s ? i.push(f) : i.push(f + '="' + f + '"')) : 0 == f.indexOf("data") && "string" != typeof l ? i.push(f + "='" + JSON.stringify(l) + "'") : "class" == f && Array.isArray(l) ? i.push(f + '="' + e.escape(l.join(" ")) + '"') : r && r[f] ? i.push(f + '="' + e.escape(l) + '"') : i.push(f + '="' + l + '"')
            }
        }
        return i.join(" ")
    }, e.escape = function(t) {
        return String(t).replace(/&(?!(\w+|\#\d+);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }, e.rethrow = function(t, n, r) {
        if (!n) throw t;
        var i = 3,
            s = require("fs").readFileSync(n, "utf8"),
            o = s.split("\n"),
            u = Math.max(r - i, 0),
            a = Math.min(o.length, r + i),
            i = o.slice(u, a).map(function(e, t) {
                var n = t + u + 1;
                return (n == r ? "  > " : "    ") + n + "| " + e
            }).join("\n");
        throw t.path = n, t.message = (n || "Jade") + ":" + r + "\n" + i + "\n\n" + t.message, t
    }, e
}({})
