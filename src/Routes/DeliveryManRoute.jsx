import useAuth from '@/Components/Hooks/useAuth';
import useDeliveryMan from '@/Components/Hooks/useDeliveryMan';
import Loading from '@/Components/Shared/Loading';
import React from 'react';
import { useLocation } from 'react-router-dom';

const DeliveryManRoute = ({children}) => {
    const {user, loading} = useAuth();
const [isDeliveryMan,isDeliveryManLoading] = useDeliveryMan()
  const location = useLocation()
  if (loading || isDeliveryManLoading) {
    return <Loading></Loading>
  }
  if (user && isDeliveryMan) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default DeliveryManRoute;