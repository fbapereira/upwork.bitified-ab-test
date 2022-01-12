<template>
  <div class="container">
    <h2>Welcome, {{ name }}! <BR /> Please, add value to list</h2>
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

</style>
