<template>
    <lqb-content>
      <el-form ref="form" :rules="rules" :model="forms" label-width="100px">
        <el-form-item label="原密码：" prop="loginPassword">
          <el-col :sm="12">
            <el-input type="password" v-model="forms.loginPassword" placeholder="请输入原密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="新密码：" prop="modifyPassword">
          <el-col :sm="12">
            <el-input type="password" v-model="forms.modifyPassword" placeholder="请输入新密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPassword">
          <el-col :sm="12">
            <el-input type="password" v-model="forms.confirmPassword" placeholder="请再输入一遍新密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">确认修改</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </lqb-content>
</template>
<script>
import { setModifyPassword } from '@/api/authenticate'
import { mapMutations, mapState } from 'vuex'
import { loginOut } from "@/utils/";
  export default {
    name: 'password',
    data () {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.forms.modifyPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        forms: {
          loginPassword: null,
          modifyPassword: null,
          confirmPassword: null,
          verify: null
        },
        rules: {
          loginPassword: [
            { required: true, message: '请输入原密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
          modifyPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    props:{},
    computed: {},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let RequestParams = {
              id: 1,
              loginPassword: this.forms.loginPassword,
              modifyPassword: this.forms.modifyPassword,
              confirmPassword: this.forms.confirmPassword
            }
            setModifyPassword(RequestParams).then( (res) => {
                // sucess
                if( res.code == 100 ) {
                  this.$alert('密码修改成功,请重新登录!', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                      loginOut()
                    }
                  })
                } else {
                  this.$message({
                    message: res.message,
                    type: 'error'
                  })
                }
            }, (error) => {
                // failure
                this.$message({
                  message: '网络异常,请重试!',
                  type: 'error'
                })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components: {

    }
  }
</script>
<style scoped>

</style>
