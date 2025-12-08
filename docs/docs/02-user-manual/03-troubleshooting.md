# Troubleshooting & Support

If you're experiencing issues with your Transit Tracker, please check the following troubleshooting steps. If you still need help, you can [ask on GitHub Discussions](https://github.com/EastsideUrbanism/transit-tracker/discussions/categories/q-a).

## Common Issues

### Display is completely blank when powered on

Try using the [brightness buttons](./99-faq/brightness.mdx) to increase the brightness of the display.

### Trouble pushing configuration via USB

_Related error messages_: "Liveness check timed out", "Not connected", "Request timed out"

If you are having trouble pushing your Transit Tracker's configuration via USB, please try the following steps:

1. Unplug your Transit Tracker from your computer and plug it back in.
2. Restart your browser.
3. If you have any routes set in the configurator, try removing them and pushing an empty configuration first.
4. Try re-running initial setup from the configurator.
5. Try using a different USB cable (some cables are power-only and do not support data transfer).
6. Try using a different USB port on your computer.
7. If you're using a USB hub, try connecting directly to your computer instead.

## Status Messages

If you see a status message on your Transit Tracker instead of the schedule, that can help diagnose an issue. Here are the possible status messages and their meanings.

### "Waiting for network"

**Problem:** Your Transit Tracker is not yet connected to your Wi-Fi network. This can happen if the signal is weak or the Wi-Fi password is incorrect.

**Solution:** You can re-connect the Transit Tracker to your Wi-Fi network by [following these instructions](./99-faq/switch-wifi.md).

### "Waiting for time sync"

**Problem:** Your Transit Tracker needs to synchronize its internal clock over the internet before it can display the schedule. This usually happens automatically after it connects to Wi-Fi. If you see this message for a long time, it's probably having trouble connecting to the time server.

**Solution:**

1. Make sure your Wi-Fi network has internet access.
2. If you have any sort of firewall or network filtering on your router, make sure it allows UDP connections to `*.pool.ntp.org`.
3. Restart your Transit Tracker.
4. If all else fails, try re-flashing the latest firmware in the [configurator](/configurator).

### "No base URL set"

**Problem:** You have not yet configured your Transit Tracker in the [configurator](/configurator). (Technically, this means your Transit Tracker does not know where to get the schedule data from.)

**Solution:** Go to the [configurator](/configurator), select some routes, and save the configuration.

### "Error loading schedule"

**Problem:** Your Transit Tracker is having trouble loading the schedule data from the server.

**Solution:**

1. Make sure your Wi-Fi network has internet access.
2. If you have any sort of firewall or network filtering on your router, make sure it allows TLS connections to `tt.horner.tj` (if you haven't changed the server you're using).
3. Restart your Transit Tracker.
4. Re-save your configuration from the [configurator](/configurator).

If it's still not working, then it's very likely that the server which hosts the schedule data is down, in which case all you can really do is wait for it to come back up.

### "Loading..."

**Problem:** Your Transit Tracker is trying to load schedule data for the first time, but it hasn't finished yet.

**Solution:** If you see this message for a long time, it's probably having trouble connecting to the server, and you should try the steps for ["Error loading schedule"](#error-loading-schedule).

### "No upcoming departures" / "No upcoming arrivals"

**Problem:** There are no upcoming departures or arrivals for the selected routes at the current time.

**Solution:** If the routes you're tracking are still in service for the day but you see this message, it may be due to one of the following:

- You have set a time offset in the [configurator](/configurator).
- You haven't selected the correct routes.
- There is some other problem with the schedule data. This can sometimes happen close to major service changes.
- Your transit agency has changed the internal ID for a stop or route. If this happens, you should unselect and re-select the affected routes in the [configurator](/configurator), then save the configuration again.
