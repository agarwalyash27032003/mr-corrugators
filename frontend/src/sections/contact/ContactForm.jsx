import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post(
  "https://mr-corrugators-backend.onrender.com/api/contact",
  formData
);

      setResponseMsg(res.data.message);

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      setResponseMsg(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-8 bg-[#FFC107]"></span>
              <span className="text-[#0B5ED7] text-[11px] font-black uppercase tracking-[0.4em]">
                Procurement
              </span>
            </div>

            <h2 className="text-5xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              Request <br />
              <span className="text-[#FFC107]">Quote.</span>
            </h2>

            <p className="text-[18px] text-slate-500 font-medium leading-relaxed mb-12">
              Our engineering team evaluates industrial requirements within 24
              business hours.
            </p>
          </div>

          {/* Right */}
          <div className="lg:w-2/3 w-full bg-slate-50 p-8 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107]/5 rounded-bl-full -mr-16 -mt-16"></div>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-8 relative z-10"
            >
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="MR Corrugators"
                  required
                  className="w-full p-4 px-6 rounded-2xl bg-white border border-slate-200"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mrcorrugators@gmail.com"
                  
                  className="w-full p-4 px-6 rounded-2xl bg-white border border-slate-200"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="99999 99999"
                  required
                  className="w-full p-4 px-6 rounded-2xl bg-white border border-slate-200"
                />
              </div>

              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Industrial Specifications
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline quantity, dimensions, and material density requirements..."
                  required
                  className="w-full p-6 rounded-3xl bg-white border border-slate-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-slate-900 text-white py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-[#0B5ED7] transition-all"
              >
                {loading ? "Submitting..." : "Submit Requirements →"}
              </button>

              {responseMsg && (
                <p className="md:col-span-2 text-center text-sm font-semibold text-green-600">
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;