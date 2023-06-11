import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { groupRankRouter } from "./routers/groupRankRouter.js";
import { minwonRouter } from "./routers/minwonRouter.js";
import { quizRouter } from "./routers/quizRouter.js";
import { koreaDecadeRouter } from "./routers/koreaDecadeRouter.js";
import { seoulGuRouter } from "./routers/seoulGuRouter.js";
import { sdmComplaintsRouter } from "./routers/sdmComplaintsRouter.js";
import { galleryRouter } from "./routers/galleryRouter.js";

const app = express();

const PORT = process.env.SERVER_PORT;

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("데이터 프로젝트 API 입니다.");
});

app.use(groupRankRouter);
app.use(koreaDecadeRouter);
app.use(seoulGuRouter);
app.use(sdmComplaintsRouter);
app.use(galleryRouter);
app.use(minwonRouter);
app.use(quizRouter);

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };
