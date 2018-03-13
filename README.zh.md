# [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast/)
一款简单易用的 Toast 组件，支持 Android&iOS。

[ ![release](https://img.shields.io/github/release/crazycodeboy/react-native-easy-toast.svg?maxAge=2592000?style=flat-square)](https://github.com/crazycodeboy/react-native-easy-toast/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/crazycodeboy/react-native-easy-toast/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-easy-toast.svg?style=flat)](https://www.npmjs.com/package/react-native-easy-toast)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-easy-toast/master/LICENSE)
[ ![language English](https://img.shields.io/badge/language-English-yellow.svg)](https://github.com/crazycodeboy/react-native-easy-toast/)




## 目录

- [安装](#安装)
- [Demo](#demo)
- [如何使用？](#如何使用？)
- [API](#api)
- [贡献](#contribution)

## 安装

* 1.在终端运行 `npm i react-native-easy-toast --save`
* 2.在要使用`Toast`的js文件中添加`import Toast, {DURATION} from 'react-native-easy-toast'`    

## Demo  
* [Examples](https://github.com/crazycodeboy/react-native-easy-toast/tree/master/examples)

![Screenshots](https://raw.githubusercontent.com/crazycodeboy/react-native-easy-toast/master/examples/Screenshots/react-native-easy-toast-screenshots.gif)

## 如何使用？  

>第一步：

在你的js文件中导入 `react-native-easy-toast`：     

`import Toast, {DURATION} from 'react-native-easy-toast'`  

>第二步：   

将下面代码插入到`render()`方法中：   


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

>注意: 请将`<Toast ref="toast"/>` 放在最外层View的底部.

>第三步：

使用：  

```javascript
 this.refs.toast.show('hello world!');
```

在需要弹出提示框时使用上面代码即可。

或者像这样
```javascript
    this.refs.toast.show(<View><Text>hello world!</Text></View>);
```


### 用例  

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

### 自定义 Toast   

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


**更多用例:**    

[SearchPage.js@GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/blob/develop/js/page/SearchPage.js)



## API


属性              | 类型     | 可选 | 默认值     | 描述
----------------- | -------- | -------- | ----------- | -----------
style  | View.propTypes.style  | true | {backgroundColor: 'black',opacity: OPACITY,borderRadius: 5,padding: 10,}  |   自定义Toast的样式
position |  PropTypes.oneOf(['top','center','bottom',]) |true | 'bottom'  | 自定义Toast的位置
positionValue  | React.PropTypes.number  | true | 120  |   自定义Toast的位置
fadeInDuration  | React.PropTypes.number  | true | 500  |   自定义 toast淡入时间
fadeOutDuration  | React.PropTypes.number  | true | 500  |  自定义 toast淡出时间
opacity  | React.PropTypes.number  | true | 1  |   自定义 toast 的透明度
textStyle  | View.propTypes.style  | true | {color:'white'}  |  自定义text的样式


方法            | 类型     | 可选 | 描述
----------------- | -------- | -------- | ----------- | -----------
show(text, duration)   | function | false | 弹出提示框,单位是毫秒
close() |  function  | true  |  手动关闭提示框    


## 贡献

欢迎大家提Issues。如果能为Issues配一个异常或报错的截图，能帮助我快速的定位问题和解决问题。  
另外欢迎大家Pull requests，为项目贡献的智慧。

---

**MIT Licensed**    
大家可以自由复制和转载。  
