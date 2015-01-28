
function getTime() {
    var t = new Date,
        e = t.getHours(),
        i;
    i = e > 4 && 12 > e ? "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good morning!</h2>" : e > 12 && 18 > e ? "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good afternoon!</h2>" : "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good evening!</h2>", $("#about-photo").after(i)
}

function position_h_center(t) {
    var e = $("#" + t).parent().outerWidth(),
        i = $("#" + t).width();
    $("#" + t).css("left", (e - i) / 2 + "px")
}

function animate_scroll_button() {
    $("#scroll_down").animate({
        bottom: "30px"
    }, 1e3, function() {
        $("#scroll_down").animate({
            bottom: "7px"
        }, {
            duration: 2e3,
            easing: "easeOutBounce"
        })
    })
}

function hide_menu() {
    $("#navbar").hasClass("display_nav") && ($("#navbar").removeClass("display_nav"), $("#navbar").addClass("hidden_nav"), $("#navbar").css({
        opacity: "0"
    }))
}

function show_menu() {
    $("#navbar").hasClass("hidden_nav") && ($("#navbar").removeClass("hidden_nav"), $("#navbar").delay(140).queue(function() {
        $(this).css({
            opacity: "1"
        }), $("#navbar").addClass("display_nav"), $(this).dequeue()
    }))
}

function updateVisual() {
    $("#message-con-0").attr("maxlength", Math.round($("#message-con-0").width() / wordGap)), $("#message-con-1").attr("maxlength", Math.round($("#message-con-1").width() / wordGap)), $("#message-con-2").attr("maxlength", Math.round($("#message-con-2").width() / wordGap)), $("#message-con-3").attr("maxlength", Math.round($("#message-con-3").width() / wordGap)), $("#message-con-4").attr("maxlength", Math.round($("#message-con-4").width() / wordGap)), $("#footer").css("height", window.innerHeight - $("#navbar").height()), $("#icon-wrapper").css("width", $("#about-me").width()), $(".logo").css("margin-bottom", "-30px"), $("#nameTag").css("font-size", "69px"), $("#typer").css("font-size", "22px"), $(".demo-3").css("margin-top", "none"), $(".box").css("margin", "2px"), window.innerHeight > 800 ? ($("#personal-bio").css("font-size", "18px"), $(".name-container").css({
        width: "566px",
        height: "457px",
        top: .21 * window.innerHeight
    }), $("p.letter-writing").css({
        fontSize: "17px",
        marginTop: "21%"
    }), $(".image").css("height", "90%")) : ($("#personal-bio").css("font-size", "16px"), $(".name-container").css({
        width: "566px",
        height: "457px",
        top: .11 * window.innerHeight
    }), $("p.letter-writing").css({
        fontSize: "15px",
        marginTop: "11%"
    }), $(".image").css("height", "120%"))
}
var previousId = "",
    tie = {},
    wordGap = 11;
