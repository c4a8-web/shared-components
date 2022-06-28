import { ADDON_ID, TOOL_ID, PARAM_KEY, HTML_DOWNLOAD_EVENTS, DEFAULT_FILE_TYPE } from './constants';
import { Tool } from './Tool';
import { FILE_LIST, LOCALIZATION_ALL_LANG } from './defaults';
// import { addStyles, addBaseClass } from "./helper";

const currentLanguage = 'en';
const LOCALIZATION = LOCALIZATION_ALL_LANG[currentLanguage];

export {
  ADDON_ID,
  TOOL_ID,
  PARAM_KEY,
  HTML_DOWNLOAD_EVENTS,
  DEFAULT_FILE_TYPE,
  Tool,
  FILE_LIST,
  LOCALIZATION,
  // addStyles,
  // addBaseClass,
};
