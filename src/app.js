import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { groupRankRouter } from "./routes/GroupRankRoutes.js";
import { koreaDecadeRouter } from "./routes/KoreaDecadeRoutes.js";
import { seoulGuRouter } from "./routes/SeoulGuRoutes.js";
const app = express();

const PORT = process.env.SERVER_PORT;

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("데이터 프로젝트 API 입니다.");
});

app.use(groupRankRouter);
app.use(koreaDecadeRouter);
app.use(seoulGuRouter);

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };