export function castToDate( date = new Date(0)){
    date = typeof date === 'string' ? new Date(date):date;
    date = typeof date === 'number' ? new Date(date):date;

    return date;
}

export function formatDate(date, options){
    date = castToDate(date);

    return new Intl.DateTimeFormat("nl-NL",options).format( date);
}

export function formatTime(date){
    return formatDate(date,{hour: "numeric",minute: "numeric"});
}
