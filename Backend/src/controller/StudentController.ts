import { Request, Response, Express } from 'express';
import { StudentService } from '../service/StudentService';

export class StudentController{
    private studentService: StudentService;


    constructor(studentService: StudentService) {
        this.studentService = studentService;
    }


    async getAllStudents (req:Request, res:Response){
        try{
            const students = await this.studentService.getAllStudents();
            res.status(200).json(students);
        }catch (err){
           console.error(err);
           res.status(500).json({message: 'Erreur de connexion à la base'});

        }
    };

     async getStudentsById (req:Request, res:Response){
        const id = Number(req.params.id);
        if (isNaN(id)){
            res.status(400).json({message:'id invalide'});
            return;
        }
        try {
            const students = await this.studentService.getStudentsById(id)
            res.status(200).json(students);

        }catch (err){
            console.error(err);
            res.status(404).json({message: 'id pas trouvé'})
        }
    };

     async createStudent (req:Request, res:Response){
        const {firstname, lastname, mail} = req.body;

        if (!firstname || !lastname || !mail){
            res.status(400).json({message: 'champs manquants'})
            return;
        }

        try {
            const student = await  this.studentService.createStudent({firstname, lastname, mail});
            res.status(201).json(student);
        }
        catch (err){
            console.error(err);
            res.status(500).json({message:'Erreur de connexion à la base'});
        }
    };

     async updateStudent (req:Request, res:Response){
        const id = Number(req.params.id);
        if (isNaN(id)){
            res.status(400).json({message:'id invalide'});
            return;
        }
        try {
            const student = await  this.studentService.updateStudent(id, req.body);
            res.status(200).json(student);
        }catch (err){
            console.error(err);
            res.status(404).json({ message: 'id pas trouvé' });
        }

    }

    async deleteStudent (req:Request, res:Response){
        const id = Number(req.params.id);
        if (isNaN(id)){
            res.status(400).json({message:'id invalide'});
            return;
        }
        try {
            const studentsDeleted = await this.studentService.deleteStudent(id)
            res.status(200).json(studentsDeleted);

        }catch (err){
            console.error(err);
            res.status(404).json({message: 'id pas trouvé'})
        }
    };



}