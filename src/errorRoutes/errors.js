/************
 * REQUIRES *
 ************/

// Routing
import express from "express";
export const app = express();


// Response
import DotnetResponses from "dotnet-responses";
const { InvalidUrl } = DotnetResponses;





/********
 * GETS *
 ********/

app.get("/*", function(req, res)
{
    InvalidUrl.json({ res });
});





/*********
 * POSTS *
 *********/

app.post("/*", function(req, res)
{
    InvalidUrl.json({ res });
});





/*******
 * PUT *
 *******/

app.put("/*", function(req, res)
{
    InvalidUrl.json({ res });
});





/***********
 * PATCHES *
 ***********/

app.patch("/*", function(req, res)
{
    InvalidUrl.json({ res });
});





/***********
 * DELETES *
 ***********/

app.delete("/*", function(req, res)
{
    InvalidUrl.json({ res });
});
