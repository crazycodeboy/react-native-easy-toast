/**
 * react-native-easy-toast
 * https://github.com/crazycodeboy/react-native-easy-toast
 * Email:crazycodeboy@gmail.com
 * Blog:https://www.devio.org/
 * @flow
 */

import { Component, ReactNode } from "react";
import { ViewStyle } from 'react-native';

interface ToastComponentProps {
  position?: "bottom" | "center" | "top";
  textStyle?: {};
  positionValue?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
  style? : ViewStyle
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

