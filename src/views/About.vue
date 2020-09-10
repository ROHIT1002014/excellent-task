<template>
  <div class="about">
    <h1>This page contain detail about selected card. {{this.$route.param}}</h1>
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4 mb-4 col-md-4 col-sm-4 mb-2">
          <div class="card mx-auto" style="width: 18rem; height: 30rem !important">
            <img class="card-img-top img-fluid" :src="currentDetail.thumbnailUrl" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ currentDetail.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <p class="btn btn-primary">
                <router-link :to="{ name: 'Home'}">
                  <span class="text-white">Back To Home</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  data () {
      return {
        name: 'HelloWorld',
        pageNumber: 0,
      }
    },
  props: {
    msg: String
  },
   computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters ({
        currentDetail: "currentDetail",
    }),
  },
  methods:{
    // nextPage(){
    //   this.pageNumber++;
    //   this.$store.dispatch('fetchUser', {id: this.pageNumber});
    // },
    // prevPage(){
    //   this.pageNumber--;
    //   this.$store.dispatch('fetchUser', {id: this.pageNumber});
    // },
    // selectedPage(page, currentValue){
    //   this.pageNumber = page.pageNumber+currentValue
    //   this.$store.dispatch('fetchUser', {id: page.pageNumber+currentValue});
    // },
    // endPage(page){
    //   this.$store.dispatch('fetchUser', {id: page});
    // },
    // LastPage(){
    //   let a = Math.floor(this.totalData / 9);
    //   this.$store.dispatch('fetchUser', {id: a});
    // }
  },
  created(){
    this.$store.dispatch('fetchCurrentDetail', this.$route.params.id);
  },
}
</script>