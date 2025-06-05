import { parse, format } from "date-fns";

export default function formatDate(dateString: string): string {
  if(!dateString) {
    return dateString;
  }
  return format(parse(dateString, 'yyyy-MM', new Date()), 'MMMM yyyy')
}