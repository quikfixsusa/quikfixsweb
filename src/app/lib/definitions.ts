import { HTMLInputTypeAttribute } from 'react';

export interface InputType {
  name: string;
  value: string;
  placeholder: string;
  error: boolean;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  min?: string;
  max?: string;
}

export interface itemList {
  rute: string;
  name: string;
}

export interface ButtonSidepanelProps extends itemList {
  svg: JSX.Element;
}
