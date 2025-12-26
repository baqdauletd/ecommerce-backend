import jwt, { SignOptions } from "jsonwebtoken";
import { jwtConfig } from "../config/jwt";

export interface JwtPayload {
  sub: string;
  role: string;
}

const accessTokenOptions: SignOptions = {
  expiresIn: jwtConfig.expiresIn,
};

export function signAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, jwtConfig.secret, accessTokenOptions);
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, jwtConfig.secret) as JwtPayload;
}