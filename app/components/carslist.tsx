"use client";
import React from "react";

type CarsListProps = {
  response: any;
};
const Row = ({ item }: any) => {
  console.log(item.userLocation.cityName);
  return (
    <tr className='hover'>
      <th>{item?.modelDetails.makeName || "Not Found"}</th>
      <td>{item?.modelDetails.modelName || "Not Found"}</td>
      <td>{item?.userLocation.cityName || "Not Found"}</td>
      <td>{item?.modelDetails.priceOverview.formattedPrice || "Not Found"}</td>
      <td>{item?.modelDetails.priceOverview.formattedPriceRangeText || "Not Found"}</td>
    </tr>
  );
};
const CarsList = (props: CarsListProps) => {
  const { response } = props;

  // console.log(obj[0].modelDetails.makeName, "Compan");
  // console.log(obj[0].modelDetails.modelName);
  // console.log(obj[0].nearByCities[0].name);
  // console.log(obj[0].modelDetails.priceOverview.formattedPrice);
  // console.log(obj[0].modelDetails.priceOverview.formattedPriceRangeText);
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Model Maker</th>
            <th>City</th>
            <th>Price Lower</th>
            <th>Price Range</th>
          </tr>
        </thead>
        <tbody>
          {response.length > 0 ? (
            response.map((item: any) => {
              return <Row item={item} />;
            })
          ) : (
            <tr className='hover'>
              <td rowSpan={4}>No Cars Selected</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;
