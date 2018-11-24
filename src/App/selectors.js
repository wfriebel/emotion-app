export const selectQuestions = (questions, questionSet) => {
  return questions.filter(question => question.set === questionSet);
}