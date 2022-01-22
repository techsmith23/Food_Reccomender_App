import React, { Component } from 'react';
import {  Image, ScrollView, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import SendSMS from 'react-native-sms'
var arr = [0,0,0,0,0,0];
export default class Touchables extends Component {
state = { color: { color1: 'white', color2: 'white', color3: 'white', color4: 'white', color5: 'white'}, text: ' '}
constructor(props) {
    super(props);
    this.state = {color: { color1: 'white', color2: 'white', color3: 'white', color4: 'white', color5: 'white'}, text: ''};
}
_onPressButton(x) {
//    alert('You press button')
//this.colorone == 'red' ? 'blue : 'red'
    if(x <= 5)
        arr[x-1]= arr[x-1] == 0 ? 1 : 0;
    else{
        arr[x-1]=1;
    }
    if (!(arr[0] && arr[1] && arr[2] && arr[3] && arr[4]))
        arr[5]=0;
    var a = arr[0] == 0 ? 'white' : '#0799'
    var b = arr[1] == 0 ? 'white' : '#0799'
    var c = arr[2] == 0 ? 'white' : '#0799'
    var d = arr[3] == 0 ? 'white' : '#0799'
    var e = arr[4] == 0 ? 'white' : '#0799'
    this.setState({color: {color1: a, color2: b, color3: c, color4: d, color5: e}})
    console.log('press')
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    console.log(arr[3])
    console.log(arr[4])
    console.log(arr[5])
}

sendText() {
    SendSMS.send({
        //Message body
        body: this.state.text,
        //Recipients Number
        recipients: ['1'],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
        if(completed){
          console.log('SMS Sent Completed');
        }else if(cancelled){
          console.log('SMS Sent Cancelled');
        }else if(error){
          console.log('Some error occured');
        }
    });
  }
out(){
    console.log('o')
}
render() {
    const ChickenImg = require('./chicken_sandwich.jpg');
    var img = (arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5]) ? ChickenImg : null;
    return (
        <ScrollView style = {{backgroundColor: '#0123'}}>
        <View>
            <Text style={[styles.Title]}>Food Recommendations</Text>
            <View style={styles.container}>
                <View style = {styles.item}>
                    <TouchableHighlight style={{ backgroundColor: this.state.color.color1 }} onPress={() => this._onPressButton(1)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Bread</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: this.state.color.color2 }} onPress={() => this._onPressButton(2)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Cheese</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: this.state.color.color3 }} onPress={() => this._onPressButton(3)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Chicken</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: this.state.color.color4 }} onPress={() => this._onPressButton(4)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Tomatoes</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: this.state.color.color5 }} onPress={() => this._onPressButton(5)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Lettuce</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style = {styles.item}>
                    <Image source = {img} style={{width: 193, height: 110}} />
                </View>
            </View>
            <TouchableHighlight style={{ backgroundColor: '#6859', marginTop : 50 }} onPress={() => this._onPressButton(6)} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Generate</Text>
                </View>
            </TouchableHighlight>
        <View style={{padding: 10, flex: 1, flexDirection: 'row'}}>
            <View style={styles.container}>
                <View style = {{width: '10%'}}>
                    <TouchableOpacity activeOpacity={0.5}>
                         <Image
                          source={require('./contact.png')}
                          style={styles.ImageIconStyle}
                         />
                    </TouchableOpacity>
                </View>
                <View style = {{width: '80%'}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type your message!"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <View style = {{width: '10%'}}>
                     <TouchableOpacity activeOpacity={0.5} onPress={this.sendText.bind(this)}>
                          <Image
                           source={require('./send.png')}
                           style={styles.ImageIconStyle}
                          />
                     </TouchableOpacity>
                </View>
            </View>
        </View>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 0,
        alignItems: 'flex-start',
    },
    item: {
        width: '50%' // is 50% of container width
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#2222'
    },
    buttonText: {
        textAlign: 'justify',
        padding: 15,
        color: 'black'
    },
    Title: {
        color: '#8329',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 45
    },
    ImageIconStyle: {
        height : 40,
        width : 40
    }
});