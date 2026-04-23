import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-32 bg-white text-slate-900 selection:bg-[#FFC107] selection:text-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
              Legal Documentation
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            Privacy <span className="text-[#FFC107]">Policy.</span>
          </h1>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">
            Last updated: April 21, 2026 • MR Corrugators Industrial Compliance
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none 
          prose-h2:text-3xl prose-h2:font-black prose-h2:tracking-tight prose-h2:pt-12 prose-h2:border-t prose-h2:border-slate-100
          prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#0B5ED7]
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-slate-600 prose-li:text-lg
          prose-strong:text-slate-900 prose-strong:font-bold">
          
          <p className="text-xl font-bold text-slate-800 !leading-relaxed mb-12">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2>01. Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3>Definitions</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4">
              <span className="text-[#FFC107] font-black">/</span>
              <span><strong>Company:</strong> Refers to MR Corrugators, Bholanath Para, Eastern Bypass Road, Siliguri, West Bengal.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFC107] font-black">/</span>
              <span><strong>Service:</strong> Refers to the Website accessible from <a href="https://mrcorrugators.in" className="text-[#0B5ED7] underline decoration-2 underline-offset-4">mrcorrugators.in</a>.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFC107] font-black">/</span>
              <span><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</span>
            </li>
          </ul>

          <h2>02. Data Collection Protocols</h2>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="p-8 bg-slate-50 border-l-4 border-[#FFC107] rounded-r-2xl">
              <h4 className="font-black text-sm uppercase tracking-widest mb-4">Identity Data</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li>• Email address</li>
                <li>• First & Last name</li>
                <li>• Phone number</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-[#0B5ED7] rounded-r-2xl">
              <h4 className="font-black text-sm uppercase tracking-widest mb-4">Usage Analytics</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li>• IP Address & Device ID</li>
                <li>• Browser Version</li>
                <li>• Diagnostic Data</li>
              </ul>
            </div>
          </div>

          <h2>03. Retention & Security</h2>
          <p>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We apply high-performance security standards to protect your structural business data.
          </p>
          
          <div className="overflow-x-auto my-10">
            <table className="w-full text-left border-collapse bg-slate-900 text-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-6 text-[#FFC107] uppercase text-xs tracking-widest">Category</th>
                  <th className="p-6 text-[#FFC107] uppercase text-xs tracking-widest">Duration</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800">
                  <td className="p-6 font-bold">Account Information</td>
                  <td className="p-6 opacity-70">Up to 24 months post-closure</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-6 font-bold">Support Tickets</td>
                  <td className="p-6 opacity-70">24 months for quality assurance</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Usage Logs</td>
                  <td className="p-6 opacity-70">Up to 24 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>04. Contact & Compliance</h2>
          <p>
            If you have any questions about this Privacy Policy or our data handling in the Siliguri headquarters, you can contact our technical team:
          </p>

          <div className="mt-12 p-10 bg-[#FFC107] rounded-[2.5rem] flex flex-col md:flex-row gap-12 items-center justify-between">
            <div>
              <h4 className="text-slate-900 font-black text-3xl mb-2">Have questions?</h4>
              <p className="text-slate-800 font-medium">Our legal team is available for clarification.</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="mailto:mrcorrugators@gmail.com" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-800 transition-colors">
                mrcorrugators@gmail.com
              </a>
              <a href="tel:+917363942736" className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-900 hover:text-white transition-all">
                +91 73639 42736
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;