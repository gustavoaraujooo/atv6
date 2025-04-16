import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";


function telaInicial() {
  return (
    <View>
      <Text>Tela Inicial</Text>
    </View>
  );
}

function telaLogin({ navigation }) {
  return (
    <View>
      <input placeholder="Login"/>
      <br/>
      <input placeholder="Senha"/>
      <br/>
      <Button title="cadastro" onPress={() => navigation.navigate("cadastro")}/>
        <br/>
      <Button title="login" onPress={() => navigation.navigate("home")} />
    </View>
  );
}

function homeScreen() {
    const contatos = [
    { id: 1, nome: "Ryan Nascimento", telefone: "(81) 91111-2222" },
    { id: 2, nome: "Gustavo da Silva", telefone: "(81) 99999-8888" },
    { id: 3, nome: "Emily Vitória", telefone: "(81) 94002-8922" },
  ];

  return (
    <View>
      {contatos.map((contato) => (
        <View key={contato.id}>
          <Text>Nome: {contato.nome}</Text>
          <Text>Telefone: {contato.telefone}</Text>
          <Button
            title="Ver detalhes"
            onPress={() => navigation.navigate("alterarContato", { contato })}
          />
        </View>
      ))}
    </View>
  );
}

function cadastro() {
  return (
    <View>
      <input placeholder="Nome"/>
      <br/>
      <input placeholder="CPF"/>
      <br/>
      <input placeholder="Email"/>
      <br/>
      <input placeholder="Senha"/>
      <br/>
      
        <br/>
      <Button title="Salvar" 
       onPress={() => navigation.navigate("salvar", { homeScreen })}/>
    </View>
  

   );
}
function contato() {
  return (
    <View>
      <input placeholder="Nome"/>
      <br/>
      <input placeholder="Email"/>
      <br/>
      <input placeholder="telefone"/>
        <br/>

      <Button title="Salvar" onPress={() => navigation.navigate(homeScreen)}/>
    </View>



   );
}
function alterarContato({ route }) {
  const { contato } = route.params;

  return (
    <View>
      <Text>Nome: {contato.nome}</Text>
      <Text>Telefone: {contato.telefone}</Text>
      <Button title="Editar" onPress={() => alert("Editar contato")} />
      <Button title="Excluir" onPress={() => alert("Excluir contato")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="inicial" component={telaInicial} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="contato" component={contato} />
        <Stack.Screen name="alterarContato" component={alterarContato} />
        <Stack.Screen
          name="Login"
          component={telaLogin}
          options={{ headerTitleAlign: "center",
           
          }}
        />
       <Stack.Screen
  name="home"
  component={homeScreen}
  options={({ navigation }) => ({
    headerTitleAlign: "center",
    headerRight: () => (
      <Button title="+" onPress={() => navigation.navigate("contato")} />
    ),
  })}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
