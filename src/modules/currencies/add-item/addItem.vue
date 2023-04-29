<template>
  <div class="currency-add">
    <div class="currency-add__heading d-flex justify-between align-center px-3 py-1">
      <h3>Add Currency</h3>
      <div>
        <button @click="closeForm" class="cancel mr-1">Cancel</button>
        <button @click="triggerSubmit" class="add">Add</button>
      </div>
    </div>
    <Form @submit="onSubmit" :initial-values="formValues" class="currency-add__form form-validation d-flex flex-column px-3">
      <label class="font-600" for="name">Currency name</label>
      <Field :rules="requiredValidation" type="text" name="name" placeholder="Add name"/>
      <ErrorMessage name="name" />
      <label class="font-600" for="code">Currency code</label>
      <Field :rules="codeValidation" :disabled="isEdit" type="text" name="code" placeholder="e.g. USD"/>
      <ErrorMessage name="code" />
      <label class="font-600" for="symbol">Currency symbol</label>
      <Field :rules="symbolValidation" type="text" name="symbol" placeholder="Add symbol"/>
      <ErrorMessage name="symbol" />
      <button ref="submitBtn" class="d-none"></button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { Refs } from '@/interfaces/html-element'
import { Currency } from '@/interfaces/currency'
import { RoutesNavigation } from '@/enums/routes'
import { Errors } from '@/enums/input-errors'
import { validateRequired, validateCode, validateSymbol } from '@/configs/vee-validate-rules'

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    currencies: {
      type: Array as PropType<Currency[]>,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    requiredValidation(value: string) {
      return validateRequired(value)
    },
    codeValidation(value: string) {
      if (!this.isEdit && this.currencies.some((currency: Currency) => currency.code === value)) {
        return Errors.UniqueCode
      }
      return validateCode(value)
    },
    symbolValidation(value: string) {
      return validateSymbol(value)
    },
    onSubmit(values: Currency, actions) {
      values.id = this.id
      this.$store.dispatch('CurrenciesModule/getCurrencyInfo', values)
      actions.setValues({
        name: '',
        code: '',
        symbol: ''
      });
      this.$router.push({name: RoutesNavigation.Currencies})
      this.$emit('onAddItem')
    },
    closeForm() {
      this.$router.push({name: RoutesNavigation.Currencies})
      this.$emit('onCloseForm')
    },
    triggerSubmit() {
      (this.$refs.submitBtn as Refs['submitBtn']).click()
    }
  },
  computed: {
    formValues() {
      return this.currencies.find((item: Currency) => item.id === this.id)
    }
  },
})
</script>

<style scoped lang="scss" src="./addItem.scss"></style>
