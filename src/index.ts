import { RSJwt } from './rs-jwt'
import { Jwt } from './jwt'

export function parseJwt (token: string): Jwt {
  const jwt = new RSJwt()

  return jwt.parse(token)
}

export { RSJwt, Jwt }
