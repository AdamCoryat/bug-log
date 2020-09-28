<template>
  <main class="home container-fluid">
    <section class="row">
      <div class="col-12 justify-content-center d-flex">
        <div
          class="card m-2 bug-window d-flex justify-content-center flex-wrap align-content-center"
        >
          <section id="bug-interface" class="row">
            <div
              class="card bug-screen border-primary d-flex justifty-content-center"
            >
              <div class="col-12 d-flex justify-content-between">
                <div class="dropdown">
                  <button
                    class="btn btn-danger m-1 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      @click="
                        allFilter = true;
                        closedFilter = false;
                        openFilter = false;
                      "
                      href="#"
                      >All</a
                    >
                    <a
                      class="dropdown-item"
                      @click="
                        closedFilter = true;
                        openFilter = false;
                        allFilter = false;
                      "
                      href="#"
                    >
                      Closed</a
                    >
                    <a
                      class="dropdown-item"
                      @click="
                        openFilter = true;
                        closedFilter = false;
                        allFilter = false;
                      "
                      href="#"
                      >Open</a
                    >
                  </div>
                </div>
              </div>
              <section id="title" class="card bg-info">
                <h4 class="d-flex justify-content-between">
                  <span class="col-3">Title:</span
                  ><span class="col-3">Creator:</span
                  ><span class="col-3">Status:</span
                  ><span class="col-3">Last Modified:</span>
                </h4>
              </section>
              <section id="bug-injection">
                <div v-if="allFilter" class="bug-list">
                  <bug v-for="bug in bugs" :key="bug.id" :bug="bug" />
                </div>
                <div v-if="closedFilter" class="bug-list">
                  <bug v-for="bug in closedBugs" :key="bug.id" :bug="bug" />
                </div>
                <div v-if="openFilter" class="bug-list">
                  <bug v-for="bug in openBugs" :key="bug.id" :bug="bug" />
                </div>
              </section>
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
              <button class="btn btn-outline-primary" type="submit">
                <i class="fa fa-plus pointer text-light m-2"></i>
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
.bug-list {
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.bug-list::-webkit-scrollbar {
  width: 1em;
}
.bug-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.bug-list::-webkit-scrollbar-thumb {
  background-color: rgb(7, 38, 162);
  outline: 1px solid rgb(0, 0, 116);
}
</style>
