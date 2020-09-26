<template>
  <div class="bug">
    <div class="card d-flex bg-secondary">
      <p class="text-light d-flex justify-content-between">
        <span class="col-3">{{ bug.title }}</span
        ><span class="col-3">{{ bug.creatorEmail }}</span
        ><span class="col-3">Status:</span
        ><span class="col-3">{{ bug.updatedAt }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bug: {},
  },
  name: "bug",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
