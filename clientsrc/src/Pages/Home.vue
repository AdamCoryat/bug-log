<template>
  <div class="home container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex">
        <div
          class="card m-2 bug-window d-flex justify-content-center flex-wrap align-content-center"
        >
          <div class="row">
            <div class="card bug-screen border-light">
              <div class="card bg-info d-flex justify-content-between">
                <h4 class="d-flex justify-content-between">
                  <span class="col-3">Title:</span
                  ><span class="col-3">Creator:</span
                  ><span class="col-3">Status:</span
                  ><span class="col-3">Last Modified:</span>
                </h4>
              </div>
              <bug v-for="bug in bugs" :key="bug.id" :bug="bug" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "../components/Bug.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getResource", {
      path: "bugs",
      resource: "bugs",
    });
  },
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
  },
  methods: {},
  components: {
    Bug,
  },
};
</script>
<style scoped>
.bug-window {
  min-height: 80vh;
  min-width: 70vw;
  background-color: rgba(0, 0, 0, 0.151);
}
.bug-screen {
  min-height: 75vh;
  min-width: 65vw;
  background-color: rgba(0, 0, 0, 0.555);
}
</style>
