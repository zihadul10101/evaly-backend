const router = require("express").Router();
const users_control = require("../controllers/users");

router.post("/adduser", users_control.adduser);
router.get('/alluser', users_control.allusers);
router.get('/:Id', users_control.FindAUserById);
router.put('/:Id', users_control.update_user);
router.put('/status/:Id', users_control.UpdateDeletedUserStatus);
router.delete('/:Id', users_control.deleteduser);

module.exports = router;