import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface PhotoUploadModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (url: string) => void;
}

const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const [preview, setPreview] = useState<null | string>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const clearPreview = () => {
    setPreview((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }

      return null;
    });
    setSelectedFile(null);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        if (selectedFile) {
          clearPreview();
        }

        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        setSelectedFile(file);
      }
    },
    [selectedFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!selectedFile) return;

    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if (!apiKey) {
      console.error("ImgBB API key is missing.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setIsUploading(true);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        onSuccess(data.data.url);
        clearPreview();
        onClose();
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a Photo</DialogTitle>
          <DialogDescription>
            We use ImgBB to handle photo uploads. When you upload an image, it
            is stored on ImgBB&apos;s servers. Your uploaded photos may be
            subject to ImgBB’s{" "}
            <Link
              href={"https://imgbb.com/privacy"}
              target="_blank"
              title="Privacy Policy of ImgBB"
              className="text-primary underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href={"https://imgbb.com/tos"}
              target="_blank"
              title="Terms of Service of ImgBB"
              className="text-primary underline"
            >
              Terms of Service
            </Link>
            .
          </DialogDescription>
        </DialogHeader>
        <div
          {...getRootProps({
            className: `my-5 border-2 border-dashed rounded-md min-h-[300px] flex flex-col items-center justify-center text-center p-4 text-center ${
              isDragActive ? "border-primary" : "border-gray-300"
            }`,
          })}
        >
          <input {...getInputProps()} />
          {isDragActive && <p>Drop your image here...</p>}
          {!isDragActive && preview && (
            <div className="relative aspect-square w-[200px]">
              <Image src={preview} alt="Preview" fill />
              <Button
                type="button"
                className="absolute -top-4 -right-4 size-5"
                variant={"default"}
                size={"icon"}
                onClick={(e) => {
                  clearPreview();
                  e.stopPropagation();
                }}
              >
                <LucideX size={14} />
              </Button>
            </div>
          )}
          {!isDragActive && !preview && (
            <p>Drag & drop an image here, or click to select one.</p>
          )}
        </div>

        <DialogFooter>
          <Button onClick={onClose} disabled={isUploading} variant="ghost">
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoUploadModal;
