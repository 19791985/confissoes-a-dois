const questions = [
  "Gostas de ser surpreendida com mensagens sensuais?",
  "Preferes dominar ou ser dominada?",
  "Fantasias com locais públicos ou íntimos?",
  "O que te atrai mais: palavras, toques ou olhares?",
];

function startQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${i + 1}.</strong> ${q}</p>`;
    container.appendChild(div);
  });
}
