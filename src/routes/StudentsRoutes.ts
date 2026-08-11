import {Router} from "express";
import {StudentRepository} from "../repository/StudentRepository";
import {StudentService} from "../service/StudentService";
import {StudentController} from "../controller/StudentController";

const router = Router();

const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

router.get('/students', studentController.getAllStudents.bind(studentController));
router.get('/students/:id', studentController.getStudentsById.bind(studentController));
router.post('/students', studentController.createStudent.bind(studentController));
router.put('/students/:id', studentController.updateStudent.bind(studentController));
router.patch('/students/:id', studentController.updateStudent.bind(studentController));
router.delete('/students/:id', studentController.deleteStudent.bind(studentController));


export default router;