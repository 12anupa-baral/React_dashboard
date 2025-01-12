import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./profile.scss";
import Card from "../../card/Card";
import { ReactMediaLibrary } from 'react-media-library';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function Profile() {
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openMediaLibrary = () => {
    setIsMediaLibraryOpen(true);
  };

  const closeMediaLibrary = () => {
    setIsMediaLibraryOpen(false);
  };

  const handleFileSelect = (selectedFiles) => {
    setSelectedFile(selectedFiles[0]);
    closeMediaLibrary();
  };

  const handleFileUpload = (file) => {
    // Implement your upload logic here
    // For example, upload the file to your server or a third-party service
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful upload
        resolve({ success: true, fileUrl: URL.createObjectURL(file), fileName: file.name });
      }, 1000);
    });
  };

  return (
    <div className="profile">
      <h3>Profile</h3>
      <Card cardClass={"card"}>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values", values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              toast.success("Profile updated successfully!");
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <label>Upload Image</label>
              <button type="button" onClick={openMediaLibrary} className="Pic">
                {selectedFile ? (
                  <img
                    className="Pic"
                    alt={selectedFile.title}
                    src={selectedFile.thumbnailUrl}
                    style={{ height: '100px', width: '100px'}}
                  />
                ) : (
                  "Add Profile"
                )}
              </button>
              {/* {selectedFile && (
                <div>
                  <div style={{ width: '25rem' }}>
                    <img
                      className="Pic"
                      alt={selectedFile.title}
                      src={selectedFile.thumbnailUrl}
                      style={{ height: '100px', width: '100px' }}
                    />
                  </div>
                </div>
              )} */}
              {isMediaLibraryOpen && (
                <ReactMediaLibrary
                  defaultSelectedItemIds={['']}
                  fileLibraryList={[
                    {
                      _id: '6549e02fb0612d12ca163aaa',
                      createdAt: 1208133942801,
                      description:
                        'Deserunt et reprehenderit ut qui ea ex excepteur incididunt velit. Reprehenderit dolor dolor dolore non occaecat cillum aute fugiat ea nisi nostrud. Occaecat velit excepteur non aliquip nulla. Dolor consectetur ullamco consequat sint dolor Lorem dolor. Est laborum laborum esse duis dolor occaecat aliqua esse quis sit nulla qui ad irure. Incididunt excepteur aute mollit voluptate mollit veniam et nostrud deserunt voluptate.\r\n',
                      fileName: 'qui.jpg',
                      size: 187657,
                      thumbnailUrl: 'https://loremflickr.com/640/360?v=01',
                      title: 'amet qui sunt',
                    },
                    {
                      _id: '6549e02feac54a219585b848',
                      createdAt: 1136027683961,
                      description:
                        'Proident ea aliquip ad sit et. Culpa ex qui ad qui proident aliquip veniam dolor deserunt eu nisi consequat esse cupidatat. Qui dolore aliqua magna est labore consectetur non elit. Culpa proident consectetur proident nostrud do sint velit dolor ullamco nisi est pariatur. Ex esse cupidatat tempor dolor quis sunt dolore in in proident eiusmod nisi proident quis. Veniam consectetur reprehenderit quis do dolor proident sint dolor. Ex irure sunt proident sunt.\r\n',
                      fileName: 'cillum.jpg',
                      size: 119197,
                      thumbnailUrl: 'https://loremflickr.com/640/360?v=02',
                      title: 'laboris excepteur voluptate',
                    },
                    // ... other files
                  ]}
                  fileUploadCallback={handleFileUpload}
                  filesDeleteCallback={() => {}}
                  filesSelectCallback={handleFileSelect}
                  finishUploadCallback={() => {}}
                  isOpen={isMediaLibraryOpen}
                  onClose={closeMediaLibrary}
                />
              )}

              <p>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </p>

              <p>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </p>

              <p>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </p>

              <button className="--btn --btn-primary --btn-block" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        <ToastContainer />
      </Card>
    </div>
  );
}

export default Profile;




// import React, { useState } from "react";
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./profile.scss";
// import Card from "../../card/Card";
// import {ReactMediaLibrary} from 'react-media-library';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

// function Profile() {
//   const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const openMediaLibrary = () => {
//     setIsMediaLibraryOpen(true);
//   };

