import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { groupRankRouter } from "./routes/GroupRankRoute.js";
import { koreaDecadeRouter } from "./routes/KoreaDecadeRoute.js";
import { seoulGuRouter } from "./routes/SeoulGuRoute.js";
import { sdmComplaintsRouter } from "./routes/SdmComplaintsRoute.js";
import { galleryUploadRouter } from "./routes/GalleryUploadRoute.js";
import { MinwonRouter } from "./routes/MinwonRoute.js";
import { QuizRouter } from './routes/QuizRoute.js';
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
app.use(MinwonRouter);
app.use(QuizRouter);


app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };