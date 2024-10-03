import { AppointmentDto } from "../dtos/AppointmentDto";
import { IAppointment, Status } from "../interfaces/IAppointment";
import { IUser } from "../interfaces/IUser";
import { getUserByIdService } from "./User.Service";

const appointments: IAppointment[] = [];

let id: number = 1;

export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {

    return appointments;

};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {

    const findAppointment: IAppointment | undefined = appointments.find((appointment: IAppointment) => {

        return id === appointment.id;

    });

    return findAppointment;

};

export const createAppointmentService = async (appointmentData: AppointmentDto) => {

    const user: IUser | undefined = await getUserByIdService(appointmentData.userId);

    if (!user) throw new Error("Usuario no encontrado!");

    const newAppointment: IAppointment = {
        id,
        date: appointmentData.date,
        time: appointmentData.time,
        userId: user.id,
        status: appointmentData.status,
    };

    appointments.push(newAppointment);

    id++;

    return newAppointment;

};

export const updateAppointmentService = async (id: number): Promise<void> => {

    const findAppointment: IAppointment | undefined = appointments.find((appointment: IAppointment) => {

        return appointment.id === id;

    });

    if (!findAppointment) return undefined;

    findAppointment.status = Status.CANCELLED;

};