import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import dados from './db.json';

const imagens = {
  'ryan.png': require('./avatars/ryan.png'),
  'donald.png': require('./avatars/donald.png'),
};

const App = () => {
  const [doutores, setDoutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cliente, setCliente] = useState('');

  useEffect(() => {
    setDoutores(dados.doutores);
    setCategorias(dados.categorias);
    setCliente(dados.cliente.nome);  // Carrega o nome do cliente
  }, []);

  const renderCategorias = () => {
    const linhas = [];
    for (let i = 0; i < categorias.length; i += 3) {
      const linha = categorias.slice(i, i + 3);
      linhas.push(
        <View key={i} style={estilos.linhaCat}>
          {linha.map((cat, index) => (
            <TouchableOpacity key={index} style={estilos.cat}>
              <Text>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return linhas;
  };

  return (
    <ScrollView style={estilos.cont}>
      <View style={estilos.head}>
        <View style={estilos.infoCliente}>
          <Image source={require('./avatars/guga.png')} style={estilos.avatarCliente} />
          <View>
            <Text style={estilos.bv}>Bem-vindo</Text>
            <Text style={estilos.nome}>{cliente}</Text> {/* Exibe o nome do cliente */}
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

        {renderCategorias()}
      </View>

      <View style={estilos.pgto}>
        <Text style={estilos.tituloPgto}>Top Doutores</Text>

        {doutores.map((dr, index) => (
          <View key={index} style={estilos.doutor}>
            <Image source={imagens[dr.imagem]} style={estilos.avatar} />
            <View style={estilos.infoDoutor}>
              <Text style={estilos.nomedr}>{dr.nome}</Text>
              <Text style={estilos.funcdr}>{dr.especialidade}</Text>
              <Text style={estilos.avaliacao}>{dr.avaliacao}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={estilos.rodape}>
        <TouchableOpacity style={estilos.botao}><Text>Início</Text></TouchableOpacity>
        <TouchableOpacity style={estilos.botao}><Text>Médicos</Text></TouchableOpacity>
        <TouchableOpacity style={estilos.botao}><Text>Agendamentos</Text></TouchableOpacity>
        <TouchableOpacity style={estilos.botao}><Text>Perfil</Text></TouchableOpacity>
      </View>
    </ScrollView>
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
