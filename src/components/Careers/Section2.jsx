import React, { useRef, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mqalqpgl"; // Replace with your actual Formspree endpoint

const CareerForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    degree: "",
    experience: "",
    skills: "",
    message: "",
    resume: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.firstName || !form.lastName || !form.email || !form.contact || !form.degree || !form.experience || !form.skills) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Submit the form natively to Formspree
    formRef.current.submit();
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-green-100 text-green-700 p-6 rounded-xl mt-8 text-center shadow">
        Thank you for applying! We will review your application and contact you soon.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow mt-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Career Opportunity</h2>
      <form
        ref={formRef}
        action={FORM_ENDPOINT}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium mb-1">First Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Email<span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Contact Number<span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Degree/Education<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="degree"
            value={form.degree}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Experience<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Skills<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            rows={4}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Resume Link (Google Drive)<span className="text-red-500">*</span></label>
          <input
            type="url"
            name="resume"
            value={form.resume}
            onChange={handleChange}
            placeholder="Paste your Google Drive resume link here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4CBBA]"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-[#E4CBBA] text-[#8B5C2A] font-bold py-2 px-4 rounded-lg hover:bg-[#d1b09a] transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
