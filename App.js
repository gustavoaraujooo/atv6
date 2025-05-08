import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const imagens = {
  "ryan.png": require("./avatars/ryan.png"),
  "donald.png": require("./avatars/donald.png"),
  "guga.png": require("./avatars/guga.png"),
};

const App = () => {
  const [doutores, setDoutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cliente, setCliente] = useState({ nome: "", avatar: "" });

  useEffect(() => {
    fetch("http://localhost:3000/doutores")
      .then((response) => response.json())
      .then((data) => setDoutores(data));

    fetch("http://localhost:3000/categorias")
      .then((response) => response.json())
      .then((data) => {
        console.log("Categorias carregadas:", data);
        setCategorias(data);
      });

    fetch("http://localhost:3000/cliente")
      .then((response) => response.json())
      .then((data) => {
        console.log("Cliente carregado:", data);
        setCliente(data);
      });
  }, []);

  const renderCategorias = () => {
    if (!categorias.length) {
      return <Text style={estilos.aviso}>Nenhuma categoria disponível</Text>;
    }

    return categorias.map((cat) => (
      <TouchableOpacity key={cat.id} style={estilos.cat}>
        <Text>{cat.nome}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={estilos.cont}>
      <View style={estilos.head}>
        <View style={estilos.infoCliente}>
          {cliente.avatar && imagens[cliente.avatar] ? (
            <Image
              source={require(`./avatars/guga.png`)}
              style={estilos.avatarCliente}
            />
          ) : (
            <Text style={estilos.aviso}>Avatar não encontrado</Text>
          )}
          <View>
            <Text style={estilos.bv}>Bem-vindo</Text>
            <Text style={estilos.nome}>{cliente.nome}</Text>
          </View>
        </View>
        <TextInput style={estilos.busca} placeholder="Buscar médico" />
      </View>

      <View style={estilos.cats}>
        <Text style={estilos.tituloCat}>Categorias</Text>
        <View style={estilos.linhaCat}>{renderCategorias()}</View>
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
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  cont: { flex: 1, backgroundColor: "white" },
  head: { backgroundColor: "blue", padding: 20 },
  infoCliente: { flexDirection: "row", alignItems: "center" },
  avatarCliente: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  bv: { color: "white", fontSize: 18 },
  nome: { color: "white", fontSize: 16 },
  busca: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  cats: { padding: 20 },
  tituloCat: { fontSize: 18, marginBottom: 10 },
  linhaCat: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cat: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  aviso: { fontSize: 14, color: "red", textAlign: "center" },
  pgto: { padding: 20 },
  tituloPgto: { fontSize: 18, marginBottom: 10 },
  doutor: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  infoDoutor: { flex: 1 },
  nomedr: { fontSize: 16, fontWeight: "bold" },
  funcdr: { fontSize: 14, color: "gray" },
  avaliacao: { fontSize: 14, color: "orange" },
});

export default App;
