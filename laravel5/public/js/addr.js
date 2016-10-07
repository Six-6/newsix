;(function(){var render=template.compile($('#T_Addr').html());var addSpotDialogTpl=$('#T_SelectSpotDialog').html();var more=$('.J_AMore');function Addr(data,map,isChinese){BaseAddr.call(this,data,map);this.anchorIcon='http://img2.tuniucdn.com/site/file/deyonUserCenter/images/area-icon.png';this._data=data;this.isChinese=isChinese;this.init();}
function temp(){}
temp.prototype=BaseAddr.prototype;Addr.prototype=new temp();$.extend(Addr.prototype,{init:function(){var self=this;var data=self._data;var ele=$(render(data));var wrap=ele.find('.J_Spots');var addSpotBtn=ele.find('.J_AddSpot');var delAddrBtn=ele.find('.J_AddrDelete');var eleTit=ele.find('.tuc-area-title');var fold=ele.find('.J_Fold');var comload=$('.tuc-track-right');var trackWrap=$('#J_TrackWrap');var chinaWrap=$('#J_China');var foreignWrap=$('#J_Foreign');var chinaContent=$('#chinaEare').find('p:eq(0)');var foreignContent=$('#foreignEare').find('p:eq(0)');var spotList,selectSpotNumEle;this.ele=ele;this.wrap=wrap;this.fold=fold;function getSpots(time){dataService.getSpots({id:data.id,times:time},function(data){$.each(data,function(index,data){var spot=$('<span data-code="'+data.id+'"/>');spot.text(data.name);spot.click(function(){if(spot.hasClass('taseclet')){spot.removeClass('taseclet');}else{spot.addClass('taseclet');}
updateSelectedNum();});spot.data('SpotData',data);spot.appendTo(spotList);});});}
function searchSpots(k){dataService.searchSpots({id:data.id,k:k},function(data){spotList.empty();$.each(data,function(index,data){var spot=$('<span data-code="'+data.id+'"/>');spot.text(data.name);spot.click(function(){if(spot.hasClass('taseclet')){spot.removeClass('taseclet');}else{spot.addClass('taseclet');}
updateSelectedNum();});spot.data('SpotData',data);spot.appendTo(spotList);updateSelectedNum();});});}
function updateSelectedNum(){selectSpotNumEle.text(spotList.find('.taseclet').length);}
ele.attr('id',(self.isChinese?'chinaCity':'foreignCity')+self._data.id);addSpotBtn.click(function(){var sumSpot=parseInt($(this).parent('div .area-details').find('.J-CountSpot').html());var sumSpotDom=$(this).parent('div .area-details').find('.J-CountSpot');$.layer({type:1,title:['请选择您要添加的<span style="color:#5fb859">'+data.name+'</span>景点：','background:none;height:0;border:none;color:#666666;margin-top: 16px;font-size:12px;margin-left:10px;'],border:[0],closeBtn:[0,true],btns:1,btn:['添 加'],area:['450px','255px'],page:{html:addSpotDialogTpl},success:function(wrap){var time=0;var searchFlag=false;wrap=$(wrap);spotList=wrap.find('.J_SpotList');selectSpotNumEle=wrap.find('.J_SpotSelectedNum');getSpots(time);time++;var searchInput=wrap.find('.J_SearchSpot');var nScrollHight=0;var nScrollTop=0;var nDivHight=spotList.height();var finished=true;spotList.scroll(function(e){if(searchFlag){return;}
nScrollHight=$(this)[0].scrollHeight;nScrollTop=$(this)[0].scrollTop;if(finished&&parseInt(nScrollTop+nDivHight+13)>=nScrollHight){getSpots(time);time++;}});wrap.find('.J_SearchBtn').on('click',function(){var _val=searchInput.val();if(typeof _val!=undefined){searchSpots(_val);searchFlag=true;time=0;}else{searchFlag=false;}})},yes:function(){var selected=[];var sendadd=[];spotList.find('.taseclet').each(function(){var data=$(this).data('SpotData');sendadd.push({id:data.id});selected.push(data);});var addSpotUrl='/person/addSpot';var last=JSON.stringify(sendadd);$.post(addSpotUrl,{json:last,person_poi:data.id},function(data){if(data){self.addSpots(selected);sumSpotDom.html(sumSpot+data);comload.find('.J_SpotComment').each(function(){var Val=$.trim($(this).attr('data-name'));var len=Val.replace(/[^\x00-\xff]/g,"01").length;if(len>80){Val=Val.slice(0,80).replace(/([^x00-xff])/g,"$1a").slice(0,80).replace(/([^x00-xff])a/g,"$1")+'...';}
$(this).html(Val)});}else{alert('添加失败！');}},'json');layer.closeAll();},no:function(index){layer.close(index);}});});if(data.list){$.each(self._data.list,function(index,addr){var wrap=self.wrap;self.addSpot(addr);if(index>1&&!window.isIndex){ele.addClass('list-show');wrap.css('max-height','318px');fold.toggle(function(){$(this).html('隐藏<em class="tn_fontface">&#xe620;</em>');wrap.css('max-height','100%');},function(){$(this).html('展开<em class="tn_fontface">&#xe61f;</em>');wrap.css('max-height','318px');});}});}
eleTit.hover(function(){ele.addClass('hover');},function(){ele.removeClass('hover');});fold.hover(function(){$(this).addClass('fold-hover');},function(){$(this).removeClass('fold-hover');});delAddrBtn.click(function(){$.layer({type:1,title:['友情提示','background:#5fb859;height:25px;line-height:25px;border:none;color:#fff;border-radius:5px 5px 0 0;'],border:[0],closeBtn:[1,true],btns:2,btn:['确 认','取 消'],area:['253px','132px'],page:{html:'<p class="changetips">删除城市/国家将会同时删除下面的足迹，确认删除么？</p>'},yes:function(index){dataService.delSpot({id:data.id},function(data){if(data){if(window.isIndex){location.href=footprint_url;}else{if(self.isChinese){var len=$('#chinaCity'+self.id).parents('div.tuc-area-province').find('.J_City').length;var parentId=$('#chinaCity'+self.id).parents('div.tuc-area-province').attr('id');if(len<=1){$('#chinaCity'+self.id).parents('div.tuc-area-province').hide();$('#J_InnerList').find('a[href="#'+parentId+'"]').remove();}}else{$('#J_OuterList').find('a[href="#foreignCity'+self.id+'"]').remove();}
self.trigger('remove',self);var vLen=$(".tuc-track-right").find('.area-details').length;if(vLen<=0){chinaContent.hide();foreignContent.hide();chinaWrap.hide();foreignWrap.hide();trackWrap.append($('#T-Blank').html());}}}});layer.close(index);},no:function(index){layer.close(index);}});});this.addAnchor({x:data.x,y:data.y});this.addCityInfoWindow();this.update();},getSpotIndex:function(id){var spots=this.children;for(var i=0;i<spots.length;i++){if(spots[i]['id']===id){return i;}}
return-1;},isEmpty:function(){return this.wrap.children().length===0;},addSpot:function(data){var self=this;var wrap=this.wrap;var spot;if(this.getSpotIndex(data.id)===-1){spot=new Spot(data,this.map,this)
this.children.push(spot);if(window.isIndex){if(window.totalSpotAmount<4){this.wrap.append(spot.getEle());if(window.totalSpotAmount>2){more.show();}else{more.hide();}
window.totalSpotAmount++;}}else{this.wrap.prepend(spot.getEle());}
self.trigger('add',spot);spot.bind('remove',function(){self.removeSpot(this.id);self.trigger('remove');});}
this.update();},addSpots:function(list){var self=this;if(list){dataService.addSpots(list,function(data){if(data){if(window.isIndex){location.href=footprint_url;}else{$.each(list,function(index,spot){self.addSpot(spot);});}}});}},removeSpot:function(id){var index=this.getSpotIndex(id);var spot;if(index!==-1){spot=this.children[index];this.children.splice(index,1);spot.destory();this.trigger('remove',spot);}
if(this.children.length<3){this.updateFold();}
this.update();},update:function(){if(this.isEmpty()){this.ele.addClass('empty');}else{this.ele.removeClass('empty');}},updateFold:function(){this.ele.removeClass('list-show').addClass('list-second');},deduplication:function(data){var spots=this.children;var temp=[];if(spots.length===0){return data;}
for(var i=0;i<data.length;i++){var item=data[i];var flag=true;for(var h=0;h<spots.length;h++){if(spots[h].id==item.id){flag=false;break;}}
if(flag){temp.push(item);}}
return temp;},destory:function(){var children=this.children;this.removeAnchorFromMap();this.ele.remove();for(var i=0;i<children.length;i++){children[i]&&children[i].destory();}
this.ele=null;this.anchor=null;this.children=null;}});window.Addr=Addr;})();