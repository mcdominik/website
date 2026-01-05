---
title: Jak podłączyć wyświetlacz OLED do Arduino?
h1: Arduino z wyświetlaczem OLED
description: Minimalny tutorial do konfiguracji wyświetlacza OLED z Arduino.
date: "2025-05-22"
image: /img/posts/arduino-oled.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" src="https://www.youtube.com/embed/___p9JYbTc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Uruchom wyświetlacz OLED z Arduino: Tekst, Kształty i Animacje z Zaawansowaną Grafiką (czyli obrazy/bitmapy :D)

## **Wymagania**

- Arduino
- Wyświetlacz OLED (używam I2C)
- Przewody połączeniowe

## **Przegląd**
W tym tutorialu pokazuję dokładnie, jak podłączyć i zaprogramować jeden z najpopularniejszych komponentów w społeczności majsterkowiczów elektronicznych: wyświetlacz OLED. Niezależnie od tego, czy chcesz wyświetlać dane z czujników, tworzyć niestandardowe animacje, czy po prostu dodać interfejs użytkownika do swojego projektu Arduino, ten przewodnik obejmuje wszystko, od podstaw po bardziej zaawansowane funkcje.

W towarzyszącym filmie przeprowadzam Cię przez:

- Konfiguracja sprzętowa: Zrozumienie I2C vs. SPI oraz logika 3.3V vs. 5V.

- Rozróżnienie sterowników: Różnica między sterownikami SSD1306 a SH1106.

- Podstawowe rysowanie: Wyświetlanie tekstu i kształtów geometrycznych.

- Ruch: Implementacja przewijanego tekstu.

- Zaawansowana grafika: Konwersja i wyświetlanie niestandardowych obrazów (bitmap).

## **Sprzęt i podłączenie**
Do tego projektu używam Arduino Nano 33 BLE, ale kod i okablowanie są kompatybilne również z klasycznym Arduino Uno i Nano.

Identyfikacja Twojego wyświetlacza
Przed okablowaniem sprawdź piny, aby zidentyfikować protokół komunikacyjny:

- I2C (używany w tym tutorialu): Piny oznaczone jako SCL i SDA.

- SPI: Piny oznaczone jako DC, CS, itp.

Przewodnik okablowania
Choć kolory pinów mogą być zagmatwane, połączenia są proste. Oto jak podłączyć OLED I2C do Arduino:

VCC: Podłącz do 3.3V (Większość wyświetlaczy toleruje 5V, ale sprawdź swoją specyfikację).

GND: Podłącz do masy (Ground).

SCL (Serial Clock): Podłącz do A5.

SDA (Serial Data): Podłącz do A4.

## **Konfiguracja oprogramowania: Biblioteki i sterowniki**
Aby uruchomić wyświetlacz, musisz zainstalować dwie konkretne biblioteki za pomocą Menedżera bibliotek Arduino IDE:

- Adafruit GFX Library

- Adafruit SSD1306

SSD1306 vs. SH1106 Sterowniki
Częstym powodem nieporozumień jest chip sterownika. Większość tutoriali zakłada, że masz SSD1306 (128 kolumn szerokości). Jednak wiele niedrogich wyświetlaczy w rzeczywistości używa sterownika SH1106 (132 kolumny szerokości).

Problem: Uruchomienie wyświetlacza SH1106 na kodzie SSD1306 zazwyczaj działa, ale możesz zauważyć niewielkie przesunięcie lub artefakty wizualne na krawędziach.

Rozwiązanie: Dla prostego tekstu nie ma to większego znaczenia. Dla szczegółowych animacji może być konieczne dostosowanie współrzędnych startowych lub użycie biblioteki specjalnie obsługującej SH1106.

### Podsumowanie
Wyświetlacze OLED zastąpiły LCD w wielu projektach, ponieważ są bardziej energooszczędne, mają lepszy kontrast i są bardziej kompaktowe. Są również bardziej wytrzymałe i mają dłuższą żywotność niż LCD. Jeśli potrzebujesz fragmentów kodu, są one dostępne w opisie filmu!
