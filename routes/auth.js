const router = require("express").Router();
const auth_control = require("../controllers/auth");

router.post("/register", auth_control.Register);
router.post("/login", auth_control.Login);
router.get('/all', auth_control.all);
router.put('/:id', auth_control.update);
router.delete("/:id", auth_control.deleteuser)

module.exports = router;