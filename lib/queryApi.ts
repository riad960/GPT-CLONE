import openai from "./chatgpt";

const query=async(prompt:string,chatId:string,model:string)=>{
    const response=await openai.createCompletion({
        model,
        prompt,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty:0
    }).then(response=>response.data.choices[0].text).catch(err=>`ChatGpt was unable to find an answe for that ! (Error :${err.message})`)
    return response
}
export default query