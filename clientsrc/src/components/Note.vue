<template>
  <div class="note">
    <section id="note-info" class="text-light">
      <div class="col-12 text-warning p-1 m-1">
        <div id="note-buttons" class="d-flex justify-content-between p-1">
          <i
            class="fa fa-pencil-square-o text-light pointer"
            v-if="isCreator"
            @click="toggleEdit = !toggleEdit"
          ></i>
          <i
            class="fa fa-times text-light pointer"
            v-if="isCreator"
            @click="deleteNote"
          ></i>
        </div>
        <form v-if="toggleEdit" @submit.prevent="editNote" class="m-2">
          <input
            type="text"
            placeholder="Content..."
            v-model="noteEdit.content"
            required
          />
        </form>
        <p>{{ note.creatorEmail }}</p>
      </div>
      <section id="note-body" class="card bg-bug text-info">
        {{ note.content }}
      </section>
    </section>
    <!-- <button
      v-if="isCreator"
      type="button"
      class="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#noteEdit"
    >
      Edit
    </button> -->
    <!--  -->
    <form-modal id="noteEdit">
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
    </form-modal>
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
      toggleEdit: false,
    };
  },
  computed: {
    isCreator() {
      let profileEmail = this.$store.state.profile.email;
      let creatorEmail = this.note.creatorEmail;
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
