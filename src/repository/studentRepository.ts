import pool from '../config/db';

export class studentRepository {
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

    async delete (id:number){
        const result = await pool.query('DELETE FROM student WHERE id = $1 RETURNING *', [id]);

        if(result.rows.length == 0){
            return null;
        }
        return result.rows[0];
    }
}