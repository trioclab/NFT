// components/MainBanner.jsx
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../img/hero.png'; 


const IndexHeader = () => {
  return (
    <div className="font-inter bg-gray-900 p-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="text-white space-y-6">
              <h6 className="text-2xl font-bold">Liberty NFT Market</h6>
              <h2 className="text-7xl font-bold leading-tight">
                Create, Sell & Collect Top NFT’s.
              </h2>
              <p className="text-gray-400">
                Liberty NFT Market is a really cool and professional design for
                your NFT websites. This template is based on Bootstrap v5 and is
                designed for NFT-related web portals. Liberty can be freely
                downloaded from TemplateMo's free CSS templates.
              </p>
              <div className="flex space-x-4">
                <Link href="/explore">
                  <a className="text-xl px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                    Explore Top NFTs
                  </a>
                </Link>
                <Link href="https://youtube.com/templatemo">
                  <a
                    className="text-xl px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition"
                    target="_blank"
                  >
                    Watch Our Videos
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Carousel Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <Image
                  src={Hero}
                  alt="Banner 1"
                //   width={500}
                //   height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexHeader;
