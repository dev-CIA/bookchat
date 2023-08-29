import { useQueryClient, useMutation } from '@tanstack/react-query';

interface GenericMutationProps<TData, TVariables, TContext> {
  queryKey: string[];
  mutationFn: (variables: TVariables) => Promise<TData>;
  onMutate: (variables: TVariables) => Promise<TContext | undefined> | TContext | undefined;
}

const useGenericMutation = <TData, TVariables, TContext>({
  queryKey,
  mutationFn,
  onMutate: updater,
}: GenericMutationProps<TData, TVariables, TContext>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,

    async onMutate(variables) {
      await queryClient.cancelQueries({ queryKey });

      const previousDatas = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, updater(variables));

      return { previousDatas };
    },

    onError(error, variables, context) {
      queryClient.setQueryData(queryKey, context?.previousDatas);
    },
  });
};

export default useGenericMutation;
