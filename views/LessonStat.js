import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from "../assets/styles";
import { StarSolidSvg, StarRegularSvg } from "../assets/imgsvg";

const LessonStat = ({ correctAnswer, answered, totalQuestions }) => {
    // Генерация случайных чисел i и j
/*    const i = Math.floor(Math.random() * 5);
    const j = Math.floor(Math.random() * (i + 1));*/

    // Устанавливаем цвет в зависимости от значений i и j
    let starColor = 'gray'; // По умолчанию серый

    if (answered === 0 && correctAnswer === 0) {
        starColor = 'gray';
    } else if (answered !== 0 && correctAnswer === 0) {
        starColor = 'red';
    } else if (answered !== 0 && correctAnswer === 1) {
        starColor = 'pink';
    } else if (answered !== 0 && correctAnswer === 2) {
        starColor = 'yellow';
    } else if (answered !== 0 && correctAnswer === 3) {
        starColor = 'blue';
    } else if (answered !== 0 && correctAnswer === 4) {
        starColor = 'green';
    }

    return (
        <>
            <View style={[commonStyles.LessonsStat]}>
                <View style={[commonStyles.InfoTable]}>
                    <Text style={commonStyles.TextHeaderRight}>{correctAnswer} / {answered} / {totalQuestions}</Text>
                </View>
                <View style={[commonStyles.Round]}>
                    {answered === totalQuestions ? (
                        <StarSolidSvg SvgStyle={{ fill: starColor }} />
                    ) : (
                        <StarRegularSvg SvgStyle={{ fill: starColor }} />
                    )}
                </View>
            </View>
        </>
    );
};

export default LessonStat;
