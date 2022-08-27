import { Request, Response } from "express";

class PingController {
    async ping(req:Request,res:Response){
        return res.status(200).json({
            date: new Date(),
            env: 'Development'
        });
    }
}

export default new PingController();