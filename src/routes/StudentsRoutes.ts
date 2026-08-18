import {Router} from "express";
import {StudentRepository} from "../repository/StudentRepository";
import {StudentService} from "../service/StudentService";
import {StudentController} from "../controller/StudentController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

router.get('/students',authMiddleware, studentController.getAllStudents.bind(studentController));
router.get('/students/:id',authMiddleware, studentController.getStudentsById.bind(studentController));
router.post('/students',authMiddleware, studentController.createStudent.bind(studentController));
router.put('/students/:id',authMiddleware, studentController.updateStudent.bind(studentController));
router.patch('/students/:id',authMiddleware, studentController.updateStudent.bind(studentController));
router.delete('/students/:id',authMiddleware, studentController.deleteStudent.bind(studentController));


export default router;