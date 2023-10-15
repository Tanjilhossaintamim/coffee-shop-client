import { api } from "../api/api";

const coffeeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCoffees: builder.query({
      query: () => "/coffee",
    }),
    getCoffee: builder.query({
      query: (id) => `/coffee/${id}`,
    }),
    addCoffee: builder.mutation({
      query: (data) => ({
        url: "/coffee",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.insertedId) {
            dispatch(
              api.util.updateQueryData("getCoffees", undefined, (draft) => {
                arg._id = data.insertedId;
                draft.push(arg);
                console.log(arg);
              })
            );
          }
        } catch (err) {
          console.log("error");
        }
      },
    }),
    deleteCoffee: builder.mutation({
      query: (id) => ({
        url: `/coffee/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.deletedCount > 0) {
            dispatch(
              api.util.updateQueryData("getCoffees", undefined, (draft) => {
                const oldCoffee = draft.map((coffee) => coffee._id);
                const index = oldCoffee.indexOf(arg);
                draft.splice(index, 1);
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateCoffee: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/coffee/${_id}`,
        method: "PUT",
        body: data,
      }),
      async onQueryStarted({ _id, data }, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;

          if (res?.data?.modifiedCount > 0) {
            dispatch(
              api.util.updateQueryData("getCoffees", undefined, (draft) => {
                const updated = draft.find((coffe) => coffe._id == _id);

                Object.assign(updated, data);
              })
            );
            dispatch(
              api.util.updateQueryData("getCoffee", _id, (draft) => {
                Object.assign(draft, data);
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useAddCoffeeMutation,
  useGetCoffeesQuery,
  useDeleteCoffeeMutation,
  useUpdateCoffeeMutation,
  useGetCoffeeQuery,
} = coffeeApi;
