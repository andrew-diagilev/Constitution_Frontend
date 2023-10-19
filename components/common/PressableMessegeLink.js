import React from "react";
import {Pressable, Text} from "react-native";

export default function PressableMessageLink({onPress, MessageText, LinkText}) {

    return (
       <Text>
            {MessageText}{" "}
            <Pressable onPress={onPress}>
                <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>
                    {LinkText}
                </Text>
            </Pressable>
        </Text>);
}