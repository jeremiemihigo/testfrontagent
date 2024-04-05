/* eslint-disable react/prop-types */
import { Image, Space } from 'antd'

function ImageComponent({ src, }) {
  return (
    <div style={{marginRight:"5px"}}>
      <Space size={12}>
      <Image
        width={50}
        src={src}
        placeholder={<Image preview={false} src={src} width={50} />}
      />
    </Space>
    </div>
  )
}

export default ImageComponent
