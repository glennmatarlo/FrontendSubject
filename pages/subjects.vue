<template>
    <div>
<NavBar />
        <div class="container">
        <h1>My Subjects</h1>
        <div class="row">
            <div class="col-6">
                <h4>List of Subjects</h4>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action" v-for="subject in subjects" :key="subject.id" @click="onSelected(subjects)">
                        {{subject.subj_title}} <span class="float-right">{{subject.instructor}}</span>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <SubjectView :subject="selectedSubject" @saved="onChanges" @newItem="onNew" @deleted="onChange"/>
            </div>
        </div>
    </div>
    <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return{
            subjects:[],
            selectedSubject: {}
        }
    },
    methods:{
        async getMySubjects() {
            await this.$axios.get('/subjects')
            .then((res)=>{
                if(res.status==200){
                    this.subjects = res.data
                }
            })
        },
        onChange() {
            this.getMySubjects()
            this.selectedSubject = {}
        },
        onSelected(subject) {
            this.selectedSubject = subject;
        },
        onNew() {
            this.selectedSubject = {}
        }
    },
    created() {
        this.getMySubjects()
    }
}

</script>