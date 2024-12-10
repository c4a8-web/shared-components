import { getAssetPath, getDefaultSettings } from '../../.storybook/templates';
import { includessurveyhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
  }),
  title: 'Components/Survey',
};

export const Survey = {
  args: {
    headline: {
      text: 'glueckkanja Workaholic-Test',
      level: 'h2',
    },
    subline: 'Finden Sie jetzt heraus, wie hoch Ihr IT-Frust-Level ist!',
    maxPoints: 50,
    rules: [
      {
        headline: {
          text: 'Überschrift',
        },
        text: 'Sie sind beherrscht und reagieren auch in stressigen Situation meistens besonnen. Damit das auch zukünftig so bleibt, empfehlen wir Ihnen, unsere Therapieübungen als Prävention in Ihren Arbeitsalltag einzubauen.',
        cta: {
          text: 'Primary Link',
          href: 'javascript:void(0)',
          link: true,
        },
        image: {
          img: getAssetPath('img/image-placeholder-1.jpg'),
          alt: 'Image Alt',
        },
        maxPercentage: 30,
      },
      {
        headline: {
          text: 'Überschrift',
        },
        text: 'Manchmal würden Sie gerne aus Ihrer Haut fahren, können sich dann aber meisten gerade noch so beherrschen. Unser Tipp: Nutzen Sie in besonders stressigen Momenten unsere „Cool-Down-Art Übung“ und lassen Sie damit alle Ihre negativen Emotionen raus.',
        cta: {
          text: 'Primary Link',
          href: 'javascript:void(0)',
          link: true,
        },
        image: {
          img: getAssetPath('img/image-placeholder-2.jpg'),
          alt: 'Image Alt',
        },
        maxPercentage: 80,
      },
      {
        headline: {
          text: 'Finale Explosion steht kurz bevor!',
        },
        text: 'Oh, wow – Sie stehen kurz vor der finalen Explosion! Leider können selbst unsere wissenschaftlich erprobten Selbsthilfeübungen bei Ihnen keine Abhilfe mehr schaffen. Bitte wenden Sie sich an einen unserer Fachberater, damit dieser möglichst kurzfristig für Sie individuelle Lösungen in Ihren Problemfeldern erarbeiten kann.',
        cta: {
          text: 'Primary Link',
          href: 'javascript:void(0)',
          link: true,
        },
        image: {
          img: getAssetPath('img/image-placeholder-3.jpg'),
          alt: 'Image Alt',
        },
        maxPercentage: 100,
      },
    ],
    steps: [
      {
        question:
          'Ein Kollege sendet eine Mail und bittet Sie darin um einen UK-Adapter für sein HDMI Kabel, das er für eine wichtige Präsentation in London benötigt. Wie reagieren Sie?',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              id: 'points_1_',
              radios: [
                {
                  id: '5',
                  label: 'Ich gehe nach Hause.',
                  checked: true,
                },
                {
                  id: '10',
                  label: 'Ich springe aus dem Fenster.',
                },
                {
                  id: '0',
                  label:
                    'Ich schreibe eine 2seitige Replik, in der ich dem Kollegen in aller Ausführlichkeit erkläre, dass ein UK-Adapter ausschließlich für die Stromversorgung seines Laptops von Nöten ist.',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'Eine Kollegin ruft Sie ganz aufgeregt aus dem Homeoffice an und brüllt ins Telefon, dass ihr Bildschirm schwarz ist. Was tun Sie?',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              id: 'points_2_',
              radios: [
                {
                  id: '5',
                  label: 'Ich brülle zurück – allerdings Schimpfwörter.',
                  checked: true,
                },
                {
                  id: '10',
                  label:
                    'Ich stelle mir vor, dass die Kollegin mit verbundenen Augen über eine 8 spurige Autobahn spaziert und erfreue mich am Ergebnis dieses Gedankenspiels.',
                },
                {
                  id: '0',
                  label:
                    'Ich erkläre der Kollegin – wie schon viele Male zuvor –, dass ihr Bildschirm Energie in Form von Strom benötigt und bitte sie deshalb, diesen ebenfalls einzuschalten.',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'Die Marketingreferentin hat einen wichtigen Videocall mit der Werbeagentur. Wenige Minuten vorher meldet sie sich bei Ihnen, weil ihr Headset mal wieder nicht richtig funktioniert. Was tun sie?',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              id: 'points_3_',
              radios: [
                {
                  id: '0',
                  label:
                    'Ich lasse alles stehen und liegen, eile zu ihr und erkläre ihr erneut die Funktionen der kleinen Knöpfchen am rechten Ohrhörer.',
                  checked: true,
                },
                {
                  id: '10',
                  label:
                    'Ich übernehme den Videocall mit der Werbeagentur, schieße die vorgestellte Werbekampagne direkt ab und bitte darum, eine neue mit richtig vielen bösen Kraftausdrücken zu entwickeln.',
                },
                {
                  id: '5',
                  label:
                    'Ich trinke erstmal in Ruhe einen Espresso (oder zwei, oder drei). Anschließend platze ich in den Call, fummle mehrere Minuten umständlich am Headset der Kollegin herum, wobei ich versehentlich (in Anführungszeichen!) an die Off-Taste ihres Laptops stoße.',
                },
              ],
            },
          ],
        },
      },
      {
        question: 'Der Kollege aus dem dritten Stock hat mal wieder sein Passwort vergessen. Wie reagieren Sie?',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              id: 'points_4_',
              radios: [
                {
                  id: '10',
                  label: 'Ich tätowiere es ihm auf seinen Arm – mit Tackerklammern.',
                  checked: true,
                },
                {
                  id: '5',
                  label:
                    'Ich atme dreimal tief ein und aus. Anschließend denke ich mir 5 neue Schimpfwörter für ihn aus, die ich wie immer fein säuberlich in das bereits gut gefüllte Büchlein auf meinem Schreibtisch eintrage.',
                },
                {
                  id: '0',
                  label:
                    'Ich vergebe ein neues Passwort für den Kollegen und bitte ihn, es sich diesmal gut zu merken.',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'Ein Kollege kommt freudestrahlend in ihr Büro und berichtet Ihnen von einer überraschenden Millionen-Erbschaft eines afrikanischen Onkels, von der er gerade via Email erfahren und sich sogleich über den hinterlegten Link zurück gemeldet hat. Was machen Sie?',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              id: 'points_5_',
              radios: [
                {
                  id: '0',
                  label:
                    'Sie setzen sofort alle Security-Hebel in Bewegung und erklären dem Kollegen, dass es sich bei der Erbschaft vermutlich um einen Angriff böser Hacker handelt. Anschließend nehmen Sie ihn in den Arm und trösten ihn über den entgangenen Millionen hinweg.',
                  checked: true,
                },
                {
                  id: '10',
                  label: 'Sie holen eine gute Pulle Schampus und stoßen mit dem Kollegen auf die viele Kohle an.',
                },
                {
                  id: '5',
                  label:
                    'Sie vermitteln den Kollegen an Ihren Bankberater weiter, damit dieser das Geld sinnvoll anlegen kann.',
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
