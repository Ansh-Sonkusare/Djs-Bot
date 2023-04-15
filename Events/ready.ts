import { Events } from "../types/botTypes";

const event:Events = {
    name:"ready",
    once:true,
    execute:async () => {
        console.log("ITS WORKINGGGGGGGGGGGGGGG");
        
    }
}
module.exports =  event
