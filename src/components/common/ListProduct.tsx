"use client";
import React, { useCallback, useRouter, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import Loading from "@/components/common/Loading";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ListProduct() {
  //const [isLoading, setIsLoading] = useState(true);
  //const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return <Loading color={"#fff"} />;
  }
  //console.log(data)
  //setProducts(data.products);

  // fetch use useEffect Hook
  // useEffect(() => {
  //     ;(async()=>{
  //         const products = await fetch('https://dummyjson.com/products').then(products=>products.json());

  //         setProducts(products.products);
  //     })()
  // }, [])

  return (
    <div className="grid gap-2 mb-4 grid-cols-4">
      {data.total == 0 ? <p>Empty products</p> : ""}
      {data.products.map((product: Product) => (
        <div
          key={product.id}
          className="item flex flex-col w-full border-solid rounded border-2 border-gray-200"
        >
          <Image
            src={product.thumbnail}
            className="object-cover rounded-t rounded-b-none flex-1 w-auto max-h-[200px]"
            alt="img"
            quality={100}
            width={200}
            height={200}
            sizes="(min-width: 808px) 50vw, 100vw"
            priority
          />
          <div className="p-3">
            <h5 className="text-xl">{product.title}</h5>
            <p className="mt-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
