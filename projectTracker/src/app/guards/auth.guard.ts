import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //eğer anonim kullanıcı ise, login bileşenine yönlendir.
  //bu durumda gitmek istediği url'i bir yerde sakla. Login başarılı olursa b url'e yönlendir.
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isUserAuthenticated) {
    return true;
  }

  authService.returnUrl = route.url.join('/');
  return router.navigate(['login']);
};
