import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {


    constructor(){
        super()
        this.state={
            questions:[],
            correct:0,
            currentQuestionIndex:0,
            currentQuestion:{}
        }
        this.getData()
    }

    static navigationOptions = {
        title: 'Home',
        header: null
      };

      async getData(){
        await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
        .then(res=>{return res.json()})
        .then(data=>{
            console.log('received from API ',data)
            this.setState({
                questions:data.results,
                questionCount:data.results.length(),
                correct:0,
                currentQuestion:data.results[0],
                currentQuestionIndex:0
            })
        })
    }

    evaluateAnswer(questionIndex,answerString){

        let correctAnswer = this.questions[questionIndex].correct_answer
        if(correctAnswer==answerString){
            console.log('answered correctly')
            this.setState({correct:this.state.correct+1})
        }else{
            console.log('answered incorrectly !!')
        }
        if(questionIndex<=this.state.questions.length()-1){
            this.setState({
                currentQuestionIndex:questionIndex+1,
                currentQuestion:this.questions[questionIndex+1]
            })
        }else{
            this.props.navigation.navigate('Score',{correctCount:this.state.correct,questionQuantity:this.state.questions.length()})
        }
        
    }

    
        render() {

          return (
                <View>
                <Text>Question:{this.state.currentQuestion.question} </Text>
                <Button onPress={()=>this.evaluateAnswer(this.state.currentQuestionIndex,'True')}>
                    True
                </Button>
                <Button onPress={()=>evaluateAnswer(this.state.currentQuestionIndex,'False')}>
                False
                </Button>
                </View>
           
            
            
          )
        }
  }