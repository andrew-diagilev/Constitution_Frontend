export const calculateStarColor = (correctAnswer, answered, totalQuestions) => {
    const percentage = Math.round((correctAnswer / totalQuestions) * 100);

    switch (true) {
        case percentage === 0 && answered === 0:
            return 'gray';
        case percentage < 25:
            return 'red';
        case percentage < 50:
            return 'pink';
        case percentage < 75:
            return 'yellow';
            break;
        case percentage < 100:
            return 'blue';
        case percentage === 100:
            return 'green';
        default:
            return 'gray'; // Другие случаи, если процент находится за пределами 0% - 100%
    }
}
export const fillStar = (answered, totalQuestions) => {
    return answered === totalQuestions;
};