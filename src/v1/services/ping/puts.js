/************
 * REQUIRES *
 ************/

// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/*******
 * PUT *
 *******/

export function putPing(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
};
