import moment from "moment";
import "moment/locale/pl";

type tGetReleaseDate = {
  date: string;
  format: "long" | "short";
};

export default function getReleaseDate(props: tGetReleaseDate) {
  const formattedDate =
    props.format === "long"
      ? moment(props.date).format("DD MMMM YYYY")
      : moment(props.date).format("DD MMM YYYY");
  return formattedDate;
}
