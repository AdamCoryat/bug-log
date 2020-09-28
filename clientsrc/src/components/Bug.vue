<template>
  <div class="bug">
    <router-link :to="{ name: 'Details', params: { id: bug.id } }">
      <div v-if="!bug.closed" class="card d-flex bg-secondary">
        <p class="text-light d-flex justify-content-between">
          <span class="col-3">{{ bug.title }}</span
          ><span class="col-3">{{ bug.creatorEmail }}</span
          ><span class="col-3 text-open">Open</span
          ><span class="col-3">{{
            bug.updatedAt | formatDate("timezone", "America/Denver")
          }}</span>
        </p>
      </div>
      <div v-if="bug.closed" class="card d-flex bg-secondary">
        <p class="text-info d-flex justify-content-between">
          <span class="col-3">{{ bug.title }}</span
          ><span class="col-3">{{ bug.creatorEmail }}</span
          ><span class="col-3 text-closed">Closed</span
          ><span type="date" id="date" class="col-3">{{
            bug.updatedAt | formatDate("timezone", "America/Denver")
          }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bug",
  mounted() {},
  props: {
    bug: {},
  },
  data() {
    return {
      date: {},
    };
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
