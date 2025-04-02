const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ تم الاتصال بقاعدة البيانات"))
.catch((err) => console.log("❌ خطأ في الاتصال بقاعدة البيانات", err));

const indexRoutes = require("./routes/index");
const productRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");

app.use("/", indexRoutes);
app.use("/products", productRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});