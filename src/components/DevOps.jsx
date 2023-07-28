import React from "react";
import git2 from "../assets/images/git2.png";
import keys from "../assets/images/keys.png";
import attend from "../assets/images/attend.png";
const DevOps = () => {
  return (
    <div id="DevOps" className="from-yellow-500   to-white bg-gradient-to-l">
      <div
        id="Overview"
        className="w-3/5   h-screen  flex flex-col justify-center float-left "
      >
        <h1 className="px-20  pb-10 font-bold text-5xl text-gray float-left ">
          DevOps Course Overview
        </h1>
        <p className="px-20  text-lg ">
          DevOps (Development Operations) is the combination of Software
          Development and IT Operations, which stresses the collaboration and
          communication of these two groups within an organisation. DevOps is
          unique in its approach, and it is not defined as a product or a
          framework but instead focuses on 8 key principles to form a productive
          work culture.
        </p>
      </div>
      <div className="w-2/5  flex justify-center py-10  h-screen items-center ">
        <div className=" flex justify-center h-full  items-center ">
          <img src={git2} alt="" />
        </div>
      </div>
      <div
        id="What"
        className="w-3/5 p-20 h-screen flex flex-col justify-center float-left "
      >
        <h1 className="px-20 pt- pb-10 font-bold text-5xl text-gray float-left ">
          What is DevOps?
        </h1>
        <p className="px-20 pb-10 text-lg ">
          DevOps (Development Operations) is a combination of Software
          Development and IT Operations. In DevOps, Software Development and IT
          Operations are two separate entities that co-exist. DevOps focuses on
          bringing these together to improve communication and increase
          productivity in the organisation. This unique combination allows an
          organisation and IT department to continually deliver quality value in
          the face of continually changing requirements. The objectives of
          DevOps are to increase the ability to provide the product and
          improving reliability while reducing inefficiencies, as well as
          satisfying their customer by providing the best services. DevOps
          follows the simple process such as plan, develop, deliver and operate
          phases. Each phase depends on each other, and the phases are not
          role-specific.
        </p>
      </div>
      <div className="w-2/5  flex justify-center  h-screen items-center ">
        <div className=" flex justify-center h-full  items-center ">
          <img className="w-full pr-10" src={keys} alt="" />
        </div>
      </div>

      <div
        id="Why"
        className="w-3/5 p-20 h-screen  flex flex-col justify-center float-left "
      >
        <h1 className="px-20 pt- pb-10 font-bold text-5xl text-gray float-left ">
          Why is DevOps used?
        </h1>
        <p className="px-20 pb-10 text-lg ">
          DevOps aims to increase the ability to deliver the product at a faster
          rate, by reducing inefficiencies, improving customer satisfaction,
          improving service, as well as improving reliability. There are many
          other reasons which are the main reasons why DevOps is widely used,
          such as:
          <br />
          <br />
          <ul>
            <li>
              <strong>Predictability :</strong>During new releases, DevOps
              reduce the risk of failure.
            </li>
            <li>
              <strong>Reproducibility :</strong>It allows you to restore
              previously released versions at any time.
            </li>
            <li>
              <strong>Maintainability :</strong>DevOps offers seamless recovery
              during any new release crash or disabling the current system.{" "}
            </li>
            <li>
              <strong>Time to market :</strong> It effortlessly reduces the
              software delivery time up to 50%.
            </li>
            <li>
              <strong>Greater Quality :</strong>Teams can easily improve the
              application development quality as DevOps includes infrastructure
              issues.
            </li>
            <li>
              <strong>Resiliency :</strong> The operational state of the
              software system is more stable, secure, and changes are auditable.
            </li>
            <li>
              <strong>Cost Efficiency :</strong>Software development process can
              be cost-effective using DevOps, and allows IT companies to save
              money and increase profit.
            </li>
          </ul>
        </p>
      </div>
      <div className="w-2/5   flex justify-center py-10  h-screen items-center ">
        <div className=" flex justify-center h-full  items-center ">
          <img className="w-full pr-10" src={attend} alt="" />
        </div>
      </div>
    </div>
  );
};
export default DevOps;
