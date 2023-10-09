import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CARD_WIDTH = 150; // Adjust the card width as needed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        flexDirection: 'row',
    },
    item: {
        width: CARD_WIDTH,
        height: 200, // You can adjust the card height as needed
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4EC9E1',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
});

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            activeIndex: 0,
        };
    }

    moveLeft = () => {
        const { activeIndex, items } = this.state;
        const newIndex = (activeIndex - 1 + items.length) % items.length;
        this.setState({ activeIndex: newIndex });
    }

    moveRight = () => {
        const { activeIndex, items } = this.state;
        const newIndex = (activeIndex + 1) % items.length;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { items, activeIndex } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.carousel}>
                    <TouchableOpacity onPress={this.moveLeft}>
                        <Text style={styles.buttonText}>{"<"}</Text>
                    </TouchableOpacity>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.carousel,
                            { paddingHorizontal: (CARD_WIDTH - 10) / 2 }, // Adjust the padding based on card width
                        ]}
                        pagingEnabled
                        onMomentumScrollEnd={(event) => {
                            const offset = event.nativeEvent.contentOffset.x;
                            const index = Math.round(offset / CARD_WIDTH);
                            this.setState({ activeIndex: index });
                        }}
                    >
                        {items.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.item,
                                    { backgroundColor: index === activeIndex ? '#4EC9E1' : 'gray' },
                                ]}
                            >
                                <Text style={styles.buttonText}>{item}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <TouchableOpacity onPress={this.moveRight}>
                        <Text style={styles.buttonText}>{">"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Carousel;

