<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div v-for="user in user" :key="user.id">
        <div class="col-lg-4 mb-4 col-md-4 col-sm-4 mb-2">
          <div class="card mx-auto" style="width: 18rem; height: 30rem !important">
            <img class="card-img-top img-fluid" :src="user.thumbnailUrl" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ user.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <div class="d-flex">
              <a class="btn mr-auto  btn-primary">
                <router-link :to="{ name: 'About', params: { id: user.id }}">
                  <span class="text-white">More Info</span>
                </router-link>
              </a>
              <a class="btn btn-danger" @click="deleteCurrentPage(user.id)">
                <span class="text-white">Delete</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item" @click="endPage(0)">
        <a class="page-link"  aria-label="Previous">
        First
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="prevPage" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">First</span>
        </a>
      </li>
      <li class="page-item page-link" @click="selectedPage({pageNumber},1)">{{ pageNumber+2 }}</li>
      <li class="page-item page-link" @click="selectedPage({pageNumber},2)">{{ pageNumber+3 }}</li>
      <li class="page-item page-link" @click="selectedPage({pageNumber},3)">{{ pageNumber+4 }}</li>
      <li class="page-item">
        <a class="page-link" @click="nextPage" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
      <li class="page-item" @click="LastPage()">
        <a class="page-link" aria-label="Next">
          Last
        </a>
      </li>
    </ul>
  </nav>
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
        user: "user",
        totalData: "totalData"
    }),
  },
  methods:{
    nextPage(){
      this.pageNumber++;
      this.$store.dispatch('fetchUser', {id: this.pageNumber});
    },
    prevPage(){
      this.pageNumber--;
      this.$store.dispatch('fetchUser', {id: this.pageNumber});
    },
    selectedPage(page, currentValue){
      this.pageNumber = page.pageNumber+currentValue
      this.$store.dispatch('fetchUser', {id: page.pageNumber+currentValue});
    },
    endPage(page){
      this.$store.dispatch('fetchUser', {id: page});
    },
    LastPage(){
      let a = Math.floor(this.totalData / 9);
      this.$store.dispatch('fetchUser', {id: a});
    },
    deleteCurrentPage(page){
      this.$store.dispatch('deleteInfo', {id: page});
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
