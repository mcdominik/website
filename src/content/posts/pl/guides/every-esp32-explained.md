---
title: Jakie ESP32 Powinienem Kupić?
h1: Każda płytka ESP32 Wyjaśniona w 4 Minuty
description: Szybki przewodnik wyjaśniający różne płytki ESP32 i ich funkcje.
date: "2025-12-27"
image: /img/posts/every-esp32-explained.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" src="https://www.youtube.com/embed/MYf_H0vyMxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Szybki przewodnik po mikrokontrolerach ESP.
Espressif Systems zalało rynek (w pozytywnym znaczeniu) tanimi, wydajnymi mikrokontrolerami. Podczas gdy oryginalne ESP8266 i ESP32 stały się standardem dla hobbystów, nowsze nazewnictwo (S3, C3, H2, C6) często bywa mylące.
Ten przewodnik tłumaczy dokładnie, czym są te układy, czym się różnią i którą płytkę wybrać do swojego projektu IoT.

## Przegląd

ESP to skrót od Espressif Systems, firmy półprzewodnikowej z siedzibą w Szanghaju. Ich płytki są bezpośrednią konkurencją dla Arduino, oferując zazwyczaj szybsze procesory, więcej pamięci i natywną łączność Wi-Fi w znacznie niższej cenie. Co najważniejsze, są one w pełni kompatybilne z Arduino IDE i bibliotekami.

Przed wyborem konkretnej serii kluczowe jest zrozumienie formy fizycznej:

1. SoC (System on Chip): Goły układ. Brak pinów, pamięci czy anteny. Nie do użytku bez zaprojektowania własnej płytki PCB.

2. Moduł: Układ zamontowany na małej płytce PCB z pamięcią flash i anteną.

3. Płytka deweloperska (Dev Board): Moduł plus złącze USB, regulator napięcia i goldpiny itp. Gotowa do użycia od razu po wyjęciu z pudełka (np. NodeMCU, M5Stack, Seed Studio Xiao, itp.).

### Podział Serii Układów

1. Dziedzictwo: ESP8266
Wprowadzony w 2014 roku, ten układ zrewolucjonizował IoT dla hobbystów. Choć przez lata był standardem (szczególnie na płytkach NodeMCU), obecnie jest uważany za technologię przestarzałą.

Werdykt: Unikaj w nowych projektach. Obecnie dostępne są lepsze i bardziej wydajne opcje.

2. Nowoczesna Seria "S" (Wydajność)
Seria "Smart" skupia się na wysokiej wydajności.

ESP32-S2: Jednordzeniowy procesor z Wi-Fi.

ESP32-S3: Następca S2. Posiada dwurdzeniowy procesor, Wi-Fi i Bluetooth 5 (LE).

Kluczowa cecha: Zoptymalizowane instrukcje wektorowe dla uczenia maszynowego (Machine Learning). Obsługuje TensorFlow Lite znacznie szybciej niż inne modele.

Najlepszy do: Projektów AI, kamer i aplikacji wymagających dużej mocy obliczeniowej.

3. Seria "C" (Kompaktowa i Przystępna)
Następca serii "Classic" lub "Common". Są to jednordzeniowe procesory RISC-V zaprojektowane jako płytki ogólnego przeznaczenia. Im wyższy numer, tym nowsza płytka.

ESP32-C3: Budżetowy standard z Wi-Fi.

ESP32-C6 / C61: Obsługuje standard 802.15.4. Dzięki temu są kompatybilne z Zigbee, Thread i Matter, co pozwala na tworzenie sieci mesh w inteligentnych domach.

Najlepszy do: Podstawowych czujników IoT, projektów budżetowych i standardowych urządzeń smart home.

4. Seria "H" (Specjalista od Automatyki Domowej)
ESP32-H2: Ten układ został zaprojektowany ściśle pod kątem energooszczędnych sieci kratowych (mesh) dla inteligentnego domu.

Kluczowa różnica: Nie posiada Wi-Fi.

Łączność: Zigbee, Thread oraz Bluetooth Low Energy (BLE).

Najlepszy do: Czujników zasilanych bateryjnie, komunikujących się przez Zigbee/Thread.

5. Klasyczny ESP32
Oryginalny, dwurdzeniowy ESP32 jest wciąż powszechnie dostępny. Choć korzysta ze starszego standardu Wi-Fi i jest mniej energooszczędny niż nowa seria C, ma jedną dużą zaletę: obsługę Bluetooth Classic.

Najlepszy do: Projektów przesyłania strumieniowego dźwięku lub kompatybilności ze starszymi systemami.

### Podsumowanie
Ekosystem Espressif ewoluował od pojedynczego układu Wi-Fi do wyspecjalizowanej linii produktów obejmującej AI, Matter i energooszczędne sieci mesh. Dla większości twórców dzisiaj pozbycie się starego ESP8266 na rzecz S3 (dla mocy) lub C6 (dla łączności) jest logicznym krokiem naprzód.

Zachęcam do obejrzenia powyższego filmu, aby dowiedzieć się więcej szczegółów.
