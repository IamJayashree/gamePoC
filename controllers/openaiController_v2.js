const express = require('express');
const { OpenAIApi, Configuration } = require('openai');
const dotenv = require ('dotenv').config();
const app = express();
const port = 3000;

console.log(process.env.OPENAI_API_KEY);



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

app.get('/game', async (req, res) => {
    const gameslot = req.query.gameslot;
    const gametheme = req.query.gametheme;
   
    console.log(gameslot + " " + gametheme);

    if (!configuration.apiKey) {
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        return;
      }
  try {
    const prompt = 'Hello, world!';
    const maxTokens = 10;
    const temperature = 0.6;
    const n = 1;
    // Make a request to the OpenAI API using the 'davinci' model
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(gameslot,gametheme),
        temperature: 0.6,
      });
      res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while generating the response.');
  }
});

function generatePrompt(gameslot,gametheme) {
  const capitalizedGameSlot =
    gameslot.toUpperCase();
  const capitalizedGametheme = gametheme.toUpperCase();
  return "Can you give me the game story for "+capitalizedGameSlot+" Slot in "+capitalizedGametheme+" theme";
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
