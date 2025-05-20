export function dateToYYYYMMDD(date: Date) {
    /* return new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "short",
      }).format(date).replace(/\./g, '-') */
      return date.toJSON().split('T')[0]
}