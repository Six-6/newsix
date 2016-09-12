/**
*
* General Pager With Ajax Click Event
* 
* $wuhaotian @2015 Feb 16
* modify: $ouyangyibin @2015-11-5 13:26:26
*
**/
(function($) {
    $.fn.initPager = function(config) {
        /* validation */
        if (!config.showPage)
            return; /* illegal arguments */
        /* assign pager dom elements into object */
        config.o = $(this);
        if (config.o.length < 1)
            return;
        if (config.o.attr('data-pager-inited') || config.o.attr('data-pager-inited') == "true")
            return; /* pager already inited */
        config.o.attr('data-pager-inited', true); /* init pager */
        config.util = {
            /* internal util functions and globes*/
            ajaxEvent: false /* initial state of ajax call is false */
        };
        /* add dom structure wrapper */
        config.o.attr('data-curpage', 1);
        config.o.append('<div class="page-bottom"></div>');
        var $inner = config.o.find('.page-bottom');
        /* if pages less or equal to 3 */
        if (config.totalPage <= 5) {
            /* 平铺 */
            for (var i = 0; i < config.totalPage; i++) {
                var offsetClass = '';
                if (i == 0)
                    offsetClass = 'page-cur firstshowing';
                if (i == (config.showPage - 1))
                    offsetClass = 'lastshowing';
                $inner.append('<a class="pager-item ' + offsetClass + '" href="javascript:void(0);" data-page="' + parseInt(i + 1) + '">' + parseInt(i + 1) + '</a>');
            }
            ;
            var $all = $inner.find('a');
            $all.click(function(e) {
                var $clickedPage = $(this);
                if ($clickedPage.hasClass('page-cur')) {
                    return;
                }
                var clickedPage = parseInt($clickedPage.attr('data-page'));
                /* AJAX */
                config.ajax({
                    page: clickedPage,
                    /* ajax success */
                    callback: function(data) {
                        /* style updates */
                        $all.removeClass('page-cur');
                        $inner.find('[data-page="' + clickedPage + '"]').not('.page-next').not('.page-prev').addClass('page-cur');
                        if ($clickedPage.hasClass('page-prev') || $clickedPage.hasClass('page-next'))
                            $clickedPage.addClass('page-cur');
                    }
                });
            });
            return;
        }
        if (config.showPage < 3)
            return;
        /* prev control */
        $inner.append('<a class="page-prev" href="javascript:void(0)" data-page="0">上一页</a>');
        /* add pages dom */
        if (config.showPage >= config.totalPage) {
            config.showPage = config.totalPage - 1;
        }
        /* add 1 */
        $inner.append('<a class="page-first" href="javascript:void(0)" data-page="1" style="display: none;">1</a>');
        /* add page break (front) */
        $inner.append('<span class="page-break" style="display: none;">...</span>');
        for (var i = 0; i < config.showPage; i++) {
            var offsetClass = '';
            if (i == 0)
                offsetClass = 'page-cur firstshowing';
            if (i == (config.showPage - 1))
                offsetClass = 'lastshowing';
            $inner.append('<a class="pager-item ' + offsetClass + '" href="javascript:void(0);" data-page="' + parseInt(i + 1) + '">' + parseInt(i + 1) + '</a>');
        }
        ;
        /* add page break if needed */
        if ((config.showPage + 1) < config.totalPage) {
            $inner.append('<span class="page-break">...</span>');
        }
        /* add last page */
        $inner.append('<a class="page-last" href="javascript:void(0)" data-page="' + config.totalPage + '">' + config.totalPage + '</a>');
        /* next control */
        $inner.append('<a class="page-next" href="javascript:void(0)" data-page="2">下一页</a>');
        /* page click effects */
        var $pager = $inner.find('.pager-item'),
                $first = $inner.find('.page-first'),
                $prev = $inner.find('.page-prev'),
                $next = $inner.find('.page-next'),
                $last = $inner.find('.page-last'),
                $all = $inner.find('a');

        $all.click(function(e) {
            var $clickedPage = $(this);
            if ($clickedPage.hasClass('page-cur') && !$clickedPage.hasClass('page-next') && !$clickedPage.hasClass('page-prev')) {
                return;
            }
            var clickedPage = parseInt($clickedPage.attr('data-page'));
            if( !( clickedPage >= 1 && clickedPage <= config.totalPage ) ){
                return ;
            }
            /* AJAX */
            config.ajax({
                page: clickedPage,
                /* ajax success */
                callback: function(data) {
                    /* dom updates */
                    if ($clickedPage.hasClass('lastshowing') || $inner.find('[data-page="' + clickedPage + '"]').hasClass('lastshowing')) {
                        if ((config.totalPage - clickedPage) > config.showPage - 2) {
                            var start = clickedPage - 1;
                            $pager.each(function(i, ele) {
                                $(ele).attr('data-page', start);
                                $(ele).text(start);
                                start += 1;
                            });
                        } else if ((config.totalPage - clickedPage) <= config.showPage - 2) {
                            if (config.totalPage - 1 != clickedPage) {
                                var start = parseInt($inner.find('.firstshowing').attr('data-page')) + (config.totalPage - clickedPage - 1);
                                $pager.each(function(i, ele) {
                                    $(ele).attr('data-page', start);
                                    $(ele).text(start);
                                    start += 1;
                                });
                            }
                        }
                    } else if ($clickedPage.hasClass('firstshowing') || $inner.find('[data-page="' + clickedPage + '"]').hasClass('firstshowing')) {
                        if (clickedPage > 1) {
                            var start = clickedPage - 1;
                            $pager.each(function(i, ele) {
                                $(ele).attr('data-page', start);
                                $(ele).text(start);
                                start += 1;
                            });
                        }
                    } else if ( clickedPage == 1 ) {    // 点击 第 1 页
                        $first.hide();
                        if( $first.next().hasClass('page-break') ){
                            $first.next().hide();
                        }
                        var start = 1;
                        $pager.each(function(i, ele){
                            $(ele).attr('data-page', start);
                            $(ele).text(start);
                            start += 1;
                        });
                    } else if ( clickedPage == config.totalPage ) {     // 点击 最后 config.totalPage 页
                        $first.show();
                        if( $first.next().hasClass('page-break') ){
                            $first.next().show();
                        }
                        var start = config.totalPage - config.showPage;
                        $pager.each(function(i, ele){
                            $(ele).attr('data-page', start);
                            $(ele).text(start);
                            start += 1;
                        });
                    }
                    /* update prev and next */
                    var prev = clickedPage - 1;
                    if ($prev.length >= 1) {
                        $prev.attr('data-page', prev);
                        /*if (prev <= 0) {
                            $prev.hide();
                        }
                        else {
                            $prev.show();
                        }*/
                    }
                    var next = clickedPage + 1;
                    if ($next.length >= 1) {
                        $next.attr('data-page', next);
                        /*if (next > config.totalPage) {
                            $next.hide();
                        }
                        else {
                            $next.show();
                        }*/
                    }
                    /* style updates */
                    $all.removeClass('page-cur');
                    $inner.find('[data-page="' + clickedPage + '"]').not('.page-next').not('.page-prev').addClass('page-cur');
                    if ($clickedPage.hasClass('page-prev') || $clickedPage.hasClass('page-next'))
                        $clickedPage.addClass('page-cur');
                    /* page break (back) update */
                    if ($pager.last().attr('data-page') == parseInt(config.totalPage - 1)) {
                        if( $last.prev().hasClass('page-break') ){
                            $last.prev().hide();
                        }
                        // $inner.find('.page-break').hide();
                    } else {
                        if( $last.prev().hasClass('page-break') ){
                            $last.prev().show();
                        }
                        // $inner.find('.page-break').show();
                    }
                    /* page break/first (front) update */
                    if( parseInt($pager.first().attr('data-page')) == 1 ){
                        $first.hide();
                        if( $first.next().hasClass('page-break') ){
                            $first.next().hide();
                        }
                    }else{
                        if( $first.next().hasClass('page-break') ){
                            $first.next().show();
                        }
                        $first.show();
                    }
                }
            });
        });

    };


    /* content 
     $(document).ready(function() {
     // init pager 
     $('[data-init="pager"]').initPager({
     totalPage : 2, // total pages 
     showPage: 4,  //total pages showing between prev and last page 
     ajax : function(params){// ajax function / function running by clicking the pages 
     var data = {
     something : 'is data'
     }
     // ajax success 
     params.callback(data);
     }
     });
     });*/
})(jQuery)

/* 
 <link rel="stylesheet" href="http://img4.tuniucdn.com/f/20141213/ui-lib/demo/pub_mod/pub_mod.css">
 
 <div class="pagination" data-curpage="1">
 <div class="page-bottom">
 <a href="/u/1" data-page="1" class="page-prev">上一页</a>
 <a href="/u/1" data-page="1">1</a>
 <a class="page-cur" data-page="2">2</a>
 <a href="/u/3" data-page="3">3</a>
 <a href="/u/4" data-page="4">4</a>
 <span class="page-break">...</span>
 <a href="/u/220" data-page="10">10</a>
 <a href="/u/3" data-page="3" class="page-next">下一页</a>
 </div>
 </div>
 
 */