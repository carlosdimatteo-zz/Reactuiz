import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component {


    constructor(){
        super()
        this.state={
            correctCount:this.props.navigation.getParam('correctCount'),
            questionQuantity:this.props.navigation.getParam('questionQuantity')
        }
    }

    static navigationOptions = {
        title: 'Score',
        header: null
      };


   

    
        render() {

          return (
                <View>
                <Text>Score {this.state.correctCount}/{this.state.questionQuantity} </Text>
                <Button onPress={()=>this.props.navigate('Home')}>
                Play Again!
                </Button>
                </View>
           
            
            
          )
        }
  }