import { Image, StyleSheet, View, Text } from "react-native"

export default function Inicio(){
    return(
        <View>
            <View>
                <Image style={StyleSheet.bannerNaturezaTop}source={require}/>
                <View style={StyleSheet.bannerLogoTop}>
                    <Image style={{height: 120, width: 120, paddingHorizontal: 20, paddingVertical: 20}} />
                </View>
                <Text style={StyleSheet.bannerTextTop}>Bem-vindo(a), {'/n'} Karina</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bannerNaturezaTop: {
        height: '80%'
    },
    bannerLogoTop: {
        position: 'absolute',
        top: '10%',
        left: '10%'
    },
    bannerTextTop: {
        fontSize: 35,
        color: 'white'
    }
})