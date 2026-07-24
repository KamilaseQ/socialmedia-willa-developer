import Image from "next/image";
import { RevealController } from "./reveal";

type IconProps = {
  className?: string;
};

function ArrowDown({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Phone({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.63-3.07 19.3 19.3 0 0 1-6-6 19.7 19.7 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Check({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Target({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function Film({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" />
    </svg>
  );
}

function Message({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

function Chart({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

const packages = [
  {
    name: "Start sprzedażowy",
    price: "5 000 zł",
    description:
      "Szybki start na Facebooku i Instagramie — tam, gdzie najłatwiej złapać uwagę osób szukających mieszkania.",
    features: [
      "12 rolek miesięcznie",
      "12 pakietów relacji miesięcznie",
      "Facebook i Instagram",
      "Plan treści dla gotowych inwestycji",
      "Publikacja i sprzedażowe wezwania do kontaktu",
      "Miesięczne podsumowanie zapytań i reakcji",
    ],
    cta: "Wybieram szybki start",
    featured: false,
  },
  {
    name: "Sprzedaż wielokanałowa",
    price: "9 000 zł",
    description:
      "Stała obecność i dwa tory komunikacji: klient mieszkaniowy oraz wizerunek wiarygodnego dewelopera.",
    features: [
      "18 rolek miesięcznie",
      "Codzienne relacje przez cały miesiąc",
      "Facebook, Instagram, YouTube, LinkedIn i X",
      "15 publikacji na LinkedIn miesięcznie",
      "15 publikacji na X miesięcznie",
      "Optymalizacja profili i publikowanych treści",
      "Cotygodniowe rekomendacje sprzedażowe",
    ],
    cta: "Wybieram pełną obecność",
    featured: false,
  },
  {
    name: "Codzienna sprzedaż",
    price: "12 000 zł",
    description:
      "Najmocniejszy rytm dla inwestycji, które mają szybko wejść w świadomość rynku i regularnie generować rozmowy.",
    features: [
      "Codzienna rolka — 30 miesięcznie",
      "Codzienny pakiet relacji — przez 30 dni",
      "Facebook, Instagram, YouTube, LinkedIn i X",
      "16 publikacji na LinkedIn miesięcznie",
      "15 publikacji na X miesięcznie",
      "2 dni nagraniowe na inwestycjach miesięcznie",
      "Optymalizacja wszystkich kont i profili",
      "Wymyślanie treści i regularna publikacja",
      "Obsługa komentarzy i wiadomości w dni robocze",
      "Cotygodniowy przegląd zapytań i kierunku treści",
      "Priorytetowa promocja gotowych lokali i akcji specjalnych",
    ],
    cta: "Wybieram codzienną sprzedaż",
    featured: true,
  },
];

const productionItems = [
  {
    icon: Target,
    title: "Kierunek sprzedażowy",
    text: "Każdy temat zaczynamy od pytania: jaki lokal, wyróżnik albo obiekcję klienta ma dziś przepracować?",
  },
  {
    icon: Film,
    title: "Nagranie i montaż",
    text: "Przyjeżdżamy na inwestycje, planujemy ujęcia i zamieniamy materiał w krótkie treści gotowe do publikacji.",
  },
  {
    icon: Message,
    title: "Publikacja i reakcja",
    text: "Dbamy o rytm, wezwania do kontaktu i szybkie przekazanie wartościowych rozmów do biura sprzedaży.",
  },
  {
    icon: Chart,
    title: "Decyzje na podstawie efektu",
    text: "Sprawdzamy, które lokale i tematy wywołują kliknięcia oraz zapytania, a potem zwiększamy ich udział.",
  },
];

export default function Home() {
  return (
    <>
      <RevealController />
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>

      <header className="site-header" data-site-header>
        <nav className="nav shell" aria-label="Główna nawigacja">
          <a className="brand" href="#top" aria-label="Willa Developer — początek">
            <Image
              className="brand-logo"
              src="/images/logo-willa-developer.png"
              alt="Willa Developer"
              width={269}
              height={51}
              priority
            />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-offer">social media</span>
          </a>
          <div className="nav-links">
            <a href="#kanaly">Kanały</a>
            <a href="#pakiety">Pakiety</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a className="nav-phone" href="tel:+48501747490">
            <Phone className="icon-sm" />
            <span>+48 501 747 490</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <Image
            className="hero-image"
            src="/images/hero-osiedle.webp"
            alt="Nowoczesna inwestycja mieszkaniowa Willa Developer"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                Oferta przygotowana dla Willa Developer
              </p>
              <h1>
                Social media, które pomagają{" "}
                <em>szybciej sprzedawać</em> gotowe inwestycje.
              </h1>
              <p className="hero-lead">
                Zaczynamy od zera i od razu budujemy komunikację pod efekt:
                uwagę kupujących, zapytania o lokale, spotkania w biurze
                sprzedaży i rezerwacje.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#pakiety">
                  Zobacz plan sprzedażowy
                  <ArrowDown className="icon-sm" />
                </a>
                <a className="button button-ghost" href="tel:+48501747490">
                  <Phone className="icon-sm" />
                  Porozmawiajmy o social mediach
                </a>
              </div>
            </div>
            <div className="hero-proof" aria-label="Założenia współpracy">
              <div>
                <strong>5</strong>
                <span>kanały z konkretną rolą</span>
              </div>
              <div>
                <strong>Od zaraz</strong>
                <span>jesteśmy gotowi rozpocząć</span>
              </div>
              <div>
                <strong>1 cel</strong>
                <span>więcej rozmów o lokalach</span>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#punkt-startu" aria-label="Przewiń do audytu">
            <span>Od zera do sprzedaży</span>
            <ArrowDown className="icon-sm" />
          </a>
        </section>

        <section id="punkt-startu" className="section start-section">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">
                <span>02</span>
                Punkt startu
              </p>
              <h2>
                Od ciszy w social mediach do regularnej obecności, która{" "}
                <em>prowadzi do kontaktu.</em>
              </h2>
              <p>
                Gotowe inwestycje nie mogą czekać, aż klient sam trafi na
                stronę. Social media mają codziennie przypominać o ofercie,
                rozwiewać wątpliwości i dawać prosty powód, żeby napisać lub
                zadzwonić.
              </p>
            </div>

            <div className="transformation-grid">
              <article className="state-card state-card-before" data-reveal>
                <p className="card-label">Dziś</p>
                <h3>Brak własnej sceny sprzedażowej</h3>
                <ul>
                  <li>
                    <span aria-hidden="true">01</span>
                    Gotowe lokale są widoczne głównie dla osób, które już znają
                    markę lub aktywnie ich szukają.
                  </li>
                  <li>
                    <span aria-hidden="true">02</span>
                    Pytania o cenę, dojazd, standard i finansowanie wracają
                    pojedynczo, zamiast pracować jako treści.
                  </li>
                  <li>
                    <span aria-hidden="true">03</span>
                    Brakuje regularnego kontaktu, który buduje zaufanie przed
                    rozmową z doradcą.
                  </li>
                </ul>
              </article>

              <article className="state-card state-card-after" data-reveal>
                <p className="card-label">Po uruchomieniu</p>
                <h3>Codzienna ścieżka do zapytania</h3>
                <ul>
                  <li>
                    <Check className="icon-check" />
                    Każda inwestycja dostaje jasną narrację: dla kogo jest,
                    dlaczego warto i co zrobić teraz.
                  </li>
                  <li>
                    <Check className="icon-check" />
                    Rolki przyciągają uwagę, relacje podtrzymują decyzję, a
                    regularne publikacje utrzymują markę w świadomości
                    kupujących.
                  </li>
                  <li>
                    <Check className="icon-check" />
                    Biuro sprzedaży otrzymuje rozmowy z klientami, którzy już
                    poznali najważniejsze argumenty.
                  </li>
                </ul>
              </article>
            </div>

            <blockquote className="sales-quote" data-reveal>
              <span>Nie budujemy profilu „żeby był”.</span>
              Budujemy powtarzalny powód, aby klient sprawdził lokal, napisał
              i umówił spotkanie.
            </blockquote>
          </div>
        </section>

        <section id="kanaly" className="section channels-section">
          <div className="shell">
            <div className="section-heading heading-light" data-reveal>
              <p className="section-kicker">
                <span>03</span>
                Dwa tory komunikacji
              </p>
              <h2>
                Każdy kanał ma inne zadanie.{" "}
                <em>Wszystkie wspierają sprzedaż.</em>
              </h2>
              <p>
                Nie kopiujemy tego samego posta wszędzie. Rozdzielamy
                komunikację na kanał kupującego i kanał zaufania — tak, aby
                każdy materiał miał konkretną rolę.
              </p>
            </div>

            <div className="channel-grid">
              <article className="channel-card" data-reveal>
                <div className="channel-topline">
                  <div className="platform-pills" aria-label="Facebook i Instagram">
                    <span>Facebook</span>
                    <span>Instagram</span>
                  </div>
                  <span className="channel-number">01</span>
                </div>
                <h3>Kanał kupującego</h3>
                <p className="channel-intro">
                  Tu łapiemy uwagę osób, które szukają mieszkania, porównują
                  lokalizacje albo jeszcze nie wiedzą, że dana inwestycja
                  pasuje do ich planu.
                </p>
                <div className="channel-outcome">
                  <p>Wpływ na sprzedaż</p>
                  <strong>
                    Więcej wejść w ofertę, wiadomości, telefonów i zapisów na
                    spotkanie.
                  </strong>
                </div>
                <ul>
                  <li>prezentacje gotowych lokali i konkretnych korzyści,</li>
                  <li>rolki o lokalizacji, standardzie i codziennym życiu,</li>
                  <li>regularne publikacje dopasowane do miasta i okolicy,</li>
                  <li>powrót do tematów, które wywołały największe zainteresowanie.</li>
                </ul>
              </article>

              <article className="channel-card channel-card-accent" data-reveal>
                <div className="channel-topline">
                  <div className="platform-pills" aria-label="LinkedIn i X">
                    <span>LinkedIn</span>
                    <span>X</span>
                  </div>
                  <span className="channel-number">02</span>
                </div>
                <h3>Kanał zaufania</h3>
                <p className="channel-intro">
                  Tu pokazujemy, że za inwestycjami stoi doświadczony,
                  przewidywalny partner — ważny dla klientów premium,
                  inwestorów, pośredników i otoczenia biznesowego.
                </p>
                <div className="channel-outcome">
                  <p>Wpływ na sprzedaż</p>
                  <strong>
                    Większa wiarygodność marki, łatwiejsze decyzje i nowe
                    relacje, które otwierają sprzedaż.
                  </strong>
                </div>
                <ul>
                  <li>postępy inwestycji i dowody terminowej realizacji,</li>
                  <li>głos ekspertów oraz ludzi stojących za marką,</li>
                  <li>komunikacja do inwestorów i partnerów biznesowych,</li>
                  <li>obecność w rozmowie o rynku i lokalnych inwestycjach.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section content-section">
          <div className="shell">
            <div className="content-layout">
              <div className="content-copy" data-reveal>
                <p className="section-kicker">
                  <span>04</span>
                  Co będziemy mówić
                </p>
                <h2>
                  Nie „ładne posty”. Treści, które{" "}
                  <em>przybliżają klienta do zakupu.</em>
                </h2>
                <p>
                  Klient rzadko kupuje po jednej rolce. Dlatego budujemy serię
                  kontaktów: najpierw zainteresowanie, potem odpowiedzi na
                  obiekcje, dowód wiarygodności i jasny krok do biura
                  sprzedaży.
                </p>
                <div className="launch-note">
                  <span>Jesteśmy gotowi rozpocząć od zaraz</span>
                  <p>
                    Rozumiemy biznes deweloperski i wiemy, że każdy dzień
                    zwłoki działa na niekorzyść gotowych inwestycji.
                  </p>
                </div>
              </div>

              <div className="content-visual" data-reveal>
                <Image
                  src="/images/inwestycja-dzien.webp"
                  alt="Wizualizacja nowoczesnej inwestycji Willa Developer"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className="visual-caption">
                  <span>Przykładowy kierunek rolki</span>
                  <strong>
                    „3 powody, dla których ostatnie gotowe lokale znikną
                    pierwsze”
                  </strong>
                </div>
              </div>
            </div>

            <div className="pillars-grid">
              <article data-reveal>
                <span>01</span>
                <h3>Pokazujemy produkt</h3>
                <p>
                  Konkretne lokale, układy, widoki, standard, promocje i
                  terminy gotowości.
                </p>
              </article>
              <article data-reveal>
                <span>02</span>
                <h3>Usuwamy obiekcje</h3>
                <p>
                  Cena, finansowanie, dojazd, okolica, proces zakupu i koszty
                  utrzymania.
                </p>
              </article>
              <article data-reveal>
                <span>03</span>
                <h3>Budujemy zaufanie</h3>
                <p>
                  Ludzie, realizacje, postęp budowy, standard pracy i
                  doświadczenie od 2006 roku.
                </p>
              </article>
              <article data-reveal>
                <span>04</span>
                <h3>Wywołujemy działanie</h3>
                <p>
                  Dni otwarte, ostatnie lokale, limitowane akcje i proste
                  wezwanie do kontaktu.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="pakiety" className="section pricing-section">
          <div className="shell">
            <div className="section-heading pricing-heading" data-reveal>
              <p className="section-kicker">
                <span>05</span>
                Pakiety
              </p>
              <h2>
                Trzy tempa wejścia na rynek. Ten sam cel:{" "}
                <em>więcej rozmów o lokalach.</em>
              </h2>
              <p>
                W każdym pakiecie bierzemy odpowiedzialność za pomysł,
                realizację, publikację i sprzedażowy kierunek. Wybór zależy od
                tego, jak szybko Willa Developer chce zbudować widoczność.
              </p>
            </div>

            <aside className="full-service-callout" data-reveal>
              <div>
                <p className="card-label">Kompleksowa obsługa social mediów</p>
                <h3>
                  Nie musicie wymyślać treści, nagrywać ani pilnować
                  publikacji.
                </h3>
              </div>
              <ul>
                <li>
                  <Check className="icon-check" />
                  Pomysły i plan komunikacji
                </li>
                <li>
                  <Check className="icon-check" />
                  Optymalizacja kont i profili
                </li>
                <li>
                  <Check className="icon-check" />
                  Nagrania, montaż i teksty
                </li>
                <li>
                  <Check className="icon-check" />
                  Regularne postowanie
                </li>
                <li>
                  <Check className="icon-check" />
                  Obsługa komentarzy i wiadomości
                </li>
                <li>
                  <Check className="icon-check" />
                  Analiza i bieżące ulepszanie treści
                </li>
              </ul>
            </aside>

            <div className="pricing-grid">
              {packages.map((item) => (
                <article
                  className={`price-card${item.featured ? " price-card-featured" : ""}`}
                  key={item.name}
                  data-reveal
                >
                  {item.featured ? (
                    <p className="recommended">Najmocniejszy efekt</p>
                  ) : null}
                  <h3>{item.name}</h3>
                  <p className="price-description">{item.description}</p>
                  <div className="price">
                    <strong>{item.price}</strong>
                    <span>netto / miesiąc</span>
                  </div>
                  <div className="price-divider" aria-hidden="true" />
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <Check className="icon-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="price-button" href="#kontakt">
                    {item.cta}
                    <ArrowUpRight className="icon-sm" />
                  </a>
                </article>
              ))}
            </div>

            <div className="pricing-notes" data-reveal>
              <p>Wszystkie ceny są kwotami netto.</p>
              <p>
                Możemy rozpocząć od razu po przekazaniu dostępów i ustaleniu
                pierwszej inwestycji do komunikacji.
              </p>
            </div>
          </div>
        </section>

        <section className="section production-section">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">
                <span>06</span>
                Po naszej stronie
              </p>
              <h2>
                Willa Developer sprzedaje mieszkania.{" "}
                <em>My dowozimy uwagę i rozmowy.</em>
              </h2>
              <p>
                Zespół sprzedaży nie musi wymyślać postów ani pilnować
                kalendarza. Potrzebujemy wiedzy o lokalach i szybkiej
                akceptacji — resztę organizujemy.
              </p>
            </div>

            <div className="production-grid">
              {productionItems.map(({ icon: Icon, title, text }) => (
                <article key={title} data-reveal>
                  <div className="production-icon">
                    <Icon className="icon-lg" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="funnel" data-reveal>
              <div className="funnel-copy">
                <p className="card-label">Mierzymy to, co ma znaczenie</p>
                <h3>Od wyświetlenia do rozmowy o mieszkaniu.</h3>
              </div>
              <ol aria-label="Ścieżka sprzedażowa social media">
                <li>
                  <span>01</span>
                  <strong>Uwaga</strong>
                  <small>obejrzenie rolki</small>
                </li>
                <li>
                  <span>02</span>
                  <strong>Zainteresowanie</strong>
                  <small>wejście w ofertę</small>
                </li>
                <li>
                  <span>03</span>
                  <strong>Zapytanie</strong>
                  <small>wiadomość lub telefon</small>
                </li>
                <li>
                  <span>04</span>
                  <strong>Spotkanie</strong>
                  <small>wizyta w biurze</small>
                </li>
                <li>
                  <span>05</span>
                  <strong>Sprzedaż</strong>
                  <small>rezerwacja lokalu</small>
                </li>
              </ol>
              <p className="funnel-note">
                Raportujemy wyniki komunikacji i regularnych publikacji. Po
                połączeniu danych z biura sprzedaży możemy oceniać także jakość
                zapytań, spotkania i rezerwacje.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <Image
            className="contact-image"
            src="/images/inwestycja-wieczor.webp"
            alt=""
            fill
            sizes="100vw"
          />
          <div className="contact-overlay" />
          <div className="shell contact-content" data-reveal>
            <p className="section-kicker section-kicker-light">
              <span>07</span>
              Następny krok
            </p>
            <h2>
              Porozmawiajmy po prostu o{" "}
              <em>Waszych social mediach.</em>
            </h2>
            <p>
              Jesteśmy w stanie rozpocząć od zaraz, bo rozumiemy biznes
              deweloperski i wiemy, że każdy dzień zwłoki działa na niekorzyść
              gotowych inwestycji. Ustalimy priorytety, pierwszy kierunek
              komunikacji i termin nagrań.
            </p>

            <div className="contact-actions">
              <a className="contact-person" href="tel:+48501747490">
                <span className="contact-initials">KT</span>
                <span>
                  <small>Kamil Tański</small>
                  <strong>+48 501 747 490</strong>
                </span>
                <Phone className="icon-md" />
              </a>
              <a className="contact-person" href="tel:+48728561373">
                <span className="contact-initials">LB</span>
                <span>
                  <small>Leon Bednarski</small>
                  <strong>+48 728 561 373</strong>
                </span>
                <Phone className="icon-md" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand brand-footer" href="#top">
            <Image
              className="brand-logo"
              src="/images/logo-willa-developer.png"
              alt="Willa Developer"
              width={269}
              height={51}
            />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-offer">social media</span>
          </a>
          <p>Oferta sprzedażowej obsługi social media</p>
          <p>© 2026 · Materiały inwestycji: Willa Developer</p>
        </div>
      </footer>

      <div className="mobile-bar" aria-label="Szybkie działania">
        <a href="tel:+48501747490">
          <Phone className="icon-sm" />
          Zadzwoń
        </a>
        <a href="#pakiety">
          Zobacz pakiety
          <ArrowUpRight className="icon-sm" />
        </a>
      </div>
    </>
  );
}
