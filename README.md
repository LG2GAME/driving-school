# Projekt: Grzegorz Szarek | Nauka Jazdy

## Opis

'Strona internetowa: Grzegorz Szarek | Nauka Jazdy' (dalej strona) to strona internetowa typu single-page, obecnie będąca w fazie realizacji. Celem projektu jest zaprezentowanie oferty szkoły nauki jazdy w sposób estetyczny i funkcjonalny. Strona będzie zawierać następujące sekcje:

- **Home**: Wprowadzenie do strony
- **Dlaczego my?**: Powody, dla których warto wybrać tę szkołę
- **Oferta**: Szczegóły dostępnych usług
- **O nas**: Prezentacja instruktorów
- **Plan szkoleniowy**: Opis przebiegu kursu
- **Kontakt**: Możliwość skontaktowania się przez numer telefonu / WhatsApp

## Aktualny stan projektu

Strona jest w fazie deweloperskiej. Pełna funkcjonalność i zawartość będą dodawane w miarę postępu prac. Śledź nasz postęp, aby być na bieżąco.

## Funkcjonalności

- **Sekcje strony**: Home, Dlaczego My?, Oferta, O Nas, Plan szkoleniowy, Kontakt
- **Responsywność**: Strona jest zaprojektowana z myślą o urządzeniach mobilnych i będzie dostosowywana do różnych rozdzielczości w miarę rozwoju projektu.
- **Nawigacja**: Użytkownicy będą mogli łatwo przechodzić pomiędzy sekcjami strony za pomocą menu.
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
   ├───App.tsx
   ├───assets
   │   ├───data
   │   │   ├───benefitsData.ts
   │   │   ├───coursesData.ts
   │   │   ├───index.ts
   │   │   ├───instructorsData.ts
   │   │   └───programData.ts
   │   ├───icons
   │   │   ├───auto.svg
   │   │   ├───chat.svg
   │   │   ├───droga.svg
   │   │   ├───egzamin.svg
   │   │   ├───icons.ts
   │   │   ├───indywidualny.svg
   │   │   ├───instruktorzy.svg
   │   │   ├───nauka.svg
   │   │   ├───strzalka.svg
   │   │   ├───telefon.svg
   │   │   └───wiedza.svg
   │   └───images
   │       ├───benefity.png
   │       ├───druzyna.png
   │       ├───images.ts
   │       ├───kierowca.png
   │       └───szarek.png
   ├───components
   │   ├───layout
   │   │   ├───content-wrapper
   │   │   │   ├───ContentWrapper.tsx
   │   │   │   └───contentWrapper.css.ts
   │   │   ├───index.ts
   │   │   ├───navigation
   │   │   │   ├───Navigation.tsx
   │   │   │   └───navigation.css.ts
   │   │   └───wrapper
   │   │       ├───Wrapper.tsx
   │   │       └───wrapper.css.ts
   │   └───ui
   │       ├───button
   │       │   ├───Button.tsx
   │       │   └───button.css.ts
   │       ├───card
   │       │   ├───Card.tsx
   │       │   └───card.css.ts
   │       ├───index.ts
   │       └───text-block
   │           ├───TextBlock.tsx
   │           └───textBlock.css.ts
   ├───hooks
   │   ├───useFocus.ts
   │   └───useMediaQuery.ts
   ├───main.tsx
   ├───pages
   │   ├───benefits
   │   │   ├───Benefits.tsx
   │   │   └───benefits.css.ts
   │   ├───contact
   │   │   ├───Contact.tsx
   │   │   └───contact.css.ts
   │   ├───courses
   │   │   ├───Courses.tsx
   │   │   ├───components
   │   │   │   ├───CourseDetails.tsx
   │   │   │   └───CourseList.tsx
   │   │   └───courses.css.ts
   │   ├───hero
   │   │   ├───Hero.tsx
   │   │   └───hero.css.ts
   │   ├───index.ts
   │   ├───program
   │   │   └───Program.tsx
   │   └───team
   │       ├───Team.tsx
   │       ├───desktop-team
   │       │   └───DesktopTeam.tsx
   │       ├───mobile-team
   │       │   └───MobileTeam.tsx
   │       └───team.css.ts
   ├───styles
   │   ├───globals.css.ts
   │   ├───index.ts
   │   └───theme.css.ts
   └───vite-env.d.ts
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
