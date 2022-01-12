<template>
  <div class="list-item">
    <table>
      <tr>
        <th>CREATED</th>
        <th>VALUE</th>
      </tr>
      <tr>
        <td>2021-01-01</td>
        <td>Some Value</td>
      </tr>
    </table>
    <p>Last Request took 57ms</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
  },
})
export default class ListItem extends Vue {
  name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
