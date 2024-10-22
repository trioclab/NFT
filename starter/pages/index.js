// import Banner from '../components/Banner';
// import ExploreItems from '../components/ExploreItems';
import IndexHeader from '../components/IndexHeader';
import IndexSteps from '../components/IndexSteps';
import IndexNFTcollections from '../components/IndexNFTcollections';
import Image from 'next/image';
import update from '../img/update.png';
export default function Home() {
  return (

    <div>
      <IndexHeader />
      <IndexSteps />
      <IndexNFTcollections />
    <div className="w-screen h-full flex flex-col md:flex-row items-center bg-gray-900 p-8 md:p-16 shadow-lg space-y-8 md:space-y-0">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-white dark:text-white mb-4">
          Never miss a drop!
        </h2>
        <p className="text-gray-400 dark:text-gray-400 mb-6">
          Subscribe to our super-exclusive drop list and be the first to know about upcoming drops
        </p>
        
        {/* Benefits List */}
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-600 dark:text-blue-400 rounded-full px-3 py-1 text-sm font-semibold mr-3">01</span>
            <span className="text-gray-500 dark:text-gray-300">Get more discount</span>
          </li>
          <li className="flex items-center">
            <span className="bg-red-100 text-red-600 dark:text-red-400 rounded-full px-3 py-1 text-sm font-semibold mr-3">02</span>
            <span className="text-gray-500 dark:text-gray-300">Get premium magazines</span>
          </li>
        </ul>

        {/* Email Input */}
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-l-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-full">
            ➜
          </button>
        </div>
      </div>

      {/* Right Side: Illustration */}
      <div className="w-50 h-90 md:w-1/2 flex justify-center">
        <Image
          src={update}
          alt="Illustration"
          width={500}
          height={400}
          className="rounded-xl"
        />
      </div>
    </div>
    </div>
  );
}
