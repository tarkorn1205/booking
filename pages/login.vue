<template>
  <div>
    <v-card
      elevation="0"
      outlined
      style="
        margin-top: 175px;
        width: 700px;
        height: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
        background: #ffffff;
        box-shadow: 1px 1px 6px rgba(114, 55, 238, 0.25);
      "
    >
      <img src="@/assets/logo.png" style="margin-left: 30%; width: 40%; margin-top: 7%;" />
      <h4 class="not-margin" style="text-align: center;">
        <b>เข้าสู่ระบบจองห้องเรียนออนไลน์</b>
      </h4>
      <div
        class="con-form"
        style="
          width: 70%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <vs-input
          color="primary:#5b3cc4"
          class="user"
          v-model="user"
          placeholder="ชื่อผู้ใช้งาน"
        >
          <template #icon>
            <i class="bx bxs-user"></i>
          </template>
        </vs-input>
        <vs-input
          color="primary:#5b3cc4"
          class="pass"
          v-model="pass"
          type="password"
          placeholder="รหัสผ่าน"
        >
          >
          <template #icon>
            <i class="bx bxs-lock-open"></i>
          </template>
        </vs-input>

        <div class="flex" style="color: success; margin-left: 55px">
          <vs-checkbox success v-model="option2">
            เข้าสู่ระบบค้างไว้
          </vs-checkbox>
        </div>
      </div>
      <div
        class="footer-dialog"
        style="
          width: 56%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <vs-button block @click="login()"> ล็อคอิน </vs-button>
        <div class="new" style="text-align: center">
          <NuxtLink to="/register">สร้างบัญชีใหม่</NuxtLink>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'loginad',
  data() {
    return {
      user: '',
      pass: '',
      active: '',
      com: false,
      option2: false,
    }
  },
  methods: {
    async login() {
      const payload = {
        username: this.user,
        password: this.pass,
      }

      try {
        const response = await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push({ path: '/', redirect: 'actualRoute' })
      } catch (err) {

        this.$swal.fire({
          position: 'openNotification(null)',
          icon: 'error',
          title: 'รหัสไม่ถูกต้อง',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    },
  },
}
</script>
<style>
.mx-auto {
  margin-left: 40%;
  margin-top: 15%;
}
.button {
  margin-left: 97%;
  margin-top: -2%;
}
.welcome {
  text-align: center;
  padding-top: 0%;
}
.user {
  padding-left: 50px;
}
.pass {
  padding-left: 50px;
}
.vs-input-parent {
  margin-top: 12px;
  width: 100%;
}
input {
  width: 90% !important;
}
.vs-switch {
  width: 23%;
  margin-left: 50px;
  margin-top: 10px;
}
</style>
