import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class KEy extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableOpacity
                  style={this.props.styles}
                  onPress={this.props.action}>
                  <Text style={this.props.stylesText}> {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}