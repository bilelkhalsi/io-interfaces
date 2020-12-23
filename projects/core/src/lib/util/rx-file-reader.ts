import { Observable } from 'rxjs';

export const readFile = (blob: Blob): Observable<string | ArrayBuffer> => new Observable(obs => {
  if (!(blob instanceof Blob)) {
    obs.error(new Error('`blob` must be an instance of File or Blob.'));
    return;
  }

  const reader: FileReader = new FileReader();

  reader.onerror = err => obs.error(err);
  reader.onabort = err => obs.error(err);
  reader.onload = () => obs.next(reader.result);
  reader.onloadend = () => obs.complete();

  return reader.readAsText(blob);
});
