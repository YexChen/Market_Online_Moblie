

   function doValidate() {
            var zhi = document.getElementById("phoneNum").value;
            var reg = "^1[3|4|5|8][0-9]\\d{8}$";
            var re = new RegExp(reg);
            if (re.test(zhi)) {
               //alert('正确');
                return true;
            }
            else {
                 alert('请输入正确的手机号！');
                return false;
            }
        }
