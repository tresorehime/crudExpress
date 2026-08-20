import jwt from "jsonwebtoken";
import {AuthenticatedUser} from "../model/User";

dotenv.config();

const SECRET = process.env.JWT_SECRET!;
const EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '1h') as SignOptions['expiresIn'];

if (!SECRET) throw new Error('JWT_SECRET is required in the environment');


export const signAccessToken = (user: AuthenticatedUser): string =>
    jwt.sign(user, secret, { expiresIn: EXPIRES_IN });


export function verifyToken(token: string) {
  const {id, email, role} = jwt.verify(token, SECRET) as AuthenticatedUser;

    return {id, email, role} ;
}