# Part 2: Flash & Configure

Next, we will flash the Transit Tracker firmware to the Matrix Portal board, connect it to Wi-Fi, and select which routes you want to display.

## Flash Firmware

:::note
If you're flashing on a Linux machine, see [this section](../02-user-manual/03-troubleshooting.md#cant-flash-firmware-on-linux) regarding permissions if you are having trouble.
:::

1. Plug the board into your computer.
2. Go to the <a href="/configurator" target="_blank">configurator</a> and press "Initial setup".
3. Hold the "Boot" button on the board. While continuing to hold "Boot", press "Reset" at the same time, then let go of both buttons. The board is successfully in flashing mode if you don't see anything on the displays.
4. Press "Flash firmware" and select the device named "USB JTAG/serial debug unit". If you don't see this device, make sure you followed the previous step correctly.
5. Once flashed, press "Continue to Wi-Fi setup".

## Connect to Wi-Fi

:::info
Transit Tracker only supports 2.4GHz Wi-Fi networks. If your network is 5GHz only, you will need to change your router's settings.
:::

1. Find your network in the list and select it.
2. Enter the password for your network.
3. Press "Connect".

## Select Routes

Once you've connected to Wi-Fi, press "Continue to configuration". You'll be taken to a page where you can select the routes you want to track and how you'd like them to be shown.

Change the options to your liking and press the "Save configuration to device" button when you're done.
