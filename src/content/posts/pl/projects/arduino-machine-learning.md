---
title: Arduino uruchamia model uczenia maszynowego (TensorflowLite/LiteRT)
h1: Jak uruchomić model uczenia maszynowego na Arduino?
description: Jak uruchomić model uczenia maszynowego na Arduino przy użyciu TensorflowLite/LiteRT.
date: "2025-01-21"
image: /img/posts/arduino-machine-learning.webp
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;" 
src="https://www.youtube.com/embed/SlR5Ai1eS2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

To krótki przewodnik wyjaśniający, jak uruchomić model uczenia maszynowego na Arduino przy użyciu TensorflowLite/LiteRT. W tym przypadku uruchamiam model rozpoznawania głosu na Arduino Nano 33 BLE Sense. Fragmenty kodu dostępne są w opisie filmu.

## Wymagania

- Arduino Nano 33 BLE Sense (lub inna kompatybilna płytka)

## Przegląd

W tym projekcie rzucam wyzwanie idei, że sztuczna inteligencja wymaga ogromnej mocy obliczeniowej, uruchamiając model rozpoznawania głosu w czasie rzeczywistym na Arduino Nano. W przeciwieństwie do tradycyjnych komputerów, ten mikrokontroler nie posiada systemu operacyjnego i ma tylko 20 KB pamięci RAM, a mimo to z powodzeniem identyfikuje słowa kluczowe do sterowania sprzętem. To podejście „TinyML” zużywa 3000 razy mniej energii niż standardowy komputer PC. Pozwala to na implementacje taniej sztuczna inteligencja wbudowanej w przedmioty codziennego użytku, takie jak pralki czy lampy.

Wyzwanie Techniczne
Uruchamianie AI na tak ograniczonym sprzęcie wymaga przezwyciężenia dwóch głównych problemów:

- Układ nie posiada systemu plików, więc model jest ładowany bezpośrednio do pamięci RAM jako tablica hex danych binarnych.

- Dostępność pamięci: Korzystając z TensorFlow Lite i kwantyzacji, możemy drastycznie zmniejszyć rozmiar modelu. Model został odchudzony do zaledwie 20 KB.

Demonstracja w Praktyce
Finalna konstrukcja to wbudowana dioda LED aktywowana głosem. Gdy model usłyszy „Yes” (Tak), wbudowana dioda zaczyna świecić na zielono; „No” (Nie) zmienia jej kolor na czerwony, a każdy inny dźwięk sprawia, że świeci na niebiesko. Odkryłem nawet, że pobór mocy jest tak niesamowicie niski (0,06 W), że standardowy powerbank nawet nie zauważa, że jest podłączony odbiornik!

Jak to działa (pod maską)
Załadowałem model przy użyciu biblioteki TensorFlow Lite (LiteRT). Proces odbywa się w ciągłej pętli:

- Przechwytywanie dźwięku: Wbudowany mikrofon rejestruje fragment dźwięku.

- Ekstrakcja cech: Surowy dźwięk jest konwertowany na format zrozumiały dla modelu.

- Inferencja: Model o rozmiarze 20 KB działa na układzie, aby przewidzieć słowo kluczowe.

- Akcja: Wynik jest mapowany na wyjście sprzętowe (kolor diody LED).


## Podsumowanie

Ten projekt dowodzi, że choć modele takie jak GPT-5 są imponujące, to prawdziwa „solidność” sztucznej inteligencji w świecie rzeczywistym drzemie w malutkich, wydajnych układach zaprojektowanych do konkretnych, niezawodnych zadań.
