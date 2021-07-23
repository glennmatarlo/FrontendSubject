<template>
    <div>
        <button class="btn btn-success float-right" @click="onNew">
            Add New Subject
        </button>
        <h4>Subject View</h4>

        <hr>

        <form action="" @submit.prevent="onSave">

            <b-form-group label="Subject Title">
                <b-form-input v-model="subject.subj_title"></b-form-input>
            </b-form-group>
            <b-form-group label="Instructor">
                <b-form-input v-model="subject.instructor"></b-form-input>
            </b-form-group>
            <b-form-group>
                <button class="btn btn-primary" type="submit">Save Changes</button>
                <button class="btn btn-danger" type="button" @click="onDelete" v-if="subject.id">Delete</button>
            </b-form-group>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        subject:{}
    },

    methods: {
        async onSave() {
            try {
                if(!this.subject.id) {
                    await this.$axios.post('/api/subjects', this.subject)
                }else {
                    await this.$axios.put('/api/subjects/'+this.subject.id, this.subject)
                }
                this.$emit('saved');
            }catch(err) {
                alert(err.response.data.message)
            }
        },
        onNew() {
            this.$emit('newItem')
        },
        async onDelete() {
            try {
                this.$axios.delete('/api/subjects/'+this.subject.id)
                this.$emit('deleted')
            }catch(err) {
                alert(err.response.data.message)
            }
        }
    }
}
</script>