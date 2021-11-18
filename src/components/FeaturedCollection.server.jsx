import {Image, Link} from '@shopify/hydrogen/client';

export default function FeaturedCollection({collection}) {
  return collection ? (
    <div className="shadow-xl rounded grid grid-cols-1 lg:grid-cols-2 items-center bg-purple-50 overflow-hidden">
      {collection.image ? (
        <Image width="622" height="465" image={collection.image} />
      ) : null}
      <div className="px-10 py-10 lg:py-0">
        <h2 className="text-pink-600 text-3xl font-bold mb-5">
          {collection.title}
        </h2>
        <p className="text-xl text-gray-500 mb-6">{collection.description}</p>
        <Link
          to={`/collections/${collection.handle}`}
          className="inline-block bg-pink-200 text-gray-900 active:bg-pink-300 border border-black text-lg font-medium rounded-md py-4 px-16 uppercase"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  ) : null;
}
