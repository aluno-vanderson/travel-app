import { StyleSheet, View, Image, Text, ImageBackground } from "react-native"

export default function Login(){
    return(
        <View>
            <ImageBackground style={styles.imagemLogin} resizeMode= "cover" source={{uri: 'https://1.bp.blogspot.com/-2UmIvBRd6XU/XlFZoMZarxI/AAAAAAAAJLg/uEfSzXtW1iMUxrATWsLBOUVcB1uA1R4XQCLcBGAsYHQ/s640/Wallpaper%2Bda%2BNatureza%2B3.jpg'} } />
            <View style={styles.links}>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Esqueceu a senha?</Text>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Cadastre-se</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    links:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a393e',
        height: '25%'
    },
    imagemLogin:{
        height: '75%',
        backgroundColor: 'orange'
    }
})