import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';

import User from './src/Usuarios';
import ListUser from './src/ListUser/ListUser';


function App() {
  const [usuarios, setUsuarios] = useState(ListUser);

  return (
    <View style={styles.container}>

      <View  style={styles.titulo}>
        <Text style={styles.textoTitulo}>Seja Bem-Vindo !!</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={usuarios}
        renderItem={({ item }) => <User data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    width: '100%',
    height: 50,
  },
  textoTitulo: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    position: 10,
    borderBottomWidth: 2,
  }
});

export default App;
