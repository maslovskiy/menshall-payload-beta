import React from 'react'
import { Media } from '@/payload-types'
import Image from 'next/image'

type CustomImageProps = React.ComponentPropsWithoutRef<"img"> & {
  className?: string;
  image: Media | string;
  fill?: boolean;
};

const CustomImage = (props: CustomImageProps) => {
  const { image, loading, ...htmlProps } = props;
  let fill = props.fill;

  if (!image) {
    return <></>;
  }

  if(typeof image === "string"){
    if (!htmlProps.width && !htmlProps.height) {
      fill = true;
    }
    return (
      <Image
        src={image}
        alt={"alt"}
        fill={fill}
        width={!fill ? Number(htmlProps.width) : undefined}
        height={!fill ? Number(htmlProps.height) : undefined}
      />
    )
  }

  const width = Number(htmlProps.width || image?.width!);
  const height = Number(htmlProps.height || image?.height!);

  return (
    <Image
      className={props.className}
      alt={"alt"}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      src={image.url!}
      loading={loading || "lazy"}
      quality={100}
    />
  );
}

export default CustomImage
