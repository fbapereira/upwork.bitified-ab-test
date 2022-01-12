<template>
  <div class="list-item">
    <table class="table">
      <tr>
        <th>CREATED</th>
        <th>VALUE</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.created }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <p>{{ lastRequestTime ? `Last Request took ${lastRequestTime}ms` : "" }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Item } from "@/models/Item.model";
import { PropType } from "vue";

@Options({
  props: {
    items: {
      type: Object as PropType<Item[]>,
      required: true,
    },
    lastRequestTime: {
      type: String,
      required: false,
    },
  },
})
export default class ListItem extends Vue {
  items!: Item[];
  lastRequestTime!: Item[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/variables.scss";

.list-item {
  background: $white;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);
  color: $gray-2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 25rem;
  padding: 0.7rem;
  text-align: left;
  width: 20rem;

  .table {
    color: $black-1;
    width: 100%;

    th {
      color: $gray-3;
    }
  }

  p {
    font-size: 0.7rem;
  }
}
</style>
