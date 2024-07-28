import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { addUserValidation } from "..//../validation";
import Loader from "../Loader";

const Table = ({ editUser, updateUsers, addUsers, products }) => {
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    perPageData: 10,
    dataLength: 50, // Example data length
  });
  const [isShow, setIsShow] = useState(true);
  const [isPreview, setIsPreview] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(addUserValidation(values));
    console.log(values);
  };

  const onPreview = async (id) => {
    setIsShow(false);
    setIsPreview(true);
    const previewData = products.find((item) => item._id === id);
    console.log(previewData, "previewData");
    setSelectedData(previewData);
  };

  const viewAdd = () => {
    setIsAdd(!isAdd);
    setIsShow(!isShow);
  };

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  const updatePagination = (value) => {
    setPaginationData({ ...paginationData, currentPage: value });
  };

  const close = () => {
    setIsShow(!isShow);
    setIsPreview(false);
    setIsAdd(false);
  };

  return (
    <div className="relative h-[100vh] overflow-x-auto shadow-md sm:rounded-lg">
      <div className={`${isShow ? `block h-full` : `hidden`}`}>
        <div className="h-[85vh] overflow-y-auto">
          <div className="w-full flex justify-between items-center">
            <h1 className="gold-head text-2xl w-[30%] text-start font-semibold px-2 py-5">
              All Users
            </h1>
            <button
              className="px-2 py-1 border border-blue-500 text-zinc-200 rounded hover:bg-white hover:text-zinc-800 transition-all duration-30 flex justify-center items-center mr-5 gap-2"
              onClick={viewAdd}
            >
              <FaPlus /> <span>Add New</span>
            </button>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-zinc-200 dark:text-gray-400">
            <thead className="text-xs text-zinc-200 uppercase bg-zinc-800 dark:bg-gray-700 dark:text-gray-400">
              <tr className="gold-head text-md">
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id} // Changed from product.name to product._id
                  className={`${
                    index % 2 === 0
                      ? "bg-zinc-700 dark:bg-gray-900"
                      : "bg-zinc-600 dark:bg-gray-800"
                  } border-none dark:border-gray-700`}
                >
                  <td className="px-6 py-4">{product.color}</td>
                  <th scope="row" className="px-6 py-4">
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 gap-10 flex">
                    <button
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => onPreview(product._id)}
                    >
                      View
                    </button>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-1 py-3 h-[5vh]">
          <Pagination
            paginationData={paginationData}
            onUpdatePagination={updatePagination}
          />
        </div>
      </div>

      <div className={`${isPreview ? `block bg-zinc-800 h-[95%]` : "hidden"}`}>
        <div className="">
          <div className="w-full flex justify-between items-center">
            <h1 className="gold-head text-2xl w-[30%] text-start font-semibold px-2 py-5">
              Preview
            </h1>
            <div className="text-white text-2xl w-[5%] text-center">
              <RxCrossCircled onClick={close} />
            </div>
          </div>

          <div className="border border-b border-zinc-200"></div>
        </div>
        <div className="w-full flex justify-start flex-wrap py-5 mt-5">
          {Object.entries(selectedData).map(([key, value]) => (
            <div
              key={key}
              className="w-[23%] px-4 py-2 gap-4 bg-zinc-800 rounded-lg mb-5"
            >
              <p className="w-full text-xl text-zinc-500 font-semibold">
                {key}
              </p>
              <p className="w-full text-sm text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${isAdd ? `block bg-zinc-800 h-[95%]` : `hidden`}`}>
        <div>
          <div className="w-full flex justify-between items-center">
            <h1 className="gold-head text-2xl w-[30%] text-start font-semibold px-2 py-5">
              Add New User
            </h1>
            <div className="text-white text-2xl w-[5%] text-center">
              <RxCrossCircled onClick={close} />
            </div>
          </div>

          <div className="border border-b border-zinc-200"></div>
        </div>
        <div className="w-full flex justify-start flex-wrap py-5 mt-5">
          <Loader />
          <form onSubmit={handleSubmit}>
            <h3>React Validation Form</h3>

            <div>
              <label>Name*</label>
              <input type="text" name="name" onChange={handleInputChange} />
              {errors.name && <p className="text-red-800">{errors.name}</p>}
            </div>

            <div>
              <label>Email*</label>
              <input name="email" onChange={handleInputChange} />
            </div>

            <div>
              <label>Password*</label>
              <input name="password" onChange={handleInputChange} />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Table;
