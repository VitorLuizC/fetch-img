export default (source: string): Promise<HTMLImageElement> => {
  const element = document.createElement('img');

  return new Promise((resolve, reject) => {
    /**
     * Evita a propagação do evento e remove os ouvintes dos eventos 'load' e 'error'.
     * @param event
     */
    const clean = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      element.removeEventListener('load', onLoad);
      element.removeEventListener('error', onError);
    };

    /**
     * Callback do evento de carregamento da imagem.
     * @param event
     */
    const onLoad = (event: Event) => {
      clean(event);
      resolve(element);
    };

    /**
     * Callback do evento de erro da imagem.
     * @param event
     */
    const onError = (event: ErrorEvent) => {
      clean(event);
      reject(new Error(event.message));
    };

    element.addEventListener('load', onLoad);
    element.addEventListener('error', onError);
    element.src = source;
  });
};
