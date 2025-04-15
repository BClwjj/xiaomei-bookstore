// JavaScript Document

window.onload = function () {
    //1、顶部的焦点图切换
    function hotChange() {
        var current_index = 0;
        var timer = window.setInterval(autoChange, 3000);
        var button_li = document.getElementById("button").getElementsByTagName("li");
        var pic_li = document.getElementById("banner_pic").getElementsByTagName("li");
        for (var i = 0; i < button_li.length; i++) {
            button_li[i].onmouseover = function () {
                if (timer) {
                    clearInterval(timer);
                }
                for (var j = 0; j < pic_li.length; j++) {
                    if (button_li[j] == this) {
                        current_index = j;
                        button_li[j].className = "current";
                        pic_li[j].className = "current";
                    } else {
                        pic_li[j].className = "pic";
                        button_li[j].className = "but";
                    }
                }
            }
            button_li[i].onmouseout = function () {
                timer = setInterval(autoChange, 1000);
            }
        }
        function autoChange() {
            ++current_index;
            if (current_index == button_li.length) {
                current_index = 0;
            }
            for (var i = 0; i < button_li.length; i++) {
                if (i == current_index) {
                    button_li[i].className = "current";
                    pic_li[i].className = "current";
                } else {
                    button_li[i].className = "but";
                    pic_li[i].className = "pic";
                }
            }
        }
    }
    hotChange();


    var dbox = document.getElementById("dbox");
    function changeSkin(className) {
        dbox.className = className;
    }
    // 为每个皮肤选项绑定事件
    document.getElementById("an1").addEventListener("click", function () {
        changeSkin("ba");
    });
    document.getElementById("an2").addEventListener("click", function () {
        changeSkin("bb");
    });
    document.getElementById("an3").addEventListener("click", function () {
        changeSkin("bc");
    });
    document.getElementById("an4").addEventListener("click", function () {
        changeSkin("bd");
    });
    document.getElementById("an5").addEventListener("click", function () {
        changeSkin("be");
    });

 
    // 广告图片的路径
    var imgUrl = "./images/product_01.gif";
    // 广告链接的地址
    var linkUrl = "./index.html";
    // 创建一个浮动广告的 div 元素
    var adDiv = document.createElement("div");
    adDiv.style.position = "fixed";
    adDiv.style.right = "20px";
    adDiv.style.top = "90%";
    adDiv.style.transform = "translateY(-50%)";
    adDiv.style.border = "1px solid #ccc";
    adDiv.style.backgroundColor = "#f8f9fa";
    adDiv.style.borderRadius = "5px";
    adDiv.style.overflow = "hidden";
    // 创建一个图像元素并设置其属性
    var img = document.createElement("img");
    img.src = imgUrl;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    adDiv.style.zIndex = "9999";
    // 创建一个链接元素并设置其属性
    var link = document.createElement("a");
    link.href = linkUrl;
    link.target = "_blank";
    link.appendChild(img);
    // 将图像元素添加到浮动广告的 div 元素中
    adDiv.appendChild(link);
    // 将浮动广告的 div 元素添加到页面的 body 元素中
    document.body.appendChild(adDiv);
    // 定义一个函数来实现浮动广告的动画效果
    function floatAd() {
        adDiv.style.right = parseInt(adDiv.style.right) + 1 + "px";
        if (parseInt(adDiv.style.right) > window.innerWidth - adDiv.offsetWidth) {
            adDiv.style.right = "20px";
        }
        setTimeout(floatAd, 10);
    }
    floatAd();
}


