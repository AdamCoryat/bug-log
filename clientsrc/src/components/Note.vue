<template>
  <div class="note">
    <p class="d-flex justify-content-between text-light">
      <span class="col-3">{{ note.creatorEmail }}</span
      ><span class="col-6">{{ note.content }}</span
      ><button v-if="isCreator" @click="deleteNote">delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "note",
  props: {
    note: {},
  },
  data() {
    return {};
  },
  computed: {
    isCreator() {
      return this.$store.state.profile.email == this.note.creatorEmail;
    },
  },
  methods: {
    deleteNote() {
      this.$store.dispatch("delete", {
        deletePath: "notes/" + this.note.id,
        id: this.note.id,
        resource: "notes",
        path: "bugs/" + this.note.bugId + "/notes",
      });
    },
  },
  components: {},
};
</script>

<style scoped></style>
