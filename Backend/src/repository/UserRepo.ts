import pool from '../config/db';
import {User, CreateUser} from '../model/User';

export class UserRepo {

    async findByEmail(email: string): Promise<User | null> {
        const result = await pool.query<User>(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        if (result.rows.length == 0) {
            return null;
        }
        return result.rows[0];
    }

    async create(data: CreateUser): Promise<User> {
        const result = await pool.query<User>(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [data.email, data.password]
        );

        return result.rows[0];
    }


}