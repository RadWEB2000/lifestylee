import { getPlaiceholder } from "plaiceholder";

export default async function blurredImage(image: string): Promise<string> {
  try {
    const response = await fetch(image);
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log(`Błąd przy wyrenderowaniu rozmytego zdjęcia: `, error);
    return "";
  }
}
