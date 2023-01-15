/************
 * REQUIRES *
 ************/

// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/***********
 * PATCHES *
 ***********/

export function patchPing(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
};
