

const Replicate  = require ("replicate");

const { Configuration, OpenAIApi } = require("openai");
const replicate = new Replicate({
    auth: "giveyourkey",
  });
  

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
    
    apiKey: "giveyourkey",
  });

const openai = new OpenAIApi(configuration);

const generateImage =  async (req, res) => {

    const { prompt, size } = req.body;
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';


    try {

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
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


const generateImageModel1 =  async (req, res) => {
  console.log("model1");
  console.log(req.body.prompt);
  const model = "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f";
  const input = { prompt: req.body.prompt };
  try{
        const output = await replicate.run(model, { input });
        const imageUrl = output;
        console.log("finished model1 generation");
        console.log(output[0]);
        res.status(200).json({
            success:true,
            data: output[0]
        });

  } catch{
    res.status(400).json({
    success:false,
    error: 'The image couldnt be generated'
 
    })

  }

}


const generateImageModel2 =  async (req, res) => {
    console.log("model2");
    console.log(req.body.prompt);
    const model = "cjwbw/waifu-diffusion:25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983";
    const input = { prompt: req.body.prompt };
    try{
    const output = await replicate.run(model, { input });
    const imageUrl = output;
    console.log("finished model2 generation");
    console.log(output[0]);
    res.status(200).json({
        success:true,
        data: output[0]
    });

} catch{
    res.status(400).json({
    success:false,
    error: 'The image couldnt be generated'
 
    })

  }

  
  }

  const generateImageModel3 =  async (req, res) => {
    console.log("model3");
    console.log(req.body.prompt);
    //const model = "deforum/deforum_stable_diffusion:e22e77495f2fb83c34d5fae2ad8ab63c0a87b6b573b6208e1535b23b89ea66d6";
    //const input = { animation_prompts: req.body.prompt, max_frames: 100 };
    const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: req.body.prompt };
    try{
    const output = await replicate.run(model, { input });
    const imageUrl = output;
    console.log("finished model3 generation");
    console.log(output[0]);
    res.status(200).json({
        success:true,
        data: output[0]
    });
} catch{
    res.status(400).json({
    success:false,
    error: 'The image couldnt be generated'
 
    })

  }
  
  }

  const generateImageModel4 =  async (req, res) => {
    console.log("model4");
    console.log(req.body.prompt);
    const model = "andreasjansson/stable-diffusion-animation:ca1f5e306e5721e19c473e0d094e6603f0456fe759c10715fcd6c1b79242d4a5";
    const input = { prompt_start: req.body.prompt, prompt_end: req.body.prompt};
    //const model = "nateraw/stable-diffusion-videos:2d87f0f8bc282042002f8d24458bbf588eee5e8d8fffb6fbb10ed48d1dac409e";
    //const input = { prompt: req.body.prompt };
    try{
    const output = await replicate.run(model, { input });
    const imageUrl = output;
    console.log("finished model4 generation");
    console.log(output[0]);
    res.status(200).json({
        success:true,
        data: output[0]
    });
} catch{
    res.status(400).json({
    success:false,
    error: 'The image couldnt be generated'
 
    })

  }
  }



   const createImageVariation = async (req,res) => {
        console.log("before image variation") ; 

        const output = await replicate.run(
            "sanzgiri/cartoonify:a6f24cf966b84dc3959b9c84f6f5739287b243bc85d5d2f5fb0a9ca9eb6a0f0a",
            {
              input: {
                infile: req.body.url
                //infile:'https://firebasestorage.googleapis.com/v0/b/stushare-webapp.appspot.com/o/uploads%2FJayashreeArunkumar.png?alt=media&token=20b4e675-0f10-4fe3-973b-97c7b076eb37'
              }
            }
          );
          res.json(output);
        }


        const createImageVariation1 = async (req,res) => {
            console.log("before image variation") ; 
    
            try{
            const output = await replicate.run(
                "sanzgiri/cartoonify:a6f24cf966b84dc3959b9c84f6f5739287b243bc85d5d2f5fb0a9ca9eb6a0f0a",
                {
                  input: {
                    infile: req.body.url
                    //infile:'https://firebasestorage.googleapis.com/v0/b/stushare-webapp.appspot.com/o/uploads%2FJayashreeArunkumar.png?alt=media&token=20b4e675-0f10-4fe3-973b-97c7b076eb37'
                  }
                }
              );
              res.json(output);
            } catch{
                res.status(400).json({
                success:false,
                error: 'The image couldnt be generated'
             
                })
            
              }
              console.log("after image variation1") ; 
              
            }
    
          const createImageVariation2 = async (req,res) => {
            console.log("before image variation2") ; 
    
            try{
            const output = await replicate.run(
                "xinntao/realesrgan:1b976a4d456ed9e4d1a846597b7614e79eadad3032e9124fa63859db0fd59b56",
                {
                  input: {
                    img: req.body.url
                    //infile:'https://firebasestorage.googleapis.com/v0/b/stushare-webapp.appspot.com/o/uploads%2FJayashreeArunkumar.png?alt=media&token=20b4e675-0f10-4fe3-973b-97c7b076eb37'
                  }
                }
              );
              res.json(output);
            } catch{
                res.status(400).json({
                success:false,
                error: 'The image couldnt be generated'
             
                })
            
              }
              console.log("after image variation2") ; 
              
            }
              const createImageVariation3 = async (req,res) => {
                console.log("before image variation3") ; 
        
                try{
                const output = await replicate.run(
                    "eladrich/pixel2style2pixel:919ed2f7b6c5c24f3a53207842b61b6eba515136bd7bb9ffa75e01e970609cc4",
                    {
                      input: {
                        image: req.body.url
                        //infile:'https://firebasestorage.googleapis.com/v0/b/stushare-webapp.appspot.com/o/uploads%2FJayashreeArunkumar.png?alt=media&token=20b4e675-0f10-4fe3-973b-97c7b076eb37'
                      }
                    }
                  );
                  res.json(output);
                } catch{
                    res.status(400).json({
                    success:false,
                    error: 'The image couldnt be generated'
                 
                    })
                
                  }
                  console.log("after image variation3") ; 
                
                }

                
                  const createImageVariation4 = async (req,res) => {
                    console.log("before image variation4") ; 
            
                    try{
                    const output = await replicate.run(
                        "ptran1203/pytorch-animegan:7d44f1878a07e7b5a32af9727c1f6120cac04203d48f3f7b0432e28fa8e5c6b6",
                        {
                          input: {
                            image: req.body.url
                            //infile:'https://firebasestorage.googleapis.com/v0/b/stushare-webapp.appspot.com/o/uploads%2FJayashreeArunkumar.png?alt=media&token=20b4e675-0f10-4fe3-973b-97c7b076eb37'
                          }
                        }
                      );
                 
                      res.json(output);
                    } catch{
                        res.status(400).json({
                        success:false,
                        error: 'The image couldnt be generated'
                     
                        })
                    
                      }
                    console.log("after image variation") ; 

       

    }


module.exports= { generateImage, generateImageModel1, generateImageModel2,generateImageModel3,generateImageModel4, createImageVariation , createImageVariation1 , createImageVariation2, createImageVariation3, createImageVariation4 };
//module.exports= { generateImage };