$(document).ready(function() {
        $("html, body").css({
            overflow: "hidden",
            height: "100%"
        }), getTime();
        var t = document.getElementById("signature");
        t.display, t.onloadedmetadata = function() {
            $("#signature").css("visibility", "visible"), $("#container").delay(6200).queue(function() {
                $(this).fadeOut(1e3, function() {
                    $("html, body").css({
                        overflow: "visible",
                        height: "auto"
                    }), $("#loading").fadeOut(650)
                }), $(this).dequeue()
            })
        }, typerColor = "rgba(241,194,214,0.6)";
        var e = $(window).height() - $(".container").height();
        setTimeout(function() {
            $("[data-typer-targets]").typer(), $.typer.options.typerInterval = 3e3
        }, 2e3), position_h_center("scroll_down"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(".filter").hide(), $("#about_wrapper img#pajo").show()) : $(window).width() > 998 && setTimeout(function() {
            setInterval("animate_scroll_button()", 3e3)
        }, 0), $("input").keyup(function() {
            $(this).val().length == $(this).attr("maxlength") && $(this).next().focus()
        }), $("#submit").on("click", function() {
            $.notify.addStyle("postage", {
                html: "<div>&#10527;<span data-notify-text/>&#10528;</div>",
                classes: {
                    base: {
                        "white-space": "nowrap",
                        "background-color": "rgba(255,255,255,0.9)",
                        padding: "35px",
                        "margin-right": "10px"
                    },
                    postage: {
                        color: "black",
                        "background-color": "white"
                    }
                }
            }), $(".navbar-collapse").delay(500).queue(function() {
                $(this).notify("Let's keep in touch!", {
                    style: "postage",
                    elementPosition: "bottom centre",
                    showDuration: 450,
                    hideDuration: 200,
                    autoHideDelay: 2400,
                    arrowShow: !1,
                    showAnimation: "slideDown",
                    hideAnimation: "slideUp",
                    className: "success",
                    gap: 0
                }), $(this).dequeue()
            })
        }), 
$(".fa-github").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/github.png"), $(this).css({
                color: "rgba(182,156,255,0.5)",
                transition: "color ease 0.4s"
            })
        }),$(".fa-facebook-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/facebook.png"), $(this).css({
                color: "rgba(89,119,204,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-linkedin-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/linkedin.png"), $(this).css({
                color: "rgba(0,168,255,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-envelope-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/email.png"), $(this).css({
                color: "rgba(127,224,80,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-envelope-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/email.png"), $(this).css({
                color: "rgba(127,224,80,0.5)",
                transition: "color ease 0.4s"
            })
        }), $("#submit").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/choice.png")
        }), $("#client").on("focus", function() {
            $(this).attr("placeholder", "Your Name")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $("#return").on("focus", function() {
            $(this).attr("placeholder", "Your Email")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $("#message-con-0").on("focus", function() {
            $(this).attr("placeholder", "Let's Chat!")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $(".fa").on("mouseleave", function() {
            $(this).css({
                color: "rgba(255,255,255,0.4)",
                transition: "color ease 0.5s"
            })
        })
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                    scrollTop: t.offset().top
                }, 1e3), !1
            }
        })
    }), $(window).resize(function() {
        position_h_center("scroll_down");
        var t = $(".name-container").parent().outerWidth(),
            e = $(".name-container").width();
        $(".name-container").css("left", (t - e) / 2 + "px"), updateVisual()
    }), $("nav a").on("click", function() {
        var t = $(this).attr("data-scroll"),
            e = $('section[data-anchor="' + t + '"]').offset().top - 28;
        return $("body,html").animate({
            scrollTop: e
        }, 500), !1
    }), $(window).scroll(function() {
        var t = $("li.current").attr("id");
        $(this).scrollTop() + 85 >= $('div[data-anchor="home"]').offset().top && $(this).scrollTop() < $('div[data-anchor="portfolio"]').offset().top - 85 && (hide_menu(), $("nav a#home").hasClass("active") || ($("nav a#about").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").removeClass("active")), $("nav li#home").hasClass("current") || ($("nav li#about").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#home").addClass("current"))), $(this).scrollTop() + 85 >= $('div[data-anchor="portfolio"]').offset().top && $(this).scrollTop() < $('div[data-anchor="about"]').offset().top && (show_menu(), $("nav a#about").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").removeClass("active"), $("nav a#about").addClass("active")), $("nav li#about").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#about").addClass("current"))), $(this).scrollTop() + 100 >= $('div[data-anchor="about"]').offset().top && $(this).scrollTop() < $('div[data-anchor="contact"]').offset().top && ($("nav a#portfolio").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#about").removeClass("active"), $("nav a#contact").removeClass("active"), $("nav a#portfolio").addClass("active")), $("nav li#portfolio").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#about").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#portfolio").addClass("current"))), $(this).scrollTop() + 60 >= $('div[data-anchor="contact"]').offset().top && ($("nav a#contact").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#about").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").addClass("active")), $("nav li#contact").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#about").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").addClass("current"))), $("nav a.active").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            setTimeout(function() {
                $("li.current a").hasClass("active") && $("li.current a").removeClass("active")
            }, 800)
        }), previousId = t;
        var e = $(this).scrollTop(),
            i = $(".filter").height();
        $("#default-nav").css("opacity", .8 - e / i).show()
    }), $(window).load(function() {
        updateVisual(), $(".name-container").css($(window).width() > 768 ? {
            position: "absolute",
            left: ($(window).width() - $(".name-container").outerWidth()) / 2,
            top: ($(window).height() - $(".name-container").outerHeight()) / 2,
            opacity: 1
        } : {
            position: "relative",
            top: 0,
            left: 0
        }), $(window).resize()
    }),
    function(t, e, i) {
        "use strict";
        var o = t.document,
            n = t.Modernizr,
            s = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            },
            a = "Moz Webkit O Ms".split(" "),
            r = function(t) {
                var e = o.documentElement.style,
                    i;
                if ("string" == typeof e[t]) return t;
                t = s(t);
                for (var n = 0, r = a.length; r > n; n++)
                    if (i = a[n] + t, "string" == typeof e[i]) return i
            },
            l = r("transform"),
            p = r("transitionProperty"),
            h = {
                csstransforms: function() {
                    return !!l
                },
                csstransforms3d: function() {
                    var t = !!r("perspective");
                    if (t) {
                        var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                            o = "@media (" + i.join("transform-3d),(") + "modernizr)",
                            n = e("<style>" + o + "{#modernizr{height:3px}}</style>").appendTo("head"),
                            s = e('<div id="modernizr" />').appendTo("html");
                        t = 3 === s.height(), s.remove(), n.remove()
                    }
                    return t
                },
                csstransitions: function() {
                    return !!p
                }
            },
            c;
        if (n)
            for (c in h) n.hasOwnProperty(c) || n.addTest(c, h[c]);
        else {
            n = t.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            };
            var d = " ",
                u;
            for (c in h) u = h[c](), n[c] = u, d += " " + (u ? "" : "no-") + c;
            e("html").addClass(d)
        }
        if (n.csstransforms) {
            var f = n.csstransforms3d ? {
                    translate: function(t) {
                        return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
                    },
                    scale: function(t) {
                        return "scale3d(" + t + ", " + t + ", 1) "
                    }
                } : {
                    translate: function(t) {
                        return "translate(" + t[0] + "px, " + t[1] + "px) "
                    },
                    scale: function(t) {
                        return "scale(" + t + ") "
                    }
                },
                m = function(t, i, o) {
                    var n = e.data(t, "isoTransform") || {},
                        s = {},
                        a, r = {},
                        p;
                    s[i] = o, e.extend(n, s);
                    for (a in n) p = n[a], r[a] = f[a](p);
                    var h = r.translate || "",
                        c = r.scale || "",
                        d = h + c;
                    e.data(t, "isoTransform", n), t.style[l] = d
                };
            e.cssNumber.scale = !0, e.cssHooks.scale = {
                set: function(t, e) {
                    m(t, "scale", e)
                },
                get: function(t, i) {
                    var o = e.data(t, "isoTransform");
                    return o && o.scale ? o.scale : 1
                }
            }, e.fx.step.scale = function(t) {
                e.cssHooks.scale.set(t.elem, t.now + t.unit)
            }, e.cssNumber.translate = !0, e.cssHooks.translate = {
                set: function(t, e) {
                    m(t, "translate", e)
                },
                get: function(t, i) {
                    var o = e.data(t, "isoTransform");
                    return o && o.translate ? o.translate : [0, 0]
                }
            }
        }
        var g, v;
        n.csstransitions && (g = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[p], v = r("transitionDuration"));
        var y = e.event,
            _;
        y.special.smartresize = {
            setup: function() {
                e(this).bind("resize", y.special.smartresize.handler)
            },
            teardown: function() {
                e(this).unbind("resize", y.special.smartresize.handler)
            },
            handler: function(t, e) {
                var i = this,
                    o = arguments;
                t.type = "smartresize", _ && clearTimeout(_), _ = setTimeout(function() {
                    jQuery.event.handle.apply(i, o)
                }, "execAsap" === e ? 0 : 100)
            }
        }, e.fn.smartresize = function(t) {
            return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
        }, e.Isotope = function(t, i, o) {
            this.element = e(i), this._create(t), this._init(o)
        };
        var w = ["width", "height"],
            b = e(t);
        e.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: {
                opacity: 0,
                scale: .001
            },
            visibleStyle: {
                opacity: 1,
                scale: 1
            },
            containerStyle: {
                position: "relative",
                overflow: "hidden"
            },
            animationEngine: "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: !0,
            itemPositionDataEnabled: !1
        }, e.Isotope.prototype = {
            _create: function(t) {
                this.options = e.extend({}, e.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
                var i = this.element[0].style;
                this.originalStyle = {};
                var o = w.slice(0);
                for (var n in this.options.containerStyle) o.push(n);
                for (var s = 0, a = o.length; a > s; s++) n = o[s], this.originalStyle[n] = i[n] || "";
                this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                var r = {
                    "original-order": function(t, e) {
                        return e.elemCount++, e.elemCount
                    },
                    random: function() {
                        return Math.random()
                    }
                };
                this.options.getSortData = e.extend(this.options.getSortData, r), this.reloadItems(), this.offset = {
                    left: parseInt(this.element.css("padding-left") || 0, 10),
                    top: parseInt(this.element.css("padding-top") || 0, 10)
                };
                var l = this;
                setTimeout(function() {
                    l.element.addClass(l.options.containerClass)
                }, 0), this.options.resizable && b.bind("smartresize.isotope", function() {
                    l.resize()
                }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                    return !1
                })
            },
            _getAtoms: function(t) {
                var e = this.options.itemSelector,
                    i = e ? t.filter(e).add(t.find(e)) : t,
                    o = {
                        position: "absolute"
                    };
                return this.usingTransforms && (o.left = 0, o.top = 0), i.css(o).addClass(this.options.itemClass), this.updateSortData(i, !0), i
            },
            _init: function(t) {
                this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
            },
            option: function(t) {
                if (e.isPlainObject(t)) {
                    this.options = e.extend(!0, this.options, t);
                    var i;
                    for (var o in t) i = "_update" + s(o), this[i] && this[i]()
                }
            },
            _updateAnimationEngine: function() {
                var t = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                    e;
                switch (t) {
                    case "css":
                    case "none":
                        e = !1;
                        break;
                    case "jquery":
                        e = !0;
                        break;
                    default:
                        e = !n.csstransitions
                }
                this.isUsingJQueryAnimation = e, this._updateUsingTransforms()
            },
            _updateTransformsEnabled: function() {
                this._updateUsingTransforms()
            },
            _updateUsingTransforms: function() {
                var t = this.usingTransforms = this.options.transformsEnabled && n.csstransforms && n.csstransitions && !this.isUsingJQueryAnimation;
                t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
            },
            _filter: function(t) {
                var e = "" === this.options.filter ? "*" : this.options.filter;
                if (!e) return t;
                var i = this.options.hiddenClass,
                    o = "." + i,
                    n = t.filter(o),
                    s = n;
                if ("*" !== e) {
                    s = n.filter(e);
                    var a = t.not(o).not(e).addClass(i);
                    this.styleQueue.push({
                        $el: a,
                        style: this.options.hiddenStyle
                    })
                }
                return this.styleQueue.push({
                    $el: s,
                    style: this.options.visibleStyle
                }), s.removeClass(i), t.filter(e)
            },
            updateSortData: function(t, i) {
                var o = this,
                    n = this.options.getSortData,
                    s, a;
                t.each(function() {
                    s = e(this), a = {};
                    for (var t in n) a[t] = i || "original-order" !== t ? n[t](s, o) : e.data(this, "isotope-sort-data")[t];
                    e.data(this, "isotope-sort-data", a)
                })
            },
            _sort: function() {
                var t = this.options.sortBy,
                    e = this._getSorter,
                    i = this.options.sortAscending ? 1 : -1,
                    o = function(o, n) {
                        var s = e(o, t),
                            a = e(n, t);
                        return s === a && "original-order" !== t && (s = e(o, "original-order"), a = e(n, "original-order")), (s > a ? 1 : a > s ? -1 : 0) * i
                    };
                this.$filteredAtoms.sort(o)
            },
            _getSorter: function(t, i) {
                return e.data(t, "isotope-sort-data")[i]
            },
            _translate: function(t, e) {
                return {
                    translate: [t, e]
                }
            },
            _positionAbs: function(t, e) {
                return {
                    left: t,
                    top: e
                }
            },
            _pushPosition: function(t, e, i) {
                e = Math.round(e + this.offset.left), i = Math.round(i + this.offset.top);
                var o = this.getPositionStyles(e, i);
                this.styleQueue.push({
                    $el: t,
                    style: o
                }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
                    x: e,
                    y: i
                })
            },
            layout: function(t, e) {
                var i = this.options.layoutMode;
                if (this["_" + i + "Layout"](t), this.options.resizesContainer) {
                    var o = this["_" + i + "GetContainerSize"]();
                    this.styleQueue.push({
                        $el: this.element,
                        style: o
                    })
                }
                this._processStyleQueue(t, e), this.isLaidOut = !0
            },
            _processStyleQueue: function(t, i) {
                var o = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                    s = this.options.animationOptions,
                    a = this.options.onLayout,
                    r, l, p, h;
                if (l = function(t, e) {
                        e.$el[o](e.style, s)
                    }, this._isInserting && this.isUsingJQueryAnimation) l = function(t, e) {
                    r = e.$el.hasClass("no-transition") ? "css" : o, e.$el[r](e.style, s)
                };
                else if (i || a || s.complete) {
                    var c = !1,
                        d = [i, a, s.complete],
                        u = this;
                    if (p = !0, h = function() {
                            if (!c) {
                                for (var e, i = 0, o = d.length; o > i; i++) e = d[i], "function" == typeof e && e.call(u.element, t, u);
                                c = !0
                            }
                        }, this.isUsingJQueryAnimation && "animate" === o) s.complete = h, p = !1;
                    else if (n.csstransitions) {
                        for (var f = 0, m = this.styleQueue[0], y = m && m.$el, _; !y || !y.length;) {
                            if (_ = this.styleQueue[f++], !_) return;
                            y = _.$el
                        }
                        var w = parseFloat(getComputedStyle(y[0])[v]);
                        w > 0 && (l = function(t, e) {
                            e.$el[o](e.style, s).one(g, h)
                        }, p = !1)
                    }
                }
                e.each(this.styleQueue, l), p && h(), this.styleQueue = []
            },
            resize: function() {
                this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
            },
            reLayout: function(t) {
                this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
            },
            addItems: function(t, e) {
                var i = this._getAtoms(t);
                this.$allAtoms = this.$allAtoms.add(i), e && e(i)
            },
            insert: function(t, e) {
                this.element.append(t);
                var i = this;
                this.addItems(t, function(t) {
                    var o = i._filter(t);
                    i._addHideAppended(o), i._sort(), i.reLayout(), i._revealAppended(o, e)
                })
            },
            appended: function(t, e) {
                var i = this;
                this.addItems(t, function(t) {
                    i._addHideAppended(t), i.layout(t), i._revealAppended(t, e)
                })
            },
            _addHideAppended: function(t) {
                this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                    $el: t,
                    style: this.options.hiddenStyle
                })
            },
            _revealAppended: function(t, e) {
                var i = this;
                setTimeout(function() {
                    t.removeClass("no-transition"), i.styleQueue.push({
                        $el: t,
                        style: i.options.visibleStyle
                    }), i._isInserting = !1, i._processStyleQueue(t, e)
                }, 10)
            },
            reloadItems: function() {
                this.$allAtoms = this._getAtoms(this.element.children())
            },
            remove: function(t, e) {
                this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
                var i = this,
                    o = function() {
                        t.remove(), e && e.call(i.element)
                    };
                t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                    $el: t,
                    style: this.options.hiddenStyle
                }), this._sort(), this.reLayout(o)) : o()
            },
            shuffle: function(t) {
                this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
            },
            destroy: function() {
                var t = this.usingTransforms,
                    e = this.options;
                this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function() {
                    var e = this.style;
                    e.position = "", e.top = "", e.left = "", e.opacity = "", t && (e[l] = "")
                });
                var i = this.element[0].style;
                for (var o in this.originalStyle) i[o] = this.originalStyle[o];
                this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"), b.unbind(".isotope")
            },
            _getSegments: function(t) {
                var e = this.options.layoutMode,
                    i = t ? "rowHeight" : "columnWidth",
                    o = t ? "height" : "width",
                    n = t ? "rows" : "cols",
                    a = this.element[o](),
                    r, l = this.options[e] && this.options[e][i] || this.$filteredAtoms["outer" + s(o)](!0) || a;
                r = Math.floor(a / l), r = Math.max(r, 1), this[e][n] = r, this[e][i] = l
            },
            _checkIfSegmentsChanged: function(t) {
                var e = this.options.layoutMode,
                    i = t ? "rows" : "cols",
                    o = this[e][i];
                return this._getSegments(t), this[e][i] !== o
            },
            _masonryReset: function() {
                this.masonry = {}, this._getSegments();
                var t = this.masonry.cols;
                for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
            },
            _masonryLayout: function(t) {
                var i = this,
                    o = i.masonry;
                t.each(function() {
                    var t = e(this),
                        n = Math.ceil(t.outerWidth(!0) / o.columnWidth);
                    if (n = Math.min(n, o.cols), 1 === n) i._masonryPlaceBrick(t, o.colYs);
                    else {
                        var s = o.cols + 1 - n,
                            a = [],
                            r, l;
                        for (l = 0; s > l; l++) r = o.colYs.slice(l, l + n), a[l] = Math.max.apply(Math, r);
                        i._masonryPlaceBrick(t, a)
                    }
                })
            },
            _masonryPlaceBrick: function(t, e) {
                for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; s > n; n++)
                    if (e[n] === i) {
                        o = n;
                        break
                    }
                var a = this.masonry.columnWidth * o,
                    r = i;
                this._pushPosition(t, a, r);
                var l = i + t.outerHeight(!0),
                    p = this.masonry.cols + 1 - s;
                for (n = 0; p > n; n++) this.masonry.colYs[o + n] = l
            },
            _masonryGetContainerSize: function() {
                var t = Math.max.apply(Math, this.masonry.colYs);
                return {
                    height: t
                }
            },
            _masonryResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _fitRowsReset: function() {
                this.fitRows = {
                    x: 0,
                    y: 0,
                    height: 0
                }
            },
            _fitRowsLayout: function(t) {
                var i = this,
                    o = this.element.width(),
                    n = this.fitRows;
                t.each(function() {
                    var t = e(this),
                        s = t.outerWidth(!0),
                        a = t.outerHeight(!0);
                    0 !== n.x && s + n.x > o && (n.x = 0, n.y = n.height), i._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + a, n.height), n.x += s
                })
            },
            _fitRowsGetContainerSize: function() {
                return {
                    height: this.fitRows.height
                }
            },
            _fitRowsResizeChanged: function() {
                return !0
            },
            _cellsByRowReset: function() {
                this.cellsByRow = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByRowLayout: function(t) {
                var i = this,
                    o = this.cellsByRow;
                t.each(function() {
                    var t = e(this),
                        n = o.index % o.cols,
                        s = Math.floor(o.index / o.cols),
                        a = (n + .5) * o.columnWidth - t.outerWidth(!0) / 2,
                        r = (s + .5) * o.rowHeight - t.outerHeight(!0) / 2;
                    i._pushPosition(t, a, r), o.index++
                })
            },
            _cellsByRowGetContainerSize: function() {
                return {
                    height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                }
            },
            _cellsByRowResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _straightDownReset: function() {
                this.straightDown = {
                    y: 0
                }
            },
            _straightDownLayout: function(t) {
                var i = this;
                t.each(function(t) {
                    var o = e(this);
                    i._pushPosition(o, 0, i.straightDown.y), i.straightDown.y += o.outerHeight(!0)
                })
            },
            _straightDownGetContainerSize: function() {
                return {
                    height: this.straightDown.y
                }
            },
            _straightDownResizeChanged: function() {
                return !0
            },
            _masonryHorizontalReset: function() {
                this.masonryHorizontal = {}, this._getSegments(!0);
                var t = this.masonryHorizontal.rows;
                for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
            },
            _masonryHorizontalLayout: function(t) {
                var i = this,
                    o = i.masonryHorizontal;
                t.each(function() {
                    var t = e(this),
                        n = Math.ceil(t.outerHeight(!0) / o.rowHeight);
                    if (n = Math.min(n, o.rows), 1 === n) i._masonryHorizontalPlaceBrick(t, o.rowXs);
                    else {
                        var s = o.rows + 1 - n,
                            a = [],
                            r, l;
                        for (l = 0; s > l; l++) r = o.rowXs.slice(l, l + n), a[l] = Math.max.apply(Math, r);
                        i._masonryHorizontalPlaceBrick(t, a)
                    }
                })
            },
            _masonryHorizontalPlaceBrick: function(t, e) {
                for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; s > n; n++)
                    if (e[n] === i) {
                        o = n;
                        break
                    }
                var a = i,
                    r = this.masonryHorizontal.rowHeight * o;
                this._pushPosition(t, a, r);
                var l = i + t.outerWidth(!0),
                    p = this.masonryHorizontal.rows + 1 - s;
                for (n = 0; p > n; n++) this.masonryHorizontal.rowXs[o + n] = l
            },
            _masonryHorizontalGetContainerSize: function() {
                var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                return {
                    width: t
                }
            },
            _masonryHorizontalResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _fitColumnsReset: function() {
                this.fitColumns = {
                    x: 0,
                    y: 0,
                    width: 0
                }
            },
            _fitColumnsLayout: function(t) {
                var i = this,
                    o = this.element.height(),
                    n = this.fitColumns;
                t.each(function() {
                    var t = e(this),
                        s = t.outerWidth(!0),
                        a = t.outerHeight(!0);
                    0 !== n.y && a + n.y > o && (n.x = n.width, n.y = 0), i._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + s, n.width), n.y += a
                })
            },
            _fitColumnsGetContainerSize: function() {
                return {
                    width: this.fitColumns.width
                }
            },
            _fitColumnsResizeChanged: function() {
                return !0
            },
            _cellsByColumnReset: function() {
                this.cellsByColumn = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByColumnLayout: function(t) {
                var i = this,
                    o = this.cellsByColumn;
                t.each(function() {
                    var t = e(this),
                        n = Math.floor(o.index / o.rows),
                        s = o.index % o.rows,
                        a = (n + .5) * o.columnWidth - t.outerWidth(!0) / 2,
                        r = (s + .5) * o.rowHeight - t.outerHeight(!0) / 2;
                    i._pushPosition(t, a, r), o.index++
                })
            },
            _cellsByColumnGetContainerSize: function() {
                return {
                    width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                }
            },
            _cellsByColumnResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _straightAcrossReset: function() {
                this.straightAcross = {
                    x: 0
                }
            },
            _straightAcrossLayout: function(t) {
                var i = this;
                t.each(function(t) {
                    var o = e(this);
                    i._pushPosition(o, i.straightAcross.x, 0), i.straightAcross.x += o.outerWidth(!0)
                })
            },
            _straightAcrossGetContainerSize: function() {
                return {
                    width: this.straightAcross.x
                }
            },
            _straightAcrossResizeChanged: function() {
                return !0
            }
        }, e.fn.imagesLoaded = function(t) {
            function i() {
                t.call(n, s)
            }

            function o(t) {
                var n = t.target;
                n.src !== r && -1 === e.inArray(n, l) && (l.push(n), --a <= 0 && (setTimeout(i), s.unbind(".imagesLoaded", o)))
            }
            var n = this,
                s = n.find("img").add(n.filter("img")),
                a = s.length,
                r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                l = [];
            return a || i(), s.bind("load.imagesLoaded error.imagesLoaded", o).each(function() {
                var t = this.src;
                this.src = r, this.src = t
            }), n
        };
        var A = function(e) {
            t.console && t.console.error(e)
        };
        e.fn.isotope = function(t, i) {
            if ("string" == typeof t) {
                var o = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var i = e.data(this, "isotope");
                    return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, o) : void A("no such method '" + t + "' for isotope instance") : void A("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
                })
            } else this.each(function() {
                var o = e.data(this, "isotope");
                o ? (o.option(t), o._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i))
            });
            return this
        }
    }(window, jQuery), ! function(t) {
        function e(t, e) {
            return "function" == typeof t ? t.call(e) : t
        }

        function i(t) {
            for (; t = t.parentNode;)
                if (t == document) return !0;
            return !1
        }

        function o(e, i) {
            this.$element = t(e), this.options = i, this.enabled = !0, this.fixTitle()
        }
        o.prototype = {
            show: function() {
                var i = this.getTitle();
                if (i && this.enabled) {
                    var o = this.tip();
                    o.find(".tipsy-inner")[this.options.html ? "html" : "text"](i), o[0].className = "tipsy", o.remove().css({
                        top: 0,
                        left: 0,
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(document.body);
                    var n = t.extend({}, this.$element.offset(), {
                            width: this.$element[0].offsetWidth,
                            height: this.$element[0].offsetHeight
                        }),
                        s = o[0].offsetWidth,
                        a = o[0].offsetHeight,
                        r = e(this.options.gravity, this.$element[0]),
                        l;
                    switch (r.charAt(0)) {
                        case "n":
                            l = {
                                top: n.top + n.height + this.options.offset,
                                left: n.left + n.width / 2 - s / 2
                            };
                            break;
                        case "s":
                            l = {
                                top: n.top - a - this.options.offset,
                                left: n.left + n.width / 2 - s / 2
                            };
                            break;
                        case "e":
                            l = {
                                top: n.top + n.height / 2 - a / 2,
                                left: n.left - s - this.options.offset
                            };
                            break;
                        case "w":
                            l = {
                                top: n.top + n.height / 2 - a / 2,
                                left: n.left + n.width + this.options.offset
                            }
                    }
                    2 == r.length && (l.left = "w" == r.charAt(1) ? n.left + n.width / 2 - 15 : n.left + n.width / 2 - s + 15), o.css(l).addClass("tipsy-" + r), o.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + r.charAt(0), this.options.className && o.addClass(e(this.options.className, this.$element[0])), this.options.fade ? o.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    }) : o.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    })
                }
            },
            hide: function() {
                this.options.fade ? this.tip().stop().fadeOut(function() {
                    t(this).remove()
                }) : this.tip().remove()
            },
            fixTitle: function() {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
            },
            getTitle: function() {
                var t, e = this.$element,
                    i = this.options;
                this.fixTitle();
                var t, i = this.options;
                return "string" == typeof i.title ? t = e.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (t = i.title.call(e[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || i.fallback
            },
            tip: function() {
                return this.$tip || (this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            }
        }, t.fn.tipsy = function(e) {
            function i(i) {
                var n = t.data(i, "tipsy");
                return n || (n = new o(i, t.fn.tipsy.elementOptions(i, e)), t.data(i, "tipsy", n)), n
            }

            function n() {
                var t = i(this);
                t.hoverState = "in", 0 == e.delayIn ? t.show() : (t.fixTitle(), setTimeout(function() {
                    "in" == t.hoverState && t.show()
                }, e.delayIn))
            }

            function s() {
                var t = i(this);
                t.hoverState = "out", 0 == e.delayOut ? t.hide() : setTimeout(function() {
                    "out" == t.hoverState && t.hide()
                }, e.delayOut)
            }
            if (e === !0) return this.data("tipsy");
            if ("string" == typeof e) {
                var a = this.data("tipsy");
                return a && a[e](), this
            }
            if (e = t.extend({}, t.fn.tipsy.defaults, e), e.live || this.each(function() {
                    i(this)
                }), "manual" != e.trigger) {
                var r = e.live ? "live" : "bind",
                    l = "hover" == e.trigger ? "mouseenter" : "focus",
                    p = "hover" == e.trigger ? "mouseleave" : "blur";
                this[r](l, n)[r](p, s)
            }
            return this
        }, t.fn.tipsy.defaults = {
            className: null,
            delayIn: 0,
            delayOut: 0,
            fade: !1,
            fallback: "",
            gravity: "n",
            html: !1,
            live: !1,
            offset: 0,
            opacity: .8,
            title: "title",
            trigger: "hover"
        }, t.fn.tipsy.revalidate = function() {
            t(".tipsy").each(function() {
                var e = t.data(this, "tipsy-pointee");
                e && i(e) || t(this).remove()
            })
        }, t.fn.tipsy.elementOptions = function(e, i) {
            return t.metadata ? t.extend({}, i, t(e).metadata()) : i
        }, t.fn.tipsy.autoNS = function() {
            return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
        }, t.fn.tipsy.autoWE = function() {
            return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
        }, t.fn.tipsy.autoBounds = function(e, i) {
            return function() {
                var o = {
                        ns: i[0],
                        ew: i.length > 1 ? i[1] : !1
                    },
                    n = t(document).scrollTop() + e,
                    s = t(document).scrollLeft() + e,
                    a = t(this);
                return a.offset().top < n && (o.ns = "n"), a.offset().left < s && (o.ew = "w"), t(window).width() + t(document).scrollLeft() - a.offset().left < e && (o.ew = "e"), t(window).height() + t(document).scrollTop() - a.offset().top < e && (o.ns = "s"), o.ns + (o.ew ? o.ew : "")
            }
        }
    }(jQuery), ! function($) {
        function t() {
            return url = location.href, hashtag = -1 !== url.indexOf("#prettyPhoto") ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)) : !1
        }

        function e() {
            "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
        }

        function i() {
            -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
        }

        function o(t, e) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var i = "[\\?&]" + t + "=([^&#]*)",
                o = new RegExp(i),
                n = o.exec(e);
            return null == n ? "" : n[1]
        }
        $.prettyPhoto = {
            version: "3.1.4"
        }, $.fn.prettyPhoto = function(n) {
            function s() {
                $(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (x / 2 - y.containerHeight / 2), 0 > projectedTop && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                    height: y.contentHeight,
                    width: y.contentWidth
                }, settings.animation_speed), $pp_pic_holder.animate({
                    top: projectedTop,
                    left: k / 2 - y.containerWidth / 2 < 0 ? 0 : k / 2 - y.containerWidth / 2,
                    width: y.containerWidth
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(y.height).width(y.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (y.resized ? $("a.pp_expand,a.pp_contract").show() : $("a.pp_expand").hide()), !settings.autoplay_slideshow || P || _ || $.prettyPhoto.startSlideshow(), settings.changepicturecallback(), _ = !0
                }), f(), n.ajaxcallback()
            }

            function a(t) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    $(".pp_loaderIcon").show(), t()
                })
            }

            function r(t) {
                t > 1 ? $(".pp_nav").show() : $(".pp_nav").hide()
            }

            function l(t, e) {
                if (resized = !1, p(t, e), imageWidth = t, imageHeight = e, (C > k || A > x) && doresize && settings.allow_resize && !v) {
                    for (resized = !0, fitting = !1; !fitting;) C > k ? (imageWidth = k - 200, imageHeight = e / t * imageWidth) : A > x ? (imageHeight = x - 200, imageWidth = t / e * imageHeight) : fitting = !0, A = imageHeight, C = imageWidth;
                    p(imageWidth, imageHeight), (C > k || A > x) && l(C, A)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(A),
                    containerWidth: Math.floor(C) + 2 * settings.horizontal_padding,
                    contentHeight: Math.floor(w),
                    contentWidth: Math.floor(b),
                    resized: resized
                }
            }

            function p(t, e) {
                t = parseFloat(t), e = parseFloat(e), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo($("body")).css({
                    position: "absolute",
                    top: -1e4
                }), detailsHeight += $pp_details.height(), detailsHeight = 34 >= detailsHeight ? 36 : detailsHeight, $.browser.msie && 7 == $.browser.version && (detailsHeight += 8), $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo($("body")).css({
                    position: "absolute",
                    top: -1e4
                }), titleHeight += $pp_title.height(), $pp_title.remove(), w = e + detailsHeight, b = t, A = w + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), C = t
            }

            function h(t) {
                return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
            }

            function c() {
                if (doresize && "undefined" != typeof $pp_pic_holder) {
                    if (scroll_pos = d(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = x / 2 + scroll_pos.scrollTop - contentHeight / 2, 0 > projectedTop && (projectedTop = 0), contentHeight > x) return;
                    $pp_pic_holder.css({
                        top: projectedTop,
                        left: k / 2 + scroll_pos.scrollLeft - contentwidth / 2
                    })
                }
            }

            function d() {
                return self.pageYOffset ? {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                } : document.documentElement && document.documentElement.scrollTop ? {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                } : document.body ? {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                } : void 0
            }

            function u() {
                x = $(window).height(), k = $(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height($(document).height()).width(k)
            }

            function f() {
                isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) && settings.ie6_fallback && (!$.browser.msie || 6 != parseInt($.browser.version)) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((y.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, $.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }

            function m(t) {
                if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), $("body").append(settings.markup), $pp_pic_holder = $(".pp_pic_holder"), $ppt = $(".ppt"), $pp_overlay = $("div.pp_overlay"), isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0, toInject = "";
                    for (var e = 0; e < pp_images.length; e++) pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[e]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = $(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                        return $.prettyPhoto.changeGalleryPage("next"), $.prettyPhoto.stopSlideshow(), !1
                    }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                        return $.prettyPhoto.changeGalleryPage("previous"), $.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                        $(this).find("a").click(function() {
                            return $.prettyPhoto.changePage(t), $.prettyPhoto.stopSlideshow(), !1
                        })
                    })
                }
                settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    return $.prettyPhoto.startSlideshow(), !1
                })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                    opacity: 0,
                    height: $(document).height(),
                    width: $(window).width()
                }).bind("click", function() {
                    settings.modal || $.prettyPhoto.close()
                }), $("a.pp_close").bind("click", function() {
                    return $.prettyPhoto.close(), !1
                }), settings.allow_expand && $("a.pp_expand").bind("click", function(t) {
                    return $(this).hasClass("pp_expand") ? ($(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : ($(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), a(function() {
                        $.prettyPhoto.open()
                    }), !1
                }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    return $.prettyPhoto.changePage("previous"), $.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    return $.prettyPhoto.changePage("next"), $.prettyPhoto.stopSlideshow(), !1
                }), c()
            }
            n = jQuery.extend({
                hook: "rel",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 5e3,
                autoplay_slideshow: !1,
                opacity: .8,
                show_title: !0,
                allow_resize: !0,
                allow_expand: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                overlay_gallery_max: 30,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            }, n);
            var g = this,
                v = !1,
                y, _, w, b, A, C, x = $(window).height(),
                k = $(window).width(),
                P;
            return doresize = !0, scroll_pos = d(), $(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                c(), u()
            }), n.keyboard_shortcuts && $(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
                if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                    case 37:
                        $.prettyPhoto.changePage("previous"), t.preventDefault();
                        break;
                    case 39:
                        $.prettyPhoto.changePage("next"), t.preventDefault();
                        break;
                    case 27:
                        settings.modal || $.prettyPhoto.close(), t.preventDefault()
                }
            }), $.prettyPhoto.initialize = function() {
                return settings = n, "pp_default" == settings.theme && (settings.horizontal_padding = 16), settings.ie6_fallback && $.browser.msie && 6 == parseInt($.browser.version) && (settings.theme = "light_square"), theRel = $(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).attr("href") : void 0
                }) : $.makeArray($(this).attr("href")), pp_titles = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).find("img").attr("alt") ? $(t).find("img").attr("alt") : "" : void 0
                }) : $.makeArray($(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).attr("title") ? $(t).attr("title") : "" : void 0
                }) : $.makeArray($(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray($(this).attr("href"), pp_images), rel_index = isSet ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this)), m(this), settings.allow_resize && $(window).bind("scroll.prettyphoto", function() {
                    c()
                }), $.prettyPhoto.open(), !1
            }, $.prettyPhoto.open = function(t) {
                return "undefined" == typeof settings && (settings = n, $.browser.msie && 6 == $.browser.version && (settings.theme = "light_square"), pp_images = $.makeArray(arguments[0]), pp_titles = $.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = $.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, m(t.target)), $.browser.msie && 6 == $.browser.version && $("select").css("visibility", "hidden"), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r($(pp_images).size()), $(".pp_loaderIcon").show(), settings.deeplinking && e(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + $(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), v = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat($(window).height() * parseFloat(movie_height) / 100 - 150), v = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat($(window).width() * parseFloat(movie_width) / 100 - 150), v = !0), $pp_pic_holder.fadeIn(function() {
                    switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < $(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                y = l(imgPreloader.width, imgPreloader.height), s()
                            }, imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), $.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            y = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            y = l(movie_width, movie_height), movie_id = pp_images[set_position];
                            var t = /http:\/\/(www\.)?vimeo.com\/(\d+)/,
                                e = movie_id.match(t);
                            movie = "http://player.vimeo.com/video/" + e[2] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = y.width + "/embed/?moog_width=" + y.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, y.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            y = l(movie_width, movie_height), y.height += 15, y.contentHeight += 15, y.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            y = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            y = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, y = l(movie_width, movie_height), doresize = !0, skipInjection = !0, $.get(pp_images[set_position], function(t) {
                                toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                            });
                            break;
                        case "custom":
                            y = l(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show(), doresize = !1, y = l($(myClone).width(), $(myClone).height()), doresize = !0, $(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html())
                    }
                    imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
                }), !1
            }, $.prettyPhoto.changePage = function(t) {
                currentGalleryPage = 0, "previous" == t ? (set_position--, 0 > set_position && (set_position = $(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > $(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && $(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), a(function() {
                    $.prettyPhoto.open()
                })
            }, $.prettyPhoto.changeGalleryPage = function(t) {
                "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, 0 > currentGalleryPage && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }, $.prettyPhoto.startSlideshow = function() {
                "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    return $.prettyPhoto.stopSlideshow(), !1
                }), P = setInterval($.prettyPhoto.startSlideshow, settings.slideshow)) : $.prettyPhoto.changePage("next")
            }, $.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    return $.prettyPhoto.startSlideshow(), !1
                }), clearInterval(P), P = void 0
            }, $.prettyPhoto.close = function() {
                $pp_overlay.is(":animated") || ($.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), $("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    $(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                    $.browser.msie && 6 == $.browser.version && $("select").css("visibility", "visible"), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), $(this).remove(), $(window).unbind("scroll.prettyphoto"), i(), settings.callback(), doresize = !0, _ = !1, delete settings
                }))
            }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                $("a[" + n.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", $.prettyPhoto.initialize)
        }
    }(jQuery);
