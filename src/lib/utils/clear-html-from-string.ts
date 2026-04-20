import { decode } from "html-entities";

export default function clearHtmlFromString(strWithHtml: string) {
  return decode(strWithHtml.replace(/<\/?[^>]+(>|$)/g, ""));
}
