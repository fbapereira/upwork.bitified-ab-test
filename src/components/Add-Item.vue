<template>
  <div class="container">
    <h2>
      Welcome, <span class="high-light">{{ name }}!</span><BR /> Please, add
      value to list
    </h2>
    <input placeholder="Value" />
    <button>Add</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
  },
})
export default class AddItem extends Vue {
  name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.high-light {
  color: #3d9df5;
}
</style>
