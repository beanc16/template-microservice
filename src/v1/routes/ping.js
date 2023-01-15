/************
 * REQUIRES *
 ************/

// Routing
import express from "express";
export const app = express();


// Service
import { pingService } from "../services/index.js";





/********
 * GETS *
 ********/

app.get("/", pingService.getPing);





/*********
 * POSTS *
 *********/

app.post("/", pingService.postPing);





/*******
 * PUT *
 *******/

app.put("/", pingService.putPing);





/***********
 * PATCHES *
 ***********/

app.patch("/", pingService.patchPing);





/***********
 * DELETES *
 ***********/

app.delete("/", pingService.deletePing);
