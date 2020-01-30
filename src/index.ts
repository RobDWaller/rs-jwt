import { RSJwt } from './rs-jwt'
import { Jwt } from './jwt'

/**
 * Parse a JSON Web Token to a JavaScript object which allows you to easily
 * access claims in the header and payload.
 *
 * @author Rob Waller <rdwaller1984@gmail.com>
 */
export function parseJwt (token: string): Jwt {
  const jwt = new RSJwt()

  return jwt.parse(token)
}

export { RSJwt, Jwt }
