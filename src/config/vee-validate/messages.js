import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: 'This field is required',
        email: 'This field must be a valid email',
        min: 'This field must be at least {length} characters',
        max: 'This field must be at most {length} characters',
        confirmed: 'This field must be the same as {field}',
      },
    },
    ka: {
      messages: {
        required: 'ეს ველი სავალდებულოა',
        email: 'ეს ველი უნდა იყოს მახასიათებლი ელ-ფოსტის მისამართი',
        min: 'ეს ველი უნდა იყოს მინიმუმ {length} სიმბოლო',
        max: 'ეს ველი უნდა შეიცავდეს მაქსიმუმ {length} სიმბოლოს',
        confirmed: 'ეს ველი უნდა იყოს იგივე, რაც {field}',
      },
    },
  }),
});