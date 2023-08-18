import { StyleSheet, View, Text } from "react-native"

export default function Sobre(){
    const creditos = "Copyright © 2023 - Todos os direitos reservados"
    return(
        
        <View style={styles.container}>
            <Text>Travel - App</Text>
            <Text style={{color: '#1a4252', textAlign: 'center'}}>{creditos}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cee2ed'
    }
})