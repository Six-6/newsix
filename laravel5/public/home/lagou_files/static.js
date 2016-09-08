(function(){
    var url = "http://www.lagou.com/utrack/static";
    var ajaxListener = new Object();
    ajaxListener.tempOpen = XMLHttpRequest.prototype.open;
    ajaxListener.tempSend = XMLHttpRequest.prototype.send;
    ajaxListener.callback = function () {
      // this.method :the ajax method used
      // this.url    :the url of the requested script (including query string, if any) (urlencoded) 
      // this.data   :the data sent, if any ex: foo=bar&a=b (urlencoded)
      send(this.url)
    }
    XMLHttpRequest.prototype.open = function(a,b) {
      if (!a) var a='';
      if (!b) var b='';
      ajaxListener.tempOpen.apply(this, arguments);
      ajaxListener.method = a;  
      ajaxListener.url = b;
      if (a.toLowerCase() == 'get') {
        ajaxListener.data = b.split('?');
        ajaxListener.data = ajaxListener.data[1];
      }
    }
    XMLHttpRequest.prototype.send = function(a,b) {
      if (!a) var a='';
      if (!b) var b='';
      ajaxListener.tempSend.apply(this, arguments);
      if(ajaxListener.method.toLowerCase() == 'post')ajaxListener.data = a;
      ajaxListener.callback();
    }
    function send(u){
      if(u==null || u ==""){
        u = window.location.href;
      }
      u = encodeURIComponent(encodeURIComponent(u));
      var r = document.referrer;
      r = encodeURIComponent(encodeURIComponent(r));
      (new Image).src = url+"?u="+u+"&r="+r+"&_t="+new Date().getTime();  
    }
    send(window.location.href);
})(window);

