import React, { useState} from "react";
import { FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import Animated, {
    Extrapolate,
    interpolate, runOnJS,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH / 5;
/*const data = [...items, ...items, ...items];*/


export default function ItemCarousel({items, handleIndexChange}) {
console.log(items);
    const transX = useSharedValue(0);

    const renderItem = ({item, index}) => {
        return <Item index={index} item={item} transX={transX}/>;
    };

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            transX.value = event.contentOffset.x;
            const currentIndex = Math.round(event.contentOffset.x / ITEM_WIDTH);
            runOnJS(handleIndexChange)(currentIndex);
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <AnimatedFlatList
                    onScroll={scrollHandler}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    data={items}
                    decelerationRate="fast"
                    centerContent
                    snapToInterval={ITEM_WIDTH}
                    scrollEventThrottle={16}
                    pagingEnabled
                    snapToAlignment="center"
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                />
            </View>
        </View>
    );
};

const Item = ({index, item, transX}) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityAnimation(transX, index),
            transform: [
                {
                    scale: scaleAnimation(transX, index),
                },
            ],
        };
    });
    return (
        <Animated.View style={[styles.box, animatedStyle]} item={item}>
            <Text style={styles.label}>{item.id}</Text>
        </Animated.View>
    );
};

const scaleAnimation = (transX, index) => {
    'worklet';

    return interpolate(
        transX.value,
        [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
            (index + 2) * ITEM_WIDTH,
        ],
        [0.5, 0.7, 1, 0.7, 0.5],
        Extrapolate.CLAMP,
    );
};

const opacityAnimation = (transX, index) => {
    'worklet';

    return interpolate(
        transX.value,
        [
            (index - 3) * ITEM_WIDTH,
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
            (index + 2) * ITEM_WIDTH,
            (index + 3) * ITEM_WIDTH,
        ],
        [0, 0.5, 0.8, 1, 0.8, 0.5, 0],
        Extrapolate.CLAMP,
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef',
    },
    listContainer: {
        height: ITEM_WIDTH + 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        height: ITEM_WIDTH * 2,
        flexGrow: 0,
        paddingHorizontal: ITEM_WIDTH * 2,
    },
    box: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
    },
});