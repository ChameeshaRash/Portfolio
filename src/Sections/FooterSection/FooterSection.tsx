import React from "react";
import { Card, CardContent } from "../../ui/card";

export const FooterSection = (): JSX.Element => {

  return (
    <section className="bg-[#0B1120] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo & Nav */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <span className="text-lg font-semibold">ClarityUI</span>
          </div>
          <nav className="mt-4 flex space-x-6 text-sm text-gray-300">
            <a href="#">Product</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500">
        © Copyright 2022, All Rights Reserved by ClarityUI
      </p>
    </section>
  );
};