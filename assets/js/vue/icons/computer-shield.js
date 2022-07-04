export default {
  tagName: 'computer-shield',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 28 22">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-286.000000, -596.000000)">
          <g transform="translate(120.000000, 564.000000)">
            <g transform="translate(166.995621, 33.000000)">
              <path d="M21.0044136,7.99696471 L21.0044136,2.47375743 C21.0072481,1.94643087 20.6570661,1.468542 20.1146962,1.25964335 C17.6802651,0.444696877 15.1042558,0.0183213697 12.5043788,0 C9.90429886,0.0192923452 7.32828319,0.446696323 4.89406129,1.26267864 C4.3516914,1.47157728 4.00150939,1.94946616 4.00439648,2.47679272 L4.00421285,7" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.00437876,16 C7.99128312,18.5570825 11.1446288,20 12.5043788,20 C13.8641287,20 17.0174744,18.5570825 19.0043788,16" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4.00437876,12 C3.81134242,13.593127 2.18171535,15.5806978 1.17121992,15.9606135 C1.08113014,15.9953185 1.01663477,16.0874351 1.00593652,16.1966824 C0.995238278,16.3059297 -0.0767125292,15.942815 0.00437876214,16 L2.00437876,18 L1.00437876,20 C0.963356109,20.0945274 2.27873674,19.8017021 2.33315117,19.8866815 C2.3875656,19.9716609 0.914354759,20.0180016 1.00437876,20 C2.24694081,19.8329143 5.99508794,17.8557747 7.00437876,17 L4.00437876,12 Z" id="Path" fill="#FCD116"></path>
              <path d="M3.51718325,13 C3.32414691,14.593127 1.18171535,15.5806978 0.171219921,15.9606135 C0.0811301363,15.9953185 0.0166347678,16.0874351 0.00593652312,16.1966824 C-0.00476172158,16.3059297 0.0402835633,16.4124316 0.121374855,16.4696165 L2.07439516,17.8266081 L1.31131252,19.5939506 C1.27028987,19.688478 1.27873674,19.8017021 1.33315117,19.8866815 C1.3875656,19.9716609 1.47867031,20.0139072 1.56869431,19.9959055 C2.81125636,19.8288199 3.99508794,19.2910874 5.00437876,18.4353127" id="Path-Copy-3" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M22.0043788,12 C22.1974151,13.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 21.013589,17.8559443 20.0043788,17" id="Path-Copy-2" fill="#FCD116"></path>
              <path d="M22.4915743,13 C22.6846106,14.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 22.013589,19.291257 21.0043788,18.4353127" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path" fill="#FCD116"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path-Copy" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `,
};
