import errPopupView from '../views/errPopupView';

export default class ErrorPopup {
  // Creating error popup use 'Singleton' pattern
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
