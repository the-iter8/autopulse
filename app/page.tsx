"use client";
import Navbar from "./components/navbar";
import CarsList from "./components/carslist";
import { fetchData } from "./utils/helpers";
import { CITY_IDS } from "./utils/constant";
import { useEffect, useState } from "react";
export default function Home() {
  const [currentModel, setCurrentModel] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [requiredCar, setRequiredCar]: any = useState(null);
  const [response, setResponse] = useState([]);

  const handleInputChange = (searchValue: any) => {
    setCurrentModel(searchValue);
    fetchSuggestions(searchValue);
  };

  const fetchSuggestions = async (currentModel: any) => {
    try {
      const apiUrl = `https://www.carwale.com/api/v3/autocomplete/?source=1%2C2%2C3%2C5%2C11%2C15%2C13%2C10%2C16%2C17%2C4%2C8%2C18%2C6%2C7&value=${currentModel}&size=10&showFeatured=false&isNcf=false&applicationId=1&showNoResult=true`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      const result = data.slice(0, 3).map((item: any) => ({
        bodyStyles: item.payload.bodyStyles,
        maskingName: item.payload.maskingName,
        makeMaskingName: item.payload.makeMaskingName,
      }));
      setSuggestions(result);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const handleFetchData = async (makeMaskingName: string, maskingName: string, cityIds: number[]) => {
      // To avoid uness calls.
      if (maskingName != undefined)
        try {
          const responses = await fetchData(makeMaskingName, maskingName, cityIds);
          // @ts-ignore
          setResponse(responses);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
    handleFetchData(requiredCar?.makeMaskingName, requiredCar?.maskingName, CITY_IDS);
  }, [requiredCar]);

  return (
    <main className='flex min-h-screen flex-col gap-8 p-4'>
      <Navbar
        setRequiredCar={setRequiredCar}
        handleInputChange={handleInputChange}
        currentModel={currentModel}
        suggestions={suggestions}
      />

      <h1 className='text-5xl text-center capitalize'>{requiredCar ? requiredCar.maskingName : "No Car Selected"}</h1>

      <CarsList response={response} />
    </main>
  );
}
