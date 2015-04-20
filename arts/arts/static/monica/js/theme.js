(function() {
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
})(), window.require.define({
    "scripts/artist-preview": function(e, t, n) {
        var r, i, s, o, u, a, f;
        s = $(document.documentElement);
        if (!s.hasClass("page-artists") || !!s.hasClass("page-artist")) return;
        if (touch) return;
        i = $("#content"), r = i.find(".artists"), o = $('<div class="preview-box"><img></div>'), u = o.find("img"), i.append(o), a = !1, f = function(e) {
            return e ? (u.attr("src", e), clearTimeout(a), a = setTimeout(function() {
                return u.show()
            }, 250)) : (clearTimeout(a), a = !1, u.hide())
        }, u.on("load", function() {
            return $(this).show()
        }), r.on("mouseenter", ".artist", function(e) {
            var t, n;
            return t = $(e.currentTarget), n = t.data("thumbnail"), f(n)
        }), r.on("mouseleave", ".artist", function() {
            return f(!1)
        })
    }
}), window.require.define({
    "scripts/image-gallery": function(e, t, n) {
        var r, i, s;
        s = t("utils"), i = t("settings"), r = function(e) {
            var n, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
            f = e.closest("section"), l = e.children(".wrapper");
            if (!e.is(":visible")) return e.closest("section").one("show", function() {
                return r(e)
            });
            f.on("show", function() {
                return b()
            }), f.on("hide", function() {
                return v()
            }), a = e.find(".item");
            if (!a.length) return;
            return c = new Carousel(l), c.init(), f = e.closest("section"), n = $(e.data("caption-to")), o = e.find(".container"), p = a.length, d = 0, m = function() {
                return c.resize(), a.fitc()
            }, g = function(e) {
                return e = s.math.clamp(0, e, p - 1), c.showPane(e)
            }, b = function() {
                return g(0)
            }, v = function() {
                return y(!1)
            }, y = function(e) {
                if (n.length) return n.html(e ? e.html() : "")
            }, $(c).on("pane", function(t, n) {
                var r;
                return r = $(a.get(n)), y(r.find(".caption")), d = n, e.find(".control.prev").toggleClass("hidden", n === 0), e.find(".control.next").toggleClass("hidden", n === p - 1)
            }), $(c).on("click", function(t, n) {
                if (Modernizr.touch) return;
                return e.addClass("hidden"), _.delay(function() {
                    return e.toggleClass("full-screen"), _.defer(function() {
                        return m()
                    })
                }, i.gallery.fade), _.delay(function() {
                    return e.removeClass("hidden")
                }, i.gallery.fade * 2)
            }), u = $(t("templates/image-gallery")()), a.length !== 1 && u.appendTo(e), h = {
                prev: function() {
                    return g(d - 1)
                },
                next: function() {
                    return g(d + 1)
                }
            }, e.on("click", ".control", function(e) {
                var t, n;
                return t = $(e.currentTarget), n = t.data("dir"), h[n]()
            }), e.data("image-gallery", h), $(window).on("resize", _.throttle(m, 50)), b(), m()
        }, _.defer(function() {
            return $("[data-gallery]").each(function() {
                return r($(this))
            })
        })
    }
}), window.require.define({
    "scripts/index": function(e, t, n) {
        t("./video-player"), t("./image-gallery"), t("./slideshow"), t("./tabs"), t("./main-navigation"), t("./nearbar"), t("./artist-preview")
    }
}), window.require.define({
    "scripts/main-navigation": function(e, t, n) {
        var r, i, s, o;
        r = $("nav#section select"), i = function(e) {
            return e === "browsing" ? "display" : "browsing"
        }, s = function(e, t, n) {
            return t && n ? e.replace(t, n) : e
        }, o = function(e) {
            var t;
            return r.data("state", e), t = r.find("option"), _.each(t, function(t) {
                var n, r, o;
                return n = $(t), o = new RegExp(n.data(i(e)), "g"), r = $(t).data(e), n.text(s(n.text(), o, r))
            })
        }, r.on("mousedown", function(e) {
            return o("browsing")
        }), r.on("change", function(e) {
            var t;
            return o("display"), (t = r.val()) ? location.href = t : !1
        }), r.on("blur", function(e) {
            return o("display")
        }), o("display")
    }
}), window.require.define({
    "scripts/nearbar": function(e, t, n) {
        var r, i, s, o, u;
        s = t("settings"), o = $("#sidebar"), u = $("#side-navi"), r = s.sidenav.margin, i = function() {
            if (!u.html()) return;
            if (u.css("position") !== "fixed") return;
            return u.css({
                top: o.offset().top + o.height() + r
            })
        }, $(window).on("resize", function() {
            return i()
        }), $(function() {
            return _.delay(i, 35)
        })
    }
}), window.require.define({
    "scripts/slideshow": function(e, t, n) {
        var r;
        r = t("settings").slideshow, $("[data-slideshow]").each(function() {
            var e, t, n;
            if (!(e = $(this)).is(":visible")) return;
            return t = _.map(e.find("img"), function(e) {
                return $(e).data("src")
            }), n = e.data("slideshow"), r = r[n] || r["default"], e.backstretch(t, r)
        })
    }
}), window.require.define({
    "scripts/tabs": function(e, t, n) {
        var r, i;
        r = function(e) {
            return $(e.attr("href"))
        }, i = function(e) {
            var t, n;
            return n = location.hash, t = e.find('[href^="#"]'), t.each(function() {
                return r($(this)).hide()
            }), location.hash ? $(window).trigger("hashchange") : location.hash = t.first().attr("href") || ""
        }, $(window).on({
            hashchange: function(e) {
                var t, n, i, s, o;
                return i = $("[href='" + location.hash + "']"), o = r(i), s = i.closest("[data-tabs]"), t = s.find(".active"), n = r(t), i.get(0) === t.get(0) ? !1 : (t.removeClass("active"), n.hide().trigger("hide"), i.addClass("active"), o.show().trigger("show"), $("body, html").scrollTop(0), !1)
            }
        }), $.fn.tabs = function() {
            return $(this).each(function() {
                if (!$(this).data("tabs")) return i($(this))
            })
        }, $("[data-tabs]").tabs()
    }
}), window.require.define({
    "scripts/video-player": function(e, t, n) {
        $("[data-video]").each(function() {
            var e, t, n;
            return e = $(this), t = e.attr("id"), n = e.data("src"), Popcorn.smart("#" + t, n)
        })
    }
}), window.require.define({
    settings: function(e, t, n) {
        var r;
        settings.assets = {
            images: "" + settings.staticUrl + "/images"
        }, settings.slideshow = {
            "default": {
                duration: 3e3,
                fade: 1e3
            },
            contact: {
                duration: 2e3,
                fade: 1e3
            }
        }, settings.sidenav = {
            margin: 0
        }, settings.gallery = {
            fade: 200
        };
        try {
            _.extend(settings, t("./local_settings"))
        } catch (i) {
            r = i, !1
        }
        n.exports = settings
    }
}), window.require.define({
    "templates/image-gallery": function(exports, require, module) {
        module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
            attrs = attrs || jade.attrs, escape = escape || jade.escape, rethrow = rethrow || jade.rethrow, merge = merge || jade.merge;
            var buf = [];
            with(locals || {}) {
                var interp;
                buf.push('<button data-dir="prev" class="control prev"></button><button data-dir="next" class="control next"></button>')
            }
            return buf.join("")
        }
    }
}), window.require.define({
    "utils/events": function(e, t, n) {
        var r, i = [].slice;
        r = {
            wrap: function(e, t, n) {
                var r;
                return n == null && (n = t), r = e[t], e[t] = function() {
                    var t, s;
                    return t = 1 <= arguments.length ? i.call(arguments, 0) : [], this.trigger.apply(this, ["" + n + ":before"].concat(i.call(t))), s = r.apply(e, t), this.trigger.apply(this, ["" + n].concat(i.call(t))), s
                }
            },
            delegate: function(e, t, n) {
                var r, i, s, o;
                s = e[t], o = [];
                for (r in s) i = s[r], o.push(this.listenTo(n, r, e[i]));
                return o
            },
            undelegate: function(e, t, n) {
                var r, i, s, o;
                s = e[t], o = [];
                for (r in s) i = s[r], o.push(this.stopListening(n, r, e[i]));
                return o
            },
            bind: function(e, t, n) {
                var r, i, s, o;
                s = e[t], o = [];
                for (r in s) i = s[r], o.push(n.on(r, e[i], e));
                return o
            },
            unbind: function(e, t, n) {
                var r, i, s, o;
                s = e[t], o = [];
                for (r in s) i = s[r], o.push(n.off(r, e[i], e));
                return o
            }
        }, n.exports = r
    }
}), window.require.define({
    "utils/images": function(e, t, n) {
        var r, i;
        i = /\.(gif|jpg|jpeg|png)$/i, r = {
            isImage: function(e) {
                return i.test(e)
            },
            preload: function(e, t, n) {
                var r;
                return r = new Image, r.onload = function() {
                    return t.call(n, r, e)
                }, r.onerror = r.onabort = function() {
                    return t.call(n, !1, e)
                }, r.src = e
            }
        }, n.exports = r
    }
}), window.require.define({
    "utils/index": function(e, t, n) {
        n.exports = {
            math: t("./math"),
            time: t("./time"),
            events: t("./events"),
            objects: t("./objects"),
            images: t("./images"),
            strings: t("./strings"),
            templates: t("./templates")
        }
    }
}), window.require.define({
    "utils/math": function(e, t, n) {
        var r;
        r = {
            clamp: function(e, t, n) {
                return Math.max(e, Math.min(t, n))
            },
            random: function(e, t) {
                return Math.round(Math.random() * (t - e) + e)
            }
        }, n.exports = r
    }
}), window.require.define({
    "utils/objects": function(e, t, n) {
        var r;
        r = {
            clean: function(e) {
                var t, n, r;
                n = {};
                for (t in e) r = e[t], r && (n[t] = r);
                return n
            },
            pickOptions: function(e, t, n) {
                return t == null && (t = {}), n == null && (n = []), _.extend(e, r.clean(_.pick(t, n)))
            }
        }, n.exports = r
    }
}), window.require.define({
    "utils/strings": function(e, t, n) {
        var r;
        r = {
            capitalize: function(e) {
                return "" + e.charAt(0).toUpperCase() + e.slice(1)
            }
        }, n.exports = r
    }
}), window.require.define({
    "utils/templates": function(e, t, n) {
        n.exports = {}
    }
}), window.require.define({
    "utils/time": function(e, t, n) {
        var r, i;
        i = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?\b/, r = {
            parseCue: function(e) {
                var t, n, r, s, o;
                return ((o = s = i.exec(e)) != null ? o.length : void 0) ? (t = (parseInt(s[1], 10) || 0) * 3600, n = (parseInt(s[2], 10) || 0) * 60, r = (parseInt(s[3], 10) || 0) * 1, t + n + r) : 0
            },
            toCue: function(e) {
                var t, n, r;
                t = "";
                if (n = e % 3600) e -= n * 3600, t += "" + n + "h";
                if (r = e % 60) e -= r * 60, t += "" + r + "m";
                return t += "" + e + "s"
            }
        }, n.exports = r
    }
})