var pp_alreadyInitialized = !1;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, o, n) {
            return jQuery.easing[jQuery.easing.def](t, e, i, o, n)
        },
        easeInQuad: function(t, e, i, o, n) {
            return o * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, o, n) {
            return -o * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e + i : -o / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, o, n) {
            return o * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, o, n) {
            return -o * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e + i : -o / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e * e + i : o / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, o, n) {
            return -o * Math.cos(e / n * (Math.PI / 2)) + o + i
        },
        easeOutSine: function(t, e, i, o, n) {
            return o * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, o, n) {
            return -o / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, o, n) {
            return 0 == e ? i : o * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, o, n) {
            return e == n ? i + o : o * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, o, n) {
            return 0 == e ? i : e == n ? i + o : (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + i : o / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, o, n) {
            return -o * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, o, n) {
            return o * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + i : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a)) + i
        },
        easeOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - s) * Math.PI / a) + o + i
        },
        easeInOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + o;
            if (a || (a = .3 * n * 1.5), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) * .5 + o + i
        },
        easeInBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * (e /= n) * e * ((s + 1) * e - s) + i
        },
        easeOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + i
        },
        easeInOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), (e /= n / 2) < 1 ? o / 2 * e * e * (((s *= 1.525) + 1) * e - s) + i : o / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
        },
        easeInBounce: function(t, e, i, o, n) {
            return o - jQuery.easing.easeOutBounce(t, n - e, 0, o, n) + i
        },
        easeOutBounce: function(t, e, i, o, n) {
            return (e /= n) < 1 / 2.75 ? 7.5625 * o * e * e + i : 2 / 2.75 > e ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, o, n) {
            return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, o, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, o, n) + .5 * o + i
        }
    }), + function($) {
        "use strict";
        var t = function(e, i) {
            this.$element = $(e), this.options = $.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, t.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = $.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.$parent && this.$parent.find("> .panel > .in");
                    if (e && e.length) {
                        var i = e.data("bs.collapse");
                        if (i && i.transitioning) return;
                        e.collapse("hide"), i || e.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                    var n = function() {
                        this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!$.support.transition) return n.call(this);
                    var s = $.camelCase(["scroll", o].join("-"));
                    this.$element.one($.support.transition.end, $.proxy(n, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
                }
            }
        }, t.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = $.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.dimension();
                    this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return $.support.transition ? void this.$element[e](0).one($.support.transition.end, $.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                }
            }
        }, t.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var e = $.fn.collapse;
        $.fn.collapse = function(e) {
            return this.each(function() {
                var i = $(this),
                    o = i.data("bs.collapse"),
                    n = $.extend({}, t.DEFAULTS, i.data(), "object" == typeof e && e);
                o || i.data("bs.collapse", o = new t(this, n)), "string" == typeof e && o[e]()
            })
        }, $.fn.collapse.Constructor = t, $.fn.collapse.noConflict = function() {
            return $.fn.collapse = e, this
        }, $(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var e = $(this),
                i, o = e.attr("data-target") || t.preventDefault() || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
                n = $(o),
                s = n.data("bs.collapse"),
                a = s ? "toggle" : e.data(),
                r = e.attr("data-parent"),
                l = r && $(r);
            s && s.transitioning || (l && l.find('[data-toggle=collapse][data-parent="' + r + '"]').not(e).addClass("collapsed"), e[n.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), n.collapse(a)
        })
    }(window.jQuery), String.prototype.rightChars = function(t) {
        return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t)
    },
    function($) {
        var t = {
                highlightSpeed: 20,
                typeSpeed: 100,
                clearDelay: 500,
                typeDelay: 200,
                clearOnHighlight: !0,
                typerDataAttr: "data-typer-targets",
                typerInterval: 3e3
            },
            e, i, o, n, s, a, r, l, p, h, c, d, u, f = 0;
        s = function(t, e) {
            return t = "#444", $("<span></span>").css("color", t).css("background-color", typerColor)
        }, p = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, l = function(t) {
            t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"])
        }, n = function(t) {
            var e = t.data("text"),
                i = t.data("oldLeft"),
                o = t.data("oldRight");
            return e && 0 !== e.length ? (t.text(i + e.charAt(0) + o).data({
                oldLeft: i + e.charAt(0),
                text: e.substring(1)
            }), void setTimeout(function() {
                n(t)
            }, d())) : void l(t)
        }, i = function(t) {
            t.find("span").remove(), setTimeout(function() {
                n(t)
            }, r())
        }, e = function(t) {
            var o = t.data("highlightPosition"),
                n, r, l;
            return p(o) || (o = t.data("rightStop") + 1), o <= t.data("leftStop") ? void setTimeout(function() {
                i(t)
            }, a()) : (n = t.text().substring(0, o - 1), r = t.text().substring(o - 1, t.data("rightStop") + 1), l = t.text().substring(t.data("rightStop") + 1), t.html(n).append(s(t.data("black"), t.data("primaryColor")).append(r)).append(l), t.data("highlightPosition", o - 1), void setTimeout(function() {
                return e(t)
            }, c()))
        }, h = function(t) {
            var e;
            if (!t.data("typing")) {
                try {
                    e = JSON.parse(t.attr($.typer.options.typerDataAttr)).targets
                } catch (i) {}
                "undefined" == typeof e && (e = $.map(t.attr($.typer.options.typerDataAttr).split(","), function(t) {
                    return $.trim(t)
                })), f == e.length && (f = 0), t.typeTo(e[f]), f++
            }
        }, $.typer = function() {
            return {
                options: t
            }
        }(), $.extend($.typer, {
            options: t
        }), $.fn.typer = function() {
            var t = $(this);
            return t.each(function() {
                var t = $(this);
                "undefined" != typeof t.attr($.typer.options.typerDataAttr) && (h(t), setInterval(function() {
                    h(t)
                }, u()))
            })
        }, $.fn.typeTo = function(t) {
            var i = $(this),
                o = i.text(),
                n = 0,
                s = 0;
            if (o === t) return console.log("Our strings our equal, nothing to type"), i;
            if (o !== i.html()) return console.error("Typer does not work on elements with child elements."), i;
            for (i.data("typing", !0); o.charAt(n) === t.charAt(n);) n++;
            for (; o.rightChars(s) === t.rightChars(s);) s++;
            return t = t.substring(n, t.length - s + 1), i.data({
                oldLeft: o.substring(0, n),
                oldRight: o.rightChars(s - 1),
                leftStop: n,
                rightStop: o.length - s,
                primaryColor: i.css("color"),
                backgroundColor: i.css("background-color"),
                text: t
            }), e(i), i
        }, c = function() {
            return $.typer.options.highlightSpeed
        }, d = function() {
            return $.typer.options.typeSpeed
        }, a = function() {
            return $.typer.options.clearDelay
        }, r = function() {
            return $.typer.options.typeDelay
        }, u = function() {
            return $.typer.options.typerInterval
        }
    }(jQuery),
    function(t, e, $, i) {
        "use strict";
        var o, n, s, a, r, l, p, h, c, d, u, f, m, g, v, y, _, w, b, A, C, x, k, P, S, I, j, T = [].indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
        C = "notify", A = C + "js", s = C + "!blank", k = {
            t: "top",
            m: "middle",
            b: "bottom",
            l: "left",
            c: "center",
            r: "right"
        }, m = ["l", "c", "r"], j = ["t", "m", "b"], _ = ["t", "b", "l", "r"], w = {
            t: "b",
            m: null,
            b: "t",
            l: "r",
            c: null,
            r: "l"
        }, b = function(t) {
            var e;
            return e = [], $.each(t.split(/\W+/), function(t, i) {
                var o;
                return o = i.toLowerCase().charAt(0), k[o] ? e.push(o) : void 0
            }), e
        }, I = {}, a = {
            name: "core",
            html: '<div class="' + A + '-wrapper">\n  <div class="' + A + '-arrow"></div>\n  <div class="' + A + '-container"></div>\n</div>',
            css: "." + A + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + A + "-corner ." + A + "-wrapper,\n." + A + "-corner ." + A + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + A + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + A + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n}\n\n." + A + "-hidable {\n  cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n  position: relative;\n}\n\n." + A + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"
        }, S = {
            "border-radius": ["-webkit-", "-moz-"]
        }, u = function(t) {
            return I[t]
        }, n = function(e, i) {
            var o, n, s, a;
            if (!e) throw "Missing Style name";
            if (!i) throw "Missing Style definition";
            if (!i.html) throw "Missing Style HTML";
            return (null != (a = I[e]) ? a.cssElem : void 0) && (t.console && console.warn("" + C + ": overwriting style '" + e + "'"), I[e].cssElem.remove()), i.name = e, I[e] = i, o = "", i.classes && $.each(i.classes, function(t, e) {
                return o += "." + A + "-" + i.name + "-" + t + " {\n", $.each(e, function(t, e) {
                    return S[t] && $.each(S[t], function(i, n) {
                        return o += "  " + n + t + ": " + e + ";\n"
                    }), o += "  " + t + ": " + e + ";\n"
                }), o += "}\n"
            }), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = y(o), i.cssElem.attr("id", "notify-" + i.name)), s = {}, n = $(i.html), c("html", n, s), c("text", n, s), i.fields = s
        }, y = function(t) {
            var e;
            e = r("style"), e.attr("type", "text/css"), $("head").append(e);
            try {
                e.html(t)
            } catch (i) {
                e[0].styleSheet.cssText = t
            }
            return e
        }, c = function(t, e, i) {
            var o;
            return "html" !== t && (t = "text"), o = "data-notify-" + t, h(e, "[" + o + "]").each(function() {
                var e;
                return e = $(this).attr(o), e || (e = s), i[e] = t
            })
        }, h = function(t, e) {
            return t.is(e) ? t : t.find(e)
        }, x = {
            clickToHide: !0,
            autoHide: !0,
            autoHideDelay: 5e3,
            arrowShow: !0,
            arrowSize: 5,
            breakNewLines: !0,
            elementPosition: "bottom",
            globalPosition: "top right",
            style: "bootstrap",
            className: "error",
            showAnimation: "slideDown",
            showDuration: 400,
            hideAnimation: "slideUp",
            hideDuration: 200,
            gap: 5
        }, v = function(t, e) {
            var i;
            return i = function() {}, i.prototype = t, $.extend(!0, new i, e)
        }, l = function(t) {
            return $.extend(x, t)
        }, r = function(t) {
            return $("<" + t + "></" + t + ">")
        }, f = {}, d = function(t) {
            var e;
            return t.is("[type=radio]") && (e = t.parents("form:first").find("[type=radio]").filter(function(e, i) {
                return $(i).attr("name") === t.attr("name")
            }), t = e.first()), t
        }, g = function(t, e, o) {
            var n, s;
            if ("string" == typeof o) o = parseInt(o, 10);
            else if ("number" != typeof o) return;
            if (!isNaN(o)) return n = k[w[e.charAt(0)]], s = e, t[n] !== i && (e = k[n.charAt(0)], o = -o), t[e] === i ? t[e] = o : t[e] += o, null
        }, P = function(t, e, i) {
            if ("l" === t || "t" === t) return 0;
            if ("c" === t || "m" === t) return i / 2 - e / 2;
            if ("r" === t || "b" === t) return i - e;
            throw "Invalid alignment"
        }, p = function(t) {
            return p.e = p.e || r("div"), p.e.text(t).html()
        }, o = function() {
            function t(t, e, i) {
                "string" == typeof i && (i = {
                    className: i
                }), this.options = v(x, $.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = $(a.html), this.options.clickToHide && this.wrapper.addClass("" + A + "-hidable"), this.wrapper.data(A, this), this.arrow = this.wrapper.find("." + A + "-arrow"), this.container = this.wrapper.find("." + A + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = d(t), this.elem.data(A, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(e)
            }
            return t.prototype.loadHTML = function() {
                var t;
                return t = this.getStyle(), this.userContainer = $(t.html), this.userFields = t.fields
            }, t.prototype.show = function(t, e) {
                var i, o, n, s, a, r = this;
                if (o = function() {
                        return t || r.elem || r.destroy(), e ? e() : void 0
                    }, a = this.container.parent().parents(":hidden").length > 0, n = this.container.add(this.arrow), i = [], a && t) s = "show";
                else if (a && !t) s = "hide";
                else if (!a && t) s = this.options.showAnimation, i.push(this.options.showDuration);
                else {
                    if (a || t) return o();
                    s = this.options.hideAnimation, i.push(this.options.hideDuration)
                }
                return i.push(o), n[s].apply(n, i)
            }, t.prototype.setGlobalPosition = function() {
                var t, e, i, o, n, s, a, l;
                return l = this.getPosition(), a = l[0], s = l[1], n = k[a], t = k[s], o = a + "|" + s, e = f[o], e || (e = f[o] = r("div"), i = {}, i[n] = 0, "middle" === t ? i.top = "45%" : "center" === t ? i.left = "45%" : i[t] = 0, e.css(i).addClass("" + A + "-corner"), $("body").append(e)), e.prepend(this.wrapper)
            }, t.prototype.setElementPosition = function() {
                var t, e, i, o, n, s, a, r, l, p, h, c, d, u, f, v, y, b, A, C, x, S, I, z, M, Q, H, O, D;
                for (I = this.getPosition(), C = I[0], b = I[1], A = I[2], h = this.elem.position(), r = this.elem.outerHeight(), c = this.elem.outerWidth(), l = this.elem.innerHeight(), p = this.elem.innerWidth(), z = this.wrapper.position(), n = this.container.height(), s = this.container.width(), u = k[C], v = w[C], y = k[v], a = {}, a[y] = "b" === C ? r : "r" === C ? c : 0, g(a, "top", h.top - z.top), g(a, "left", h.left - z.left), D = ["top", "left"], M = 0, H = D.length; H > M; M++) x = D[M], f = parseInt(this.elem.css("margin-" + x), 10), f && g(a, x, f);
                if (d = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), g(a, y, d), this.options.arrowShow) {
                    for (i = this.options.arrowSize, e = $.extend({}, a), t = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white", Q = 0, O = _.length; O > Q; Q++) x = _[Q], S = k[x], x !== v && (o = S === u ? t : "transparent", e["border-" + S] = "" + i + "px solid " + o);
                    g(a, k[v], i), T.call(_, b) >= 0 && g(e, k[b], 2 * i)
                } else this.arrow.hide();
                return T.call(j, C) >= 0 ? (g(a, "left", P(b, s, c)), e && g(e, "left", P(b, i, p))) : T.call(m, C) >= 0 && (g(a, "top", P(b, n, r)), e && g(e, "top", P(b, i, l))), this.container.is(":visible") && (a.display = "block"), this.container.removeAttr("style").css(a), e ? this.arrow.removeAttr("style").css(e) : void 0
            }, t.prototype.getPosition = function() {
                var t, e, i, o, n, s, a, r;
                if (e = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), t = b(e), 0 === t.length && (t[0] = "b"), i = t[0], T.call(_, i) < 0) throw "Must be one of [" + _ + "]";
                return (1 === t.length || (o = t[0], T.call(j, o) >= 0 && (n = t[1], T.call(m, n) < 0)) || (s = t[0], T.call(m, s) >= 0 && (a = t[1], T.call(j, a) < 0))) && (t[1] = (r = t[0], T.call(m, r) >= 0 ? "m" : "l")), 2 === t.length && (t[2] = t[1]), t
            }, t.prototype.getStyle = function(t) {
                var e;
                if (t || (t = this.options.style), t || (t = "default"), e = I[t], !e) throw "Missing style: " + t;
                return e
            }, t.prototype.updateClasses = function() {
                var t, e;
                return t = ["base"], $.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), e = this.getStyle(), t = $.map(t, function(t) {
                    return "" + A + "-" + e.name + "-" + t
                }).join(" "), this.userContainer.attr("class", t)
            }, t.prototype.run = function(t, e) {
                var i, o, n, a, r, l = this;
                if ($.isPlainObject(e) ? $.extend(this.options, e) : "string" === $.type(e) && (this.options.className = e), this.container && !t) return void this.show(!1);
                if (this.container || t) {
                    o = {}, $.isPlainObject(t) ? o = t : o[s] = t;
                    for (n in o) i = o[n], a = this.userFields[n], a && ("text" === a && (i = p(i), this.options.breakNewLines && (i = i.replace(/\n/g, "<br/>"))), r = n === s ? "" : "=" + n, h(this.userContainer, "[data-notify-" + a + r + "]").html(i));
                    return this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide ? (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(function() {
                        return l.show(!1)
                    }, this.options.autoHideDelay)) : void 0
                }
            }, t.prototype.destroy = function() {
                return this.wrapper.remove()
            }, t
        }(), $[C] = function(t, e, i) {
            return t && t.nodeName || t.jquery ? $(t)[C](e, i) : (i = e, e = t, new o(null, e, i)), t
        }, $.fn[C] = function(t, e) {
            return $(this).each(function() {
                var i;
                return i = d($(this)).data(A), i ? i.run(t, e) : new o($(this), t, e)
            }), this
        }, $.extend($[C], {
            defaults: l,
            addStyle: n,
            pluginOptions: x,
            getStyle: u,
            insertCSS: y
        }), $(function() {
            return y(a.css).attr("id", "core-notify"), $(e).on("click", "." + A + "-hidable", function(t) {
                return $(this).trigger("notify-hide")
            }), $(e).on("notify-hide", "." + A + "-wrapper", function(t) {
                var e;
                return null != (e = $(this).data(A)) ? e.show(!1) : void 0
            })
        })
    }(window, document, jQuery), $.notify.addStyle("bootstrap", {
        html: "<div>\n<span data-notify-text></span>\n</div>",
        classes: {
            base: {
                "font-weight": "bold",
                padding: "8px 15px 8px 14px",
                "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                "background-color": "#fcf8e3",
                border: "1px solid #fbeed5",
                "border-radius": "4px",
                "white-space": "nowrap",
                "padding-left": "25px",
                "background-repeat": "no-repeat",
                "background-position": "3px 7px"
            },
            error: {
                color: "#B94A48",
                "background-color": "#F2DEDE",
                "border-color": "#EED3D7",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
            },
            success: {
                color: "#468847",
                "background-color": "#DFF0D8",
                "border-color": "#D6E9C6",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
            },
            info: {
                color: "#3A87AD",
                "background-color": "#D9EDF7",
                "border-color": "#BCE8F1",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
            },
            warn: {
                color: "#C09853",
                "background-color": "#FCF8E3",
                "border-color": "#FBEED5",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
            }
        }
    }), jQuery(document).ready(function() {
        function t() {
            var t = jQuery("#main-content").width(),
                e = 3;
            return 420 > t ? e = 1 : t >= 420 && 990 > t ? e = 2 : t >= 990 && 1320 > t ? e = 3 : t >= 1320 && 2100 > t ? e = 4 : t >= 2100 && (e = 5), e
        }

        function e() {
            var e = t();
            s = jQuery(window).width() < 768 ? 0 : n;
            var i = jQuery("#main-content").width(),
                o = i / e;
            o = Math.floor(o), jQuery(".portfolio-item").each(function(t) {
                jQuery(this).css({
                    width: o + "px"
                })
            })
        }

        function i() {
            var t = jQuery(window).width();
            e(), o.isotope("reLayout", function() {
                jQuery(window).width() != t && setTimeout(function() {
                    i()
                }, 10)
            })
        }
        var o = jQuery("#portfolio-grid");
        jQuery("html, document, body").scrollTop(0), jQuery("#portfolio-grid").hide(), jQuery("body").append('<div id="preloader"></div>'), jQuery("#close-post").live("click", function() {
            jQuery("#portfolio-content").slideUp(300, function() {
                jQuery("#portfolio-content").html("")
            })
        }), jQuery(".portfolio-item a, #prev-post, #next-post").live("click", function() {
            jQuery("#portfolio-content").html("").fadeOut(200), jQuery(".loading-folio").fadeIn(200);
            var t = jQuery(this).attr("rel");
            jQuery.post(tie.ajaxurl, {
                action: "tie_get_folio",
                id: t
            }, function(t) {
                var e = jQuery(t);
                e.fitVids(), jQuery("body").animate({
                    scrollTop: "0px"
                }, 1e3), jQuery("#portfolio-content").append(e), jQuery(".loading-folio").fadeOut(200, function() {
                    jQuery("#portfolio-content").fadeIn(500)
                })
            }, "html")
        }), jQuery(window).load(function() {
            e(), o.isotope({
                itemSelector: ".portfolio-item",
                resizable: !1,
                animationOptions: {
                    duration: 400,
                    easing: "swing",
                    queue: !1
                },
                masonry: {}
            }), i(), jQuery("#preloader").fadeOut("fast", function() {
                jQuery(this).remove(), jQuery("#portfolio-grid").fadeIn("slow"), jQuery("#portfolio-grid").isotope();
                var t = window.location.hash.match(/\d+$/);
                t = parseInt(t), t && (jQuery("#portfolio-content").html("").fadeOut(200), jQuery(".loading-folio").fadeIn(200), jQuery.post(tie.ajaxurl, {
                    action: "tie_get_folio",
                    id: t
                }, function(t) {
                    var e = jQuery(t);
                    e.fitVids(), jQuery("body").animate({
                        scrollTop: "0px"
                    }, 1e3), jQuery("#portfolio-content").append(e), jQuery(".loading-folio").fadeOut(200, function() {
                        jQuery("#portfolio-content").fadeIn(500)
                    })
                }, "html"))
            })
        }), jQuery("#filters a").click(function() {
            var t = jQuery(this).attr("data-filter");
            return jQuery("#filters li").removeClass("current"), jQuery(this).parent().addClass("current"), e(), o.isotope({
                filter: t
            }), !1
        });
        var n = 238,
            s = n;
        jQuery(window).on("debouncedresize", function(t) {
            i()
        })
    }), jQuery(function() {
        jQuery(".da-thumbs > .portfolio-item").hoverdir()
    }),
    function(t, e) {
        t.HoverDir = function(e, i) {
            this.$el = t(i), this._init(e)
        }, t.HoverDir.defaults = {
            hoverDelay: 0,
            reverse: !1
        }, t.HoverDir.prototype = {
            _init: function(e) {
                this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this._loadEvents()
            },
            _loadEvents: function() {
                var e = this;
                this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(i) {
                    var o = t(this),
                        n = i.type,
                        s = o.find("div"),
                        a = e._getDir(o, {
                            x: i.pageX,
                            y: i.pageY
                        }),
                        r = e._getClasses(a);
                    s.removeClass(), "mouseenter" === n ? (s.hide().addClass(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function() {
                        s.show(0, function() {
                            t(this).addClass("da-animate").addClass(r.to)
                        })
                    }, e.options.hoverDelay)) : (s.addClass("da-animate"), clearTimeout(e.tmhover), s.addClass(r.from))
                })
            },
            _getDir: function(t, e) {
                var i = t.width(),
                    o = t.height(),
                    n = (e.x - t.offset().left - i / 2) * (i > o ? o / i : 1),
                    s = (e.y - t.offset().top - o / 2) * (o > i ? i / o : 1),
                    a = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
                return a
            },
            _getClasses: function(t) {
                var e, i;
                switch (t) {
                    case 0:
                        e = this.options.reverse ? "da-slideFromBottom" : "da-slideFromTop", i = "da-slideTop";
                        break;
                    case 1:
                        e = this.options.reverse ? "da-slideFromLeft" : "da-slideFromRight", i = "da-slideLeft";
                        break;
                    case 2:
                        e = this.options.reverse ? "da-slideFromTop" : "da-slideFromBottom", i = "da-slideTop";
                        break;
                    case 3:
                        e = this.options.reverse ? "da-slideFromRight" : "da-slideFromLeft", i = "da-slideLeft"
                }
                return {
                    from: e,
                    to: i
                }
            }
        };
        var i = function(t) {
            this.console && console.error(t)
        };
        t.fn.hoverdir = function(e) {
            if ("string" == typeof e) {
                var o = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var n = t.data(this, "hoverdir");
                    return n ? t.isFunction(n[e]) && "_" !== e.charAt(0) ? void n[e].apply(n, o) : void i("no such method '" + e + "' for hoverdir instance") : void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function() {
                var i = t.data(this, "hoverdir");
                i || t.data(this, "hoverdir", new t.HoverDir(e, this))
            });
            return this
        }
    }(jQuery);

