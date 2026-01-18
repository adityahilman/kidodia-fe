import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";

export type ImageKitAuthParams = {
  expire: number;
  token: string;
  signature: string;
  publicKey: string;
};

export type ImageKitUploadInput = {
  auth: ImageKitAuthParams;
  file: File;
  fileName: string;
  folder?: string;
};

export class ImageKitUploadError extends Error {
  kind:
    | "abort"
    | "invalid_request"
    | "network"
    | "server"
    | "unknown" = "unknown";

  constructor(message: string, kind: ImageKitUploadError["kind"] = "unknown") {
    super(message);
    this.name = "ImageKitUploadError";
    this.kind = kind;
  }
}

export async function uploadToImageKit({
  auth,
  file,
  fileName,
  folder,
}: ImageKitUploadInput) {
  try {
    return await upload({
      expire: auth.expire,
      token: auth.token,
      signature: auth.signature,
      publicKey: auth.publicKey,
      file,
      fileName,
      folder,
    });
  } catch (error: unknown) {
    if (error instanceof ImageKitAbortError) {
      throw new ImageKitUploadError(
        `Upload aborted: ${error.reason}`,
        "abort",
      );
    }
    if (error instanceof ImageKitInvalidRequestError) {
      throw new ImageKitUploadError(
        `Invalid request: ${error.message}`,
        "invalid_request",
      );
    }
    if (error instanceof ImageKitUploadNetworkError) {
      throw new ImageKitUploadError(
        `Network error: ${error.message}`,
        "network",
      );
    }
    if (error instanceof ImageKitServerError) {
      throw new ImageKitUploadError(
        `Server error: ${error.message}`,
        "server",
      );
    }

    throw new ImageKitUploadError("Unknown upload error", "unknown");
  }
}
