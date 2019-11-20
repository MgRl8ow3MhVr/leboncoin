import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// const MyDropzone = props => {
//   const onDrop = useCallback(acceptedFiles => {
//     console.log(acceptedFiles);
//     props.loadFile(acceptedFiles[0]);
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {isDragActive ? (
//         <p>Drop the files here ...</p>
//       ) : (
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       )}
//     </div>
//   );
// };

const MyDropzone = props => {
  const { imag, setImg } = useState("");

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        console.log("drop", acceptedFiles);
        console.log("drop", file);
        // props.loadFile(file);
        const binaryStr = reader.result;

        console.log(binaryStr);
      };
      /* reader.readAsDataURL(file); */
      /* const binaryStr = reader.result; */

      /* setImg(binaryStr); */

      //   console.log(reader.readAsDataURL());
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <img src={imag} alt="image"></img>
    </div>
  );
};

export default MyDropzone;
