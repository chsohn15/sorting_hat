import React from 'react';
import questions from '../questions';


export default class QuestionContainer extends React.Component{
    
    state = {
        currentQuestion: {
            questionNumber: 1,
        },
        answeredQuestions: {
            values: []
        }
    }
    
    displayQuestion = () => {
        let foundQuestion =  questions.find(question => question.id === this.state.currentQuestion.questionNumber)
        return foundQuestion
    }

    handleClick =() => {
        
    }

    render(){
        let question = this.displayQuestion()
        return(
        <div> 
            <h3>Question {question.id}: {question.q}</h3>
            <p value="gryff">a. {question.answers.gryff}</p>
            <p value="ravenclaw">b. {question.answers.ravenclaw}</p>
            <p value="hufflepuff">c. {question.answers.hufflepuff}</p>
            <p value="slytherin">d. {question.answers.slytherin}</p>
        </div>
        )
    }
}