<template>
    <div class="signup">
        <h1>"Welcome to Your Vue.js App"</h1>


        <form @submit.prevent="submit"></form>
        <label for="Usname">Username :  </label>
        <input type="text" v-model="form.username" ref="userref"><br>
        <label for="password">Password : </label>
        <input type="text" v-model="form.password" ref="passref"><br>
        <label for="confirmpass">Confirm Password :  </label>
        <input type="text" v-model="form.confirm"><br>
        <label for="email">Email :  </label>
        <input type="text" v-model="form.email"><br><br>
        <input type="button" value="Submit" @click="submit(form.username, form.password, form.email)">
        <p v-if="error" style="color : red;">{{ error }}</p>

     

    </div>
</template>


<script>

export default {
    name: 'SignupPage',
 
    data() {
        return {
            error: '',
            form: {
                username: '',
                email: '',
                password: '',
                confirm: ''
            }
        }
    },
    methods: {

        submit(username, password, email) {
            if ((this.isUserValid(username)) && (this.isPassValid(password)) && (this.isValidEmail(email)) && (this.isPassConfirm)) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
                this.$router.push({ path: "/login" });
            }


        },
        isUserValid(username) {
            const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '/'];
            const numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


            let flag = 0;

            for (let i = 0; i < username.length; i++) {
                if (username[i] === ' ') {
                    this.error = ("The Username includes spaces ");
                    break;
                }
                for (let j = 0; j < numb.length; j++) {
                    if (username[i] == specialChar[j] || username[i] == numb[j]) {
                        flag = 1;
                    }
                }
            }

            if (flag === 0) {
                this.error = "The Username Must include a special charcter or number";

            }
            else {
                return true;
            }
        },
        isPassValid(password) {

            let flagpass = 0;
            for (let i = 0; i < password.length; i++) {
                const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '/'];
                const numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

                //let charpass = password[i];
                for (let j = 0; j < numb.length; j++) {
                    if ((password.charAt(0) === password.charAt(0).toUpperCase()) && (password.length >= 8) && password[i] == specialChar[j]) {
                        flagpass = 1;
                    }

                }
            }
            if (flagpass === 0) {
                this.error = "Your password must contain special charcters, must contain 8 charcters and first letter should be capital !";

            }
            else {
                return true;

            }
        },
        isValidEmail(email) {

            let FLAG_COUNT = 0;
            for (let i = 0; i < email.length; i++) {

                let chr = '@'
                let charemail = email[i];
                let lastchar = email.at(-1);
                if (!(charemail.match('@')) && !(chr === lastchar) ) {
                    FLAG_COUNT = 1
                }

            }
            if (FLAG_COUNT === 0) {
                this.error= "Enter Valid Email"
            }
            else{
                return true;
            }
        },
        isPassConfirm(){
          
           const p1= this.form.password;
           const p2 = this.form.confirm;
                
           if(p1===p2){
            return true;

           }
           else{
            this.error= "mddkmmd"
           }


        }

    }
}
</script>