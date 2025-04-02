function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function clearPassword() {
    setCookie("password", "", -1);
    location.reload();
}
function verify() {
    var password = getCookie("password");
    if (password != "9652530") {
        password = prompt("请输入密码:", "");
        if (password == "9652530") {
            setCookie("password", password, 30);
        } else {
            alert("密码错误！");
            location.reload();
        }
    }
}

verify();
