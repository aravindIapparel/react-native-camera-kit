import { View, Text, StyleSheet,SafeAreaView,TouchableHighlight, TouchableOpacity,Dimensions, Linking, Image} from 'react-native'
import React ,{useState,useEffect}from 'react'
import {CameraScreen} from 'react-native-camera-kit';
import { PermissionsAndroid } from 'react-native';
export default function Screen1() {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);

  const onOpenlink = () => {
    // If scanned then function to open URL in Browser
    Linking.openURL(qrvalue);
  };

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    setOpneScanner(false);
  };

  const onOpneScanner = () => {
    // To Start Scanning
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If CAMERA Permission is granted
            setQrvalue('');
            setOpneScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      // Calling the camera permission function
      requestCameraPermission();
    } else {
      setQrvalue('');
      setOpneScanner(true);
    }
  };
  
return (
  <SafeAreaView style={{flex: 1}}>
    {opneScanner ? (
      <View style={{ flex: 1}}>
      <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width:"100%",height:"100%"}}>
      <CameraScreen
          showFrame={true}
          // Show/hide scan frame
          scanBarcode={true}
          // Can restrict for the QR Code only
          laserColor={'blue'}
          // Color can be of your choice
          frameColor={'yellow'}
          // If frame is visible then frame color
          colorForScannerFrame={'black'}
          // Scanner Frame color
          onReadCode={(event) =>
            onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
        </View>
      </View>
    </View>
    ) : (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Barcode and QR Code Scanner using Camera in React Native
        </Text>
        <View>
        <Image 
          source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
          // {require('C:\Users\Aditi\Downloads\Telegram Desktop\sample\sample\src\screens')}
        />
        </View>
        <Text style={styles.textStyle}>
          {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
        </Text>
        {qrvalue.includes('https://') ||
        qrvalue.includes('http://') ||
        qrvalue.includes('geo:') ? (
          <TouchableHighlight onPress={onOpenlink}>
            <Text style={styles.textLinkStyle}>
              {
                qrvalue.includes('geo:') ?
                'Open in Map' : 'Open Link'
              }
            </Text>
          </TouchableHighlight>
        ) : null}
        <TouchableHighlight
          onPress={onOpneScanner}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Open QR Scanner
          </Text>
        </TouchableHighlight>
      </View>
    )}
  </SafeAreaView>
);
};


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 10,
  alignItems: 'center',
},
titleText: {
  fontSize: 22,
  textAlign: 'center',
  fontWeight: 'bold',
},
textStyle: {
  fontWeight: 600,
  color: 'black',
  fontSize: 20,
  textAlign: 'center',
  padding: 10,
  marginTop: 16,
},
buttonStyle: {
  color: 'white',
  backgroundColor: '#024199' ,
  padding: 5,
  minWidth: 250,
  minHeight: 34,
},
buttonTextStyle: {
  fontSize: 17,
  padding: 5,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
},
textLinkStyle: {
  color: 'blue',
  paddingVertical: 20,
  fontWeight: 500,
  fontSize: 18,
},
});
