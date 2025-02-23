function generateQuestion(mode) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let operators = ['+', '-', '*'];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    if (mode === 'desafio') {
        num1 *= 2; // Números maiores no modo desafio
        num2 *= 3;
    }

    let question = `${num1} ${operator} ${num2}`;
    let answer = eval(question);
    
    return { question, answer };
}
