import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type CoverImage = {
  image_url: string;
  image_file_id: string;
};

type OrderImage = {
  image_url: string;
  image_file_id: string;
};

export async function createOrderImages(
  orderNumber: string,
  albumTitle: string,
  cover: CoverImage | null,
  images: OrderImage[]
) {
  const response = await axios.post(
    `${API_URL}/images/upload/${orderNumber}`,
    {
      album_title: albumTitle,
      cover,
      images,
    }
  );

  return response.data;
}
