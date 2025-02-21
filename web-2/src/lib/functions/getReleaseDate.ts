import moment from "moment";
import "moment/locale/pl";

type Format = "long" | "short" | "numeric";

type getReleaseDate = {
  date: string;
  format: Format;
};

export default function getReleaseDate(props: getReleaseDate) {
  function setFormatDate(format: Format): string {
    switch (format) {
      case "long":
        return "DD MMMM YYYY";
      case "numeric":
        return "DD/MM/YYYY";
      case "short":
        return "DD MMM YYYY";
    }
  }

  const formattedDate = moment(props.date).format(
    setFormatDate(props.format)
  ) as string;

  return formattedDate;
}
