<template>
  <div>
    <div class="box" style="background-color: dodgerblue">
      <p>เช็คสถานะห้องเรียนวันนี้</p>
    </div>
    <v-row>
      <v-col cols="12" md="3">
        <v-card outlined>
          <div class="box1" style="color: #0000ff">
            <p><center>รายชื่อห้องเรียน</center></p>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in state_room" :key="item.name">
                  <td v-if="item.room_listname">{{ item.room_listname }}</td>
                  <td v-else>
                    {{ item.name }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <div class="box2" style="color: #0000ff">
            <p><center>เช็คสถานะห้องเรียน</center></p>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in state_room" :key="item.name">
                  <td>
                    <v-btn
                      depressed
                      color="#00FF00"
                      class="botton3"
                      style="color: white"
                      v-if="item.start_date != null"
                      @click=";(bto = true), details()"
                    >
                      มีการจองแล้ว
                    </v-btn>
                    <v-btn
                      depressed
                      color="#FF0000"
                      style="color: white"
                      v-if="item.start_date == null"
                    >
                      ยังไม่มีการจอง
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <div class="box3" style="color: #0000ff">
            <p><center>เวลาห้องเรียน</center></p>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in state_room" :key="item.name">
                  <td>{{ item.start_time }}-{{ item.end_time }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <div class="box3" style="color: #0000ff">
            <p><center>ตัวเลือก</center></p>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in state_room" :key="item.name">
                  <td>
                    <div v-if="item.start_time != undefined">
                      <img
                        src="~/assets/edit.png"
                        alt=""
                        width="30px"
                        height="30px"
                        @click=";(dialog = true), getid(item.id)"
                      />
                      <img
                        src="~/assets/delete.png"
                        alt=""
                        width="30px"
                        height="30px"
                        @click=";(del = true), getdel(item.id)"
                      />
                    </div>
                    <div v-else></div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="bto"
      transition="dialog-bottom-transition"
      max-width="600"
      ><template v-slot:default="">
        <v-card>
          <v-card-title class="text-h5"> ข้อมูลการจอง </v-card-title>
          <v-card-actions>
            <v-spacer>
              <v-col cols="12" md="12" sm="3" style="margin-top: -4%">
                ชื่อผู้จอง : {{ status_one.bookingname }}<br />
                ห้องเรียนที่จอง :{{ status_one.room_listname }}<br />
                หัวข้อเรื่อง : {{ status_one.topic }}<br />
                จำนวนคน : {{ status_one.number_people }}<br />
                ชั้นห้องเรียน : {{ status_one.class_listname }}<br />
                วันที่จอง : {{ status_one.start_date }}<br />
                เวลาเริ่ม : {{ status_one.start_time }}<br />
                เวลาสิ้นสุด : {{ status_one.end_time }}<br />
                เบอร์โทร : {{ status_one.number }}
              </v-col>
            </v-spacer>
          </v-card-actions>
          <v-btn
            color="#00C853"
            style="margin-top: -5%; left: 27px"
            text
            @click="bto = false"
          >
            ตกลง
          </v-btn>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">แก้ไขข้อมูล</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :rules="class2rules"
                  v-model="state_goid.room_listname"
                  style="padding-top: 0px"
                  :items="items"
                  item-text="name"
                  item-value="id"
                  label="เลือกห้องเรียน"
                  required
                  return-object
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :rules="lastrules"
                  style="padding-top: 0px"
                  v-model="state_goid.number_people"
                  label="จำนวนผู้ใช้งาน / คน"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :rules="subjectrules"
                  style="padding-top: 0px"
                  v-model="state_goid.topic"
                  label="หัวข้อเรื่อง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="bookingrules"
                  style="padding-top: 0px"
                  v-model="state_goid.bookingname"
                  label="ชื่อผู้จอง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="numberrules"
                  style="padding-top: 0px"
                  v-model="state_goid.number"
                  label="เบอร์โทรศัพท์"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  :rules="class3rules"
                  v-model="state_goid.class_listname"
                  :items="items2"
                  style="padding-top: 0px"
                  item-text="name"
                  item-value="id"
                  label="เลือกชั้นเรียน"
                  required
                  return-object
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog
                  hide-details
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="daterules"
                      v-model="state_goid.start_date"
                      label="วันที่จองเริ่มต้น"
                      prepend-icon="mdi-calendar"
                      readonly
                      required
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="state_goid.start_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="#0D47A1" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#0D47A1"
                      @click="$refs.dialog.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog
                  hide-details
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="time"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="timerules"
                      v-model="state_goid.start_time"
                      label="เวลาที่จองเริ่มต้น"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      required
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal2"
                    v-model="state_goid.start_time"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="#0d47a1" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#0d47a1"
                      @click="$refs.dialog2.save(time)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog
                  hide-details
                  ref="dialog3"
                  v-model="modal3"
                  :return-value.sync="date2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="date2rules"
                      v-model="state_goid.end_date"
                      label="วันที่จองสิ้นสุด"
                      prepend-icon="mdi-calendar"
                      readonly
                      required
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="state_goid.end_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="#0D47A1" @click="modal3 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#0D47A1"
                      @click="$refs.dialog3.save(date2)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog
                  hide-details
                  ref="dialog4"
                  v-model="modal4"
                  :return-value.sync="time2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="date2rules"
                      v-model="state_goid.end_time"
                      label="เวลาที่จองสิ้นสุด"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      required
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal4"
                    v-model="state_goid.end_time"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="#0d47a1" @click="modal4 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#0d47a1"
                      @click="$refs.dialog4.save(time2)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="update()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      transition="dialog-bottom-transition"
      v-model="del"
      max-width="600"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>คุณยืนยันที่จะลบหรือไม่ ?</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">
              หากลบแล้วไม่สามารถกู้คืนกลับมาได้แล้ว ?
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn rounded color="#46C93A" dark @click="dialog.value, dele(id)">
              ยืนยัน
            </v-btn>
            <v-btn
              style="margin-left: 5px"
              rounded
              color="#FF4757"
              dark
              @click="dialog.value = false"
            >
              ยกเลิก
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script>
export default {
  // middleware: 'auth',
  layout: 'indexx',
  mounted() {
    this.getRoom()
  },
  methods: {
    async update() {
      this.dialog = false
    },

    async getdel(id) {
      this.id = id
    },
    async dele(id) {
      // console.log(id)
      try {
        const { data } = await this.$axios.delete(
          '/api/v1/booking/getdelete',

          {
            data: {
              start_id: id,
            },
            method: 'delete',
          }
        )
        this.getRoom()
        this.del = false
      } catch (error) {}
    },

    async getid(id) {
      try {
        const { data } = await this.$axios.post('/api/v1/booking/getid', {
          start_id: id,
        })
        this.state_goid = data.data[0]
        // this.items = data.data[0].room_listname
        // this.getAreaData()
      } catch (error) {}
    },
    async getRoom() {
      var m = new Date()
      var dateString =
        m.getUTCFullYear() +
        '-' +
        ('0' + (m.getUTCMonth() + 1)).slice(-2) +
        '-' +
        ('0' + m.getUTCDate()).slice(-2)
      // console.log(dateString)
      try {
        const { data } = await this.$axios.post('/api/v1/booking/getState', {
          start_date: dateString,
        })
        this.state_room = data.data
        console.log(this.state_room)
        // this.getAreaData()
      } catch (error) {}
    },
    async details() {
      var m = new Date()
      var dateString =
        m.getUTCFullYear() +
        '-' +
        ('0' + (m.getUTCMonth() + 1)).slice(-2) +
        '-' +
        ('0' + m.getUTCDate()).slice(-2)
      try {
        const { data } = await this.$axios.post(
          '/api/v1/booking/getonestatus',
          {
            start_date: dateString,
          }
        )
        this.status_one = data.data[0]
        console.log(this.status_one)
        // this.getAreaData()
      } catch (error) {}
    },
  },
  data() {
    return {
      del: false,
      check: false,
      state_goid: [
        {
          class_listname: 1,
        },
      ],
      bto: false,
      lastrules: [(v) => !!v || 'กรุณาใส่จำนวนคน'],
      subjectrules: [(v) => !!v || 'กรุณาใส่ชื่อหัวข้อ'],
      bookingrules: [(v) => !!v || 'กรุณาใส่ชื่อผู้จอง'],
      numberrules: [(v) => !!v || 'กรุณาใส่เบอร์โทร'],
      class2rules: [(v) => !!v || 'กรุณาเลือกห้องเรียน'],
      class3rules: [(v) => !!v || 'กรุณาเลือกชั้นเรียน'],
      daterules: [(v) => !!v || 'กรุณาใส่วันที่'],
      date2rules: [(v) => !!v || 'กรุณาใส่วันที่'],
      timerules: [(v) => !!v || 'กรุณาใส่เวลา'],
      time2rules: [(v) => !!v || 'กรุณาใส่เวลา'],
      dialog: false,

      state_room: [],
      status_one: [],
      items: [
        { id: 1, name: 'room721' },
        { id: 2, name: 'room722' },
        { id: 3, name: 'room725' },
        { id: 4, name: 'room731' },
        { id: 5, name: 'room732' },
      ],
      items2: [
        { id: 1, name: 'ปวช1 A' },
        { id: 2, name: 'ปวช1 B' },
        { id: 3, name: 'ปวช2 A' },
        { id: 4, name: 'ปวช2 B' },
        { id: 5, name: 'ปวช3 A' },
        { id: 6, name: 'ปวช3 B' },
        { id: 7, name: 'ปวส1 A' },
        { id: 8, name: 'ปวส1 B' },
        { id: 9, name: 'ปวส2 A' },
        { id: 10, name: 'ปวส2 B' },
        { id: 11, name: 'ป.ตรีปี1' },
        { id: 12, name: 'ป.ตรีปี2' },
      ],
      date: '',
      date2: '',
      sheet: false,

      date: '',
      date2: '',
      sheet: false,

      time: null,
      menu2: false,
      modal2: false,

      time2: null,
      menu2: false,
      modal4: false,

      menu: false,
      modal: false,
      menu2: false,

      menu: false,
      modal3: false,
      menu2: false,

      classroom: '',
      people: '',
      subject: '',
      bookingname: '',
      number: '',
      florclass: '',
      chamber: '',
      date: '',
      time: '',
      date2: '',
      time2: '',
      etc: '',
      id: '',
    }
  },
}
</script>
<style>
.box {
  height: 50px;
  text-align: center;
  padding: 15px;
  color: white;
  font-size: 20px;
}
.box1 {
  height: 50px;
  width: 100%;
  padding: 12px;
  color: white;
  font-size: 16px;
  border-bottom: rgb(214, 214, 214) 1px solid;
}
.box2 {
  height: 50px;
  padding: 12px;
  color: white;
  font-size: 16px;
  border-bottom: rgb(214, 214, 214) 1px solid;
}
.box3 {
  height: 50px;
  padding: 12px;
  color: white;
  font-size: 16px;
  border-bottom: rgb(214, 214, 214) 1px solid;
}
tbody {
  text-align: center;
}
.v-dialog:not(.v-dialog--fullscreen) {
  margin-left: 15%;
}
.v-card__subtitle,
.v-card__text {
  margin-top: 4%;
}
.v-card > .v-card__progress + :not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  font-size: 20px;
}
.v-dialog > .v-card > .v-card__subtitle,
.v-dialog > .v-card > .v-card__text {
  font-size: 20px;
}
.button1 {
  background-color: red;
}
.v-date-picker-table .v-btn.v-btn--active {
  color: #0d47a1;
}
*/ .theme--light.v-btn {
  border-color: #0d47a1;
}
.v-picker__title {
  color: #ffffff !important;
  background-color: #0d47a1;
}

.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand {
  background-color: #0d47a1 !important;
}
.theme--light.v-time-picker-clock--indeterminate
  .v-time-picker-clock__item--active {
  background-color: #0d47a1 !important;
}
.v-time-picker-clock__hand {
  background-color: #0d47a1 !important;
}
.v-time-picker-clock__item--active {
  background-color: #0d47a1 !important;
}
.v-time-picker-clock__ampm {
  color: #0d47a1 !important;
}
</style>
