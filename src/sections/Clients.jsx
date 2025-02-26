import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20 w-full">
      <h3 className="head-text">Recommendation</h3>
      <div className="client-container flex justify-center w-full">
        {clientReviews.map((item) => (
          <div
            key={`review-${item.id}`}
            className="client-review border-2 border-transparent transform transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] p-5 rounded-lg"
          >
            <div>
              <p className="text-white-800 font-light">{item.review}</p>
              <div className="client-content flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
