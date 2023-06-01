import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("데이터 프로젝트 API 입니다.");
});

app.listen(PORT, () => {
    console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
})