import RouteComponent from './RouteComponent.vue';

export default {
  title: 'Route/Component',
  component: RouteComponent,
};

const Template = (args: unknown, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { RouteComponent },
  template: '<route-component v-bind="$props" />',
});

export const Main = Template.bind({});
// @ts-expect-error exist
Main.args = {
};
