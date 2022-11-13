import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function Home() {
    return (
            <ScrollView contentContainerStyle={style.container}>
                    <TouchableOpacity style={style.cardContainer}>
                        <Image
                            source={require('../../assets/viagem-2.jpg')}
                            style={style.shoesImg}
                        />
                        <Text style={style.shoesText}>
                            Viagens para espanha
                        </Text>
                        <Text style={style.shoesText}>
                           á partir de R$1500
                        </Text>
                        <View opacity={0.4}>
                            <Text style={style.button}>Confira agora</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.cardContainer}>
                        <Image
                            source={require('../../assets/viagem-2.jpg')}
                            style={style.shoesImg}
                        />
                           <Text style={style.shoesText}>
                            Viagens para espanha
                        </Text>
                        <Text style={style.shoesText}>
                           á partir de R$1500
                        </Text>
                        <View opacity={0.4}>
                            <Text style={style.button}>Confira agora</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.cardContainer}>
                        <Image
                            source={require('../../assets/viagem-2.jpg')}
                            style={style.shoesImg}
                        />
                             <Text style={style.shoesText}>
                            Viagens para espanha
                        </Text>
                        <Text style={style.shoesText}>
                           á partir de R$1500
                        </Text>
                        <View opacity={0.4}>
                            <Text style={style.button}>Confira agora</Text>
                        </View>
                    </TouchableOpacity >
            </ScrollView >
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 35,
        marginTop: 15,
        marginBottom: 15,
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    photo: {
        width: 75,
        height: 47,
        backgroundColor: 'black'

    },
    shoesText: {
        fontSize: 16,
    },
    button: {
        fontSize: 16,
        backgroundColor: 'blue',
        color: 'white',
        padding: 4,
        width: 200,
        borderRadius: 10,
        textAlign: 'center'
    },
    shoesImg: {
      width: 300,
      height: 300,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '5%',
        marginHorizontal: '5%'
    }
})