function getTime() {
    var t = new Date,
        e = t.getHours(),
        i;
    i = e > 4 && 12 > e ? "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good morning!</h2>" : e > 12 && 18 > e ? "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good afternoon!</h2>" : "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good evening!</h2>", $("#about-photo").after(i)
}

function position_h_center(t) {
    var e = $("#" + t).parent().outerWidth(),
        i = $("#" + t).width();
    $("#" + t).css("left", (e - i) / 2 + "px")
}

function animate_scroll_button() {
    $("#scroll_down").animate({
        bottom: "30px"
    }, 1e3, function() {
        $("#scroll_down").animate({
            bottom: "7px"
        }, {
            duration: 2e3,
            easing: "easeOutBounce"
        })
    })
}

function hide_menu() {
    $("#navbar").hasClass("display_nav") && ($("#navbar").removeClass("display_nav"), $("#navbar").addClass("hidden_nav"), $("#navbar").css({
        opacity: "0"
    }))
}

function show_menu() {
    $("#navbar").hasClass("hidden_nav") && ($("#navbar").removeClass("hidden_nav"), $("#navbar").delay(140).queue(function() {
        $(this).css({
            opacity: "1"
        }), $("#navbar").addClass("display_nav"), $(this).dequeue()
    }))
}

function updateVisual() {
    $("#message-con-0").attr("maxlength", Math.round($("#message-con-0").width() / wordGap)), $("#message-con-1").attr("maxlength", Math.round($("#message-con-1").width() / wordGap)), $("#message-con-2").attr("maxlength", Math.round($("#message-con-2").width() / wordGap)), $("#message-con-3").attr("maxlength", Math.round($("#message-con-3").width() / wordGap)), $("#message-con-4").attr("maxlength", Math.round($("#message-con-4").width() / wordGap)), $("#footer").css("height", window.innerHeight - $("#navbar").height()), $("#icon-wrapper").css("width", $("#about-me").width()), $(".logo").css("margin-bottom", "-30px"), $("#nameTag").css("font-size", "69px"), $("#typer").css("font-size", "22px"), $(".demo-3").css("margin-top", "none"), $(".box").css("margin", "2px"), window.innerHeight > 800 ? ($("#personal-bio").css("font-size", "18px"), $(".name-container").css({
        width: "566px",
        height: "457px",
        top: .21 * window.innerHeight
    }), $("p.letter-writing").css({
        fontSize: "17px",
        marginTop: "21%"
    }), $(".image").css("height", "90%")) : ($("#personal-bio").css("font-size", "16px"), $(".name-container").css({
        width: "566px",
        height: "457px",
        top: .11 * window.innerHeight
    }), $("p.letter-writing").css({
        fontSize: "15px",
        marginTop: "11%"
    }), $(".image").css("height", "120%"))
}
var previousId = "",
    tie = {},
    wordGap = 11;
