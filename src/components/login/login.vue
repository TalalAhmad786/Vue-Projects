<template>
    <div class="login">
        <h1>"Login to Your Vue.js App"</h1>

        <form @submit.prevent="submit">
            <label for="Usname">Username :  </label>
            <input type="text" v-model="form.username" ref="userref"><br>
            <label for="password">Password : </label>
            <input type="text" v-model="form.password" ref="passref"><br>
            <input type="button" value="Submit" @click="checkLoginCredentials">
            <p v-if="success" style="color: green;">{{ success }}</p>
            <p v-if="error" style="color: red;">{{ error }}</p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            success: '',
            error: '',
            form: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        checkLoginCredentials() {
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            //console.log(storedPassword);
            if (this.form.username === storedUsername && this.form.password === storedPassword) {
                this.success = 'Login successful!';
                this.error = '';
                this.$router.push({ path: '/home' });
            } else {
                this.success = '';
                this.error = 'Invalid credentials. Please try again.';
            }
        }
    }
};
</script>
