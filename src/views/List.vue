<template>
  <div class="home">
    <AddItem class="add-item" name="john" />
    <ListItem class="list-item" name="john" />
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
<style>
.list-item {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

@media screen and (max-width: 992px) {
  .home {
    display: flex;
    flex-direction: column;
  }

  .list-item {
    bottom: auto;
    right: auto;
    position: initial;
    width: 80%;
    margin: auto;
  }
}
</style>
