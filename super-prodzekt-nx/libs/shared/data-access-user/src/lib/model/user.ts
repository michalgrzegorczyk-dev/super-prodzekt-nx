export interface User {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  password: string;
  address: string;
}

export type UserCredential = Pick<User, 'email' | 'password'>;
