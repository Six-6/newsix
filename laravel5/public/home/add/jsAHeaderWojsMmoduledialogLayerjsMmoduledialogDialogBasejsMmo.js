M.closure(function (d) {
    $("._j_hoverclass").hover(function (g) {
        var h = $(g.currentTarget);
        h.addClass(h.data("hoverclass"))
    }, function (g) {
        var h = $(g.currentTarget);
        h.removeClass(h.data("hoverclass"))
    });
    M.Event.on("afterDaka", function () {
        $("#_j_dakabtn").addClass("daka_complete")
    });
    var f = 0, e = $("#head-new-msg"), c = $("#head-msg-box");
    M.Event.on("get new msg", function (g) {
        if (g.msg || f > 0) {
            e.html(g.msg);
            c.html(g.menu)
        }
    });
    e.on("click", "p a", function (g) {
        M.Event.fire("update msg")
    });
    function b() {
        e.remove();
        $.ajax({
            url: "http://" + Env.WWW_HOST + "/ajax/ajax_msg.php",
            dataType: "jsonp",
            data: {a: "ignore", from: "1"},
            success: function (g) {
                M.Event.fire("update msg")
            }
        })
    }

    window.close_msg_tips = b;
    e.delegate("._j_popcloser", "click", function (g) {
        g.preventDefault();
        var h = $(g.currentTarget);
        if (h.data("popclass")) {
            h.closest("." + h.data("popclass")).hide()
        }
    });
    function a() {
        f = 0;
        e.find("p a").each(function (g, i) {
            var h = $(i);
            f += Number(h.data("num"))
        })
    }

    a()
});
M.define("dialog/Layer", function (a) {
    var g = 0, f = 550, d = (function () {
        return $.browser.msie && parseInt($.browser.version, 10) == 7
    }()), c = (function () {
        return $.browser.msie && parseInt($.browser.version, 10) < 7
    }());

    function b() {
        return g++
    }

    function e(h) {
        this.opacity = 0.8;
        this.background = "#fff";
        this.impl = "Dialog";
        this.fixed = true;
        M.mix(this, h);
        this.id = "_j_layer_" + b();
        this.stacks = [];
        this.activeStackId = null;
        this.overflow = false;
        this.changeFixed = false;
        e.instances[this.id] = this;
        if (!e[this.impl]) {
            e[this.impl] = []
        }
        e[this.impl].push(this.id);
        this.init()
    }

    e.prototype = {
        init: function () {
            this._createPanel()
        }, _createPanel: function () {
            f++;
            var h = {
                position: (!c && this.fixed) ? "fixed" : "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0
            }, j = M.mix({}, h, {"z-index": f, display: "none"}), k = M.mix({}, h, {
                position: !c ? "fixed" : "absolute",
                background: this.background,
                opacity: this.opacity,
                "z-index": -1
            }), i = M.mix({}, h, {"z-index": 0}, (!c && this.fixed) ? {
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            } : {overflow: "visible"});
            this._panel = $('<div id="' + this.id + '" class="layer _j_layer">                                <div class="layer_mask _j_mask"></div>                                <div class="layer_content _j_content"></div>                            </div>').css(j).appendTo("body");
            this._mask = this._panel.children("._j_mask").css(k);
            this._content = this._panel.children("._j_content").css(i)
        }, setZIndex: function (h) {
            f = h;
            this._panel.css("z-index", f)
        }, getZIndex: function () {
            return +this._panel.css("z-index")
        }, toFront: function () {
            this.setZIndex(f + 1)
        }, setFixed: function (h) {
            h = !!h;
            if (this.fixed != h) {
                this.changeFixed = true;
                this.fixed = h;
                if (!c && this.fixed) {
                    this._panel.css("position", "fixed");
                    this._content.css({position: "fixed", "overflow-x": "hidden", "overflow-y": "hidden"})
                } else {
                    this._panel.css("position", "absolute");
                    this._content.css({position: "absolute", "overflow-x": "", "overflow-y": "", overflow: "visible"})
                }
            } else {
                this.changeFixed = false
            }
        }, newStack: function (i) {
            var h = $(i).appendTo(this._content);
            this.stacks.push(h);
            return this.stacks.length - 1
        }, getStack: function (h) {
            return this.stacks[h]
        }, getActiveStack: function () {
            return this.stacks[this.activeStackId]
        }, setActiveStack: function (h) {
            this.activeStackId = h
        }, getPanel: function () {
            return this._panel
        }, getMask: function () {
            return this._mask
        }, getContent: function () {
            return this._content
        }, show: function (j) {
            var i = this;
            if (this.visible) {
                typeof j === "function" && j();
                return
            }
            e.activeId = this.id;
            this.visible = true;
            if (c) {
                var h = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;
                this._panel.css("height", h);
                this._mask.css("height", h)
            }
            this._panel.fadeIn(200, function () {
                typeof j === "function" && j()
            })
        }, hide: function (i) {
            var h = this;
            if (!this.visible) {
                typeof i === "function" && i();
                return
            }
            this.visible = false;
            if (c) {
                this._panel.css("height", "");
                this._mask.css("height", "")
            }
            this._panel.fadeOut(200, function () {
                typeof i === "function" && i();
                h._recoverTopScroller()
            })
        }, setOverFlow: function (h) {
            this.overflow = h;
            if (h) {
                if (!c && this.fixed) {
                    this._hideTopScroller();
                    this._content.css("overflow-y", "auto")
                }
            } else {
                if (!c && this.fixed) {
                    this._content.css("overflow-y", "hidden")
                }
            }
        }, _hideTopScroller: function () {
            if (d) {
                $("html").css("overflow", "hidden")
            } else {
                if (!c) {
                    $("body").css("overflow", "hidden")
                } else {
                    $("body").css("overflow-x", "hidden");
                    this._panel.height($(document).height() + 20)
                }
            }
        }, _recoverTopScroller: function () {
            if (d) {
                $("html").css("overflow", "")
            } else {
                if (!c) {
                    $("body").css("overflow", "")
                } else {
                    $("body").css("overflow-x", "")
                }
            }
        }, destroy: function () {
            this.hide($.proxy(function () {
                this._panel && this._panel.remove();
                this._panel = null;
                if (M.indexOf(e[this.impl], this.id) != -1) {
                    e[this.impl].splice(M.indexOf(e[this.impl], this.id), 1)
                }
                delete e.instances[this.id]
            }, this))
        }, clear: function () {
            this._content.empty();
            this.stacks = [];
            this.activeStackId = null
        }
    };
    e.instances = {};
    e.activeId = null;
    e.getInstance = function (h) {
        return e.instances[h]
    };
    e.getActive = function (h) {
        var i = e.getInstance(e.activeId);
        if (h && i) {
            i = i.impl === h ? i : null
        }
        return i
    };
    e.getImplInstance = function (i) {
        var h = e.getActive(i);
        if (!h && M.is(e[i], "Array") && e[i].length) {
            h = e.getInstance(e[i][e[i].length - 1])
        }
        return h
    };
    e.closeActive = function () {
        var h = e.getActive();
        if (h && h.getActiveStack()) {
            h.getActiveStack().trigger("close")
        }
    };
    $(document).keyup(function (h) {
        if (h.keyCode == 27) {
            e.closeActive()
        }
    });
    $(document).unload(function () {
        M.forEach(e.instances, function () {
            e.destroy()
        })
    });
    return e
});
M.define("dialog/DialogBase", function (b) {
    var e = b("dialog/Layer"), a = M.Event, d = (function () {
        return $.browser.msie && parseInt($.browser.version, 10) < 7
    }());

    function c(f) {
        this.newLayer = false;
        this.width = "";
        this.height = "";
        this.background = "#000";
        this.panelBackground = "#fff";
        this.bgOpacity = 0.7;
        this.stackable = true;
        this.fixed = true;
        this.reposition = false;
        this.autoPosition = true;
        this.minTopOffset = 20;
        this.layerZIndex = -1;
        this.impl = "Dialog";
        M.mix(this, f);
        this.visible = false;
        this.destroyed = false;
        this.positioned = false;
        this.resizeTimer = 0;
        this.init()
    }

    c.prototype = {
        tpl: "<div />", init: function () {
            this._createDialog();
            this._bindEvents()
        }, _createDialog: function () {
            this._panel = $(this.tpl).css({
                position: "absolute",
                opacity: 0,
                display: "none",
                background: this.panelBackground,
                "z-index": 0
            });
            this.setRect({width: this.width, height: this.height});
            this._layer = !this.newLayer && e.getImplInstance(this.impl) || new e({impl: this.impl});
            if (this.layerZIndex >= 0) {
                this._layer.setZIndex(this.layerZIndex)
            }
            this._layer.setFixed(this.fixed);
            this._layer.getMask().css({background: this.background, opacity: this.bgOpacity});
            this._stackId = this._layer.newStack(this._panel);
            this.setPanelContent()
        }, _bindEvents: function () {
            var f = this;
            $(window).resize($.proxy(this.resizePosition, this));
            M.Event(this).on("resize", $.proxy(this.resizePosition, this));
            this._panel.delegate("._j_close, a[data-dialog-button]", "click", function (g) {
                var h = $(g.currentTarget).attr("data-dialog-button");
                if (h == "hide") {
                    f.hide()
                } else {
                    f.close()
                }
                g.preventDefault()
            });
            this._panel.bind("close", function (g, h) {
                f.close(h)
            })
        }, resizePosition: function () {
            var f = this;
            clearTimeout(this.resizeTimer);
            if (f.visible && f.autoPosition) {
                this.resizeTimer = setTimeout(function () {
                    f.setPosition()
                }, 100)
            }
        }, addClass: function (f) {
            this._panel.addClass(f)
        }, removeClass: function (f) {
            this._panel.removeClass(f)
        }, setRect: function (f) {
            if (f.width) {
                this._panel.css("width", f.width);
                this.width = f.width
            }
            if (f.height) {
                this._panel.css("height", f.height);
                this.height = f.height
            }
        }, getPanel: function () {
            return this._panel
        }, getLayer: function () {
            return this._layer
        }, getMask: function () {
            return this._layer && this._layer.getMask()
        }, setPanelContent: function () {
        }, _getPanelRect: function () {
            var f = this.getPanel(), g = f.outerHeight(), h = f.outerWidth();
            if (!f.is(":visible")) {
                f.css({visibility: "hidden", display: "block"});
                var g = f.outerHeight(), h = f.outerWidth();
                f.css({visibility: "", display: ""})
            }
            return {height: g, width: h}
        }, _getNumric: function (f) {
            f = parseInt(f, 10);
            return isNaN(f) ? 0 : f
        }, setPosition: function (f) {
            var g = this._getPanelRect(), h = {width: $(window).width(), height: $(window).height()};
            var k = (h.width - (this._getNumric(this.width) > 0 ? this._getNumric(this.width) : g.width)) / 2, j = (h.height - (this._getNumric(this.height) > 0 ? this._getNumric(this.height) : g.height)) * 4 / 9;
            j = j < this.minTopOffset ? this.minTopOffset : j;
            if (d || !this.fixed) {
                var i = $(window).scrollTop();
                if (i > 0) {
                    j += i
                }
            }
            f = {left: (f && f.left) || k, top: (f && f.top) || j};
            if (!d && this.fixed) {
                if (h.height - g.height <= f.top) {
                    this.getPanel().addClass("dialog_overflow");
                    this._layer.setOverFlow(true)
                } else {
                    this.getPanel().removeClass("dialog_overflow");
                    this._layer.setOverFlow(false)
                }
            }
            var l = this.positioned ? "animate" : "css";
            $.fn[l].call(this.getPanel(), f, 200);
            this.positioned = true;
            this.position = f
        }, setFixed: function (f) {
            this.fixed = !!f;
            this._layer.setFixed(this.fixed)
        }, getPosition: function () {
            return this.position
        }, show: function (f) {
            if (this.visible) {
                return
            }
            var h = this;
            a(this).fire("beforeshow");
            var g;
            if (this._layer.getActiveStack()) {
                g = this._layer.getActiveStack();
                if (!this.reposition && !f && !this._layer.changeFixed) {
                    f = this._layer.getActiveStack().position()
                }
            }
            this._layer.show();
            this.getPanel().css({display: "", "z-index": 1});
            this.setPosition(f);
            g && g.trigger("close", [true]);
            this.visible = true;
            this._layer.setActiveStack(this._stackId);
            this.getPanel().animate({opacity: 1}, {
                queue: false, duration: 200, complete: function () {
                    a(h).fire("aftershow")
                }
            })
        }, close: function () {
            var f = this.stackable ? "hide" : "destroy";
            this[f].apply(this, Array.prototype.slice.call(arguments))
        }, hide: function (g, f) {
            if (typeof g == "function") {
                f = g;
                g = undefined
            }
            if (!this.visible) {
                typeof f == "function" && f();
                return
            }
            a(this).fire("beforeclose");
            a(this).fire("beforehide");
            this._layer.setActiveStack(null);
            this.visible = false;
            if (!g) {
                this._layer.hide()
            }
            this.getPanel().animate({opacity: 0}, {
                queue: false, duration: 200, complete: $.proxy(function () {
                    this.getPanel().css({display: "none", "z-index": 0});
                    a(this).fire("afterhide");
                    a(this).fire("afterclose");
                    typeof f == "function" && f()
                }, this)
            })
        }, destroy: function (g, f) {
            if (typeof g == "function") {
                f = g;
                g = undefined
            }
            if (this.destroyed) {
                M.error("Dialog already destroyed!");
                typeof f == "function" && f();
                return
            }
            a(this).fire("beforeclose");
            a(this).fire("beforedestroy");
            this.destroyed = true;
            this.hide(g, $.proxy(function () {
                if (this._panel.length) {
                    this._panel.undelegate();
                    this._panel.unbind();
                    this._panel.remove();
                    this._panel = null
                }
                this._layer = null;
                a(this).fire("afterdestroy");
                a(this).fire("afterclose");
                typeof f == "function" && f()
            }, this))
        }
    };
    return c
});
M.define("dialog/Dialog", function (c) {
    var d = c("dialog/DialogBase"), a = '<div class="popup-box layer_dialog _j_dialog pop_no_margin">                    <div class="dialog_title" style="display:none"><div class="_j_title title"></div></div>                    <div class="dialog_body _j_content"></div>                    <a id="popup_close" class="close-btn _j_close"><i></i></a>                </div>';
    var b = M.extend(function (e) {
        this.content = "";
        this.title = "";
        this.PANEL_CLASS = "";
        this.MASK_CLASS = "";
        b.$parent.call(this, e)
    }, d);
    M.mix(b.prototype, {
        tpl: a, setPanelContent: function () {
            this._dialogTitle = this._panel.find("._j_title");
            this._dialogContent = this._panel.find("._j_content");
            this.setTitle(this.title);
            this.setContent(this.content);
            this.addClass(this.PANEL_CLASS);
            this.getMask().addClass(this.MASK_CLASS)
        }, setTitle: function (e) {
            if (e) {
                this._dialogTitle.html(e).parent().css("display", "")
            } else {
                this._dialogTitle.parent().css("display", "none")
            }
            this.title = e
        }, getTitle: function () {
            return this.title
        }, setContent: function (e) {
            this._dialogContent.empty().append(e)
        }
    });
    return b
});
M.define("dialog/alert", function (e, d) {
    var b = e("dialog/Dialog"), a = '<div id="popup_container" class="popup-box new-popbox"><a class="close-btn _j_close"><i></i></a><div class="pop-ico" id="_j_alertpopicon"><i class="i1"></i></div><div class="pop-ctn"><p class="hd _j_content"></p><p class="bd _j_detail"></p></div><div class="pop-btns"><a role="button" tabindex="0" class="popbtn popbtn-submit _j_close">&nbsp;确定&nbsp;</a></div></div>', f = M.extend(function (j) {
        var i = {
            width: 420,
            content: "请输入内容",
            background: "#000",
            bgOpacity: 0.7,
            PANEL_CLASS: "pop_no_margin",
            reposition: true,
            impl: "Alert",
            layerZIndex: 10000
        };
        j = M.mix(i, j);
        f.$parent.call(this, j);
        this.bindEvents()
    }, b), g = null, h = $.noop;
    M.mix(f.prototype, {
        tpl: a, setAlertTitle: function (i) {
            this.setContent(i)
        }, setAlertContent: function (i) {
            this.getPanel().find("._j_detail").text(i)
        }, bindEvents: function () {
            this.getPanel().on("keydown", ".pop-btns ._j_close", function (i) {
                if (i.keyCode == 13) {
                    $(this).trigger("click")
                }
            })
        }
    });
    var c = function (i, k, j) {
        if (!g) {
            g = new f();
            M.Event(g).on("afterhide", function () {
                if (typeof h == "function") {
                    h.call(g, g.getPanel())
                }
            });
            M.Event(g).on("aftershow", function () {
                g.getPanel().find(".pop-btns ._j_close").focus()
            })
        }
        g.getLayer().toFront();
        if (M.isObject(i)) {
            g.setAlertTitle(i.title);
            g.setAlertContent(i.content)
        } else {
            g.setAlertTitle(i);
            g.setAlertContent("")
        }
        if (typeof k == "function") {
            h = k
        } else {
            h = $.noop
        }
        if (j) {
            $("#_j_alertpopicon").children("i").attr("class", "i" + j)
        } else {
            $("#_j_alertpopicon").children("i").attr("class", "i" + 1)
        }
        g.show();
        return g
    };
    d.pop = c;
    d.warning = function (i, j) {
        c(i, j, 1)
    };
    d.tip = function (i, j) {
        c(i, j, 3)
    }
});
/*! jQuery UI - v1.11.3 - 2015-02-15
 * http://jqueryui.com
 * Includes: core.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (window.M && typeof M.define === "function") {
            M.define("jqui-core", function () {
                return a(jQuery)
            })
        } else {
            a(jQuery)
        }
    }
}(function (e) {
    /*!
     * jQuery UI Core 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    e.ui = e.ui || {};
    e.extend(e.ui, {
        version: "1.11.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    e.fn.extend({
        scrollParent: function (k) {
            var j = this.css("position"), i = j === "absolute", l = k ? /(auto|scroll|hidden)/ : /(auto|scroll)/, m = this.parents().filter(function () {
                var n = e(this);
                if (i && n.css("position") === "static") {
                    return false
                }
                return l.test(n.css("overflow") + n.css("overflow-y") + n.css("overflow-x"))
            }).eq(0);
            return j === "fixed" || !m.length ? e(this[0].ownerDocument || document) : m
        }, uniqueId: (function () {
            var i = 0;
            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + (++i)
                    }
                })
            }
        })(), removeUniqueId: function () {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    e(this).removeAttr("id")
                }
            })
        }
    });
    function g(k, i) {
        var m, l, j, n = k.nodeName.toLowerCase();
        if ("area" === n) {
            m = k.parentNode;
            l = m.name;
            if (!k.href || !l || m.nodeName.toLowerCase() !== "map") {
                return false
            }
            j = e("img[usemap='#" + l + "']")[0];
            return !!j && f(j)
        }
        return (/^(input|select|textarea|button|object)$/.test(n) ? !k.disabled : "a" === n ? k.href || i : i) && f(k)
    }

    function f(i) {
        return e.expr.filters.visible(i) && !e(i).parents().addBack().filter(function () {
                return e.css(this, "visibility") === "hidden"
            }).length
    }

    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (i) {
            return function (j) {
                return !!e.data(j, i)
            }
        }) : function (l, k, j) {
            return !!e.data(l, j[3])
        }, focusable: function (i) {
            return g(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (k) {
            var i = e.attr(k, "tabindex"), j = isNaN(i);
            return (j || i >= 0) && g(k, !j)
        }
    });
    if (!e("<a>").outerWidth(1).jquery) {
        e.each(["Width", "Height"], function (l, j) {
            var k = j === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], m = j.toLowerCase(), o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };

            function n(q, p, i, r) {
                e.each(k, function () {
                    p -= parseFloat(e.css(q, "padding" + this)) || 0;
                    if (i) {
                        p -= parseFloat(e.css(q, "border" + this + "Width")) || 0
                    }
                    if (r) {
                        p -= parseFloat(e.css(q, "margin" + this)) || 0
                    }
                });
                return p
            }

            e.fn["inner" + j] = function (i) {
                if (i === undefined) {
                    return o["inner" + j].call(this)
                }
                return this.each(function () {
                    e(this).css(m, n(this, i) + "px")
                })
            };
            e.fn["outer" + j] = function (i, p) {
                if (typeof i !== "number") {
                    return o["outer" + j].call(this, i)
                }
                return this.each(function () {
                    e(this).css(m, n(this, i, true, p) + "px")
                })
            }
        })
    }
    if (!e.fn.addBack) {
        e.fn.addBack = function (i) {
            return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
        }
    }
    if (e("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        e.fn.removeData = (function (i) {
            return function (j) {
                if (arguments.length) {
                    return i.call(this, e.camelCase(j))
                } else {
                    return i.call(this)
                }
            }
        })(e.fn.removeData)
    }
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    e.fn.extend({
        focus: (function (i) {
            return function (j, k) {
                return typeof j === "number" ? this.each(function () {
                    var l = this;
                    setTimeout(function () {
                        e(l).focus();
                        if (k) {
                            k.call(l)
                        }
                    }, j)
                }) : i.apply(this, arguments)
            }
        })(e.fn.focus), disableSelection: (function () {
            var i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(i + ".ui-disableSelection", function (j) {
                    j.preventDefault()
                })
            }
        })(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (l) {
            if (l !== undefined) {
                return this.css("zIndex", l)
            }
            if (this.length) {
                var j = e(this[0]), i, k;
                while (j.length && j[0] !== document) {
                    i = j.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        k = parseInt(j.css("zIndex"), 10);
                        if (!isNaN(k) && k !== 0) {
                            return k
                        }
                    }
                    j = j.parent()
                }
            }
            return 0
        }
    });
    e.ui.plugin = {
        add: function (k, l, n) {
            var j, m = e.ui[k].prototype;
            for (j in n) {
                m.plugins[j] = m.plugins[j] || [];
                m.plugins[j].push([l, n[j]])
            }
        }, call: function (j, m, l, k) {
            var n, o = j.plugins[m];
            if (!o) {
                return
            }
            if (!k && (!j.element[0].parentNode || j.element[0].parentNode.nodeType === 11)) {
                return
            }
            for (n = 0; n < o.length; n++) {
                if (j.options[o[n][0]]) {
                    o[n][1].apply(j.element, l)
                }
            }
        }
    };
    /*!
     * jQuery UI Widget 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    var h = 0, b = Array.prototype.slice;
    e.cleanData = (function (i) {
        return function (j) {
            var l, m, k;
            for (k = 0; (m = j[k]) != null; k++) {
                try {
                    l = e._data(m, "events");
                    if (l && l.remove) {
                        e(m).triggerHandler("remove")
                    }
                } catch (n) {
                }
            }
            i(j)
        }
    })(e.cleanData);
    e.widget = function (i, j, q) {
        var n, o, l, p, k = {}, m = i.split(".")[0];
        i = i.split(".")[1];
        n = m + "-" + i;
        if (!q) {
            q = j;
            j = e.Widget
        }
        e.expr[":"][n.toLowerCase()] = function (r) {
            return !!e.data(r, n)
        };
        e[m] = e[m] || {};
        o = e[m][i];
        l = e[m][i] = function (r, s) {
            if (!this._createWidget) {
                return new l(r, s)
            }
            if (arguments.length) {
                this._createWidget(r, s)
            }
        };
        e.extend(l, o, {version: q.version, _proto: e.extend({}, q), _childConstructors: []});
        p = new j();
        p.options = e.widget.extend({}, p.options);
        e.each(q, function (s, r) {
            if (!e.isFunction(r)) {
                k[s] = r;
                return
            }
            k[s] = (function () {
                var t = function () {
                    return j.prototype[s].apply(this, arguments)
                }, u = function (v) {
                    return j.prototype[s].apply(this, v)
                };
                return function () {
                    var x = this._super, v = this._superApply, w;
                    this._super = t;
                    this._superApply = u;
                    w = r.apply(this, arguments);
                    this._super = x;
                    this._superApply = v;
                    return w
                }
            })()
        });
        l.prototype = e.widget.extend(p, {widgetEventPrefix: o ? (p.widgetEventPrefix || i) : i}, k, {
            constructor: l,
            namespace: m,
            widgetName: i,
            widgetFullName: n
        });
        if (o) {
            e.each(o._childConstructors, function (s, t) {
                var r = t.prototype;
                e.widget(r.namespace + "." + r.widgetName, l, t._proto)
            });
            delete o._childConstructors
        } else {
            j._childConstructors.push(l)
        }
        e.widget.bridge(i, l);
        return l
    };
    e.widget.extend = function (n) {
        var j = b.call(arguments, 1), m = 0, i = j.length, k, l;
        for (; m < i; m++) {
            for (k in j[m]) {
                l = j[m][k];
                if (j[m].hasOwnProperty(k) && l !== undefined) {
                    if (e.isPlainObject(l)) {
                        n[k] = e.isPlainObject(n[k]) ? e.widget.extend({}, n[k], l) : e.widget.extend({}, l)
                    } else {
                        n[k] = l
                    }
                }
            }
        }
        return n
    };
    e.widget.bridge = function (j, i) {
        var k = i.prototype.widgetFullName || j;
        e.fn[j] = function (n) {
            var l = typeof n === "string", m = b.call(arguments, 1), o = this;
            if (l) {
                this.each(function () {
                    var q, p = e.data(this, k);
                    if (n === "instance") {
                        o = p;
                        return false
                    }
                    if (!p) {
                        return e.error("cannot call methods on " + j + " prior to initialization; attempted to call method '" + n + "'")
                    }
                    if (!e.isFunction(p[n]) || n.charAt(0) === "_") {
                        return e.error("no such method '" + n + "' for " + j + " widget instance")
                    }
                    q = p[n].apply(p, m);
                    if (q !== p && q !== undefined) {
                        o = q && q.jquery ? o.pushStack(q.get()) : q;
                        return false
                    }
                })
            } else {
                if (m.length) {
                    n = e.widget.extend.apply(null, [n].concat(m))
                }
                this.each(function () {
                    var p = e.data(this, k);
                    if (p) {
                        p.option(n || {});
                        if (p._init) {
                            p._init()
                        }
                    } else {
                        e.data(this, k, new i(n, this))
                    }
                })
            }
            return o
        }
    };
    e.Widget = function () {
    };
    e.Widget._childConstructors = [];
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: false, create: null},
        _createWidget: function (i, j) {
            j = e(j || this.defaultElement || this)[0];
            this.element = e(j);
            this.uuid = h++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = e();
            this.hoverable = e();
            this.focusable = e();
            if (j !== this) {
                e.data(j, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (k) {
                        if (k.target === j) {
                            this.destroy()
                        }
                    }
                });
                this.document = e(j.style ? j.ownerDocument : j.document || j);
                this.window = e(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (m, n) {
            var j = m, o, l, k;
            if (arguments.length === 0) {
                return e.widget.extend({}, this.options)
            }
            if (typeof m === "string") {
                j = {};
                o = m.split(".");
                m = o.shift();
                if (o.length) {
                    l = j[m] = e.widget.extend({}, this.options[m]);
                    for (k = 0; k < o.length - 1; k++) {
                        l[o[k]] = l[o[k]] || {};
                        l = l[o[k]]
                    }
                    m = o.pop();
                    if (arguments.length === 1) {
                        return l[m] === undefined ? null : l[m]
                    }
                    l[m] = n
                } else {
                    if (arguments.length === 1) {
                        return this.options[m] === undefined ? null : this.options[m]
                    }
                    j[m] = n
                }
            }
            this._setOptions(j);
            return this
        },
        _setOptions: function (i) {
            var j;
            for (j in i) {
                this._setOption(j, i[j])
            }
            return this
        },
        _setOption: function (i, j) {
            this.options[i] = j;
            if (i === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!j);
                if (j) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                }
            }
            return this
        },
        enable: function () {
            return this._setOptions({disabled: false})
        },
        disable: function () {
            return this._setOptions({disabled: true})
        },
        _on: function (l, k, j) {
            var m, i = this;
            if (typeof l !== "boolean") {
                j = k;
                k = l;
                l = false
            }
            if (!j) {
                j = k;
                k = this.element;
                m = this.widget()
            } else {
                k = m = e(k);
                this.bindings = this.bindings.add(k)
            }
            e.each(j, function (s, r) {
                function p() {
                    if (!l && (i.options.disabled === true || e(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof r === "string" ? i[r] : r).apply(i, arguments)
                }

                if (typeof r !== "string") {
                    p.guid = r.guid = r.guid || p.guid || e.guid++
                }
                var q = s.match(/^([\w:-]*)\s*(.*)$/), o = q[1] + i.eventNamespace, n = q[2];
                if (n) {
                    m.delegate(n, o, p)
                } else {
                    k.bind(o, p)
                }
            })
        },
        _off: function (j, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            j.unbind(i).undelegate(i);
            this.bindings = e(this.bindings.not(j).get());
            this.focusable = e(this.focusable.not(j).get());
            this.hoverable = e(this.hoverable.not(j).get())
        },
        _delay: function (l, k) {
            function j() {
                return (typeof l === "string" ? i[l] : l).apply(i, arguments)
            }

            var i = this;
            return setTimeout(j, k || 0)
        },
        _hoverable: function (i) {
            this.hoverable = this.hoverable.add(i);
            this._on(i, {
                mouseenter: function (j) {
                    e(j.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (j) {
                    e(j.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (i) {
            this.focusable = this.focusable.add(i);
            this._on(i, {
                focusin: function (j) {
                    e(j.currentTarget).addClass("ui-state-focus")
                }, focusout: function (j) {
                    e(j.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (i, j, k) {
            var n, m, l = this.options[i];
            k = k || {};
            j = e.Event(j);
            j.type = (i === this.widgetEventPrefix ? i : this.widgetEventPrefix + i).toLowerCase();
            j.target = this.element[0];
            m = j.originalEvent;
            if (m) {
                for (n in m) {
                    if (!(n in j)) {
                        j[n] = m[n]
                    }
                }
            }
            this.element.trigger(j, k);
            return !(e.isFunction(l) && l.apply(this.element[0], [j].concat(k)) === false || j.isDefaultPrevented())
        }
    };
    e.each({show: "fadeIn", hide: "fadeOut"}, function (j, i) {
        e.Widget.prototype["_" + j] = function (m, l, o) {
            if (typeof l === "string") {
                l = {effect: l}
            }
            var n, k = !l ? j : l === true || typeof l === "number" ? i : l.effect || i;
            l = l || {};
            if (typeof l === "number") {
                l = {duration: l}
            }
            n = !e.isEmptyObject(l);
            l.complete = o;
            if (l.delay) {
                m.delay(l.delay)
            }
            if (n && e.effects && e.effects.effect[k]) {
                m[j](l)
            } else {
                if (k !== j && m[k]) {
                    m[k](l.duration, l.easing, o)
                } else {
                    m.queue(function (p) {
                        e(this)[j]();
                        if (o) {
                            o.call(m[0])
                        }
                        p()
                    })
                }
            }
        }
    });
    var d = e.widget;
    /*!
     * jQuery UI Mouse 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */
    var a = false;
    e(document).mouseup(function () {
        a = false
    });
    var c = e.widget("ui.mouse", {
        version: "1.11.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var i = this;
            this.element.bind("mousedown." + this.widgetName, function (j) {
                return i._mouseDown(j)
            }).bind("click." + this.widgetName, function (j) {
                if (true === e.data(j.target, i.widgetName + ".preventClickEvent")) {
                    e.removeData(j.target, i.widgetName + ".preventClickEvent");
                    j.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function (k) {
            if (a) {
                return
            }
            this._mouseMoved = false;
            (this._mouseStarted && this._mouseUp(k));
            this._mouseDownEvent = k;
            var j = this, l = (k.which === 1), i = (typeof this.options.cancel === "string" && k.target.nodeName ? e(k.target).closest(this.options.cancel).length : false);
            if (!l || i || !this._mouseCapture(k)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    j.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(k) && this._mouseDelayMet(k)) {
                this._mouseStarted = (this._mouseStart(k) !== false);
                if (!this._mouseStarted) {
                    k.preventDefault();
                    return true
                }
            }
            if (true === e.data(k.target, this.widgetName + ".preventClickEvent")) {
                e.removeData(k.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function (m) {
                return j._mouseMove(m)
            };
            this._mouseUpDelegate = function (m) {
                return j._mouseUp(m)
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            k.preventDefault();
            a = true;
            return true
        },
        _mouseMove: function (i) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !i.button) {
                    return this._mouseUp(i)
                } else {
                    if (!i.which) {
                        return this._mouseUp(i)
                    }
                }
            }
            if (i.which || i.button) {
                this._mouseMoved = true
            }
            if (this._mouseStarted) {
                this._mouseDrag(i);
                return i.preventDefault()
            }
            if (this._mouseDistanceMet(i) && this._mouseDelayMet(i)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, i) !== false);
                (this._mouseStarted ? this._mouseDrag(i) : this._mouseUp(i))
            }
            return !this._mouseStarted
        },
        _mouseUp: function (i) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (i.target === this._mouseDownEvent.target) {
                    e.data(i.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(i)
            }
            a = false;
            return false
        },
        _mouseDistanceMet: function (i) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - i.pageX), Math.abs(this._mouseDownEvent.pageY - i.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return true
        }
    })
}));
/*!
 * jQuery UI Datepicker 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
M.define("jqui-datepicker", function (d) {
    d("jqui-core");
    $.extend($.ui, {datepicker: {version: "1.11.3"}});
    var g;

    function h(j) {
        var i, k;
        while (j.length && j[0] !== document) {
            i = j.css("position");
            if (i === "absolute" || i === "relative" || i === "fixed") {
                k = parseInt(j.css("zIndex"), 10);
                if (!isNaN(k) && k !== 0) {
                    return k
                }
            }
            j = j.parent()
        }
        return 0
    }

    function c() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $.extend(true, {}, this.regional.en);
        this.dpDiv = b($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    $.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (i) {
            a(this._defaults, i || {});
            return this
        },
        _attachDatepicker: function (l, i) {
            var m, k, j;
            m = l.nodeName.toLowerCase();
            k = (m === "div" || m === "span");
            if (!l.id) {
                this.uuid += 1;
                l.id = "dp" + this.uuid
            }
            j = this._newInst($(l), k);
            j.settings = $.extend({}, i || {});
            if (m === "input") {
                this._connectDatepicker(l, j)
            } else {
                if (k) {
                    this._inlineDatepicker(l, j)
                }
            }
        },
        _newInst: function (j, i) {
            var k = j[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: k,
                input: j,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: (!i ? this.dpDiv : b($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function (k, j) {
            var i = $(k);
            j.append = $([]);
            j.trigger = $([]);
            if (i.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(i, j);
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(j);
            $.data(k, "datepicker", j);
            if (j.settings.disabled) {
                this._disableDatepicker(k)
            }
        },
        _attachments: function (k, n) {
            var j, m, i, o = this._get(n, "appendText"), l = this._get(n, "isRTL");
            if (n.append) {
                n.append.remove()
            }
            if (o) {
                n.append = $("<span class='" + this._appendClass + "'>" + o + "</span>");
                k[l ? "before" : "after"](n.append)
            }
            k.unbind("focus", this._showDatepicker);
            if (n.trigger) {
                n.trigger.remove()
            }
            j = this._get(n, "showOn");
            if (j === "focus" || j === "both") {
                k.focus(this._showDatepicker)
            }
            if (j === "button" || j === "both") {
                m = this._get(n, "buttonText");
                i = this._get(n, "buttonImage");
                n.trigger = $(this._get(n, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: m,
                    title: m
                }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!i ? m : $("<img/>").attr({
                    src: i,
                    alt: m,
                    title: m
                })));
                k[l ? "before" : "after"](n.trigger);
                n.trigger.click(function () {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === k[0]) {
                        $.datepicker._hideDatepicker()
                    } else {
                        if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== k[0]) {
                            $.datepicker._hideDatepicker();
                            $.datepicker._showDatepicker(k[0])
                        } else {
                            $.datepicker._showDatepicker(k[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function (p) {
            if (this._get(p, "autoSize") && !p.inline) {
                var m, k, l, o, n = new Date(2009, 12 - 1, 20), j = this._get(p, "dateFormat");
                if (j.match(/[DM]/)) {
                    m = function (i) {
                        k = 0;
                        l = 0;
                        for (o = 0; o < i.length; o++) {
                            if (i[o].length > k) {
                                k = i[o].length;
                                l = o
                            }
                        }
                        return l
                    };
                    n.setMonth(m(this._get(p, (j.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    n.setDate(m(this._get(p, (j.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - n.getDay())
                }
                p.input.attr("size", this._formatDate(p, n).length)
            }
        },
        _inlineDatepicker: function (j, i) {
            var k = $(j);
            if (k.hasClass(this.markerClassName)) {
                return
            }
            k.addClass(this.markerClassName).append(i.dpDiv);
            $.data(j, "datepicker", i);
            this._setDate(i, this._getDefaultDate(i), true);
            this._updateDatepicker(i);
            this._updateAlternate(i);
            if (i.settings.disabled) {
                this._disableDatepicker(j)
            }
            i.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (p, j, n, k, o) {
            var i, s, m, r, q, l = this._dialogInst;
            if (!l) {
                this.uuid += 1;
                i = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                l = this._dialogInst = this._newInst(this._dialogInput, false);
                l.settings = {};
                $.data(this._dialogInput[0], "datepicker", l)
            }
            a(l.settings, k || {});
            j = (j && j.constructor === Date ? this._formatDate(l, j) : j);
            this._dialogInput.val(j);
            this._pos = (o ? (o.length ? o : [o.pageX, o.pageY]) : null);
            if (!this._pos) {
                s = document.documentElement.clientWidth;
                m = document.documentElement.clientHeight;
                r = document.documentElement.scrollLeft || document.body.scrollLeft;
                q = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(s / 2) - 100 + r, (m / 2) - 150 + q]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            l.settings.onSelect = n;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv)
            }
            $.data(this._dialogInput[0], "datepicker", l);
            return this
        },
        _destroyDatepicker: function (k) {
            var l, i = $(k), j = $.data(k, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            l = k.nodeName.toLowerCase();
            $.removeData(k, "datepicker");
            if (l === "input") {
                j.append.remove();
                j.trigger.remove();
                i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (l === "div" || l === "span") {
                    i.removeClass(this.markerClassName).empty()
                }
            }
            if (g === j) {
                g = null
            }
        },
        _enableDatepicker: function (l) {
            var m, k, i = $(l), j = $.data(l, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = false;
                j.trigger.filter("button").each(function () {
                    this.disabled = false
                }).end().filter("img").css({opacity: "1.0", cursor: ""})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().removeClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (n) {
                return (n === l ? null : n)
            })
        },
        _disableDatepicker: function (l) {
            var m, k, i = $(l), j = $.data(l, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = true;
                j.trigger.filter("button").each(function () {
                    this.disabled = true
                }).end().filter("img").css({opacity: "0.5", cursor: "default"})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().addClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (n) {
                return (n === l ? null : n)
            });
            this._disabledInputs[this._disabledInputs.length] = l
        },
        _isDisabledDatepicker: function (k) {
            if (!k) {
                return false
            }
            for (var j = 0; j < this._disabledInputs.length; j++) {
                if (this._disabledInputs[j] === k) {
                    return true
                }
            }
            return false
        },
        _getInst: function (j) {
            try {
                return $.data(j, "datepicker")
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (o, j, n) {
            var k, i, m, p, l = this._getInst(o);
            if (arguments.length === 2 && typeof j === "string") {
                return (j === "defaults" ? $.extend({}, $.datepicker._defaults) : (l ? (j === "all" ? $.extend({}, l.settings) : this._get(l, j)) : null))
            }
            k = j || {};
            if (typeof j === "string") {
                k = {};
                k[j] = n
            }
            if (l) {
                if (this._curInst === l) {
                    this._hideDatepicker()
                }
                i = this._getDateDatepicker(o, true);
                m = this._getMinMaxDate(l, "min");
                p = this._getMinMaxDate(l, "max");
                a(l.settings, k);
                if (m !== null && k.dateFormat !== undefined && k.minDate === undefined) {
                    l.settings.minDate = this._formatDate(l, m)
                }
                if (p !== null && k.dateFormat !== undefined && k.maxDate === undefined) {
                    l.settings.maxDate = this._formatDate(l, p)
                }
                if ("disabled" in k) {
                    if (k.disabled) {
                        this._disableDatepicker(o)
                    } else {
                        this._enableDatepicker(o)
                    }
                }
                this._attachments($(o), l);
                this._autoSize(l);
                this._setDate(l, i);
                this._updateAlternate(l);
                this._updateDatepicker(l)
            }
        },
        _changeDatepicker: function (k, i, j) {
            this._optionDatepicker(k, i, j)
        },
        _refreshDatepicker: function (j) {
            var i = this._getInst(j);
            if (i) {
                this._updateDatepicker(i)
            }
        },
        _setDateDatepicker: function (k, i) {
            var j = this._getInst(k);
            if (j) {
                this._setDate(j, i);
                this._updateDatepicker(j);
                this._updateAlternate(j)
            }
        },
        _getDateDatepicker: function (k, i) {
            var j = this._getInst(k);
            if (j && !j.inline) {
                this._setDateFromField(j, i)
            }
            return (j ? this._getDate(j) : null)
        },
        _doKeyDown: function (l) {
            var j, i, n, m = $.datepicker._getInst(l.target), o = true, k = m.dpDiv.is(".ui-datepicker-rtl");
            m._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (l.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker();
                        o = false;
                        break;
                    case 13:
                        n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", m.dpDiv);
                        if (n[0]) {
                            $.datepicker._selectDay(l.target, m.selectedMonth, m.selectedYear, n[0])
                        }
                        j = $.datepicker._get(m, "onSelect");
                        if (j) {
                            i = $.datepicker._formatDate(m);
                            j.apply((m.input ? m.input[0] : null), [i, m])
                        } else {
                            $.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(l.target, (l.ctrlKey ? -$.datepicker._get(m, "stepBigMonths") : -$.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(l.target, (l.ctrlKey ? +$.datepicker._get(m, "stepBigMonths") : +$.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 35:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._clearDate(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 36:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._gotoToday(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 37:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, (k ? +1 : -1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            $.datepicker._adjustDate(l.target, (l.ctrlKey ? -$.datepicker._get(m, "stepBigMonths") : -$.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, -7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 39:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, (k ? -1 : +1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            $.datepicker._adjustDate(l.target, (l.ctrlKey ? +$.datepicker._get(m, "stepBigMonths") : +$.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, +7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    default:
                        o = false
                }
            } else {
                if (l.keyCode === 36 && l.ctrlKey) {
                    $.datepicker._showDatepicker(this)
                } else {
                    o = false
                }
            }
            if (o) {
                l.preventDefault();
                l.stopPropagation()
            }
        },
        _doKeyPress: function (k) {
            var j, i, l = $.datepicker._getInst(k.target);
            if ($.datepicker._get(l, "constrainInput")) {
                j = $.datepicker._possibleChars($.datepicker._get(l, "dateFormat"));
                i = String.fromCharCode(k.charCode == null ? k.keyCode : k.charCode);
                return k.ctrlKey || k.metaKey || (i < " " || !j || j.indexOf(i) > -1)
            }
        },
        _doKeyUp: function (k) {
            var i, l = $.datepicker._getInst(k.target);
            if (l.input.val() !== l.lastVal) {
                try {
                    i = $.datepicker.parseDate($.datepicker._get(l, "dateFormat"), (l.input ? l.input.val() : null), $.datepicker._getFormatConfig(l));
                    if (i) {
                        $.datepicker._setDateFromField(l);
                        $.datepicker._updateAlternate(l);
                        $.datepicker._updateDatepicker(l)
                    }
                } catch (j) {
                }
            }
            return true
        },
        _showDatepicker: function (j) {
            j = j.target || j;
            if (j.nodeName.toLowerCase() !== "input") {
                j = $("input", j.parentNode)[0]
            }
            if ($.datepicker._isDisabledDatepicker(j) || $.datepicker._lastInput === j) {
                return
            }
            var l, p, k, n, o, i, m;
            l = $.datepicker._getInst(j);
            if ($.datepicker._curInst && $.datepicker._curInst !== l) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (l && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0])
                }
            }
            p = $.datepicker._get(l, "beforeShow");
            k = p ? p.apply(j, [j, l]) : {};
            if (k === false) {
                return
            }
            a(l.settings, k);
            l.lastVal = null;
            $.datepicker._lastInput = j;
            $.datepicker._setDateFromField(l);
            if ($.datepicker._inDialog) {
                j.value = ""
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(j);
                $.datepicker._pos[1] += j.offsetHeight
            }
            n = false;
            $(j).parents().each(function () {
                n |= $(this).css("position") === "fixed";
                return !n
            });
            o = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
            $.datepicker._pos = null;
            l.dpDiv.empty();
            l.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
            $.datepicker._updateDatepicker(l);
            o = $.datepicker._checkOffset(l, o, n);
            l.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (n ? "fixed" : "absolute")),
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            });
            if (!l.inline) {
                i = $.datepicker._get(l, "showAnim");
                m = $.datepicker._get(l, "duration");
                l.dpDiv.css("z-index", h($(j)) + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects.effect[i]) {
                    l.dpDiv.show(i, $.datepicker._get(l, "showOptions"), m)
                } else {
                    l.dpDiv[i || "show"](i ? m : null)
                }
                if ($.datepicker._shouldFocusInput(l)) {
                    l.input.focus()
                }
                $.datepicker._curInst = l
            }
        },
        _updateDatepicker: function (l) {
            this.maxRows = 4;
            g = l;
            l.dpDiv.empty().append(this._generateHTML(l));
            this._attachHandlers(l);
            var n, i = this._getNumberOfMonths(l), m = i[1], k = 17, j = l.dpDiv.find("." + this._dayOverClass + " a");
            if (j.length > 0) {
                f.apply(j.get(0))
            }
            l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (m > 1) {
                l.dpDiv.addClass("ui-datepicker-multi-" + m).css("width", (k * m) + "em")
            }
            l.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            l.dpDiv[(this._get(l, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (l === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(l)) {
                l.input.focus()
            }
            if (l.yearshtml) {
                n = l.yearshtml;
                setTimeout(function () {
                    if (n === l.yearshtml && l.yearshtml) {
                        l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml)
                    }
                    n = l.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function (i) {
            return i.input && i.input.is(":visible") && !i.input.is(":disabled") && !i.input.is(":focus")
        },
        _checkOffset: function (n, l, k) {
            var m = n.dpDiv.outerWidth(), q = n.dpDiv.outerHeight(), p = n.input ? n.input.outerWidth() : 0, i = n.input ? n.input.outerHeight() : 0, o = document.documentElement.clientWidth + (k ? 0 : $(document).scrollLeft()), j = document.documentElement.clientHeight + (k ? 0 : $(document).scrollTop());
            l.left -= (this._get(n, "isRTL") ? (m - p) : 0);
            l.left -= (k && l.left === n.input.offset().left) ? $(document).scrollLeft() : 0;
            l.top -= (k && l.top === (n.input.offset().top + i)) ? $(document).scrollTop() : 0;
            l.left -= Math.min(l.left, (l.left + m > o && o > m) ? Math.abs(l.left + m - o) : 0);
            l.top -= Math.min(l.top, (l.top + q > j && j > q) ? Math.abs(q + i) : 0);
            return l
        },
        _findPos: function (l) {
            var i, k = this._getInst(l), j = this._get(k, "isRTL");
            while (l && (l.type === "hidden" || l.nodeType !== 1 || $.expr.filters.hidden(l))) {
                l = l[j ? "previousSibling" : "nextSibling"]
            }
            i = $(l).offset();
            return [i.left, i.top]
        },
        _hideDatepicker: function (k) {
            var j, n, m, i, l = this._curInst;
            if (!l || (k && l !== $.data(k, "datepicker"))) {
                return
            }
            if (this._datepickerShowing) {
                j = this._get(l, "showAnim");
                n = this._get(l, "duration");
                m = function () {
                    $.datepicker._tidyDialog(l)
                };
                if ($.effects && ($.effects.effect[j] || $.effects[j])) {
                    l.dpDiv.hide(j, $.datepicker._get(l, "showOptions"), n, m)
                } else {
                    l.dpDiv[(j === "slideDown" ? "slideUp" : (j === "fadeIn" ? "fadeOut" : "hide"))]((j ? n : null), m)
                }
                if (!j) {
                    m()
                }
                this._datepickerShowing = false;
                i = this._get(l, "onClose");
                if (i) {
                    i.apply((l.input ? l.input[0] : null), [(l.input ? l.input.val() : ""), l])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({position: "absolute", left: "0", top: "-100px"});
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function (i) {
            i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (j) {
            if (!$.datepicker._curInst) {
                return
            }
            var i = $(j.target), k = $.datepicker._getInst(i[0]);
            if (((i[0].id !== $.datepicker._mainDivId && i.parents("#" + $.datepicker._mainDivId).length === 0 && !i.hasClass($.datepicker.markerClassName) && !i.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || (i.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== k)) {
                $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (m, l, k) {
            var j = $(m), i = this._getInst(j[0]);
            if (this._isDisabledDatepicker(j[0])) {
                return
            }
            this._adjustInstDate(i, l + (k === "M" ? this._get(i, "showCurrentAtPos") : 0), k);
            this._updateDatepicker(i)
        },
        _gotoToday: function (l) {
            var i, k = $(l), j = this._getInst(k[0]);
            if (this._get(j, "gotoCurrent") && j.currentDay) {
                j.selectedDay = j.currentDay;
                j.drawMonth = j.selectedMonth = j.currentMonth;
                j.drawYear = j.selectedYear = j.currentYear
            } else {
                i = new Date();
                j.selectedDay = i.getDate();
                j.drawMonth = j.selectedMonth = i.getMonth();
                j.drawYear = j.selectedYear = i.getFullYear()
            }
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectMonthYear: function (m, i, l) {
            var k = $(m), j = this._getInst(k[0]);
            j["selected" + (l === "M" ? "Month" : "Year")] = j["draw" + (l === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectDay: function (n, l, i, m) {
            var j, k = $(n);
            if ($(m).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0])) {
                return
            }
            j = this._getInst(k[0]);
            j.selectedDay = j.currentDay = $("a", m).html();
            j.selectedMonth = j.currentMonth = l;
            j.selectedYear = j.currentYear = i;
            this._selectDate(n, this._formatDate(j, j.currentDay, j.currentMonth, j.currentYear))
        },
        _clearDate: function (j) {
            var i = $(j);
            this._selectDate(i, "")
        },
        _selectDate: function (m, i) {
            var j, l = $(m), k = this._getInst(l[0]);
            i = (i != null ? i : this._formatDate(k));
            if (k.input) {
                k.input.val(i)
            }
            this._updateAlternate(k);
            j = this._get(k, "onSelect");
            if (j) {
                j.apply((k.input ? k.input[0] : null), [i, k])
            } else {
                if (k.input) {
                    k.input.trigger("change")
                }
            }
            if (k.inline) {
                this._updateDatepicker(k)
            } else {
                this._hideDatepicker();
                this._lastInput = k.input[0];
                if (typeof(k.input[0]) !== "object") {
                    k.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function (m) {
            var l, k, i, j = this._get(m, "altField");
            if (j) {
                l = this._get(m, "altFormat") || this._get(m, "dateFormat");
                k = this._getDate(m);
                i = this.formatDate(l, k, this._getFormatConfig(m));
                $(j).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (j) {
            var i = j.getDay();
            return [(i > 0 && i < 6), ""]
        },
        iso8601Week: function (i) {
            var j, k = new Date(i.getTime());
            k.setDate(k.getDate() + 4 - (k.getDay() || 7));
            j = k.getTime();
            k.setMonth(0);
            k.setDate(1);
            return Math.floor(Math.round((j - k) / 86400000) / 7) + 1
        },
        parseDate: function (y, t, A) {
            if (y == null || t == null) {
                throw"Invalid arguments"
            }
            t = (typeof t === "object" ? t.toString() : t + "");
            if (t === "") {
                return null
            }
            var l, v, j, z = 0, o = (A ? A.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = (typeof o !== "string" ? o : new Date().getFullYear() % 100 + parseInt(o, 10)), r = (A ? A.dayNamesShort : null) || this._defaults.dayNamesShort, C = (A ? A.dayNames : null) || this._defaults.dayNames, i = (A ? A.monthNamesShort : null) || this._defaults.monthNamesShort, m = (A ? A.monthNames : null) || this._defaults.monthNames, n = -1, D = -1, x = -1, q = -1, w = false, B, s = function (F) {
                var G = (l + 1 < y.length && y.charAt(l + 1) === F);
                if (G) {
                    l++
                }
                return G
            }, E = function (H) {
                var F = s(H), I = (H === "@" ? 14 : (H === "!" ? 20 : (H === "y" && F ? 4 : (H === "o" ? 3 : 2)))), K = (H === "y" ? I : 1), J = new RegExp("^\\d{" + K + "," + I + "}"), G = t.substring(z).match(J);
                if (!G) {
                    throw"Missing number at position " + z
                }
                z += G[0].length;
                return parseInt(G[0], 10)
            }, p = function (G, H, J) {
                var F = -1, I = $.map(s(G) ? J : H, function (L, K) {
                    return [[K, L]]
                }).sort(function (L, K) {
                    return -(L[1].length - K[1].length)
                });
                $.each(I, function (L, N) {
                    var K = N[1];
                    if (t.substr(z, K.length).toLowerCase() === K.toLowerCase()) {
                        F = N[0];
                        z += K.length;
                        return false
                    }
                });
                if (F !== -1) {
                    return F + 1
                } else {
                    throw"Unknown name at position " + z
                }
            }, u = function () {
                if (t.charAt(z) !== y.charAt(l)) {
                    throw"Unexpected literal at position " + z
                }
                z++
            };
            for (l = 0; l < y.length; l++) {
                if (w) {
                    if (y.charAt(l) === "'" && !s("'")) {
                        w = false
                    } else {
                        u()
                    }
                } else {
                    switch (y.charAt(l)) {
                        case"d":
                            x = E("d");
                            break;
                        case"D":
                            p("D", r, C);
                            break;
                        case"o":
                            q = E("o");
                            break;
                        case"m":
                            D = E("m");
                            break;
                        case"M":
                            D = p("M", i, m);
                            break;
                        case"y":
                            n = E("y");
                            break;
                        case"@":
                            B = new Date(E("@"));
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case"!":
                            B = new Date((E("!") - this._ticksTo1970) / 10000);
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case"'":
                            if (s("'")) {
                                u()
                            } else {
                                w = true
                            }
                            break;
                        default:
                            u()
                    }
                }
            }
            if (z < t.length) {
                j = t.substr(z);
                if (!/^\s+/.test(j)) {
                    throw"Extra/unparsed characters found in date: " + j
                }
            }
            if (n === -1) {
                n = new Date().getFullYear()
            } else {
                if (n < 100) {
                    n += new Date().getFullYear() - new Date().getFullYear() % 100 + (n <= k ? 0 : -100)
                }
            }
            if (q > -1) {
                D = 1;
                x = q;
                do {
                    v = this._getDaysInMonth(n, D - 1);
                    if (x <= v) {
                        break
                    }
                    D++;
                    x -= v
                } while (true)
            }
            B = this._daylightSavingAdjust(new Date(n, D - 1, x));
            if (B.getFullYear() !== n || B.getMonth() + 1 !== D || B.getDate() !== x) {
                throw"Invalid date"
            }
            return B
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function (r, l, m) {
            if (!l) {
                return ""
            }
            var t, u = (m ? m.dayNamesShort : null) || this._defaults.dayNamesShort, j = (m ? m.dayNames : null) || this._defaults.dayNames, p = (m ? m.monthNamesShort : null) || this._defaults.monthNamesShort, n = (m ? m.monthNames : null) || this._defaults.monthNames, s = function (v) {
                var w = (t + 1 < r.length && r.charAt(t + 1) === v);
                if (w) {
                    t++
                }
                return w
            }, i = function (x, y, v) {
                var w = "" + y;
                if (s(x)) {
                    while (w.length < v) {
                        w = "0" + w
                    }
                }
                return w
            }, o = function (v, x, w, y) {
                return (s(v) ? y[x] : w[x])
            }, k = "", q = false;
            if (l) {
                for (t = 0; t < r.length; t++) {
                    if (q) {
                        if (r.charAt(t) === "'" && !s("'")) {
                            q = false
                        } else {
                            k += r.charAt(t)
                        }
                    } else {
                        switch (r.charAt(t)) {
                            case"d":
                                k += i("d", l.getDate(), 2);
                                break;
                            case"D":
                                k += o("D", l.getDay(), u, j);
                                break;
                            case"o":
                                k += i("o", Math.round((new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime() - new Date(l.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case"m":
                                k += i("m", l.getMonth() + 1, 2);
                                break;
                            case"M":
                                k += o("M", l.getMonth(), p, n);
                                break;
                            case"y":
                                k += (s("y") ? l.getFullYear() : (l.getYear() % 100 < 10 ? "0" : "") + l.getYear() % 100);
                                break;
                            case"@":
                                k += l.getTime();
                                break;
                            case"!":
                                k += l.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case"'":
                                if (s("'")) {
                                    k += "'"
                                } else {
                                    q = true
                                }
                                break;
                            default:
                                k += r.charAt(t)
                        }
                    }
                }
            }
            return k
        },
        _possibleChars: function (m) {
            var l, k = "", j = false, i = function (n) {
                var o = (l + 1 < m.length && m.charAt(l + 1) === n);
                if (o) {
                    l++
                }
                return o
            };
            for (l = 0; l < m.length; l++) {
                if (j) {
                    if (m.charAt(l) === "'" && !i("'")) {
                        j = false
                    } else {
                        k += m.charAt(l)
                    }
                } else {
                    switch (m.charAt(l)) {
                        case"d":
                        case"m":
                        case"y":
                        case"@":
                            k += "0123456789";
                            break;
                        case"D":
                        case"M":
                            return null;
                        case"'":
                            if (i("'")) {
                                k += "'"
                            } else {
                                j = true
                            }
                            break;
                        default:
                            k += m.charAt(l)
                    }
                }
            }
            return k
        },
        _get: function (j, i) {
            return j.settings[i] !== undefined ? j.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (n, k) {
            if (n.input.val() === n.lastVal) {
                return
            }
            var i = this._get(n, "dateFormat"), p = n.lastVal = n.input ? n.input.val() : null, o = this._getDefaultDate(n), j = o, l = this._getFormatConfig(n);
            try {
                j = this.parseDate(i, p, l) || o
            } catch (m) {
                p = (k ? "" : p)
            }
            n.selectedDay = j.getDate();
            n.drawMonth = n.selectedMonth = j.getMonth();
            n.drawYear = n.selectedYear = j.getFullYear();
            n.currentDay = (p ? j.getDate() : 0);
            n.currentMonth = (p ? j.getMonth() : 0);
            n.currentYear = (p ? j.getFullYear() : 0);
            this._adjustInstDate(n)
        },
        _getDefaultDate: function (i) {
            return this._restrictMinMax(i, this._determineDate(i, this._get(i, "defaultDate"), new Date()))
        },
        _determineDate: function (m, j, n) {
            var l = function (p) {
                var o = new Date();
                o.setDate(o.getDate() + p);
                return o
            }, k = function (v) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(m, "dateFormat"), v, $.datepicker._getFormatConfig(m))
                } catch (u) {
                }
                var p = (v.toLowerCase().match(/^c/) ? $.datepicker._getDate(m) : null) || new Date(), q = p.getFullYear(), t = p.getMonth(), o = p.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = s.exec(v);
                while (r) {
                    switch (r[2] || "d") {
                        case"d":
                        case"D":
                            o += parseInt(r[1], 10);
                            break;
                        case"w":
                        case"W":
                            o += parseInt(r[1], 10) * 7;
                            break;
                        case"m":
                        case"M":
                            t += parseInt(r[1], 10);
                            o = Math.min(o, $.datepicker._getDaysInMonth(q, t));
                            break;
                        case"y":
                        case"Y":
                            q += parseInt(r[1], 10);
                            o = Math.min(o, $.datepicker._getDaysInMonth(q, t));
                            break
                    }
                    r = s.exec(v)
                }
                return new Date(q, t, o)
            }, i = (j == null || j === "" ? n : (typeof j === "string" ? k(j) : (typeof j === "number" ? (isNaN(j) ? n : l(j)) : new Date(j.getTime()))));
            i = (i && i.toString() === "Invalid Date" ? n : i);
            if (i) {
                i.setHours(0);
                i.setMinutes(0);
                i.setSeconds(0);
                i.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(i)
        },
        _daylightSavingAdjust: function (i) {
            if (!i) {
                return null
            }
            i.setHours(i.getHours() > 12 ? i.getHours() + 2 : 0);
            return i
        },
        _setDate: function (o, l, n) {
            var i = !l, k = o.selectedMonth, m = o.selectedYear, j = this._restrictMinMax(o, this._determineDate(o, l, new Date()));
            o.selectedDay = o.currentDay = j.getDate();
            o.drawMonth = o.selectedMonth = o.currentMonth = j.getMonth();
            o.drawYear = o.selectedYear = o.currentYear = j.getFullYear();
            if ((k !== o.selectedMonth || m !== o.selectedYear) && !n) {
                this._notifyChange(o)
            }
            this._adjustInstDate(o);
            if (o.input) {
                o.input.val(i ? "" : this._formatDate(o))
            }
        },
        _getDate: function (j) {
            var i = (!j.currentYear || (j.input && j.input.val() === "") ? null : this._daylightSavingAdjust(new Date(j.currentYear, j.currentMonth, j.currentDay)));
            return i
        },
        _attachHandlers: function (j) {
            var i = this._get(j, "stepMonths"), k = "#" + j.id.replace(/\\\\/g, "\\");
            j.dpDiv.find("[data-handler]").map(function () {
                var l = {
                    prev: function () {
                        $.datepicker._adjustDate(k, -i, "M")
                    }, next: function () {
                        $.datepicker._adjustDate(k, +i, "M")
                    }, hide: function () {
                        $.datepicker._hideDatepicker()
                    }, today: function () {
                        $.datepicker._gotoToday(k)
                    }, selectDay: function () {
                        $.datepicker._selectDay(k, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    }, selectMonth: function () {
                        $.datepicker._selectMonthYear(k, this, "M");
                        return false
                    }, selectYear: function () {
                        $.datepicker._selectMonthYear(k, this, "Y");
                        return false
                    }
                };
                $(this).bind(this.getAttribute("data-event"), l[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (Z) {
            var B, A, U, L, m, ad, X, Q, ag, J, ak, t, v, u, j, ac, r, E, af, S, al, D, I, s, n, V, O, R, P, q, G, w, Y, ab, l, ae, ai, N, x, aa = new Date(), C = this._daylightSavingAdjust(new Date(aa.getFullYear(), aa.getMonth(), aa.getDate())), ah = this._get(Z, "isRTL"), aj = this._get(Z, "showButtonPanel"), T = this._get(Z, "hideIfNoPrevNext"), H = this._get(Z, "navigationAsDateFormat"), y = this._getNumberOfMonths(Z), p = this._get(Z, "showCurrentAtPos"), K = this._get(Z, "stepMonths"), F = (y[0] !== 1 || y[1] !== 1), k = this._daylightSavingAdjust((!Z.currentDay ? new Date(9999, 9, 9) : new Date(Z.currentYear, Z.currentMonth, Z.currentDay))), o = this._getMinMaxDate(Z, "min"), z = this._getMinMaxDate(Z, "max"), i = Z.drawMonth - p, W = Z.drawYear;
            if (i < 0) {
                i += 12;
                W--
            }
            if (z) {
                B = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - (y[0] * y[1]) + 1, z.getDate()));
                B = (o && B < o ? o : B);
                while (this._daylightSavingAdjust(new Date(W, i, 1)) > B) {
                    i--;
                    if (i < 0) {
                        i = 11;
                        W--
                    }
                }
            }
            Z.drawMonth = i;
            Z.drawYear = W;
            A = this._get(Z, "prevText");
            A = (!H ? A : this.formatDate(A, this._daylightSavingAdjust(new Date(W, i - K, 1)), this._getFormatConfig(Z)));
            U = (this._canAdjustMonth(Z, -1, W, i) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "e" : "w") + "'>" + A + "</span></a>" : (T ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "e" : "w") + "'>" + A + "</span></a>"));
            L = this._get(Z, "nextText");
            L = (!H ? L : this.formatDate(L, this._daylightSavingAdjust(new Date(W, i + K, 1)), this._getFormatConfig(Z)));
            m = (this._canAdjustMonth(Z, +1, W, i) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "w" : "e") + "'>" + L + "</span></a>" : (T ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "w" : "e") + "'>" + L + "</span></a>"));
            ad = this._get(Z, "currentText");
            X = (this._get(Z, "gotoCurrent") && Z.currentDay ? k : C);
            ad = (!H ? ad : this.formatDate(ad, X, this._getFormatConfig(Z)));
            Q = (!Z.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(Z, "closeText") + "</button>" : "");
            ag = (aj) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ah ? Q : "") + (this._isInRange(Z, X) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ad + "</button>" : "") + (ah ? "" : Q) + "</div>" : "";
            J = parseInt(this._get(Z, "firstDay"), 10);
            J = (isNaN(J) ? 0 : J);
            ak = this._get(Z, "showWeek");
            t = this._get(Z, "dayNames");
            v = this._get(Z, "dayNamesMin");
            u = this._get(Z, "monthNames");
            j = this._get(Z, "monthNamesShort");
            ac = this._get(Z, "beforeShowDay");
            r = this._get(Z, "showOtherMonths");
            E = this._get(Z, "selectOtherMonths");
            af = this._getDefaultDate(Z);
            S = "";
            al;
            for (D = 0; D < y[0]; D++) {
                I = "";
                this.maxRows = 4;
                for (s = 0; s < y[1]; s++) {
                    n = this._daylightSavingAdjust(new Date(W, i, Z.selectedDay));
                    V = " ui-corner-all";
                    O = "";
                    if (F) {
                        O += "<div class='ui-datepicker-group";
                        if (y[1] > 1) {
                            switch (s) {
                                case 0:
                                    O += " ui-datepicker-group-first";
                                    V = " ui-corner-" + (ah ? "right" : "left");
                                    break;
                                case y[1] - 1:
                                    O += " ui-datepicker-group-last";
                                    V = " ui-corner-" + (ah ? "left" : "right");
                                    break;
                                default:
                                    O += " ui-datepicker-group-middle";
                                    V = "";
                                    break
                            }
                        }
                        O += "'>"
                    }
                    O += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + V + "'>" + (/all|left/.test(V) && D === 0 ? (ah ? m : U) : "") + (/all|right/.test(V) && D === 0 ? (ah ? U : m) : "") + this._generateMonthYearHeader(Z, i, W, o, z, D > 0 || s > 0, u, j) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    R = (ak ? "<th class='ui-datepicker-week-col'>" + this._get(Z, "weekHeader") + "</th>" : "");
                    for (al = 0; al < 7; al++) {
                        P = (al + J) % 7;
                        R += "<th scope='col'" + ((al + J + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + t[P] + "'>" + v[P] + "</span></th>"
                    }
                    O += R + "</tr></thead><tbody>";
                    q = this._getDaysInMonth(W, i);
                    if (W === Z.selectedYear && i === Z.selectedMonth) {
                        Z.selectedDay = Math.min(Z.selectedDay, q)
                    }
                    G = (this._getFirstDayOfMonth(W, i) - J + 7) % 7;
                    w = Math.ceil((G + q) / 7);
                    Y = (F ? this.maxRows > w ? this.maxRows : w : w);
                    this.maxRows = Y;
                    ab = this._daylightSavingAdjust(new Date(W, i, 1 - G));
                    for (l = 0; l < Y; l++) {
                        O += "<tr>";
                        ae = (!ak ? "" : "<td class='ui-datepicker-week-col'>" + this._get(Z, "calculateWeek")(ab) + "</td>");
                        for (al = 0; al < 7; al++) {
                            ai = (ac ? ac.apply((Z.input ? Z.input[0] : null), [ab]) : [true, ""]);
                            N = (ab.getMonth() !== i);
                            x = (N && !E) || !ai[0] || (o && ab < o) || (z && ab > z);
                            ae += "<td class='" + ((al + J + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + ((ab.getTime() === n.getTime() && i === Z.selectedMonth && Z._keyEvent) || (af.getTime() === ab.getTime() && af.getTime() === n.getTime()) ? " " + this._dayOverClass : "") + (x ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !r ? "" : " " + ai[1] + (ab.getTime() === k.getTime() ? " " + this._currentClass : "") + (ab.getTime() === C.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!N || r) && ai[2] ? " title='" + ai[2].replace(/'/g, "&#39;") + "'" : "") + (x ? "" : " data-handler='selectDay' data-event='click' data-month='" + ab.getMonth() + "' data-year='" + ab.getFullYear() + "'") + ">" + (N && !r ? "&#xa0;" : (x ? "<span class='ui-state-default'>" + ab.getDate() + "</span>" : "<a class='ui-state-default" + (ab.getTime() === C.getTime() ? " ui-state-highlight" : "") + (ab.getTime() === k.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + ab.getDate() + "</a>")) + "</td>";
                            ab.setDate(ab.getDate() + 1);
                            ab = this._daylightSavingAdjust(ab)
                        }
                        O += ae + "</tr>"
                    }
                    i++;
                    if (i > 11) {
                        i = 0;
                        W++
                    }
                    O += "</tbody></table>" + (F ? "</div>" + ((y[0] > 0 && s === y[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    I += O
                }
                S += I
            }
            S += ag;
            Z._keyEvent = false;
            return S
        },
        _generateMonthYearHeader: function (m, k, u, o, s, v, q, i) {
            var z, j, A, x, n, w, t, p, l = this._get(m, "changeMonth"), B = this._get(m, "changeYear"), C = this._get(m, "showMonthAfterYear"), r = "<div class='ui-datepicker-title'>", y = "";
            if (v || !l) {
                y += "<span class='ui-datepicker-month'>" + q[k] + "</span>"
            } else {
                z = (o && o.getFullYear() === u);
                j = (s && s.getFullYear() === u);
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (A = 0; A < 12; A++) {
                    if ((!z || A >= o.getMonth()) && (!j || A <= s.getMonth())) {
                        y += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + ">" + i[A] + "</option>"
                    }
                }
                y += "</select>"
            }
            if (!C) {
                r += y + (v || !(l && B) ? "&#xa0;" : "")
            }
            if (!m.yearshtml) {
                m.yearshtml = "";
                if (v || !B) {
                    r += "<span class='ui-datepicker-year'>" + u + "</span>"
                } else {
                    x = this._get(m, "yearRange").split(":");
                    n = new Date().getFullYear();
                    w = function (E) {
                        var D = (E.match(/c[+\-].*/) ? u + parseInt(E.substring(1), 10) : (E.match(/[+\-].*/) ? n + parseInt(E, 10) : parseInt(E, 10)));
                        return (isNaN(D) ? n : D)
                    };
                    t = w(x[0]);
                    p = Math.max(t, w(x[1] || ""));
                    t = (o ? Math.max(t, o.getFullYear()) : t);
                    p = (s ? Math.min(p, s.getFullYear()) : p);
                    m.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; t <= p; t++) {
                        m.yearshtml += "<option value='" + t + "'" + (t === u ? " selected='selected'" : "") + ">" + t + "</option>"
                    }
                    m.yearshtml += "</select>";
                    r += m.yearshtml;
                    m.yearshtml = null
                }
            }
            r += this._get(m, "yearSuffix");
            if (C) {
                r += (v || !(l && B) ? "&#xa0;" : "") + y
            }
            r += "</div>";
            return r
        },
        _adjustInstDate: function (l, o, n) {
            var k = l.drawYear + (n === "Y" ? o : 0), m = l.drawMonth + (n === "M" ? o : 0), i = Math.min(l.selectedDay, this._getDaysInMonth(k, m)) + (n === "D" ? o : 0), j = this._restrictMinMax(l, this._daylightSavingAdjust(new Date(k, m, i)));
            l.selectedDay = j.getDate();
            l.drawMonth = l.selectedMonth = j.getMonth();
            l.drawYear = l.selectedYear = j.getFullYear();
            if (n === "M" || n === "Y") {
                this._notifyChange(l)
            }
        },
        _restrictMinMax: function (l, j) {
            var k = this._getMinMaxDate(l, "min"), m = this._getMinMaxDate(l, "max"), i = (k && j < k ? k : j);
            return (m && i > m ? m : i)
        },
        _notifyChange: function (j) {
            var i = this._get(j, "onChangeMonthYear");
            if (i) {
                i.apply((j.input ? j.input[0] : null), [j.selectedYear, j.selectedMonth + 1, j])
            }
        },
        _getNumberOfMonths: function (j) {
            var i = this._get(j, "numberOfMonths");
            return (i == null ? [1, 1] : (typeof i === "number" ? [1, i] : i))
        },
        _getMinMaxDate: function (j, i) {
            return this._determineDate(j, this._get(j, i + "Date"), null)
        },
        _getDaysInMonth: function (i, j) {
            return 32 - this._daylightSavingAdjust(new Date(i, j, 32)).getDate()
        },
        _getFirstDayOfMonth: function (i, j) {
            return new Date(i, j, 1).getDay()
        },
        _canAdjustMonth: function (l, n, k, m) {
            var i = this._getNumberOfMonths(l), j = this._daylightSavingAdjust(new Date(k, m + (n < 0 ? n : i[0] * i[1]), 1));
            if (n < 0) {
                j.setDate(this._getDaysInMonth(j.getFullYear(), j.getMonth()))
            }
            return this._isInRange(l, j)
        },
        _isInRange: function (m, k) {
            var j, p, l = this._getMinMaxDate(m, "min"), i = this._getMinMaxDate(m, "max"), q = null, n = null, o = this._get(m, "yearRange");
            if (o) {
                j = o.split(":");
                p = new Date().getFullYear();
                q = parseInt(j[0], 10);
                n = parseInt(j[1], 10);
                if (j[0].match(/[+\-].*/)) {
                    q += p
                }
                if (j[1].match(/[+\-].*/)) {
                    n += p
                }
            }
            return ((!l || k.getTime() >= l.getTime()) && (!i || k.getTime() <= i.getTime()) && (!q || k.getFullYear() >= q) && (!n || k.getFullYear() <= n))
        },
        _getFormatConfig: function (i) {
            var j = this._get(i, "shortYearCutoff");
            j = (typeof j !== "string" ? j : new Date().getFullYear() % 100 + parseInt(j, 10));
            return {
                shortYearCutoff: j,
                dayNamesShort: this._get(i, "dayNamesShort"),
                dayNames: this._get(i, "dayNames"),
                monthNamesShort: this._get(i, "monthNamesShort"),
                monthNames: this._get(i, "monthNames")
            }
        },
        _formatDate: function (l, i, m, k) {
            if (!i) {
                l.currentDay = l.selectedDay;
                l.currentMonth = l.selectedMonth;
                l.currentYear = l.selectedYear
            }
            var j = (i ? (typeof i === "object" ? i : this._daylightSavingAdjust(new Date(k, m, i))) : this._daylightSavingAdjust(new Date(l.currentYear, l.currentMonth, l.currentDay)));
            return this.formatDate(this._get(l, "dateFormat"), j, this._getFormatConfig(l))
        }
    });
    function b(j) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return j.delegate(i, "mouseout", function () {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(i, "mouseover", f)
    }

    function f() {
        if (!$.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover")
            }
        }
    }

    function a(k, j) {
        $.extend(k, j);
        for (var i in j) {
            if (j[i] == null) {
                k[i] = j[i]
            }
        }
        return k
    }

    $.fn.datepicker = function (j) {
        if (!this.length) {
            return this
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick);
            $.datepicker.initialized = true
        }
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv)
        }
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j === "string" && (j === "isDisabled" || j === "getDate" || j === "widget")) {
            return $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this[0]].concat(i))
        }
        if (j === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this[0]].concat(i))
        }
        return this.each(function () {
            typeof j === "string" ? $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this].concat(i)) : $.datepicker._attachDatepicker(this, j)
        })
    };
    $.datepicker = new c();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.11.3";
    var e = $.datepicker;
    return e
});
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (i, f) {
    var t = i.fn.domManip, h = "_tmplitem", u = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, p = {}, e = {}, y, x = {
        key: 0,
        data: {}
    }, w = 0, q = 0, g = [];

    function k(B, A, D, E) {
        var C = {
            data: E || (E === 0 || E === false) ? E : (A ? A.data : {}),
            _wrap: A ? A._wrap : null,
            tmpl: null,
            parent: A || null,
            nodes: [],
            calls: c,
            nest: b,
            wrap: n,
            html: r,
            update: z
        };
        if (B) {
            i.extend(C, B, {nodes: [], parent: A})
        }
        if (D) {
            C.tmpl = D;
            C._ctnt = C._ctnt || C.tmpl(i, C);
            C.key = ++w;
            (g.length ? e : p)[w] = C
        }
        return C
    }

    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (A, B) {
        i.fn[A] = function (C) {
            var F = [], I = i(C), E, G, D, J, H = this.length === 1 && this[0].parentNode;
            y = p || {};
            if (H && H.nodeType === 11 && H.childNodes.length === 1 && I.length === 1) {
                I[B](this[0]);
                F = this
            } else {
                for (G = 0, D = I.length; G < D; G++) {
                    q = G;
                    E = (G > 0 ? this.clone(true) : this).get();
                    i(I[G])[B](E);
                    F = F.concat(E)
                }
                q = 0;
                F = this.pushStack(F, A, I.selector)
            }
            J = y;
            y = null;
            i.tmpl.complete(J);
            return F
        }
    });
    i.fn.extend({
        tmpl: function (C, B, A) {
            return i.tmpl(this[0], C, B, A)
        }, tmplItem: function () {
            return i.tmplItem(this[0])
        }, template: function (A) {
            return i.template(A, this[0])
        }, domManip: function (E, H, G, I) {
            if (E[0] && i.isArray(E[0])) {
                var B = i.makeArray(arguments), A = E[0], F = A.length, C = 0, D;
                while (C < F && !(D = i.data(A[C++], "tmplItem"))) {
                }
                if (D && q) {
                    B[2] = function (J) {
                        i.tmpl.afterManip(this, J, G)
                    }
                }
                t.apply(this, B)
            } else {
                t.apply(this, arguments)
            }
            q = 0;
            if (!y) {
                i.tmpl.complete(p)
            }
            return this
        }
    });
    i.extend({
        tmpl: function (C, F, E, B) {
            var D, A = !B;
            if (A) {
                B = x;
                C = i.template[C] || i.template(null, C);
                e = {}
            } else {
                if (!C) {
                    C = B.tmpl;
                    p[B.key] = B;
                    B.nodes = [];
                    if (B.wrapped) {
                        s(B, B.wrapped)
                    }
                    return i(m(B, null, B.tmpl(i, B)))
                }
            }
            if (!C) {
                return []
            }
            if (typeof F === "function") {
                F = F.call(B || {})
            }
            if (E && E.wrapped) {
                s(E, E.wrapped)
            }
            D = i.isArray(F) ? i.map(F, function (G) {
                return G ? k(E, B, C, G) : null
            }) : [k(E, B, C, F)];
            return A ? i(m(B, null, D)) : D
        }, tmplItem: function (B) {
            var A;
            if (B instanceof i) {
                B = B[0]
            }
            while (B && B.nodeType === 1 && !(A = i.data(B, "tmplItem")) && (B = B.parentNode)) {
            }
            return A || x
        }, template: function (B, A) {
            if (A) {
                if (typeof A === "string") {
                    A = l(A)
                } else {
                    if (A instanceof i) {
                        A = A[0] || {}
                    }
                }
                if (A.nodeType) {
                    A = i.data(A, "tmpl") || i.data(A, "tmpl", l(A.innerHTML))
                }
                return typeof B === "string" ? (i.template[B] = A) : A
            }
            return B ? (typeof B !== "string" ? i.template(null, B) : (i.template[B] || i.template(null, u.test(B) ? B : i(B)))) : null
        }, encode: function (A) {
            return ("" + A).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    i.extend(i.tmpl, {
        tag: {
            tmpl: {_default: {$2: "null"}, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"},
            wrap: {
                _default: {$2: "null"},
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {$2: "$index, $value"},
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {open: "if(($notnull_1) && $1a){", close: "}"},
            "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"},
            html: {open: "if($notnull_1){__.push($1a);}"},
            "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"},
            "!": {open: ""}
        }, complete: function (A) {
            p = {}
        }, afterManip: function v(C, A, D) {
            var B = A.nodeType === 11 ? i.makeArray(A.childNodes) : A.nodeType === 1 ? [A] : [];
            D.call(C, A);
            o(B);
            q++
        }
    });
    function m(A, E, C) {
        var D, B = C ? i.map(C, function (F) {
            return (typeof F === "string") ? (A.key ? F.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + h + '="' + A.key + '" $2') : F) : m(F, A, F._ctnt)
        }) : A;
        if (E) {
            return B
        }
        B = B.join("");
        B.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (G, H, F, I) {
            D = i(F).get();
            o(D);
            if (H) {
                D = a(H).concat(D)
            }
            if (I) {
                D = D.concat(a(I))
            }
        });
        return D ? D : a(B)
    }

    function a(B) {
        var A = document.createElement("div");
        A.innerHTML = B;
        return i.makeArray(A.childNodes)
    }

    function l(A) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + i.trim(A).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (I, C, G, D, E, J, F) {
            var L = i.tmpl.tag[G], B, H, K;
            if (!L) {
                throw"Unknown template tag: " + G
            }
            B = L._default || [];
            if (J && !/\w$/.test(E)) {
                E += J;
                J = ""
            }
            if (E) {
                E = j(E);
                F = F ? ("," + j(F) + ")") : (J ? ")" : "");
                H = J ? (E.indexOf(".") > -1 ? E + j(J) : ("(" + E + ").call($item" + F)) : E;
                K = J ? H : "(typeof(" + E + ")==='function'?(" + E + ").call($item):(" + E + "))"
            } else {
                K = H = B.$1 || "null"
            }
            D = j(D);
            return "');" + L[C ? "close" : "open"].split("$notnull_1").join(E ? "typeof(" + E + ")!=='undefined' && (" + E + ")!=null" : "true").split("$1a").join(K).split("$1").join(H).split("$2").join(D || B.$2 || "") + "__.push('"
        }) + "');}return __;")
    }

    function s(B, A) {
        B._wrap = m(B, true, i.isArray(A) ? A : [u.test(A) ? A : i(A).html()]).join("")
    }

    function j(A) {
        return A ? A.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function d(A) {
        var B = document.createElement("div");
        B.appendChild(A.cloneNode(true));
        return B.innerHTML
    }

    function o(G) {
        var I = "_" + q, B, A, E = {}, F, D, C;
        for (F = 0, D = G.length; F < D; F++) {
            if ((B = G[F]).nodeType !== 1) {
                continue
            }
            A = B.getElementsByTagName("*");
            for (C = A.length - 1; C >= 0; C--) {
                H(A[C])
            }
            H(B)
        }
        function H(P) {
            var L, O = P, N, J, K;
            if ((K = P.getAttribute(h))) {
                while (O.parentNode && (O = O.parentNode).nodeType === 1 && !(L = O.getAttribute(h))) {
                }
                if (L !== K) {
                    O = O.parentNode ? (O.nodeType === 11 ? 0 : (O.getAttribute(h) || 0)) : 0;
                    if (!(J = p[K])) {
                        J = e[K];
                        J = k(J, p[O] || e[O]);
                        J.key = ++w;
                        p[w] = J
                    }
                    if (q) {
                        Q(K)
                    }
                }
                P.removeAttribute(h)
            } else {
                if (q && (J = i.data(P, "tmplItem"))) {
                    Q(J.key);
                    p[J.key] = J;
                    O = i.data(P.parentNode, "tmplItem");
                    O = O ? O.key : 0
                }
            }
            if (J) {
                N = J;
                while (N && N.key != O) {
                    N.nodes.push(P);
                    N = N.parent
                }
                delete J._ctnt;
                delete J._wrap;
                i.data(P, "tmplItem", J)
            }
            function Q(R) {
                R = R + I;
                J = E[R] = (E[R] || k(J, p[J.parent.key + I] || J.parent))
            }
        }
    }

    function c(C, A, D, B) {
        if (!C) {
            return g.pop()
        }
        g.push({_: C, tmpl: A, item: this, data: D, options: B})
    }

    function b(A, C, B) {
        return i.tmpl(i.template(A), C, B, this)
    }

    function n(C, A) {
        var B = C.options || {};
        B.wrapped = A;
        return i.tmpl(i.template(C.tmpl), C.data, B, C.item)
    }

    function r(B, C) {
        var A = this._wrap;
        return i.map(i(i.isArray(A) ? A.join("") : A).filter(B || "*"), function (D) {
            return C ? D.innerText || D.textContent : D.outerHTML || d(D)
        })
    }

    function z() {
        var A = this.nodes;
        i.tmpl(null, null, null, this).insertBefore(A[0]);
        i(A).remove()
    }

    if (window.M && typeof M.define == "function") {
        M.define("jq-tmpl", function () {
            return i
        })
    }
})(jQuery);
M.define("InputListener", function (c, b, d) {
    var a = {
        listen: function (f, e) {
            f = $(f);
            f.each($.proxy(function (g, h) {
                h = $(h);
                if (!h.is("input") && !h.is("textarea")) {
                    throw new Error("input listener only apply to input or textarea")
                }
                this.initListen(h, e)
            }, this))
        }, unlisten: function (e) {
            e = $(e);
            e.each($.proxy(function (h, k) {
                k = $(k);
                if (!k.is("input") && !k.is("textarea")) {
                    throw new Error("input listener only apply to input or textarea")
                }
                if (arguments.length == 1) {
                    k.unbind("focus", this.getStartListenFunc());
                    k.unbind("blur", this.getStopListenFunc());
                    k.removeData("__input_listener_handlers")
                } else {
                    if (typeof arguments[1] == "function") {
                        var j = arguments[1], g = k.data("__input_listener_listeninterval");
                        for (var h = 0, f = g.length; h < f; h++) {
                            if (g[h] == j) {
                                g.splice(h, 1);
                                h--
                            }
                        }
                    }
                }
            }, this))
        }, initListen: function (f, e) {
            f.data("__input_listener_currentval", f.val());
            if (!f.data("__input_listener_handlers")) {
                this.bindListenEvent(f)
            }
            this.addListenHandler(f, e)
        }, bindListenEvent: function (e) {
            e.data("__input_listener_handlers", []);
            e.focus(this.getStartListenFunc());
            e.blur(this.getStopListenFunc())
        }, getStartListenFunc: function () {
            if (!this.bindStartListenFunc) {
                this.bindStartListenFunc = $.proxy(this.startListen, this)
            }
            return this.bindStartListenFunc
        }, getStopListenFunc: function () {
            if (!this.bindStopListenFunc) {
                this.bindStopListenFunc = $.proxy(this.stopListen, this)
            }
            return this.bindStopListenFunc
        }, startListen: function (e) {
            var f = $(e.target);
            f.data("__input_listener_currentval", f.val());
            f.data("__input_listener_listeninterval", setInterval($.proxy(function () {
                var h = f.data("__input_listener_currentval"), g = f.val();
                if (h != g) {
                    f.data("__input_listener_currentval", g);
                    this.triggerListenHandler(f)
                }
            }, this), 100))
        }, stopListen: function (e) {
            var f = $(e.target);
            clearInterval(f.data("__input_listener_listeninterval"))
        }, addListenHandler: function (f, e) {
            if (typeof e == "function") {
                f.data("__input_listener_handlers").push(e)
            }
        }, triggerListenHandler: function (h) {
            var f = h.data("__input_listener_handlers");
            for (var g = 0, e = f.length; g < e; g++) {
                f[g].call(null, {target: h.get(0)})
            }
        }
    };
    return a
});
M.define("SuggestionXHR", function (b, a, c) {
    function d(e) {
        this.URL = null;
        this.delay = 200;
        this.dataType = "text";
        $.extend(this, e);
        this.delayTimer = null;
        this.xhr = null;
        this.cache = {};
        this.init()
    }

    d.prototype = {
        init: function () {
            if (!this.URL) {
                throw new Error("no url for suggestion")
            }
        }, getSuggestion: function (g, h) {
            var f = this.getQuery(g), e = this.cache[f];
            h = typeof h === "function" ? h : $.noop;
            this.stop();
            if (e) {
                h(e)
            } else {
                this.getXHRData(f, h)
            }
        }, stop: function () {
            clearTimeout(this.delayTimer);
            if (this.xhr && this.xhr.readyState !== 4) {
                this.xhr.abort()
            }
        }, getQuery: function (h) {
            var g = "";
            if (typeof h == "string") {
                g = encodeURIComponent(h)
            } else {
                if (h && typeof h == "object") {
                    var e = [];
                    for (var f in h) {
                        if (h.hasOwnProperty(f)) {
                            e.push(f + "=" + encodeURIComponent(h[f]))
                        }
                    }
                    g = e.join("&")
                }
            }
            return g
        }, getXHRData: function (e, h) {
            var f = this.xhr, g = {
                url: this.URL, data: e, dataType: this.dataType, success: M.bind(function (i) {
                    h(i);
                    this.cache[e] = i
                }, this)
            };
            this.delayTimer = setTimeout(M.bind(function () {
                this.xhr = $.ajax(g)
            }, this), this.delay)
        }
    };
    return d
});
M.define("DropList", function (c, b, d) {
    var a = M.Event;

    function e(f) {
        this.trigger = null;
        this.container = null;
        this.itemSelector = "._j_listitem";
        this.itemHoverClass = "on";
        this.firstItemHover = false;
        $.extend(this, f);
        this.trigger = $(this.trigger);
        this.container = $(this.container);
        this.mouseon = false;
        this.visible = false;
        this.init()
    }

    M.mix(e.prototype, {
        createContainer: $.noop, updateList: $.noop, init: function () {
            if (!this.trigger.length) {
                M.error("no trigger for drop list")
            }
            if (!this.container.length) {
                this.container = this.createContainer()
            }
            if (!this.container.length) {
                M.error("no container for drop list")
            }
            this.bindEvents()
        }, bindEvents: function () {
            this.trigger.on("keydown", $.proxy(function (g) {
                var h = g.keyCode;
                if (this.visible && h == 13) {
                    var f = this.getFocusItem();
                    if (f.length) {
                        this.selectItem(f);
                        g.preventDefault()
                    }
                } else {
                    if (this.visible && h == 38) {
                        this.moveFocus(-1)
                    } else {
                        if (this.visible && h == 40) {
                            this.moveFocus(1)
                        }
                    }
                }
            }, this));
            this.container.on("mouseenter", this.itemSelector, $.proxy(this.moveFocus, this)).on("click", this.itemSelector, $.proxy(this.clickItem, this)).on("mouseenter", $.proxy(this.mouseOverCnt, this)).on("mouseleave", $.proxy(this.mouseOutCnt, this))
        }, show: function (g) {
            this.updateList(g);
            this.container.show();
            if (this.firstItemHover) {
                var f = this.container.find(this.itemSelector);
                if (f.length) {
                    this.moveFocus(1)
                }
            }
            this.visible = true
        }, hide: function () {
            this.container.hide();
            this.visible = false
        }, clickItem: function (g) {
            var f = this.getFocusItem();
            this.selectItem(f);
            g.preventDefault()
        }, selectItem: function (f) {
            a(this).fire("itemselected", {item: f})
        }, moveFocus: function (i) {
            var h = this.container.find(this.itemSelector), j = this.getFocusItem(), g = j, f;
            if (i === -1) {
                if (j.length) {
                    f = h.index(j) - 1
                }
                if (!j.length || f == -1) {
                    g = h.last()
                } else {
                    g = h.eq(f)
                }
            } else {
                if (i === 1) {
                    if (j.length) {
                        f = h.index(j) + 1
                    }
                    if (!j.length || f == h.length) {
                        g = h.first()
                    } else {
                        g = h.eq(f)
                    }
                } else {
                    if (i.currentTarget) {
                        g = $(i.currentTarget)
                    }
                }
            }
            j.removeClass(this.itemHoverClass);
            g.addClass(this.itemHoverClass);
            a(this).fire("itemfocused", {prevItem: j, focusItem: g})
        }, getFocusItem: function () {
            var f = this.container.find(this.itemSelector);
            return f.filter("." + this.itemHoverClass)
        }, mouseOverCnt: function () {
            this.mouseon = true
        }, mouseOutCnt: function () {
            this.mouseon = false
        }
    });
    return e
});
M.define("Suggestion", function (c) {
    c("jq-tmpl");
    var a = c("InputListener");
    var b = '{{each(i, item) list}}<li class="${listItemClass}" data-value="${item.value}">${item.text}</li>{{/each}}';

    function d(e) {
        e.suggestionURL = e.url || $(e.input).data("suggestionurl");
        this.dropListClass = "droplist";
        this.listItemSelector = "._j_listitem";
        this.listItemHoverClass = "on";
        this.listFirstItemHover = false;
        this.keyParamName = "key";
        this.dataType = "json";
        this.suggestionParams = {};
        this.listContainer = null;
        M.mix(this, e);
        this.input = $(this.input);
        this.listTmpl = this.listTmpl || b;
        this.actOnList = false;
        this.init()
    }

    M.mix(d.prototype, {
        init: function () {
            a.listen(this.input, $.proxy(this.inputChange, this));
            this.input.blur($.proxy(function (f) {
                var e = $(f.currentTarget);
                if (e.data("droplist")) {
                    setTimeout($.proxy(function () {
                        if (!this.actOnList && e.data("droplist")) {
                            e.data("droplist").hide()
                        }
                        this.actOnList = false
                    }, this), 200)
                }
            }, this));
            this.input.keyup($.proxy(function (f) {
                var e = $(f.currentTarget);
                if (f.keyCode == 40 && (!e.data("droplist") || !e.data("droplist").visible)) {
                    this.inputChange(f)
                }
            }, this))
        }, inputChange: function (i) {
            var f = $(i.target), k = $.trim(f.val()), j = c("SuggestionXHR"), h = c("DropList");
            var g = f.data("droplist");
            if (!g) {
                f.data("droplist", g = new h({
                    trigger: f,
                    itemSelector: this.listItemSelector,
                    itemHoverClass: this.listItemHoverClass,
                    firstItemHover: this.listFirstItemHover,
                    container: this.listContainer,
                    createContainer: $.proxy(function () {
                        var l = this.createListContainer(f);
                        this.listContainer = l;
                        return l
                    }, this),
                    updateList: $.proxy(this.updateList, this)
                }));
                M.Event(g).on("itemselected", $.proxy(function (l) {
                    this.dropItemSelected(f, l.item)
                }, this));
                M.Event(g).on("itemfocused", $.proxy(function (l) {
                    M.Event(this).fire("itemfocused", l)
                }, this))
            }
            g.hide = function () {
                setTimeout($.proxy(function () {
                    if (M.windowFocused) {
                        this.container.hide();
                        this.visible = false
                    }
                }, this), 1)
            };
            var e = f.data("suggestion");
            if (!e) {
                f.data("suggestion", e = new j({URL: this.suggestionURL, dataType: this.dataType}))
            }
            if (!k.length) {
                e.stop();
                g.hide();
                M.Event(this).fire("after hide list")
            } else {
                this.suggestionParams[this.keyParamName] = k;
                M.Event(this).fire("before suggestion xhr");
                e.getSuggestion(this.suggestionParams, $.proxy(function (m) {
                    M.Event(this).fire("before show list");
                    var l = this.handleSuggest(m);
                    if (l) {
                        f.data("droplist").show(l)
                    }
                }, this))
            }
        }, handleSuggest: function (f) {
            var e = "";
            if (this.dataType == "json") {
                e = $.tmpl(this.listTmpl, f)
            }
            return e
        }, createListContainer: function (f) {
            var g = $("<ul />"), e = f.position();
            g.css({
                display: "none",
                position: "absolute",
                left: e.left,
                top: e.top + f.outerHeight()
            }).addClass(this.dropListClass);
            g.insertAfter(f);
            return g
        }, updateList: function (e) {
            this.listContainer.html(e)
        }, hideDropList: function () {
            this.input.data("droplist") && this.input.data("droplist").hide()
        }, dropItemSelected: function (e, f) {
            a.unlisten(e);
            M.Event(this).fire("itemselected", {item: f, input: e});
            a.listen(e, $.proxy(this.inputChange, this))
        }
    });
    return d
});
(function (b, g) {
    var d = {};

    function c(m, n) {
        var l, j = [];
        for (var k = 0; k < m.length; ++k) {
            l = d[m[k]] || e(m[k]);
            if (!l) {
                throw"module definition dependecy not found: " + m[k]
            }
            j.push(l)
        }
        n.apply(null, j)
    }

    function h(k, j, i) {
        if (typeof k !== "string") {
            throw"invalid module definition, module id must be defined and be a string"
        }
        if (j === g) {
            throw"invalid module definition, dependencies must be specified"
        }
        if (i === g) {
            throw"invalid module definition, definition function must be specified"
        }
        c(j, function () {
            d[k] = i.apply(null, arguments)
        })
    }

    function f(i) {
        return !!d[i]
    }

    function e(l) {
        var j = b;
        var i = l.split(/[.\/]/);
        for (var k = 0; k < i.length; ++k) {
            if (!j[i[k]]) {
                return
            }
            j = j[i[k]]
        }
        return j
    }

    function a(l) {
        for (var k = 0; k < l.length; k++) {
            var m = b;
            var o = l[k];
            var j = o.split(/[.\/]/);
            for (var n = 0; n < j.length - 1; ++n) {
                if (m[j[n]] === g) {
                    m[j[n]] = {}
                }
                m = m[j[n]]
            }
            m[j[j.length - 1]] = d[o]
        }
    }

    h("moxie/core/utils/Basic", [], function () {
        var r = function (w) {
            var v;
            if (w === v) {
                return "undefined"
            } else {
                if (w === null) {
                    return "null"
                } else {
                    if (w.nodeType) {
                        return "node"
                    }
                }
            }
            return ({}).toString.call(w).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        };
        var n = function (w) {
            var v;
            p(arguments, function (x, y) {
                if (y > 0) {
                    p(x, function (A, z) {
                        if (A !== v) {
                            if (r(w[z]) === r(A) && !!~u(r(A), ["array", "object"])) {
                                n(w[z], A)
                            } else {
                                w[z] = A
                            }
                        }
                    })
                }
            });
            return w
        };
        var p = function (A, B) {
            var z, x, w, y;
            if (A) {
                try {
                    z = A.length
                } catch (v) {
                    z = y
                }
                if (z === y) {
                    for (x in A) {
                        if (A.hasOwnProperty(x)) {
                            if (B(A[x], x) === false) {
                                return
                            }
                        }
                    }
                } else {
                    for (w = 0; w < z; w++) {
                        if (B(A[w], w) === false) {
                            return
                        }
                    }
                }
            }
        };
        var s = function (v) {
            var w;
            if (!v || r(v) !== "object") {
                return true
            }
            for (w in v) {
                return false
            }
            return true
        };
        var l = function (w, v) {
            var x = 0, y = w.length;
            if (r(v) !== "function") {
                v = function () {
                }
            }
            if (!w || !w.length) {
                v()
            }
            function z(A) {
                if (r(w[A]) === "function") {
                    w[A](function (B) {
                        ++A < y && !B ? z(A) : v(B)
                    })
                }
            }

            z(x)
        };
        var i = function (w, v) {
            var y = 0, x = w.length, z = new Array(x);
            p(w, function (B, A) {
                B(function (D) {
                    if (D) {
                        return v(D)
                    }
                    var C = [].slice.call(arguments);
                    C.shift();
                    z[A] = C;
                    y++;
                    if (y === x) {
                        z.unshift(null);
                        v.apply(this, z)
                    }
                })
            })
        };
        var u = function (x, y) {
            if (y) {
                if (Array.prototype.indexOf) {
                    return Array.prototype.indexOf.call(y, x)
                }
                for (var v = 0, w = y.length; v < w; v++) {
                    if (y[v] === x) {
                        return v
                    }
                }
            }
            return -1
        };
        var q = function (w, y) {
            var x = [];
            if (r(w) !== "array") {
                w = [w]
            }
            if (r(y) !== "array") {
                y = [y]
            }
            for (var v in w) {
                if (u(w[v], y) === -1) {
                    x.push(w[v])
                }
            }
            return x.length ? x : false
        };
        var t = function (x, w) {
            var v = [];
            p(x, function (y) {
                if (u(y, w) !== -1) {
                    v.push(y)
                }
            });
            return v.length ? v : null
        };
        var m = function (x) {
            var w, v = [];
            for (w = 0; w < x.length; w++) {
                v[w] = x[w]
            }
            return v
        };
        var o = (function () {
            var v = 0;
            return function (y) {
                var w = new Date().getTime().toString(32), x;
                for (x = 0; x < 5; x++) {
                    w += Math.floor(Math.random() * 65535).toString(32)
                }
                return (y || "o_") + w + (v++).toString(32)
            }
        }());
        var j = function (v) {
            if (!v) {
                return v
            }
            return String.prototype.trim ? String.prototype.trim.call(v) : v.toString().replace(/^\s*/, "").replace(/\s*$/, "")
        };
        var k = function (v) {
            if (typeof(v) !== "string") {
                return v
            }
            var x = {t: 1099511627776, g: 1073741824, m: 1048576, k: 1024}, w;
            v = /^([0-9]+)([mgk]?)$/.exec(v.toLowerCase().replace(/[^0-9mkg]/g, ""));
            w = v[2];
            v = +v[1];
            if (x.hasOwnProperty(w)) {
                v *= x[w]
            }
            return v
        };
        return {
            guid: o,
            typeOf: r,
            extend: n,
            each: p,
            isEmptyObj: s,
            inSeries: l,
            inParallel: i,
            inArray: u,
            arrayDiff: q,
            arrayIntersect: t,
            toArray: m,
            trim: j,
            parseSizeStr: k
        }
    });
    h("moxie/core/I18n", ["moxie/core/utils/Basic"], function (j) {
        var i = {};
        return {
            addI18n: function (k) {
                return j.extend(i, k)
            }, translate: function (k) {
                return i[k] || k
            }, _: function (k) {
                return this.translate(k)
            }, sprintf: function (l) {
                var k = [].slice.call(arguments, 1);
                return l.replace(/%[a-z]/g, function () {
                    var m = k.shift();
                    return j.typeOf(m) !== "undefined" ? m : ""
                })
            }
        }
    });
    h("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function (l, k) {
        var i = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-word,doc,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe";
        var j = {
            mimes: {}, extensions: {}, addMimeType: function (m) {
                var n = m.split(/,/), o, q, p;
                for (o = 0; o < n.length; o += 2) {
                    p = n[o + 1].split(/ /);
                    for (q = 0; q < p.length; q++) {
                        this.mimes[p[q]] = n[o]
                    }
                    this.extensions[n[o]] = p
                }
            }, extList2mimes: function (s, t) {
                var n = this, r, o, q, p, m = [];
                for (o = 0; o < s.length; o++) {
                    r = s[o].extensions.split(/\s*,\s*/);
                    for (q = 0; q < r.length; q++) {
                        if (r[q] === "*") {
                            return []
                        }
                        p = n.mimes[r[q]];
                        if (!p) {
                            if (t && /^\w+$/.test(r[q])) {
                                m.push("." + r[q])
                            } else {
                                return []
                            }
                        } else {
                            if (l.inArray(p, m) === -1) {
                                m.push(p)
                            }
                        }
                    }
                }
                return m
            }, mimes2exts: function (m) {
                var n = this, o = [];
                l.each(m, function (q) {
                    if (q === "*") {
                        o = [];
                        return false
                    }
                    var p = q.match(/^(\w+)\/(\*|\w+)$/);
                    if (p) {
                        if (p[2] === "*") {
                            l.each(n.extensions, function (r, s) {
                                if ((new RegExp("^" + p[1] + "/")).test(s)) {
                                    [].push.apply(o, n.extensions[s])
                                }
                            })
                        } else {
                            if (n.extensions[q]) {
                                [].push.apply(o, n.extensions[q])
                            }
                        }
                    }
                });
                return o
            }, mimes2extList: function (m) {
                var o = [], n = [];
                if (l.typeOf(m) === "string") {
                    m = l.trim(m).split(/\s*,\s*/)
                }
                n = this.mimes2exts(m);
                o.push({title: k.translate("Files"), extensions: n.length ? n.join(",") : "*"});
                o.mimes = m;
                return o
            }, getFileExtension: function (n) {
                var m = n && n.match(/\.([^.]+)$/);
                if (m) {
                    return m[1].toLowerCase()
                }
                return ""
            }, getFileMime: function (m) {
                return this.mimes[this.getFileExtension(m)] || ""
            }
        };
        j.addMimeType(i);
        return j
    });
    h("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function (m) {
        var k = (function (r) {
            var H = "", G = "?", B = "function", t = "undefined", p = "object", q = "major", C = "model", s = "name", y = "type", w = "vendor", E = "version", n = "architecture", u = "console", A = "mobile", F = "tablet";
            var o = {
                has: function (J, I) {
                    return I.toLowerCase().indexOf(J.toLowerCase()) !== -1
                }, lowerize: function (I) {
                    return I.toLowerCase()
                }
            };
            var D = {
                rgx: function () {
                    for (var T, N = 0, L, K, J, I, O, P, Q = arguments; N < Q.length; N += 2) {
                        var S = Q[N], R = Q[N + 1];
                        if (typeof(T) === t) {
                            T = {};
                            for (J in R) {
                                I = R[J];
                                if (typeof(I) === p) {
                                    T[I[0]] = r
                                } else {
                                    T[I] = r
                                }
                            }
                        }
                        for (L = K = 0; L < S.length; L++) {
                            O = S[L].exec(this.getUA());
                            if (!!O) {
                                for (J = 0; J < R.length; J++) {
                                    P = O[++K];
                                    I = R[J];
                                    if (typeof(I) === p && I.length > 0) {
                                        if (I.length == 2) {
                                            if (typeof(I[1]) == B) {
                                                T[I[0]] = I[1].call(this, P)
                                            } else {
                                                T[I[0]] = I[1]
                                            }
                                        } else {
                                            if (I.length == 3) {
                                                if (typeof(I[1]) === B && !(I[1].exec && I[1].test)) {
                                                    T[I[0]] = P ? I[1].call(this, P, I[2]) : r
                                                } else {
                                                    T[I[0]] = P ? P.replace(I[1], I[2]) : r
                                                }
                                            } else {
                                                if (I.length == 4) {
                                                    T[I[0]] = P ? I[3].call(this, P.replace(I[1], I[2])) : r
                                                }
                                            }
                                        }
                                    } else {
                                        T[I] = P ? P : r
                                    }
                                }
                                break
                            }
                        }
                        if (!!O) {
                            break
                        }
                    }
                    return T
                }, str: function (L, K) {
                    for (var J in K) {
                        if (typeof(K[J]) === p && K[J].length > 0) {
                            for (var I = 0; I < K[J].length; I++) {
                                if (o.has(K[J][I], L)) {
                                    return (J === G) ? r : J
                                }
                            }
                        } else {
                            if (o.has(K[J], L)) {
                                return (J === G) ? r : J
                            }
                        }
                    }
                    return L
                }
            };
            var z = {
                browser: {
                    oldsafari: {
                        major: {"1": ["/8", "/1", "/3"], "2": "/4", "?": "/"},
                        version: {
                            "1.0": "/8",
                            "1.2": "/1",
                            "1.3": "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}},
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            "2000": "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            "7": "NT 6.1",
                            "8": "NT 6.2",
                            "8.1": "NT 6.3",
                            RT: "ARM"
                        }
                    }
                }
            };
            var x = {
                browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [s, E, q], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[s, "Opera"], E, q], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [s, E, q], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[s, "IE"], E, q], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[s, "Yandex"], E, q], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[s, /_/g, " "], E, q], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [s, E, q], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[s, "Dolphin"], E, q], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[s, "Chrome"], E, q], [/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i], [[s, "Android Browser"], E, q], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [E, q, [s, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [E, q, s], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [s, [q, D.str, z.browser.oldsafari.major], [E, D.str, z.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [s, E, q], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[s, "Netscape"], E, q], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [s, E, q]],
                engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, E], [/rv\:([\w\.]+).*(gecko)/i], [E, s]],
                os: [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [E, D.str, z.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [E, D.str, z.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], E], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [s, E], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[s, "Symbian"], E], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], E], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [s, E], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], E], [/(sunos)\s?([\w\.]+\d)*/i], [[s, "Solaris"], E], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [s, E], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[s, "iOS"], [E, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [s, [E, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [s, E]]
            };
            var v = function (I) {
                var J = I || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : H);
                this.getBrowser = function () {
                    return D.rgx.apply(this, x.browser)
                };
                this.getEngine = function () {
                    return D.rgx.apply(this, x.engine)
                };
                this.getOS = function () {
                    return D.rgx.apply(this, x.os)
                };
                this.getResult = function () {
                    return {ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS()}
                };
                this.getUA = function () {
                    return J
                };
                this.setUA = function (K) {
                    J = K;
                    return this
                };
                this.setUA(J)
            };
            return new v().getResult()
        })();

        function j(v, t, o) {
            var s = 0, u = 0, n = 0, p = {
                dev: -6,
                alpha: -5,
                a: -5,
                beta: -4,
                b: -4,
                RC: -3,
                rc: -3,
                "#": -2,
                p: 1,
                pl: 1
            }, q = function (w) {
                w = ("" + w).replace(/[_\-+]/g, ".");
                w = w.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
                return (!w.length ? [-8] : w.split("."))
            }, r = function (w) {
                return !w ? 0 : (isNaN(w) ? p[w] || -7 : parseInt(w, 10))
            };
            v = q(v);
            t = q(t);
            u = Math.max(v.length, t.length);
            for (s = 0; s < u; s++) {
                if (v[s] == t[s]) {
                    continue
                }
                v[s] = r(v[s]);
                t[s] = r(t[s]);
                if (v[s] < t[s]) {
                    n = -1;
                    break
                } else {
                    if (v[s] > t[s]) {
                        n = 1;
                        break
                    }
                }
            }
            if (!o) {
                return n
            }
            switch (o) {
                case">":
                case"gt":
                    return (n > 0);
                case">=":
                case"ge":
                    return (n >= 0);
                case"<=":
                case"le":
                    return (n <= 0);
                case"==":
                case"=":
                case"eq":
                    return (n === 0);
                case"<>":
                case"!=":
                case"ne":
                    return (n !== 0);
                case"":
                case"<":
                case"lt":
                    return (n < 0);
                default:
                    return null
            }
        }

        var l = (function () {
            var n = {
                define_property: (function () {
                    return false
                }()), create_canvas: (function () {
                    var o = document.createElement("canvas");
                    return !!(o.getContext && o.getContext("2d"))
                }()), return_response_type: function (o) {
                    try {
                        if (m.inArray(o, ["", "text", "document"]) !== -1) {
                            return true
                        } else {
                            if (window.XMLHttpRequest) {
                                var q = new XMLHttpRequest();
                                q.open("get", "/");
                                if ("responseType" in q) {
                                    q.responseType = o;
                                    if (q.responseType !== o) {
                                        return false
                                    }
                                    return true
                                }
                            }
                        }
                    } catch (p) {
                    }
                    return false
                }, use_data_uri: (function () {
                    var o = new Image();
                    o.onload = function () {
                        n.use_data_uri = (o.width === 1 && o.height === 1)
                    };
                    setTimeout(function () {
                        o.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    }, 1);
                    return false
                }()), use_data_uri_over32kb: function () {
                    return n.use_data_uri && (i.browser !== "IE" || i.version >= 9)
                }, use_data_uri_of: function (o) {
                    return (n.use_data_uri && o < 33000 || n.use_data_uri_over32kb())
                }, use_fileinput: function () {
                    var o = document.createElement("input");
                    o.setAttribute("type", "file");
                    return !o.disabled
                }
            };
            return function (p) {
                var o = [].slice.call(arguments);
                o.shift();
                return m.typeOf(n[p]) === "function" ? n[p].apply(this, o) : !!n[p]
            }
        }());
        var i = {
            can: l,
            browser: k.browser.name,
            version: parseFloat(k.browser.major),
            os: k.os.name,
            osVersion: k.os.version,
            verComp: j,
            swf_url: "../flash/Moxie.swf",
            xap_url: "../silverlight/Moxie.xap",
            global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
        };
        i.OS = i.os;
        return i
    });
    h("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function (j) {
        var k = function (q) {
            if (typeof q !== "string") {
                return q
            }
            return document.getElementById(q)
        };
        var l = function (s, r) {
            if (!s.className) {
                return false
            }
            var q = new RegExp("(^|\\s+)" + r + "(\\s+|$)");
            return q.test(s.className)
        };
        var m = function (r, q) {
            if (!l(r, q)) {
                r.className = !r.className ? q : r.className.replace(/\s+$/, "") + " " + q
            }
        };
        var p = function (s, r) {
            if (s.className) {
                var q = new RegExp("(^|\\s+)" + r + "(\\s+|$)");
                s.className = s.className.replace(q, function (u, t, v) {
                    return t === " " && v === " " ? " " : ""
                })
            }
        };
        var i = function (r, q) {
            if (r.currentStyle) {
                return r.currentStyle[q]
            } else {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(r, null)[q]
                }
            }
        };
        var o = function (r, v) {
            var w = 0, u = 0, A, z = document, s, t;
            r = r;
            v = v || z.body;
            function q(E) {
                var C, D, B = 0, F = 0;
                if (E) {
                    D = E.getBoundingClientRect();
                    C = z.compatMode === "CSS1Compat" ? z.documentElement : z.body;
                    B = D.left + C.scrollLeft;
                    F = D.top + C.scrollTop
                }
                return {x: B, y: F}
            }

            if (r && r.getBoundingClientRect && j.browser === "IE" && (!z.documentMode || z.documentMode < 8)) {
                s = q(r);
                t = q(v);
                return {x: s.x - t.x, y: s.y - t.y}
            }
            A = r;
            while (A && A != v && A.nodeType) {
                w += A.offsetLeft || 0;
                u += A.offsetTop || 0;
                A = A.offsetParent
            }
            A = r.parentNode;
            while (A && A != v && A.nodeType) {
                w -= A.scrollLeft || 0;
                u -= A.scrollTop || 0;
                A = A.parentNode
            }
            return {x: w, y: u}
        };
        var n = function (q) {
            return {w: q.offsetWidth || q.clientWidth, h: q.offsetHeight || q.clientHeight}
        };
        return {get: k, hasClass: l, addClass: m, removeClass: p, getStyle: i, getPos: o, getSize: n}
    });
    h("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function (j) {
        function i(m, l) {
            var k;
            for (k in m) {
                if (m[k] === l) {
                    return k
                }
            }
            return null
        }

        return {
            RuntimeError: (function () {
                var k = {NOT_INIT_ERR: 1, NOT_SUPPORTED_ERR: 9, JS_ERR: 4};

                function l(m) {
                    this.code = m;
                    this.name = i(k, m);
                    this.message = this.name + ": RuntimeError " + this.code
                }

                j.extend(l, k);
                l.prototype = Error.prototype;
                return l
            }()), OperationNotAllowedException: (function () {
                function k(l) {
                    this.code = l;
                    this.name = "OperationNotAllowedException"
                }

                j.extend(k, {NOT_ALLOWED_ERR: 1});
                k.prototype = Error.prototype;
                return k
            }()), ImageError: (function () {
                var k = {WRONG_FORMAT: 1, MAX_RESOLUTION_ERR: 2};

                function l(m) {
                    this.code = m;
                    this.name = i(k, m);
                    this.message = this.name + ": ImageError " + this.code
                }

                j.extend(l, k);
                l.prototype = Error.prototype;
                return l
            }()), FileException: (function () {
                var k = {
                    NOT_FOUND_ERR: 1,
                    SECURITY_ERR: 2,
                    ABORT_ERR: 3,
                    NOT_READABLE_ERR: 4,
                    ENCODING_ERR: 5,
                    NO_MODIFICATION_ALLOWED_ERR: 6,
                    INVALID_STATE_ERR: 7,
                    SYNTAX_ERR: 8
                };

                function l(m) {
                    this.code = m;
                    this.name = i(k, m);
                    this.message = this.name + ": FileException " + this.code
                }

                j.extend(l, k);
                l.prototype = Error.prototype;
                return l
            }()), DOMException: (function () {
                var k = {
                    INDEX_SIZE_ERR: 1,
                    DOMSTRING_SIZE_ERR: 2,
                    HIERARCHY_REQUEST_ERR: 3,
                    WRONG_DOCUMENT_ERR: 4,
                    INVALID_CHARACTER_ERR: 5,
                    NO_DATA_ALLOWED_ERR: 6,
                    NO_MODIFICATION_ALLOWED_ERR: 7,
                    NOT_FOUND_ERR: 8,
                    NOT_SUPPORTED_ERR: 9,
                    INUSE_ATTRIBUTE_ERR: 10,
                    INVALID_STATE_ERR: 11,
                    SYNTAX_ERR: 12,
                    INVALID_MODIFICATION_ERR: 13,
                    NAMESPACE_ERR: 14,
                    INVALID_ACCESS_ERR: 15,
                    VALIDATION_ERR: 16,
                    TYPE_MISMATCH_ERR: 17,
                    SECURITY_ERR: 18,
                    NETWORK_ERR: 19,
                    ABORT_ERR: 20,
                    URL_MISMATCH_ERR: 21,
                    QUOTA_EXCEEDED_ERR: 22,
                    TIMEOUT_ERR: 23,
                    INVALID_NODE_TYPE_ERR: 24,
                    DATA_CLONE_ERR: 25
                };

                function l(m) {
                    this.code = m;
                    this.name = i(k, m);
                    this.message = this.name + ": DOMException " + this.code
                }

                j.extend(l, k);
                l.prototype = Error.prototype;
                return l
            }()), EventException: (function () {
                function k(l) {
                    this.code = l;
                    this.name = "EventException"
                }

                j.extend(k, {UNSPECIFIED_EVENT_TYPE_ERR: 0});
                k.prototype = Error.prototype;
                return k
            }())
        }
    });
    h("moxie/core/EventTarget", ["moxie/core/Exceptions", "moxie/core/utils/Basic"], function (i, j) {
        function k() {
            var l = {};
            j.extend(this, {
                uid: null, init: function () {
                    if (!this.uid) {
                        this.uid = j.guid("uid_")
                    }
                }, addEventListener: function (q, p, n, o) {
                    var m = this, r;
                    q = j.trim(q);
                    if (/\s/.test(q)) {
                        j.each(q.split(/\s+/), function (s) {
                            m.addEventListener(s, p, n, o)
                        });
                        return
                    }
                    q = q.toLowerCase();
                    n = parseInt(n, 10) || 0;
                    r = l[this.uid] && l[this.uid][q] || [];
                    r.push({fn: p, priority: n, scope: o || this});
                    if (!l[this.uid]) {
                        l[this.uid] = {}
                    }
                    l[this.uid][q] = r
                }, hasEventListener: function (m) {
                    return m ? !!(l[this.uid] && l[this.uid][m]) : !!l[this.uid]
                }, removeEventListener: function (o, n) {
                    o = o.toLowerCase();
                    var p = l[this.uid] && l[this.uid][o], m;
                    if (p) {
                        if (n) {
                            for (m = p.length - 1; m >= 0; m--) {
                                if (p[m].fn === n) {
                                    p.splice(m, 1);
                                    break
                                }
                            }
                        } else {
                            p = []
                        }
                        if (!p.length) {
                            delete l[this.uid][o];
                            if (j.isEmptyObj(l[this.uid])) {
                                delete l[this.uid]
                            }
                        }
                    }
                }, removeAllEventListeners: function () {
                    if (l[this.uid]) {
                        delete l[this.uid]
                    }
                }, dispatchEvent: function (r) {
                    var o, p, q, s, t = {}, u = true, m;
                    if (j.typeOf(r) !== "string") {
                        s = r;
                        if (j.typeOf(s.type) === "string") {
                            r = s.type;
                            if (s.total !== m && s.loaded !== m) {
                                t.total = s.total;
                                t.loaded = s.loaded
                            }
                            t.async = s.async || false
                        } else {
                            throw new i.EventException(i.EventException.UNSPECIFIED_EVENT_TYPE_ERR)
                        }
                    }
                    if (r.indexOf("::") !== -1) {
                        (function (v) {
                            o = v[0];
                            r = v[1]
                        }(r.split("::")))
                    } else {
                        o = this.uid
                    }
                    r = r.toLowerCase();
                    p = l[o] && l[o][r];
                    if (p) {
                        p.sort(function (w, v) {
                            return v.priority - w.priority
                        });
                        q = [].slice.call(arguments);
                        q.shift();
                        t.type = r;
                        q.unshift(t);
                        var n = [];
                        j.each(p, function (v) {
                            q[0].target = v.scope;
                            if (t.async) {
                                n.push(function (w) {
                                    setTimeout(function () {
                                        w(v.fn.apply(v.scope, q) === false)
                                    }, 1)
                                })
                            } else {
                                n.push(function (w) {
                                    w(v.fn.apply(v.scope, q) === false)
                                })
                            }
                        });
                        if (n.length) {
                            j.inSeries(n, function (v) {
                                u = !v
                            })
                        }
                    }
                    return u
                }, bind: function () {
                    this.addEventListener.apply(this, arguments)
                }, unbind: function () {
                    this.removeEventListener.apply(this, arguments)
                }, unbindAll: function () {
                    this.removeAllEventListeners.apply(this, arguments)
                }, trigger: function () {
                    return this.dispatchEvent.apply(this, arguments)
                }, convertEventPropsToHandlers: function (m) {
                    var o;
                    if (j.typeOf(m) !== "array") {
                        m = [m]
                    }
                    for (var n = 0; n < m.length; n++) {
                        o = "on" + m[n];
                        if (j.typeOf(this[o]) === "function") {
                            this.addEventListener(m[n], this[o])
                        } else {
                            if (j.typeOf(this[o]) === "undefined") {
                                this[o] = null
                            }
                        }
                    }
                }
            })
        }

        k.instance = new k();
        return k
    });
    h("moxie/core/utils/Encode", [], function () {
        var k = function (m) {
            return unescape(encodeURIComponent(m))
        };
        var l = function (m) {
            return decodeURIComponent(escape(m))
        };
        var j = function (t, y) {
            if (typeof(window.atob) === "function") {
                return y ? l(window.atob(t)) : window.atob(t)
            }
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o, n, m, x, w, v, u, z, s = 0, A = 0, q = "", r = [];
            if (!t) {
                return t
            }
            t += "";
            do {
                x = p.indexOf(t.charAt(s++));
                w = p.indexOf(t.charAt(s++));
                v = p.indexOf(t.charAt(s++));
                u = p.indexOf(t.charAt(s++));
                z = x << 18 | w << 12 | v << 6 | u;
                o = z >> 16 & 255;
                n = z >> 8 & 255;
                m = z & 255;
                if (v == 64) {
                    r[A++] = String.fromCharCode(o)
                } else {
                    if (u == 64) {
                        r[A++] = String.fromCharCode(o, n)
                    } else {
                        r[A++] = String.fromCharCode(o, n, m)
                    }
                }
            } while (s < t.length);
            q = r.join("");
            return y ? l(q) : q
        };
        var i = function (v, A) {
            if (A) {
                k(v)
            }
            if (typeof(window.btoa) === "function") {
                return window.btoa(v)
            }
            var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var p, o, n, z, y, x, w, B, u = 0, C = 0, t = "", s = [];
            if (!v) {
                return v
            }
            do {
                p = v.charCodeAt(u++);
                o = v.charCodeAt(u++);
                n = v.charCodeAt(u++);
                B = p << 16 | o << 8 | n;
                z = B >> 18 & 63;
                y = B >> 12 & 63;
                x = B >> 6 & 63;
                w = B & 63;
                s[C++] = q.charAt(z) + q.charAt(y) + q.charAt(x) + q.charAt(w)
            } while (u < v.length);
            t = s.join("");
            var m = v.length % 3;
            return (m ? t.slice(0, m - 3) : t) + "===".slice(m || 3)
        };
        return {utf8_encode: k, utf8_decode: l, atob: j, btoa: i}
    });
    h("moxie/runtime/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function (m, l, n) {
        var i = {}, j = {};

        function k(w, t, r, q, p) {
            var v = this, o, u = m.guid(t + "_"), s = p || "browser";
            w = w || {};
            j[u] = this;
            r = m.extend({
                access_binary: false,
                access_image_binary: false,
                display_media: false,
                do_cors: false,
                drag_and_drop: false,
                filter_by_extension: true,
                resize_image: false,
                report_upload_progress: false,
                return_response_headers: false,
                return_response_type: false,
                return_status_code: true,
                send_custom_headers: false,
                select_file: false,
                select_folder: false,
                select_multiple: true,
                send_binary_string: false,
                send_browser_cookies: true,
                send_multipart: true,
                slice_blob: false,
                stream_upload: false,
                summon_file_dialog: false,
                upload_filesize: true,
                use_http_method: true
            }, r);
            if (w.preferred_caps) {
                s = k.getMode(q, w.preferred_caps, s)
            }
            o = (function () {
                var x = {};
                return {
                    exec: function (A, y, B, z) {
                        if (o[y]) {
                            if (!x[A]) {
                                x[A] = {context: this, instance: new o[y]()}
                            }
                            if (x[A].instance[B]) {
                                return x[A].instance[B].apply(this, z)
                            }
                        }
                    }, removeInstance: function (y) {
                        delete x[y]
                    }, removeAllInstances: function () {
                        var y = this;
                        m.each(x, function (A, z) {
                            if (m.typeOf(A.instance.destroy) === "function") {
                                A.instance.destroy.call(A.context)
                            }
                            y.removeInstance(z)
                        })
                    }
                }
            }());
            m.extend(this, {
                initialized: false,
                uid: u,
                type: t,
                mode: k.getMode(q, (w.required_caps), s),
                shimid: u + "_container",
                clients: 0,
                options: w,
                can: function (z, A) {
                    var x = arguments[2] || r;
                    if (m.typeOf(z) === "string" && m.typeOf(A) === "undefined") {
                        z = k.parseCaps(z)
                    }
                    if (m.typeOf(z) === "object") {
                        for (var y in z) {
                            if (!this.can(y, z[y], x)) {
                                return false
                            }
                        }
                        return true
                    }
                    if (m.typeOf(x[z]) === "function") {
                        return x[z].call(this, A)
                    } else {
                        return (A === x[z])
                    }
                },
                getShimContainer: function () {
                    var x, y = l.get(this.shimid);
                    if (!y) {
                        x = this.options.container ? l.get(this.options.container) : document.body;
                        y = document.createElement("div");
                        y.id = this.shimid;
                        y.className = "moxie-shim moxie-shim-" + this.type;
                        m.extend(y.style, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden"
                        });
                        x.appendChild(y);
                        x = null
                    }
                    return y
                },
                getShim: function () {
                    return o
                },
                shimExec: function (y, z) {
                    var x = [].slice.call(arguments, 2);
                    return v.getShim().exec.call(this, this.uid, y, z, x)
                },
                exec: function (y, z) {
                    var x = [].slice.call(arguments, 2);
                    if (v[y] && v[y][z]) {
                        return v[y][z].apply(this, x)
                    }
                    return v.shimExec.apply(this, arguments)
                },
                destroy: function () {
                    if (!v) {
                        return
                    }
                    var x = l.get(this.shimid);
                    if (x) {
                        x.parentNode.removeChild(x)
                    }
                    if (o) {
                        o.removeAllInstances()
                    }
                    this.unbindAll();
                    delete j[this.uid];
                    this.uid = null;
                    u = v = o = x = null
                }
            });
            if (this.mode && w.required_caps && !this.can(w.required_caps)) {
                this.mode = false
            }
        }

        k.order = "html5,flash,silverlight,html4";
        k.getRuntime = function (o) {
            return j[o] ? j[o] : false
        };
        k.addConstructor = function (p, o) {
            o.prototype = n.instance;
            i[p] = o
        };
        k.getConstructor = function (o) {
            return i[o] || null
        };
        k.getInfo = function (o) {
            var p = k.getRuntime(o);
            if (p) {
                return {
                    uid: p.uid, type: p.type, mode: p.mode, can: function () {
                        return p.can.apply(p, arguments)
                    }
                }
            }
            return null
        };
        k.parseCaps = function (o) {
            var p = {};
            if (m.typeOf(o) !== "string") {
                return o || {}
            }
            m.each(o.split(","), function (q) {
                p[q] = true
            });
            return p
        };
        k.can = function (p, r) {
            var q, o = k.getConstructor(p), s;
            if (o) {
                q = new o({required_caps: r});
                s = q.mode;
                q.destroy();
                return !!s
            }
            return false
        };
        k.thatCan = function (q, r) {
            var p = (r || k.order).split(/\s*,\s*/);
            for (var o in p) {
                if (k.can(p[o], q)) {
                    return p[o]
                }
            }
            return null
        };
        k.getMode = function (o, r, p) {
            var q = null;
            if (m.typeOf(p) === "undefined") {
                p = "browser"
            }
            if (r && !m.isEmptyObj(o)) {
                m.each(r, function (u, s) {
                    if (o.hasOwnProperty(s)) {
                        var t = o[s](u);
                        if (typeof(t) === "string") {
                            t = [t]
                        }
                        if (!q) {
                            q = t
                        } else {
                            if (!(q = m.arrayIntersect(q, t))) {
                                return (q = false)
                            }
                        }
                    }
                });
                if (q) {
                    return m.inArray(p, q) !== -1 ? p : q[0]
                } else {
                    if (q === false) {
                        return false
                    }
                }
            }
            return p
        };
        k.capTrue = function () {
            return true
        };
        k.capFalse = function () {
            return false
        };
        k.capTest = function (o) {
            return function () {
                return !!o
            }
        };
        return k
    });
    h("moxie/runtime/RuntimeClient", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function (i, l, k) {
        return function j() {
            var m;
            l.extend(this, {
                connectRuntime: function (q) {
                    var o = this, p;

                    function n(r) {
                        var t, s;
                        if (!r.length) {
                            o.trigger("RuntimeError", new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR));
                            m = null;
                            return
                        }
                        t = r.shift();
                        s = k.getConstructor(t);
                        if (!s) {
                            n(r);
                            return
                        }
                        m = new s(q);
                        m.bind("Init", function () {
                            m.initialized = true;
                            setTimeout(function () {
                                m.clients++;
                                o.trigger("RuntimeInit", m)
                            }, 1)
                        });
                        m.bind("Error", function () {
                            m.destroy();
                            n(r)
                        });
                        if (!m.mode) {
                            m.trigger("Error");
                            return
                        }
                        m.init()
                    }

                    if (l.typeOf(q) === "string") {
                        p = q
                    } else {
                        if (l.typeOf(q.ruid) === "string") {
                            p = q.ruid
                        }
                    }
                    if (p) {
                        m = k.getRuntime(p);
                        if (m) {
                            m.clients++;
                            return m
                        } else {
                            throw new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR)
                        }
                    }
                    n((q.runtime_order || k.order).split(/\s*,\s*/))
                }, getRuntime: function () {
                    if (m && m.uid) {
                        return m
                    }
                    m = null;
                    return null
                }, disconnectRuntime: function () {
                    if (m && --m.clients <= 0) {
                        m.destroy();
                        m = null
                    }
                }
            })
        }
    });
    h("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function (l, j, k) {
        var i = {};

        function m(p, o) {
            function n(u, q, s) {
                var r, t = i[this.uid];
                if (l.typeOf(t) !== "string" || !t.length) {
                    return null
                }
                r = new m(null, {type: s, size: q - u});
                r.detach(t.substr(u, r.size));
                return r
            }

            k.call(this);
            if (p) {
                this.connectRuntime(p)
            }
            if (!o) {
                o = {}
            } else {
                if (l.typeOf(o) === "string") {
                    o = {data: o}
                }
            }
            l.extend(this, {
                uid: o.uid || l.guid("uid_"),
                ruid: p,
                size: o.size || 0,
                type: o.type || "",
                slice: function (s, q, r) {
                    if (this.isDetached()) {
                        return n.apply(this, arguments)
                    }
                    return this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), s, q, r)
                },
                getSource: function () {
                    if (!i[this.uid]) {
                        return null
                    }
                    return i[this.uid]
                },
                detach: function (r) {
                    if (this.ruid) {
                        this.getRuntime().exec.call(this, "Blob", "destroy");
                        this.disconnectRuntime();
                        this.ruid = null
                    }
                    r = r || "";
                    var q = r.match(/^data:([^;]*);base64,/);
                    if (q) {
                        this.type = q[1];
                        r = j.atob(r.substring(r.indexOf("base64,") + 7))
                    }
                    this.size = r.length;
                    i[this.uid] = r
                },
                isDetached: function () {
                    return !this.ruid && l.typeOf(i[this.uid]) === "string"
                },
                destroy: function () {
                    this.detach();
                    delete i[this.uid]
                }
            });
            if (o.data) {
                this.detach(o.data)
            } else {
                i[this.uid] = o
            }
        }

        return m
    });
    h("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function (k, j, l) {
        function i(n, o) {
            var m, p;
            if (!o) {
                o = {}
            }
            if (o.type && o.type !== "") {
                p = o.type
            } else {
                p = j.getFileMime(o.name)
            }
            if (o.name) {
                m = o.name.replace(/\\/g, "/");
                m = m.substr(m.lastIndexOf("/") + 1)
            } else {
                var q = p.split("/")[0];
                m = k.guid((q !== "" ? q : "file") + "_");
                if (j.extensions[p]) {
                    m += "." + j.extensions[p][0]
                }
            }
            l.apply(this, arguments);
            k.extend(this, {
                type: p || "",
                name: m || k.guid("file_"),
                lastModifiedDate: o.lastModifiedDate || (new Date()).toLocaleString()
            })
        }

        i.prototype = l.prototype;
        return i
    });
    h("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/file/File", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function (j, m, l, q, s, k, o, i, p) {
        var r = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];

        function n(w) {
            var u = this, t, v, x;
            if (j.inArray(j.typeOf(w), ["string", "node"]) !== -1) {
                w = {browse_button: w}
            }
            v = l.get(w.browse_button);
            if (!v) {
                throw new q.DOMException(q.DOMException.NOT_FOUND_ERR)
            }
            x = {
                accept: [{title: k.translate("All Files"), extensions: "*"}],
                name: "file",
                multiple: false,
                required_caps: false,
                container: v.parentNode || document.body
            };
            w = j.extend({}, x, w);
            if (typeof(w.required_caps) === "string") {
                w.required_caps = i.parseCaps(w.required_caps)
            }
            if (typeof(w.accept) === "string") {
                w.accept = m.mimes2extList(w.accept)
            }
            t = l.get(w.container);
            if (!t) {
                t = document.body
            }
            if (l.getStyle(t, "position") === "static") {
                t.style.position = "relative"
            }
            t = v = null;
            p.call(u);
            j.extend(u, {
                uid: j.guid("uid_"), ruid: null, shimid: null, files: null, init: function () {
                    u.convertEventPropsToHandlers(r);
                    u.bind("RuntimeInit", function (z, y) {
                        u.ruid = y.uid;
                        u.shimid = y.shimid;
                        u.bind("Ready", function () {
                            u.trigger("Refresh")
                        }, 999);
                        u.bind("Change", function () {
                            var A = y.exec.call(u, "FileInput", "getFiles");
                            u.files = [];
                            j.each(A, function (B) {
                                if (B.size === 0) {
                                    return true
                                }
                                u.files.push(new o(u.ruid, B))
                            })
                        }, 999);
                        u.bind("Refresh", function () {
                            var D, C, B, A;
                            B = l.get(w.browse_button);
                            A = l.get(y.shimid);
                            if (B) {
                                D = l.getPos(B, l.get(w.container));
                                C = l.getSize(B);
                                if (A) {
                                    j.extend(A.style, {
                                        top: D.y + "px",
                                        left: D.x + "px",
                                        width: C.w + "px",
                                        height: C.h + "px"
                                    })
                                }
                            }
                            A = B = null
                        });
                        y.exec.call(u, "FileInput", "init", w)
                    });
                    u.connectRuntime(j.extend({}, w, {required_caps: {select_file: true}}))
                }, disable: function (z) {
                    var y = this.getRuntime();
                    if (y) {
                        y.exec.call(this, "FileInput", "disable", j.typeOf(z) === "undefined" ? true : z)
                    }
                }, refresh: function () {
                    u.trigger("Refresh")
                }, destroy: function () {
                    var y = this.getRuntime();
                    if (y) {
                        y.exec.call(this, "FileInput", "destroy");
                        this.disconnectRuntime()
                    }
                    if (j.typeOf(this.files) === "array") {
                        j.each(this.files, function (z) {
                            z.destroy()
                        })
                    }
                    this.files = null
                }
            })
        }

        n.prototype = s.instance;
        return n
    });
    h("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function (k, l, p, i, n, o, r, m) {
        var q = ["ready", "dragenter", "dragleave", "drop", "error"];

        function j(t) {
            var s = this, u;
            if (typeof(t) === "string") {
                t = {drop_zone: t}
            }
            u = {accept: [{title: k.translate("All Files"), extensions: "*"}], required_caps: {drag_and_drop: true}};
            t = typeof(t) === "object" ? i.extend({}, u, t) : u;
            t.container = l.get(t.drop_zone) || document.body;
            if (l.getStyle(t.container, "position") === "static") {
                t.container.style.position = "relative"
            }
            if (typeof(t.accept) === "string") {
                t.accept = m.mimes2extList(t.accept)
            }
            o.call(s);
            i.extend(s, {
                uid: i.guid("uid_"), ruid: null, files: null, init: function () {
                    s.convertEventPropsToHandlers(q);
                    s.bind("RuntimeInit", function (w, v) {
                        s.ruid = v.uid;
                        s.bind("Drop", function () {
                            var x = v.exec.call(s, "FileDrop", "getFiles");
                            s.files = [];
                            i.each(x, function (y) {
                                s.files.push(new n(s.ruid, y))
                            })
                        }, 999);
                        v.exec.call(s, "FileDrop", "init", t);
                        s.dispatchEvent("ready")
                    });
                    s.connectRuntime(t)
                }, destroy: function () {
                    var v = this.getRuntime();
                    if (v) {
                        v.exec.call(this, "FileDrop", "destroy");
                        this.disconnectRuntime()
                    }
                    this.files = null
                }
            })
        }

        j.prototype = r.instance;
        return j
    });
    h("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (k, j, l) {
        function i() {
            this.uid = k.guid("uid_");
            j.call(this);
            this.destroy = function () {
                this.disconnectRuntime();
                this.unbindAll()
            }
        }

        i.prototype = l.instance;
        return i
    });
    h("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/RuntimeTarget"], function (i, m, o, q, l, n, k) {
        var p = ["loadstart", "progress", "load", "abort", "error", "loadend"];

        function j() {
            var r = this, t;
            i.extend(this, {
                uid: i.guid("uid_"),
                readyState: j.EMPTY,
                result: null,
                error: null,
                readAsBinaryString: function (u) {
                    s.call(this, "readAsBinaryString", u)
                },
                readAsDataURL: function (u) {
                    s.call(this, "readAsDataURL", u)
                },
                readAsText: function (u) {
                    s.call(this, "readAsText", u)
                },
                abort: function () {
                    this.result = null;
                    if (i.inArray(this.readyState, [j.EMPTY, j.DONE]) !== -1) {
                        return
                    } else {
                        if (this.readyState === j.LOADING) {
                            this.readyState = j.DONE
                        }
                    }
                    if (t) {
                        t.getRuntime().exec.call(this, "FileReader", "abort")
                    }
                    this.trigger("abort");
                    this.trigger("loadend")
                },
                destroy: function () {
                    this.abort();
                    if (t) {
                        t.getRuntime().exec.call(this, "FileReader", "destroy");
                        t.disconnectRuntime()
                    }
                    r = t = null
                }
            });
            function s(z, v) {
                t = new k();
                function x(A) {
                    r.readyState = j.DONE;
                    r.error = A;
                    r.trigger("error");
                    w()
                }

                function w() {
                    t.destroy();
                    t = null;
                    r.trigger("loadend")
                }

                function u(A) {
                    t.bind("Error", function (C, B) {
                        x(B)
                    });
                    t.bind("Progress", function (B) {
                        r.result = A.exec.call(t, "FileReader", "getResult");
                        r.trigger(B)
                    });
                    t.bind("Load", function (B) {
                        r.readyState = j.DONE;
                        r.result = A.exec.call(t, "FileReader", "getResult");
                        r.trigger(B);
                        w()
                    });
                    A.exec.call(t, "FileReader", "read", z, v)
                }

                this.convertEventPropsToHandlers(p);
                if (this.readyState === j.LOADING) {
                    return x(new o.DOMException(o.DOMException.INVALID_STATE_ERR))
                }
                this.readyState = j.LOADING;
                this.trigger("loadstart");
                if (v instanceof l) {
                    if (v.isDetached()) {
                        var y = v.getSource();
                        switch (z) {
                            case"readAsText":
                            case"readAsBinaryString":
                                this.result = y;
                                break;
                            case"readAsDataURL":
                                this.result = "data:" + v.type + ";base64," + m.btoa(y);
                                break
                        }
                        this.readyState = j.DONE;
                        this.trigger("load");
                        w()
                    } else {
                        u(t.connectRuntime(v.ruid))
                    }
                } else {
                    x(new o.DOMException(o.DOMException.NOT_FOUND_ERR))
                }
            }
        }

        j.EMPTY = 0;
        j.LOADING = 1;
        j.DONE = 2;
        j.prototype = q.instance;
        return j
    });
    h("moxie/core/utils/Url", [], function () {
        var i = function (l, t) {
            var s = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], p = s.length, q = {
                http: 80,
                https: 443
            }, n = {}, r = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, o = r.exec(l || "");
            while (p--) {
                if (o[p]) {
                    n[s[p]] = o[p]
                }
            }
            if (!n.scheme) {
                if (!t || typeof(t) === "string") {
                    t = i(t || document.location.href)
                }
                n.scheme = t.scheme;
                n.host = t.host;
                n.port = t.port;
                var u = "";
                if (/^[^\/]/.test(n.path)) {
                    u = t.path;
                    if (!/(\/|\/[^\.]+)$/.test(u)) {
                        u = u.replace(/\/[^\/]+$/, "/")
                    } else {
                        u += "/"
                    }
                }
                n.path = u + (n.path || "")
            }
            if (!n.port) {
                n.port = q[n.scheme] || 80
            }
            n.port = parseInt(n.port, 10);
            if (!n.path) {
                n.path = "/"
            }
            delete n.source;
            return n
        };
        var k = function (m) {
            var n = {http: 80, https: 443}, l = i(m);
            return l.scheme + "://" + l.host + (l.port !== n[l.scheme] ? ":" + l.port : "") + l.path + (l.query ? l.query : "")
        };
        var j = function (m) {
            function l(n) {
                return [n.scheme, n.host, n.port].join("/")
            }

            if (typeof m === "string") {
                m = i(m)
            }
            return l(i()) === l(m)
        };
        return {parseUrl: i, resolveUrl: k, hasSameOrigin: j}
    });
    h("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function (k, j, i) {
        return function () {
            j.call(this);
            k.extend(this, {
                uid: k.guid("uid_"), readAsBinaryString: function (m) {
                    return l.call(this, "readAsBinaryString", m)
                }, readAsDataURL: function (m) {
                    return l.call(this, "readAsDataURL", m)
                }, readAsText: function (m) {
                    return l.call(this, "readAsText", m)
                }
            });
            function l(s, o) {
                if (o.isDetached()) {
                    var r = o.getSource();
                    switch (s) {
                        case"readAsBinaryString":
                            return r;
                        case"readAsDataURL":
                            return "data:" + o.type + ";base64," + i.btoa(r);
                        case"readAsText":
                            var n = "";
                            for (var p = 0, q = r.length; p < q; p++) {
                                n += String.fromCharCode(r[p])
                            }
                            return n
                    }
                } else {
                    var m = this.connectRuntime(o.ruid).exec.call(this, "FileReaderSync", "read", s, o);
                    this.disconnectRuntime();
                    return m
                }
            }
        }
    });
    h("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function (i, j, l) {
        function k() {
            var m, n = [];
            j.extend(this, {
                append: function (p, q) {
                    var o = this, r = j.typeOf(q);
                    if (q instanceof l) {
                        m = {name: p, value: q}
                    } else {
                        if ("array" === r) {
                            p += "[]";
                            j.each(q, function (s) {
                                o.append(p, s)
                            })
                        } else {
                            if ("object" === r) {
                                j.each(q, function (t, s) {
                                    o.append(p + "[" + s + "]", t)
                                })
                            } else {
                                if ("null" === r || "undefined" === r || "number" === r && isNaN(q)) {
                                    o.append(p, "false")
                                } else {
                                    n.push({name: p, value: q.toString()})
                                }
                            }
                        }
                    }
                }, hasBlob: function () {
                    return !!this.getBlob()
                }, getBlob: function () {
                    return m && m.value || null
                }, getBlobName: function () {
                    return m && m.name || null
                }, each: function (o) {
                    j.each(n, function (p) {
                        o(p.value, p.name)
                    });
                    if (m) {
                        o(m.value, m.name)
                    }
                }, destroy: function () {
                    m = null;
                    n = []
                }
            })
        }

        return k
    });
    h("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function (q, r, p, y, u, o, s, n, w, z, i, t) {
        var j = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            426: "Upgrade Required",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            510: "Not Extended"
        };

        function m() {
            this.uid = q.guid("uid_")
        }

        m.prototype = p.instance;
        var l = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];
        var k = 1, A = 2;

        function v() {
            var S = this, E = {
                timeout: 0,
                readyState: v.UNSENT,
                withCredentials: false,
                status: 0,
                statusText: "",
                responseType: "",
                responseXML: null,
                responseText: null,
                response: null
            }, Y = true, J, Q, R = {}, T, G, I = null, K = null, ab = false, B = false, x = false, L = false, D = false, H = false, O, X, W = null, Z = null, U = {}, P, V = "", C;
            q.extend(this, E, {
                uid: q.guid("uid_"), upload: new m(), open: function (ah, af, ag, ad, ae) {
                    var ac;
                    if (!ah || !af) {
                        throw new r.DOMException(r.DOMException.SYNTAX_ERR)
                    }
                    if (/[\u0100-\uffff]/.test(ah) || y.utf8_encode(ah) !== ah) {
                        throw new r.DOMException(r.DOMException.SYNTAX_ERR)
                    }
                    if (!!~q.inArray(ah.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"])) {
                        Q = ah.toUpperCase()
                    }
                    if (!!~q.inArray(Q, ["CONNECT", "TRACE", "TRACK"])) {
                        throw new r.DOMException(r.DOMException.SECURITY_ERR)
                    }
                    af = y.utf8_encode(af);
                    ac = u.parseUrl(af);
                    H = u.hasSameOrigin(ac);
                    J = u.resolveUrl(af);
                    if ((ad || ae) && !H) {
                        throw new r.DOMException(r.DOMException.INVALID_ACCESS_ERR)
                    }
                    T = ad || ac.user;
                    G = ae || ac.pass;
                    Y = ag || true;
                    if (Y === false && (aa("timeout") || aa("withCredentials") || aa("responseType") !== "")) {
                        throw new r.DOMException(r.DOMException.INVALID_ACCESS_ERR)
                    }
                    ab = !Y;
                    B = false;
                    R = {};
                    N.call(this);
                    aa("readyState", v.OPENED);
                    this.convertEventPropsToHandlers(["readystatechange"]);
                    this.dispatchEvent("readystatechange")
                }, setRequestHeader: function (ae, ad) {
                    var ac = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                    if (aa("readyState") !== v.OPENED || B) {
                        throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)
                    }
                    if (/[\u0100-\uffff]/.test(ae) || y.utf8_encode(ae) !== ae) {
                        throw new r.DOMException(r.DOMException.SYNTAX_ERR)
                    }
                    ae = q.trim(ae).toLowerCase();
                    if (!!~q.inArray(ae, ac) || /^(proxy\-|sec\-)/.test(ae)) {
                        return false
                    }
                    if (!R[ae]) {
                        R[ae] = ad
                    } else {
                        R[ae] += ", " + ad
                    }
                    return true
                }, getAllResponseHeaders: function () {
                    return V || ""
                }, getResponseHeader: function (ac) {
                    ac = ac.toLowerCase();
                    if (D || !!~q.inArray(ac, ["set-cookie", "set-cookie2"])) {
                        return null
                    }
                    if (V && V !== "") {
                        if (!C) {
                            C = {};
                            q.each(V.split(/\r\n/), function (ad) {
                                var ae = ad.split(/:\s+/);
                                if (ae.length === 2) {
                                    ae[0] = q.trim(ae[0]);
                                    C[ae[0].toLowerCase()] = {header: ae[0], value: q.trim(ae[1])}
                                }
                            })
                        }
                        if (C.hasOwnProperty(ac)) {
                            return C[ac].header + ": " + C[ac].value
                        }
                    }
                    return null
                }, overrideMimeType: function (ad) {
                    var ac, ae;
                    if (!!~q.inArray(aa("readyState"), [v.LOADING, v.DONE])) {
                        throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)
                    }
                    ad = q.trim(ad.toLowerCase());
                    if (/;/.test(ad) && (ac = ad.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))) {
                        ad = ac[1];
                        if (ac[2]) {
                            ae = ac[2]
                        }
                    }
                    if (!t.mimes[ad]) {
                        throw new r.DOMException(r.DOMException.SYNTAX_ERR)
                    }
                    W = ad;
                    Z = ae
                }, send: function (ae, ad) {
                    if (q.typeOf(ad) === "string") {
                        U = {ruid: ad}
                    } else {
                        if (!ad) {
                            U = {}
                        } else {
                            U = ad
                        }
                    }
                    this.convertEventPropsToHandlers(l);
                    this.upload.convertEventPropsToHandlers(l);
                    if (this.readyState !== v.OPENED || B) {
                        throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)
                    }
                    if (ae instanceof n) {
                        U.ruid = ae.ruid;
                        K = ae.type || "application/octet-stream"
                    } else {
                        if (ae instanceof z) {
                            if (ae.hasBlob()) {
                                var ac = ae.getBlob();
                                U.ruid = ac.ruid;
                                K = ac.type || "application/octet-stream"
                            }
                        } else {
                            if (typeof ae === "string") {
                                I = "UTF-8";
                                K = "text/plain;charset=UTF-8";
                                ae = y.utf8_encode(ae)
                            }
                        }
                    }
                    if (!this.withCredentials) {
                        this.withCredentials = (U.required_caps && U.required_caps.send_browser_cookies) && !H
                    }
                    x = (!ab && this.upload.hasEventListener());
                    D = false;
                    L = !ae;
                    if (!ab) {
                        B = true
                    }
                    F.call(this, ae)
                }, abort: function () {
                    D = true;
                    ab = false;
                    if (!~q.inArray(aa("readyState"), [v.UNSENT, v.OPENED, v.DONE])) {
                        aa("readyState", v.DONE);
                        B = false;
                        if (P) {
                            P.getRuntime().exec.call(P, "XMLHttpRequest", "abort", L)
                        } else {
                            throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)
                        }
                        L = true
                    } else {
                        aa("readyState", v.UNSENT)
                    }
                }, destroy: function () {
                    if (P) {
                        if (q.typeOf(P.destroy) === "function") {
                            P.destroy()
                        }
                        P = null
                    }
                    this.unbindAll();
                    if (this.upload) {
                        this.upload.unbindAll();
                        this.upload = null
                    }
                }
            });
            function aa(ad, ac) {
                if (!E.hasOwnProperty(ad)) {
                    return
                }
                if (arguments.length === 1) {
                    return i.can("define_property") ? E[ad] : S[ad]
                } else {
                    if (i.can("define_property")) {
                        E[ad] = ac
                    } else {
                        S[ad] = ac
                    }
                }
            }

            function F(af) {
                var ad = this;
                O = new Date().getTime();
                P = new s();
                function ae() {
                    if (P) {
                        P.destroy();
                        P = null
                    }
                    ad.dispatchEvent("loadend");
                    ad = null
                }

                function ac(ag) {
                    P.bind("LoadStart", function (ah) {
                        aa("readyState", v.LOADING);
                        ad.dispatchEvent("readystatechange");
                        ad.dispatchEvent(ah);
                        if (x) {
                            ad.upload.dispatchEvent(ah)
                        }
                    });
                    P.bind("Progress", function (ah) {
                        if (aa("readyState") !== v.LOADING) {
                            aa("readyState", v.LOADING);
                            ad.dispatchEvent("readystatechange")
                        }
                        ad.dispatchEvent(ah)
                    });
                    P.bind("UploadProgress", function (ah) {
                        if (x) {
                            ad.upload.dispatchEvent({
                                type: "progress",
                                lengthComputable: false,
                                total: ah.total,
                                loaded: ah.loaded
                            })
                        }
                    });
                    P.bind("Load", function (ah) {
                        aa("readyState", v.DONE);
                        aa("status", Number(ag.exec.call(P, "XMLHttpRequest", "getStatus") || 0));
                        aa("statusText", j[aa("status")] || "");
                        aa("response", ag.exec.call(P, "XMLHttpRequest", "getResponse", aa("responseType")));
                        if (!!~q.inArray(aa("responseType"), ["text", ""])) {
                            aa("responseText", aa("response"))
                        } else {
                            if (aa("responseType") === "document") {
                                aa("responseXML", aa("response"))
                            }
                        }
                        V = ag.exec.call(P, "XMLHttpRequest", "getAllResponseHeaders");
                        ad.dispatchEvent("readystatechange");
                        if (aa("status") > 0) {
                            if (x) {
                                ad.upload.dispatchEvent(ah)
                            }
                            ad.dispatchEvent(ah)
                        } else {
                            D = true;
                            ad.dispatchEvent("error")
                        }
                        ae()
                    });
                    P.bind("Abort", function (ah) {
                        ad.dispatchEvent(ah);
                        ae()
                    });
                    P.bind("Error", function (ah) {
                        D = true;
                        aa("readyState", v.DONE);
                        ad.dispatchEvent("readystatechange");
                        L = true;
                        ad.dispatchEvent(ah);
                        ae()
                    });
                    ag.exec.call(P, "XMLHttpRequest", "send", {
                        url: J,
                        method: Q,
                        async: Y,
                        user: T,
                        password: G,
                        headers: R,
                        mimeType: K,
                        encoding: I,
                        responseType: ad.responseType,
                        withCredentials: ad.withCredentials,
                        options: U
                    }, af)
                }

                if (typeof(U.required_caps) === "string") {
                    U.required_caps = o.parseCaps(U.required_caps)
                }
                U.required_caps = q.extend({}, U.required_caps, {return_response_type: ad.responseType});
                if (af instanceof z) {
                    U.required_caps.send_multipart = true
                }
                if (!H) {
                    U.required_caps.do_cors = true
                }
                if (U.ruid) {
                    ac(P.connectRuntime(U))
                } else {
                    P.bind("RuntimeInit", function (ah, ag) {
                        ac(ag)
                    });
                    P.bind("RuntimeError", function (ah, ag) {
                        ad.dispatchEvent("RuntimeError", ag)
                    });
                    P.connectRuntime(U)
                }
            }

            function N() {
                aa("responseText", "");
                aa("responseXML", null);
                aa("response", null);
                aa("status", 0);
                aa("statusText", "");
                O = X = null
            }
        }

        v.UNSENT = 0;
        v.OPENED = 1;
        v.HEADERS_RECEIVED = 2;
        v.LOADING = 3;
        v.DONE = 4;
        v.prototype = p.instance;
        return v
    });
    h("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (l, i, j, m) {
        function k() {
            var r, p, n, s, v, u;
            j.call(this);
            l.extend(this, {
                uid: l.guid("uid_"), state: k.IDLE, result: null, transport: function (A, z, y) {
                    var x = this;
                    y = l.extend({chunk_size: 204798}, y);
                    if ((r = y.chunk_size % 3)) {
                        y.chunk_size += 3 - r
                    }
                    u = y.chunk_size;
                    t.call(this);
                    n = A;
                    s = A.length;
                    if (l.typeOf(y) === "string" || y.ruid) {
                        q.call(x, z, this.connectRuntime(y))
                    } else {
                        var w = function (C, B) {
                            x.unbind("RuntimeInit", w);
                            q.call(x, z, B)
                        };
                        this.bind("RuntimeInit", w);
                        this.connectRuntime(y)
                    }
                }, abort: function () {
                    var w = this;
                    w.state = k.IDLE;
                    if (p) {
                        p.exec.call(w, "Transporter", "clear");
                        w.trigger("TransportingAborted")
                    }
                    t.call(w)
                }, destroy: function () {
                    this.unbindAll();
                    p = null;
                    this.disconnectRuntime();
                    t.call(this)
                }
            });
            function t() {
                s = v = 0;
                n = this.result = null
            }

            function q(x, y) {
                var w = this;
                p = y;
                w.bind("TransportingProgress", function (z) {
                    v = z.loaded;
                    if (v < s && l.inArray(w.state, [k.IDLE, k.DONE]) === -1) {
                        o.call(w)
                    }
                }, 999);
                w.bind("TransportingComplete", function () {
                    v = s;
                    w.state = k.DONE;
                    n = null;
                    w.result = p.exec.call(w, "Transporter", "getAsBlob", x || "")
                }, 999);
                w.state = k.BUSY;
                w.trigger("TransportingStarted");
                o.call(w)
            }

            function o() {
                var w = this, x, y = s - v;
                if (u > y) {
                    u = y
                }
                x = i.btoa(n.substr(v, u));
                p.exec.call(w, "Transporter", "receive", x, s)
            }
        }

        k.IDLE = 0;
        k.BUSY = 1;
        k.DONE = 2;
        k.prototype = m.instance;
        return k
    });
    h("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function (k, n, t, r, u, j, s, m, q, w, l, p, o) {
        var v = ["progress", "load", "error", "resize", "embedded"];

        function i() {
            s.call(this);
            k.extend(this, {
                uid: k.guid("uid_"),
                ruid: null,
                name: "",
                size: 0,
                width: 0,
                height: 0,
                type: "",
                meta: {},
                clone: function () {
                    this.load.apply(this, arguments)
                },
                load: function () {
                    this.bind("Load Resize", function () {
                        y.call(this)
                    }, 999);
                    this.convertEventPropsToHandlers(v);
                    z.apply(this, arguments)
                },
                downsize: function (D) {
                    var E = {width: this.width, height: this.height, crop: false, preserveHeaders: true};
                    if (typeof(D) === "object") {
                        D = k.extend(E, D)
                    } else {
                        D = k.extend(E, {
                            width: arguments[0],
                            height: arguments[1],
                            crop: arguments[2],
                            preserveHeaders: arguments[3]
                        })
                    }
                    try {
                        if (!this.size) {
                            throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)
                        }
                        if (this.width > i.MAX_RESIZE_WIDTH || this.height > i.MAX_RESIZE_HEIGHT) {
                            throw new t.ImageError(t.ImageError.MAX_RESOLUTION_ERR)
                        }
                        this.getRuntime().exec.call(this, "Image", "downsize", D.width, D.height, D.crop, D.preserveHeaders)
                    } catch (C) {
                        this.trigger("error", C.code)
                    }
                },
                crop: function (E, C, D) {
                    this.downsize(E, C, true, D)
                },
                getAsCanvas: function () {
                    if (!q.can("create_canvas")) {
                        throw new t.RuntimeError(t.RuntimeError.NOT_SUPPORTED_ERR)
                    }
                    var C = this.connectRuntime(this.ruid);
                    return C.exec.call(this, "Image", "getAsCanvas")
                },
                getAsBlob: function (C, D) {
                    if (!this.size) {
                        throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)
                    }
                    if (!C) {
                        C = "image/jpeg"
                    }
                    if (C === "image/jpeg" && !D) {
                        D = 90
                    }
                    return this.getRuntime().exec.call(this, "Image", "getAsBlob", C, D)
                },
                getAsDataURL: function (C, D) {
                    if (!this.size) {
                        throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)
                    }
                    return this.getRuntime().exec.call(this, "Image", "getAsDataURL", C, D)
                },
                getAsBinaryString: function (C, E) {
                    var D = this.getAsDataURL(C, E);
                    return o.atob(D.substring(D.indexOf("base64,") + 7))
                },
                embed: function (F) {
                    var O = this, K, J, L, H, P = arguments[1] || {}, E = this.width, N = this.height, G;

                    function D() {
                        if (q.can("create_canvas")) {
                            var Q = K.getAsCanvas();
                            if (Q) {
                                F.appendChild(Q);
                                Q = null;
                                K.destroy();
                                O.trigger("embedded");
                                return
                            }
                        }
                        var S = K.getAsDataURL(J, L);
                        if (!S) {
                            throw new t.ImageError(t.ImageError.WRONG_FORMAT)
                        }
                        if (q.can("use_data_uri_of", S.length)) {
                            F.innerHTML = '<img src="' + S + '" width="' + K.width + '" height="' + K.height + '" />';
                            K.destroy();
                            O.trigger("embedded")
                        } else {
                            var R = new m();
                            R.bind("TransportingComplete", function () {
                                G = O.connectRuntime(this.result.ruid);
                                O.bind("Embedded", function () {
                                    k.extend(G.getShimContainer().style, {
                                        top: "0px",
                                        left: "0px",
                                        width: K.width + "px",
                                        height: K.height + "px"
                                    });
                                    G = null
                                }, 999);
                                G.exec.call(O, "ImageView", "display", this.result.uid, E, N);
                                K.destroy()
                            });
                            R.transport(o.atob(S.substring(S.indexOf("base64,") + 7)), J, k.extend({}, P, {
                                required_caps: {display_media: true},
                                runtime_order: "flash,silverlight",
                                container: F
                            }))
                        }
                    }

                    try {
                        if (!(F = n.get(F))) {
                            throw new t.DOMException(t.DOMException.INVALID_NODE_TYPE_ERR)
                        }
                        if (!this.size) {
                            throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)
                        }
                        if (this.width > i.MAX_RESIZE_WIDTH || this.height > i.MAX_RESIZE_HEIGHT) {
                            throw new t.ImageError(t.ImageError.MAX_RESOLUTION_ERR)
                        }
                        J = P.type || this.type || "image/jpeg";
                        L = P.quality || 90;
                        H = k.typeOf(P.crop) !== "undefined" ? P.crop : false;
                        if (P.width) {
                            E = P.width;
                            N = P.height || E
                        } else {
                            var C = n.getSize(F);
                            if (C.w && C.h) {
                                E = C.w;
                                N = C.h
                            }
                        }
                        K = new i();
                        K.bind("Resize", function () {
                            D.call(O)
                        });
                        K.bind("Load", function () {
                            K.downsize(E, N, H, false)
                        });
                        K.clone(this, false);
                        return K
                    } catch (I) {
                        this.trigger("error", I.code)
                    }
                },
                destroy: function () {
                    if (this.ruid) {
                        this.getRuntime().exec.call(this, "Image", "destroy");
                        this.disconnectRuntime()
                    }
                    this.unbindAll()
                }
            });
            function y(C) {
                if (!C) {
                    C = this.getRuntime().exec.call(this, "Image", "getInfo")
                }
                this.size = C.size;
                this.width = C.width;
                this.height = C.height;
                this.type = C.type;
                this.meta = C.meta;
                if (this.name === "") {
                    this.name = C.name
                }
            }

            function z(E) {
                var D = k.typeOf(E);
                try {
                    if (E instanceof i) {
                        if (!E.size) {
                            throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)
                        }
                        x.apply(this, arguments)
                    } else {
                        if (E instanceof l) {
                            if (!~k.inArray(E.type, ["image/jpeg", "image/png"])) {
                                throw new t.ImageError(t.ImageError.WRONG_FORMAT)
                            }
                            A.apply(this, arguments)
                        } else {
                            if (k.inArray(D, ["blob", "file"]) !== -1) {
                                z.call(this, new p(null, E), arguments[1])
                            } else {
                                if (D === "string") {
                                    if (/^data:[^;]*;base64,/.test(E)) {
                                        z.call(this, new l(null, {data: E}), arguments[1])
                                    } else {
                                        B.apply(this, arguments)
                                    }
                                } else {
                                    if (D === "node" && E.nodeName.toLowerCase() === "img") {
                                        z.call(this, E.src, arguments[1])
                                    } else {
                                        throw new t.DOMException(t.DOMException.TYPE_MISMATCH_ERR)
                                    }
                                }
                            }
                        }
                    }
                } catch (C) {
                    this.trigger("error", C.code)
                }
            }

            function x(C, D) {
                var E = this.connectRuntime(C.ruid);
                this.ruid = E.uid;
                E.exec.call(this, "Image", "loadFromImage", C, (k.typeOf(D) === "undefined" ? true : D))
            }

            function A(E, F) {
                var D = this;
                D.name = E.name || "";
                function C(G) {
                    D.ruid = G.uid;
                    G.exec.call(D, "Image", "loadFromBlob", E)
                }

                if (E.isDetached()) {
                    this.bind("RuntimeInit", function (H, G) {
                        C(G)
                    });
                    if (F && typeof(F.required_caps) === "string") {
                        F.required_caps = j.parseCaps(F.required_caps)
                    }
                    this.connectRuntime(k.extend({required_caps: {access_image_binary: true, resize_image: true}}, F))
                } else {
                    C(this.connectRuntime(E.ruid))
                }
            }

            function B(E, D) {
                var C = this, F;
                F = new u();
                F.open("get", E);
                F.responseType = "blob";
                F.onprogress = function (G) {
                    C.trigger(G)
                };
                F.onload = function () {
                    A.call(C, F.response, true)
                };
                F.onerror = function (G) {
                    C.trigger(G)
                };
                F.onloadend = function () {
                    F.destroy()
                };
                F.bind("RuntimeError", function (H, G) {
                    C.trigger("RuntimeError", G)
                });
                F.send(null, D)
            }
        }

        i.MAX_RESIZE_WIDTH = 6500;
        i.MAX_RESIZE_HEIGHT = 6500;
        i.prototype = w.instance;
        return i
    });
    h("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (n, i, k, j) {
        var m = "html5", l = {};

        function o(q) {
            var p = this, t = k.capTest, s = k.capTrue;
            var r = n.extend({
                access_binary: t(window.FileReader || window.File && window.File.getAsDataURL),
                access_image_binary: function () {
                    return p.can("access_binary") && !!l.Image
                },
                display_media: t(j.can("create_canvas") || j.can("use_data_uri_over32kb")),
                do_cors: t(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()),
                drag_and_drop: t(function () {
                    var u = document.createElement("div");
                    return (("draggable" in u) || ("ondragstart" in u && "ondrop" in u)) && (j.browser !== "IE" || j.version > 9)
                }()),
                filter_by_extension: t(function () {
                    return (j.browser === "Chrome" && j.version >= 28) || (j.browser === "IE" && j.version >= 10)
                }()),
                return_response_headers: s,
                return_response_type: function (u) {
                    if (u === "json" && !!window.JSON) {
                        return true
                    }
                    return j.can("return_response_type", u)
                },
                return_status_code: s,
                report_upload_progress: t(window.XMLHttpRequest && new XMLHttpRequest().upload),
                resize_image: function () {
                    return p.can("access_binary") && j.can("create_canvas")
                },
                select_file: function () {
                    return j.can("use_fileinput") && window.File
                },
                select_folder: function () {
                    return p.can("select_file") && j.browser === "Chrome" && j.version >= 21
                },
                select_multiple: function () {
                    return p.can("select_file") && !(j.browser === "Safari" && j.os === "Windows") && !(j.os === "iOS" && j.verComp(j.osVersion, "7.0.4", "<"))
                },
                send_binary_string: t(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || (window.Uint8Array && window.ArrayBuffer))),
                send_custom_headers: t(window.XMLHttpRequest),
                send_multipart: function () {
                    return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || p.can("send_binary_string")
                },
                slice_blob: t(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                stream_upload: function () {
                    return p.can("slice_blob") && p.can("send_multipart")
                },
                summon_file_dialog: t(function () {
                    return (j.browser === "Firefox" && j.version >= 4) || (j.browser === "Opera" && j.version >= 12) || (j.browser === "IE" && j.version >= 10) || !!~n.inArray(j.browser, ["Chrome", "Safari"])
                }()),
                upload_filesize: s
            }, arguments[2]);
            k.call(this, q, (arguments[1] || m), r);
            n.extend(this, {
                init: function () {
                    this.trigger("Init")
                }, destroy: (function (u) {
                    return function () {
                        u.call(p);
                        u = p = null
                    }
                }(this.destroy))
            });
            n.extend(this.getShim(), l)
        }

        k.addConstructor(m, o);
        return l
    });
    h("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function (j, k) {
        function i() {
            function l(n, q, m) {
                var o;
                if (window.File.prototype.slice) {
                    try {
                        n.slice();
                        return n.slice(q, m)
                    } catch (p) {
                        return n.slice(q, m - q)
                    }
                } else {
                    if ((o = window.File.prototype.webkitSlice || window.File.prototype.mozSlice)) {
                        return o.call(n, q, m)
                    } else {
                        return null
                    }
                }
            }

            this.slice = function () {
                return new k(this.getRuntime().uid, l.apply(this, arguments))
            }
        }

        return (j.Blob = i)
    });
    h("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function (o) {
        var p = {}, l = "moxie_" + o.guid();

        function k() {
            this.returnValue = false
        }

        function j() {
            this.cancelBubble = true
        }

        var m = function (u, q, v, s) {
            var t, r;
            q = q.toLowerCase();
            if (u.addEventListener) {
                t = v;
                u.addEventListener(q, t, false)
            } else {
                if (u.attachEvent) {
                    t = function () {
                        var w = window.event;
                        if (!w.target) {
                            w.target = w.srcElement
                        }
                        w.preventDefault = k;
                        w.stopPropagation = j;
                        v(w)
                    };
                    u.attachEvent("on" + q, t)
                }
            }
            if (!u[l]) {
                u[l] = o.guid()
            }
            if (!p.hasOwnProperty(u[l])) {
                p[u[l]] = {}
            }
            r = p[u[l]];
            if (!r.hasOwnProperty(q)) {
                r[q] = []
            }
            r[q].push({func: t, orig: v, key: s})
        };
        var n = function (v, q, w) {
            var t, s;
            q = q.toLowerCase();
            if (v[l] && p[v[l]] && p[v[l]][q]) {
                t = p[v[l]][q]
            } else {
                return
            }
            for (var r = t.length - 1; r >= 0; r--) {
                if (t[r].orig === w || t[r].key === w) {
                    if (v.removeEventListener) {
                        v.removeEventListener(q, t[r].func, false)
                    } else {
                        if (v.detachEvent) {
                            v.detachEvent("on" + q, t[r].func)
                        }
                    }
                    t[r].orig = null;
                    t[r].func = null;
                    t.splice(r, 1);
                    if (w !== s) {
                        break
                    }
                }
            }
            if (!t.length) {
                delete p[v[l]][q]
            }
            if (o.isEmptyObj(p[v[l]])) {
                delete p[v[l]];
                try {
                    delete v[l]
                } catch (u) {
                    v[l] = s
                }
            }
        };
        var i = function (r, q) {
            if (!r || !r[l]) {
                return
            }
            o.each(p[r[l]], function (t, s) {
                n(r, s, q)
            })
        };
        return {addEvent: m, removeEvent: n, removeAllEvents: i}
    });
    h("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (m, o, l, j, k, i) {
        function n() {
            var q = [], p;
            o.extend(this, {
                init: function (A) {
                    var r = this, y = r.getRuntime(), x, t, u, z, w, v;
                    p = A;
                    q = [];
                    u = p.accept.mimes || k.extList2mimes(p.accept, y.can("filter_by_extension"));
                    t = y.getShimContainer();
                    t.innerHTML = '<input id="' + y.uid + '" type="file" style="font-size:999px;opacity:0;"' + (p.multiple && y.can("select_multiple") ? "multiple" : "") + (p.directory && y.can("select_folder") ? "webkitdirectory directory" : "") + (u ? ' accept="' + u.join(",") + '"' : "") + " />";
                    x = l.get(y.uid);
                    o.extend(x.style, {position: "absolute", top: 0, left: 0, width: "100%", height: "100%"});
                    z = l.get(p.browse_button);
                    w = parseInt(l.getStyle(z, "z-index"), 10) || 0;
                    if (y.can("summon_file_dialog")) {
                        if (l.getStyle(z, "position") === "static") {
                            z.style.position = "relative"
                        }
                        t.style.zIndex = w - 1;
                        j.addEvent(z, "click", function (C) {
                            var B = l.get(y.uid);
                            if (B && !B.disabled) {
                                B.click()
                            }
                            C.preventDefault()
                        }, r.uid)
                    } else {
                        t.style.zIndex = w
                    }
                    v = y.can("summon_file_dialog") ? z : t;
                    j.addEvent(v, "mouseover", function () {
                        r.trigger("mouseenter")
                    }, r.uid);
                    j.addEvent(v, "mouseout", function () {
                        r.trigger("mouseleave")
                    }, r.uid);
                    j.addEvent(v, "mousedown", function () {
                        r.trigger("mousedown")
                    }, r.uid);
                    j.addEvent(l.get(p.container), "mouseup", function () {
                        r.trigger("mouseup")
                    }, r.uid);
                    x.onchange = function s() {
                        q = [];
                        if (p.directory) {
                            o.each(this.files, function (C) {
                                if (C.name !== ".") {
                                    q.push(C)
                                }
                            })
                        } else {
                            q = [].slice.call(this.files)
                        }
                        if (i.browser !== "IE" && i.browser !== "IEMobile") {
                            this.value = ""
                        } else {
                            var B = this.cloneNode(true);
                            this.parentNode.replaceChild(B, this);
                            B.onchange = s
                        }
                        r.trigger("change")
                    };
                    r.trigger({type: "ready", async: true});
                    t = null
                }, getFiles: function () {
                    return q
                }, disable: function (t) {
                    var s = this.getRuntime(), r;
                    if ((r = l.get(s.uid))) {
                        r.disabled = !!t
                    }
                }, destroy: function () {
                    var s = this.getRuntime(), t = s.getShim(), r = s.getShimContainer();
                    j.removeAllEvents(r, this.uid);
                    j.removeAllEvents(p && l.get(p.container), this.uid);
                    j.removeAllEvents(p && l.get(p.browse_button), this.uid);
                    if (r) {
                        r.innerHTML = ""
                    }
                    t.removeInstance(this.uid);
                    q = p = r = t = null
                }
            })
        }

        return (m.FileInput = n)
    });
    h("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function (l, m, k, i, j) {
        function n() {
            var p = [], s = [], w;
            m.extend(this, {
                init: function (z) {
                    var y = this, A;
                    w = z;
                    s = r(w.accept);
                    A = w.container;
                    i.addEvent(A, "dragover", function (B) {
                        if (!q(B)) {
                            return
                        }
                        B.preventDefault();
                        B.dataTransfer.dropEffect = "copy"
                    }, y.uid);
                    i.addEvent(A, "drop", function (B) {
                        if (!q(B)) {
                            return
                        }
                        B.preventDefault();
                        p = [];
                        if (B.dataTransfer.items && B.dataTransfer.items[0].webkitGetAsEntry) {
                            v(B.dataTransfer.items, function () {
                                y.trigger("drop")
                            })
                        } else {
                            m.each(B.dataTransfer.files, function (C) {
                                if (u(C)) {
                                    p.push(C)
                                }
                            });
                            y.trigger("drop")
                        }
                    }, y.uid);
                    i.addEvent(A, "dragenter", function (B) {
                        y.trigger("dragenter")
                    }, y.uid);
                    i.addEvent(A, "dragleave", function (B) {
                        y.trigger("dragleave")
                    }, y.uid)
                }, getFiles: function () {
                    return p
                }, destroy: function () {
                    i.removeAllEvents(w && k.get(w.container), this.uid);
                    p = s = w = null
                }
            });
            function q(z) {
                if (!z.dataTransfer || !z.dataTransfer.types) {
                    return false
                }
                var y = m.toArray(z.dataTransfer.types || []);
                return m.inArray("Files", y) !== -1 || m.inArray("public.file-url", y) !== -1 || m.inArray("application/x-moz-file", y) !== -1
            }

            function r(A) {
                var z = [];
                for (var y = 0; y < A.length; y++) {
                    [].push.apply(z, A[y].extensions.split(/\s*,\s*/))
                }
                return m.inArray("*", z) === -1 ? z : []
            }

            function u(y) {
                if (!s.length) {
                    return true
                }
                var z = j.getFileExtension(y.name);
                return !z || m.inArray(z, s) !== -1
            }

            function v(A, z) {
                var y = [];
                m.each(A, function (D) {
                    var C = D.webkitGetAsEntry();
                    if (C) {
                        if (C.isFile) {
                            var B = D.getAsFile();
                            if (u(B)) {
                                p.push(B)
                            }
                        } else {
                            y.push(C)
                        }
                    }
                });
                if (y.length) {
                    t(y, z)
                } else {
                    z()
                }
            }

            function t(A, z) {
                var y = [];
                m.each(A, function (B) {
                    y.push(function (C) {
                        o(B, C)
                    })
                });
                m.inSeries(y, function () {
                    z()
                })
            }

            function o(z, y) {
                if (z.isFile) {
                    z.file(function (A) {
                        if (u(A)) {
                            p.push(A)
                        }
                        y()
                    }, function () {
                        y()
                    })
                } else {
                    if (z.isDirectory) {
                        x(z, y)
                    } else {
                        y()
                    }
                }
            }

            function x(C, z) {
                var y = [], B = C.createReader();

                function A(D) {
                    B.readEntries(function (E) {
                        if (E.length) {
                            [].push.apply(y, E);
                            A(D)
                        } else {
                            D()
                        }
                    }, D)
                }

                A(function () {
                    t(y, z)
                })
            }
        }

        return (l.FileDrop = n)
    });
    h("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function (j, i, l) {
        function k() {
            var n, o = false;
            l.extend(this, {
                read: function (r, p) {
                    var q = this;
                    n = new window.FileReader();
                    n.addEventListener("progress", function (s) {
                        q.trigger(s)
                    });
                    n.addEventListener("load", function (s) {
                        q.trigger(s)
                    });
                    n.addEventListener("error", function (s) {
                        q.trigger(s, n.error)
                    });
                    n.addEventListener("loadend", function () {
                        n = null
                    });
                    if (l.typeOf(n[r]) === "function") {
                        o = false;
                        n[r](p.getSource())
                    } else {
                        if (r === "readAsBinaryString") {
                            o = true;
                            n.readAsDataURL(p.getSource())
                        }
                    }
                }, getResult: function () {
                    return n && n.result ? (o ? m(n.result) : n.result) : null
                }, abort: function () {
                    if (n) {
                        n.abort()
                    }
                }, destroy: function () {
                    n = null
                }
            });
            function m(p) {
                return i.atob(p.substring(p.indexOf("base64,") + 7))
            }
        }

        return (j.FileReader = k)
    });
    h("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function (o, j, l, i, n, k, r, p, m) {
        function q() {
            var u = this, y, w;
            j.extend(this, {
                send: function (G, D) {
                    var F = this, C = (m.browser === "Mozilla" && m.version >= 4 && m.version < 7), z = m.browser === "Android Browser", E = false;
                    w = G.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase();
                    y = x();
                    y.open(G.method, G.url, G.async, G.user, G.password);
                    if (D instanceof k) {
                        if (D.isDetached()) {
                            E = true
                        }
                        D = D.getSource()
                    } else {
                        if (D instanceof r) {
                            if (D.hasBlob()) {
                                if (D.getBlob().isDetached()) {
                                    D = v.call(F, D);
                                    E = true
                                } else {
                                    if ((C || z) && j.typeOf(D.getBlob().getSource()) === "blob" && window.FileReader) {
                                        s.call(F, G, D);
                                        return
                                    }
                                }
                            }
                            if (D instanceof r) {
                                var B = new window.FormData();
                                D.each(function (I, H) {
                                    if (I instanceof k) {
                                        B.append(H, I.getSource())
                                    } else {
                                        B.append(H, I)
                                    }
                                });
                                D = B
                            }
                        }
                    }
                    if (y.upload) {
                        if (G.withCredentials) {
                            y.withCredentials = true
                        }
                        y.addEventListener("load", function (H) {
                            F.trigger(H)
                        });
                        y.addEventListener("error", function (H) {
                            F.trigger(H)
                        });
                        y.addEventListener("progress", function (H) {
                            F.trigger(H)
                        });
                        y.upload.addEventListener("progress", function (H) {
                            F.trigger({type: "UploadProgress", loaded: H.loaded, total: H.total})
                        })
                    } else {
                        y.onreadystatechange = function A() {
                            switch (y.readyState) {
                                case 1:
                                    break;
                                case 2:
                                    break;
                                case 3:
                                    var J, H;
                                    try {
                                        if (i.hasSameOrigin(G.url)) {
                                            J = y.getResponseHeader("Content-Length") || 0
                                        }
                                        if (y.responseText) {
                                            H = y.responseText.length
                                        }
                                    } catch (I) {
                                        J = H = 0
                                    }
                                    F.trigger({
                                        type: "progress",
                                        lengthComputable: !!J,
                                        total: parseInt(J, 10),
                                        loaded: H
                                    });
                                    break;
                                case 4:
                                    y.onreadystatechange = function () {
                                    };
                                    if (y.status === 0) {
                                        F.trigger("error")
                                    } else {
                                        F.trigger("load")
                                    }
                                    break
                            }
                        }
                    }
                    if (!j.isEmptyObj(G.headers)) {
                        j.each(G.headers, function (H, I) {
                            y.setRequestHeader(I, H)
                        })
                    }
                    if ("" !== G.responseType && "responseType" in y) {
                        if ("json" === G.responseType && !m.can("return_response_type", "json")) {
                            y.responseType = "text"
                        } else {
                            y.responseType = G.responseType
                        }
                    }
                    if (!E) {
                        y.send(D)
                    } else {
                        if (y.sendAsBinary) {
                            y.sendAsBinary(D)
                        } else {
                            (function () {
                                var H = new Uint8Array(D.length);
                                for (var I = 0; I < D.length; I++) {
                                    H[I] = (D.charCodeAt(I) & 255)
                                }
                                y.send(H.buffer)
                            }())
                        }
                    }
                    F.trigger("loadstart")
                }, getStatus: function () {
                    try {
                        if (y) {
                            return y.status
                        }
                    } catch (z) {
                    }
                    return 0
                }, getResponse: function (B) {
                    var A = this.getRuntime();
                    try {
                        switch (B) {
                            case"blob":
                                var D = new n(A.uid, y.response);
                                var E = y.getResponseHeader("Content-Disposition");
                                if (E) {
                                    var z = E.match(/filename=([\'\"'])([^\1]+)\1/);
                                    if (z) {
                                        w = z[2]
                                    }
                                }
                                D.name = w;
                                if (!D.type) {
                                    D.type = l.getFileMime(w)
                                }
                                return D;
                            case"json":
                                if (!m.can("return_response_type", "json")) {
                                    return y.status === 200 && !!window.JSON ? JSON.parse(y.responseText) : null
                                }
                                return y.response;
                            case"document":
                                return t(y);
                            default:
                                return y.responseText !== "" ? y.responseText : null
                        }
                    } catch (C) {
                        return null
                    }
                }, getAllResponseHeaders: function () {
                    try {
                        return y.getAllResponseHeaders()
                    } catch (z) {
                    }
                    return ""
                }, abort: function () {
                    if (y) {
                        y.abort()
                    }
                }, destroy: function () {
                    u = w = null
                }
            });
            function s(D, B) {
                var C = this, A, z;
                A = B.getBlob().getSource();
                z = new window.FileReader();
                z.onload = function () {
                    B.append(B.getBlobName(), new k(null, {type: A.type, data: z.result}));
                    u.send.call(C, D, B)
                };
                z.readAsBinaryString(A)
            }

            function x() {
                if (window.XMLHttpRequest && !(m.browser === "IE" && m.version < 8)) {
                    return new window.XMLHttpRequest()
                } else {
                    return (function () {
                        var z = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"];
                        for (var B = 0; B < z.length; B++) {
                            try {
                                return new ActiveXObject(z[B])
                            } catch (A) {
                            }
                        }
                    })()
                }
            }

            function t(A) {
                var B = A.responseXML;
                var z = A.responseText;
                if (m.browser === "IE" && z && B && !B.documentElement && /[^\/]+\/[^\+]+\+xml/.test(A.getResponseHeader("Content-Type"))) {
                    B = new window.ActiveXObject("Microsoft.XMLDOM");
                    B.async = false;
                    B.validateOnParse = false;
                    B.loadXML(z)
                }
                if (B) {
                    if ((m.browser === "IE" && B.parseError !== 0) || !B.documentElement || B.documentElement.tagName === "parsererror") {
                        return null
                    }
                }
                return B
            }

            function v(B) {
                var E = "----moxieboundary" + new Date().getTime(), C = "--", D = "\r\n", z = "", A = this.getRuntime();
                if (!A.can("send_binary_string")) {
                    throw new p.RuntimeError(p.RuntimeError.NOT_SUPPORTED_ERR)
                }
                y.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + E);
                B.each(function (G, F) {
                    if (G instanceof k) {
                        z += C + E + D + 'Content-Disposition: form-data; name="' + F + '"; filename="' + unescape(encodeURIComponent(G.name || "blob")) + '"' + D + "Content-Type: " + (G.type || "application/octet-stream") + D + D + G.getSource() + D
                    } else {
                        z += C + E + D + 'Content-Disposition: form-data; name="' + F + '"' + D + D + unescape(encodeURIComponent(G)) + D
                    }
                });
                z += C + E + C + D;
                return z
            }
        }

        return (o.XMLHttpRequest = q)
    });
    h("moxie/runtime/html5/utils/BinaryReader", [], function () {
        return function () {
            var l = false, j;

            function m(o, q) {
                var n = l ? 0 : -8 * (q - 1), r = 0, p;
                for (p = 0; p < q; p++) {
                    r |= (j.charCodeAt(o + p) << Math.abs(n + p * 8))
                }
                return r
            }

            function i(p, n, o) {
                o = arguments.length === 3 ? o : j.length - n - 1;
                j = j.substr(0, n) + p + j.substr(o + n)
            }

            function k(o, p, r) {
                var s = "", n = l ? 0 : -8 * (r - 1), q;
                for (q = 0; q < r; q++) {
                    s += String.fromCharCode((p >> Math.abs(n + q * 8)) & 255)
                }
                i(s, o, r)
            }

            return {
                II: function (n) {
                    if (n === g) {
                        return l
                    } else {
                        l = n
                    }
                }, init: function (n) {
                    l = false;
                    j = n
                }, SEGMENT: function (n, p, o) {
                    switch (arguments.length) {
                        case 1:
                            return j.substr(n, j.length - n - 1);
                        case 2:
                            return j.substr(n, p);
                        case 3:
                            i(o, n, p);
                            break;
                        default:
                            return j
                    }
                }, BYTE: function (n) {
                    return m(n, 1)
                }, SHORT: function (n) {
                    return m(n, 2)
                }, LONG: function (n, o) {
                    if (o === g) {
                        return m(n, 4)
                    } else {
                        k(n, o, 4)
                    }
                }, SLONG: function (n) {
                    var o = m(n, 4);
                    return (o > 2147483647 ? o - 4294967296 : o)
                }, STRING: function (n, o) {
                    var p = "";
                    for (o += n; n < o; n++) {
                        p += String.fromCharCode(m(n, 1))
                    }
                    return p
                }
            }
        }
    });
    h("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader"], function (j) {
        return function i(o) {
            var p = [], n, k, l, m = 0;
            n = new j();
            n.init(o);
            if (n.SHORT(0) !== 65496) {
                return
            }
            k = 2;
            while (k <= o.length) {
                l = n.SHORT(k);
                if (l >= 65488 && l <= 65495) {
                    k += 2;
                    continue
                }
                if (l === 65498 || l === 65497) {
                    break
                }
                m = n.SHORT(k + 2) + 2;
                if (l >= 65505 && l <= 65519) {
                    p.push({hex: l, name: "APP" + (l & 15), start: k, length: m, segment: n.SEGMENT(k, m)})
                }
                k += m
            }
            n.init(null);
            return {
                headers: p, restore: function (s) {
                    var q, r;
                    n.init(s);
                    k = n.SHORT(2) == 65504 ? 4 + n.SHORT(4) : 2;
                    for (r = 0, q = p.length; r < q; r++) {
                        if (p[r].name == "APP2" && p[r].segment.indexOf("ProPhoto RGB") > 0) {
                            continue
                        } else {
                            n.SEGMENT(k, 0, p[r].segment);
                            k += p[r].length
                        }
                    }
                    s = n.SEGMENT();
                    n.init(null);
                    return s
                }, strip: function (s) {
                    var t, q, r;
                    q = new i(s);
                    t = q.headers;
                    q.purge();
                    n.init(s);
                    r = t.length;
                    while (r--) {
                        n.SEGMENT(t[r].start, t[r].length, "")
                    }
                    s = n.SEGMENT();
                    n.init(null);
                    return s
                }, get: function (r) {
                    var t = [];
                    for (var s = 0, q = p.length; s < q; s++) {
                        if (p[s].name === r.toUpperCase()) {
                            t.push(p[s].segment)
                        }
                    }
                    return t
                }, set: function (r, u) {
                    var v = [], s, t, q;
                    if (typeof(u) === "string") {
                        v.push(u)
                    } else {
                        v = u
                    }
                    for (s = t = 0, q = p.length; s < q; s++) {
                        if (p[s].name === r.toUpperCase()) {
                            p[s].segment = v[t];
                            p[s].length = v[t].length;
                            t++
                        }
                        if (t >= v.length) {
                            break
                        }
                    }
                }, purge: function () {
                    p = [];
                    n.init(null);
                    n = null
                }
            }
        }
    });
    h("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function (k, j) {
        return function i() {
            var p, m, l, n = {}, s;
            p = new j();
            m = {
                tiff: {
                    274: "Orientation",
                    270: "ImageDescription",
                    271: "Make",
                    272: "Model",
                    305: "Software",
                    34665: "ExifIFDPointer",
                    34853: "GPSInfoIFDPointer"
                },
                exif: {
                    36864: "ExifVersion",
                    40961: "ColorSpace",
                    40962: "PixelXDimension",
                    40963: "PixelYDimension",
                    36867: "DateTimeOriginal",
                    33434: "ExposureTime",
                    33437: "FNumber",
                    34855: "ISOSpeedRatings",
                    37377: "ShutterSpeedValue",
                    37378: "ApertureValue",
                    37383: "MeteringMode",
                    37384: "LightSource",
                    37385: "Flash",
                    37386: "FocalLength",
                    41986: "ExposureMode",
                    41987: "WhiteBalance",
                    41990: "SceneCaptureType",
                    41988: "DigitalZoomRatio",
                    41992: "Contrast",
                    41993: "Saturation",
                    41994: "Sharpness"
                },
                gps: {0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude"}
            };
            s = {
                ColorSpace: {1: "sRGB", 0: "Uncalibrated"},
                MeteringMode: {
                    0: "Unknown",
                    1: "Average",
                    2: "CenterWeightedAverage",
                    3: "Spot",
                    4: "MultiSpot",
                    5: "Pattern",
                    6: "Partial",
                    255: "Other"
                },
                LightSource: {
                    1: "Daylight",
                    2: "Fliorescent",
                    3: "Tungsten",
                    4: "Flash",
                    9: "Fine weather",
                    10: "Cloudy weather",
                    11: "Shade",
                    12: "Daylight fluorescent (D 5700 - 7100K)",
                    13: "Day white fluorescent (N 4600 -5400K)",
                    14: "Cool white fluorescent (W 3900 - 4500K)",
                    15: "White fluorescent (WW 3200 - 3700K)",
                    17: "Standard light A",
                    18: "Standard light B",
                    19: "Standard light C",
                    20: "D55",
                    21: "D65",
                    22: "D75",
                    23: "D50",
                    24: "ISO studio tungsten",
                    255: "Other"
                },
                Flash: {
                    0: "Flash did not fire.",
                    1: "Flash fired.",
                    5: "Strobe return light not detected.",
                    7: "Strobe return light detected.",
                    9: "Flash fired, compulsory flash mode",
                    13: "Flash fired, compulsory flash mode, return light not detected",
                    15: "Flash fired, compulsory flash mode, return light detected",
                    16: "Flash did not fire, compulsory flash mode",
                    24: "Flash did not fire, auto mode",
                    25: "Flash fired, auto mode",
                    29: "Flash fired, auto mode, return light not detected",
                    31: "Flash fired, auto mode, return light detected",
                    32: "No flash function",
                    65: "Flash fired, red-eye reduction mode",
                    69: "Flash fired, red-eye reduction mode, return light not detected",
                    71: "Flash fired, red-eye reduction mode, return light detected",
                    73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                    77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                    79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                    89: "Flash fired, auto mode, red-eye reduction mode",
                    93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                    95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                },
                ExposureMode: {0: "Auto exposure", 1: "Manual exposure", 2: "Auto bracket"},
                WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"},
                SceneCaptureType: {0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene"},
                Contrast: {0: "Normal", 1: "Soft", 2: "Hard"},
                Saturation: {0: "Normal", 1: "Low saturation", 2: "High saturation"},
                Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"},
                GPSLatitudeRef: {N: "North latitude", S: "South latitude"},
                GPSLongitudeRef: {E: "East longitude", W: "West longitude"}
            };
            function o(t, B) {
                var v = p.SHORT(t), y, E, F, A, z, u, w, C, D = [], x = {};
                for (y = 0; y < v; y++) {
                    w = u = t + 12 * y + 2;
                    F = B[p.SHORT(w)];
                    if (F === g) {
                        continue
                    }
                    A = p.SHORT(w += 2);
                    z = p.LONG(w += 2);
                    w += 4;
                    D = [];
                    switch (A) {
                        case 1:
                        case 7:
                            if (z > 4) {
                                w = p.LONG(w) + n.tiffHeader
                            }
                            for (E = 0; E < z; E++) {
                                D[E] = p.BYTE(w + E)
                            }
                            break;
                        case 2:
                            if (z > 4) {
                                w = p.LONG(w) + n.tiffHeader
                            }
                            x[F] = p.STRING(w, z - 1);
                            continue;
                        case 3:
                            if (z > 2) {
                                w = p.LONG(w) + n.tiffHeader
                            }
                            for (E = 0; E < z; E++) {
                                D[E] = p.SHORT(w + E * 2)
                            }
                            break;
                        case 4:
                            if (z > 1) {
                                w = p.LONG(w) + n.tiffHeader
                            }
                            for (E = 0; E < z; E++) {
                                D[E] = p.LONG(w + E * 4)
                            }
                            break;
                        case 5:
                            w = p.LONG(w) + n.tiffHeader;
                            for (E = 0; E < z; E++) {
                                D[E] = p.LONG(w + E * 4) / p.LONG(w + E * 4 + 4)
                            }
                            break;
                        case 9:
                            w = p.LONG(w) + n.tiffHeader;
                            for (E = 0; E < z; E++) {
                                D[E] = p.SLONG(w + E * 4)
                            }
                            break;
                        case 10:
                            w = p.LONG(w) + n.tiffHeader;
                            for (E = 0; E < z; E++) {
                                D[E] = p.SLONG(w + E * 4) / p.SLONG(w + E * 4 + 4)
                            }
                            break;
                        default:
                            continue
                    }
                    C = (z == 1 ? D[0] : D);
                    if (s.hasOwnProperty(F) && typeof C != "object") {
                        x[F] = s[F][C]
                    } else {
                        x[F] = C
                    }
                }
                return x
            }

            function r() {
                var t = n.tiffHeader;
                p.II(p.SHORT(t) == 18761);
                if (p.SHORT(t += 2) !== 42) {
                    return false
                }
                n.IFD0 = n.tiffHeader + p.LONG(t += 2);
                l = o(n.IFD0, m.tiff);
                if ("ExifIFDPointer" in l) {
                    n.exifIFD = n.tiffHeader + l.ExifIFDPointer;
                    delete l.ExifIFDPointer
                }
                if ("GPSInfoIFDPointer" in l) {
                    n.gpsIFD = n.tiffHeader + l.GPSInfoIFDPointer;
                    delete l.GPSInfoIFDPointer
                }
                return true
            }

            function q(A, C, z) {
                var x, v, u, t = 0;
                if (typeof(C) === "string") {
                    var B = m[A.toLowerCase()];
                    for (var w in B) {
                        if (B[w] === C) {
                            C = w;
                            break
                        }
                    }
                }
                x = n[A.toLowerCase() + "IFD"];
                v = p.SHORT(x);
                for (var y = 0; y < v; y++) {
                    u = x + 12 * y + 2;
                    if (p.SHORT(u) == C) {
                        t = u + 8;
                        break
                    }
                }
                if (!t) {
                    return false
                }
                p.LONG(t, z);
                return true
            }

            return {
                init: function (t) {
                    n = {tiffHeader: 10};
                    if (t === g || !t.length) {
                        return false
                    }
                    p.init(t);
                    if (p.SHORT(0) === 65505 && p.STRING(4, 5).toUpperCase() === "EXIF\0") {
                        return r()
                    }
                    return false
                }, TIFF: function () {
                    return l
                }, EXIF: function () {
                    var u;
                    u = o(n.exifIFD, m.exif);
                    if (u.ExifVersion && k.typeOf(u.ExifVersion) === "array") {
                        for (var v = 0, t = ""; v < u.ExifVersion.length; v++) {
                            t += String.fromCharCode(u.ExifVersion[v])
                        }
                        u.ExifVersion = t
                    }
                    return u
                }, GPS: function () {
                    var t;
                    t = o(n.gpsIFD, m.gps);
                    if (t.GPSVersionID && k.typeOf(t.GPSVersionID) === "array") {
                        t.GPSVersionID = t.GPSVersionID.join(".")
                    }
                    return t
                }, setExif: function (t, u) {
                    if (t !== "PixelXDimension" && t !== "PixelYDimension") {
                        return false
                    }
                    return q("exif", t, u)
                }, getBinary: function () {
                    return p.SEGMENT()
                }, purge: function () {
                    p.init(null);
                    p = l = null;
                    n = {}
                }
            }
        }
    });
    h("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function (n, i, k, m, j) {
        function l(w) {
            var p, r, t, s, v, o;

            function u() {
                var x = 0, y, z;
                while (x <= p.length) {
                    y = r.SHORT(x += 2);
                    if (y >= 65472 && y <= 65475) {
                        x += 5;
                        return {height: r.SHORT(x), width: r.SHORT(x += 2)}
                    }
                    z = r.SHORT(x += 2);
                    x += z - 2
                }
                return null
            }

            p = w;
            r = new m();
            r.init(p);
            if (r.SHORT(0) !== 65496) {
                throw new i.ImageError(i.ImageError.WRONG_FORMAT)
            }
            t = new k(w);
            s = new j();
            o = !!s.init(t.get("app1")[0]);
            v = u.call(this);
            n.extend(this, {
                type: "image/jpeg",
                size: p.length,
                width: v && v.width || 0,
                height: v && v.height || 0,
                setExif: function (x, y) {
                    if (!o) {
                        return false
                    }
                    if (n.typeOf(x) === "object") {
                        n.each(x, function (A, z) {
                            s.setExif(z, A)
                        })
                    } else {
                        s.setExif(x, y)
                    }
                    t.set("app1", s.getBinary())
                },
                writeHeaders: function () {
                    if (!arguments.length) {
                        return (p = t.restore(p))
                    }
                    return t.restore(arguments[0])
                },
                stripHeaders: function (x) {
                    return t.strip(x)
                },
                purge: function () {
                    q.call(this)
                }
            });
            if (o) {
                this.meta = {tiff: s.TIFF(), exif: s.EXIF(), gps: s.GPS()}
            }
            function q() {
                if (!s || !t || !r) {
                    return
                }
                s.purge();
                t.purge();
                r.init(null);
                p = v = t = s = r = null
            }
        }

        return l
    });
    h("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function (i, l, k) {
        function j(u) {
            var n, p, r, q, t;
            n = u;
            p = new k();
            p.init(n);
            (function () {
                var v = 0, x = 0, w = [35152, 20039, 3338, 6666];
                for (x = 0; x < w.length; x++, v += 2) {
                    if (w[x] != p.SHORT(v)) {
                        throw new i.ImageError(i.ImageError.WRONG_FORMAT)
                    }
                }
            }());
            function s() {
                var w, v;
                w = m.call(this, 8);
                if (w.type == "IHDR") {
                    v = w.start;
                    return {width: p.LONG(v), height: p.LONG(v += 4)}
                }
                return null
            }

            function o() {
                if (!p) {
                    return
                }
                p.init(null);
                n = t = r = q = p = null
            }

            t = s.call(this);
            l.extend(this, {
                type: "image/png", size: n.length, width: t.width, height: t.height, purge: function () {
                    o.call(this)
                }
            });
            o.call(this);
            function m(v) {
                var y, x, z, w;
                y = p.LONG(v);
                x = p.STRING(v += 4, 4);
                z = v += 4;
                w = p.LONG(v + y);
                return {length: y, type: x, start: z, CRC: w}
            }
        }

        return j
    });
    h("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function (l, i, k, j) {
        return function (n) {
            var o = [k, j], m;
            m = (function () {
                for (var q = 0; q < o.length; q++) {
                    try {
                        return new o[q](n)
                    } catch (p) {
                    }
                }
                throw new i.ImageError(i.ImageError.WRONG_FORMAT)
            }());
            l.extend(this, {
                type: "", size: 0, width: 0, height: 0, setExif: function () {
                }, writeHeaders: function (p) {
                    return p
                }, stripHeaders: function (p) {
                    return p
                }, purge: function () {
                }
            });
            l.extend(this, m);
            this.purge = function () {
                m.purge();
                m = null
            }
        }
    });
    h("moxie/runtime/html5/image/MegaPixel", [], function () {
        function i(I, m, n) {
            var p = I.naturalWidth, v = I.naturalHeight;
            var C = n.width, z = n.height;
            var r = n.x || 0, q = n.y || 0;
            var D = m.getContext("2d");
            if (j(I)) {
                p /= 2;
                v /= 2
            }
            var G = 1024;
            var l = document.createElement("canvas");
            l.width = l.height = G;
            var o = l.getContext("2d");
            var E = k(I, p, v);
            var w = 0;
            while (w < v) {
                var H = w + G > v ? v - w : G;
                var A = 0;
                while (A < p) {
                    var B = A + G > p ? p - A : G;
                    o.clearRect(0, 0, G, G);
                    o.drawImage(I, -A, -w);
                    var t = (A * C / p + r) << 0;
                    var u = Math.ceil(B * C / p);
                    var s = (w * z / v / E + q) << 0;
                    var F = Math.ceil(H * z / v / E);
                    D.drawImage(l, 0, 0, B, H, t, s, u, F);
                    A += G
                }
                w += G
            }
            l = o = null
        }

        function j(n) {
            var m = n.naturalWidth, p = n.naturalHeight;
            if (m * p > 1024 * 1024) {
                var o = document.createElement("canvas");
                o.width = o.height = 1;
                var l = o.getContext("2d");
                l.drawImage(n, -m + 1, 0);
                return l.getImageData(0, 0, 1, 1).data[3] === 0
            } else {
                return false
            }
        }

        function k(p, m, u) {
            var l = document.createElement("canvas");
            l.width = 1;
            l.height = u;
            var v = l.getContext("2d");
            v.drawImage(p, 0, 0);
            var o = v.getImageData(0, 0, 1, u).data;
            var s = 0;
            var q = u;
            var t = u;
            while (t > s) {
                var n = o[(t - 1) * 4 + 3];
                if (n === 0) {
                    q = t
                } else {
                    s = t
                }
                t = (q + s) >> 1
            }
            l = null;
            var r = (t / u);
            return (r === 0) ? 1 : r
        }

        return {isSubsampled: j, renderTo: i}
    });
    h("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/MegaPixel", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (o, i, p, k, m, r, q, j, l) {
        function n() {
            var C = this, B, G, A, w, E, I = false, t = true;
            i.extend(this, {
                loadFromBlob: function (L) {
                    var K = this, N = K.getRuntime(), J = arguments.length > 1 ? arguments[1] : true;
                    if (!N.can("access_binary")) {
                        throw new p.RuntimeError(p.RuntimeError.NOT_SUPPORTED_ERR)
                    }
                    E = L;
                    if (L.isDetached()) {
                        w = L.getSource();
                        z.call(this, w);
                        return
                    } else {
                        F.call(this, L.getSource(), function (O) {
                            if (J) {
                                w = H(O)
                            }
                            z.call(K, O)
                        })
                    }
                }, loadFromImage: function (J, K) {
                    this.meta = J.meta;
                    E = new m(null, {name: J.name, size: J.size, type: J.type});
                    z.call(this, K ? (w = J.getAsBinaryString()) : J.getAsDataURL())
                }, getInfo: function () {
                    var J = this.getRuntime(), K;
                    if (!G && w && J.can("access_image_binary")) {
                        G = new r(w)
                    }
                    K = {
                        width: x().width || 0,
                        height: x().height || 0,
                        type: E.type || j.getFileMime(E.name),
                        size: w && w.length || E.size || 0,
                        name: E.name || "",
                        meta: G && G.meta || this.meta || {}
                    };
                    return K
                }, downsize: function () {
                    s.apply(this, arguments)
                }, getAsCanvas: function () {
                    if (A) {
                        A.id = this.uid + "_canvas"
                    }
                    return A
                }, getAsBlob: function (J, K) {
                    if (J !== this.type) {
                        s.call(this, this.width, this.height, false)
                    }
                    return new m(null, {name: E.name || "", type: J, data: C.getAsBinaryString.call(this, J, K)})
                }, getAsDataURL: function (K) {
                    var L = arguments[1] || 90;
                    if (!I) {
                        return B.src
                    }
                    if ("image/jpeg" !== K) {
                        return A.toDataURL("image/png")
                    } else {
                        try {
                            return A.toDataURL("image/jpeg", L / 100)
                        } catch (J) {
                            return A.toDataURL("image/jpeg")
                        }
                    }
                }, getAsBinaryString: function (K, N) {
                    if (!I) {
                        if (!w) {
                            w = H(C.getAsDataURL(K, N))
                        }
                        return w
                    }
                    if ("image/jpeg" !== K) {
                        w = H(C.getAsDataURL(K, N))
                    } else {
                        var L;
                        if (!N) {
                            N = 90
                        }
                        try {
                            L = A.toDataURL("image/jpeg", N / 100)
                        } catch (J) {
                            L = A.toDataURL("image/jpeg")
                        }
                        w = H(L);
                        if (G) {
                            w = G.stripHeaders(w);
                            if (t) {
                                if (G.meta && G.meta.exif) {
                                    G.setExif({PixelXDimension: this.width, PixelYDimension: this.height})
                                }
                                w = G.writeHeaders(w)
                            }
                            G.purge();
                            G = null
                        }
                    }
                    I = false;
                    return w
                }, destroy: function () {
                    C = null;
                    u.call(this);
                    this.getRuntime().getShim().removeInstance(this.uid)
                }
            });
            function x() {
                if (!A && !B) {
                    throw new p.ImageError(p.DOMException.INVALID_STATE_ERR)
                }
                return A || B
            }

            function H(J) {
                return k.atob(J.substring(J.indexOf("base64,") + 7))
            }

            function D(K, J) {
                return "data:" + (J || "") + ";base64," + k.btoa(K)
            }

            function z(K) {
                var J = this;
                B = new Image();
                B.onerror = function () {
                    u.call(this);
                    J.trigger("error", p.ImageError.WRONG_FORMAT)
                };
                B.onload = function () {
                    J.trigger("load")
                };
                B.src = /^data:[^;]*;base64,/.test(K) ? K : D(K, E.type)
            }

            function F(L, N) {
                var K = this, J;
                if (window.FileReader) {
                    J = new FileReader();
                    J.onload = function () {
                        N(this.result)
                    };
                    J.onerror = function () {
                        K.trigger("error", p.ImageError.WRONG_FORMAT)
                    };
                    J.readAsDataURL(L)
                } else {
                    return N(L.getAsDataURL())
                }
            }

            function s(K, W, R, T) {
                var X = this, O, N, U = 0, S = 0, Q, V, L, J;
                t = T;
                J = (this.meta && this.meta.tiff && this.meta.tiff.Orientation) || 1;
                if (i.inArray(J, [5, 6, 7, 8]) !== -1) {
                    var P = K;
                    K = W;
                    W = P
                }
                Q = x();
                if (!R) {
                    O = Math.min(K / Q.width, W / Q.height)
                } else {
                    K = Math.min(K, Q.width);
                    W = Math.min(W, Q.height);
                    O = Math.max(K / Q.width, W / Q.height)
                }
                if (O > 1 && !R && T) {
                    this.trigger("Resize");
                    return
                }
                if (!A) {
                    A = document.createElement("canvas")
                }
                V = Math.round(Q.width * O);
                L = Math.round(Q.height * O);
                if (R) {
                    A.width = K;
                    A.height = W;
                    if (V > K) {
                        U = Math.round((V - K) / 2)
                    }
                    if (L > W) {
                        S = Math.round((L - W) / 2)
                    }
                } else {
                    A.width = V;
                    A.height = L
                }
                if (!t) {
                    y(A.width, A.height, J)
                }
                v.call(this, Q, A, -U, -S, V, L);
                this.width = A.width;
                this.height = A.height;
                I = true;
                X.trigger("Resize")
            }

            function v(N, O, J, Q, L, P) {
                if (l.OS === "iOS") {
                    q.renderTo(N, O, {width: L, height: P, x: J, y: Q})
                } else {
                    var K = O.getContext("2d");
                    K.drawImage(N, J, Q, L, P)
                }
            }

            function y(N, J, L) {
                switch (L) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        A.width = J;
                        A.height = N;
                        break;
                    default:
                        A.width = N;
                        A.height = J
                }
                var K = A.getContext("2d");
                switch (L) {
                    case 2:
                        K.translate(N, 0);
                        K.scale(-1, 1);
                        break;
                    case 3:
                        K.translate(N, J);
                        K.rotate(Math.PI);
                        break;
                    case 4:
                        K.translate(0, J);
                        K.scale(1, -1);
                        break;
                    case 5:
                        K.rotate(0.5 * Math.PI);
                        K.scale(1, -1);
                        break;
                    case 6:
                        K.rotate(0.5 * Math.PI);
                        K.translate(0, -J);
                        break;
                    case 7:
                        K.rotate(0.5 * Math.PI);
                        K.translate(N, -J);
                        K.scale(-1, 1);
                        break;
                    case 8:
                        K.rotate(-0.5 * Math.PI);
                        K.translate(-N, 0);
                        break
                }
            }

            function u() {
                if (G) {
                    G.purge();
                    G = null
                }
                w = B = A = E = null;
                I = false
            }
        }

        return (o.Image = n)
    });
    h("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (j, m, k, p, i) {
        var n = "flash", o = {};

        function l() {
            var r;
            try {
                r = navigator.plugins["Shockwave Flash"];
                r = r.description
            } catch (t) {
                try {
                    r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                } catch (s) {
                    r = "0.0"
                }
            }
            r = r.match(/\d+/g);
            return parseFloat(r[0] + "." + r[1])
        }

        function q(s) {
            var r = this, t;
            s = j.extend({swf_url: m.swf_url}, s);
            i.call(this, s, n, {
                access_binary: function (u) {
                    return u && r.mode === "browser"
                },
                access_image_binary: function (u) {
                    return u && r.mode === "browser"
                },
                display_media: i.capTrue,
                do_cors: i.capTrue,
                drag_and_drop: false,
                report_upload_progress: function () {
                    return r.mode === "client"
                },
                resize_image: i.capTrue,
                return_response_headers: false,
                return_response_type: function (u) {
                    if (u === "json" && !!window.JSON) {
                        return true
                    }
                    return !j.arrayDiff(u, ["", "text", "document"]) || r.mode === "browser"
                },
                return_status_code: function (u) {
                    return r.mode === "browser" || !j.arrayDiff(u, [200, 404])
                },
                select_file: i.capTrue,
                select_multiple: i.capTrue,
                send_binary_string: function (u) {
                    return u && r.mode === "browser"
                },
                send_browser_cookies: function (u) {
                    return u && r.mode === "browser"
                },
                send_custom_headers: function (u) {
                    return u && r.mode === "browser"
                },
                send_multipart: i.capTrue,
                slice_blob: function (u) {
                    return u && r.mode === "browser"
                },
                stream_upload: function (u) {
                    return u && r.mode === "browser"
                },
                summon_file_dialog: false,
                upload_filesize: function (u) {
                    return j.parseSizeStr(u) <= 2097152 || r.mode === "client"
                },
                use_http_method: function (u) {
                    return !j.arrayDiff(u, ["GET", "POST"])
                }
            }, {
                access_binary: function (u) {
                    return u ? "browser" : "client"
                }, access_image_binary: function (u) {
                    return u ? "browser" : "client"
                }, report_upload_progress: function (u) {
                    return u ? "browser" : "client"
                }, return_response_type: function (u) {
                    return j.arrayDiff(u, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                }, return_status_code: function (u) {
                    return j.arrayDiff(u, [200, 404]) ? "browser" : ["client", "browser"]
                }, send_binary_string: function (u) {
                    return u ? "browser" : "client"
                }, send_browser_cookies: function (u) {
                    return u ? "browser" : "client"
                }, send_custom_headers: function (u) {
                    return u ? "browser" : "client"
                }, stream_upload: function (u) {
                    return u ? "client" : "browser"
                }, upload_filesize: function (u) {
                    return j.parseSizeStr(u) >= 2097152 ? "client" : "browser"
                }
            }, "client");
            if (l() < 10) {
                this.mode = false
            }
            j.extend(this, {
                getShim: function () {
                    return k.get(this.uid)
                }, shimExec: function (v, w) {
                    var u = [].slice.call(arguments, 2);
                    return r.getShim().exec(this.uid, v, w, u)
                }, init: function () {
                    var v, w, u;
                    u = this.getShimContainer();
                    j.extend(u.style, {
                        position: "absolute",
                        top: "-8px",
                        left: "-8px",
                        width: "9px",
                        height: "9px",
                        overflow: "hidden"
                    });
                    v = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + s.swf_url + '" ';
                    if (m.browser === "IE") {
                        v += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '
                    }
                    v += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + s.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + m.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';
                    if (m.browser === "IE") {
                        w = document.createElement("div");
                        u.appendChild(w);
                        w.outerHTML = v;
                        w = u = null
                    } else {
                        u.innerHTML = v
                    }
                    t = setTimeout(function () {
                        if (r && !r.initialized) {
                            r.trigger("Error", new p.RuntimeError(p.RuntimeError.NOT_INIT_ERR))
                        }
                    }, 5000)
                }, destroy: (function (u) {
                    return function () {
                        u.call(r);
                        clearTimeout(t);
                        s = t = u = r = null
                    }
                }(this.destroy))
            }, o)
        }

        i.addConstructor(n, q);
        return o
    });
    h("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (j, k) {
        var i = {
            slice: function (n, p, l, o) {
                var m = this.getRuntime();
                if (p < 0) {
                    p = Math.max(n.size + p, 0)
                } else {
                    if (p > 0) {
                        p = Math.min(p, n.size)
                    }
                }
                if (l < 0) {
                    l = Math.max(n.size + l, 0)
                } else {
                    if (l > 0) {
                        l = Math.min(l, n.size)
                    }
                }
                n = m.shimExec.call(this, "Blob", "slice", p, l, o || "");
                if (n) {
                    n = new k(m.uid, n)
                }
                return n
            }
        };
        return (j.Blob = i)
    });
    h("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime"], function (i) {
        var j = {
            init: function (k) {
                this.getRuntime().shimExec.call(this, "FileInput", "init", {
                    name: k.name,
                    accept: k.accept,
                    multiple: k.multiple
                });
                this.trigger("ready")
            }
        };
        return (i.FileInput = j)
    });
    h("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (l, i) {
        var j = "";

        function k(n, o) {
            switch (o) {
                case"readAsText":
                    return i.atob(n, "utf8");
                case"readAsBinaryString":
                    return i.atob(n);
                case"readAsDataURL":
                    return n
            }
            return null
        }

        var m = {
            read: function (q, o) {
                var p = this, n = p.getRuntime();
                if (q === "readAsDataURL") {
                    j = "data:" + (o.type || "") + ";base64,"
                }
                p.bind("Progress", function (s, r) {
                    if (r) {
                        j += k(r, q)
                    }
                });
                return n.shimExec.call(this, "FileReader", "readAsBase64", o.uid)
            }, getResult: function () {
                return j
            }, destroy: function () {
                j = null
            }
        };
        return (l.FileReader = m)
    });
    h("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (k, i) {
        function j(m, n) {
            switch (n) {
                case"readAsText":
                    return i.atob(m, "utf8");
                case"readAsBinaryString":
                    return i.atob(m);
                case"readAsDataURL":
                    return m
            }
            return null
        }

        var l = {
            read: function (p, o) {
                var m, n = this.getRuntime();
                m = n.shimExec.call(this, "FileReaderSync", "readAsBase64", o.uid);
                if (!m) {
                    return null
                }
                if (p === "readAsDataURL") {
                    m = "data:" + (o.type || "") + ";base64," + m
                }
                return j(m, p, o.type)
            }
        };
        return (k.FileReaderSync = l)
    });
    h("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter"], function (j, m, p, i, o, n, l) {
        var k = {
            send: function (x, s) {
                var u = this, y = u.getRuntime();

                function r() {
                    x.transport = y.mode;
                    y.shimExec.call(u, "XMLHttpRequest", "send", x, s)
                }

                function t(A, z) {
                    y.shimExec.call(u, "XMLHttpRequest", "appendBlob", A, z.uid);
                    s = null;
                    r()
                }

                function v(A, z) {
                    var B = new l();
                    B.bind("TransportingComplete", function () {
                        z(this.result)
                    });
                    B.transport(A.getSource(), A.type, {ruid: y.uid})
                }

                if (!m.isEmptyObj(x.headers)) {
                    m.each(x.headers, function (z, A) {
                        y.shimExec.call(u, "XMLHttpRequest", "setRequestHeader", A, z.toString())
                    })
                }
                if (s instanceof n) {
                    var w;
                    s.each(function (A, z) {
                        if (A instanceof p) {
                            w = z
                        } else {
                            y.shimExec.call(u, "XMLHttpRequest", "append", z, A)
                        }
                    });
                    if (!s.hasBlob()) {
                        s = null;
                        r()
                    } else {
                        var q = s.getBlob();
                        if (q.isDetached()) {
                            v(q, function (z) {
                                q.destroy();
                                t(w, z)
                            })
                        } else {
                            t(w, q)
                        }
                    }
                } else {
                    if (s instanceof p) {
                        if (s.isDetached()) {
                            v(s, function (z) {
                                s.destroy();
                                s = z.uid;
                                r()
                            })
                        } else {
                            s = s.uid;
                            r()
                        }
                    } else {
                        r()
                    }
                }
            }, getResponse: function (t) {
                var q, s, r = this.getRuntime();
                s = r.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob");
                if (s) {
                    s = new i(r.uid, s);
                    if ("blob" === t) {
                        return s
                    }
                    try {
                        q = new o();
                        if (!!~m.inArray(t, ["", "text"])) {
                            return q.readAsText(s)
                        } else {
                            if ("json" === t && !!window.JSON) {
                                return JSON.parse(q.readAsText(s))
                            }
                        }
                    } finally {
                        s.destroy()
                    }
                }
                return null
            }, abort: function (r) {
                var q = this.getRuntime();
                q.shimExec.call(this, "XMLHttpRequest", "abort");
                this.dispatchEvent("readystatechange");
                this.dispatchEvent("abort")
            }
        };
        return (j.XMLHttpRequest = k)
    });
    h("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (i, k) {
        var j = {
            getAsBlob: function (n) {
                var m = this.getRuntime(), l = m.shimExec.call(this, "Transporter", "getAsBlob", n);
                if (l) {
                    return new k(m.uid, l)
                }
                return null
            }
        };
        return (i.Transporter = j)
    });
    h("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function (j, l, k, n, m) {
        var i = {
            loadFromBlob: function (r) {
                var q = this, p = q.getRuntime();

                function o(t) {
                    p.shimExec.call(q, "Image", "loadFromBlob", t.uid);
                    q = p = null
                }

                if (r.isDetached()) {
                    var s = new k();
                    s.bind("TransportingComplete", function () {
                        o(s.result.getSource())
                    });
                    s.transport(r.getSource(), r.type, {ruid: p.uid})
                } else {
                    o(r.getSource())
                }
            }, loadFromImage: function (p) {
                var o = this.getRuntime();
                return o.shimExec.call(this, "Image", "loadFromImage", p.uid)
            }, getAsBlob: function (q, r) {
                var p = this.getRuntime(), o = p.shimExec.call(this, "Image", "getAsBlob", q, r);
                if (o) {
                    return new n(p.uid, o)
                }
                return null
            }, getAsDataURL: function () {
                var q = this.getRuntime(), p = q.Image.getAsBlob.apply(this, arguments), o;
                if (!p) {
                    return null
                }
                o = new m();
                return o.readAsDataURL(p)
            }
        };
        return (j.Image = i)
    });
    h("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (j, m, l, p, i) {
        var n = "silverlight", o = {};

        function q(z) {
            var C = false, v = null, r, s, t, B, u, x = 0;
            try {
                try {
                    v = new ActiveXObject("AgControl.AgControl");
                    if (v.IsVersionSupported(z)) {
                        C = true
                    }
                    v = null
                } catch (y) {
                    var w = navigator.plugins["Silverlight Plug-In"];
                    if (w) {
                        r = w.description;
                        if (r === "1.0.30226.2") {
                            r = "2.0.30226.2"
                        }
                        s = r.split(".");
                        while (s.length > 3) {
                            s.pop()
                        }
                        while (s.length < 4) {
                            s.push(0)
                        }
                        t = z.split(".");
                        while (t.length > 4) {
                            t.pop()
                        }
                        do {
                            B = parseInt(t[x], 10);
                            u = parseInt(s[x], 10);
                            x++
                        } while (x < t.length && B === u);
                        if (B <= u && !isNaN(B)) {
                            C = true
                        }
                    }
                }
            } catch (A) {
                C = false
            }
            return C
        }

        function k(s) {
            var r = this, t;
            s = j.extend({xap_url: m.xap_url}, s);
            i.call(this, s, n, {
                access_binary: i.capTrue,
                access_image_binary: i.capTrue,
                display_media: i.capTrue,
                do_cors: i.capTrue,
                drag_and_drop: false,
                report_upload_progress: i.capTrue,
                resize_image: i.capTrue,
                return_response_headers: function (u) {
                    return u && r.mode === "client"
                },
                return_response_type: function (u) {
                    if (u !== "json") {
                        return true
                    } else {
                        return !!window.JSON
                    }
                },
                return_status_code: function (u) {
                    return r.mode === "client" || !j.arrayDiff(u, [200, 404])
                },
                select_file: i.capTrue,
                select_multiple: i.capTrue,
                send_binary_string: i.capTrue,
                send_browser_cookies: function (u) {
                    return u && r.mode === "browser"
                },
                send_custom_headers: function (u) {
                    return u && r.mode === "client"
                },
                send_multipart: i.capTrue,
                slice_blob: i.capTrue,
                stream_upload: true,
                summon_file_dialog: false,
                upload_filesize: i.capTrue,
                use_http_method: function (u) {
                    return r.mode === "client" || !j.arrayDiff(u, ["GET", "POST"])
                }
            }, {
                return_response_headers: function (u) {
                    return u ? "client" : "browser"
                }, return_status_code: function (u) {
                    return j.arrayDiff(u, [200, 404]) ? "client" : ["client", "browser"]
                }, send_browser_cookies: function (u) {
                    return u ? "browser" : "client"
                }, send_custom_headers: function (u) {
                    return u ? "client" : "browser"
                }, use_http_method: function (u) {
                    return j.arrayDiff(u, ["GET", "POST"]) ? "client" : ["client", "browser"]
                }
            });
            if (!q("2.0.31005.0") || m.browser === "Opera") {
                this.mode = false
            }
            j.extend(this, {
                getShim: function () {
                    return l.get(this.uid).content.Moxie
                }, shimExec: function (v, w) {
                    var u = [].slice.call(arguments, 2);
                    return r.getShim().exec(this.uid, v, w, u)
                }, init: function () {
                    var u;
                    u = this.getShimContainer();
                    u.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + s.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + m.global_event_dispatcher + '"/></object>';
                    t = setTimeout(function () {
                        if (r && !r.initialized) {
                            r.trigger("Error", new p.RuntimeError(p.RuntimeError.NOT_INIT_ERR))
                        }
                    }, m.OS !== "Windows" ? 10000 : 5000)
                }, destroy: (function (u) {
                    return function () {
                        u.call(r);
                        clearTimeout(t);
                        s = t = u = r = null
                    }
                }(this.destroy))
            }, o)
        }

        i.addConstructor(n, k);
        return o
    });
    h("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function (i, j, k) {
        return (i.Blob = j.extend({}, k))
    });
    h("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime"], function (i) {
        var j = {
            init: function (l) {
                function k(n) {
                    var o = "";
                    for (var m = 0; m < n.length; m++) {
                        o += (o !== "" ? "|" : "") + n[m].title + " | *." + n[m].extensions.replace(/,/g, ";*.")
                    }
                    return o
                }

                this.getRuntime().shimExec.call(this, "FileInput", "init", k(l.accept), l.name, l.multiple);
                this.trigger("ready")
            }
        };
        return (i.FileInput = j)
    });
    h("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function (k, j, i) {
        var l = {
            init: function () {
                var n = this, m = n.getRuntime(), o;
                o = m.getShimContainer();
                i.addEvent(o, "dragover", function (p) {
                    p.preventDefault();
                    p.stopPropagation();
                    p.dataTransfer.dropEffect = "copy"
                }, n.uid);
                i.addEvent(o, "dragenter", function (q) {
                    q.preventDefault();
                    var p = j.get(m.uid).dragEnter(q);
                    if (p) {
                        q.stopPropagation()
                    }
                }, n.uid);
                i.addEvent(o, "drop", function (q) {
                    q.preventDefault();
                    var p = j.get(m.uid).dragDrop(q);
                    if (p) {
                        q.stopPropagation()
                    }
                }, n.uid);
                return m.shimExec.call(this, "FileDrop", "init")
            }
        };
        return (k.FileDrop = l)
    });
    h("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function (i, k, j) {
        return (i.FileReader = k.extend({}, j))
    });
    h("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function (i, j, k) {
        return (i.FileReaderSync = j.extend({}, k))
    });
    h("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest"], function (i, k, j) {
        return (i.XMLHttpRequest = k.extend({}, j))
    });
    h("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function (i, k, j) {
        return (i.Transporter = k.extend({}, j))
    });
    h("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/image/Image"], function (j, k, i) {
        return (j.Image = k.extend({}, i, {
            getInfo: function () {
                var m = this.getRuntime(), n = ["tiff", "exif", "gps"], o = {meta: {}}, l = m.shimExec.call(this, "Image", "getInfo");
                if (l.meta) {
                    k.each(n, function (q) {
                        var u = l.meta[q], p, r, s, t;
                        if (u && u.keys) {
                            o.meta[q] = {};
                            for (r = 0, s = u.keys.length; r < s; r++) {
                                p = u.keys[r];
                                t = u[p];
                                if (t) {
                                    if (/^(\d|[1-9]\d+)$/.test(t)) {
                                        t = parseInt(t, 10)
                                    } else {
                                        if (/^\d*\.\d+$/.test(t)) {
                                            t = parseFloat(t)
                                        }
                                    }
                                    o.meta[q][p] = t
                                }
                            }
                        }
                    })
                }
                o.width = parseInt(l.width, 10);
                o.height = parseInt(l.height, 10);
                o.size = parseInt(l.size, 10);
                o.type = l.type;
                o.name = l.name;
                return o
            }
        }))
    });
    h("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (o, i, l, k) {
        var n = "html4", m = {};

        function j(q) {
            var p = this, s = l.capTest, r = l.capTrue;
            l.call(this, q, n, {
                access_binary: s(window.FileReader || window.File && File.getAsDataURL),
                access_image_binary: false,
                display_media: s(m.Image && (k.can("create_canvas") || k.can("use_data_uri_over32kb"))),
                do_cors: false,
                drag_and_drop: false,
                filter_by_extension: s(function () {
                    return (k.browser === "Chrome" && k.version >= 28) || (k.browser === "IE" && k.version >= 10)
                }()),
                resize_image: function () {
                    return m.Image && p.can("access_binary") && k.can("create_canvas")
                },
                report_upload_progress: false,
                return_response_headers: false,
                return_response_type: function (t) {
                    if (t === "json" && !!window.JSON) {
                        return true
                    }
                    return !!~o.inArray(t, ["text", "document", ""])
                },
                return_status_code: function (t) {
                    return !o.arrayDiff(t, [200, 404])
                },
                select_file: function () {
                    return k.can("use_fileinput")
                },
                select_multiple: false,
                send_binary_string: false,
                send_custom_headers: false,
                send_multipart: true,
                slice_blob: false,
                stream_upload: function () {
                    return p.can("select_file")
                },
                summon_file_dialog: s(function () {
                    return (k.browser === "Firefox" && k.version >= 4) || (k.browser === "Opera" && k.version >= 12) || !!~o.inArray(k.browser, ["Chrome", "Safari"])
                }()),
                upload_filesize: r,
                use_http_method: function (t) {
                    return !o.arrayDiff(t, ["GET", "POST"])
                }
            });
            o.extend(this, {
                init: function () {
                    this.trigger("Init")
                }, destroy: (function (t) {
                    return function () {
                        t.call(p);
                        t = p = null
                    }
                }(this.destroy))
            });
            o.extend(this.getShim(), m)
        }

        l.addConstructor(n, j);
        return m
    });
    h("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (m, o, l, j, k, i) {
        function n() {
            var s, q = [], t = [], p;

            function r() {
                var w = this, z = w.getRuntime(), y, x, u, B, v, A;
                A = o.guid("uid_");
                y = z.getShimContainer();
                if (s) {
                    u = l.get(s + "_form");
                    if (u) {
                        o.extend(u.style, {top: "100%"})
                    }
                }
                B = document.createElement("form");
                B.setAttribute("id", A + "_form");
                B.setAttribute("method", "post");
                B.setAttribute("enctype", "multipart/form-data");
                B.setAttribute("encoding", "multipart/form-data");
                o.extend(B.style, {
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                });
                v = document.createElement("input");
                v.setAttribute("id", A);
                v.setAttribute("type", "file");
                v.setAttribute("name", p.name || "Filedata");
                v.setAttribute("accept", t.join(","));
                o.extend(v.style, {fontSize: "999px", opacity: 0});
                B.appendChild(v);
                y.appendChild(B);
                o.extend(v.style, {position: "absolute", top: 0, left: 0, width: "100%", height: "100%"});
                if (i.browser === "IE" && i.version < 10) {
                    o.extend(v.style, {filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"})
                }
                v.onchange = function () {
                    var D;
                    if (!this.value) {
                        return
                    }
                    if (this.files) {
                        D = this.files[0]
                    } else {
                        D = {name: this.value}
                    }
                    q = [D];
                    this.onchange = function () {
                    };
                    r.call(w);
                    w.bind("change", function C() {
                        var E = l.get(A), G = l.get(A + "_form"), F;
                        w.unbind("change", C);
                        if (w.files.length && E && G) {
                            F = w.files[0];
                            E.setAttribute("id", F.uid);
                            G.setAttribute("id", F.uid + "_form");
                            G.setAttribute("target", F.uid + "_iframe")
                        }
                        E = G = null
                    }, 998);
                    v = B = null;
                    w.trigger("change")
                };
                if (z.can("summon_file_dialog")) {
                    x = l.get(p.browse_button);
                    j.removeEvent(x, "click", w.uid);
                    j.addEvent(x, "click", function (C) {
                        if (v && !v.disabled) {
                            v.click()
                        }
                        C.preventDefault()
                    }, w.uid)
                }
                s = A;
                y = u = x = null
            }

            o.extend(this, {
                init: function (x) {
                    var u = this, w = u.getRuntime(), v;
                    p = x;
                    t = x.accept.mimes || k.extList2mimes(x.accept, w.can("filter_by_extension"));
                    v = w.getShimContainer();
                    (function () {
                        var y, A, z;
                        y = l.get(x.browse_button);
                        A = parseInt(l.getStyle(y, "z-index"), 10) || 0;
                        if (w.can("summon_file_dialog")) {
                            if (l.getStyle(y, "position") === "static") {
                                y.style.position = "relative"
                            }
                            v.style.zIndex = A - 1
                        } else {
                            v.style.zIndex = A
                        }
                        z = w.can("summon_file_dialog") ? y : v;
                        j.addEvent(z, "mouseover", function () {
                            u.trigger("mouseenter")
                        }, u.uid);
                        j.addEvent(z, "mouseout", function () {
                            u.trigger("mouseleave")
                        }, u.uid);
                        j.addEvent(z, "mousedown", function () {
                            u.trigger("mousedown")
                        }, u.uid);
                        j.addEvent(l.get(x.container), "mouseup", function () {
                            u.trigger("mouseup")
                        }, u.uid);
                        y = null
                    }());
                    r.call(this);
                    v = null;
                    u.trigger({type: "ready", async: true})
                }, getFiles: function () {
                    return q
                }, disable: function (v) {
                    var u;
                    if ((u = l.get(s))) {
                        u.disabled = !!v
                    }
                }, destroy: function () {
                    var v = this.getRuntime(), w = v.getShim(), u = v.getShimContainer();
                    j.removeAllEvents(u, this.uid);
                    j.removeAllEvents(p && l.get(p.container), this.uid);
                    j.removeAllEvents(p && l.get(p.browse_button), this.uid);
                    if (u) {
                        u.innerHTML = ""
                    }
                    w.removeInstance(this.uid);
                    s = q = t = p = u = w = null
                }
            })
        }

        return (m.FileInput = n)
    });
    h("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function (i, j) {
        return (i.FileReader = j)
    });
    h("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function (m, j, l, i, n, p, k, q) {
        function o() {
            var t, r, u;

            function s(v) {
                var A = this, y, z, w, x, B = false;
                if (!u) {
                    return
                }
                y = u.id.replace(/_iframe$/, "");
                z = l.get(y + "_form");
                if (z) {
                    w = z.getElementsByTagName("input");
                    x = w.length;
                    while (x--) {
                        switch (w[x].getAttribute("type")) {
                            case"hidden":
                                w[x].parentNode.removeChild(w[x]);
                                break;
                            case"file":
                                B = true;
                                break
                        }
                    }
                    w = [];
                    if (!B) {
                        z.parentNode.removeChild(z)
                    }
                    z = null
                }
                setTimeout(function () {
                    p.removeEvent(u, "load", A.uid);
                    if (u.parentNode) {
                        u.parentNode.removeChild(u)
                    }
                    var C = A.getRuntime().getShimContainer();
                    if (!C.children.length) {
                        C.parentNode.removeChild(C)
                    }
                    C = u = null;
                    v()
                }, 1)
            }

            j.extend(this, {
                send: function (D, x) {
                    var z = this, C = z.getRuntime(), y, w, B, v;
                    t = r = null;
                    function A() {
                        var E = C.getShimContainer() || document.body, F = document.createElement("div");
                        F.innerHTML = '<iframe id="' + y + '_iframe" name="' + y + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
                        u = F.firstChild;
                        E.appendChild(u);
                        p.addEvent(u, "load", function () {
                            var H;
                            try {
                                H = u.contentWindow.document || u.contentDocument || window.frames[u.id].document;
                                if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(H.title)) {
                                    t = H.title.replace(/^(\d+).*$/, "$1")
                                } else {
                                    t = 200;
                                    r = j.trim(H.body.innerHTML);
                                    z.trigger({type: "progress", loaded: r.length, total: r.length});
                                    if (v) {
                                        z.trigger({
                                            type: "uploadprogress",
                                            loaded: v.size || 1025,
                                            total: v.size || 1025
                                        })
                                    }
                                }
                            } catch (G) {
                                if (i.hasSameOrigin(D.url)) {
                                    t = 404
                                } else {
                                    s.call(z, function () {
                                        z.trigger("error")
                                    });
                                    return
                                }
                            }
                            s.call(z, function () {
                                z.trigger("load")
                            })
                        }, z.uid)
                    }

                    if (x instanceof q && x.hasBlob()) {
                        v = x.getBlob();
                        y = v.uid;
                        B = l.get(y);
                        w = l.get(y + "_form");
                        if (!w) {
                            throw new n.DOMException(n.DOMException.NOT_FOUND_ERR)
                        }
                    } else {
                        y = j.guid("uid_");
                        w = document.createElement("form");
                        w.setAttribute("id", y + "_form");
                        w.setAttribute("method", D.method);
                        w.setAttribute("enctype", "multipart/form-data");
                        w.setAttribute("encoding", "multipart/form-data");
                        w.setAttribute("target", y + "_iframe");
                        C.getShimContainer().appendChild(w)
                    }
                    if (x instanceof q) {
                        x.each(function (G, E) {
                            if (G instanceof k) {
                                if (B) {
                                    B.setAttribute("name", E)
                                }
                            } else {
                                var F = document.createElement("input");
                                j.extend(F, {type: "hidden", name: E, value: G});
                                if (B) {
                                    w.insertBefore(F, B)
                                } else {
                                    w.appendChild(F)
                                }
                            }
                        })
                    }
                    w.setAttribute("action", D.url);
                    A();
                    w.submit();
                    z.trigger("loadstart")
                }, getStatus: function () {
                    return t
                }, getResponse: function (v) {
                    if ("json" === v) {
                        if (j.typeOf(r) === "string" && !!window.JSON) {
                            try {
                                return JSON.parse(r.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                            } catch (w) {
                                return null
                            }
                        }
                    } else {
                        if ("document" === v) {
                        }
                    }
                    return r
                }, abort: function () {
                    var v = this;
                    if (u && u.contentWindow) {
                        if (u.contentWindow.stop) {
                            u.contentWindow.stop()
                        } else {
                            if (u.contentWindow.document.execCommand) {
                                u.contentWindow.document.execCommand("Stop")
                            } else {
                                u.src = "about:blank"
                            }
                        }
                    }
                    s.call(this, function () {
                        v.dispatchEvent("abort")
                    })
                }
            })
        }

        return (m.XMLHttpRequest = o)
    });
    h("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function (j, i) {
        return (j.Image = i)
    });
    a(["moxie/core/utils/Basic", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileInput", "moxie/file/FileDrop", "moxie/runtime/RuntimeTarget", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Transporter", "moxie/image/Image", "moxie/core/utils/Events"])
})(this);
(function (a) {
    var d = {}, c = a.moxie.core.utils.Basic.inArray;
    (function b(f) {
        var e, g;
        for (e in f) {
            g = typeof(f[e]);
            if (g === "object" && !~c(e, ["Exceptions", "Env", "Mime"])) {
                b(f[e])
            } else {
                if (g === "function") {
                    d[e] = f[e]
                }
            }
        }
    })(a.moxie);
    d.Env = a.moxie.core.utils.Env;
    d.Mime = a.moxie.core.utils.Mime;
    d.Exceptions = a.moxie.core.Exceptions;
    a.mOxie = d;
    if (!a.o) {
        a.o = d
    }
    return d
})(this);
(function (f, h, e) {
    var d = f.setTimeout, g = {};

    function a(j) {
        var i = j.required_features, k = {};

        function l(n, o, m) {
            var p = {
                chunks: "slice_blob",
                jpgresize: "send_binary_string",
                pngresize: "send_binary_string",
                progress: "report_upload_progress",
                multi_selection: "select_multiple",
                dragdrop: "drag_and_drop",
                drop_element: "drag_and_drop",
                headers: "send_custom_headers",
                urlstream_upload: "send_binary_string",
                canSendBinary: "send_binary",
                triggerDialog: "summon_file_dialog"
            };
            if (p[n]) {
                k[p[n]] = o
            } else {
                if (!m) {
                    k[n] = o
                }
            }
        }

        if (typeof(i) === "string") {
            c.each(i.split(/\s*,\s*/), function (m) {
                l(m, true)
            })
        } else {
            if (typeof(i) === "object") {
                c.each(i, function (n, m) {
                    l(m, n)
                })
            } else {
                if (i === true) {
                    if (j.chunk_size > 0) {
                        k.slice_blob = true
                    }
                    if (j.resize.enabled || !j.multipart) {
                        k.send_binary_string = true
                    }
                    c.each(j, function (n, m) {
                        l(m, !!n, true)
                    })
                }
            }
        }
        return k
    }

    var c = {
        VERSION: "2.1.2",
        STOPPED: 1,
        STARTED: 2,
        QUEUED: 1,
        UPLOADING: 2,
        FAILED: 4,
        DONE: 5,
        GENERIC_ERROR: -100,
        HTTP_ERROR: -200,
        IO_ERROR: -300,
        SECURITY_ERROR: -400,
        INIT_ERROR: -500,
        FILE_SIZE_ERROR: -600,
        FILE_EXTENSION_ERROR: -601,
        FILE_DUPLICATE_ERROR: -602,
        IMAGE_FORMAT_ERROR: -700,
        MEMORY_ERROR: -701,
        IMAGE_DIMENSIONS_ERROR: -702,
        mimeTypes: h.mimes,
        ua: h.ua,
        typeOf: h.typeOf,
        extend: h.extend,
        guid: h.guid,
        get: function b(m) {
            var k = [], l;
            if (h.typeOf(m) !== "array") {
                m = [m]
            }
            var j = m.length;
            while (j--) {
                l = h.get(m[j]);
                if (l) {
                    k.push(l)
                }
            }
            return k.length ? k : null
        },
        each: h.each,
        getPos: h.getPos,
        getSize: h.getSize,
        xmlEncode: function (j) {
            var k = {"<": "lt", ">": "gt", "&": "amp", '"': "quot", "'": "#39"}, i = /[<>&\"\']/g;
            return j ? ("" + j).replace(i, function (l) {
                return k[l] ? "&" + k[l] + ";" : l
            }) : j
        },
        toArray: h.toArray,
        inArray: h.inArray,
        addI18n: h.addI18n,
        translate: h.translate,
        isEmptyObj: h.isEmptyObj,
        hasClass: h.hasClass,
        addClass: h.addClass,
        removeClass: h.removeClass,
        getStyle: h.getStyle,
        addEvent: h.addEvent,
        removeEvent: h.removeEvent,
        removeAllEvents: h.removeAllEvents,
        cleanName: function (j) {
            var k, l;
            l = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
            for (k = 0; k < l.length; k += 2) {
                j = j.replace(l[k], l[k + 1])
            }
            j = j.replace(/\s+/g, "_");
            j = j.replace(/[^a-z0-9_\-\.]+/gi, "");
            return j
        },
        buildUrl: function (j, i) {
            var k = "";
            c.each(i, function (m, l) {
                k += (k ? "&" : "") + encodeURIComponent(l) + "=" + encodeURIComponent(m)
            });
            if (k) {
                j += (j.indexOf("?") > 0 ? "&" : "?") + k
            }
            return j
        },
        formatSize: function (j) {
            if (j === e || /\D/.test(j)) {
                return c.translate("N/A")
            }
            function i(m, l) {
                return Math.round(m * Math.pow(10, l)) / Math.pow(10, l)
            }

            var k = Math.pow(1024, 4);
            if (j > k) {
                return i(j / k, 1) + " " + c.translate("tb")
            }
            if (j > (k /= 1024)) {
                return i(j / k, 1) + " " + c.translate("gb")
            }
            if (j > (k /= 1024)) {
                return i(j / k, 1) + " " + c.translate("mb")
            }
            if (j > 1024) {
                return Math.round(j / 1024) + " " + c.translate("kb")
            }
            return j + " " + c.translate("b")
        },
        parseSize: h.parseSizeStr,
        predictRuntime: function (k, j) {
            var i, l;
            i = new c.Uploader(k);
            l = h.Runtime.thatCan(i.getOption().required_features, j || k.runtimes);
            i.destroy();
            return l
        },
        addFileFilter: function (j, i) {
            g[j] = i
        }
    };
    c.addFileFilter("mime_types", function (k, j, i) {
        if (k.length && k.regexp && !k.regexp.test(j.name)) {
            this.trigger("Error", {
                code: c.FILE_EXTENSION_ERROR,
                message: c.translate("File extension error."),
                file: j
            });
            i(false)
        } else {
            i(true)
        }
    });
    c.addFileFilter("max_file_size", function (l, j, i) {
        var k;
        l = c.parseSize(l);
        if (j.size !== k && l && j.size > l) {
            this.trigger("Error", {code: c.FILE_SIZE_ERROR, message: c.translate("File size error."), file: j});
            i(false)
        } else {
            i(true)
        }
    });
    c.addFileFilter("prevent_duplicates", function (l, j, i) {
        if (l) {
            var k = this.files.length;
            while (k--) {
                if (j.name === this.files[k].name && j.size === this.files[k].size) {
                    this.trigger("Error", {
                        code: c.FILE_DUPLICATE_ERROR,
                        message: c.translate("Duplicate file error."),
                        file: j
                    });
                    i(false);
                    return
                }
            }
        }
        i(true)
    });
    c.Uploader = function (l) {
        var t = c.guid(), G, p = [], x = {}, F = [], w = [], C, J, n = false, v;

        function I() {
            var L, N = 0, K;
            if (this.state == c.STARTED) {
                for (K = 0; K < p.length; K++) {
                    if (!L && p[K].status == c.QUEUED) {
                        L = p[K];
                        if (this.trigger("BeforeUpload", L)) {
                            L.status = c.UPLOADING;
                            this.trigger("UploadFile", L)
                        }
                    } else {
                        N++
                    }
                }
                if (N == p.length) {
                    if (this.state !== c.STOPPED) {
                        this.state = c.STOPPED;
                        this.trigger("StateChanged")
                    }
                    this.trigger("UploadComplete", p)
                }
            }
        }

        function k(K) {
            K.percent = K.size > 0 ? Math.ceil(K.loaded / K.size * 100) : 100;
            j()
        }

        function j() {
            var L, K;
            J.reset();
            for (L = 0; L < p.length; L++) {
                K = p[L];
                if (K.size !== e) {
                    J.size += K.origSize;
                    J.loaded += K.loaded * K.origSize / K.size
                } else {
                    J.size = e
                }
                if (K.status == c.DONE) {
                    J.uploaded++
                } else {
                    if (K.status == c.FAILED) {
                        J.failed++
                    } else {
                        J.queued++
                    }
                }
            }
            if (J.size === e) {
                J.percent = p.length > 0 ? Math.ceil(J.uploaded / p.length * 100) : 0
            } else {
                J.bytesPerSec = Math.ceil(J.loaded / ((+new Date() - C || 1) / 1000));
                J.percent = J.size > 0 ? Math.ceil(J.loaded / J.size * 100) : 0
            }
        }

        function H() {
            var K = F[0] || w[0];
            if (K) {
                return K.getRuntime().uid
            }
            return false
        }

        function E(L, K) {
            if (L.ruid) {
                var N = h.Runtime.getInfo(L.ruid);
                if (N) {
                    return N.can(K)
                }
            }
            return false
        }

        function y() {
            this.bind("FilesAdded FilesRemoved", function (K) {
                K.trigger("QueueChanged");
                K.refresh()
            });
            this.bind("CancelUpload", i);
            this.bind("BeforeUpload", B);
            this.bind("UploadFile", D);
            this.bind("UploadProgress", u);
            this.bind("StateChanged", A);
            this.bind("QueueChanged", j);
            this.bind("Error", r);
            this.bind("FileUploaded", s);
            this.bind("Destroy", q)
        }

        function z(Q, N) {
            var O = this, L = 0, K = [];
            var P = {
                runtime_order: Q.runtimes,
                required_caps: Q.required_features,
                preferred_caps: x,
                swf_url: Q.flash_swf_url,
                xap_url: Q.silverlight_xap_url
            };
            c.each(Q.runtimes.split(/\s*,\s*/), function (R) {
                if (Q[R]) {
                    P[R] = Q[R]
                }
            });
            if (Q.browse_button) {
                c.each(Q.browse_button, function (R) {
                    K.push(function (S) {
                        var T = new h.FileInput(c.extend({}, P, {
                            accept: Q.filters.mime_types,
                            name: Q.file_data_name,
                            multiple: Q.multi_selection,
                            container: Q.container,
                            browse_button: R
                        }));
                        T.onready = function () {
                            var U = h.Runtime.getInfo(this.ruid);
                            h.extend(O.features, {
                                chunks: U.can("slice_blob"),
                                multipart: U.can("send_multipart"),
                                multi_selection: U.can("select_multiple")
                            });
                            L++;
                            F.push(this);
                            S()
                        };
                        T.onchange = function () {
                            O.addFile(this.files)
                        };
                        T.bind("mouseenter mouseleave mousedown mouseup", function (U) {
                            if (!n) {
                                if (Q.browse_button_hover) {
                                    if ("mouseenter" === U.type) {
                                        h.addClass(R, Q.browse_button_hover)
                                    } else {
                                        if ("mouseleave" === U.type) {
                                            h.removeClass(R, Q.browse_button_hover)
                                        }
                                    }
                                }
                                if (Q.browse_button_active) {
                                    if ("mousedown" === U.type) {
                                        h.addClass(R, Q.browse_button_active)
                                    } else {
                                        if ("mouseup" === U.type) {
                                            h.removeClass(R, Q.browse_button_active)
                                        }
                                    }
                                }
                            }
                        });
                        T.bind("mousedown", function () {
                            O.trigger("Browse")
                        });
                        T.bind("error runtimeerror", function () {
                            T = null;
                            S()
                        });
                        T.init()
                    })
                })
            }
            if (Q.drop_element) {
                c.each(Q.drop_element, function (R) {
                    K.push(function (S) {
                        var T = new h.FileDrop(c.extend({}, P, {drop_zone: R}));
                        T.onready = function () {
                            var U = h.Runtime.getInfo(this.ruid);
                            O.features.dragdrop = U.can("drag_and_drop");
                            L++;
                            w.push(this);
                            S()
                        };
                        T.ondrop = function () {
                            O.addFile(this.files)
                        };
                        T.bind("error runtimeerror", function () {
                            T = null;
                            S()
                        });
                        T.init()
                    })
                })
            }
            h.inSeries(K, function () {
                if (typeof(N) === "function") {
                    N(L)
                }
            })
        }

        function o(N, P, K) {
            var L = new h.Image();
            try {
                L.onload = function () {
                    if (P.width > this.width && P.height > this.height && P.quality === e && P.preserve_headers && !P.crop) {
                        this.destroy();
                        return K(N)
                    }
                    L.downsize(P.width, P.height, P.crop, P.preserve_headers)
                };
                L.onresize = function () {
                    K(this.getAsBlob(N.type, P.quality));
                    this.destroy()
                };
                L.onerror = function () {
                    K(N)
                };
                L.load(N)
            } catch (O) {
                K(N)
            }
        }

        function m(N, P, Q) {
            var L = this, K = false;

            function O(S, T, U) {
                var R = G[S];
                switch (S) {
                    case"max_file_size":
                        if (S === "max_file_size") {
                            G.max_file_size = G.filters.max_file_size = T
                        }
                        break;
                    case"chunk_size":
                        if (T = c.parseSize(T)) {
                            G[S] = T;
                            G.send_file_name = true
                        }
                        break;
                    case"multipart":
                        G[S] = T;
                        if (!T) {
                            G.send_file_name = true
                        }
                        break;
                    case"unique_names":
                        G[S] = T;
                        if (T) {
                            G.send_file_name = true
                        }
                        break;
                    case"filters":
                        if (c.typeOf(T) === "array") {
                            T = {mime_types: T}
                        }
                        if (U) {
                            c.extend(G.filters, T)
                        } else {
                            G.filters = T
                        }
                        if (T.mime_types) {
                            G.filters.mime_types.regexp = (function (V) {
                                var W = [];
                                c.each(V, function (X) {
                                    X.extensions && c.each(X.extensions.split(/,/), function (Y) {
                                        if (/^\s*\*\s*$/.test(Y)) {
                                            W.push("\\.*")
                                        } else {
                                            W.push("\\." + Y.replace(new RegExp("[" + ("/^$.*+?|()[]{}\\".replace(/./g, "\\$&")) + "]", "g"), "\\$&"))
                                        }
                                    })
                                });
                                return new RegExp("(" + W.join("|") + ")$", "i")
                            }(G.filters.mime_types))
                        }
                        break;
                    case"resize":
                        if (U) {
                            c.extend(G.resize, T, {enabled: true})
                        } else {
                            G.resize = T
                        }
                        break;
                    case"prevent_duplicates":
                        G.prevent_duplicates = G.filters.prevent_duplicates = !!T;
                        break;
                    case"browse_button":
                    case"drop_element":
                        T = c.get(T);
                    case"container":
                    case"runtimes":
                    case"multi_selection":
                    case"flash_swf_url":
                    case"silverlight_xap_url":
                        G[S] = T;
                        if (!U) {
                            K = true
                        }
                        break;
                    default:
                        G[S] = T
                }
                if (!U) {
                    L.trigger("OptionChanged", S, T, R)
                }
            }

            if (typeof(N) === "object") {
                c.each(N, function (S, R) {
                    O(R, S, Q)
                })
            } else {
                O(N, P, Q)
            }
            if (Q) {
                G.required_features = a(c.extend({}, G));
                x = a(c.extend({}, G, {required_features: true}))
            } else {
                if (K) {
                    L.trigger("Destroy");
                    z.call(L, G, function (R) {
                        if (R) {
                            L.runtime = h.Runtime.getInfo(H()).type;
                            L.trigger("Init", {runtime: L.runtime});
                            L.trigger("PostInit")
                        } else {
                            L.trigger("Error", {code: c.INIT_ERROR, message: c.translate("Init error.")})
                        }
                    })
                }
            }
        }

        function B(K, L) {
            if (K.settings.unique_names) {
                var O = L.name.match(/\.([^.]+)$/), N = "part";
                if (O) {
                    N = O[1]
                }
                L.target_name = L.id + "." + N
            }
        }

        function D(T, Q) {
            var N = T.settings.url, R = T.settings.chunk_size, U = T.settings.max_retries, O = T.features, S = 0, K;
            if (Q.loaded) {
                S = Q.loaded = R ? R * Math.floor(Q.loaded / R) : 0
            }
            function P() {
                if (U-- > 0) {
                    d(L, 1000)
                } else {
                    Q.loaded = S;
                    T.trigger("Error", {
                        code: c.HTTP_ERROR,
                        message: c.translate("HTTP Error."),
                        file: Q,
                        response: v.responseText,
                        status: v.status,
                        responseHeaders: v.getAllResponseHeaders()
                    })
                }
            }

            function L() {
                var X, W, V = {}, Z;
                if (Q.status !== c.UPLOADING || T.state === c.STOPPED) {
                    return
                }
                if (T.settings.send_file_name) {
                    V.name = Q.target_name || Q.name
                }
                if (R && O.chunks && K.size > R) {
                    Z = Math.min(R, K.size - S);
                    X = K.slice(S, S + Z)
                } else {
                    Z = K.size;
                    X = K
                }
                if (R && O.chunks) {
                    if (T.settings.send_chunk_number) {
                        V.chunk = Math.ceil(S / R);
                        V.chunks = Math.ceil(K.size / R)
                    } else {
                        V.offset = S;
                        V.total = K.size
                    }
                }
                v = new h.XMLHttpRequest();
                if (v.upload) {
                    v.upload.onprogress = function (aa) {
                        Q.loaded = Math.min(Q.size, S + aa.loaded);
                        T.trigger("UploadProgress", Q)
                    }
                }
                var Y = v;
                v.onload = function () {
                    if (Y.status >= 400) {
                        P();
                        return
                    }
                    U = T.settings.max_retries;
                    if (Z < K.size) {
                        X.destroy();
                        S += Z;
                        Q.loaded = Math.min(S, K.size);
                        T.trigger("ChunkUploaded", Q, {
                            offset: Q.loaded,
                            total: K.size,
                            response: Y.responseText,
                            status: Y.status,
                            responseHeaders: Y.getAllResponseHeaders()
                        });
                        if (h.Env.browser === "Android Browser") {
                            T.trigger("UploadProgress", Q)
                        }
                    } else {
                        Q.loaded = Q.size
                    }
                    X = W = null;
                    if (!S || S >= K.size) {
                        if (Q.size != Q.origSize) {
                            K.destroy();
                            K = null
                        }
                        T.trigger("UploadProgress", Q);
                        Q.status = c.DONE;
                        T.trigger("FileUploaded", Q, {
                            response: Y.responseText,
                            status: Y.status,
                            responseHeaders: Y.getAllResponseHeaders()
                        })
                    } else {
                        d(L, 1)
                    }
                };
                v.onerror = function () {
                    P()
                };
                v.onloadend = function () {
                    this.destroy();
                    Y = null
                };
                if (T.settings.multipart && O.multipart) {
                    v.open("post", N, true);
                    c.each(T.settings.headers, function (ab, aa) {
                        v.setRequestHeader(aa, ab)
                    });
                    W = new h.FormData();
                    c.each(c.extend(V, T.settings.multipart_params), function (ab, aa) {
                        W.append(aa, ab)
                    });
                    W.append(T.settings.file_data_name, X);
                    v.send(W, {
                        runtime_order: T.settings.runtimes,
                        required_caps: T.settings.required_features,
                        preferred_caps: x,
                        swf_url: T.settings.flash_swf_url,
                        xap_url: T.settings.silverlight_xap_url
                    })
                } else {
                    N = c.buildUrl(T.settings.url, c.extend(V, T.settings.multipart_params));
                    v.open("post", N, true);
                    v.setRequestHeader("Content-Type", "application/octet-stream");
                    c.each(T.settings.headers, function (ab, aa) {
                        v.setRequestHeader(aa, ab)
                    });
                    v.send(X, {
                        runtime_order: T.settings.runtimes,
                        required_caps: T.settings.required_features,
                        preferred_caps: x,
                        swf_url: T.settings.flash_swf_url,
                        xap_url: T.settings.silverlight_xap_url
                    })
                }
            }

            K = Q.getSource();
            if (T.settings.resize.enabled && E(K, "send_binary_string") && !!~h.inArray(K.type, ["image/jpeg", "image/png"])) {
                o.call(this, K, T.settings.resize, function (V) {
                    K = V;
                    Q.size = V.size;
                    L()
                })
            } else {
                L()
            }
        }

        function u(K, L) {
            k(L)
        }

        function A(K) {
            if (K.state == c.STARTED) {
                C = (+new Date())
            } else {
                if (K.state == c.STOPPED) {
                    for (var L = K.files.length - 1; L >= 0; L--) {
                        if (K.files[L].status == c.UPLOADING) {
                            K.files[L].status = c.QUEUED;
                            j()
                        }
                    }
                }
            }
        }

        function i() {
            if (v) {
                v.abort()
            }
        }

        function s(K) {
            j();
            d(function () {
                I.call(K)
            }, 1)
        }

        function r(K, L) {
            if (L.code === c.INIT_ERROR) {
                K.destroy()
            } else {
                if (L.file) {
                    L.file.status = c.FAILED;
                    k(L.file);
                    if (K.state == c.STARTED) {
                        K.trigger("CancelUpload");
                        d(function () {
                            I.call(K)
                        }, 1)
                    }
                }
            }
        }

        function q(K) {
            K.stop();
            c.each(p, function (L) {
                L.destroy()
            });
            p = [];
            if (F.length) {
                c.each(F, function (L) {
                    L.destroy()
                });
                F = []
            }
            if (w.length) {
                c.each(w, function (L) {
                    L.destroy()
                });
                w = []
            }
            x = {};
            n = false;
            C = v = null;
            J.reset()
        }

        G = {
            runtimes: h.Runtime.order,
            max_retries: 0,
            chunk_size: 0,
            multipart: true,
            multi_selection: true,
            file_data_name: "file",
            flash_swf_url: "js/Moxie.swf",
            silverlight_xap_url: "js/Moxie.xap",
            filters: {mime_types: [], prevent_duplicates: false, max_file_size: 0},
            resize: {enabled: false, preserve_headers: true, crop: false},
            send_file_name: true,
            send_chunk_number: true
        };
        m.call(this, l, null, true);
        J = new c.QueueProgress();
        c.extend(this, {
            id: t,
            uid: t,
            state: c.STOPPED,
            features: {},
            runtime: null,
            files: p,
            settings: G,
            total: J,
            init: function () {
                var K = this;
                if (typeof(G.preinit) == "function") {
                    G.preinit(K)
                } else {
                    c.each(G.preinit, function (N, L) {
                        K.bind(L, N)
                    })
                }
                y.call(this);
                if (!G.browse_button || !G.url) {
                    this.trigger("Error", {code: c.INIT_ERROR, message: c.translate("Init error.")});
                    return
                }
                z.call(this, G, function (L) {
                    if (typeof(G.init) == "function") {
                        G.init(K)
                    } else {
                        c.each(G.init, function (O, N) {
                            K.bind(N, O)
                        })
                    }
                    if (L) {
                        K.runtime = h.Runtime.getInfo(H()).type;
                        K.trigger("Init", {runtime: K.runtime});
                        K.trigger("PostInit")
                    } else {
                        K.trigger("Error", {code: c.INIT_ERROR, message: c.translate("Init error.")})
                    }
                })
            },
            setOption: function (K, L) {
                m.call(this, K, L, !this.runtime)
            },
            getOption: function (K) {
                if (!K) {
                    return G
                }
                return G[K]
            },
            refresh: function () {
                if (F.length) {
                    c.each(F, function (K) {
                        K.trigger("Refresh")
                    })
                }
                this.trigger("Refresh")
            },
            start: function () {
                if (this.state != c.STARTED) {
                    this.state = c.STARTED;
                    this.trigger("StateChanged");
                    I.call(this)
                }
            },
            stop: function () {
                if (this.state != c.STOPPED) {
                    this.state = c.STOPPED;
                    this.trigger("StateChanged");
                    this.trigger("CancelUpload")
                }
            },
            disableBrowse: function () {
                n = arguments[0] !== e ? arguments[0] : true;
                if (F.length) {
                    c.each(F, function (K) {
                        K.disable(n)
                    })
                }
                this.trigger("DisableBrowse", n)
            },
            getFile: function (L) {
                var K;
                for (K = p.length - 1; K >= 0; K--) {
                    if (p[K].id === L) {
                        return p[K]
                    }
                }
            },
            addFile: function (Q, S) {
                var N = this, K = [], L = [], O;

                function R(V, U) {
                    var T = [];
                    h.each(N.settings.filters, function (X, W) {
                        if (g[W]) {
                            T.push(function (Y) {
                                g[W].call(N, X, V, function (Z) {
                                    Y(!Z)
                                })
                            })
                        }
                    });
                    h.inSeries(T, U)
                }

                function P(T) {
                    var U = h.typeOf(T);
                    if (T instanceof h.File) {
                        if (!T.ruid && !T.isDetached()) {
                            if (!O) {
                                return false
                            }
                            T.ruid = O;
                            T.connectRuntime(O)
                        }
                        P(new c.File(T))
                    } else {
                        if (T instanceof h.Blob) {
                            P(T.getSource());
                            T.destroy()
                        } else {
                            if (T instanceof c.File) {
                                if (S) {
                                    T.name = S
                                }
                                K.push(function (V) {
                                    R(T, function (W) {
                                        if (!W) {
                                            p.push(T);
                                            L.push(T);
                                            N.trigger("FileFiltered", T)
                                        }
                                        d(V, 1)
                                    })
                                })
                            } else {
                                if (h.inArray(U, ["file", "blob"]) !== -1) {
                                    P(new h.File(null, T))
                                } else {
                                    if (U === "node" && h.typeOf(T.files) === "filelist") {
                                        h.each(T.files, P)
                                    } else {
                                        if (U === "array") {
                                            S = null;
                                            h.each(T, P)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                O = H();
                P(Q);
                if (K.length) {
                    h.inSeries(K, function () {
                        if (L.length) {
                            N.trigger("FilesAdded", L)
                        }
                    })
                }
            },
            removeFile: function (L) {
                var N = typeof(L) === "string" ? L : L.id;
                for (var K = p.length - 1; K >= 0; K--) {
                    if (p[K].id === N) {
                        return this.splice(K, 1)[0]
                    }
                }
            },
            splice: function (O, K) {
                var L = p.splice(O === e ? 0 : O, K === e ? p.length : K);
                var N = false;
                if (this.state == c.STARTED) {
                    c.each(L, function (P) {
                        if (P.status === c.UPLOADING) {
                            N = true;
                            return false
                        }
                    });
                    if (N) {
                        this.stop()
                    }
                }
                this.trigger("FilesRemoved", L);
                c.each(L, function (P) {
                    P.destroy()
                });
                if (N) {
                    this.start()
                }
                return L
            },
            bind: function (L, O, N) {
                var K = this;
                c.Uploader.prototype.bind.call(this, L, function () {
                    var P = [].slice.call(arguments);
                    P.splice(0, 1, K);
                    return O.apply(this, P)
                }, 0, N)
            },
            destroy: function () {
                this.trigger("Destroy");
                G = J = null;
                this.unbindAll()
            }
        })
    };
    c.Uploader.prototype = h.EventTarget.instance;
    c.File = (function () {
        var j = {};

        function i(k) {
            c.extend(this, {
                id: c.guid(),
                name: k.name || k.fileName,
                type: k.type || "",
                size: k.size || k.fileSize,
                origSize: k.size || k.fileSize,
                loaded: 0,
                percent: 0,
                status: c.QUEUED,
                lastModifiedDate: k.lastModifiedDate || (new Date()).toLocaleString(),
                getNative: function () {
                    var l = this.getSource().getSource();
                    return h.inArray(h.typeOf(l), ["blob", "file"]) !== -1 ? l : null
                },
                getSource: function () {
                    if (!j[this.id]) {
                        return null
                    }
                    return j[this.id]
                },
                destroy: function () {
                    var l = this.getSource();
                    if (l) {
                        l.destroy();
                        delete j[this.id]
                    }
                }
            });
            j[this.id] = k
        }

        return i
    }());
    c.QueueProgress = function () {
        var i = this;
        i.size = 0;
        i.loaded = 0;
        i.uploaded = 0;
        i.failed = 0;
        i.queued = 0;
        i.percent = 0;
        i.bytesPerSec = 0;
        i.reset = function () {
            i.size = i.loaded = i.uploaded = i.failed = i.queued = i.percent = i.bytesPerSec = 0
        }
    };
    f.plupload = c
}(window, mOxie));
if (window.M && typeof M.define == "function") {
    M.define("/js/plupload", function () {
        return window.plupload
    })
}
M.closure(function (h) {
    var i = h("dialog/alert");
    var n = $("#_j_img").data("img"), j = $("#_j_mddid").data("mddid"), t = $("#_j_publish").data("publish"), s = $("._j_phone"), u = $("._j_weixin"), w = $("._j_qq"), c = $("._j_start_date"), g = $("._j_start_time"), k = $("#_j_go_mdd"), v = $("#_j_from_mdd"), a = $("._j_go_mdd_list"), p = $("._j_img_list"), e = true, y = new Date(), x = y.getTime();
    if (!t) {
        i.pop("每天最多发布一条结伴,明天再来发吧", function () {
            document.location.href = "/together/"
        })
    }
    n = n ? n : [];
    j = j ? j : [];
    h("jqui-datepicker");
    var b = {
        dateFormat: "yy-mm-dd",
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        changeMonth: true,
        changeYear: true,
        beforeShowDay: function (A) {
            if (x > Number(A) + 84600000) {
                return [false, ""]
            } else {
                return [true]
            }
        },
        onSelect: function (A) {
            c.val(A).addClass("have")
        }
    };
    g.datepicker(b);
    $("input").blur(function (A) {
        var B = $(A.currentTarget);
        var C = B.val();
        if (C) {
            B.addClass("have")
        } else {
            B.removeClass("have")
        }
        B.removeClass("focus")
    }).focus(function (A) {
        var B = $(A.currentTarget);
        B.addClass("focus")
    });
    g.focus(function () {
        $("._j_date").addClass("on");
        c.focus()
    });
    c.blur(function () {
        $("._j_date").removeClass("on")
    });
    k.blur(function () {
        k.val("")
    });
    var d = h("Suggestion"), l = {
        url: "/together/travel/mddsearch",
        listItemHoverClass: "mdd-hover",
        keyParamName: "sName",
        dataType: "json",
        listFirstItemHover: true,
        handleSuggest: function (D) {
            var C = "", A = D.data.mdd;
            if (!A.length) {
                this.input.data("droplist").hide()
            } else {
                for (var B = 0; B < A.length; B++) {
                    if (this.mddListClass == "_j_select_go") {
                        C += '<li class="_j_add_go_mdd" data-mddid="' + A[B].mddid + '" data-name="' + A[B].name + '">' + A[B].name + "</li>"
                    } else {
                        C += '<li class="_j_add_from_mdd" data-mddid="' + A[B].mddid + '" data-name="' + A[B].name + '">' + A[B].name + "</li>"
                    }
                }
            }
            return C
        },
        updateList: function (A) {
            if (A) {
                this.listContainer.removeClass("hide").html(A)
            } else {
                this.listContainer.addClass("hide")
            }
        }
    };
    l.input = k;
    l.mddListClass = "_j_select_go";
    l.listItemSelector = "._j_add_go_mdd";
    l.listContainer = $("._j_go_mdd_ul");
    var o = new d(l);
    l.input = v;
    l.mddListClass = "_j_select_from";
    l.listItemSelector = "._j_add_from_mdd";
    l.listContainer = $("._j_from_mdd_ul");
    var r = new d(l);
    M.Event(o).on("itemselected", function (A) {
        if (A.item && A.input) {
            m($(A.item.get(0)).html(), $(A.item.get(0)).data("mddid"));
            $("._j_go_mdd_ul").hide()
        }
    });
    M.Event(r).on("itemselected", function (A) {
        if (A.item && A.input) {
            z($(A.item.get(0)).html(), $(A.item.get(0)).data("mddid"));
            $("._j_from_mdd_ul").hide()
        }
    });
    function m(A, D) {
        if (j.length >= 4) {
            i.pop("为了让更多人看到你的结伴，请选择较为热门的4个目的地，其他目的地可在结伴详情中说明");
            return false
        }
        a.addClass("have");
        var C = true;
        for (var B = 0; B < j.length; B++) {
            if (j[B] == D) {
                C = false
            }
        }
        if (C) {
            j.push(D);
            a.prepend('<span class="tag-place _j_mdd_remove _j_go_mdd_add" data-mddid="' + D + '" data-mddname="' + A + '">' + A + "<i>×</i></span>")
        }
        k.val("")
    }

    function z(A, B) {
        v.val(A).addClass("have").data("mddid", B)
    }

    a.delegate("._j_mdd_remove", "click", function (B) {
        var C = $(B.currentTarget), D = C.data("mddid");
        C.remove();
        for (var A = 0; A < j.length; A++) {
            if (j[A] == D) {
                j.splice(A, 1);
                $("._j_hot_mdd[value=" + D + "]").removeClass("on");
                break
            }
        }
        if (!j.length) {
            a.removeClass("have")
        }
    });
    h("/js/plupload");
    var q = new plupload.Uploader({
        runtimes: "html5,html4",
        browse_button: $("#_j_addpicbtns").get(0),
        container: $("#_j_img_li").get(0),
        max_file_size: "8mb",
        url: "/interface/pic_upload.php",
        filters: [{title: "选择照片", extensions: "jpeg,jpg,gif,png"}],
        file_data_name: "Filedata",
        multipart_params: {cat: "mdd", rtype: "w100"}
    });
    q.bind("FilesAdded", function (A, C) {
        var B = n.length;
        if (C.length + B > 5) {
            i.pop("最多上传5张图片");
            A.stop();
            A.splice(0);
            A.refresh();
            return
        } else {
            A.start()
        }
    });
    q.bind("FileUploaded", function (F, C, A) {
        var D = $.parseJSON(A.response), I = $.trim(D.file_id), G = true;
        if (!n.length) {
            for (var E = 0; E < n.length; E++) {
                if (img[E] == I) {
                    G = false;
                    break
                }
            }
        }
        if (G) {
            var B = new Date(), H = B.getTime();
            p.prepend(' <li><a><img class="_j_img_' + H + '" src="' + D.rtype_url + '" time="' + H + '" data-imgstr="' + I + '" style="width:100px;height:100px"><div class="bg-bar"></div><span class="set-cover _j_set_img" data-imgstr="' + I + '">设为封面</span></a><a class="btn-remove _j_remove_img _j_img_' + H + '" title="删除" href="#" data-time="' + H + '" data-imgstr="' + I + '"><i></i></a></li>');
            n.push(I)
        }
    });
    q.init();
    p.delegate("._j_remove_img", "click", function (C) {
        C.preventDefault();
        var E = $(C.currentTarget), D = E.data("time"), B = E.data("imgstr");
        for (var A = 0; A < n.length; A++) {
            if (n[A] == B) {
                n.splice(A, 1);
                break
            }
        }
        E.parent().remove()
    });
    p.delegate("._j_set_img", "click", function (D) {
        D.preventDefault();
        var E = $(D.currentTarget), C = E.data("imgstr");
        $("._j_set_img").html("设为封面");
        E.parent().parent().parent().children("li").removeClass("on");
        E.parent().parent().addClass("on");
        E.html("封面图片");
        for (var A = 0; A < n.length; A++) {
            if (n[A] == C) {
                var B = n.splice(A, 1);
                n.unshift(B[0]);
                break
            }
        }
    });
    $("._j_submit").click(function (J) {
        J.preventDefault();
        if (e) {
            var K = $("._j_title").val();
            if (!K) {
                i.pop("请确定您的活动标题");
                return
            }
            var H = s.val(), F = $.trim(u.val()), O = w.val();
            if (!H && !F && !O) {
                i.pop("请确定您的联系方式");
                return
            }
            if (H && !H.match(/^(((1[3-8][0-9]{1})|159|153)+\d{8})$/)) {
                i.pop("手机号码格式不正确！");
                return
            }
            if (F && !f(F)) {
                i.pop("请正确填写联系方式");
                return
            }
            if (O && !O.match(/^[1-9]\d{4,10}$/)) {
                i.pop("QQ格式不正确！");
                return
            }
            var G = "";
            if (!$("._j_go_mdd_add").length) {
                i.pop("请确定您去的目的地");
                return
            } else {
                if ($("._j_go_mdd_add").length > 4) {
                    i.pop("最多填写4个目的地");
                    return
                } else {
                    for (var D = 0; D < $("._j_go_mdd_add").length; D++) {
                        if (D == 0) {
                            G = $("._j_go_mdd_add").eq(D).data("mddid")
                        } else {
                            G = G + "|" + $("._j_go_mdd_add").eq(D).data("mddid")
                        }
                    }
                }
            }
            var I = v.data("mddid");
            if (!I) {
                i.pop("请确定出发地");
                return
            }
            var E = c.val();
            if (!E) {
                i.pop("请确定出发时间");
                return
            }
            var A = $("._j_count_day").val();
            if (!A) {
                i.pop("请确定活动时间");
                return
            }
            var N = $("._j_hope_num ").val();
            if (!N) {
                i.pop("请填写限制人数");
                return
            }
            var L = $("._j_description").val();
            if (!L) {
                i.pop("请描述您的结伴");
                return
            }
            var C = "";
            for (var D = 0; D < p.children().length - 1; D++) {
                if (D == 0) {
                    C = p.children().eq(D).children().eq(0).children("img").data("imgstr")
                } else {
                    if (p.children().eq(D).hasClass("on")) {
                        C = p.children().eq(D).children().eq(0).children("img").data("imgstr") + "," + C
                    } else {
                        C = C + "," + p.children().eq(D).children().eq(0).children("img").data("imgstr")
                    }
                }
            }
            e = false;
            var B = $("#_j_tid").data("tid");
            $.post("/together/travel/save", {
                tid: B,
                mddids: G,
                startdate: E,
                daynum: A,
                hopenum: N,
                phone: H,
                weixin: F,
                qq: O,
                img: C,
                note: L,
                title: K,
                from: I
            }, function (P) {
                if (P.data.data && P.data.data > 10) {
                    i.pop('发布成功<br>双方的主动沟通才是美好旅途的开始<br>记得给自己<a href="/insurance/">买份保险</a>', function () {
                        document.location.href = "/together/detail/" + P.data.data + ".html"
                    }, 3)
                } else {
                    i.pop(P.data.msg)
                }
                e = true
            }, "json")
        }
    });
    function f(A) {
        if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(A)) {
            return false
        } else {
            return true
        }
    }
});
M.define("Storage", function (d, f, b) {
    var m = document;
    var e = {
        _element: null, _expires: null, _file: document.location.hostname, init: function () {
            if (!this._element) {
                try {
                    this._element = m.createElement("input");
                    this._element.type = "hidden";
                    this._element.addBehavior("#default#userData");
                    m.body.appendChild(this._element);
                    return {setItem: this.setItem, getItem: this.getItem, removeItem: this.removeItem}
                } catch (n) {
                    M.error(n)
                }
            }
            return true
        }, setItem: function (q, r, o) {
            var n = i(o);
            this._element.expires = n.toUTCString();
            this._element.load(this._file);
            var p = a(this._element.getAttribute(q)), s = h(r, +n);
            this._element.setAttribute(q, s);
            this._element.save(this._file);
            j({key: q, newValue: s, oldValie: p, url: window.location.href})
        }, getItem: function (n) {
            this._element.load(this._file);
            var o = a(this._element.getAttribute(n));
            return o && o.value
        }, removeItem: function (n) {
            this._element.load(this._file);
            this._element.removeAttribute(n);
            this._element.save(this._file)
        }
    };
    var k = {
        setItem: function (p, q, o) {
            var n = i(o);
            localStorage.setItem(p, h(q, +n))
        }, getItem: function (n) {
            var p = +new Date(), o = a(localStorage.getItem(n));
            if (o) {
                if (p > o.timestamp) {
                    localStorage.removeItem(n);
                    o = null
                } else {
                    o = o.value
                }
            }
            return o
        }, removeItem: function (n) {
            localStorage.removeItem(n)
        }
    };
    var g = {}, l = {
        on: function (o, p) {
            var n = g[o] || (g[o] = []);
            n.push(p)
        }, off: function (o, p) {
            var n = g[o];
            if (!!n) {
                if (!!p) {
                    M.forEach(n, function (r, q) {
                        if (r == p) {
                            n.splice(q, 1)
                        }
                    })
                } else {
                    n = []
                }
            }
            return this
        }
    };
    M.mix(e, l);
    M.mix(k, l);
    if (window.addEventListener) {
        window.addEventListener("storage", j, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onstorage", j)
        }
    }
    function j(s) {
        if (!s) {
            s = window.event
        }
        var n = M.mix({}, s), u = s.newValue && a(s.newValue), o = s.oldValue && a(s.oldValue), t = +new Date();
        n.newValue = u && u.value;
        if (!!o && t < o.timestamp) {
            n.oldValue = o.value
        } else {
            n.oldValue = null
        }
        var r = s.key, q = g[r], p = 0;
        if (!r || !q || 0 === q.length) {
            return
        }
        while (p < q.length) {
            q[p++].call(window, n)
        }
    }

    function i(n) {
        if (Object.prototype.toString.call(n) != "[object Date]") {
            var o = typeof n === "number" && n > 0 ? n : 86400;
            n = new Date();
            n.setTime(+n + o * 1000)
        }
        return n
    }

    function h(o, n) {
        var p = {value: o, timestamp: n};
        return JSON.stringify(p)
    }

    function a(n) {
        if (n) {
            try {
                n = JSON.parse(n);
                if (!("value" in n) || !("timestamp" in n)) {
                    n = {value: n, timestamp: +i()}
                }
            } catch (o) {
                n = {value: n, timestamp: +i()}
            }
        }
        return n
    }

    function c() {
        if (window.localStorage) {
            try {
                localStorage.setItem("__detectLocalStorage", 1);
                localStorage.removeItem("__detectLocalStorage");
                return true
            } catch (n) {
            }
        }
        return false
    }

    b.exports = M.mix(window.localStorage ? k : e.init(), {isAvailable: c})
});
(function (a) {
    a.jGrowl = function (b, c) {
        if (a("#jGrowl").size() == 0) {
            a('<div id="jGrowl"></div>').addClass((c && c.position) ? c.position : a.jGrowl.defaults.position).appendTo("body")
        }
        a("#jGrowl").jGrowl(b, c)
    };
    a.fn.jGrowl = function (b, d) {
        if (a.isFunction(this.each)) {
            var c = arguments;
            return this.each(function () {
                var e = this;
                if (a(this).data("jGrowl.instance") == undefined) {
                    a(this).data("jGrowl.instance", a.extend(new a.fn.jGrowl(), {
                        notifications: [],
                        element: null,
                        interval: null
                    }));
                    a(this).data("jGrowl.instance").startup(this)
                }
                if (a.isFunction(a(this).data("jGrowl.instance")[b])) {
                    a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"), a.makeArray(c).slice(1))
                } else {
                    a(this).data("jGrowl.instance").create(b, d)
                }
            })
        }
    };
    a.extend(a.fn.jGrowl.prototype, {
        defaults: {
            pool: 0,
            header: "",
            group: "",
            sticky: false,
            position: "top-right",
            glue: "after",
            theme: "default",
            themeState: "highlight",
            corners: "10px",
            check: 250,
            life: 3000,
            closeDuration: "normal",
            openDuration: "normal",
            easing: "swing",
            closer: true,
            closeTemplate: "&times;",
            closerTemplate: "<div>[ 关闭 ]</div>",
            log: function (c, b, d) {
            },
            beforeOpen: function (c, b, d) {
            },
            afterOpen: function (c, b, d) {
            },
            open: function (c, b, d) {
            },
            beforeClose: function (c, b, d) {
            },
            close: function (c, b, d) {
            },
            animateOpen: {opacity: "show"},
            animateClose: {opacity: "hide"}
        }, notifications: [], element: null, interval: null, create: function (b, c) {
            var c = a.extend({}, this.defaults, c);
            if (typeof c.speed !== "undefined") {
                c.openDuration = c.speed;
                c.closeDuration = c.speed
            }
            this.notifications.push({message: b, options: c});
            c.log.apply(this.element, [this.element, b, c])
        }, render: function (d) {
            var b = this;
            var c = d.message;
            var e = d.options;
            var d = a('<div class="jGrowl-notification ' + e.themeState + " ui-corner-all" + ((e.group != undefined && e.group != "") ? " " + e.group : "") + '"><div class="jGrowl-close">' + e.closeTemplate + '</div><div class="jGrowl-header">' + e.header + '</div><div class="jGrowl-message">' + c + "</div></div>").data("jGrowl", e).addClass(e.theme).children("div.jGrowl-close").bind("click.jGrowl", function () {
                a(this).parent().trigger("jGrowl.close")
            }).parent();
            a(d).bind("mouseover.jGrowl", function () {
                a("div.jGrowl-notification", b.element).data("jGrowl.pause", true)
            }).bind("mouseout.jGrowl", function () {
                a("div.jGrowl-notification", b.element).data("jGrowl.pause", false)
            }).bind("jGrowl.beforeOpen", function () {
                if (e.beforeOpen.apply(d, [d, c, e, b.element]) != false) {
                    a(this).trigger("jGrowl.open")
                }
            }).bind("jGrowl.open", function () {
                if (e.open.apply(d, [d, c, e, b.element]) != false) {
                    if (e.glue == "after") {
                        a("div.jGrowl-notification:last", b.element).after(d)
                    } else {
                        a("div.jGrowl-notification:first", b.element).before(d)
                    }
                    a(this).animate(e.animateOpen, e.openDuration, e.easing, function () {
                        if (a.browser.msie && (parseInt(a(this).css("opacity"), 10) === 1 || parseInt(a(this).css("opacity"), 10) === 0)) {
                            this.style.removeAttribute("filter")
                        }
                        a(this).data("jGrowl").created = new Date();
                        a(this).trigger("jGrowl.afterOpen")
                    })
                }
            }).bind("jGrowl.afterOpen", function () {
                e.afterOpen.apply(d, [d, c, e, b.element])
            }).bind("jGrowl.beforeClose", function () {
                if (e.beforeClose.apply(d, [d, c, e, b.element]) != false) {
                    a(this).trigger("jGrowl.close")
                }
            }).bind("jGrowl.close", function () {
                a(this).data("jGrowl.pause", true);
                a(this).animate(e.animateClose, e.closeDuration, e.easing, function () {
                    a(this).remove();
                    var f = e.close.apply(d, [d, c, e, b.element]);
                    if (a.isFunction(f)) {
                        f.apply(d, [d, c, e, b.element])
                    }
                })
            }).trigger("jGrowl.beforeOpen");
            if (e.corners != "" && a.fn.corner != undefined) {
                a(d).corner(e.corners)
            }
            if (a("div.jGrowl-notification:parent", b.element).size() > 1 && a("div.jGrowl-closer", b.element).size() == 0 && this.defaults.closer != false) {
                a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function () {
                    a(this).siblings().trigger("jGrowl.beforeClose");
                    if (a.isFunction(b.defaults.closer)) {
                        b.defaults.closer.apply(a(this).parent()[0], [a(this).parent()[0]])
                    }
                })
            }
        }, update: function () {
            a(this.element).find("div.jGrowl-notification:parent").each(function () {
                if (a(this).data("jGrowl") != undefined && a(this).data("jGrowl").created != undefined && (a(this).data("jGrowl").created.getTime() + parseInt(a(this).data("jGrowl").life)) < (new Date()).getTime() && a(this).data("jGrowl").sticky != true && (a(this).data("jGrowl.pause") == undefined || a(this).data("jGrowl.pause") != true)) {
                    a(this).trigger("jGrowl.beforeClose")
                }
            });
            if (this.notifications.length > 0 && (this.defaults.pool == 0 || a(this.element).find("div.jGrowl-notification:parent").size() < this.defaults.pool)) {
                this.render(this.notifications.shift())
            }
            if (a(this.element).find("div.jGrowl-notification:parent").size() < 2) {
                a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function () {
                    a(this).remove()
                })
            }
        }, startup: function (b) {
            this.element = a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');
            this.interval = setInterval(function () {
                a(b).data("jGrowl.instance").update()
            }, parseInt(this.defaults.check));
            if (a.browser.msie && parseInt(a.browser.version) < 7 && !window.XMLHttpRequest) {
                a(this.element).addClass("ie6")
            }
        }, shutdown: function () {
            a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();
            clearInterval(this.interval)
        }, close: function () {
            a(this.element).find("div.jGrowl-notification").each(function () {
                a(this).trigger("jGrowl.beforeClose")
            })
        }
    });
    a.jGrowl.defaults = a.fn.jGrowl.prototype.defaults
})(jQuery);
if (window.M && typeof window.M.define == "function") {
    window.M.define("jq-jgrowl", function () {
        return jQuery
    })
}
M.closure(function (e) {
    var q = e("Storage"), b = 1000, p = 10000, r = 40000, d = 120000;
    $(function () {
        if (window.Env && window.Env.UID > 0 || window.__mfw_uid > 0) {
            setTimeout(l, b)
        } else {
            setTimeout(j, p)
        }
        $("body").delegate(".jGrowl-closer", "click", function (t) {
            $.getJSON("/ajax/ajax_msg.php", {a: "closetip"});
            q.setItem("jgrowl_close_time", +new Date())
        });
        M.Event.on("update msg", function () {
            setTimeout(function () {
                s();
                q.setItem("update_msg", +new Date())
            }, 1)
        });
        q.on("update_msg", function (t) {
            s()
        });
        function s() {
            if (window.Env && window.Env.UID > 0 || window.__mfw_uid > 0) {
                n("msgdisplay")
            } else {
                n("nologinfeed")
            }
        }
    });
    function l() {
        setInterval(function () {
            M.windowFocused && n("msgdisplay")
        }, r)
    }

    function j() {
        var t, s = 1;
        M.windowFocused && n("nologinfeed");
        t = setInterval(function () {
            M.windowFocused && n("nologinfeed");
            s++;
            if (s == 3) {
                clearInterval(t)
            }
        }, d)
    }

    function n(s) {
        $.get("/ajax/ajax_msg.php?a=" + s, function (t) {
            if (t) {
                m(t)
            }
        }, "json")
    }

    function m(s) {
        g();
        M.Event.fire("get new msg", s);
        if (s.msg) {
            k()
        }
        if (s.tips && !i()) {
            a(s)
        }
    }

    e("jq-jgrowl");
    function a(s) {
        var t = s.tips.split(s.split_char);
        M.forEach(t, function (v, u) {
            if (v) {
                setTimeout(function () {
                    $.jGrowl(v, {header: "新鲜事：", closer: false, life: 20000})
                }, 2000 * u + 10)
            }
        })
    }

    function i() {
        var t = q.getItem("jgrowl_close_time"), s = +new Date();
        if (t && s - t < 24 * 60 * 60 * 1000) {
            return true
        }
        return false
    }

    var c, f = 0, h = 1000, o = document.title;

    function k() {
        g();
        c = setInterval(function () {
            f++;
            document.title = f % 2 === 0 ? "【　　　】 - " + o : "【新消息】 - " + o
        }, h)
    }

    function g() {
        clearInterval(c);
        document.title = o
    }
});
M.define("FrequencyVerifyControl", function (c, b, d) {
    function a(e) {
        this.container = e.container;
        this.app = e.app;
        this.successHandler = $.noop;
        M.mix(this, e);
        this.init()
    }

    a.prototype = {
        init: function () {
            this.initData();
            this.refreshImg();
            this.verifyCon.delegate("img,._j_change_img", "click", $.proxy(function (e) {
                this.refreshImg()
            }, this));
            this.verifyCon.delegate("._j_fre_confirm", "click", $.proxy(function (h) {
                var g = this.verifyText.val();
                var f = g.length;
                if (f == 0) {
                    this.showErro("您还没有输入验证码!");
                    return false
                } else {
                    if (f !== 6) {
                        this.showErro("请输入正确的验证码!");
                        return false
                    }
                }
                var e = $(h.currentTarget);
                if (e.hasClass("waiting")) {
                    return false
                }
                e.addClass("waiting");
                $.get("/note/ajax_any.php", {sAction: "verifyCode", sCode: g, iApp: this.app}, $.proxy(function (i) {
                    if (!i.error) {
                        if (i.payload && i.payload.ret == 1) {
                            this.successHandler(this.target);
                            this.verifyCon.hide();
                            this.hideErro()
                        } else {
                            this.verifyText.val("");
                            this.verifyText.focus();
                            this.refreshImg();
                            this.showErro("输入的验证码不正确!")
                        }
                    } else {
                        if (i.error.errno == 10100) {
                            this.showErro("错误次数过多，请稍候尝试")
                        }
                    }
                    e.removeClass("waiting")
                }, this), "json")
            }, this));
            this.verifyCon.delegate("._j_fre_text", "keyup", $.proxy(function (e) {
                if (e.keyCode == 13) {
                    this.verifyCon.find("._j_fre_confirm").trigger("click")
                }
            }, this))
        }, showErro: function (e) {
            this.errorCon.html(e);
            this.errorCon.show()
        }, hideErro: function () {
            this.errorCon.hide()
        }, initData: function () {
            this.verifyCon = this.container;
            this.verifyPo = this.verifyCon.find(".protectedYZM");
            this.verifyImg = this.verifyCon.find("img");
            this.verifyText = this.verifyCon.find("._j_fre_text");
            this.errorCon = this.verifyPo.find(".n-error")
        }, refreshImg: function () {
            var e = "/note/ajax_any.php?sAction=getCode&iApp=" + this.app + "&s=" + new Date().getTime();
            this.verifyImg.attr("src", e)
        }
    };
    d.exports = a
});
M.define("FrequencySystemVerify", function (f, e, g) {
    var b = f("dialog/Dialog"), h = f("dialog/Layer"), d = f("FrequencyVerifyControl");
    var a = '<div class="popYzm" style="z-index:inherit;position: relative;width:350px;height: 250px"><div class="protectedYZM" style="border: none;box-shadow: none;padding:25px 15px;"><p>亲爱的蜂蜂，你操作的速度有点像机器人<br>来证明下自己吧~</p><div class="YZMInput"><input class="_j_fre_text" type="text" placeHolder="验证码"></div><div class="YZMInput"><img src="http://images.mafengwo.net/images/home_new2015/verify.gif" width="150px" height="40px"><label><a href="javascript:void(0);" class="_j_change_img">看不清，换一张</a></label></div><div class="YZMSubmit"><a href="javascript:void(0);" class="_j_fre_confirm" title="确定">确定</a><span class="n-error">错误次数过多，请稍候尝试</span></div></div></div>';

    function c(i) {
        this.app = i.app;
        this.init()
    }

    c.prototype = {
        init: function () {
            var i = new b({content: a});
            if (h.getActive()) {
                i.getLayer().setZIndex(h.getActive().getZIndex() + 1)
            }
            i.show();
            var j = i.getPanel().find(".popYzm");
            new d({
                container: j, app: this.app, successHandler: $.proxy(function () {
                    M.Event.fire("frequency:system:verify:success");
                    i.close()
                }, this)
            })
        }
    };
    g.exports = c
});
M.closure(function (d) {
    var b = d("dialog/Dialog"), c = d("FrequencySystemVerify");
    window.show_login = a;
    $.ajaxSetup({
        dataFilter: function (h, g) {
            try {
                var j = $.parseJSON(h);
                if (j && j.unsafe == 1) {
                    window.location.href = "http://www.mafengwo.cn";
                    return "{}"
                }
                if (j && j.error && j.error.msg == "login:required") {
                    M.Event.fire("login:required");
                    return "{}"
                }
                if (j && j.resource && j.resource.onload && j.resource.onload.length) {
                    if (j.resource.onload[0] == 'K.fire("login:required");') {
                        M.Event.fire("login:required");
                        return "{}"
                    }
                }
                if (j && j.error) {
                    var f = 0;
                    var k = 0;
                    if (typeof(j.error.errno) !== "undefined") {
                        f = j.error.errno;
                        k = j.error.error
                    } else {
                        if (typeof(j.error.code) !== "undefined") {
                            f = j.error.code;
                            k = j.error.msg
                        }
                    }
                    if (f === 10000) {
                        M.Event.fire("frequency:verify", k);
                        return "{}"
                    }
                }
            } catch (i) {
            }
            return h
        }
    });
    var e = null;

    function a() {
        if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
            document.location.href = (window.Env && window.Env.P_HTTP) || "https://passport.mafengwo.cn";
            return
        }
        if (!e) {
            e = new b({
                PANEL_CLASS: "login_pop",
                content: '<iframe frameborder="no" border="0" scrolling="no" width="580" height="292" allowtransparency="true"></iframe>',
                background: "#aaa",
                bgOpacity: 0.6,
                reposition: true,
                impl: "logindialog"
            })
        }
        e.show();
        if (!e.getPanel().find("iframe").attr("src")) {
            M.Event(e).once("aftershow", function () {
                var f = window.Env.P_HTTP || "https://passport.mafengwo.cn";
                e.getPanel().find("iframe").attr("src", f + "/login-popup.html")
            })
        }
    }

    M.Event.on("login:required", a);
    M.Event.on("frequency:verify", function (f) {
        new c({app: f})
    });
    if (M.Event.isFired("login:required")) {
        a()
    }
});
M.define("ScrollObserver", function (e, g, c) {
    var h = 0, f = {}, a = false, b, d = true;
    g.addObserver = function (k) {
        var j = "ScrollObserver_" + h;
        h++;
        f[j] = k;
        d = false;
        return j
    };
    g.removeObserver = function (j) {
        delete f[j];
        if (M.isEmpty(f)) {
            d = true
        }
    };
    function i() {
        for (var j in f) {
            if (f.hasOwnProperty(j)) {
                f[j]()
            }
        }
    }

    $(window).scroll(function () {
        if (d) {
            return
        }
        if (!a) {
            b = setInterval(function () {
                if (a) {
                    a = false;
                    clearTimeout(b);
                    i()
                }
            }, 50)
        }
        a = true
    });
    return g
});
M.define("QRCode", function (b, a, c) {
    c.exports = {
        gen: function (e, d) {
            var d = {
                text: e,
                size: d.size || 200,
                eclevel: d.evlevel || "H",
                logo: d.logo || "",
                __stk__: window.Env.CSTK
            };
            return "http://" + window.Env.WWW_HOST + "/qrcode.php?" + $.param(d)
        }
    }
});
M.closure(function (b) {
    var l = b("ScrollObserver"), m = b("Storage"), d = window.Env || {}, f = $("#_j_mfwtoolbar"), h = f.height(), a = $(window).height(), k = $(document).height(), g = $("#footer"), e = g.outerHeight();
    $("body").css("position", "relative");
    $(window).resize(function () {
        a = $(window).height();
        k = $(document).height()
    });
    setInterval(function () {
        var n = $(document).height();
        if (n != k) {
            k = n;
            $(window).trigger("scroll")
        }
    }, 2000);
    if (!d.hideToolbar) {
        if (!d.showToolbarDownArrow) {
            f.children(".toolbar-item-down").remove()
        } else {
            f.children(".toolbar-item-down").show()
        }
        f.show();
        c();
        l.addObserver(c);
        f.on("click", "._j_gotop", i);
        f.on("click", "._j_gobottom", j);
        f.children(".toolbar-item-code").mouseenter(function () {
            $(this).addClass("hover")
        });
        f.children(".toolbar-item-code").mouseleave(function () {
            $(this).removeClass("hover")
        })
    }
    function c() {
        var n = $(window).scrollTop();
        if (n > 500) {
            f.children(".toolbar-item-top").show()
        } else {
            f.children(".toolbar-item-top").hide()
        }
        if (g.length) {
            if (n + a > g.offset().top) {
                f.css({position: "absolute", bottom: e + 20})
            } else {
                f.css({position: "", bottom: ""})
            }
        }
    }

    function i() {
        $("html, body").animate({scrollTop: 0}, 500, function () {
            M.Event.fire("scroll to top")
        })
    }

    function j() {
        $("html, body").animate({scrollTop: k - a}, 500, function () {
            M.Event.fire("scroll to bottom")
        })
    }
});
(function () {
    var a = document.createElement("script"), b = window.Env && window.Env.CNZZID || 30065558;
    a.type = "text/javascript";
    a.async = true;
    a.charset = "utf-8";
    a.src = document.location.protocol + "//w.cnzz.com/c.php?id=" + b + "&async=1";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(a, c)
})();
M.closure(function (a) {
    M.log("只要你有梦想，就加入我们\n你即将见证互联网最新趋势的快速成长\n蚂蜂窝的一切资源都会成为你成长路上的最大助力\n你可以和蚂蜂窝一起书写互联网的风云奇迹\n在这里有一群和你一样，疯狂地热爱互联网和旅行的人们\n蚂蜂窝能为你实现梦想提供最广阔的平台");
    M.log("请将简历发送至 %csuperhr@mafengwo.com%c（ 邮件标题请以“_console”结尾）", "color:#4ae;", "color:inherit;");
    M.log("职位介绍：http://www.mafengwo.cn/s/hr.html")
});
M.closure(function (a) {
    $.get("/ajax/ajax_page_onload.php", {href: document.location.href, _t: +new Date()}, function (b) {
        if (b.payload && b.payload.apps) {
            var c = b.payload.apps;
            if (!M.isEmpty(c)) {
                var d = {css_list: c.css || []};
                M.loadCssJsListSeq(d, function () {
                    if (c.html) {
                        $("body").append(c.html)
                    }
                    if (c.js && c.js.length) {
                        M.loadResource(c.js)
                    }
                })
            }
        }
    }, "json")
});