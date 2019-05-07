import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Key from '../components/Key';
//import console = require('console');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      first: '',
      sing: '',
    }
  }

  values = (x) => {
    // var numbers = [];
    // this.setState({ //Concatenar valores
    //   text: this.state.text == '0' ? x : this.state.text + x
    // });

    if (["+", "-", "*", "/"].indexOf(x) > -1) {
      this.setState({
        sing: x,
        first: this.state.text,
        text: ""
      });
      console.log(this.state.sing);
      return;
    } else if (x === "=") {
      this.Calculate();
      return;
    } else if (x === "CE") {
      this.Clean();
    } else {
      this.setState({
        text: this.state.text + x
      });
      console.log(this.state.text);
    }

  }
  
  Clean() {
      let currentValue = this.state.text;
      currentValue = currentValue.substring(0, currentValue.length - 1);
      this.setState({
        text: currentValue,
        first: '',
        sing: '',
      });
  }

  Calculate = () => { //Botón
    let result = null;
    if (this.state.sing == '+') {
      result = Number(this.state.first) + Number(this.state.text);
    } else if (this.state.sing == '-') {
      result = Number(this.state.first) - Number(this.state.text);
    } else if (this.state.sing == '/') {
      result = Number(this.state.first) / Number(this.state.text);
    } else if (this.state.sing == '*') {
      result = Number(this.state.first) * Number(this.state.text);
    } else {
      return
    }
    result = result.toString();
    this.setState({
      text: result,
      sing: "",
      first: ""
    });

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
            {this.state.first + this.state.sing + this.state.text}
            </Text>
          </View>
          <View style={styles.operaciones}>
            <Text style={styles.textER}>
            {/* {this.state.value} */}
            </Text>
          </View>
        </View>
        
        <View style={styles.contenedorInferior}>
          <View style={styles.contenedorNumeros}>
              <View style={styles.column}>
                <Key action={() => this.values("9")} styles={styles.numero} stylesText={styles.text} text={"9"}/>
                <Key action={() => this.values("8")} styles={styles.numero} stylesText={styles.text} text={"8"}/>
                <Key action={() => this.values("7")} styles={styles.numero} stylesText={styles.text} text={"7"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.values("6")} styles={styles.numero} stylesText={styles.text} text={"6"}/>
                <Key action={() => this.values("5")} styles={styles.numero} stylesText={styles.text} text={"5"}/>
                <Key action={() => this.values("4")} styles={styles.numero} stylesText={styles.text} text={"4"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.values("3")} styles={styles.numero} stylesText={styles.text} text={"3"}/>
                <Key action={() => this.values("2")} styles={styles.numero} stylesText={styles.text} text={"2"}/>
                <Key action={() => this.values("1")} styles={styles.numero} stylesText={styles.text} text={"1"}/>
              </View>

              <View style={styles.column}>
                <Key action={() => this.values("=")} styles={styles.numero} stylesText={styles.text} text={"="}/>
                <Key action={() => this.values("0")} styles={styles.numero} stylesText={styles.text} text={"0"}/>
                <Key action={() => this.values(".")} styles={styles.numero} stylesText={styles.text} text={"."}/>
              </View>
          </View>

          <View style={styles.contenedorOperadores}>
            <Key action={() => this.values("CE")} styles={styles.operador} stylesText={styles.textOp} text={"CE"}/>
            <Key action={() => this.values("/")} styles={styles.operador} stylesText={styles.textOp} text={"/"}/>
            <Key action={() => this.values("*")} styles={styles.operador} stylesText={styles.textOp} text={"*"}/>
            <Key action={() => this.values("-")} styles={styles.operador} stylesText={styles.textOp} text={"-"}/>
            <Key action={() => this.values("+")} styles={styles.operador} stylesText={styles.textOp} text={"+"}/>
          </View>

          <View>
            <Text action={() => this._navigate()} style={styles.barra}></Text>
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
