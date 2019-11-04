export default (err) => `
  <div id="errModal" class="error-modal">
    <div class="modal-content">
      <span id="errModalCloseBtn" class="close-button">&times;</span>
      <h2>!! Something went wrong !!</h2>
      <p><span>Error: </span>${err.name}</p>
      <p><span>Message: </span>${err.message}</p>
      <p><span>Stack: </span>${err.stack}</p>
    </div>
  </div>
`;
