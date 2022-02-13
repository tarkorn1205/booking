
<template>
  <div>
    <div class="hidden">
      <vs-sidebar
        absolute
        v-model="active"
        open
        style="z-index: auto; margin-top: -1%"
      >
        <template #logo>
          <img src="it.png" style="height: 100%; widht: 100%" />
        </template>
        <vs-sidebar-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :id="item.active"
          router
          exact
        >
          <template #icon>
            <i :class="item.icon"></i>
          </template>
          {{ item.title }}
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-tooltip border>
              <vs-avatar badge-color="danger" badge-position="top-right">
                <a href="login"><i class="bx bx-log-out"></i></a>
              </vs-avatar>
              <template #tooltip> ออกจากระบบ </template>
            </vs-tooltip>
            <vs-tooltip shadow interactivity>
              <vs-avatar>
                <img src="avatar-5.png" alt="" />
              </vs-avatar>
              <template #tooltip>
                <div class="content-tooltip">
                  <div class="body">
                    <vs-avatar
                      circle
                      size="80"
                      @click="activeTooltip1 = !activeTooltip1"
                    >
                      <img src="avatar-5.png" alt="" />
                    </vs-avatar>
                    <div class="text">#</div>
                  </div>
                </div>
              </template>
            </vs-tooltip>

            <!-- <vs-avatar badge badge-color="success">
              <img src="avatar-5.png" alt="" />
            </vs-avatar> -->
          </vs-row>
        </template>
      </vs-sidebar>
      <!-- <vs-sidebar absolute v-model="active" open style="z-index: auto;">
        <template #logo>
          <img src="it.png" style="height: 100%; widht: 100%" />
        </template>
        <vs-sidebar-item id="home" to="/">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          หน้าแรก
        </vs-sidebar-item>
        <vs-sidebar-item id="notepad" to="classroomschedule">
          <template #icon>
            <i class="bx bx-notepad"></i>
          </template>
          ตารางห้องเรียน
        </vs-sidebar-item>
        <vs-sidebar-item id="memory" to="classroomstatus">
          <template #icon>
            <i class="bx bx-memory-card"></i>
          </template>
          เช็คสถานะห้องเรียน
        </vs-sidebar-item>
        <vs-sidebar-item id="account" to="booking">
          <template #icon>
            <i class="bx bxs-user-account"></i>
          </template>
          จองห้องเรียน
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <a href="login"><i class="bx bx-log-out"></i></a>
            </vs-avatar>

            <vs-avatar badge badge-color="success">
              <img src="avatar-5.png" alt="" />
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar> -->
    </div>
    <div
      style="margin-left: 260px; padding: 0px; margin-top: 50px"
      data-app="true"
      class="repon"
    >
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home',
      items: [
        {
          icon: 'bx bx-home',
          title: 'หน้าแรก',
          to: '/',
          active: 'home',
        },
        {
          icon: 'bx bx-notepad',
          title: 'ตารางห้องเรียน',
          to: '/classroomschedule',
          active: 'classroomschedule',
        },
        {
          icon: 'bx bx-memory-card',
          title: 'เช็คสถานะห้องเรียน',
          to: '/classroomstatus',
          active: 'classroomstatus',
        },
        {
          icon: 'bx bxs-user-account',
          title: 'จองห้องเรียน',
          to: '/booking',
          active: 'booking',
        },
      ],
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

  body, html {
    width: 100% !important;
  }
}
</style>
