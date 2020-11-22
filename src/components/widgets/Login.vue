<template>
  <div>
    <div class="card">
      <div class="card-header">Lajmerohu</div>
      <div class="card-body">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="E-maili Juaj"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              type="password"
              required
              placeholder="Fjalkalimi Juaj"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="mr-2" variant="success"
            >Lajmerohu</b-button
          >
          <b-button type="reset" variant="primary">Regjistrohu</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style></style>
