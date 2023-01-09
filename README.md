# react-native-easy-toast
A react native module to show toast like android, it works on iOS and Android.

[ ![release](https://img.shields.io/github/release/crazycodeboy/react-native-easy-toast.svg?maxAge=2592000?style=flat-square)](https://github.com/crazycodeboy/react-native-easy-toast/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/crazycodeboy/react-native-easy-toast/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-easy-toast.svg?style=flat)](https://www.npmjs.com/package/react-native-easy-toast)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-easy-toast/master/LICENSE)
[ ![语言 中文](https://img.shields.io/badge/语言-中文-yellow.svg)](https://github.com/crazycodeboy/react-native-easy-toast/blob/master/README.zh.md)

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-easy-toast --save`
  * or  `yarn add react-native-easy-toast`
* 2.`import Toast, {DURATION} from 'react-native-easy-toast'`

## Demo
* [Examples](https://github.com/crazycodeboy/react-native-easy-toast/tree/master/examples)

![Screenshots](https://raw.githubusercontent.com/crazycodeboy/react-native-easy-toast/master/examples/Screenshots/react-native-easy-toast-screenshots.gif)

## Getting started

Add `react-native-easy-toast` to your js file.

`import Toast, {DURATION} from 'react-native-easy-toast'`

Inside your component's render method, use Toast:

```javascript
 render() {
     return (
         <View>
             ...
            <Toast ref={(toast) => this.toast = toast}/>
         </View>
     );
 }
```

><span style="color:red">Note: Be sure to add `Toast` to the bottom of the root view.</span>


Then you can use it like this:

```javascript
this.toast.show('hello world!');
```

That's it, you're ready to go!

show a toast, and execute callback function when toast close it:

```javascript
this.toast.show('hello world!', 500, () => {
    // something you want to do at close
});
```

Show a toast forever until you manually close it:

```javascript
this.toast.show('hello world!', DURATION.FOREVER);
```

Or pass an element:

```javascript
this.toast.show(<View><Text>hello world!</Text></View>);
 // later on:
 this.toast.close('hello world!');
```

Optional you can pass a delay in seconds to the close()-method:

```javascript
 this.toast.close('hello world!', 500);
```

Currently, the default delay for close() in FOREVER-mode is set to 250 ms (or this.props.defaultCloseDelay, which you can pass with)

```jsx
 <Toast ... defaultCloseDelay={100} />
```



### Basic usage

```javascript
render() {
return (
    <View>
        <Button title={'Press me'} onPress={()=>{
            this.toast.show('hello world!',2000);
        }}/>
        <Toast ref={(toast) => this.toast = toast}/>
    </View>
);
    }
```

### Custom Toast

```javascript
render() {
    return (
        <View>
            <Button title={'Press me'} onPress={()=>{
                    this.toast.show('hello world!',2000);
                }}/>
            <Toast
                ref={(toast) => this.toast = toast}
                style={{backgroundColor:'red'}}
                position='top'
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color:'red'}}
            />
        </View>
    );
}
```

**More Usage:**

[GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/blob/develop/js/page/SearchPage.js)



## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | View.propTypes.style  | true | {backgroundColor: 'black',opacity: OPACITY,borderRadius: 5,padding: 10,}  |   Custom style toast
position |  PropTypes.oneOf(['top','center','bottom',]) |true | 'bottom'  | Custom toast position
positionValue  | React.PropTypes.number  | true | 120  |   Custom toast position value
fadeInDuration  | React.PropTypes.number  | true | 500  |   Custom toast show duration
fadeOutDuration  | React.PropTypes.number  | true | 500  |   Custom toast close duration
opacity  | React.PropTypes.number  | true | 1  |   Custom toast opacity
textStyle  | View.propTypes.style  | true | {color:'white'}  |   Custom style text



Method   |  Type     | Optional | Description
----------------- | -------- | -------- | -----------
show(text, duration, callback, onPress)   | function | false | show a toast,unit is millisecond，and do callback
close()  |   function  |  -   |   start the close timer


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
