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
exports.updatePatient = exports.getPatients = exports.deletePatient = exports.createPatient = void 0;
// import Connection from "../Helpers/database";
// const db = new Connection()
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { name, resident_area, room_admitted, admission_no, id_no, email } = req.body;
    try {
        // await db.exec('addPatient', { name, resident_area, room_admitted, admission_no, id_no, email });
        res.status(201).json({ message: "Patient admitted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.createPatient = createPatient;
const deletePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.params.id;
    try {
        // await db.exec('deletePatient', { id });
        res.status(201).json({ message: "patient have been deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.deletePatient = deletePatient;
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const patients = (await db.exec('getAllpatients')).recordset;
        res.status(200).json("patients");
        // res.status(200).json(patients)
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.getPatients = getPatients;
const updatePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.params.id;
    try {
        // await db.exec('updatePatient', { id, status });
        res.status(201).json({ message: "patient updated successfully" });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.updatePatient = updatePatient;
