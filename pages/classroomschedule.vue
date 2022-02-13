<template>
  <v-row class="fill-height" style="font-family: 'Roboto', sans-serif">
    <v-col cols="12" md="11" style="margin-left: 50px; margin-top: -3%">
      <div class="box5" style="background-color: dodgerblue">
        <i class='bx bx-calendar'>ปฎิทินจองห้องเรียนออนไลน์</i>
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
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  // middleware: 'auth',
  layout: 'indexx',
  data: () => ({
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
    // selectedElement: null,
    // selectedOpen: false,
    events: [],
    // colors: [
    //   'blue',
    //   'red',
    //   'deep-purple',
    //   'green',
    //   'orange',
    // ],
    names: ['Room721', 'Room722', 'Room725', 'Room731', 'Room732'],
  }),
  mounted() {
    this.$refs.calendar.checkChange()
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

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

  
      
      let json = [
        {
          name: "Test",
          start: new Date("2022-01-06T23:15:00.000Z"),   
          end: new Date("2022-01-10T23:15:00.000Z"),
        },
        {
          name: "Test23",
          start: new Date("2022-01-20T23:15:00.000Z"),
          end: new Date("2022-01-20T23:15:00.000Z"),
        }
      ]

      // for (let i = 0; i < eventCount; i++) {
      //   const allDay = this.rnd(0, 3) === 0
      //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
      //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
      //   const second = new Date(first.getTime() + secondTimestamp)

      //   console.log(first.toISOString())
        
      //   // console.log({
      //   //   name: this.names[this.rnd(0, this.names.length - 1)],
      //   //   start: first,
      //   //   end: second,
      //   //   timed: !allDay,
      //   // })

      //   events.push({
      //     name: this.names[this.rnd(0, this.names.length - 1)],
      //     start: first,
      //     end: second,
      //     // color: this.colors[this.rnd(0, this.colors.length - 1)],
      //     timed: !allDay,
      //   })
      // }

      this.events = json
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
<style>
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  /* border-right: black; */
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
