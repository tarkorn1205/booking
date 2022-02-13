<template>
  <div>
    <!-- <vs-dialog not-close prevent-close v-model="active" style="z-index: 1">
      <template #header>
        <h4 class="not-margin"><b>เข้าสู่ระบบจองห้องเรียนออนไลน์</b></h4>
      </template>
      <div class="con-form">
        <vs-input
          color="#7d33ff"
          class="user"
          v-model="user"
          placeholder="ชื่อผู้ใช้งาน"
        >
          <template #icon>
            <i class="bx bxs-user"></i>
          </template>
        </vs-input>
        <vs-input
          color="#7d33ff"
          class="pass"
          v-model="pass"
          type="password"
          placeholder="รหัสผ่าน"
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
      <template #footer>
        <div class="footer-dialog" style="width: 290px; margin-left: 46px">
          <vs-button block @click="login()"> ล็อคอิน </vs-button>
          <div class="new" style="padding-left: 100px">
            <a href="register">สร้างบัญชีใหม่</a>
          </div>
        </div>
      </template>
    </vs-dialog> -->
    <v-card
      elevation="0"
      outlined
      style="
        margin-top : 175px;
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
      <h4 class="not-margin" style="text-align: center; margin-top: 76px;">
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
          color="#7d33ff"
          class="user"
          v-model="user"
          placeholder="ชื่อผู้ใช้งาน"
        >
          <template #icon>
            <i class="bx bxs-user"></i>
          </template>
        </vs-input>
        <vs-input
          color="#7d33ff"
          class="pass"
          v-model="pass"
          type="password"
          placeholder="รหัสผ่าน"
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
          <a href="register">สร้างบัญชีใหม่</a>
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
      // console.log(payload)
      // if (this.com == true) {
      try {
        const response = await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push({ path: '/', redirect: 'actualRoute' })
      } catch (err) {
        //  this.$swal('Hello Vue world!!!');
        // console.log('err')
        // this.$alert(err)
        this.$swal.fire({
          position: 'openNotification(null)',
          icon: 'error',
          title: 'รหัสไม่ถูกต้อง',
          showConfirmButton: false,
          timer: 1500,
        })
      }
      // } else {
      //   console.log('ยืนยัน Confirm')
      // }
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
