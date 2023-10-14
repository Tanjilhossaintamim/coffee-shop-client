import { api } from "../api/api";

const coffeeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCoffees: builder.query({
      query: () => "/coffee",
    }),
    addCoffee: builder.mutation({
      query: (data) => ({
        url: "/coffee",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        console.log(arg);

        try {
          const { data } = await queryFulfilled;
          if (data?.insertedId) {
            dispatch(
              api.util.updateQueryData("getCoffees", undefined, (draft) => {
                console.log(draft);
                draft.push(arg);
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
  }),
});

export const {
  useAddCoffeeMutation,
  useGetCoffeesQuery,
  useDeleteCoffeeMutation,
} = coffeeApi;
