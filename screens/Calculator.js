import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Key from '../components/Key';
//import console = require('console');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      value: null
    }
  }

  _onPressButton = (x) => { //Botón
    let value = parseFloat(x);
    if(x === 'CE'){
        let currentValue = this.state.display;
        currentValue = currentValue.substring(0, currentValue.length - 1);
        this.setState({  display: currentValue,  value: null });
        if (currentValue.length <= 0){
          this.setState({
            display: '0', value: null
          });
        }
    }

    else if(isNaN(value) && x != '.'){//Identifica si entran símbolos
      var currentValue = this.state.display;
      this.setState({
        display:'0',
        value: currentValue
      });
      console.log(currentValue);
    }

    else {
      this.setState({//Concatenar valores
        display: this.state.display == '0' ? x : this.state.display + x
      });
      console.log(x);
    }
  }
  

  _navigate = () => {
    this.props.navigation.navigate('Secret');
  }

  render() {  //Componentes
    return (
      <View style={styles.container}>
        <View style={styles.contenedorSuperior}>
          <View style={styles.operaciones}>
            <Text style={styles.textEO}>
            {this.state.display} 
            </Text>
          </View>
          <View style={styles.operaciones}>
            <Text style={styles.textER}>
            {this.state.value}
            </Text>
          </View>
        </View>
        
        <View style={styles.contenedorInferior}>
          <View style={styles.contenedorNumeros}>
              <View style={styles.column}>
                <Key action={() => this.numbers("9")} styles={styles.numero} stylesText={styles.text} text={"9"}/>
                <Key action={() => this.numbers("8")} styles={styles.numero} stylesText={styles.text} text={"8"}/>
                <Key action={() => this.numbers("7")} styles={styles.numero} stylesText={styles.text} text={"7"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.numbers("6")} styles={styles.numero} stylesText={styles.text} text={"6"}/>
                <Key action={() => this.numbers("5")} styles={styles.numero} stylesText={styles.text} text={"5"}/>
                <Key action={() => this.numbers("4")} styles={styles.numero} stylesText={styles.text} text={"4"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.numbers("3")} styles={styles.numero} stylesText={styles.text} text={"3"}/>
                <Key action={() => this.numbers("2")} styles={styles.numero} stylesText={styles.text} text={"2"}/>
                <Key action={() => this.numbers("1")} styles={styles.numero} stylesText={styles.text} text={"1"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.Result("=")} styles={styles.numero} stylesText={styles.text} text={"="}/>
                <Key action={() => this.numbers("0")} styles={styles.numero} stylesText={styles.text} text={"0"}/>
                <Key action={() => this.numbers(".")} styles={styles.numero} stylesText={styles.text} text={"."}/>
              </View>
          </View>

          <View style={styles.contenedorOperadores}>
            <Key action={() => this.Clean("CE")} styles={styles.operador} stylesText={styles.textOp} text={"CE"}/>
            <Key action={() => this.Operator("/")} styles={styles.operador} stylesText={styles.textOp} text={"/"}/>
            <Key action={() => this.Operator("*")} styles={styles.operador} stylesText={styles.textOp} text={"*"}/>
            <Key action={() => this.Operator("-")} styles={styles.operador} stylesText={styles.textOp} text={"-"}/>
            <Key action={() => this.Operator("+")} styles={styles.operador} stylesText={styles.textOp} text={"+"}/>
          </View>

          <View action={() => this._navigate()} style={styles.barra}>
            <Text></Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 35,
  },
  textOp: {
    color: '#fff',
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  textEO: {
    textAlign: 'center',
    marginTop: 45,
    color: 'gray',
    fontSize: 50,
  },
  textER: {
    textAlign: 'center',
    marginTop: 20,
    color: '#A9A9A9',
    fontSize: 35,
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  contenedorSuperior: {
    flex: 2,
    justifyContent: 'center',
    width: '100%',
  },
  operaciones: {
    flex: 1,
    width: '100%',
    height: '50%',
    alignItems: 'flex-end',
  },

  contenedorInferior: {
    flex: 3,
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contenedorNumeros: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#495154',
    flexDirection: 'column',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row-reverse',
  },
  numero: {
    textAlign: 'center',
    alignItems: 'center',
    width: '33.33%',
  },

  contenedorOperadores: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
  },
  operador: {
    width: '100%',
    height: '20%',
  },
  
  barra: {
    width: 15,
    height: '100%',
    backgroundColor: '#3EDBAB',
    //#34D3A6
  },
});
