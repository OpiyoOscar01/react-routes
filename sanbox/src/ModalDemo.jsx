/**
 * Version 1
 */
// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import { IoMdClose } from 'react-icons/io';

// function ModalDemo() {
//   const [form, setForm] = useState({
//     name: '',
//     qty: '',
//     desc: '',
//     price: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e, close) => {
//     e.preventDefault();
//     console.log('Product Submitted:', form);
//     close();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-semibold mb-4">Welcome to the Product Page</h1>

//       <Popup
//         modal
//         nested
//         closeOnDocumentClick={false}
//         trigger={
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Add Product
//           </button>
//         }
//       >
//         {close => (
//           <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
//             {/* Close Button */}
//             <button
//               onClick={close}
//               className="absolute -top-4 -right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:ring-2 hover:ring-red-400 transition"
//               title="Close"
//             >
//               <IoMdClose size={20} className="text-red-500" />
//             </button>

//             <h2 className="text-xl font-bold mb-4 text-center">Add Product Info</h2>

//             <form onSubmit={(e) => handleSubmit(e, close)} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Product Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 type="number"
//                 name="qty"
//                 placeholder="Quantity"
//                 value={form.qty}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 type="text"
//                 name="desc"
//                 placeholder="Description"
//                 value={form.desc}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Price"
//                 value={form.price}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />

//               <div className="flex justify-end gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={close}
//                   className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </Popup>
//     </div>
//   );
// }

// export default ModalDemo;


/**
 * Version 2
 */

// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import { IoMdClose } from 'react-icons/io';

// function ModalDemo() {
//   const [form, setForm] = useState({
//     name: '',
//     qty: '',
//     desc: '',
//     price: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e, close) => {
//     e.preventDefault();
//     console.log('Product Submitted:', form);
//     close();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-semibold mb-4">Welcome to the Product Page</h1>

//       <Popup
//         modal
//         nested
//         closeOnDocumentClick={false}
//         lockScroll
//         contentStyle={{ padding: 0, border: 'none', background: 'transparent' }}
//         trigger={
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Add Product
//           </button>
//         }
//       >
//         {close => (
//           <div className="relative">
//             {/* Sliding modal container */}
//             <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg p-6 transform transition-transform duration-500 ease-out translate-x-0 z-50">
//               {/* Close Button - Center Right */}
//               <button
//                 onClick={close}
//                 className="absolute top-1/2 right-full translate-y-[-50%] mr-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:ring-2 hover:ring-red-400 transition"
//                 title="Close"
//               >
//                 <IoMdClose size={20} className="text-red-500" />
//               </button>

//               <h2 className="text-xl font-bold mb-4 text-center">Add Product Info</h2>

//               <form onSubmit={(e) => handleSubmit(e, close)} className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="qty"
//                   placeholder="Quantity"
//                   value={form.qty}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="desc"
//                   placeholder="Description"
//                   value={form.desc}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={form.price}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//                 <div className="flex justify-end gap-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={close}
//                     className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </Popup>
//     </div>
//   );
// }

// export default ModalDemo;

//  
/**
 * Version 3
 */

import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoMdClose } from 'react-icons/io';

function ModalDemo() {
  const [form, setForm] = useState({
    name: '',
    qty: '',
    desc: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, close) => {
    e.preventDefault();
    console.log('Product Submitted:', form);
    close();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">🛒 Product Management</h1>

      <Popup
        modal
        nested
        lockScroll
        closeOnDocumentClick
        contentStyle={{ padding: 0, border: 'none', background: 'transparent' }}
        overlayStyle={{
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 40,
        }}
        trigger={
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            ➕ Add Product
          </button>
        }
      >
        {close => (
          <div className="relative">
            {/* Modal Slide-in Container */}
            <div className="fixed right-0 top-0 h-full w-[80vw] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto">
              
              {/* ❌ Close Button with ring and centered vertically */}
              <button
                onClick={close}
                className="absolute top-1/2 right-full -translate-y-1/2 translate-x-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:ring-2 hover:ring-red-500 transition"
                title="Close"
              >
                <IoMdClose size={24} className="text-red-600" />
              </button>

              {/* Modal Content */}
              <div className="p-6 max-w-3xl mx-auto">
                <h2 className="text-xl font-bold mb-6 text-center">📦 Add Product Info</h2>

                <form onSubmit={(e) => handleSubmit(e, close)} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    name="qty"
                    placeholder="Quantity"
                    value={form.qty}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="desc"
                    placeholder="Description"
                    value={form.desc}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <div className="flex justify-end gap-3 pt-6">
                    <button
                      type="button"
                      onClick={close}
                      className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                    >
                      Save Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default ModalDemo;
