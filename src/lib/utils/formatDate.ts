export const formatDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString("hr-HR", {
    timeZone: "Europe/Zagreb",
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
