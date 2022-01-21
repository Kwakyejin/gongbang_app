import _ from "lodash";
import plants from "./data";

const contains = ({ name, efficacy, month }, query) => {
  const { first, second, last } = efficacy;
  if (
    first.includes(query) ||
    second.includes(query) ||
    last.includes(query) ||
    name.includes(query) ||
    month.includes(query)
  ) {
    return true;
  }

  return false;
};

export const getplants = (limit = 20, query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(plants, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(plants, (plant) => {
        return contains(plants, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default getplants;
