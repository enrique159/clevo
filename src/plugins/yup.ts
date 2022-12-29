import { setLocale } from 'yup';

const yup = setLocale({
  mixed: {
    default: 'Error.default',
    required: 'Error.required',
  },
  number: {
    min: (min: any) => 'Error.min',
    max: (max: any) => 'Error.max',
  },
  string: {
    email: 'Error.email',
    url: 'Error.url',
    min: params => 'Error.min',
    max: params => 'Error.max',
  }
});

export default yup