import React from "react";

function DataTable({ funding }) {
  console.log(funding);

  let filterOutWords = [
    "housing",
    "community",
    "grant",
    "developers",
    "projects",
    "low",
  ];

  function rateSucces(word) {
    return word?.filter((word) => filterOutWords.includes(word)).length;
  }

  let results = funding
    .map((e) => {
      return {
        ...e,
        rating: rateSucces(e.Words),
      };
    })
    .sort((a, b) => b.rating - a.rating);

  const currDate = new Date();

  function getColor(value) {
    if (value > 20) {
      return "green";
    } else if (value > 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                PreviousId
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                ApplicationLink
              </th>
              <th scope="col" className="px-6 py-3">
                Resource
              </th>
              <th scope="col" className="px-6 py-3">
                Funding Success Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                StartDate
              </th>
              <th scope="col" className="px-6 py-3">
                EndDate
              </th>
              <th scope="col" className="px-6 py-3">
                CreatedAt
              </th>
              <th scope="col" className="px-6 py-3">
                UpdatedAt
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((fun, index) => (
              <tr
                key={index}
                className="text-black border-b-2 border-black my-2"
              >
                <td className="text-center">{index + 1}</td>
                <td></td>
                <td data-label="link">
                  <a href={fun.Link} target="_blank" className="text-blue-600">
                    {fun.Link}
                  </a>
                </td>
                <td></td>
                <td>{fun.Resource}</td>
                <td
                  className="text-center font-bold"
                  style={{ color: getColor(fun.rating) }}
                >
                  {fun.rating}
                </td>
                <td className="py-2">{fun.Description}</td>
                <td></td>
                <td></td>
                <td className="text-center">
                  {fun.CreatedAt ?? currDate.toLocaleDateString()}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
