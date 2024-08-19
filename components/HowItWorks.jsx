import Card from "./Card";
const HowItWorks = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="border border-red-500 m-auto ">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="border border-red-500 ">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Step 1: Get To Know You</h3>
              <p>
                We kick things off by getting to know you and your goals. We
                want to understand your vision so we can create a website that
                truly represents you.
              </p>
            </div>

            <div className=" mb-4">
              <h3 className="text-2xl font-bold ">Step 2: Custom Design</h3>
              <p>
                Next, we bring your vision to life with a custom website design
                that’s perfectly tailored to your brand and target audience.
              </p>
            </div>

            <div className=" mb-4">
              <h3 className="text-2xl font-bold ">Step 3: Development</h3>
              <p>
                Once you’re happy with the design, we build your site to be
                responsive, fast, and optimized for search engines.
              </p>
            </div>

            <div className=" mb-4">
              <h3 className="text-2xl font-bold ">
                Step 4: Training and Support
              </h3>
              <p>
                We don’t just hand over the keys—we show you how to drive! Our
                training ensures you feel confident managing your site, with our
                support team always ready to assist.
              </p>
            </div>

            <div className=" mb-4">
              <h3 className="text-2xl font-bold ">Step 5: Launch</h3>
              <p>
                It’s time to go live! Your site will be ready to welcome clients
                and showcase your properties with pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
