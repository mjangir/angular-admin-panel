import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from '../../auth/services/auth.service';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {
  
  constructor() {
    super();
    
    const token = localStorage.getItem(TOKEN_NAME);
    if(token) {
      this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
    }
  }

}