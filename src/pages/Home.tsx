import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import { SkillCard } from '../components/SkillCard';

const handleOnPress = () => {
  console.log('Acessar');
};

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldSkylls => [...oldSkylls, data]);
  }

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldSkills => oldSkills.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia');
    }else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde');
    }else{
      setGreeting('Boa noite');
    }
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Bem-vindo, Marcelo
      </Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>
      <TextInput 
        placeholderTextColor="#555"
        placeholder='Insira a habilidade' 
        style={styles.containerTextInput} 
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} title="Cadastrar"/>

      <Text style={[styles.containerText, {marginVertical: 50}]}>
        Minhas Habilidades
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
        <SkillCard 
          skill={item.name}
          onPress={() => handleRemoveSkill(item.id)}
        />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  containerText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerTextInput: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    height: 50,
    fontSize: 20,
    borderRadius: 7,
    borderWidth: 1,
    marginTop: 10,
    color: '#FFF',
    padding: 7,
  },
  greetings: {
    fontSize: 15,
    marginTop:3,
    color: '#FFF',
  }
});
