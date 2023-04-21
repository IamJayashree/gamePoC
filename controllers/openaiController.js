
const { Configuration, OpenAIApi } = require("openai");

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
    
    apiKey: "give your id",
  });

const openai = new OpenAIApi(configuration);

const generateImage =  async (req, res) => {

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


        res.status(400).json({
            success:false,
            error: 'The image couldnt be generated'
        })
        
    }

}

module.exports= { generateImage };