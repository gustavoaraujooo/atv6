import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={estilos.cont}>
      <View style={estilos.head}>
        <View style={estilos.infoCliente}>
          <Image source={require('./avatars/guga.png')} style={estilos.avatarCliente} />
          <View>
            <Text style={estilos.bv}>Bem-vindo</Text>
            <Text style={estilos.nome}>Gustavo da Silva</Text>
          </View>
        </View>
        <TextInput style={estilos.busca} placeholder="Buscar médico" />
      </View>

      <View style={estilos.cats}>
        <View style={estilos.linhaTitulo}>
          <Text style={estilos.tituloCat}>Categorias</Text>
          <TouchableOpacity style={estilos.mostrarTudo}>
            <Text style={estilos.textoMostrarTudo}>Mostrar Tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.linhaCat}>
          <TouchableOpacity style={estilos.cat}>
            <Text>Consulta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.cat}>
            <Text>Dentista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.cat}>
            <Text>Cardiologista</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.linhaCat}>
          <TouchableOpacity style={estilos.cat}>
            <Text>Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.cat}>
            <Text>Emergência</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.cat}>
            <Text>Laboratório</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={estilos.pgto}>
        <Text style={estilos.tituloPgto}>Top Doutores</Text>
        <View style={estilos.doutor}>
          <Image source={require('./avatars/ryan.png')} style={estilos.avatar} />
          <View style={estilos.infoDoutor}>
            <Text style={estilos.nomedr}>Dr. Ryan Nascimento</Text>
            <Text style={estilos.funcdr}>Terapeuta</Text>
            <Text style={estilos.avaliacao}>4.9 (38 avaliações)</Text>
          </View>
        </View>
        <View style={estilos.doutor}>
          <Image source={require('./avatars/donald.png')} style={estilos.avatar} />
          <View style={estilos.infoDoutor}>
            <Text style={estilos.nomedr}>Dr. Pato Donald</Text>
            <Text style={estilos.funcdr}>Patologista</Text>
            <Text style={estilos.avaliacao}>4.3 (89 avaliações)</Text>
          </View>
        </View>
      </View>

      <View style={estilos.rodape}>
        <TouchableOpacity style={estilos.botao}>
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
          <Text>Médicos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
          <Text>Agendamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'white',
  },
  head: {
    backgroundColor: 'blue',
    padding: 20,
  },
  infoCliente: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCliente: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  bv: {
    color: 'white',
    fontSize: 18,
  },
  nome: {
    color: 'white',
    fontSize: 16,
  },
  busca: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  cats: {
    padding: 20,
  },
  linhaTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloCat: {
    fontSize: 18,
  },
  mostrarTudo: {
    backgroundColor: 'lightblue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textoMostrarTudo: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
  linhaCat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cat: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  pgto: {
    padding: 20,
  },
  tituloPgto: {
    fontSize: 18,
    marginBottom: 10,
  },
  doutor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoDoutor: {
    flex: 1,
  },
  nomedr: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  funcdr: {
    fontSize: 14,
    color: 'gray',
  },
  avaliacao: {
    fontSize: 14,
    color: 'orange',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  botao: {
    fontSize: 16,
    color: 'white', 
  },
});



export default App;
