/************
 * REQUIRES *
 ************/

// Routing
import express from "express";
export const app = express();


// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/********
 * GETS *
 ********/

app.get("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/*********
 * POSTS *
 *********/

app.post("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/*******
 * PUT *
 *******/

app.put("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/***********
 * PATCHES *
 ***********/

app.patch("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/***********
 * DELETES *
 ***********/

app.delete("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});
