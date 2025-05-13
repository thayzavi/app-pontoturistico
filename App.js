import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, Image, Button, Alert, 
  ScrollView, TouchableOpacity, Switch, ActivityIndicator, FlatList, Modal 
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const items = [
    { id: '1', title: '🏛️ Instituto Ricardo Brennand' },
    { id: '2', title: '🌉 Marco Zero' },
    { id: '3', title: '🏖️ Praia de Boa Viagem' },
    { id: '4', title: '🏯 Paço do Frevo' },
    {id: '4', title: '🏰 Forte das Cinco Pontas'},
    {id: '5', title: '🎭 Teatro de Santa Isabel'},
  ];

  const handleGreet = () => {
  console.log("Função de saudação chamada.");
  alert( 'Olá!', `Seja bem-vindo(a), ${name || 'usuário'}!`);
};

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Pronto!', 'A operação foi concluída.');
    }, 2000);
  };

  const themeStyles = {
    backgroundColor: isEnabled ? '#121212' : '#fff',
    textColor: isEnabled? '#fff' : '#000',
    inputbg: isEnabled? '#1e1e1e' : '#fff',
    inputBorder: isEnabled? '#444' : '#ccc',
    itemBoeder: isEnabled? '#333'  : '#ccc',
    modalBg: isEnabled? '#1e1e1e' : '#fff',
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>

      <View style={styles.switchContainer}>
        <Text style={[styles.label,{color: themeStyles.textColor}]}> 🌙 Modo escuro:</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
      </View>
      
      <Text style={[styles.title, {color: themeStyles.textColor}]}> Pontos turísticos Recife </Text>


      <Image
        source={require('./assets/img.jpg')}
        style={styles.image}
      />

      <TextInput
        style={[styles.input, {
            backgroundColor: themeStyles.inputbg,
            borderColor: themeStyles.inputBorder,
            color: themeStyles.textColor
        }]}
        placeholder="Digite seu nome"
        placeholderTextColor={isEnabled? '#aaa' : '#999'}
        value={name}
        onChangeText={setName}
      />

      <Button title="Saudar" onPress={handleGreet} />

      {loading && <ActivityIndicator size="large" color="#007aff" style={styles.loading} />}

      <TouchableOpacity style={[styles.button, { backgroundColor: '#4a90e2' }]} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Cadastrar novo ponto</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={[styles.item, {color: isEnabled ? '#fff' : '#000'}]}>{item.title}</Text>}
        style={styles.list}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Modal Aberto!</Text>
            <TextInput
        style={[styles.input, {
            backgroundColor: themeStyles.inputbg,
            borderColor: themeStyles.inputBorder,
            color: themeStyles.textColor
        }]}
        placeholder="Digite o novo ponto "
        placeholderTextColor={isEnabled? '#aaa' : '#999'}
        value={name}
        onChangeText={setName}
      />
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={simulateLoading}>
        <Text style={styles.buttonText}>Atualizar lugares</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  switchContainer: {
    pointerEvents: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  label: {
    marginRight: 10
  },
  button: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 6,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  loading: {
    marginVertical: 10
  },
  list: {
    marginVertical: 20,
    width: '100%'
  },
  item: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10
  }
});
