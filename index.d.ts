import { Component, ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

interface ToastViewProps {
  style?: StyleProp<ViewStyle>;
  position?: "top" | "center" | "bottom";
  textStyle?: StyleProp<TextStyle>;
  positionValue?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
}

interface DURATION {
  LENGTH_SHORT: number;
  FOREVER: number;
}

declare module "react-native-easy-toast" {
  export const DURATION: DURATION;

  export default class Toast extends Component<ToastViewProps> {
    show: (text: string | ReactNode, duration?: number, callback?: () => void) => void;
    close: (duration?: number) => void;
  }
}
