<template>
  <div>
     <div class="box7" style="background-color: dodgerblue; margin-top: -4%">
        <i class="bx bx-dialpad-alt"></i>
        หน้าแรก
      </div>
    <v-row class="ma-0">
     
      <v-col cols="12" sm="12" md="3">
        <v-card
          class="pl-9"
          style="height: 350px; width: 100%; margin-left: 10px"
        >
          <h2><center style="padding-top: 8%">จำนวนผู้ดูแล</center></h2>
          <v-progress-circular
            :rotate="-90"
            :size="220"
            :width="27"
            :value="value"
            color="#E03511"
            class="pa-3"
            style="
              margin-left: auto;
              margin-right: auto;
              display: flex;
              margin-top: 10%;
            "
          >
            <h1>{{ value }}</h1>
          </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card
          class="pl-9"
          style="height: 350px; width: 100%; margin-left: 10px"
        >
          <h2><center style="padding-top: 8%">จำนวนห้องเรียน</center></h2>
          <v-progress-circular
            :rotate="-90"
            :size="220"
            :width="27"
            :value="value2"
            color="#112CE0"
            style="
              margin-left: auto;
              margin-right: auto;
              display: flex;
              margin-top: 10%;
            "
          >
            <h1>{{ value2 }}</h1>
          </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card
          class="pl-9"
          style="height: 350px; width: 100%; margin-left: 10px"
        >
          <h2>
            <center style="padding-top: 8%">การจองห้องเรียนในวันนี้</center>
          </h2>
          <v-progress-circular
            :rotate="-90"
            :size="220"
            :width="27"
            :value="value3"
            color="#11E026"
            style="
              margin-left: auto;
              margin-right: auto;
              display: flex;
              margin-top: 10%;
            "
          >
            <h1>{{ value3 }}</h1>
          </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card
          class="pl-9"
          style="height: 350px; width: 100%; margin-left: 10px"
        >
          <h2><center style="padding-top: 8%">การจองในเดือนนี้</center></h2>
          <v-progress-circular
            :rotate="-90"
            :size="220"
            :width="27"
            :value="value4"
            color="#CB11E0"
            style="
              margin-left: auto;
              margin-right: auto;
              display: flex;
              margin-top: 10%;
            "
          >
            <h1>{{ value4 }}</h1>
          </v-progress-circular>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel
          cycle
          show-arrows-on-hover
          :show-arrows="false"
          style="width: 100%; height: 315px"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  // middleware: 'auth',
  layout: 'indexx',
  data() {
    return {
      dash: [],
      value: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/bookingit-f81ec.appspot.com/o/31978.jpg?alt=media&token=c2e84d78-c961-4bdd-a462-ee2c151a86de",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/bookingit-f81ec.appspot.com/o/31976.jpg?alt=media&token=7501c272-c04a-44a5-b367-dc70ed7af514",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/bookingit-f81ec.appspot.com/o/31979.jpg?alt=media&token=61c4ec74-ae0c-4a2d-ba4a-0a8d4f69d227",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/bookingit-f81ec.appspot.com/o/31982.jpg?alt=media&token=2b17a46b-2505-4b19-8a2f-c324d442dfac",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/bookingit-f81ec.appspot.com/o/31977.jpg?alt=media&token=a81759dd-2b17-4fef-8f50-bacf23d8b052",
        },
      ],
    }
  },
  mounted() {
    this.pulldata()
  },
  methods: {
    async pulldata() {
      const date = {
        date_now: moment().format("yyyy-MM-DD"),
        start_date: moment().startOf('month').format("yyyy-MM-DD"),
        end_date: moment().endOf('month').format("yyyy-MM-DD"),
      }

      try {
        const { data } = await this.$axios.post('/api/v1/booking/getdash', date)
        this.dash = data.data
        this.value = this.dash.count_admin[0].countadmin
        this.value2 = this.dash.count_room[0].countlistname
        this.value3 = this.dash.count_day[0].countdate
        this.value4 = this.dash.count_month[0].countmonth
      } catch (error) {}
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
  font-size: 28px;
      text-align: center;
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
