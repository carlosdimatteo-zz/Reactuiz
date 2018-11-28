import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Score extends React.Component {


    constructor(){
        super()
        this.state={
            correctCount:0,
            questionQuantity:0
        }
    }

    componentDidMount(){
        this.setState({
            correctCount:this.props.navigation.getParam('correctCount'),
            questionQuantity:this.props.navigation.getParam('questionQuantity')
        })
    }

    static navigationOptions = {
        title: 'Score',
        header: null
      };


   

    
        render() {

          return (
                <View>
                <Text>Score {this.state.correctCount}/{this.state.questionQuantity} </Text>
                <Button onPress={()=>this.props.navigate('Home')} title="Play Again!">
                </Button>
                </View>
           
            
            
          )
        }
  }