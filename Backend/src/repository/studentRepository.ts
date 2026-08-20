import pool from '../config/db';
import {Student, CreateStudent, UpdateStudent} from "../model/Student";

export class StudentRepository {
    async findAll (){
        const result = await pool.query('SELECT * FROM student');
        return result.rows;
    }
    async findById (id:number){
        const result = await pool.query('SELECT * FROM student WHERE id = $1', [id]);
        if(result.rows.length == 0){
            return null;
        }
        return result.rows[0];
    }

    async create (data:CreateStudent): Promise<Student>{
        const result = await pool.query<Student>(
            'INSERT INTO student ( firstname, lastname, mail) VALUES ($1, $2, $3) RETURNING *',
            [data.firstname,  data.lastname, data.mail]
        );
        return result.rows[0];
    }

    async update (id:number,data:UpdateStudent): Promise<Student | null> {
        const result  = await pool.query <Student> (
            'UPDATE student SET firstName = $1, lastname = $2, mail = $3 WHERE id = $4 RETURNING *',
            [data.firstname,data.lastname, data.mail, id]
        );
        if(result.rows.length == 0){
            return null;
        }
        return result.rows[0];

    }

    async delete (id:number){
        const result = await pool.query('DELETE FROM student WHERE id = $1 RETURNING *', [id]);

        if(result.rows.length == 0){
            return null;
        }
        return result.rows[0];
    }
}