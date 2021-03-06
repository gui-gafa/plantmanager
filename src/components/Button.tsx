import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps
} from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        // rest tem que vir por ultimo nas propriedades
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 20


    },
    buttonText: {
        fontFamily: fonts.heading,
        color: colors.white,
        fontSize: 20,

    }
});