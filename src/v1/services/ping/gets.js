/************
 * REQUIRES *
 ************/

// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/********
 * GETS *
 ********/

export function getPing(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
}
