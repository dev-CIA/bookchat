import { useQueryClient, useMutation } from '@tanstack/react-query';

const useGenericMutation = ({ queryKey, mutationFn, updater }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,

    async onMutate(variables: type) {
      await queryClient.cancelQueries({ queryKey });

      const previousDatas = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, updater);

      return { previousDatas };
    },

    onError(error, variables, context) {
      queryClient.setQueryData(queryKey, context?.previousDatas);
    },
  });
};

export default useGenericMutation;
