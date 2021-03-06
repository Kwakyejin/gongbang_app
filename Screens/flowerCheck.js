import axios from "axios";

import { plant } from "../assets/data_F.json";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import firebaseInit from "../firebaseInit";

async function uploadFiles(file) {
  if (!file) return;
  const sotrageRef = ref(firebaseInit.storage, "checkingFile/check.png");
  await uploadBytesResumable(sotrageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then(async (downloadURL) => {
      return downloadURL;
    });
  });
}

async function flowerCheck(img, threshold) {
  const response = await fetch(img.uri);
  const blob = await response.blob();
  if (!blob) return;
  const sotrageRef = ref(firebaseInit.storage, "checkingFile/check.png");
  await uploadBytesResumable(sotrageRef, blob);
  const res = await axios.post(
    "http://34.64.231.30:8000/flowerChecking?threshold=" + threshold.toString()
  );
  if (res.data.flower_name == "unknown") return null;
  const flowerName = res.data.flower_name;
  for (const info of plant) {
    if (info.name == flowerName) {
      return info.name;
    }
  }
  return null;
}
export default flowerCheck;
