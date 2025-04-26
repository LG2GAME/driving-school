# Projekt: Grzegorz Szarek | Nauka Jazdy

## Opis

'Grzegorz Szarek | Nauka Jazdy' (dalej strona) to strona internetowa typu single-page, obecnie będąca w fazie realizacji. Celem projektu jest zaprezentowanie oferty szkoły nauki jazdy w sposób estetyczny i funkcjonalny. Strona będzie zawierać następujące sekcje:

- **Home**: Wprowadzenie do strony (w trakcie tworzenia)
- **Dlaczego my?**: Powody, dla których warto wybrać tę szkołę (w trakcie tworzenia)
- **Oferta**: Szczegóły dostępnych usług (w trakcie tworzenia)
- **O nas**: Prezentacja instruktorów (w trakcie tworzenia)
- **Plan szkoleniowy**: Opis przebiegu kursu (w trakcie tworzenia)
- **Kontakt**: Możliwość skontaktowania się przez numer telefonu / WhatsApp (w trakcie tworzenia)

## Aktualny stan projektu

Strona jest w fazie deweloperskiej. Pełna funkcjonalność i zawartość będą dodawane w miarę postępu prac. Śledź nasz postęp, aby być na bieżąco.

## Funkcjonalności

- **Sekcje strony**: Home, Dlaczego My?, Oferta, O Nas, Plan szkoleniowy, Kontakt (w trakcie realizacji)
- **Responsywność**: Strona jest zaprojektowana z myślą o urządzeniach mobilnych i będzie dostosowywana do różnych rozdzielczości w miarę rozwoju projektu.
- **Nawigacja**: Użytkownicy będą mogli łatwo przechodzić pomiędzy sekcjami strony za pomocą menu (w trakcie realizacji).
- **Animacje**: Zaplanowano animacje dla niektórych elementów, takich jak powiększenie guzika po najechaniu czy płynna zmiana kart (w trakcie realizacji).

## Instrukcje uruchomienia projektu (dla dewelopera)

1. **Instalacja zależności**:

   Aby zainstalować wszystkie wymagane zależności, uruchom polecenie:

   ```bash
   npm install

   ```

2. **Uruchomienie projektu lokalnie**:

   Aby uruchomić stronę w trybie deweloperskim, użyj polecenia:

   ```bash
   npm start

   ```

   Strona będzie dostępna pod adresem http://localhost:5173.

3. **Generowanie wersji produkcyjnej**:

   AAby przygotować wersję produkcyjną strony, uruchom:

   ```bash
   npm run build

   ```

   Pliki produkcyjne zostaną zapisane w folderze dist/, gotowe do wdrożenia na serwerze.

## Struktura katalogów

<!-- prettier-ignore-start -->
```markdown
src
    │   App.tsx
    │   main.tsx
    │   vite-env.d.ts
    ├───assets
    │   ├───icons
    │   └───images
    ├───components
    │   ├───layout
    │   │   │   index.ts
    │   │   ├───content-section
    │   │   │       ContentSection.scss
    │   │   │       ContentSection.tsx
    │   │   ├───navigation
    │   │   │       Navigation.scss
    │   │   │       Navigation.tsx
    │   │   ├───text-section
    │   │   │       TextSection.tsx
    │   │   └───wrapper
    │   │           Container.tsx
    │   │           Wrapper.tsx
    │   └───ui
    │       │   index.ts
    │       │
    │       └───button
    │               Button.tsx
    ├───pages
    │   │   index.ts
    │   └───hero
    │           Hero.scss
    │           Hero.tsx
    └───styles
            main.scss
            _buttons.scss
            _globals.scss
            _mixins.scss
            _reset.scss
            _typography.scss
            _variables.scss
```
<!-- prettier-ignore-end -->

## Wdrożenie na serwerze

Strona jest gotowa do wdrożenia na serwerze obsługującym aplikacje statyczne. Ostateczna wersja strony będzie dostępna do wdrożenia po zakończeniu prac.

## Konserwacja i aktualizacje

1. Aktualizacje treści:
   Aby edytować treści na stronie, otwórz odpowiedni plik (np. src/components/Header.tsx lub src/components/Contact.tsx) i zmień zawartość tekstową lub obrazy.

2. Dodawanie nowych sekcji:
   Aby dodać nową sekcję, stwórz nowy komponent w folderze src/components/ i zaktualizuj nawigację, aby nowa sekcja była dostępna.

## Wsparcie

Strona jest w trakcie realizacji. W przypadku pytań dotyczących funkcjonalności, postępu prac lub potrzeby wprowadzenia zmian, prosimy o kontakt.

## Licencja

Strona została stworzona na zamówienie i jest własnością klienta. Kod źródłowy jest dostępny wyłącznie w celu wsparcia oraz konserwacji, chyba że umowa stanowi inaczej.
