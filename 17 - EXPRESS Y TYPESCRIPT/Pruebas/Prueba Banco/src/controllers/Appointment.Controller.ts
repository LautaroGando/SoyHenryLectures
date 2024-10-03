import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import { createAppointmentService, getAllAppointmentsService, getAppointmentByIdService, updateAppointmentService } from "../services/Appointment.Service";

export const getAllAppointments = async (req: Request, res: Response) => {

    const appointments: IAppointment[] = await getAllAppointmentsService();

    try {

        res.status(200).json(appointments);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};

export const getAppointmentById = async (req: Request, res: Response) => {

    const {id} = req.body;

    const appointmentId: number = Number(id);

    const appointment: IAppointment | undefined = await getAppointmentByIdService(appointmentId);

    try {

        res.status(200).json(appointment);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};

export const createAppointment = async (req: Request, res: Response) => {

    const {date, time, userId, status} = req.body;

    const newAppointment: IAppointment = await createAppointmentService({date, time, userId, status});

    try {

        res.status(200).json(newAppointment);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};

export const updateAppointment = async (req: Request, res: Response) => {

    const {id} = req.body;

    const appointmentId: number = Number(id);

    await updateAppointmentService(appointmentId);

    try {

        res.status(200).json({
            message: "Turno cancelado.",
        });
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};