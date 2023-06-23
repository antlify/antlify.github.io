import { useTranslations } from "./utils";

export const cookieConsentConfig = {
  current_lang : 'hu',
  autoclear_cookies : true,
  cookie_name: '_cookieconsentscript',
  cookie_expiration : 365,
  page_scripts: true,

  auto_language: 'document',
  autorun: true,
  delay: 0,
  force_consent: false,
  hide_from_bots: false,
  remove_cookie_tables: false,
  cookie_path: "/",
  cookie_same_site: "Lax",
  use_rfc_cookie: false,
  revision: 0,

  gui_options: {
    consent_modal: {
      layout: 'cloud',
      position: 'bottom center',
      transition: 'slide'
    },
    settings_modal: {
      layout: 'box',
      transition: 'slide'
    }
  },

  languages: {
    'en': {
      consent_modal: {
        title: ' We use cookies! ',
        description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Reject all',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Settings',
        save_settings_btn: 'Save settings',
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        cookie_table_headers: [
          {col1: 'Name'},
          {col2: 'Domain'},
          {col3: 'Expiration'},
          {col4: 'Description'}
        ],
        blocks: [
          {
            title: 'Cookie usage 📢',
            description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://antlify.hu/en/gdpr" class="cc-link">privacy policy</a>.'
          }, {
            title: 'Strictly necessary cookies',
            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'Performance and Analytics cookies',
            description: 'These cookies allow the website to remember the choices you have made in the past',
            toggle: {
              value: 'analytics',     // there are no default categories => you specify them
              enabled: false,
              readonly: false
            },
            cookie_table: [
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '1 year',
                col4: 'analytics',
                is_regex: true
              },
              {
                col1: '_hj*',
                col2: 'hotjar.com',
                col3: '11 months',
                col4: 'user experience',
              }
            ]
          }, {
            title: 'Advertisement and Targeting cookies',
            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          }, {
            title: 'More information',
            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://antlify.hu/en/contact">contact us</a>.',
          }
        ]
      }
    },
    'hu': {
      consent_modal: {
        title: 'Az oldalon sütiket használunk!',
        description: 'Üdvözöljük! Ez a weboldal alapvető sütiket használ az optimális működés érdekében, valamint egyéb sütiket azzal a céllal, hogy megismerjük, hogyan használják a weboldalt. Az utóbbiak csak beleegyezés után lesznek beállítva. <button type="button" data-cc="c-settings" class="cc-link">Testreszabás</button>',
        primary_btn: {
          text: 'Összes elfogadása',
          role: 'accept_all' // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Összes elutasítása',
          role: 'accept_necessary' // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Beállítások',
        save_settings_btn: 'Beállítások mentése',
        accept_all_btn: 'Összes elfogadása',
        reject_all_btn: 'Összes elutasítása',
        close_btn_label: 'Bezárás',
        cookie_table_headers: [
          {col1: 'Név'},
          {col2: 'Domain'},
          {col3: 'Lejárati idő'},
          {col4: 'Leírás'}
        ],
        blocks: [
          {
            title: 'Süti használatról',
            description: 'Sütiket használunk a weboldal alapvető funkcióinak biztosításához és az online élmény növeléséhez. Az egyes kategóriákhoz választhat, hogy mikor szeretné be- vagy kikapcsolni azokat. További részletekért a sütikről és más érzékeny adatokról kérjük, olvassa el az <a href="https://antlify.hu/hu/gdpr" class="cc-link">adatvédelmi irányelveket</a>.',
          }, {
            title: 'Szükséges sütik',
            description: 'Ezek a sütik elengedhetetlenek a weboldal megfelelő működéséhez. Ezek nélkül a sütik nélkül az oldal nem működne megfelelően.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'Teljesítmény és elemzés sütik',
            description: 'Ezek a sütik lehetővé teszik, hogy a weboldal megjegyezze a korábban meghozott választásokat.',
            toggle: {
              value: 'analytics', // there are no default categories => you specify them
              enabled: false,
              readonly: false
            },
            cookie_table: [
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '1 év',
                col4: 'analitika',
                is_regex: true
              },
              {
                col1: '_hj*',
                col2: 'hotjar.com',
                col3: '11 hónap',
                col4: 'felhasználói élmény',
              }
            ]
          },
          {
            title: 'Érdeklődési kör és célzott sütik',
            description: 'Ezek a sütik információkat gyűjtenek arról, hogyan használja a weboldalt, mely oldalakat látogatta meg, és mely linkekre kattintott rá. Az összes adat anonimizált és nem használható fel a felhasználó azonosítására.',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          },
          {
            title: 'További információ',
            description: 'Az adatvédelmi irányelvekkel és választási lehetőségeivel kapcsolatos kérdéseivel kapcsolatban kérjük, <a class="cc-link" href="https://antlify.hu/hu/contact">lépjen kapcsolatba velünk</a>.',
          }
        ]
      }
    },
    'de': {
      consent_modal: {
        title: 'Wir verwenden Cookies!',
        description: 'Hallo, diese Website verwendet essentielle Cookies, um einen reibungslosen Betrieb zu gewährleisten, sowie Tracking-Cookies, um zu verstehen, wie Sie damit interagieren. Letztere werden nur nach Ihrer Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Lass mich wählen</button>',
        primary_btn: {
          text: 'Alle akzeptieren',
          role: 'accept_all' // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Alle ablehnen',
          role: 'accept_necessary' // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Einstellungen',
        save_settings_btn: 'Einstellungen speichern',
        accept_all_btn: 'Alle akzeptieren',
        reject_all_btn: 'Alle ablehnen',
        close_btn_label: 'Schließen',
        cookie_table_headers: [
          {col1: 'Name'},
          {col2: 'Domain'},
          {col3: 'Ablauf'},
          {col4: 'Beschreibung'}
        ],
        blocks: [
          {
            title: 'Cookie-Nutzung 📢',
            description: 'Ich verwende Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie selbst entscheiden, ob Sie zustimmen oder ablehnen möchten. Weitere Informationen zu Cookies und anderen sensiblen Daten finden Sie in der vollständigen <a href="https://antlify.hu/en/gdpr" class="cc-link">Datenschutzerklärung</a>.',
          }, {
            title: 'Unbedingt erforderliche Cookies',
            description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unbedingt erforderlich. Ohne diese Cookies würde die Website nicht richtig funktionieren.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'Leistungs- und Analyse-Cookies',
            description: 'Diese Cookies ermöglichen der Website, sich an die von Ihnen in der Vergangenheit getroffenen Entscheidungen zu erinnern.',
            toggle: {
              value: 'analytics', // there are no default categories => you specify them
              enabled: false,
              readonly: false
            },
            cookie_table: [
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '1 Jahr',
                col4: 'Analyse',
                is_regex: true
              },
              {
                col1: '_hj*',
                col2: 'hotjar.com',
                col3: '11 Monate',
                col4: 'Benutzererfahrung',
              }
            ]
          }, {
            title: 'Werbung und Targeting-Cookies',
            description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht haben und auf welche Links Sie geklickt haben. Alle Daten werden anonymisiert und können nicht zur Identifizierung verwendet werden.',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          }, {
            title: 'Weitere Informationen',
            description: 'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Auswahlmöglichkeiten kontaktieren Sie uns bitte <a class="cc-link" href="https://antlify.hu/en/contact">hier</a>.',
          }
        ]
      }
    }
  }
} as const;
