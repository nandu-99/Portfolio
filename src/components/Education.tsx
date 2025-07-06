"use client";
import React from "react";

const education = [
  {
    year: "2023-2027",
    degree: "Bachelor of Technology (Computer Science)",
    institution: "Newton School of Technology, Rishihood University",
    score: "9.31/10.0",
  },
  {
    year: "2020-2022",
    degree: "Intermediate (Class XII)",
    institution: "Little Flower Junior College",
    score: "89.3%",
  },
  {
    year: "2020",
    degree: "Matriculation (Class X)",
    institution: "Word and Deed High School",
    score: "10.0/10.0",
  },
];

const EducationPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border border-dashed border-neutral-700"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-neutral-500">{edu.year}</span>
              <span className="text-sm bg-cyan-800 px-3 py-1 rounded-full">
                {edu.score}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-white">{edu.degree}</h2>
            <p className="text-sm text-neutral-400 mt-1">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
