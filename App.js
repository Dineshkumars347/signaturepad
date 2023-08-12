import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewApp from './Screens/Signaturepad'


export default function App() {
  return (

<>
<View style={styles.container}>
  <Text style={{textAlign:'center',fontWeight:'bold'}}>SIGNATURE PAD</Text>
</View>  
<NewApp></NewApp>
</>  
  );
}

const styles = StyleSheet.create({
  container: { 
    marginTop:20,
    padding:10,
    backgroundColor: '#fff',
  },
});
