import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Zurich",
    href: "/events/zurich",
    imageSrc: "/zurich.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Miami",
    href: "events/miami",
    imageSrc: "/miami.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "London",
    href: "events/london",
    imageSrc: "/london.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Barcelona",
    href: "events/barcelona",
    imageSrc: "/barcelona.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Madrid",
    href: "events/madrid",
    imageSrc: "/madrid.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "LA",
    href: "events/los%20angeles",
    imageSrc: "/losangeles.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Chicago",
    href: "events/chicago",
    imageSrc: "/chicago.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Amsterdam",
    href: "events/amsterdam",
    imageSrc: "/amsterdam.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 9,
    name: "Berlin",
    href: "events/berlin",
    imageSrc: "/berlin.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 10,
    name: "Munich",
    href: "events/munich",
    imageSrc: "/munich.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 11,
    name: "Helsinki",
    href: "events/helsinki",
    imageSrc: "/helsinki.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 12,
    name: "Vienna",
    href: "events/vienna",
    imageSrc: "/vienna.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function PopularCards() {
  return (
    <div className="bg-inherit">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-center">
          🔥 HOTTEST CITIES 🔥
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link href={product.href}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-full">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full brightness-[70%] bg-opacity min-h-96 max-h-96"
                    width={750}
                    height={750}
                  />
                </div>
              </Link>

              <Link
                href={product.href}
                className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {product.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
