<template>
  <div class="container">
    <h2>
      Welcome, <span class="high-light">{{ user?.name }}!</span><BR /> Please,
      add value to list
    </h2>
    <input v-model="value" placeholder="Value" />
    <button @click="onSubmit">Add</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { apiService } from "@/services/api.service";
import store from "@/store";
import { PropType } from "vue";
import { User } from "@/models/User.model";

@Options({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
})
export default class AddItem extends Vue {
  user!: User;
  value!: string;

  async onSubmit(): Promise<void> {
    let lastRequestTime = await apiService.addItem(this.user, this.value);
    store.dispatch("setLastRequestTime", lastRequestTime);
    let items = await apiService.getItems(this.user);
    store.dispatch("setItems", items);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.high-light {
  color: #3d9df5;
}
</style>
