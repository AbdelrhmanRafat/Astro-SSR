type LoadingMessage = 'Adding to cart...' | 'Updating quantity...';

export const createLoadingOverlay = () => {
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/50';

  const content = document.createElement('div');
  content.className = 'p-8 flex flex-col items-center animate-fade-in';

  const spinner = document.createElement('div');
  spinner.className = `
    h-10 w-10
    rounded-full
    border-2
    border-green-400
    border-t-transparent
    animate-spin
    shadow-md
  `;  


  content.appendChild(spinner);
  overlay.appendChild(content);

  return overlay;
};

export const setupFormLoading = () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      const overlay = createLoadingOverlay();
      document.body.appendChild(overlay);

      // Remove overlay after delay (simulate slow response)
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 5000); // 5 seconds
    });
  });
}; 