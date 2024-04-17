/* eslint-disable react/prop-types */
import ImgCrop from 'antd-img-crop';
import  {  useState } from 'react';
import { Upload } from 'antd';

const UploadImage = ({setFile}) => {
  
  // const loading = () => {
  //   let elev = _.filter(eleve, { _id: id });
  //   let pare = _.filter(parent, { _id: id });
  //   var nom = '';
  //   if (elev.length > 0) {
  //     setParentEleve({ nom: elev[0].fullname, titre: 'eleve' });
  //   }
  //   if (pare.length > 0) {
  //     setParentEleve({ nom: pare[0].nom, titre: 'enseignant' });
  //   }
  //   return { nom };
  // };


  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    setFile(newFileList);
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // const sendImages = () => {
  //   const data = {
  //     id,
  //     data: {
  //       filename: fileList[0].thumbUrl
  //     }
  //   };
   
  // };

  return (
    <>
     
      <ImgCrop rotationSlider>
        <Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
          {fileList.length < 1 && 'Upload'}
        </Upload>
      </ImgCrop>
      
    </>
  );
};
export default UploadImage;
