import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
} from "react";

export type tSearch = {
  form?: {
    attributes?: FormHTMLAttributes<HTMLFormElement>;
  };
  field?: {
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    placeholder: string;
  };
  button?: {
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    title: string;
  };
};
