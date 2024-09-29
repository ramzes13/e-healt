export interface SignIn {
  email: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignInResponse extends SignUpResponse {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SetToken extends Pick<SignUpResponse, 'accessToken'> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface User {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  isAuthenticated: boolean;
  isLoading: boolean;
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
  error: string | null;
  user: User;
}
