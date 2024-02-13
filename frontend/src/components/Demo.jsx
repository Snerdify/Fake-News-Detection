import { useState } from "react";
import linkIcon from "../assets/link.svg";
import loader from "../assets/loader.svg";
import axios from "axios";

const Demo = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articleLink, setArticleLink] = useState("");

  const handleChange = (event) => {
    setArticleLink(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setShowResult(false);

    try {
      const response = await axios.post("http://127.0.0.1:5000/detect", {
        article: articleLink,
      });

      const data = await response.data;

      setLoading(false);
      setShowResult(true);

      setResult(data.result);
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            onChange={handleChange}
            type="url"
            placeholder="Paste the article link"
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex flex-col justify-center items-center">
        {loading && (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        )}

        {showResult && (
          <div>
            <h2 className="mt-4 font-satoshi font-bold text-gray-600 text-xl">
              Result: <span className="blue_gradient">{result}</span>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
