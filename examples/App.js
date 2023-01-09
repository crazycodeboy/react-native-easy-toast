/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import Toast from 'react-native-easy-toast';
import ToastTest from "./ToastTest";

const App: () => React$Node = () => {
    let toastRef;
    const showToast = () => {
        toastRef.show("use function");
    }
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ToastTest/>
                <Button title={'Use in function components.'} onPress={showToast}/>
                <Toast ref={(toast) => toastRef = toast} position={'bottom'}/>
            </SafeAreaView>
        </>
    );
};

export default App;
