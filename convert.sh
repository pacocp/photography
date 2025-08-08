for file in images/*.JPG; do magick "$file" -auto-orient -resize 400x -quality 80 "images/thumbs/$(basename "$file" .JPG)-thumb.jpg"; done
for file in images/*.JPG; do magick "$file" -auto-orient -resize 1920x -quality 80 "images/optimized/$(basename "$file" .JPG).webp"; done
for file in images/*.jpg; do magick "$file" -auto-orient -resize 400x -quality 80 "images/thumbs/$(basename "$file" .jpg)-thumb.jpg"; done
for file in images/*.jpg; do magick "$file" -auto-orient -resize 1920x -quality 80 "images/optimized/$(basename "$file" .jpg).webp"; done
