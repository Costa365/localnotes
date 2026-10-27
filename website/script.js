document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById('autosave-textbox');

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const board = urlParams.get('board');

    // Load saved text from local storage
    const savedText = localStorage.getItem(board);
    
    if (savedText) {
        textarea.value = savedText;
    }

    // Autosave text to local storage
    textarea.addEventListener('input', () => {
        localStorage.setItem(board, textarea.value);
    });
});
