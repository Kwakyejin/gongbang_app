import axios from "axios";
import { data } from "../assets/data_F.json";

async function flowerCheck(img, threshold) {
  await axios
    .post(
      "http://34.64.231.30:8000/flowerChecking?threshold=" +
        threshold.toString(),
      { file: img }
    )
    .then((res) => {
      if (res.data.flower_name == "unknown") return null;
      const flowerName = res.data.flower_name;
      for (const info in data) {
        if (info.name == flowerName) {
          return info;
        }
      }
      return null;
    });
}

export default flowerCheck;
