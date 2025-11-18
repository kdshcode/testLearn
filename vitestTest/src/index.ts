import express from "express"
import { parse, z } from "zod"

export const app = express();

app.use(express.json());

const sumInput = z.object ({
    a: z.number(),
    b: z.number()
})

app.post ("/sum",(req, res)=>{
    const parsedResponce = sumInput.safeParse(req.body);
    

    if (!parsedResponce.success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const answer = parsedResponce.data.a + parsedResponce.data.b;
     
     res.json ({
        theSum: answer,
     })
})

app.get('/sum ', ( req, res )=>{
    const parsedResponce = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if( !parsedResponce.success){
        return res.status(411).json(
        {
            message: "Incorrect Inputs"
        }
        )
    }


    const answer = parsedResponce.data.a + parsedResponce.data.b;

    res.json ({
      message: answer,  
    })
})