<template>
  <div class="bug">
    <router-link :to="{ name: 'Details', params: { id: bug.id } }">
      <div v-if="!bug.closed" class="card d-flex bg-secondary">
        <p class="text-light d-flex justify-content-between">
          <span class="col-3">{{ bug.title }}</span
          ><span class="col-3">{{ bug.creatorEmail }}</span
          ><span class="col-3 text-open">Open</span
          ><span class="col-3">{{ this.date }}</span>
        </p>
      </div>
      <div v-if="bug.closed" class="card d-flex bg-secondary">
        <p class="text-info d-flex justify-content-between">
          <span class="col-3">{{ bug.title }}</span
          ><span class="col-3">{{ bug.creatorEmail }}</span
          ><span class="col-3 text-closed">Closed</span
          ><span type="date" id="date" class="col-3">{{ this.date }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bug",
  mounted() {
    this.dateFormat();
  },
  props: {
    bug: {},
  },
  data() {
    return {
      date: {},
    };
  },
  computed: {},
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
  },
  components: {},
};
</script>

<style scoped>
.text-closed {
  color: rgb(44, 80, 238);
}
.text-open {
  color: greenyellow;
}
</style>
