define([],function(){function a(a,b){function t(a,b,c){function e(a){var e=b=="className"?a.className:a.getAttribute(b);if(e){if(!c)return!0;if(d.test(e))return!0}return!1}var d=RegExp("(?:^|\\s+)"+c+"(?:\\s+|$)"),f=-1,g,h=-1,i=[];while(g=a[++f])e(g)&&(i[++h]=g);return i}var c=a,d=document,e=/^#[\w\-]+/,f=/^([\w\-]+)?\.([\w\-]+)/,g=/^([\w\*]+)$/,h=/^([\w\-]+)?\[([\w]+)(=(\w+))?\]/,b=b==undefined?document:typeof b=="string"?d.getElementById(b.substr(1,b.length)):b;if(e.test(c))return d.getElementById(c.substr(1,c.length));if(b.querySelectorAll){if(b.nodeType==1){var i=b.id,j=b.id="__$$__";try{return b.querySelectorAll("#"+j+" "+c)}catch(k){}finally{i?b.id=i:b.removeAttribute("id")}}return b.querySelectorAll(c)}if(f.test(c)){var l=c.split("."),m=l[0],n=l[1],o,p,q=[];if(b.getElementsByClassName){var r=b.getElementsByClassName(n);if(m){for(var s=0,o=r.length;s<o;s++)r[s].tagName.toLowerCase()==m&&q.push(r[s]);return q}return r}return p=b.getElementsByTagName(m||"*"),t(p,"className",n)}if(g.test(c))return b.getElementsByTagName(c);if(h.test(c)){var l=h.exec(c),p=b.getElementsByTagName(l[1]||"*");return t(p,l[2],l[4])}}return a})