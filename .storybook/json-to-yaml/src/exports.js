import { ADDON_ID, TOOL_ID, PARAM_KEY, JSON_TO_YAML_EVENTS, DEFAULT_FILE_TYPE } from './constants';
import { Tool } from './Tool';
import { LOCALIZATION_ALL_LANG } from './defaults';
import { getStoryData } from './helper';

const currentLanguage = 'en';
const LOCALIZATION =
  LOCALIZATION_ALL_LANG && LOCALIZATION_ALL_LANG[currentLanguage] ? LOCALIZATION_ALL_LANG[currentLanguage] : {};

export { ADDON_ID, TOOL_ID, PARAM_KEY, JSON_TO_YAML_EVENTS, DEFAULT_FILE_TYPE, Tool, LOCALIZATION, getStoryData };
