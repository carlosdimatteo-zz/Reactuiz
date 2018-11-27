import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {


    constructor(){
        super()
        this.state={
            questions=[],
            correct=0,
            currentQuestion:{}
        }
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
                currentQuestion:data.results[0]
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
        this.setState({currentQuestion:this.questions[questionIndex+1]})
    }

    
        render() {

          return (
            <View>
            {this.state.questions.forEach(question,index => {
                <View>
                <Text>Question:{question.question} </Text>
                <Button onPress={()=>this.evaluateAnswer(index,'True')}>
                    True
                </Button>
                <Button onPress={()=>evaluateAnswer(index,'False')}>
                False
                </Button>
                </View>
            })}
            </View>
            
            
          )
        }
  }