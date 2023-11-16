import React from 'react';
import {Image} from "react-native-expo-image-cache";
import {commonStyles} from '../assets/styles';
const getLessonImageUrl = (lessonId) => {
    return `https://opossum.com.ua/constitution/Lesson${lessonId}.png`;
};

const LessonImage = ({ lessonId }) => {
    const lessonImageUrl = getLessonImageUrl(lessonId);

    return (
        <Image style={commonStyles.Image} {...{uri: lessonImageUrl}} />
    );
};

export default LessonImage;
