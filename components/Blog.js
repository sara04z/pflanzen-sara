import "twind/shim";

export default function Blog(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1609693117459-886fbe8443ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&h=200&q=80"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Kakteen aus der welt
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Kakteen
                </h1>
                <p className="leading-relaxed mb-3">
                  Kaktten brauchen nicht so viel Wasser weil sie in der Wüste
                  leben.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1609642779314-20faa2c9a7cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&h=200&q=80"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
