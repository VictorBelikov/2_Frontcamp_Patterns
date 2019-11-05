import errPopupView from '../views/errPopupView';

// Creating error popup use 'Singleton' pattern
export default class ErrorPopup {
  constructor() {
    if (typeof ErrorPopup.instance === 'undefined') {
      ErrorPopup.instance = this;
    }
    return ErrorPopup.instance;
  }

  getView(error) {
    return errPopupView(error);
  }
}
