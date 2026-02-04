import { Suspense } from "react";
import CollectionCase from "@/components/reference/collection-case";

export default function Collection() {
  return (
    <Suspense>
      <CollectionCase />
    </Suspense>
  );
}
