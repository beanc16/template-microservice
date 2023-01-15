/************
 * REQUIRES *
 ************/

// Response
import DotnetResponses from "dotnet-responses";
const { Success } = DotnetResponses;





/*********
 * POSTS *
 *********/

export function postPing(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
};
