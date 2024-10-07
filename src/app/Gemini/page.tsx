"use client";
import TypewriterEffect from "../components/ui/Typewriter";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Input } from "../components/ui/input";
import axios from "axios";

const GeminiAi = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [noOfResponses, setNoOfResponses] = useState(0);
  const [disable, setDisable] = useState(false);

  async function getResponse(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!prompt) {
      setResponse("");
      return;
    }
    setLoading(true);
    setResponse("");
    setDisable(true);

    try {
      const result = await axios.post(
        process.env.NEXT_PUBLIC_BASE_API_URL + "/api/serviceHubAI",
        {
          prompt: prompt,
        }
      );

      setResponse(result.data.response);
      setNoOfResponses(noOfResponses + 1);
    } catch (e: any) {
      console.error(e);
      setNoOfResponses(0);
      setDisable(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-6">
      <section className="font-lato bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Welcome to Gemini AI
        </h1>
        <p className="text-center text-gray-600 mb-6 font-bold">
          Ask your questions and get instant responses!
        </p>
        <form
          onSubmit={getResponse}
          className="flex flex-col sm:flex-row gap-4 items-center mb-6 justify-center"
        >
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Start Asking..."
            id="SujalAI"
            name="prompt"
            className="flex-1 border-2 border-gray-300 rounded-full py-3 px-6 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            disabled={loading || disable}
          />
          <Button
            type="submit"
            className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105"
            disabled={loading || disable}
          >
            {loading ? "Thinking..." : "Ask"}
          </Button>
        </form>

        {noOfResponses > 0 && (
          <div className="bg-green-50 border-l-4 border-green-400 rounded-md p-4 text-black shadow-lg animate-fade-in-right">
            <TypewriterEffect text={response} setDisable={setDisable} />
          </div>
        )}
      </section>
    </div>
  );
};

export default GeminiAi;
