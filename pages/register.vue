<template>
  <div>
    <v-row>
      <div class="boxs">
        <p>สมัครข้อมูล</p>
      </div>
      <div style="margin-left: auto; margin-right: auto; width: 40%">
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
          <vs-input
            block
            v-model="adminuser"
            class="parent"
            danger
            label="ชื่อผู้ใช้งาน"
            color="#46C93A"
          />
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
          <vs-input
            block
            v-model="adminpassword"
            class="parent"
            danger
            label="รหัสผ่านผู้ใช้งาน"
            color="#46C93A"
          />
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
          <vs-input
            block
            v-model="adminname"
            class="parent"
            danger
            label="ชื่อ-นามสกุล"
            color="#46C93A"
          />
        </v-col>
        <v-col style="margin-top: 10px" cols="12" md="12" sm="12">
          <vs-input
            block
            v-model="adminphone"
            class="parent"
            danger
            label="เบอร์โทร"
            color="#46C93A"
          />
        </v-col>
        <v-col
          style="margin-top: -2%; margin-left: 2px"
          cols="12"
          md="12"
          sm="12"
        >
          <v-btn @click="$refs.inputPortraitImage.click()">เลือกรูปภาพ</v-btn>
          <input
            type="file"
            ref="inputPortraitImage"
            style="display: none"
            @change="
              (e) => {
                ResizeImage(e)
              }
            "
            accept="image/png, image/jpeg"
          />
          <div v-if="imagesRaw != ''">
            <img
              :src="imagesRaw"
              style="border: 1px dashed #ccc; width: 100px; height: 100px"
            />
          </div>
          <div v-else-if="imagesRaw == null"></div>
        </v-col>
        <vs-button
          @click="okbut = !okbut"
          style="margin-left: 20px; width: 440px"
        >
          บันทึกข้อมูล
        </vs-button>
        <vs-dialog overflow-hidden v-model="okbut">
          <template #header>
            <h3>ยืนยันบันทึกข้อมูล</h3>
          </template>
          <div>
            <vs-button
              :active="active == 0"
              @click=";(active = 1), onUploadSubmit()"
              color="#00ff00"
              style="width: 70px; height: 40px; left: 90px"
              
            >
              ยืนยัน
            </vs-button>
            <vs-button
              :active="active == 0"
              @click="active = 1"
              color="#ff0000"
              style="width: 70px; height: 40px; left: 180px; margin-top: -12%"
            >
              ยกเลิก
            </vs-button>
          </div>
        </vs-dialog>
      </div>
    </v-row>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      active: 0,
      imageUrl: '',
      imagesRaw: '',
      okbut: false,

      adminuser:'',
      adminpassword:'',
      adminname: '',
      adminphone:'',
    }
  },
  methods: {
    
    ResizeImage(event) {
      var file = event.target.files[0]
      if (file.type.match(/image.*/)) {
        var reader = new FileReader()
        var self = this
        reader.onload = function (readerEvent) {
          var image = new Image()
          image.onload = function (imageEvent) {
            var canvas = document.createElement('canvas'),
              max_size = 1024,
              width = image.width,
              height = image.height
            if (width > height) {
              if (width > max_size) {
                height *= max_size / width
                width = max_size
              }
            } else {
              if (height > max_size) {
                width *= max_size / height
                height = max_size
              }
            }
            canvas.width = width
            canvas.height = height
            canvas.getContext('2d').drawImage(image, 0, 0, width, height)
            var dataUrl = canvas.toDataURL('image/jpeg')
            var resizedImage = self.dataURLToBlob(dataUrl)

            console.log({
              type: 'imageResized',
              blob: resizedImage,
              url: dataUrl,
            })
            self.imagesRaw = dataUrl
          }
          image.src = readerEvent.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    dataURLToBlob(dataURL) {
      var BASE64_MARKER = ';base64,'
      if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',')
        var contentType = parts[0].split(':')[1]
        var raw = parts[1]

        return new Blob([raw], { type: contentType })
      }

      var parts = dataURL.split(BASE64_MARKER)
      var contentType = parts[0].split(':')[1]
      var raw = window.atob(parts[1])
      var rawLength = raw.length

      var uInt8Array = new Uint8Array(rawLength)

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }

      return new Blob([uInt8Array], { type: contentType })
    },
    onUpload(image) {
      let self = this
      return new Promise(function (fulfill, reject) {
        const storageRef = self.$fire.storage
          .ref(`admin-profile/${Date.now()}.jpg`)
          .putString(image, 'data_url')
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            self.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          },
          (error) => {
          },
          () => {
            self.uploadValue = 100
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              fulfill(url)
            })
          }
        )
      })
    },
    async onUploadSubmit() {
       if (this.imagesRaw) {
        this.imageUrl = await this.onUpload(this.imagesRaw)
      }
      const adm = {
        username: this.adminuser,
        password: this.adminpassword,
        name: this.adminname,
        phone: this.adminphone,
        img: this.imageUrl
      }
      try {
        const data = await this.$axios.post('/api/v1/auth/register', adm)

        this.$swal.fire({
          position: 'openNotification(null)',
          icon: 'success',
          title: 'ยืนยันถูกต้อง',
          showConfirmButton: false,
          timer: 1500,
        })
        this.okbut= false
        this.$router.push('/login')
      } catch (error) {
        this.okbut= false
      }
      
    },
  },
}
</script>
<style>
.boxs {
  height: 45px;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  margin-top: 160px;
}
input {
  width: 100% !important;
}
</style>