$(document).ready(function() {
        $("html, body").css({
            overflow: "hidden",
            height: "100%"
        }), getTime();
        var t = document.getElementById("signature");
        t.display, t.onloadedmetadata = function() {
            $("#signature").css("visibility", "visible"), $("#container").delay(6200).queue(function() {
                $(this).fadeOut(1e3, function() {
                    $("html, body").css({
                        overflow: "visible",
                        height: "auto"
                    }), $("#loading").fadeOut(650)
                }), $(this).dequeue()
            })
        }, typerColor = "rgba(241,194,214,0.6)";
        var e = $(window).height() - $(".container").height();
        setTimeout(function() {
            $("[data-typer-targets]").typer(), $.typer.options.typerInterval = 3e3
        }, 2e3), position_h_center("scroll_down"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(".filter").hide(), $("#about_wrapper img#pajo").show()) : $(window).width() > 998 && setTimeout(function() {
            setInterval("animate_scroll_button()", 3e3)
        }, 0), $("input").keyup(function() {
            $(this).val().length == $(this).attr("maxlength") && $(this).next().focus()
        }), $("#submit").on("click", function() {
            $.notify.addStyle("postage", {
                html: "<div>&#10527;<span data-notify-text/>&#10528;</div>",
                classes: {
                    base: {
                        "white-space": "nowrap",
                        "background-color": "rgba(255,255,255,0.9)",
                        padding: "35px",
                        "margin-right": "10px"
                    },
                    postage: {
                        color: "black",
                        "background-color": "white"
                    }
                }
            }), $(".navbar-collapse").delay(500).queue(function() {
                $(this).notify("Let's keep in touch!", {
                    style: "postage",
                    elementPosition: "bottom centre",
                    showDuration: 450,
                    hideDuration: 200,
                    autoHideDelay: 2400,
                    arrowShow: !1,
                    showAnimation: "slideDown",
                    hideAnimation: "slideUp",
                    className: "success",
                    gap: 0
                }), $(this).dequeue()
            })
        }), 
		$("#nav_icon").on("mouseenter", function() {
			alert(),
			$(this).css({
                color: "rgba(0,0,0,0.7)",
                transition: "color ease 0.4s"
            })
        }), 	
		$(".fa-github").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/github.png"), $(this).css({
                color: "rgba(182,156,255,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-facebook-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/facebook.png"), $(this).css({
                color: "rgba(89,119,204,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-linkedin-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/linkedin.png"), $(this).css({
                color: "rgba(0,168,255,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-envelope-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/email.png"), $(this).css({
                color: "rgba(127,224,80,0.5)",
                transition: "color ease 0.4s"
            })
        }), $(".fa-envelope-square").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/email.png"), $(this).css({
                color: "rgba(127,224,80,0.5)",
                transition: "color ease 0.4s"
            })
        }), $("#submit").on("mouseenter", function() {
            $("#custom-stamp").attr("src", "images/stamps/choice.png")
        }), $("#client").on("focus", function() {
            $(this).attr("placeholder", "Your Name")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $("#return").on("focus", function() {
            $(this).attr("placeholder", "Your Email")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $("#message-con-0").on("focus", function() {
            $(this).attr("placeholder", "Let's Chat!")
        }).on("focusout", function() {
            $(this).attr("placeholder", "")
        }), $(".reach_me .fa").on("mouseleave", function() {
            $(this).css({
                color: "rgba(255,255,255,0.4)",
                transition: "color ease 0.5s"
            })
        })
        $("#nav_icon").on("mouseleave", function() {
            $(this).css({
                color: "black !important",
                transition: "color ease 0.5s"
            })
        })
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                    scrollTop: t.offset().top
                }, 1e3), !1
            }
        })
    }), $(window).resize(function() {
        position_h_center("scroll_down");
        var t = $(".name-container").parent().outerWidth(),
            e = $(".name-container").width();
        $(".name-container").css("left", (t - e) / 2 + "px"), updateVisual()
    }), $("nav a").on("click", function() {
        var t = $(this).attr("data-scroll"),
            e = $('section[data-anchor="' + t + '"]').offset().top - 28;
        return $("body,html").animate({
            scrollTop: e
        }, 500), !1
    }), $(window).scroll(function() {
        var t = $("li.current").attr("id");
        $(this).scrollTop() + 85 >= $('div[data-anchor="home"]').offset().top && $(this).scrollTop() < $('div[data-anchor="portfolio"]').offset().top - 85 && (hide_menu(), $("nav a#home").hasClass("active") || ($("nav a#about").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").removeClass("active")), $("nav li#home").hasClass("current") || ($("nav li#about").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#home").addClass("current"))), $(this).scrollTop() + 85 >= $('div[data-anchor="portfolio"]').offset().top && $(this).scrollTop() < $('div[data-anchor="about"]').offset().top && (show_menu(), $("nav a#about").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").removeClass("active"), $("nav a#about").addClass("active")), $("nav li#about").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#about").addClass("current"))), $(this).scrollTop() + 100 >= $('div[data-anchor="about"]').offset().top && $(this).scrollTop() < $('div[data-anchor="contact"]').offset().top && ($("nav a#portfolio").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#about").removeClass("active"), $("nav a#contact").removeClass("active"), $("nav a#portfolio").addClass("active")), $("nav li#portfolio").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#about").removeClass("current"), $("nav li#contact").removeClass("current"), $("nav li#portfolio").addClass("current"))), $(this).scrollTop() + 60 >= $('div[data-anchor="contact"]').offset().top && ($("nav a#contact").hasClass("active") || ($("nav a#home").removeClass("active"), $("nav a#about").removeClass("active"), $("nav a#portfolio").removeClass("active"), $("nav a#contact").addClass("active")), $("nav li#contact").hasClass("current") || ($("nav li#home").removeClass("current"), $("nav li#about").removeClass("current"), $("nav li#portfolio").removeClass("current"), $("nav li#contact").addClass("current"))), $("nav a.active").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            setTimeout(function() {
                $("li.current a").hasClass("active") && $("li.current a").removeClass("active")
            }, 800)
        }), previousId = t;
        var e = $(this).scrollTop(),
            i = $(".filter").height();
        $("#default-nav").css("opacity", .8 - e / i).show()
    }), $(window).load(function() {
        updateVisual(), $(".name-container").css($(window).width() > 768 ? {
            position: "absolute",
            left: ($(window).width() - $(".name-container").outerWidth()) / 2,
            top: ($(window).height() - $(".name-container").outerHeight()) / 2,
            opacity: 1
        } : {
            position: "relative",
            top: 0,
            left: 0
        }), $(window).resize()
    }),
    function(t, e, i) {
        "use strict";
        var o = t.document,
            n = t.Modernizr,
            s = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            },
            a = "Moz Webkit O Ms".split(" "),
            r = function(t) {
                var e = o.documentElement.style,
                    i;
                if ("string" == typeof e[t]) return t;
                t = s(t);
                for (var n = 0, r = a.length; r > n; n++)
                    if (i = a[n] + t, "string" == typeof e[i]) return i
            },
            l = r("transform"),
            p = r("transitionProperty"),
            h = {
                csstransforms: function() {
                    return !!l
                },
                csstransforms3d: function() {
                    var t = !!r("perspective");
                    if (t) {
                        var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                            o = "@media (" + i.join("transform-3d),(") + "modernizr)",
                            n = e("<style>" + o + "{#modernizr{height:3px}}</style>").appendTo("head"),
                            s = e('<div id="modernizr" />').appendTo("html");
                        t = 3 === s.height(), s.remove(), n.remove()
                    }
                    return t
                },
                csstransitions: function() {
                    return !!p
                }
            },
            c;
        if (n)
            for (c in h) n.hasOwnProperty(c) || n.addTest(c, h[c]);
        else {
            n = t.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            };
            var d = " ",
                u;
            for (c in h) u = h[c](), n[c] = u, d += " " + (u ? "" : "no-") + c;
            e("html").addClass(d)
        }
        if (n.csstransforms) {
            var f = n.csstransforms3d ? {
                    translate: function(t) {
                        return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
                    },
                    scale: function(t) {
                        return "scale3d(" + t + ", " + t + ", 1) "
                    }
                } : {
                    translate: function(t) {
                        return "translate(" + t[0] + "px, " + t[1] + "px) "
                    },
                    scale: function(t) {
                        return "scale(" + t + ") "
                    }
                },
                m = function(t, i, o) {
                    var n = e.data(t, "isoTransform") || {},
                        s = {},
                        a, r = {},
                        p;
                    s[i] = o, e.extend(n, s);
                    for (a in n) p = n[a], r[a] = f[a](p);
                    var h = r.translate || "",
                        c = r.scale || "",
                        d = h + c;
                    e.data(t, "isoTransform", n), t.style[l] = d
                };
            e.cssNumber.scale = !0, e.cssHooks.scale = {
                set: function(t, e) {
                    m(t, "scale", e)
                },
                get: function(t, i) {
                    var o = e.data(t, "isoTransform");
                    return o && o.scale ? o.scale : 1
                }
            }, e.fx.step.scale = function(t) {
                e.cssHooks.scale.set(t.elem, t.now + t.unit)
            }, e.cssNumber.translate = !0, e.cssHooks.translate = {
                set: function(t, e) {
                    m(t, "translate", e)
                },
                get: function(t, i) {
                    var o = e.data(t, "isoTransform");
                    return o && o.translate ? o.translate : [0, 0]
                }
            }
        }
        var g, v;
        n.csstransitions && (g = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[p], v = r("transitionDuration"));
        var y = e.event,
            _;
        y.special.smartresize = {
            setup: function() {
                e(this).bind("resize", y.special.smartresize.handler)
            },
            teardown: function() {
                e(this).unbind("resize", y.special.smartresize.handler)
            },
            handler: function(t, e) {
                var i = this,
                    o = arguments;
                t.type = "smartresize", _ && clearTimeout(_), _ = setTimeout(function() {
                    jQuery.event.handle.apply(i, o)
                }, "execAsap" === e ? 0 : 100)
            }
        }, e.fn.smartresize = function(t) {
            return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
        }, e.Isotope = function(t, i, o) {
            this.element = e(i), this._create(t), this._init(o)
        };
        var w = ["width", "height"],
            b = e(t);
        e.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: {
                opacity: 0,
                scale: .001
            },
            visibleStyle: {
                opacity: 1,
                scale: 1
            },
            containerStyle: {
                position: "relative",
                overflow: "hidden"
            },
            animationEngine: "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: !0,
            itemPositionDataEnabled: !1
        }, e.Isotope.prototype = {
            _create: function(t) {
                this.options = e.extend({}, e.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
                var i = this.element[0].style;
                this.originalStyle = {};
                var o = w.slice(0);
                for (var n in this.options.containerStyle) o.push(n);
                for (var s = 0, a = o.length; a > s; s++) n = o[s], this.originalStyle[n] = i[n] || "";
                this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                var r = {
                    "original-order": function(t, e) {
                        return e.elemCount++, e.elemCount
                    },
                    random: function() {
                        return Math.random()
                    }
                };
                this.options.getSortData = e.extend(this.options.getSortData, r), this.reloadItems(), this.offset = {
                    left: parseInt(this.element.css("padding-left") || 0, 10),
                    top: parseInt(this.element.css("padding-top") || 0, 10)
                };
                var l = this;
                setTimeout(function() {
                    l.element.addClass(l.options.containerClass)
                }, 0), this.options.resizable && b.bind("smartresize.isotope", function() {
                    l.resize()
                }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                    return !1
                })
            },
            _getAtoms: function(t) {
                var e = this.options.itemSelector,
                    i = e ? t.filter(e).add(t.find(e)) : t,
                    o = {
                        position: "absolute"
                    };
                return this.usingTransforms && (o.left = 0, o.top = 0), i.css(o).addClass(this.options.itemClass), this.updateSortData(i, !0), i
            },
            _init: function(t) {
                this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
            },
            option: function(t) {
                if (e.isPlainObject(t)) {
                    this.options = e.extend(!0, this.options, t);
                    var i;
                    for (var o in t) i = "_update" + s(o), this[i] && this[i]()
                }
            },
            _updateAnimationEngine: function() {
                var t = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                    e;
                switch (t) {
                    case "css":
                    case "none":
                        e = !1;
                        break;
                    case "jquery":
                        e = !0;
                        break;
                    default:
                        e = !n.csstransitions
                }
                this.isUsingJQueryAnimation = e, this._updateUsingTransforms()
            },
            _updateTransformsEnabled: function() {
                this._updateUsingTransforms()
            },
            _updateUsingTransforms: function() {
                var t = this.usingTransforms = this.options.transformsEnabled && n.csstransforms && n.csstransitions && !this.isUsingJQueryAnimation;
                t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
            },
            _filter: function(t) {
                var e = "" === this.options.filter ? "*" : this.options.filter;
                if (!e) return t;
                var i = this.options.hiddenClass,
                    o = "." + i,
                    n = t.filter(o),
                    s = n;
                if ("*" !== e) {
                    s = n.filter(e);
                    var a = t.not(o).not(e).addClass(i);
                    this.styleQueue.push({
                        $el: a,
                        style: this.options.hiddenStyle
                    })
                }
                return this.styleQueue.push({
                    $el: s,
                    style: this.options.visibleStyle
                }), s.removeClass(i), t.filter(e)
            },
            updateSortData: function(t, i) {
                var o = this,
                    n = this.options.getSortData,
                    s, a;
                t.each(function() {
                    s = e(this), a = {};
                    for (var t in n) a[t] = i || "original-order" !== t ? n[t](s, o) : e.data(this, "isotope-sort-data")[t];
                    e.data(this, "isotope-sort-data", a)
                })
            },
            _sort: function() {
                var t = this.options.sortBy,
                    e = this._getSorter,
                    i = this.options.sortAscending ? 1 : -1,
                    o = function(o, n) {
                        var s = e(o, t),
                            a = e(n, t);
                        return s === a && "original-order" !== t && (s = e(o, "original-order"), a = e(n, "original-order")), (s > a ? 1 : a > s ? -1 : 0) * i
                    };
                this.$filteredAtoms.sort(o)
            },
            _getSorter: function(t, i) {
                return e.data(t, "isotope-sort-data")[i]
            },
            _translate: function(t, e) {
                return {
                    translate: [t, e]
                }
            },
            _positionAbs: function(t, e) {
                return {
                    left: t,
                    top: e
                }
            },
            _pushPosition: function(t, e, i) {
                e = Math.round(e + this.offset.left), i = Math.round(i + this.offset.top);
                var o = this.getPositionStyles(e, i);
                this.styleQueue.push({
                    $el: t,
                    style: o
                }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
                    x: e,
                    y: i
                })
            },
            layout: function(t, e) {
                var i = this.options.layoutMode;
                if (this["_" + i + "Layout"](t), this.options.resizesContainer) {
                    var o = this["_" + i + "GetContainerSize"]();
                    this.styleQueue.push({
                        $el: this.element,
                        style: o
                    })
                }
                this._processStyleQueue(t, e), this.isLaidOut = !0
            },
            _processStyleQueue: function(t, i) {
                var o = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                    s = this.options.animationOptions,
                    a = this.options.onLayout,
                    r, l, p, h;
                if (l = function(t, e) {
                        e.$el[o](e.style, s)
                    }, this._isInserting && this.isUsingJQueryAnimation) l = function(t, e) {
                    r = e.$el.hasClass("no-transition") ? "css" : o, e.$el[r](e.style, s)
                };
                else if (i || a || s.complete) {
                    var c = !1,
                        d = [i, a, s.complete],
                        u = this;
                    if (p = !0, h = function() {
                            if (!c) {
                                for (var e, i = 0, o = d.length; o > i; i++) e = d[i], "function" == typeof e && e.call(u.element, t, u);
                                c = !0
                            }
                        }, this.isUsingJQueryAnimation && "animate" === o) s.complete = h, p = !1;
                    else if (n.csstransitions) {
                        for (var f = 0, m = this.styleQueue[0], y = m && m.$el, _; !y || !y.length;) {
                            if (_ = this.styleQueue[f++], !_) return;
                            y = _.$el
                        }
                        var w = parseFloat(getComputedStyle(y[0])[v]);
                        w > 0 && (l = function(t, e) {
                            e.$el[o](e.style, s).one(g, h)
                        }, p = !1)
                    }
                }
                e.each(this.styleQueue, l), p && h(), this.styleQueue = []
            },
            resize: function() {
                this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
            },
            reLayout: function(t) {
                this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
            },
            addItems: function(t, e) {
                var i = this._getAtoms(t);
                this.$allAtoms = this.$allAtoms.add(i), e && e(i)
            },
            insert: function(t, e) {
                this.element.append(t);
                var i = this;
                this.addItems(t, function(t) {
                    var o = i._filter(t);
                    i._addHideAppended(o), i._sort(), i.reLayout(), i._revealAppended(o, e)
                })
            },
            appended: function(t, e) {
                var i = this;
                this.addItems(t, function(t) {
                    i._addHideAppended(t), i.layout(t), i._revealAppended(t, e)
                })
            },
            _addHideAppended: function(t) {
                this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                    $el: t,
                    style: this.options.hiddenStyle
                })
            },
            _revealAppended: function(t, e) {
                var i = this;
                setTimeout(function() {
                    t.removeClass("no-transition"), i.styleQueue.push({
                        $el: t,
                        style: i.options.visibleStyle
                    }), i._isInserting = !1, i._processStyleQueue(t, e)
                }, 10)
            },
            reloadItems: function() {
                this.$allAtoms = this._getAtoms(this.element.children())
            },
            remove: function(t, e) {
                this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
                var i = this,
                    o = function() {
                        t.remove(), e && e.call(i.element)
                    };
                t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                    $el: t,
                    style: this.options.hiddenStyle
                }), this._sort(), this.reLayout(o)) : o()
            },
            shuffle: function(t) {
                this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
            },
            destroy: function() {
                var t = this.usingTransforms,
                    e = this.options;
                this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function() {
                    var e = this.style;
                    e.position = "", e.top = "", e.left = "", e.opacity = "", t && (e[l] = "")
                });
                var i = this.element[0].style;
                for (var o in this.originalStyle) i[o] = this.originalStyle[o];
                this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"), b.unbind(".isotope")
            },
            _getSegments: function(t) {
                var e = this.options.layoutMode,
                    i = t ? "rowHeight" : "columnWidth",
                    o = t ? "height" : "width",
                    n = t ? "rows" : "cols",
                    a = this.element[o](),
                    r, l = this.options[e] && this.options[e][i] || this.$filteredAtoms["outer" + s(o)](!0) || a;
                r = Math.floor(a / l), r = Math.max(r, 1), this[e][n] = r, this[e][i] = l
            },
            _checkIfSegmentsChanged: function(t) {
                var e = this.options.layoutMode,
                    i = t ? "rows" : "cols",
                    o = this[e][i];
                return this._getSegments(t), this[e][i] !== o
            },
            _masonryReset: function() {
                this.masonry = {}, this._getSegments();
                var t = this.masonry.cols;
                for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
            },
            _masonryLayout: function(t) {
                var i = this,
                    o = i.masonry;
                t.each(function() {
                    var t = e(this),
                        n = Math.ceil(t.outerWidth(!0) / o.columnWidth);
                    if (n = Math.min(n, o.cols), 1 === n) i._masonryPlaceBrick(t, o.colYs);
                    else {
                        var s = o.cols + 1 - n,
                            a = [],
                            r, l;
                        for (l = 0; s > l; l++) r = o.colYs.slice(l, l + n), a[l] = Math.max.apply(Math, r);
                        i._masonryPlaceBrick(t, a)
                    }
                })
            },
            _masonryPlaceBrick: function(t, e) {
                for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; s > n; n++)
                    if (e[n] === i) {
                        o = n;
                        break
                    }
                var a = this.masonry.columnWidth * o,
                    r = i;
                this._pushPosition(t, a, r);
                var l = i + t.outerHeight(!0),
                    p = this.masonry.cols + 1 - s;
                for (n = 0; p > n; n++) this.masonry.colYs[o + n] = l
            },
            _masonryGetContainerSize: function() {
                var t = Math.max.apply(Math, this.masonry.colYs);
                return {
                    height: t
                }
            },
            _masonryResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _fitRowsReset: function() {
                this.fitRows = {
                    x: 0,
                    y: 0,
                    height: 0
                }
            },
            _fitRowsLayout: function(t) {
                var i = this,
                    o = this.element.width(),
                    n = this.fitRows;
                t.each(function() {
                    var t = e(this),
                        s = t.outerWidth(!0),
                        a = t.outerHeight(!0);
                    0 !== n.x && s + n.x > o && (n.x = 0, n.y = n.height), i._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + a, n.height), n.x += s
                })
            },
            _fitRowsGetContainerSize: function() {
                return {
                    height: this.fitRows.height
                }
            },
            _fitRowsResizeChanged: function() {
                return !0
            },
            _cellsByRowReset: function() {
                this.cellsByRow = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByRowLayout: function(t) {
                var i = this,
                    o = this.cellsByRow;
                t.each(function() {
                    var t = e(this),
                        n = o.index % o.cols,
                        s = Math.floor(o.index / o.cols),
                        a = (n + .5) * o.columnWidth - t.outerWidth(!0) / 2,
                        r = (s + .5) * o.rowHeight - t.outerHeight(!0) / 2;
                    i._pushPosition(t, a, r), o.index++
                })
            },
            _cellsByRowGetContainerSize: function() {
                return {
                    height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                }
            },
            _cellsByRowResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _straightDownReset: function() {
                this.straightDown = {
                    y: 0
                }
            },
            _straightDownLayout: function(t) {
                var i = this;
                t.each(function(t) {
                    var o = e(this);
                    i._pushPosition(o, 0, i.straightDown.y), i.straightDown.y += o.outerHeight(!0)
                })
            },
            _straightDownGetContainerSize: function() {
                return {
                    height: this.straightDown.y
                }
            },
            _straightDownResizeChanged: function() {
                return !0
            },
            _masonryHorizontalReset: function() {
                this.masonryHorizontal = {}, this._getSegments(!0);
                var t = this.masonryHorizontal.rows;
                for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
            },
            _masonryHorizontalLayout: function(t) {
                var i = this,
                    o = i.masonryHorizontal;
                t.each(function() {
                    var t = e(this),
                        n = Math.ceil(t.outerHeight(!0) / o.rowHeight);
                    if (n = Math.min(n, o.rows), 1 === n) i._masonryHorizontalPlaceBrick(t, o.rowXs);
                    else {
                        var s = o.rows + 1 - n,
                            a = [],
                            r, l;
                        for (l = 0; s > l; l++) r = o.rowXs.slice(l, l + n), a[l] = Math.max.apply(Math, r);
                        i._masonryHorizontalPlaceBrick(t, a)
                    }
                })
            },
            _masonryHorizontalPlaceBrick: function(t, e) {
                for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; s > n; n++)
                    if (e[n] === i) {
                        o = n;
                        break
                    }
                var a = i,
                    r = this.masonryHorizontal.rowHeight * o;
                this._pushPosition(t, a, r);
                var l = i + t.outerWidth(!0),
                    p = this.masonryHorizontal.rows + 1 - s;
                for (n = 0; p > n; n++) this.masonryHorizontal.rowXs[o + n] = l
            },
            _masonryHorizontalGetContainerSize: function() {
                var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                return {
                    width: t
                }
            },
            _masonryHorizontalResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _fitColumnsReset: function() {
                this.fitColumns = {
                    x: 0,
                    y: 0,
                    width: 0
                }
            },
            _fitColumnsLayout: function(t) {
                var i = this,
                    o = this.element.height(),
                    n = this.fitColumns;
                t.each(function() {
                    var t = e(this),
                        s = t.outerWidth(!0),
                        a = t.outerHeight(!0);
                    0 !== n.y && a + n.y > o && (n.x = n.width, n.y = 0), i._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + s, n.width), n.y += a
                })
            },
            _fitColumnsGetContainerSize: function() {
                return {
                    width: this.fitColumns.width
                }
            },
            _fitColumnsResizeChanged: function() {
                return !0
            },
            _cellsByColumnReset: function() {
                this.cellsByColumn = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByColumnLayout: function(t) {
                var i = this,
                    o = this.cellsByColumn;
                t.each(function() {
                    var t = e(this),
                        n = Math.floor(o.index / o.rows),
                        s = o.index % o.rows,
                        a = (n + .5) * o.columnWidth - t.outerWidth(!0) / 2,
                        r = (s + .5) * o.rowHeight - t.outerHeight(!0) / 2;
                    i._pushPosition(t, a, r), o.index++
                })
            },
            _cellsByColumnGetContainerSize: function() {
                return {
                    width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                }
            },
            _cellsByColumnResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _straightAcrossReset: function() {
                this.straightAcross = {
                    x: 0
                }
            },
            _straightAcrossLayout: function(t) {
                var i = this;
                t.each(function(t) {
                    var o = e(this);
                    i._pushPosition(o, i.straightAcross.x, 0), i.straightAcross.x += o.outerWidth(!0)
                })
            },
            _straightAcrossGetContainerSize: function() {
                return {
                    width: this.straightAcross.x
                }
            },
            _straightAcrossResizeChanged: function() {
                return !0
            }
        }, e.fn.imagesLoaded = function(t) {
            function i() {
                t.call(n, s)
            }

            function o(t) {
                var n = t.target;
                n.src !== r && -1 === e.inArray(n, l) && (l.push(n), --a <= 0 && (setTimeout(i), s.unbind(".imagesLoaded", o)))
            }
            var n = this,
                s = n.find("img").add(n.filter("img")),
                a = s.length,
                r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                l = [];
            return a || i(), s.bind("load.imagesLoaded error.imagesLoaded", o).each(function() {
                var t = this.src;
                this.src = r, this.src = t
            }), n
        };
        var A = function(e) {
            t.console && t.console.error(e)
        };
        e.fn.isotope = function(t, i) {
            if ("string" == typeof t) {
                var o = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var i = e.data(this, "isotope");
                    return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, o) : void A("no such method '" + t + "' for isotope instance") : void A("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
                })
            } else this.each(function() {
                var o = e.data(this, "isotope");
                o ? (o.option(t), o._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i))
            });
            return this
        }
    }(window, jQuery), ! function(t) {
        function e(t, e) {
            return "function" == typeof t ? t.call(e) : t
        }

        function i(t) {
            for (; t = t.parentNode;)
                if (t == document) return !0;
            return !1
        }

        function o(e, i) {
            this.$element = t(e), this.options = i, this.enabled = !0, this.fixTitle()
        }
        o.prototype = {
            show: function() {
                var i = this.getTitle();
                if (i && this.enabled) {
                    var o = this.tip();
                    o.find(".tipsy-inner")[this.options.html ? "html" : "text"](i), o[0].className = "tipsy", o.remove().css({
                        top: 0,
                        left: 0,
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(document.body);
                    var n = t.extend({}, this.$element.offset(), {
                            width: this.$element[0].offsetWidth,
                            height: this.$element[0].offsetHeight
                        }),
                        s = o[0].offsetWidth,
                        a = o[0].offsetHeight,
                        r = e(this.options.gravity, this.$element[0]),
                        l;
                    switch (r.charAt(0)) {
                        case "n":
                            l = {
                                top: n.top + n.height + this.options.offset,
                                left: n.left + n.width / 2 - s / 2
                            };
                            break;
                        case "s":
                            l = {
                                top: n.top - a - this.options.offset,
                                left: n.left + n.width / 2 - s / 2
                            };
                            break;
                        case "e":
                            l = {
                                top: n.top + n.height / 2 - a / 2,
                                left: n.left - s - this.options.offset
                            };
                            break;
                        case "w":
                            l = {
                                top: n.top + n.height / 2 - a / 2,
                                left: n.left + n.width + this.options.offset
                            }
                    }
                    2 == r.length && (l.left = "w" == r.charAt(1) ? n.left + n.width / 2 - 15 : n.left + n.width / 2 - s + 15), o.css(l).addClass("tipsy-" + r), o.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + r.charAt(0), this.options.className && o.addClass(e(this.options.className, this.$element[0])), this.options.fade ? o.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    }) : o.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    })
                }
            },
            hide: function() {
                this.options.fade ? this.tip().stop().fadeOut(function() {
                    t(this).remove()
                }) : this.tip().remove()
            },
            fixTitle: function() {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
            },
            getTitle: function() {
                var t, e = this.$element,
                    i = this.options;
                this.fixTitle();
                var t, i = this.options;
                return "string" == typeof i.title ? t = e.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (t = i.title.call(e[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || i.fallback
            },
            tip: function() {
                return this.$tip || (this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            }
        }, t.fn.tipsy = function(e) {
            function i(i) {
                var n = t.data(i, "tipsy");
                return n || (n = new o(i, t.fn.tipsy.elementOptions(i, e)), t.data(i, "tipsy", n)), n
            }

            function n() {
                var t = i(this);
                t.hoverState = "in", 0 == e.delayIn ? t.show() : (t.fixTitle(), setTimeout(function() {
                    "in" == t.hoverState && t.show()
                }, e.delayIn))
            }

            function s() {
                var t = i(this);
                t.hoverState = "out", 0 == e.delayOut ? t.hide() : setTimeout(function() {
                    "out" == t.hoverState && t.hide()
                }, e.delayOut)
            }
            if (e === !0) return this.data("tipsy");
            if ("string" == typeof e) {
                var a = this.data("tipsy");
                return a && a[e](), this
            }
            if (e = t.extend({}, t.fn.tipsy.defaults, e), e.live || this.each(function() {
                    i(this)
                }), "manual" != e.trigger) {
                var r = e.live ? "live" : "bind",
                    l = "hover" == e.trigger ? "mouseenter" : "focus",
                    p = "hover" == e.trigger ? "mouseleave" : "blur";
                this[r](l, n)[r](p, s)
            }
            return this
        }, t.fn.tipsy.defaults = {
            className: null,
            delayIn: 0,
            delayOut: 0,
            fade: !1,
            fallback: "",
            gravity: "n",
            html: !1,
            live: !1,
            offset: 0,
            opacity: .8,
            title: "title",
            trigger: "hover"
        }, t.fn.tipsy.revalidate = function() {
            t(".tipsy").each(function() {
                var e = t.data(this, "tipsy-pointee");
                e && i(e) || t(this).remove()
            })
        }, t.fn.tipsy.elementOptions = function(e, i) {
            return t.metadata ? t.extend({}, i, t(e).metadata()) : i
        }, t.fn.tipsy.autoNS = function() {
            return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
        }, t.fn.tipsy.autoWE = function() {
            return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
        }, t.fn.tipsy.autoBounds = function(e, i) {
            return function() {
                var o = {
                        ns: i[0],
                        ew: i.length > 1 ? i[1] : !1
                    },
                    n = t(document).scrollTop() + e,
                    s = t(document).scrollLeft() + e,
                    a = t(this);
                return a.offset().top < n && (o.ns = "n"), a.offset().left < s && (o.ew = "w"), t(window).width() + t(document).scrollLeft() - a.offset().left < e && (o.ew = "e"), t(window).height() + t(document).scrollTop() - a.offset().top < e && (o.ns = "s"), o.ns + (o.ew ? o.ew : "")
            }
        }
    }(jQuery), ! function($) {
        function t() {
            return url = location.href, hashtag = -1 !== url.indexOf("#prettyPhoto") ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)) : !1
        }

        function e() {
            "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
        }

        function i() {
            -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
        }

        function o(t, e) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var i = "[\\?&]" + t + "=([^&#]*)",
                o = new RegExp(i),
                n = o.exec(e);
            return null == n ? "" : n[1]
        }
        $.prettyPhoto = {
            version: "3.1.4"
        }, $.fn.prettyPhoto = function(n) {
            function s() {
                $(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (x / 2 - y.containerHeight / 2), 0 > projectedTop && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                    height: y.contentHeight,
                    width: y.contentWidth
                }, settings.animation_speed), $pp_pic_holder.animate({
                    top: projectedTop,
                    left: k / 2 - y.containerWidth / 2 < 0 ? 0 : k / 2 - y.containerWidth / 2,
                    width: y.containerWidth
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(y.height).width(y.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (y.resized ? $("a.pp_expand,a.pp_contract").show() : $("a.pp_expand").hide()), !settings.autoplay_slideshow || P || _ || $.prettyPhoto.startSlideshow(), settings.changepicturecallback(), _ = !0
                }), f(), n.ajaxcallback()
            }

            function a(t) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    $(".pp_loaderIcon").show(), t()
                })
            }

            function r(t) {
                t > 1 ? $(".pp_nav").show() : $(".pp_nav").hide()
            }

            function l(t, e) {
                if (resized = !1, p(t, e), imageWidth = t, imageHeight = e, (C > k || A > x) && doresize && settings.allow_resize && !v) {
                    for (resized = !0, fitting = !1; !fitting;) C > k ? (imageWidth = k - 200, imageHeight = e / t * imageWidth) : A > x ? (imageHeight = x - 200, imageWidth = t / e * imageHeight) : fitting = !0, A = imageHeight, C = imageWidth;
                    p(imageWidth, imageHeight), (C > k || A > x) && l(C, A)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(A),
                    containerWidth: Math.floor(C) + 2 * settings.horizontal_padding,
                    contentHeight: Math.floor(w),
                    contentWidth: Math.floor(b),
                    resized: resized
                }
            }

            function p(t, e) {
                t = parseFloat(t), e = parseFloat(e), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo($("body")).css({
                    position: "absolute",
                    top: -1e4
                }), detailsHeight += $pp_details.height(), detailsHeight = 34 >= detailsHeight ? 36 : detailsHeight, $.browser.msie && 7 == $.browser.version && (detailsHeight += 8), $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo($("body")).css({
                    position: "absolute",
                    top: -1e4
                }), titleHeight += $pp_title.height(), $pp_title.remove(), w = e + detailsHeight, b = t, A = w + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), C = t
            }

            function h(t) {
                return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
            }

            function c() {
                if (doresize && "undefined" != typeof $pp_pic_holder) {
                    if (scroll_pos = d(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = x / 2 + scroll_pos.scrollTop - contentHeight / 2, 0 > projectedTop && (projectedTop = 0), contentHeight > x) return;
                    $pp_pic_holder.css({
                        top: projectedTop,
                        left: k / 2 + scroll_pos.scrollLeft - contentwidth / 2
                    })
                }
            }

            function d() {
                return self.pageYOffset ? {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                } : document.documentElement && document.documentElement.scrollTop ? {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                } : document.body ? {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                } : void 0
            }

            function u() {
                x = $(window).height(), k = $(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height($(document).height()).width(k)
            }

            function f() {
                isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) && settings.ie6_fallback && (!$.browser.msie || 6 != parseInt($.browser.version)) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((y.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, $.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }

            function m(t) {
                if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), $("body").append(settings.markup), $pp_pic_holder = $(".pp_pic_holder"), $ppt = $(".ppt"), $pp_overlay = $("div.pp_overlay"), isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0, toInject = "";
                    for (var e = 0; e < pp_images.length; e++) pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[e]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = $(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                        return $.prettyPhoto.changeGalleryPage("next"), $.prettyPhoto.stopSlideshow(), !1
                    }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                        return $.prettyPhoto.changeGalleryPage("previous"), $.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                        $(this).find("a").click(function() {
                            return $.prettyPhoto.changePage(t), $.prettyPhoto.stopSlideshow(), !1
                        })
                    })
                }
                settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    return $.prettyPhoto.startSlideshow(), !1
                })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                    opacity: 0,
                    height: $(document).height(),
                    width: $(window).width()
                }).bind("click", function() {
                    settings.modal || $.prettyPhoto.close()
                }), $("a.pp_close").bind("click", function() {
                    return $.prettyPhoto.close(), !1
                }), settings.allow_expand && $("a.pp_expand").bind("click", function(t) {
                    return $(this).hasClass("pp_expand") ? ($(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : ($(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), a(function() {
                        $.prettyPhoto.open()
                    }), !1
                }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    return $.prettyPhoto.changePage("previous"), $.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    return $.prettyPhoto.changePage("next"), $.prettyPhoto.stopSlideshow(), !1
                }), c()
            }
            n = jQuery.extend({
                hook: "rel",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 5e3,
                autoplay_slideshow: !1,
                opacity: .8,
                show_title: !0,
                allow_resize: !0,
                allow_expand: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                overlay_gallery_max: 30,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            }, n);
            var g = this,
                v = !1,
                y, _, w, b, A, C, x = $(window).height(),
                k = $(window).width(),
                P;
            return doresize = !0, scroll_pos = d(), $(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                c(), u()
            }), n.keyboard_shortcuts && $(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
                if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                    case 37:
                        $.prettyPhoto.changePage("previous"), t.preventDefault();
                        break;
                    case 39:
                        $.prettyPhoto.changePage("next"), t.preventDefault();
                        break;
                    case 27:
                        settings.modal || $.prettyPhoto.close(), t.preventDefault()
                }
            }), $.prettyPhoto.initialize = function() {
                return settings = n, "pp_default" == settings.theme && (settings.horizontal_padding = 16), settings.ie6_fallback && $.browser.msie && 6 == parseInt($.browser.version) && (settings.theme = "light_square"), theRel = $(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).attr("href") : void 0
                }) : $.makeArray($(this).attr("href")), pp_titles = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).find("img").attr("alt") ? $(t).find("img").attr("alt") : "" : void 0
                }) : $.makeArray($(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(g, function(t, e) {
                    return -1 != $(t).attr(settings.hook).indexOf(theRel) ? $(t).attr("title") ? $(t).attr("title") : "" : void 0
                }) : $.makeArray($(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray($(this).attr("href"), pp_images), rel_index = isSet ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this)), m(this), settings.allow_resize && $(window).bind("scroll.prettyphoto", function() {
                    c()
                }), $.prettyPhoto.open(), !1
            }, $.prettyPhoto.open = function(t) {
                return "undefined" == typeof settings && (settings = n, $.browser.msie && 6 == $.browser.version && (settings.theme = "light_square"), pp_images = $.makeArray(arguments[0]), pp_titles = $.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = $.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, m(t.target)), $.browser.msie && 6 == $.browser.version && $("select").css("visibility", "hidden"), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r($(pp_images).size()), $(".pp_loaderIcon").show(), settings.deeplinking && e(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + $(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), v = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat($(window).height() * parseFloat(movie_height) / 100 - 150), v = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat($(window).width() * parseFloat(movie_width) / 100 - 150), v = !0), $pp_pic_holder.fadeIn(function() {
                    switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < $(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                y = l(imgPreloader.width, imgPreloader.height), s()
                            }, imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), $.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            y = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            y = l(movie_width, movie_height), movie_id = pp_images[set_position];
                            var t = /http:\/\/(www\.)?vimeo.com\/(\d+)/,
                                e = movie_id.match(t);
                            movie = "http://player.vimeo.com/video/" + e[2] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = y.width + "/embed/?moog_width=" + y.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, y.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            y = l(movie_width, movie_height), y.height += 15, y.contentHeight += 15, y.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            y = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            y = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, y = l(movie_width, movie_height), doresize = !0, skipInjection = !0, $.get(pp_images[set_position], function(t) {
                                toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                            });
                            break;
                        case "custom":
                            y = l(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show(), doresize = !1, y = l($(myClone).width(), $(myClone).height()), doresize = !0, $(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html())
                    }
                    imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
                }), !1
            }, $.prettyPhoto.changePage = function(t) {
                currentGalleryPage = 0, "previous" == t ? (set_position--, 0 > set_position && (set_position = $(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > $(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && $(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), a(function() {
                    $.prettyPhoto.open()
                })
            }, $.prettyPhoto.changeGalleryPage = function(t) {
                "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, 0 > currentGalleryPage && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }, $.prettyPhoto.startSlideshow = function() {
                "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    return $.prettyPhoto.stopSlideshow(), !1
                }), P = setInterval($.prettyPhoto.startSlideshow, settings.slideshow)) : $.prettyPhoto.changePage("next")
            }, $.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    return $.prettyPhoto.startSlideshow(), !1
                }), clearInterval(P), P = void 0
            }, $.prettyPhoto.close = function() {
                $pp_overlay.is(":animated") || ($.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), $("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    $(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                    $.browser.msie && 6 == $.browser.version && $("select").css("visibility", "visible"), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), $(this).remove(), $(window).unbind("scroll.prettyphoto"), i(), settings.callback(), doresize = !0, _ = !1, delete settings
                }))
            }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                $("a[" + n.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", $.prettyPhoto.initialize)
        }
    }(jQuery);
