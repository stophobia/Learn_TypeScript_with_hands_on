import { v4 as uuid } from 'uuid';

export const statusMap = {
    todo: 'TODO',
    doing: 'DOING',
    done: 'DONE',
} as const;
export type Status = typeof statusMap[keyof typeof statusMap];

export class Task {
    readonly id: string;
    title: string;
    status: Status;

    constructor(properties: { tittle: string }) {
        this.id = uuid();
        this.title = properties.tittle;
        this.status = statusMap.todo;
    }
}