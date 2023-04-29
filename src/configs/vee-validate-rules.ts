import { Errors } from '@/enums/input-errors'
import { MAX_CODE_LENGTH, MAX_SYMBOL_LENGTH, EMAIL_REGEX, MIN_PASS_LENGTH } from '@/constants'

const isRequired = (value: string) => {
  if (!value) {
    return Errors.Required
  }
}

export const validateRequired = (value: string) => {
  if (isRequired(value)) {
    return isRequired(value);
  }
  return true
}

export const validateCode = (value: string) => {
  if (isRequired(value)) {
    return isRequired(value);
  }
  if (value && value.length !== MAX_CODE_LENGTH) {
    return Errors.Code
  }
  return true
}

export const validateSymbol = (value: string) => {
  if (isRequired(value)) {
    return isRequired(value);
  }
  if (value && value.length > MAX_SYMBOL_LENGTH) {
    return Errors.Symbol
  }
  return true
}

export const validateEmail = (value: string) => {
  if (isRequired(value)) {
    return isRequired(value);
  }
  if (!EMAIL_REGEX.test(value)) {
    return Errors.Email
  }
  return true
}

export const validatePassword = (value: string) => {
  if (isRequired(value)) {
    return isRequired(value);
  }
  if (value && value.length < MIN_PASS_LENGTH) {
    return Errors.Password
  }
  return true
}