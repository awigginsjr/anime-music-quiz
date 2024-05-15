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

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('choice-btn')) {
        const buttons = e.target.parentNode.parentNode.querySelectorAll('.choice-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
});
