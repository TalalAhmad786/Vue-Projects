<template>
  <div class="hello">
    <v-app>
      <v-app-bar app elevation="1">
        <v-app-bar-nav-icon class=" d-md-none" />

        <!-- Align links to the left of the title -->
        <v-btn class="d-none d-md-flex" @click="startFraming">Start Framing</v-btn>
        <v-btn text class="d-none d-md-flex" @click="doFraming">Do Framing</v-btn>
        <v-toolbar-title>
          <a href="#" class="title title-link">hang</a>
        </v-toolbar-title>
        <!-- Centered title -->



        <v-btn text class="d-none d-md-flex" @click="doFraming">Support</v-btn>
        <v-btn density="default" icon="mdi-shopping"></v-btn>
        <v-btn class="mr-10 d-none d-md-flex" density="default" icon="mdi-account"></v-btn>

      </v-app-bar>
      <v-container>
        <div class="main w-full">
          <v-row>
            <v-col cols="12" md="6" align-self="center"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-4 pa-4 text-left text-wrap ">
                <h2 class="font-heading font-weight-thin">
                  Design your own
                  <span class="font-italic">frame</span>
                  <p style="font-size: 20px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque autem,
                    aliquid quos expedita accusamus hic atque laboriosam molestias itaque tempore possimus recusandae
                    earum.
                    Eveniet quas voluptatum repudiandae nobis corporis nihil, a veniam tenetur ipsum error aliquid, minus
                    ipsa blanditiis repellendus dolorem hic? Amet fuga optio doloribus maiores vero beatae magnam.
                  </p>
                </h2>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-2 pa-2 wrap">
                <v-img class="w-100 h-100" src="../assets/Frame-1.png"></v-img>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <div class="d-md-none">
        <v-sheet class="mx-auto" max-width="900">
          <v-slide-group show-arrows>
            <v-slide-group-item v-for="frame in frames" :key="frame.id">
                  <v-card class="frame-card ma-4 pa-4 text-left" elevation="3" @click="onFrameClicked(frame)">
                    <div style="border: 10px solid black; border-style: groove;"><v-img :src="frame.imageUrl"></v-img>
                    </div>
                    <v-card-title class="text-wrap">{{ frame.title }}</v-card-title>
                  </v-card>
            
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
        <v-row class="frame-row">
          <v-col cols="4" md="3" v-for="frame in frames" :key="frame.id">
            <v-card class="frame-card ma-4 pa-4 text-left" elevation="3" @click="onFrameClicked(frame)">
              <div style="border: 10px solid black; border-style: groove;"><v-img :src="frame.imageUrl"></v-img></div>
              <v-card-title class="text-wrap">{{ frame.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>

        <v-btn class=" ma-16 bg-yellow-lighten-3" rounded="xl" size="x-large">Design a custom Frame</v-btn>





      </v-container>
      <div class="w-full bg-grey-lighten-2">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" align-self="center"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-4 pa-4 text-left text-wrap bg-grey-lighten-2">
                <h2 class="font-heading font-weight-thin">
                  Design your own
                  <span class="font-italic">frame</span>
                  <p style="font-size: 20px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque autem,
                    aliquid quos expedita accusamus hic atque laboriosam molestias itaque tempore possimus recusandae
                    earum.
                    Eveniet quas voluptatum repudiandae nobis corporis nihil, a veniam tenetur ipsum error aliquid, minus
                    ipsa blanditiis repellendus dolorem hic? Amet fuga optio doloribus maiores vero beatae magnam.
                  </p>
                </h2>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-2 pa-2 wrap bg-grey-lighten-2">
                <v-img class="w-100 h-100"
                  src="https://shop.hangframing.com/assets/frames/standardframe-2d1925bbb42a0354be0baf917f9eafe51042961456117afd933aaf4cbc7f1c80.png"></v-img>
              </v-sheet>
            </v-col>
          </v-row>


          <v-row class="frame-row">
            <v-col cols="4" md="3" v-for="frame2 in frames2" :key="frame2.id">
              <v-card class="frame-card ma-4 pa-4 text-left" elevation="3" @click="onFrameClicked(frame2)">
                <v-img :src="frame2.imageUrl"></v-img>
                <v-card-title class="text-wrap">{{ frame2.title }}</v-card-title>
                <price style="color: green; font-style: italic;">{{ `$${frame2.price}` }}</price>
                <p>20x30cm textured bare wood frame</p>
              </v-card>
            </v-col>
          </v-row>


          <v-btn class=" ma-16 bg-yellow-lighten-3" rounded="xl" size="x-large">Shop Standard Frames</v-btn>

          <v-row>
            <v-col cols="12" md="6" align-self="center"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-4 pa-4 text-left text-wrap bg-grey-lighten-2">
                <h2 class="font-heading font-weight-thin">
                  Design your own
                  <span class="font-italic">frame</span>
                  <p style="font-size: 20px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque autem,
                    aliquid quos expedita accusamus hic atque laboriosam molestias itaque tempore possimus recusandae
                    earum.
                    Eveniet quas voluptatum repudiandae nobis corporis nihil, a veniam tenetur ipsum error aliquid, minus
                    ipsa blanditiis repellendus dolorem hic? Amet fuga optio doloribus maiores vero beatae magnam.
                  </p>
                </h2>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6"> <!-- Adjust the column size as needed -->
              <v-sheet class="ma-2 pa-2 wrap bg-grey-lighten-2">
                <v-img class="w-100 h-100"
                  src="https://shop.hangframing.com/assets/frames/gallery-walls-1572dc25d71b2a7e69569a78e9949156e7dff6ccff10a9f510a4c199cc40f2df.jpg"></v-img>
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn class=" ma-16 bg-yellow-lighten-3" rounded="xl" size="x-large">Coming Soon</v-btn>


        </v-container>
      </div>
      <v-footer class="bg-black">
        <v-container>
          <v-row class="d-flex flex-wrap">
            <v-col cols="6" md="2">
              <h1>hang</h1>
              


            </v-col>
            <v-col cols="6" md="2">
              <div class="my-10">
                <p class="text-subtitle-1"><b>START FRAMING</b></p>
                <p class="text-subtitle-1 mb-1 mt-3">Browse All Frames</p>
                <p class="text-subtitle-1 my-1">Upload a Photo</p>
                <p class="text-subtitle-1 my-1">Frame an original</p>
              </div>
            </v-col>
            <v-col cols="6" md="2">
              <div class="my-10">
                <p class="text-subtitle-1"><b>HOW IT WORKS</b></p>
                <p class="text-subtitle-1 mb-1 mt-3">Materials & sustainability</p>
                <p class="text-subtitle-1 my-1">Pricing</p>
                <p class="text-subtitle-1 my-1">Our Story</p>
              </div>
            </v-col>
            <v-col cols="6" md="2">
              <div class="my-10">
                <p class="text-subtitle-1"><b>SUPPORT</b></p>
                <p class="text-subtitle-1 mb-1 mt-3">Our Services</p>
                <p class="text-subtitle-1 my-1">Inspiration</p>
                <p class="text-subtitle-1 my-1">FAQs</p>
                <p class="text-subtitle-1 my-1">Contact</p>
              </div>


            </v-col>
            <v-col cols="6" md="4">
              <div class="my-10">
                <p class="text-subtitle-1"><b>SIGN UP FOR EMAIL UPDATES</b></p>
                <v-text-field class="my-5" placeholder="Enter Email">
                  <v-btn variant="plain">
                    Submit
                  </v-btn>
                </v-text-field>
              </div>


            </v-col>
          </v-row>
        </v-container>

      </v-footer>
      <v-footer>
        <v-container>
          <v-row>
            <v-col cols="6" md="2">
              <p style="font-size: 12px;">© 2021 Hang Framing Ltd.</p>
            </v-col>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="6" md="2">
              <p style="font-size: 12px;">Terms & conditions Privacy policy</p>
            </v-col>
          </v-row>

        </v-container>
      </v-footer>




    </v-app>


  </div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;700&display=swap" rel="stylesheet">
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      frames: [
        {
          id: 1,
          title: "kfjdlfkdl",

          imageUrl: "https://shop.hangframing.com/packs/media/images/photo-placeholder-78613966eac4b15e347986ac96eabb1a.jpg", // Replace with the actual image URL
        },
        {
          id: 2,
          title: "Burnham",
          imageUrl: "https://shop.hangframing.com/packs/media/images/photo-placeholder-78613966eac4b15e347986ac96eabb1a.jpg", // 
        },
        {
          id: 3,
          title: "Holme",
          imageUrl: "https://shop.hangframing.com/packs/media/images/photo-placeholder-78613966eac4b15e347986ac96eabb1a.jpg", // Replace with the actual image URL
        },
        {
          id: 4,
          title: "Thornham",
          imageUrl: "https://shop.hangframing.com/packs/media/images/photo-placeholder-78613966eac4b15e347986ac96eabb1a.jpg", // Replace with the actual image URL
        },
      ],
      frames2: [
        {
          id: 1,
          title: "Small Gift frame in Brancaster (P)",
          price: "38.95",
          imageUrl: "https://bucketeer-a69f55fc-6100-46a4-b39e-d5ecc035e718.s3.eu-west-1.amazonaws.com/53i6s55wstrc73yp1pywmnvl30e1?response-content-disposition=inline%3B%20filename%3D%22brancaster_frame_1.jpg%22%3B%20filename%2A%3DUTF-8%27%27brancaster_frame_1.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVGPJVYVAERTJQOD%2F20230730%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230730T185710Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=109d22f9e8c4221ece2f1b8d676f8acef7171fbf0bd205ce950c2c7cadcbd924", // Replace with the actual image URL
        },
        {
          id: 2,
          title: "Small Gift frame in Brancaster (P)",
          price: "38.95",
          imageUrl: "https://bucketeer-a69f55fc-6100-46a4-b39e-d5ecc035e718.s3.eu-west-1.amazonaws.com/1qlmlg99c1zl9ozd337oinzbpg5y?response-content-disposition=inline%3B%20filename%3D%227x5_float_frame_ansel_jr_L.jpg%22%3B%20filename%2A%3DUTF-8%27%277x5_float_frame_ansel_jr_L.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVGPJVYVAERTJQOD%2F20230730%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230730T190949Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f5758fabef6287ea0295f1c380cacbee870b6f852be6621bae2eb05707caf7bb", // 
        },
        {
          id: 3,
          title: "Small Gift frame in Brancaster (P)",
          price: "38.95",
          imageUrl: "https://shop.hangframing.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdG9DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--35d532c1aa6696b06077bbb67e7984aca9dfe36e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREErQmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0cbd3fdfcf20eade2a552f7f0fe2c2cb2e0de479/small_square_gift_frame_irving.jpg", // Replace with the actual image URL
        },
        {
          id: 4,
          title: "Small Gift frame in Brancaster (P)",
          price: "38.95",
          imageUrl: "https://bucketeer-a69f55fc-6100-46a4-b39e-d5ecc035e718.s3.eu-west-1.amazonaws.com/tldx6prldptavyx5vo50jd9kw98s?response-content-disposition=inline%3B%20filename%3D%227x5_float_frame_ansel_jr_P.jpg%22%3B%20filename%2A%3DUTF-8%27%277x5_float_frame_ansel_jr_P.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVGPJVYVAERTJQOD%2F20230730%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230730T191109Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2caa58a299e05667c6d799074ed35566dfe6703f86fa21b1b526141e6d5a6a26", // Replace with the actual image URL
        },



      ]

    }
  },
  methods: {
    startFraming() {
      console.log("Start FRaming");

    },
    doFraming() {
      console.log("do FRaming");

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .right{
  padding: 50px;

} */
* {
  padding: 0;
  margin: 0;
}

.title {
  font-family: 'Lato', sans-serif;
  font-size: 37px;
  font-weight: bolder;


}

.title-link {
  text-decoration: none;
  color: inherit;
}

.font-heading {
  font-family: sans-serif;

}

.main {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.frame-row {
  margin-top: 20px;
}

.frame-card {
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.frame-card:hover {
  transform: scale(1.05);
}

.v-card-title {
  padding: 0;
  font-weight: bolder;
}

/* h3 {

  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
