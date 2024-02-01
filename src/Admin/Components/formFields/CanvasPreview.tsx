import { PixelCrop } from 'react-image-crop'

const TO_RADIANS = Math.PI / 180

export function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop,
  scale = 1,
  rotate = 0,
) {
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  const scaleX = image?.naturalWidth / image?.width
  const scaleY = image?.naturalHeight / image?.height
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio
  // const pixelRatio = 1

  canvas.width = Math.floor(crop?.width * scaleX * pixelRatio)
  canvas.height = Math.floor(crop?.height * scaleY * pixelRatio)

  ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  const cropX = crop?.x * scaleX
  const cropY = crop?.y * scaleY

  const rotateRads = rotate * TO_RADIANS
  const centerX = image.naturalWidth / 2
  const centerY = image.naturalHeight / 2

  ctx.save()

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY)
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY)
  // 3) Rotate around the origin
  ctx.rotate(rotateRads)
  // 2) Scale the image
  ctx.scale(scale, scale)
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY)
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  )

  ctx.restore();
  return  canvas.toDataURL()?dataURLtoFile(canvas.toDataURL(),'image.png'):'';  
}

function dataURLtoFile(dataurl: string, filename: string): File | null {
    const arr = dataurl?.split(','),
        mime = arr?.[0]?.match(/:(.*?);/)?.[1],
        bstr = atob(arr?.[arr.length - 1] || '');
        let n = bstr?.length;        
       const  u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr?.charCodeAt(n) || 0;
    }

    if (mime) {
        return  new File([u8arr], filename, { type: mime });
    } else {
        // console.error('Invalid data URL');
        return null;
    }
}