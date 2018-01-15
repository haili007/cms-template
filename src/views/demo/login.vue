<template>
<div class="body" :style="'height:'+height+'px'">
  <div class="login-model">
			<div class="container">
				<div class="logo-title">
					<center>
						<h2 class="logo-box">友奢</h2></center>
					<center>
						<h2 class="title-box">
						欢迎登录后台管理系统
					</h2></center>
				</div>
				<form class="form-horizontal border login-bgcolor login-main" onsubmit="return false">
					<div class="form-group">
						<label for="mobile" class="col-sm-3 control-label">用户名：</label>
						<div class="col-sm-9">
							<input type="text" v-model="form.loginId" name="usernamme" maxlength='11' class="form-control" id="mobile" placeholder="请输入您的手机号">
						</div>
					</div>
					<div class="form-group">
						<label for="pwd" class=" col-sm-3 control-label">密码：</label>
						<div class="col-sm-9">
							<input  v-model="form.loginPassword" type="password" name="passrowd" class="form-control" id="passord" placeholder="请输入您的密码">
						</div>
					</div>
					<div class="form-group">
            <label for="pwd" class=" col-sm-3 control-label"></label>
						<div class="col-sm-9 text-right sos">
							<a @click="forgot" data-toggle="modal" data-target="#myModal" id="emergencyLogin">忘记密码</a>
              <label style="float:right;color:12px;color:#666666"><input v-model="isRecodePhone" style="vertical-align: middle;margin-right:5px" type="checkbox" />是否记住用户名</label>
						</div>
					</div>
					<div class="form-group">
                        <label for="pwd" class=" col-sm-3 control-label"></label>
						<div class="col-sm-offset-3 col-sm-9">
							<center><input @click="submit" type="button" class="btn btn-default form-control loginBtn" id="submit" value="登 录">
							</center>
						</div>
						<input type="hidden" value="" class="auth_token">
					</div>

				</form>
				<div class="login-footer">
					<div class=" col-sm-12">
						<center>
							<p>版权所有：杭州轹城信息技术有限公司</p>
							<p>如有问题请联系我们4008003336</p>
						</center>
					</div>
				</div>
			</div>

		</div>
 </div>       
</template>

<script>
import { login } from "@/api/index";
import { mapState, mapMutations } from "vuex";
import { auth, addEventHandler } from "@/utils/";
import { Menu } from "@/store/contain";
import { setStore } from "@/utils/storage"
export default {
  data() {
    return {
      height: document.documentElement.clientHeight,
      send: false,
      isRecodePhone: true,
      form: {
        loginPassword: "",
        loginId: ""
      }
    };
  },
  mounted() {
    this.form.loginId = this.recodePhone;
    document.getElementById("passord").onkeydown=(e)=>{
      if(this.$route.path.indexOf("login")>=0){
        if (e.code == "Enter") {
          this.submit();
        }
      }
    }
  },
  computed: {
    ...mapState(["recodePhone"])
  },
  methods: {
    validate() {
      if (!/1\d{10}/.test(this.form.loginId)) {
        this.$message.error("请填正确的手机号码。");
        return false;
      }
      if (!this.form.loginPassword) {
        this.$message.error("请输入密码");
        return false;
      }
      if (this.form.loginPassword.length < 6) {
        this.$message.error("密码长度不能小于6位");
        return false;
      }
      return true;
    },
    submit() {
     
      if (this.send) {
        this.$message.error("请勿重复点击");
        return false;
      }
      if (this.validate()) {
        this.send = true;
        login(this.form, data => {
          this.send = false;
          if (data.code == 100) {
            this.RECORD_USERINFO({} && data.data && data.data.userInfo);
            this.RECORD_PHONE(this.form.loginId);
            let menu = auth.queryMenu();
            if (menu.length <= 1) {
              this.$message.error("您还没有任何权限");
            }
            for (let i = 0; i < Menu.length; i++) {
              if(Menu[i].id == menu[1]){
                setStore("authPath",Menu[i].path);
                this.$router.push(Menu[i].path)
              }
            }
            // console.log(menu);
          } else {
            this.$message.error(data.msg);
          }
        });
      }
    },
    forgot() {
      this.$alert("请联系技术");
    },
    ...mapMutations(["RECORD_USERINFO", "RECORD_PHONE"])
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.form-group {
  margin-bottom: 15px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .control-label {
  padding-top: 7px;
  margin-bottom: 0;
  text-align: right;
}
.col-sm-3 {
  width: 25%;
}
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9 {
  float: left;
}
.col-sm-9 {
  width: 75%;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}
.login-main input {
  height: 40px;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}

.form-group::after {
  content: " ";
  display: block;
  height: 0px;
  width: 100%;
  clear: both;
}

.col-sm-4 {
  width: 33.33333333%;
  float: left;
}

.body {
  height: 100%;
  width: 100%;
  background: url("../../assets/img/login_bg.png.png") no-repeat top center;
  background-size: auto;
  font-size: 14px;
}
.body * {
  box-sizing: border-box;
}

.pwdinput {
  width: 144px;
}
.login-model {
  width: 300px;
  background: red;
}

.logo-title {
  position: absolute;
  /*overflow: hidden;*/
  left: 50%;
  top: 80px;
  transform: translateX(-50%) translateY(0%);
  -webkit-transform: translateX(-50%) translateY(0%);
  -moz-transform: translateX(-50%) translateY(0%);
  -ms-transform: translateX(-50%) translateY(0%);
}

.logo-box {
  background: url(../../assets/img/loginlogo.jpg) no-repeat center;
  width: 200px;
  height: 85px;
  background-size: 100%;
  text-indent: -999em;
}

.title-box {
  font-size: 24px;
  color: #003399;
  font-weight: 700;
}

.login-main {
  width: 518px;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 62px;
  padding-right: 62px;
  border-radius: 6px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 282px;
  transform: translateX(-50%) translateY(0%);
  -webkit-transform: translateX(-50%) translateY(0%);
  -moz-transform: translateX(-50%) translateY(0%);
  -ms-transform: translateX(-50%) translateY(0%);
  border: 1px solid #ffffff;
}

.login-main input {
  height: 40px;
}

.login-main input[type="checkbox"] {
  height: auto;
}

.login-bgcolor {
  background: rgba(255, 255, 255, 0.8);
}

.getPassword {
  color: #ffffff;
  background: #ff6633;
  border: 1px solid #ff3300;
}

.getPassword:hover {
  color: #ffffff;
  background: #ff6633;
  border: 1px solid #ff3300;
  opacity: 0.8;
}

.bar3 {
  height: 40px;
}

.loginBtn {
  border-radius: 6px;
  background: #6633ff;
  color: #ffffff;
}

.loginBtn:hover {
  opacity: 0.8;
  background: #6633ff;
  color: #ffffff;
}

.login-footer {
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 675px;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
}

/*.wrapper {
		padding: 1rem 10%;
		margin: 2rem auto;
		min-width: 300px;
		max-width: 1200px;
		width: 70%;
	}*/

.bar {
  /*margin: 50px;*/
  height: 40px;
}

.form-center {
  position: absolute;
  overflow: hidden;
  width: 100%;
  /*height: 400px;*/
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
}

.border {
  border: 1px solid #dddddd;
}

.m-top {
  margin-top: 50px;
}

.p-padding {
  padding: 50px;
}

.sos {
  margin-top: 7px;
}
.myModalLogin {
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
}
.btn-min {
  pointer-events: none;
  cursor: not-allowed;
  background: #cccccc;
  border: 1px solid #999999;
}
</style>
