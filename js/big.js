window.onload = function () {
    var small_div = document.getElementById("small_div");
    var move_div = document.getElementById("move_div");
    var big_div = document.getElementById("big_div");
    var small_img = document.getElementById("small_img");
    var big_img = document.getElementById("big_img");

    // 放大镜的框跟随鼠标移动
    small_div.onmousemove = function (e) {
        var x = e.pageX - small_div.offsetLeft - move_div.offsetWidth / 2;
        var y = e.pageY - small_div.offsetTop - move_div.offsetHeight / 2;

        // 处理左右边界
        if (x > small_div.offsetWidth - move_div.offsetWidth) {
            x = small_div.offsetWidth - move_div.offsetWidth;
        } else if (x < 0) {
            x = 0;
        }
        // 处理上下边界
        if (y > small_div.offsetHeight - move_div.offsetHeight) {
            y = small_div.offsetHeight - move_div.offsetHeight;
        } else if (y < 0) {
            y = 0;
        }
        // 放大镜移动
        move_div.style.left = x + "px";
        move_div.style.top = y + "px";

        // 被放大的图片移动，放大镜右移时图片左移
        // x : 450 = ? : 800
        big_img.style.left = -x * big_img.offsetWidth / small_div.offsetWidth + "px";
        big_img.style.top = -y * big_img.offsetHeight / small_div.offsetHeight + "px";
    }

    // 鼠标进入图片区域时才显示要放大的内容和放大镜的框 
    small_div.onmouseover = function () {
        big_div.style.display = "block";
        move_div.style.display = "block";
    }
    // 鼠标离开图片区域时隐藏要放大的内容和放大镜的框
    small_div.onmouseout = function () {
        big_div.style.display = "none";
        move_div.style.display = "none";
    }
}
