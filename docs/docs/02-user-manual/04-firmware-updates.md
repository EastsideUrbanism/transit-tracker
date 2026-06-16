# Firmware Updates

We occasionally release new versions of the Transit Tracker firmware to add new features, fix bugs, or improve performance (e.g., more stable Wi-Fi connection). Applying these updates is highly recommended. There are a few ways to get them to your device.

## USB

1. Connect your Transit Tracker to a computer with a supported browser (Google Chrome, Microsoft Edge, Firefox 151+, or another Chromium-based browser).
2. Visit the <a href="/configurator" target="_blank">configurator</a> and press "Update firmware".
3. Press the "Check for updates" button and select your Transit Tracker device (it's typically the only one in the list).
4. If an update is available, you'll be prompted to install it.

## Wi-Fi

1. Visit the [latest firmware release on GitHub](https://github.com/EastsideUrbanism/transit-tracker/releases/latest).
2. Download the `firmware.ota.bin` file (NOT `firmware.bin` or `firmware.factory.bin`).
3. Visit your [Transit Tracker's IP address](../02-user-manual/99-faq/find-ip-address.mdx) in a web browser.
4. Choose a file under "OTA Update"; select the `firmware.ota.bin` you downloaded earlier.
5. Press the "Update" button.

If you do not see an "OTA Update" section, your firmware version may be too old and will need to update via USB instead.

## Automatic Updates

Starting with firmware v3.1.0, your Transit Tracker will periodically check for updates (around every 6 hours) and install them automatically. This is the default behavior; there's nothing you need to do to receive automatic updates. When an update is available, your Transit Tracker will briefly show "Updating firmware..." along with the progress.

To disable automatic updates, visit your [Transit Tracker's IP address](../02-user-manual/99-faq/find-ip-address.mdx) in a web browser and toggle "Auto-Update" off.

If you are having trouble with automatic updates (for example, you repeatedly see "Updating firmware..." in a loop), please [start a discussion](https://github.com/EastsideUrbanism/transit-tracker/discussions) and we'll help you investigate.

If you manage your own ESPHome configuration, auto-updates will not occur in order to prevent overwriting your changes. Instead, update the package version in your YAML file to the version of the latest release then re-compile. For example: `github://EastsideUrbanism/transit-tracker/firmware/transit-tracker.yaml@vX.Y.Z`
