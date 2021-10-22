import React from "react";
import userData from "../constants/data";
import Image from 'next/image'
export default function AboutMe() {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <section className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4 dark:text-white"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 gap-x-20 md:grid-cols-2 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
        
          {/* Text area col-span-1 md:col-span-2 */}
          <div>
            <div className="flex flex-col">
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack/Languages
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Tech stack icons"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                    height={288}
                    width={288}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}