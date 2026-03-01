# Firmware Customization

Since the firmware for the Transit Tracker is based on [ESPHome](https://esphome.io/), it's possible to heavily customize it to display just about anything you'd like. It's recommended to already be familiar with ESPHome if you'd like to follow this guide. If you run into any issues or have questions, you can pop into the [ESPHome Discord](https://discord.gg/KhAMKrd) where many community members are happy to help out.

Since the scope of customization is so wide, this guide will simply provide a few examples to help you get started.

## Prerequisites

You should have ESPHome set up through one of the methods in the "Getting started" section of the [ESPHome website](https://esphome.io/).

## Copy the stock config

Once you have a configuration created, you can copy the [stock config](https://github.com/EastsideUrbanism/transit-tracker/blob/main/firmware/transit-tracker.yaml) and paste it into your configuration file. This will give you a good starting point to work from.

The main section of interest is the `display:` section, which is where the display's rendering is defined. ESPHome supports a powerful "pages" system that allows you to define multiple pages of content that can be cycled through. This can then be controlled at runtime using any method you wish: buttons, on a timer, via an automation, etc.

This example will rotate between the arrivals board and a clock page every 5 seconds:

```yaml
display:
  - platform: hub75
    id: matrix
    board: adafruit-matrix-portal-s3
    double_buffer: true
    update_interval: 32ms
    panel_width: 64
    panel_height: 32
    layout_cols: 2
    # We swap the G and B channels in firmware because the 64x32 panel hardware has them reversed
    g1_pin: 40
    b1_pin: 41
    g2_pin: 37
    b2_pin: 39
    e_pin: 21
    brightness: 255
    pages:
      - id: transit_schedule
        lambda: |-
          id(tracker).draw_schedule();
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

For more information, you can reference the ESPHome [Display](https://esphome.io/components/display/#display-pages) documentation.

Happy hacking!
