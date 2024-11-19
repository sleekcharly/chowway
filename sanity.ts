import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'q5omrc0a',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-11-17',
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;
