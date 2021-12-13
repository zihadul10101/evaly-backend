const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const port =  5500;
const admin = require("./routes/admin")
const auth = require("./routes/auth")
const product = require("./routes/product")
const orders = require("./routes/order")
const users = require("./routes/users")



dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
		
	})
	.then((conn) => {
		console.log("MongoDB Database Connected !")
	})
	.catch((err) => {
		console.error("Error: Database Fail Connection... " , err)
	})



app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message })
})


app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/product", product);
app.use("/api/order", orders);
app.use("/api/user", users);


    app.get('/', (req, res) => {
        res.send('EVALY STORES API')
    })

    app.listen(port, () => {
        console.log(`${port}`, 'server connected')
    })
