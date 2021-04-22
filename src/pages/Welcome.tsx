import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

import wateringImg from '../assets/watering.png';
import { Button, ButtonInit } from '../components/ButtonInit';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
    const navigation = useNavigation()

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie{'\n'}suas plantas de{'\n'}forma fácil
                </Text>
                {
                    <Image
                        source={wateringImg}
                        style={styles.image}
                        resizeMode="contain"
                    />
                }
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <ButtonInit title={<Entypo name='chevron-thin-left' size={24} />} onPress={handleStart} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // o safe area view não comporta paddign por isso tivemos que fazer esse wraper
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        marginBottom: 10,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        marginVertical: 10,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        flexGrow: 1,
        width: Dimensions.get('window').width * 0.7,
        height: undefined
    }
});