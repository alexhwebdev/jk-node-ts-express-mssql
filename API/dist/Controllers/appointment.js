"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointment = void 0;
// import Connection from "../Helpers/database"
// const db = new Connection();
const CreateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patient_name, doctor_email, date, patient_email } = req.body;
    try {
        // await db.exec('addAppointment',{patient_name,doctor_email,date,patient_email});
        res.status(201).json({ message: "appointment has been created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.CreateAppointment = CreateAppointment;
