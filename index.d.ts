import { Component, ReactNode } from "react";

interface ToastComponentProps {
  position?: "bottom" | "center" | "top";
  textStyle?: {};
  positionValue?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
}

declare module "react-native-easy-toast" {
  interface IDuration {
    LENGTH_SHORT: number;
    FOREVER: number;
  }

  export var DURATION: IDuration;

  export default class Toast extends Component<ToastComponentProps> {
    show: (
      text: string | ReactNode,
      duration?: number,
      callback?: () => void
    ) => void;
    close: (duration?: number) => void;
  }
}

