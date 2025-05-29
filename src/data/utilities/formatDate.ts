import { parse, format } from "date-fns";

export default function formatDate(dateString: string): string {
  return format(parse(dateString, 'yyyy-MM', new Date()), 'MMMM yyyy')
}