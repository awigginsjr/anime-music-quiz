document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');

    // Render the quiz items
    function renderQuiz() {
        let html = '';
        quizData.forEach((question, index) => {
            html += `
            <div class="quiz-item" data-correct="${question.correctAnswer}">
                <h2>${question.question}</h2>
                <audio controls>
                    <source src="${question.audioSrc}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <ul>
                    ${question.choices.map(choice => `<li><button class="choice-btn">${choice}</button></li>`).join('')}
                </ul>
            </div>
        `;
        });
        quizContainer.innerHTML = html;
    }

    // Call the renderQuiz function
    renderQuiz();
    
    // Add event listener for choice button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('choice-btn')) {
            const buttons = e.target.closest('ul').querySelectorAll('.choice-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    // Add event listener for submit quiz button click
    document.getElementById('submit-quiz').addEventListener('click', function() {
        const quizItems = document.querySelectorAll('.quiz-item');
        let score = 0;

        quizItems.forEach(item => {
            const selectedButton = item.querySelector('.choice-btn.active');
            if (selectedButton && selectedButton.textContent === item.dataset.correct) {
                score++;
            }
        });

        alert('Your score: ' + score + '/' + quizItems.length);
    });
});
