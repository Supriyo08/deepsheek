import aiService from "../services/ai.services";

export async function getResponse(req, res){
    const code = req.body.code;

    if(!code){
        return res.status(400).json({error: "Prompt is required"})
    }
    const response = await aiService(code)

    res.send(response);
}