var pp_alreadyInitialized = !1;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, o, n) {
            return jQuery.easing[jQuery.easing.def](t, e, i, o, n)
        },
        easeInQuad: function(t, e, i, o, n) {
            return o * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, o, n) {
            return -o * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e + i : -o / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, o, n) {
            return o * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, o, n) {
            return -o * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e + i : -o / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e * e + i : o / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, o, n) {
            return -o * Math.cos(e / n * (Math.PI / 2)) + o + i
        },
        easeOutSine: function(t, e, i, o, n) {
            return o * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, o, n) {
            return -o / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, o, n) {
            return 0 == e ? i : o * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, o, n) {
            return e == n ? i + o : o * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, o, n) {
            return 0 == e ? i : e == n ? i + o : (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + i : o / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, o, n) {
            return -o * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, o, n) {
            return o * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + i : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a)) + i
        },
        easeOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - s) * Math.PI / a) + o + i
        },
        easeInOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + o;
            if (a || (a = .3 * n * 1.5), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) * .5 + o + i
        },
        easeInBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * (e /= n) * e * ((s + 1) * e - s) + i
        },
        easeOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + i
        },
        easeInOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), (e /= n / 2) < 1 ? o / 2 * e * e * (((s *= 1.525) + 1) * e - s) + i : o / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
        },
        easeInBounce: function(t, e, i, o, n) {
            return o - jQuery.easing.easeOutBounce(t, n - e, 0, o, n) + i
        },
        easeOutBounce: function(t, e, i, o, n) {
            return (e /= n) < 1 / 2.75 ? 7.5625 * o * e * e + i : 2 / 2.75 > e ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, o, n) {
            return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, o, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, o, n) + .5 * o + i
        }
    }), + function($) {
        "use strict";
        var t = function(e, i) {
            this.$element = $(e), this.options = $.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, t.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = $.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.$parent && this.$parent.find("> .panel > .in");
                    if (e && e.length) {
                        var i = e.data("bs.collapse");
                        if (i && i.transitioning) return;
                        e.collapse("hide"), i || e.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                    var n = function() {
                        this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!$.support.transition) return n.call(this);
                    var s = $.camelCase(["scroll", o].join("-"));
                    this.$element.one($.support.transition.end, $.proxy(n, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
                }
            }
        }, t.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = $.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.dimension();
                    this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return $.support.transition ? void this.$element[e](0).one($.support.transition.end, $.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                }
            }
        }, t.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var e = $.fn.collapse;
        $.fn.collapse = function(e) {
            return this.each(function() {
                var i = $(this),
                    o = i.data("bs.collapse"),
                    n = $.extend({}, t.DEFAULTS, i.data(), "object" == typeof e && e);
                o || i.data("bs.collapse", o = new t(this, n)), "string" == typeof e && o[e]()
            })
        }, $.fn.collapse.Constructor = t, $.fn.collapse.noConflict = function() {
            return $.fn.collapse = e, this
        }, $(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var e = $(this),
                i, o = e.attr("data-target") || t.preventDefault() || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
                n = $(o),
                s = n.data("bs.collapse"),
                a = s ? "toggle" : e.data(),
                r = e.attr("data-parent"),
                l = r && $(r);
            s && s.transitioning || (l && l.find('[data-toggle=collapse][data-parent="' + r + '"]').not(e).addClass("collapsed"), e[n.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), n.collapse(a)
        })
    }(window.jQuery), String.prototype.rightChars = function(t) {
        return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t)
    },
    function($) {
        var t = {
                highlightSpeed: 20,
                typeSpeed: 100,
                clearDelay: 500,
                typeDelay: 200,
                clearOnHighlight: !0,
                typerDataAttr: "data-typer-targets",
                typerInterval: 3e3
            },
            e, i, o, n, s, a, r, l, p, h, c, d, u, f = 0;
        s = function(t, e) {
            return t = "#444", $("<span></span>").css("color", t).css("background-color", typerColor)
        }, p = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, l = function(t) {
            t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"])
        }, n = function(t) {
            var e = t.data("text"),
                i = t.data("oldLeft"),
                o = t.data("oldRight");
            return e && 0 !== e.length ? (t.text(i + e.charAt(0) + o).data({
                oldLeft: i + e.charAt(0),
                text: e.substring(1)
            }), void setTimeout(function() {
                n(t)
            }, d())) : void l(t)
        }, i = function(t) {
            t.find("span").remove(), setTimeout(function() {
                n(t)
            }, r())
        }, e = function(t) {
            var o = t.data("highlightPosition"),
                n, r, l;
            return p(o) || (o = t.data("rightStop") + 1), o <= t.data("leftStop") ? void setTimeout(function() {
                i(t)
            }, a()) : (n = t.text().substring(0, o - 1), r = t.text().substring(o - 1, t.data("rightStop") + 1), l = t.text().substring(t.data("rightStop") + 1), t.html(n).append(s(t.data("black"), t.data("primaryColor")).append(r)).append(l), t.data("highlightPosition", o - 1), void setTimeout(function() {
                return e(t)
            }, c()))
        }, h = function(t) {
            var e;
            if (!t.data("typing")) {
                try {
                    e = JSON.parse(t.attr($.typer.options.typerDataAttr)).targets
                } catch (i) {}
                "undefined" == typeof e && (e = $.map(t.attr($.typer.options.typerDataAttr).split(","), function(t) {
                    return $.trim(t)
                })), f == e.length && (f = 0), t.typeTo(e[f]), f++
            }
        }, $.typer = function() {
            return {
                options: t
            }
        }(), $.extend($.typer, {
            options: t
        }), $.fn.typer = function() {
            var t = $(this);
            return t.each(function() {
                var t = $(this);
                "undefined" != typeof t.attr($.typer.options.typerDataAttr) && (h(t), setInterval(function() {
                    h(t)
                }, u()))
            })
        }, $.fn.typeTo = function(t) {
            var i = $(this),
                o = i.text(),
                n = 0,
                s = 0;
            if (o === t) return console.log("Our strings our equal, nothing to type"), i;
            if (o !== i.html()) return console.error("Typer does not work on elements with child elements."), i;
            for (i.data("typing", !0); o.charAt(n) === t.charAt(n);) n++;
            for (; o.rightChars(s) === t.rightChars(s);) s++;
            return t = t.substring(n, t.length - s + 1), i.data({
                oldLeft: o.substring(0, n),
                oldRight: o.rightChars(s - 1),
                leftStop: n,
                rightStop: o.length - s,
                primaryColor: i.css("color"),
                backgroundColor: i.css("background-color"),
                text: t
            }), e(i), i
        }, c = function() {
            return $.typer.options.highlightSpeed
        }, d = function() {
            return $.typer.options.typeSpeed
        }, a = function() {
            return $.typer.options.clearDelay
        }, r = function() {
            return $.typer.options.typeDelay
        }, u = function() {
            return $.typer.options.typerInterval
        }
    }(jQuery),
    function(t, e, $, i) {
        "use strict";
        var o, n, s, a, r, l, p, h, c, d, u, f, m, g, v, y, _, w, b, A, C, x, k, P, S, I, j, T = [].indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
        C = "notify", A = C + "js", s = C + "!blank", k = {
            t: "top",
            m: "middle",
            b: "bottom",
            l: "left",
            c: "center",
            r: "right"
        }, m = ["l", "c", "r"], j = ["t", "m", "b"], _ = ["t", "b", "l", "r"], w = {
            t: "b",
            m: null,
            b: "t",
            l: "r",
            c: null,
            r: "l"
        }, b = function(t) {
            var e;
            return e = [], $.each(t.split(/\W+/), function(t, i) {
                var o;
                return o = i.toLowerCase().charAt(0), k[o] ? e.push(o) : void 0
            }), e
        }, I = {}, a = {
            name: "core",
            html: '<div class="' + A + '-wrapper">\n  <div class="' + A + '-arrow"></div>\n  <div class="' + A + '-container"></div>\n</div>',
            css: "." + A + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + A + "-corner ." + A + "-wrapper,\n." + A + "-corner ." + A + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + A + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + A + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n}\n\n." + A + "-hidable {\n  cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n  position: relative;\n}\n\n." + A + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"
        }, S = {
            "border-radius": ["-webkit-", "-moz-"]
        }, u = function(t) {
            return I[t]
        }, n = function(e, i) {
            var o, n, s, a;
            if (!e) throw "Missing Style name";
            if (!i) throw "Missing Style definition";
            if (!i.html) throw "Missing Style HTML";
            return (null != (a = I[e]) ? a.cssElem : void 0) && (t.console && console.warn("" + C + ": overwriting style '" + e + "'"), I[e].cssElem.remove()), i.name = e, I[e] = i, o = "", i.classes && $.each(i.classes, function(t, e) {
                return o += "." + A + "-" + i.name + "-" + t + " {\n", $.each(e, function(t, e) {
                    return S[t] && $.each(S[t], function(i, n) {
                        return o += "  " + n + t + ": " + e + ";\n"
                    }), o += "  " + t + ": " + e + ";\n"
                }), o += "}\n"
            }), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = y(o), i.cssElem.attr("id", "notify-" + i.name)), s = {}, n = $(i.html), c("html", n, s), c("text", n, s), i.fields = s
        }, y = function(t) {
            var e;
            e = r("style"), e.attr("type", "text/css"), $("head").append(e);
            try {
                e.html(t)
            } catch (i) {
                e[0].styleSheet.cssText = t
            }
            return e
        }, c = function(t, e, i) {
            var o;
            return "html" !== t && (t = "text"), o = "data-notify-" + t, h(e, "[" + o + "]").each(function() {
                var e;
                return e = $(this).attr(o), e || (e = s), i[e] = t
            })
        }, h = function(t, e) {
            return t.is(e) ? t : t.find(e)
        }, x = {
            clickToHide: !0,
            autoHide: !0,
            autoHideDelay: 5e3,
            arrowShow: !0,
            arrowSize: 5,
            breakNewLines: !0,
            elementPosition: "bottom",
            globalPosition: "top right",
            style: "bootstrap",
            className: "error",
            showAnimation: "slideDown",
            showDuration: 400,
            hideAnimation: "slideUp",
            hideDuration: 200,
            gap: 5
        }, v = function(t, e) {
            var i;
            return i = function() {}, i.prototype = t, $.extend(!0, new i, e)
        }, l = function(t) {
            return $.extend(x, t)
        }, r = function(t) {
            return $("<" + t + "></" + t + ">")
        }, f = {}, d = function(t) {
            var e;
            return t.is("[type=radio]") && (e = t.parents("form:first").find("[type=radio]").filter(function(e, i) {
                return $(i).attr("name") === t.attr("name")
            }), t = e.first()), t
        }, g = function(t, e, o) {
            var n, s;
            if ("string" == typeof o) o = parseInt(o, 10);
            else if ("number" != typeof o) return;
            if (!isNaN(o)) return n = k[w[e.charAt(0)]], s = e, t[n] !== i && (e = k[n.charAt(0)], o = -o), t[e] === i ? t[e] = o : t[e] += o, null
        }, P = function(t, e, i) {
            if ("l" === t || "t" === t) return 0;
            if ("c" === t || "m" === t) return i / 2 - e / 2;
            if ("r" === t || "b" === t) return i - e;
            throw "Invalid alignment"
        }, p = function(t) {
            return p.e = p.e || r("div"), p.e.text(t).html()
        }, o = function() {
            function t(t, e, i) {
                "string" == typeof i && (i = {
                    className: i
                }), this.options = v(x, $.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = $(a.html), this.options.clickToHide && this.wrapper.addClass("" + A + "-hidable"), this.wrapper.data(A, this), this.arrow = this.wrapper.find("." + A + "-arrow"), this.container = this.wrapper.find("." + A + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = d(t), this.elem.data(A, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(e)
            }
            return t.prototype.loadHTML = function() {
                var t;
                return t = this.getStyle(), this.userContainer = $(t.html), this.userFields = t.fields
            }, t.prototype.show = function(t, e) {
                var i, o, n, s, a, r = this;
                if (o = function() {
                        return t || r.elem || r.destroy(), e ? e() : void 0
                    }, a = this.container.parent().parents(":hidden").length > 0, n = this.container.add(this.arrow), i = [], a && t) s = "show";
                else if (a && !t) s = "hide";
                else if (!a && t) s = this.options.showAnimation, i.push(this.options.showDuration);
                else {
                    if (a || t) return o();
                    s = this.options.hideAnimation, i.push(this.options.hideDuration)
                }
                return i.push(o), n[s].apply(n, i)
            }, t.prototype.setGlobalPosition = function() {
                var t, e, i, o, n, s, a, l;
                return l = this.getPosition(), a = l[0], s = l[1], n = k[a], t = k[s], o = a + "|" + s, e = f[o], e || (e = f[o] = r("div"), i = {}, i[n] = 0, "middle" === t ? i.top = "45%" : "center" === t ? i.left = "45%" : i[t] = 0, e.css(i).addClass("" + A + "-corner"), $("body").append(e)), e.prepend(this.wrapper)
            }, t.prototype.setElementPosition = function() {
                var t, e, i, o, n, s, a, r, l, p, h, c, d, u, f, v, y, b, A, C, x, S, I, z, M, Q, H, O, D;
                for (I = this.getPosition(), C = I[0], b = I[1], A = I[2], h = this.elem.position(), r = this.elem.outerHeight(), c = this.elem.outerWidth(), l = this.elem.innerHeight(), p = this.elem.innerWidth(), z = this.wrapper.position(), n = this.container.height(), s = this.container.width(), u = k[C], v = w[C], y = k[v], a = {}, a[y] = "b" === C ? r : "r" === C ? c : 0, g(a, "top", h.top - z.top), g(a, "left", h.left - z.left), D = ["top", "left"], M = 0, H = D.length; H > M; M++) x = D[M], f = parseInt(this.elem.css("margin-" + x), 10), f && g(a, x, f);
                if (d = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), g(a, y, d), this.options.arrowShow) {
                    for (i = this.options.arrowSize, e = $.extend({}, a), t = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white", Q = 0, O = _.length; O > Q; Q++) x = _[Q], S = k[x], x !== v && (o = S === u ? t : "transparent", e["border-" + S] = "" + i + "px solid " + o);
                    g(a, k[v], i), T.call(_, b) >= 0 && g(e, k[b], 2 * i)
                } else this.arrow.hide();
                return T.call(j, C) >= 0 ? (g(a, "left", P(b, s, c)), e && g(e, "left", P(b, i, p))) : T.call(m, C) >= 0 && (g(a, "top", P(b, n, r)), e && g(e, "top", P(b, i, l))), this.container.is(":visible") && (a.display = "block"), this.container.removeAttr("style").css(a), e ? this.arrow.removeAttr("style").css(e) : void 0
            }, t.prototype.getPosition = function() {
                var t, e, i, o, n, s, a, r;
                if (e = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), t = b(e), 0 === t.length && (t[0] = "b"), i = t[0], T.call(_, i) < 0) throw "Must be one of [" + _ + "]";
                return (1 === t.length || (o = t[0], T.call(j, o) >= 0 && (n = t[1], T.call(m, n) < 0)) || (s = t[0], T.call(m, s) >= 0 && (a = t[1], T.call(j, a) < 0))) && (t[1] = (r = t[0], T.call(m, r) >= 0 ? "m" : "l")), 2 === t.length && (t[2] = t[1]), t
            }, t.prototype.getStyle = function(t) {
                var e;
                if (t || (t = this.options.style), t || (t = "default"), e = I[t], !e) throw "Missing style: " + t;
                return e
            }, t.prototype.updateClasses = function() {
                var t, e;
                return t = ["base"], $.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), e = this.getStyle(), t = $.map(t, function(t) {
                    return "" + A + "-" + e.name + "-" + t
                }).join(" "), this.userContainer.attr("class", t)
            }, t.prototype.run = function(t, e) {
                var i, o, n, a, r, l = this;
                if ($.isPlainObject(e) ? $.extend(this.options, e) : "string" === $.type(e) && (this.options.className = e), this.container && !t) return void this.show(!1);
                if (this.container || t) {
                    o = {}, $.isPlainObject(t) ? o = t : o[s] = t;
                    for (n in o) i = o[n], a = this.userFields[n], a && ("text" === a && (i = p(i), this.options.breakNewLines && (i = i.replace(/\n/g, "<br/>"))), r = n === s ? "" : "=" + n, h(this.userContainer, "[data-notify-" + a + r + "]").html(i));
                    return this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide ? (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(function() {
                        return l.show(!1)
                    }, this.options.autoHideDelay)) : void 0
                }
            }, t.prototype.destroy = function() {
                return this.wrapper.remove()
            }, t
        }(), $[C] = function(t, e, i) {
            return t && t.nodeName || t.jquery ? $(t)[C](e, i) : (i = e, e = t, new o(null, e, i)), t
        }, $.fn[C] = function(t, e) {
            return $(this).each(function() {
                var i;
                return i = d($(this)).data(A), i ? i.run(t, e) : new o($(this), t, e)
            }), this
        }, $.extend($[C], {
            defaults: l,
            addStyle: n,
            pluginOptions: x,
            getStyle: u,
            insertCSS: y
        }), $(function() {
            return y(a.css).attr("id", "core-notify"), $(e).on("click", "." + A + "-hidable", function(t) {
                return $(this).trigger("notify-hide")
            }), $(e).on("notify-hide", "." + A + "-wrapper", function(t) {
                var e;
                return null != (e = $(this).data(A)) ? e.show(!1) : void 0
            })
        })
    }(window, document, jQuery), $.notify.addStyle("bootstrap", {
        html: "<div>\n<span data-notify-text></span>\n</div>",
        classes: {
            base: {
                "font-weight": "bold",
                padding: "8px 15px 8px 14px",
                "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                "background-color": "#fcf8e3",
                border: "1px solid #fbeed5",
                "border-radius": "4px",
                "white-space": "nowrap",
                "padding-left": "25px",
                "background-repeat": "no-repeat",
                "background-position": "3px 7px"
            },
            error: {
                color: "#B94A48",
                "background-color": "#F2DEDE",
                "border-color": "#EED3D7",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
            },
            success: {
                color: "#468847",
                "background-color": "#DFF0D8",
                "border-color": "#D6E9C6",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
            },
            info: {
                color: "#3A87AD",
                "background-color": "#D9EDF7",
                "border-color": "#BCE8F1",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
            },
            warn: {
                color: "#C09853",
                "background-color": "#FCF8E3",
                "border-color": "#FBEED5",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
            }
        }
    }), jQuery(document).ready(function() {
        function t() {
            var t = jQuery("#main-content").width(),
                e = 3;
            return 420 > t ? e = 1 : t >= 420 && 990 > t ? e = 2 : t >= 990 && 1320 > t ? e = 3 : t >= 1320 && 2100 > t ? e = 4 : t >= 2100 && (e = 5), e
        }

        function e() {
            var e = t();
            s = jQuery(window).width() < 768 ? 0 : n;
            var i = jQuery("#main-content").width(),
                o = i / e;
            o = Math.floor(o), jQuery(".portfolio-item").each(function(t) {
                jQuery(this).css({
                    width: o + "px"
                })
            })
        }

        function i() {
            var t = jQuery(window).width();
            e(), o.isotope("reLayout", function() {
                jQuery(window).width() != t && setTimeout(function() {
                    i()
                }, 10)
            })
        }
        var o = jQuery("#portfolio-grid");
        jQuery("html, document, body").scrollTop(0), jQuery("#portfolio-grid").hide(), jQuery("body").append('<div id="preloader"></div>'), jQuery("#close-post").live("click", function() {
            jQuery("#portfolio-content").slideUp(300, function() {
                jQuery("#portfolio-content").html("")
            })
        }), jQuery(".portfolio-item a, #prev-post, #next-post").live("click", function() {
            jQuery("#portfolio-content").html("").fadeOut(200), jQuery(".loading-folio").fadeIn(200);
            var t = jQuery(this).attr("rel");
            jQuery.post(tie.ajaxurl, {
                action: "tie_get_folio",
                id: t
            }, function(t) {
                var e = jQuery(t);
                e.fitVids(), jQuery("body").animate({
                    scrollTop: "0px"
                }, 1e3), jQuery("#portfolio-content").append(e), jQuery(".loading-folio").fadeOut(200, function() {
                    jQuery("#portfolio-content").fadeIn(500)
                })
            }, "html")
        }), jQuery(window).load(function() {
            e(), o.isotope({
                itemSelector: ".portfolio-item",
                resizable: !1,
                animationOptions: {
                    duration: 400,
                    easing: "swing",
                    queue: !1
                },
                masonry: {}
            }), i(), jQuery("#preloader").fadeOut("fast", function() {
                jQuery(this).remove(), jQuery("#portfolio-grid").fadeIn("slow"), jQuery("#portfolio-grid").isotope();
                var t = window.location.hash.match(/\d+$/);
                t = parseInt(t), t && (jQuery("#portfolio-content").html("").fadeOut(200), jQuery(".loading-folio").fadeIn(200), jQuery.post(tie.ajaxurl, {
                    action: "tie_get_folio",
                    id: t
                }, function(t) {
                    var e = jQuery(t);
                    e.fitVids(), jQuery("body").animate({
                        scrollTop: "0px"
                    }, 1e3), jQuery("#portfolio-content").append(e), jQuery(".loading-folio").fadeOut(200, function() {
                        jQuery("#portfolio-content").fadeIn(500)
                    })
                }, "html"))
            })
        }), jQuery("#filters a").click(function() {
            var t = jQuery(this).attr("data-filter");
            return jQuery("#filters li").removeClass("current"), jQuery(this).parent().addClass("current"), e(), o.isotope({
                filter: t
            }), !1
        });
        var n = 238,
            s = n;
        jQuery(window).on("debouncedresize", function(t) {
            i()
        })
    }), jQuery(function() {
        jQuery(".da-thumbs > .portfolio-item").hoverdir()
    }),
    function(t, e) {
        t.HoverDir = function(e, i) {
            this.$el = t(i), this._init(e)
        }, t.HoverDir.defaults = {
            hoverDelay: 0,
            reverse: !1
        }, t.HoverDir.prototype = {
            _init: function(e) {
                this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this._loadEvents()
            },
            _loadEvents: function() {
                var e = this;
                this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(i) {
                    var o = t(this),
                        n = i.type,
                        s = o.find("div"),
                        a = e._getDir(o, {
                            x: i.pageX,
                            y: i.pageY
                        }),
                        r = e._getClasses(a);
                    s.removeClass(), "mouseenter" === n ? (s.hide().addClass(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function() {
                        s.show(0, function() {
                            t(this).addClass("da-animate").addClass(r.to)
                        })
                    }, e.options.hoverDelay)) : (s.addClass("da-animate"), clearTimeout(e.tmhover), s.addClass(r.from))
                })
            },
            _getDir: function(t, e) {
                var i = t.width(),
                    o = t.height(),
                    n = (e.x - t.offset().left - i / 2) * (i > o ? o / i : 1),
                    s = (e.y - t.offset().top - o / 2) * (o > i ? i / o : 1),
                    a = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
                return a
            },
            _getClasses: function(t) {
                var e, i;
                switch (t) {
                    case 0:
                        e = this.options.reverse ? "da-slideFromBottom" : "da-slideFromTop", i = "da-slideTop";
                        break;
                    case 1:
                        e = this.options.reverse ? "da-slideFromLeft" : "da-slideFromRight", i = "da-slideLeft";
                        break;
                    case 2:
                        e = this.options.reverse ? "da-slideFromTop" : "da-slideFromBottom", i = "da-slideTop";
                        break;
                    case 3:
                        e = this.options.reverse ? "da-slideFromRight" : "da-slideFromLeft", i = "da-slideLeft"
                }
                return {
                    from: e,
                    to: i
                }
            }
        };
        var i = function(t) {
            this.console && console.error(t)
        };
        t.fn.hoverdir = function(e) {
            if ("string" == typeof e) {
                var o = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var n = t.data(this, "hoverdir");
                    return n ? t.isFunction(n[e]) && "_" !== e.charAt(0) ? void n[e].apply(n, o) : void i("no such method '" + e + "' for hoverdir instance") : void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function() {
                var i = t.data(this, "hoverdir");
                i || t.data(this, "hoverdir", new t.HoverDir(e, this))
            });
            return this
        }
    }(jQuery);