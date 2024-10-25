import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

describe('App Routing', () => {
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideRouter(routes)]
        });
        router = TestBed.inject(Router);
        router.initialNavigation();
    });

    it('should navigate to "login"', fakeAsync(() => {
        router.navigate(['/login']);
        tick();
        expect(router.url).toBe('/login');
    }));

    it('should navigate to "album"', fakeAsync(() => {
        router.navigate(['/album']);
        tick();
        expect(router.url).toBe('/album');
    }));

    it('should navigate to "album/:id"', fakeAsync(() => {
        router.navigate(['/album/1']);
        tick();
        expect(router.url).toBe('/album/1');
    }));

    it('should redirect to /album if route is /', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(router.url).toBe('/album');
    }));

    it('should redirect to /album if route not exists', fakeAsync(() => {
        router.navigate(['/']);
        tick();
        expect(router.url).toBe('/album');
    }));
});
