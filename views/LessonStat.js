import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from "../assets/styles";
import { StarSolidSvg, StarRegularSvg } from "../assets/imgsvg";

const LessonStat = () => {
    // Генерация случайных чисел i и j
    const i = Math.floor(Math.random() * 5);
    const j = Math.floor(Math.random() * (i + 1));

    // Устанавливаем цвет в зависимости от значений i и j
    let starColor = 'gray'; // По умолчанию серый

    if (i === 0 && j === 0) {
        starColor = 'gray';
    } else if (i !== 0 && j === 0) {
        starColor = 'red';
    } else if (i !== 0 && j === 1) {
        starColor = 'pink';
    } else if (i !== 0 && j === 2) {
        starColor = 'yellow';
    } else if (i !== 0 && j === 3) {
        starColor = 'blue';
    } else if (i !== 0 && j === 4) {
        starColor = 'green';
    }

    return (
        <>
            <View style={[commonStyles.LessonsStat]}>
                <View style={[commonStyles.InfoTable]}>
                    <Text style={commonStyles.TextHeaderRight}>{j} / {i} / 4</Text>
                </View>
                <View style={[commonStyles.Round]}>
                    {i === 4 ? (
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
