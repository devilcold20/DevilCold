function kiemtra() {
  var u = document.getElementById("email").value;
  var u1 = document.getElementById("matkhau").value;
  var u3 = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
  var u4 = u.indexOf("@");
  var u5 = u.lastIndexOf(".");
  var u6 = u.indexOf(" ");
  if(u==""&&u1==""){
  alert("Vui lòng nhập dầy đủ thông tin");
  return false;
  }
  if((u4 == -1) || (u4 == 0) || (u5 == -1) &&(u6 == -1)){
  alert("email không hợp lệ")
  return false;
  }
  if(u1== ""){ 
  alert("Vui lòng nhập mật khẩu!");
  return false;
  }
  if(!u3.test(u1.value)){
  alert("Tối thiểu tám ký tự, ít nhất một chữ cái và một số")
  return false;
  }
  }
