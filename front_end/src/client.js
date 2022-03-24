import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: '50fqjhxt',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: 'skH28MQgqFOxP2VYsVHdgaJHsk6yQpd7ps62eeHCQJmF4vhFWJtfQniZXjB5GUYxqPr4mNmA3W5i5Qd28fo2RJdGkmqTppDvADiv6YFjKhM1A6A7RNYSP0Hg6CfbJFQ8jn8jGqaDi97OqFO2CbbzEFWsXArPqW2JgZTvUT9hjXaNRoAVZ1vu'

  ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
