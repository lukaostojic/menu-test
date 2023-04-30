import { mount } from '@vue/test-utils'
import LoginComponent from '@/views/loginView/LoginView.vue'

describe('Login.vue', () => {
  it('should call onSubmit method when button is clicked', async () => {
    const wrapper = mount(LoginComponent)

    const onSubmitSpy = jest.spyOn(wrapper.vm, 'onSubmit')
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(onSubmitSpy).toHaveBeenCalled()
  })
})
