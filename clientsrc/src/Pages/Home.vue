<template>
  <main class="home container-fluid">
    <section class="row">
      <div class="col-12 justify-content-center d-flex">
        <div
          class="card m-2 bug-window d-flex justify-content-center flex-wrap align-content-center"
        >
          <section class="row">
            <div
              class="card bug-screen border-primary d-flex justifty-content-center"
            >
              <div class="col-12 d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-primary "
                  @click="
                    closedFilter = !closedFilter;
                    openFilter = false;
                    allFilter = false;
                  "
                >
                  Closed
                </button>
                <button
                  type="button"
                  class="btn btn-primary "
                  @click="
                    openFilter = !openFilter;
                    closedFilter = false;
                    allFilter = false;
                  "
                >
                  Open
                </button>
                <button
                  type="button"
                  class="btn btn-primary "
                  @click="
                    allFilter = !allFilter;
                    closedFilter = false;
                    openFilter = false;
                  "
                >
                  All
                </button>
              </div>
              <div class="card bg-info">
                <h4 class="d-flex justify-content-between">
                  <span class="col-3">Title:</span
                  ><span class="col-3">Creator:</span
                  ><span class="col-3">Status:</span
                  ><span class="col-3">Last Modified:</span>
                </h4>
              </div>
              <div v-if="allFilter">
                <bug v-for="bug in bugs" :key="bug.id" :bug="bug" />
              </div>
              <div v-if="closedFilter">
                <bug v-for="bug in closedBugs" :key="bug.id" :bug="bug" />
              </div>
              <div v-if="openFilter">
                <bug v-for="bug in openBugs" :key="bug.id" :bug="bug" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section id="modals">
      <form-modal id="bugForm">
        <template v-slot:header>
          <h5>Create New Bug</h5>
        </template>
        <template v-slot:body>
          <div class="text-center d-flex">
            <form @submit.prevent="addBug" class="m-2">
              <input
                type="text"
                placeholder="title"
                v-model="newBug.title"
                required
              />
              <input
                type="text"
                placeholder="description"
                v-model="newBug.description"
                required
                class="text-light"
              />
              <button class="btn btn-success border-dark" type="submit">
                Create Bug
              </button>
            </form>
          </div>
        </template>
      </form-modal>
    </section>
  </main>
</template>

<script>
import router from "../router/index.js";
import FormModal from "../components/FormModal.vue";
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
    return {
      newBug: {},
      allFilter: true,
      closedFilter: false,
      openFilter: false,
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
    openBugs() {
      return this.$store.state.bugs.filter((b) => !b.closed);
    },
    closedBugs() {
      return this.$store.state.bugs.filter((b) => b.closed);
    },
  },
  methods: {
    addBug() {
      this.$store.dispatch("createBug", {
        path: "bugs",
        resource: "activeBug",
        data: this.newBug,
      });
      this.newBug = {};
      $(".modal-backdrop").hide();
    },
    filterBugs() {
      return this.$store.state.bugs.filter((b) => b.closed == false);
      console.log(this.$store.state.bugs);
    },
  },
  components: {
    Bug,
    FormModal,
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
