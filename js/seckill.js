

var endTime = new Date('2025-06-28 12:00:00');
var endSeconds = endTime.getTime();
var d = h = m = s = 0;
setInterval(function () {
  var nowTime = new Date();
  var n = parseInt((endSeconds - nowTime.getTime()) / 1000);
  d = parseInt(n / 86400);
  h = parseInt((n / 3600) % 24);
  m = parseInt((n / 60) % 60);
  s = parseInt(n % 60);
  document.getElementById('d').innerHTML = d;
  document.getElementById('h').innerHTML = h;
  document.getElementById('m').innerHTML = m;
  document.getElementById('s').innerHTML = s;
}, 1000); 
