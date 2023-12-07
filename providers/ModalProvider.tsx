"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/app/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {products}
      {/* <SubscribeModal products={products} />
      <UploadModal /> */}
    </>
  );
}

export default ModalProvider;