

/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Email {
    email: String;
}


// getting a single post
const Validate = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let email: string = req.params.email;
   
    let result: AxiosResponse = await axios.get(`https://api.eva.pingutil.com/email?email=${email}`);
    let info= result.data;
    return res.status(200).json({
        message: info
    });
};



export default { Validate };