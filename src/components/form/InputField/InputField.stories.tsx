import InputField from './InputField';

export default {
  title: 'Form/InputField',
  component: InputField,
};

export const InputFieldDefault = () => <InputField label="Default" />;
export const InputFieldTypeEmail = () => (
  <InputField type="email" label="Email" placeholder="Email" />
);
export const InputFieldTypeSearch = () => (
  <InputField type="search" label="Search" placeholder="1" />
);
