// TODO: add to workflow for minification and inject to preview.html
(function(){

  var scrollY;
  var senderSource = 'http://localhost:8080';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isOpera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
  var isChrome = !!window.chrome && !isOpera;

  function hotLoader(e) {
    if (e.origin !== senderSource) {
      return false;
    }

    var data = JSON.parse(e.data);
    if (data.action !== 'render') {
      return false;
    }

    var container = document.getElementById('preview');
    var frame = container.querySelector('iframe');
    var output = document.createElement('iframe');
    output.sandbox = 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts';
    output.setAttribute('allowfullscreen', true);
    container.appendChild(output);

    var win = output.contentWindow || output.contentDocument.parentWindow;
    var doc = win.document;
    var outputStr = data.output;

    var load = function() {
      if (frame) {
        container.removeChild(frame);
      }

      doc.open();
      doc.write('');
      doc.write(outputStr.toString());
      doc.close();

      if(scrollY) {
        win.scrollTo(0,scrollY);
      }

      win.onscroll = function(){
        scrollY = this.scrollY;
      }
    };

    var onLoaded = function() {
      this.removeEventListener('load', onLoaded);
    };

    output.addEventListener('load', onLoaded, false);

    if (isSafari || isOpera || isChrome) {
      setTimeout(function(){
        load();
      }, 60);
    } else {
      load();
    }

    return false;

  }
  window.addEventListener('message', hotLoader, false);
})();