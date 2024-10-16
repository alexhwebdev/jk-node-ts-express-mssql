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
exports.getDiagnosisForUser = exports.updateDiagnosis = exports.createDiagnosis = void 0;
// import Connection from '../Helpers/database';
// const db = new Connection();
const createDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { name_treatment, drug_administered, doctor_name, patient_email, bill, date, paid, description, patient_status } = req.body;
    try {
        // await db.exec('addDiagnosis', { name_treatment, drug_administered, doctor_name, patient_email, bill, date, paid, description, patient_status })
        res.status(201).json({ message: "diaganosis has been created successfully" });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.createDiagnosis = createDiagnosis;
const updateDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.params.id;
    try {
        // await db.exec('updateDiagnosis', { id })
        res.status(201).json({ message: "Diagnosis updated successfully" });
    }
    catch (error) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.updateDiagnosis = updateDiagnosis;
const getDiagnosisForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { email } = req.body;
    try {
        // const diaganosis = (await db.exec('getDiagnosisForUser', { email })).recordset;
        res.status(200).json("diaganosis");
        // res.status(200).json(diaganosis);
    }
    catch (error) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.getDiagnosisForUser = getDiagnosisForUser;
