<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
      <v-card class="mx-auto" max-width="344" outlined>
        <div>
          <p class="welcome">Welcome <b>Admin Booking</b></p>
          <vs-input
            color="#7d33ff"
            class="user"
            v-model="value1"
            placeholder="User name"
          >
            <template #icon>
              <i class='bx bxs-user-account' ></i>
            </template>
          </vs-input>

          <vs-input
            color="#7d33ff"
            class="pass"
            type="password"
            placeholder="Password"
          >
            <template #icon>
              <i class='bx bxs-lock' ></i>
            </template>
          </vs-input>
         
        </div>
        <v-col cols="12" sm="8" md="6">
        <vs-button class="button" color='rgb(23, 201, 100)'
            :active="active == 1"
            @click="active = 1"
        >
            Singn
            
        </vs-button> 
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default { layout: 'loginad' }
</script>
<style>
.mx-auto {
  margin-left: 40%;
  margin-top: 15%;
}
.button {
  margin-left: 97%;
  margin-top: -2%;
}
.welcome {
  text-align: center;
  padding-top: 0%;
}
.user {
  padding-left: 50px;
}
.pass {
  padding-left: 50px;
}
.vs-input-parent {
  margin-top: 12px;
  width: 100%;
}
input {
  width: 90% !important;
}
.vs-switch {
  width: 23%;
  margin-left: 50px;
  margin-top: 10px;
}
</style>
