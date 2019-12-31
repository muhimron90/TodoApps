import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {format} from 'date-fns';
import {theme} from '../constants';
import {Text} from '../components';

function Finish({item, index, completeTodo, deleteItem}) {
  const datee = format(new Date(), 'MMMM dd, yyyy H:mma');
  return (
    <View>
      <View style={styles.todoList}>
        <Text medium center h3 black style={styles.textStyled}>
          {item.text}
        </Text>
      </View>
      {item.isComplete ? (
        <View style={styles.Completed}>
          <Text white center bold small style={{justifyContent: 'center'}}>
            Finished
          </Text>
          <Text white caption regular>
            {datee}
          </Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems : 'flex-start', width :'100%'}}>
          <View style={styles.onGoing}>
          <Text white bold small style={{paddingLeft : 10}}>On Going</Text>
            </View>


                

            <View style={styles.styleComplete}>
            <TouchableOpacity onPress={() => completeTodo(index)}>
              <Text white center bold small>
                Done
              </Text>
                    </TouchableOpacity>
             
            </View>
            <View style={styles.styleDelete}>
             <TouchableOpacity onPress={() => deleteItem(index)}>
              <Text white center bold small>
                Remove
              </Text>
              </TouchableOpacity>
              </View>

        </View>
      )}
    </View>
  );
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const onHandleChange = text => {
    setValue(text);
    console.log(text);
  };
  const onSubmit = () => {
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems : 'flex-start'}}>
      <TextInput
        value={value}
        onChangeText={text => onHandleChange(text)}
        placeholderTextColor="#888"
        placeholder="New Task"
        style={styles.input}
      />
      <TouchableOpacity onPress={onSubmit}>
        <View style={styles.button}>
          <Text
            white
            center
            bold
            small
            style={{padding: 5, marginLeft: 5, marginRight: 5}}>
            GO
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'todo',
      isComplete: false,
    },
  ]); //state convert to Object

  const addTodo = text => {
    const AddNew = [
      ...todos,
      {
        text,
      },
    ]; //merge iteration todos with new text
    setTodos(AddNew);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const deleteItem = index => {
     const deleteList = [...todos];
     deleteList.splice(index, 1)
     setTodos(deleteList);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text h1 center white bold>
          TODO APPS
        </Text>
        <TodoForm addTodo={addTodo} />
        <View style={{borderColor: '#fff', borderWidth: 1, marginTop: 20}} />
        {todos.map((item, index) => (
          <View key={index} style={styles.todo}>
            <Finish
              key={index}
              index={index}
              item={item}
              completeTodo={completeTodo}
              deleteItem={deleteItem}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.bg,
    height: '100%',
  },
  textStyled: {
    padding: 10,
  },
  todoList: {
    backgroundColor: theme.color.white,
    borderRadius: 5,
    padding: 5,
    //width : '80%',
  },
  todo: {
    backgroundColor: 'transparent',
    marginTop: 15,

    marginBottom: 15,
    borderRadius: 3,
    width: '90%',
    // maxWidth: 500,
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: theme.color.gray2,
    borderRadius: 5,
    height: 50,
    paddingLeft: 5,
    marginLeft: 5,
    backgroundColor: theme.color.white,
  },
  button: {
    backgroundColor: theme.color.btnSubmit,
    height: 50,
    top: 0,
    bottom: 0,
    right: 15,
    borderRadius: 50,
    justifyContent: 'center',
    marginLeft: 5,
    width: '100%',
  },
  styleComplete: {
    backgroundColor: theme.color.tertiary,
   width: '20%',
    borderRadius: 3,
     marginTop: 5,
     
  },
  styleDelete: {
    backgroundColor: theme.color.accent,
    width: '20%',
    borderRadius: 3,
    marginTop: 5,

  },
  Completed: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.color.finished,
    width: '100%',
    marginTop: 5,
  },
  onGoing: {
    backgroundColor: theme.color.onGo,
    width: '59%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 3
  },
});
