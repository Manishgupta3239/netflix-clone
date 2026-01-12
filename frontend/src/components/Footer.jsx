import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" font-serif w-full text-gray-500 text-left space-y-4 mt-20  ">
        <p>Questions? Call 000-800-919-1694</p>
        <br></br>
        <div className="space-y-12 ">
          <div className="flex justify-between pr-40 underline">
            <ol className="">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ol>

            <ol className="n">
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Prefrences</li>
              <li>Legal Notices</li>
            </ol>

            <ol>
              <li>Account</li>
              <li>Ways To Watch</li>
              <li>Corporate Informatin</li>
              <li>Only On Netflix</li>
            </ol>

            <ol>
              <li>Media Centre</li>
              <li>Terms Of Use</li>
              <li>Contact Us</li>
            </ol>
          </div>
          <form>
            <select className="w-28 border-[0.25px] bg-gray-900 text-white h-8 rounded-sm">
              <option value="English" selected>
                English
              </option>
              <option value="hindi">Hindi</option>
            </select>
          </form>
          <p className="font-sans text-[17px] font-semibold">Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
