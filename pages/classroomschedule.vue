<template>
  <v-row class="fill-height" style="font-family: 'Roboto', sans-serif">
    <v-col cols="12" md="11" style="margin-left: 50px; margin-top: -3%">
      <div class="box5" style="background-color: dodgerblue">
        <i class="bx bx-calendar">ปฎิทินจองห้องเรียนออนไลน์</i>
      </div>
      <v-card outlined>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn
              outlined
              class="mr-4"
              style="background-color: dodgerblue; color: white; border: white"
              @click="setToday"
            >
              วันนี้
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>วัน</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>สัปดาห์</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>เดือน</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 วัน</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
          </v-menu>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment'
export default {
  // middleware: 'auth',
  layout: 'indexx',
  data: () => ({
    calen: [],
    active: 'notepad',
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'เดือน',
      week: 'สัปดาห์',
      day: 'วันนี้',
      '4day': '4 วัน',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      '#0000FF',
      '#FF8C00',
      '#D02090',
      '#8A2BE2',
      '#7CFC00',
      '#FF3300',
      '#9900FF',
      '#00BFFF',
      '#32CD32',
      '#D2691E',
      '#FF69B4',
      '#C71585',
      '#A020F0',
      '#FF0000',
      '#FFDEAD',
    ],
    names: ['Room721', 'Room722', 'Room725', 'Room731', 'Room732'],
  }),
  mounted() {
    this.$refs.calendar.checkChange()
    this.getcalendar()
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        )
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {
      const events = []

  

      this.events = this.calen
    },

    async getcalendar() {
      try {
        const { data } = await this.$axios.post('/api/v1/booking/getCalendar')
        this.calen = data.data
        console.log(data.data)
        this.calen.map((val) => {
          ;(val.color = this.colors[this.rnd(0, this.colors.length - 1)]),
            (val.name = `${val.name} ${moment(val.start)
              .subtract(1, 'hour')
              .zone('+0100')
              .format('HH:mm')}-${moment(val.end)
              .subtract(1, 'hour')
              .zone('+0100')
              .format('HH:mm')}`)
          let datestart = moment(val.start).format('YYYY-MM-DD')
          let dateend = moment(val.end)
            .subtract(1, 'hour')
            .zone('+0100')
            .format('YYYY-MM-DD')
          // console.log(moment(dateend).add(-1,'days').format('YYYY-MM-DD'));
          val.start = new Date(moment(datestart).format('YYYY-MM-DD'))
          val.end = new Date(moment(dateend).format('YYYY-MM-DD'))
          console.log(datestart)
          console.log(dateend)
          return val
          // name: "",
          // start: new Date("2022-02-26T10:15:00.000Z"),
          // end: new Date("2022-02-26T13:15:00.000Z"),
        })
        this.events = this.calen
        // this.getAreaData()
      } catch (error) {}
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
<style>
.v-calendar .v-event {
  color: white;
}
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  color: dodgerblue;
}
.v-btn.v-btn--fab.v-btn--has-bg.v-btn--round.theme--light.v-size--small.transparent {
  background: bottom;
}
.v-application a {
  color: #14c6ff;
}
/* .theme--light.v-btn.v-btn--has-bg {
    background-color: dodgerblue;
} */
.v-btn.v-btn--fab.v-btn--has-bg.v-btn--round.theme--light.v-size--default.primary {
  color: white;
  background-color: dodgerblue;
}
.v-btn.v-btn--fab.v-btn--has-bg.v-btn--round.theme--light.v-size--small.primary {
  color: white;
  background-color: dodgerblue;
}
.box5 {
  height: 50px;
  text-align: center;
  padding: 15px;
  color: white;
  font-size: 18px;
}
</style>
