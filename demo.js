import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-ta1sbQbbULXlM13STidf8M81clear",
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

try {

const response = await openai.createImage({
    prompt: 'Polar bear on ice skates',
    n: 1,
    size: '512x512'
});


const imageUrl = response.data.data[0].url;

res.status(200).json({
    success:true,
    data: imageUrl
});

} catch (error) {

       
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }
}