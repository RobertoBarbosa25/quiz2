import React, { useState, useEffect } from 'react';
import questionsData from './questions.json'; // Importe o arquivo JSON

import './Quiz.css'; // Importando o arquivo CSS local

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Estado para controlar a pergunta atual
  const [score, setScore] = useState(0); // Estado para controlar a pontuação do usuário
  const [showScore, setShowScore] = useState(false); // Estado para controlar se a pontuação deve ser exibida
  const [questions, setQuestions] = useState([]); // Estado para armazenar as perguntas

  useEffect(() => {
    setQuestions(questionsData); // Defina as perguntas do arquivo JSON no estado quando o componente for montado
  }, []);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion]?.correctAnswer; // Verifica se a resposta selecionada é a correta

    if (isCorrect) {
      setScore(score + 1); // Incrementa a pontuação se a resposta estiver correta
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); // Avança para a próxima pergunta se houver mais perguntas
    } else {
      setShowScore(true); // Mostra a pontuação final se todas as perguntas foram respondidas
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {showScore ? (
        <div>
          <h2>Você acertou {score} de {questions.length} perguntas.</h2>
        </div>
      ) : (
        <div>
          <div>
            <h2>{questions[currentQuestion]?.question}</h2> {/* Exibe a pergunta atual */}
            <ul>
              {questions[currentQuestion]?.answers.map((answerOption, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswerOptionClick(answerOption)}>
                    {answerOption}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
