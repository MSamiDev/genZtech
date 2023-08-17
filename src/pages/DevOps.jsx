import React from "react";
import git2 from "../assets/images/git2.png";
import keys from "../assets/images/keys.png";
import attend from "../assets/images/attend.png";
import Footer from "../components/Footer";
import GenZ_withText_trans2 from "../assets/images/GenZ_withText_trans2.png";

const DevOps = () => {
  return (
    <div id="DevOps" className="from-yellow-500 to-white bg-gradient-to-l">
      <header className="sticky top-0 z-20 shadow-lg shadow-gray-600">
        <nav className="flex justify-between bg-black text-yellow-500 w-full sticky top-0 h-20 items-center z-10 text-2xl font-bold px-5">
          <h1 className="flex items-center">
            <a href="/">
              <img
                src={GenZ_withText_trans2}
                alt="Gen Z Tech Logo"
                className="w-40  object-contain"
              />
            </a>
          </h1>
          <div className="flex items-center h-full">
            <ul className="flex items-center h-full">
              <li className="p-4 h-full flex justify-center items-center hover:text-red-500 hover:underline duration-300 ease-in">
                <a href="/">Back</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Course Overview */}
      <div className="md:w-full md:flex md:justify-center">
        <div
          id="Overview"
          className="w-full md:w-3/5 pt-20 lg:h-screen h-auto flex flex-col justify-center float-left"
        >
          <h1 className="px-6 md:px-20  font-bold text-2xl md:text-5xl text-gray float-left text-center lg:text-left">
            DevOps Course Overview
          </h1>
          <p className="px-6 md:p-20 text-sm md:text-lg text-center lg:text-left">
            DevOps (Development Operations) is the combination of Software
            Development and IT Operations, which stresses the collaboration and
            communication of these two groups within an organisation. DevOps is
            unique in its approach, and it is not defined as a product or a
            framework but instead focuses on 8 key principles to form a
            productive work culture.
          </p>
        </div>

        {/* Git Image */}
        <div className="w-full md:w-2/5 flex justify-center py-10 md:py-0 h-auto items-center">
          <div className="flex justify-center h-full items-center">
            <img className="w-full md:w-3/4 lg:w-full" src={git2} alt="" />
          </div>
        </div>
      </div>

      {/* What is DevOps */}
      <div className="md:w-full md:flex md:justify-center">
        <div
          id="What"
          className="w-full md:w-3/5 p-10 md:p-20 h-auto flex flex-col justify-center float-left"
        >
          <h1 className="p-6  pb-10 font-bold text-2xl md:text-5xl text-gray text-center lg:text-left">
            What is DevOps?
          </h1>
          <p className="px-6 pb-10 text-sm text-center md:text-lg lg:text-left">
            DevOps (Development Operations) is a combination of Software
            Development and IT Operations. In DevOps, Software Development and
            IT Operations are two separate entities that co-exist. DevOps
            focuses on bringing these together to improve communication and
            increase productivity in the organisation. This unique combination
            allows an organisation and IT department to continually deliver
            quality value in the face of continually changing requirements. The
            objectives of DevOps are to increase the ability to provide the
            product and improving reliability while reducing inefficiencies, as
            well as satisfying their customer by providing the best services.
            DevOps follows the simple process such as plan, develop, deliver and
            operate phases. Each phase depends on each other, and the phases are
            not role-specific.
          </p>
        </div>

        {/* Keys Image */}
        <div className="w-full md:w-2/5 flex justify-center py-10 md:py-0 h-auto items-center">
          <div className="flex justify-center h-full items-center">
            <img className="w-full md:w-3/4 lg:w-full" src={keys} alt="" />
          </div>
        </div>
      </div>

      {/* Why is DevOps used? */}
      <div className="md:w-full md:flex md:justify-center">
        <div
          id="Why"
          className="w-full md:w-3/5 p-10 md:p-20 h-auto flex flex-col justify-center float-left"
        >
          <h1 className="p-6 pb-10 font-bold text-2xl md:text-5xl text-gray text-center lg:text-left">
            Why is DevOps used?
          </h1>
          <p className="px-6 pb-10 text-center text-sm md:text-lg lg:text-left">
            DevOps aims to increase the ability to deliver the product at a
            faster rate, by reducing inefficiencies, improving customer
            satisfaction, improving service, as well as improving reliability.
            There are many other reasons which are the main reasons why DevOps
            is widely used, such as:
            <br />
            <br />
            <ul>
              <li className="text-center lg:text-left">
                <strong>Predictability:</strong> During new releases, DevOps
                reduces the risk of failure.
              </li>
              <li className="text-center lg:text-left">
                <strong>Reproducibility :</strong>It allows you to restore
                previously released versions at any time.
              </li>
              <li className="text-center lg:text-left">
                <strong>Maintainability :</strong>DevOps offers seamless
                recovery during any new release crash or disabling the current
                system.{" "}
              </li>
              <li className="text-center lg:text-left">
                <strong>Time to market :</strong> It effortlessly reduces the
                software delivery time up to 50%.
              </li>
              <li className="text-center lg:text-left">
                <strong>Greater Quality :</strong>Teams can easily improve the
                application development quality as DevOps includes
                infrastructure issues.
              </li>
              <li className="text-center lg:text-left">
                <strong>Resiliency :</strong> The operational state of the
                software system is more stable, secure, and changes are
                auditable.
              </li>
              <li className="text-center lg:text-left">
                <strong>Cost Efficiency :</strong>Software development process
                can be cost-effective using DevOps, and allows IT companies to
                save money and increase profit.
              </li>
            </ul>
          </p>
        </div>

        {/* Attend Image */}
        <div className="w-full md:w-2/5 flex justify-center py-10 md:py-0 h-auto items-center">
          <div className="flex justify-center h-full items-center">
            <img className="w-full md:w-3/4 lg:w-full" src={attend} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevOps;
