---
title: How to connect OLED Display to Arduino?
h1: Arduino with OLED Display
description: A minimal tutorial for setting up an OLED display with Arduino.
date: "2025-05-22"
image: /img/posts/arduino-oled.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" src="https://www.youtube.com/embed/___p9JYbTc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Run an OLED Display with Arduino: Text, Shapes, and Animations with Advanced Graphics (I mean images/bitmaps :D)

## **Requirements**

- Arduino
- OLED Display (I'm using I2C)
- Jumper wires

## **Overview**
In this tutorial, I demonstrate exactly how to connect and program one of the most popular components in the maker community: the OLED display. Whether you are looking to display sensor data, create custom animations, or simply add a user interface to your Arduino project, this guide covers everything from the basics to advanced features.

In the accompanying video, I walk you through:

- Hardware Setup: Understanding I2C vs. SPI and 3.3V vs. 5V logic.

- Driver Distinctions: The difference between SSD1306 and SH1106 drivers.

- Basic Drawing: Displaying text and geometric shapes.

- Motion: Implementing scrolling text.

- Advanced Graphics: Converting and displaying custom images (bitmaps).

## **Hardware and Pinout**
For this project, I am using an Arduino Nano 33 BLE, but the code and wiring are compatible with the classic Arduino Uno and Nano as well.

Identifying Your Display
Before wiring, check your pins to identify the communication protocol:

- I2C (Used in this tutorial): Pins labeled SCL and SDA.

- SPI: Pins labeled DC, CS, etc.

Wiring Guide
While the pinout colors can get messy, the connections are straightforward. Here is how to map the I2C OLED to an Arduino:

VCC: Connect to 3.3V (Most displays tolerate 5V, but check your specs).

GND: Connect to Ground.

SCL (Serial Clock): Connect to A5.

SDA (Serial Data): Connect to A4.

## **Software Setup: Libraries and Drivers**
To get the display running, you need to install two specific libraries via the Arduino IDE Library Manager:

- Adafruit GFX Library

- Adafruit SSD1306

SSD1306 vs. SH1106 Drivers
A common point of confusion is the driver chip. Most tutorials assume you have an SSD1306 (128 columns wide). However, many affordable displays actually use the SH1106 driver (132 columns wide).

The Issue: Running an SH1106 display on SSD1306 code generally works, but you may see a small shift or visual artifacts on the edges.

The Fix: For simple text, it doesn't matter much. For detailed animations, you may need to adjust your starting coordinates or use a library specifically capable of targeting the SH1106.

### Conclusion
OLED displays replaced LCDs in many projects because they are more energy-efficient, have better contrast and are more compact. They are also more durable and have a longer lifespan than LCDs. If you need code snippets, they are available in the video description!