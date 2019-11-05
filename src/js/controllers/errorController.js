import ErrorPopup from '../models/ErrorPopup';

const renderPopup = (view) => {
  document.body.insertAdjacentHTML('beforeend', view);
  document.getElementById('errModalCloseBtn').addEventListener('click', () => {
    document.getElementById('errModal').remove();
  });
};

export default (err) => {
  const errPopup = new ErrorPopup();
  const errPopupView = errPopup.getView(err);
  renderPopup(errPopupView);
};
