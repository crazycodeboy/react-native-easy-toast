import { Component, ReactNode } from 'react';
import { ViewProps, ViewStyle, TextStyle, StyleProp } from 'react-native';

declare module 'react-native-easy-toast' {
    export interface DURATION {
        LENGTH_SHORT: number;
        FOREVER: number;
    }

    export interface ToastProps {
        style?: StyleProp<ViewStyle> | StyleProp<ViewProps>;
        textStyle?: StyleProp<TextStyle>;
        position?: "top" | "center" | "bottom";
        positionValue: number;
        fadeInDuration: number;
        fadeOutDuration: number;
        opacity: number;
    }

    export default class Toast extends Component<ToastProps> {
        show: (text: string | ReactNode, duration?: number, callback?: () => void) => void;
        close: (duration?: number) => void;
    }
}
