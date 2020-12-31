/**
 * react-native-easy-toast
 * https://github.com/crazycodeboy/react-native-easy-toast
 * Email:crazycodeboy@gmail.com
 * Blog:https://www.devio.org/
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class ToastTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'bottom',
            style: {},
        }
    }

    onClick(text, position, duration, withStyle) {
        this.setState({
            position: position,
        })
        if (withStyle) {
            this.toastWithStyle.show(text, duration);
        } else {
            this.toast.show(text, duration);
        }
    }

    getButton(text, position, duration, withStyle) {
        return (
            <Button
                style={{padding: 10}}
                onPress={() => this.onClick(text, position, duration, withStyle)}
                title={text}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getButton('LENGTH_SHORT+top', 'top', DURATION.LENGTH_SHORT)}
                {this.getButton('LENGTH_SHORT+bottom', 'bottom', DURATION.LENGTH_SHORT)}
                {this.getButton('LENGTH_LONG+top', 'top', 2000)}
                {this.getButton('LENGTH_LONG+bottom', 'bottom', 2000)}
                {this.getButton('LENGTH_LONG+bottom+custom style', 'bottom', 2000, true)}
                <Toast ref={(toast) => this.toast = toast} position={this.state.position}/>
                <Toast ref={(toast) => this.toastWithStyle = toast} style={{backgroundColor: 'red'}}
                       position={this.state.position}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

