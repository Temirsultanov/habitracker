export function isCurrentDay(date) {
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const testingYear = date.getFullYear();
  const testingMonth = date.getMonth();
  const testingDate = date.getDate();

  const isYearsEqual = currentYear === testingYear;
  const isMonthEqual = currentMonth === testingMonth;
  const isDateEqual = currentDate === testingDate;

  return isYearsEqual && isMonthEqual && isDateEqual;
}
