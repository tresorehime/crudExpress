import {StudentRepository} from "../repository/StudentRepository";

export class StudentService {
    private studentRepository: StudentRepository;

    constructor(studentRepository: StudentRepository) {
        this.studentRepository = studentRepository;
    }

    async getAllStudents (){
        return this.studentRepository.findAll();
    }
    async getStudentsById (id:number){
        const student = await this.studentRepository.findById(id);
        if (!student){throw new Error("student not found")};
      return student;
    }
    async deleteStudent (id:number){
        const student = await this.studentRepository.findById(id);
        if (!student){throw new Error("student not found")};
        await this.studentRepository.delete(id);
        return student;
    }
}