$(function(){var addrList=new AddrList();var sumSpot=$('.J-SumSpot');var sumCity=$('.J-SumCity');var sumProvince=$('.J-SumProvince');var sumCountry=$('.J-SumCountry');addrList.bind('add',updateAmount);addrList.bind('remove',updateAmount);function updateAmount(){var data=getAmount();sumCountry.html(data.country);sumProvince.html(data.province);sumCity.html(data.city);sumSpot.html(data.spot);}
function getAmount(){var country=0;var province=0;var city=0;var spot=0;if(addrList.china.length){country++;}
$.each(addrList.china,function(){province++;$.each(this.children,function(){city++;$.each(this.children,function(){spot++;});});});$.each(addrList.foreign,function(){$.each(this.children,function(){country++;$.each(this.children,function(){spot++;});});});return{country:country,province:province,city:city,spot:spot}}
addrList.loadAddr();var areaSelector=new AreaSelector();var loading=false;areaSelector.bind('select',function(data){if(loading){return;}
loading=true;var csrf_token=$('#csrf_token').val();$.post("/yii.php?r=person/personpage/ajaxAddFootprint",{"obj":data,csrf_token:csrf_token},function(response){loading=false;if(window.isIndex){location.href=footprint_url;}else{$('.tuc-track-blank').remove();$('#chinaEare p.tuc-track-title').show();$('#chinaEare #J_China').show();$('#foreignEare p.tuc-track-title').show();$('#foreignEare #J_Foreign').show();addrList.addArea(data);}
if(response.csrf_token!=''){$('#csrf_token').val(response.csrf_token);}},'json');});areaSelector.bind('beforeLoad',function(data){var temp=[];var china=addrList.china;var foreign=addrList.foreign;for(var i=0;i<data.length;i++){var item=data[i];var flag=true;for(var h=0;h<china.length;h++){var area=china[h];var index=area.getAddrIndex(item.id);if(index!==-1){flag=false;break;}}
for(var h=0;h<foreign.length;h++){var area=foreign[h];var index=area.getAddrIndex(item.id);if(index!==-1){flag=false;break;}}
if(flag){temp.push(item);}}
areaSelector.setData(temp);});})