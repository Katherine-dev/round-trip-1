import InputField from './InputField.vue';

export const template = (args: any) => ({
  components: {
    InputField,
  },
  setup() {
    return {
      args,
    };
  },
  template: '<input-field />',
});

export default {
  component: InputField,
  title: 'Component/Input',
  argTypes: {},
};
