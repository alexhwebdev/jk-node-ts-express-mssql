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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.signIn = exports.signUp = void 0;
// import Connection from "../Helpers/database";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const db = new Connection();
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { name, email, password, role } = req.body;
    try {
        // // const { error, value } = registerSchema.validate(req.body);
        // if (error) {
        //   res.status(500).json("error.details[0].message");
        //   // res.status(500).json(error.details[0].message);
        // }
        // const hashedPassword = await bcrypt.hash(password, 10);
        // await db.exec('signUp', { name, email, role, password: hashedPassword });
        res.status(201).json({ message: 'sucessfully created user' });
    }
    catch (error) {
        res.status(500).json({ message: "server is unable to handle request" });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // const { error, value } = loginSchema.validate(req.body);
        // if (error) {
        //   res.status(500).json(error.details[0].message);
        // }
        // const user = await db.exec('signin', { email, password });
        // const userData = user?.recordset[0] as {
        //   id: number,
        //   name: string,
        //   email: string,
        //   password: string,
        //   role: string
        // };
        // bcrypt.compare(password, userData.password, (err, data) => {
        //   if (data) {
        //     const { role, name, id, email, ...other } = userData;
        //     const user = { role, name, id, email };
        //     const token = jwt.sign(user, process.env.KEY as string, {
        //         expiresIn: "30days"
        //     });
        //     res.status(200).json({ user, token })
        //   } else {
        //     res.status(500).json({ message: "wrong password" })
        //   }
        // })
        // if (error) {
        //   res.status(500).json(error.details[0].message);
        // }
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.signIn = signIn;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = (await db.exec('getAllusers')).recordset;
        res.status(200).json("users");
        // res.status(200).json(users)
    }
    catch (error) {
        res.status(400).json({ error: "something went wrong" });
    }
});
exports.getUsers = getUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // await db.exec('deleteUsers', { id });
        res.status(201).json({ message: "user is deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }
});
exports.deleteUser = deleteUser;
