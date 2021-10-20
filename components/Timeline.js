import userData from "../constants/data";
import React from "react";
import styles from './Timeline.module.css'
export default function Timeline() {
  return (
    <section className="bg-white dark:bg-gray-800 overflow-x-hidden">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Timeline
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 ">
        <div className={`md:flex w-screen`}>
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <div className={`md:flex flex-none m-3 ${styles.scrollBg}`}>
              <TimelineCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TimelineCard = ({ title, desc, year, company, companyLink }) => {
  {/*return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );*/}
  return (
    <div
      className={`md:card-container flex flex-col justify-between shadow-lg max-w-lg min-w-lg rounded-b-md rounded-t-md `}>
      <div className="top-text p-8">
        <div className="icon-quotes">
          <h1 className="text-4xl text-gray-200 font-bold dark:text-gray-800">
            {title}
          </h1>
          <a href={companyLink} target="_blank" className="text-gray-500">
            {company}
          </a>
        </div>
        <div className="container-text max-w-lg">
          <p className="font-semibold text-gray-600 dark:text-gray-400 text-xl py-8">
            {desc}
          </p>
        </div>
      </div>
      <div className="footer-container flex flex-row flex-nowrap justify-between min-w-lg max-w-lg bg-gradient-to-r from-green-400 to-blue-500 py-4 px-8 rounded-b-lg">
        <div className="avatar-container">
          <div className="footer-img flex flex-row flex-nowrap">

            <div className="footer-text flex flex-col flex-nowrap">
              <p className="text-gray-100 font-bold ml-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};