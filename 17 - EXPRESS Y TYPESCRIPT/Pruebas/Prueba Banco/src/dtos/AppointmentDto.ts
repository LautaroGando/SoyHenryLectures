import { Status } from "../interfaces/IAppointment";

export interface AppointmentDto {
    date: Date,
    time: string,
    userId: number,
    status: Status,
};