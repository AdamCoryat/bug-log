<template>
  <div class="note">
    <p class="d-flex justify-content-between text-light">
      <span class="col-3">{{ note.creatorEmail }}</span
      ><span class="col-6">{{ note.content }}</span
      ><button v-if="isCreator" @click="deleteNote">delete</button>
    </p>
    <button
      v-if="isCreator"
      type="button"
      class="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#noteEdit"
    >
      Edit
    </button>
    <form @submit.prevent="editNote" class="m-2">
      <input
        type="text"
        placeholder="title"
        v-model="noteEdit.content"
        required
      />
      <button class="btn btn-success border-dark" type="submit">edit</button>
    </form>

    <!-- <form-modal id="noteEdit">
      <template v-slot:header>
        <h5>Create New Bug</h5>
      </template>
      <template v-slot:body>
        <div class="text-center d-flex">
          <form @submit.prevent="editNote" class="m-2">
            <input
              type="text"
              placeholder="title"
              v-model="noteEdit.content"
              required
            />
            <button
              data-toggle="modal"
              class="btn btn-success border-dark"
              type="submit"
            >
              Create Bug
            </button>
          </form>
        </div>
      </template>
    </form-modal> -->
  </div>
</template>

<script>
import FormModal from "../components/FormModal.vue";
export default {
  name: "note",
  props: {
    note: {},
  },
  data() {
    return {
      noteEdit: {},
    };
  },
  computed: {
    isCreator() {
      let profileEmail = this.$store.state.profile.email.toLowerCase();
      let creatorEmail = this.note.creatorEmail.toLowerCase();
      return profileEmail == creatorEmail;
    },
  },
  methods: {
    editNote() {
      this.noteEdit.creatorEmail = this.note.creatorEmail;
      this.$store.dispatch("edit", {
        getPath: "bugs/" + this.note.bugId + "/notes",
        path: "notes/" + this.note.id,
        data: this.noteEdit,
        resource: "notes",
      });
      this.noteEdit = {};
    },
    deleteNote() {
      this.$store.dispatch("delete", {
        deletePath: "notes/" + this.note.id,
        resource: "notes",
        path: "bugs/" + this.note.bugId + "/notes",
      });
    },
  },
  components: {
    FormModal,
  },
};
</script>

<style scoped></style>
