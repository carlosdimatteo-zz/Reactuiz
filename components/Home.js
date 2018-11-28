import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Home extends React.Component {


    constructor(){
        super()
        this.state={
            questions:[],
            correct:0,
            currentQuestionIndex:0,
            currentQuestion:null
        }
        
    }

    componentDidMount(){
      console.log(this.props)
      this.getData()
    }

    static navigationOptions = {
        title: 'Home'
      };

        getData(){
        console.log('fetching data')
        return new Promise((res,rej) =>{
            fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
        .then(res=>{return res.json()})
        .then(data=>{
            
            this.setState({
                questions:data.results,
                questionCount:data.results.length,
                correct:0,
                currentQuestion:data.results[0],
                currentQuestionIndex:0
            })
            console.log('received from API ',this.state.questions)
            // this.forceUpdate()
            res(true)
           
        })
        .catch(err=>{
          rej(err)
        })
          
        
        })
         
    }

    evaluateAnswer(questionIndex,answerString){

        let correctAnswer = this.state.questions[questionIndex].correct_answer
        if(correctAnswer==answerString){
            console.log('answered correctly')
            this.setState({correct:this.state.correct+1})
        }else{
            console.log('answered incorrectly !!')
        }
        if(questionIndex<this.state.questionCount-1){
            this.setState({
                currentQuestionIndex:questionIndex+1,
                currentQuestion:this.state.questions[questionIndex+1]
            })
        }else{
            this.props.navigation.navigate('Score',{correctCount:this.state.correct,questionQuantity:this.state.questionCount})
        }
        
    }

    
        render() {
            console.log('questions at the moment of render:',this.state.questions)
           let questions = !this.state.questions==[] ?this.state.questions:[]
            return (<View>
          {questions.length>0 ? 
          <View>
                <Text>Question:{this.state.currentQuestion.question} </Text>
                <Button onPress={()=>this.evaluateAnswer(this.state.currentQuestionIndex,'True')} title="True">
                    
                </Button>
                <Button onPress={()=>this.evaluateAnswer(this.state.currentQuestionIndex,'False')} title="
                False">
                </Button>
                </View>
           :
           <View>
           <Text>Questions have not been fetched </Text>
           <Button title="Fetch questions" onPress={()=>this.getData()}></Button>
           </View>
           
           }
           </View>)
        }
  }