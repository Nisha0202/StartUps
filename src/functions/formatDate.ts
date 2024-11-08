export default function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
}

// // Example usage
// const date = new Date();  // Use the current date
// console.log(formatDate(date));  // Output example: "14 October 2024"
