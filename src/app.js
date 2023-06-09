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

// 추가
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("데이터 프로젝트 API 입니다.");
});

//추가
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${path.basename(file.originalname, ext)}_${Date.now()}${ext}`;
    cb(null, filename);
  }
});
const upload = multer({ storage });


app.use(groupRankRouter);
app.use(koreaDecadeRouter);
app.use(seoulGuRouter);
app.use(sdmComplaintsRouter);
app.use(galleryUploadRouter);
app.use(minwonRouter);
app.use(quizRouter);


app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };