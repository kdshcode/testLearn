import express from "express";

export const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("this is get path ")
})
app.post('/sum', (req, res)=>{
     const a = req.body.a;
     const b = req.body.b;
     const sum = a + b;
      console.log(a)
      console.log(b)
      console.log(sum)

     res.json ( {
        answer: sum,
     })
})