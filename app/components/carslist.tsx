"use client";
import React from "react";

type CarsListProps = {
  response: any;
};
const Row = ({ item }: any) => {
  return (
    <tr className='hover'>
      <th>{item?.modelDetails.makeName + "-" + item?.modelDetails.modelName}</th>
      <td>{item?.userLocation.cityName || "Not Found"}</td>
      <td>{item?.modelDetails.priceOverview.formattedPrice || "Not Found"}</td>
      <td>{item?.modelDetails.priceOverview.formattedPriceRangeText || "Not Found"}</td>
    </tr>
  );
};
const CarsList = (props: CarsListProps) => {
  const { response } = props;
  console.log(response);

  return (
    <>
      <div className='mockup-code'>
        <pre>
          <code>
            {response.length > 0
              ? response.map((item: any) => {
                  return `${(item?.minPrice / 100000).toFixed(2)} `;
                })
              : "No car selected"}
          </code>
        </pre>
      </div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Model Name</th>

              <th>City</th>
              <th>Price Range 1</th>
              <th>Price Range 2</th>
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
    </>
  );
};

export default CarsList;
