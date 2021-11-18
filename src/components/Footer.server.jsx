import {Link} from '@shopify/hydrogen';

import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'

export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo">
      <div className="relative bg-white border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
          
        </div>
      </div>
      <div className="py-6 px-4 md:px-8 bg-purple-50">
      <div className="box">
                <a href="https://twitter.com/EnemaTreasure">
                    <img src={twitter} alt="logo" /> 
                </a>
        </div>
        <div className="box">
                <a href="https://www.instagram.com/bensmith.io/?hl=en">                  
                    <img src={insta} alt="logo" />
                </a>
        </div>
        <p className="text-gray-400">© 2021 cottonsmith</p>
      </div>
    </footer>
  );
}
