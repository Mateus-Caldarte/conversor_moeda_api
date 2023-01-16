import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import api from '../../services';

class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      valor_moeda: 0,
      valor_Convertido: 0,
    };

    this.Converter = this.Converter.bind(this);
  }

  async Converter() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB;

    const response = await api.get(
      `convert?q=${de_para}&compact=ultra&apiKey=324e6791c2942778bfc2`,
    );

    const cotacao = response.data[de_para];

    const valor = cotacao * parseFloat(this.state.valor_moeda);

    this.setState({
      valor_Convertido: valor.toFixed(2),
    });
  }

  render() {
    const {moedaA, moedaB} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {moedaA} para {moedaB}
        </Text>

        <TextInput
          style={styles.areaInput}
          placeholder="Digite seu valor"
          onChangeText={valor_moeda => this.setState({valor_moeda})}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botaoArea} onPress={this.Converter}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>
          {this.state.valor_Convertido === 0
            ? ''
            : 'R$: ' + this.state.valor_Convertido}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});

export default Conversor;
