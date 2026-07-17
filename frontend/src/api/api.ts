import { Store } from "@/types/store";

const BASE_URL = "http://localhost:8080/api";

export async function getStores(): Promise<Store[]> {

  const response = await fetch(`${BASE_URL}/stores`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch stores");
  }

  return response.json();
}