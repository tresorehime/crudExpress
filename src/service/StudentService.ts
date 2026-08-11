import {StudentRepository} from "../repository/StudentRepository";
import {CreateStudent, UpdateStudent} from "../model/Student";

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

    async createStudent (data:CreateStudent){
        return this.studentRepository.create(data);
    }

    async updateStudent (id:number,data:UpdateStudent){
        const student = await  this.studentRepository.findById(id);
        if (!student){
            throw new Error('student pas trouvé');
        }

        return this.studentRepository.update(id,data);
    }
    async deleteStudent (id:number){
        const student = await this.studentRepository.findById(id);
        if (!student){
            throw new Error("student not found");
        }
        await this.studentRepository.delete(id);
        return student;
    }
}