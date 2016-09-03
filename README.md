# react-native-easy-toast
A react native module to show toast like android, it works on iOS and Android.


## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-easy-toast --save`
* 2.`import Toast, {DURATION} from 'react-native-toast-easy'`    

## Demo  
* [Examples](https://github.com/crazycodeboy/react-native-easy-toast/tree/master/examples)

![Screenshots](https://raw.githubusercontent.com/crazycodeboy/react-native-easy-toast/master/examples/Screenshots/react-native-easy-toast-screenshots.gif)

## Getting started  

Add `react-native-toast-easy` to your js file.   

`import Toast, {DURATION} from 'react-native-toast-easy'`  

Inside your component's render method, use Toast:   

```javascript
 render() {
         return (
             <View style={styles.container}>
                 ...
                 <Toast ref="toast"/>
             </View>
         );
 }
```

>Note:  Add it in the bottom of the root view.

Then you can use it like this:   

```javascript
 this.refs.toast.show('hello world!');
```

That's it, you're ready to go!  


### Basic usage  

```javascript
render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.toast.show('hello world!');
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>
                <Toast ref="toast"/>
            </View>
        );
    }
```

### Custom Toast   

```javascript
render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.toast.show('hello world!',DURATION.LENGTH_LONG);
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>
                <Toast 
                    ref="toast" 
                    style={{backgroundColor:'red'}} 
                    position='top'
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



Method            | Type     | Optional | Description
----------------- | -------- | -------- | ----------- | -----------
show(text, duration)   | function | false | show a toast 
close() |  function  | true  |  Close toast early    


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
