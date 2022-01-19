import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "plant", plant.wd_plnt_idntfr), data),
  {
    name: plant.object_class_mlsft_nm,
    region: plant.region_nm,
    region_type: plant.region_type,
    efficacy: plant.efficacy,
    efficacy_ncl: plant.efficacy_ncl,
    acquisition_term: plant.acquisition_term,
    edible_part: plant.edible_part ? plant.edible_part : null,
    object_class_lclas_nm: plant.object_class_lclas_nm,
    scientific_nm: plant.scientific_nm,
    woody_herbal: plant.woody_herbal,
    nutrient: plant.nutrient,
    irdnt_nm: plant.irdnt_nm,
    irdnt_ncl: plant.irdnt_ncl,
  };
