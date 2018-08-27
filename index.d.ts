import { StyleProp, ViewStyle, TextStyle, Animated } from "react-native";
export enum DURATION {
    LENGTH_SHORT = 500,
    FOREVER = 0,
}
export interface IEasyToastProps extends React.Props<ReactNativeEasyToast> {
    // Custom style toast default {backgroundColor: 'black',opacity: OPACITY,borderRadius: 5,padding: 10,}
    style?: StyleProp<ViewStyle>;
    // Custom toast position default 'bottom'
    position?: 'top' | 'center' | 'bottom'
    // Custom toast position value default 120
    positionValue?: number
    // Custom toast show duration default 500
    fadeInDuration?: number
    // Custom toast close duration default 500
    fadeOutDuration?: number
    // Custom toast opacity defalut 	1
    opacity?: number
    // Custom style text defalut {color:'white'}
    textStyle?: StyleProp<ViewStyle>;

}
export default class ReactNativeEasyToast extends React.Component<IEasyToastProps> {
    // show a toast,unit is millisecond，and do callback
    show?(text: string, duration: number, callback: () => void): void
    // start the close timer
    close?(duration: number | undefined): void;
}
