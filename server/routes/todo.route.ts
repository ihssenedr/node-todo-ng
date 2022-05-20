import { Router } from "express"
import {
  onCreateNewTodo, onDefault,
  onDeleteTodoById,
  onGetAllTodos,
  onGetTodoById,
  onUpdateTodoById
} from "../controllers/todo.controlleur";




const router = Router()

router.get("/", onDefault)
router.get("/all", onGetAllTodos)
router.post("/new", onCreateNewTodo)
router.get("/todo/:id", onGetTodoById)
router.put("/update/:id", onUpdateTodoById)
router.delete("/delete/:id", onDeleteTodoById)

module.exports = router