//   const closeMediaLibrary = () => {
//     setIsMediaLibraryOpen(false);
//   };

//   const handleFileSelect = (selectedFiles) => {
//     setSelectedFile(selectedFiles[0]);
//     closeMediaLibrary();
//   };

//   return (
//     <div className="profile">
//       <h3>Profile</h3>
//       <Card cardClass={"card"}>
//         <Formik
//           initialValues={{ firstName: '', lastName: '', email: '' }}
//           validationSchema={validationSchema}
//           onSubmit={(values, { setSubmitting }) => {
//             console.log("values", values);
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//               toast.success("Profile updated successfully!");
//             }, 400);
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <label>Upload Image</label>
//               <button type="button" onClick={openMediaLibrary} className="Pic">
//               {selectedFile}? <img className="Pic"
//                       alt={selectedFile.title}
//                       src={selectedFile.thumbnailUrl}
//                       style={{ height: 'auto', width:'100%' }}
//                     /> :Add Profile
//               </button>
//               {selectedFile && (
//                 <div>
//                   <div style={{ width: '25rem'}} >
//                     <img className="Pic"
//                       alt={selectedFile.title}
//                       src={selectedFile.thumbnailUrl}
//                       style={{ height: 'auto', width:'100%' }}
//                     />
//                   </div>
                  
//                 </div>
//               )}
//               {isMediaLibraryOpen && (
//                 <ReactMediaLibrary
//                   defaultSelectedItemIds={['']}
//                   fileLibraryList={[
//                     {
//                       _id: '6549e02fb0612d12ca163aaa',
//                       createdAt: 1208133942801,
//                       description:
//                         'Deserunt et reprehenderit ut qui ea ex excepteur incididunt velit. Reprehenderit dolor dolor dolore non occaecat cillum aute fugiat ea nisi nostrud. Occaecat velit excepteur non aliquip nulla. Dolor consectetur ullamco consequat sint dolor Lorem dolor. Est laborum laborum esse duis dolor occaecat aliqua esse quis sit nulla qui ad irure. Incididunt excepteur aute mollit voluptate mollit veniam et nostrud deserunt voluptate.\r\n',
//                       fileName: 'qui.jpg',
//                       size: 187657,
//                       thumbnailUrl: 'https://loremflickr.com/640/360?v=01',
//                       title: 'amet qui sunt',
//                     },
//                     {
//                       _id: '6549e02feac54a219585b848',
//                       createdAt: 1136027683961,
//                       description:
//                         'Proident ea aliquip ad sit et. Culpa ex qui ad qui proident aliquip veniam dolor deserunt eu nisi consequat esse cupidatat. Qui dolore aliqua magna est labore consectetur non elit. Culpa proident consectetur proident nostrud do sint velit dolor ullamco nisi est pariatur. Ex esse cupidatat tempor dolor quis sunt dolore in in proident eiusmod nisi proident quis. Veniam consectetur reprehenderit quis do dolor proident sint dolor. Ex irure sunt proident sunt.\r\n',
//                       fileName: 'cillum.jpg',
//                       size: 119197,
//                       thumbnailUrl: 'https://loremflickr.com/640/360?v=02',
//                       title: 'laboris excepteur voluptate',
//                     },
//                     // ... other files
//                   ]}
//                   fileUploadCallback={() => {}}
//                   filesDeleteCallback={() => {}}
//                   filesSelectCallback={handleFileSelect}
//                   finishUploadCallback={() => {}}
//                   isOpen={isMediaLibraryOpen}
//                   onClose={closeMediaLibrary}
//                 />
//               )}

//               <p>
//                 <label>First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.firstName}
//                 />
//                 {errors.firstName && touched.firstName ? (
//                   <div>{errors.firstName}</div>
//                 ) : null}
//               </p>

//               <p>
//                 <label>Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.lastName}
//                 />
//                 {errors.lastName && touched.lastName ? (
//                   <div>{errors.lastName}</div>
//                 ) : null}
//               </p>

//               <p>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 {errors.email && touched.email ? <div>{errors.email}</div> : null}
//               </p>

//               <button className="--btn --btn-primary --btn-block" type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </form>
//           )}
//         </Formik>
//         <ToastContainer />
//       </Card>
//     </div>
//   );
// }

// export default Profile;


