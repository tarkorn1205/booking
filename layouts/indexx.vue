<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-navigation-drawer permanent fixed>
          <v-list style="background-color:#00B0FF">
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <img src="~/assets/user.png" />
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link >
              <v-list-item-content>
                <v-list-item-title class="text-h6" style="color:#ffffff">
                  Sandra Adams
                </v-list-item-title>
                <v-list-item-subtitle style="color:#ffffff"
                  >sandra_a88@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item link to="/">
              <v-list-item-icon style="color: #2196f3">
                <v-icon>bx bx-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="margin-left: 10px"
                >หน้าแรก</v-list-item-title
              >
            </v-list-item>
            <v-list-item link to="classroomschedule">
              <v-list-item-icon style="color: #2196f3">
                <v-icon>bx bx-notepad</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="margin-left: 10px"
                >ตารางห้องเรียน</v-list-item-title
              >
            </v-list-item>
            <v-list-item link to="classroomstatus">
              <v-list-item-icon style="color: #2196f3">
                <v-icon>bx bx-memory-card</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="margin-left: 10px"
                >เช็คสถานะห้องเรียน</v-list-item-title
              >
            </v-list-item>
            <v-list-item link to="booking">
              <v-list-item-icon style="color: #2196f3">
                <v-icon>bx bxs-user-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="margin-left: 10px"
                >จองห้องเรียน</v-list-item-title
              >
            </v-list-item>
            <v-footer padless style="margin-top: 390px;">
              <v-list-item link to="login">
              <v-list-item-icon style="color: #2196f3">
                <v-icon>bx bx-log-out</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="margin-left: 50px"
                >ออกจากระบบ</v-list-item-title
              >
            </v-list-item>
            </v-footer>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <div
          style="padding: 0px; margin-top: 50px"
          data-app="true"
          class="repon"
        >
          <Nuxt />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // active: 'home',
      // items: [
      //   {
      //     icon: 'bx bx-home',
      //     title: 'หน้าแรก',
      //     to: '/',
      //     active: 'home',
      //   },
      //   {
      //     icon: 'bx bx-notepad',
      //     title: 'ตารางห้องเรียน',
      //     to: '/classroomschedule',
      //     active: 'classroomschedule',
      //   },
      //   {
      //     icon: 'bx bx-memory-card',
      //     title: 'เช็คสถานะห้องเรียน',
      //     to: '/classroomstatus',
      //     active: 'classroomstatus',
      //   },
      //   {
      //     icon: 'bx bxs-user-account',
      //     title: 'จองห้องเรียน',
      //     to: '/booking',
      //     active: 'booking',
      //   },
      // ],
    }
  },
}
</script>
<style>
* {
  font-family: 'Kanit', sans-serif;
}
.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 500px;
  max-height: 100px !important;
}
.v-btnv-btn--fabv-btn--has-bgv-btn--round-theme--light-v-size--small-primary {
  background-color: dodgerblue !important;
}
.bx-log-out:before {
  color: #14c6ff;
}
@media only screen and (max-width: 900px) {
  .repon {
    margin-left: 0 !important;
  }
  .hidden {
    display: none;
  }
  body,
  html {
    width: 100% !important;
  }
}
</style>
