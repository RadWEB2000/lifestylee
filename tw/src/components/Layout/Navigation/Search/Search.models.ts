import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
} from "react";

export type tSearch = {
  id: string;
  form: {
    attributes?: FormHTMLAttributes<HTMLFormElement>;
  };
  field: {
    placeholder: string;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
  };
  button: {
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    title: string;
  };
};
