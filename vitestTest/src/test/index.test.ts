import {  describe, it, expect } from 'vitest';
import request from 'supertest';
import  {app } from '../index'


describe ("POST /sum ", ()=>{
    it ("should return sum of two numbers ", async () =>{
         const res = await request(app).post("/sum").send({
            a:1,
            b:2
         }) 
         console.log(res)
         expect(res.statusCode).toBe(200);
         expect(res.body.theSum).toBe(3) 
    })
})
