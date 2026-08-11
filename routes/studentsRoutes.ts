import {Router} from "express";
import {StudentRepository} from "../src/repository/StudentRepository";
import {StudentService} from "../src/service/StudentService";
import {StudentController} from "../src/controller/StudentController";

const router = Router();

const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

router.get('/students', studentController.getAllStudents);
router.get('/students', studentController.getStudentsById);
router.post('/students', studentController.createStudent );
router.put('/students/:id', studentController.updateStudent);
router.patch('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);


export default router;