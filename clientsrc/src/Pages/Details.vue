<template>
  <main class="bug-details container-fluid">
    <section class="row justify-content-center">
      <div class="col-8">
        <div class="card bg-bug p-2 m-2">
          <h1 class="text-light text-center">{{ activeBug.title }}</h1>
          <h5 class="text-light d-flex justify-content-between">
            Created By: {{ activeBug.creatorEmail }}
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
  </main>
</template>

<script>
import Note from "../components/Note.vue";
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
    return {};
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {},
  components: {
    Note,
  },
};
</script>

<style scoped></style>
