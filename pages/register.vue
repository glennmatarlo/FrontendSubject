<template>
    <div>
        <NavBar />
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4 mt-3">
                    <b-card header="User Registration">
                        <form action="#" @submit.prevent="onRegister">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" v-model="user.name" id="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="course">Course</label>
                                <input type="text" v-model="user.course" id="course" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="user.email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-block" type="submit">Register</button>
                            </div>
                        </form>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    data() {
        return {
            user: {}
        }
    },
    methods: {
        async onRegister() {
            this.$axios.post('/api/register', this.user)
            .then((res)=>{
                if(res.status==202) {
                    alert(res.data.message)
                    this.user={}
                }
            })
        }
    }
}
</script>