export interface Options {
    day: string;
    timeZone: string;
}
export interface opetionsTime {
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    hour12: boolean;
    timeZone: string;
}
export interface opetonsWeek {
    weekday: 'long' | 'short' | 'narrow';
    timeZone: string;
}
export interface TodoList {
    id: number;
    title: string;
    time: string;
    active: boolean;
}
