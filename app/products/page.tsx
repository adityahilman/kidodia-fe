
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/api/products";
import Link from "next/link";
import Image from "next/image";
import ProductList from "@/components/ProductList";

export const metadata = {
    title: "Daftar Produk",
    description: "Berbagai macam produk photobook berkualitas dari Kidodia.",
};

export default async function ProductsListPage() {

    const products = await getProducts();
    
    return (
        <div>
            <Header />
            <ProductList />
            <Footer />
        </div>
    )
}