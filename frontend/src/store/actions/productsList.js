import { genericFilter, getCollection, getLatestProds } from '../../services/firebase';

export const getProdList = async (condition) => {
  let products = await genericFilter(condition);
  return {
    type: 'PROD_LIST',
    payload: { products, condition },
  };
};

export const getNewProds = async (condition) => {
  let products = await getLatestProds();
  return {
    type: 'PROD_LIST',
    payload: { products, condition },
  };
};

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS',
  };
};

export const updateFilter = async (filterObj) => {
  let filteredList = await genericFilter(filterObj);
  let error = !Array.isArray(filteredList);

  if (error) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',error);
    return {
      type: 'CLEAR_FILTERS',
    };
  }

  return {
    type: 'UPDATE_FILTER',
    payload: { filterObj, filteredList },
  };
};

export const clearFilters = () => {
  return {
    type: 'CLEAR_FILTERS',
  };
};
