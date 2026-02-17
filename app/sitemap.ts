import { MetadataRoute } from "next";

async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        next: {
            revalidate: 60
        }
    });
    return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const products = await getProducts();
    const productUrls = products.map((product: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.slug}`,
        lastModified: new Date().toISOString()
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date().toISOString()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
            lastModified: new Date().toISOString()
        },
        ...productUrls
        
    ]

}