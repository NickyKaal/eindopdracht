export function castToDate( date = new Date(0)){
    date = typeof date === 'string' ? new Date(date):date;

    return date;
}

export function formatDate(date){
    date = castToDate(date);

    return new Intl.DateTimeFormat("nl-NL").format( date);
}
