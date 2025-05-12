export interface PostSessions {
  /**
   * The user name or email of the user.
   */
  login: string;

  /**
   * The password for the user's account.
   */
  password?: string;

  /**
   * If the session should be extended for longer than normal via remember token.
   * Defaults to `false`.
   */
  'remember-me'?: boolean;

  /**
   * The remember token. Allows skipping for 2 factor within its window.
   */
  'remember-token'?: string;
}

export interface SessionResponse {
  /**
   * User details.
   */
  user?: {
    email?: string;
    'external-id'?: string;
    'is-confirmed'?: string;
    name?: string;
    nickname?: string;
    username?: string;
  };

  /**
   * The remember token.
   */
  'remember-token'?: string;

  /**
   * The session expiration time.
   */
  'session-expiration'?: string;

  /**
   * The session token.
   */
  'session-token'?: string;
}
