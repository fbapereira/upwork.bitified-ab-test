<template>
  <div class="container">
    <h2>Get started by choosing a name below</h2>
    <div>
      <input v-model="name" placeholder="Value" />
      <FormError :error="error"></FormError>
    </div>
    <button @click="onSubmit">Continue</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { apiService } from "@/services/api.service";
import FormError from "@/components/Form-Error.vue";
import store from "@/store";

@Options({
  components: {
    FormError,
  },
})
export default class Register extends Vue {
  name = "";
  error = "";

  async onSubmit(): Promise<void> {
    try {
      const user = await apiService.create(this.name);
      store.dispatch("register", user);
      this.$router.push("List");
    } catch (err) {
      this.error =
        err?.response?.data?.validation_error?.details[0].message ||
        "unknown error";
    }
  }
}
</script>
<style scoped lang="scss">
.form-error {
  visibility: hidden;
  position: absolute;
  height: 3rem;
  line-height: 1.5rem;
  background-color: #fff;
  color: #e77777;
  text-align: center;
  padding: 5px 0;
  border: solid 2px #e77777;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  margin-left: 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 101%;
    margin-top: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent #e77777 transparent transparent;
    color: white;
  }

  &.error {
    visibility: visible;
    opacity: 1;
  }
}
</style>
