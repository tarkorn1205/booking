<template>
  <v-row>
    <v-card style="width: 350px; height: 400px; margin-left: 60px">
      <v-col cols="12" sm="12" md="3">
        <img
          src="~/assets/niyom.png"
          style="height: 300px; width: 300px; margin-left: 12px"
        /><v-btn
          text
          color="#FFFFFF"
          style="height: 67px; min-width: 65px; margin-left: 40px; background-color:#03A9F4;"
        >
          ชื่อ : อาจารย์นิยม ฉินตระกูล <br />
          ตำแหน่ง : อาจารย์ประจำ <br />
          สาขา : วิชาเทคโนโลยีสารสนเทศ
        </v-btn>
      </v-col></v-card
    >
    <v-card style="width: 350px; height: 400px; margin-left: 50px">
      <v-col cols="12" sm="12" md="3">
        <img
          src="~/assets/khwan.png"
          style="height: 300px; width: 300px; margin-left: 12px"
        /><v-btn
          text color="#FFFFFF"
          style="height: 67px; min-width: 65px; margin-left: -2px; background-color:#03A9F4;"
        >
          ชื่อ : อาจารย์ขวัญดารินทร์ จิตหาญ <br />
          ตำแหน่ง : หัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ <br />
          สาขา : วิชาเทคโนโลยีสารสนเทศ
        </v-btn>
      </v-col></v-card
    >
    <v-card style="width: 350px; height: 400px; margin-left: 60px">
      <v-col cols="12" sm="12" md="3">
        <img
          src="~/assets/arm.jpg"
          style="height: 300px; width: 300px; margin-left: 12px"
        /><v-btn
          text
          color="#FFFFFF"
          style="height: 67px; min-width: 65px; margin-left: 45px; background-color:#03A9F4;"
        >
          ชื่อ : นายศิริพงษ์ วงค์ปินใจ <br />
          ตำแหน่ง : Product Owner <br>
          บริษัท : ไปด้วยกันไหม
        </v-btn> </v-col
    ></v-card>
  </v-row>
</template>
<script>
export default {
  layout: 'indexx',
}
</script>
<style>
* {
  font-family: 'Kanit', sans-serif;
}
</style>
