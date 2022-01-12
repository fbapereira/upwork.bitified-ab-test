<template>
  <div class="home">
    <AddItem class="add-item" :name="name" />
    <ListItem class="list-item" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/List-Item.vue";
import AddItem from "@/components/Add-Item.vue";
import { apiService } from "@/services/api.service";

@Options({
  components: {
    ListItem,
    AddItem,
  },
})
export default class List extends Vue {
  name = apiService.user.name;
}
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
