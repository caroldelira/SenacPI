import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera/next";

export function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barras com tipo ${type} e dados ${data} foi escaneado!`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para a câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera.</Text>;
  }

  return (
    <View style={styles.container}>
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
        style={{
          //   position: "absolute",
          flex: 1,
          width: "100%",
          height: "50%",
          //   top: 50,
          //   left: 20,
          //   right: 20,
          //   bottom: 50,
        }}
      /> */}
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={
          {
            //   barcodeTypes: ["qr", "pdf417"],
          }
        }
        style={StyleSheet.absoluteFillObject}
        // style={{
        //   //   position: "absolute",
        //   flex: 1,
        //   width: "100%",
        //   height: "50%",
        //   //   top: 50,
        //   //   left: 20,
        //   //   right: 20,
        //   //   bottom: 50,
        // }}
      />
      {scanned && (
        <Button
          title={"Toque para escanear novamente"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
