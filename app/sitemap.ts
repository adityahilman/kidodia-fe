import { MetadataRoute } from "next";
import { products } from "@/lib/product";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const productUrls = products.map((product: any) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date().toISOString(),
    },
    ...productUrls,
  ];
}