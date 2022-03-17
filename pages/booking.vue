<template>
  <v-row style="padding-left: 50px; padding-right: 50px; margin-top: -4%">
    <v-card style="width: 100% !important; padding: 20px">
      <v-form v-model="valid">
        <v-container>
          <div class="box10" style="background-color: dodgerblue; color:white; margin-top: -2%;">
            <h2>แบบฟอร์มการจองห้องเรียน</h2>
          </div>

          <v-row
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="4">
              <v-select
                :rules="class2rules"
                v-model="classroom"
                :items="items"
                item-text="name"
                item-value="id"
                label="เลือกห้องเรียน"
                required
                return-object
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                :rules="lastrules"
                style="padding-top: 12px"
                v-model="people"
                label="จำนวนผู้ใช้งาน / คน"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            class="pt-0"
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="8" style="margin-top: -1%">
              <v-text-field
                :rules="subjectrules"
                style="padding-top: 0px"
                v-model="subject"
                label="หัวข้อเรื่อง"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            class="pt-0"
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="4" style="margin-top: -1%">
              <v-text-field
                :rules="bookingrules"
                style="padding-top: 0px"
                v-model="bookingname"
                label="ชื่อผู้จอง"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" style="margin-top: -1%">
              <v-text-field
                :rules="numberrules"
                style="padding-top: 0px"
                v-model="number"
                label="เบอร์โทรศัพท์"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="8" style="margin-top: -1%">
              <v-select
                :rules="class3rules"
                v-model="florclass"
                :items="items2"
                item-text="name"
                item-value="id"
                label="เลือกชั้นเรียน"
                required
                return-object
              ></v-select>
            </v-col>
          </v-row>
          <v-row
            class="pt-0"
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="4" style="margin-top: -2%">
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
                    v-model="date"
                    label="วันที่จองเริ่มต้น"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="#0D47A1" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#0D47A1" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" md="4" style="margin-top: -2%">
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
                    v-model="time"
                    label="เวลาที่จองเริ่มต้น"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-time-picker v-if="modal2" v-model="time" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="#0d47a1" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#0d47a1" @click="$refs.dialog2.save(time)">
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row
            class="pt-0"
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col cols="12" md="4" style="margin-top: -2%">
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
                    v-model="date2"
                    label="วันที่จองสิ้นสุด"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date2" scrollable>
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
            <v-col cols="12" md="4" style="margin-top: -2%">
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
                    v-model="time2"
                    label="เวลาที่จองสิ้นสุด"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-time-picker v-if="modal4" v-model="time2" full-width>
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
          <v-row
            class="pt-0"
            style="
              display: flex;
              flex-direction: row;
              justify-content: center;
              padding-top: 0px;
            "
          >
            <v-col cols="1" md="8" style="margin-top: -3%">
              <v-textarea hide-details color="teal" v-model="etc">
                <template v-slot:label>
                  <div>อื่นๆ</div>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
          <v-row
            class="pt-0"
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-col>
              <div class="text-center" style="padding-left:500px">
                <v-btn
                  color="#33FF00"
                  style="color: #ffffff"
                  :disabled="
                    !classroom ||
                    !people ||
                    !subject ||
                    !bookingname ||
                    !number ||
                    !florclass ||
                    !date ||
                    !time ||
                    !date2 ||
                    !time2
                  "
                  @click=";(btd = true), savebook()"
                  >ยืนยันการจอง</v-btn
                >
                
              </div>
            </v-col>
          </v-row>
          <v-dialog
            v-model="btd"
            transition="dialog-bottom-transition"
            max-width="800"
          >
            <v-card>
              <v-toolbar color="primary" dark><p>หลักฐานการจอง</p></v-toolbar>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">ชื่อ</th>
                        <th class="text-left">เบอร์</th>
                        <th class="text-left">ห้องเรียน</th>
                        <th class="text-left">ชั้นปี</th>
                        <th class="text-left">วันที่</th>
                        <th class="text-left">เวลาเริ่ม</th>
                        <th class="text-left">เวลาสิ้นสุด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="text-align: center">{{ bookingname }}</td>
                        <td style="text-align: center">{{ number }}</td>
                        <td style="text-align: center">{{ classroom.name }}</td>
                        <td style="text-align: center">{{ florclass.name }}</td>
                        <td style="text-align: center">{{ date }}</td>
                        <td style="text-align: center">{{ time }}</td>
                        <td style="text-align: center">{{ time2 }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  class="button3"
                  style="color: white"
                  text
                  @click=";(btd = false), sct()"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </v-form>
    </v-card>
  </v-row>
</template>
<script>
export default {
  // middleware: 'auth',
  layout: 'indexx',
  data() {
    return {
      valid: false,
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

      btd: false,
      items: [
        { id: 1, name: 'room721' },
        { id: 2, name: 'room722' },
        { id: 3, name: 'room725' },
        { id: 4, name: 'room731' },
        { id: 5, name: 'room732' },
      ],
      date: '',
      date2: '',
      sheet: false,

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

      firstname: '',
      lastname: '',
      value1: '',
    }
  },
  methods: {
    async savebook() {
      const mainder = {
        id_room: this.classroom.id,
        id_class: this.florclass.id,
        number_people: this.people,
        topic: this.subject,
        bookingname: this.bookingname,
        number: this.number,
        start_date: this.date,
        start_time: this.time,
        end_date: this.date2,
        end_time: this.time2,    
        etc: this.etc,
      }
      console.log(mainder)
      try {
        const data = await this.$axios.post('/api/v1/booking/save', mainder)
        // this.getAreaData()
      } catch (error) {}
    },
    sct() {
      this.$router.push({ path: 'classroomstatus', redirect: 'actualRoute' })
    },
  },
}
</script>
<style>
.v-date-picker-table .v-btn.v-btn--active {
  color: #0d47a1;
} */
.theme--light.v-btn {
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
 /* .col {
  padding-left: 500px;
} */
.v-bottom-sheet.v-dialog.v-bottom-sheet--inset {
  margin-left: 300px;
}
.v-dialog:not(.v-dialog--fullscreen) {
  margin-left: 15%;
}
.theme--light.v-card > .v-card__subtitle,
.theme--light.v-card > .v-card__text {
  font-size: 20px;
  color: black;
}
.v-toolbar__content,
.v-toolbar__extension {
  font-size: 21px;
}
.button3 {
  background-color: red;
}
.v-messages__wrapper {
  color: red;
}
.box10{
  height: 50px;
  text-align: center;
  padding: 4px;
  color: white;
  font-size: 18px;
}
</style>
