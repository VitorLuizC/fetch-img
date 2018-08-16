/**
 * Fetch an image using an `Image` instance.
 * @param source - Image source, or `src` attribute.
 */
export default (source: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
  const image = new Image();

  /**
   * Remove listeners for `load` & `error` events and prevents its propagations.
   * @param event
   */
  const clean = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    image.removeEventListener('load', onLoad);
    image.removeEventListener('error', onError);
  };

  /**
   * Listener for `load` event.
   * @param event
   */
  const onLoad = (event: Event) => {
    clean(event);
    resolve(image);
  };

  /**
   * Listener for `error` event.
   * @param event
   */
  const onError = (event: ErrorEvent) => {
    clean(event);
    reject(new Error(event.message));
  };

  image.addEventListener('load', onLoad);
  image.addEventListener('error', onError);
  image.src = source;
});
