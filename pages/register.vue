<template>
  <div>
    <v-row>
      <div class="boxs">
        <p>สมัครข้อมูล</p>
      </div>
      <div style="margin-left: auto; margin-right: auto; width: 40%">
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
          <vs-input
                block
                class="parent"
                danger
                label="ชื่อผู้ใช้งาน"
                placeholder="ชื่อผู้ใช้งาน"
                color="#46C93A"
            />
          <!-- <vs-input label-placeholder="Username" v-model="value" /> -->
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
             <vs-input
                block
                class="parent"
                danger
                label="รหัสผ่านผู้ใช้งาน"
                placeholder="รหัสผ่าน"
                color="#46C93A"
            />
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
            <vs-input
                block
                class="parent"
                danger
                label="ชื่อ-นามสกุล"
                placeholder="ชื่อ-นามสกุล"
                color="#46C93A"
            />
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
            <vs-input
                block
                class="parent"
                danger
                label="เบอร์โทร"
                placeholder="เบอร์โทร"
                color="#46C93A"
            />
        </v-col>
        <vs-button
          style="margin-left: 20px; width: 440px"
          :active="active == 1"
          @click="active = 0"
          to="login"
        >
          บันทึกข้อมูล
        </vs-button>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
    data() {
    return {
        active:0
    }
}
}
</script>
<style>
.boxs {
  height: 45px;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  margin-top: 160px;
}
input {
  width: 100% !important;
}
</style>
