import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { groupRankRouter } from "./routes/groupRankRoute.js";
import { minwonRouter } from "./routes/minwonRoute.js";
import { quizRouter } from './routes/quizRoute.js';
import { koreaDecadeRouter } from "./routes/koreaDecadeRoute.js";
import { seoulGuRouter } from "./routes/seoulGuRoute.js";
import { sdmComplaintsRouter } from "./routes/sdmComplaintsRoute.js";
import { galleryUploadRouter } from "./routes/galleryUploadRoute.js";
import multer from 'multer';

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
app.use(minwonRouter);
app.use(quizRouter);
app.use(koreaDecadeRouter);
app.use(seoulGuRouter);
app.use(sdmComplaintsRouter);
app.use(galleryUploadRouter);


app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };
