//  // 设置结束时间（示例：2024 年 6 月 11 日 15 时 30 分 0 秒）
//  const endTime = new Date(2024, 5, 11, 15, 30, 0);

//  function updateCountdown() {
//    const now = new Date();
//    const timeLeft = endTime - now;

//    if (timeLeft <= 0) {
//      document.getElementById("countdown").innerHTML = "时间到！";
//      return;
//    }

//    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
//    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//    document.getElementById("countdown").innerHTML = `${hours} 时 ${minutes} 分 ${seconds} 秒`;
//  }

//  setInterval(updateCountdown, 1000);

var endTime = new Date('2024-10-5 23:30:00');
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