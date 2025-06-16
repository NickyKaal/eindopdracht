export function formatDate(date){
    return new Intl.DateTimeFormat("nl-NL").format(date)
}
