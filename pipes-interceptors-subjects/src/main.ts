import { map, Observable, Subject } from 'rxjs';
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
    next: value => console.log(value),
    error: error => console.log('Error: ', error.message),
    complete: () => console.log('Completed')

  })


  const subject$$ = new Subject();
  subject$$.subscribe(value => console.log('Sub 1:', value));
  subject$$.next(100)
  subject$$.next(200)
  subject$$.next(300)
  subject$$.subscribe(value => console.log('Sub 2:', value))
  subject$$.next(400)
  subject$$.next(500)
  subject$$.subscribe(value => console.log('Sub 3:', value));
  subject$$.next(600);
  subject$$.next(700);

  // Sub 1: 100
  // Sub 1: 200
  // Sub 1: 300
  // Sub 1: 400
  // Sub 2: 400
  // Sub 1: 500
  // Sub 2: 500
  // Sub 1: 600
  // Sub 2: 600
  // Sub 3: 600
  // Sub 1: 700
  // Sub 2: 700
  // Sub 3: 700
