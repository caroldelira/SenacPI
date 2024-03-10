import { format } from "date-fns";

export function formatDatePT(data: Date) {
  return format(data, "dd/MM/yyyy");
}

export function formatDateShortPT(data: Date) {
  return format(data, "dd/MM/yy");
}

export function formatDateDB(data: Date) {
  return format(data, "yyyy-MM-dd");
}
