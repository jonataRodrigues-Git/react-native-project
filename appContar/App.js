import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {use, useState, useTransition} from 'react';

function App() {
  const [numero, setNumero] = useState(1);
  
  function contadaor() {
      if(numero >= 12){
         return  
      }
      setNumero(numero + 1);
      
  }
  function remover() {
      if(numero <= 1){
          return  
      }
      setNumero(numero - 1);
  }

  return (
    <View style= {styles.container}>
      <View>
        <Text style={styles.texto}>
          Pessoas no Restaurante:
        </Text>
      </View>

      <View>
        <Text style={styles.textContador}>
          {numero}
        </Text>
      </View>

      <View>
        <Text style={[styles.textInfo, numero < 12 ? styles.aviso : styles.textInfo]}>
            Restauranto está no seu limite de PESSOAS .!
        </Text>
      </View>

      <View style={styles.btnAre}>
        <TouchableOpacity style={[styles.btn, numero === 12 ? styles.desabi : styles.btn]}  onPress={contadaor}>
        <Text style={styles.btnText}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, numero === 1 ? styles.desabi : styles.btn]} onPress={remover}>
        <Text style={styles.btnText}>
          Remover
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 25
  },
  textContador: {
    backgroundColor: 'black',
    color: '#FFFF',
    padding: 10,
    borderRadius: 10,
    fontSize: 35,
    margin: 10
  },
  textInfo: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 5
  },  
  btnAre: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 20 
  },
  btn: {
    backgroundColor: 'green',
    padding: 13,
    borderRadius: 10
  },
  btnText: {
    color: '#FFFF',
    fontSize: 19
  },
  desabi: {
    opacity: 0.3
  },
  aviso: {
    opacity: 0
  }
  
});

export default App;
