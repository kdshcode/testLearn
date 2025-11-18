"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.post("/sum", (req, res) => {
    const parsedResponce = sumInput.safeParse(req.body);
    if (!parsedResponce.success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        });
    }
    const answer = parsedResponce.data.a + parsedResponce.data.b;
    res.json({
        theSum: answer,
    });
});
exports.app.get('/sum ', (req, res) => {
    const parsedResponce = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });
    if (!parsedResponce.success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        });
    }
    const answer = parsedResponce.data.a + parsedResponce.data.b;
    res.json({
        message: answer,
    });
});
