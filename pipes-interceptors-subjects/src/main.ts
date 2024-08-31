import { BehaviorSubject, map, Observable, ReplaySubject, Subject } from 'rxjs';
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

  // observable$.subscribe({
  //   next: value => console.log(value),
  //   error: error => console.log('Error: ', error.message),
  //   complete: () => console.log('Completed')

  // })


  // const subject$$ = new Subject();

  // subject$$.subscribe(value => console.log('Sub 1:', value));
  // subject$$.next(100)
  // subject$$.next(200)
  // subject$$.next(300)
  // subject$$.subscribe(value => console.log('Sub 2:', value))
  // subject$$.next(400)
  // subject$$.next(500)
  // subject$$.subscribe(value => console.log('Sub 3:', value));
  // subject$$.next(600);
  // subject$$.next(700);


// the Behaivor Subject always holds one value, and when we subscribe we get that value
// const behaivorSubject$$ = new BehaviorSubject(100);

// behaivorSubject$$.subscribe(value => console.log('Subscriber 1:', value));

// behaivorSubject$$.next(200);
// behaivorSubject$$.next(300);

// behaivorSubject$$.subscribe(value => console.log('Subscriber 2:', value))
// behaivorSubject$$.next(400);
// behaivorSubject$$.next(500);
// behaivorSubject$$.subscribe(value => console.log('Subscriber 3:', value))
// behaivorSubject$$.next(600);


// A ReplaySubject can store a specific number of previously emitted values (called the "buffer size") and replay them to any new subscribers.
const replaySubject$$ = new ReplaySubject(5);


replaySubject$$.subscribe(value => console.log('rSubject 1:', value))
replaySubject$$.next(100);
replaySubject$$.next(200);
replaySubject$$.next(300);
replaySubject$$.next(400);
replaySubject$$.next(500);
replaySubject$$.next(600);
replaySubject$$.next(700);
replaySubject$$.next(800);
replaySubject$$.next(900);
replaySubject$$.subscribe(value => console.log('rSubject 2:', value));
replaySubject$$.subscribe(value => console.log('rSubject 3:', value));





