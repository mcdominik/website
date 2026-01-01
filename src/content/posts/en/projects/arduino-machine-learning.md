---
title: Arduino runs Machine Learning Model (TensorflowLite/LiteRT)
h1: How to Run Machine Learning Model on Arduino?
description: How to run machine learning model on Arduino using TensorflowLite/LiteRT.
date: "2025-01-21"
image: /img/posts/arduino-machine-learning.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" 
src="https://www.youtube.com/embed/SlR5Ai1eS2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

This is a quick guide explaining how to run machine learning model on Arduino using TensorflowLite/LiteRT. In this case I run voice recognition model on Arduino Nano 33 BLE Sense. Code snippets available in the video description.

## Requirements

- Arduino Nano 33 BLE Sense (or other compatible board)

## Overview

In this project, I challenge the idea that AI requires massive computing power by running a real-time voice recognition model on an Arduino Nano. Unlike traditional computers, this microcontroller has no operating system and only 20KB of RAM, yet it successfully identifies keywords to control hardware. This "TinyML" approach uses 3,000 times less power than a standard PC, offering a glimpse into a future where specialized, low-cost AI is embedded into everyday objects like washing machines and light fixtures.

The Technical Challenge
Running AI on such limited hardware requires overcoming two major problems:

- The chip lacks a file system, so the model is loaded directly into the RAM as a hex array of binary data.

- Memory availability: Using TensorFlow Lite and Quantization, we can highly reduce the model's memory footprint. The model was shrunk to a mere 20 KB.

Real-World Demonstration
The final build features a voice-activated LED system. When the model hears "Yes," the onboard diode turns green; "No" turns it red; and any other sound keeps it blue. I even discovered that the power consumption is so remarkably low (0.06 watts) that a standard power bank won't even recognize it's turned on!

How It Works (Under the Hood)
I loaded the model using the TensorFlow Lite (LiteRT) library. The process follows a continuous loop:

- Audio Capture: The built-in microphone records a sound chunk.

- Feature Extraction: The raw audio is converted into a format the model understands.

- Inference: The 20 KB model runs on the chip to predict the keyword.

- Action: The result is mapped to a hardware output (the LED color).


## Conclusion

This project proves that while models like GPT-5 are impressive, the real-world "robustness" of AI lies in tiny, efficient circuits designed for specific, reliable tasks.
