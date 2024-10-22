import Link from "next/link";
import Image from "next/image";
import Eran from "../img/eran.png";

const IndexSteps = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-row bg-gray-900">
        <div id="how-it-works" className="py-2 bg-gray-900 text-white">
          <div className="container mx-auto bg-gray-900 text-start px-5">
            <div className=" flex flex-col">
              {/* Tab 1 */}
              <div className="tab p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-5 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white w-max">
              Step1:
            </h2>
                <h3 className="text-5xl font-semibold mb-2">Build</h3>
                <p className="text-gray-600 mb-9">
                  Create a full-function marketplace, customize the storefront,
                  and list unlimited NFTs. We get you ready within hours, not
                  days.
                </p>
                <Link href="/">
                  <a
                    className="text-sm mb-8 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition"
                    target="_blank"
                  >
                    Explore the No Builders
                  </a>
                </Link>
              </div>
              <hr className="my-5"></hr>
              {/* Tab 2 */}
              <div className="tab p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-5 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white w-max">
              Step2:
            </h2>
                <h3 className="text-5xl font-semibold mb-2">Sell</h3>
                <p className="text-gray-600 mb-9">
                  Secure every buyer with multiple selling & payment options.
                  Boost sales even further with different tactics to create
                  urgency and reward buyers.
                </p>
                <Link href="/">
                  <a
                    className="text-sm mb-8 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition"
                    target="_blank"
                  >
                    Explore Selling methods
                  </a>
                </Link>
              </div>
              <hr className="my-5"></hr>
              {/* Tab 3 */}
              <div className="tab p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-5 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white w-max">
              Step3:
            </h2>
                <h3 className="text-5xl font-semibold mb-2">Grow</h3>
                <p className="text-gray-600 mb-9">
                  The built-in tech stack that helps you drive organic traffic,
                  launch high-converting campaigns, and better understand your
                  customers.
                </p>
                <Link href="/">
                  <a
                    className="text-sm mb-8 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition"
                    target="_blank"
                  >
                    Watch Our Videos
                  </a>
                </Link>
              </div>
              <hr className="my-5"></hr>
            </div>
          </div>
        </div>
        <div className="flex  mb-4 bg-gray-900 h-90 p-5">
          <Image className="bg-gray-900" src={Eran} alt="Build step" />
        </div>
      </div>
    </>
  );
};

export default IndexSteps;
