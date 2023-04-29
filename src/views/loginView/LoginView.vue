<template>
  <div class="login-wrapper w-100 d-flex justify-center align-center">
    <div ref="container" class="bg"></div>
    <div class="login bg-white p-5">
      <div class="login__logo d-flex justify-center align-center mb-3">
        <img src="@/assets/global/logo.png" alt="">
      </div>
      <h2 class="login__heading">Sign in</h2>
      <p class="mb-3">Please enter your email and password</p>
      <Form @submit="onSubmit" class="login__form form-validation d-flex flex-column">
        <Field :rules="emailValidation" @keyup="moveElements" name="email" type="email" placeholder="Your email address"/>
        <ErrorMessage name="email" />
        <Field :rules="passwordValidation" @keyup="moveElements" name="password" type="password" placeholder="Password" class="mt-2"/>
        <ErrorMessage name="password" />
        <button @click="onSubmit" class="btn btn--primary mt-3">Sign in</button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { login } from '@/services/localStorage'
import { RoutesMain } from '@/enums/routes'
import { validateEmail, validatePassword } from '@/configs/vee-validate-rules'

const vh = window.innerHeight;
const vw = window.innerWidth;

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      container: null as HTMLElement | null,
    }
  },
  methods: {
    emailValidation(value) {
      return validateEmail(value)
    },
    passwordValidation(value) {
      return validatePassword(value)
    },
    onSubmit(values) {
      if (values.email !== undefined) {
        login(values.email)
        this.$router.push({name: RoutesMain.Dashboard})
      }
    },
    moveElements() {
      const containerEl = this.container;

      if (containerEl) {
        for (const _ of Array.from({ length: 2 })) {
          const newDiv = document.createElement('div');
          newDiv.classList.add('element');
          containerEl.appendChild(newDiv);
        }

        const children = Array.from(containerEl.children)
        children.forEach((child) => {
          const rg = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min);
          (child as HTMLElement).style.transform = `translate(${rg(vw, 100)}px,${rg(vh, 100)}px) rotate(${rg(360, 0)}deg)`;
          (child as HTMLElement).style.width = `${rg(60, 15)}px`;
          (child as HTMLElement).style.height = `${rg(60, 15)}px`;
        });
      }
    },
  },
  mounted() {
    this.container = this.$refs.container as HTMLElement
  },
})
</script>

<style scoped lang="scss" src="./loginView.scss"></style>