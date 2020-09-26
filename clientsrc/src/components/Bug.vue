<template>
  <div class="bug">
    <router-link :to="{ name: 'Details', params: { id: bug.id } }">
      <div class="card d-flex bg-secondary">
        <p class="text-light d-flex justify-content-between">
          <span class="col-3">{{ bug.title }}</span
          ><span class="col-3">{{ bug.creatorEmail }}</span
          ><span class="col-3">Status:</span
          ><span class="col-3">{{ bug.updatedAt }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bug",
  props: {
    bug: {},
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
