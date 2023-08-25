import { useQueryClient, useMutation } from '@tanstack/react-query';

const useGenericMutation = ({ queryKey, mutationFn, updater }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,

    async onMutate(variables: type) {
      await queryClient.cancelQueries({ queryKey });

      const previousDatas = queryClient.getQueryData(queryKey);
      queryClient.setQueriesData(queryKey, updater);

      return { previousDatas };
    },
  });
};

export default useGenericMutation;
