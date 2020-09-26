<template>
  <main class="bug-details container-fluid">
    <section class="row justify-content-center">
      <div class="col-8">
        <div class="card bg-bug p-2 m-2">
          <h1 class="text-light text-center">{{ activeBug.title }}</h1>
          <h5 class="text-light d-flex justify-content-between">
            Created By: {{ activeBug.creatorEmail }}
            {{ activeBug.updatedAt }}
            <span>Status:</span>
          </h5>
          <div class="card text-light bg-bug p-1">
            <p>{{ activeBug.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="card col-8 p-2 m-2 bg-bug">
        <div class="card-title bg-bug">
          <button
            v-if="$auth.isAuthenticated"
            type="button"
            class="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#noteForm"
          >
            Add Note
          </button>
          <h5 class="d-flex justify-content-between bg-bug text-light p-1">
            <span class="col-3">Name:</span><span class="col-6">Message:</span
            ><span class="col-3 text-right">Delete:</span>
          </h5>
          <div class="card-body">
            <note v-for="note in notes" :key="note.id" :note="note" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <form-modal id="noteForm">
        <template v-slot:header>
          <h5>Create New Bug</h5>
        </template>
        <template v-slot:body>
          <div class="text-center d-flex">
            <form @submit.prevent="addNote" class="m-2">
              <input
                type="text"
                placeholder="title"
                v-model="newNote.content"
                required
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
import Note from "../components/Note.vue";
import FormModal from "../components/FormModal.vue";
export default {
  name: "bug-details",
  props: {},
  mounted() {
    this.$store.dispatch("getResource", {
      path: "bugs/" + this.$route.params.id,
      resource: "activeBug",
    }),
      this.$store.dispatch("getResource", {
        path: "bugs/" + this.$route.params.id + "/notes",
        resource: "notes",
      });
  },
  data() {
    return {
      date: {},
      newNote: {},
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    dateFormat() {
      let d = this.bug.updatedAt;
      let dateArr = d.split("");
      let date =
        d[5] +
        d[6] +
        d[7] +
        d[8] +
        d[9] +
        d[4] +
        d[0] +
        d[1] +
        d[2] +
        d[3] +
        " " +
        d[12] +
        d[13] +
        d[14] +
        d[15] +
        d[16] +
        d[17] +
        d[18];
      this.date = date;
    },
    addNote() {
      this.newNote.bugId = this.$route.params.id;
      this.newNote.creatorEmail = this.$store.state.profile.email;
      this.$store.dispatch("create", {
        getPath: "bugs/" + this.$route.params.id + "/notes",
        path: "notes",
        resource: "notes",
        data: this.newNote,
      });
    },
  },
  components: {
    Note,
    FormModal,
  },
};
</script>

<style scoped></style>
