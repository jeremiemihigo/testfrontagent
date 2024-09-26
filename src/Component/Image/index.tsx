import imageCompression from "browser-image-compression";
import { useState } from "react";

function UploadImage() {
  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedFile(compressedFile);
      console.log("Compressed Image:", compressedFile);
    } catch (error) {
      console.error("Error during compression:", error);
    }
  };

  const handleSubmit = async () => {
    if (!compressedFile) return;

    const formData = new FormData();
    formData.append("image", compressedFile);

    // Send compressed image to the backend
    await fetch("/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default UploadImage;
