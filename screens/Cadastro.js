import { Pressable, StyleSheet, TextInput, View, Text, TextComponent } from "react-native"

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold' }}>Crie sua conta</Text>
            <TextInput style={styles.textoInput} placeholder="Nome" />
            <TextInput style={styles.textoInput} placeholder="Email" />
            <TextInput style={styles.textoInput} placeholder="Endereço" />
            <TextInput style={styles.textoInput} placeholder="Telefone" />
            <TextInput style={styles.textoInput} placeholder="Senha" />
            <Text style={{ color: '#389db8', marginHorizontal: 50 }}>Insira uma senha alfanumérica com no minimo 6 caracteres</Text>
            <Text style={{ color: 'black', marginVertical: 20, marginHorizontal: 50 }}>Ao cadastrar, você estará de acordo com os termos de uso e privacidade</Text>
            <View style={styles.linhaBotoes}>
                <Pressable style={styles.botaoCadastrar}>
                    <Text style={{ fontWeight: 'bold' }}>CADASTRAR</Text>
                </Pressable>
                <Text>ou</Text>
                <Pressable style={styles.botaoCancelar}>
                    <Text style={{ fontWeight: 'bold' }}>CANCELAR</Text>
                </Pressable>
            </View>
            <View style={styles.linkLogin}>
                <Text>Já é cadastrado? </Text>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#389db8', textDecorationLine: 'underline' }}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cee2ed'

    },
    textoInput: {
        height: 40,
        width: '75%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    botaoCadastrar: {
        height: 30,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    botaoCancelar: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'gold'
    },
    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    linkLogin: {
        flexDirection: 'row',
        marginTop: 50

    }
})