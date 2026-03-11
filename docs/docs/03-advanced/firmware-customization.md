# Firmware Customization

Since the firmware for the Transit Tracker is based on [ESPHome](https://esphome.io/), it's possible to heavily customize it to display just about anything you'd like. It's recommended to already be familiar with ESPHome if you'd like to follow this guide. If you run into any issues or have questions, you can pop into the [ESPHome Discord](https://discord.gg/KhAMKrd) where many community members are happy to help out.

Since the scope of customization is so wide, this guide will simply provide a few examples to help you get started.

## Prerequisites

You should have ESPHome set up through one of the methods in the "Getting started" section of the [ESPHome website](https://esphome.io/).

## Create a configuration

### Using ESPHome Device Builder

If you're using [ESPHome Device Builder](https://esphome.io/guides/getting_started_hassio/#installing-esphome-device-builder), then it should automatically detect and offer to import the configuration for your Transit Tracker.

### Manually

If you prefer to create your own configuration, you can make a file somewhere named `transit-tracker.yaml` and include the stock firmware package:

```yaml
packages:
  transit_tracker: github://EastsideUrbanism/transit-tracker/firmware/transit-tracker.yaml@main
```

## Extend the configuration

Once you have a configuration ready to go, you can use ESPHome's [extend and remove features](https://esphome.io/components/packages/#extend) to modify it as you wish. Here is an example which removes the built-in IP address page, adds a clock page, and switches between it every five seconds:

```yaml
display:
  - id: !extend matrix
    pages:
      - id: !remove ip_address_page
      - id: clock_page
        lambda: |-
          int x = it.get_width() / 2;
          int y = it.get_height() / 2;
          it.strftime(x, y / 2, id(pixolletta), COLOR_ON, TextAlign::CENTER, "%r", id(sntp_time).now());
          it.strftime(x, y + (y / 2), id(pixolletta), COLOR_ON, TextAlign::CENTER, "%B %d, %Y", id(sntp_time).now());

interval:
  - interval: 5s
    then:
      - display.page.show_next: matrix
      - component.update: matrix
```
