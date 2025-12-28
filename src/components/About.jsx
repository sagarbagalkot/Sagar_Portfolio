import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">

          <img
            src={AboutImage}
            alt="Sagar Bagalkot"
            className="w-64 sm:w-72 h-72 sm:h-80 rounded-lg object-cover"
          />

          <div className="flex-1 w-full">
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed text-justify">
              I am a motivated and enthusiastic Full-Stack Developer with a strong interest
              in building modern, responsive, and user-friendly web applications. I enjoy
              turning ideas into real-world digital solutions and continuously improving my
              skills by working on practical projects. I am passionate about learning new
              technologies, writing clean code, and creating meaningful user experiences.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="p-3 border border-gray-700 text-left">Qualification</th>
                    <th className="p-3 border border-gray-700 text-left">Institution / Board</th>
                    <th className="p-3 border border-gray-700 text-left">Score</th>
                  </tr>
                </thead>
                <tbody>

                  <tr className="hover:bg-gray-900">
                    <td className="p-3 border border-gray-700">
                      MCA (Pursuing)
                    </td>
                    <td className="p-3 border border-gray-700">
                      Presidency College<br />
                      Kempapura, Hebbal, Bengaluru
                    </td>
                    <td className="p-3 border border-gray-700">
                      Pursuing
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-900">
                    <td className="p-3 border border-gray-700">BCA (2025 Passout)</td>
                    <td className="p-3 border border-gray-700">
                      Rani Channamma University<br />
                      BLDEA’s College, Jamakhandi
                    </td>
                    <td className="p-3 border border-gray-700">CGPA: 8.18</td>
                  </tr>

                  <tr className="hover:bg-gray-900">
                    <td className="p-3 border border-gray-700">PUC </td>
                    <td className="p-3 border border-gray-700">
                      SRA Comp PU College, Banahatti
                    </td>
                    <td className="p-3 border border-gray-700">81.08%</td>
                  </tr>

                  <tr className="hover:bg-gray-900">
                    <td className="p-3 border border-gray-700">SSLC</td>
                    <td className="p-3 border border-gray-700">
                      SRA High School, Banahatti
                    </td>
                    <td className="p-3 border border-gray-700">70.08%</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
