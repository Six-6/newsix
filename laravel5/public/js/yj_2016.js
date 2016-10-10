$(function() {
    yj_home.initShow();
    yj_home.tabClick();
    yj_home.searchAjax();
    yj_home.bindEvent();
    yj_home.getTourListAjax(0, 1);
    // var totalPage = Math.ceil($render_data.count);
    // if (totalPage >= 1) {
    //     yj_home.initPagers(1, 0, totalPage);
    //     $('.list-img').attr('target', '_blank');
    //     $('.list-img').attr('rel', 'nofollow');
    //     $('.page-bottom a').attr("rel", "nofollow");
    // }
    JPlaceHolder.init();
    yj_home.searchAjax();
});
var yj_home = {
    initShow: function() {
        $('.yj-tab li').eq(0).addClass('current');
        $('.slide-bg').eq(0).hide();
        $('.interview-img-show').eq(0).fadeIn();
        $('.interview-list li .interview-des').eq(0).slideDown();
        $('.interview-list li').find('.interview-name').eq(0).addClass('interview-name-hover');
        $('.yj-list').eq(0).fadeIn();
        $('.commen-loadding').hide();
        $('.input_search').attr('autocomplete', 'off');
    },
    tabClick: function() {
        $('.yj-tab li').each(function(index, el) {
            $(this).click(function(event) {
                if ($(this).attr('class') == "current") {} else {
                    $('.yj-tab li').removeClass('current')
                    $(this).addClass('current');
                    $('.yj-list').hide();
                    $('[data-init]').hide();
                    $('.commen-loadding').show();
                    $('.pager').remove();
                    $('.yj-list-show').after("<div class='pager pagination' data-init='pager' style='display:none'></div>" + "<div class='pager pagination' data-init='pager' style='display:none'></div>" + "<div class='pager pagination' data-init='pager' style='display:none'></div>");
                    yj_home.getTourListAjax(index);
                }
            });
        });
        $('.interview-list li').each(function(index, el) {
            $(this).hover(function() {
                if ($(this).find(".interview-des").is(":visible") == false) {
                    $('.interview-img-show').fadeOut('slow').eq(index).fadeIn('slow');
                    $('.interview-list li').find('.interview-des').slideUp().eq(index).slideDown();
                    $('.interview-list li').find('.interview-name').removeClass('interview-name-hover');
                    $('.interview-list li').find('.interview-name').eq(index).addClass('interview-name-hover');
                }
            });
        });
    },
    searchAjax: function() {
        var search_form = $('#yjsearch_form');
        var input = $('.J_input');
        var submit = $('.J_sub_btn');
        submit.on('click', function() {
            if (/^\s*$/.test(input.val())) {
                input.val('');
            } else {
                search_form.submit();
            }
        });
    },
    getTourListAjax: function(type, page) {
        var self = this;
        $show = $('.yj-list').eq(type);
        $.ajax({
            url: "http://www.tp5.com/?callback=?",
            data: {'api': 'note', 'page': page, 'list_rows': 5, 'token': 'e71057d434bb441ffe516f58583cec7b'},
            dataType: "json",
            type: 'get',
            cache: false,
            success: function(response) {
                // var totalPage = response && Math.ceil(response.data.pageCount);
                // self.initPagers(1, type, totalPage);
                self.renderList(response.result, $show);
                $('.page-bottom a').attr("rel", "nofollow");
            }
        });
    },
    renderList: function(result, $show) {
        var count = result.data.length;
            data = result.data;
            html = '';
            page_bottom = '';

        for (var i = 0; i < count; i++) {
            html += '<li><a class="list-img" href="' + details_url + '?id=' + data[i].tt_id + '" target="_blank" rel="nofollow">';
            html += '<img src="' + data[i].t_img + '" alt="">';
            html += '<div class="list-recommend gl-jh"></div></a>';
            html += '<div class="list-show">';
            html += '<a href="' + details_url + '?id=' + data[i].tt_id + '" target="_blank" rel="nofollow">';
            html += '<div class="list-name">' + data[i].t_title + '</div>';
            html += '<div class="list-des">' + data[i].s_desc + '</div></a>';
            html += '<div class="list-auther">';
            html += '<div class="list-auther-left">';
            html += '<a href="' + details_url + '?id=' + data[i].tt_id;
            html += '<img src="' + data[i].path + '" alt="">';
            html += '<div class="list-auther-name">' + data[i].name + '</div></a>'; //
            html += '<div class="list-scan">' + data[i].t_browse + ' <i></i>&nbsp;</div>';
            html += '<div class="list-comment">' + data[i].t_commentint + ' <i></i>&nbsp;</div></div>';
            html += '<div class="list-auther-right ding_yes" id="dingAjax" data-id="10106094"><i></i>';
            html += '<span>' + data[i].t_zambia + '</span>';
            html += '</div></div></div></li>';
        }

        if (html) {
            // 总页数
            var pages = Math.ceil(result.total/5);

            page_bottom += '<div class="page-bottom">';
            page_bottom += '<a class="page-prev" href="javascript:void(0)" data-page="' + (result.current_page - 1) + '" rel="nofollow">上一页</a>';
            
            // 页码 1 和省略号
            if (result.current_page > 4) {
                page_bottom += '<a class="page-first" href="javascript:void(0)" data-page="1" style="display: black;" rel="nofollow">1</a>';
                page_bottom += '<span class="page-break" style="display: black;">...</span>';
            } else {
                page_bottom += '<a class="page-first" href="javascript:void(0)" data-page="1" style="display: none;" rel="nofollow">1</a>';
                page_bottom += '<span class="page-break" style="display: none;">...</span>';
            }

            // 中间页码
            for (var i = 1; ; i++) {
                if (i > pages || i > 4) {
                    break;
                }
                page_bottom += '<a class="pager-item " href="javascript:void(0);" data-page="' + i + '" rel="nofollow">' + i + '</a>';
            }

            // 末尾页码 和省略号
            if (result.current_page > 4) {
                page_bottom += '<span class="page-break" style="display: black;">...</span>';
                page_bottom += '<a class="page-last" href="javascript:void(0)" data-page="' + pages + '" rel="nofollow">' + pages + '</a>';
            } else {
                page_bottom += '<span class="page-break" style="display: none;">...</span>';
            }
            page_bottom += '<a class="page-next" href="javascript:void(0)" data-page="' + (result.current_page * 1 + 1) + '" rel="nofollow">下一页</a>';
            
            $('.page-bottom').html('');
            $('.page-bottom').append(page_bottom);
            $('.page-bottom .pager-item').first().addClass('firstshowing');
            $('.page-bottom .pager-item').last().addClass('lastshowing');
            $('.page-bottom .pager-item').eq(result.current_page - 1).addClass('page-cur');

            $('.page-bottom a').click(function() {
                var page = $(this).attr('data-page');
                yj_home.getTourListAjax(0, page);
            });

            $('.commen-loadding').hide();
            $show.html('');
            $show.append(html);
            $('html, body').animate({
                scrollTop: 720
            }, 1000);
            $show.fadeIn(2000);
        };
    },
    likes: function(sel, id, clsName, op) {
        $.ajax({
            url: "/travels/index/ajax-like",
            dataType: "json",
            type: "get",
            data: {
                tid: id,
                op: op
            },
            cache: false,
            success: function(response) {
                if (!response.success) {
                    if (response.msg === "请先登录") {
                        window.location.href = 'http://www.tuniu.com/u/login?origin=' + location.href;
                    }
                } else {
                    var $index = $(sel).children('span').eq(0);
                    if (op == 1) {
                        if ($index.text() == "为TA加牛") {
                            $index.text('1');
                        } else {
                            $index.text(parseInt($index.text()) + 1);
                        }
                        $(sel).addClass("ding_no");
                        $(sel).addClass(clsName);
                        $(sel).removeClass("ding_yes");
                        $(sel).append('<p class="likes-word">+1</p>');
                        $(".likes-word").animate({
                            bottom: 90
                        }, 'slow', function() {
                            $(this).remove()
                        });
                    } else {
                        if ($index.text() == 1) {
                            $index.text('为TA加牛');
                        } else {
                            $index.text(parseInt($index.text()) - 1);
                        }
                        $(sel).removeClass(clsName);
                        $(sel).addClass("ding_yes");
                        $(sel).removeClass("ding_no");
                        $(sel).append('<p class="likes-word">已取消</p>');
                        $(".likes-word").animate({
                            bottom: 90
                        }, 'slow', function() {
                            $(this).remove()
                        });
                    }
                }
            }
        });
    },
    initPagers: function(page, index, totalCout) {
        var self = this,
            $show = $('.yj-list').eq(index);
        $('[data-init="pager"]').hide().eq(index).show();
        $('[data-init="pager"]').eq(index).initPager({
            totalPage: totalCout,
            showPage: 5,
            ajax: function(params) {
                var _page = params.page
                $(window).scrollTop(600);
                $show.hide();
                $('.commen-loadding').show();
                $.ajax({
                    url: "http://www.tp5.com/?api=note&callback=?",
                    dataType: "json",
                    type: 'get',
                    data: {
                        sortType: index + 1,
                        page: _page,
                        limit: 10
                    },
                    cache: false,
                    success: function(response) {
                        params.callback(response.data);
                        self.renderList(response.data, $show);
                        $show.fadeIn('fast');
                    }
                });
            }
        });
    },
    bindEvent: function() {
        $(document).on("click", ".list-auther-right", function() {
            var id = $(this).attr("data-id");
            if ($(this).hasClass("dingLikes")) {
                yj_home.likes(this, id, "dingLikes", 2)
            } else {
                yj_home.likes(this, id, "dingLikes", 1)
            }
        }).on("mouseover", ".list-auther-right", function() {
            if ($(this).hasClass("ding_yes")) {
                $(this).removeClass("ding_yes").addClass("ding_no");
            }
        }).on("mouseout", ".list-auther-right", function() {
            if (!$(this).hasClass("dingLikes")) {
                $(this).removeClass("ding_no").addClass("ding_yes");
            }
        })
    }
};
var JPlaceHolder = {
    _check: function() {
        return 'placeholder' in document.createElement('input');
    },
    init: function() {
        if (!this._check()) {
            this.fix();
        }
    },
    fix: function() {
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this),
                txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({
                position: 'relative',
                zoom: '1',
                border: 'none',
                background: 'none',
                padding: 'none',
                margin: 'none'
            }));
            var pos = self.position(),
                h = self.outerHeight(true),
                paddingleft = self.css('padding-left');
            var holder = $('<div></div>').text(txt).css({
                fontSize: "18px",
                float: "left",
                position: 'absolute',
                left: pos.left,
                top: pos.top + "7px",
                height: h,
                lienHeight: h,
                paddingLeft: paddingleft,
                color: '#aaa'
            }).appendTo(self.parent());
            $(".J_sub_btn").remove();
            self.parent().append("<input class='search_btn J_sub_btn' type='button' />");
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if (!self.val()) {
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};