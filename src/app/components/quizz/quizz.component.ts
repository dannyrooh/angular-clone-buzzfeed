import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import quizz_question from "../../../assets/data/quizz_questions.json";


@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  tituloQuiz: string = 'Quiz de Perguntas e Respostas';

  finished: boolean = false;

  questions: any
  questionSelected: any
  questionIndex: number = -1

  answers: string[] = [];
  results: any
  resultSelected: any



  constructor() { }

  nextSelected(){
    this.questionIndex++;
    this.questionSelected = this.questions[this.questionIndex];
  }

  ngOnInit(): void {
    if(quizz_question){
      this.finished = false
      this.tituloQuiz = quizz_question.title


      this.questions = quizz_question.questions
      this.nextSelected()

      this.results = quizz_question.results

    }

  }

  async selectOption(value: string) {
    this.answers.push(value);

    this.nextSelected()

    this.finished = this.questionIndex == this.questions.length

    if (this.finished){

      const resultSelected = (this.answers.filter(answer => answer === "A").length > this.answers.filter(answer => answer === "B").length) ? "A" : "B"

      this.resultSelected = this.results[resultSelected]
    }


  }

  novaTentativa() {
    this.questionIndex =-1
    this.answers = []

    this.finished = false
    this.nextSelected()
    console.log("foi")
    console.log(this.finished, this.questionIndex , this.questions.length)
  }

}

