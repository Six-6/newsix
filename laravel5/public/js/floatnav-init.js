(function(){var render=function(){var tmplstr,compiled,model;tmplstr=$('#floatnav-list-tmpl').html();if(!tmplstr||tmplstr.length<0){return;}
compiled=_.template(tmplstr);model={nav_items:[]};$('.galleryblock').each(function(i,category){var $this,anchor,title,children;$this=$(this);anchor=$this.attr('id');title=$this.find('.maintitle').text();children=$this.find('.content .block').filter(function(i){return $(this).attr('id')!==undefined;}).map(function(i){var $this=$(this);return{anchor:$this.attr('id'),title:$this.find('.top .subtitle').text()};});model.nav_items.push({anchor:anchor,title:title,bLongTitle:title.length>7,children:children});});htmlstr=compiled(model);$('#floatnav .floatnav-list').html(htmlstr);};render();var windowWidth;if($(window).width()>1200){windowWidth=1200}else{windowWidth=1000}
$('#floatnav').floatnav({criticalWidth:windowWidth,criticalHeight:200,lefttobody:35});})();