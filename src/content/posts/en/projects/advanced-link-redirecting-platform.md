---
title: "Free Link Redirecting Platform: Open-Source Dynamic QR Engine"
h1: Free Link Redirecting Platform
description: A complete guide how to create self-hosted dynamic QR code generator and URL shortener. Full-stack TypeScript app built with Next.js and NestJS. Features high-performance caching, IoT device integration, and real-time analytics.
date: "2025-11-26"
image: /img/posts/redirecting-app.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" src="https://www.youtube.com/embed/aC6Ddfss85w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

This is a quick guide introducing PrismqQR, a custom-built dynamic QR code engine that allows you to change a QR code's destination URL in real-time based on external triggers like physical movement or voice commands (or just plain http request if you wish). The project is fully [open-source](https://github.com/prism-qr/prism-qr), free to use, and demonstrates how to bridge IoT devices with web redirection logic. Unlike standard URL shorteners, this engine is optimized for high-performance scenarios, supporting **IoT integration** and large-scale marketing campaigns where redirect targets may need to change instantly without updating the physical QR code.

## Why Build a Custom Redirect Platform?

Using third-party services like Bitly or generic QR generators often comes with monthly fees, rate limits, and data privacy concerns. By hosting this **open-source URL shortener** yourself, you gain:

- **Full Data Ownership**: Keep your click analytics and user data private.
- **Unlimited Redirections**: No caps on how many times a link can be scanned or clicked.
- **Custom Domain Authority**: Serve links from your own domain to boost your brand's trust.
- **IoT Flexibility**: Ideal for manufacturing and smart packaging where static QR codes need to point to dynamic, updateable resources (e.g., driver downloads or manuals).

### Use Cases

- Dynamic marketing campaigns
- QR code tracking and analytics
- URL shortening
- IoT device integration
- Multi-device redirection management

## Overview

In this project, I explore the limitations of standard "Static" QR codes—once printed, their destination is permanent—and present a solution called PrismqQR. This is a dynamic redirection engine I built from scratch to allow physical printed papers to react to digital signals, enabling you to orchestrate destination changes via phones, Arduinos, Raspberries, or thousands of IoT devices.

### Static vs. Dynamic QR Theory

To understand the build, we first have to distinguish the types of codes:

Static QR: The black and white dots directly encode the final URL (e.g., your Wi-Fi password or a direct website link). To change the destination, you must reprint the code.

Dynamic QR: The code points to a "redirection engine" (in this case, prismqr.com or your self-hosted domain). This engine acts as a fast transfer station (taking roughly 2ms) that looks up the current intended destination and forwards the user there. This allows for real-time changes, visit charts, and custom business logic without changing the physical print.

To demonstrate the power of the API, I built a tiny black box containing an Arduino Nano, a gyroscope, and a battery.

The logic flow is as follows:

1. Event Detection: The Arduino's gyroscope detects a "shake" event.

2. Transmission: It sends a message via Low Energy Bluetooth (BLE) to a listener script on a computer.

3. API Request: The computer immediately sends a secure HTTP request to the Prismqer public engine using a private API key.

4. Switch: The QR code's destination instantly switches from my YouTube channel to Wikipedia.

For those uncomfortable with electronics, the system is designed to be abstract. You can use a Raspberry Pi (which has built-in Wi-Fi) or even iOS Shortcuts to have Siri change your QR destination via voice command.

### Privacy and Analytics

A major feature of this engine is the analytics dashboard. Because every scan passes through the engine, it aggregates data on location, language, and scan frequency in real-time. Regarding privacy, unlike many paid services that might inject ads or suffer security vulnerabilities, this project is protected by cryptographically strong API keys and is fully open-source, meaning you can host it on your own private server if you don't trust the public cloud.

### Technologies Used

- **Frontend (Next.js)**: A responsive, server-side rendered dashboard for managing links, viewing analytics, and generating QR codes.
- **Backend (NestJS + MongoDB)**: A scalable Node.js architecture using MongoDB for flexible schema design, ensuring fast write operations for analytics logs.
- **Performance System**: Implements caching on every important step and request throttling to prevent abuse and ensure sub-millisecond response times.
- **IoT & API Security**: Features secure API key authentication, making it the perfect backend for smart devices that need to query dynamic configuration URLs.

### Key Features

- Dynamic QR code and link redirection
- High-performance caching layer
- Request throttling for stability
- Event-driven architecture with event emitters
- RESTful API with key-based authentication
- IoT device integration support
- MongoDB for flexible data storage
- Fully open-source

## Conclusion

PrismqQR proves that QR codes don't have to be static, boring links to a single website. By exposing a secure API, we can turn a piece of paper into a dynamic interface that reacts to weather, stock prices, voice commands, or physical movement. Whether you use the hosted version or run the open-source code yourself, this project offers a sustainable, free alternative to subscription-based dynamic link services.
