;(function(){var CityMarkerIcon='http://img4.tuniucdn.com/img/20140826/gonglue_v2/map_points.png';var PointMarkerIcon='http://img4.tuniucdn.com/img/20140826/gonglue_v2/map_points.png';var infoWindow;function BaseAddr(addr,map){this.anchor=null;this.id=addr.id;this.mapInfo=addr.map||null;this.introInfo=addr.info||null;this.map=map;this.children=[];this.marker=null;this.ele=null;this.template='';this.anchorIcon='';this.wrap=null;}
BaseAddr.prototype=new Events();$.extend(BaseAddr.prototype,{init:function(){if(this.mapInfo){this.addAnchor(this.mapInfo);}
if(this.introInfo){this.addInfo(this.introInfo);}},addAnchor:function(data){var self=this;var point,iconSize,iconPoint,imgIcon,marker;if(data){self.mapInfo=data;}else{data=self.mapInfo;}
if(!data){return;}
if(parseInt(data.x)===0){data.x='1000000000000';}
if(parseInt(data.x)===0){data.y='-1000000000000';}
if(typeof google!="undefined"){point=new google.maps.LatLng(data.x,data.y);iconSize=new google.maps.Size(21,28);iconPoint=new google.maps.Point(0,0);imgIcon=new google.maps.MarkerImage(self.anchorIcon,iconSize,iconPoint);marker=new google.maps.Marker({'position':point,'icon':imgIcon,'draggable':false,animation:google.maps.Animation.DROP});self.anchor=marker;self.addAnchorToMap();}},addCityInfoWindow:function(){if(typeof google!="undefined"){var data=this._data;var anchor=this.anchor;anchor.addListener('mouseover',function(){var html=template('T_CityMarker',data);if(infoWindow!=null){infoWindow.close();infoWindow=new google.maps.InfoWindow({content:html})}else{infoWindow=new google.maps.InfoWindow({content:html})}
infoWindow.open(this.map,anchor);});}},addInfoWindow:function(){if(typeof google!="undefined"){var data=this._data;var anchor=this.anchor;anchor.addListener('mouseover',function(){var html=template('T_Marker',data);if(infoWindow!=null){infoWindow.close();infoWindow=new google.maps.InfoWindow({content:html})}else{infoWindow=new google.maps.InfoWindow({content:html})}
infoWindow.open(this.map,anchor);});}},getAnchor:function(){return this.anchor;},addAnchorToMap:function(){this.anchor.setMap(this.map);},removeAnchorFromMap:function(){this.anchor&&this.anchor.setMap(null);},addInfo:function(data){},getEle:function(){return this.ele;},getData:function(){return this._data;},destory:function(){this.removeAnchorFromMap();this.ele.remove();this.ele=null;this.anchor=null;}});window.BaseAddr=BaseAddr;})();