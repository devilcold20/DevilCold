function kiemtra2() {
    var a = document.getElementById("thongtin").value;
    var b = document.getElementById("phone").value;
    var u = document.getElementById("email").value;
    var u1 = document.getElementById("matkhau").value;
    var u2 = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/; // Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên. Nếu không nhập 0 thì còn 9 số.
    var u4 = u.indexOf("@");
    var u5 = u.lastIndexOf(".");
    var u6 = u.indexOf(" ");

    if(u==""||u1==""|| a=="" || b==""){
    alert("Vui lòng nhập dầy đủ thông tin");
    return false;
    }
    if((u4 == -1) || (u4 == 0) || (u5 == -1) &&(u6 == -1)){
    alert("email không hợp lệ")
    return false;
    }
    if (!u2.test(b)){
    alert("Số điện thoại ko hợp lệ ")
    return false;
    }
    else{
    alert("Đăng kí thành công")
    return false;
    }
}
function kiemtrapass() {
    var strength = document.getElementById('matkhau');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}