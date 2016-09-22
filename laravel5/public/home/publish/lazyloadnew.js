(function(a) {
    a.fn.lazyload = function(b) {
        var c = {threshold: 0,failure_limit: 0,event: "scroll",mulevent: "scroll click",effect: "show",container: window,skip_invisible: true};
        if (b) {
            if (null !== b.failurelimit) {
                b.failure_limit = b.failurelimit;
                delete b.failurelimit
            }
            a.extend(c, b)
        }
        var d = this;
        var mslater = "";
        if (0 == c.event.indexOf("scroll")) {
            a(c.container).bind(c.mulevent, function(g) {
                var e = 0;
                if(mslater){
                    clearTimeout(mslater);
                }
                mslater = setTimeout(function(){
                    d.each(function() {
                        if (c.skip_invisible && !a(this).is(":visible")) {
                            return
                        }
                        if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {
                        } else {
                            if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                                a(this).trigger("appear")
                            } else {
                                //if (++e > c.failure_limit) {
                                    //return false
                                //}
                            }
                        }
                    });
                    var f = a.grep(d, function(h) {
                        return !h.loaded
                    });
                    d = a(f)
                },150) 


                
            })
        }




        this.each(function() {
            var e = this;
            e.loaded = false;
            a(e).one("appear", function() {
                if (!this.loaded) {
                    a("<img />").bind("load", function() {
                        a(e).hide().attr("src", a(e).attr("data-src"))[c.effect](c.effectspeed);
                        e.loaded = true
                    }).attr("src", a(e).attr("data-src"))
                }
            });
            if (0 != c.event.indexOf("scroll")) {
                a(e).bind(c.event, function(f) {
                    if (!e.loaded) {
                        a(e).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - d.threshold
    };
    a.rightoffold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {"below-the-fold": function(b) {
            return a.belowthefold(b, {threshold: 0,container: window})
        },"above-the-fold": function(b) {
            return !a.belowthefold(b, {threshold: 0,container: window})
        },"right-of-fold": function(b) {
            return a.rightoffold(b, {threshold: 0,container: window})
        },"left-of-fold": function(b) {
            return !a.rightoffold(b, {threshold: 0,container: window})
        }})
})(jQuery);