<template>
  <main class="bug-details container-fluid">
    <section id="bug-body" class="row justify-content-center">
      <div class="col-12 col-md-8 bg-bug p-2 m-2">
        <div class="card bg-bug p-2 m-2">
          <div id="bug-buttons" class="d-flex justify-content-between p-1">
            <i
              class="fa fa-pencil-square-o text-light text-left pointer"
              v-if="isCreator && !activeBug.closed"
              type="button"
              data-toggle="modal"
              data-target="#editForm"
            ></i>
            <i
              class="fa fa-times text-light text-right pointer"
              v-if="isCreator && !activeBug.closed"
              @click="closeBug"
            ></i>
          </div>
          <div id="bug-info">
            <div id="email-title">
              <h1 class="text-light text-center p-2">{{ activeBug.title }}</h1>
              <h5 class="text-warning">
                Created By:
                <span class="email text-info align-self-start">{{
                  activeBug.creatorEmail
                }}</span>
              </h5>
            </div>
            <div id="open-info">
              <h5 class="open text-open" v-if="!activeBug.closed">
                <span class="text-warning">Status: </span>Open
              </h5>
              <h5 class="text-warning" v-if="!activeBug.closed">
                Last Modified:
                <span class="date text-info justify-self-end">{{
                  activeBug.updatedAt | formatDate
                }}</span>
              </h5>
            </div>
            <div id="closed-info">
              <h5 class="text-closed" v-if="activeBug.closed">
                <span class="text-warning">Status: </span>Closed
              </h5>
              <h5 class="text-warning" v-if="activeBug.closed">
                Time Closed:
                <span class="date text-info date">{{
                  activeBug.closedDate | formatDate
                }}</span>
              </h5>
            </div>
          </div>
          <div class="card text-light bg-bug p-1">
            <p>{{ activeBug.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="note-card" class="row justify-content-center">
      <div id="note-col" class="card col-12 col-md-8 p-2 m-2 bg-bug">
        <div id="note-title" class="card-title bg-bug">
          <i
            class="fa fa-plus text-light p-1"
            v-if="$auth.isAuthenticated"
            type="button"
            data-toggle="modal"
            data-target="#noteForm"
          ></i>
          <h4 class="d-flex justify-content-between bg-bug text-info p-1">
            Notes:
          </h4>
          <div id="note-injection" class="card-body">
            <note v-for="note in notes" :key="note.id" :note="note" />
          </div>
        </div>
      </div>
    </section>
    <section id="add-note">
      <form-modal id="noteForm">
        <template v-slot:header>
          <h5>New Note</h5>
        </template>
        <template v-slot:body>
          <div class="text-center d-flex">
            <form @submit.prevent="addNote" class="m-2">
              <input
                type="text"
                placeholder="Content..."
                v-model="newNote.content"
                required
                class="bg-bug text-info"
              />
              <i class="fa fa-plus pointer text-light m-2" type="submit"> </i>
            </form>
          </div>
        </template>
      </form-modal>
    </section>
    <section>
      <form-modal id="editForm">
        <template v-slot:header>
          <h5>New Note</h5>
        </template>
        <template v-slot:body>
          <div class="text-center d-flex"></div>
          <form @submit.prevent="editBug" class="m-2">
            <input
              type="text"
              placeholder="Content..."
              v-model="bugEdit.title"
              required
              class="bg-bug text-info"
            />
            <input
              type="text"
              placeholder="Content..."
              v-model="bugEdit.description"
              required
              class="bg-bug text-info"
            />
            <button class="btn btn-outline-primary" type="submit">
              <i class="fa fa-plus pointer text-light m-2"></i>
            </button>
          </form>
        </template>
      </form-modal>
    </section>
  </main>
</template>

<script>
import { onAuth } from "@bcwdev/auth0-vue";
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
      bugEdit: {},
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
    async isCreator() {
      await this.$store.state.profile;
      await this.$store.state.activeBug;
      let profileEmail = await this.$store.state.profile.email;
      let creatorEmail = await this.activeBug.creatorEmail;
      return profileEmail == creatorEmail;
    },
  },
  methods: {
    editBug() {
      this.bugEdit.creatorEmail = this.activeBug.creatorEmail;
      this.$store.dispatch("edit", {
        getPath: "bugs/" + this.activeBug.id,
        path: "bugs/" + this.activeBug.id,
        data: this.bugEdit,
        resource: "activeBug",
      });
      $(".modal-backdrop").hide();
      $(".modal").hide();
      this.bugEdit = {};
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
      this.newNote = {};
      $(".modal-backdrop").hide();
      $(".modal").hide();
    },
    closeBug() {
      this.$store.dispatch("delete", {
        deletePath: "bugs/" + this.activeBug.id,
        resource: "activeBug",
        path: "bugs/" + this.activeBug.id,
      });
    },
  },
  components: {
    Note,
    FormModal,
  },
};
</script>

<style scoped>
.email {
  font-size: 1rem;
}
.date {
  font-size: 1rem;
}
</style>
