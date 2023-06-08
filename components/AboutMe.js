import React from "react";
import userData from "../constants/data";
import Image from 'next/image'
export default function AboutMe() {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <section className="w-full bg-white dark:bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left dark:text-white">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="max-w-6xl pt-20 mx-auto text-container">
          <p
            className="mx-4 text-2xl font-semibold leading-loose md:text-4xl dark:text-white"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="grid max-w-6xl grid-cols-1 pt-20 mx-auto gap-x-20 md:grid-cols-2 gap-y-20">
          {/* Social Buttons */}

          {/* Text area col-span-1 md:col-span-2 */}
          <div>
            <div className="flex flex-col">
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-xl text-gray-700 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1 className="inline-block px-2 py-1 text-3xl font-bold bg-red-500 rounded-md text-gray-50">
                Frameworks/Libraries/Languages
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="HTML5"
                    src="https://img.icons8.com/color/240/html-5--v1.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="CSS3"
                    src="https://img.icons8.com/color/240/css3.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="JavaScript"
                    src="https://img.icons8.com/fluency/240/javascript.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="TypeScript"
                    src="https://img.icons8.com/color/240/typescript.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="MongoDB"
                    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="ExpressJS"
                    src="https://img.icons8.com/color/240/express-js.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="ReactJS"
                    src="https://img.icons8.com/color/240/react-native.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="NodeJS"
                    src="https://img.icons8.com/fluency/240/node-js.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="TailwindCSS"
                    src="https://img.icons8.com/color/240/tailwind_css.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="npm"
                    src="https://img.icons8.com/color/240/npm.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Git"
                    src="https://img.icons8.com/color/240/git.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Redux"
                    src="https://img.icons8.com/color/240/redux.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="AWS - Lambda/API Gateway/S3/EC2/CloudWatch"
                    src="https://img.icons8.com/color/240/amazon-web-services.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>

                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="GraphQL"
                    src="https://img.icons8.com/color/240/graphql.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>


                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Firebase"
                    src="https://img.icons8.com/color/240/firebase.png"
                    height={240}
                    width={240}
                    layout="responsive"
                  />
                </div>
                <div style={{ width: '5rem', margin: '1rem' }}>
                  <Image
                    loader={myLoader}
                    alt="Webpack"
                    src="https://img.icons8.com/color/240/webpack.png"
                    height={240}
                    width={240}
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