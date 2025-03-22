//importa os módulos 
import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

//Importa os tipos das rotas para garantir tipagem no typescript
import { StackScreenProps } from "@react-navigation/stack";

//Definindo o tipo de rota
type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

//Define as props do componente  HomeScreen usanto o tipo StackScreenProps
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

//Declarando o componente funcional 
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bem Vindo a home scree</Text>
            <Button
                title='Ir pra detalhes'
                onPress={() => navigation.navigate('Details')}
            />
        </View>

    );
}

//Define o estilo 
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default HomeScreen;