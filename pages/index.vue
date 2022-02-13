<template>
  <v-row class="ma-0">
    <div class="box7" style="background-color: dodgerblue">
      <i class="bx bx-dialpad-alt">Dashboard</i>
    </div>
    <!-- <v-col cols="12" md="3" sm="12">
      <v-card width="300" height="100" style="margin-top: 5px">
        <v-row no-gutters class="background">
          <v-col cols="12" md="4" sm="4" style="background-color: #009900">
            <div>
              <i class="bx bxl-meta cardrgb"></i>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="8"
            sm="8"
            style="
              padding-top: 10px;
              padding-right: 20px;
              text-align: right;
              color: black;
              background-color: #1e9c2a;
              color: white;
            "
          >
            <span style="font-size: 14px"> จองห้องประชุม </span>
            <h4 style="font-size: 35px">0</h4>
            <span style="font-size: 14px"> การจองวันนี้ </span>
          </v-col>
        </v-row>
      </v-card>
    </v-col> -->
    <!-- <v-col cols="12" md="3" sm="12">
      <v-card width="300" height="100" style="margin-top: 5px">
        <v-row no-gutters class="background">
          <v-col cols="12" md="4" sm="4" style="background-color: #009900">
            <div>
              <i class="bx bxl-meta cardrgb"></i>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="8"
            sm="8"
            style="
              padding-top: 10px;
              padding-right: 20px;
              text-align: right;
              color: black;
              background-color: #1e9c2a;
              color: white;
            "
          >
            <span style="font-size: 14px"> จองห้องประชุม </span>
            <h4 style="font-size: 35px">0</h4>
            <span style="font-size: 14px"> การจองวันนี้ </span>
          </v-col>
        </v-row>
      </v-card>
    </v-col> -->
    <!-- <v-col cols="12" md="3" sm="12">
      <v-card width="300" height="100" style="margin-top: 5px">
        <v-row no-gutters class="background">
          <v-col cols="12" md="4" sm="4" style="background-color: #009900">
            <div>
              <i class="bx bxl-meta cardrgb"></i>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="8"
            sm="8"
            style="
              padding-top: 10px;
              padding-right: 20px;
              text-align: right;
              color: black;
              background-color: #1e9c2a;
              color: white;
            "
          >
            <span style="font-size: 14px"> จองห้องประชุม </span>
            <h4 style="font-size: 35px">0</h4>
            <span style="font-size: 14px"> การจองวันนี้ </span>
          </v-col>
        </v-row>
      </v-card>
    </v-col> -->
    <!-- <v-col cols="12" md="3" sm="12">
      <v-card width="300" height="100" style="margin-top: 5px">
        <v-row no-gutters class="background">
          <v-col cols="12" md="4" sm="4" style="background-color: #009900">
            <div>
              <i class="bx bxl-meta cardrgb"></i>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="8"
            sm="8"
            style="
              padding-top: 10px;
              padding-right: 20px;
              text-align: right;
              color: black;
              background-color: #1e9c2a;
              color: white;
            "
          >
            <span style="font-size: 14px"> จำนวนห้องเรียน </span>
            <h4 style="font-size: 35px">0</h4>
          </v-col>
        </v-row>
      </v-card>
    </v-col> -->

    <v-col cols="12" sm="12" md="3">
      <v-card
        class="pl-9"
        style="height: 350px; width: 100%; margin-left: 10px"
      >
        <h2><center>จำนวนนักศึกษา</center></h2>
        <v-progress-circular
          :rotate="-90"
          :size="180"
          :width="18"
          :value="value"
          color="#E03511"
          class="pa-3"
          style="margin-left: auto; margin-right: auto; display: flex"
        >
          <h1>{{ value }}</h1>
        </v-progress-circular>
        <h3><center>5 ห้อง</center></h3>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="3">
      <v-card class="pl-9" style="height: 350px; width: 100%; margin-left: 10px">
        <h2><center>จำนวนการใช้ห้องเรียน</center></h2>
        <v-progress-circular
          :rotate="-90"
          :size="180"
          :width="18"
          :value="value2"
          color="#112CE0"
          style="margin-left: auto; margin-right: auto; display: flex"
        >
          <h1>{{ value2 }}</h1>
        </v-progress-circular>
        <h3><center>5 ห้อง</center></h3>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="3">
      <v-card class="pl-9" style="height: 350px; width: 100%; margin-left: 10px">
        <h2><center>จำนวนการจอง</center></h2>
        <v-progress-circular
          :rotate="-90"
          :size="180"
          :width="18"
          :value="value3"
          color="#11E026"
          style="margin-left: auto; margin-right: auto; display: flex"
        >
          <h1>{{ value3 }}</h1>
        </v-progress-circular>
        <h3><center>5 ห้อง</center></h3>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="3">
      <v-card class="pl-9" style="height: 350px; width: 100%; margin-left: 10px">
        <h2><center>จำนวนห้องเรียน</center></h2>
        <v-progress-circular
          :rotate="-90"
          :size="180"
          :width="18"
          :value="value4"
          color="#CB11E0"
          style="margin-left: auto; margin-right: auto; display: flex"
        >
          <h1>{{ value4 }}</h1>
        </v-progress-circular>
        <h3><center>5 ห้อง</center></h3>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  // middleware: 'auth',
  layout: 'indexx',
  data() {
    return {
      value: 0,
      value2: 0,
      value3: 0,
      value4: 0,
    }
  },
  mounted() {
    this.pulldata()
  },
  methods: {
    pulldata() {
      this.value = 5
      this.value2 = 10
      this.value3 = 15
      this.value4 = 20
    },
  },
}
</script>
<style>
.background {
  height: 100%;
}

.cardrgb {
  font-size: 40px;
  padding: 10px;
  color: white;
  margin-top: 15px;
  margin-left: 21px;
  margin-right: 10px;
}
.v-progress-circular {
  margin: 10px;
  margin-top: 50px;
  margin-left: 40px;
}
.mx-auto {
  margin-top: 1%;
  margin-left: 3%;
}
.box7 {
  height: 50px;
  padding: 10px;
  color: white;
  font-size: 31px;
  padding-right: 83.2%;
  padding-left: 43%;
}
@media only screen and (max-width: 900px) {
  .v-card.v-sheet.theme--light {
    height: 100% !important;
    width: 100% !important ;
  }
  .col-sm-12.col-md-3.col-12 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .box7 {
    padding-left: 30% !important;
    padding-right: 0% !important;
    width: 100% !important;
  }
}
</style>
