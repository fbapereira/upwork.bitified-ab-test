<template>
  <div class="home">
    <AddItem name="john" />
    <ListItem name="john" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/List-Item.vue";
import AddItem from "@/components/Add-Item.vue";

@Options({
  components: {
    ListItem,
    AddItem,
  },
})
export default class List extends Vue {}
</script>
