<template>
  <div class="note">
    <p class="d-flex justify-content-between text-light">
      <span class="col-3">{{ note.creatorEmail }}</span
      ><span class="col-6">{{ note.content }}</span
      ><span class="col-3 text-right">X</span>
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
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
