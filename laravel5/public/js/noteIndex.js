$(function(){$('.slide-card > a,.center-card > a').on({'mouseenter':function(){$(this).find('.pwhat-text').removeClass('phide');},'mouseleave':function(){$(this).find('.pwhat-text').addClass('phide');}});$('.product-list').on({'mouseenter':function(){var _this=$(this);if(_this.find('a.product-bg').length>0){_this.find('a.product-bg').stop().animate({height:'100%'},'300',function(){_this.find('a.product-more').addClass('product-more-hover');});}},'mouseleave':function(){var _this=$(this);if(_this.find('a.product-bg').length>0){_this.find('a.product-bg').stop().animate({height:'0'},'300',function(){_this.find('a.product-more').removeClass('product-more-hover');});}}});$('.mouth-card').on({'mouseenter':function(){var _this=$(this);_this.find('a.mouth-bag,a.mouth-bg').stop().animate({height:'216px'},'300',function(){_this.find('a.mouth-bag').removeClass('indexicon').addClass('mouth-show');_this.find('div.mouth-detail').fadeIn();})},'mouseleave':function(){var _this=$(this);_this.find('a.mouth-bag,a.mouth-bg').stop().animate({height:'80px'},'300',function(){_this.find('a.mouth-bag').removeClass('mouth-show').addClass('indexicon');_this.find('div.mouth-detail').fadeOut();})}});$('.mouth-page').find('a').on({'mouseenter':function(){var _this=$(this);if(_this.hasClass('mouth-select'))return;_this.addClass('mouth-hover');},'mouseleave':function(){var _this=$(this);_this.removeClass('mouth-hover');}})})