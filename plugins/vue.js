import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    info: colors.blue.lighten2,
    accent: colors.green.lighten1,
    error: colors.red.darken2
  }
});