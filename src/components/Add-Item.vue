<template>
  <div class="container">
    <h2>
      Welcome, <span class="high-light">{{ user?.name }}!</span><BR /> Please,
      add value to list
    </h2>
    <div>
      <input v-model="value" placeholder="Value" />
      <FormError :error="error"></FormError>
    </div>
    <button @click="onSubmit">Add</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { apiService } from "@/services/api.service";
import store from "@/store";
import { PropType } from "vue";
import { User } from "@/models/User.model";
import FormError from "@/components/Form-Error.vue";

@Options({
  components: {
    FormError,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
})
export default class AddItem extends Vue {
  user!: User;
  value = "";
  error = "";

  async onSubmit(): Promise<void> {
    try {
      let lastRequestTime = await apiService.addItem(this.user, this.value);
      store.dispatch("setLastRequestTime", lastRequestTime);
      let items = await apiService.getItems(this.user);
      store.dispatch("setItems", items);
    } catch (err) {
      this.error =
        err?.response?.data?.validation_error?.details[0].message ||
        "unknown error";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/variables.scss";

.high-light {
  color: $blue;
}
</style>
