import React from 'react';

// import images
// import Italy from '../../assets/images/almafi-coast.jpg';
import Kyoto from '../../assets/images/arashiyama.jpg';
import Iceland from '../../assets/images/iceland.jpg';
import Maldives from '../../assets/images/maldives.jpg';
import Mykonos from '../../assets/images/mykonos.jpg';

const Discover = () => {
  return (
    <div className="discover w-full h-full md:h-screen relative p-8">
        <div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">
            <h1 className="mb-8 text-2xl md:text-4xl font-semibold uppercase tracking-widest">
                Discover dreamy destinations
            </h1>

            <div className="w-full md:max-w-screen-lg mx-auot flex flex-row flex-wrap justify-center items-center">
                <div className="w-full md:max-w-screen-md">
                    <form className="search-form w-full mx-auto grid grid-cols-1 md:grid-cols-3 mb-4">
                        <div className="col-span-1 md:col-span-3">
                            <input type="radio" id="round-trip" name="round-trip" value="round-trip" />
                            <label for="round-trip" className="pl-2 pr-6">Round-Trip</label>
                            <input type="radio" id="one-way" name="one-way" value="one-way" />
                            <label for="one-way" className="pl-2">One-Way</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 py-4 place-items-stretch">
                            <div>
                                <label className="block">From</label>
                                <input type="text" placeholder="Origin city or airport" />
                            </div>
                            <div>
                                <label className="block">To</label>
                                <input type="text" placeholder="Destination city or airport" />
                            </div>
                            <div>
                                <label className="block">Passengers</label>
                                <select>
                                    <option value="1">1 Passenger</option>
                                    <option value="1">2 Passengers</option>
                                    <option value="1">3 Passengers</option>
                                    <option value="1">4 Passengers</option>
                                    <option value="1">5 Passengers</option>
                                    <option value="1">6 Passengers</option>
                                    <option value="1">7 Passengers</option>
                                    <option value="1">8 Passengers</option>
                                    <option value="1">9 Passengers</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 pb-4 place-items-stretch">
                            <div>
                                <label className="block">Departure Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label className="block">Return Date</label>
                                <input type="date" />
                            </div>
                            <div className="pt-6">
                                <button className="w-full h-[43px]">Find Your Trip</button>
                            </div>
                        </div>
                    </form>
                </div>

                <h2 className="mb-8 text-teal-400 text-xl md:text-2xl font-light uppercase tracking-widest">
                    Don't miss these deals
                </h2>

                <div className="images grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                        {/* <img
                            src={Italy}
                            alt="Soak in the view of the Almafi Coast, Italy"
                            className="col-span-2"
                        /> */}
                        {/* <img
                            src={Kyoto}
                            alt="Get lost in the bamboo forest of Kyoto, Japan"
                        /> */}
                        <img
                            src={Iceland}
                            alt="Collect moments in Iceland"
                        />
                        <img src={Maldives} alt="Escape the ordinary in Maldives" />
                        <img
                            src={Mykonos}
                            alt="Wake up to a different world in Mykonos, Greece"
                        />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Discover;