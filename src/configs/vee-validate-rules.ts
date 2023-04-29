import { Errors } from '@/enums/input-errors'
import { MAX_CODE_LENGTH, MAX_SYMBOL_LENGTH, EMAIL_REGEX, MIN_PASS_LENGTH } from '@/constants'

export const validateRequired = (value: string) => {
  if (!value) {
    return Errors.Required
  }
  return true
}

export const validateCode = (value: string) => {
  if (!value) {
    return Errors.Required
  }
  if (value && value.length !== MAX_CODE_LENGTH) {
    return Errors.Code
  }
  return true
}

export const validateSymbol = (value: string) => {
  if (!value) {
    return Errors.Required
  }
  if (value && value.length > MAX_SYMBOL_LENGTH) {
    return Errors.Symbol
  }
  return true
}

export const validateEmail = (value: string) => {
  if (!value) {
    return Errors.Required
  }
  if (!EMAIL_REGEX.test(value)) {
    return Errors.Email
  }
  return true
}

export const validatePassword = (value: string) => {
  if (!value) {
    return Errors.Required
  }
  if (value && value.length < MIN_PASS_LENGTH) {
    return Errors.Password
  }
  return true
}