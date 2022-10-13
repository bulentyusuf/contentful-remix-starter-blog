export function toReadableDate(dateString: string, locale = "en-GB"): string {
    const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString([locale], options)
}
