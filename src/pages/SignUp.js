import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Bem vindo(a)</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Nome"
                placeholderTextColor="#003f5c"
                onChangeText={() => setNome()}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={() => setEmail()}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.TextInput}
                placeholder="Senha"
                placeholderTextColor="#003f5c"
                onChangeText={() => setEmail()}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Data Nascimento"
                placeholderTextColor="#003f5c"
                onChangeText={() => setData()}
            />

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>ACESSAR</Text>
            </TouchableOpacity>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    TextInput: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 200,
        margin: 15,
        padding: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 10
    },
    loginText: {
        color: 'white'
    },

    loginBtn: {
        width: 160,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#172E5C",
    },
    Text: {
        fontSize: 40,
        margin: 10
    }
});
