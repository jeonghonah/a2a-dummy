import './global';
import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Linking,
  Button,
  Alert,
  View,
} from 'react-native';
const Caver = require('caver-js');
const eoa = "0xDc81F11D3551B45c3Cb9460F1c6aD940a53B6dB2";
const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";
const kakaoURL = "alphatalk://klipwallet/open?url=https://dev.klipwallet.com/?target=/token/2/send"

interface States {
  latestBlock: number
  balance: number
}

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // const supported = await Linking.canOpenURL(url);
    // if (supported) {
    //   // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //   // by some browser in the mobile
    //   await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    //   await Linking.openURL(url);
    // }
      await Linking.openURL(url);
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default class App extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      latestBlock: -1,
      balance: 1.0,
    }
  }

  componentDidMount() {
    const caver = new Caver('https://api.baobab.klaytn.net:8651/');

    let refresh = () => {
      caver.klay.getBlock('latest').then((latestBlock: any) => {
        this.setState({ latestBlock: caver.utils.hexToNumber(latestBlock.number) })
      })
      caver.klay.getBalance(eoa).then((balance: any) => {
        this.setState({ balance: caver.utils.fromPeb(balance) })
      })
    }
    refresh()
    setInterval(refresh, 10000)
  }

  render() {
    const latestBlockNumber = this.state.latestBlock;
    const balance = this.state.balance;

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.stretch}
          source={require('./assets/klip.png')}
        />
        <Text></Text>
        <Text>* EOA: {eoa}</Text>
        <Text></Text>
        <Text>* Your KLAY: {balance}</Text>
        <Text></Text>
        <Text>* Latest BN: {latestBlockNumber}</Text>
        <Text></Text>
        <View style={styles.container}>
          <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
          <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
          <OpenURLButton url={kakaoURL}>A2A##Send KLAY</OpenURLButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    margin: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFF00",
    padding: 20
  },
  stretch: {
    width: 415,
    height: 400,
  },
});
