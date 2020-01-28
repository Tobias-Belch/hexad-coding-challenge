import "whatwg-fetch";

export interface Food {
  id: string;
  name: string;
  emoji: string;
}

export type FoodsResult = Food[];

export async function getFoods(): Promise<FoodsResult> {
  const response = await fetch("./food.json");
  return (await response.json()) as FoodsResult;
}
