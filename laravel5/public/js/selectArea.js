;(function(){function AreaSelector(){this.selectBtn=$('#J_AddTrack');this.template=$('#T_SelectAreaDialog').html();this.dialog=null;this._provinceCache=null;this._countryCache=null;this._cityCache={};this._type=0;this._selectedArea=null;this.init();}
AreaSelector.prototype=new Events();$.extend(AreaSelector.prototype,{init:function(){var self=this;this.selectBtn.click(function(){self.openDialog();});$(document).on('click','#J_AddTrackBlank',function(){self.openDialog();});},openDialog:function(){var self=this;this.dialog=$.layer({type:1,title:['新增足迹','background:#5fb859;height:25px;line-height:25px;border:none;color:#fff;border-radius:5px 5px 0 0;'],border:[0],closeBtn:[1,true],btns:1,btn:['添 加'],area:['450px','240px'],page:{html:self.template},success:function(wrap){self.initDialog(wrap);self.initSelect(wrap);},yes:function(index){var obj=self.getSelectedCities();if(obj){self.confirmSelected(obj);}else{$('div.popup-error').show();}}});},confirmSelected:function(selectedList){var self=this;self.trigger('select',selectedList);layer.closeAll();},initDialog:function(wrap){var innerSelect,outerSelect,innerLabel,outerLabel,innerDivs,outerDivs,errorEle,tipEle,labels,selectedAreaNum;wrap=$(wrap);innerSelect=$('#J_SelectAreaIn');innerLabel=innerSelect.children('label');innerDivs=innerSelect.children('div');outerSelect=$('#J_SelectAreaOut');outerLabel=outerSelect.children('label');outerDivs=outerSelect.children('div');errorEle=wrap.find('.popup-error');tipEle=wrap.find('.J_CityShow');labels=wrap.find('label');selectedAreaNum=wrap.find('.J_AreaSelectedNum');innerDivs.show();outerDivs.hide();errorEle.hide();innerLabel.css('color','#666').click(function(){labels.css('color','#999');innerLabel.css('color','#666');outerDivs.hide();innerDivs.show();errorEle.hide();tipEle.html('请选择一个地方');});outerLabel.click(function(){labels.css('color','#999');outerLabel.css('color','#666');innerDivs.hide();outerDivs.show();errorEle.hide();tipEle.html('请选择一个地方');});this.tipEle=tipEle;this.selectedAreaNum=selectedAreaNum;},initSelect:function(wrap){var self=this;var provinceEle,countryEle,proveinceSelect,countrySelect,self,selectedArea;var provinceData;var countryData;var continentData;function getData(id,source){for(var i=0;i<source.length;i++){if(source[i]['id']==id){return source[i];}}
return false;}
self=this;wrap=$(wrap);provinceEle=$('#J_ProvinceSelect');countryEle=$('#J_CountrySelect');selectedArea=[];$('p.area-name').each(function(){var _k=$(this).data('value');selectedArea.push(_k);});proveinceSelect=new Select(provinceEle,{showBlank:true,blankLabel:'请选择',selectFirst:false,disabledList:selectedArea,onchange:function(key,value){self._type='china';self._selectedArea=getData(key,provinceData);if(key=='0'){return;}
dataService.getCity(key,function(data){self.subListData=data;self.buildSubList(data);});}});countrySelect=new Select(countryEle,{showBlank:true,blankLabel:'请选择',selectFirst:false,disabledList:selectedArea,onchange:function(key,value){self._type='foreign';self._selectedArea=getData(key,continentData);if(key=='0'){return;}
dataService.getCountry(key,function(data){self.subListData=data;self.buildSubList(data);});}});dataService.getProvince(null,function(data){provinceData=data;proveinceSelect.load(self.processSelectData(data));});dataService.getContinent(null,function(data){continentData=data;countrySelect.load(self.processSelectData(data));});},setData:function(data){this._tempData=data;},getData:function(){return this._tempData;},buildSubList:function(data){var self=this;var tipEle=this.tipEle;var type=self._type;var html='';var num=0;this.setData(data);this.trigger('beforeLoad',data);data=this.getData();data=self.processSelectData(data);for(var k in data){html+='<span data-code="'+k+'">'+data[k]+'</span>'
num++;}
if(type=='china'&&num<=0){html='<p style="padding-left: 20px;">这里的城市你都添加过了哦~</p>'}else if(type=='foreign'&&num<=0){html='<p style="padding-left: 20px;">这里的国家你都添加过了哦~</p>'}
tipEle.html(html);self.update();var n=0;tipEle.children('span').each(function(){var item=$(this);item.on('click',function(){$('div.popup-error').hide();if(item.hasClass('taseclet')){item.removeClass('taseclet');}else{item.addClass('taseclet');}
self.update();});});},getSelectedCities:function(){var self=this;var tipEle=this.tipEle;var _obj=[];var selectedList=tipEle.find('.taseclet');var dataList=self.subListData;function getData(id){for(var i=0;i<dataList.length;i++){if(dataList[i]['id']==id){return dataList[i];}}
return false;}
if(selectedList.length){selectedList.each(function(){var _this=$(this);var _key=_this.data('code');_obj.push(getData(_key));});self._selectedArea.list=_obj;self._selectedArea.type=self._type;return self._selectedArea;}else{return false;}},update:function(){this.selectedAreaNum.text(this.tipEle.find('.taseclet').length);},processSelectData:function(source){var data={};var item;for(var i=0;i<source.length;i++){item=source[i];data[item['id']]=item['name'];}
return data;}});window.AreaSelector=AreaSelector;})();