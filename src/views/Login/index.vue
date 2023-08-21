<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import type { FormRules, FormInstance } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import { validatePassword } from '@/utils'
interface RuleForm {
  username: string
  password: string
}
const accountInfo = reactive<RuleForm>({
  username: 'admin',
  password: '111111',
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 7, message: 'Length should be 3 to 7', trigger: 'blur' },
  ],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})
const ruleFormRef = ref<FormInstance>()
const userStore = useUserStore()
const login = async (formEl: FormInstance | undefined) => {
  //验证账号密码是否正确
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const { username, password } = accountInfo
      userStore.login({ username, password })
    } else {
      ElMessage({
        message: `error submit!,${fields}`,
        type: 'error',
      })
    }
  })
}
</script>

<template>
  <div class="bg-img">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12">
        <el-form
          ref="ruleFormRef"
          class="login-box"
          :model="accountInfo"
          :rules="rules"
          status-icon
        >
          <h1 class="login-title">E-Commerce-Tms</h1>
          <el-form-item prop="username">
            <el-input
              v-model="accountInfo.username"
              class="w-50 m-2"
              placeholder="Type something"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="accountInfo.password"
              class="w-50 m-2"
              type="password"
              placeholder="Please input password"
              show-password
              :prefix-icon="Lock"
              @keyup.enter.native="login(ruleFormRef)"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="w-50 m-4 button"
              type="primary"
              @click="login(ruleFormRef)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.el-message {
  left: 0 !important;
}
.bg-img {
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  .el-row {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    padding: 40px;
    border-radius: 15px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    .login-title {
      padding: 20px 0;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: rgb(48, 49, 51);
    }
    .button {
      width: 100%;
    }
  }
}
</style>
