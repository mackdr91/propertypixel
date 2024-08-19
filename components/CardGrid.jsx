import Card from "./Card";

const CardGrid = () => {
  return (
    <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <Card
            heading="Custom Website Design and Development"
            buttonInfo={{
              backgroundColor: "bg-blue-700",
              text: "Button 1",
              link: "/",
            }}
          >
            <p>
              Your success starts with a website that’s as unique as your
              vision. We craft beautiful, intuitive websites that are easy to
              navigate, ensuring your clients have a seamless experience from
              the moment they land on your page.
            </p>
          </Card>

          <Card
            heading="Responsive and Mobile-Optimized Design"
            buttonInfo={{
              backgroundColor: "bg-green-700",
              text: "Button 2",
              link: "/",
            }}
          >
            <p>
              Your clients are always on the move—make sure your website is too!
              We create sites that look stunning on any device, so you never
              miss an opportunity to connect with a potential client.
            </p>
          </Card>

          <Card
            heading="Search Engine Optimization (SEO)"
            buttonInfo={{
              backgroundColor: "bg-red-700",
              text: "Button 3",
              link: "/",
            }}
          >
            <p>
              Stand out from the crowd! We optimize your website to ensure it
              ranks high on search engines, making it easier for potential
              clients to find you.
            </p>
          </Card>

          <Card
            heading="Affordable Hosting and Support"
            buttonInfo={{
              backgroundColor: "bg-yellow-700",
              text: "Button 4",
              link: "/",
            }}
          >
            <p>
              Quality doesn’t have to come with a high price tag. Our affordable
              hosting solutions ensure your website is fast, secure, and always
              online. Plus, our support team is just a call or click away, ready
              to help whenever you need it.
            </p>
          </Card>

          <Card
            heading="Simple Property Listing Management"
            buttonInfo={{
              backgroundColor: "bg-purple-700",
              text: "Button 5",
              link: "/",
            }}
          >
            <p>
              We make managing your listings a breeze! Our easy-to-use content
              management system lets you add, edit, or remove properties with
              just a few clicks, so you can focus on what you do best—closing
              deals.
            </p>
          </Card>

          <Card
            heading="Step-by-Step Guidance"
            buttonInfo={{
              backgroundColor: "bg-pink-700",
              text: "Button 6",
              link: "/",
            }}
          >
            <p>
              We’re with you every step of the way. From setting up your site to
              managing your first property listing, we provide the guidance and
              support you need to feel confident and in control.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
