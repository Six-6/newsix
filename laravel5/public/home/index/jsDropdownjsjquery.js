M.define("/js/Dropdown", function (c, b, d) {
    function a(e) {
        this.$nav = typeof e.nav === "string" ? $(e.nav) : e.nav;
        this.$panel = typeof e.panel === "string" ? $(e.panel) : e.panel;
        this.showCallback = e.showCallback;
        this.hideCallback = e.hideCallback;
        this.delay = e.delay || 0;
        this.event = e.event || "mouseenterleave";
        this._isShow = false;
        this.init()
    }

    a.prototype = {
        init: function () {
            if (this.event === "mouseenterleave") {
                this.$nav.on("mouseenter.dropdown", M.bind(function (e) {
                    this.show()
                }, this)).on("mouseleave.dropdown", M.bind(function (e) {
                    if ($(e.relatedTarget).closest(this.$panel).length === 0) {
                        this.hide(true)
                    }
                }, this));
                this.$panel.on("mouseenter.dropdown", M.bind(function (e) {
                    this.show()
                }, this)).on("mouseleave.dropdown", M.bind(function (e) {
                    if ($(e.relatedTarget).closest(this.$nav).length === 0) {
                        this.hide(false)
                    }
                }, this))
            }
            if (this.event === "click") {
                this.$nav.on("click.dropdown", M.bind(function (e) {
                    this.show()
                }, this));
                $(document).on("click.dropdown", M.bind(function (e) {
                    if ($(e.target).closest(this.$nav).length === 0 && $(e.target).closest(this.$panel).length === 0) {
                        this.hide(false)
                    }
                }, this))
            }
        }, show: function () {
            this.$panel.show();
            this._isShow = true;
            if (M.isFunction(this.showCallback)) {
                this.showCallback.call(this, this.$nav, this.$panel)
            }
        }, hide: function (e) {
            this._isShow = false;
            if (e && this.delay > 0) {
                setTimeout(M.bind(function () {
                    if (!this._isShow) {
                        this.$panel.hide();
                        if (M.isFunction(this.hideCallback)) {
                            this.hideCallback.call(this, this.$nav, this.$panel)
                        }
                    }
                }, this), this.delay)
            } else {
                this.$panel.hide();
                if (M.isFunction(this.hideCallback)) {
                    this.hideCallback.call(this, this.$nav, this.$panel)
                }
            }
        }, destory: function () {
            if (this.event === "mouseenterleave") {
                this.$nav.off("mouseenter.dropdown").off("mouseleave.dropdown");
                this.$panel.off("mouseenter.dropdown").off("mouseleave.dropdown")
            }
            if (this.event === "click") {
                this.$nav.off("click.dropdown")
            }
            this.$panel.hide()
        }
    };
    d.exports = a
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
M.define("MesSearchEvent", function (b, a, c) {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function (f, j) {
        var l = e, h = [], g;
        j = j || l.length;
        if (f) {
            for (g = 0; g < f; g++) {
                h[g] = l[0 | Math.random() * j]
            }
        } else {
            var k;
            h[8] = h[13] = h[18] = h[23] = "-";
            h[14] = "4";
            for (g = 0; g < 36; g++) {
                if (!h[g]) {
                    k = 0 | Math.random() * 16;
                    h[g] = l[(g == 19) ? (k & 3) | 8 : k]
                }
            }
        }
        return h.join("")
    };
    Math.uuidFast = function () {
        var k = e, h = new Array(36), g = 0, j;
        for (var f = 0; f < 36; f++) {
            if (f == 8 || f == 13 || f == 18 || f == 23) {
                h[f] = "-"
            } else {
                if (f == 14) {
                    h[f] = "4"
                } else {
                    if (g <= 2) {
                        g = 33554432 + (Math.random() * 16777216) | 0
                    }
                    j = g & 15;
                    g = g >> 4;
                    h[f] = k[(f == 19) ? (j & 3) | 8 : j]
                }
            }
        }
        return h.join("")
    };
    Math.uuidCompact = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (h) {
            var g = Math.random() * 16 | 0, f = h == "x" ? g : (g & 3 | 8);
            return f.toString(16)
        })
    };
    var d = {
        uuid: function () {
            return Math.uuid()
        }, search: function (f) {
            var g = Math.uuid();
            f.id = g;
            !!mfwPageEvent && mfwPageEvent("se", "v2_search", f);
            return g
        }, searchCache: function (f) {
            var g = Math.uuid();
            f.id = g;
            !!mfwPageEvent && mfwPageEvent("se", "v2_search_cache", f);
            return g
        }, resultClick: function (f) {
            !!mfwPageEvent && mfwPageEvent("se", "v2_result_click", f);
            return f.id
        }
    };
    c.exports = d
});
M.define("/js/SiteSearch", function (e) {
    var d = "1.0.0", h = e("Suggestion"), f = e("MesSearchEvent"), g = M.cssSupport("transition"), b = M.cssSupport("transform"), c = window.Env || {};
    var a = function (C) {
        var E = $("#" + C.input + ""), T = !!C.submit ? $("#" + C.submit + "") : null, t = C.additionalClass ? C.additionalClass : "", K = !!C.isRelevant, s = C.maxCount || 0, z = C.hideOnScroll || false, n = false, J = false, i = "", y = "", l = "", p = "";
        if (C.input === "_j_index_search_input_all") {
            var H = [{name: "花钱进监狱酒店蹲一晚", url: "/weixin/article-537.html"}, {
                name: "去伏特加国开米格战斗机",
                url: "/localdeals/mdd_topic_380/"
            }, {name: "和NASA宇航员共进午餐", url: "/localdeals/mdd_topic_383/"}, {
                name: "到清迈学象语和它聊天",
                url: "/localdeals/mdd_topic_386/"
            }, {name: "去伏特加国开坦克放炮", url: "/localdeals/mdd_topic_380/"}];
            if (E.val() === "") {
                var S = Math.floor(Math.random() * 5), I = H[S];
                E.val(I.name).data("url", I.url)
            }
            E.on("focus", function (V) {
                if (E.data("url")) {
                    E.val("").data("url", "")
                }
            })
        }
        if (c.is_async_site_search) {
            n = true
        }
        var P = new h({
            url: (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/group/ss.php",
            input: E,
            listItemHoverClass: "active",
            listFirstItemHover: false,
            dataType: "jsonp",
            createListContainer: function () {
                var V = $('<div class="m-search-suggest ' + t + ' hide"><ul class="mss-list"></ul></div>').appendTo("body");
                V.on("mouseenter", ".mss-place .mss-title, .mss-place .mss-nav a", function (X) {
                    var W = $(X.currentTarget), Y = W.closest(".mss-place");
                    Y.find(".mss-title").removeClass("active").removeClass("frozen").end().find(".mss-nav a").removeClass("active").end();
                    W.addClass("active")
                }).on("mouseleave", ".mss-place .mss-title, .mss-place .mss-nav a", function (X) {
                    var W = $(X.currentTarget);
                    W.removeClass("active")
                });
                return V
            },
            handleSuggest: function (au) {
                i = au.keyword;
                J = !!au.is_hit;
                l = "http://" + au.www_host;
                var an = $("<ul>");
                var Z = au.first_poi;
                if (!!Z) {
                    var aj = Z, ah = $('<li class="mss-item _j_listitem" data-type="poi">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                    ah.attr("data-url", aj.url);
                    am.append('<span class="mss-fr">' + (!!aj.mddname ? aj.mddname : "") + aj.typename + "</span>");
                    am.append('<span class="mss-cn">' + aj.dis_name + "</span>")
                }
                var ad = au.article_info;
                if (ad && ad.result) {
                    for (var ao = 0; ao < ad.result.length; ao++) {
                        var ac = ad.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="article_promoted">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", ac.link);
                        am.html(ac.name_display)
                    }
                }
                var ai = au.mdd_info;
                if (ai && ai.result) {
                    for (var ao = 0; ao < ai.result.length; ao++) {
                        var Y = ai.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="mdd">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", Y.url);
                        if (!!Y.parent) {
                            am.append('<span class="mss-fr">' + Y.parent + "</span>")
                        }
                        am.append('<span class="mss-cn">' + Y.dis_name + "</span>");
                        am.append('<span class="mss-gl"> ' + Y.infoname + "</span>")
                    }
                }
                var al = au.hotel_info;
                if (al && al.result && !K) {
                    for (var ao = 0; ao < al.result.length; ao++) {
                        var ar = al.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="hotel_promoted">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", ar.url);
                        am.append('<span class="mss-fr">' + ar.typename + "</span>");
                        am.append('<span class="mss-cn">' + ar.title + "</span>");
                        am.append('<span class="mss-gl"> ' + ar.infoname + "</span>")
                    }
                }
                var X = au.sales_info;
                if (X && X.result && !K) {
                    for (var ao = 0; ao < X.result.length; ao++) {
                        var V = X.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="sales_promoted">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", V.url);
                        am.append('<span class="mss-fr">' + V.typename + "</span>");
                        am.append('<span class="mss-cn">' + V.title + "</span>");
                        am.append('<span class="mss-gl"> ' + V.infoname + "</span>")
                    }
                }
                var ae = au.route_info;
                if (ae && ae.result && !K) {
                    for (var ao = 0; ao < ae.result.length; ao++) {
                        var aq = ae.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="route_promoted">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", aq.url);
                        am.append('<span class="mss-fr">' + aq.typename + "</span>");
                        am.append('<span class="mss-cn">' + aq.title + "</span>");
                        am.append('<span class="mss-gl"> ' + aq.infoname + "</span>")
                    }
                }
                var ap = au.qa_info;
                if (ap && ap.result && !K) {
                    for (var ao = 0; ao < ap.result.length; ao++) {
                        var af = ap.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="wenda">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", af.url);
                        am.append('<span class="mss-fr">' + af.typename + "</span>");
                        am.append('<span class="mss-cn">' + af.title + "</span>")
                    }
                }
                var ab = au.poi_info;
                if (ab && ab.result && !K) {
                    for (var ao = 0; ao < ab.result.length; ao++) {
                        var aj = ab.result[ao], W = "hotel" === aj.stype ? "hotel" : "poi", ah = $('<li class="mss-item _j_listitem" data-type="' + W + '">').appendTo(an), am = $('<div class="mss-title">').appendTo(ah);
                        ah.attr("data-url", aj.url);
                        am.append('<span class="mss-fr">' + (!!aj.mddname ? aj.mddname : "") + aj.typename + "</span>");
                        am.append('<span class="mss-cn" style="color:#999;">' + aj.dis_name + "</span>")
                    }
                }
                var ag = au.sekey_info;
                if (ag && ag.result && K) {
                    for (var ao = 0; ao < ag.result.length; ao++) {
                        if (ao > 4) {
                            break
                        }
                        var at = ag.result[ao], ah = $('<li class="mss-item _j_listitem" data-type="sekey">').appendTo(an);
                        ah.attr("data-url", at.url);
                        ah.append('<div class="mss-title">' + at.name + "</div>")
                    }
                }
                var aa = au.ginfo_num;
                if (!!aa) {
                    var ah = $('<li class="mss-item _j_listitem" data-type="info">').appendTo(an);
                    ah.append('<div class="mss-title">搜“<span class="mss-key">' + i + '</span>”相关游记<span class="mss-num">' + aa + "篇</span></div>")
                }
                var ak = au.user_num;
                if (!!aa) {
                    var ah = $('<li class="mss-item _j_listitem" data-type="user">').appendTo(an);
                    ah.append('<div class="mss-title">搜“<span class="mss-key">' + i + "</span>”相关用户</div>")
                }
                if (s > 0) {
                    an.find("._j_listitem").each(function (av, aw) {
                        if (av > s) {
                            $(aw).remove()
                        }
                    })
                }
                return an.html()
            },
            updateList: function (V) {
                this.listContainer.find(".mss-list").html(V);
                if (K) {
                    this.listContainer.find(".mss-list").addClass("shrink-list")
                }
                if (J) {
                    P.input.data("droplist").moveFocus(1)
                }
            }
        });
        if (n) {
            var A = e("InputListener"), w = e("SuggestionXHR"), D = new w({
                URL: (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/group/s.php",
                dataType: "json"
            }), v = $("#_j_mfw_search_main"), U = E.closest(".search-wrapper"), L = $('<div class="search-keyword-tip"></div>').appendTo(U), B = C.input === "_j_index_search_input_all", G = false, u, q, N, k, r;
            A.listen(E, function (W) {
                var V = $(W.target), X = $.trim(V.val());
                if (!G && X) {
                    G = true
                }
                L.hide()
            });
            M.Event(P).on("before suggestion xhr", function () {
                var V = P.suggestionParams[P.keyParamName];
                if (V && V !== y) {
                    D.getSuggestion({q: V, gall: 1}, $.proxy(function (X) {
                        var ab = $.trim(E.val());
                        if (!ab) {
                            return false
                        }
                        if (!X || !X.keyword || (!X.result && !X.unmatch)) {
                            return false
                        }
                        if (X.unmatch === 1) {
                            L.hide()
                        } else {
                            y = V;
                            if (U[0]) {
                                var Y = X.keyword.length, W = X.keyword.replace(/[A-Za-z0-9\s]/g, "").length, aa = Y - W;
                                setTimeout(function () {
                                    L.html(X.keyword).css("left", 32 + W * 14 + aa * 7).show()
                                }, 1)
                            }
                            v.html($(X.result).css("minHeight", 0).html());
                            if (g && b) {
                                v.find("> .wid").addClass("anim-climb");
                                setTimeout(function () {
                                    v.find("> .wid").removeClass("anim-climb")
                                }, 1)
                            }
                            var Z = c.search_type || "all";
                            c.search_seid = Q(V, Z);
                            c.search_keyword = V;
                            c.is_search_cache = true;
                            c.is_search_updated = true
                        }
                    }, P))
                }
            })
        }
        M.Event(P).on("before suggestion xhr", function () {
            R(E, P.listContainer)
        });
        M.Event(P).on("before show list", function () {
            P.listContainer.find(".mss-list").show()
        });
        M.Event(P).on("itemfocused", function (W) {
            var V = W.prevItem, X = W.focusItem, Y = P.listContainer;
            if (1 < Y.find(".mss-place").length) {
                if (X.hasClass("mss-place")) {
                    Y.find(".mss-place").removeClass("frozen")
                }
                if (!X.hasClass("mss-place") && !!V && V.hasClass("mss-place")) {
                    Y.find(".mss-place").removeClass("frozen");
                    V.addClass("frozen")
                }
            }
            if (X.hasClass("mss-place")) {
                X.find(".mss-title").addClass("frozen")
            }
        });
        M.Event(P).on("itemselected", function (X) {
            var Z = X.item;
            if (Z.length) {
                var Y = Z.data("type"), W = Z.data("url"), ab = E.attr("id") === "_j_head_search_input" ? "header" : "default";
                if (Y === "flight_hotel" || Y === "flight" || Y === "local") {
                    Y = "sales"
                }
                p = m(i, "all", ab, "suggest");
                if ("info" === Y || "user" === Y) {
                    var aa = m(i, Y, ab, "suggest");
                    location.href = l + "/group/s.php?q=" + encodeURIComponent(i) + "&t=" + Y + "&seid=" + aa
                } else {
                    var W = Z.data("url"), V = P.listContainer.find(".mss-item").index(Z.closest(".mss-item")) + 1;
                    O(W, V, Y);
                    location.href = Z.data("url")
                }
            } else {
                if (i !== "") {
                    location.href = l + "/group/s.php?q=" + encodeURIComponent(i)
                }
            }
        });
        var x = E.closest(".head-search-wrapper");
        if (x[0]) {
            E.on("focus", function (V) {
                setTimeout(function () {
                    x.addClass("head-search-focus")
                }, 1)
            }).on("blur", function (V) {
                setTimeout(function () {
                    if (M.windowFocused) {
                        x.removeClass("head-search-focus")
                    }
                }, 1)
            })
        }
        if (T && T[0]) {
            T.on("click", function (X) {
                var W = $.trim(E.val());
                if (E.data("url")) {
                    location.href = (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + E.data("url");
                    return true
                }
                if (W !== "") {
                    if (P.listContainer) {
                        P.listContainer.hide()
                    }
                    var Z = E.attr("id") === "_j_head_search_input" ? "header" : "default", aa = c.search_type || "all", Y = m(W, aa, Z, "form"), V = l + "/group/s.php?q=" + encodeURIComponent(W);
                    if (c.search_type && location.pathname === "/group/s.php") {
                        V += "&t=" + c.search_type
                    }
                    V += "&seid=" + Y;
                    location.href = V
                }
            })
        }
        if (E && E[0]) {
            E.on("keydown", function (X) {
                if (X.keyCode == 13) {
                    var aa = P.input.data("droplist");
                    if (aa && aa.getFocusItem().length) {
                        return true
                    }
                    var W = $.trim(E.val());
                    if (W !== "") {
                        if (P.listContainer) {
                            P.listContainer.hide()
                        }
                        var Z = E.attr("id") === "_j_head_search_input" ? "header" : "default", ab = c.search_type || "all", Y = m(W, ab, Z, "form"), V = l + "/group/s.php?q=" + encodeURIComponent(W);
                        if (c.search_type && location.pathname === "/group/s.php") {
                            V += "&t=" + c.search_type
                        }
                        V += "&seid=" + Y;
                        location.href = V
                    }
                }
            })
        }
        $(window).resize(function () {
            if (P.listContainer && P.listContainer.length && P.listContainer.is(":visible")) {
                R(E, P.listContainer)
            }
        });
        $(window).on("scroll", function (V) {
            if (z) {
                P.hideDropList()
            }
        });
        function R(V, X) {
            var W = V.offset();
            X.css({left: W.left + (C.input === "_j_index_search_input_all" ? 0 : 1), top: W.top + E.outerHeight() - 2})
        }

        function m(V, Z, Y, X) {
            var W = {
                keyword: V,
                content_category: Z,
                searchbox_category: "main_search",
                searchbox_position: Y,
                search_type: X,
                version: d
            };
            return f.search(W)
        }

        function Q(V, X) {
            var W = {keyword: V, content_category: X, version: d};
            return f.searchCache(W)
        }

        function O(Y, W, X) {
            var V = {
                id: p,
                keyword: i,
                click_url: Y,
                index: W,
                content_category: X,
                search_type: "suggest",
                version: d
            };
            return f.resultClick(V)
        }

        function F(W, aa) {
            var X = [], ac = W.split("|");
            aa = j(aa);
            for (var Z = 0; Z < ac.length; Z++) {
                var Y = $.trim(ac[Z]);
                if (Y == "search://") {
                    var V = X.length;
                    X[V] = ac[Z++];
                    X[V + 1] = ac[Z++];
                    X[V + 2] = ac[Z++];
                    X[V + 3] = ac[Z++];
                    X[V + 4] = ac[Z++];
                    X[V + 5] = ac[Z];
                    continue
                }
                if (Y) {
                    try {
                        Y = Y.replace(new RegExp(aa, "ig"), function (ad) {
                            return '<span class="highlight">' + ad + "</span>"
                        })
                    } catch (ab) {
                        Y = Y.replace(aa, function (ad) {
                            return '<span class="highlight">' + ad + "</span>"
                        })
                    }
                    X[X.length] = Y
                }
            }
            return X
        }

        var o = $("<div/>");

        function j(V) {
            return o.text(V).html()
        }
    };
    return a
});
(function (a) {
    a.fn.UpNum = function (d, e, b, c) {
        return this.each(function () {
            var g = a(this).offset();
            var j = Math.round(g.left) + "px";
            var h = Math.round(g.top) + "px";
            if (d.toString().indexOf("-") == 0) {
                var k = Math.round(g.top) + 30 + "px"
            } else {
                var k = Math.round(g.top) - 30 + "px"
            }
            var f = "20px";
            if (b) {
                f = b
            }
            c = c || "120";
            var i = d || a(this).attr("money");
            a("<div/>").appendTo(a("body")).addClass("numeric").css({
                position: "absolute",
                top: h,
                left: j,
                color: (d.toString().indexOf("-") == 0) ? "#333" : "red",
                fontFamily: "Georgia",
                fontSize: f,
                zIndex: c
            }).html(i).animate({top: k}, {
                duration: 1000, complete: function () {
                    a(this).remove();
                    if (e) {
                        e()
                    }
                }
            })
        })
    };
    if (window.M && typeof M.define == "function") {
        M.define("jq-upnum", function () {
            return jQuery
        })
    }
})(jQuery);
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
M.define("TopTip", function (b, a, c) {
    c.exports = {
        show: function (d) {
            var d = $('<div id="over_container"><div id="over_message">' + d + "</div></div>").appendTo("body");
            setTimeout(function () {
                d.hide("fast", function () {
                    d.remove()
                })
            }, 3000)
        }
    }
});
M.closure(function (k) {
    var E = $("#header");
    if (!E.length) {
        return false
    }
    var y = k("/js/Dropdown");
    var w = k("/js/SiteSearch");
    new w({input: "_j_head_search_input", submit: "_j_head_search_link", isRelevant: true});
    var b = $("#head-btn-daka"), x = $("#head-my-coin");
    k("jq-upnum");
    $(function () {
        $(".new_daka_tips").addClass("on")
    });
    $(".ndt_close").on("click", function () {
        $(this).parent().hide()
    });
    M.Event.on("afterDaka", B);
    function B(H) {
        if (H && H.dakaFlag) {
            b.closest(".head-daka").addClass("daka-complete")
        }
    }

    var d = j("dakaday");
    if (d != null) {
        $(".head-btn-daka").attr("data-day", d)
    }
    function j(H) {
        var I = new RegExp("(^|&)" + H + "=([^&]*)(&|$)");
        var J = window.location.search.substr(1).match(I);
        if (J != null) {
            return unescape(J[2])
        }
        return null
    }

    var G = new y({
        nav: "#_j_head_user", panel: "#_j_user_panel", showCallback: function (H, I) {
            H.find(".drop-trigger").addClass("drop-trigger-active")
        }, hideCallback: function (H, I) {
            H.find(".drop-trigger").removeClass("drop-trigger-active")
        }, delay: 500
    });
    var i = 0, c = $("#_j_head_msg"), e = $("#_j_msg_panel"), A = c.find(".head-msg-new"), g = $("#_j_msg_float_panel");
    var h = new y({
        nav: c.selector, panel: e.selector, showCallback: function (H, I) {
            H.find(".drop-trigger").addClass("drop-trigger-active")
        }, hideCallback: function (H, I) {
            H.find(".drop-trigger").removeClass("drop-trigger-active")
        }, delay: 200
    });
    M.Event.on("get new msg", function (H) {
        if (H.msg || i > 0) {
            e.find("ul").html(H.menu_index);
            C()
        }
    });
    e.on("click", "a", function (H) {
        M.Event.fire("update msg")
    });
    g.on("click", "ul a", function (H) {
        M.Event.fire("update msg")
    });
    g.on("click", ".close-newmsg", function (H) {
        v()
    });
    function v() {
        A.hide();
        g.hide();
        $.ajax({
            url: "http://" + Env.WWW_HOST + "/ajax/ajax_msg.php",
            dataType: "jsonp",
            data: {a: "ignore", from: "1"},
            success: function (H) {
                M.Event.fire("update msg")
            }
        })
    }

    window.close_msg_tips = v;
    function C() {
        var H = "";
        i = 0;
        e.find(".num").each(function (I, K) {
            var J = $(K);
            i += Number(J.html());
            H += "<li>" + J.closest("li").html() + "</li>"
        });
        if (i > 0) {
            A.html((i > 99 ? "99+" : i)).show();
            g.find("ul").html(H).end().show()
        } else {
            A.hide();
            g.hide()
        }
    }

    C();
    $("#_j_nav_sales").find("[data-sales-nav]").on("click", function () {
        var H = $(this).data("salesNav");
        mfwPageEvent("sales", "index_sales_nav", {name: H})
    });
    if (!window.showBarFlag) {
        $("._j_sales_nav_show").off("hover")
    } else {
        var f = 0, z = 0;
        $("._j_sales_nav_show").hover(function () {
            clearTimeout(f);
            z = setTimeout(function () {
                $("._j_sales_nav_show").addClass("head-nav-hover");
                $("._j_sales_top").fadeIn(300)
            }, 200)
        }, function () {
            clearTimeout(z);
            f = setTimeout(function () {
                $("._j_sales_nav_show").removeClass("head-nav-hover");
                $("._j_sales_top").fadeOut(300)
            }, 200)
        })
    }
    var u = 0, o = 0;
    $("._j_shequ_nav_show").hover(function () {
        clearTimeout(u);
        o = setTimeout(function () {
            $("._j_shequ_nav_show").addClass("head-nav-hover");
            $("._j_shequ_top").fadeIn(300)
        }, 200)
    }, function () {
        clearTimeout(o);
        u = setTimeout(function () {
            $("._j_shequ_nav_show").removeClass("head-nav-hover");
            $("._j_shequ_top").fadeOut(300)
        }, 200)
    });
    var D = $("#_j_community_panel"), q = D.find(".panel-image").length, r = Math.floor(Math.random() * q);
    if (r === q) {
        r--
    }
    D.find(".panel-image").eq(r).show();
    $("#_j_showlogin").click(function (H) {
        if (window.location.host === Env.WWW_HOST) {
            H.preventDefault()
        }
        M.Event.fire("login:required")
    });
    var n = window.location.hostname, s = window.location.pathname + window.location.search, a = $("#_j_head_nav");
    if (n.indexOf("www") === 0) {
        if (s === "" || s === "/") {
            a.children("li:eq(0)").addClass("head-nav-active")
        }
        var p = new RegExp("^/(mdd|photo/mdd|poi|photo/poi|travel-scenic-spot|jd|cy|gw|yl|yj|xc|baike)/|sFrom=mdd.*|sFrom=smdd.*", "i");
        if (p.test(s)) {
            a.children("li:eq(1)").addClass("head-nav-active")
        }
        var m = new RegExp("^/gonglve/.*", "i");
        if (m.test(s)) {
            a.children("li:eq(2)").addClass("head-nav-active")
        }
        var l = window.Env && window.Env.sales_title_tag;
        if (l) {
            if (l === "flight_hotel") {
                a.children("li:eq(3)").find("ul>li:eq(0)>a").addClass("on")
            } else {
                if (l === "visa") {
                    a.children("li:eq(3)").find("ul>li:eq(2)>a").addClass("on")
                } else {
                    if (l === "localdeals") {
                        a.children("li:eq(3)").find("ul>li:eq(1)>a").addClass("on")
                    } else {
                        if (l === "insurance") {
                            a.children("li:eq(3)").find("ul>li:eq(4)>a").addClass("on")
                        }
                    }
                }
            }
            a.find("li:eq(3)").addClass("head-nav-active")
        }
        if (/^\/insurance\//i.test(s)) {
            a.find("li:eq(3)").addClass("head-nav-active")
        }
        var F = new RegExp("^/hotel/(?!.*sFrom=mdd).*", "ig");
        if (F.test(s)) {
            a.children("li:eq(4)").addClass("head-nav-active");
            a.children("li:eq(4)").find(".head-act616").remove()
        }
        var t = new RegExp("^/(wenda|qa|mall|together|group|i|traveller|rudder|paimai|club|postal|school|photo_pk|focus)/(?!.*sFrom=mdd|s.php*).*", "i");
        if (t.test(s)) {
            a.children("li:eq(5)").addClass("head-nav-active")
        }
    }
});
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
(function (c, b, a, e) {
    var d = c(b);
    c.fn.lazyload = function (f) {
        var h = this;
        var i;
        var g = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: false,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function j() {
            var k = 0;
            h.each(function () {
                var l = c(this);
                if (g.skip_invisible && !l.is(":visible")) {
                    return
                }
                if (c.abovethetop(this, g) || c.leftofbegin(this, g)) {
                } else {
                    if (!c.belowthefold(this, g) && !c.rightoffold(this, g)) {
                        l.trigger("appear");
                        k = 0
                    } else {
                        if (++k > g.failure_limit) {
                            return false
                        }
                    }
                }
            })
        }

        if (f) {
            if (e !== f.failurelimit) {
                f.failure_limit = f.failurelimit;
                delete f.failurelimit
            }
            if (e !== f.effectspeed) {
                f.effect_speed = f.effectspeed;
                delete f.effectspeed
            }
            c.extend(g, f)
        }
        i = (g.container === e || g.container === b) ? d : c(g.container);
        if (0 === g.event.indexOf("scroll")) {
            i.bind(g.event, function () {
                return j()
            })
        }
        this.each(function () {
            var k = this;
            var l = c(k);
            k.loaded = false;
            if (l.attr("src") === e || l.attr("src") === false) {
                if (l.is("img")) {
                    l.attr("src", g.placeholder)
                }
            }
            l.one("appear", function () {
                if (!this.loaded) {
                    if (g.appear) {
                        var m = h.length;
                        g.appear.call(k, m, g)
                    }
                    c("<img />").bind("load", function () {
                        var o = l.attr("data-" + g.data_attribute);
                        l.hide();
                        if (l.is("img")) {
                            l.attr("src", o)
                        } else {
                            l.css("background-image", "url('" + o + "')")
                        }
                        l[g.effect](g.effect_speed);
                        k.loaded = true;
                        var n = c.grep(h, function (q) {
                            return !q.loaded
                        });
                        h = c(n);
                        if (g.load) {
                            var p = h.length;
                            g.load.call(k, p, g)
                        }
                    }).attr("src", l.attr("data-" + g.data_attribute))
                }
            });
            if (0 !== g.event.indexOf("scroll")) {
                l.bind(g.event, function () {
                    if (!k.loaded) {
                        l.trigger("appear")
                    }
                })
            }
        });
        d.bind("resize", function () {
            j()
        });
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            d.bind("pageshow", function (k) {
                if (k.originalEvent && k.originalEvent.persisted) {
                    h.each(function () {
                        c(this).trigger("appear")
                    })
                }
            })
        }
        c(a).ready(function () {
            j()
        });
        return this
    };
    c.belowthefold = function (g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = (b.innerHeight ? b.innerHeight : d.height()) + d.scrollTop()
        } else {
            f = c(h.container).offset().top + c(h.container).height()
        }
        return f <= c(g).offset().top - h.threshold
    };
    c.rightoffold = function (g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.width() + d.scrollLeft()
        } else {
            f = c(h.container).offset().left + c(h.container).width()
        }
        return f <= c(g).offset().left - h.threshold
    };
    c.abovethetop = function (g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.scrollTop()
        } else {
            f = c(h.container).offset().top
        }
        return f >= c(g).offset().top + h.threshold + c(g).height()
    };
    c.leftofbegin = function (g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.scrollLeft()
        } else {
            f = c(h.container).offset().left
        }
        return f >= c(g).offset().left + h.threshold + c(g).width()
    };
    c.inviewport = function (f, g) {
        return !c.rightoffold(f, g) && !c.leftofbegin(f, g) && !c.belowthefold(f, g) && !c.abovethetop(f, g)
    };
    c.extend(c.expr[":"], {
        "below-the-fold": function (f) {
            return c.belowthefold(f, {threshold: 0})
        }, "above-the-top": function (f) {
            return !c.belowthefold(f, {threshold: 0})
        }, "right-of-screen": function (f) {
            return c.rightoffold(f, {threshold: 0})
        }, "left-of-screen": function (f) {
            return !c.rightoffold(f, {threshold: 0})
        }, "in-viewport": function (f) {
            return c.inviewport(f, {threshold: 0})
        }, "above-the-fold": function (f) {
            return !c.belowthefold(f, {threshold: 0})
        }, "right-of-fold": function (f) {
            return c.rightoffold(f, {threshold: 0})
        }, "left-of-fold": function (f) {
            return !c.rightoffold(f, {threshold: 0})
        }
    })
})(jQuery, window, document);
if (window.M && typeof window.M.define == "function") {
    window.M.define("/js/jquery.lazyload", function () {
        return jQuery
    })
}
M.define("Pagination", function (b, a, c) {
    b("jq-tmpl");
    function d(e) {
        this.total = null;
        this.pageSize = null;
        this.currPage = null;
        this.pageDisplayNum = null;
        this.callback = null;
        this.tmpl = null;
        this.container = null;
        this.pageItemClass = "_j_pageitem";
        this.jumperBtnClass = "_j_jumperbtn";
        this.jumperInputClass = "_j_jumperinput";
        this.loadInitPage = false;
        this.evenOffset = -1;
        M.mix(this, e);
        this.total = +this.total;
        this.pageSize = this.pageSize > 0 ? (+this.pageSize) : 10;
        this.currPage = this.currPage > 0 ? (+this.currPage) : 1;
        this.pageDisplayNum = this.pageDisplayNum > 0 ? (+this.pageDisplayNum) : 5;
        this.container = $(this.container);
        if (this.total < 0 || !this.tmpl.length || !this.container.length) {
            M.error("pagination param invalid")
        }
        this.init()
    }

    M.mix(d.prototype, {
        init: function () {
            if (this.loadInitPage) {
                this.loadPage(this.currPage)
            } else {
                this.drawPage()
            }
            this.bindEvents()
        }, drawPage: function () {
            var g = {
                total: this.total,
                currPage: this.currPage,
                pageSize: this.pageSize,
                pageDisplayNum: this.pageDisplayNum
            };
            var e = Math.ceil(this.total / this.pageSize);
            g.pageTotal = e;
            if (e <= this.pageDisplayNum) {
                g.indexers = this.makeIndex(1, e)
            } else {
                if (this.currPage > e) {
                    this.currPage = e
                }
                var f = (this.pageDisplayNum - 1) / 2;
                if (f !== parseInt(f, 10)) {
                    f = this.evenOffset > 0 ? Math.floor(f) + this.evenOffset : Math.ceil(f) + this.evenOffset
                }
                var h = this.pageDisplayNum - 1 - f;
                if (this.currPage - f < 1) {
                    f = this.currPage - 1;
                    h = this.pageDisplayNum - 1 - f
                } else {
                    if (this.currPage + h > e) {
                        h = e - this.currPage;
                        f = this.pageDisplayNum - 1 - h
                    }
                }
                g.indexers = this.makeIndex(this.currPage - f, this.pageDisplayNum)
            }
            this.container.empty().append($(this.tmpl).tmpl(g))
        }, loadPage: function (e) {
            this.currPage = e;
            this.drawPage();
            this.container.trigger("pagechanged", [{index: e}]);
            if (typeof this.callback == "function") {
                this.callback(e)
            }
        }, bindEvents: function () {
            this.container.undelegate("click");
            this.container.undelegate("keydown");
            this.container.on("click", "." + this.pageItemClass, M.bind(function (f) {
                var g = $(f.currentTarget), e = g.data("page");
                this.loadPage(e);
                f.preventDefault()
            }, this));
            this.container.on("click", "." + this.jumperBtnClass, M.bind(function (f) {
                var g = $(f.currentTarget), e = +this.container.find("." + this.jumperInputClass).val();
                f.preventDefault();
                if (e <= 0 || e > Math.ceil(this.total / this.pageSize)) {
                    alert("请输入有效的页码");
                    return false
                }
                this.loadPage(e)
            }, this));
            this.container.on("keydown", "." + this.jumperInputClass, M.bind(function (e) {
                if (e.keyCode == 13) {
                    this.container.find("." + this.jumperBtnClass).trigger("click")
                }
            }, this))
        }, makeIndex: function (h, f) {
            var e = [];
            for (var g = h; g < h + f; g++) {
                e.push(g)
            }
            return e
        }
    });
    c.exports = d
});
M.define("/js/index/ControllerRecommend", function (b) {
    b("/js/jquery.lazyload");
    var f = b("Pagination"), g = null, d = null, a = 0, c = {objid: 0, type: 0}, e = null;
    return {
        events: {"click,._j_pageitem": "loadPage",}, init: function () {
            this.checkRetina();
            this.initDom();
            this.initLazyload();
            this.bindEvent()
        }, checkRetina: function () {
            if (window.devicePixelRatio && window.devicePixelRatio > 1) {
                a = 1
            } else {
                a = 0
            }
        }, syncHtml: function (h) {
            g.fadeOut(700, $.proxy(function () {
                g.html(h).show();
                this.initPageDom();
                $("html,body").animate({scrollTop: d.offset().top}, 1500)
            }, this))
        }, bindEvent: function () {
            M.Event.on("refresh:gs:list", $.proxy(function (h) {
                if (h.type !== c.type || h.objid !== c.objid) {
                    c = h;
                    this.syncList(h.type, h.objid, 1)
                }
            }, this));
            g.delegate("a", "click", function () {
                var l = $(this);
                var h = l.attr("href");
                try {
                    if (h.indexOf("/i/") >= 0) {
                        var k = h.split("/");
                        var j = parseInt(k[k.length - 1]);
                        if (j > 0) {
                            mfwPageEvent("ginfo", "index:recommend:list:click", ({iid: j}))
                        }
                    }
                } catch (i) {
                }
            })
        }, initDom: function () {
            d = $("#_j_tn_nav");
            this.initPageDom()
        }, initPageDom: function () {
            g = $("#_j_tn_content"), e = $("#_j_tn_pagination")
        }, loadPage: function (j) {
            var l = $(j.currentTarget);
            var i = e.data("type");
            var h = e.data("objid");
            var k = l.data("page");
            this.syncList(i, h, k)
        }, syncList: function (i, h, j) {
            this.checkRetina();
            this.setSyncParams({type: i, objid: h, page: j, ajax: 1, retina: a});
            this.sync()
        }, initLazyload: function () {
            if (a === 1) {
                $("img._j_lazy_load").lazyload({
                    data_attribute: "rt-src",
                    effect: "fadeIn",
                    effect_speed: 700
                }).removeClass("_j_lazy_load")
            } else {
                $("img._j_lazy_load").lazyload({
                    data_attribute: "src",
                    effect: "fadeIn",
                    effect_speed: 700
                }).removeClass("_j_lazy_load")
            }
        }
    }
});
M.define("Slider", function (b, a, c) {
    function d(e) {
        this.viewSize = 1;
        this.slideCnt = null;
        this.slideList = null;
        this.prev = $();
        this.next = $();
        this.indexer = $();
        this.itemSize = null;
        this.slideTime = 200;
        this.slideSize = 1;
        this.indexerOnClass = "on";
        this.disabledClass = "disabled";
        this.indexAttr = "index";
        this.shStyle = "slide";
        this.index = 1;
        M.mix(this, e);
        this.init()
    }

    d.prototype = {
        init: function () {
            this.hasMore = true;
            this.bindEvents();
            this.updateStatus();
            if (!this.itemSize) {
                this.itemSize = $(this.slideList).eq(0).outerWidth(true)
            }
        }, bindEvents: function () {
            this.prev.click($.proxy(this.toPrev, this));
            this.next.click($.proxy(this.toNext, this));
            this.indexer.click($.proxy(function (g) {
                g.preventDefault();
                var e = $(g.currentTarget), f = e.index() + 1;
                if (!e.hasClass(this.indexerOnClass) && !this.sliding && !isNaN(f)) {
                    this.toIndex(f)
                }
            }, this))
        }, toPrev: function (e) {
            if (!this.prev.hasClass(this.disabledClass) && !this.sliding) {
                this.slide(-this.slideSize)
            }
            e.preventDefault()
        }, toNext: function (e) {
            if (!this.next.hasClass(this.disabledClass) && !this.sliding) {
                this.slide(this.slideSize)
            }
            e.preventDefault()
        }, toIndex: function (e) {
            this.slide(e - this.index)
        }, updateStatus: function () {
            if (this.index === 1) {
                this.prev.addClass(this.disabledClass)
            } else {
                this.prev.removeClass(this.disabledClass)
            }
            if ((this.index + this.viewSize - 1) >= $(this.slideList).length && !this.hasMore) {
                this.next.addClass(this.disabledClass)
            } else {
                this.next.removeClass(this.disabledClass)
            }
            this.indexer.filter("." + this.indexerOnClass).removeClass(this.indexerOnClass);
            this.indexer.eq(this.index - 1).addClass(this.indexerOnClass);
            M.Event(this).fire("slide", {data: {index: this.index, total: $(this.slideList).length}})
        }, slide: function (e) {
            this.sliding = true;
            this.realSlideNum = e;
            this.prepareData($.proxy(function () {
                var f = this;
                d.shower[this.shStyle].show(this, function () {
                    f.index += f.realSlideNum;
                    f.sliding = false;
                    f.updateStatus()
                })
            }, this))
        }, prepareData: function (h) {
            var f = this.realSlideNum, e = $(this.slideList).length, h = typeof h === "function" ? h : $.noop, g = f >= 0 ? (e - this.index - this.viewSize + 1) : (this.index - 1);
            if (g <= 1) {
                this.hasMore = false
            }
            if (g <= 0) {
                this.realSlideNum = 0
            } else {
                this.realSlideNum = Math.abs(f) > g ? g : f;
                if (f < 0 && this.realSlideNum > 0) {
                    this.realSlideNum = -this.realSlideNum
                }
            }
            h()
        }, reset: function () {
            this.index = 1;
            this.hasMore = true;
            this.updateStatus();
            if (this.shStyle === "slide") {
                this.slideCnt.css("left", 0)
            }
        }
    };
    d.shower = {
        slide: {
            show: function (f, h) {
                var e = parseInt($(f.slideCnt).css("left"), 10), g = f.itemSize * f.realSlideNum;
                e = isNaN(e) ? 0 : e, $(f.slideCnt).animate({left: e - g}, f.slideTime, function () {
                    h()
                })
            }
        }, fadeInOut: {
            show: function (f, h) {
                var g = $(f.slideList[f.index - 1]), e = $(f.slideList[f.index + f.realSlideNum - 1]);
                g.fadeOut(f.slideTime);
                e.fadeIn(f.slideTime, function () {
                    h()
                })
            }
        }
    };
    return d
});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a
        } else {
            a(jQuery)
        }
    }
}(function (c) {
    var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice, j, b;
    if (c.event.fixHooks) {
        for (var e = d.length; e;) {
            c.event.fixHooks[d[--e]] = c.event.mouseHooks
        }
    }
    var f = c.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) {
                for (var m = k.length; m;) {
                    this.addEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) {
                for (var m = k.length; m;) {
                    this.removeEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = null
            }
            c.removeData(this, "mousewheel-line-height");
            c.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (m) {
            var i = c(m), n = i["offsetParent" in c.fn ? "offsetParent" : "parent"]();
            if (!n.length) {
                n = c("body")
            }
            return parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        }, getPageHeight: function (i) {
            return c(i).height()
        }, settings: {adjustOldDeltas: true, normalizeOffset: true}
    };
    c.fn.extend({
        mousewheel: function (i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        }, unmousewheel: function (i) {
            return this.unbind("mousewheel", i)
        }
    });
    function l(i) {
        var o = i || window.event, u = h.call(arguments, 1), w = 0, q = 0, p = 0, t = 0, s = 0, r = 0;
        i = c.event.fix(o);
        i.type = "mousewheel";
        if ("detail" in o) {
            p = o.detail * -1
        }
        if ("wheelDelta" in o) {
            p = o.wheelDelta
        }
        if ("wheelDeltaY" in o) {
            p = o.wheelDeltaY
        }
        if ("wheelDeltaX" in o) {
            q = o.wheelDeltaX * -1
        }
        if ("axis" in o && o.axis === o.HORIZONTAL_AXIS) {
            q = p * -1;
            p = 0
        }
        w = p === 0 ? q : p;
        if ("deltaY" in o) {
            p = o.deltaY * -1;
            w = p
        }
        if ("deltaX" in o) {
            q = o.deltaX;
            if (p === 0) {
                w = q * -1
            }
        }
        if (p === 0 && q === 0) {
            return
        }
        if (o.deltaMode === 1) {
            var v = c.data(this, "mousewheel-line-height");
            w *= v;
            p *= v;
            q *= v
        } else {
            if (o.deltaMode === 2) {
                var n = c.data(this, "mousewheel-page-height");
                w *= n;
                p *= n;
                q *= n
            }
        }
        t = Math.max(Math.abs(p), Math.abs(q));
        if (!b || t < b) {
            b = t;
            if (a(o, t)) {
                b /= 40
            }
        }
        if (a(o, t)) {
            w /= 40;
            q /= 40;
            p /= 40
        }
        w = Math[w >= 1 ? "floor" : "ceil"](w / b);
        q = Math[q >= 1 ? "floor" : "ceil"](q / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b);
        if (f.settings.normalizeOffset && this.getBoundingClientRect) {
            var m = this.getBoundingClientRect();
            s = i.clientX - m.left;
            r = i.clientY - m.top
        }
        i.deltaX = q;
        i.deltaY = p;
        i.deltaFactor = b;
        i.offsetX = s;
        i.offsetY = r;
        i.deltaMode = 0;
        u.unshift(i, w, q, p);
        if (j) {
            clearTimeout(j)
        }
        j = setTimeout(g, 200);
        return (c.event.dispatch || c.event.handle).apply(this, u)
    }

    function g() {
        b = null
    }

    function a(m, i) {
        return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }
}));
if (window.M && typeof window.M.define == "function") {
    window.M.define("jq-mousewheel", function () {
        return jQuery
    })
}
M.define("ScrollBar", function (a) {
    a("jq-mousewheel");
    var c = 15;

    function b(d) {
        this.wrap = null;
        this.container = null;
        this.dir = 1;
        this.barTPL = '<div style="position:absolute; top:0; right:0; padding:1px"><div style="width:7px; height:100%; background:#bbb"></div></div>';
        this.maxHeight = 0;
        M.mix(this, d);
        this.container = $(this.container);
        this.wrap = $(this.wrap);
        this.scrollBar = null;
        this.stopped = false;
        this.scrollToEnd = false;
        this.init()
    }

    b.prototype = {
        init: function () {
            if (!this.container.length) {
                M.error("ScrollBar init failed for no scroll container.");
                return false
            }
            this.posDir = this.dir === 0 ? "left" : "top";
            this.lengthDir = this.dir === 0 ? "width" : "height";
            this.scrollScale = this.dir === 0 ? "scrollWidth" : "scrollHeight";
            this.clientScale = this.dir === 0 ? "clientWidth" : "clientHeight";
            this.scrollDir = this.dir === 0 ? "scrollLeft" : "scrollTop";
            this.initWrap();
            this.bindEvents();
            this.setted = false
        }, initWrap: function () {
            this.container.css({position: "relative"});
            if (this.dir == 1) {
                this.container.css({"overflow-y": "hidden"})
            } else {
                this.container.css({"overflow-x": "hidden"})
            }
            if (this.maxHeight && !isNaN(this.maxHeight)) {
                this.container.css("max-" + this.lengthDir, this.maxHeight).addClass("maxh")
            }
            if (!this.wrap.length) {
                this.container.wrap('<div style="position:relative"></div>');
                this.wrap = this.container.parent()
            } else {
                if (this.wrap.css("position") == "static") {
                    this.wrap.css("position", "relative")
                }
            }
            this.createScrollBar();
            if (this.container.height() > 0) {
                this.setScrollBar()
            }
        }, createScrollBar: function () {
            this.container[0][this.scrollDir] = 0;
            this.scrollBar = $(this.barTPL).css("opacity", 0).appendTo(this.wrap)
        }, bindEvents: function () {
            this.wrap.bind("mouseenter", $.proxy(this.enterWrap, this)).bind("mouseleave", $.proxy(this.leaveWrap, this)).mousewheel($.proxy(this.rollWrap, this));
            this.scrollBar.mousedown($.proxy(this.holdBar, this));
            M.Event(this).on("contentchange", $.proxy(this.checkShowScrollBar, this))
        }, setScrollBar: function () {
            this.checkShowScrollBar()
        }, setDimension: function () {
            this.wrapStart = this.wrap.offset()[this.posDir]
        }, checkShowScrollBar: function () {
            var e = this.container[0];
            this.wrap.css("height", this.container.height());
            this.wrapLength = this.dir === 0 ? this.wrap.width() : this.wrap.height();
            this.scrollLength = this.dir === 0 ? e.scrollWidth : e.scrollHeight;
            this.clientLength = this.dir === 0 ? e.clientWidth : e.clientHeight;
            var d = e[this.scrollDir];
            if (this.scrollLength > this.clientLength) {
                this.updateScrollBarLength();
                this.scrollBar.show();
                if (d <= this.scrollLength - this.clientLength) {
                    this.scroll(d)
                } else {
                    this.scroll(this.scrollLength - this.clientLength)
                }
            } else {
                this.scrollBar.hide()
            }
        }, updateScrollBarLength: function () {
            this.barLength = this.wrapLength * (this.clientLength / this.scrollLength);
            this.barLength = this.barLength < c ? c : this.barLength;
            this.scrollBar.css((this.dir === 0 ? "width" : "height"), this.barLength);
            this.barLength = this.dir === 0 ? this.scrollBar.outerWidth() : this.scrollBar.outerHeight()
        }, enterWrap: function () {
            if (!this.setted) {
                this.setScrollBar();
                this.setted = true
            }
            this.on = true;
            this.setDimension();
            this.scrollBar.stop(true, true).animate({opacity: 0.8}, 300)
        }, leaveWrap: function () {
            this.on = false;
            if (!this.holded) {
                this.scrollBar.stop(true, true).animate({opacity: 0}, 300)
            }
        }, stop: function () {
            this.stopped = true
        }, start: function () {
            this.stopped = false
        }, rollWrap: function (f, h) {
            if (this.stopped) {
                return true
            }
            var d = this.getScrollUnit(-h * f.deltaFactor);
            d = d < 0 ? Math.floor(d) : Math.ceil(d);
            var g = 0, e = this.container[0][this.scrollDir];
            if (e + d < 0) {
                g = 0
            } else {
                if (e + d + this.clientLength > this.scrollLength) {
                    g = this.scrollLength - this.clientLength
                } else {
                    g = e + d
                }
            }
            this.scroll(g);
            if (this.scrollBar.is(":visible")) {
                f.preventDefault();
                f.stopPropagation()
            }
        }, getScrollUnit: function (d) {
            if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
                d = 30 * d
            }
            return d
        }, holdBar: function (d) {
            this.holded = true;
            this.cursorPosition = this.dir === 0 ? d.clientX : d.clientY;
            this.startCursorOffset = this.cursorPosition - this.scrollBar.offset()[this.posDir];
            this.listenMouseMove();
            d.preventDefault()
        }, listenMouseMove: function () {
            $(document).bind("mousemove", this.getMoveCursorHandler()).bind("mouseup", this.getReleaseCursorHandler())
        }, stopListenMouseMove: function () {
            $(document).unbind("mousemove", this.getMoveCursorHandler()).unbind("mouseup", this.getReleaseCursorHandler())
        }, getMoveCursorHandler: function () {
            if (!this.moveCursorHandler) {
                this.moveCursorHandler = $.proxy(this.moveCursor, this)
            }
            return this.moveCursorHandler
        }, getReleaseCursorHandler: function () {
            if (!this.releaseCursorHandler) {
                this.releaseCursorHandler = $.proxy(this.releaseCursor, this)
            }
            return this.releaseCursorHandler
        }, moveCursor: function (i) {
            if (this.holded) {
                var e = this.dir === 0 ? i.clientX : i.clientY, h = e - this.cursorPosition, j = this.cursorPosition - this.startCursorOffset - this.wrapStart, g = e - this.startCursorOffset - this.wrapStart, d = this.cursorPosition + (this.barLength - this.startCursorOffset) - this.wrapStart - this.wrapLength, f = e + (this.barLength - this.startCursorOffset) - this.wrapStart - this.wrapLength;
                if (g > 0 && f < 0 && h !== 0) {
                    this.cursorPosition = e;
                    this.moveScrollBar(h)
                } else {
                    if (g <= 0 && j > 0 && h !== 0) {
                        h = -j;
                        this.cursorPosition = this.cursorPosition + h;
                        this.moveScrollBar(h)
                    } else {
                        if (f >= 0 && d < 0 && h !== 0) {
                            h = -d;
                            this.cursorPosition = this.cursorPosition + h;
                            this.moveScrollBar(h)
                        }
                    }
                }
            }
            i.preventDefault()
        }, moveScrollBar: function (e) {
            var f = parseInt(this.scrollBar.css(this.posDir), 10), d = this.wrapLength - this.barLength - f;
            if (e < 0 && e > -f || e > 0 && e < d) {
                f = f + e
            } else {
                if (e < 0) {
                    f = 0
                } else {
                    if (e > 0) {
                        f = f + d
                    }
                }
            }
            this.scroll((f / (this.wrapLength - this.barLength)) * (this.scrollLength - this.clientLength))
        }, scroll: function (d) {
            this.scrollBar.css(this.posDir, d * (this.wrapLength - this.barLength) / (this.scrollLength - this.clientLength));
            this.container[0][this.scrollDir] = d;
            M.Event(this).fire("scroll");
            if (d === 0) {
                M.Event(this).fire("scrollToTop");
                this.scrollToEnd = true
            } else {
                if (d + this.container[0][this.clientScale] >= this.container[0][this.scrollScale]) {
                    M.Event(this).fire("scrollToBottom");
                    this.scrollToEnd = true
                } else {
                    this.scrollToEnd = false
                }
            }
        }, scrollLength: function () {
            return this.container[0][this.scrollDir]
        }, releaseCursor: function () {
            this.holded = false;
            this.stopListenMouseMove();
            if (!this.on) {
                this.scrollBar.stop(true, true).animate({opacity: 0}, 300)
            }
        }
    };
    return b
});
var XDate = (function (X, D, ae, s) {
    var N = 0;
    var h = 1;
    var n = 2;
    var l = 3;
    var t = 4;
    var aa = 5;
    var d = 6;
    var ah = 7;
    var G = 8;
    var C = 9;
    var ab = 86400000;
    var T = "yyyy-MM-dd'T'HH:mm:ss(.fff)";
    var u = T + "zzz";
    var i = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds", "Day", "Year"];
    var m = ["Years", "Months", "Days"];
    var x = [12, 31, 24, 60, 60, 1000, 1];
    var z = new RegExp("(([a-zA-Z])\\2*)|(\\((('.*?'|\\(.*?\\)|.)*?)\\))|('(.*?)')");
    var b = X.UTC;
    var B = X.prototype.toUTCString;
    var r = S.prototype;
    r.length = 1;
    r.splice = ae.prototype.splice;
    function S() {
        return ad((this instanceof S) ? this : new S(), arguments)
    }

    function ad(an, am) {
        var ak = am.length;
        var al;
        if (R(am[ak - 1])) {
            al = am[--ak];
            am = w(am, 0, ak)
        }
        if (!ak) {
            an[0] = new X()
        } else {
            if (ak == 1) {
                var aj = am[0];
                if (aj instanceof X || ag(aj)) {
                    an[0] = new X(+aj)
                } else {
                    if (aj instanceof S) {
                        an[0] = E(aj)
                    } else {
                        if (k(aj)) {
                            an[0] = new X(0);
                            an = y(aj, al || false, an)
                        }
                    }
                }
            } else {
                an[0] = new X(b.apply(X, am));
                if (!al) {
                    an[0] = e(an[0])
                }
            }
        }
        if (R(al)) {
            q(an, al)
        }
        return an
    }

    r.getUTCMode = af(W);
    function W(aj) {
        return aj[0].toString === B
    }

    r.setUTCMode = af(q);
    function q(ak, aj, al) {
        if (aj) {
            if (!W(ak)) {
                if (al) {
                    ak[0] = j(ak[0])
                }
                ak[0].toString = B
            }
        } else {
            if (W(ak)) {
                if (al) {
                    ak[0] = e(ak[0])
                } else {
                    ak[0] = new X(+ak[0])
                }
            }
        }
        return ak
    }

    r.getTimezoneOffset = function () {
        if (W(this)) {
            return 0
        } else {
            return this[0].getTimezoneOffset()
        }
    };
    ac(i, function (ak, aj) {
        r["get" + ak] = function () {
            return P(this[0], W(this), aj)
        };
        if (aj != G) {
            r["getUTC" + ak] = function () {
                return P(this[0], true, aj)
            }
        }
        if (aj != ah) {
            r["set" + ak] = function (al) {
                H(this, aj, al, arguments, W(this));
                return this
            };
            if (aj != G) {
                r["setUTC" + ak] = function (al) {
                    H(this, aj, al, arguments, true);
                    return this
                };
                r["add" + (m[aj] || ak)] = function (am, al) {
                    f(this, aj, am, al);
                    return this
                };
                r["diff" + (m[aj] || ak)] = function (al) {
                    return I(this, al, aj)
                }
            }
        }
    });
    function H(an, aq, ao, am, ap) {
        var ak = o(P, an[0], ap);
        var aj = o(J, an[0], ap);
        var ar;
        var al = false;
        if (am.length == 2 && R(am[1])) {
            al = am[1];
            am = [ao]
        }
        if (aq == h) {
            ar = (ao % 12 + 12) % 12
        } else {
            ar = ak(h)
        }
        aj(aq, am);
        if (al && ak(h) != ar) {
            aj(h, [ak(h) - 1]);
            aj(n, [O(ak(N), ak(h))])
        }
    }

    function f(al, ak, an, aj) {
        an = Number(an);
        var am = D.floor(an);
        al["set" + i[ak]](al["get" + i[ak]]() + am, aj || false);
        if (am != an && ak < d) {
            f(al, ak + 1, (an - am) * x[ak], aj)
        }
    }

    function I(aj, aq, am) {
        aj = aj.clone().setUTCMode(true, true);
        aq = S(aq).setUTCMode(true, true);
        var al = 0;
        if (am == N || am == h) {
            for (var ao = d, ak; ao >= am; ao--) {
                al /= x[ao];
                al += P(aq, false, ao) - P(aj, false, ao)
            }
            if (am == h) {
                al += (aq.getFullYear() - aj.getFullYear()) * 12
            }
        } else {
            if (am == n) {
                var ap = aj.toDate().setUTCHours(0, 0, 0, 0);
                var an = aq.toDate().setUTCHours(0, 0, 0, 0);
                al = D.round((an - ap) / ab) + ((aq - an) - (aj - ap)) / ab
            } else {
                al = (aq - aj) / [3600000, 60000, 1000, 1][am - 3]
            }
        }
        return al
    }

    r.getWeek = function () {
        return a(o(P, this, false))
    };
    r.getUTCWeek = function () {
        return a(o(P, this, true))
    };
    r.setWeek = function (ak, aj) {
        c(this, ak, aj, false);
        return this
    };
    r.setUTCWeek = function (ak, aj) {
        c(this, ak, aj, true);
        return this
    };
    r.addWeeks = function (aj) {
        return this.addDays(Number(aj) * 7)
    };
    r.diffWeeks = function (aj) {
        return I(this, aj, n) / 7
    };
    function a(aj) {
        return K(aj(N), aj(h), aj(n))
    }

    function K(ak, am, aj) {
        var an = new X(b(ak, am, aj));
        var al = U(p(ak, am, aj));
        return D.floor(D.round((an - al) / ab) / 7) + 1
    }

    function p(ak, al, aj) {
        var am = new X(b(ak, al, aj));
        if (am < U(ak)) {
            return ak - 1
        } else {
            if (am >= U(ak + 1)) {
                return ak + 1
            }
        }
        return ak
    }

    function U(aj) {
        var ak = new X(b(aj, 0, 4));
        ak.setUTCDate(ak.getUTCDate() - (ak.getUTCDay() + 6) % 7);
        return ak
    }

    function c(am, ap, ak, ao) {
        var aj = o(P, am, ao);
        var an = o(J, am, ao);
        if (ak === s) {
            ak = p(aj(N), aj(h), aj(n))
        }
        var al = U(ak);
        if (!ao) {
            al = e(al)
        }
        am.setTime(+al);
        an(n, [aj(n) + (ap - 1) * 7])
    }

    S.parsers = [F];
    S.parse = function (aj) {
        return +S("" + aj)
    };
    function y(ao, aj, an) {
        var am = S.parsers;
        var al = 0;
        var ak;
        for (; al < am.length; al++) {
            ak = am[al](ao, aj, an);
            if (ak) {
                return ak
            }
        }
        an[0] = new X(ao);
        return an
    }

    function F(an, ak, al) {
        var aj = an.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
        if (aj) {
            var am = new X(b(aj[1], aj[3] ? aj[3] - 1 : 0, aj[5] || 1, aj[7] || 0, aj[8] || 0, aj[10] || 0, aj[12] ? Number("0." + aj[12]) * 1000 : 0));
            if (aj[13]) {
                if (aj[14]) {
                    am.setUTCMinutes(am.getUTCMinutes() + (aj[15] == "-" ? 1 : -1) * (Number(aj[16]) * 60 + (aj[18] ? Number(aj[18]) : 0)))
                }
            } else {
                if (!ak) {
                    am = e(am)
                }
            }
            return al.setTime(+am)
        }
    }

    r.toString = function (aj, ak, al) {
        if (aj === s || !V(this)) {
            return this[0].toString()
        } else {
            return L(this, aj, ak, al, W(this))
        }
    };
    r.toUTCString = r.toGMTString = function (aj, ak, al) {
        if (aj === s || !V(this)) {
            return this[0].toUTCString()
        } else {
            return L(this, aj, ak, al, true)
        }
    };
    r.toISOString = function () {
        return this.toUTCString(u)
    };
    S.defaultLocale = "";
    S.locales = {
        "": {
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            amDesignator: "AM",
            pmDesignator: "PM"
        }
    };
    S.formatters = {i: T, u: u};
    function L(aq, am, ak, an, ar) {
        var aj = S.locales;
        var ap = aj[S.defaultLocale] || {};
        var al = o(P, aq, ar);
        ak = (k(ak) ? aj[ak] : ak) || {};
        function at(au) {
            return ak[au] || ap[au]
        }

        function ao(au) {
            if (an) {
                var av = (au == ah ? n : au) - 1;
                for (; av >= 0; av--) {
                    an.push(al(av))
                }
            }
            return al(au)
        }

        return Y(aq, am, ao, at, ar)
    }

    function Y(ap, ak, an, ao, aq) {
        var aj;
        var al;
        var am = "";
        while (aj = ak.match(z)) {
            am += ak.substr(0, aj.index);
            if (aj[1]) {
                am += Q(ap, aj[1], an, ao, aq)
            } else {
                if (aj[3]) {
                    al = Y(ap, aj[4], an, ao, aq);
                    if (parseInt(al.replace(/\D/g, ""), 10)) {
                        am += al
                    }
                } else {
                    am += aj[7] || "'"
                }
            }
            ak = ak.substr(aj.index + aj[0].length)
        }
        return am + ak
    }

    function Q(ap, an, al, ao, aq) {
        var aj = an.length;
        var am;
        var ak = "";
        while (aj > 0) {
            am = A(ap, an.substr(0, aj), al, ao, aq);
            if (am !== s) {
                ak += am;
                an = an.substr(aj);
                aj = an.length
            } else {
                aj--
            }
        }
        return ak + an
    }

    function A(an, al, aj, am, ap) {
        var ak = S.formatters[al];
        if (k(ak)) {
            return Y(an, ak, aj, am, ap)
        } else {
            if (v(ak)) {
                return ak(an, ap || false, am)
            }
        }
        switch (al) {
            case"fff":
                return Z(aj(d), 3);
            case"s":
                return aj(aa);
            case"ss":
                return Z(aj(aa));
            case"m":
                return aj(t);
            case"mm":
                return Z(aj(t));
            case"h":
                return aj(l) % 12 || 12;
            case"hh":
                return Z(aj(l) % 12 || 12);
            case"H":
                return aj(l);
            case"HH":
                return Z(aj(l));
            case"d":
                return aj(n);
            case"dd":
                return Z(aj(n));
            case"ddd":
                return am("dayNamesShort")[aj(ah)] || "";
            case"dddd":
                return am("dayNames")[aj(ah)] || "";
            case"M":
                return aj(h) + 1;
            case"MM":
                return Z(aj(h) + 1);
            case"MMM":
                return am("monthNamesShort")[aj(h)] || "";
            case"MMMM":
                return am("monthNames")[aj(h)] || "";
            case"yy":
                return (aj(N) + "").substring(2);
            case"yyyy":
                return aj(N);
            case"t":
                return ai(aj, am).substr(0, 1).toLowerCase();
            case"tt":
                return ai(aj, am).toLowerCase();
            case"T":
                return ai(aj, am).substr(0, 1);
            case"TT":
                return ai(aj, am);
            case"z":
            case"zz":
            case"zzz":
                return ap ? "Z" : g(an, al);
            case"w":
                return a(aj);
            case"ww":
                return Z(a(aj));
            case"S":
                var ao = aj(n);
                if (ao > 10 && ao < 20) {
                    return "th"
                }
                return ["st", "nd", "rd"][ao % 10 - 1] || "th"
        }
    }

    function g(ao, an) {
        var ap = ao.getTimezoneOffset();
        var ak = ap < 0 ? "+" : "-";
        var aj = D.floor(D.abs(ap) / 60);
        var am = D.abs(ap) % 60;
        var al = aj;
        if (an == "zz") {
            al = Z(aj)
        } else {
            if (an == "zzz") {
                al = Z(aj) + ":" + Z(am)
            }
        }
        return ak + al
    }

    function ai(aj, ak) {
        return aj(l) < 12 ? ak("amDesignator") : ak("pmDesignator")
    }

    ac(["getTime", "valueOf", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "toJSON"], function (aj) {
        r[aj] = function () {
            return this[0][aj]()
        }
    });
    r.setTime = function (aj) {
        this[0].setTime(aj);
        return this
    };
    r.valid = af(V);
    function V(aj) {
        return !isNaN(+aj[0])
    }

    r.clone = function () {
        return new S(this)
    };
    r.clearTime = function () {
        return this.setHours(0, 0, 0, 0)
    };
    r.toDate = function () {
        return new X(+this[0])
    };
    S.now = function () {
        return +new X()
    };
    S.today = function () {
        return new S().clearTime()
    };
    S.UTC = b;
    S.getDaysInMonth = O;
    function E(aj) {
        var ak = new X(+aj[0]);
        if (W(aj)) {
            ak.toString = B
        }
        return ak
    }

    function P(ak, al, aj) {
        return ak["get" + (al ? "UTC" : "") + i[aj]]()
    }

    function J(al, am, ak, aj) {
        al["set" + (am ? "UTC" : "") + i[ak]].apply(al, aj)
    }

    function j(aj) {
        return new X(b(aj.getFullYear(), aj.getMonth(), aj.getDate(), aj.getHours(), aj.getMinutes(), aj.getSeconds(), aj.getMilliseconds()))
    }

    function e(aj) {
        return new X(aj.getUTCFullYear(), aj.getUTCMonth(), aj.getUTCDate(), aj.getUTCHours(), aj.getUTCMinutes(), aj.getUTCSeconds(), aj.getUTCMilliseconds())
    }

    function O(aj, ak) {
        return 32 - new X(b(aj, ak, 32)).getUTCDate()
    }

    function af(aj) {
        return function () {
            return aj.apply(s, [this].concat(w(arguments)))
        }
    }

    function o(ak) {
        var aj = w(arguments, 1);
        return function () {
            return ak.apply(s, aj.concat(w(arguments)))
        }
    }

    function w(ak, al, aj) {
        return ae.prototype.slice.call(ak, al || 0, aj === s ? ak.length : aj)
    }

    function ac(aj, al) {
        for (var ak = 0; ak < aj.length; ak++) {
            al(aj[ak], ak)
        }
    }

    function k(aj) {
        return typeof aj == "string"
    }

    function ag(aj) {
        return typeof aj == "number"
    }

    function R(aj) {
        return typeof aj == "boolean"
    }

    function v(aj) {
        return typeof aj == "function"
    }

    function Z(ak, aj) {
        aj = aj || 2;
        ak += "";
        while (ak.length < aj) {
            ak = "0" + ak
        }
        return ak
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = S
    }
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return S
        })
    } else {
        if (window.M && typeof window.M.define === "function") {
            window.M.define("xdate", function () {
                return S
            })
        }
    }
    return S
})(Date, Math, Array);
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
M.define("/js/hotel/module/DateRangePicker", function (e, d, f) {
    var b = e("xdate");
    e("jqui-datepicker");
    var a = {
        duration: 50,
        numberOfMonths: 2,
        firstDay: 1,
        altFormat: "yy-mm-dd",
        dateFormat: "yy-mm-dd",
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    };
    var c = function (g) {
        this.dateFormat = "yyyy-MM-dd";
        this.timer = null;
        this.customCss = "hotel_datepicker";
        this.startInput = null;
        this.endInput = null;
        this.startDate = null;
        this.endDate = null;
        this.minDate = null;
        this.maxDate = null;
        this.rangeMinDays = 1;
        this.rangeMaxDays = null;
        this.datePickerOptions = {};
        this.startDayClass = "start_day";
        this.startDayClassUnset = "start_day_unset";
        this.endDayClass = "end_day";
        this.endDayClassUnset = "end_day_unset";
        this.isCached = false;
        this.isDoublePick = false;
        M.mix(this, g);
        M.mix(this.datePickerOptions, a, false);
        this.startInput = $(this.startInput);
        this.endInput = $(this.endInput);
        this.dateRangeSetted = true;
        this.showIns = null;
        this.preCheck();
        this.init()
    };
    c.prototype = {
        init: function () {
            this.initDatePicker()
        }, preCheck: function () {
            if (!this.startInput.length || !this.endInput.length) {
                M.error("date range picker need an start input and an end input")
            }
            if (this.maxDate && this.minDate && b.parse(this.maxDate) <= b.parse(this.minDate)) {
                M.error("max date must big than min date")
            }
            this.rangeMinDays = +this.rangeMinDays;
            if (isNaN(this.rangeMinDays) || this.rangeMinDays < 0) {
                M.error("date range days must be positive")
            }
            if (this.rangeMaxDays) {
                this.rangeMaxDays = +this.rangeMaxDays;
                if (isNaN(this.rangeMaxDays) || this.rangeMaxDays < 0) {
                    M.error("date range days must be positive")
                }
            }
            if (this.rangeMinDays && this.rangeMaxDays && this.rangeMinDays > this.rangeMaxDays) {
                M.error("date range max days must equal or more than min days")
            }
            if (this.maxDate && this.minDate && this.rangeMinDays > 0) {
                var h = new b(this.minDate);
                var j = new b(this.maxDate);
                if (h.diffDays(j) < this.rangeMinDays) {
                    M.error("date range days must equal or more than range min days")
                }
            }
            if (!this.startDate) {
                this.startDate = (new b()).toString(this.dateFormat)
            }
            if (this.minDate && b.parse(this.startDate) < b.parse(this.minDate)) {
                this.startDate = this.minDate
            }
            if (this.endDate) {
                var g = new b(this.startDate), i = new b(this.endDate);
                if (g.diffDays(i) < this.rangeMinDays) {
                    i = g.addDays(this.rangeMinDays)
                }
                if (this.maxDate && b.parse(this.maxDate) < i) {
                    i = this.maxDate
                }
                this.endDate = i.toString(this.dateFormat)
            } else {
                this.endDate = (new b(this.startDate)).addDays(1).toString(this.dateFormat)
            }
        }, initDatePicker: function () {
            var h = {
                onSelect: M.bind(this.selectDate, this),
                onClose: M.bind(this.closeDate, this),
                beforeShow: M.bind(this.beforeShow, this),
                beforeShowDay: M.bind(this.beforeShowDay, this),
                gotoCurrent: true
            }, i = M.mix({}, h, a), g = M.mix({}, h, a);
            if (this.minDate) {
                i.minDate = (new b(this.minDate)).toString(this.dateFormat);
                g.minDate = (new b(this.minDate)).addDays(this.rangeMinDays).toString(this.dateFormat)
            }
            if (this.maxDate) {
                i.maxDate = (new b(this.maxDate)).addDays(-this.rangeMinDays).toString(this.dateFormat);
                g.maxDate = (new b(this.startDate)).addDays(this.rangeMaxDays).toString(this.dateFormat)
            }
            this.startInput.datepicker(i);
            this.endInput.datepicker(g);
            this.startInput.datepicker("setDate", this.startDate);
            this.endInput.datepicker("setDate", this.endDate);
            if (this.isDoublePick) {
                this.startInput.datepicker("widget").on("mouseenter", "td:not(.ui-state-disabled)", $.proxy(this.mouseenterEffect, this));
                this.startInput.datepicker("widget").on("mouseleave", "td:not(.ui-state-disabled)", $.proxy(this.mouseleaveEffect, this));
                this.endInput.datepicker("widget").on("mouseenter", "td:not(.ui-state-disabled)", $.proxy(this.mouseenterEffect, this));
                this.endInput.datepicker("widget").on("mouseleave", "td:not(.ui-state-disabled)", $.proxy(this.mouseleaveEffect, this))
            }
        }, mouseenterEffect: function (i) {
            var l = $(i.delegateTarget), k = $(i.target).closest("td"), h = new b(k.data("year"), k.data("month"), $("a", k).html());
            if (this.showIns.input.is(this.startInput)) {
                var j = new b(this.endDate);
                k.addClass("start_day_unset");
                if (h.diffDays(j) > 0) {
                    $("td[data-handler]", l).each(function (m, o) {
                        var p = $(o), n = new b(p.data("year"), p.data("month"), $("a", p).html());
                        if (n.diffDays(j) > 0 && n.diffDays(h) < 0) {
                            p.addClass("range_day")
                        } else {
                            p.removeClass("range_day")
                        }
                    })
                }
            } else {
                var g = new b(this.startDate);
                k.addClass("end_day_unset");
                if (h.diffDays(g) < 0) {
                    $("td[data-handler]", l).each(function (m, o) {
                        var p = $(o), n = new b(p.data("year"), p.data("month"), $("a", p).html());
                        if (n.diffDays(g) < 0 && n.diffDays(h) > 0) {
                            p.addClass("range_day")
                        } else {
                            p.removeClass("range_day")
                        }
                    })
                }
            }
        }, mouseleaveEffect: function (i) {
            var l = $(i.delegateTarget), k = $(i.target).closest("td"), h = new b(k.data("year"), (k.data("month") + 1), $("a", k).html());
            if (this.showIns.input.is(this.startInput)) {
                var j = new b(this.endDate);
                k.removeClass("start_day_unset");
                if (h.diffDays(j) < 0) {
                    $("td[data-handler]", l).each(function (m, n) {
                        $(n).removeClass("range_day")
                    })
                }
            } else {
                var g = new b(this.startDate);
                k.removeClass("end_day_unset");
                if (h.diffDays(g) < 0) {
                    $("td[data-handler]", l).each(function (m, n) {
                        $(n).removeClass("range_day")
                    })
                }
            }
        }
    };
    M.mix(c.prototype, {
        selectDate: function (h, n) {
            var i = "", o = {startDate: this.startDate, endDate: this.endDate}, k = false, j = false;
            if (n.input.is(this.startInput)) {
                o.startDate = h;
                i = this.endInput
            } else {
                o.endDate = h;
                i = this.startInput
            }
            if (n.input.is(this.startInput)) {
                i.datepicker("option", "maxDate", (new b(h)).addDays(this.rangeMaxDays).toString(this.dateFormat));
                if (this.rangeMaxDays && b.parse(o.endDate) - b.parse(h) > this.rangeMaxDays * 24 * 60 * 60 * 1000) {
                    o.endDate = (new b(h)).addDays(this.rangeMinDays).toString(this.dateFormat);
                    i.datepicker("setDate", o.endDate);
                    j = true;
                    setTimeout(M.bind(function () {
                        this.dateRangeSetted = false;
                        i.datepicker("show")
                    }, this), 100)
                }
            }
            if (b.parse(o.startDate) >= b.parse(o.endDate)) {
                var l = "";
                if (n.input.is(this.startInput)) {
                    l = (new b(o.startDate)).addDays(this.rangeMinDays).toString(this.dateFormat);
                    o.endDate = l
                } else {
                    l = (new b(o.endDate)).addDays(-this.rangeMinDays).toString(this.dateFormat);
                    o.startDate = l
                }
                i.datepicker("setDate", l);
                if (this.dateRangeSetted) {
                    if (n.input.is(this.startInput)) {
                        j = true
                    } else {
                        k = true
                    }
                    setTimeout(M.bind(function () {
                        this.dateRangeSetted = false;
                        i.datepicker("show")
                    }, this), 100)
                } else {
                    this.dateRangeSetted = true
                }
            } else {
                this.dateRangeSetted = true
            }
            if (this.isDoublePick && n.input.is(this.startInput) && !this.isCached && !j) {
                j = true;
                setTimeout(M.bind(function () {
                    this.dateRangeSetted = false;
                    i.datepicker("show")
                }, this), 100)
            }
            if (!(o.startDate == this.startDate && o.endDate == this.endDate)) {
                this.startDate = o.startDate;
                this.endDate = o.endDate;
                M.Event(this).fire("date range picker changed", o)
            }
            if (this.isDoublePick) {
                var g = new b(this.startDate), m = new b(this.endDate);
                if (!g.valid()) {
                    this.startDate = (new b()).addDays(40).toString(this.dateFormat)
                }
                if (!m.valid()) {
                    this.endDate = (new b(this.startDate)).addDays(1).toString(this.dateFormat)
                }
                if (n.input.is(this.startInput) && b.parse(o.startDate) < b.parse(o.endDate) && this.isCached && !j) {
                    this.isCached = true;
                    M.Event(this).fire("date range picker doublepicked", {
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
                if (n.input.is(this.endInput) && !k) {
                    this.isCached = true;
                    M.Event(this).fire("date range picker doublepicked", {
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
            }
        }, setDate: function (g) {
            this.startDate = g.startDate;
            this.endDate = g.endDate;
            this.preCheck();
            this.startInput.datepicker("setDate", g.startDate);
            this.endInput.datepicker("setDate", g.endDate)
        }, closeDate: function (h, i) {
            var g = this;
            this.timer = setTimeout(function () {
                $("#ui-datepicker-div").removeClass(g.customCss)
            }, 1000);
            if (!this.dateRangeSetted) {
                this.dateRangeSetted = true
            }
            if (M.isFunction(this._onClose)) {
                this._onClose(h, i)
            }
        }, beforeShow: function (g, h) {
            clearTimeout(this.timer);
            $("#ui-datepicker-div").addClass(this.customCss);
            this.showIns = h;
            if (M.isFunction(this._beforeShow)) {
                this._beforeShow(g, h)
            }
        }, beforeShowDay: function (i) {
            var j = b.parse(this.startDate), h = b.parse(this.endDate), g = b.parse(i);
            var k = g == j ? this.startDayClass : (g > j && g < h ? "range_day" : (g == h ? this.endDayClass : ""));
            if (!this.dateRangeSetted) {
                if (this.showIns.input.is(this.startInput)) {
                    k = k == this.endDayClass ? this.endDayClassUnset : ""
                } else {
                    k = k == this.startDayClass ? this.startDayClassUnset : ""
                }
            }
            return [true, k]
        }
    });
    f.exports = c
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
M.define("/js/hotel/module/BookingDate", function (c, b, d) {
    var e = c("Storage"), a = c("xdate");
    var f = {
        getDate: function (o) {
            var q = Number(!!window.localStorage);
            var n = +new Date(), l = new Date(n), h, m, i, g;
            l.setHours(0, 0, 0, 0);
            n = l.getTime();
            try {
                h = e.getItem("hotel_check_in");
                m = e.getItem("hotel_check_out")
            } catch (k) {
            }
            if (!!h && M.is(h, "String")) {
                i = Date.parse(h);
                if (i >= n && !!m && M.is(m, "String")) {
                    g = Date.parse(m);
                    if (g > i && g - i < 30 * 24 * 60 * 60 * 1000) {
                        if (!o) {
                            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                                operation: 0,
                                is_support_storage: q,
                                is_cached: 1
                            })
                        }
                        return {checkIn: h, checkOut: m, isCached: true}
                    }
                }
            }
            i = n + 40 * 24 * 60 * 60 * 1000;
            g = i + 24 * 60 * 60 * 1000;
            var j = new a(i), p = new a(g);
            h = j.toString("yyyy-MM-dd");
            m = p.toString("yyyy-MM-dd");
            if (!o) {
                !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                    operation: 0,
                    is_support_storage: q,
                    is_cached: 0
                })
            }
            return {checkIn: h, checkOut: m, isCached: false}
        }, setDate: function (k, g, i) {
            try {
                if (i !== "fav") {
                    e.setItem("hotel_check_in", k, 86400 * 7);
                    e.setItem("hotel_check_out", g, 86400 * 7)
                }
            } catch (j) {
            }
            var l = a.today().diffDays(new a(k)), h = (new a(k)).diffDays(new a(g));
            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                operation: 1,
                ahead_days: l,
                duration_days: h,
                check_in: k,
                check_out: g,
                page_type: i
            })
        }, isValid: function (k, g) {
            var j = +new Date(), h = new Date(j), i, l;
            h.setHours(0, 0, 0, 0);
            j = h.getTime();
            if (!!k && M.is(k, "String")) {
                i = Date.parse(k);
                if (i >= j && !!g && M.is(g, "String")) {
                    l = Date.parse(g);
                    if (l > i && l - i < 30 * 24 * 60 * 60 * 1000) {
                        return true
                    }
                }
            }
            return false
        }, hasRemind: function () {
            var g = +new Date(), h = e.getItem("hotel_date_pick_remind");
            if (!!h && M.is(h, "Number")) {
                if (g - h < 24 * 60 * 60 * 1000) {
                    return true
                }
            }
            return false
        }, setRemind: function () {
            e.setItem("hotel_date_pick_remind", +new Date(), 86400 * 7)
        }
    };
    d.exports = f
});
M.closure(function (h) {
    var al = window.Env || {};
    var aa = h("Slider"), O = h("/js/Dropdown"), ap = h("ScrollBar"), l = h("Suggestion"), af = h("/js/SiteSearch"), e = h("MesSearchEvent"), ac = h("xdate"), g = h("/js/hotel/module/DateRangePicker"), k = h("/js/hotel/module/BookingDate"), m = k.getDate(true), R = m.checkIn, L = m.checkOut;
    var n = 600, W = 5000, ai = false, U = $("#_j_top_pic_container"), aj = U.find(".show-image"), i = U.find(".show-nav"), ao = aj.children("li"), z = ao.length;
    var K = new aa({
        slideCnt: aj,
        slideList: ao,
        slideTime: n,
        indexer: i.children("li"),
        indexerOnClass: "active",
        shStyle: "fadeInOut"
    });
    aj.add(i).bind("mouseenter", function () {
        ai = true
    }).bind("mouseleave", function () {
        ai = false
    });
    setInterval(function () {
        if (!ai && M.windowFocused) {
            if (K.index < z) {
                K.toIndex(K.index + 1)
            } else {
                K.toIndex(1)
            }
        }
    }, W);
    aj.delegate("li", "click", function () {
        var ay = $(this);
        try {
            var au = ay.find("a").attr("href");
            var ax = au.split("/");
            var aw = parseInt(ax[ax.length - 1]);
            mfwPageEvent("ginfo", "index:focus:image:click", ({iid: aw}))
        } catch (av) {
        }
    });
    var b = $("#_j_index_search"), Y = $("#_j_index_search_tab"), J = $("#_j_index_search_bar_all"), q = $("#_j_index_search_bar_hotel"), ae = $("#_j_index_search_bar_mdd"), v = $("#_j_index_search_bar_sales"), j = function (au) {
        switch (au) {
            case 0:
                return J;
                break;
            case 1:
                return q;
                break;
            case 2:
                return ae;
                break;
            case 3:
                return v;
                break;
            default:
        }
    };
    Y.on("click", "li", function (ax) {
        var az = $(ax.currentTarget), au = Number(az.data("index")), av = j(au), aB = Y.find(".tab-selected"), aA = Number(aB.data("index")), ay = j(aA), aw = $.trim(ay.find(".search-input input").val());
        Y.find("li").removeClass("tab-selected");
        az.addClass("tab-selected");
        b.find(".searchbar").hide();
        av.find(".search-input input").val(aw).end().show()
    });
    var w = true;
    var T = function (av, aA, ay, ax, aw) {
        var au = {};
        if (aA == "hotel") {
            au.url = "/hotel/s.php?q=" + encodeURIComponent(av)
        } else {
            if (aA == "sales") {
                au.url = "/sales/0-0-K" + encodeURIComponent(av) + "-0.html"
            } else {
                au.url = "/group/s.php?q=" + encodeURIComponent(av)
            }
        }
        au.search_type = "all";
        au.search_category = "suggest";
        au.trigger = ax;
        au.search_from = "index_" + aA;
        au.keyword = av;
        if (!!ay) {
            var az = ay.closest("li");
            au.local = az.index()
        }
        if (ay.length) {
            au.url = ay.data("url");
            au.search_type = ay.data("type")
        }
        au.trigger = au.search_type == "more" ? "more" : au.trigger;
        if (au.trigger != "enter") {
            w = false
        }
        !!mfwPageEvent && mfwPageEvent("se", "result_click", au)
    };
    new af({
        input: "_j_index_search_input_all",
        submit: "_j_index_search_btn_all",
        additionalClass: "m-search-suggest-index"
    });
    var E = $("#_j_check_in"), ah = $("#_j_check_out"), t = E.find("input"), f = ah.find("input"), I = new g({
        startInput: t,
        endInput: f,
        startDate: R,
        endDate: L,
        minDate: (new ac()).toString("yyyy-MM-dd"),
        maxDate: (new ac()).addDays(365).toString("yyyy-MM-dd"),
        rangeMaxDays: 30,
        isDoublePick: true,
        isCached: m.isCached
    });
    if (m.isCached) {
        t.val(R);
        f.val(L)
    } else {
        t.val("未定");
        f.val("未定")
    }
    E.on("click", function (au) {
        t.datepicker("show")
    });
    ah.on("click", function (au) {
        f.datepicker("show")
    });
    M.Event(I).on("date range picker doublepicked", function (au) {
        if ("" === t.val()) {
            t.val(au.startDate)
        }
        if ("" === f.val()) {
            f.val(au.endDate)
        }
        k.setDate(au.startDate, au.endDate, "homepage")
    });
    var D = $("#_j_index_search_input_hotel"), p = $("#_j_index_search_btn_hotel"), am = $("#_j_index_suggest_list_hotel"), Q = $("#_j_in/dex_search_bar_hotel form");
    var G = new l({
        url: "/hotel/ajax.php?sAction=getSuggestList",
        input: D,
        keyParamName: "keyword",
        listItemHoverClass: "active",
        dataType: "json",
        listContainer: am,
        handleSuggest: function (aw) {
            D.data("droplist")["firstItemHover"] = true;
            var au = $.trim(D.val()), av = X(aw.place, "place", au) + X(aw.station, "station", au) + X(aw.railway_station, "railway_station ", au) + X(aw.airport, "airport", au) + X(aw.scenic, "scenic", au) + X(aw.hotel, "hotel", au);
            if (!av.length) {
                D.data("droplist").hide()
            } else {
                av += '<a class="ssp-more _j_listitem" data-type="more" href="javascript:;" data-url="http://' + al.WWW_HOST + "/hotel/s.php?sKeyWord=" + au + '">查看“<b>' + au + "</b>”更多搜索结果</a>";
                return av
            }
        },
        updateList: function (au) {
            this.listContainer.html(au)
        }
    });

    function X(aE, aH, aD) {
        var az = $("<dl>"), aC, av = [], aG = {
            place: "sicon-place",
            station: "sicon-metro",
            railway_station: "sicon-train",
            airport: "sicon-airport",
            scenic: "sicon-scenic",
            hotel: "sicon-hotel"
        };
        if (!!aE && aE.length > 0) {
            for (var aA = 0; aA < aE.length; aA++) {
                var aw = aE[aA].id, aB = aE[aA].cname_for_display, ay = aE[aA].ename_for_display, aJ = aE[aA].parent_str, aI = aE[aA].type, ax = $('<a href="javascript:;">'), au, aF = (aH === "hotel") ? "" : aE[aA].hotel_num + "家酒店";
                switch (aH) {
                    case"place":
                        if (aI === "mdd") {
                            au = "/hotel/" + aw + "/"
                        }
                        if (aI === "district") {
                            au = "/hotel/area_" + aw + ".html"
                        }
                        break;
                    case"hotel":
                        au = "/hotel/" + aw + ".html";
                        break;
                    default:
                        au = "/hotel/jd" + aw + ".html";
                        break
                }
                ax.attr("data-name", aB + " " + ay);
                if (aD.length > 0) {
                    aB = aB.replace(new RegExp("(" + aD + "{1})", "gi"), "<b>$1</b>");
                    ay = ay.replace(new RegExp("(" + aD + "{1})", "gi"), "<b>$1</b>")
                }
                ax.append('<span class="nums">' + aF + "</span>").append('<h4><span class="skey">' + aB + '</span><span class="en">' + ay + "</span></h4>").append("<p>" + aJ + "</p>");
                aC = $("<div>").append(ax);
                av.push('<dd class="_j_listitem" data-type="hotel" data-url="' + au + '">' + aC.html() + "</dd>")
            }
            az.append('<dt><i class="' + aG[aH] + '"></i></dt>');
            az.append(av.join(""));
            aC = $("<div>").append(az);
            return aC.html()
        } else {
            return ""
        }
    }

    M.Event(G).on("itemselected", function (au) {
        var av = au.item;
        if (av.length) {
            T($.trim(D.val()), "hotel", av, "click");
            location.href = av.data("url")
        } else {
            if (D.parents("form").length) {
                D.parents("form").last().submit()
            } else {
                return
            }
        }
    });
    p.click(function (av) {
        var au = $.trim(D.val());
        if (!!au) {
            T(au, "hotel", "", "search_btn");
            location.href = "/hotel/s.php?sKeyWord=" + encodeURIComponent(au)
        }
    });
    Q.on("submit", function () {
        if (w == false) {
            return false
        }
        T($.trim(D.val()), "hotel", "", "enter")
    });
    var H = $("#_j_index_search_input_mdd"), ak = $("#_j_index_search_btn_mdd"), S = $("#_j_index_suggest_list_mdd"), x = $("#_j_index_search_bar_mdd form");
    var ad = new l({
        url: "/ajax/router.php?sAct=KMdd_StructWebAjax|SearchMdd",
        input: H,
        keyParamName: "sName",
        listItemHoverClass: "active",
        dataType: "json",
        listContainer: S,
        handleSuggest: function (aA) {
            H.data("droplist")["firstItemHover"] = aA.data.exact;
            var aw = $.trim(H.val());
            if (!aA.data.mdd.length) {
                H.data("droplist").hide()
            } else {
                var av = aA.data.mdd, ay = [];
                for (var az = 0, au = av.length, aB = ""; az < au; az++) {
                    var ax = "/travel-scenic-spot/mafengwo/" + av[az].mddid + ".html";
                    ay.push('<li class="_j_listitem" data-type="mdd" data-url="' + ax + '"><i class="sicon-place"></i><span class="skey">' + av[az].name + "</span>" + (av[az].parent ? ("<span>" + av[az].parent + "</span>") : "") + "</li>")
                }
                return ay.join("")
            }
        },
        updateList: function (au) {
            this.listContainer.find(".suggest-list").html(au)
        }
    });
    M.Event(ad).on("itemselected", function (au) {
        var av = au.item;
        if (av.length) {
            T($.trim(H.val()), "mdd", av, "click");
            location.href = av.data("url")
        } else {
            if (H.parents("form").length) {
                H.parents("form").last().submit()
            } else {
                return
            }
        }
    });
    ak.click(function (av) {
        var au = $.trim(H.val());
        if (!!au) {
            T(au, "mdd", "", "search_btn");
            location.href = "/group/s.php?q=" + encodeURIComponent(au)
        }
    });
    x.on("submit", function () {
        if (w == false) {
            return false
        }
        T($.trim(H.val()), "mdd", "", "enter")
    });
    var P = $("#_j_index_search_input_sales"), u = $("#_j_index_search_btn_sales");
    u.click(function (aw) {
        var au = $.trim(P.val());
        if (!!au) {
            var av = {
                keyword: au,
                content_category: "sales",
                searchbox_category: "main_search",
                searchbox_position: "default",
                search_type: "form",
                version: "1.0.0"
            };
            var ax = e.search(av);
            T(au, "sales", "", "search_btn");
            location.href = "/group/s.php?t=sales&q=" + encodeURIComponent(au) + "&seid=" + ax
        }
    });
    var B = $("#_j_traveller_slide"), s = B.find(".slide-ul"), ag = s.children("li"), N = ag.length, c = B.find(".slide-ol li"), C = 300, a = 10000;
    var d = new aa({slideCnt: s, slideList: ag, slideTime: C, indexer: c, indexerOnClass: "active"});
    var F = setInterval(function () {
        if (M.windowFocused) {
            if (d.index < N) {
                d.toIndex(d.index + 1)
            } else {
                d.toIndex(1)
            }
        }
    }, a);
    c.bind("click", function (au) {
        clearInterval(F)
    });
    var o = true, at = 1, Z, an = null, ab = $("._j_activitynav").html();
    var V = new ap({
        container: $("#_j_activitynav"),
        barTPL: '<div class="scrollbar" style="height: auto; position:absolute;right:-10px;top:0;width:4px;height:100px;background-color:#d6d6d6;border-radius:10px;cursor:pointer;z-index:-1"></div>'
    });
    $("._j_activity").click(function (au) {
        au.preventDefault();
        var av = $(au.currentTarget), aw = av.data("type");
        if (aw == at) {
            return
        }
        if (an) {
            an.abort();
            o = true
        }
        at = aw;
        if (at == 1) {
            $("._j_activitynav").html(ab);
            $("._j_activity").removeClass("active");
            av.addClass("active");
            M.Event(V).fire("contentchange");
            V.scroll(0)
        } else {
            if (o && !Z) {
                o = false;
                an = $.get("/indexactivity/ajax.php", {act: "mfwIndexActivity", type: at}, function (ax) {
                    if (ax.data) {
                        Z = ax.data.html;
                        $("._j_activitynav").html(Z);
                        $("._j_activity").removeClass("active");
                        av.addClass("active");
                        M.Event(V).fire("contentchange");
                        V.scroll(0)
                    }
                    o = true
                }, "json")
            } else {
                $("._j_activitynav").html(Z);
                $("._j_activity").removeClass("active");
                av.addClass("active");
                M.Event(V).fire("contentchange");
                V.scroll(0)
            }
        }
    });
    var A = h("dialog/Dialog"), ar;
    $("._j_activitynav").delegate("._j_wx_open", "click", function (av) {
        if (!ar) {
            ar = new A({content: '<div class="wx-mfw-pop"><p>亲爱的蜂蜂，该活动为手机活动</p>快扫描下面的二维码参与吧<p></p><p><img class="_j_new_url" width="150" height="150" src=""></p></div>'});
            ar.show()
        }
        var au = $(av.currentTarget).data("url");
        $("._j_new_url").attr("src", au);
        ar.show()
    });
    var r = $("#_j_sales");
    r.on("mouseenter", ".item", function (aw) {
        var av = $(aw.currentTarget), au = av.find("h3");
        av.addClass("hover");
        if (!av.hasClass("item-qiang")) {
            au.stop().animate({height: 80, marginTop: -35}, {duration: 200})
        }
    }).on("mouseleave", ".item", function (aw) {
        var av = $(aw.currentTarget), au = av.find("h3");
        av.removeClass("hover");
        if (!av.hasClass("item-qiang")) {
            au.stop().animate({height: 40, marginTop: 5}, {duration: 200})
        }
    });
    var aq = $("._j_tn_filter"), y = $("#_j_tn_content");
    aq.each(function (au, av) {
        var aw = $(av);
        new O({
            nav: aw, panel: aw.find(".dropdown-menu ul"), showCallback: function (ax, ay) {
                ay.closest(".tn-dropdown").addClass("dropdown-open")
            }, hideCallback: function (ax, ay) {
                ay.closest(".tn-dropdown").removeClass("dropdown-open")
            }
        })
    });
    (function () {
        if ($("#_js_fengshou").length) {
            $("html").addClass("h100per")
        }
        $("#_js_fsStep2").delegate(".i_know", "click", function (au) {
            $("#_js_fengshou").fadeOut(function () {
                $("html").removeClass("h100per")
            })
        })
    }());
    (function () {
        var au = $("._js_header_lantern");
        au.each(function (aw, ax) {
            var av = $(ax);

            function ay() {
                av.toggleClass("hover")
            }

            av.data("timer", setInterval(ay, 1000));
            av.hover(function () {
                clearInterval(av.data("timer"));
                av.data("timer", null)
            }, function () {
                av.data("timer", setInterval(ay, 1000))
            })
        })
    }())
});
M.define("/js/module/app/Page", function (b, a, d) {
    function c(e) {
        M.mix(this, e);
        this.container = $(this.container);
        if (!this.container.length) {
            this.container = $(document)
        }
        this.init();
        if (!M.isEmptyObject(this.events)) {
            this.setEvents(this.events)
        }
        this.bindEvents()
    }

    M.mix(c.prototype, {
        container: null, events: [], init: $.noop, bindEvents: $.noop, setEvents: function (e) {
            M.forEach(e, $.proxy(function (i, g) {
                var j = g.split(","), h = $.trim(j[0]), f = j.slice(1);
                if (i in this.eventHandlers) {
                    if (f.length) {
                        f = $.trim(f.join(","));
                        this.container.on(h, f, $.proxy(this.eventHandlers[i], this))
                    } else {
                        this.container.on(h, $.proxy(this.eventHandlers[i], this))
                    }
                }
            }, this))
        }, destroy: $.noop, eventHandlers: {}
    });
    d.exports = c
});
M.define("Toggle", function (b, a, c) {
    function d(e) {
        this.context = "body";
        this.trigger = null;
        this.board = null;
        this.handler = $.noop;
        this.triggerHandler = $.noop;
        this.boardHandler = $.noop;
        M.mix(this, e);
        this.inner = false;
        this.init()
    }

    d.prototype = {
        init: function () {
            if (typeof this.trigger === "string") {
                $(this.context).delegate(this.trigger, "click", $.proxy(function (e) {
                    this.triggerHandler(e);
                    this.inner = true
                }, this))
            } else {
                $(this.trigger).click($.proxy(function (e) {
                    this.triggerHandler(e);
                    this.inner = true
                }, this))
            }
            if (typeof this.board === "string") {
                $(this.context).delegate(this.board, "click", $.proxy(function (e) {
                    this.inner = true
                }, this))
            } else {
                $(this.board).click($.proxy(function (e) {
                    this.inner = true
                }, this))
            }
            $(this.context).click($.proxy(function (e) {
                if (!this.inner) {
                    this.handler()
                } else {
                    this.inner = false
                }
            }, this))
        }
    };
    c.exports = d
});
M.closure(function (d) {
    var j = d("/js/module/app/Page"), h = d("Toggle"), c = d("Suggestion"), i = $("#_j_tn_nav"), e = $("._j_gs_input"), a = $("._j_sr_container"), b = $("._j_tag_choose_container"), g = $("._j_gs_container");
    var f = new j({
        container: $("#_j_tn"),
        events: {
            "click,._j_close": "closeSearch",
            "click,._j_gs_item": "chooseItemV2",
            "click,._j_gs_tab a": "reflashTab",
            "click,._j_gs_tag": "reflashTag",
            "click,._j_gs_tag i": "closeTag",
            "click,#_j_tn_nav li a": "switchTabV2"
        },
        init: function () {
        },
        bindEvents: function () {
            var k = new h({
                trigger: "._j_open_search", board: "._j_gs_container", handler: function () {
                    $(this.board).hide()
                }, triggerHandler: function () {
                    $(this.board).show();
                    mfwPageEvent("ginfo", "index:ginfo:search:layer")
                }
            });
            var l = new c({
                input: e,
                url: "/ajax/ajax_any_index.php?sAction=getSearchCity",
                keyParamName: "sKey",
                listItemSelector: "._j_selectedli_item",
                dropListClass: "result",
                listItemHoverClass: "active",
                listContainer: a,
                handleSuggest: function (p) {
                    var o = [];
                    if (p && p.payload && p.payload.data && p.payload.data.length > 0) {
                        var q = p.payload.data;
                        for (var n in q) {
                            o.push('<li class="mss-item _j_selectedli_item" data-objid="' + q[n].id + '" data-type="2" data-name="' + q[n].name + '"><div class="mss-title"><span class="mss-cn"><span class="mss-key">' + q[n].name + "</span>" + q[n].mdd_name + "</span></div></li>")
                        }
                    } else {
                        var m = $.trim(e.val());
                        o.push('<li class="not_found" data-name="ssss"><div class="nf_title">没有找到<span>“' + m + "”</span>!</div></li>")
                    }
                    return o.join("")
                },
            });
            M.Event(l).on("itemselected", $.proxy(function (o) {
                var m = o.item.data("objid");
                var p = o.item.data("type");
                var n = o.item.data("name");
                this.chooseItemV2(p, m, n)
            }, this))
        },
        eventHandlers: {
            reflashTab: function (o) {
                var q = $(o.currentTarget);
                var p = q.parents("li");
                var l = q.data("objid");
                var n = q.data("type");
                if (p.index() === 0) {
                    var m = b.find("a");
                    if (m.length > 0) {
                        l = m.data("objid");
                        n = m.data("type")
                    }
                }
                var k = {objid: l, type: n};
                M.Event.fire("refresh:gs:list", k)
            }, closeTag: function (l) {
                var m = $(l.currentTarget);
                l.stopPropagation();
                var k = m.parents("._j_gs_tag");
                k.remove();
                i.find("li:eq(0) a").trigger("click")
            }, reflashTag: function (n) {
                var o = $(n.currentTarget);
                if (!i.find("li:eq(0)").hasClass("active")) {
                    i.find("li:eq(0) a").trigger("click")
                }
                var l = o.data("objid");
                var m = o.data("type");
                var k = {objid: l, type: m};
                M.Event.fire("refresh:gs:list", k)
            }, switchTabV2: function (k) {
                var m = $(k.currentTarget);
                var l = m.parents("li");
                if (l.hasClass("active")) {
                    return false
                }
                l.siblings("li").removeClass("active");
                l.addClass("active");
                if (l.index() === 0) {
                    b.show()
                } else {
                    b.hide()
                }
            }, closeSearch: function () {
                g.hide()
            }, chooseItemV2: function (n) {
                var o = $(n.currentTarget);
                var k = o.data("objid");
                var m = o.data("type");
                var l = o.data("name");
                this.chooseItemV2(m, k, l)
            }
        },
        chooseItemV2: function (m, k, l) {
            g.find("._j_gs_item").removeClass("on");
            g.find("._j_gs_sn_" + k + "_" + m).addClass("on");
            if (m == 1) {
                mfwPageEvent("ginfo", "index:ginfo:search:tag", ({tag_id: k}))
            } else {
                if (m == 2) {
                    mfwPageEvent("ginfo", "index:ginfo:search:mdd", ({mddid: k}))
                }
            }
            this.closeSearch();
            var n = b.find("a");
            if (n.length && n.data("type") === m && n.data("objid") === k) {
                n.trigger("click");
                return false
            }
            if (n.length > 0) {
                n.remove()
            }
            b.append('<a class="tn-tag _j_gs_tag" data-type="' + m + '" data-objid="' + k + '" href="javascript:void(0);">' + l + "<i></i></a>");
            b.find("a").trigger("click")
        },
        closeSearch: function () {
            g.slideUp()
        },
    })
});
M.define("/im/js/client/ImEventEntity", function (b, a, c) {
    var d = function (i, f, h, g) {
        if (arguments.length > 0) {
            this.e = i
        } else {
            this.e = d.prototype.e
        }
        if (arguments.length > 1) {
            if (!f) {
                this.b = {}
            } else {
                this.b = f
            }
        } else {
            this.b = d.prototype.b
        }
        if (arguments.length > 2) {
            this.t = h
        } else {
            this.t = Date.now() / 1000 >> 0
        }
        if (arguments.length > 3) {
            this.v = g
        } else {
            this.v = d.prototype.v
        }
        this.b.role = {is_c: 1, is_pc: 1}
    };
    d.prototype = {e: "", b: {}, t: 0, v: "1.0"};
    c.exports = d
});
M.define("/im/js/client/ImService", function (b, a, c) {
    var e = b("/im/js/client/ImEventEntity");
    var d = function (f) {
        var g = this;
        if ("IM_CONFIG" in window && "is_debug" in window.IM_CONFIG && window.IM_CONFIG.is_debug) {
            this.isDebug = true
        }
        this.pollingParams = {
            c_uid: 0,
            max_id: 0,
            read_id: 0,
            conn_type: 0,
            conn_typeinfo: null,
            thread_type: 0,
            thread_info: {},
            conn_id: 0
        };
        this.globalParams = {thread_type: "", thread_info: {}};
        if (f) {
        }
        $("body").on("beforeunload", function () {
            window.IM_CONFIG.is_unload = true;
            g.clearPromise()
        })
    };
    d.getInstance = function (f) {
        if (!this._instance) {
            this._instance = new d(f)
        }
        return this._instance
    };
    d.prototype = {
        lastMessageId: 0,
        isDebug: false,
        isLogin: false,
        isLogout: false,
        isLoginTest: false,
        _errorLogs: [],
        _error5XXMaxTimes: 20,
        _error5XXChcekuration: 600,
        _allowUpdateLastReadMsgId: false,
        url: "/rest/im/event/",
        polling_url: "/polling/event/",
        polling_test_url: "/pollingtest/event/",
        conf: {timeout: 60000},
        _promiseList: [],
        alert: function (f, g) {
            if (!g) {
                g = "danger"
            }
            this.broadcast("im_alert", [f, g])
        },
        log: function () {
            if (this.isDebug && ("console" in window)) {
                try {
                    console.log.apply(console, arguments)
                } catch (f) {
                    try {
                        console.log(arguments)
                    } catch (f) {
                    }
                }
            }
        },
        broadcast: function (g, h) {
            g = g.replace(/(\.)/g, "+");
            var f = $(document);
            f.trigger.call(f, g, h)
        },
        on: function (f, g) {
            f = f.replace(/(\.)/g, "+");
            $(document).on(f, g)
        },
        setPollingParams: function (g, f) {
            this.pollingParams[g] = f;
            return this
        },
        setGlobalParams: function (g, f) {
            this.globalParams[g] = f;
            return this
        },
        setConnectionType: function (f, g) {
            this.setPollingParams("conn_type", f);
            this.setPollingParams("conn_typeinfo", g || "")
        },
        setMaxMessageId: function (f) {
            if (this.pollingParams.max_id < f) {
                this.pollingParams.max_id = f
            }
            if (this._allowUpdateLastReadMsgId) {
                if (this.pollingParams.read_id < f) {
                    this.pollingParams.read_id = f
                }
            }
        },
        init: function () {
            var i = Math.floor(Math.random() * 10000000000);
            var f = Date.parse(new Date());
            var k = i.toString() + f;
            this.setPollingParams("conn_id", k);
            this.isLogin = false;
            this.isLogout = false;
            var h = this;
            this.unique = Date.now() + "_" + Math.random();
            var g = 0;
            var j = 0;
            h.on("im_change_group", function (l, m) {
                g = m.gid | 0;
                j = m.chatroomid | 0;
                h.setMaxMessageId(0);
                if (!g) {
                    h.setPollingParams("thread_type", 0);
                    h.setPollingParams("thread_info", {})
                } else {
                    h.setPollingParams("thread_type", 1);
                    h.setPollingParams("thread_info", {mid: g})
                }
            });
            h.on("res.message.new", function (m, l) {
                if (l.message.config.thread_type != h.globalParams.thread_type || l.message.config.thread_key != h.globalParams.thread_key) {
                    return
                }
                h.setMaxMessageId(l.message.id)
            });
            h.on("res.message.g.new res.message.c.new", function (m, l) {
                if ((l.message.g_id | 0) == g || (l.message.g_id | 0) == j) {
                    h.setMaxMessageId(l.message.id)
                }
            });
            h.on("res.message.post res.message.g.post res.message.c.post", function (m, l) {
                if ((l.message.g_id | 0) == g || (l.message.g_id | 0) == j) {
                    h.setMaxMessageId(l.message.id)
                }
            });
            h.on("res.message.history", function (m, l) {
                if (l.message && l.message.length) {
                    if ((l.message[l.message.length - 1].g_id | 0) == g) {
                        h.setMaxMessageId(l.message[l.message.length - 1].id)
                    }
                }
            });
            h.on("res.message.c.history", function (m, l) {
                if (l.message && l.message.length) {
                    if ((l.message[l.message.length - 1].g_id | 0) == j) {
                        h.setMaxMessageId(l.message[l.message.length - 1].id)
                    }
                }
            });
            h.on("im_dialog_before_show", function () {
                h._allowUpdateLastReadMsgId = true
            });
            h.on("im_dialog_before_hide", function () {
                h._allowUpdateLastReadMsgId = false
            });
            this.initUnread()
        },
        initUnread: function () {
            var f = {};
            var j = 0;
            var i = this;
            var g = false;
            var h = 0;
            i.on("im_change_group", function (k, l) {
                h = l | 0
            });
            i.on("im_dialog_before_show", function () {
                g = true
            });
            i.on("im_dialog_before_hide", function () {
                g = false
            });
            i.on("res.group.list", function (l, k) {
                f = {};
                j = 0;
                if (k && k.group && k.group.length) {
                    $.each(k.group, function () {
                        if (this.mid != h || !g) {
                            f[this.mid] = this.unread | 0;
                            j += f[this.mid]
                        }
                    })
                }
                i.broadcast("im_change_unread", j)
            });
            this.on("res.message.new res.message.g.new", function (m, k) {
                if (k.message) {
                    var l = k.message.g_id | 0;
                    if (l != h || !g) {
                        f[l] = (f[l] | 0) + 1;
                        j++;
                        i.broadcast("im_change_unread", j)
                    }
                }
            });
            this.on("im_change_group", function (l, k) {
                if (f.hasOwnProperty(k)) {
                    j -= f[k] | 0
                }
                f[k] = 0;
                i.broadcast("im_change_unread", j)
            });
            this.on("im_dialog_before_show", function () {
                var k = (h | 0).toString();
                if (f.hasOwnProperty(k)) {
                    j -= f[k] | 0
                }
                f[k] = 0;
                i.broadcast("im_change_unread", j)
            })
        },
        open: function () {
            if (!this.isLogin) {
                this.polling()
            }
        },
        opentest: function () {
            if (!this.isLoginTest) {
                this.pollingtest()
            }
        },
        logout: function () {
            this.isLogout = true;
            this.broadcast("im_logout")
        },
        addPromise: function (g) {
            var f = this;
            g.always(function () {
                $.each(f._promiseList, function (h) {
                    if (this == g) {
                        f._promiseList.splice(h, 1)
                    }
                })
            });
            this._promiseList.push(g)
        },
        clearPromise: function () {
            var f = this;
            $.each(f._promiseList, function () {
                this.abort()
            });
            f._promiseList = []
        },
        check5XXErrorLimit: function (k) {
            if (k.status >= 500 && k.status < 599) {
                var f = 1, g = new Date().getTime();
                var l = {status: k.status, time: g};
                for (var h = 0; h < this._errorLogs.length; h++) {
                    var j = this._errorLogs[h];
                    if (!this._error5XXChcekuration || (j.time + this._error5XXChcekuration * 1000 > g)) {
                        if (++f >= this._error5XXMaxTimes) {
                            return false
                        }
                    } else {
                        this._errorLogs.length = h;
                        break
                    }
                }
                this._errorLogs.unshift(l)
            }
            return true
        },
        pollingtest: function () {
            this.isLoginTest = true;
            var f = this;
            var h = $.param({filter: new e("req.polling.test", {})});

            function i(j) {
                setTimeout(function () {
                    f.pollingtest()
                }, 50)
            }

            var g = $.ajax({
                url: f.polling_test_url + "?" + h,
                dataType: "json",
                timeout: f.conf.timeout
            }).success(function (j) {
                if (!j || !("errno" in j)) {
                    i("获取数据失败：" + j)
                } else {
                    try {
                        if (j.errno < 0) {
                            return i(j.error)
                        } else {
                            if (j.errno != 5000) {
                                if (j.data.list && j.data.list.length > 0) {
                                }
                                f.pollingtest()
                            }
                        }
                    } catch (k) {
                        i(k.message);
                        f.log(k)
                    }
                }
            }).error(function (j) {
                if (f.check5XXErrorLimit(j)) {
                    i()
                }
            });
            this.addPromise(g)
        },
        polling: function () {
            this.isLogin = true;
            var f = this;
            var h = $.param({
                filter: new e("req.polling", {
                    user: {c_uid: this.pollingParams.c_uid ? this.pollingParams.c_uid : window.IM_CONFIG.user.uid},
                    message: {max_id: this.pollingParams.max_id, read_id: this.pollingParams.read_id},
                    conn: {type: this.pollingParams.conn_type, typeinfo: this.pollingParams.conn_typeinfo},
                    thread: {type: this.pollingParams.thread_type, info: this.pollingParams.thread_info},
                    session: {conn_id: this.pollingParams.conn_id}
                })
            });

            function i(j) {
                if (window.IM_CONFIG.is_unload) {
                    return
                }
                if (j) {
                    f.alert(j, "danger")
                }
                setTimeout(function () {
                    f.polling()
                }, 50)
            }

            var g = $.ajax({
                url: f.polling_url + "?" + h,
                dataType: "json",
                timeout: f.conf.timeout
            }).success(function (j) {
                if (!j || !("errno" in j)) {
                    i("获取数据失败：" + j)
                } else {
                    try {
                        if (j.errno < 0) {
                            return i(j.error)
                        } else {
                            if (j.data.list && j.data.list.length > 0) {
                                $.each(j.data.list, function () {
                                    f.log("polling", this.e, this.b);
                                    if (this.e == "res.message.new") {
                                        if (this && this.b && this.b.message) {
                                            f.lastMessageId = this.b.message.id || 0
                                        }
                                    }
                                    f.broadcast(this.e, this.b, this.t, this.v)
                                })
                            }
                        }
                        f.polling()
                    } catch (k) {
                        i(k.message);
                        f.log(k)
                    }
                }
            }).error(function (j) {
                if (f.check5XXErrorLimit(j)) {
                    i()
                }
            });
            this.addPromise(g)
        },
        getMulti: function (f, n, j) {
            var l = arguments.callee, k = Date.now() + "_" + Math.random();
            if (!l._ticket) {
                l._ticket = {}
            }
            if (j) {
                l._ticket[f.e] = k
            }
            var h = {};
            if (n) {
                h.data_style = n
            }
            h.filter = f;
            var i = this;
            var g = $.param(h);
            var m = $.getJSON(i.url, g, function (o) {
                if (j) {
                    if (l._ticket[f.e] != k) {
                        i.log("忽略请求:" + f.e + "|" + f.e, f);
                        return
                    }
                }
                if (!o || !("errno" in o)) {
                    i.alert(f.e + "：网络错误1", "danger")
                } else {
                    if (o.errno != 0) {
                        i.alert(o.error, "danger")
                    } else {
                        if (o.data && o.data.list && o.data.list.length > 0) {
                            $.each(o.data.list, function () {
                                i.log("get", this.e, this.b);
                                i.broadcast(this.e, this.b, this.t, this.v)
                            })
                        }
                    }
                }
            }).error(function () {
                i.alert(f.e + "：网络错误2", "danger")
            });
            this.addPromise(m);
            return m
        },
        post: function (j, f, i, g) {
            var k = {update: j};
            if (f) {
                k.post_style = f
            } else {
                k.post_style = "default"
            }
            if (i) {
                k.after_style = i
            } else {
                k.after_style = "default"
            }
            if (g) {
                k.after_decorate = g
            }
            var h = this;
            var l = $.post(h.url, k, function (m) {
                if (!m || !("errno" in m)) {
                    h.alert(j.e + "：网络错误1", "danger")
                } else {
                    if (m.errno != 0) {
                        h.alert(m.error, "danger")
                    } else {
                        if (m.data && m.data.list && m.data.list.length > 0) {
                            $.each(m.data.list, function () {
                                h.log("post", this.e, this.b);
                                h.broadcast(this.e, this.b, this.t, this.v)
                            })
                        } else {
                            if (m.data && m.data.after) {
                                h.broadcast(m.data.after.e, m.data.after.b, m.data.after.t, m.data.after.v)
                            }
                        }
                    }
                }
            }, "json").error(function () {
                h.alert(j.e + "：网络错误2", "danger")
            });
            this.addPromise(l);
            return l
        },
        connectInfo: function () {
            return this.getMulti(new e("req.connect", {
                ptype: {
                    type: this.pollingParams.conn_type,
                    typeinfo: this.pollingParams.conn_typeinfo,
                }, session: {conn_id: this.pollingParams.conn_id}
            }), "", true)
        },
        messageHistory: function (f) {
            if (!f) {
                f = 0
            }
            return this.getMulti(new e("req.message.history", {
                page: {num: 10, msg_id: f},
                ptype: {type: this.pollingParams.conn_type, typeinfo: this.pollingParams.conn_typeinfo}
            }), "", true)
        },
        postMessage: function (h, j) {
            var f = {};
            switch (h) {
                case 1:
                    f.text = j;
                    break;
                case 2:
                    f.image = j;
                    break;
                case 4:
                    f.card = j;
                    break;
                case 7:
                    f.text = j.text;
                    f.data = j.data;
                    break
            }
            var i = {type: h, to_uid: 0, timestamp: Date.now() / 1000 >> 0, content: f};
            var g = this.post(new e("req.message.post", {
                message: i,
                ptype: {type: this.pollingParams.conn_type, typeinfo: this.pollingParams.conn_typeinfo}
            }), "default", "default").success(function (k) {
                if (k && "errno" in k && k.error == 0) {
                    var m = k.data.after.b.message;
                    for (var l in m) {
                        if (m.hasOwnProperty(l)) {
                            i[l] = m[l]
                        }
                    }
                    if ("refresh" in i) {
                        i.refresh()
                    }
                }
            });
            i.f_user = {
                uid: this.pollingParams.c_uid ? this.pollingParams.c_uid : window.IM_CONFIG.user["uid"],
                user_name: window.IM_CONFIG.user["name"],
                user_avatar: window.IM_CONFIG.user["avatar"]
            };
            i.f_user.uid = this.pollingParams.c_uid ? this.pollingParams.c_uid : window.IM_CONFIG.user["uid"];
            i.f_user.user_name = window.IM_CONFIG.user["name"];
            i.f_user.user_avatar = window.IM_CONFIG.user["avatar"];
            this.broadcast("im_send_message", i);
            return g
        },
        postTextMessage: function (f) {
            return this.postMessage(1, f)
        },
        postImageMessage: function (f) {
            return this.postMessage(2, f)
        },
        postCardMessage: function (i, g, h, k, f, j) {
            return this.postMessage(4, {uid: uid, title: i, description: g, image: {id: h, bimg: k}, url: f, from: j})
        },
        getEmotionList: function () {
            return this.getMulti(new e("req.emotion", {}), "", true)
        },
        getMp3: function (g) {
            var f = this;
            return $.getJSON("/rest/im/amr2mp3/" + encodeURIComponent(encodeURIComponent(g)), function (h) {
                f.log("amr2mp3", h)
            })
        },
        groupList: function () {
            return this.getMulti(new e("req.group.list"))
        },
        groupInfo: function (f) {
            return this.getMulti(new e("req.group.info", {id: f}))
        },
        joinGroup: function (f, g) {
            var h = {mid: f};
            if (g && g.length) {
                h.uids = g
            }
            return this.post(new e("req.group.join", h))
        },
        quitGroup: function (h, g, f) {
            var i = {mid: h};
            if (g) {
                i.uid = g
            }
            if (f) {
                i.add_to_blacklist = 1
            }
            return this.post(new e("req.group.quit", i))
        },
        groupUserList: function (f) {
            return this.getMulti(new e("req.group.user.list", {group: {mid: f}}))
        },
        groupMessageHistory: function (g, f) {
            if (!f) {
                f = 0
            }
            return this.getMulti(new e("req.message.g.history", {
                message: {g_id: g},
                page: {num: 10, msg_id: f}
            }), "", true)
        },
        chatroomMessageHistory: function (g, f) {
            if (!f) {
                f = 0
            }
            return this.getMulti(new e("req.message.c.history", {
                message: {g_id: g},
                page: {num: 10, msg_id: f}
            }), "", true)
        },
        joinChatroom: function (f, g) {
            var h = {mid: f};
            if (g && g.length) {
                h.uids = g
            }
            return this.post(new e("req.chatroom.join", h))
        },
        groupApply: function (h, g, f) {
            return this.post(new e("req.group.apply", {mid: h, mdd: g, date: f}))
        },
        postGroupMessage: function (i, l, h) {
            var f = "req.message.g.post";
            var g = {"req.message.g.post": "im_g_send_message"};
            var m = g[f];
            var k = {};
            switch (l) {
                case 1:
                    k.text = h;
                    break;
                case 2:
                    k.image = h;
                    break;
                case 4:
                    k.card = h;
                    break
            }
            var n = {type: l, g_id: i, timestamp: Date.now() / 1000 >> 0, content: k};
            var j = this.post(new e(f, {message: n}), "default", "default").success(function (o) {
                if (o && "errno" in o && o.error == 0) {
                    var r = o.data.after.b.message;
                    for (var q in r) {
                        if (r.hasOwnProperty(q)) {
                            n[q] = r[q]
                        }
                        if ("refresh" in n) {
                            n.refresh()
                        }
                    }
                }
            });
            n.f_user = {
                uid: window.IM_CONFIG.user["uid"],
                user_name: window.IM_CONFIG.user["name"],
                user_avatar: window.IM_CONFIG.user["avatar"]
            };
            n.f_user.uid = window.IM_CONFIG.user["uid"];
            n.f_user.user_name = window.IM_CONFIG.user["name"];
            n.f_user.user_avatar = window.IM_CONFIG.user["avatar"];
            this.broadcast(m, n);
            return j
        },
        postChatroomMessage: function (i, l, h) {
            var f = "req.message.c.post";
            var g = {"req.message.c.post": "im_c_send_message"};
            var m = g[f];
            var k = {};
            switch (l) {
                case 1:
                    k.text = h;
                    break;
                case 2:
                    k.image = h;
                    break;
                case 4:
                    k.card = h;
                    break
            }
            var n = {type: l, g_id: i, timestamp: Date.now() / 1000 >> 0, content: k};
            var j = this.post(new e(f, {message: n}), "default", "default").success(function (o) {
                if (o && "errno" in o && o.error == 0) {
                    var r = o.data.after.b.message;
                    for (var q in r) {
                        if (r.hasOwnProperty(q)) {
                            n[q] = r[q]
                        }
                        if ("refresh" in n) {
                            n.refresh()
                        }
                    }
                }
            });
            n.f_user = {
                uid: window.IM_CONFIG.user["uid"],
                user_name: window.IM_CONFIG.user["name"],
                user_avatar: window.IM_CONFIG.user["avatar"]
            };
            n.f_user.uid = window.IM_CONFIG.user["uid"];
            n.f_user.user_name = window.IM_CONFIG.user["name"];
            n.f_user.user_avatar = window.IM_CONFIG.user["avatar"];
            this.broadcast(m, n);
            return j
        },
        postGroupTextMessage: function (f, g) {
            this.postGroupMessage(f, 1, g)
        },
        postChatroomTextMessage: function (f, g) {
            this.postChatroomMessage(f, 1, g)
        },
        postGroupImageMessage: function (f, g) {
            this.postGroupMessage(f, 2, g)
        },
        postChatroomImageMessage: function (f, g) {
            this.postChatroomMessage(f, 2, g)
        },
        postGroupCardMessage: function (h, l, j, k, i, f, g) {
            this.postGroupMessage(uid, 4, {g_id: h, title: l, description: j, image: {id: k, bimg: i, oimg: f}, url: g})
        },
        postChatroomCardMessage: function (h, l, j, k, i, f, g) {
            this.postChatroomMessage(uid, 4, {
                g_id: h,
                title: l,
                description: j,
                image: {id: k, bimg: i, oimg: f},
                url: g
            })
        },
        getCustomMessage: function (f) {
            return this.getMulti(new e("req.message.custom.get", {data: f}))
        },
        v: 1
    };
    c.exports = d
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
    $.get("", {href: document.location.href, _t: +new Date()}, function (b) {
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