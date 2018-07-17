import { Component, ReactNode } from "react";

declare module "react-native-easy-toast" {
  export interface DURATION {
    LENGTH_SHORT: number;
    FOREVER: number;
  }
  export default class Toast extends Component {
    show: (
      text: string | ReactNode,
      duration?: number,
      callback?: (() => void)
    ) => void;
    close: (duration?: number) => void;
  }
}
