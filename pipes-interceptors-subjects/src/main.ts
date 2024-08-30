import { map, Observable } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5000);
    }, 3000);
  })

  promise.then(p => console.log(p));



  const observable$: Observable<number> = new Observable(observer => {
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.next(400);
    observer.next(500);

    observer.error(new Error('Something went wrong'))
    observer.complete();
    return () => {
      //cleanup
    }
  });

  // observable$.pipe(map(o => o + 11)).subscribe(subscriber => {
  //   console.log('Subssscriber', subscriber);
  // })

  observable$.subscribe({
    next: subscriber => console.log(subscriber),
    error: error => console.log('Error: ', error.message),
    complete: () => console.log('Completed')

  })
