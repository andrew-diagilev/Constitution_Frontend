import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from "../assets/styles";
import {StarSolidSvg, StarRegularSvg} from "../assets/imgsvg";
import {fillStar, calculateStarColor} from '../utils/lessonUtils';

const LessonStat = ({correctAnswer, answered, totalQuestions}) => {

    const starColor = calculateStarColor(correctAnswer, answered, totalQuestions);
    const isStarFilled = fillStar(answered, totalQuestions);

    return (
        <>
            <View style={[commonStyles.LessonsStat]}>
                <View style={[commonStyles.InfoTable]}>
                    <Text style={commonStyles.TextHeaderRight}>{correctAnswer} / {answered} / {totalQuestions}</Text>
                </View>
                <View style={[commonStyles.Round]}>
                    {isStarFilled ? (
                        <StarSolidSvg SvgStyle={{fill: starColor}}/>
                    ) : (
                        <StarRegularSvg SvgStyle={{fill: starColor}}/>
                    )}
                </View>
            </View>
        </>
    );
};

export default LessonStat;
