import { LoginEffects } from './login.effect';
import { LogoutEffects } from './logout.effect';
import { RegisterEffects } from './register.effect';

export const effects: any[] = [LoginEffects, LogoutEffects, RegisterEffects];

export * from './login.effect';
export * from './register.effect';
export * from './logout.effect';