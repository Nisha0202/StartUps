export default function formatDate(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    // Ensure the input is a Date object
    const parsedDate = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat("en-GB", options).format(parsedDate);
}
