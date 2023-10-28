import React from "react";
import {Pressable, Text} from "react-native";

export default function PressableMessageLink({onPress, MessageText, LinkText}) {

    return (
       <Text>
            {MessageText}{" "}
            <Pressable onPress={onPress}>
                <Text style={{textDecorationLine: 'underline', color: '#0b2d4d'}}>
                    {LinkText}
                </Text>
            </Pressable>
        </Text>);
}