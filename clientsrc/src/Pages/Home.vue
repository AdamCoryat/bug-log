<template>
  <main class="home container-fluid">
    <section class="row">
      <button
        v-if="$auth.isAuthenticated"
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#bugForm"
      >
        Add Bug
      </button>

      <div class="col-12 justify-content-center d-flex">
        <div
          class="card m-2 bug-window d-flex justify-content-center flex-wrap align-content-center"
        >
          <section class="row">
            <div class="card bug-screen border-primary">
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
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
  },
  methods: {
    async addBug() {
      // document.getElementById('bugForm').setAttribute.data-dismiss="modal
      this.$store.dispatch("createBug", {
        getPath: "bugs",
        path: "bugs",
        resource: "activeBug",
        data: this.newBug,
      });
      this.newBug = {};
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
