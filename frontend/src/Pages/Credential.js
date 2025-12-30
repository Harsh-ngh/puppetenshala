import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { handleSuccess } from '../utils';

const initialFormState = {
  college: "",
  degree: "",
  stream: "",
  percentage: "",
  training: [],
  organisation: "",
  link: "",
  rating: "",
  hiringreason: "",
  availability: "",
};

const Credential = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrainingChange = (e) => {
    setFormData({ ...formData, training: e.target.value.split(",") });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("http://localhost:5000/credential/addCredentials", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Credential submitted successfully!");
//         handleSuccess("Credentials added successfully");

//         setFormData(initialFormState);
//       } else {
//         setMessage("Error submitting credentials. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
    //   };
    
    const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    // 1️⃣ Save credentials
    const saveResponse = await fetch("http://localhost:5000/credential/addCredentials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const saveData = await saveResponse.json();

    if (!saveResponse.ok) {
      throw new Error("Failed to save credentials");
    }

    handleSuccess("Credentials saved successfully");

await fetch("http://localhost:5000/automation/start", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

alert("Login window opened. Login manually, then click OK to continue.");


await fetch("http://localhost:5000/automation/continue", {
  method: "POST"
});

handleSuccess("Automation completed successfully..");

    setFormData(initialFormState);
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex flex-col min-h-screen bg-sky-900 text-white">
      <div className="flex flex-1">
        <div className="w-2/3 flex items-center justify-start p-16">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">
              Automate the process of applying by entering your credentials on PuppeteerShala.
            </h1>
            <p className="text-lg">
              Fill in your academic and professional details to enhance your job prospects.
            </p>
          </div>
        </div>

        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto bg-sky-800 text-white shadow-lg rounded-l-2xl flex flex-col w-96 p-6 overflow-hidden"
        >
          <p className="text-white font-semibold text-lg text-center w-full h-20 flex items-center justify-center rotate-90 md:rotate-0 md:h-10 md:w-full">
            Enter Credentials
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4 overflow-y-auto max-h-[90vh]">
            <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="text" name="stream" placeholder="Stream" value={formData.stream} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="number" name="percentage" placeholder="Percentage" value={formData.percentage} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="text" name="training" placeholder="Training (comma separated)" value={formData.training.join(", ")} onChange={handleTrainingChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="text" name="organisation" placeholder="Organisation" value={formData.organisation} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="url" name="link" placeholder="Portfolio Link" value={formData.link} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="number" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />
            <input type="text" name="hiringreason" placeholder="Reason for Hiring" value={formData.hiringreason} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required />

            <select name="availability" value={formData.availability} onChange={handleChange} className="bg-sky-700 rounded-lg p-2 w-full text-white placeholder-white focus:outline-none" required>
              <option value="">Select Availability</option>
              <option value="Immediate">Immediate</option>
              <option value="In 1 Month">In 1 Month</option>
              <option value="In 3 Months">In 3 Months</option>
            </select>

            <button type="submit" className="w-full bg-sky-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Credential;
