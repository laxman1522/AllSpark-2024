import { SCREEN_NAMES, SCREEN_SIZES } from '../constants/constants';

/**
 * @abstract - This function will reset the window state when there is change in window size
 * @param - width of the screen
 * @windowSize - windowSize state
 * @setWindowSize - windowSize set State function
 * @returns - none
 */
export const setWindowSizeCategory = (
  width: number,
  windowSize: any,
  setWindowSize: any,
) => {
  let newSizeCategory = SCREEN_NAMES.mobile;
  if (width > SCREEN_SIZES.desktop) newSizeCategory = SCREEN_NAMES.lgDesktop;
  else if (width <= SCREEN_SIZES.desktop && width > SCREEN_SIZES.tablet)
    newSizeCategory = SCREEN_NAMES.desktop;
  else if (width <= SCREEN_SIZES.tablet && width > SCREEN_SIZES.lgMobile)
    newSizeCategory = SCREEN_NAMES.tablet;
  else if (width <= SCREEN_SIZES.lgMobile && width > SCREEN_SIZES.mobile)
    newSizeCategory = SCREEN_NAMES.lgMobile;
  if (newSizeCategory !== windowSize) setWindowSize(newSizeCategory);
};
