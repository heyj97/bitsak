import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { groupRankRouter } from "./routes/GroupRankRoute.js";
import { koreaDecadeRouter } from "./routes/KoreaDecadeRoute.js";
import { seoulGuRouter } from "./routes/SeoulGuRoute.js";
import { sdmComplaintsRouter } from "./routes/SdmComplaintsRoute.js";

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
app.use(sdmComplaintsRouter);

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작했습니다. http://localhost:${PORT}`);
});

export { app };