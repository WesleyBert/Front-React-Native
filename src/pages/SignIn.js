import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/logo.jpg")} />
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.TextInput}
                placeholder="Senha"
                placeholderTextColor="#003f5c"
                onChangeText={(password) => setSenha(passwordTextInput)}
            />
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>CADASTRE-SE</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
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

    image: {
        height: 250,
        width: 250,
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
});
