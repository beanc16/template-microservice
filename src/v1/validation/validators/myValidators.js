import { mySchema } from "../schemas/index.js";
import { validateJoiSchema } from "@beanc16/joi-helpers";



// LabelHere
export function validateMyPayload(payload)
{
    return new Promise(function (resolve, reject)
    {
        validateJoiSchema(mySchema, payload)
            .then(function (value)
            {
                resolve(value);
            })
            .catch(function (error)
            {
                reject(error);
            });
    });
}
