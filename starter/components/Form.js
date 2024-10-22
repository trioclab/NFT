// import { Input } from "@chakra-ui/react";
import { useState } from "react";
export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    username: "",
    price: "",
    royalties: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };
  return (
    <>
      <div className="cfont-inter ontainer h-full w-screen bg-gray-900 flex justify-center items-center pt-32 pb-32 ">
        <div className="container h-full w-screen bg-gradient-to-r from-blue-800 via-purple-600 to-purple-400 max-w-4xl mx-auto my-10 p-10 shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="mb-2 text-white text-lg font-semibold"
                >
                  Item Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Ex. Lyon King"
                  value={formData.title}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="mb-2 text-white text-lg font-semibold"
                >
                  Description For Item
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Give us your idea"
                  value={formData.description}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="mb-2 text-white text-lg font-semibold"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Ex. @alansmithee"
                  value={formData.username}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="mb-2 text-white text-lg font-semibold"
                >
                  Price Of Item
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price depends on quality. Ex. 0.06 ETH"
                  value={formData.price}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="royalties"
                  className="mb-2 text-white text-lg font-semibold"
                >
                  Royalties
                </label>
                <input
                  type="text"
                  name="royalties"
                  id="royalties"
                  placeholder="Common royalties 1-25%"
                  value={formData.royalties}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="file"
                  className="mb-2 text-lg text-white font-semibold"
                >
                  Your File
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  onChange={handleChange}
                  className="p-3 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2 flex justify-end items-center">
                <button
                  type="submit"
                  className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Submit Your Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}





// // components/MyForm.jsx

// import { Button } from 'shadcn/ui/button';
// import { Input } from 'shadcn/ui/input';
// import { Label } from 'shadcn/ui/label';
// import { Form, FormField, FormItem, FormLabel, FormControl } from 'shadcn/ui/form';
// import { useForm } from 'react-hook-form';

// export default function MyForm() {
//   const form = useForm({
//     defaultValues: {
//       title: '',
//       description: '',
//       username: '',
//       price: '',
//       royalties: '',
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           name="title"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Item Title</FormLabel>
//               <FormControl>
//                 <Input placeholder="Ex. Lyon King" {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="description"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description For Item</FormLabel>
//               <FormControl>
//                 <Input placeholder="Give us your idea" {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="username"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Your Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="Ex. @alansmithee" {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="price"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Price Of Item</FormLabel>
//               <FormControl>
//                 <Input placeholder="Ex. 0.06 ETH" {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="royalties"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Royalties</FormLabel>
//               <FormControl>
//                 <Input placeholder="Common royalties 1-25%" {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <Button type="submit" className="mt-4">
//           Submit Your Application
//         </Button>
//       </form>
//     </Form>
//   );
// }
