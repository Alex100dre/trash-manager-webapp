export interface Trash {
    id: TrashVariant,
    takeOutDays: Day[],
    lastTakeOutDate: Date | null,
}

export enum TrashVariant {
    Brown = 'BROWN',
    Yellow = 'YELLOW',
}

export enum Day {
    Monday = 'MONDAY',
    Tuesday = 'TUESDAY',
    Wednesday = 'WEDNESDAY',
    Thursday = 'THURSDAY',
    Friday = 'FRIDAY',
    Saturdays = 'SATURDAYS',
    Sunday = 'SUNDAY',
}