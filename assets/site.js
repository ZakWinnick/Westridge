(function(){
var go=document.getElementById('q-go');
if(go){go.addEventListener('click',function(e){e.preventDefault();var p=new URLSearchParams();[['from','q-from'],['to','q-to'],['depart','q-date']].forEach(function(m){var v=document.getElementById(m[1]).value;if(v)p.set(m[0],v);});var q=p.toString();location.href=go.getAttribute('href')+(q?'?'+q:'');});}
if(document.getElementById('form')){new URLSearchParams(location.search).forEach(function(v,k){var el=document.getElementById(k);if(el)el.value=v;});}
})();
