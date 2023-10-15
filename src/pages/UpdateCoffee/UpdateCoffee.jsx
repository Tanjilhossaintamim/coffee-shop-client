import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetCoffeeQuery,
  useUpdateCoffeeMutation,
} from "../../redux/features/coffee/coffeeApi";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { id } = useParams();
  const { data } = useGetCoffeeQuery(id);
  const [updateCoffee, { isSuccess }] = useUpdateCoffeeMutation();
  const { _id, name, chef, price, photo, details, teste, supplier } =
    data || {};
  const handelAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const teste = form.teste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const data = { name, chef, supplier, teste, price, details, photo };
    updateCoffee({ _id, data });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Succes!",
        text: "Coffee Updated successfully ",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    }
  }, [isSuccess, navigate]);
  return (
    <div className=" py-20">
      <div className="max-w-[1360px] mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-color-cofee text-2xl max-w-[150px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
              stroke="#331A15"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Home</span>
        </Link>
        <div className="text-center">
          <h1 className="text-4xl text-[#374151]">Update Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="lg:w-[1320px] mx-auto py-7 rounded flex justify-center mt-9 bg-[#F4F3F0]">
          <form className="" onSubmit={handelAddCoffee}>
            <div className="flex flex-col lg:flex-row items-center gap-3 mb-3">
              <div className="flex flex-col  w-[536px] gap-1">
                <label className="text-xl text-color-dark2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={name}
                />
              </div>
              <div className="flex flex-col w-[536px] gap-1">
                <label className="text-xl text-color-dark2">Chef</label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={chef}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 mb-3">
              <div className="flex flex-col w-[536px] gap-1">
                <label className="text-xl text-color-dark2">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter supplier name"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={supplier}
                />
              </div>
              <div className="flex flex-col w-[536px] gap-1">
                <label htmlFor="chef" className="text-xl text-color-dark2">
                  Taste
                </label>
                <input
                  type="text"
                  name="teste"
                  placeholder="Enter coffee taste"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={teste}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 mb-3">
              <div className="flex flex-col w-[536px] gap-1">
                <label className="text-xl text-color-dark2">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter coffee Price"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={price}
                />
              </div>
              <div className="flex flex-col w-[536px] gap-1">
                <label htmlFor="chef" className="text-xl text-color-dark2">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="h-12 px-2 rounded"
                  required
                  defaultValue={details}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label className="text-xl text-color-dark2">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter coffee photo url"
                className="h-12 px-2 rounded"
                required
                defaultValue={photo}
              />
            </div>
            <div>
              <input
                type="submit"
                value="Update Coffee"
                // disabled={isLoading}
                className="text-4xl h-14 bg-color-chocklet w-full mt-3 rounded cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
