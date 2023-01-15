/************
 * REQUIRES *
 ************/

// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/***********
 * DELETES *
 ***********/

export function deletePing(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
};
