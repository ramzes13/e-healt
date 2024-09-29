import { Bluetooth } from "@nativescript-community/ble";
const bluetooth = new Bluetooth();

import {
  check as checkPermission,
  request as requestPermission,
} from "@nativescript-community/perms";

const HEART_RATE_SERVICE_UUID = "00001530-0000-3512-2118-0009af100700"; // Example UUID for heart rate service
const HEART_RATE_MEASUREMENT_UUID = "cc353442-be58-4ea2-876e-11d8d6976366"; // Example UUID for heart rate measurement

  test() {
    // bluetooth.isBluetoothEnabled().then(function (enabled) {
    //   console.log("Enabled? " + enabled);
    // });
    //
    // bluetooth.hasLocationPermission().then(function (granted) {
    //   // if this is 'false' you probably want to call 'requestLocationPermission' now
    //   console.log("Has Location Permission? " + granted);
    // });
    //
    // bluetooth.requestLocationPermission().then(function (granted) {
    //   console.log("Location permission requested, user granted? " + granted);
    // });

    // bluetooth
    //   .startScanning({
    //     filters: [{ serviceUUID: "180d" }],
    //     seconds: 5, // Scan for 5 seconds
    //     onDiscovered: (peripheral) => {
    //       console.log("Discovered device:");
    //       console.log(peripheral);
    //       // if (peripheral.name && peripheral.name.includes("Mi Band")) {
    //       //   console.log("Found Xiaomi Band:", peripheral.UUID);
    //       //   // Stop scanning once we find the device
    //       //   bluetooth.stopScanning();
    //       //   this.connectToDevice(peripheral.UUID);
    //       // }
    //     },
    //   })
    //   .then(
    //     () => {
    //       console.log("Scanning complete");
    //     },
    //     (err) => {
    //       console.log("Error while scanning:", err);
    //     }
    //   );
    this.connectToDevice("F7:CE:78:DD:D0:AD");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  private connectToDevice(deviceUUID) {
    bluetooth.connect({
      UUID: deviceUUID,
      onConnected: (peripheral) => {
        console.log("Connected to Mi Band", peripheral);
        // After connecting, explore available services or start reading characteristics
        this.discoverServices(peripheral);
      },
      onDisconnected: () => {
        console.log("Disconnected from Mi Band");
      },
    });
  }

  private discoverServices(peripheral) {
    bluetooth
      .discoverServices({
        peripheralUUID: peripheral.UUID,
      })
      .then(
        (services) => {
          console.log("Discovered services:", services);
          // Once services are discovered, you can read or write to characteristics
          // For example, reading heart rate data
          this.readHeartRate(peripheral.UUID);
        },
        (err) => {
          console.log("Error discovering services:", err);
        }
      );
  }

  private readHeartRate(deviceUUID) {
    bluetooth
      .read({
        peripheralUUID: deviceUUID,
        serviceUUID: "1801",
        characteristicUUID: "2a05",
      })
      .then(
        (result) => {
          console.log("Heart Rate Data:", result.value); // Parse the heart rate value here
          //
          const buffer = new Uint8Array(result.value);

          console.log("Heart Rate Data:", buffer);
        },
        (err) => {
          console.log("Error reading heart rate:", err);
        }
      );
  }
