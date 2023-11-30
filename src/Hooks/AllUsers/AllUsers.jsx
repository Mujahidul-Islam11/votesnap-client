import AxiosSecure from '../AxiosSecure/AxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const axiosSecure = AxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure?.get(`/users`);
      return res.data;
    }
  });

  return [users, refetch];
};

export default AllUsers;